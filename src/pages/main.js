/**
 * Created by wangsiyuan on 4/13/17.
 */

import React from 'react';
import {
    Animated,
    Navigator,
    PixelRatio,
    StyleSheet
} from 'react-native';
import { NavigationBar } from '../components';
import { default as lng } from '../languages/en';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            translateY: new Animated.Value(0),
            hideNavigation: false
        }
    }

    _renderNavigationBar = () => {
        const _style = {
            transform: [
                {translateY: this.state.translateY}
            ]
        };

        return (
            <Animated.View  style={_style}>
                <NavigationBar
                    style={styles.navigationBar}
                    initialItem={0}>
                    {
                        Object.keys(lng.Navigations).map( item => {
                            const routeItem = lng.Navigations[item];
                            if (routeItem.type && routeItem.type === 'navigation') {
                                return (
                                    <NavigationBar.Item
                                        onPress={this.handleNavigation(item)}
                                        key={routeItem.name}
                                        icon={routeItem.icon}
                                        name={routeItem.name}
                                        iconStyle={styles.iconStyle}
                                        textStyle={styles.textStyle}
                                        activeIcon={styles.activeIcon}
                                        activeText={styles.activeText}/>
                                );
                            }

                        })
                    }
                </NavigationBar>
            </Animated.View>
        );
    };

    handleNavigation = (key) => {
        return () => {
            this.navigator.resetTo({
                name: lng.Navigations[key].name,
                component: lng.Navigations[key].component
            });
        }
    };

    render() {
        const defaultName = lng.Navigations.Popular.name;
        const defaultComponent = lng.Navigations.Popular.component;

        return (
            <Navigator
                ref={(nav) => this.navigator = nav}
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params}
                                      navigator={navigator} />
                }}
                onWillFocus={(route) => {
                    if (route.name === 'Search') {
                        Animated.timing(          // Uses easing functions
                            this.state.translateY,    // The value to drive
                            {toValue: 65},           // Configuration
                        ).start();
                    } else {
                        Animated.timing(          // Uses easing functions
                            this.state.translateY,    // The value to drive
                            {toValue: 0},           // Configuration
                        ).start();
                    }
                }}
                navigationBar={this._renderNavigationBar()} />
        );
    }

}

const styles = StyleSheet.create({
    navigationBar: {
        paddingTop: 8,
        borderTopWidth: 1 / PixelRatio.get('height'),
        borderTopColor: '#ddd',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    iconStyle: {
        tintColor: '#aaa',
    },
    textStyle: {
        color: '#aaa',
    },
    activeIcon: {
        tintColor: '#fff',
    },
    activeText: {
        color: '#fff',
    }
});

export default Main;