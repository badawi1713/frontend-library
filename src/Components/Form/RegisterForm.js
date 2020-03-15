import React, { Component } from "react";
import Logo from "../../asset/img/bookshelf-logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import qs from 'qs';
class RegisterForm extends Component {

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
            });
    }
    render() {
        return (
            <div>
                <div class="right-section">
                    <div class="top-logo">
                        <img src={Logo} alt="logo-cover" srcset="" />
                    </div>
                    <div class="form-header header-register">
                        <header>Register</header>
                        <p>Welcome Back, Please Register to create account</p>
                    </div>
                    <div class="login-form">
                        <div class="login-form-body">
                            <form action="">
                                <div class="input-wrapper register-form-input">
                                    <div class="input-items">
                                        <label for="">Username</label>
                                        <br />
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Input username"
                                            onChange={e => {
                                                this.setState({ username: e.target.value })
                                            }}
                                        />
                                    </div>
                                    <div class="input-items">
                                        <label for="">Fullname</label>
                                        <br />
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Input fullname"
                                            onChange={e => {
                                                this.setState({ fullname: e.target.value })
                                            }}
                                        />
                                    </div>
                                    <div class="input-items">
                                        <label for="">Email Address</label>
                                        <br />
                                        <input type="email" name="" id="" placeholder="Input email" onChange={e => {
                                            this.setState({ email: e.target.value })
                                        }} />
                                    </div>
                                    <div class="input-items">
                                        <label for="">Password</label>
                                        <br />
                                        <input
                                            type="password"
                                            name=""
                                            id=""
                                            placeholder="Input password"
                                            onChange={e => {
                                                this.setState({ password: e.target.value })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="form-btn">
                                    <ul>
                                        <li>
                                            <button type="submit">Sign Up</button>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                <a>
                                                    <button onClick={event => this.postRegister(event)} type="button">Sign In</button>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="footer">
                        <footer>
                            <p>By signing up, you agree to Book’s</p>
                            <p>
                                <span>Terms and Conditions</span> & <span>Privacy Policy</span>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}


export default RegisterForm;
