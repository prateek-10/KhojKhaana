import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import temporary from '../../images/temporary.jpg'
import { Box, Stack, Typography } from '@mui/material'
import { Margin } from '@mui/icons-material'
import { toast } from 'react-toastify'
import Headersignout from '../../components/Layoutsignedin/Headersignout'
import CornKorma from '../../images/cornkorma.jpg'
import DalMakhani from '../../images/dalmakhani.jpg'

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
                    "ProductName": "Corn Korma",
                    "ProductDescription":
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
                    "ProductImage": CornKorma,
                    "ProductPrice": 200,
                    "ProductCategory": "jain",
                    "ProductId": 1
                  },
                  {
                    "ProductName": "Dal Makhani",
                    "ProductDescription":
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
                    "ProductImage": DalMakhani,
                    "ProductPrice": 200,
                    "ProductCategory": "jain",
                    "ProductId": 2
                  },
            ]
        }
        if (temp.code == 69) {
            setproductdata(temp.Data[0])
        }
    }

    useEffect(() => {
        getproductbyid()
    }, [reloadnavbar])
    // const products=[
    // {
    //     "ProductName": "Corn Korma",
    //     "ProductDescription":
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     "ProductImage": CornKorma,
    //     "ProductPrice": 200,
    //     "ProductCategory": "jain",
    //     "ProductId": 1
    //   },
    //   {
    //     ProductName: "Dal Makhani",
    //     ProductDescription:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     ProductImage: DalMakhani,
    //     ProductPrice: 200,
    //     ProductCategory: "jain",
    //     ProductId: 2
    //   },
    //   {
    //     name: "Rice and Lentils",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: rice,
    //     price: 200,
    //     category: "jain",
    //     id: 3
    //   },
    //   {
    //     name: "Dosa",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: Dosa,
    //     price: 200,
    //     category: "veg", 
    //     id: 4
    //   },
    //   {
    //     name: "Chola",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: Chola,
    //     price: 250,
    //     category: "veg",
    //     id: 5
    //   },
    //   {
    //     name: "Idli Sambhar",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: Idli,
    //     price: 300,
    //     category: "veg",
    //     id: 6
    //   },
    //   {
    //     name: "Masala Dosa",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: MasalaDosa,
    //     price: 100,
    //     category: "veg",
    //     id: 7
    //   },
    //   {
    //     name: "Paneer",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: Paneer,
    //     price: 400,
    //     category: "veg",
    //     id: 8
    //   },
    //   {
    //     name: "Gujrati",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: Gujrati,
    //     price: 500,
    //     category: "veg",
    //     id: 9
    //   },
    //   {
    //     name: "Malabar Fish Biryani",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: FishBiryani,
    //     price: 200,
    //     category: "nonveg", 
    //     id: 10
    //   },
    //   {
    //     name: "Mutton Badam Korma",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: MuttonKorma,
    //     price: 200,
    //     category: "nonveg",
    //     id: 11
    //   },
    //   {
    //     name: "Grilled Chicken with Salsa",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: Chicken,
    //     price: 200,
    //     category: "nonveg",
    //     id: 12
    //   },
    //   {
    //     name: "Masala Chai",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: MasalaChai,
    //     price: 200,
    //     category: "beverage", 
    //     id: 13
    //   },
    //   {
    //     name: "Oreo Shake",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: OreoShake,
    //     price: 200,
    //     category: "beverage", 
    //     id: 14
    //   },
    //   {
    //     name: "Aam Panna",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: AamPanna,
    //     price: 200,
    //     category: "beverage", 
    //     id: 15
    //   },
    //   {
    //     name: "Kaju Katli",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: KajuKatli,
    //     price: 200,
    //     category: "dessert",
    //     id: 16
    //   },
    //   {
    //     name: "Gulab Jamun",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: GulabJamun,
    //     price: 200,
    //     category: "dessert", 
    //     id: 17
    //   },
    //   {
    //     name: "Modak",
    //     description:
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    //     image: Modak,
    //     price: 200,
    //     category: "dessert", 
    //     id: 18
    //   }
    // ]
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