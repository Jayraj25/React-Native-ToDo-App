import { StyleSheet, Text, View } from 'react-native';
import {useState} from "react";
import Header from "./components/header";

export default function App() {
    const [todos, setTodos] = useState([
        { text: 'Learn React', key: '1' },
        { text: 'Learn Redux', key: '2' },
        { text: 'Learn React Hooks', key: '3' },
        { text: 'Learn React Native', key: '4' },
    ]);


  return (
    <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
            <View style={styles.list}>
                {
                    todos.map(item =>
                        <Text key={item.key}>{item.text}</Text>
                    )
                }
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    }
});
