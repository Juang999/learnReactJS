import { Fragment, useState, useEffect } from "react";
import ProductLayout from "../components/Layouts/ProductLayout";
import Button from "../components/Elements/Button/Index";
// import Counter from "../components/Fragments/Counter";

const products = [
    {
        id: 1,
        name: 'sepatu baru',
        price: 1000000,
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Natus aliquam necessitatibus placeat mollitia neque quod ut tempora expedita assumenda culpa consequatur ipsum odio vitae nihil, 
                    amet incidunt sunt accusantium dolorem.`
    }, {
        id: 2,
        name: 'sepatu lama',
        price: 500000,
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`
    }, {
        id: 3,
        name: 'sepatu arkan',
        price: 2000000,
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. elit elit`
    }
];

const email = localStorage.getItem('email');

const Productpage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart') || []))
    }, [])

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find(product => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0)
    
            setTotalPrice(sum)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');

        window.location.href = '/login';
    }

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) => 
                    item.id === id ? {...item, qty: item.qty + 1} : item
                )
            )
        } else {
            setCart([...cart, {id, qty: 1}])
        }
    }

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="bg-black text-white ml-5" onclick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap">
                    {products.map((product) => (
                        <ProductLayout key={product.id}>
                            <ProductLayout.Header />
                            <ProductLayout.Body title={product.name}>
                                {product.description}
                            </ProductLayout.Body>
                            <ProductLayout.Footer price={product.price} handleAddToCart={handleAddToCart} id={product.id}/>
                        </ProductLayout>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            {
                                cart.map((item) => {
                                    const product = products.find((itemProduct) => itemProduct.id === item.id);

                                    return (
                                        <tr key={item.id}>
                                            <td>{product.name}</td>
                                            <td>Rp. {product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                                            <td>{item.qty}</td>
                                            <td>Rp. {(item.qty * product.price).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td colSpan={3}>Price</td>
                                <td>Rp. {totalPrice.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="flex justify-center my-5">
                <Counter></Counter>
            </div> */}
        </Fragment>
    )
}

export default Productpage;