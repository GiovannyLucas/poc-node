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
});