import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput, Button} from "react-native";

export default function AddToDo({addToDo}) {
    const [value, setValue] = useState("");

    const pressHandler = () => {
        if (value.trim()) {
            addToDo(value);
            setValue("");
        }
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Add todo..."
                onChangeText={setValue}
                value={value}
            />
            <Button title="Add" onPress={pressHandler} color='coral'/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
});