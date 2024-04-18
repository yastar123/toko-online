import React, { useState } from "react";
import Button from "../Elements/Tombol/Button";
import InputFrom from "../Elements/Input/InputFrom";

const FormLogin = () => {
    const HandleLogin = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const emailValue = formData.get('email');
        const passwordValue = formData.get('password');
        localStorage.setItem('Email', emailValue);
        localStorage.setItem('Password', passwordValue);
        window.location.href = "/products";
    };

    return (
        <form onSubmit={HandleLogin}>
            <InputFrom                Z
                type='email'
                label="Email"
                placeholder="example@example"
                name="email"
            />
            <InputFrom
                type='password'
                label="Password"
                placeholder="********"
                name="password"
            />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default FormLogin;
