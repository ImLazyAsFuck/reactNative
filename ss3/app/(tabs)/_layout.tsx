import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0066FF',
        tabBarInactiveTintColor: '#666',
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#E1E1E1',
          },
          android: {
            backgroundColor: '#ffffff',
            elevation: 4,
          },
          default: {
            backgroundColor: '#ffffff',
          },
        }),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'E1-E5',
          tabBarLabel: 'Bài 1-5',
        }}
      />
      <Tabs.Screen
        name="e6"
        options={{
          title: 'E6',
          tabBarLabel: 'Bài 6',
        }}
      />
      <Tabs.Screen
        name="e8"
        options={{
          title: 'E8',
          tabBarLabel: 'Bài 8',
        }}
      />
    </Tabs>
  )
}
