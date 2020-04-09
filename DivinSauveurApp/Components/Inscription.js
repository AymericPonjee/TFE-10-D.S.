import React from 'react'
import { View, Button, TextInput, Text } from 'react-native'

class Inscription extends React.Component{
    render(){
        return(
            <View>
                <TextInput placeholder="Pseudo"/>
                <Button title="Inscription" onPress={() => {}}/>
                <Text>Contact</Text>
            </View>
        )
    }
}

export default Inscription