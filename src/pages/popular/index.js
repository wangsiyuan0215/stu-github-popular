/**
 * Created by wangsiyuan on 4/12/17.
 */
import React from 'react';
import {
    View, Text,
    StatusBar,
    StyleSheet
} from 'react-native';
import { default as ScrollableTabView, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { HeaderBar } from '../../components';
import { default as commonStyle } from '../../assets/styles/common';

import { default as PopularList } from './PopularList';

const _fakeData_react = [
    {
        id: 1,
        title: 'developit/preact',
        describtion: 'Fast 3kb React alternative with the same ES6 API. Components & Virtual DOM.',
        author: 'developit',
        stars: 8709,
        isFavorite: false
    }, {
        id: 2,
        title: 'wix/react-native-navigation',
        describtion: 'A complete native navigation solution for React Native - nav bars, tabs, drawer, modals',
        author: 'wix',
        stars: 2707,
        isFavorite: false
    }
];

const _fakeData_vue = [
    {
        id: 1,
        title: 'vuejs/vue',
        describtion: 'A progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
        author: 'vuejs',
        stars: 50128,
        isFavorite: false
    }, {
        id: 2,
        title: 'vuejs/vuex',
        describtion: 'Centralized State Management for Vue.js.',
        author: 'vuejs',
        stars: 6864,
        isFavorite: false
    }
];

const _fakeData_all = _fakeData_react.concat(_fakeData_vue);

class Index extends React.PureComponent {

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
                <StatusBar barStyle="light-content"/>
                <HeaderBar
                    style={styles.header}
                    renderLeft={false}
                    renderCenter={"Popular"} />

                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={this._renderTabBar()} >

                    <PopularList tabLabel="All" dataSource={_fakeData_all}/>
                    <PopularList tabLabel="React" dataSource={_fakeData_react}/>
                    <PopularList tabLabel="Vue" dataSource={_fakeData_vue}/>

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
        backgroundColor: '#f5f5f5',
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