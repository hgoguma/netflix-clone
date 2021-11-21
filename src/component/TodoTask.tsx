import React from 'react';
import { ITask } from 'src/interfaces';

interface Props {
  task: ITask;
  completeTask (taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {

  return (
    <div style={{display: 'flex', alignItems: 'cetner'}}>
      <div>
        {
          task.taskName
        }
      </div>
      <button onClick={() => completeTask(task.taskName)}>X</button>
      
    </div>
  )
}

export default TodoTask