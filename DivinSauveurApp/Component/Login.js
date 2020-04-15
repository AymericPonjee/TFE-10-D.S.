import React from 'react'
import { TextInput, StyleSheet, View, Text, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native'


class Login extends React.Component {

    // constructor(props) {
    //     super(props);
        
    //     this.state = {

    //     }
    //   }

    render() {

    // const {navigate} = this.props.navigation;


        return (

            <View  style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />

                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.logoContainer}>
                        <Image 
                            style={styles.logo}
                            source={require('../IMG/Logo/DivinSauveur.png')}
                        />
                    </View>

                    <View style={styles.form}>
                        
                        <TextInput  
                            placeholder="Nom d'utilisateur"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            style={styles.input}
                        />

                        <TextInput  
                            placeholder="Mot de passe"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            ref={(input) => this.passwordInput = input}
                            secureTextEntry
                            style={styles.input}
                            // onPress={() => navigate('Main')}
                        />

                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Connexion</Text>
                        </TouchableOpacity>
                        
                        <Text>Se créer un compte</Text>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#6AD5FA'
    },
    logo: {
        width:100,
        height:100
    },
    input: {
        height:40,
        backgroundColor:"rgba(255,255,255,0.2)",
        marginBottom:10,
        color:'white',
        paddingHorizontal:10
    },
    buttonContainer: {
        backgroundColor:'black',
        paddingVertical:15
    },
    buttonText: {
        textAlign: 'center',
        color:'white',
        fontWeight: '700'
    }
})

export default Login