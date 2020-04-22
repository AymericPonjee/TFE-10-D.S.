import React from 'react'
import { TextInput, StyleSheet, View, Text, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native'



class Login extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {

        }
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
                        <KeyboardAvoidingView> 
                            <TextInput  
                                placeholder="Nom d'utilisateur"
                                placeholderTextColor="#26355C"
                                onSubmitEditing={() => this.passwordInput.focus()}
                                style={styles.input}
                            />

                            <TextInput  
                                placeholder="Mot de passe"
                                placeholderTextColor="#26355C"
                                ref={(input) => this.passwordInput = input}
                                secureTextEntry
                                style={styles.input}
                            />

                            <TouchableOpacity style={styles.button} onPress={() => navigate('Calendrier')}>
                                <Text style={styles.buttonText}>Connexion</Text>
                            </TouchableOpacity>
                            
                            <Text onPress={() => navigate('Inscription')} style={styles.CCompte}>
                                Se créer un compte
                            </Text>
                        </KeyboardAvoidingView>
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
        height:40,
        backgroundColor:"#99B2D0",
        marginBottom:20,
        color:'#26355C',
        paddingHorizontal:100,
        borderRadius:10
    },
    button: {
        backgroundColor:'#26355C',
        marginBottom:20,
        marginTop:20,
        paddingVertical:15,
        borderRadius:10
    },
    buttonText: {
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
        textDecorationLine: 'underline'
    },
})

export default Login