import { StyleSheet, Dimension, Dimensions } from "react-native";
const lebar = Dimensions.get('screen').width;
const tinggi = Dimensions.get('screen').height;
const style = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: tinggi / 10,
        backgroundColor: '#2A0944',
        justifyContent: 'center',
        elevation: 10
    },
    textHeader: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    content: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    },
    input: {
        height: tinggi / 15,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatlist: {
        flex: 1,
        height: tinggi,
        paddingHorizontal: 5,
        marginVertical: 10,
        marginBottom: 10
    },
    dataFlatlist: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    imputText: {
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        marginHorizontal: 10,
        width: lebar / 1.5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    buttonSearch: {
        backgroundColor: '#FEC260',
        height: tinggi / 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 20
    },
    viewButton: {
        color: '#000',
        fontWeight: 'bold'
    },
    viewText: {
        flex: 1,
        flexWrap: 'nowrap',
        paddingHorizontal: 10
    }
});

export { style };