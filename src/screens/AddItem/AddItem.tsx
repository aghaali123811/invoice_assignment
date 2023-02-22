import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

// Local Imports
import styles from './styles';
import SimpleButton from '../../components/buttons/simpleButton/SimpleButton';
import Constants from '../../common/constants/Constants';

export interface NavigationProps {
    navigation: any;
    route: any;
    handleAddNew: () => void;
    handleDelete: () => void;
    handleEdit: () => void;
}

function AddItem(props: NavigationProps) {
    const { navigation, route } = props;
    const [edit, setEdit] = useState(route.params?.edit)
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    useEffect(()=>{
        if(route.params?.edit){
            setName(route.params?.item?.name)
            setQuantity(route.params?.item?.quantity)
            setDescription(route.params?.item?.description)
            setPrice(route.params?.item?.price)
        }
    },[])

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text allowFontScaling={false} style={styles.heading}>{edit ? 'Edit Screen' : 'Add Screen'}</Text>

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
                        keyboardType={'number-pad'}
                    />

                    <Text style={styles.label}>{Constants.description}</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder={Constants.description}
                        value={description}
                        onChangeText={e => setDescription(e)}
                    />

                    <Text style={styles.label}>{Constants.price}</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder={Constants.price}
                        value={price}
                        onChangeText={e => setPrice(e)}
                        keyboardType={'number-pad'}
                    />

                </View>
                {edit &&
                    <SimpleButton
                        title={Constants.delete}
                        onPress={() => props.navigation.goBack() || props.route.params.handleDelete()}
                        style={{ position: 'absolute', bottom: 70 }}
                        titleStyle={{}}
                    />
                }
                <SimpleButton
                    title={edit ? Constants.save : Constants.continue}
                    onPress={() => edit ? props.navigation.goBack() || props.route.params.handleEdit({
                        id:route.params?.item.id ,
                        name: name,
                        description: description,
                        price: price,
                        quantity: quantity
                    }) : props.navigation.goBack() || props.route.params.handleAddNew({
                        id: Math.random(12) * 12,
                        name: name,
                        description: description,
                        price: price,
                        quantity: quantity
                    })}
                    style={{ position: 'absolute', bottom: 10 }}
                    titleStyle={{}}
                />
            </View>
        </>
    );
}

export default AddItem;
