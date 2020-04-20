import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer'

import Icon from 'react-native-vector-icons/Foundation'

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
    },
},

{
    drawerPosition: 'right',
    drawerType: 'slide',
    drawerBackgroundColor: '#26355C',
    drawerWidth: 150,
    style: {
      marginTop: 60,
      alignItems:'center'
    },
    contentOptions:{
        activeTintColor: '#99B2D0',
        inactiveTintColor: 'white',
        activeBackgroundColor :'#26355C',
    }
})

const StackNavigator = createStackNavigator({ 
    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: ({ navigation }) => {
            const { state } = navigation;
            return {
                header: ({titleStyle}) =>(
                        <View style={styles.nav}>                
                            <TouchableOpacity style={styles.menuOpen} onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
                                <Icon name="list"  size={50} color='#26355C' />
                            </TouchableOpacity>
                        </View>
                )
            }
        }
    },
    
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
    }
})

const styles = StyleSheet.create({
    nav:{
        flexDirection:'row',
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuOpen: {
        paddingTop:150,
        position: 'absolute',
        right: 30
    },
  });

export default createAppContainer(StackNavigator)