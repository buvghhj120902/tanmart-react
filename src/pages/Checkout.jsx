import React from 'react'
import Helmet from '../components/helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import CommonSection from '../components/UI/CommonSection'
import '../style/checkout.css'
import { useSelector } from 'react-redux'

const Checkout = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    return (
        <>
            <Helmet title='Thanh toán'>

                <CommonSection title='Thanh toán' />

                <section>

                    <Container>

                        <Row>

                            <Col lg='8'>

                                <h6 className='mb-4 fw-bold' >Thông tin thanh toán</h6>

                                <Form className='billing_form'>

                                    <FormGroup className='form_group'>
                                        <input type="text" placeholder='Tên của bạn ' />
                                    </FormGroup>

                                    <FormGroup className='form_group'>
                                        <input type="email" placeholder='Email của bạn ' />
                                    </FormGroup>

                                    <FormGroup className='form_group'>
                                        <input type="number" placeholder='Số điện thoại của bạn ' />
                                    </FormGroup>

                                    <FormGroup className='form_group'>
                                        <input type="text" placeholder='Địa chỉ của bạn ' />
                                    </FormGroup>

                                    <FormGroup className='form_group'>
                                        <input type="text" placeholder='Tỉnh' />
                                    </FormGroup>

                                    <FormGroup className='form_group'>
                                        <input type="text" placeholder='Mã bưu điện' />
                                    </FormGroup>

                                    <FormGroup className='form_group'>
                                        <input type="text" placeholder='Quốc gia' />
                                    </FormGroup>

                                </Form>

                            </Col>

                            <Col lg='4'>

                                <div className="checkout_card">

                                    <h6>Số lượng: <span>{totalQty}</span></h6>
                                    <h6>Tổng tiền:<span>${totalAmount}</span></h6>
                                    <h6><span>Phí vận chuyển: <br />Miễn phí</span> <span>$0</span></h6>

                                    <h4>Tổng tiền thanh toán: <span>${totalAmount}</span></h4>

                                    <button className="buy_btn1 auth_btn w-100">
                                        Đặt hàng
                                    </button>

                                </div>



                            </Col>

                        </Row>

                    </Container>

                </section>

            </Helmet>
        </>
    )
}
export default Checkout
