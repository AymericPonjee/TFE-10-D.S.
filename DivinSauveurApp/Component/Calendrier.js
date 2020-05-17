import React from 'react'
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native'


class Calendrier extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            data: ''
        }
      }

      Calendrier = () =>{
        fetch("https://divinsauveur.com/API/apiCalendrier.php", {
            method: "GET",
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({
                data: responseJson
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (

            <View  style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                />

                <View style={styles.top}>
                    <Image 
                        style={styles.logo}
                        source={require('../IMG/Logo/DivinSauveur.png')}
                    />
                </View>

                <View style={styles.mid}>
                    <Text style={styles.titre}>
                        Calendrier
                    </Text>
                </View>

                <View style={styles.bot}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'lightgrey'
    },
    top: {
        flex:0.3,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    mid: {
        flex:0.1
    },
    bot: {
        flex:1,
        alignItems:'center'
    },
    logo: {
        width:150,
        height:150,
    },
    titre: {
        color:'#26355C',
        fontWeight: 'bold',
        marginLeft:25,
        fontSize: 30
    }
});

export default Calendrier