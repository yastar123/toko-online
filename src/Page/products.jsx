// Import komponen Button, CardProducts, Conters, dan useState dari React library
import { useEffect } from "react";
import Button from "../Component/Elements/Tombol/Button";
import CardProducts from "../Component/Fragments/CardProducts";
import Conters from "../Component/Fragments/Conters";
import { useState } from "react";

// Deklarasi array ProductsCard yang berisi informasi produk
const ProductsCard = [
    {
        id: 1,
        title: "Sepatu Baru",
        price: 2500000,
        img: "/img/shoes.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur corrupti assumenda voluptatum autem, quis non, nulla nobis perspiciatis, distinctio voluptatem ex quisquam sunt officia iure sed accusamus debitis maiores?",
    },
    {
        id: 2,
        title: "Sepatu Lama",
        price: 1500000,
        img: "/img/shoes.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur corrupti assumenda voluptatum autem, quis non, nulla nobis perspiciatis, distinctio voluptatem ex quisquam sunt officia iure sed accusamus debitis maiores?",
    },
    {
        id: 3,
        title: "Sepatu Busuk",
        price: 1000000,
        img: "/img/shoes.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur corrupti assumenda voluptatum autem, quis non, nulla nobis perspiciatis, distinctio voluptatem ex quisquam sunt officia iure sed accusamus debitis maiores?"
    }
];


// Mendapatkan nilai email dari localStorage
const email = localStorage.getItem('Email');

// Deklarasi komponen Products menggunakan functional component
const Products = () => {
    // Menggunakan useState hook untuk mendefinisikan state cart
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [])
    }, [])

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = ProductsCard.find((product) => product.id === item.id); // Mengubah nama variabel product menjadi ProductsCard
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart]);

    // Method untuk logout
    const HandleLogout = () => {
        // Menghapus item email dan password dari localStorage
        localStorage.removeItem('Email');
        localStorage.removeItem('Password');
        // Mengarahkan ke halaman login
        window.location.href = "/login";
    }

    // Method untuk menambah produk ke keranjang belanja
    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            // Jika produk sudah ada di keranjang, tambahkan jumlahnya
            setCart(
                cart.map((item =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item)
                )
            );
        } else {
            // Jika produk belum ada di keranjang, tambahkan produk baru
            setCart([...cart, { id, qty: 1 }]);
        }
    };

    // Fungsi untuk mendapatkan detail produk berdasarkan ID
    const getProductDetail = (id) => { // Mengubah nama fungsi product menjadi getProductDetail
        return ProductsCard.find((product) => product.id === id);
    };

    // Mengembalikan elemen UI untuk halaman produk
    return (
        <>
            {/* Header dengan email pengguna dan tombol logout */}
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 my-2">
                {email}
                <Button className="bg-black ml-10" onClick={HandleLogout}>
                    Logout
                </Button>
            </div>
            {/* Daftar produk dengan informasi dan tombol "Add To Cart" */}
            <div className="flex justify-center py-5">
                <div className="flex-wrap w-3/4 flex">
                    {ProductsCard.map((product) => (
                        <CardProducts key={product.id}>
                            <CardProducts.Header img={product.img} />
                            <CardProducts.Body>{product.description}</CardProducts.Body>
                            <CardProducts.Footer price={product.price}
                                handleAddToCart={() => handleAddToCart(product.id)}
                                id={product.id} />
                        </CardProducts>
                    ))}
                </div>
                {/* Tampilan keranjang belanja */}
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="table-auto text-left border-spacing-x-5 border-separate">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => {
                                const product = getProductDetail(item.id);

                                return (
                                    <tr key={index}>
                                        <td>{product.title}</td>
                                        {/* Menampilkan harga dan total dengan format mata uang */}
                                        <td>{product.price.toLocaleString('id-ID', { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}</td>
                                        <td>{item.qty}</td>
                                        <td>{(item.qty * product.price).toLocaleString('id-ID', { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}</td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td colSpan={3}>
                                    <b>Total Price</b>
                                </td>
                                <td>
                                    <b>{totalPrice.toLocaleString('id-ID', { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Komponen Conters untuk menambah jumlah produk */}
            <div className="flex items-center justify-center">
                <Conters />
            </div>
        </>
    );
};

// Export komponen Products agar dapat digunakan di file lain
export default Products;