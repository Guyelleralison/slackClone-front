import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";
import SubmitButton from "../../components/SubmitButton";
import TextInput from "../../components/TextInput";
import { UserContext } from "../../utils/context";

export default function Login() {
    const [username, setUsername] = useState(' ');
    const [password, setPassword] = useState('');
    const { saveUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = (login) => {
        saveUser(login);
        navigate('/params');
    };

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <TextInput
                value={username}
                onChange={handleChangeUsername}
            />
            <PasswordInput
                value={password}
                onChange={handleChangePassword}
            />
            <SubmitButton onSubmit={()=>{onSubmit(username)}}>Se connecter</SubmitButton>
        </div>
    );
}