import {useState} from "react"
import { useHistory, Link } from 'react-router-dom';
import { BiHide,BiShow  } from "react-icons/bi";

import "./index.css";

const LoginPage = () => {
    const [isPasswordHide, onClickHidePassword] = useState(true) 
    const [userName, onChangeUserName] = useState("");
    const [password, onChangePassword] = useState("")
    const [errorMsg, onChangeErrorMsg] = useState("")

    
    const history = useHistory()

    const userNameField = () => (
        <div className = "input-field-container">
            <label htmlFor = "userName" className = "label-element">
            USERNAME
            </label>
            <input value = {userName}
            id = "userName" placeholder = "Please enter Username" className = "input-field" type = "text" onChange={(event) => {
                onChangeUserName(() => (event.target.value))
            }} required
            />
        </div>
    )

    
    const passwordField = () => {
        const inputType = isPasswordHide? "password": "text";

        return (
        <div className = "input-field-container">
        <label htmlFor = "password" className = "label-element">
        PASSWORD
        </label>
        <div className="password-container" id = "password">
        <input value={password}
         placeholder = "Please enter Password" className = "password-field" type = {inputType} onChange={(event) => {
            onChangePassword(() => (event.target.value))
         }}
         required/>
        <button className="password-status-button" type = "button" onClick={() => onClickHidePassword((previousState) => (!previousState))}>
            {
                isPasswordHide? <BiHide className="icon" />: <BiShow className="icon" /> 
            }
        </button>
        </div>
       
    </div>
        )
    }

    const onLogin = (event) => {
        event.preventDefault()

        const userList = JSON.parse(localStorage.getItem("userList"));

        const userObj = userList.find((eachObj) => (eachObj.userName === userName))

        if (userObj === undefined) {
            onChangeErrorMsg("username is not exits");
        }else if (userObj.password !== password) {
            onChangeErrorMsg("Incorect Password")
        }else{
            window.location.href = '/'
        }

}



    return (
        <div className = "sign-in-page">
            <form className = "sign-in-page-main-container" onSubmit={onLogin}>
            <div className = "logo-container">
                <img
                src = "https://res.cloudinary.com/dxaugnoxj/image/upload/v1700280207/samples/geeksynergy-removebg-preview_t1r4mq.png"
                alt = "company logo"
                className = "company-logo"
                />
                <span className = "company-name">
                &nbsp;Geeksynergy
                </span>
                </div>
                <div className = "input-fields-container">
                    {
                        userNameField()
                    }
                    {
                        passwordField()
                    }
                </div>
                <button type = "submit" className="signup-submit-button">
                    Login
                </button>
                <p>
                    if you don't have account please&nbsp;
                <Link to = "/signup" className = "link-element">
                    <span>
                    Signup
                    </span>
                </Link>
                </p>
                
                <p className="error-msg">
                    {
                        errorMsg === ""? "": "*" + errorMsg
                    }
                </p>
            </form>
        </div>
    )
}



export default LoginPage;