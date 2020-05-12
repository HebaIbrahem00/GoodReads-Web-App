import React from 'react'
import {Table,Image,Modal,Button,Form} from 'react-bootstrap';
export const FormAuthor=()=>{
    return(
        <Form>
                <Form.Group controlId="formAuthorID">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="ID" placeholder="Enter Author ID" />
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
                <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group controlId="formSecondName">
                        <Form.Label>Second Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Second Name" />
                </Form.Group>
                <Form.Group controlId="formDateOfBirth">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="Enter Date of Birth" />
                </Form.Group>
                <Button variant="primary" type="submit">
                        ADD Author
                </Button>
        </Form>
    );
}

export default function TableAuthors(props) {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Authors = props.Authors;
    return (
        <div>
            <button className="btn btn-primary" onClick={handleShow}>+</button>
            <Table className="mt-4" striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>FirstName</th>
                        <th>SecondName</th>
                        <th>Date Of Birth</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Authors.map(Author =>
                            <tr key={Author.ID}>
                                <td>{Author.ID}</td>
                                <td><Image src={Author.Photo} alt="logo" size="80" width="80" roundedCircle /></td>
                                <td>{Author.FirstName}</td>
                                <td>{Author.SecondName}</td>
                                <td>{Author.Birth}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={handleShow}>edit</button>
                                    {" "}
                                    <button className="btn btn-danger" onClick={() => this.deleteItem(Author.ID)}>remove</button>
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
                    <FormAuthor />
                </Modal.Body>
                {/*<Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Edit Book
          </Button>
        </Modal.Footer>*/}
            </Modal>


        </div>
    );
}

/*onClick={() => this.replaceModalItem(Author.ID)}
<Modal title={"Mina"} msg={""}/>
*/
/*
    <div id="myModel" class="modal fade" role="dialog">
        <div class ="modal-dialog">
        <div class ="modal-content">
                <div class ="modal-header">
                    <button className="close" data-dismiss="modal" >remove</button>
                    <h3 class="modal-title">Welcome to Edit</h3>
                </div>
                <div class ="modal-body">
                     <input type="text"/>
                     <input type="text"/>
                     <button className="btn btn-primary">login</button>
                </div>
                <div class ="modal-footer">

                </div>
            </div>  
        </div>
    </div>
    */

    /*
    <div className="modal fade" id="EditAuthor" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p><span className="modal-lable">Title:</span><input value={props.title} onChange={(e) => this.titleHandler(e)} /></p>
                    <p><span className="modal-lable">Msg:</span><input value={props.msg} onChange={(e) => this.msgHandler(e)} /></p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                </div>
            </div>
        </div>
    </div>
    
    
    
    */