import React, { Component } from "react";
import axios from "axios";
import qs from 'qs';
import { Link } from "react-router-dom";
import Logo from '../../asset/img/logo.png'

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
            <div>
                {/* right section */}
                <section class="right-section">
                    <div class="top-logo">
                        <img src={Logo} alt="logo-cover" srcset="" />
                    </div>
                    <div class="form-header">
                        <header>Login</header>
                        <p>Welcome Back, Please Login to your account</p>
                    </div>
                    <div class="login-form">
                        <div class="login-form-body">
                            <form action="" >
                                <div class="input-wrapper login">
                                    <div class="input-items">
                                        <label for="">Email Address</label>
                                        <br />
                                        <input type="email" name="" id="" placeholder="Your email" onChange={e => {
                                            this.setState({ email: e.target.value })
                                        }} />
                                    </div>
                                    <div class="input-items password">
                                        <label for="">Password</label>
                                        <br />
                                        <input
                                            type="password"
                                            name=""
                                            id=""
                                            placeholder="Your password"
                                            onChange={e => {
                                                this.setState({ password: e.target.value })
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class="forgot-password">
                                    <ul>
                                        <li>
                                            <input type="checkbox" />
                                            <label>Remember Me</label>
                                        </li>
                                        <li>
                                            <a href="#">Forgot Password</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="form-btn">
                                    <ul>
                                        <li>
                                            <button type="submit">Login</button>
                                        </li>
                                        <li>
                                            <Link to={"/register"}>
                                                <a>
                                                    <button type="button">Sign Up</button>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="footer login-footer">
                        <footer>
                            <p>By signing up, you agree to Book’s</p>
                            <p>
                                <span>Terms and Conditions</span> & <span>Privacy Policy</span>
                            </p>
                        </footer>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login;