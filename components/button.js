import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Button = ({ children, className, handlePress }) => {
  return (

    <View style={style.container} >
      <Pressable android_ripple={{ color: '#E3E3E3' }} style={{ padding: 14 }} onPress={handlePress}>
        <Text style={style.text}>
          {children}
        </Text>
      </Pressable>
    </View>
  )
}

export default Button

const style = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderRadius: 8,
    maxWidth: 120,
    elevation: 100


  },
  text: {
    color: '#fff',
    fontSize: 16
  }
})