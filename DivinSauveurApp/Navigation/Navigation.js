import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import APropos from '../Component/Login'



const DrawerNavigator = createDrawerNavigator({

  Calendrier: {
    screen: Calendrier,
    navigationOptions: ({ navigation }) => ({
      title: 'Calendrier Screen',
      drawerLabel: 'Calendrier',
      drawerIcon: () => <Icon name="calendar" size={20} color='#fff' />
    })
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
        const { state } = navigation;


            return {
            header: ({titleStyle}) =>(
                <SafeAreaView style={styles.main_container}>
                    <View style={styles.title_container}>
                    <Text style={styles.title_text_people}>People</Text><Text style={styles.title_text_flux}>Flux</Text>
                    <TouchableOpacity style={styles.menuOpen} onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
                    <Icon name="list"  size={50} color='#fff' />
                    </TouchableOpacity>
                    </View>
                </SafeAreaView>


            )

            }

        }
    },
})


const styles = StyleSheet.create({

  main_container:{
    backgroundColor: '#232531'
  }
});

export default createAppContainer(StackNavigator);