import React from 'react';
import { useQuery, gql } from '@apollo/client';

const TASKS = gql`
query MyQuery {
    allTasks {
      id
      title
      content
    }
  }
`;

const Tasks = () => {
    const { loading, error, data } = useQuery(TASKS);

    const questions = loading 
    ? <p>Loading...</p>
    : <p>{data.allTasks.map(task => <p>{task.title}{task.content}</p>)}</p>;

    return ( 
        <div className="tasks-container">
            {questions}
        </div>
     );
}
 
export default Tasks;