// console.log("network request");
// const endpoint = "http://localhost:3000/todos";

// fetch(endpoint)
//   .then((response) => {
//     console.log("inside then");
//     if (!response.ok) {
//       throw new Error(`Something went wrong, status : ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log("inside catch");
//     console.dir(error);
//   });

// async function getTodos() {
//   try {
//     const response = await fetch(endpoint);
//     if (!response.ok) {
//       throw new Error(`Something went wrong, status : ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getTodos();

// post data

// fetch

// get
// post HTTP ""

// postman
// curl

async function createNewTodo(newTodo) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    if (!response.ok) {
      throw new Error(`Something went wrong, ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

createNewTodo({
  id: "2",
  title: "Task B",
  completed: false,
});
// req -----> server ----
// post
