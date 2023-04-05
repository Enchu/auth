import React, {useState} from 'react';
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import cl from './Login.module.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailValid,setEmailValid] = useState(false)
    const [passwordValid,setPasswordValid] = useState(false)

    const nonClick = (e) => {
        e.preventDefault();
        alert("email: " + email +'\n'+ "password: " + password)
    }

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        if(e.target.value .length > 0){
        }
        else{
        }
    }

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length > 0){
        }
        else{
        }
    }

    const blurHandler = (e) => {
        switch (e.target.value){
            case 'email':
                emailValid(true)
                break
            case 'password':
                passwordValid(true)
                break
        }
    }

    return (
        <div className={cl.page__login}>
            <div className={cl.container}>
                <div className={cl.wrap}>
                    <div className={cl.content}>
                        <form onSubmit={nonClick} className={cl.sign__in}>
                            <h1 className={cl.title}>Добро пожаловать!</h1>

                            <div className={cl.input__control}>
                                <div className={cl.input__content}>
                                    <div className={cl.input__inline}>
                                        <MyInput
                                            required
                                            onChange={e => emailHandler(e)}
                                            value={email}
                                            onBlur={e => blurHandler(e)}
                                            name="username"
                                            type="text"
                                            placeholder="name@domain.ru"/>
                                    </div>
                                </div>
                            </div>

                            <div className={cl.input__control}>
                                <div className={cl.input__content}>
                                    <div>
                                        <MyInput
                                            required
                                            onChange={e => passwordHandler(e)}
                                            value={password}
                                            onBlur={e => blurHandler(e)}
                                            name="password"
                                            type="password"
                                            placeholder="••••••••"/>
                                    </div>
                                    <button type="button" className={cl.remember__link} >
                                        <span className={cl.span__password}>Забыли пароль?</span>
                                    </button>
                                </div>
                            </div>

                            <div className={cl.login__footer}>
                                <MyButton>Войти</MyButton>
                                <div className={cl.no__account}>
                                    <span>Нет аккаунта?</span>
                                    <a className={cl.reg__link}>Зарегистрируйтесь</a>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;