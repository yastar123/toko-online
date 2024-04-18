import { Link } from 'react-router-dom';

const Layout = (props) => {
    const { children, title, type } = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="font-bold text-3xl text-blue-600">{title}</h1>
                <p className="font-medium text-slate-600 mb-6">
                    Welcome, Please enter your detail
                </p>
                {children}
            <Navigation type={type} />
            </div>
        </div>
    )
}

const Navigation = ({ type }) => {
    if (type === 'login') {
        return (
                <p className='text-sm mt-5 text-center'> 
                Tidak Memiliki akun? {" "} 
                <Link to="/register" className='font-bold text-blue-600'>
                    Register 
                </Link>
                </p>
        )
    } else if ( type === 'register') {
        return (
                <p className='text-sm mt-5 text-center'> 
                Sudah Punya Akun? {" "}
                <Link to="/login" className='font-bold text-blue-600'>
                    Login
                </Link>
                </p>
        )
    }
}

export default Layout;
