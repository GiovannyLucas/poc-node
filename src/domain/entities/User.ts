class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _phone?: string;

  constructor(
    id: string,
    name: string,
    email: string,
    phone?: string
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._phone = phone;
    this.validate();
  }

  validate() {
    if (!this._id || !this._name || !this._email) {
      throw new Error('Required field not provided.');
    }
  }

  get name() {
    return this._name;
  }

  get phone() {
    return this._phone;
  }

  updateName(newName: string) {
    this._name = newName;
  }

  updatePhone(newPhone: string) {
    this._phone = newPhone;
  }
}

export { User };