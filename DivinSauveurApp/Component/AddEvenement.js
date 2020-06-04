import React from 'react'
import { Text, View, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import  DatePicker  from 'react-native-datepicker'


class AddEvenement extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            NomEvenement: '',
            DateDebutEvenement: '',
            HeureDebutEvenement: '00:00',
            DateFinEvenement: '',
            HeureFinEvenement: '00:00',
            LieuEvenement: '',
            AnimeAbsentEvenement: '',
        }
    }

    userRegister = () =>{
        return fetch("https://divinsauveur.com/API/apiCalendrier.php?", {
            method: "POST",
            header: {
                'Accept': "application/json",
                'Content-type': "application/json",
            },
            body: JSON.stringify({
                NomEvenement: this.state.NomEvenement,
                DateDebutEvenement: this.state.DateDebutEvenement,
                HeureDebutEvenement: this.state.HeureDebutEvenement,
                DateFinEvenement: this.state.DateFinEvenement,
                HeureFinEvenement: this.state.HeureFinEvenement,
                LieuEvenement: this.state.LieuEvenement,
                AnimeAbsentEvenement: this.state.AnimeAbsentEvenement,
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

    ShowCurrentDate=()=>{
 
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear(); 

        console.log(date + '-' + month + '-' + year);
    }

    render() {
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
                        Ajouter un évènement
                    </Text>
                </View>
                <View style={styles.bot}>
                    <View style={styles.Form1}> 
                        <Text style={styles.textForm1}>Nom de l'évènement : </Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Introduisez Le nom de l'évènement" 
                            selectionColor = "#26355C"
                            onChangeText = {NomEvenement => this.setState({NomEvenement})}
                        />
                    </View>
                    <View style={styles.Form2}> 
                            <Text style={styles.textForm2}>Adresse de l'évènement : </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Introduisez l'adresse l'évènement" 
                                selectionColor = "#26355C"
                                onChangeText = {LieuEvenement => this.setState({LieuEvenement})}
                            />
                        </View>
                    <View style={styles.Form3}>
                        <Text style={styles.textForm3}> Date du début de l'évènement : </Text>
                        <DatePicker
                            style={styles.date}
                            date={this.state.DateDebutEvenement}
                            mode="date"
                            placeholder="Date début de l'évènement"
                            format="DD-MM-YYYY"
                            minDate= {this.ShowCurrentDate}
                            maxDate= "30/09/9999"
                            confirmBtnText="Confirmer"
                            cancelBtnText="Annuler"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(DateDebutEvenement) => {this.setState({DateDebutEvenement: DateDebutEvenement})}}
                        />
                    </View>
                    <View style={styles.Form4}>
                        <Text style={styles.textForm4}>Heure du début de l'évènement : </Text>
                        <DatePicker
                            style={styles.date}
                            date={this.state.HeureDebutEvenement}
                            mode="time"
                            placeholder="Heure du début de l'évènement"
                            format="HH:mm"
                            confirmBtnText="Confirmer"
                            cancelBtnText="Annuler"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(HeureDebutEvenement) => {this.setState({HeureDebutEvenement: HeureDebutEvenement})}}
                        />
                    </View>
                    <View style={styles.Form5}>
                        <Text style={styles.textForm5}>Date de la fin de l'évènement : </Text>
                        <DatePicker
                            style={styles.date}
                            date={this.state.DateFinEvenement}
                            mode="date"
                            placeholder="Date de la fin de l'évènement"
                            format="DD-MM-YYYY"
                            minDate= {this.ShowCurrentDate}
                            maxDate="30/09/9999"
                            confirmBtnText="Confirmer"
                            cancelBtnText="Annuler"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(DateFinEvenement) => {this.setState({DateFinEvenement: DateFinEvenement})}}
                        />
                    </View>
                    <View style={styles.Form6}>
                        <Text style={styles.textForm6}>Heure de la fin de l'évènement : </Text>
                        <DatePicker
                            style={styles.date}
                            date={this.state.HeureFinEvenement}
                            mode="time"
                            placeholder="Heure de la fin de l'évènement"
                            format="HH:mm"
                            confirmBtnText="Confirmer"
                            cancelBtnText="Annuler"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(HeureFinEvenement) => {this.setState({HeureFinEvenement: HeureFinEvenement})}}
                        />
                    </View>
                    <TouchableOpacity 
                        style={styles.button} 
                        //onPress={this.onClickListener}
                    >
                        <Text style={styles.buttonText}>Ajouter l'évènement à la liste</Text>
                    </TouchableOpacity>
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
        flex:0.1
    },
    bot: {
        flex:1,
    },
    logo: {
        width:150,
        height:150,
    },
    titre: {
        color:'#26355C',
        fontWeight: 'bold',
        marginLeft:10,
        fontSize: 30,
        marginLeft:25,
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
    Form1:{
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
        paddingLeft: 25,
    },
    textForm6:{
        color:'#26355C',
        fontWeight: '500',
        fontSize: 15,
        paddingTop:20,
        paddingRight:27
    },
    Form6:{
        paddingLeft: 25,
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
    date: {
        width:200,
        backgroundColor:"#99B2D0",
        color:'#26355C',
    },
});

export default AddEvenement