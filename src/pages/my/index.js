/**
 * Created by wangsiyuan on 4/12/17.
 */
import React from 'react';
import {
    View, Text,
    StyleSheet
} from 'react-native';

import {
    HeaderBar
} from '../../components';
import { default as commonStyle } from '../../assets/styles/common';

class Index extends React.PureComponent {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <HeaderBar
                    style={styles.header}
                    renderLeft={false}
                    renderCenter={"My"} />

                <Text>My</Text>
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
        backgroundColor: '#fff',
    },
    header: Object.assign({}, commonStyle.header, {
        height: 70,
        backgroundColor: '#000'
    }),
});

export default Index;