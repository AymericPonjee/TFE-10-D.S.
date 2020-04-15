import React from 'react';
import { StyleSheet, View, Input, Text, Button, Image } from 'react-native';


class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('../../IMG/Logo/DivinSauveur.png')}/>
                </View>

                <View style={styles.form}>
                    <Text>Connexion</Text>
                    <Input  placeholder="Nom d'utilisateur" />
                    <Input  placeholder="Mot de passe" password />
                    <Button title="Se connecter"/>
                    <Text>Se créer un compte</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#6AD5FA'
    },
});

export default Login