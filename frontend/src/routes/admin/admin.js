import React from 'react'
import './admin.css'
import {NavLink} from 'react-router-dom'
import { Tabs,Tab,Table} from 'react-bootstrap';
import TableAuthors from '../../components/admin/TableAuthors'
import TableBooks from '../../components/admin/TableBooks'
import TableCategories from '../../components/admin/TableCategories'
const Admin = () => {
    const CategoriesData=[
        {"ID":1,"Name":"Sports","CategoryID":"1","AuthoID":"4"},
        {"ID":2,"Name":"Culture","CategoryID":"1","AuthoID":"2"},
        {"ID":3,"Name":"Economics","CategoryID":"2","AuthoID":"1"},
        {"ID":4,"Name":"Tecnology","CategoryID":"2","AuthoID":"3"},
    ];
    const BooksData=[
        {"ID":1,"Photo":'',"Name":"Love Your Self","CategoryID":"1","AuthoID":"4"},
        {"ID":2,"Photo":'',"Name":"Mario","CategoryID":"1","AuthoID":"2"},
        {"ID":3,"Photo":'',"Name":"Marco","CategoryID":"2","AuthoID":"1"},
        {"ID":4,"Photo":'',"Name":"Menna","CategoryID":"2","AuthoID":"3"},
    ];
    const AuthorsData=[
        {"ID":1,"Photo":'',"FirstName":"Mina","SecondName":"Nagy","Birth":"30-9-1993"},
        {"ID":2,"Photo":'',"FirstName":"Mario","SecondName":"Nagy","Birth":"30-7-2003"},
        {"ID":3,"Photo":'',"FirstName":"Marco","SecondName":"Nagy","Birth":"9-7-1997"},
        {"ID":4,"Photo":'',"FirstName":"Menna","SecondName":"Nagy","Birth":"30-9-1997"},
    ];
    /*const [deps,setDeps]=React.usestate([{"DepartmentID":"1","DepartmentName":"Mina"},
    {"DepartmentID":"2","DepartmentName":"Marco"}]);
    
    setDeps([...deps,[{"DepartmentID":"1","DepartmentName":"Mina"},
                     {"DepartmentID":"2","DepartmentName":"Marco"}]
            ]);
    setDeps({"DepartmentID":"1","DepartmentName":"Mina"},
    {"DepartmentID":"2","DepartmentName":"Marco"});*/
    return (
        <Tabs defaultActiveKey="categories" id="uncontrolled-tab-example">
          <Tab eventKey="categories" title="Categories">
                 <TableCategories Categories={CategoriesData}/>
          </Tab>
          <Tab eventKey="books" title="Books">
                 <TableBooks Books={BooksData}/>
          </Tab>
          <Tab eventKey="authors" title="Authors">        
                 <TableAuthors Authors={AuthorsData}/>
          </Tab>
        </Tabs>
    );
}
export default Admin;
/*<ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" href="#">Categories</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Books</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Authors</a>
            </li>
    </ul>*/

/*
<Table className="mt-4" striped bordered hover size='sm'> 
    <thead>
        <tr>
            <th>Mina</th>
            <th>Marca</th>
        </tr>
    </thead>
    <tbody>
{
    deps.map(dep=>
        <tr key={dep.DepartmentID}>
         <td>{dep.DepartmentID}</td>
         <td>{dep.DepartmentID}</td>
         </tr>
        )
}
    </tbody>
</Table>

*/