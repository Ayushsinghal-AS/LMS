import { React } from 'react'
import Login from './Login';
import Signup from './Signup';
import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// import { Routes, Route  } from 'react-router-dom'


const Home = () => {
    const [page, setPage] = useState("login");
    const loginPage = () => {
        setPage("login")
    }
    const signupPage = () => {
        setPage("signup")
    }
    return (
        <>
            <button type="button" onClick={() => setPage("login")} className="btn btn-outline-primary m-2">
                Login
            </button>
            <button type="button" onClick={() => setPage("signup")} className="btn btn-outline-primary">
                Signup
            </button>

            {page === "login" && <Login />}
            {page === "signup" && <Signup />}

        </>


    )
}

export default Home