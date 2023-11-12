import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import useState from 'react-usestateref'
import '../css/one.css'
import '../static/video.mp4'
import videos from './video.mp4'
import { MENU_ROUTE } from '../utils/consts';
import jwt_decode from "jwt-decode";
import { Device_Basket_Put, fetch_Basket_by_userId, fetch_my_Basket,delete_basket_device } from '../http/deviceAPI';
import { get_skidka } from '../http/userAPI';

const BasketItem = ({setSkidka,device,userId,setbask_device,final_price_,setfin_price,setfinal_price,setbask_deviceRef})=>{

   const [quantity,setquantity,setquantityRef] = useState(device.quantity)


   const getBasket = async() => {
    
    const  basket_device=  await fetch_my_Basket(userId)
    setbask_device(basket_device.data)

 }


   const plus_quantity = async()=>{
    setquantity(setquantityRef.current+1)
    setfin_price(setquantityRef.current*device.final_price)
   await Device_Basket_Put(device.deviceId,userId,setquantityRef.current,device.final_price,setquantityRef.current*device.final_price)
 
   set()

  };
  const minus_quantity = async()=>{
    if(setquantityRef.current===1){
      console.log(device.id)
await delete_basket_device(device.id)
set()
getBasket()
    }else{
      
    setquantity(setquantityRef.current-1)
    setfin_price(setquantityRef.current*device.fin_price)
    await Device_Basket_Put(device.deviceId,userId,setquantityRef.current,device.final_price,setquantityRef.current*device.final_price)
   
  set()
  }


  };
  const set = async()=>{
    const  basket_device1=  await fetch_my_Basket(userId)
    console.log(basket_device1)

    const skidka_ = await get_skidka(userId)
    if(skidka_.data[0]===undefined){
      setSkidka(0)
      var skidka = 0
    }else{
      var skidka = (skidka_.data[0]?.description)/100
    }
    console.log(skidka )


    var x= 0
    const col_dev__ = (basket_device1?.data.map(d=>(x+=(d.fin_price) ),x=0).reverse()[0])
    const col_dev1 = col_dev__-(col_dev__*skidka)
    setSkidka(col_dev__*skidka)
    console.log(col_dev1)
    console.log(col_dev1)

    console.log(col_dev1)
    setfinal_price(col_dev1)
  }

    const navigate = useNavigate()
    return (


     
       
               
<div key={device.id} class='basket_cont'>
                     <div>
                     <img class='basket_item' src={device.img}/>
                     </div>
                     
                     <div class='item_name'>
                        {device.name}
                        <div class='item_desk'>
                        {device.description}
                     </div>

                     <div class='calc'>
                     <div class='minus' onClick={()=>minus_quantity()}>
                     </div>
                     <div class='col_'>
                     {quantity}
                     </div>
                     <div class='plus' onClick={()=>plus_quantity()}>
                     </div>
                     </div>

                     </div>
                   
                     <div class='price'>
                     {setquantityRef.current*device.final_price}Р
                     </div>

                  </div>
                  
    );
};

export default BasketItem;
