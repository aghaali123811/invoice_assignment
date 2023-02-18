import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';

// Local Imports
import styles from './styles';
import Colors from '../../common/colors/Colors';
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

                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder={"Search"}
                        value={name}
                        onChangeText={e => setName(e)}
                    />

                    <Text style={styles.label}>Quantity</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder={"Search"}
                        value={quantity}
                        onChangeText={e => setQuantity(e)}
                    />

                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder={"Search"}
                        value={description}
                        onChangeText={e => setDescription()}
                    />

                    <Text style={styles.label}>Price</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder={"Search"}
                        value={price}
                        onChangeText={e => setPrice('Hello')}
                    />

                </View>
                {edit &&
                    <SimpleButton
                        title={'Delete'}
                        onPress={() => console.log('k')}
                        style={{ position: 'absolute', bottom: 70 }}
                        // style={{position:'relative',marginTop:40}}
                        titleStyle={{}}
                    />
                }
                <SimpleButton
                    title={edit ? 'Save' : Constants.continue}
                    onPress={() => console.log('k')}
                    style={{ position: 'absolute', bottom: 10 }}
                    titleStyle={{}}
                />
            </View>
        </>
    );
}

export default AddItem;
