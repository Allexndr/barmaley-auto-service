#!/usr/bin/env node
/**
 * Generate Argon2id hash for admin password.
 * Usage: node scripts/hash-password.mjs "your-password"
 * Set result as ADMIN_PASSWORD_HASH in .env
 */
import argon2 from "argon2";
import crypto from "crypto";

const password = process.argv[2];
if (!password) {
  console.error("Usage: node scripts/hash-password.mjs \"your-password\"");
  process.exit(1);
}

const hash = await argon2.hash(password, { type: argon2.argon2id });
console.log("Set in .env:");
console.log("ADMIN_PASSWORD_HASH=" + hash);
console.log("JWT_SECRET=" + crypto.randomBytes(32).toString("hex"));
