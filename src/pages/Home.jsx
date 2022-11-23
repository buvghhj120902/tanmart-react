import React, { useEffect, useState } from 'react'
import Helmet from '../components/helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../style/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'
import products from '../assets/data/products'

import imgCounter from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'



const Home = () => {

    const year = new Date().getFullYear()

    const [trendingProduct, setTrendingProduct] = useState(products)

    const [bestSale, setBestSale] = useState(products)

    const [mobileProducts, setMobileProducts] = useState(products)

    const [wirelessProducts, setWirelessProducts] = useState(products)

    const [watchProducts, setWatchProducts] = useState(products)

    useEffect(() => {

        const filterTrendingProducts = products.filter(
            (item) => item.category === "chair"
        )

        const filterBestSale = products.filter(
            (item) => item.category === "sofa"
        )

        const filterMobileProducts = products.filter(
            (item) => item.category === "mobile"
        )

        const filterWirelessProducts = products.filter(
            (item) => item.category === "wireless"
        )

        const filterWatchProducts = products.filter(
            (item) => item.category === "watch"
        )

        setTrendingProduct(filterTrendingProducts)
        setBestSale(filterBestSale)
        setMobileProducts(filterMobileProducts)
        setWirelessProducts(filterWirelessProducts)
        setWatchProducts(filterWatchProducts)

    }, [])





    return (
        <>
            <Helmet title={"Trang chủ"}>

                <section className="hero_section">

                    <Container>

                        <Row>

                            <Col lg='6' md='6' >

                                <div className="hero_content">

                                    <p className="hero_subtitle">
                                        Sản phẩm xu hướng {year}
                                    </p>

                                    <h2>Làm cho nội thất của bạn tối giản hơn & hiện đại hơn</h2>

                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur temporibus doloribus dolorum vel eius quos alias corporis, a officiis nostrum!</p>

                                    <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                                        <Link to='/shop' style={{ textDecoration: 'none', color: 'white' }}> MUA SẮM NGAY</Link>
                                    </motion.button>

                                </div>

                            </Col>

                            <Col lg='6' md='6'>

                                <div className="hero_img">
                                    <img src={heroImg} alt="" />
                                </div>

                            </Col>

                        </Row>

                    </Container>

                </section>

                <Services />

                <section className="trending_products">

                    <Container>

                        <Row>

                            <Col lg='12' className='text-center'>

                                <h2 className="section_title">
                                    Sản phẩm xu hướng
                                </h2>

                            </Col>

                            <ProductList data={trendingProduct} />

                        </Row>

                    </Container>

                </section>

                <section className="best_sales">

                    <Container>

                        <Row>

                            <Col lg='12' className='text-center'>

                                <h2 className="section_title">
                                    Sản phẩm giảm giá
                                </h2>

                            </Col>

                            <ProductList data={bestSale} />


                        </Row>

                    </Container>

                </section>

                <section className="timer_count">

                    <Container>

                        <Row>

                            <Col lg='6' md='12' >

                                <div className="clock_top-content">

                                    <h4 className='text-white fs-6 mb-2' >Ưu đãi giới hạn</h4>
                                    <h3 className='text-white fs-5 mb-3' >Ghế cao cấp</h3>

                                </div>

                                <Clock />

                                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn store_btn ">

                                    <Link to='/shop' style={{ textDecoration: 'none', color: '#0a1d37', alignItems: 'center', fontWeight: '600' }}>Đến ngay</Link>

                                </motion.button>

                            </Col>

                            <Col lg='6' md='12' className='text-end count_img' >

                                <img src={imgCounter} alt="" />

                            </Col>

                        </Row>

                    </Container>

                </section>

                <section className="new_arrivals">

                    <Container>

                        <Row>

                            <Col lg='12' className='text-center'>

                                <h2 className="section_title">
                                    Sản phẩm mới nhất
                                </h2>

                            </Col>

                            <ProductList data={mobileProducts} />

                            <ProductList data={wirelessProducts} />

                        </Row>

                    </Container>

                </section>

                <section className="new_arrivals">

                    <Container>

                        <Row>

                            <Col lg='12' className='text-center'>

                                <h2 className="section_title mb-5">
                                    Sản phẩm ưa chuộng
                                </h2>

                            </Col>

                            <ProductList data={watchProducts} />

                        </Row>

                    </Container>

                </section>


            </Helmet>
        </>
    )
}
export default Home
