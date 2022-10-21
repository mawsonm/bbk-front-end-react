import React from "react";
import LoginForm from "../components/LoginForm";
import classes from "./Login.module.css";
import Card from "../layout/Card";
const Login = () => {
  return (
    <div className={classes.bgImgLogin}>
      <div className={classes.onTop}>
        <div className={classes.loginGrid}>
          <div className={classes.header}>
            <h1>Welcome back master chef!</h1>
          </div>
          <div className={classes.subHeader}>
            <h2>Let's get dinner started</h2>
          </div>
          <Card className={classes.loginFormWrapper}>
            <LoginForm />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
