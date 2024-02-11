import * as http from "http";

export const defaultHandler = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: `${req.url} not found` }));
  res.end();
};

export const getUser = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: `GET successfully` }));
  res.end();
};

export const getUsers = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: `GET successfully` }));
  res.end();
};

export const postUser = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: `POST successfully` }));
  res.end();
};

export const putUser = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: `PUT successfully` }));
  res.end();
};

export const deleteUser = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: `DELETE successfully` }));
  res.end();
};
