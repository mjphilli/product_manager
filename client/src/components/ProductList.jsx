import React from 'react'

const ProductList = (props) => {
  return (
    <div>
        <table style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <tbody>
                {
                    props.productList.map((eachProduct, idx)=>(
                        <tr key={idx}>
                            <td><a href={`/${eachProduct._id}`}>{eachProduct.title}</a></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductList