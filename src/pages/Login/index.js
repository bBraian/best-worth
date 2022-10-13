import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'

import { styles } from "./styles";
import logo from '../../assets/bestprice.png';

export function Login() {
    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate('calc');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={logo} resizeModa="cover" />
            <View style={styles.textContent}>
                <Text style={styles.text}>Calcule o <Text style={styles.textBold}>melhor preço</Text> na sua compra</Text>
            </View>
            <TouchableOpacity onPress={handleNavigate} style={styles.button} activeOpacity={0.7}>
                <Feather name="arrow-right" size={35} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}