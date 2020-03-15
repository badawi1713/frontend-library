import React, { Component } from "react";
import axios from "axios";
import qs from 'qs';
import "./Login.css";

const HOST = "http://localhost:3001/api/v1/user/login"
class Login extends Component {
    state = {
        email: "",
        password: "",
    }

    postLogin = (event) => {
        event.preventDefault() //wajib ada
        const {
            email,
            password,
        } = this.state
        const data = {
            email,
            password,
        }
        console.log('ok')
        axios.post("http://localhost:3001/api/v1/user/login", qs.stringify(data))
            .then(result => {
                if (result.status === 200) {
                    alert("Sukses login")
                    try {
                        localStorage.setItem("KEY_TOKEN", result.data.result.token)
                        this.props.history.push('/home')
                    } catch (error) {
                        console.log('a shit just happened')
                    }
                }
            }).catch(error => {
                alert("Email atau Password salah")
            })
    }
    render() {
        return (
            <div className="grid-container-index">
                {/* <!-- left-section --> */}
                <section className="left-section">
                    <img src={require("../../asset/img/index-cover.png")} alt="" />
                    <div className="header-cover">
                        <p>Book is a window to the world</p>
                    </div>
                    <div className="footer-cover">
                        <p>Photo by Mark Pan4ratte on Unsplash</p>
                    </div>
                    <div className="overlay-bg"></div>
                </section>
                {/* <!-- end of left-section -->

        <!-- right-section --> */}
                <section className="right-section">
                    <div className="top-logo">
                        <img src={require("../../asset/img/bookshelf-logo.png")} alt="logo-cover" srcset="" />
                    </div>
                    <div className="form-header">
                        <header>Login</header>
                        <p>Welcome Back, Please Login to your account</p>
                    </div>
                    <div className="login-form">
                        <div className="login-form-body">
                            <form action="" method="post">
                                <div className="input-wrapper login">
                                    <div className="input-items">
                                        <label for="">Email Address</label>
                                        <br />
                                        <input onChange={e => {
                                            this.setState({ email: e.target.value })
                                        }} type="email" name="" id="" placeholder="Your email" />
                                    </div>
                                    <div className="input-items password">
                                        <label for="">Password</label>
                                        <br />
                                        <input onChange={e => {
                                            this.setState({ password: e.target.value })
                                        }} type="password" name="" id="" placeholder="Your password" />
                                    </div>
                                </div>

                                <div className="forgot-password">
                                    <ul>
                                        <li>
                                            <input type="checkbox" />
                                            <label>Remember Me
                                    </label>
                                        </li>
                                        <li>
                                            <a href="#">Forgot Password</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="form-btn">
                                    <ul>
                                        <li>
                                            <button
                                                onClick={event => this.postLogin(event)}> {/* WAJIB GINI ada event yg di passing*/}
                                            Login
                                            </button>
                                        </li>
                                        <li><a href="/register"><button type="button">Sign Up</button></a></li>
                                        {/* <!-- <li><a href="http://">Sign Up</a></li> --> */}
                                    </ul>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="footer login-footer">
                        <footer>
                            <p>By signing up, you agree to Book’s</p>
                            <p><span>Terms and Conditions</span> & <span>Privacy Policy</span></p>
                        </footer>
                    </div>

                </section>
                {/* <!-- end of right-section --> */}
            </div>
        )
    }
}

export default Login;