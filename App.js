import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextView from './components/text';

export default function App() {
    return (
        <View style={styles.container}>
            <TextView className={styles.textContainer}>
                Block Notes
            </TextView>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    textContainer: {
        marginTop: 50,
    }
});
