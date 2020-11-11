import { User } from "./user";

export class UserList {
  private list: User[] = [];

  constructor() {}

  public add(user: User) {
    this.list.push(user);
    return user;
  }

  public updateName(id: string, name: string) {
    this.list.forEach((user) => {
      if (user.id === id) {
        user.userName = name;
      }
    });
  }

  public getAll() {
    return this.list.filter((user) => user.userName !== "no-name");
  }

  public getOne(id: string) {
    return this.list.find((user) => user.id === id);
  }

  public getAllOfRoom(roomId: string) {
    return this.list.filter((user) => user.room === roomId);
  }

  public deleteOne(id: string) {
    const userToDelete = this.getOne(id);

    this.list = this.list.filter((user) => user.id !== id);

    return userToDelete;
  }
}
