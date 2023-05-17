import React, { useState } from 'react'
import axios from "axios"

// 1. form input : useState
// 2. after submit, send request to API: axios
// 3. logic after submit: redirect: useNavigate

const CreateForm = (props) => {
    // const [productList, setProductList] = useState([]);
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        //send formdata to api
        axios.post(`http://localhost:8000/api/products`, { title, price, description })
            .then(response => {
                props.onSuccess(response.data)
                setTitle("")
                setPrice(0)
                setDescription("")
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

    return (
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
            <button type="submit">Create</button>
        </form>
    )
}

export default CreateForm