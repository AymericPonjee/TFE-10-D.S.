import React from 'react'
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity, TextInput, Alert, AppRegistry } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//import Icon from 'react-native-vector-icons/FontAwesome'

class Inscription extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            NomUtilisateur: '',
            PrenomUtilisateur: '',
            TotemUtilisateur: '',
            QualiUtilisateur: '',
            MailUtilisateur: '',
            MDPUtilisateur: '',
            IsChef: ''
        }
    }
    
    userRegister = () =>{
        return fetch("https://divinsauveur.com/API/apiInscription.php?", {
            method: "POST",
            header: {
                'Accept': "application/json",
                'Content-type': "application/json",
            },
            body: JSON.stringify({
                NomUtilisateur: this.state.NomUtilisateur,
                PrenomUtilisateur: this.state.PrenomUtilisateur,
                TotemUtilisateur: this.state.TotemUtilisateur,
                QualiUtilisateur: this.state.QualiUtilisateur,
                MailUtilisateur: this.state.MailUtilisateur,
                MDPUtilisateur: this.state.MDPUtilisateur,
                IsChef: this.state.IsChef,
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson == false){
                Alert.alert("Aie..", "Cette email existe déjà.. Essayez autre chose !", [
                    { text: "OK" },
                ]);
            }
            else if(responseJson == true) {
                Alert.alert("Success", "Merci d'avoir postuler pour notre application vous recevrez un mail avec vos identifiants très bientôt !!", [
                    { text: "OK" },
                ]);
                this.props.navigation.navigate("Login")           
            }
            else {
                Alert.alert("Info", "Try again", [
                    { text: "OK" },
                ]);            
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
                </View>

                <View style={styles.mid}>
                    <Text style={styles.titre}>
                        Inscription
                    </Text>
                </View>

                <View style={styles.bot}>
                    <KeyboardAwareScrollView>
                        <Text style={styles.Form}>Veuillez introduire votre :</Text>
                        <View style={styles.Form1}> 
                            <Text style={styles.textForm1}>Nom * : </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Introduisez votre nom" 
                                selectionColor = "#26355C"
                                onSubmitEditing = {() => this.prenom.focus()}
                                onChangeText = {(text) => this.validate(text,'NomUtilisateur')}
                                onChangeText = {NomUtilisateur => this.setState({NomUtilisateur})}
                            />
                        </View>

                        <View style={styles.Form2}>
                            <Text style={styles.textForm2}>Prénom * : </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Introduisez votre prénom"
                                selectionColor = "#26355C"
                                ref={(input) => this.prenom = input}
                                onSubmitEditing={() => this.totem.focus()}
                                onChangeText = {PrenomUtilisateur => this.setState({PrenomUtilisateur})} 
                            />
                        </View>

                        <View style={styles.Form3}>
                            <Text style={styles.textForm3}>Totem : </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Introduisez votre totem"
                                selectionColor = "#26355C"
                                ref={(input) => this.totem = input}
                                onSubmitEditing={() => this.quali.focus()}
                                onChangeText = {TotemUtilisateur => this.setState({TotemUtilisateur})}
                            />
                        </View>

                        <View style={styles.Form4}>
                            <Text style={styles.textForm4}>Quali : </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Introduisez votre quali" 
                                selectionColor = "#26355C"
                                ref={(input) => this.quali = input}
                                onSubmitEditing={() => this.mail.focus()}
                                onChangeText = {QualiUtilisateur => this.setState({QualiUtilisateur})}
                            />
                        </View>

                        <View style={styles.Form5}>
                            <Text style={styles.textForm5}>Mail * : </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Introduisez votre adresse mail" 
                                selectionColor = "#26355C"
                                keyboardType = "email-address"
                                ref={(input) => this.mail = input}
                                onChangeText = {MailUtilisateur => this.setState({MailUtilisateur})}
                            />
                        </View>
                        
                        <View>
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={this.userRegister}>
                                <Text style={styles.buttonText}>Je m'inscris !</Text>
                            </TouchableOpacity>

                            <Text 
                                onPress={() => navigate('Login')} 
                                style={styles.retour}>Retour</Text>
                        </View>
                    </KeyboardAwareScrollView>
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
        flex:0.1,
        marginLeft:10
    },
    bot: {
        flex:1,
        marginLeft:25,
        marginRight:11
    },
    logo: {
        width:150,
        height:150,
    },
    titre: {
        color:'#26355C',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft:25,
    },
    textForm:{
        color:'#26355C',
        fontWeight: '500',
        fontSize: 15,
        marginLeft:10,
    },
    Form:{
        color:'#26355C',
        fontWeight: '500',
        fontSize: 15,
        marginLeft:10,
        paddingTop:20
    },
    check:{
        height:20,
        width: 20,
    },
    btn:{
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 25
    },
    data:{
        color:'#26355C',
        fontWeight: '500',
        fontSize: 15
    },
    Form1:{
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 25,
    },
    textForm1:{
        color:'#26355C',
        fontWeight: '500',
        fontSize: 15,
        paddingTop:20,
        paddingRight:23
    },
    
    textForm2:{
        color:'#26355C',
        fontWeight: '500',
        fontSize: 15,
        paddingTop:20,
        paddingRight:2
    },
    Form2:{
        flexDirection: 'row',
        paddingLeft: 25,
    },
    textForm3:{
        color:'#26355C',
        fontWeight: '500',
        fontSize: 15,
        paddingTop:20,
        paddingRight:23
    },
    Form3:{
        flexDirection: 'row',
        paddingLeft: 25,
    },
    textForm4:{
        color:'#26355C',
        fontWeight: '500',
        fontSize: 15,
        paddingTop:20,
        paddingRight:30
    },
    Form4:{
        flexDirection: 'row',
        paddingLeft: 25,
    },
    textForm5:{
        color:'#26355C',
        fontWeight: '500',
        fontSize: 15,
        paddingTop:20,
        paddingRight:27
    },
    Form5:{
        flexDirection: 'row',
        paddingLeft: 25,
    },
    input: {
        height:40,
        width:250,
        backgroundColor:"#99B2D0",
        color:'#26355C',
        borderRadius:17,
        marginVertical:10,
        paddingHorizontal:10
    },
    button: {
        backgroundColor:'#26355C',
        margin:25,
        paddingVertical:15,
        borderRadius:17
    },
    buttonText: {
        textAlign: 'center',
        color:'white',
        fontWeight: '800'
    },
    retour:{
        textDecorationLine: 'underline',
        marginLeft:25,
        fontSize: 15
    },
    error: {
        borderWidth: 3,
        borderColor: 'red'
    }
});

AppRegistry.registerComponent('Inscription', () => Inscription);
export default Inscription