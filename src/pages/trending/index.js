/**
 * Created by wangsiyuan on 4/12/17.
 */
import React from 'react';
import {
    View, Text,
    StyleSheet
} from 'react-native';
import { default as ScrollableTabView, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { HeaderBar } from '../../components';
import { default as commonStyle } from '../../assets/styles/common';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    _renderTabBar = () => {
        return () => {
            return (
                <ScrollableTabBar
                    style={styles.scrollableTabBar}
                    tabStyle={styles.tabItem}
                    inactiveTextColor='#ddd'
                    activeTextColor='#fff'
                    underlineStyle={styles.underline}/>
            )
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <HeaderBar
                    style={styles.header}
                    renderLeft={false}
                    renderCenter={"Trending"} />

                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={this._renderTabBar()} >

                    <View tabLabel="React">
                        <Text>Trending React</Text>
                    </View>

                    <View tabLabel="Flow">
                        <Text>Trending Flow</Text>
                    </View>

                    <View tabLabel="Jest">
                        <Text>Trending Jest</Text>
                    </View>
                </ScrollableTabView>
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
    scrollableTabBar: {
        height: 36,
        backgroundColor: '#000'
    },
    tabItem: {
        height: 36,
    },
    underline: {
        height: 2,
        backgroundColor: '#fff',
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

export default Index;