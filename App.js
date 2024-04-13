import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextView from './components/text';
import Button from './components/button';
import { useState } from 'react';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function press() {
    console.log('hi hi');
  }

  return (
    <LinearGradient style={styles.container} colors={['#F2D022', '#F26B76']}>
      <TextView className={styles.textContainer}>
        Block Notes
      </TextView>
      <View style={styles.buttonContainer}>
        <Button handlePress={press}>
          Create Note
        </Button>
      </View>
      <View style={styles.noteContainer}>
        <View style={styles.noteContainerText}>
          <Text style={styles.text}>Notes</Text>
        </View>

      </View>

      <StatusBar style="light" />
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 20
  },
  container: {
    flex: 1
  },
  textContainer: {
    marginTop: 50,
  },
  buttonContainer: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noteContainer: {
    marginTop: 50
  },
  noteContainerText: {
    paddingHorizontal: 20
  }

});
