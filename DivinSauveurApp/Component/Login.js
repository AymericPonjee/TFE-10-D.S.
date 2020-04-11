import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Input } from 'galio-framework';
import { Text } from 'galio-framework';
import { Button } from 'react-native-elements';
import { Linking } from 'react-native';


class Login extends React.Component {
    render() {
        return (
            <View style={styles.center}>
            
                <Text style={styles.text_login} h5>Connexion</Text>
                <Input  placeholder="Nom d'utilisateur" />

                <Input  placeholder="Mot de passe" password />

                <Button 
                    title="Se connecter"
                    backgroundColor="#233973"
                    onPress={() => alert("Nom d'utilisateur ou mot de passe incorrect!")}
                    onPress={() => navigate('Main')}                
                />

                <Text style={styles.text_creer_login} h10 onPress={() => Linking.openURL(url)}>
                    Se créer un compte
                </Text>
            </View>
        )
    }
}

    const styles = StyleSheet.create({

    main_container: {
    
        flex: 1,
        flexDirection: "column",
        fontFamily: "Roboto",
    },
    }
);

export default Login