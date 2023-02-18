import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Local Imports
import Colors from '../../common/colors/Colors';

export interface NavigationProps {
    item?: any;
    onPress?: any
}

export default function ShowList(props: NavigationProps) {
    const { item } = props;
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <Text allowFontScaling={false} style={styles.name}>{item.name}</Text>
                <Text allowFontScaling={false} style={styles.date}>{item.quantity}</Text>
                <Text allowFontScaling={false} style={styles.description}>{item.description}</Text>
                <Text allowFontScaling={false} style={styles.amount} numberOfLines={2} ellipsizeMode='tail'>{item.price} €</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 1,
        borderBottomColor: Colors,
        borderBottomWidth: 0.4
    },
    name:{
        alignSelf: 'center',
        color: Colors.greyText,
        fontSize: 14,
        width: '25%'
    },
    date: {
        alignSelf: 'center',
        color: Colors.greyText,
        fontSize: 14,
        width: '10%'
    },
    description: {
        alignSelf: 'center',
        color: Colors.DeepPurpleText,
        fontSize: 14,
        width: '40%',
        marginLeft: '0%',
        textAlign: 'center'
    },
    amount: {
        alignSelf: 'center',
        color: Colors.DeepPurpleText,
        fontSize: 14,
        width: '10%',
        textAlign: 'right'
    }
});
