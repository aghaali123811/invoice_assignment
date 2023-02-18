import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Local Imports
import Colors from '../../common/colors/Colors';

export interface NavigationProps {
    item?: any;
}

export default function ShowList(props: NavigationProps) {
    const { item } = props;
    return (
        <>
            <View style={styles.container}>
                <Text allowFontScaling={false} style={styles.date}>{item.quantity}</Text>
                <Text allowFontScaling={false} style={styles.description}>{item.description}</Text>
                <Text allowFontScaling={false} style={styles.amount} numberOfLines={2} ellipsizeMode='tail'>{item.price} €</Text>
            </View>
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
    date: {
        alignSelf: 'center',
        color: Colors.greyText,
        fontSize: 14,
        width: '33%'
    },
    description: {
        alignSelf: 'center',
        color: Colors.DeepPurpleText,
        fontSize: 14,
        width: '33%',
        marginLeft: '0%',
        textAlign: 'center'
    },
    amount: {
        alignSelf: 'center',
        color: Colors.DeepPurpleText,
        fontSize: 14,
        width: '23%',
        textAlign: 'right'
    }
});
