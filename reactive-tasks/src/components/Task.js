import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import EditTask from './EditTask';

function Task(props) {
    const [task, setTask] = useState(props?.task);
    const [status, setStatus] = useState(props?.status);
    const [priority, setPriority] = useState(props?.priority);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTask(props?.task);
        setStatus(props?.status);
        setPriority(props?.priority);
    }, [props])

    const handleDelete = (e) => {
        const newTasks = props.tasks.filter((tsk) => tsk.task !== task);
        // [i for i in range(10) i%2==0]
        props?.setTasks(newTasks);
    }

    const priorityMap = {
        '1': 'Low',
        '2': 'Medium',
        '3': 'High'
    }

    const statusMap = {
        false: 'Pending',
        true: 'Done'
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{task}</Card.Title>
                    <Card.Text>
                        Status: {statusMap[status]}
                    </Card.Text>
                    <Card.Text>
                        Priority: {priorityMap[priority]}
                    </Card.Text>
                    <Button variant='primary' onClick={() => setShow(true)}>Edit</Button>
                    <Button variant='danger' onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>
            <EditTask show={show} setShow={setShow} task={props} priority={priority} setPriority={setPriority} status={status} setStatus={setStatus} />
        </>
    )
}

export default Task;