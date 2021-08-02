import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useState, useEffect } from "react";
import { v4 } from "uuid";

const TODO_APP_STORAGE_KEY = "TODO_APP";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [editText, setEditText] = useState(false);
  const [editItemID, setEditItem] = useState();

  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const onAddBtnClick = useCallback(
    (e) => {
      // them text input vao danh sach todoList
      setTodoList([
        { id: v4(), name: textInput, isCompleted: false },
        ...todoList,
      ]);
      setTextInput("");
    },
    [textInput, todoList]
  );

  const onCheckBtnClick = (id => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  });

  const onDeleteBtnClick = (id) => {
    const filteredItemsDelete = todoList.filter((item) => item.id !== id);
    setTodoList(filteredItemsDelete);
  };

  const onEditBtnClick = (id) => {
    const editTodo = todoList.find((item) => item.id === id);
    setEditText(true);
    setTextInput(editTodo.name);
    setEditItem(editTodo.id);
  };
  
  const onEditBtn = () => {
    const filteredItemsEdit = [...todoList];
    if(setEditText) {
    for (let i = 0; i < filteredItemsEdit.length; i++) {
      if(filteredItemsEdit[i].id === editItemID) {
        filteredItemsEdit[i].name = textInput;
      }
    }
    setTodoList(filteredItemsEdit); 
    setEditText(false)
    setTextInput("")
  }
    
  };

  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm..."
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      {!editText ? <Button
        isDisabled={!textInput}
        appearance="primary"
        onClick={onAddBtnClick}
      >
        Thêm
      </Button> :
      <Button
        isDisabled={!textInput}
        appearance="primary"
        onClick={onEditBtn}
      >
        Sửa
      </Button> }

      <TodoList
        todoList={todoList}
        onCheckBtnClick={onCheckBtnClick}
        onDeleteBtnClick={onDeleteBtnClick}
        onEditBtnClick={onEditBtnClick}
      />
    </>
  );
}

export default App;
