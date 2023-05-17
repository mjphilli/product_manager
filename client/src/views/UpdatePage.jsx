import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

// 1. get id from params (useParams)
// 2. with the id, send api call on load (axios, useEffect)
// 3. form input : useState
// 4. after submit, send request to API: axios
// 5. logic after submit: redirect: useNavigate

const UpdatePage = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    //send formdata to api
    axios.patch(`http://localhost:8000/api/products/${id}`, { title, price, description })
      .then(response => {
        navigate(`/`)
      })
      .catch(err => {
        const errResponse = err.response.data.errors
        const errorArr = []
        for (const key of Object.keys(errResponse)) { // Loop through all errors and get the messages
          errorArr.push(errResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr)
      })
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(response => {
        const product = response.data
        setTitle(product.title)
        setPrice(product.price)
        setDescription(product.description)
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <div>
          <label>Title </label>
          <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Price </label>
          <input type="text" name="price" value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Description </label>
          <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UpdatePage