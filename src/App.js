import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RecruitPage from './components/pages/recruit/RecruitPage';
import HomePage from './components/pages/home/HomePage';
import FinishPage from './components/pages/finish/FinishPage';
import ProgressPage from './components/pages/progress/ProgressPage';
import LoginPage from './components/pages/user_login/LoginPage';
import RegisterPage from './components/pages/user_register/RegisterPage';
import RecruitDetailPage from './components/pages/recruitDetail/RecruitDetailPage';
import ProfilePage from './components/pages/userProfile/ProfilePage';
import NewTeamPage from './components/pages/newTeam/NewTeamPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/recruit" component={RecruitPage} />
        <Route path="/finish" exact={true} component={FinishPage} />
        <Route path="/progress" exact={true} component={ProgressPage} />
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/register" exact={true} component={RegisterPage} />
        {/* <Route path="/recruiting_teams/:id" component={RecruitDetailPage} /> */}
        <Route path="/team/:id" component={RecruitDetailPage} />
        <Route path="/user_profile/:id" component={ProfilePage} />
        <Route path="/new_team" component={NewTeamPage} />
        {/* <Footer /> */}
      </Container>
    </BrowserRouter>
  );
}

export default App;