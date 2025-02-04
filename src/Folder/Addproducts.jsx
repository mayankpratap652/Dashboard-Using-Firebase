import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Contextapis';
import { fireDB } from '../Firebase/firebaseconfigue';

function Addproducts() {


 
  
  
  let [product,setproduct] = useState({

name:'Sony Mobile',
price:'3000',
image:'https://images.unsplash.com/photo-1691439378545-dd6b35ff2f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZyUyMG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D',
date: new Date(). toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})

    
  })

  ///nav to home 
let nav = useNavigate()

  let {usercon ,setusercon} = useAuth()

  let handleChange = (e)=>{
    setproduct({
      ...product , [e.target.name ] : e.target.value
    })
  }

  let handleSubmit = async(e) =>{
    e.preventDefault()
    console.log(product);
    

let productref = collection(fireDB, "products")
try {
  
await addDoc(productref, product)
alert('product added successfuly')


let newdata = []
  newdata.push(product)
  setusercon({...usercon,userdata : newdata} )

  nav('/')


} catch (error) {
  console.log(error); 
}



  }
 
  return (
    <div className=' '>

<div className="">




  <img width={'100%'} className='' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5b513bc-c2f4-4161-84ad-4ad2b64b0ac7/d4mzgz6-759ea18e-d6bc-4757-a01a-afe3077fccab.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1YjUxM2JjLWMyZjQtNDE2MS04NGFkLTRhZDJiNjRiMGFjN1wvZDRtemd6Ni03NTllYTE4ZS1kNmJjLTQ3NTctYTAxYS1hZmUzMDc3ZmNjYWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zx3qw6OIxCVFLpPqSsyEFR5uZb2rLmgjA4cjcctRlho' alt=''>

  </img>
</div>

<div className="">


<Link to='/'>

<img height={'150px'} className='m-4' src='https://cdn-icons-png.flaticon.com/128/2099/2099190.png'/>
</Link>

 
</div>



<div className=" w-75 border border-3 m-auto rounded-5 p-4 bg-info ">
<h1 className='text-center display-4 fw-bolder '>Products....</h1>
<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name </Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name..." name='name' value={product.name} onChange={handleChange}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price </Form.Label>
        <Form.Control type="number" placeholder="Enter Product Rate.." name='price'  value={product.price} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Image </Form.Label>
        <Form.Control type="text" placeholder="Image..." name='image' value={product.image} onChange={handleChange}/>
      </Form.Group>
     
      <Button variant="primary" className='my-3 w-50' type="submit">
      Addproduct 
      </Button>
      <h6  className='text-primary my-1  '>Any Doubt to you contact us on? <a href='https://www.instagram.com/'> <img className='mx-2' height={'25px'} src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png'/></a>  <a href='https://www.youtube.com/'> <img className='mx-2' height={'25px'} src='https://cdn-icons-png.flaticon.com/128/3670/3670147.png'/></a> <a href='https://www.google.co.in/'> <img className='mx-2' height={'25px'} src='https://cdn-icons-png.flaticon.com/128/281/281764.png'/></a> </h6>
    </Form>
</div>

</div>

  )
}

export default Addproducts