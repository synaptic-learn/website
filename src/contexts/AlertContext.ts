import { createContext } from "react";

import type { Alert, SetAlert } from "./AlertContext.types";

const AlertContext = createContext<[Alert, (alert: string) => ReturnType<SetAlert>]>(undefined!);

export default AlertContext;
