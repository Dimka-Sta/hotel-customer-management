import './App.css';
//import { useEffect } from 'react';
//import { db } from './firebase';
//import { ref, onValue } from 'firebase/database'
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const store = useSelector(store => store)
  const dispatch = useDispatch();

  console.log(store)

  
  // useEffect(() => {
  //   const starCountRef = ref(db);
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(data)
  //   });
  // }, []);


  return (
    <div className="App">
      <button onClick={() => dispatch({type: 'LOAD_DATA'})} > click me </button>
    </div>
  );
}

export default App;
