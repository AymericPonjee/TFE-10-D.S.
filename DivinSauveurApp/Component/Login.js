import React from 'react';
import { StyleSheet, View, Input, Text, Button } from 'react-native';


class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Connexion</Text>
                <Input  placeholder="Nom d'utilisateur" />
                <Input  placeholder="Mot de passe" password />
                <Button title="Se connecter"/>
                <Text>Se créer un compte</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    main_container: {
        flex: 1,
        flexDirection: "column"
    },
    }
);

export default Login