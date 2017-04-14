/**
 * Created by wangsiyuan on 4/14/17.
 */
import React from 'react';
import {
    View, Text, Image,
    TouchableOpacity,
    PixelRatio,
    StyleSheet
} from 'react-native';

import { default as commonStyle } from '../../../../assets/styles/common';

const noop = () => {};

class PopularListItem extends React.PureComponent {

    constructor (props) {
        super(props);

        this.state = {
            checked: false
        }
    }

    onCheck = () => {
        const checked = !this.state.checked;

        this.setState({
            checked: checked
        });

        (this.props.onCheck || noop)({ target: { checked } });
    };

    render() {
        const {
            dataSource
        } = this.props;

        const {
            checked
        } = this.state;

        const checkImg = checked ?
            require('./images/checked_star.png') :
            require('./images/unchecked_star.png');

        return (
            <TouchableOpacity style={styles.row}>
                <Text style={styles.rowHeader}>{dataSource.title}</Text>
                <Text style={styles.rowBody}>{dataSource.describtion}</Text>
                <View style={styles.rowFooter}>
                    <View style={styles.rowFooterLeft}>
                        <Text style={styles.keyAuthor}>Author:</Text>
                        <Text style={styles.valueAuthor}>{dataSource.author}</Text>
                    </View>
                    <View style={styles.rowFooterCenter}>
                        <Text style={styles.keyAuthor}>Stars:</Text>
                        <Text style={styles.valueAuthor}>{dataSource.stars}</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.rowFooterRight, styles.checkBox]}
                        onPress={this.onCheck}>
                        <Image
                            style={styles.checkImg}
                            source={checkImg}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    row: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 1 / PixelRatio.get('width'),
        borderColor: '#ddd',
        shadowColor: '#ddd',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 1,
    },
    rowHeader: Object.assign({}, commonStyle.text, {
        marginBottom: 8,
        fontSize: 16,
        color: '#333',
    }),
    rowBody: Object.assign({}, commonStyle.text, {
        marginBottom: 5,
        fontSize: 14,
        color: '#666',
    }),
    rowFooter: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    rowFooterLeft: {
        flex: 1,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    keyAuthor: Object.assign({}, commonStyle.text, {
        marginRight: 6,
        fontSize: 14,
        color: '#666',
    }),
    valueAuthor: Object.assign({}, commonStyle.text, {
        fontSize: 14,
        color: '#666',
    }),
    rowFooterCenter: {
        flex: 1,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rowFooterRight: {
        width: 30,
        height: 30,
    },
    checkBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    }
});

export default PopularListItem;