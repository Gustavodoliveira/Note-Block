import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import TextView from './components/text';
import Button from './components/button';
import Notation from './components/Notation';
import Modal from './components/modal';

export default function App() {
  const [notation, setNotation] = useState({});
  const [notationArray, setNotationArray] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function ViewNotation({ title, index }) {
    return (
      <Notation
        title={title}
        deleteNotation={() => NotationDelete(index)}
        pressableNotation={NotationPressable}
      />
    );
  }

  function NotationDelete(id) {
    if (id === 0) {
      const ind = notationArray.filter((note, index) => index !== id);
      setNotationArray(ind);
    }

    setNotationArray(notations => notations.slice(id, notations?.length || id));
  }

  function NotationPressable() {
    console.log(notationArray);
  }

  function press() {
    setModalIsVisible(() => !modalIsVisible);
  }

  return (
    <LinearGradient style={styles.container} colors={['#F2D022', '#F26B76']}>
      <TextView className={styles.textContainer}>Block Notes</TextView>
      <View style={styles.buttonContainer}>
        <Button handlePress={press}>Create Note</Button>
      </View>
      <View style={styles.noteContainer}>
        <View style={styles.noteContainerText}>
          <Text style={styles.text}>Notes</Text>
          <SafeAreaView>
            <FlatList
              data={notationArray}
              renderItem={({ item, index }) => (
                <ViewNotation title={item.Title} index={index} />
              )}
              keyExtractor={(iten, index) => index}
              alwaysBounceVertical={false}
            />
          </SafeAreaView>
        </View>
        {modalIsVisible && (
          <View style={styles.modalContainer}>
            <Modal
              closeModal={() => setModalIsVisible(() => !modalIsVisible)}
              changeTitle={text => setNotation({ ...notation, Title: text })}
              changeContent={text =>
                setNotation({
                  ...notation,
                  Content: text,
                })
              }
              saveNotation={() => {
                setNotationArray(() => [...notationArray, notation]);
              }}
            />
          </View>
        )}
      </View>

      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 20,
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
    alignItems: 'center',
  },
  noteContainer: {
    marginTop: 50,
  },
  noteContainerText: {
    paddingHorizontal: 20,
  },
  noteContent: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  modalContainer: {
    alignItems: 'center',
  },
});
