import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import useState from 'react-usestateref'
import '../css/one.css'
import '../static/video.mp4'
import videos from './video.mp4'
import { DELIVERY_ROUTE, MENU_ROUTE } from '../utils/consts';
import jwt_decode from "jwt-decode";
import { Device_Basket_Put, fetch_Basket_by_userId, fetch_my_Basket, update_Basket, update_Basket_ } from '../http/deviceAPI';
import BasketItem from './BasketItem.js'
import $ from 'jquery'
import { SearchControl, YMaps, Map } from '@pbe/react-yandex-maps';
import './ymap';
import { get_skidka } from '../http/userAPI';
import set_message from './message';
const Basket  = observer( ()=>{
   const [bask_device,setbask_device,setbask_deviceRef] = useState(null)

   const [Skidka,setSkidka,setSkidkaRef] = useState(null)
   const [FIO,setFIO,setFIORef] = useState(null)
   const [poluchatel,setpoluchatel,poluchatelRef] = useState(null)
   const [address,setaddress,addressRef] = useState('Выберете ваш адрес')
   const [address1,setaddress1,addressRef1] = useState('Выберете адрес')
   const [adr,setadr,setadrRef] = useState()
   const [adr1,setadr1,setadrRef1] = useState()
   const [basketid,setbasketid,setbasketidRef1] = useState()
   const [final_price,setfinal_price,final_priceRef] = useState(null)
   const [fin_price,setfin_price,fin_priceRef] = useState(0)
   const [email,setemail,emailRef] = useState(null)
   const [phone,setphone,phoneRef] = useState(null)
   const [comment,setcomment,commentRef] = useState(null)


   const [userId,setuserId,setuserIdRef] = useState(0)

   
   $('.menu').removeClass('fill_tsd_activ')
   $('.delivery').removeClass('fill_tsd_activ')
   $('.present').removeClass('fill_tsd_activ')

  $('.basket').addClass('fill_tsd_activ')

   const updateBasket = async() => {
    update_Basket_(basketid,adr,address1)
    setaddress(adr)
    set_message("Адрес успешно изменён",'completed')
   }
   const updateBasket1 = async() => {
    update_Basket_(basketid,address,adr1)
    setaddress1(adr1)
    set_message("Адрес успешно изменён",'completed')
   }


   const to_delivery = async() => {

    if(setbask_deviceRef.current.length===0){
      set_message("В вашей корзинке пусто",'error')
      return
    }
    if(addressRef.current==='Выберете ваш адрес'){
      set_message("Выберите адрес доставки",'error')
      return
    }
    // set_message
    navigate(DELIVERY_ROUTE)
   }

   const getBasket = async() => {
      
   const storedToken = localStorage.getItem('token');
   const userId = jwt_decode(storedToken)
   setuserId(userId.id)
   const my_basket = await fetch_Basket_by_userId(userId.id)
   const  basket_device=  await fetch_my_Basket(userId.id)
   setbask_device(basket_device.data)
   
if(basket_device.data.length===0){
  $('.none_in_bask').toggleClass('none_in_bask_active')
}
  

   setaddress(my_basket.adress)
   setbasketid(my_basket.id)
   console.log(my_basket)
   final_price_()

}

    useEffect(() => {
      getBasket()
      
    }, [])
    const final_price_ = async(col_dev_)=>{
      const storedToken = localStorage.getItem('token');
      const userId = jwt_decode(storedToken)
      const skidka_ = await get_skidka(userId.id)
     
      if(skidka_.data[0]===undefined){
        setSkidka(0)
        var skidka = 0
      }else{
        var skidka = (skidka_.data[0]?.description)/100
      }
  
      var x= 0
      const col_dev__ = (setbask_deviceRef?.current?.map(d=>(x+=(d.fin_price) ),x=0).reverse()[0])
      const col_dev = col_dev__-(col_dev__*skidka)
      setSkidka(col_dev__*skidka)
      console.log(col_dev)
     
      const basketid = await fetch_Basket_by_userId(setuserIdRef.current)
   
      const update =  await update_Basket(basketid.id,col_dev)
      console.log(final_priceRef.current)
      // if(col_dev_ ){
      //    setfinal_price(col_dev_)
      //    console.log(col_dev_)
       
      // }else{
      //    setfinal_price(col_dev)
      // }
      // if(col_dev_===0 ){
      //    setfinal_price(0)
      // }
      setfinal_price(col_dev)
      console.log(col_dev)
    }
   

    const navigate = useNavigate()




    const handleClick = e => {
   
        $('.pres').removeClass('border')
        $('.delivery_1').removeClass('border')
 
        const link = e.target.getAttribute('activ')
        $(".togg_menu").toggleClass("togg_menu_active");
        $(`.${link}`).addClass('border')
      

  
      };
    return (
      <div class='bg'> 



<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 mar-lef" id="exampleModalLabel" >Выберете адрес доставки</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
     <input class='input_addres'placeholder='Москва Нижегородский проспект 24к1 кв193' onChange={ e => setadr1(e.target.value)}/>
     <div class='map11'></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary" onClick={updateBasket1}>Выбрать этот адрес</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 mar-lef" id="exampleModalLabel">Выберете адрес доставки</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
     <input class='input_addres'placeholder='Москва Нижегородский проспект 24к1 кв193' onChange={ e => setadr(e.target.value)}/>
     <div class='map11'></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary" onClick={updateBasket}>Выбрать этот адрес</button>
      </div>
    </div>
  </div>
</div>
    
        <div class='basket_container ' >
 
      <div class='df'>

               <div class='w-65_basket'>
                  
               <div class='basket_product'>
               <div class='basket_text'>
                     Товары
                  </div>
                  <div class='none_in_bask'>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="100px" height="100px" viewBox="0 0 1181.000000 1181.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1181.000000) scale(0.100000,-0.100000)"
fill="#0006" stroke="#0006">
<path d="M7345 9494 c-316 -31 -518 -76 -744 -164 -599 -234 -1067 -680 -1389
-1325 -30 -60 -55 -111 -56 -112 0 0 -50 12 -111 28 -60 16 -180 41 -265 56
-142 25 -177 28 -415 28 -227 0 -276 -3 -386 -23 -240 -43 -417 -101 -619
-202 -215 -107 -367 -216 -541 -390 -194 -193 -318 -367 -448 -626 -53 -108
-124 -278 -148 -358 -14 -47 -15 -48 -46 -42 -18 4 -102 9 -187 13 -436 17
-827 -88 -1155 -310 -119 -81 -342 -303 -417 -417 -214 -324 -307 -656 -295
-1055 6 -195 31 -329 96 -523 91 -274 216 -478 410 -673 134 -134 248 -217
401 -294 427 -215 955 -230 1528 -43 l93 30 55 -44 c431 -337 950 -539 1514
-589 168 -15 553 -6 710 16 363 50 689 152 1002 312 l126 65 79 -63 c179 -143
428 -284 633 -358 740 -266 1522 -84 2118 493 71 69 222 235 259 285 2 3 41
-7 86 -21 207 -67 375 -97 589 -105 387 -14 700 72 1008 278 107 72 291 245
387 364 247 308 420 747 464 1179 16 166 7 476 -20 631 -148 859 -705 1472
-1485 1636 l-104 22 -7 36 c-16 90 -80 327 -117 436 -166 486 -428 886 -793
1209 -352 313 -814 527 -1288 597 -125 18 -433 32 -522 23z m540 -212 c413
-75 766 -235 1080 -487 119 -96 312 -296 403 -417 265 -353 447 -786 527
-1252 8 -49 17 -91 19 -93 2 -2 48 -10 102 -18 787 -118 1339 -701 1471 -1555
26 -174 24 -493 -6 -663 -54 -310 -158 -587 -307 -815 -119 -183 -301 -371
-459 -476 -251 -167 -502 -240 -825 -240 -241 1 -400 29 -669 121 l-135 45
-20 -28 c-163 -224 -405 -459 -616 -599 -320 -210 -632 -306 -1000 -307 -480
0 -904 170 -1296 519 l-72 63 -77 -45 c-336 -199 -701 -323 -1125 -382 -175
-24 -585 -24 -760 0 -498 70 -984 276 -1335 568 -42 35 -82 68 -89 73 -7 5
-53 -7 -122 -32 -133 -49 -353 -105 -500 -127 -131 -20 -395 -23 -509 -6 -322
50 -589 179 -798 387 -225 223 -367 499 -439 854 -31 157 -32 410 0 580 123
662 604 1119 1292 1226 151 23 438 22 595 -3 l121 -19 38 121 c224 714 655
1200 1266 1428 179 67 348 102 567 119 271 21 566 -15 889 -107 87 -25 161
-42 164 -38 4 5 17 33 30 63 70 169 214 428 322 579 245 343 520 582 869 755
225 112 498 194 752 226 128 16 527 5 652 -18z"/>
<path d="M4780 6559 c-30 -5 -92 -27 -137 -49 -140 -69 -242 -191 -300 -359
-23 -65 -27 -93 -27 -196 0 -88 4 -136 18 -179 76 -251 265 -417 501 -441 201
-21 424 113 524 316 60 123 74 190 69 329 -4 93 -10 129 -33 190 -76 205 -228
345 -420 385 -77 16 -113 17 -195 4z m328 -193 c63 -33 102 -96 102 -164 0
-90 -45 -156 -125 -182 -93 -31 -205 66 -205 176 0 125 130 221 228 170z
m-347 -515 c21 -22 29 -39 29 -66 0 -27 -8 -44 -29 -66 -33 -33 -50 -35 -90
-14 -78 40 -46 173 42 175 10 0 32 -13 48 -29z"/>
<path d="M7483 6555 c-275 -60 -472 -344 -450 -651 26 -360 337 -627 655 -560
221 46 395 226 447 462 25 112 17 264 -20 364 -76 206 -227 344 -420 385 -84
18 -130 18 -212 0z m340 -189 c39 -16 82 -61 96 -99 40 -105 -29 -233 -135
-253 -45 -8 -121 29 -151 74 -95 144 40 342 190 278z m-342 -515 c21 -22 29
-39 29 -66 0 -27 -8 -44 -29 -66 -49 -48 -109 -32 -131 37 -15 44 1 88 39 109
39 21 59 18 92 -14z"/>
<path d="M6647 4926 c-8 -8 -17 -46 -21 -86 -26 -258 -204 -412 -460 -397
-232 13 -383 152 -402 370 -8 91 -23 117 -68 117 -48 0 -71 -30 -68 -88 13
-305 251 -532 557 -532 248 1 443 135 521 358 13 38 29 103 35 145 10 67 9 80
-5 102 -19 29 -65 34 -89 11z"/>
</g>
</svg>
<div class='mt_-10'>
 {"Пока пусто :("} </div>
                  </div>
             
        
 

        
                  {setbask_deviceRef?.current?.map(device =>
       
               
           
                        <BasketItem device={device} key={device.id} userId={setuserIdRef.current} setbask_device={setbask_device} final_price_={final_price_} setfin_price={setfin_price} setfinal_price={setfinal_price} setbask_deviceRef={setbask_deviceRef} setSkidka={setSkidka} />
         
                  
                 

                  )
}






                 




               </div>
               <div class='basket_product'>
               <div class='basket_text'>
                     Доставка
               </div>
<div class='df pb-20'>
<div class='delivery_1 me_ border 'onClick={handleClick} data-bs-toggle="modal" data-bs-target="#exampleModal"activ='me_'>
  

       <div class='basket_text_' onClick={handleClick} data-bs-toggle="modal" data-bs-target="#exampleModal"activ='me_'>
            Себе
            <div class='df d-flex' onClick={handleClick} data-bs-toggle="modal" data-bs-target="#exampleModal"activ='me_'>
      <svg onClick={handleClick} data-bs-toggle="modal" data-bs-target="#exampleModal"activ='me_' id="_x30_1" width='14px  ' class='color_red' version="1.1" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" ><g><ellipse onClick={handleClick} activ='me_' cx="256" class='color_red' cy="130" rx="110" ry="130"/><path onClick={handleClick} activ='me_' class='color_red' d="M36,478.191C36,390.825,134.497,320,256,320s220,70.825,220,158.191v0C476,496.863,460.863,512,442.192,512H69.808   C51.137,512,36,496.863,36,478.191L36,478.191z"/></g></svg>
    <div class='name_acc ' onClick={handleClick} data-bs-toggle="modal" data-bs-target="#exampleModal" activ='me_'>
    Сладкая булочка
   </div>  
      </div>
       </div>







      <div class='delivery_basket_text' onClick={handleClick} activ='me_'>
        Ваш адрес :
        <div class='basket_text_1' onClick={handleClick} activ='me_'>
         {addressRef.current}
        </div>
      </div>



     
</div>
<div class='delivery_1 pres ml-10' onClick={handleClick}data-bs-toggle="modal" data-bs-target="#exampleModal1" activ='pres'>
<div class='basket_text_'  onClick={handleClick}data-bs-toggle="modal" data-bs-target="#exampleModal1" activ='pres'>
            В подарок
            <div class='df d-flex'  onClick={handleClick}data-bs-toggle="modal" data-bs-target="#exampleModal1" activ='pres'>
            <svg width='30px'  onClick={handleClick} data-bs-toggle="modal" data-bs-target="#exampleModal1"activ='pres'class='color_red' id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <path  onClick={handleClick} data-bs-toggle="modal" data-bs-target="#exampleModal1"activ='pres' d="M216,72H181.03271a31.99968,31.99968,0,0,0-47.37646-42.91162A30.99155,30.99155,0,0,0,128,37.2998a31.01227,31.01227,0,0,0-5.65723-8.21191A31.99948,31.99948,0,0,0,74.96729,72H40A16.01817,16.01817,0,0,0,24,88v32a16.01817,16.01817,0,0,0,16,16v64a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V136a16.01817,16.01817,0,0,0,16-16V88A16.01817,16.01817,0,0,0,216,72ZM144.96973,40.4021a16.00019,16.00019,0,1,1,22.62793,22.62744c-4.94043,4.94116-19.22559,7.71582-31.25684,8.6294C137.25488,59.62671,140.0293,45.34277,144.96973,40.4021Zm-56.56836,0a16.0194,16.0194,0,0,1,22.62793-.00024c4.9414,4.94116,7.71582,19.22631,8.62988,31.25683-12.03223-.91382-26.31641-3.68848-31.25684-8.62915A16.01925,16.01925,0,0,1,88.40137,40.4021ZM216,120H136v72a8,8,0,0,1-16,0V120H40V88h80v32h16V88h80l.00977,31.99951Z"/>
</svg>

      </div>

            

       </div>

       <div class='delivery_basket_text'  onClick={handleClick} activ='pres'>
        Адрес :
        <div class='basket_text_1'  onClick={handleClick} activ='pres'>
         {address1}
        </div>
      </div>

</div>

</div>



               </div>
               </div>
               <div class='w-35_basket'>
               <div class='basket_check '>
                  <div class='itog_cont'>

                  <div class='basket_text'>
                     Итог
               </div>


       <div class='delivery_basket_text '>
       Кому :
      
    <div class='name_acc fs-16 mar_l_unset'>
    <svg id="_x30_1" width='14px  ' class='mr-10' version="1.1" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" ><g><ellipse cx="256" class='' cy="130" rx="110" ry="130"/><path class='' d="M36,478.191C36,390.825,134.497,320,256,320s220,70.825,220,158.191v0C476,496.863,460.863,512,442.192,512H69.808   C51.137,512,36,496.863,36,478.191L36,478.191z"/></g></svg>
    Сладкая булочка
   </div>  
      </div>


       <div class='delivery_basket_text'>
        Адрес :
        <div class='basket_text_1'>
        {address}
        </div>
      </div>

<div class='togg_sum'>
<div class='delivery_basket_text delivery_basket_text_1 df_'>
         Товаров на сумму :
        <div class='basket_text_2'>
        {final_priceRef.current+setSkidkaRef.current} Р
        </div>
      </div>

      <div class='delivery_basket_text delivery_basket_text_1 df_'>
         Доставка:
        <div class='basket_text_2'>
        0 Р
        </div>
      </div>
      <div class='delivery_basket_text delivery_basket_text_1 df_'>
         Скидка
        <div class='basket_text_2'>
        {setSkidkaRef.current} Р
        </div>
      </div>
      <div class='delivery_basket_text delivery_basket_text_1 fs-18 df_'>
         Итого:
        <div class='basket_text_2 fs-18'>
        {final_priceRef.current} Р
        </div>
      </div>

  

</div>


                  </div>
                  <div class='w-100 df_jc mr_ml'>
                  <div class='zakaz_bottom border  ' onClick={to_delivery}>
   Оформить
</div>
                  </div>

               
</div>

    </div>
               
      </div>
    
 
        </div>
        </div>
    );
});

export default Basket;
