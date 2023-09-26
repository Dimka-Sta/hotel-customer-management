import { takeEvery, put, call, fork } from 'redux-saga/effects';
import { db } from '../../firebase';
import { ref, onValue } from 'firebase/database'



async function swapGet(pattern) {

    const showData = () => {
        const starCountRef = ref(db);
          onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data, '123')
      })};
      
      showData()
      
    const request = await fetch(`https://swapi.dev/api/${pattern}`)

    const data = await request.json();

    return data;
}

export function* loadPeople() {
    const people = yield call(swapGet, 'people');
    yield put({type: 'SET_PEOPLE', payload: people.results});
}

export function* loadPlanets() {
    const planets = yield call(swapGet, 'planets');
    yield put({type: 'SET_PLANETS', payload: planets.results});
}


export function* workerSaga() {
    yield fork(loadPeople);
    yield fork(loadPlanets);
}

export function* watchLoadDataSaga() {
    yield takeEvery( 'LOAD_DATA', workerSaga)
}

export default function* rootSaga() {
    yield fork(watchLoadDataSaga);
}