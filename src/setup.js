/**
 * Created by wangsiyuan on 4/12/17.
 */
import React from 'react';
import {
    Text, View,

    /* StyleSheet */
    StyleSheet,
} from 'react-native';

const setup = () => {

    console.disableYellowBox = true;

    class githubPopular extends React.Component {
        render() {
            return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to githubPopular!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                        Press Cmd+R to reload,{'\n'}
                        Cmd+D or shake for dev menu
                    </Text>
                </View>
            );
        }
    }

    return githubPopular;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default setup;