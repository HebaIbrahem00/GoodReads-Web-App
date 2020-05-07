import React from 'react'
import './admin.css'
import {NavLink} from 'react-router-dom'
import { Tabs,Tab,Table} from 'react-bootstrap';
const Admin = () => {
    const deps=[{"DepartmentID":"1","DepartmentName":"Mina"},
    {"DepartmentID":"2","DepartmentName":"Marco"}];
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
          <p>Home</p>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <p>Profile</p>
          </Tab>
          <Tab eventKey="contact" title="Contact">        
                <Table className="mt-4" striped bordered hover size='sm'> 
                    <thead>
                        <tr>
                            <th>DepartmentID</th>
                            <th>DepartmentName</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    deps.map(dep=>
                        <tr key={dep.DepartmentID}>
                        <td>{dep.DepartmentID}</td>
                        <td>{dep.DepartmentName}</td>
                        </tr>
                        )
                }
                    </tbody>
                </Table>
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