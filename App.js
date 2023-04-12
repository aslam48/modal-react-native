import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Button,
  StyleSheet,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { styles } from "./style";
import { useState } from "react";

export default function App() {
  const [visible, setVisibility] = useState(false);
  const show = () => setVisibility(true);
  const hide = () => setVisibility(false);
  return (
    <SafeAreaView style={styles.fill}>
      <Button title="Show" onPress={show} />
      <Modal
        visible={visible}
        onRequestClose={hide}
        animationType="fade"
        transparent
      >
        <Pressable style={styles.upper} onPress={hide} />
        <View style={styles.lower}>

     
        <View style={styles.arror}>              
            <Ionicons name="arrow-back-sharp" size={30} color="black" onPress={hide}/>
         </View> 

           <View style={styles.componentTitle}>
              <Text style={styles.swapText}>Continue Swap</Text>
            </View>



              {/* create swup details  */}
           <View style={styles.centerItem}>

            <View style={styles.containerColume}>
            <View style={styles.titleSwap}>
                <Text style={styles.swupText}>Create Swap Order</Text>
            </View>

            <View>
              <Text>Enter the quantity you want</Text>
              <Text style={styles.center}>below</Text>
            </View>

            </View>
           
           </View>
            


           
          
        </View>
      </Modal>
    </SafeAreaView>
  );
}
