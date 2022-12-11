import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Button, Divider, IconButton, SegmentedButtons, Text } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";
import { baseStyles } from "../baseStyle";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";

import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { getDistance } from 'geolib';
import Monitor from './comp/Monitor';


export default function Run({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, "RunHome">) {
    const theme = useAppTheme();

    const [coordinates, setCoordinates] = useState([{
        latitude: 0,
        longitude: 0,
        isStop: 0,
    }]);

    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
        isStop: 0,
    });

    // focus mode
    const [focusMode, setFocusMode] = useState(false);

    // some info
    const [totalDistance, setTotalDistance] = useState(0);
    const [totalTime, setTotalTime] = useState(0); // seconds
    const [userState, setUserState] = useState("ready"); // ready, running, paused, stopped
    const [pace, setPace] = useState(0); // seconds per km


    useEffect(() => {
        if(coordinates.length == 1 && coordinates[0].latitude == 0 && coordinates[0].longitude == 0) {
            // set location as first coordinate
            setCoordinates([{
                latitude: location.latitude,
                longitude: location.longitude,
                isStop: 1,
            }]);
        }
        else if(userState == "running") {
            setCoordinates([...coordinates, location]);

            // calculate distance from 2 points
            if(coordinates.length > 1 && coordinates[coordinates.length - 2].isStop != 1) {
                const distance = getDistance(coordinates[coordinates.length - 2], coordinates[coordinates.length - 1]);
                setTotalDistance(totalDistance + distance);
            }
        }
            

        console.log('=>>>> Distance: ', totalDistance);
        console.log('State: ', userState);

        if(focusMode) {
            getLocation(); // move the map to current location
        }
            
    }, [location]);

    // time calculation every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            if(userState == "running") {
                // calculate pace
                if(totalDistance == 0) setPace(0);
                else {
                    const pace = (totalTime / totalDistance) * 1000;
                    setPace(Math.floor(pace)); // seconds per km
                }
                

                setTotalTime(totalTime + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [totalTime, userState]);

    useEffect(() => {
        (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }

        await Location.watchPositionAsync({
            accuracy: Location.Accuracy.High,
            distanceInterval: 1,
        }, (location) => {
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                isStop: 0,
            });
        });

        
        })();
    }, []);

    // center map to current location
    const mapRef = useRef<MapView>(null);

    const getLocation = () => {
        if(mapRef.current) {
            mapRef.current.animateToRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.002,
                longitudeDelta: 0.003,
            });
        }
    }

    // state control
    const startOrPause = () => {
        if(userState == "ready") {
            setUserState("running");
        }
        else if(userState == "running") {
            setUserState("paused");
            // set last coordinate as stop point
            let lastCoordinate = {
                latitude: coordinates[coordinates.length - 1].latitude,
                longitude: coordinates[coordinates.length - 1].longitude,
                isStop: 1,
            }
            setCoordinates([...coordinates, lastCoordinate]);
        }
        else if(userState == "paused") {
            setUserState("running");
        }
    }

    const stopRun = () => {
        setUserState("paused");
        navigation.navigate("RunResult", {
            display :{
                distance: formatForDisplay("distance-km", totalDistance),
                time: formatForDisplay("time", totalTime),
                pace: formatForDisplay("pace", pace),
                kcal: "525",
            }
            
        });
    }


    // convert array of coordinates to multi polyline
    const arrayToMultiPolyline = (coordinates: any) => {
        const multiPolyline = [];
        let polyline:any = [];
        coordinates.forEach((coordinate: any) => {
            if(coordinate.isStop == 0) {
                polyline.push({
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude,
                });
            }
            else {
                multiPolyline.push(polyline);
                polyline = [];
            }
        });
        multiPolyline.push(polyline);
        return multiPolyline;
    }

    // format convert
    const formatForDisplay = (type: string, value: number) => {
        if(type == "time") {
            const timeMin = Math.floor(value / 60) < 10 ? '0' + Math.floor(value / 60) : Math.floor(value / 60);
            const timeSec = ('0' + (value % 60)).slice(-2);
            return timeMin + ':' + timeSec;
        }
        else if(type == "distance") {
            return (value / 1000) < 10 ? '0' + (value / 1000).toFixed(2).replace('.', ':') : (value / 1000).toFixed(2).replace('.', ':');
        }
        else if(type == "distance-km") {
            return (value / 1000).toFixed(2);
        }
        else if(type == "pace") {
            const paceMin = Math.floor(value / 60) < 10 ? '0' + Math.floor(value / 60) : Math.floor(value / 60);
            const paceSec = ('0' + (value % 60)).slice(-2);
            return paceMin + ':' + paceSec;
        }
        return "Wrong type";
    }

    return (
        <View style={styles(theme).container}>
            <Monitor
                userState={userState == "ready" ? "Ready" : userState == "running" ? "Running" : "Paused"}
                displayTime={formatForDisplay("time", totalTime)}
                displayDistance = {formatForDisplay("distance", totalDistance)}
                displayPace={formatForDisplay("pace", pace)}
                displayKcal={525}
            />
            <Divider style={{height: 1}} />
            <MapView
                ref={mapRef}
                style={styles(theme).map}
                initialRegion={{
                    latitude: 10.87839,
                    longitude: 106.80632,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                >
                <Marker
                    coordinate={location}
                    title="Your Location"
                    pinColor='purple'
                    
                />
                {
                    arrayToMultiPolyline(coordinates).map((polyline, index) => (
                        <Polyline
                            key={index}
                            coordinates={polyline}
                            strokeColor="#f00"
                            strokeWidth={4}
                        />
                    ))
                }
            </MapView>
            
            <IconButton // focus button
                style={styles(theme).focusBtn}
                icon="image-filter-center-focus-strong"
                mode="outlined"
                size={26}
                iconColor={focusMode ? "red" : "black"}
                containerColor="white"
                onPress={() => setFocusMode(!focusMode)}
            />

            <IconButton // get location button
                style={styles(theme).getLocationBtn}
                icon="crosshairs-gps"
                mode="outlined"
                size={26}
                iconColor="black"
                containerColor="white"
                onPress={() => getLocation()}
            />

            <IconButton // start button
                style={styles(theme).startBtn}
                icon={(userState == "ready" || userState == "paused") ? "arrow-right-drop-circle" : "pause-circle"}
                mode="outlined"
                size={36}
                iconColor="green"
                containerColor="white"
                onPress={() => startOrPause()}
            />
            {
                userState == "paused" ? (
                    <IconButton // paused button
                        style={styles(theme).stopBtn}
                        icon="stop"
                        mode="outlined"
                        size={36}
                        iconColor="red"
                        containerColor="white"
                        onPress={() => stopRun()}
                    />
                ) : null
            }
        </View>
    );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    getLocationBtn: {
        position: 'absolute',
        bottom: '10%',
        right: '1%',
        alignSelf: 'flex-end' // for align to right
    },
    startBtn: {
        position: 'absolute',
        bottom: '10%',
        left: '1%',
        alignSelf: 'flex-start' // for align to left
    },
    stopBtn: {
        position: 'absolute',
        bottom: '10%',
        left: '15%',
        alignSelf: 'flex-start' // for align to left
    },
    focusBtn: {
        position: 'absolute',
        bottom: '20%',
        right: '1%',
        alignSelf: 'flex-end' // for align to right
    }
});
