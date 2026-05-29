import app from "./app";
import { connectToDatabase } from "./database";

const server = () => {
    connectToDatabase();
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}


server();