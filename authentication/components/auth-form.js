"use client";
import { useState } from 'react';
import { signIn, signup } from '@/actions/auth';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { usePathname, useSearchParams } from 'next/navigation';


function ErrorState({ errors }) {
  return (
      <ul className='form-error' style={{color: '#cc1111'}}>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
  );
}

export default function AuthForm() {
  const query = useSearchParams();
  
  const isLogin = query.get('login');
  // const mode = isLogin ? signup : signIn;
  const [formState, formAction] = useFormState(isLogin ?  signIn : signup, {errors: []});
  console.log(formState);
  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {formState.errors && <ErrorState errors={formState.errors} />}
      <p>
        <button type="submit">
          {isLogin ? "Login" : "Create Account"}
        </button>
      </p>
      <p>
        <Link href={isLogin ? "/" : "/?login=true"}>
          {isLogin ? "Create Account" : "Login with existing account."}
        </Link>
      </p>
    </form>
  );
}
