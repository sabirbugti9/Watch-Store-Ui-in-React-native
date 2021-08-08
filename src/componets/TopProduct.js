import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const TopProuct = ({ color, imageUrl, price, name }) => {
    const [isFvrt, setIsFvrt] = useState(price === "195" ? true : false);
    const onPressFvrt = () => {
        setIsFvrt(!isFvrt);
    }
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => {
            navigation.navigate("Details", { image: imageUrl, name: name, color: color, price: price })
        }}>
            <View style={[styles.topProduct, { backgroundColor: color }]}>
                <View style={styles.row}>
                    <Text style={[styles.selectedText, { color: "white", marginTop: 18, marginLeft: 18 }]}>{name}</Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        onPressFvrt();
                    }}>
                        <View style={[styles.image, { top: 10, height: 40, justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }]}>
                            <AntDesign color={"white"} size={25} name={isFvrt ? "heart" : "hearto"} />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.selectedText, { color: "white", marginTop: 0, marginLeft: 18, fontWeight: "normal" }]}>${price}</Text>
                <Image style={{ height: 180, width: 180, alignSelf: "center" }} source={imageUrl} />
            </View>
        </TouchableOpacity>

    );
}
const styles = StyleSheet.create({

    topProduct: {
        height: 280,
        width: 220,
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
export default TopProuct;