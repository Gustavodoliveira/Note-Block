import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Notation({ title, deleteNotation, pressableNotation, id }) {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: '#cac9c91c' }}
        style={{ padding: 14, borderRadius: 10 }}
        onPress={pressableNotation}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.containerIcon}>
          <Pressable
            android_ripple={{ color: '#cac9c91c' }}
            onPress={deleteNotation}>
            <Ionicons name="close-sharp" style={styles.icon} />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
}

export default Notation;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#0A0840',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  text: {
    color: '#fff',
  },
  containerIcon: {
    position: 'absolute',
    right: 20,
    bottom: 10,
  },
  icon: {
    color: 'red',
    fontSize: 24,
  },
});
