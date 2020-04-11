import React from 'react'
import { ImageBackground, StyleSheet, View,Dimensions, KeyboardAvoidingView, SafeAreaView, Platform, ScrollView, TouchableOpacity, Alert, Image} from 'react-native'

import { Input, Block } from 'galio-framework';
import { Text } from 'galio-framework';
import { Button } from 'react-native-elements';
import { Linking } from 'react-native';


class Login extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      // url: PropTypes.string.isRequired,
      // title: PropTypes.string.isRequired,
    }
  }


  render() {

    const url="https://aquaplouf.be/login.php"
    const {navigate} = this.props.navigation;
    return (
     
    <View style={styles.main_container}>
      <ImageBackground source={require('../Images/fond.png')} style={styles.backgroundImage} >
        <View style={styles.top}>

          <View style={styles.view_top_1}>

          </View>
          <View style={styles.view_top_2}>
            <View style={styles.view_top_2_1}></View>
            <View style={styles.view_top_2_2}> 
            <Image  source = {require('../Images/logo.png')}  style={{ width: 160, height: 100 }} />
            </View>
            <View style={styles.view_top_2_3}></View>
            
          </View>
        
        </View>

        <View style={styles.center}>
        
          <Text style={styles.text_login} h5>Connexion</Text>
          <Input  placeholder="Nom d'utilisateur" 
                  // placeholderTextColor="#000000"
                  // style={{ borderColor: "#4F8EC9" }}
                />

          <Input  placeholder="Mot de passe" 
                  password 
                  // viewPass 
                  // style={{ borderColor: "red" }}
                  // help="S'inscrire"
                  // bottomHelp
                  // placeholderTextColor="#4F8EC9"
                  />


            <Button 
                    title="Se connecter"
                    backgroundColor="#233973"
                    // type="outline"
                    onPress={() => alert("Nom d'utilisateur ou mot de passe incorrect!")}
                    onPress={() => navigate('Main')}
                    
            />
           {/* <Text style={styles.text_creer_login} h10>Se créer un compte</Text> */}

         
            <Text style={styles.text_creer_login} h10 onPress={() => Linking.openURL(url)}>
            Se créer un compte
              </Text>


        </View>

        <View style={styles.bottom}>
        
          
        </View>
        
        

      </ImageBackground>
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
})

export default Login