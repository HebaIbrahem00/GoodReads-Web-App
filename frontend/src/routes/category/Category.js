import React from 'react'
import {ListGroup} from 'react-bootstrap';

function alertClicked() {
    alert('You clicked the third ListGroupItem');
}


const Category=()=>{
    const categories=["EConomics","Sport","Society","Art","Horror"]
    return(
        <div class="mt-5">
            <ListGroup defaultActiveKey="#EConomics">
             {
                categories.map((cat)=>
                    <ListGroup.Item action href={"#"+cat}>{cat}
                    </ListGroup.Item>
                    )
            }
               {/*<ListGroup.Item action onClick={alertClicked}>
                    This one is a button
                  </ListGroup.Item>*/}
            </ListGroup>
        </div>
      );
}
export default Category;
 