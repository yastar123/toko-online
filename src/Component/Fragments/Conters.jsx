// Import React library
import React from "react";

// Deklarasi komponen Conters menggunakan class component
class Conters extends React.Component {
    constructor (props) {
        super(props);
        // Inisialisasi state dengan nilai awal count: 0
        this.state = {
            count: 0,
        };
        console.log('constructor');
    };

    // componentDidMount() {
    //     this.setState({ count: 5 });
    //     console.log('componetnDidMount')
    // }

    componentDidUpdate() {
        if (this.state.count === 5 ) {
            this.setState({count: 10})
        }
    }

    // Method render untuk menampilkan elemen UI
    render () {
        return (
            <div className="flex">
                <h1 className="mr-5">
                    {this.state.count}  {/*  Menampilkan nilai count dari state */}
                </h1>
                {/* Tombol untuk menambah nilai count */}
                <button className="bg-black text-white p-5"
                    // Ketika tombol ditekan, nilai count diubah menjadi count + 1
                    onClick={() => this.setState({count: this.state.count + 1})}>
                    +
                </button>
            </div>
        )
    }
};

// Export komponen Conters agar dapat digunakan di file lain
export default Conters;