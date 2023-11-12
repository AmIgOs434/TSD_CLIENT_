import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import useState from 'react-usestateref'
import '../css/one.css'
import '../static/video.mp4'
import videos from './video.mp4'
import { MENU_ROUTE } from '../utils/consts';
import $ from 'jquery'
import jwt_decode from "jwt-decode";
import { Code, create_skid, get_skidka, get_user } from '../http/userAPI';
const Delivery  = observer( ()=>{

  const [skidki,setskidki,setskidkiRef] = useState()


  $('.menu').removeClass('fill_tsd_activ')
  $('.delivery').removeClass('fill_tsd_activ')
  $('.basket').removeClass('fill_tsd_activ')

 $('.present').addClass('fill_tsd_activ')
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

    useEffect(() => {
      getUser()
    }, [])
    const click = async() => {
      $('.ope').removeClass('modal-open')
      $('.ope').removeClass('ope1')
      $('#exampleModal1').removeClass('show')
      $('#exampleModal1').removeClass('ope2')
      navigate(MENU_ROUTE)
    }
    const getUser = async() => {
      
      const storedToken = localStorage.getItem('token');
      const userId = jwt_decode(storedToken)


   
      
      const user = await get_user(userId.id)
      const navig = window.location.search

      if(`?auth=%${user.data.code}` ===navig){
        console.log('fdsfsdfsd')
        create_skid(10,'Скидка 10%',userId.id)
        await Code(userId.id,0,user.data.FIO)
        $('.ope').toggleClass('modal-open')
        $('.ope').toggleClass('ope1')
        $('#exampleModal1').toggleClass('show')
        $('#exampleModal1').toggleClass('ope2')
      }

      const skidka = await get_skidka(userId.id)
      setskidki(skidka.data)
       if(skidka.data.length===0){
        $('.none_in_bask').toggleClass('none_in_bask_active')
       }
    }

    const navigate = useNavigate()
    return (
      <div class='bg'> 
      
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <div class='present_for'></div>
     
     <div class='map12'>

    


      <div class='present_for_you_2 present_for_text'>
       СКИДКА 10% НА ПЕРВУЮ ПОКУПКУ
      </div>


      <div class='present_for_you_4 present_for_you_3 present_for_text1 present_for_you_3_'>
       Скидка распространяется на первый заказ продукции TSD
      </div>
     </div>

      <div class="foter_">
      <div class="stape stape2 stape_4 stape_active" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={click}> </div>
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary" >Выбрать этот адрес</button> */}
      </div>
    </div>
  </div>
</div>
                    <div class='del_text_3 pt-10 '>
       Подарки
        </div> 
        <div class='none_in_bask none_in_bask_1'>
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
 {"Пока нет подарков :("}
  </div>
                  </div>

        {setskidkiRef?.current?.map(device =>
          <div key={device.id} class='df_jc data-bs-toggle="modal" data-bs-target="#exampleModal1"'>
        <div class='present_1' data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <svg  width='30px' data-bs-toggle="modal" data-bs-target="#exampleModal1"class='ml-10_' id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path data-bs-toggle="modal" data-bs-target="#exampleModal1" d="M216,72H181.03271a31.99968,31.99968,0,0,0-47.37646-42.91162A30.99155,30.99155,0,0,0,128,37.2998a31.01227,31.01227,0,0,0-5.65723-8.21191A31.99948,31.99948,0,0,0,74.96729,72H40A16.01817,16.01817,0,0,0,24,88v32a16.01817,16.01817,0,0,0,16,16v64a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V136a16.01817,16.01817,0,0,0,16-16V88A16.01817,16.01817,0,0,0,216,72ZM144.96973,40.4021a16.00019,16.00019,0,1,1,22.62793,22.62744c-4.94043,4.94116-19.22559,7.71582-31.25684,8.6294C137.25488,59.62671,140.0293,45.34277,144.96973,40.4021Zm-56.56836,0a16.0194,16.0194,0,0,1,22.62793-.00024c4.9414,4.94116,7.71582,19.22631,8.62988,31.25683-12.03223-.91382-26.31641-3.68848-31.25684-8.62915A16.01925,16.01925,0,0,1,88.40137,40.4021ZM216,120H136v72a8,8,0,0,1-16,0V120H40V88h80v32h16V88h80l.00977,31.99951Z"/>
            </svg>

  Скидка {device.description}%

            <svg data-bs-toggle="modal" data-bs-target="#exampleModal1" width="26px" class='mr-10_' height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path data-bs-toggle="modal" data-bs-target="#exampleModal1" d="M10 10C10 10.5523 10.4477 11 11 11V17C10.4477 17 10 17.4477 10 18C10 18.5523 10.4477 19 11 19H13C13.5523 19 14 18.5523 14 18C14 17.4477 13.5523 17 13 17V9H11C10.4477 9 10 9.44772 10 10Z" fill="#0F0F0F"/>
<path data-bs-toggle="modal" data-bs-target="#exampleModal1" d="M12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8Z" fill="#0F0F0F"/>
<path data-bs-toggle="modal" data-bs-target="#exampleModal1" fill-rule="evenodd" clip-rule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z" fill="#0F0F0F"/>
</svg>
        </div>


</div>
 )}


{/* <div class='del_text_3 pt-10 '>
       Промокоды
        </div>  */}
{/* <div class='df_jc'> */}
{/* <div class='present_1'>

<svg width="35px" class='ml-10_ color_0'  height="35px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3.91992H6C3.79086 3.91992 2 5.71078 2 7.91992V17.9199C2 20.1291 3.79086 21.9199 6 21.9199H18C20.2091 21.9199 22 20.1291 22 17.9199V7.91992C22 5.71078 20.2091 3.91992 18 3.91992Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 17.9199L17 7.91992" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11.9199C9.10457 11.9199 10 11.0245 10 9.91992C10 8.81535 9.10457 7.91992 8 7.91992C6.89543 7.91992 6 8.81535 6 9.91992C6 11.0245 6.89543 11.9199 8 11.9199Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 17.9199C17.1046 17.9199 18 17.0245 18 15.9199C18 14.8154 17.1046 13.9199 16 13.9199C14.8954 13.9199 14 14.8154 14 15.9199C14 17.0245 14.8954 17.9199 16 17.9199Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  Скидка 10% 

            <svg width="26px" class='mr-10_' height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 10C10 10.5523 10.4477 11 11 11V17C10.4477 17 10 17.4477 10 18C10 18.5523 10.4477 19 11 19H13C13.5523 19 14 18.5523 14 18C14 17.4477 13.5523 17 13 17V9H11C10.4477 9 10 9.44772 10 10Z" fill="#0F0F0F"/>
<path d="M12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8Z" fill="#0F0F0F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z" fill="#0F0F0F"/>
</svg>
        </div> */}

{/* </div> */}


{/* 
<div class='df_jc'>
<div class='plus_kup'>

</div>
</div> */}



        </div>
    );
});

export default Delivery;
