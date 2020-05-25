import React, { useState } from 'react';
import { Container, Button, Row, Col } from "react-bootstrap";
import './RegisterPage.css';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const registerClicked = () => {
        console.log(email);
        console.log(username);
        console.log(password);
        console.log(confirmpassword);
    }

    return (
        <Container className="container">
            <div className="window">
                <form className="input-form">
                    <input 
                        type="email" 
                        placeholder="电子邮箱"
                        value={email} 
                        onChange={e => setEmail(e.target.value)} // value or email?
                    />
                    <input 
                        type="text" 
                        placeholder="用户名"
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="密码"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="确认密码"
                        value={confirmpassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </form>
                <Button className="button" onClick={registerClicked}>注册</Button>
                <div className="login">
                    <Link to='/login'>登录</Link>
                </div>
                
            </div>
        </Container>
    );
}

export default RegisterPage;