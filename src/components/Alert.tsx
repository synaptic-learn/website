import { useContext } from "react";

import AlertContext from "../contexts/AlertContext";

import "./Alert.css";

export default function Alert() {
  const [alert] = useContext(AlertContext);

  return alert ? (
    <div className="position-absolute w-100">
      <div className="alert alert-success mx-auto w-fc z-999" id="alert" role="alert">
        {alert}
      </div>
    </div>
  ) : (
    <></>
  );
}
