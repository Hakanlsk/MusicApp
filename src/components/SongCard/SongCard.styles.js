import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row'
    },
    image: {
        width:100,
        height:100,
        borderRadius:999
    },
    inner_contaniner:{
        justifyContent:'center',
        padding:10,
        flex:1
    },
    title:{
        fontWeight: '600',
        fontSize:24,
    },
    info_container:{
        alignItems:'center',
        flexDirection:'row',
        flex:1
    },
    content_container:{ 
        flexDirection:'row',
    },
    year:{
        fontSize:12,
        marginLeft:10,
        color:'gray',
        fontWeight:'bold'
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius:5
    },
    soldout_title:{
        fontSize:12,
        color:'red'
    }
})