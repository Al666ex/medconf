import React,{useState, useEffect, useLayoutEffect} from "react";
import gotServices from '../../services/gotServices'

const TestGet = () => {
    //.then( imgState => funcImg(imgState))
    const gotService = new gotServices()    
   // const [imgState, funcImg] = useState(gotService.getPng("https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"));
    return(
      <div>
        <img src={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} alt="image" />
      </div>
    
    )
    

}

export default TestGet
