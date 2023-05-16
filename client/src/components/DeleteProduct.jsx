import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const DeleteProduct = (props) => {

    const navigate = useNavigate()

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${props.id}`)
            .then(response => {
                navigate(`/`)
            })
            .catch(err => console.log(err))
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteProduct