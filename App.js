import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

const {width, height} = Dimensions.get("window")
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { styles } from "./style";
import { useState } from "react";
import Down from './assets/down.png'
import usFlag from './assets/us-flag.jpg'
import Nigeria from './assets/Flag-Nigeria.webp'
import CountryPicker from "react-native-country-picker-modal"
import { FlatList } from "react-native";


export default function App() {

//     const [currencies, setCurrencies] = useState([])
//     const [selectedcurrencies, setSelectedCurrencies] = useState(null)
//     const [modalVisible, setModalVisible] = useState(false)

// useEffect(() => {
//   fetch("https://restcountries.com/v3.1/all")
//     .then(response => response.json())
//     .then(data => {
//       let currencyData = data.map(item => {
//         return {
//           code: item.appha2code,
//           item: item.name,
//           callingCode: `+${item.callingCodes[0]}`,
//           flag: `https://countryflagsapi.com/png/${item.name}`
//         }
//       });
//       setCurrencies(currencyData);
//       if(currencyData.length > 0 ){
//         let defaultData = areaData.filter(a =>a.code == "US")

//         if(defaultData.length > 0){
//           setSelectedCurrencies(defaultData[0])
//         }
//       }
//     })
// }, [])
  
// function renderAreaCurrencyModal(){
//   return(
//     <Modal animationType="slide" transparent={true} visible={modalVisible}>
//       <TouchableWithoutFeedback
//       onPress={()=> setModalVisible(false)}
//       >
//         <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
//           <View style={{height:400, width:width*0.8, backgroundColor: "#342342", borderRadius:12}}>
//             <FlatList data={areas} renderItem={renderItem} keyExtractor={(item)=> item.code} showsVerticalScrollIndicator={false}/>
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </Modal>
//   )
// }

  return (
    <SafeAreaView style={styles.fill}>

         

          {/* create swup details  */}
           
              <View>
                <Text style={styles.swupText}>Create Swap Order</Text>
              </View>

              <View>
                <Text style={styles.centerSubText}>
                  Enter the quantity you want
                </Text>
                <Text style={styles.centerSubText}>below</Text>
                <Text style={styles.centerSubText__Quoted__Rate}>
                  Quoted Rate
                </Text>

                {/* rate  */}
                <View style={styles.rateBtn}>
                <TouchableOpacity 
                 activeOpacity={1} style={styles.rate}>
                  <Text style={styles.rateText}>700</Text>
                </TouchableOpacity>
                </View>
              </View>

                {/* input  */}
                <View style={{flexDirection: "row", justifyContent:"center"}}>

                  {/* amount text input */}
                  <TextInput keyboardType="numeric" placeholder="Enter your amount" placeholderTextColor='gray' selectionColor='gray' style={{width: 200, marginVertical: 10, borderBottomColor:" #111", borderBottomWidth: 1, height: 40, fontSize: 20, color: "#111"}}  />

                  <TouchableOpacity style={{width:80, height: 50, marginHorizontal:5, borderBottomColor: "#111", borderBottomWidth: 1, flexDirection: "row", fontSize:12}}>
                    
                    <View style={{justifyContent: "center"}}>
                     <Image source={Down}
                     style={{width:12, height:10, tintColor: "#111"}}
                     />
                   </View>
   
                   <View style={{justifyContent: "center", marginLeft: 5}}>
                     <Image source={usFlag}
                     resizeMode="contain" 
                     style={{width: 35, height:13}}
                     />
                     {/* <CountryPicker 
                     withFilter
                     withCurrency
                     /> */}
                   </View>
   
                   <View style={{justifyContent: "center", marginLeft: 5}}>
                     <Text style={{ color: "#lll", fontSize:14}}>usd</Text>
                   </View>
                     </TouchableOpacity>

                     {/* {renderAreaCurrencyModal()} */}
                </View>

                {/* input 2 */}

                <View style={{flexDirection: "row", justifyContent:"center",}}>
                  {/* amount text input */}
                  <TextInput keyboardType="numeric" placeholder="Enter your amount" placeholderTextColor='gray' selectionColor='gray' style={{width: 200, marginVertical: 10, borderBottomColor:" #111", borderBottomWidth: 1, height: 40, fontSize: 20, color: "#111"}}  />


                  <TouchableOpacity style={{width:80, height: 50, marginHorizontal:5, borderBottomColor: "#111", borderBottomWidth: 1, flexDirection: "row", fontSize:12}}>
                    
                    <View style={{justifyContent: "center"}}>
                     <Image source={Down}
                     style={{width:12, height:10, tintColor: "#111"}}
                     />
                   </View>
   
                   <View style={{justifyContent: "center", marginLeft: 5}}>
                     <Image source={Nigeria}
                     resizeMode="contain" 
                     style={{width: 35, height:13}}
                     />
                     {/* <CountryPicker 
                     withFilter
                     withCurrency
                     /> */}
                   </View>
   
                   <View style={{justifyContent: "center", marginLeft: 5}}>
                     <Text style={{ color: "#111", fontSize:14}}>usd</Text>
                   </View>
                     </TouchableOpacity>

                     {/* {renderAreaCurrencyModal()} */}
                </View>
           

    </SafeAreaView>
  );
}
