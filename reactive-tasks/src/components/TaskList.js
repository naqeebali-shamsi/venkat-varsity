import { useEffect } from 'react';
import Task from './Task';
import { Container, Row, Col } from 'react-bootstrap';

function TaskList({ tasks, setTasks, anotherpropname }) { //destructuring assignment. We are expectingh an object that is a list 
    useEffect(() => {
        console.log('TaskList component mounted');
    }, [tasks]);
    return (
        <div className='tasklist'>
            <Container>
                <Row>
                    {
                        tasks?.map((task, index) => (
                            <Col key={index}> <Task key={index} task={task.task} status={task.status} priority={task.priority} setTasks={setTasks} tasks={tasks} /> </Col>
                        )
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default TaskList;