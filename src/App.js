import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from "./Orders";

const promise = loadStripe(
  'pk_test_51NdFVsEHE7O0wAddv9my7wUYwgnNFD7CSPl2BCjykTxMeWJ1TKmH4HdxZTv2YOsVNqUNPTUAcPuzLe7gGJNzZ4Ch00RTzfsyQm'
  
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    if (authUser){
      dispatch({
        type: 'SET_USER',
        user: authUser,
      });
    }else{
      dispatch({
        type: 'SET_USER',
        user: null,
      });
    }
  });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/orders"
            element={
              <>
                <Header /> <Orders />
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />{" "}
                <Elements stripe={promise}>
                  {" "}
                  <Payment />{" "}
                </Elements>{" "}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;




// <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/orders" element={<Header />} /> <Orders />
    //       <Route
    //         path="/payment"
    //         element={
    //           <>
    //             <Header />
    //             <Elements stripe={promise}>
    //               <Payment />
    //             </Elements>
    //           </>
    //         }
    //       />
    //       <Route
    //         path="/"
    //         element={
    //           <>
    //             <Header /> <Home />
    //           </>
    //         }
    //       />
    //       <Route
    //         path="/Checkout"
    //         element={
    //           <>
    //             <Header />
    //             <Checkout />
    //           </>
    //         }
    //       />
    //     </Routes>
    //   </div>
    // </Router>