import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import StoryScreen from '../../screens/StoryScreen/index';
// import BottomHomeNavigation from './bottomHomeNavigation';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import CartScreen from '../screens/CartScreen';
const Routes = () => {
    const RootStack = createStackNavigator();

    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Cart"
                component={CartScreen}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
}
export default Routes;