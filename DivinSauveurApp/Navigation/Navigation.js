import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer'

import Icon from 'react-native-vector-icons/Foundation'

import Login from '../Component/Login'
import Inscription from '../Component/Inscription.js'
import Calendrier from '../Component/Calendrier.js'
import Boutique from '../Component/Boutique.js'
import Conversation from '../Component/Conversation.js'
import Camp from '../Component/Camp.js'
import Listing from '../Component/Listing.js'
import Photos from '../Component/Photos.js'
import Documents from '../Component/Documents.js'
import Presentation from '../Component/Presentation.js'



const DrawerNavigator = createDrawerNavigator({
    Calendrier: {
        screen: Calendrier,
        navigationOptions: {
            title: "Calendrier",
            //     drawerIcon: () => { 
            //     return <Image
            //         source={require('../IMG/Icon/calendrier.png')}
            //         style={styles.icon}/>
            //   }
        }
    },
    Boutique: {
        screen: Boutique,
        navigationOptions: {
            title: "Boutique"
        }
    },
    Conversation: {
        screen: Conversation,
        navigationOptions: {
            title: "Conversations"
        }
    },
    Camp: {
        screen: Camp,
        navigationOptions: {
            title: "Camps"
        }
    },
    Listing: {
        screen: Listing,
        navigationOptions: {
            title: "Listings"
        }
    },
    Photos: {
        screen: Photos,
        navigationOptions: {
            title: "Photos"
        }
    },
    Documents: {
        screen: Documents,
        navigationOptions: {
            title: "Documents"
        }
    },
    Presentation: {
        screen: Presentation,
        navigationOptions: {
            title: "Présentation"
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
      alignItems:'left',
    },
    contentOptions:{
        activeTintColor: '#99B2D0',
        inactiveTintColor: 'white',
        activeBackgroundColor :'#26355C',
    }
})

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
    icon: {
        width: 30,
        height: 30
      }
  });

export default createAppContainer(StackNavigator)