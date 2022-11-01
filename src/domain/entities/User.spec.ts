import { describe, it, expect } from 'vitest';
import { randomUUID } from 'crypto';
import { randFirstName, randEmail, randPhoneNumber } from '@ngneat/falso';

import { User } from './User';

describe('user entity', () => {
  it('should be an instance of user entity', () => {
    const id = randomUUID();
    const name = randFirstName();
    const email = randEmail();
    const phone = randPhoneNumber();

    const user = new User(id, name, email, phone);
    
    expect(user).toBeInstanceOf(User);
  });

  it('should not be able to create a new user entity not passing required fields', () => {
    const id = randomUUID();
    const name = '';
    const email = '';
    
    expect(() => {
      new User(id, name, email);
    }).toThrowError('Required field not provided.');
  });

  it('should be able to update the user`s name', () => {
    const id = randomUUID();
    const name = randFirstName();
    const email = randEmail();

    const newName = name + 'new';

    const user = new User(id, name, email);

    user.updateName(newName);

    expect(user.name).toBe(newName);
  });

  it('should be able to update the user`s phone', () => {
    const id = randomUUID();
    const name = randFirstName();
    const email = randEmail();

    const newPhone = randPhoneNumber();

    const user = new User(id, name, email);

    user.updatePhone(newPhone);

    expect(user.phone).toBe(newPhone);
  });
});