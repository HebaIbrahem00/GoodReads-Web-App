import React ,{useState,useEffect}from 'react'
import {Table,Image,Modal,Button,Form} from 'react-bootstrap';
import axios  from 'axios';
export const FormEditAuthor=()=>{
console.log("Edit Form");
    return(
        <Form>
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
export const FormAddAuthor=(props)=>{
//console.log("ADD Form");
    const [author,setAuthor]=useState({ 
            firstName:'',
            lastName:'',
            dob:'',
            bio:'',
            pic:''
    });
    function CloseModal(newValue) {
        props.UpdateShowModal((!newValue));
    }
    const changeHandler = (event)=>{
        setAuthor(...author,{[event.target.name]:event.target.value})
	console.log([event.target.name]+"+" + event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        //event.stopPropagation();
        console.log(author);
        axios.post("http://localhost:5000/admin/author",author)
        .then(response=>{console.log(response)})
        .catch(error=>{console.log(error)})
        CloseModal(true);
    }
    const{firstName,lastName,dob,bio,pic}=author;
    return(
<div>
        <Form onSubmit={submitHandler}>
                <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <input type="name" name="firstName" placeholder="Enter First Name" value={firstName} onChange={changeHandler}/>
                </Form.Group>
                <Form.Group controlId="formSecondName">
                        <Form.Label>Second Name</Form.Label>
                        <input type="name" name="lastName" placeholder="Enter Second Name" value={lastName} onChange={changeHandler}/>
                </Form.Group>
                <Form.Group controlId="formDateOfBirth">
                        <Form.Label>Date of Birth</Form.Label>
                        <input type="date" name="dob" placeholder="Enter Date of Birth" value={dob}onChange={changeHandler}/>
                </Form.Group>
                <Form.Group controlId="BIOS">
                        <Form.Label>BIOS</Form.Label>
                        <input type="text" name="bio" placeholder="Enter BIOS"value={bio} onChange={changeHandler}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Photo</Form.Label>
                    <input
                            id="custom-file"
                            label="Custom file input"
                            custom
			    type="file"
                            name="pic"
			    value={pic}
                            onChange={changeHandler}
                    />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                        ADD Author
                </Button>
        </Form>
	</div>
    );
}
export default function TableAuthors(props) {
    const [show, setShow] = useState(false);
    const [loading,setLoading]=useState(true);
    const [Authors,setAuthors]=useState([]);
    const [addForm,setAddForm]=useState(false);

    const [tempID,setTempID]=useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const Authors = props.Authors;
    const changeShowState = (value) => {setShow(value);}
    async function fetchData() {
        const url="http://localhost:5000/admin/author";
        const res=await fetch(url)
            res.json()
            .then(res=>{setAuthors(res); setLoading(false)})
            .catch(err=>console.log(err));
    }
    useEffect(() => {
            fetchData();
           // console.log(Authors);
        });
    const removeHandler=()=>{
        console.log("remove" + tempID);
        axios.delete(`http://localhost:5000/admin/author/${tempID}`)
        .then(response=>{console.log(response)})
        .catch(error=>{console.log(error)})
    }

    return (
        <div>
        {
        loading? (<div>Loading ........</div>):(
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
                                <td>
                                    <button className="btn btn-primary" onClick={handleShow}>edit</button>
                                    {" "}
                                    <button className="btn btn-danger" onClick={() => {setTempID(Author._id); removeHandler();}}>remove</button>
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
                {
                    addForm?<div><FormAddAuthor  UpdateShowModal={changeShowState}/></div>:<FormEditAuthor  UpdateShowModal={changeShowState}/>
                }
                </Modal.Body>
            </Modal>
            </div>
       ) }
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
