import React, { Component } from "react";
import axios from "axios";
import qs from 'qs';
import "./Register.css";
// import { render } from "@testing-library/react";

const HOST = "localhost:3001/api/v1/user/register"
class Register extends Component {
    state = {
        email: "",
        fullname: "",
        username: "",
        password: "",
    }

    postRegister = (e) => {
        e.preventDefault()
        const {
            email,
            fullname,
            username,
            password,
        } = this.state
        const data = {
            email,
            fullname,
            username,
            password,
        }
        axios.post("http://localhost:3001/api/v1/user/register", qs.stringify(data))
            .then(result => {
                if (result.status === 200) {
                    alert("Register Success")
                    try {
                        this.props.history.push('/login')
                    } catch (error) {
                        console.log('a shit just happened')
                    }
                }
            }).catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="grid-container-index">
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
                <section className="right-section">
                    <div className="top-logo">
                        <img src={require("../../asset/img/logo.png")} alt="logo-cover" srcset="" />
                    </div>
                    <div className="form-header header-register">
                        <header>Register</header>
                        <p>Welcome Back, Please Register to create account</p>
                    </div>
                    <div className="login-form">
                        <div className="login-form-body">
                            <form action="">
                                <div className="input-wrapper register-form-input">
                                    <div className="input-items">
                                        <label for="">Username</label>
                                        <br />
                                        <input onChange={e => {
                                            this.setState({ username: e.target.value })
                                        }} type="text" name="" id="" placeholder="Input username" />
                                    </div>
                                    <div className="input-items">
                                        <label for="">Fullname</label>
                                        <br />
                                        <input onChange={e => {
                                            this.setState({ fullname: e.target.value })
                                        }} type="text" name="" id="" placeholder="Input fullname" />
                                    </div>
                                    <div className="input-items">
                                        <label for="">Email Address</label>
                                        <br />
                                        <input onChange={e => {
                                            this.setState({ email: e.target.value })
                                        }} type="email" name="" id="" placeholder="Input email" />
                                    </div>
                                    <div className="input-items">
                                        <label for="">Password</label>
                                        <br />
                                        <input onChange={e => {
                                            this.setState({ password: e.target.value })
                                        }} type="password" name="" id="" placeholder="Input password" />
                                    </div>
                                </div>
                                <div className="form-btn">
                                    <ul>
                                        <li>
                                            <button
                                                onClick={event => this.postRegister(event)}>
                                                Sign Up
                                            </button>
                                        </li>
                                        <li>
                                            <a href="/"><button type="button">Sign In</button></a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="footer">
                        <footer>
                            <p>By signing up, you agree to Book’s</p>
                            <p>
                                <span>Terms and Conditions</span> & <span>Privacy Policy</span>
                            </p>
                        </footer>
                    </div>
                </section>
                {/* <!-- end of right-section --> */}
            </div>
        )
    }
}

export default Register