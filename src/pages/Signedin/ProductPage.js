import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import temporary from '../../images/temporary.jpg'
import { Box, Stack, Typography } from '@mui/material'
import { Margin } from '@mui/icons-material'
import { toast } from 'react-toastify'
import Headersignout from '../../components/Layoutsignedin/Headersignout'

const ProductPage = ({ reloadnavbar, setreloadnavbar }) => {
    const { productid } = useParams()
    const [imageset, setimageset] = React.useState(null)
    const [productdata, setproductdata] = React.useState([])
    const [count, setcount]= React.useState(1)
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
    }, [reloadnavbar])
    // const [reloadnavbar, setreloadnavbar] = React.useState(false)
    const addtocart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))

        if (cart) {
            // alert('1 item is already added to cart')
            let itemincart = cart.find(item => item.productdata.ProductId === productdata.ProductId)
            if (itemincart) {
                cart = cart.map(item => {
                    if (item.productdata.ProductId === productdata.ProductId) {
                        return {
                            ...item,
                            quantity: item.quantity + count
                        }
                    }
                    else {
                        return item
                    }
                })
                localStorage.setItem('cart', JSON.stringify(cart))
            }
            else {
                cart = [
                    ...cart,
                    {
                        productdata,
                        quantity: count
                    }
                ]
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        }
        else {
            cart = [{
                productdata,
                quantity: count
            }]

            // console.log(cart)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        setreloadnavbar(!reloadnavbar)
        toast.success('Item added to cart')
    }
    return (
        // <><h1>Product id is -{productid}</h1><p>
        //       {JSON.stringify(productdata)}
        //   </p></>
            <>
            {/* // <><h1>Product id is -{productid}</h1><p>
            //       {JSON.stringify(productdata)}
            //   </p></> */}
            {/* <Headersignout reloadnavbar={reloadnavbar}/> */}
            <Link to='/cartpage'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    Go Back
                </button>
            </Link>
            <Stack style={{display: "flex", flexDirection: "row", marginTop: '60px'}}>
                <Box>
                    <Box className='img' sx={{ height: "15vh", width: "25vw" }}>
                        <img src={productdata.ProductImage} style={{ marginLeft: " 350px", marginBottom: "20px" }} />
                    </Box>
                </Box>
                <Box style={{ marginLeft: " 430px", marginBottom: "20px", marginTop: "-15px"}}>
                    <Typography style={{ fontSize: '50px' }}>{productdata.ProductName}</Typography>
                    <Box sx={{display: "flex", flexDirection: "row", gap: "5px"}} ><Typography>Total Value:  </Typography>₹̥{productdata.ProductPrice * count}
                    </Box>
                    <Box className='increase' sx={{display: "flex", flexDirection: "row", justifyContent: "flex-end",}}>
                        <button style={{padding: "0px 10px"}}
                            onClick={() => {
                                if (count > 1) {
                                    setcount(count - 1)
                                }
                            } }
                        >-</button>
                        <Typography>{count}</Typography>
                        <button style={{padding: "0px 10px"}}
                            onClick={() => {
                                if (count < 100) {
                                    setcount(count + 1)
                                }
                            } }>+</button>
                    </Box>
                    <div>
                        <button style={{padding: "10px"}} onClick={() => {
                             addtocart()
                        } }>Add to Cart
                        </button>
                        <button onClick={() => {
                            alert('Buy Now')
                        } }>Buy Now
                        </button>
                    </div>
                </Box>
            </Stack></>
    )
}

export default ProductPage