import React,{useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//import {browserHistory} from 'react-router';
import { Redirect } from 'react-router';
import Header from '../header'
import Footer from '../footer'
import productCategory from '../classifiers/productCategory'
import region from '../classifiers/region'
import brand from '../classifiers/brand'
import standart from '../classifiers/connection-standart'
import View from '../view'
import CartList from '../cart-list'
import {updateClient} from '../../actions'
import './App.css'
//import store from "../../store";



const App = () => {

///////////

useEffect(() => {
  window.onbeforeunload = function() { 
    return <App key={Math.random()} />;
  };
  
}, []);




// useEffect(() => {
//   window.onbeforeunload = function() {   
//     console.log("text.............")
//     window.location.replace("http://10.12.89.43:3000/");
//     return <App />; 
//   };
// }, []);

////////

  const dispatch = useDispatch()

  

  const regionCLS = useSelector(store => store.relations.region)
  const brandCLS = useSelector(store => store.relations.brand) 
  const standartCLS = useSelector(store => store.relations.standart) 
  const cartList = useSelector(store => store.cart)

  dispatch(updateClient())

  const dataName = brandCLS.name
  let checkStatus = true

  const check = (searchField) => {
    const checkCartItem = cartList.find(item => item.field === dataName)
    if(checkCartItem === undefined){
      checkStatus = false
    }
    return checkStatus
  }  

  const submit = (e) => {
    e.preventDefault()
  }

  return(
    <Router>
    <div className="jumbotron container main noselect">
      <Header />
     
      <main>
      <div className="row">
        <div className="col col_border">
          <form className="form-group" onSubmit={submit}> 
            <Route path="/" exact component={() =>
              <>
                <View data={productCategory} disabled={false} />
                <View checkValue={check(brand.name)} data={brand} disabled={brandCLS} />                
                <button className="btn btn-primary mb-3">
                  <Link to='/parametrs/'>NEXT</Link>
                </button>
              </>
            }/>
            <Route path="/parametrs" exact component={() =>
              <>
                <View checkValue={check(region.name)} data={region} disabled={regionCLS} />   
                <View checkValue={check(standart.name)} data={standart} disabled={standartCLS} /> 
                <button className="btn btn-primary mb-3">
                  <Link to='/'>PREV</Link>
                </button>
              </>
            }/>

            <div className="wizard-card"> </div>
          </form>
        </div>
        <div className="col">           
            <CartList key={Math.random()} />          
        </div>
        
      </div>
      </main>
      <Footer />
    </div>
    </Router>
  )
}


export default App;
