import React, { useEffect } from "react";
import { redirectToPage } from "../Utils/utils";
import { useNavigate } from "react-router-dom";

function Redirect() {
  const history = useNavigate();
  //const {state, dispatch} = useContext(UserContext);

  useEffect(() => {
    const user = localStorage.getItem("refresh");
    if (user) {
      //dispatch({ type: 'USER', payload: user });
      //redirectToPage('/dashboard');
    } else {
      //redirectToPage("/signin");
      redirectToPage("/dashboard");
    }
  }, []);

  return <></>;
}

export default Redirect;
