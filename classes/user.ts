export class User {
  public id: string;
  public userName: string;
  public room: string;

  constructor(id: string) {
    this.id = id;
    this.userName = "no-name";

    this.room = "no-room";
  }
}
