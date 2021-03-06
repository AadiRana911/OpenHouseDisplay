import Home from './src/screens/Home'
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();        
const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator screenOptions= {{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;