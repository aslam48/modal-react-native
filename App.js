import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import { View, Text, SafeAreaView,Pressable, Button, StyleSheet, Modal} from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function App() {
    const [visible, setVisibility] = useState(false);
    const show = () => setVisibility(true)
    const hide = () => setVisibility(false)
  return ( 
      <SafeAreaView style={styles.fill}>
        <Button title='Show' onPress={show}/>
            <Modal
            visible={visible}
            onRequestClose={hide}
            animationType="fade"
            transparent
            >
                <Pressable style={styles.upper} onPress={hide} /> 
                <View style={styles.lower}>
                    <Button title="Hide" onPress={hide}/>
                </View> 
        </Modal>
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    fill: {flex: 1},
    upper: {height: 100, backgroundColor: '#DDD', opacity: .5},
    lower: {flex: 1, backgroundColor: "white", }
})