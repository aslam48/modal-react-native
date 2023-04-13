import {StyleSheet} from 'react-native'



 export const styles = StyleSheet.create({
            //  center Text
    centerItem: {flex: 1, justifyContent: 'center', flexDirection: "row"},
    containerColume: {flexDirection: "column"},
         
            


             //    title style 
    fill: {flex: 1},
    upper: {height: 100, backgroundColor: '#DDD', opacity: .5},
    lower: {flex: 1, backgroundColor: "white",  borderRadius: 10,borderWidth: 1,borderColor: "#DDD"},


    arror: {position: "absolute", marginLeft: 10, marginTop: 8},
    componentTitle: {flex: 1, justifyContent: 'center', flexDirection: "row", marginTop: 13},
    swapText: {fontSize: 18, fontWeight: "bold"},

                //   modal text 
     swupText: {fontSize: 16, fontWeight: "bold",textAlign: 'center', marginBottom:17},
     center: {justifyContent: 'center', flexDirection: "row"},
     centerSubText: {textAlign: "center", color: "#707EAE"},
     centerSubText__Quoted__Rate: {textAlign: "center", color: "#A9A9A9"},
        

     //  rate 
 rate: {justifyContent:"center", width: 76, alignItems: "center", elevation: 2, backgroundColor: "#009688", borderRadius: 10, paddingVertical: 9, paddingHorizontal: 9},
 rateText: {color: "white"},
 rateBtn: {justifyContent: "center", alignItems: "center", marginTop: 10},

 
})