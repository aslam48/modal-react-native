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
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { styles } from "./style";
import { useState } from "react";
import Down from './assets/down.png'
import usFlag from './assets/us-flag.jpg'
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
          <View style={styles.arror} onPress={hide}>
            <Ionicons name="arrow-back-sharp" size={30} color="black" />
          </View>

          <View style={styles.componentTitle}>
            <Text style={styles.swapText}>Continue Swap</Text>
          </View>

          {/* create swup details  */}
          <View style={styles.centerItem}>
            <View style={styles.containerColume}>
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

                {/* input  */}
                <View style={{flexDirection: "row"}}>
                  <TouchableOpacity style={{width: 100, height: 50, marginHorizontal:5, borderBottomColor: "#111", borderBottomWidth: 1, flexDirection: "row", fontSize:12}}>
                    
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
                </View>
                  </TouchableOpacity>
                </View>


              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
