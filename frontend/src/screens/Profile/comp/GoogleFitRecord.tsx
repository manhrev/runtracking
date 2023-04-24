import { Button, StyleSheet, View } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { selectUserSlice } from '../../../redux/features/user/slice'
import { useAppSelector } from '../../../redux/store'
import { AppTheme, useAppTheme } from '../../../theme'
import { baseStyles } from '../../baseStyle'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect, useState } from 'react'
import GoogleFit, { Scopes }  from 'react-native-google-fit';
import * as Updates from 'expo-updates'
import { SCOPES, User } from '../../../constants/googleapi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { googleAuthClient, googleFitClient } from '../../../utils/rest'
import { GOOGLE_ACCESS_TOKEN } from '../../../utils/rest/abstract/restClient'
import { SocialIcon } from 'react-native-elements'
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
//   } from '@react-native-google-signin/google-signin';
const runOptions = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_ACTIVITY_WRITE,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_LOCATION_READ,
    ]
  };

export default function GoogleFitRecord() {
  const theme = useAppTheme()
    WebBrowser.maybeCompleteAuthSession();
    const [isSignedIn, setIsSignedIn] = useState(false)

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '804907557897-42i6bicgec6p9e651538ue4p7s9lbgla.apps.googleusercontent.com',
        expoClientId: '804907557897-5do8aq57fheeu8k84puq0fhiu6o3j79c.apps.googleusercontent.com',
        // redirectUri: 'https://auth.expo.io/@manhrev/runtracking/redirect',
        scopes: ['profile', 'email',
          SCOPES.FITNESS_ACTIVITY_READ,
          SCOPES.FITNESS_ACTIVITY_WRITE],
        
      });

      

      useEffect(() => {
        if (response?.type === "success" && response.authentication) {
          const token = response.authentication.accessToken || ''
          AsyncStorage.setItem(GOOGLE_ACCESS_TOKEN, token)
          setIsSignedIn(true)
        }
      }, [response]);

      // Get me and check user authorized or not 
      useEffect(() => {
        getUserInfo().then(() => {
          listDevices()
        })
       }, [])

      const getUserInfo = async() => {
        try{
         const user =  await googleAuthClient.getMe()
         setIsSignedIn(true)
        }
        catch(error){
          setIsSignedIn(false)
          console.log("UNAUTHORIZED OR ERROR WHEN AUTHORIZE USER")
        }
      }

      const listDevices = async()  => {
        try{
          const dataSourceList = await googleFitClient.listDataSources()
          // console.log(dataSources)
          if(dataSourceList.dataSource != null){
          const dataDevices = dataSourceList.dataSource.
                filter(dataSource => dataSource.device != null).
                map(dataSource => dataSource.device)
          return dataDevices
        }
          return []
        }
        catch(error){
          console.log(error)
        }
      }

      // const getUserInfo = async () => {
      //   try {
      //     const response = await fetch(
      //       "https://www.googleapis.com/userinfo/v2/me",
      //       {
      //         headers: { Authorization: `Bearer ${token}` },
      //       }
      //     );
      //     const userJSON = JSON.stringify(await response.json())
      //     const user : User = JSON.parse(userJSON)
      //   //   setUserInfo(user);
      //   console.log(user.name)
      //   console.log(token)
      //   } catch (error) {
      //     // Add your own error handler here
      //     console.log(error)
      //   }
      // };

     
    
  return (
    <View style={styles(theme).extendedBaseContainer}>
      <View style={baseStyles(theme).innerWrapper}>
        {isSignedIn ? 
        <Text>dasds</Text>
        : 
            <SocialIcon
            title='Sign in with Google'
            button
            light
            type='google'
            iconColor='black'
            underlayColor="black"
            onPress={() => {
              promptAsync();
            }}
            style={{
              marginTop: 100
          }}
            /> 
            } 
      </View>
    </View>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    extendedBaseContainer: {
      ...baseStyles(theme).container,
      flex: 0,
    },
    infoValue: {
      paddingHorizontal: 20,
    },
    infoValueListItem: {
      display: 'flex',
      flexDirection: 'row',
      paddingVertical: 8,
    },
  })
