'use server';

import { createAuthSession, destroySession } from "@/lib/auth";
import { verifyPassword } from "@/lib/hash";
import createUser, { getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

async function signup(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    let errors = [];
    if (!email || !email.includes('@')) {
        errors.push('invalid email');
    }
    if (!password || password.length < 4) {
        errors.push('invalid password');
    }
    console.log("signup", errors);
    if(errors.length !==0) {
        return {errors};
    }
    let id;
    try {
        id = createUser(email, password);
    } catch (error) {
        if(error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            errors.push('email already in use');
            return {errors};
        }
        throw error;
        
    }
    await createAuthSession(id);
    redirect("training");
}

async function signIn(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    let errors = [];
    const existingUser = getUserByEmail(email);
    if (!existingUser || !existingUser.email) {
        errors.push('email not exists');
    } else if(!verifyPassword( existingUser.password, password)) {
        errors.push('incorrect password');

    }
    console.log("signIn" , errors);
    if(errors.length !== 0) {
        return {errors};
    }
    await createAuthSession(existingUser.id);
    redirect("training");
}

async function signOut() {
    destroySession();
    redirect("/");
}

export { signup, signIn, signOut };