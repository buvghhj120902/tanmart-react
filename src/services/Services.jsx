import React from 'react'
import '../services/services.css'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import serviceData from '../assets/data/serviceData'

const Services = () => {
    return (
        <>
            <section className="services">

                <Container>

                    <Row>
                        {serviceData.map((item) => (

                            <Col lg='3' md='4'>

                                <motion.div whileHover={{ scale: 1.1 }} className="service_item" style={{ backgroundColor: item.bg }}>

                                    <span><i class={item.icon}></i></span>

                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>

                                </motion.div>

                            </Col>
                        ))}



                    </Row>

                </Container>

            </section>
        </>
    )
}

export default Services