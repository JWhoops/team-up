import React from 'react';
import Header from "./components/header/Header";
import { BrowserRouter, Route } from 'react-router-dom';
import RecruitPage from './components/pages/recruit/RecruitPage';
import FinishPage from './components/pages/finish/FinishPage';
import ProgressPage from './components/pages/progress/ProgressPage';
import LoginPage from './components/pages/user_login/LoginPage';
import RegisterPage from './components/pages/user_register/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/recruit" exact={true} component={RecruitPage} />
      <Route path="/finish" exact={true} component={FinishPage} />
      <Route path="/progress" exact={true} component={ProgressPage} />
      <Route path="/login" exact={true} component={LoginPage} />
      <Route path="/register" exact={true} component={RegisterPage} />
    </BrowserRouter>
  );
}

export default App;