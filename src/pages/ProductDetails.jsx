import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import products from '../assets/data/products'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../style/product-detail.css'
import { motion } from 'framer-motion'
import ProductList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux'
import { cartAction } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify';

const ProductDetails = () => {

    const dispatch = useDispatch()

    const reviewUser = useRef('')

    const reviewMsg = useRef('')

    const [tab, setTab] = useState('desc')

    const [rating, setRating] = useState(null)

    const { id } = useParams()
    const product = products.find(item => item.id === id)

    const { imgUrl, productName, price, avgRating, reivews, description, shortDesc, category } = product

    const relatedProduct = products.filter(item => item.category === category)

    const submitHandle = (e) => {

        e.preventDefault()

        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating,
        }

        console.log(reviewObj)

        toast.success(' Bình luân thành công ')

    }

    const addToCart = () => {

        dispatch(cartAction.addItem({
            id,
            productName: productName,
            price: price,
            imgUrl: imgUrl,
        }))

        toast.success("Sản phẩm đã được thêm vào giỏ hàng")

    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])



    return (
        <>
            <Helmet title={productName}>


                <CommonSection title={productName} />

                <section className='pt-0'>

                    <Container>

                        <Row>

                            <Col lg='6'>

                                <img src={imgUrl} alt="" />

                            </Col>

                            <Col lg='6'>

                                <div className="product_detail">

                                    <h2>{productName}</h2>

                                    <div className="product_rating d-flex gap-4 mb-3">

                                        <div >

                                            <span ><i class="ri-star-s-fill"></i></span>
                                            <span ><i class="ri-star-s-fill"></i></span>
                                            <span ><i class="ri-star-s-fill"></i></span>
                                            <span ><i class="ri-star-s-fill"></i></span>
                                            <span ><i class="ri-star-half-s-fill"></i></span>

                                        </div>

                                        <p className='d-flex gap-1'>(<span>{avgRating} <i class="ri-star-s-fill"></i></span> đánh giá) </p>

                                    </div>

                                    <div className='d-flex align-items-center gap-5'>
                                        <span className='product_price'>${price}</span>
                                        <p> <span>Thể loại: {category}</span></p>
                                    </div>


                                    <p>{shortDesc}</p>

                                    <motion.button whileTap={{ scale: 1.2 }} className="buy_btn" onClick={addToCart}>Thêm vào giỏ</motion.button>

                                </div>



                            </Col>

                        </Row>

                    </Container>

                </section>

                <section>

                    <Container>

                        <Row>

                            <Col lg='12'>

                                <div className="tab_wrapper d-flex align-items-center gap-5">

                                    <h6 className={`${tab === 'desc' ? 'active_tab' : ''}`} onClick={() => setTab('desc')}>Mô tả</h6>

                                    <h6 className={`${tab === 'rev' ? 'active_tab' : ''}`} onClick={() => setTab('rev')}>Reviews(1)</h6>

                                </div>

                                {
                                    tab === 'desc'

                                        ?

                                        (
                                            <div className="tab_content mt-5">
                                                <p>{description}</p>
                                            </div>
                                        )

                                        :

                                        (
                                            <div className="product_review mt-5">

                                                <div className="review_wrapper">

                                                    <ul>

                                                        <li className='mb-4'>

                                                            <h6> Tân Nguyễn</h6>

                                                            <p className='d-flex gap-1'>(<span>{avgRating} <i class="ri-star-s-fill"></i></span> đánh giá )</p>

                                                            <p>{shortDesc}</p>

                                                        </li>

                                                    </ul>

                                                    <div className="review_form">

                                                        <h4>Để lại ý kiến của bạn</h4>

                                                        <form action="" onSubmit={submitHandle}>

                                                            <div className="form_group">

                                                                <input type="text" placeholder='Tên bạn là gì ?' ref={reviewUser} required />

                                                            </div>

                                                            <div className="form_group d-flex align-items-center rating_group">

                                                                <motion.span whileTap={{ scale: 1.5 }} onClick={() => setRating(1)}>1<i class="ri-star-s-fill"></i></motion.span>
                                                                <motion.span whileTap={{ scale: 1.5 }} onClick={() => setRating(2)}>2<i class="ri-star-s-fill"></i></motion.span>
                                                                <motion.span whileTap={{ scale: 1.5 }} onClick={() => setRating(3)}>3<i class="ri-star-s-fill"></i></motion.span>
                                                                <motion.span whileTap={{ scale: 1.5 }} onClick={() => setRating(4)}>4<i class="ri-star-s-fill"></i></motion.span>
                                                                <motion.span whileTap={{ scale: 1.5 }} onClick={() => setRating(5)}>5<i class="ri-star-s-fill"></i></motion.span>

                                                            </div>

                                                            <div className="form_group">

                                                                <textarea rows='4' type="text" placeholder='Bạn ghi gì đi...' ref={reviewMsg} required />

                                                            </div>

                                                            <motion.button whileTap={{ scale: 1.5 }} type='submit' className="buy_btn">Gửi</motion.button>




                                                        </form>

                                                    </div>

                                                </div>

                                            </div>
                                        )
                                }



                            </Col>

                            <Col lg='12'>

                                <h2 className="related_title mt-5">
                                    Có thể bạn quan tâm
                                </h2>

                            </Col>

                            <ProductList data={relatedProduct} />

                        </Row>

                    </Container>

                </section>


            </Helmet>
        </>
    )
}
export default ProductDetails
