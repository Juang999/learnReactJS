import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button/Index';

const FormRegister = () => {
    return (
        <form action="">
            <InputForm title="Fullname" type="text" name="fullname" placeholder="John Doe" />
            <InputForm title="Email" type="email" name="email" placeholder="username@mail.com" />
            <InputForm title="Password" type="password" name="password" placeholder="******" />
            <InputForm title="Confirm Password" type="password" name="confirm-password" placeholder="******" />
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister;