// consoleLogger.ts - Concrete implementation of Logger
const { Logger } = require("./logger");
export class ConsoleLogger extends Logger {
  constructor() {
    super();
  }
  log(message: string): void {
    console.log(message);
  }
}
