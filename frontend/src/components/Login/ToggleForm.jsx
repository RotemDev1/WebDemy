import React from "react";
import './ToggleForm.css';
import { Link } from 'react-router-dom';

const ToggleForm = () => {

    const { useState } = React;
    const [login, setlogin] = useState(true);
    const [card, setcard] = useState(false);
    const [joinlottery, setjoinlottery] = useState(true);

    const [inputtext, setinputtext] = useState({
        first_name: "",
        phone: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const [logintext, setlogintext] = useState({
        username: "",
        userpassword: ""
    });

    const [warnfirst, setwarnfirst] = useState(false);
    const [warnphone, setwarnphone] = useState(false);
    const [warnemail, setwarnemail] = useState(false);
    const [warnpass, setwarnpass] = useState(false);
    const [warnconf, setwarnconf] = useState(false);

    const [warnuser, setwarnuser] = useState(false);
    const [warnuspass, setwarnuspass] = useState(false);

    const [recieve, setrecieve] = useState(false);
    const [agree, setagree] = useState(false);
    const [rem, setrem] = useState(false);

    const [passeye, setpasseye] = useState(true);
    const [passtype, setpasstype] = useState("password");
    const [passwarn, setpasswarn] = useState(false);

    const [passnone, setpassnone] = useState(true);
    const [warnnone, setwarnnone] = useState(true);
    const [usernone, setusernone] = useState(true);

    const [confeye, setconfeye] = useState(true);
    const [conftype, setconftype] = useState("password");
    const [confwarn, setconfwarn] = useState(false);

    const [usereye, setusereye] = useState(true);
    const [usertype, setusertype] = useState("password");
    const [userwarn, setuserwarn] = useState(false);

    const inputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name == "password") {
            if (value.length > 0) {
                setpassnone(false);
            }
            else {
                setpassnone(true);
            }
        }

        if (name == "confirm_password") {
            if (value.length > 0) {
                setwarnnone(false);
            }
            else {
                setwarnnone(true);
            }
        }
        setinputtext((lastvalue) => {
            return {
                ...lastvalue,
                [name]: value
            }

        });
    }

    const loginEvent = (logevent) => {
        const login_name = logevent.target.name;
        const login_value = logevent.target.value;
        if (login_name == "userpassword") {
            if (login_value.length > 0) {
                setusernone(false);
            }
            else {
                setusernone(true);
            }
        }
        setlogintext((login_lastvalue) => {
            return {
                ...login_lastvalue,
                [login_name]: login_value
            }
        });
    }


    const submitForm = (e) => {
        e.preventDefault();
        setwarnfirst(false);
        setwarnphone(false);
        setwarnemail(false);
        setwarnpass(false);
        setwarnconf(false);
        if (inputtext.first_name == "") {
            setwarnfirst(true);
        }
        else if (inputtext.phone == "") {
            setwarnphone(true);
        }
        else if (inputtext.email == "") {
            setwarnemail(true);
        }
        else if (inputtext.password == "") {
            setwarnpass(true);
        }
        else if (inputtext.confirm_password == "") {
            setwarnconf(true);
        }
        else if (!recieve) {
            alert("Please allow us to send Lottery Display Emails")
        }
        else if (!agree) {
            alert("Please click on agree button ")
        }
        else {
            alert("Signed up successfully");
        }
    }

    const loginForm = (e) => {
        e.preventDefault();
        setwarnuser(false);
        setwarnuspass(false);
        if (logintext.username == "") {
            setwarnuser(true);
        }
        else if (logintext.userpassword == "") {
            setwarnuspass(true);
        }
        else {
            alert("Signed in successfully");
        }
    }

    const JoinLottery = () => {
        if (card) {
            setcard(false);
        }
        else {
            setcard(true);
        }
    }

    const TickRecieve = () => {
        if (recieve) {
            setrecieve(false);
        }
        else {
            setrecieve(true);
        }
    }

    const TickAgree = () => {
        if (agree) {
            setagree(false);
        }
        else {
            setagree(true);
        }
    }

    const PassEye = () => {
        if (passtype == "password") {
            setpasstype("text");
            setpasseye(false);
            setpasswarn(true);
        }
        else {
            setpasstype("password");
            setpasseye(true);
            setpasswarn(false);
        }
    }

    const ConfEye = () => {
        if (conftype == "password") {
            setconftype("text");
            setconfeye(false);
            setconfwarn(true);
        }
        else {
            setconftype("password");
            setconfeye(true);
            setconfwarn(false);
        }
    }

    const UserEye = () => {
        if (usertype == "password") {
            setusertype("text");
            setusereye(false);
            setuserwarn(true);
        }
        else {
            setusertype("password");
            setusereye(true);
            setuserwarn(false);
        }
    }

    const Remember = () => {
        if (rem) {
            setrem(false);
        }
        else {
            setrem(true);
        }
    }

    return (
        <>
            <div className="container">
                <div className={`card ${card ? "active" : " "}`}>


                    <div className="user signup_form">


                        <div className="image_box">
                            <img src="https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>

                        <div className="form">
                            <h3>Register</h3>
                            <form onSubmit={submitForm}>

                                <div className="input_div">
                                    <div className="input_text">
                                        <input className={` ${warnfirst ? "warning" : " "}`} type="text" value={inputtext.first_name} name="first_name" onChange={inputEvent} />
                                        <span>First Name</span>
                                    </div>
                                    <div className="input_text">
                                        <input type="text" />
                                        <span>Last Name</span>
                                    </div>
                                </div>
                                <div className="input_div">
                                    <div className="input_text">
                                        <input className={` ${warnphone ? "warning" : " "}`} type="text" value={inputtext.phone} name="phone" onChange={inputEvent} />
                                        <span>Phone Number</span>
                                    </div>
                                    <div className="input_text">
                                        <input className={` ${warnemail ? "warning" : " "}`} type="text" value={inputtext.email} name="email" onChange={inputEvent} />
                                        <span>Email</span>
                                    </div>
                                </div>
                                <div className="input_div">
                                    <div className="input_text">
                                        <input className={` ${warnpass ? "warning" : ""} ${passwarn ? "pass_warn" : ""}`} type={passtype} value={inputtext.password} name="password" onChange={inputEvent} />
                                        <span>Password</span>
                                        <i className={`fa ${passeye ? "fa-eye-slash" : "fa-eye"} ${passnone ? "passnone" : ""}`} onClick={PassEye}></i>
                                    </div>
                                    <div className="input_text">
                                        <input className={` ${warnconf ? "warning" : ""} ${confwarn ? "conf_warn" : ""}`} type={conftype} value={inputtext.confirm_password} name="confirm_password" onChange={inputEvent} />
                                        <span>Confirm Password</span>
                                        <i className={`fa ${confeye ? "fa-eye-slash" : "fa-eye"} ${warnnone ? "warnnone" : ""}`} onClick={ConfEye}></i>
                                    </div>
                                </div>
                                <div className="confirmation">
                                    <div className="checkbox">
                                        <span onClick={TickRecieve} className={` ${recieve ? "recieve_green" : ""}`}><i className="fa fa-check"></i></span>
                                        <p>Yes ,I want to recieve lottery Display Emails</p>
                                    </div>
                                    <div className="checkbox">
                                        <span onClick={TickAgree} className={` ${agree ? "agree_green" : ""}`}><i className="fa fa-check"></i></span>
                                        <p>I agree to all the <a href="#">Terms</a>,<a href="#">Privacy Policy</a> and <a href="#">Fees</a></p>
                                    </div>
                                </div>
                                <div className="button">
                                    <button type="submit">Create Account</button>
                                    <h4>Already have an account? <a href="#" onClick={JoinLottery}>Log in</a></h4>
                                </div>

                            </form>

                        </div>

                    </div>


                    <div className="user signin_form">


                        <div className="image_box">
                            <img src="https://images.pexels.com/photos/4145076/pexels-photo-4145076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>
                        <div className="form">
                            <h3>Login</h3>
                            <h4>Login to your account</h4>

                            <form onSubmit={loginForm}>

                                <div className="input_text">
                                    <input className={` ${warnuser ? "login_warning" : ""}`} type="text" placeholder="Email or phone number" name="username" value={logintext.username} onChange={loginEvent} />
                                    <span>Username</span>
                                </div>
                                <div className="input_text">
                                    <input className={` ${warnuspass ? "login_warning" : ""} ${userwarn ? "userwarn" : ""}`} type={usertype} placeholder="Password" value={logintext.userpassword} name="userpassword" onChange={loginEvent} />
                                    <span>Password</span>
                                    <i onClick={UserEye} className={`fa ${usereye ? "fa-eye-slash" : "fa-eye"} ${usernone ? "usernone" : ""}`}></i>
                                </div>

                                <div className="remember_pass">
                                    <div className="remember">
                                        <span onClick={Remember} className={` ${rem ? "remember_green" : ""}`}><i className="fa fa-check"></i></span>
                                        <p>Remember Me</p>
                                    </div>
                                    <a href="#">Reset Password</a>
                                </div>
                                <div className="sign_in">
                                    <Link type="submit" to={`/Header`}>
                                        SignUp
                                    </Link>
                                    {/* <button type="submit">Sign in</button> */}
                                </div>

                            </form>

                            <div className="join_lottery">
                                <span>Don't have account yet? <br /><a href="#" onClick={JoinLottery}>Join Lottery Display</a></span>

                            </div>
                        </div>

                    </div>


                </div>

            </div>



        </>
    );
}
export default ToggleForm;
