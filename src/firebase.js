
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebase } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBltevuJDjwDahaRBcaspNj8hjntwoRn-4",
  authDomain: "customer-management-7b1da.firebaseapp.com",
  projectId: "customer-management-7b1da",
  storageBucket: "customer-management-7b1da.appspot.com",
  messagingSenderId: "953566141474",
  appId: "1:953566141474:web:cc96e5dedb3279246dfe7b",
  databaseURL: 'https://customer-management-7b1da-default-rtdb.europe-west1.firebasedatabase.app/'
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

const databaseRef = firebase.database().ref();
export const accountsRef = databaseRef.child('Accounts');
export const roomsRef = databaseRef.child('Rooms');

export default firebase;


export const getAccountsFirebase = async () => {
  let accounts = {};
  const dbAccounts = await accountsRef.once('value');
  
  accounts = { ...accounts, ...dbAccounts.val() };
  return accounts;
};

export const getRoomsFirebase = async () => {
  const dbRooms = await roomsRef.once('value');
  return dbRooms.val().reduce((acc, room) => ({ ...acc, [room.id]: room }), {});
};