import React,{useRef} from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import classes from './Form.module.css';

const Form = (props) => {

  const idRef = useRef();
  const priceRef = useRef();
  const productRef = useRef();
  const categoryRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
   
    const id = idRef.current.value;
    const sp = priceRef.current.value;
    const pn = productRef.current.value;
    const cat = categoryRef.current.value;

    const obj = {
      id , sp, pn ,cat
    }
    props.addItem(obj);
    
    idRef.current.value = '';
    priceRef.current.value = '';
    productRef.current.value = '';
    categoryRef.current.value = 'Choose';
  }

    return (
      <Card className={classes.form}>
        <form onSubmit={submitHandler}>
          <label htmlFor="product-id">Product-ID</label>
          <input ref={idRef} type="number" required/>
          <label>Selling-Price</label>
          <input ref={priceRef} type="number" required/>
          <label>Product-Name</label>
          <input ref={productRef} type="text" required/>
          <label htmlFor="category">Category</label>
          <select ref={categoryRef}>
            <option value="Choose">Choose</option>
            <option value="food">Food</option>
            <option value="Electronics">Electronics</option>
            <option value="SkinCare">SkinCare</option>
          </select>
          <Button>Add-Item</Button>
        </form>
      </Card>
    );
}

export default Form;