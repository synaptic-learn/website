const getEnvVar = (var_key: string) => process.env[var_key] as string;

export default getEnvVar;
