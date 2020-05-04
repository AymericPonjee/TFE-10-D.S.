import React from 'react'
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'

import { Input } from 'galio-framework'
//import Icon from 'react-native-vector-icons/FontAwesome'

class Inscription extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            IsChef:[' Chef', ' Autres'],
            checked:0,

            NomUtilisateur:'',
            PrenomUtilisateur:'',
            TotemUtilisateur:'',
            QualiUtilisateur:'',
            MailUtilisateur:''
        }
    }

    userRegister = () => {
        //alert("Votre demande d'accès à l'application a été envoyé ! Vous recevrez un mail avec votre mot de passe");

        const {NomUtilisateur} = this.state;
        const {PrenomUtilisateur} = this.state;
        const {TotemUtilisateur} = this.state;
        const {QualiUtilisateur} = this.state;
        const {MailUtilisateur} = this.state;
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
                    {/* <Text style={styles.textForm}>Êtes-vous :</Text>
                    <View>
                        {
                            this.state.IsChef.map((IsChef, key) =>{
                                return(
                                    <View key={key}>
                                        {this.state.checked==key ?
                                            <TouchableOpacity style={styles.btn}>
                                                <Image style={styles.check} source={require("../IMG/Icon/Check.png")}/>
                                                <Text style={styles.IsChef}>{IsChef}</Text>
                                            </TouchableOpacity>
                                        :
                                            <TouchableOpacity onPress={()=>{this.setState({checked: key})}} style={styles.btn}>
                                                <Image style={styles.check} source={require("../IMG/Icon/Uncheck.png")} />
                                                <Text style={styles.IsChef}>{IsChef}</Text>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                )
                            })
                        }
                    </View> */}
                
                    <Text style={styles.Form}>Veuillez introduire votre :</Text>
                    <View style={styles.Form1}> 
                        <Text style={styles.textForm1}>Nom * : </Text>
                        <Input 
                            style={styles.input}
                            placeholder="Introduisez votre nom" 
                            onChangeText = {NomUtilisateur => this.setState({NomUtilisateur})}
                        />
                    </View>

                    <View style={styles.Form2}>
                        <Text style={styles.textForm2}>Prénom * : </Text>
                        <Input style={styles.input}
                            placeholder="Introduisez votre prénom"
                            onChangeText = {PrenomUtilisateur => this.setState({PrenomUtilisateur})} 
                        />
                    </View>

                    <View style={styles.Form3}>
                        <Text style={styles.textForm3}>Totem : </Text>
                        <Input style={styles.input}
                            placeholder="Introduisez votre totem"
                            onChangeText = {TotemUtilisateur => this.setState({TotemUtilisateur})}
                        />
                    </View>

                    <View style={styles.Form4}>
                        <Text style={styles.textForm4}>Quali : </Text>
                        <Input style={styles.input}
                            placeholder="Introduisez votre quali" 
                            onChangeText = {QualiUtilisateur => this.setState({QualiUtilisateur})}
                        />
                    </View>

                    <View style={styles.Form5}>
                        <Text style={styles.textForm5}>Mail * : </Text>
                        <Input style={styles.input}
                            placeholder="Introduisez votre adresse mail" 
                            onChangeText = {MailUtilisateur => this.setState({MailUtilisateur})}
                        />
                    </View>
                    
                    <View>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => navigate('Calendrier')}>
                            <Text 
                                style={styles.buttonText} 
                                onPress={this.userRegister}>Je m'inscris !</Text>
                        </TouchableOpacity>

                        <Text 
                            onPress={() => navigate('Login')} 
                            style={styles.retour}>Retour</Text>
                    </View>
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
        borderRadius:17
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
    }
});

export default Inscription