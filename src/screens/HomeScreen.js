import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomProduct from '../componets/BottomProduct';
import TopProuct from '../componets/TopProduct';
const primaryColor = "#435060";

const HomeScreen = () => {
    const [apple, setApple] = useState(true);
    const [samsung, setSamsung] = useState(false);
    const [xiaomi, setXiaomi] = useState(false);
    const [asus, setAsus] = useState(false);

    return (
        <ScrollView >
            <View style={styles.top}>
                <AntDesign color={primaryColor} size={25} name="menu-fold" />
                <View style={styles.row}>
                    <AntDesign color={primaryColor} size={25} name="search1" />

                    <Image source={require("../assets/user.jpeg")} style={styles.image} />
                </View>

            </View>
            <Text style={styles.textDiscover}>Discover</Text>
            <View style={[styles.row, { marginTop: 24.0, marginLeft: 12.0 }]}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    setApple(true);
                    setSamsung(false);
                    setXiaomi(false);
                    setAsus(false);
                }}>
                    <Text style={apple === true ? styles.selectedText : styles.unselectedText}>Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    setApple(false);
                    setSamsung(true);
                    setXiaomi(false);
                    setAsus(false);
                }}>
                    <Text style={samsung === true ? styles.selectedText : styles.unselectedText}>Samsung</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    setApple(false);
                    setSamsung(false);
                    setXiaomi(true);
                    setAsus(false);
                }}>
                    <Text style={xiaomi === true ? styles.selectedText : styles.unselectedText}>Xiaomi</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    setApple(false);
                    setSamsung(false);
                    setXiaomi(false);
                    setAsus(true);
                }}>
                    <Text style={asus === true ? styles.selectedText : styles.unselectedText}>Asus</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ height: "80%", paddingLeft: 12.0, marginTop: 18 }}>
                <TopProuct color="#F0763B" price="195" imageUrl={require("../assets/1.png")} name="Apple M3 Watch" />
                <TopProuct color="#1CC8CB" price="100" imageUrl={require("../assets/3.png")} name="Apple i11 Watch" />
                <TopProuct color="#1CC79B" price="120" imageUrl={require("../assets/3.png")} name="Apple 5 Watch" />
            </ScrollView>
            <Text style={[styles.textDiscover, { fontSize: 20, marginTop: 10, marginBottom: 5 }]}>Discount Offer</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ height: "55%", paddingLeft: 12.0, marginTop: 10 }}>
                <BottomProduct color="#1DBEC0" price="40" imageUrl={require("../assets/1.png")} name="Apple M3 Watch" />
                <BottomProduct color="#1DA8C4" price="75" imageUrl={require("../assets/3.png")} name="Apple i11 Watch" />
                <BottomProduct color="#1ECEA0" price="80" imageUrl={require("../assets/3.png")} name="Apple 5 Watch" />
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    top: {
        height: 40,
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
    textDiscover: {
        color: primaryColor,
        fontSize: 26,
        fontWeight: "bold",
        marginLeft: 12.0,
    },
    selectedText: {
        color: primaryColor,
        fontSize: 16,
        fontWeight: "700",
        marginRight: 12.0,
    },
    unselectedText: {
        color: "grey",
        fontSize: 16,
        marginRight: 12.0,
    }


});

export default HomeScreen;
