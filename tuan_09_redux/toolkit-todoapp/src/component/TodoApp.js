import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../redux/todosSlice';

const TodoApp = () => {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        value={todoText}
        onChangeText={setTodoText}
        placeholder="Enter Todo"
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.text}</Text>
            <Button title="Remove" onPress={() => handleRemoveTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default TodoApp;
