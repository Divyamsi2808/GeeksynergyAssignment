import {useState} from "react"
import { BiHide,BiShow  } from "react-icons/bi";

import "./index.css";

const SignUp = () => {

    const [isPasswordHide, onClickHidePassword] = useState(true) 
    const [userName, onChangeUserName] = useState("")
    const [password, onChangePassword] = useState("")
    const [email, onChangeEmail] = useState("")
    const [mobileNumber, onChangeMobileNumber] = useState('')
    const [profession, onChangeProfession] = useState("Web Development")
    const [errorMsg, onChangeErrorMsg] = useState("")

    const userNameField = () => (
        <div className = "input-field-container">
            <label htmlFor = "userName" className = "label-element">
            USERNAME
            </label>
            <input value={userName}
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
        <input value = {password}
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

    const emailField = () => (
        <div className = "input-field-container">
            <label htmlFor = "email" className = "label-element">
            Email
            </label>
            <input 
            id = "email" placeholder = "Please enter your email" className = "input-field" type = "email" value={email}
            onChange={(event) => {
                onChangeEmail(() => (event.target.value))
            }}
            required/>
        </div>
    )

    const mobileNumberField = () => (
        <div className = "input-field-container">
            <label htmlFor = "mobileNumber" className = "label-element">
            Phone number
            </label>
            <input value={mobileNumber}
            id = "mobileNumber" placeholder = "Please enter your Phone number" className = "input-field" type = "tel"  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            onChange={(event) => {
                onChangeMobileNumber(()=>(event.target.value))
            }}
            required />
        </div>
    )

    const professionField = () => {
        const professionsList = [{
            id : 1,
            profession: "Digital Marketing Executive"
        },
         {
            id : 2,
            profession: "Web Development"
        },
        {
            id : 3,
            profession: "Business Development Manager"
        },
        {
            id : 4,
            profession: "Associate Tech Specialist"
        },
        {
                id : 5,
                profession: "IT Sales Executive"
            }]

            return (
                <div className = "input-field-container">
                <label htmlFor = "profession" className = "label-element">
                Profession
                </label>
                <select id = "profession" className = "input-field" onChange={(event)=> {
                    onChangeProfession(()=>(event.target.value))
                }}>
                    {
                        professionsList.map((eachObj) => (<option key = {eachObj.id} value={eachObj.profession}>{eachObj.profession}</option>))
                    }
                </select>
            </div>
            )
    }

    const onSignUp = (event) => {
        event.preventDefault()

        const userList = JSON.parse(localStorage.getItem("userList"));

        const newObj = {
            userName,
            password,
            email,
            mobileNumber,
            profession
        }
        
        if (userList === null) {
            localStorage.setItem("userList", JSON.stringify([newObj]));
        }else{
            const isUserExits = userList.some((eachObj) => (eachObj.userName === userName))
            if (isUserExits) {
                onChangeErrorMsg("username alredy Exits")
            }else{
                localStorage.setItem("userList", JSON.stringify([newObj,...userList]));
                onChangeEmail("");
                onChangeMobileNumber("");
                onChangePassword("");
                onChangeUserName("");
                onChangeProfession("Digital Marketing Executive");
                onChangeErrorMsg("");
                window.location.href = '/'
            }
        }

        
    }

    return (
        <div className = "sign-in-page">
            <form className = "sign-in-page-main-container" onSubmit={onSignUp}>
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
                    {
                        emailField()
                    }
                    {
                        mobileNumberField()
                    }
                    {
                        professionField()
                    }
                </div>
                <button type = "submit" className="signup-submit-button">
                    SignUp
                </button>
                <p>
                    if you have account please&nbsp;
                    <a href="/login" className="link-element ">
                        Login
                    </a>
                &nbsp;to Your account
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



export default SignUp;