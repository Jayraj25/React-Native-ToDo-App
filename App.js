import {Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, Text, View} from 'react-native';
import {useState} from "react";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddToDo from "./components/addToDo";

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

    const addToDo = (text) => {
        if (text.length > 3) {
            setTodos((prevTodos) => {
                return [{toDo: text, key: Math.random().toString()}, ...prevTodos];
            });
        } else {
            Alert.alert('OOPS!', 'Todo must be over 3 characters long.', [{text: 'Okay'}]);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }
        }>
            <View style={styles.container}>
                <Header/>
                <View style={styles.content}>
                    <AddToDo addToDo={addToDo}/>
                    <View style={styles.list}>
                        {
                            todos.map(item => (
                                <TodoItem key={item.key} item={item} pressHandler={pressHandler}/>
                            ))
                        }
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
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
