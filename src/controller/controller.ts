import * as http from "http";
import { v4 as uuidv4 } from "uuid";
import usersDatabase from "./UsersData";
import { User } from "./types";
import isIdUUID from "../utils/uuidTest";

const sendResponse = (
  res: http.ServerResponse,
  data: unknown,
  code: number
) => {
  res.writeHead(code, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
  return;
};

export const defaultHandler = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  sendResponse(res, { message: `${req.url} not found` }, 404);
};

export const getUser = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  if (req.url === undefined) {
    defaultHandler(req, res);
    return;
  } else {
    const id = req.url.split("/")[req.url.split("/").length - 1];
    const isValidID = isIdUUID(id);
    if (!isValidID) {
      sendResponse(res, { message: `ID ${id} is not valid` }, 400);
      return;
    }
    const user = usersDatabase.getUserById(id);
    if (!user) {
      sendResponse(res, { message: `User with id ${id} not found` }, 404);
      return;
    }
    sendResponse(res, user, 200);
  }
};

export const getUsers = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const users = usersDatabase.getAllUsers();
  sendResponse(res, users, 200);
};

export const postUser = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  let rawData = "";
  req.on("data", (chunk) => (rawData += chunk.toString()));
  req.on("end", async () => {
    try {
      const data = JSON.parse(rawData);
      if (!data || !data.username || !data.age || !data.hobbies) {
        sendResponse(res, { message: "User data is incomplete" }, 400);
        return;
      }
      const newUserData: User = {
        id: uuidv4(),
        username: data.username,
        age: data.age,
        hobbies: data.hobbies,
      };
      usersDatabase.createUser(newUserData);
      sendResponse(res, newUserData, 201);
      return;
    } catch (error) {
      sendResponse(
        res,
        {
          message:
            error instanceof Error
              ? error.message
              : "Something went wrong, try again",
        },
        400
      );
    }
  });
};

export const putUser = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  let rawData = "";
  req.on("data", (chunk) => (rawData += chunk.toString()));
  req.on("end", async () => {
    try {
      if (
        req.url === undefined ||
        !isIdUUID(req.url.split("/")[req.url.split("/").length - 1])
      ) {
        sendResponse(res, { message: `ID is not valid` }, 400);
        return;
      }
      const id = req.url.split("/")[req.url.split("/").length - 1];
      const data = JSON.parse(rawData);
      if (!data || !data.username || !data.age || !data.hobbies) {
        sendResponse(res, { message: "User data is incomplete" }, 400);
        return;
      }
      const newUserData: User = {
        id: id,
        username: data.username,
        age: data.age,
        hobbies: data.hobbies,
      };
      const newUser = usersDatabase.modifyUser(newUserData);
      sendResponse(res, newUser, 200);
      return;
    } catch (error) {
      sendResponse(
        res,
        {
          message:
            error instanceof Error
              ? error.message
              : "Something went wrong, try again",
        },
        400
      );
    }
  });
};

export const deleteUser = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  if (
    req.url === undefined ||
    !isIdUUID(req.url.split("/")[req.url.split("/").length - 1])
  ) {
    sendResponse(res, { message: `ID is not valid` }, 400);
    return;
  }
  const id = req.url.split("/")[req.url.split("/").length - 1];
  const result = usersDatabase.deleteUser(id);
  if (result) {
    sendResponse(res, { message: "User deleted successfully" }, 204);
    return;
  } else {
    sendResponse(res, { message: "User does not exist" }, 404);
    return;
  }
};
