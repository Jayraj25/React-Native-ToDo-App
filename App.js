import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import Header from "./components/header";
import TodoItem from "./components/todoItem";

export default function App() {
    const [todos, setTodos] = useState([
        {toDo: 'Learn React', key: '1'},
        {toDo: 'Learn Redux', key: '2'},
        {toDo: 'Learn React Hooks', key: '3'},
        {toDo: 'Learn React Native', key: '4'},
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key !== key);
        });
    }

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <View style={styles.list}>
                    {
                        todos.map(item => (
                            <TodoItem key={item.key} item={item} pressHandler={pressHandler}/>
                        ))
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
