/**
 * Created by wangsiyuan on 4/14/17.
 */

import React from 'react';
import {
    View,
    ListView,
    RefreshControl,
    StyleSheet
} from 'react-native';

import { default as PopularListItem } from './PopularListItem';

class PopularList extends React.PureComponent {

    constructor (props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1.id !== row2.id });
        this.state = {
            isRefreshing: false
        }
    }

    _renderRow = (rowData, sectionID, rowID, highlightRow) => {
        return (
            <PopularListItem
                dataSource={rowData}
                onCheck={(e) => this.onCheck(e, rowData, rowID)}/>
        );
    }

    _renderRefresh = () => {
        const { isRefreshing } = this.state;

        return (
            <RefreshControl
                refreshing={isRefreshing}
                onRefresh={this.onRefresh}
                title="refreshing & loading..."
                titleColor="#333"
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor="#f5f5f5" />
        );
    }

    onCheck = (e, rowData, rowID) => {
        console.log(e, rowData, rowID);
    };

    onRefresh = () => {
        console.log('refreshing...');
        this.setState({
            isRefreshing: true
        });
    }

    componentWillMount() {
        this.customKey = this.props.tabLabel;
    }

    render() {
        const { dataSource = [] } = this.props;

        return (
            <View style={styles.container}>
                <ListView
                    style={styles.list}
                    enableEmptySections={true}
                    dataSource={this.ds.cloneWithRows(dataSource)}
                    renderRow={this._renderRow}
                    refreshControl={this._renderRefresh()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    list: {
        padding: 10,
    },
});

export default PopularList;