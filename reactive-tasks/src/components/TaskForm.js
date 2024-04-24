import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


function TaskForm({ show, setShow, tasks, setTasks}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleSave = () => {
        tasks.push({"task": task, "priority": priority, "status": status});
        setTasks(tasks);
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTask">
                        <Form.Label>Task</Form.Label>
                        <Form.Control type="text" placeholder="Enter task" onChange={(e) => setTask(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId='formPriority'>
                        <Form.Label>Priority</Form.Label>
                        <Form.Select aria-label="priority" onChange={(e) => setPriority(e.target.value)}>
                            <option>Select Priority</option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TaskForm;