import React, {useState} from 'react';
import { Container, Row, Col, Form, Button,InputGroup, FormControl }  from "react-bootstrap";
import { BASE_URL } from '../constants';
import Header from './Header';

const CreateProduct = ()=>{
   /* const initialValues = {
        producer: "",
        model: "",
        image: "",
        price: 0,
        warranty: "",
        rating: 0,
      };
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState(null);
      
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        
      };*/
     const[producer, setProducer]= useState('');
    const[model, setModel]=useState('');
    const[image, setImage]=useState('');
    const [price, setPrice] = useState(0.0);
    const [warranty, setWarranty] = useState('');
    const[ rating, setRating ] = useState(0);
    const [formErrors, setFormErrors] = useState(null);
    
    
      const validateForm = () =>{
        let error = false;
       
        if(producer === ''){
          error={
            name:"producer", 
            message:"Producer is required!"
          };
          return error;
        }
        if(model === ''){
          error={
            name:"model", 
            message:"Model is required!"
          };
          return error;
        }
        if(image === ''){
          error={
            name:"image", 
            message:"Image is required!"
          };
          return error;
        }
        if(price === isNaN || price <= 0){
          error={
            name:"price", 
            message:"Price is required!"
          };
          return error;
        }
       
        
        if(warranty === '' ){
          error={
            name:"warranty", 
            message:"Warranty is required!"
          };
          return error;
        }
        if(warranty === 'Choose a warranty option' ){
          error={
            name:"warranty", 
            message:"Choose a valid warranty option!"
          };
          return error;
        }
        if(rating === '' ){
          error={
            name:"rating", 
            message:"Rating is required!"
          };
          return error;
        }
        
      
        return error;
      }

    /*  const validateForm = () =>{
        let error = false;
        if(formValues.producer === ''){
          error={
            name:"producer", 
            message:"Producer is required!"
          };
          return error;
        }
        if(formValues.model === ''){
          error={
            name:"model", 
            message:"Model is required!"
          };
          return error;
        }
        if(formValues.image === ''){
          error={
            name:"image", 
            message:"Image is required!"
          };
          return error;
        }
        if(formValues.price === '' || formValues.price <= 0){
          error={
            name:"price", 
            message:"Price is required!"
          };
          return error;
        }
        if((!formValues.price.match(/^-?\d*(\.\d+)?$/)) ||(!formValues.price.match( /\d+/g))){
          error={
            name:'price',
            message:" Enter only numbers"
          }
        }
        if(formValues.warranty === '' ){
          error={
            name:"warranty", 
            message:"Warranty is required!"
          };
          return error;
        }
        if(formValues.warranty === 'Choose a warranty option' ){
          error={
            name:"warranty", 
            message:"Choose a valid warranty option!"
          };
          return error;
        }
        if(formValues.rating === '' ){
          error={
            name:"rating", 
            message:"Rating is required!"
          };
          return error;
        }
        if(formValues.rating === 'Choose a rating option' ){
          error={
            name:"rating", 
            message:"Choose a valid rating option!!"
          };
          return error;
        }
      
        return error;
      }*/
   
     const onSubmit = () => {
        setFormErrors(null);
        
          let error= validateForm();
          if(error){
           setFormErrors(error);
           console.log("Form failed");
           return;
          }
        console.log("Validation successful")
        const product = { producer,
        model, image, price, warranty, rating };
              fetch(`${BASE_URL}/products`, {
             method: "POST",
             body: JSON.stringify(product),
             headers: {
               "Content-type": "application/json;",
             },
           })
             .then((response) => response.json())
             .then((product) => console.log(product))
             .catch((error) => console.log(error));
            setProducer('')
            setModel('')
            setImage('')
            setPrice(0)
            setWarranty('')
            setRating('')
            
      };

     /* const onSubmit = () => {
        setFormErrors(null);
        
          let error= validateForm();
          if(error){
           setFormErrors(error);
           console.log("Form failed");
           return;
          }
        console.log("Validation successful")
        const product = { ...formValues };
              fetch(`${BASE_URL}/products`, {
             method: "POST",
             body: JSON.stringify(product),
             headers: {
               "Content-type": "application/json;",
             },
           })
             .then((response) => response.json())
             .then((product) => console.log(product))
             .catch((error) => console.log(error));
            setFormValues(initialValues);
            
      };*/
      
      
    
      return (
        <Container className="mt-5 ">
          <Header />
          <Row
            className="bg-info bg-opacity-25 p-3 text-dark"
            style={{ width: "60%", margin: "65px auto" }}
          >
            <Col>
              <h2>Add new product</h2>
              <Form >
                <InputGroup className="mb-2">
                  <InputGroup.Text id="basic-addon1">Producer</InputGroup.Text>
                  <FormControl
                    type="text"
                    placeholder="Producer is required"
                    aria-label="Producer"
                    aria-describedby="basic-addon1"
                    name="producer"
                    value={producer}
                    onChange={e => setProducer(e.target.value)}
                  />   
                </InputGroup>
                {formErrors && formErrors.name ==='producer' ?
                 <p style={{ color: "red" }}>{formErrors.message}</p>:null}
               
                <InputGroup className="mb-2">
                  <InputGroup.Text id="basic-addon1">Model</InputGroup.Text>
                  <FormControl
                    type="text"
                    placeholder="Model is required"
                    aria-label="Model"
                    aria-describedby="basic-addon1"
                    name="model"
                    value={model}
                    onChange={e => setModel(e.target.value)}
                  />
                 
                </InputGroup>
                {formErrors && formErrors.name ==='model' ?
                 <p style={{ color: "red" }}>{formErrors.message}</p>:null}
                <InputGroup className="mb-2">
                  <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
                  <FormControl
                    type="text"
                    placeholder="Image is required"
                    aria-label="Image"
                    aria-describedby="basic-addon1"
                    name="image"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                  />
                </InputGroup>
                {formErrors && formErrors.name ==='image' ?
                 <p style={{ color: "red" }}>{formErrors.message}</p>:null}
                <InputGroup className="mb-2">
                  <InputGroup.Text id="basic-addon1">Price</InputGroup.Text>
                  <FormControl
                    type="number"
                    placeholder="Price is required"
                    aria-label="Price"
                    aria-describedby="basic-addon1"
                    name="price"
                    value={parseFloat(price)}
                    onChange={e => setPrice(parseFloat(e.target.value))}
                    
                  />
                </InputGroup>
                {formErrors && formErrors.name ==='price' ?
                 <p style={{ color: "red" }}>{formErrors.message}</p>:null}
                <Form.Select
                  className="mb-2"
                  aria-label="Default select example"
                  value={warranty}
                  
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
                {formErrors && formErrors.name ==='warranty' ?
                 <p style={{ color: "red" }}>{formErrors.message}</p>:null}
                <Form.Select
                  className="mb-2"
                  aria-label="Default select example"
                  name="rating"
                 
                  value={Number(rating)}
                  onChange={e => setRating(parseInt(e.target.value))}
                >
                  <option>Rating is required</option>
                  <option value="1 ">1 </option>
                  <option value="2">2 </option>
                  <option value="3">3 </option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
                {formErrors && formErrors.name ==='rating' ?
                 <p style={{ color: "red" }}>{formErrors.message}</p>:null}
    
                <Button
                  variant="outline-primary"
                  className="float-end"
                  onClick={onSubmit}
                >
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      );
}

export default CreateProduct;