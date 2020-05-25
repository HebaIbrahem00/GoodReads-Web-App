import React ,{useState,useEffect}from 'react'
import {Table,Image,Modal,Button,Form} from 'react-bootstrap';
import axios  from 'axios';
import AddFormAuthor from './AddFormAuthor'
import EditFormAuthor from './EditFormAuthor'

export default function TableAuthors(props) {
    const Authors=props.Authors;
    const [show, setShow] = useState(false);
    const [addForm,setAddForm]=useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const changeShowState = (value) => {setShow(value);}

    const removeHandler=(id)=>{
        axios.delete(`http://localhost:5000/admin/author/${id}`)
        .then(response=>{console.log(response)})
        .catch(error=>{console.log(error)})
    }

    return (
            <div>
                 <button className="btn btn-primary"  onClick={()=>{
                    setShow(true);
                    setAddForm(true);
                    }}>ADD</button>
            <Table className="mt-4" striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>FirstName</th>
                        <th>SecondName</th>
                        <th>Date Of Birth</th>
                        <th>BIOS</th>
			<th>Action</th>			
                    </tr>
                </thead>
                <tbody>
                    {
                        Authors.map(Author =>
                            <tr key={Author._id}>
                                <td>{Author._id}</td>
                                <td><Image src={Author.pic} alt="logo" size="80" width="80" roundedCircle /></td>
                                <td>{Author.firstName}</td>
                                <td>{Author.lastName}</td>
                                <td>{Author.dob}</td>
				<td>{Author.bio}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={handleShow}>edit</button>
                                    {" "}
                                    <button className="btn btn-danger" onClick={() => {removeHandler(Author._id)}}>remove</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                        {addForm?<Modal.Title>ADD Author</Modal.Title>:<Modal.Title>Edit Author</Modal.Title>}
                </Modal.Header>
                <Modal.Body>
                {
                    addForm?<div><AddFormAuthor UpdateShowModal={changeShowState}/></div>:<EditFormAuthor  UpdateShowModal={changeShowState}/>
                }
                </Modal.Body>
            </Modal>
        </div>
    );
}


