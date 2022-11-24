import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import { motion } from 'framer-motion'
import { Container, Nav, Row } from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import userIcon from '../../assets/images/user-icon.png'
import { useSelector } from 'react-redux'



const nav_link = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
]

const Header = () => {

    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const navigate = useNavigate()




    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.header');
        const scrollTop = window.scrollY;
        scrollTop >= 1 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    const menuRef = useRef(null)

    const menuToggle = () => menuRef.current.classList.toggle('active_menu')

    const navigateToCart = () => {

        navigate('/cart')

    }


    const [profile, setProfile] = useState(false)

    return (
        <>

            <header className="header">

                <Container>

                    <Row>

                        <div className="nav_wrapper">

                            <div className="logo">
                                <i class="ri-tumblr-line"></i>
                                <div>
                                    <h1>tanmart</h1>
                                </div>
                            </div>

                            <div className="navigation" ref={menuRef} onClick={menuToggle}>

                                <ul className="menu">

                                    {nav_link.map((item, index) => (

                                        <li className="nav_item" key={index}>

                                            <NavLink to={item.path} style={{ textDecoration: 'none', color: '#34495e' }} className={(navClass) => navClass.isActive ? 'nav_active' : ''} >{item.display}
                                            </NavLink>

                                        </li>

                                    ))}

                                </ul>

                            </div>

                            <div className="nav_icon">

                                <span className="fav_icon">
                                    <i class="ri-heart-line"></i>
                                    <span className="sss">0</span>
                                </span>

                                <span className="cart_icon" onClick={navigateToCart}>
                                    <i class="ri-briefcase-line"></i>
                                    <span className="sss">{totalQuantity}</span>
                                </span>

                                {/* <div className='profile'>

                                    <motion.img
                                        whileTap={{ scale: 2 }}
                                        src={currentUser ? currentUser.photoURL : userIcon}
                                        alt=""
                                        onClick={() => setProfile(!profile)}
                                    />

                                    <div className={profile ? "profile_action" : "show_profile"} >

                                        {

                                            currentUser ? (<span>Đăng xuất</span>) :
                                                (<div>
                                                    <Link to='/signup'>Đăng ký</Link>
                                                    <Link to='/login'>Đăng nhập</Link>
                                                </div>)

                                        }

                                    </div>

                                </div>

                                <p>{currentUser.displayName}</p> */}

                                <div className="mobile_menu">

                                    <span onClick={menuToggle} >
                                        <i class="ri-menu-line"></i>
                                    </span>

                                </div>

                            </div>

                        </div>

                    </Row>


                </Container>

            </header>

        </>
    )
}
export default Header
