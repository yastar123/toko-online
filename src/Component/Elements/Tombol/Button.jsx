// Import React library
import React from "react";

// Deklarasi komponen Button menggunakan functional component
const Button = (props) => {
    // Mendapatkan props dan melakukan destructuring untuk mendapatkan nilai children, className, onClick, dan type
    const {
        children,
        className,
        onClick = () => {}, // Jika tidak ada prop onClick, gunakan fungsi kosong
        type='submit' // Jika tidak ada prop type, gunakan 'submit'
    } = props;
    
    // Mengembalikan elemen button dengan props yang diberikan
    return (
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
            type={type} // Mengatur tipe tombol berdasarkan prop type
            onClick={onClick} > {/*  Mengatur event onClick berdasarkan prop onClick */}
            {children} {/*  Menampilkan konten di dalam tombol */}
        </button>
    )
}

// Export komponen Button agar dapat digunakan di file lain
export default Button;