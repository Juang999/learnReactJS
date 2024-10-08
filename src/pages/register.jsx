import AuthLayout from "../components/Layouts/AuthLayout";
import RegisterForm from "../components/Fragments/FormRegister";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register" description="Welcome, Please input data for register"  type="register">
            <RegisterForm />
        </AuthLayout>
    )
}

export default RegisterPage;