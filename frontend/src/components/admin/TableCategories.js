import React from 'react'
import {Table} from 'react-bootstrap';
export default function TableCategories(props){
const Categories=props.Categories;
return(
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
    Categories.map(Category=>
        <tr key={Category.ID}>
            <td>{Category.ID}</td>
            <td>{Category.Name}</td>
            <td>
                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                        onClick={() => this.replaceModalItem(Category.ID)}>edit</button> 
                    {" "}
                <button className="btn btn-danger" onClick={() => this.deleteItem(Category.ID)}>remove</button>
            </td>
        </tr>
        )
    }
    </tbody>
    </Table>
);
}