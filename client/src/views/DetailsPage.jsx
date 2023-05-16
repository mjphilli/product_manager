import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DeleteProduct from '../components/DeleteProduct'

// 1. get id from params (useParams)
// 2. with the id, send api call on load (axios, useEffect)
// 3. store the changing variable from api (useState)

const DetailsPage = () => {
  const [product, setProduct] = useState()

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(response => {
        setProduct(response.data)
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      {
        product ?
          <div>
            <h2>{product.title}</h2>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
          </div> :
          <h1>Loading...</h1>
      }
      <DeleteProduct id={id} onDelete={()=>navigate(`/`)} />
    </div>
  )
}

export default DetailsPage