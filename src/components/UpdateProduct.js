import React, {useState, useEffect} from "react";
import { Container, Row, Col, Form, Button,InputGroup, FormControl }  from "react-bootstrap";
import Header from './Header';
import { useParams } from "react-router-dom";
import { BASE_URL } from '../constants';

const UpdateProduct = ()=>{

    const { productId } = useParams();
  
    const[producer, setProducer]= useState('');
    const[model, setModel]=useState('');
    const[image, setImage]=useState('');
    const [price, setPrice] = useState(0.0);
    const [warranty, setWarranty] = useState('');
    const[ rating, setRating ] = useState(0);
   
   


    useEffect(() => {
      // GET request using fetch inside useEffect React hook
      fetch(`${BASE_URL}/products/${productId}`, {
        method: "GET"
    })
          .then(response => response.json())
          .then(data =>{
            
            setProducer(data.producer);
            setModel(data.model);
            setImage(data.image);
            setPrice(data.price);
            setWarranty(data.warranty);
            setRating(data.rating);
          })
  
 
  }, [productId] );

   
        

    const onSubmit = ()=>{
      const product = {producer,
        model, image, price, warranty, rating };
        
          fetch(`${BASE_URL}/products/${productId}`,{
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
              "Content-type": "application/json;",
            },
          }).then((response) => response.json())
          .then((product) => console.log(product))
          
          .catch((error) => console.log(error));
      }
    
    return<Container className="mt-5 ">
    <Header />
    <Row
      className="bg-success bg-opacity-25 p-3 text-dark"
      style={{ width: "60%", margin: "65px auto" }}
    >
      <Col>
        <h2>Update product</h2>
        
         <Form  >
         <InputGroup className="mb-2">
           <InputGroup.Text id="basic-addon1">Producer</InputGroup.Text>
           <FormControl
             type="text"
             placeholder="Producer is required"
             aria-label="Producer"
             aria-describedby="basic-addon1"
             required
             name="producer"
             value={producer }
             onChange={e => setProducer(e.target.producer)}
            
           />   
           
         </InputGroup>
         
        
         <InputGroup className="mb-2">
           <InputGroup.Text id="basic-addon1">Model</InputGroup.Text>
           <FormControl
             type="text"
             placeholder="Model is required"
             aria-label="Model"
             aria-describedby="basic-addon1"
             required
             name="model"
             value={model}
             onChange={e => setModel(e.target.value)}
           />
         
         </InputGroup>
         
         <InputGroup className="mb-2">
           <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
           <FormControl
             type="text"
             placeholder="Image is required"
             aria-label="Image"
             aria-describedby="basic-addon1"
             required
             name="image"
             value={image}
             onChange={e => setImage(e.target.value)}
           />
         </InputGroup>
         
         <InputGroup className="mb-2">
           <InputGroup.Text id="basic-addon1">Price</InputGroup.Text>
           <FormControl
             type="number"
             placeholder="Price is required"
             aria-label="Price"
             aria-describedby="basic-addon1"
             required
             name="price"
             value={parseFloat(price)}
             onChange={e => setPrice(parseFloat(e.target.value))}
             
           />
         </InputGroup>
         
         <Form.Select
           className="mb-2"
           aria-label="Default select example"
           value={warranty}
           required
           onChange={e => setWarranty(e.target.value)}
           name="warranty"
         >
           <option>Choose a warranty option</option>
           <option value="1 month">1 month</option>
           <option value="2 months">2 months</option>
           <option value="3 months">3 months</option>
           <option value="6 months">6 months</option>
           <option value="1 year">1 year</option>
         </Form.Select>
        
         <Form.Select
           className="mb-2"
           aria-label="Default select example"
           name="rating"
           required
           value={Number(rating)}
           onChange={e => setRating(parseInt(e.target.value))}
         >
           <option>Rating is required</option>
           <option value="1">1 </option>
           <option value="2">2 </option>
           <option value="3">3 </option>
           <option value="4">4</option>
           <option value="5">5</option>
         </Form.Select>
         

         <Button
           variant="outline-success"
           className="float-end"
           size="lg"
           onClick={onSubmit}
         >
           Update
         </Button>
       </Form>
   
           
      
        
      </Col>
    </Row>
   
  </Container>
}
export default UpdateProduct;