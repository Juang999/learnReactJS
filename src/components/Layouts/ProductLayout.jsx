import Button from "../Elements/Button/Index";

const ProductLayout = (props) => {
    let {children} = props;

    return (
            <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 flex flex-col justify-between my-4">
                {children}
            </div>
    )
}

const Header = () => {
    return (
        <a href="#">
            <img src="/images/shoes1.jpg" alt="products" className="p-8 rounded-t-lg" />
        </a>
    )
}

const Body = (props) => {
    let {children, title} = props;

    return (
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
                <p className="text-m text-white">
                    {children}
                </p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const {price, handleAddToCart, id} = props;

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">Rp. {price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</span>
            <Button classname="bg-blue-600" onclick={() => handleAddToCart(id)}>Add To Chart</Button>
        </div>
    )
}

ProductLayout.Header = Header;
ProductLayout.Body = Body;
ProductLayout.Footer = Footer;

export default ProductLayout;