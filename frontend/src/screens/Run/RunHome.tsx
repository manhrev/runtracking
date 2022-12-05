import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Button, IconButton, SegmentedButtons, Text } from "react-native-paper";
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
    }]);

    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    });

    // some info
    const [totalDistance, setTotalDistance] = useState(0);
    const [totalTime, setTotalTime] = useState(0); // seconds
    const [userState, setUserState] = useState("ready"); // ready, running, paused, stopped
    const [pace, setPace] = useState(0); // seconds per km


    useEffect(() => {
        if(coordinates.length == 1 && coordinates[0].latitude == 0 && coordinates[0].longitude == 0) {
            // set location as first coordinate
            setCoordinates([location]);
        }
        else if(userState == "running") {
            setCoordinates([...coordinates, location]);

            // calculate distance from 2 points
            if(coordinates.length > 1) {
                const distance = getDistance(coordinates[coordinates.length - 2], coordinates[coordinates.length - 1]);
                setTotalDistance(totalDistance + distance);
            }
        }

        console.log('=>>>> Distance: ', totalDistance);
        console.log('State: ', userState);

    }, [location]);

    // time calculation every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            if(userState == "running") {
                // calculate pace
                const pace = (totalTime / totalDistance) * 1000;
                setPace(Math.floor(pace)); // seconds per km

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
            });
            // console.log(location);
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
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
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
        }
        else if(userState == "paused") {
            setUserState("running");
        }
    }

    const stopRun = () => {
        setUserState("paused");
        console.log('Run stopped !!!');
    }

    return (
        <View style={styles(theme).container}>
            <Monitor
                userState="Running"
                timeMin={Math.floor(totalTime / 60) < 10 ? '0' + Math.floor(totalTime / 60) : Math.floor(totalTime / 60)}
                timeSec={('0' + (totalTime % 60)).slice(-2)}
                distance = {(totalDistance / 1000) < 10 ? '0' + (totalDistance / 1000).toFixed(2).replace('.', ':') : (totalDistance / 1000).toFixed(2).replace('.', ':')}
                paceMin={Math.floor(pace / 60) < 10 ? '0' + Math.floor(pace / 60) : Math.floor(pace / 60)}
                paceSec={('0' + (pace % 60)).slice(-2)}
            />
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
                <Polyline
                    coordinates={coordinates}
                    strokeColor="#f00"
                    strokeWidth={4}
                />
            </MapView>

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
});
