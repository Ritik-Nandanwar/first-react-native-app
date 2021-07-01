import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [todos] = useState([
    {
      todo: "Design website",
      key: 1,
    },
    {
      todo: "Show it to client",
      key: 2,
    },
    {
      todo: "Develope website",
      key: 3,
    },
    {
      todo: "Get payment",
      key: 4,
    },
    {
      todo: "Get payment",
      key: 5,
    },
    {
      todo: "Get payment",
      key: 6,
    },
    {
      todo: "Get payment",
      key: 7,
    },
    {
      todo: "Get payment",
      key: 45,
    },
    {
      todo: "Get payment",
      key: 54,
    },
    {
      todo: "Get payment",
      key: 24,
    },
    {
      todo: "Get payment",
      key: 14,
    },
  ]);
  // const renderItem = ({ todo }) => <Text></Text>;
  return (
    <View>
      {/* // header */}
      <View style={styles.container}>
        <Text style={styles.logo}>T o d o A p p</Text>
      </View>
      {/* // input */}
      <View>
        <TextInput style={styles.todoInput} placeholder="Enter todo here" />
        <View style={styles.btnContainer}>
          <Button color="green" title="Add Todo" />
        </View>
      </View>
      {/* // todo list */}
      <View style={styles.todoContainer}>
        <FlatList
          keyExtractor={(todo) => todo.key}
          data={todos}
          renderItem={({ item }) => (
            <Text style={styles.todoItem}>{item.todo}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#444",
  },
  logo: {
    fontSize: 24,
    alignContent: "center",
    color: "#fff",
    marginLeft: 130,
    marginTop: 20,
    justifyContent: "center",
  },
  todoInput: {
    borderWidth: 3,
    width: 250,
    marginLeft: 70,
    marginTop: 40,
    padding: 14,
    fontSize: 18,
    borderRadius: 16,
  },
  btnContainer: {
    width: 150,
    marginHorizontal: 120,
    margin: 20,
  },
  todoContainer: {
    display: "flex",
    alignItems: "center",
  },
  todoItem: {
    backgroundColor: "#eee",
    padding: 16,
    width: 350,
    fontSize: 20,
    color: "#111",
    margin: 26,
    borderRadius: 8,
  },
});
