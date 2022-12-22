import React from 'react';

function Login(){
    const [log, setLog] = React.useState(false);

    return(
        <>
        <h1>Login dulu, mbak!</h1>
        <button 
        onClick={() => setLog((state) = !state)}
        >
            Login
        </button>
        <p>Kamu udah Login!</p>

        {/* BELUM KELARRRRR */}
        </>
    )
}

export default Login;