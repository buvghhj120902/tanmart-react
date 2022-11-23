import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import '../footer/footer.css'

const Footer = () => {
    return (
        <>

            <footer className="footer">

                <Container>

                    <Row>

                        <Col lg='4' >

                            <div className="logo">

                                <i class="ri-tumblr-line"></i>
                                <div>
                                    <h1>tanmart</h1>
                                </div>

                            </div>

                            <p className="footer_text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perspiciatis cum ex doloremque, consequatur ut nam eius nemo modi fuga.
                            </p>

                        </Col>

                        <Col lg='3'>

                            <div className="footer_quick-link" >
                                <h4 className="quick_links-title">
                                    Thể loại
                                </h4>
                                <ListGroup>

                                    <ListGroupItem className='ps-0 border-0' >
                                        <Link to='#' style={{ textDecoration: 'none', color: 'rgb(189, 189, 189)' }} >Điện thoại</Link>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0' >
                                        <Link to='#' style={{ textDecoration: 'none', color: 'rgb(189, 189, 189)' }} >Bàn ghế</Link>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0' >
                                        <Link to='#' style={{ textDecoration: 'none', color: 'rgb(189, 189, 189)' }} >Tai nghe</Link>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0' >
                                        <Link to='#' style={{ textDecoration: 'none', color: 'rgb(189, 189, 189)' }} >Đồng hồ</Link>
                                    </ListGroupItem>

                                </ListGroup>
                            </div>

                        </Col>

                        <Col lg='2'>

                            <div className="footer_quick-link">
                                <h4 className="quick_links-title">
                                    Danh mục
                                </h4>
                                <ListGroup>

                                    <ListGroupItem className='ps-0 border-0' >
                                        <Link to='#' style={{ textDecoration: 'none', color: 'rgb(189, 189, 189)' }} >Shop</Link>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0' >
                                        <Link to='#' style={{ textDecoration: 'none', color: 'rgb(189, 189, 189)' }} >Giỏ hàng</Link>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0' >
                                        <Link to='#' style={{ textDecoration: 'none', color: 'rgb(189, 189, 189)' }} >Đăng nhập</Link>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0' >
                                        <Link to='#' style={{ textDecoration: 'none', color: 'rgb(189, 189, 189)' }} >Điều khoản sử dụng</Link>
                                    </ListGroupItem>

                                </ListGroup>
                            </div>

                        </Col>

                        <Col lg='3'>


                            <div className="footer_quick-link">
                                <h4 className="quick_links-title">
                                    Liên hệ
                                </h4>
                                <ListGroup>

                                    <ListGroupItem className='ps-0 border-0 d-flex gap-2' >
                                        <span><i class="ri-map-pin-line"></i></span>
                                        <p>103 ngõ 59 Dương Khuê, Cầu Giấy, Hà Nội</p>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0 d-flex gap-2 ' >
                                        <span><i class="ri-phone-line"></i></span>
                                        <p>+84 367 253 072</p>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0 d-flex gap-2 ' >
                                        <span><i class="ri-mail-line"></i></span>
                                        <p>buvghhj123@gmail.com</p>
                                    </ListGroupItem>


                                </ListGroup>
                            </div>


                        </Col>

                        <Col lg='12'>

                            <p className="footer_copyright">
                                Copyright 2022 by nguyennhattan. All rights reserved
                            </p>

                        </Col>

                    </Row>

                </Container>

            </footer>

        </>
    )
}
export default Footer
