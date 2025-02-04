import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../Contextapis';
import { doc, updateDoc } from 'firebase/firestore';
import { fireDB } from '../Firebase/firebaseconfigue';

function Updator() {


  let [product,setproduct] = useState(
    {
      name:'',
      price:'',
      image:'',
      date: new Date(). toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})
      
    }
  )


  let nav =  useNavigate()

 let handlechange = (e) =>{
 setproduct(
  {
...product , [e.target.name  ] : e.target.value
  }
 ) 
 }

 let handleSubmit = async(e) =>{
  e.preventDefault()
  try {
    await updateDoc(doc(fireDB,"products" , id ),product) 
    alert ("Updated Successfully")

nav('/')

  } catch (error) {
    
  }
 }



  let {id} = useParams()
  console.log(id);

  let {usercon,setusercon} = useAuth()

  let findata = usercon.userdata.find(ele=> ele.id === id )
  console.log(findata);
    
useEffect(()=>{
let findata = usercon.userdata.find(ele=> ele.id === id )
console.log(findata);
setproduct(findata)

},[id])

  return (
    <div className=' '>

<div className="">




  

</div>

<div className="">

<Link to='/'>

<img height={'150px'} className='m-4' src='https://cdn-icons-png.flaticon.com/128/2099/2099190.png'/>
</Link>

 
</div>



<div className=" w-75 border border-3 m-auto rounded-5 p-4 bg-danger-subtle mb-4">
<h1 className='text-center display-4 fw-bolder '>UpdateProducts....</h1>
<Form onSubmit={handleSubmit}>
  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name </Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name..." name = 'name' value={product?.name }  onChange={handlechange} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price </Form.Label>
        <Form.Control type="number" placeholder="Enter Product Rate.."  name = 'price' value={product?.price}  onChange={handlechange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Image </Form.Label>
        <Form.Control type="text" placeholder="Image..."   name = 'image ' value={product?.image }  onChange={handlechange}  />
      </Form.Group>
     
      <Button variant="primary" className='my-3 w-50' type="submit">
    Updateproduct 
      </Button>
      <h6  className='text-primary my-1  '>Any Doubt to you contact us on? <a href='https://www.instagram.com/'> <img className='mx-2' height={'25px'} src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png'/></a>  <a href='https://www.youtube.com/'> <img className='mx-2' height={'25px'} src='https://cdn-icons-png.flaticon.com/128/3670/3670147.png'/></a> <a href='https://www.google.co.in/'> <img className='mx-2' height={'25px'} src='https://cdn-icons-png.flaticon.com/128/281/281764.png'/></a> </h6>
    </Form>
</div>

</div>

  )
}

export default Updator