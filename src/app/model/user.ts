export class User {
  id: Number;
  userName: String;
  userRole: String;
  email: string;
  password: string;

  constructor() {
    this.id = 0;
    this.userName = '';
    this.userRole = 'Admin';
    this.email = '';
    this.password = '';
  }
}
