import React, { useEffect, useState } from 'react';
import { Container, Button } from "react-bootstrap";
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
        <div id="login-container">
            <div className="window">
                <form className="input-form">
                    <input
                        type="text"
                        placeholder="用户名"
                        value={username}
                        onChange={e => setUsername(e.target.value)} //?
                    />
                    <input
                        type="password"
                        placeholder="密码"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button className="button" onClick={loginClicked}>登录</Button>
                    <div className="register">
                        <Link to='/register'>注册</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;