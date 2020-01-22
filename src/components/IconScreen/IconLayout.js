import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from './index';

export default class IconLayout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.groupLayout}>
                    <Icon size={20} style={styles.layoutStyle} />
                    <Icon name={'user'} size={30} style={styles.layoutStyle} />
                    <Icon size={40} style={styles.layoutStyle} />
                </View>
                <View style={styles.groupLayout}>
                    <Icon name={'user'} size={50} style={styles.layoutStyle} />
                    <Icon size={60} style={styles.layoutStyle} />
                    <Icon name={'user'} size={70} style={styles.layoutStyle} />
                </View>
                <View style={styles.groupLayout}>
                    <Icon size={80} style={styles.layoutStyle} />
                    <Icon name={'user'} size={90} style={styles.layoutStyle} />
                    <Icon name={'user'} size={100} style={styles.layoutStyle} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    groupLayout: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    layoutStyle: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5,
    },
});
