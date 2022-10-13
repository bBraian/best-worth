import { useRoute } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';

export function Result() {
    const route = useRoute();
    const bestWorth = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={{marginTop: -95, width: '100%'}}>
                <Text style={styles.title}>A melhor opção para você comprar é...</Text>
                <View style={styles.boxContainer}>
                    <View style={styles.icon}>
                        <AntDesign name="shoppingcart" size={32} color="black" />
                    </View>
                    <View style={styles.infosBox}>
                        <Text style={styles.name}>Nutella</Text>
                        <Text style={styles.weight}>150 gramas</Text>
                        <Text style={styles.price}>por R$ 24,00</Text>
                    </View>
                </View>
            </View>


            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Calcular Novamente</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}