import React from 'react'
import {LoginDiv} from './LoginStyles'

import SideImage from '../../components/SideImage/SideImage'
import BackgroundImg from '../../assets/bg_login.png'
import LoginForm from '../../components/Forms/Form/Form'

const Login = () => {
    return (
        <LoginDiv>
            <SideImage backgroundImg={BackgroundImg}/>
            <LoginForm/>
        </LoginDiv>
    )
}

export default Login