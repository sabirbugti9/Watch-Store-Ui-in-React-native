import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomProduct = ({ color, imageUrl, price, name }) => {

    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => {
            navigation.navigate("Details", { image: imageUrl, name: name, color: color, price: price })
        }}>
            <View style={[styles.topProduct, { backgroundColor: color }]}>
                <Image style={{ height: 100, width: 100, alignSelf: "center" }} source={imageUrl} />
                <Text style={[styles.selectedText, { color: "white", marginTop: 18, marginLeft: 12 }]}>{name}</Text>
                <Text style={[styles.selectedText, { color: "white", marginTop: 0, marginLeft: 12, fontWeight: "normal" }]}>${price}</Text>
            </View>
        </TouchableOpacity>

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
        marginRight: 24.0,
    },
    image: {
        height: 30,
        width: 30,
        marginLeft: 24.0,
        borderRadius: 20,
    },
    selectedText: {
        fontSize: 16,
        fontWeight: "700",
        marginRight: 12.0,
    },
});
export default BottomProduct;