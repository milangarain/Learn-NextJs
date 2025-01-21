import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import db from "./db";
import { Lucia } from "lucia";
import { cookies } from "next/headers";

const adapter = new BetterSqlite3Adapter(db, {
    user: "users",
    session: "sessions"
});


const lucia = new Lucia(adapter, 
    {
        sessionCookie: {
            expires: false,
            attribute: {
                secure: process.env.NODE_ENV === "production"
            }
        }
    }
);

export async function createAuthSession(userId) {
    console.log("createAuthSession", userId);
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )
}

export async function verifyAuth() {
    const sessionCookie = cookies().get(lucia.sessionCookieName);
    if(!sessionCookie) {
        return {
            user: null,
            session: null
        };
    }
    const sessionId = sessionCookie.value;
    if(!sessionId) {
        return {
            user: null,
            session: null
        };
    }
    const result = lucia.validateSession(sessionId);
    try {

        if (result.session && result.session.fresh) {
            const sessionCookie = lucia.createSessionCookie(result.session.id);
            cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            );
        }

        if( !result.session) {
            const sessionCookie = lucia.createBlankSessionCookie();
            cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            )
        }
    } catch{}
    return result;
}

export async function destroySession() {
    const session = (await verifyAuth()).session;
    if(!session) {
        return {
            errors: ["No session to destroy"]
        };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );


}