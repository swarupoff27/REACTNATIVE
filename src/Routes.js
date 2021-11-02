import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Stack = createStackNavigator();
const Tabs = createStackNavigator();


import Login from './pages/Login';
import GenerateOTP from './pages/GenerateOTP';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import EnterOTP from './pages/EnterOTP';


const Routing = () => {

    return(

        <Stack.Navigator initialRouteName={Login}>

            <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
            <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup' }}/>
            <Stack.Screen name="GenerateOTP" component={GenerateOTP} options={{ title: 'Generate OTP' }}/>
            <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }}/>
            <Stack.Screen name="Gotoprofile" component={Profile} options={{ title: 'Profile' }}/>
            <Stack.Screen name="Next" component={Profile} options={{ title: 'Profile' }}/>
            <Stack.Screen name="Logout" component={Login} options={{ title: 'Login' }}/>
            <Stack.Screen name="Enter OTP" component={EnterOTP} options={{ title: 'Enter OTP' }}/>
            
        </Stack.Navigator>
  )
}


export default function Routes() {
  return(

    <NavigationContainer >
        <Tabs.Navigator screenOptions={{headerShown: false}}>
            
            <Tabs.Screen name="Routing" component={Routing}/>
            
        </Tabs.Navigator>
    </NavigationContainer>
        
    );

}