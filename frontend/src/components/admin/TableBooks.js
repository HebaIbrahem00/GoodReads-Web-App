import React from 'react'
import { Table,Form,Modal,Image,Button} from 'react-bootstrap';

export const FormBook=()=>{
    return(
        <Form>
                <Form.Group controlId="formAuthorID">
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Book Name" />
                        {/*<Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>*/}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Photo</Form.Label>
                    <Form.File 
                            id="custom-file"
                            label="Custom file input"
                            custom
                    />
                </Form.Group>
                <Form.Group controlId="Categor">
                        <Form.Label>Categor</Form.Label>
                        <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="Author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                        </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                        ADD Author
                </Button>
        </Form>
    );
}

function TableBooks(props) {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Books = props.Books;
    return (
    <div>
        <button className="btn btn-primary" onClick={handleShow}>+</button>

        <Table className="mt-4" striped bordered hover size='sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>CategoryID</th>
                    <th>AuthoID</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    Books.map(Book =>
                        <tr key={Book.ID}>
                            <td>{Book.ID}</td>
                            <td><Image src={Book.Photo} alt="logo" size='100' width='100' /></td>
                            <td>{Book.Name}</td>
                            <td>{Book.CategoryID}</td>
                            <td>{Book.AuthoID}</td>
                            <td>
                                    <button className="btn btn-primary" onClick={handleShow}>edit</button>
                                    {" "}
                                    <button className="btn btn-danger" onClick={() => this.deleteItem(Book.ID)}>remove</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Author</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormBook/>
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default TableBooks;