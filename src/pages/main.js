/**
 * Created by wangsiyuan on 4/13/17.
 */

import React from 'react';
import {
    Navigator,
    PixelRatio,
    StyleSheet
} from 'react-native';
import { NavigationBar } from '../components';
import { default as Routers } from '../routers';

class Main extends React.Component {

    _renderNavigationBar = () => {

        return (
            <NavigationBar
                style={styles.navigationBar}
                initialItem={0}>
                {
                    Object.keys(Routers).map( item => {
                        return (
                            <NavigationBar.Item
                                onPress={this.handleNavigation(item)}
                                key={Routers[item].name}
                                icon={Routers[item].icon}
                                name={Routers[item].name}
                                iconStyle={styles.iconStyle}
                                textStyle={styles.textStyle}
                                activeIcon={styles.activeIcon}
                                activeText={styles.activeText}/>
                        );
                    })
                }
            </NavigationBar>
        );
    };

    handleNavigation = (key) => {
        return () => {
            this.navigator.resetTo({
                name: Routers[key].name,
                component: Routers[key].component
            });
        }
    };

    render() {
        const defaultName = Routers.Popular.name;
        const defaultComponent = Routers.Popular.component;

        return (
            <Navigator
                ref={(nav) => this.navigator = nav}
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
                navigationBar={this._renderNavigationBar()}
                />
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