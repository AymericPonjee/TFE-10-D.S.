import React from 'react'
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'

import { Input } from 'galio-framework'
//import Icon from 'react-native-vector-icons/FontAwesome'

class Inscription extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            data:[' Chef', ' Autres'],
            checked:0
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
                </View>

                <View style={styles.mid}>
                    <Text style={styles.titre}>
                        Inscription
                    </Text>
                </View>

                <View style={styles.bot}>
                    <Text style={styles.textForm}>Êtes-vous :</Text>
                    <View>
                        {
                            this.state.data.map((data, key) =>{
                                return(
                                    <View key={key}>
                                        {this.state.checked==key ?
                                            <TouchableOpacity style={styles.btn}>
                                                <Image style={styles.check} source={require("../IMG/Icon/Check.png")}/>
                                                <Text style={styles.data}>{data}</Text>
                                            </TouchableOpacity>
                                        :
                                            <TouchableOpacity onPress={()=>{this.setState({checked: key})}} style={styles.btn}>
                                                <Image style={styles.check} source={require("../IMG/Icon/Uncheck.png")} />
                                                <Text style={styles.data}>{data}</Text>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                )
                            })
                        }
                    </View>
                
                    <Text style={styles.textForm1}>Veuillez introduire votre :</Text>
                    <View style={styles.Form1}> 
                        <Text style={styles.textForm1}>Nom * : </Text>
                        <Input style={styles.input}
                            placeholder="Introduisez votre nom" 
                        />
                    </View>

                    <View style={styles.Form2}>
                        <Text style={styles.textForm2}>Prénom * : </Text>
                        <Input style={styles.input}
                            placeholder="Introduisez votre prénom" 
                        />
                    </View>

                    <View style={styles.Form3}>
                        <Text style={styles.textForm3}>Totem : </Text>
                        <Input style={styles.input}
                            placeholder="Introduisez votre totem" 
                        />
                    </View>

                    <View style={styles.Form4}>
                        <Text style={styles.textForm4}>Quali : </Text>
                        <Input style={styles.input}
                            placeholder="Introduisez votre quali" 
                        />
                    </View>

                    <View style={styles.Form5}>
                        <Text style={styles.textForm5}>Mail * : </Text>
                        <Input style={styles.input}
                            placeholder="Introduisez votre adresse mail" 
                        />
                    </View>
                    
                    <View>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => navigate('Calendrier')}>
                            <Text style={styles.buttonText}>Je m'inscris !</Text>
                        </TouchableOpacity>

                        <Text onPress={() => navigate('Login')} style={styles.retour}>
                                Retour
                        </Text>
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
        marginLeft:10
    },
    logo: {
        width:150,
        height:150,
    },
    titre: {
        color:'#26355C',
        fontWeight: 'bold',
        fontSize: 30
    },
    textForm:{
        color:'#26355C',
        fontWeight: '500',
        fontSize: 15
    },
    Form:{
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 15,
    },
    check:{
        height:20,
        width: 20,
    },
    btn:{
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 15
    },
    data:{
        color:'#26355C',
        fontWeight: '500',
        fontSize: 15
    },
    Form1:{
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 15,
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
        paddingLeft: 15,
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
        paddingLeft: 15,
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
        paddingLeft: 15,
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
        paddingLeft: 15,
    },
    input: {
        height:40,
        width:250,
        backgroundColor:"#99B2D0",
        color:'#26355C',
        borderRadius:10
    },
    button: {
        backgroundColor:'#26355C',
        margin:20,
        paddingVertical:15,
        borderRadius:10
    },
    buttonText: {
        textAlign: 'center',
        color:'white',
        fontWeight: '800'
    },
    retour:{
        textDecorationLine: 'underline',
        marginLeft:20,
        fontSize: 15
    }
});

export default Inscription