import React,{useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
//import { BrowserRouter as Router, Route, Link, useHistory} from 'react-router-dom';

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
  
  const [firstPage, changeFirstPage] = useState(true);
  const [secondPage, changeSecondPage] = useState(false);
  
///////////

useEffect(() => {
  window.onbeforeunload = function() {       
    
    //window.location.replace("http://10.12.89.43:3000/");
    return <App />; 
  };
}, []);

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

  const change = () => {

  }

  return(
    
    <div className="jumbotron container main noselect">      
      <Header />
     
      <main>
      <div className="row">
        <div className="col col_border">
          <form className="form-group" onSubmit={submit}> 
            
              <div style={{ display: firstPage ? "block" : "none" }}>
                <View data={productCategory} disabled={false} />
                <View checkValue={check(brand.name)} data={brand} disabled={brandCLS} />                
                <button onClick={() => {
                          changeFirstPage(false)
                          changeSecondPage(true)
                        }} 
                        className="btn btn-primary mb-3">NEXT
                  
                </button>
              </div>
            
            
              <div style={{ display: secondPage ? "block" : "none" }}>
                <View checkValue={check(region.name)} data={region} disabled={regionCLS} />   
                <View checkValue={check(standart.name)} data={standart} disabled={standartCLS} /> 
                <button onClick={() => {
                          changeFirstPage(true)
                          changeSecondPage(false)
                        }} 
                        className="btn btn-primary mb-3">PREV
                  
                </button>
              </div>
            

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
    
  )
}


export default App;
