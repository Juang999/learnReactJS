import Label from "./Label"
import Input from "./Input"

const Index = (props) => {
    const {title, type, name, placeholder} = props;

    return (
        <div className="mb-6">
            <Label htmlfor={name}>{title}</Label>
            <Input type={type} name={name} placeholder={placeholder} />
        </div>
    )
}

export default Index;