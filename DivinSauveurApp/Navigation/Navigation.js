import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer'

import Login from '../Component/Login'
import Calendrier from '../Component/Calendrier.js'
import Boutique from '../Component/Boutique.js'
import Inscription from '../Component/Inscription.js'



const DrawerNavigator = createDrawerNavigator({
    Calendrier: {
        screen: Calendrier,
        navigationOptions: {
            title: "Calendrier"
        }
    },

    Boutique: {
        screen: Boutique,
        navigationOptions: {
            title: "Boutique"
        }
    }
},

    {
        drawerPosition: 'right',
        drawerType: 'slide',
        drawerBackgroundColor: '#232531',
        drawerWidth: 170,
        contentOptions:{
            activeTintColor: '#c70039',
            inactiveTintColor: '#fff',
            activeBackgroundColor :'#4B4C56',
        }
    }
)

const StackNavigator = createStackNavigator({ 

    Login: { 
        screen: Login,
        navigationOptions: {
            title: 'Login',
            headerShown: false
        }
    },
    Calendrier: { 
        screen: DrawerNavigator,
        navigationOptions: {
            title: 'Calendrier',
            headerShown: false
        }
    },
    Inscription: { 
        screen: Inscription,
        navigationOptions: {
            title: 'Inscription',
            headerShown: false
        }
    },

})
  

export default createAppContainer(StackNavigator)