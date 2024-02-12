import { User } from "./types";

class UsersDatabase {
  private users: User[];

  constructor() {
    this.users = [];
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(userId: string): User | undefined {
    return this.users.find((user) => user.id === userId);
  }

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  modifyUser(modifiedUser: User): User | undefined {
    const user = this.getUserById(modifiedUser.id);
    if (user) {
      user.username = modifiedUser.username;
      user.age = modifiedUser.age;
      user.hobbies = modifiedUser.hobbies;
      return user;
    }
  }

  deleteUser(id: string): boolean {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}

const usersDatabase = new UsersDatabase();

export default usersDatabase;
