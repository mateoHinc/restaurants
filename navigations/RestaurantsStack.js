import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Restaurants from '../screens/restaurants/Restaurants'
import addRestaurant from '../screens/restaurants/addRestaurant'

const Stack = createStackNavigator()

export default function RestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="restaurants"
                component={Restaurants}
                options={{ title: "Restaurantes" }}
            />
            <Stack.Screen
                name="add-Restaurant"
                component={addRestaurant}
                options={{ title: "Crear Restaurante" }}
            />
        </Stack.Navigator>
    )
}
