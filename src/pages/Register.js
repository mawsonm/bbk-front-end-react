import RegisterForm from "../components/RegisterForm";
import classes from "./Login.module.css";
import Card from "../layout/Card";
const Register = () => {
  return (
    <div className={classes.bgImgLogin}>
      <div className={classes.onTop}>
        <div className={classes.registerGrid}>
          <div className={classes.header}>
            <h1>Welcome to our Community</h1>
          </div>
          <div className={classes.subHeader}>
            <h2>A master chef starts right here</h2>
          </div>
          <Card className={classes.registerFormWrapper}>
            <RegisterForm />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
