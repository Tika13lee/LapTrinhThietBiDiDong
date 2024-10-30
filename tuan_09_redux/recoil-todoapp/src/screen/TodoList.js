import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, todoListStats } from '../recoil/todoState';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../api/todoApi';

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const stats = useRecoilValue(todoListStats);
  const [newTodo, setNewTodo] = React.useState('');

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await fetchTodos();
      setTodoList(todos);
    };
    loadTodos();
  }, []);

  const handleAddTodo = async () => {
    const todo = { title: newTodo, isComplete: false };
    const savedTodo = await addTodo(todo);
    setTodoList((oldTodoList) => [...oldTodoList, savedTodo]);
    setNewTodo('');
  };

  const handleToggleComplete = async (id, isComplete) => {
    const updatedTodo = await updateTodo(id, { isComplete: !isComplete });
    setTodoList((oldTodoList) =>
      oldTodoList.map((item) =>
        item.id === id ? { ...item, isComplete: updatedTodo.isComplete } : item
      )
    );
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodoList((oldTodoList) => oldTodoList.filter((item) => item.id !== id));
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text>Total: {stats.totalNum}</Text>
      <Text>Completed: {stats.totalCompletedNum}</Text>
      <Text>Uncompleted: {stats.totalUncompletedNum}</Text>

      <View
        style={{
          height: 40,
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          marginVertical: 20,
          paddingLeft: 10,
        }}>
        <TextInput
          value={newTodo}
          onChangeText={setNewTodo}
          placeholder="Add a new task"
        />
      </View>
      <Button title="Add Todo" onPress={handleAddTodo} />

      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
              justifyContent:"space-between"
            }}>
            <Text
              onPress={() => handleToggleComplete(item.id, item.isComplete)}
              style={{
                textDecorationLine: item.isComplete ? 'line-through' : 'none',
              }}>
              {item.title}
            </Text>
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
    </ScrollView>
  );
};

export default TodoList;
