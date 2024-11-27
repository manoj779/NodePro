import fs = require("fs");
const { Logger } = require("./logger");
export class FileLogger extends Logger {
  constructor() {
    super();
  }

  log(message: string): void {
    fs.appendFileSync("log.txt", message + "\n");
  }
}
