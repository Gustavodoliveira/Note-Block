import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextView from './components/text';
import Button from './components/button';
import { useState } from 'react';
import Notation from './components/Notation';
import Modal from './components/modal';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function press() {
    setModalIsVisible(() => modalIsVisible ? false : true)
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
          <ScrollView style={styles.noteContent}>
            <Notation title={'Test'} />
          </ScrollView>
        </View>
        {
          modalIsVisible && (
            <View style={styles.modalContainer}>
              <Modal />
            </View>

          )
        }


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
    flex: 1,
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
  },
  noteContent: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  modalContainer: {
    alignItems: 'center'
  }

});
