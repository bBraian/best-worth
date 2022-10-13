import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        marginVertical: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '##e0e0e0'
    },

    image: {
        width: 260,
        height: 260,
        marginTop: 20
    },

    button: {
        width: 65,
        height: 65,
        borderRadius: 50,
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textContent: {
        marginTop: 62,
        marginHorizontal: 32
    },

    text: {
        fontSize: 32,
        fontFamily: 'Rajdhani_500Medium',
    },

    textBold: {
        fontFamily: 'Rajdhani_700Bold',
    }
})