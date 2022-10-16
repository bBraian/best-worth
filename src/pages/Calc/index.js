import { styles } from "./styles";
import { Product } from "../../components/Product";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { ProductsContext } from "../../context/ProductsContext";

export function Calc() {
    const { 
        name1, setName1, 
        name2, setName2, 
        weight1, setWeight1, 
        weight2, setWeight2, 
        selectInput1, setSelectInput1, 
        selectInput2, setSelectInput2, 
        price1, setPrice1,
        price2, setPrice2,
        calculate, validateFields
    } = useContext(ProductsContext);

    const navigation = useNavigation();

    function handleCalculate() {
        if(validateFields()) {
            calculate()
            navigation.navigate('result')
        }
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
                    setPrice={setPrice1}
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
                    setPrice={setPrice2}
                    index="2"
                    />
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleCalculate}> 
                <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}