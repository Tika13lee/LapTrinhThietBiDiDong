// TodoApp.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, fetchTodos } from '../redux/actions';

const TodoApp = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), title: input };
    dispatch(addTodo(newTodo));
    setInput('');
    
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Todo App</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        placeholder="Add a new todo"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
              <Text style={{ color: 'red' }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default TodoApp;
