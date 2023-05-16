import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CreateForm from '../components/CreateForm'
import ProductList from '../components/ProductList'

const DashboardPage = () => {
  const [productList, setProductList] = useState([])

  const removeFromDom = (deleteId) => {
    const filteredList = productList.filter((eachProduct) =>
        eachProduct._id !== deleteId)
    setProductList(filteredList)
}

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products`)
      .then(response => {
        setProductList(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div><h1>Product Manager</h1></div>
      <CreateForm />
      <div><h1>All Products:</h1></div>
      <ProductList productList={productList} onDelete={removeFromDom} />
    </div>
  )
}

export default DashboardPage