import React from 'react'
import { motion } from 'framer-motion'
import '../../style/product-card.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify';


const ProductCart = ({ item }) => {

    const dispatch = useDispatch()

    const addToCart = () => {

        dispatch(cartAction.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
        }))

        toast.success("Sản phẩm đã được thêm vào giỏ hàng")

    }

    return (
        <>
            <Col lg='3' md='4' >

                <div className="product_item">

                    <div className="product_img">
                        <Link to={`/shop/${item.id}`}  > <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" /></Link>
                    </div>

                    <div className="p-2 product_info">

                        <h3 className="product_name">
                            <Link to={`/shop/${item.id}`} style={{ textDecoration: 'none', color: '#0a1d37' }} > {item.productName} </Link>
                        </h3>

                        <span>{item.category}</span>

                    </div>

                    <div className="product_card-bottom p-2">

                        <span className="price">
                            ${item.price}
                        </span>

                        <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart} ><i class="ri-add-fill"></i></motion.span>

                    </div>

                </div>

            </Col>
        </>
    )
}

export default ProductCart