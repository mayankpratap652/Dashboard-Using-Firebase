import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Addproducts from './Folder/Addproducts';
import ProductTable from './Folder/ProductTable';
import Homing from './Folder/Homing';
import Updator from './Folder/Updator';



function App() {
  return (
    <div>

   


      <Routes>
        <Route path='/' element={<Homing/>}/>
        <Route path='/addproduct' element={<Addproducts/>}/>
        <Route path='/producttable' element={<ProductTable/>}/>
        <Route path='/updateproduct/:id' element={<Updator/>}/>
      </Routes>
    </div>
  )
}

export default App