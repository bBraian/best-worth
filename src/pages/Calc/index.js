import { styles } from "./styles";
import { Product } from "../../components/Product";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function Calc() {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [weight1, setWeight1] = useState(0);
    const [weight2, setWeight2] = useState(0);
    const [selectInput1, setSelectInput1] = useState("");
    const [selectInput2, setSelectInput2] = useState("");
    const [price1, SetPrice1] = useState(0);
    const [price2, SetPrice2] = useState(0);

    const navigation = useNavigation();

    function handleCalculate() {
        navigation.navigate('result', {name1})
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.productContainer}>
                <Product  
                    title={name1}
                    setTitle={setName1}
                    weight={weight1}
                    setWeight={setWeight1}
                    selectInput={selectInput1}
                    setSelectInput={setSelectInput1}
                    price={price1}
                    setPrice={SetPrice1}
                    index="1"
                />
                <Product 
                    style={{marginTop: 50}}
                    title={name2}
                    setTitle={setName2}
                    weight={weight2}
                    setWeight={setWeight2}
                    selectInput={selectInput2}
                    setSelectInput={setSelectInput2}
                    price={price2}
                    setPrice={SetPrice2}
                    index="2"
                    />
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleCalculate}> 
                <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}