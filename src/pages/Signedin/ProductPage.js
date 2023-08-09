import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import temporary from '../../images/temporary.jpg'
import { Stack } from '@mui/material'

const ProductPage = () => {
    const { productid } = useParams()
    const [imageset, setimageset] = React.useState(null)
    const [productdata, setproductdata] = React.useState([])
    const getproductbyid = async () => {
        let temp = {
            "code": 69,
            "Message": "success",
            "Data": [
                {
                    "ProductId": 1,
                    "ProductName": "Product 1",
                    "ProductDescription": "Product 1 description ",
                    "ProductImage": temporary,
                    "ProductPrice": 300,
                    "ProductShippingPrice": 50
                }
            ]
        }
        if (temp.code == 69) {
            setproductdata(temp.Data[0])
        }
    }

    useEffect(() => {
        getproductbyid()
    }, [])
    return (
        // <><h1>Product id is -{productid}</h1><p>
        //       {JSON.stringify(productdata)}
        //   </p></>
        <Stack>
            <Link to='/cart'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    Go Back
                </button>
            </Link>
        </Stack>
    )
}

export default ProductPage