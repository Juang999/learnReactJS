import AuthLayout from "../components/Layouts/AuthLayout";
import LoginForm from "../components/Fragments/FormLogin";

const LoginPage = () => {
    return (
        <AuthLayout title="Login" description="Welcome, Please enter your details" type="login">
            <LoginForm />
        </AuthLayout>
    )
}

export default LoginPage;