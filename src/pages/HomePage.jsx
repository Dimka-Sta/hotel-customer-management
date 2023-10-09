//import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';

import { Header } from '../components/Header/Header'
import Table from '../components/Table';

import { Row, Col } from 'antd'


function HomePage() {

    // const store = useSelector(store => store)


    const { isAuth } = useAuth();

    // console.log(store)

    return isAuth ? (


        <div>

            

            <Header />

            
            {/* <div>
                <button onClick={() => dispatch({ type: 'LOAD_DATA' })} > click me </button>
            </div> */}



            <Row>
                <Col  md={{ span: 22, offset: 1 }}>
                    <Table />
                </Col>
            </Row>

        </div>

    ) : (
        <Navigate to='/login' />

    )
}


export default HomePage;