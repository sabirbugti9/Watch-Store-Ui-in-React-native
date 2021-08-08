import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const DetailsScreen = (props) => {
    const [primaryColor, setPrimaryColor] = useState(props.route.params.color);

    const navigation = useNavigation();

    return (
        <View style={[styles.container, { backgroundColor: primaryColor }]} >
            <View style={styles.topContainer}>
                <View style={styles.topIcon}>
                    <Ionicons size={30} color="white" name="chevron-back-outline" onPress={() => {
                        props.navigation.goBack();
                    }} />
                    <Ionicons size={30} color="white" name="cart" onPress={() => {
                        navigation.navigate("Cart",)

                    }} />
                </View>
                <Image style={styles.mainImage} source={props.route.params.image} />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.name}>{props.route.params.name}</Text>
                <Text style={styles.name}>{props.route.params.price}</Text>
                <Text style={[styles.typeContainerTop, { marginTop: 12, fontSize: 13 }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                <Text style={[styles.name, { fontSize: 14, marginTop: 24 }]}>Color</Text>
                <View style={{ flexDirection: "row", marginTop: 12.0 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        setPrimaryColor("#403F44");
                    }}>
                        <View style={[styles.image, { backgroundColor: "#403F44", marginRight: 12.0, }]} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        setPrimaryColor("#7FBFFF");
                    }}>
                        <View style={[styles.image, { backgroundColor: "#7FBFFF", marginRight: 12.0, }]} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        setPrimaryColor("#53EC9F");
                    }}>
                        <View style={[styles.image, { backgroundColor: "#53EC9F", marginRight: 12.0, }]} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        setPrimaryColor("#1CC8CB");
                    }}>
                        <View style={[styles.image, { backgroundColor: "#1CC8CB", marginRight: 12.0, }]} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        setPrimaryColor("#F57100");
                    }}>
                        <View style={[styles.image, { backgroundColor: "#F57100", marginRight: 12.0, }]} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 24.0, }}>
                    <TouchableNativeFeedback onPress={() => {
                        navigation.navigate("Cart", { image: props.route.params.image, name: props.route.params.name, color: props.route.params.color, price: props.route.params.price })

                    }}>
                        <View style={[styles.btn, { backgroundColor: "#C3F1F1" }]}>
                            <Text style={[styles.typeContainerTop, { color: primaryColor }]}>Add to cart</Text>
                        </View>

                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => {

                    }}>
                        <View style={[styles.btn, { backgroundColor: primaryColor }]}>
                            <Text style={[styles.typeContainerTop, { color: "white" }]}>Buy Now</Text>
                        </View>

                    </TouchableNativeFeedback>

                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5192FC",
    },
    topContainer: {
        backgroundColor: "transparent",
        flex: 1.5,
    },
    topIcon: {
        flexDirection: "row",
        marginHorizontal: 6.0,
        marginTop: 12.0,
        justifyContent: "space-between",
    },
    bottomContainer: {
        backgroundColor: "white",
        flex: 2,
        padding: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    mainImage: {
        height: 200,
        width: 200,
        alignSelf: "center",
    },
    typeContainer: {
        height: 115,
        width: 100,
        marginTop: 24.0,
        marginRight: 10.0,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "#F3F2F7",
    },
    typeContainerTop: {
        fontSize: 12.0,
        color: "#BCBEBF",
        fontWeight: "bold",
    },
    btn: { marginTop: 12.0, height: 45, width: "45%", borderRadius: 5, justifyContent: "center", alignItems: "center", backgroundColor: "#5295FF" }
});

export default DetailsScreen;