class User {
  private id: string;
  private name: string;
  private email: string;
  private phone!: string | null;

  constructor(
    id: string,
    name: string,
    email: string,
    phone: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

export { User };