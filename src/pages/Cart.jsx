import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../style/cart.css'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItem)

    const totalAmount = useSelector(state => state.cart.totalAmount)

    return (
        <>
            <Helmet title='Giỏ hàng'>

                <CommonSection title='Giỏ hàng của bạn' />

                <section>

                    <Container>

                        <Row>

                            <Col lg='9' >

                                {

                                    cartItems.length === 0 ? (<h2 className='fs-4 '>Không có cái gì ở giỏ </h2>)

                                        :

                                        (
                                            <table className='table bordered'>

                                                <thead>
                                                    <tr>
                                                        <th>Sản phẩm</th>
                                                        <th>Tên SP</th>
                                                        <th>Giá</th>
                                                        <th>Số lượng</th>
                                                        <th>Hành động</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {
                                                        cartItems.map((item, index) => (
                                                            <Tr item={item} key={index} />
                                                        ))
                                                    }
                                                </tbody>

                                            </table>
                                        )
                                }



                            </Col>

                            <Col lg='3' >

                                {

                                    cartItems.length === 0 ? ('')

                                        :
                                        (
                                            <div>

                                                <div className='d-flex align-items-center gap-5'>
                                                    <h6>Tổng tiền :</h6>
                                                    <span className='mb-2 fs-4 fw-bold'>${totalAmount}</span>
                                                </div>

                                                <p>Thuế và phí vận chuyển sẽ được tính khi thanh toán</p>

                                                <div>
                                                    <motion.button whileTap={{ scale: 1.3 }} className="buy_btn w-100 ">
                                                        <Link to='/checkout' style={{ textDecoration: 'none', color: '#fff' }} >Thanh toán</Link>
                                                    </motion.button>
                                                </div>

                                                <div>
                                                    <motion.button whileTap={{ scale: 1.3 }} className="buy_btn w-100 mt-3">
                                                        <Link to='/shop' style={{ textDecoration: 'none', color: '#fff' }} >Tiếp tục mua</Link>
                                                    </motion.button>
                                                </div>

                                            </div>
                                        )

                                }

                            </Col>

                        </Row>

                    </Container>

                </section>

            </Helmet>
        </>
    )
}

const Tr = ({ item }) => {

    const dispatch = useDispatch()

    const deleteProduct = () => {
        dispatch(cartAction.deleteItem(item.id))
    }

    return (
        <tr>
            <td><img src={item.imgUrl} alt="" /></td>
            <td>{item.productName}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td><i class="ri-delete-bin-5-line" onClick={deleteProduct}></i></td>
        </tr>
    )
}
export default Cart
