import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

import Calendrier from '../Component/Calendrier.js';
import Boutique from '../Component/Boutique.js';



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
);

const StackNavigator = createStackNavigator({
    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: ({ navigation }) => {
            const { } = navigation;
  
  
            return {
                header: ({ }) =>(
                    <SafeAreaView style={styles.main_container}>
                        <View>
                            <Text>Divin Sauveur </Text>
                            <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}></TouchableOpacity>
                        </View>
                    </SafeAreaView>
                )
  
            } 
        }
    }
});

const styles = StyleSheet.create({
    main_container: {
    
        flex: 1,
        flexDirection: "column"
    },
    }
);
  

export default createAppContainer(StackNavigator);