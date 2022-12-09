import type { Dispatch, SetStateAction } from "react";

export type Alert = string | undefined;

export type SetAlert = Dispatch<SetStateAction<Alert>>;
