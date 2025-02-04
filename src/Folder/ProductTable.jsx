import { Button, Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { fireDB } from '../Firebase/firebaseconfigue';
import { useAuth } from '../Contextapis';



function ProductTable() {


  let {usercon, setusercon} = useAuth()
  console.log(usercon);

  let getData = async() =>{
  try{
    let q = query(collection(fireDB,"products"))
    
    let data = onSnapshot(q, (para)=>{
      let allprods =[]
      para.forEach(ele=>{
        allprods.push({...ele.data() , id:ele.id})
      })
      console.log(allprods);
      setusercon({isLoad:false, userdata: allprods})
      
    })
return ()=>data
  } catch(error){
    console.log(error);
    
  }

  }

  useEffect(()=>{
    getData()
  },[])






  

  let deleteproduct =async (para) =>{
    console.log(para);
    try {
    if(window.confirm('Do yoy want to delete this product')){
      await deleteDoc(doc(fireDB, "products" ,para))
alert ('Product deleted Successfully  ')
setusercon(usercon.userdata.filter(ele=> ele.id !== para ))

    }
      getData()
    } catch (error) {
      console.log(error);
      
      
    }
    
  }

  return (
   


   



   
    <div className=''>
     <div className="d-flex align-items-center  border border-2  bg-primary  ">

     <img height={'150px'} className='mx-5 rounded rounded-5 '  src='https://cdn-icons-gif.flaticon.com/11614/11614817.gif' />  
      <h1 className='my-5  fw-bolder display-2 '>Firebase Ecommerce.</h1>
     </div>
    
        <div className="d-flex justify-content-between mx-3  my-5">
          
          <div className="w-50 d-flex m">
        <input type='text'  placeholder='Search Product......' className='rounded-3 p-1 form-control '/><img className='m-auto mx-2' height={'40px'} src='https://cdn-icons-png.flaticon.com/128/3128/3128287.png'/>
        </div>
<Link to='/Addproduct'>
            <Button className='fw-bolder'variant='primary'>AddProduct</Button>
            </Link>
        </div>
<div className="">
 



    
   
<Table striped bordered hover variant="dark ">
      <thead>
        <tr>
          <th>S-No.</th>
          <th>Product Name</th>
        
      
          <th className=''>
            Product Image</th>
           
        
          <th>Product Price</th>
          
          <th>Date</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className=''>
       {
        usercon.userdata && usercon.userdata.map((ele,index)=>(


       
          <tr key={index}>
            <td>{index+1}</td>
            <td>{ele.name}</td>
          
          
         

            <td><img src={ele.image} width={'40px'} /> </td>
         
                
        
            <td>{ele.price}</td>
            <td>{ele.date}</td>
<td>
  <Link to={`/updateproduct/${ele.id}`}>
  <Button variant='info'>Edit</Button>
  </Link>
</td>
<td>

  <Button variant='danger' onClick={()=>deleteproduct(ele.id)}>
    
    Delete
  </Button>

</td>

          </tr>
        ))
       }
      
      </tbody>
    
    </Table>
  
    </div>
    </div>
   
    
  )
}

export default ProductTable