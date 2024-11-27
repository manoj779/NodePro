// userService.ts - High-level module that depends on Logger abstraction
import { Logger } from "./logger";

export class UserService {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  createUser(user: { name: string }): void {
    // Simulate user creation logic
    this.logger.log(`User created: ${user.name}`);
  }
}
