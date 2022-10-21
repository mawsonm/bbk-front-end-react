import classes from "./Snackbar.module.css";
import { SnackContext } from "../store/snack-context";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Snackbar = (props) => {
  const snackCtx = useContext(SnackContext);
  return (
    <div
      className={
        props.isActive
          ? [classes.snackbar, classes.fadeIn].join(" ")
          : [classes.snackbar, classes.fadeOut].join(" ")
      }
    >
      <p className={classes.msg}>{props.message}</p>

      <FontAwesomeIcon
        style={{ cursor: "pointer" }}
        onClick={snackCtx.closeSnack}
        icon={faX}
      />
    </div>
  );
};

export default Snackbar;
