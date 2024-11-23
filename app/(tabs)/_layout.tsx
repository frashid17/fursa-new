import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true, // Hide headers for tabs
      }}
    >
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Fursa',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name='contact-us'
        options={{
        title:'contact us',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="mail" size={28} color={color} />
        ),
      }}
      />
      
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={28} color={color} />
          ),
        }}
      />

     
    </Tabs>
  );
}
