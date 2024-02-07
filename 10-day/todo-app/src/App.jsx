import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
import styles from "./App.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodosProvider from "./context/TodosProvider";

function App() {
  return (
    <TodosProvider>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={styles.App}>
        <h1 className={styles.heading}>Todo App</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </TodosProvider>
  );
}
export default App;
