import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root'
import Home from './pages/Home'
import Event from './pages/Event'
import Products from './pages/Products'
import About from './pages/About'
import ProductsDetail from './pages/ProductsDetail';
import { isMobile } from 'react-device-detect';
import MobileRoot from './pages/mobile/MobileRoot';
import MobileHome from './pages/mobile/MobileHome';
import MobileEvent from './pages/mobile/MobileEvent';
import MobileProducts from './pages/mobile/MobileProducts';
import MobileAbout from './pages/mobile/MobileAbout';
import MobileDetail from './pages/mobile/MobileDetail';
import MobileQna from './pages/mobile/MobileQna';
import MobileNotice from './pages/mobile/MobileNotice';
import { AuthContextProvider } from './context/AuthContext';


export default function App() {

  let router=null;

  if(isMobile===true){
    router = createBrowserRouter([
      {
        path:'/',
        element:<MobileRoot/>,
        children:[
          {index:true,element:<MobileHome/>},
          {path:'/mobile_event',element:<MobileEvent/>},
          {path:'/mobile_products',element:<MobileProducts/>},
          {path:'/mobile_about',element:<MobileAbout/>},
          {path:'/mobile_products/:mobProductsId', element:<MobileDetail/>},
          {path:'/mobile_qna', element:<MobileQna/>},
          {path:'/mobile_notice', element:<MobileNotice/>}
        ]
      }
    ])
  }else{
    router = createBrowserRouter([
      {
        path:'/',
        element:<Root/>,
        children:[
          {index:true,element:<Home/>},
          {path:'/event',element:<Event/>},
          {path:'/products',element:<Products/>},
          {path:'/products/:productId',element:<ProductsDetail/>},
          {path:'/about',element:<About/>},
        ]
      }
    ])
  }

  return (
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
  );
}








