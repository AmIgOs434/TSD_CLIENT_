import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import useState from 'react-usestateref'
import '../css/one.css'
import '../static/video.mp4'
import videos from './video.mp4'
import { MENU_ROUTE } from '../utils/consts';
import $ from 'jquery'
import { Order_getAllItem } from '../http/deviceAPI';
import jwt_decode from "jwt-decode";
import OrderDevice from './OrdersItem';
import OrderDevice1 from './OrdersItem1';
const Order  = observer( ()=>{
  const [orders,setorders,setordersRef] = useState()


  $('.menu').removeClass('fill_tsd_activ')
  $('.present').removeClass('fill_tsd_activ')
  $('.basket').removeClass('fill_tsd_activ')

 $('.delivery').addClass('fill_tsd_activ')
  const handleClick = e => {

      $('.otprav_1').removeClass('category_item_activ')
      $('.otprav_2').removeClass('category_item_activ')
      $('.otprav_3').removeClass('category_item_activ')

      const link = e.target.getAttribute('link')
      $(`.${link}`).addClass('category_item_activ')
    };

    const handleClick_1 = e => {

      $('.poluch_1').removeClass('category_item_activ')
      $('.poluch_2').removeClass('category_item_activ')


      const link = e.target.getAttribute('link')
      $(`.${link}`).addClass('category_item_activ')
    };

    const handleClick_2 = e => {

      $('.otkr_1').removeClass('category_item_activ')
      $('.otkr_2').removeClass('category_item_activ')


      const link = e.target.getAttribute('link')
      $(`.${link}`).addClass('category_item_activ')
    };
    const getOrders = async() => {
      const storedToken = localStorage.getItem('token');
      const userId = jwt_decode(storedToken)
    const orders = await Order_getAllItem(userId.id)
    setorders(orders.data)
    console.log(orders.data)
    if(orders.data.length===0){
      $('.none_in_bask').toggleClass('none_in_bask_active')
    }
    }
    useEffect(() => {
getOrders()
    }, [])
    
   

    const navigate = useNavigate()
    return (
      <div class='bg'> 
        
      <div class=' bg-tsd'>

        <div class='del_cont_1'>
        <div class='del_text_1'>
        Ваши заказы
      </div>
      <div class='none_in_bask h_50vh'>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="140px" height="140px" viewBox="0 0 1181.000000 1181.000000"
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
             
      {setordersRef?.current?.map(order =>
       
               
           
      

 



   <div class='order_item' key={order.id}>
      
    <div class='order_item_text'>
    <div class='order_item_text_1 bord_bot' >
  Заказ номер : {order.id}
  
</div>
    </div>
    <div class='d-flex_-'>

<OrderDevice1 order={order}  />
<div class='df_center_ pr-35 pr_0'>
<div class='img_item_name ml-35'>
Открытка
</div>
<img class='img_item ml-35' src='https://avatars.mds.yandex.net/i?id=67f31b7c62f41d5a1f42d7ceaeea39267da91416-9246177-images-thumbs&n=13'/>


<div class='df_  bottom_price'>
<div class='price_'>
  В подарок
</div>

<svg version="1.1" id="Capa_1" class='svg_w' width='14px' height='14px' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 45.583 45.583" ><g><g><path d="M22.793,12.196c-3.361,0-6.078-2.729-6.078-6.099C16.715,2.73,19.432,0,22.793,0c3.353,0,6.073,2.729,6.073,6.097 C28.866,9.466,26.145,12.196,22.793,12.196z"/><path d="M22.794,28.889c-3.361,0-6.079-2.729-6.079-6.099c0-3.366,2.717-6.099,6.078-6.099c3.353,0,6.073,2.732,6.075,6.099 C28.866,26.162,26.144,28.889,22.794,28.889z"/><path d="M22.794,45.583c-3.361,0-6.079-2.729-6.079-6.099s2.717-6.098,6.078-6.098c3.353-0.002,6.073,2.729,6.073,6.098 S26.144,45.583,22.794,45.583z"/></g></g></svg>

</div>
</div></div>
{/* <div class='df_end_'>


<div class='d-flex'>

<div class='df_center_'>
<div class='img_item_name ml-35'>
Трайфл Красн ...
</div>
<img class='img_item ml-35' src='https://downloader.disk.yandex.ru/preview/d803d33a0ea23c94fcc22d7e654080e42aa8f8b371c4929d7091b097a3d03f5b/65006b59/MkPZPnMTvafNbM6PCVUq40tIcQnvdwLF26jkMZhZPsFSApyNAZpOzJuO5-6KJ4vQd3lmwQ8M2tAJJs29P-lkfQ%3D%3D?uid=0&filename=DSC_6074.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1583x784'/>


<div class='df_  bottom_price'>
<div class='price_'>
  3400Р
</div>

<svg version="1.1" id="Capa_1"  class='svg_w' width='14px' height='14px' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 45.583 45.583" ><g><g><path d="M22.793,12.196c-3.361,0-6.078-2.729-6.078-6.099C16.715,2.73,19.432,0,22.793,0c3.353,0,6.073,2.729,6.073,6.097 C28.866,9.466,26.145,12.196,22.793,12.196z"/><path d="M22.794,28.889c-3.361,0-6.079-2.729-6.079-6.099c0-3.366,2.717-6.099,6.078-6.099c3.353,0,6.073,2.732,6.075,6.099 C28.866,26.162,26.144,28.889,22.794,28.889z"/><path d="M22.794,45.583c-3.361,0-6.079-2.729-6.079-6.099s2.717-6.098,6.078-6.098c3.353-0.002,6.073,2.729,6.073,6.098 S26.144,45.583,22.794,45.583z"/></g></g></svg>

</div>
</div>

<div class='df_center_'>
<div class='img_item_name ml-35'>
Набор чизкейков
</div>
<img class='img_item ml-35' src='https://downloader.disk.yandex.ru/preview/d803d33a0ea23c94fcc22d7e654080e42aa8f8b371c4929d7091b097a3d03f5b/65006b59/MkPZPnMTvafNbM6PCVUq40tIcQnvdwLF26jkMZhZPsFSApyNAZpOzJuO5-6KJ4vQd3lmwQ8M2tAJJs29P-lkfQ%3D%3D?uid=0&filename=DSC_6074.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1583x784'/>


<div class='df_  bottom_price'>
<div class='price_'>
  3400Р
</div>

<svg version="1.1" id="Capa_1" class='svg_w' width='14px' height='14px' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 45.583 45.583" ><g><g><path d="M22.793,12.196c-3.361,0-6.078-2.729-6.078-6.099C16.715,2.73,19.432,0,22.793,0c3.353,0,6.073,2.729,6.073,6.097 C28.866,9.466,26.145,12.196,22.793,12.196z"/><path d="M22.794,28.889c-3.361,0-6.079-2.729-6.079-6.099c0-3.366,2.717-6.099,6.078-6.099c3.353,0,6.073,2.732,6.075,6.099 C28.866,26.162,26.144,28.889,22.794,28.889z"/><path d="M22.794,45.583c-3.361,0-6.079-2.729-6.079-6.099s2.717-6.098,6.078-6.098c3.353-0.002,6.073,2.729,6.073,6.098 S26.144,45.583,22.794,45.583z"/></g></g></svg>

</div>
</div>
</div>



<div class='df_center_ pr-35'>
<div class='img_item_name ml-35'>
Открытка
</div>
<img class='img_item ml-35' src='https://downloader.disk.yandex.ru/preview/d803d33a0ea23c94fcc22d7e654080e42aa8f8b371c4929d7091b097a3d03f5b/65006b59/MkPZPnMTvafNbM6PCVUq40tIcQnvdwLF26jkMZhZPsFSApyNAZpOzJuO5-6KJ4vQd3lmwQ8M2tAJJs29P-lkfQ%3D%3D?uid=0&filename=DSC_6074.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1583x784'/>


<div class='df_  bottom_price'>
<div class='price_'>
  В подарок
</div>

<svg version="1.1" id="Capa_1" class='svg_w' width='14px' height='14px' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 45.583 45.583" ><g><g><path d="M22.793,12.196c-3.361,0-6.078-2.729-6.078-6.099C16.715,2.73,19.432,0,22.793,0c3.353,0,6.073,2.729,6.073,6.097 C28.866,9.466,26.145,12.196,22.793,12.196z"/><path d="M22.794,28.889c-3.361,0-6.079-2.729-6.079-6.099c0-3.366,2.717-6.099,6.078-6.099c3.353,0,6.073,2.732,6.075,6.099 C28.866,26.162,26.144,28.889,22.794,28.889z"/><path d="M22.794,45.583c-3.361,0-6.079-2.729-6.079-6.099s2.717-6.098,6.078-6.098c3.353-0.002,6.073,2.729,6.073,6.098 S26.144,45.583,22.794,45.583z"/></g></g></svg>

</div>
</div>


</div> */}

<div class='order_item_text bg_trans pb-5 pt-0'>
    <div class='order_item_text_1 '>
 
</div>
    </div>
    <div class='order_item_text_2 pd_t_3'>
  Статус : {order.status}
</div>
<div class='order_item_text_2  pb-10'>
  Адрес : {order.address}
</div>



 </div>
  )
}
        </div>

      </div>
        </div>
    );
});

export default Order;
