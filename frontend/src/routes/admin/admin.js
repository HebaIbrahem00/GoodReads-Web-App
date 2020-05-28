import React,{useState,useEffect} from 'react'
import './admin.css'
import { Tabs,Tab} from 'react-bootstrap';
import TableAuthors from '../../components/admin/TableAuthors'
import TableBooks from '../../components/admin/TableBooks'
import TableCategories from '../../components/admin/TableCategories'


const Admin = () => {


const [books,setBooks]=useState([]); 
const [categories,setCategories]=useState([]);
const [authors,setAuthors]=useState([]);
const [categoriesEmpty,setCategoriesEmpty]=useState(false);
const [authorsEmpty,setAuthorsEmpty]=useState(false);
	function isEmpty(obj) {
	    for(var key in obj) {
		if(obj.hasOwnProperty(key))
		    return false;
	    }
	    return true;
	}

    async function fetchBookData() {
		const url="http://localhost:5000/admin/book";
		const res=await fetch(url)
		    res.json()
		    .then(res=>{setBooks(res)})
		    .catch(err=>console.log(err));
      }    
    async function fetchCategoryData() {
			const url="http://localhost:5000/admin/category";
			const res=await fetch(url)
			    res.json()
			    .then(res=>{setCategories(res);console.log("Res"+res);}).catch(err=>console.log(err));
			
console.log("Categories"+categories);
       }
    async function fetchAuthorData() {
        const url="http://localhost:5000/admin/author";
        const res=await fetch(url)
            res.json()
            .then(res=>{setAuthors(res);})
    }
useEffect(() => {
       console.log("Hello Mina")
            fetchBookData();
            fetchAuthorData();
	    fetchCategoryData();
        },[]);
useEffect(() => {
           isEmpty(categories)?setCategoriesEmpty(true):setCategoriesEmpty(false)
	   isEmpty(authors)?setAuthorsEmpty(true):setAuthorsEmpty(false)
        });
    return (
 	<div>
             
	
        <Tabs defaultActiveKey="categories" id="uncontrolled-tab-example">
          <Tab eventKey="categories" title="Categories">
                 {<TableCategories Categories={categories}/>}
          </Tab>
          <Tab eventKey="books" title="Books">
                 <TableBooks Books={books} Authors={authors} Categories={categories} CategoryCheck={categoriesEmpty} AuthorCheck={authorsEmpty}/>
          </Tab>
          <Tab eventKey="authors" title="Authors">        
               {  <TableAuthors Authors={authors}/> }
          </Tab>
        </Tabs>
	</div>
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
