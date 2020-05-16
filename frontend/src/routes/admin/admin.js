import React from 'react'
import './admin.css'
import { Tabs,Tab} from 'react-bootstrap';
import TableAuthors from '../../components/admin/TableAuthors'
import TableBooks from '../../components/admin/TableBooks'
import TableCategories from '../../components/admin/TableCategories'
import Book1 from '../../assets/img/B1.jpg'
import Book2 from '../../assets/img/B2.jpg'
import Book3 from '../../assets/img/B3.jpg'
import Book4 from '../../assets/img/B4.jpg'
import Author1 from '../../assets/img/A1.jpg'
import Author2 from '../../assets/img/A2.jpg'
import Author3 from '../../assets/img/A3.jpg'
import Author4 from '../../assets/img/A4.jpg'
const Admin = () => {
    const CategoriesData=[
        {"ID":1,"Name":"Sports","CategoryID":"1","AuthoID":"4"},
        {"ID":2,"Name":"Culture","CategoryID":"1","AuthoID":"2"},
        {"ID":3,"Name":"Economics","CategoryID":"2","AuthoID":"1"},
        {"ID":4,"Name":"Tecnology","CategoryID":"2","AuthoID":"3"},
    ];
    const BooksData=[
        {"ID":1,"Photo":Book1,"Name":"Love Your Self","CategoryID":"1","AuthoID":"4"},
        {"ID":2,"Photo":Book2,"Name":"Mario","CategoryID":"1","AuthoID":"2"},
        {"ID":3,"Photo":Book3,"Name":"Marco","CategoryID":"2","AuthoID":"1"},
        {"ID":4,"Photo":Book4,"Name":"Menna","CategoryID":"2","AuthoID":"3"},
    ];
    const AuthorsData=[
        {"ID":1,"Photo":Author1,"FirstName":"Mina","SecondName":"Nagy","Birth":"30-9-1993"},
        {"ID":2,"Photo":Author2,"FirstName":"Mario","SecondName":"Nagy","Birth":"30-7-2003"},
        {"ID":3,"Photo":Author3,"FirstName":"Marco","SecondName":"Nagy","Birth":"9-7-1997"},
        {"ID":4,"Photo":Author4,"FirstName":"Menna","SecondName":"Nagy","Birth":"30-9-1997"},
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