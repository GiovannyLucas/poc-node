class User {
  private id: string;
  private name: string;
  private email: string;
  private phone?: string;

  constructor(
    id: string,
    name: string,
    email: string,
    phone?: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.validate();
  }

  validate() {
    if (!this.id || !this.name || !this.email) {
      throw new Error('Required field not provided.');
    }
  }
}

export { User };