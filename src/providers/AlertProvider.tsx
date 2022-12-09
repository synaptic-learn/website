import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";

import type { Alert } from "../contexts/AlertContext.types";

import AlertContext from "../contexts/AlertContext";

const socket = io();

export default function AlertProvider(props: PropsWithChildren) {
  const [alert, setAlert] = useState<Alert>(undefined);

  const setAlertFade = useCallback(function (alert: string) {
    setAlert(alert);
    setTimeout(function () {
      setAlert(undefined);
    }, 10000);
  }, []);

  useEffect(
    function () {
      socket.on("message", setAlertFade);
    },
    [setAlertFade]
  );

  return <AlertContext.Provider value={[alert, setAlertFade]} {...props} />;
}
