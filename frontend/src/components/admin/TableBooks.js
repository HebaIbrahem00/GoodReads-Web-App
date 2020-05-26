import React ,{useState,useEffect}from 'react'
import AddFormBook from './AddFormBook' 
import EditFormBook from './EditFormBook'
import axios  from 'axios';
import { Table,Form,Modal,Image,Button} from 'react-bootstrap';

function TableBooks(props) {
    const Books=props.Books;
    const categoryEmpty=(props.CategoryCheck);
    const authorEmpty=(props.AuthorCheck);
 
    const[BookTemp,setBookTemp]=useState({});
    const [show, setShow] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    const [addForm,setAddForm]=useState(false);
    const [messageError,setMessageError]=useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleErrorClose=()=>setShowError(false)

   
    const changeShowState = (value) => {setShow(value);}

    const removeHandler=(id)=>{
        axios.delete(`http://localhost:5000/admin/book/${id}`)
        .then(response=>{console.log(response)})
        .catch(error=>{console.log(error)})
    }
    return (
   	  <div>
        	<button className="btn btn-primary" onClick={()=>{
			if(categoryEmpty && authorEmpty){	
				setMessageError("Author&Category is Empty or Refresh your Page [if Author&Category  is Empty  You Must Add One ");
				setShowError(true);
			}
			else if(categoryEmpty && (! (authorEmpty) )){
		 		 setMessageError("Category is Empty or Refresh your Page [if Category is Empty  You Must Add One ");
				 setShowError(true);
			}
			else if((! (categoryEmpty)) && authorEmpty){
		 		 setMessageError("Author is Empty or Refresh your Page [if Author is Empty  You Must Add One "); 				         setShowError(true);

			}
			else{setShow(true);setAddForm(true)}

                    }}>ADD</button>
		<Table className="mt-4" striped bordered hover size='sm'>
		    <thead>
		        <tr>
		            <th>ID</th>
		            <th>Photo</th>
		            <th>Name</th>
		            <th>CategoryID</th>
		            <th>AuthoID</th>
			    <th>Details</th>
		            <th>Action</th>
		        </tr>
		    </thead>
		    <tbody>
		        {
		            Books.map(Book =>
		                <tr key={Book._id}>
		                    <td>{Book._id}</td>
		                    <td><Image src={Book.cover} alt="logo" size='100' width='100' /></td>
		                    <td>{Book.name}</td>
		                    <td>{Book.category}</td>
		                    <td>{Book.author}</td>
				    <td>{Book.details}</td>
		                    <td>
		                            <button className="btn btn-primary" onClick={()=>{setBookTemp(Book); setShow(true)}}>edit</button>
		                            {" "}
		                            <button className="btn btn-danger" onClick={() => {removeHandler(Book._id)}}> remove </button>
		                    </td>
		                </tr>
		            )
		        }
		    </tbody>
		</Table>
		<Modal show={show} onHide={handleClose} animation={false}>
			<Modal.Header closeButton>
			{addForm?<Modal.Title>ADD Book</Modal.Title>:<Modal.Title>Edit Book</Modal.Title>}
			</Modal.Header>
			<Modal.Body>
			{	
			   addForm?<div><AddFormBook UpdateShowModal={changeShowState} Categories={props.Categories} Authors={props.Authors} /></div>
			   :<EditFormBook  UpdateShowModal={changeShowState} Book={BookTemp} Categories={props.Categories} Authors={props.Authors}/>
			}
			</Modal.Body>
		</Modal>
		<Modal show={showError} onHide={handleErrorClose} animation={false}>
			<Modal.Header closeButton>
				{messageError}
			</Modal.Header>
		</Modal>
        </div>
    );
}
export default TableBooks;
