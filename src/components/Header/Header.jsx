import { removeUser } from '../../store/slice/userSlice';
import { useDispatch } from 'react-redux';
import classes from './Header.module.css'

export const Header = () => {

    const dispatch = useDispatch();

    return (
        <header className={classes.header} >

            <div>
                <img className={classes.headerImg} alt='logo' src='FE-2-design-favicon.png' />
            </div>

            <div className={classes.headerBlock}>

                <img alt='logo' src='https://firebasestorage.googleapis.com/v0/b/hotel-da9e2.appspot.com/o/avatar-373-456325-512.png?alt=media&token=bf97a9bc-d3ff-44d8-8149-7516efad5039' />

                <button className={classes.headerButton}
                    onClick={() => dispatch(removeUser())}
                > Log Out </button>
            </div>
        </header>
    )
};