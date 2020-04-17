import React from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';


class Calendrier extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            
        }
      }

    render() {

        const DATA = [
            {
                title: 'Réunion',
                dateDebut:'16 février 2020',
                dateFin:'16 février 2020',
                heureDebut:'10:00',
                heureFin:'17:30',
                Lieu:'Local'
            },
            {
                title: 'Scoutopia',
                dateDebut:'31 mars 2020',
                dateFin:'31 mars 2020',
                heureDebut:'09:00',
                heureFin:'23:00',
                Lieu:'avenue de la chasse de beaufort 69, 1160 auderghem'
            },
            {
                title: 'Grand camp',
                dateDebut:'10 juillet 2020',
                dateFin:'30 Juillet 2020',
                heureDebut:'09:00',
                heureFin:'14:00',
                Lieu:'Adresse de camp'
            },
            {
                title: 'barbecue de fin de camp',
                dateDebut:'31 juillet 2020',
                dateFin:'31 juillet 2020',
                heureDebut:'18:00',
                heureFin:'',
                Lieu:'adresse du local'
            }
        ];

        //function Page(){
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
                            Calendrier
                        </Text>
                    </View>

                    <View style={styles.bot}>
                        
                    </View>
                </View>
            );
        //}
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
        alignItems:'center'
    },
    logo: {
        width:150,
        height:150,
    },
    titre: {
        color:'#26355C',
        fontWeight: 'bold',
        marginLeft:10,
        fontSize: 30
    }
});

export default Calendrier