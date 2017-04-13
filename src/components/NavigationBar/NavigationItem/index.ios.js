/**
 * Created by wangsiyuan on 4/13/17.
 */
import React from 'react';
import {
    Text, Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const noop = () => {};

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    handlePress = () => {
        (this.props.onPress || noop)();
    };

    render() {
        const {
            icon,
            name,
            iconStyle = [],
            textStyle = [],
            activeIcon = styles.activeIcon,
            activeText = styles.activeText,
            isActive = false
        } = this.props;

        return (
            <TouchableOpacity
                onPress={this.handlePress}
                style={styles.navigationItem}>

                <Image
                    style={[styles.navigationIcon].concat(iconStyle, isActive ? activeIcon : [])}
                    source={icon}/>
                <Text
                    style={[styles.navigationText].concat(textStyle, isActive ? activeText : [])}>
                    {name}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    navigationItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigationIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: '#aaa',
    },
    navigationText: {
        color: '#aaa',
        padding: 0,
        textAlignVertical: 'center',
        includeFontPadding: false,
    },
    activeIcon: {
        tintColor: '#000',
    },
    activeText: {
        color: '#000'
    },
});

export default Index;