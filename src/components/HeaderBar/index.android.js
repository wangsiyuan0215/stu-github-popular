/**
 * Created by wangsiyuan on 4/12/17.
 */

import React from 'react';
import {
    View, Text, Image,
    TouchableOpacity,

    /* ------ Stylesheet ------ */
    StyleSheet,
} from 'react-native';

const noop = () => {};

class NavigationBar extends React.Component {

    constructor (props) {
        super(props);
    }

    onLeftPress = () => {
        (this.props.onLeft || noop)();
    };

    onRightPress = () => {
        (this.props.onRight || noop)();
    };

    _renderLeft = () => {
        const {
            renderLeft,
            renderLeftStyle = [],
            renderLeftImage = require('./images/left.png'),
        } = this.props;

        if (renderLeft) {
            return 'string' === typeof renderLeft ?
                (<TouchableOpacity
                    onPress={this.onLeftPress}
                    style={[styles.baseBtn]}>

                    <Text
                        style={[styles.baseText, renderLeftStyle]}>

                        { renderLeft }
                    </Text>
                </TouchableOpacity>) :
                renderLeft;
        } else if ('undefined' === typeof renderLeft) {
            return (
                <TouchableOpacity
                    onPress={this.onLeftPress}
                    style={[styles.baseBtn]}>

                    <Image
                        style={[styles.baseImage, renderLeftStyle]}
                        source={renderLeftImage} />
                </TouchableOpacity>
            );
        } else {
            return null;
        }
    };

    _renderCenter = () => {
        const { renderCenter } = this.props;

        return (
            <View style={[styles.baseCenter]}>
                {
                    "string" === typeof renderCenter ?
                        <Text style={[styles.baseText, styles.centerText]}>
                            { renderCenter }
                        </Text> : renderCenter
                }
            </View>
        );
    };

    _renderRight = () => {
        const {
            renderRight,
            renderRightStyle = [],
            renderRightImage = require('./images/save.png')
        } = this.props;

        if (renderRight) {
            return 'string' === typeof renderRight ?
                (<TouchableOpacity
                    onPress={this.onRightPress}
                    style={[styles.baseBtn, styles.right]}>

                    <Text
                        style={[styles.baseText, renderRightStyle]}>

                        { renderRight }
                    </Text>
                </TouchableOpacity>) :
                renderRight;
        } else if ('undefined' === typeof renderRight) {
            return (
                <TouchableOpacity
                    onPress={this.onRightPress}
                    style={[styles.baseBtn, styles.right]}>

                    <Image
                        style={[styles.baseImage, renderRightStyle]}
                        source={renderRightImage} />
                </TouchableOpacity>
            );
        } else {
            return null;
        }
    };

    render() {
        const {
            style = [],
        } = this.props;

        return (
            <View style={[styles.container].concat(style)}>
                { this._renderLeft() }
                { this._renderCenter() }
                { this._renderRight() }
            </View>
        );
    }

}

/**
 * propTypes
 * @type {{onLeft, onRight, renderLeft: *, renderCenter: (*), renderRight: *}}
 */
NavigationBar.propTypes = {
    onLeft: React.PropTypes.func,
    onRight: React.PropTypes.func,

    renderLeft: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.bool,
        React.PropTypes.element]),

    renderCenter: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.bool,
        React.PropTypes.element]).isRequired,

    renderRight: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.bool,
        React.PropTypes.element]),
};

/**
 * styles
 */
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 70,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
    },

    baseBtn: {
        position: 'absolute',
        top: 20,
        bottom: 0,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },

    baseText: {
        color: '#000',
        padding: 0,
        textAlignVertical: 'center',
        includeFontPadding: false,
    },

    baseImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: '#666'
    },

    baseCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 60,
        paddingRight: 60,
    },

    centerText: {
        fontSize: 20,
    },

    right: {
        top: 20,
        right: 0,
    }
});

export default NavigationBar;