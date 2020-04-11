import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'


class Login extends React.Component {
    render(){
        return(
            <View style={styles.main}>
                <TextInput style={styles.pseudo} placeholder="Totem"/>
                <Button style={{ height:50 }} title="Inscription" onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        marginTop:50,
        flex:1
    },

    pseudo: {
        marginLeft:5,
        marginRight:5,
        height:50,
        borderColor: '#000000',
        borderWidth:1,
        paddingLeft:5
    }
})

export default Login