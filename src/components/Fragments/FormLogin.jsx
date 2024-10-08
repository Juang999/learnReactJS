import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button/Index';

const FormLogin = () => {
    let handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value)
        localStorage.setItem('password', event.target.password.value)
        window.location.href = '/products';
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputForm title="Email" type="email" name="email" placeholder="example@mail.com" />
            <InputForm title="Password" type="password" name="password" placeholder="yourpassword" />
            <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin;