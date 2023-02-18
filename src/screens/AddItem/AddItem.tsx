import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

// Local Imports
import styles from './styles';
import SimpleButton from '../../components/buttons/simpleButton/SimpleButton';
import Constants from '../../common/constants/Constants';

export interface NavigationProps {
    navigation: any;
    route: any;
}

function AddItem(props: NavigationProps) {
    const { navigation, route } = props;
    const [edit, setEdit] = useState(route.params?.edit)
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    return (
        <>
            <View style={styles.container}>
                <View style={styles.flexRow}>
                    <Text allowFontScaling={false} style={styles.heading}>{edit ? 'Edit Screen' : 'Add Screen'}Add Screen</Text>

                    <Text style={styles.label}>{Constants.name}</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder={Constants.name}
                        value={name}
                        onChangeText={e => setName(e)}
                    />

                    <Text style={styles.label}>{Constants.quantity}</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder={Constants.quantity}
                        value={quantity}
                        onChangeText={e => setQuantity(e)}
                    />

                    <Text style={styles.label}>{Constants.description}</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder={Constants.description}
                        value={description}
                        onChangeText={e => setDescription()}
                    />

                    <Text style={styles.label}>{Constants.price}</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder={Constants.price}
                        value={price}
                        onChangeText={e => setPrice(e)}
                    />

                </View>
                {edit &&
                    <SimpleButton
                        title={Constants.delete}
                        onPress={() => console.log('k')}
                        style={{ position: 'absolute', bottom: 70 }}
                        titleStyle={{}}
                    />
                }
                <SimpleButton
                    title={edit ? Constants.save : Constants.continue}
                    onPress={() => console.log('k')}
                    style={{ position: 'absolute', bottom: 10 }}
                    titleStyle={{}}
                />
            </View>
        </>
    );
}

export default AddItem;
