import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Boutique extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Boutique</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Boutique