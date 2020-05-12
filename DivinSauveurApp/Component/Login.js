import React from 'react'

import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, StatusBar, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class Login extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            MailUtilisateur: '',
            MDPUtilisateur: ''
        }
      }

    login = () =>{
        fetch("https://divinsauveur.com/API/apiLogin.php", {
            method: "POST",
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                MailUtilisateur: this.state.MailUtilisateur,
                MDPUtilisateur: this.state.MDPUtilisateur
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson == true){
                this.props.navigation.navigate("Calendrier")
            }
            else {
                Alert.alert("Aïe.. Vous vous êtes trompé quelque part..");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }
    render() {

    const {navigate} = this.props.navigation;

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
                        <Text style={styles.text}>
                            Bienvenue sur l'application de la 10ième unité Divin Sauveur !
                        </Text>
                    </View>

                    <View style={styles.mid}>
                    <KeyboardAwareScrollView>
                        <TextInput 
                            style={styles.input}
                            placeholder="Introduisez votre adresse mail" 
                            selectionColor = "#26355C"
                            keyboardType = "email-address"
                            onSubmitEditing={() => this.password.focus()}
                            onChangeText = {data => this.setState({ MailUtilisateur: data })}
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder="Introduisez votre adresse mot de passe" 
                            secureTextEntry={ true }
                            autoCorrect={false} 
                            selectionColor = "#26355C"
                            ref={(input) => this.password = input}
                            onChangeText = {data => this.setState({ MDPUtilisateur: data })} 
                        />

                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={this.login}>
                            <Text style={styles.buttonText}>Connexion</Text>
                        </TouchableOpacity>
                            
                        <Text 
                            onPress={() => navigate('Inscription')} 
                            style={styles.CCompte}>
                            Se créer un compte
                        </Text>
                        </KeyboardAwareScrollView>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'lightgrey'
    },
    top: {
        flex:0.8,
        alignItems:'center',
        justifyContent:'center'
    },
    mid: {
        flex:1,
        alignItems:'center'
    },
    logo: {
        width:250,
        height:250,
    },
    input: {
        borderRadius:17,
        backgroundColor:"#99B2D0",
        height:50,
        width:300,
        marginVertical:10,
        paddingHorizontal:10
    },
    button: {
        backgroundColor:'#26355C',
        marginBottom:20,
        marginTop:20,
        paddingVertical:15,
        borderRadius:17,
        height:50,
        width:300,
    },
    buttonText: {
        backgroundColor:'#26355C',
        paddingVertical:2,
        borderRadius:10,
        textAlign: 'center',
        color:'white',
        fontWeight: '800'
    },
    text: {
        textAlign: 'center',
        color:'#26355C',
        fontWeight: 'bold'
    },
    CCompte:{
        textDecorationLine: 'underline',
        paddingRight:165
    },
})

export default Login