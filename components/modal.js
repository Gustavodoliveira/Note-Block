import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const Modal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconCloseContainer}>
        <Pressable android_ripple={{ color: '#cac9c91c' }}>
          <Ionicons name='close-circle' style={styles.iconClose} />
        </Pressable>
      </View>

      <Text style={styles.textModal}>
        Title:
      </Text>
      <View style={styles.containerTitle}>
        <TextInput style={styles.inputStyle}> </TextInput>
      </View>

      <Text style={styles.textModal}>
        Content:
      </Text>
      <View style={styles.containerTitle}>
        <TextInput style={styles.inputStyle}> </TextInput>
      </View>

    </View>

  )
}

export default Modal

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#3243A6',
    padding: 50,
    width: 350,
    borderRadius: 8,
    elevation: 5,
    position: 'relative'
  },
  iconCloseContainer: {
    position: 'absolute',
    right: 30,
    top: 20,

  },
  iconClose: {
    fontSize: 25
  },
  containerTitle: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center'
  },
  textModal: {
    alignItems: 'stretch',
    fontSize: 20,
    marginLeft: 10
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    width: 300,
    paddingHorizontal: 20,
    marginHorizontal: 10
  }
})