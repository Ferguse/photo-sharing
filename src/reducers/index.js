const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [],
};

function updateObject(oldObject, newValues) {}
function updateItemInArray(array, itemId, updateItemCallback) {}

function setVisibilityFilter(state, action) {
  return updateObject(state, { visibilityFilter: action.filter });
}

function addTodo(state, action) {
  const newTodos = state.todos.concat({
    id: action.id,
    text: action.text,
    completed: false,
  });

  return updateObject(state, { todos: newTodos });
}

function toggleTodo(state, action) {
  const newTodos = updateItemInArray(state.todos, action.id, (todo) => updateObject(todo, { completed: !todo.completed }));

  return updateObject(state, { todos: newTodos });
}

function editTodo(state, action) {
  const newTodos = updateItemInArray(state.todos, action.id, (todo) => updateObject(todo, { text: action.text }));

  return updateObject(state, { todos: newTodos });
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return setVisibilityFilter(state, action);
    case 'ADD_TODO':
      return addTodo(state, action);
    case 'TOGGLE_TODO':
      return toggleTodo(state, action);
    case 'EDIT_TODO':
      return editTodo(state, action);
    default:
      return state;
  }
}

export default appReducer;
