import React, {useEffect, useState} from 'react';
import { Container, Button, Row, Col } from "react-bootstrap";
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginClicked = () => {
        console.log(username);
        console.log(password);
    }

    return (
        <Container className="container">
            <div className="window">
                <form className="input-form">
                    <input 
                        type="text" 
                        placeholder="用户名"
                        value={username} 
                        onChange={e => setUsername(e.target.username)} //?
                    />
                    <input 
                        type="password" 
                        placeholder="密码"
                        value={password}
                        onChange={e => setPassword(e.target.password)}
                    />
                </form>
                <Button onClick={loginClicked}>登录</Button>
                <Link to='/register'>注册</Link>
            </div>
        </Container>
    );
}

export default LoginPage;