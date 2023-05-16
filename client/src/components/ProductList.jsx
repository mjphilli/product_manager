import React from 'react'
import { Link } from 'react-router-dom'
import DeleteProduct from '../components/DeleteProduct'

const ProductList = (props) => {
    return (
        <div>
            <table style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <tbody>
                    {
                        props.productList.map((eachProduct, idx) => (
                            <tr key={idx}>
                                <td>
                                    <Link to={`/${eachProduct._id}`}>{eachProduct.title}</Link>
                                </td>
                                <td>
                                    <Link to={`/${eachProduct._id}/edit`}>Edit</Link>
                                </td>
                                <td>
                                    <DeleteProduct id={eachProduct._id} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList