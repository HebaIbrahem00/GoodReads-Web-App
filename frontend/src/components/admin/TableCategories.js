import React ,{useEffect,useState}from 'react'
import { Table, Modal, Button, Form ,Col} from 'react-bootstrap';
import axios  from 'axios';
export const FormAddCategory = (props) => {
    console.log("ADD Form");
    const {tempName} = props.Category;
    const [categoryName,SetCategoryName]=useState({name:''});
    const changeHandler = (event)=>{
        SetCategoryName({[event.target.name]:event.target.value})
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        //event.stopPropagation();
        console.log(categoryName);
        axios.post("http://localhost:5000/admin/category",categoryName)
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
export const FormEditCategory = (props) => {
    console.log("Edit Form");
    const {tempName,tempID} = props.Category;
    const [categoryName,SetCategoryName]=useState({name:''});
    const [loading,setLoading]=useState(false);
    const changeHandler = (event)=>{
        SetCategoryName({[event.target.name]:event.target.value})

    }
    const submitHandler = (event)=>{
        setLoading(true);
        event.preventDefault();
        //event.stopPropagation();
        console.log(categoryName);
        axios.post(`http://localhost:5000/admin/category/update/${tempID}`,categoryName)
        .then(response=>{console.log(response)})
        .catch(error=>{console.log(error)})
        setLoading(false);
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
        {loading ? <div>Waiting.........</div>:<div></div>}
    </div>
    );
}

export default function TableCategories(props) {
    const [show, setShow] =useState(false);
    const [tempName,setTempName]=useState('');
    const [tempID,setTempID]=useState('');
    const [categories,setCategories]=useState([]);
    const [loading,setLoading]=useState(true);
    const [addForm,setAddForm]=useState(false);
    const [error,setErrors]=useState(false);
    const handleClose = () => {setShow(false);}
    async function fetchData() {
        const url="http://localhost:5000/admin/category";
        const res=await fetch(url)
            res.json()
            .then(res=>{setCategories(res);setLoading(false)})
            //.then(res => console.log(categories))
            .catch(err=>setErrors(err));
    }
    useEffect(() => {
            fetchData();
        });
    const removeHandler=()=>{
        console.log("remove" + tempID);
        axios.delete(`http://localhost:5000/admin/category/${tempID}`)
        .then(response=>{console.log(response)})
        .catch(error=>{console.log(error)})
    }
    
    return (
        <div>
        {
        loading? (<div>Loading ........</div>):(
            <div>
                <button className="btn btn-primary"  onClick={()=>{
                    setTempName('');
                    setTempID('');
                    setShow(true);
                    setAddForm(true);
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
                                                setAddForm(false);
                                                setShow(true);
                                            }
                                        }>edit</button>
                                        {" "}
                                        <button className="btn btn-danger" onClick={() => {setTempID(Category._id)
                                                    removeHandler()}}>
                                       remove</button>
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
                            addForm?<div><FormAddCategory Category={{tempName,tempID}}/> {/*setAddForm(false)*/}</div>:<FormEditCategory Category={{tempName,tempID}}/>
                        }
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
