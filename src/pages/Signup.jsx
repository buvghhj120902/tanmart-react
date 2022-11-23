import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/helmet/Helmet'
import '../style/login.css'

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { setDoc, doc } from 'firebase/firestore'

import { auth } from '../firebase.config'
import { storage } from '../firebase.config'
import { db } from '../firebase.config'

import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'



const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signup = async (e) => {

        e.preventDefault()

        setLoading(true)

        try {

            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            const user = userCredential.user

            const storageRef = ref(storage, `images/${Date.now() + username}`)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on((error) => {

                toast.error(error.message)

            }, () => {

                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

                    // Cập nhật thông tin người dùng
                    await updateProfile(user, {

                        displayName: username,
                        photoURL: downloadURL,

                    })

                    // Lưu trữ dữ liệu người dùng vào csdl firestore
                    await setDoc(doc(db, "nguoidung1", user.uid), {
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: downloadURL,
                    })

                })

            })

            setLoading(false)
            toast.success("Tạo tài khoản thành công")
            navigate('/checkout')

        } catch (error) {

            setLoading(false)
            toast.error("Email này đã được sử dụng")

        }

    }


    return (
        <>
            <Helmet title='Đăng ký' >

                <section>

                    <Container>

                        <Row>

                            {

                                loading ? (<Col lg='12' className='text-center'><h5 className='fw-bold'>Loading....</h5></Col>)

                                    :

                                    (
                                        <Col lg='6' className='m-auto text-center'>

                                            <h3 className='fw-bold fs-4 mb-4 '>Đăng ký</h3>

                                            <Form className='auth_form' onSubmit={signup}>

                                                <FormGroup className='form_group'>
                                                    <input
                                                        type="text"
                                                        placeholder='Tên của bạn'
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                    />
                                                </FormGroup>

                                                <FormGroup className='form_group'>
                                                    <input
                                                        type="email"
                                                        placeholder='Email của bạn'
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </FormGroup>

                                                <FormGroup className='form_group'>
                                                    <input
                                                        type="password"
                                                        placeholder='Mật khẩu của bạn'
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </FormGroup>

                                                <FormGroup className='form_group'>
                                                    <input
                                                        type="file"
                                                        onChange={(e) => setFile(e.target.files[0])}
                                                    />
                                                </FormGroup>

                                                <button type='submit' className="buy_btn auth_btn">
                                                    Tạo tài khoản
                                                </button>

                                                <p className='mt-3'>Đã có tài khoản ? <Link to='/login' style={{ textDecoration: 'none', color: '#fff' }}>Đăng nhập ở đây</Link></p>

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
export default Signup

