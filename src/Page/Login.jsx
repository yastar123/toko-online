import FormLogin from "../Component/Fragments/FormLogin";
import Layout from "../Component/Layout/Layout";
import React from 'react';



const Login = () => {
    return (
            <Layout title='Login' type='login' >
                <FormLogin />
            </Layout>
    )
};

export default Login;