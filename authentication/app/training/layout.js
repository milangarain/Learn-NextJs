import { signOut } from "@/actions/auth";

export default function Layout({ children }) {
    return (
        <>
            <header id="auth-header">
                <p>Welcome back!</p>
                <form action={signOut}>
                <button>Logout</button>
                </form>
            </header>
            {children}
        </>
    );
}