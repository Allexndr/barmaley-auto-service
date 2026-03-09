import * as argon2 from "argon2";
import * as jose from "jose";

const ALG = "HS256";
const COOKIE_NAME = "barmaley_admin";

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  try {
    return await argon2.verify(hash, password);
  } catch {
    return false;
  }
}

export async function hashPassword(password: string): Promise<string> {
  return argon2.hash(password, { type: argon2.argon2id });
}

function getSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("JWT_SECRET must be set and at least 32 characters");
  }
  return new TextEncoder().encode(secret);
}

export async function createToken(): Promise<string> {
  const secret = getSecret();
  return new jose.SignJWT({})
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secret);
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    const secret = getSecret();
    await jose.jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export function getCookieName() {
  return COOKIE_NAME;
}
