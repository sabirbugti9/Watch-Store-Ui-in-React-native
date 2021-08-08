import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const CartProduct = ({ item }) => {
    const [count, setCount] = useState(1);
    return (
        <View style={[styles.row, { marginTop: 12.0 }]} >
            <View style={[styles.topProduct, { backgroundColor: item.color }]}>
                <Image style={{ height: 100, width: 100, alignSelf: "center" }} source={item.image} />
            </View>
            <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={[styles.name, { marginTop: 0, fontWeight: "normal" }]}>${item.price}</Text>
                <View style={[styles.row, { marginTop: 12.0 }]}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        if (count > 1) {
                            setCount(parseInt(count) - 1);
                        }
                    }}>
                        <Ionicons size={35} color={item.color} name="remove-circle-sharp" />
                    </TouchableOpacity>
                    <Text style={[styles.name, { marginTop: 6, fontWeight: "normal", marginLeft: 12.0 }]}>{count}</Text>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => {

                        setCount(parseInt(count) + 1);

                    }}>
                        <AntDesign size={27.} color={item.color} name="pluscircle" style={{ marginLeft: 12.0, marginTop: 6 }} />
                    </TouchableOpacity>
                </View>

            </View>

        </View>


    );
}
const styles = StyleSheet.create({

    topProduct: {
        height: 200,
        width: 150,
        justifyContent: "center",
        marginRight: 16.0,
        borderRadius: 20,
    },
    row: {
        flexDirection: "row",
    },
    image: {
        height: 30,
        width: 30,
        marginLeft: 24.0,
        borderRadius: 20,
    },
    name: {
        fontSize: 20,
        color: "#2C323C",
        fontWeight: "bold",
        marginTop: 12.0,
    },
});
export default CartProduct;