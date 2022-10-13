import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({  
    title: {
        fontSize: 24,
        fontFamily: 'Rajdhani_500Medium'
    },

    inputs: {
        width: '100%',
        height: 55,
        paddingHorizontal: 24,
        backgroundColor: '#fff',
        marginTop: 16,
        borderRadius: 12,
        fontSize: 20,
        fontFamily: 'Rajdhani_400Regular'
    },

    weightInput: {
        flex: 2,
        height: 55,
        backgroundColor: '#fff',
        marginTop: 16,
        marginRight: 4,
        paddingHorizontal: 24,
        borderRadius: 12,
        fontSize: 20,
        fontFamily: 'Rajdhani_400Regular'
    },

    unityInput: {
        flex: 2,
        height: 55,
        backgroundColor: '#fff',
        marginTop: 16,
        marginLeft: 4,
        paddingLeft: 12,
        borderRadius: 12,
        fontSize: 20,
        fontFamily: 'Rajdhani_400Regular'
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
    },

    currencyBox: {
        marginTop: 16,
        flex: 1,
        height: 55,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    currencyText: {
        fontSize: 24,
        fontFamily: 'Rajdhani_400Regular'
    },

    priceInput: {
        flex: 6,
        height: 55,
        backgroundColor: '#fff',
        marginTop: 16,
        marginLeft: 4,
        paddingLeft: 12,
        borderRadius: 12,
        fontSize: 20,
        fontFamily: 'Rajdhani_400Regular',
        paddingLeft: 24,
    },
})