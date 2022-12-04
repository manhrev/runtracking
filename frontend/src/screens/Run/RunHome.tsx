import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Button, IconButton, SegmentedButtons, Text } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";
import { baseStyles } from "../baseStyle";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";

import React, { useState, useEffect } from 'react';
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
    const [pace, setPace] = useState(0); // seconds per km


    useEffect(() => {
        if(coordinates.length == 1 && coordinates[0].latitude == 0 && coordinates[0].longitude == 0) {
            // set location as first coordinate
            setCoordinates([location]);
        }
        else setCoordinates([...coordinates, location]);

        // calculate distance from 2 points
        if(coordinates.length > 1) {
            const distance = getDistance(coordinates[coordinates.length - 2], coordinates[coordinates.length - 1]);
            setTotalDistance(totalDistance + distance);
            console.log('=>>>> Distance: ', totalDistance);
        }

    }, [location]);

    // time calculation every 1 second
    useEffect(() => {
        // calculate pace
        const pace = (totalTime / totalDistance) * 1000;
        setPace(Math.floor(pace)); // seconds per km
        
        const interval = setInterval(() => {
            setTotalTime(totalTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [totalTime]);

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
            // red
            strokeColor="#f00"
            // width
            strokeWidth={4}
            />
        </MapView>
        <View
            style={{
                position: 'absolute',//use absolute position to show button on top of the map
                bottom: '0%', //for center align
                alignSelf: 'flex-end' //for align to right
            }}
        >
            {/* <Button onPress={() => getLocation()} title="Get Location" /> */}
        </View>
        
        
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
  });
