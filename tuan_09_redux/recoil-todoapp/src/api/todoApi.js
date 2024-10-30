export const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return await response.json();
};

export const addTodo = async (newTodo) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo),
  });
  return await response.json();
};

export const updateTodo = async (id, updatedTodo) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTodo),
  });
  return await response.json();
};

export const deleteTodo = async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { method: 'DELETE' });
};
