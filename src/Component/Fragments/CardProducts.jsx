// Import komponen Button dari direktori yang sesuai
import Button from "../Elements/Tombol/Button";

// Deklarasi komponen CardProducts menggunakan functional component
const CardProducts = (props) => {
    const { children } = props;
    // Mengembalikan elemen div dengan kelas tertentu
    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-200 rounded-lg shadow mx-2 my-3">
            {children}{/*  Menampilkan children di dalam elemen div */}
        </div>
    )
}

// Deklarasi subkomponen Header untuk CardProducts
const Header = (props) => {
    const { img } = props
    // Mengembalikan elemen a dengan gambar di dalamnya
    return (
        <a href="">
            <img src={img} alt="products" className="p-8 rounded-t-lg" />
        </a>
    );
};

// Deklarasi subkomponen Body untuk CardProducts
const Body = (props) => {
    const { children} = props;
    // Mengembalikan elemen div dengan deskripsi produk di dalamnya
    return (
        <div className="px-5 pb-5 ">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">Sepatu Baru</h5>
                <p className="text-s text-white">
                    {children}
                </p>
            </a>
        </div>
    )
}

// Deklarasi subkomponen Footer untuk CardProducts
const Footer = (props) => {
    const { price, id, handleAddToCart } = props;
    // Mengembalikan elemen div dengan harga dan tombol "Add To Cart" di dalamnya
    return (
        <div className="flex item-center justify-between px-5 pb-5">
            <span className="text-2xl font-bold text-white">
            {price.toLocaleString('id-ID', { style: "currency", currency: "IDR", maximumFractionDigits: 0 })} {/* Menampilkan harga dengan format mata uang */}
            </span>
            {/* Tombol "Add To Cart" */}
            <Button className='bg-blue-600' onClick={() => handleAddToCart(id)}>
                Add To Cart
            </Button>
        </div>
    )
}

// Menambahkan subkomponen Header, Body, dan Footer ke CardProducts
CardProducts.Header = Header
CardProducts.Body = Body
CardProducts.Footer = Footer

// Export komponen CardProducts agar dapat digunakan di file lain
export default CardProducts;