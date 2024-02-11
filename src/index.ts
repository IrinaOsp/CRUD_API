import * as dotenv from "dotenv";
import server from "./server/server";

dotenv.config();

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
