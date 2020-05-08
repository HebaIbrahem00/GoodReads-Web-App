import React from 'react'
import {Table} from 'react-bootstrap';
export default function TableBooks(props){
const Books=props.Books;
return(
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
    Books.map(Book=>
        <tr key={Book.ID}>
            <td>{Book.ID}</td>
            <td>{Book.Photo}</td>
            <td>{Book.Name}</td>
            <td>{Book.CategoryID}</td>
            <td>{Book.AuthoID}</td>
            <td>
                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                        onClick={() => this.replaceModalItem(Book.ID)}>edit</button> 
                    {" "}
                <button className="btn btn-danger" onClick={() => this.deleteItem(Book.ID)}>remove</button>
            </td>
        </tr>
        )
    }
    </tbody>
    </Table>
);
}
