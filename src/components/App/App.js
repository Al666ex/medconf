import React,{useState, useEffect, useLayoutEffect} from "react";
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
import {ShowWindowDimensions} from '../../methods/resize'

import TestGet from '../image'
import './App.css'
import './AppMedia.css'



const App = () => {  

  

  const widthMedia = 768
  const [firstPage, changeFirstPage] = useState(true);
  const [secondPage, changeSecondPage] = useState(false);
  let clientWidt = ShowWindowDimensions()
  //console.log(ShowWindowDimensions())

  useEffect(() => {
    window.onbeforeunload = function() {    
      return <App />; 
    };
  }, []);

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

  const change = (first, second) => {
    changeFirstPage(first)
    changeSecondPage(second)
  }

  return(
    
    <div className="jumbotron container main noselect">      
      <Header />
     
      <main>
      <div className="row">
      
        <div className={(clientWidt<widthMedia) ? "" : "col col_border"}>
          <form className="form-group" onSubmit={submit}> 
            
              <div style={{ display: firstPage ? "block" : "none" }}>
                <View data={productCategory} disabled={false} />
                <View checkValue={check(brand.name)} data={brand} disabled={brandCLS} />                
                <button onClick={() => change(false,true)} 
                        className="btn btn-primary mb-3">NEXT                  
                </button>
              </div>            
            
              <div style={{ display: secondPage ? "block" : "none" }}>
                <View checkValue={check(region.name)} data={region} disabled={regionCLS} />   
                <View checkValue={check(standart.name)} data={standart} disabled={standartCLS} /> 
                <button onClick={() => change(true,false)}  
                        className="btn btn-primary mb-3">PREV                  
                </button>
              </div>
            

            <div className="wizard-card"> </div>
          </form>
        </div>
        <div className={(clientWidt<widthMedia) ? "" :"col"}>           
            <CartList key={Math.random()} />          
        </div>
        
      </div>
      </main>
      <Footer />
    </div>
    
  )
}

export default App;
