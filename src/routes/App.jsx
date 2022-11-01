import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Layout from '@containers/Layout';
import Login from '@pages/login';
import RecoveryPassword from '@pages/RecoveryPassword';
import '@styles/global.scss';
import Checkout from '@pages/Checkout';
import CreateAccount from '@pages/CreateAccount';
import MyAccount from '@pages/MyAccount';
import NewPassword from '@pages/NewPassword';
import SendEmail from '@pages/SendEmail';
import Orders from '@pages/Orders';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';


const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="create-account" element={<CreateAccount/>}/>
            <Route path="my-account" element={<MyAccount/>}/>
            <Route path="new-password" element={<NewPassword/>}/>
            <Route path="send-email" element={<SendEmail/>}/>
            <Route path="orders" element={<Orders/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/recovery-password" element={<RecoveryPassword/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;



