import { useEffect, useState} from 'react';
import '../css/one.css'
import React from 'react';
import jQuery from 'jquery'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom';

import {Context} from "../index";
import  { useContext} from 'react';
import jwt_decode from "jwt-decode";
import { BASKET_ROUTE, DELIVERY_ROUTE, MENU_ROUTE, ORDER_ROUTE, PRESENT_ROUTE } from '../utils/consts';
function ToggBar() {
  const navigate = useNavigate()
  const{user}= useContext(Context)

  const [activeButton, setActiveButton,activeButtonRef] = useState(null);
  const [activeSvg, setactiveSvg,activeSvgRef] = useState(null);

  const handleClick = e => {
    setactiveSvg(null)
      $('.menu').removeClass('fill_tsd_activ')
      $('.delivery').removeClass('fill_tsd_activ')
      $('.present').removeClass('fill_tsd_activ')
      $('.basket').removeClass('fill_tsd_activ')

      const link = e.target.getAttribute('link')
      if(link==='menu'){
        console.log(window.location.pathname)
        navigate(MENU_ROUTE)
       
      }
      if(link==='present'){
        navigate(PRESENT_ROUTE)
      }
      if(link==='delivery'){
        navigate(ORDER_ROUTE)
      }
      if(link==='basket'){
        navigate(BASKET_ROUTE)
      }
      $(`.${link}`).addClass('fill_tsd_activ')
      console.log(link)
      setActiveButton(link);

    };



	return(
<div>
<div class='togbar d-flex'onClick={handleClick} link='menu' >
<div class='tog_icon d-flex' onClick={handleClick} link='menu' >
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" link='menu' width='28px'viewBox="0 0 256 256" id="squares-four"><rect width="256" height="256" fill="none"></rect><rect width="80" class=' menu' link='menu' onClick={handleClick} height="80" x="40" y="40" rx="8"></rect><rect class='menu' link='menu' onClick={handleClick} width="80" height="80" x="136" y="40" rx="8"></rect><rect class='menu'onClick={handleClick} link='menu' width="80" height="80" x="40" y="136" rx="8"></rect><rect  class='menu'onClick={handleClick} link='menu' width="80" height="80" x="136" y="136" rx="8"></rect></svg>
  </div>
 <div class=' color_tsd' onClick={handleClick} link='menu' >
  Меню
 </div> 
</div>

<div class='tog_icon' onClick={handleClick} link='present'>

<svg id="Flat"onClick={handleClick}  link='present' class='present' width='28px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <path link='present' d="M216,72H181.03271a31.99968,31.99968,0,0,0-47.37646-42.91162A30.99155,30.99155,0,0,0,128,37.2998a31.01227,31.01227,0,0,0-5.65723-8.21191A31.99948,31.99948,0,0,0,74.96729,72H40A16.01817,16.01817,0,0,0,24,88v32a16.01817,16.01817,0,0,0,16,16v64a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V136a16.01817,16.01817,0,0,0,16-16V88A16.01817,16.01817,0,0,0,216,72ZM144.96973,40.4021a16.00019,16.00019,0,1,1,22.62793,22.62744c-4.94043,4.94116-19.22559,7.71582-31.25684,8.6294C137.25488,59.62671,140.0293,45.34277,144.96973,40.4021Zm-56.56836,0a16.0194,16.0194,0,0,1,22.62793-.00024c4.9414,4.94116,7.71582,19.22631,8.62988,31.25683-12.03223-.91382-26.31641-3.68848-31.25684-8.62915A16.01925,16.01925,0,0,1,88.40137,40.4021ZM216,120H136v72a8,8,0,0,1-16,0V120H40V88h80v32h16V88h80l.00977,31.99951Z"/>
</svg>

<div  class=' color_tsd' onClick={handleClick} link='present'>
  Подарки
 </div>
</div>

<div class='tog_icon' onClick={handleClick} link='delivery' >







<svg width="33" class='mt-6' height="26" xmlns="http://www.w3.org/2000/svg"  onClick={handleClick} link='delivery' >
 <g>
  <title>background</title>
  <rect x="-1" y="-1" width="35" height="40" id="canvas_background" fill="none"  onClick={handleClick} link='delivery' />
 </g>

 <g>
  <title>Layer 1</title>
  <path class='tog_icon delivery' onClick={handleClick} link='delivery'  d="m30.56183,12.25369c0,-0.00507 -0.00028,-0.01015 -0.00035,-0.01776c-0.0082,-0.38164 -0.30821,-0.68571 -0.68633,-0.68571l-0.18021,0l-2.78303,-5.49638c-0.11741,-0.23221 -0.35159,-0.37661 -0.61011,-0.37668l-4.75143,-0.00102l0.18128,-1.46775c0.0517,-0.58656 -0.1258,-1.14038 -0.49997,-1.55958c-0.37348,-0.41833 -0.89489,-0.64876 -1.46833,-0.64876l-14.74672,0c-0.37079,0 -0.68575,0.29307 -0.72111,0.67089l-0.14782,1.20929l8.40197,0c0.54554,0 0.97623,0.45177 0.96199,1.00907c-0.01433,0.5573 -0.46815,1.00905 -1.01371,1.00905l-2.80253,0c0.0005,0.00145 0.00099,0.00254 0.00149,0.00508l-8.2298,0c-0.3858,0 -0.70678,0.31943 -0.71686,0.71355c-0.01009,0.39412 0.29444,0.71355 0.68024,0.71355l10.89537,0c0.50576,0.07969 0.88358,0.52636 0.8697,1.06729c-0.01523,0.59408 -0.49668,1.07575 -1.07722,1.08072l-7.5115,0c-0.3897,0 -0.71386,0.32268 -0.72409,0.72076c-0.01024,0.39808 0.2974,0.72076 0.6871,0.72076l7.42303,0c0.51317,0.07309 0.89857,0.52342 0.8846,1.06963c-0.0153,0.59706 -0.50161,1.08112 -1.08611,1.08112l-8.5159,0l0,0.00079l-0.71554,0c-0.3897,0 -0.71383,0.3227 -0.72407,0.72078c-0.01023,0.39805 0.29733,0.72076 0.6871,0.72076l0.61751,0l-0.2415,2.58162c-0.0518,0.58648 0.12573,1.1403 0.49997,1.5595c0.3734,0.4184 0.89489,0.64876 1.46831,0.64876l0.53272,0c0.25387,1.48288 1.50982,2.60331 3.04609,2.60331c1.53625,0 2.84963,-1.12043 3.17936,-2.60324l6.64794,0c0.53751,0 1.04638,-0.20987 1.44547,-0.55369c0.36493,0.35778 0.84868,0.55369 1.37688,0.55369l0.10936,0c0.2538,1.48281 1.50974,2.60324 3.04607,2.60324c1.53627,0 2.84965,-1.12043 3.17938,-2.60324l0.43879,0c1.14312,0 2.15691,-0.94931 2.25991,-2.11616l0.43,-4.86556c0.00057,-0.00761 0.00027,-0.01268 0.00069,-0.0203c0.00072,-0.01015 0.00206,-0.0203 0.00234,-0.02994c0.00015,-0.00508 -0.00042,-0.01269 -0.00042,-0.01777l0,0.00033zm-22.0788,8.21098c-0.97265,0 -1.74327,-0.80827 -1.71781,-1.80184c0.02547,-0.99364 0.83753,-1.80198 1.81018,-1.80198c0.97265,0 1.74322,0.80834 1.71773,1.80198c-0.02546,0.99357 -0.83745,1.80184 -1.8101,1.80184zm15.8051,0c-0.97265,0 -1.74322,-0.80827 -1.71781,-1.80184c0.02547,-0.99364 0.83753,-1.80198 1.81018,-1.80198c0.97265,0 1.74327,0.80834 1.71773,1.80198c-0.02546,0.99357 -0.83745,1.80184 -1.8101,1.80184zm4.4353,-3.37006c-0.0367,0.41566 -0.41087,0.76682 -0.81706,0.76682l-0.47466,0c-0.31425,-1.40211 -1.53421,-2.4421 -3.01432,-2.4421c-1.4801,0 -2.75334,1.03999 -3.13943,2.4421l-0.14528,0c-0.17935,0 -0.33939,-0.06878 -0.45079,-0.19364c-0.11212,-0.12562 -0.16489,-0.29644 -0.14859,-0.48119l0.88965,-10.06836l2.04331,0.00044l-0.32386,3.6652c-0.05185,0.58648 0.12558,1.14031 0.49977,1.5595c0.37338,0.41848 0.89502,0.64899 1.46853,0.64899l3.97512,0l-0.36239,4.10213l0,0.00011z" id="svg_1" stroke="null"/>
 </g>
</svg>

<div class='mt color_tsd'  onClick={handleClick} link='delivery' >
  Доставка
 </div>

</div>

<div class='tog_icon'  onClick={handleClick} link='basket' >

<svg width="28px" onClick={handleClick}  class='basket'   link='basket' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
  
    <g id="Iconly/Bold/Bag" onClick={handleClick} link='basket' stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
        <g id="Bag" onClick={handleClick} link='basket' transform="translate(3.000000, 2.000000)" class='fill_tsd'>
            <path  onClick={handleClick} link='basket' class='basket' d="M9.00494392,-1.77635684e-14 C11.684893,-1.77635684e-14 13.8881654,2.10590955 14,4.77432394 L13.9738707,4.77432394 C13.977008,4.85188923 13.9621034,4.9291268 13.9303218,5 L14.0864529,5 C15.3034636,5 16.5778419,5.8435091 17.0888377,7.87980254 L17.1443642,8.12007277 L17.913261,14.3147362 C18.46659,18.2657474 16.3049606,19.9272845 13.3562029,19.997658 L13.158474,20 L4.86852947,20 C1.87177637,20 -0.437455746,18.9079745 0.0702808406,14.5835537 L0.104904598,14.3147362 L0.882639271,8.12007277 C1.26614074,5.92718531 2.55360997,5.06224784 3.79411983,5.00326364 L3.9317127,5 L4.00988785,5 C3.99670405,4.92534832 3.99670405,4.84897562 4.00988785,4.77432394 C4.1217224,2.10590955 6.32499483,-1.77635684e-14 9.00494392,-1.77635684e-14 Z M6.09699673,8.32929048 C5.60889332,8.32929048 5.21320733,8.73655117 5.21320733,9.23893269 C5.21320733,9.74131421 5.60889332,10.1485749 6.09699673,10.1485749 C6.58510014,10.1485749 6.98078613,9.74131421 6.98078613,9.23893269 L6.98078613,9.23893269 L6.97390016,9.1248291 C6.91936452,8.6763055 6.54755372,8.32929048 6.09699673,8.32929048 Z M11.8858173,8.32929048 C11.3977139,8.32929048 11.0020279,8.73655117 11.0020279,9.23893269 C11.0020279,9.74131421 11.3977139,10.1485749 11.8858173,10.1485749 C12.3739207,10.1485749 12.7696067,9.74131421 12.7696067,9.23893269 C12.7696067,8.73655117 12.3739207,8.32929048 11.8858173,8.32929048 Z M8.96574994,1.30238454 C7.04163953,1.30238454 5.48183986,2.85682476 5.48183986,4.77432394 C5.49502365,4.84897562 5.49502365,4.92534832 5.48183986,5 L12.4932089,5 C12.4653783,4.92794354 12.4506323,4.85152772 12.44966,4.77432394 C12.44966,2.85682476 10.8898603,1.30238454 8.96574994,1.30238454 Z" id="Combined-Shape"></path>
        </g>
    </g>
</svg>
<div class=' color_tsd'  onClick={handleClick} link='basket'>
  Корзинка
 </div>
</div>

</div>



</div>
  
  

    )

}

  

export default ToggBar