import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, get, remove, query, orderByKey, equalTo } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  /********** 개인 인증키 입력 **********/
  apiKey: "AIzaSyA27LA2512aBz2eAzdFOD63IZrYdLHtxPg",
  authDomain: "simpleman-6f475.firebaseapp.com",
  databaseURL: "https://simpleman-6f475-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "simpleman-6f475",
  storageBucket: "simpleman-6f475.appspot.com",
  messagingSenderId: "1044748608395",
  appId: "1:1044748608395:web:1ce6009d2833517642458e",
  measurementId: "G-EZ8V8DZSQY"



};
console.log('firebaseConfig ', firebaseConfig)
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);


export function login() { // 로그인창 실행함수 
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() { // 로그아웃 실행함수 
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) { // 로그인 로그아웃 상태관리 함수  
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user) { // 관리자여부조회 함수 
  return get(ref(database, 'admins')) 
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}


// 상품관리 실시간 데이터 베이스




export async function getProducts() { // 데이터 베이스에 등록된 상품 로드 하는 함수 
  return get(ref(database, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}



export async function getProductDetail(productId) { // 특정 id 와 같은 상품 찾아주는 함수 ( 상품상세페이지 )
  return get(
    query(ref(database, "products"), orderByKey("id"), equalTo(productId))
  ).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val())[0];
    } else {
      console.log("Product not found");
      return null;
    }
  });
}

