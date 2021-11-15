import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// Structure of an object
interface Todo {
  id: number;
  title: String;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: String, completed: boolean) => {
  console.log(`
  The Todo with the ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
  `);
};
