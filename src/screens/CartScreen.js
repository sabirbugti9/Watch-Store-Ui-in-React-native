import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableNativeFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CartProduct from '../componets/CartProduct';
const primaryColor = "#435060";
let productsArray = [];

const CartScreen = (props) => {
    if (!props.route.params) {

    } else {
        productsArray.push(props.route.params);
    }

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={styles.top}>
                <View style={styles.row}>
                    <Ionicons size={30} color="#2C323C" name="chevron-back-outline" onPress={() => {
                        props.navigation.goBack();
                    }} />
                    <Text style={styles.name}>  Cart list</Text>
                </View>
                <View style={styles.row}>
                    <AntDesign color={primaryColor} size={25} name="search1" />
                    <Image source={require("../assets/user.jpeg")} style={styles.image} />
                </View>
            </View>
            <ScrollView style={{ marginLeft: 12.0 }}>
                {productsArray.map((item) => {
                    return (
                        <View key={item.name}>
                            <CartProduct item={item} />
                        </View>
                    );
                })}
            </ScrollView>
            <View style={{ flex: 1, justifyContent: "flex-end", marginHorizontal: 12 }}>
                <View style={[styles.row, { marginRight: 0.0, justifyContent: "space-between", marginBottom: 12 }]}>
                    <View style={{ alignItems: "center", marginTop: 12 }}>
                        <Text style={styles.totalPrice}>TotalPrice</Text>
                        <Text style={styles.name}>$700</Text>
                    </View>
                    <TouchableNativeFeedback onPress={() => {

                    }}>
                        <View style={[styles.btn, { backgroundColor: primaryColor }]}>
                            <Text style={[styles.typeContainerTop, { color: "white" }]}>Buy Now</Text>
                        </View>

                    </TouchableNativeFeedback>
                </View>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    top: {
        height: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 12.0,
        marginTop: 25.0,
    },
    row: {
        flexDirection: "row",
        marginRight: 24,
    },
    image: {
        height: 30,
        width: 30,
        marginLeft: 24,
        borderRadius: 20,
    },
    typeContainerTop: {
        fontSize: 12.0,
        color: "#BCBEBF",
        fontWeight: "bold",
    },
    name: {
        fontSize: 20,
        color: "#2C323C",
        fontWeight: "bold",
    },
    totalPrice: {
        fontSize: 14,
        color: "grey",
    },
    btn: { marginTop: 12.0, height: 45, width: "45%", borderRadius: 5, justifyContent: "center", alignItems: "center", backgroundColor: "#5295FF" }


});

export default CartScreen;
