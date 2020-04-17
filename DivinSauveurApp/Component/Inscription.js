import React from 'react'
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native'


class Inscription extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            data:['Chef', 'Autres'],
            checked:0
        }
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
                                                <Image style={styles.img} source={require("../IMG/Icon/Check.png")}/>
                                                <Text>{data}</Text>
                                            </TouchableOpacity>
                                        :
                                            <TouchableOpacity onPress={()=>{this.setState({checked: key})}} style={styles.btn}>
                                                <Image style={styles.img} source={require("../IMG/Icon/Uncheck.png")} />
                                                <Text>{data}</Text>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                )
                            })
                        }
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
    }
});

export default Inscription