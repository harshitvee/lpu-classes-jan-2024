function App() {
  // const items3 = [<h3> one </h3>, <h3> two </h3>, <h3>three</h3>];
  const taskList = ["teach students", "play cricket", "improve UI"];
  // const taskListLis = [];
  // for (let task of taskList) {
  //   const taskLi = <li>{task}</li>;
  //   taskListLis.push(taskLi);
  // }

  // taskList.forEach((task) => {
  //   const taskLi = <li>{task}</li>;
  //   taskListLis.push(taskLi);
  // });
  // const taskListLis = taskList.map((task) => {
  //   return <li>{task}</li>;
  // });

  // implicit
  // const taskListLis = taskList.map((task) => <li>{task}</li>);

  return (
    <div>
      <h1>App</h1>
      <ul>
        {taskList.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
