import React ,{useEffect,useState}from 'react'
import { Table, Modal, Button, Form ,Col} from 'react-bootstrap';
import axios  from 'axios';
export const FormCategory = (props) => {

    const {tempName,tempID} = props.Category;
    const [categoryName,SetCategoryName]=useState({name:''});
    const changeHandler = (event)=>{
        SetCategoryName({[event.target.name]:event.target.value})

    }
    const submitHandler = (event)=>{
        event.preventDefault();
        //event.stopPropagation();
        console.log(categoryName);
        axios.post("http://localhost:5000/categories",categoryName)
        .then(response=>{console.log(response)})
        .catch(error=>{console.log(error)})
    }

    return (
    <div>
            {/*console.log(props.Category)*/}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="formCategoryName">
                <Form.Label>Category Name </Form.Label>
                <Form.Control type="name" name="name" defaultValue={tempName} placeholder="Enter Category Name " onChange={changeHandler}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                ADD Category
                </Button>
        </Form>
    </div>
    );
}

export default function TableCategories(props) {
    const [show, setShow] =useState(false);
    const [tempName,setTempName]=useState('');
    const [tempID,setTempID]=useState('');
    const [categories,setCategories]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setErrors]=useState(false);
    const handleClose = () => {setShow(false);}
    const handleShow=()=>{
        setShow(true); 
    }
        async function fetchData() {
            const url="http://localhost:5000/categories";
            const res=await fetch(url)
                res.json()
                .then(res=>{setCategories(res);setLoading(false)})
                //.then(res => console.log(categories))
                .catch(err=>setErrors(err));
        }
        useEffect(() => {
                fetchData();
            });
    return (
        <div>
        {
        loading? (<div>Loading ........</div>):(
            <div>
                <button className="btn btn-primary"  onClick={()=>{
                    setTempName('');
                    setTempID('');
                    setShow(true);
                    }}>ADD</button>
                <Table className="mt-4" striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(Category =>
                                <tr key={Category._id}>
                                    <td>{Category._id}</td>
                                    <td>{Category.name}</td>
                                    <td>
                                        <button className="btn btn-primary" 
                                            onClick={()=>{
                                                setTempName(Category.name);
                                                setTempID(Category._id);
                                                setShow(true);
                                            }
                                        }>edit</button>
                                        {" "}
                                        <button className="btn btn-danger" onClick={() => console.log(Category._id)/*this.deleteItem(Category.ID)*/}>remove</button>
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
                        
                            <FormCategory Category={{tempName,tempID}}/>
                        
                    </Modal.Body>
                    {/*<Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                    Edit Book
                    </Button>
                    </Modal.Footer>*/}
                </Modal>
            </div>
        )}
            </div>
    );
}