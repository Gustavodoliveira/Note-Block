import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Notation = ({ title }) => {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: '#cac9c91c' }} style={{ padding: 14, borderRadius: 10 }}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  )
}

export default Notation


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A0840',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1
  },
  text: {
    color: '#fff',
  }
})