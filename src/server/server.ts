import * as http from "http";
import {
  defaultHandler,
  getUser,
  getUsers,
  postUser,
  putUser,
  deleteUser,
} from "../controller/controller";

const server = http.createServer((req, res) => {
  const reqUrl = req.url;
  const reqMethod = req.method;
  if (
    reqUrl === undefined ||
    reqMethod === undefined ||
    !reqUrl.startsWith("/api/users")
  ) {
    defaultHandler(req, res);
    return;
  }
  const reqEndpoint =
    reqUrl.split("/")[reqUrl.split("/").length - 1] !== "users" ?? null;
  switch (reqMethod) {
    case "GET": {
      if (reqEndpoint) {
        getUser(req, res);
      } else {
        getUsers(req, res);
      }
      break;
    }
    case "POST": {
      postUser(req, res);
      break;
    }
    case "PUT": {
      putUser(req, res);
      break;
    }
    case "DELETE": {
      deleteUser(req, res);
      break;
    }
    default: {
      defaultHandler(req, res);
    }
  }
});

export default server;
