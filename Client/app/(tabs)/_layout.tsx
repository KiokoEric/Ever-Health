import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            height: 68,         
            paddingBottom: 2,  
            paddingTop: 2,   
          },
        }),
      }}
      >
      <Tabs.Screen
        name="Exercise"
        options={{
          title: 'Exercise',
          tabBarLabelStyle: { fontFamily: 'InstrumentSerif', fontSize: 18 },
          tabBarIcon: () => (
          <Image
            source={require("../../assets/Images/Dumbbell.avif")}
            style={{ width: 45, height: 45, borderRadius: 8 }}
            resizeMode="contain"
          />
          )
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabelStyle: { fontFamily: 'InstrumentSerif', fontSize: 18 },
          tabBarIcon: () => (
          <Image
            source={require("../../assets/Images/Home.jpg")}
            style={{ width: 35, height: 35, borderRadius: 8 }}
            resizeMode="contain"
          />
          )
        }}
      />
      <Tabs.Screen
        name="Recipes"
        options={{
          title: 'Recipes',
          tabBarLabelStyle: { fontFamily: 'InstrumentSerif', fontSize: 18 },
          tabBarIcon: () => (
          <Image
            source={require("../../assets/Images/Bowl.jpg")}
            style={{ width: 30, height: 30, borderRadius: 8 }}
            resizeMode="contain"
          />
          )
        }}
      />
    </Tabs>
  );
}
