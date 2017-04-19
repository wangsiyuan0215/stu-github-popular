/**
 * Created by wangsiyuan on 4/19/17.
 */
import React from 'react';
import {
    View, Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { HeaderBar } from '../../components';
import { default as commonStyle } from '../../assets/styles/common';

class Index extends React.PureComponent {

    constructor(props) {
        super(props);

        console.log(props);
    }

    onBack = () => {
        if (route.index > 0) {
            navigator.pop();
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Search</Text>

                <TouchableOpacity onPress={() => {
                    this.props.navigator.pop();
                }}>
                    <Text>goBack</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 70,
        backgroundColor: '#f5f5f5',
    },
});

export default Index;
