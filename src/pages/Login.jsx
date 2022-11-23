import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Container, Row, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/helmet/Helmet'
import '../style/login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signIn = async (e) => {

        e.preventDefault()
        setLoading(true)

        try {

            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            const user = userCredential.user

            console.log(user)

            setLoading(false)
            toast.success("Đăng nhập thành công")
            navigate('/checkout')

        } catch (error) {

            setLoading(false)
            toast.error(error.message)

        }

    }

    return (
        <>
            <Helmet title='Đăng nhập' >

                <section>

                    <Container>

                        <Row>

                            {

                                loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading......</h5></Col>

                                    :

                                    (

                                        <Col lg='6' className='m-auto text-center'>

                                            <h3 className='fw-bold fs-4 mb-4 '>Đăng nhập</h3>

                                            <Form className='auth_form' onSubmit={signIn}>

                                                <FormGroup className='form_group'>
                                                    <input type="email" placeholder='Email của bạn' value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </FormGroup>

                                                <FormGroup className='form_group'>
                                                    <input type="password" placeholder='Mật khẩu của bạn' value={password} onChange={(e) => setPassword(e.target.value)} />
                                                </FormGroup>

                                                <button type='submit' className="buy_btn auth_btn">
                                                    Đăng nhập
                                                </button>

                                                <p className='mt-3'>Bạn chưa có tài khoản ? <Link to='/signup' style={{ textDecoration: 'none', color: '#fff' }}>Tạo tài khoản ở đây</Link></p>

                                            </Form>

                                        </Col>

                                    )

                            }

                        </Row>

                    </Container>

                </section>

            </Helmet>
        </>
    )
}
export default Login
