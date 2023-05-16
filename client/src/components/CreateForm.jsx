import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

// 1. form input : useState
// 2. after submit, send request to API: axios
// 3. logic after submit: redirect: useNavigate

const CreateForm = () => {
    // const [productList, setProductList] = useState([]);
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        //send formdata to api
        axios.post(`http://localhost:8000/api/products`, { title, price, description })
            .then(response => {
                navigate(`/`)
                // setProductList([...productList, response.data])
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Create</button>
        </form>
    )
}

export default CreateForm