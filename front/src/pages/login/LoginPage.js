import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import Login from '../../components/Login';
import Register from '../../components/Register';

function LoginPage() {
    const handleRegistration = async () => {
        setRegCheck(true);
    }

    const handleBack = async () => {
        setRegCheck(false);
    }

    const [regCheck, setRegCheck] = useState(false);

    return (
        <>
            <Header></Header>
            {regCheck ? (<Register handleBack={handleBack}></Register>) : (<Login handleReg={handleRegistration}></Login>)}
            <Footer></Footer>
        </>
    );
}

export default LoginPage;
