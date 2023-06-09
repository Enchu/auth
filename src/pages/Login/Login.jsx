import React, {useState} from 'react';
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import cl from './Login.module.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailValid,setEmailValid] = useState(false)
    const [passwordValid,setPasswordValid] = useState(false)
    const [focused, setFocused] = useState(false)
    const [required, setRequired] = useState(false)

    const nonClick = (e) => {
        e.preventDefault();
        setRequired(true)
        if(email.length > 0 && password.length > 0){
            alert("email: " + email +'\n'+ "password: " + password)
        }
    }

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        /*if(e.target.value .length > 0){
            setRequired(true)
        }*/
    }

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
        /*if(e.target.value.length > 0){
            setRequired(true)
        }*/
    }

    const blurHandler = (e) => {
        switch (e.target.value){
            case 'email':
                setFocused(true)
                emailValid(true)
                break
            case 'password':
                setFocused(true)
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
                                            required={required}
                                            focused={focused.toString()}
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
                                    <div className={cl.input__inline}>
                                        <MyInput
                                            required={required}
                                            focused={focused.toString()}
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
                                    <a className={cl.reg__link} href="#">Зарегистрируйтесь</a>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className={cl.footer}>
                        <a className={cl.footer__link} href="#">Политика конфиденциальности</a>
                        <a className={cl.footer__link} href="#">Помощь</a>
                        <a className={cl.footer__link} href="#">Switch language</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;