import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Calendrier extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Calendrier</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Calendrier