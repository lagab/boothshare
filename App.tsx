import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { FC, useEffect, useRef, useState } from 'react';
import Constants from "expo-constants";
import Button from './src/components/Button';
import EventListScreen from './src/screens/EventListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bell, CalendarDays, Cog, PlusCircle } from 'lucide-react-native';
import CameraScreen from './src/screens/CameraScreen';

const Tab = createBottomTabNavigator ();

const MyTabs: FC = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, tabBarActiveTintColor: 'red', tabBarStyle:{ 
      position: 'absolute',
      bottom: 0,
      left: 10,
      right:10,
      elevation: 2,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderRadius:15 } }} >
      <Tab.Screen name="Events" component={EventListScreen}  options={{ 
        headerStyle: {
          height: 0, // Specify the height of your custom header
        }, 
        tabBarIcon: ({ color }) => (
         <CalendarDays  size={ 26 } color={ color }/>
        ) 
        }} />
      <Tab.Screen name="Home" component={CameraScreen}  options={{ 
        tabBarStyle: { display: "none" },
        headerStyle: {
          height: 0, // Specify the height of your custom header
        }, 
        tabBarIcon: ({ color }) => (
         <PlusCircle size={ 26 } color={ color }/>
        ) 
        }} />
        <Tab.Screen name="Home2" component={EventListScreen}  options={{ 
        headerStyle: {
          height: 0, // Specify the height of your custom header
        }, 
        tabBarIcon: ({ color }) => (
         <Cog size={ 26 } color={ color }/>
        ) 
        }} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ddd",
    padding: 8,
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#E9730F",
    marginLeft: 10,
  },
  topControls: {
    flex: 1,
  },
});
