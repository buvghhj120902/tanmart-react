import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import products from '../assets/data/products'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../style/shop.css'
import ProductList from '../components/UI/ProductList'

const Shop = () => {

    const [productData, setProductData] = useState(products)

    // Lọc checkbox
    const handlefilter = (e) => {

        const filterValue = e.target.value

        if (filterValue === 'sofa') {
            const filteredProducts = products.filter(item => item.category === 'sofa')

            setProductData(filteredProducts)
        }

        if (filterValue === 'mobile') {
            const filteredProducts = products.filter(item => item.category === 'mobile')

            setProductData(filteredProducts)
        }

        if (filterValue === 'chair') {
            const filteredProducts = products.filter(item => item.category === 'chair')

            setProductData(filteredProducts)
        }

        if (filterValue === 'watch') {
            const filteredProducts = products.filter(item => item.category === 'watch')

            setProductData(filteredProducts)
        }

        if (filterValue === 'wireless') {
            const filteredProducts = products.filter(item => item.category === 'wireless')

            setProductData(filteredProducts)
        }


    }
    // Lọc tìm kiếm
    const handleSearch = (e) => {

        const searchItem = e.target.value

        const searchedProduct = products.filter(item => item.category.toLowerCase().includes(searchItem.toLowerCase()))

        setProductData(searchedProduct)

    }

    return (
        <>
            <Helmet title={'Shop'}>

                <CommonSection title={'Sản phẩm của chúng tôi'} />

                <section>

                    <Container>

                        <Row>

                            <Col lg='3' md='6'>

                                <div className="filter_widget">
                                    <select onClick={handlefilter}>
                                        <option>Danh mục thể loại</option>
                                        <option value="sofa">Ghế Sofa</option>
                                        <option value="mobile">Điện thoại</option>
                                        <option value="chair">Ghế</option>
                                        <option value="watch">Đồng hồ</option>
                                        <option value="wireless">Tai nghe</option>
                                    </select>
                                </div>

                            </Col>

                            <Col lg='3' md='6' className='text-end'>

                                <div className="filter_widget">
                                    <select>
                                        <option>Sắp xếp theo</option>
                                        <option value="ascending">Tăng dần</option>
                                        <option value="descending">Giảm dần</option>
                                    </select>
                                </div>

                            </Col>

                            <Col lg='6' md='12'>

                                <div className="search_box">
                                    <input type="text" placeholder='Nhập thứ gì đó đi...' onChange={handleSearch} />
                                    <span><i class="ri-search-line"></i></span>
                                </div>

                            </Col>

                        </Row>

                    </Container>

                </section>

                <section className='pt-0'>

                    <Container>

                        <Row>

                            {productData.length === 0 ? <h1 className='text-center' >Không tìm thấy gì</h1> : <ProductList data={productData} />}

                        </Row>

                    </Container>

                </section>

            </Helmet>
        </>
    )
}
export default Shop
