
import React, {useState, useEffect}from 'react';
import { BASE_URL } from '../constants';
import { Container, Table } from 'react-bootstrap';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from './Header';


const Products = ()=>{
    const [products, setProducts] = useState([]);

    

    useEffect(()=>{
        getProducts();
    }, []);

    const getProducts = () => {
        fetch(`${BASE_URL}/products`, {
            method: "GET"
        })
        .then((response) => response.json())
        .then((products) => {
             setProducts(products);
        })
        .catch((error) => console.log(error))
    }
   /* const deleteItem = (id) => {
        const newProducts = products.filter(product => product.id !== id)
        
        setProducts(newProducts);
       }*/
   
const deleteProduct = (id)=>{
    
    fetch(`${BASE_URL}/products/${id}`,{
        method:"DELETE",
        headers: {
            'Content-type': 'application/json;',
        }  
    })
    .then(()=> getProducts());
    
 
   //
}

    return<Container className="mt-5">
        <Header/>
    <Table >
    <thead>
<tr>
<th>id</th>
<th>Producer</th>
<th>Model</th>
<th>Image</th>
<th>Price</th>
<th>Warranty</th>
<th>Rating</th>
</tr>
</thead>
<tbody>
{
   products && products.map(product => {
        return <tr key={product._id}>
            <td>{product._id}</td>
            <td>{product.producer}</td>
            <td>{product.model}</td>
            <td><img src={product.image} alt={product.mdel} style={{ height:"100px"}}></img></td>
            <td>{product.price}</td>
            <td>{product.warranty}</td>
           <td>{product.rating}{Array(5).fill(0).map((_, index) =>{
              
                return (         
                    <FontAwesomeIcon icon={faStar} style={{color:(+product.rating>= index + 1)?"yellow":"grey"}} key={index} />      
                  );
                })}</td>
            
            <td><button onClick={()=>deleteProduct(product._id)}>Delete</button></td>
        </tr>
    })
}  
</tbody>
    </Table>
    </Container>
}

export default Products;
/* 
"#fcd303"
const deleteMethod = {
        method: 'DELETE', // Method itself
        headers: {
            'Content-type':'application/json;'
        }
        // No need to have body, because we don't send nothing to the server.
       }
       // Make the HTTP Delete call using fetch api
       fetch(`${BASE_URL}/products`, deleteMethod) 
       .then(response => response.json())
       .then(products => console.log(products)) // Manipulate the data retrieved back, if we want to do something with it
       .catch(err => console.log(err)) // Do something with the error
    }

    {[...Array(product.rating)].map((star) =>{
                return (         
                    <FontAwesomeIcon icon={faStar} style={{color:'yellow'}}/>      
                  );
                })}
    */