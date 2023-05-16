import React from 'react'
import axios from 'axios'

const DeleteProduct = (props) => {

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${props.id}`)
            .then(response => {
                props.onDelete(props.id)
            })
            .catch(err => console.log(err))
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteProduct