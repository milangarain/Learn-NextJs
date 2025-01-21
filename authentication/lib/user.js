import db from "./db";
import { hashUserPassword } from "./hash";

export default function createUser(email, password) {
    const hashedPass = hashUserPassword(password);
    const result = db.prepare(
        "INSERT INTO users (email, password) VALUES (?, ?)"
    ).run(email, hashedPass);
    return result.lastInsertRowid;
}

export function getUserByEmail(email) {
    return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}