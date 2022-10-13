import { Picker } from "@react-native-picker/picker";
import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Product({title, setTitle, weight, setWeight, selectInput, setSelectInput, price, setPrice, index, ...rest}) {

    return (
        <KeyboardAvoidingView {...rest}>
            <Text style={styles.title}>{title == "" ? "Produto "+index : title}</Text>

            <TextInput 
                placeholder="Nome" 
                style={styles.inputs} 
                value={title}
                onChangeText={(text) => setTitle(text)}
            />

            <View style={styles.row}>
                <TextInput 
                    placeholder="Peso" 
                    style={styles.weightInput}
                    value={weight}
                    onChange={(text) => setWeight(text)}
                />
                <View style={styles.unityInput}>
                    <Picker
                    onValueChange={(value) => setSelectInput(value)}
                    selectedValue={selectInput}
                    >
                        <Picker.Item label="Selecione" value="" />
                        <Picker.Item label="Gramas" value="gr" />
                        <Picker.Item label="Kilos" value="kg" />
                        <Picker.Item label="Mililitos" value="ml" />
                        <Picker.Item label="Litros" value="l" />
                    </Picker>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.currencyBox}>
                    <Text style={styles.currencyText}>R$</Text>
                </View>
                <TextInput 
                    placeholder="Valor" 
                    style={styles.priceInput}
                    value={price}
                    onChange={(text) => setPrice(text)}
                />
            </View>
        </KeyboardAvoidingView>
    )
}