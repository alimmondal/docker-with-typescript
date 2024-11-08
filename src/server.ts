import { Server } from "http";
import app from "./app";

const port = 5000;

let server: Server;

async function main() {
  try {
    server = app.listen(port, () => {
      console.log("app listening on port", port);
    });
  } catch (error) {
    console.log(error);
  }
}
main();

process.on("unhandledRejection", (err) => {
  console.log("first", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
});
process.on("uncaughtException", () => {
  console.log("uncaughtException is detected and sutting down........");
  process.exit(1);
});
