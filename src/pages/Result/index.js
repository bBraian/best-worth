import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

export function Result() {
    const navigation = useNavigation()
    const { resultPrice, resultWeight, resultName, resetValues, resultUnit } = useContext(ProductsContext);

    let unidade = "";
    if(resultUnit === "gr") {
        unidade = "gramas";
    } else if(resultUnit === "kg") {
        unidade = "kilos";
    } else if(resultUnit === "ml") {
        unidade = "mililitros";
    } else {
        unidade = "litros";
    }

    function handleCalcAgain() {
        resetValues();
        navigation.navigate('calc')

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{marginTop: -95, width: '100%'}}>
                <Text style={styles.title}>A melhor opção para você comprar é...</Text>
                <View style={styles.boxContainer}>
                    <View style={styles.icon}>
                        <AntDesign name="shoppingcart" size={32} color="black" />
                    </View>
                    <View style={styles.infosBox}>
                        <Text style={styles.name}>{resultName}</Text>
                        <Text style={styles.weight}>{resultWeight} {unidade}</Text>
                        <Text style={styles.price}>por R$ {resultPrice}</Text>
                    </View>
                </View>
            </View>


            <TouchableOpacity style={styles.button} onPress={handleCalcAgain}>
                <Text style={styles.textButton}>Calcular Novamente</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}