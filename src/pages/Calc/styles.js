import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        paddingTop: 26,
        paddingBottom: 106,
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    button: {
        position: 'relative',
        flex: 1,
        bottom: 32,
        backgroundColor: 'red',
        width: '100%',
        height: 60,
        marginTop: 80,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Rajdhani_700Bold'
    },
    productContainer: {
        width: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly',
        marginBottom: 28,
        marginTop: 65
    }
})