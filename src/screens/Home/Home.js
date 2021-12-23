import React from 'react'
            import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, Image } from 'react-native'



const Home = () => {
return (
    <SafeAreaView  style={styles.AndroidSafeArea}>
    </SafeAreaView >
)
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

export default Home