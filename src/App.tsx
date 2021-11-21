import React, { ChangeEvent, FC, useState } from 'react';
import 'src/App.css';
import { ITask } from 'src/interfaces'
import TodoTask from 'src/component/TodoTask';

const App:FC = () => {

  const [task, setTask] = useState<string>('');
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  };

  const addTask = ():void => {
    const newTask = { taskName: task };
    setTodoList([...todoList, newTask]);
  };

  const completeTask = (taskNameToDelete: string):void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    )
  }

  return (
    <div>
      <div style={{display: 'flex', margin: '0 auto', maxWidth:'500px'}}>
        <div style={{marginRight: '40px'}}>
          <input type="text" placeholder="Task... " name="task" onChange={handleChange} />
          <button type="button" onClick={addTask}>Add</button>
        </div>
        <div>
          <div>
            {
              todoList.map((task:ITask, index: number) => {
                return <TodoTask key={index} task={task} completeTask={completeTask} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;