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
            {regCheck ? (<Register handleBack={handleBack}></Register>) : (<Login handleReg={handleRegistration}></Login>)}
        </>
    );
}

export default LoginPage;
