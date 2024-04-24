import { Modal, Button, Form } from 'react-bootstrap';

function EditTask({ show, setShow, task, priority, setPriority, status, setStatus }) {
const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    }

    const handleStatusChange = (e) => { 
        setStatus(e.target.checked);
    }

    const handleClose = () => {
        setShow(false);
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{task.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTask">
                        <Form.Label>Done</Form.Label>
                        <Form.Check
                            type="switch"
                            id="status-switch"
                            label="Status"
                            defaultValue={status}
                            onChange={handleStatusChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='formPriority'>
                        <Form.Label>Priority</Form.Label>
                        <Form.Select aria-label="priority" defaultValue={priority} onChange={handlePriorityChange}>
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
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditTask;