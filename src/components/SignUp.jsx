import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Form} from './Form';
import { setUser } from "../store/slice/userSlice"; 

const SignUp = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
            navigate('/')
        })
        .catch(console.error)

    }

    return (
        <Form 
            title='register'
            handleClick={handleRegister}
        />
    )
};

export {SignUp}