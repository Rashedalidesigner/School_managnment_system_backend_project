import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.join(process.cwd(), "src/.env"),
});


export const config = {
    PORT: process.env.PORT || 8000,
    Db_PORT: process.env.PORT || 5432 as number,
    DB_USER: process.env.USER as string,
    DB_HOST: process.env.HOST as string,
    DB_NAME: process.env.DATABASE as string,
    DB_PASSWORD: process.env.PASSWORD as string,
    JWT_SECRET: process.env.JWT_SECRET as string,
    JWT_SECRET_LIFETIME: process.env.JWT_SECRET_LIFETIME as string,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
    JWT_REFRESH_SECRET_LIFETIME: process.env.JWT_REFRESH_SECRET_LIFETIME as string
}

console.log(path.join(process.cwd(), ".env"));