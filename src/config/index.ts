export const API_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : (process.env.REACT_APP_API_URL as string);
export const JWT_SECRET = "123456" as string;
