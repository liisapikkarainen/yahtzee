import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Home from "./components/Home";
import Gameboard from "./components/Gameboard";
import Scoreboard from "./components/Scoreboard";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" size={size} color={color} />
            ),
          }} 
        />
        <Tab.Screen name="Gameboard" component={Gameboard} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-game-controller-outline" size={size} color={color} />
            ),
          }} 
        />
        <Tab.Screen name="Scoreboard" component={Scoreboard} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-outline" size={size} color={color} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
