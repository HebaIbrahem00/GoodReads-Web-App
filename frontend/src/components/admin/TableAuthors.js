import React from 'react'
import {Table} from 'react-bootstrap';
export default function TableAuthors(props){
const Authors=props.Authors;
return(
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
    Authors.map(Author=>
        <tr key={Author.ID}>
            <td>{Author.ID}</td>
            <td>{Author.Photo}</td>
            <td>{Author.FirstName}</td>
            <td>{Author.SecondName}</td>
            <td>{Author.Birth}</td>
            <td>
                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                        onClick={() => this.replaceModalItem(Author.ID)}>edit</button> 
                    {" "}
                <button className="btn btn-danger" onClick={() => this.deleteItem(Author.ID)}>remove</button>
            </td>
        </tr>
        )
    }
    </tbody>
    </Table>
);
}
