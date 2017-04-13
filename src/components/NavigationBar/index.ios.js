/**
 * Created by wangsiyuan on 4/13/17.
 */

import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import { default as NavigationItem } from './NavigationItem';

const noop = () => {};

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: props.initialItem || 0
        }
    }

    _onPress = (item, index) => {
        return () => {
            this.setState({
                activeItem: index
            });

            (item.props.onPress || noop)();
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        return (this.state.activeItem !== nextState.activeItem);
    }

    render() {
        const {
            children,
            initialItem = 0,
            style = []
        } = this.props;

        const {
            activeItem
        } = this.state;

        return (
            <View style={[styles.navigationBar].concat(style)}>
                {
                    React.Children.map(children, (item, index) => {
                        const isActive = activeItem === index;
                        const _props = {
                            isActive,
                            onPress: this._onPress(item, index),
                        };
                        return React.cloneElement(item, {..._props}, item.children);
                    })
                }
            </View>
        )
    }
}

Index.proptypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.element)
};

const styles = StyleSheet.create({
    navigationBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingTop: 6,
        paddingBottom: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
});

Index.Item = NavigationItem;

export default Index;
