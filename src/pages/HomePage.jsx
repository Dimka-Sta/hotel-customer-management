//import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slice/userSlice';

function HomePage() {

    // const store = useSelector(store => store)
    const dispatch = useDispatch();

    const { isAuth, email } = useAuth();

    // console.log(store)

    return isAuth ? (
        <div>
            <h1>Welcome</h1>

            {/* <div>
                <button onClick={() => dispatch({ type: 'LOAD_DATA' })} > click me </button>
            </div> */}

            <button
                onClick={ () => dispatch( removeUser() ) }
            > Log out from {email} </button>
        </div>
    ) : (
        <Navigate to='/login' />
    )
}


export default HomePage;