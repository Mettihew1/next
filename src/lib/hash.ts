// lib/hash.ts
import bcrypt from "bcrypt";

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function comparePasswords(plain: string, hashed: string) {
  return await bcrypt.compare(plain, hashed);
}
