import bcrypt from 'bcryptjs';

export const encrypt = (text: string): string => {
  const salt = bcrypt.genSaltSync(6);
  const hash = bcrypt.hashSync(text, salt);

  return hash;
}

export const compare = (text: string, pswdUserDb: string): boolean => {
  const result = bcrypt.compareSync(text, pswdUserDb);

  return result;
}