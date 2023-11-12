import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import useState from 'react-usestateref'
import '../css/one.css'
import '../static/video.mp4'
import videos from './video.mp4'
import { MENU_ROUTE } from '../utils/consts';
import $ from 'jquery'
const Delivery  = observer( ()=>{



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

    }, [])
    
   

    const navigate = useNavigate()
    return (
      <div class='bgg'> 
<div class='w-100 d-flexx'>
<div class='title title2_'> Контакты</div>
<div class='display_svg display_svg_1'>
<div class='svg_soc'>
<svg width={'40px'} fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M707 360c-70-75-128-87-184-88h-2c-126 0-245 104-245 248 0 151 136 239 244 239h1c60 0 133-11 197-103H472V401l523 2c5 26 14 91 14 125 0 289-194 495-493 495C232 1023 1 797 1 515S232 8 516 8c139 0 288 55 382 180zm-187 93v154h263c-12 65-81 195-263 195-159 0-287-130-287-285 0-156 131-287 287-287 91 0 152 40 185 72l126-119C751 108 646 63 520 63 264 63 56 264 56 517c0 251 208 453 464 453 270 0 445-185 445-442 0-29-2-52-6-75H520z"></path></g></svg>

<div class='mt_mt'>
tsd@gmail.com
</div>

</div>
<div class='svg_soc'>
<svg width={'40px'} fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0.094 7.75c0-1.188 0.813-1.656 1.813-1.719l4.656 0.031c0.281 0 0.531 0.188 0.625 0.469 1.063 3.438 2.375 5.563 3.938 7.969 0.094 0.188 0.25 0.281 0.406 0.281 0.125 0 0.25-0.063 0.344-0.219l0.094-0.344 0.031-5.406c0-0.781-0.375-0.906-1.25-1.031-0.344-0.063-0.563-0.375-0.563-0.688 0-0.063 0-0.125 0.031-0.188 0.438-1.344 1.813-2.031 3.75-2.031l1.75-0.031c1.438 0 2.75 0.625 2.75 2.469v7.094c0.125 0.094 0.25 0.156 0.406 0.156 0.25 0 0.563-0.156 0.813-0.563 1.625-2.281 3.469-5 3.719-6.438 0-0.063 0.031-0.094 0.063-0.156 0.344-0.688 1.219-1.156 1.594-1.281 0.063-0.031 0.156-0.063 0.281-0.063h4.844l0.313 0.031c0.469 0 0.813 0.313 0.969 0.594 0.281 0.438 0.219 0.906 0.25 1.094v0.219c-0.469 2.844-3.719 6.031-5.094 8.094-0.188 0.25-0.281 0.469-0.281 0.688 0 0.188 0.094 0.375 0.25 0.563l4.563 5.75c0.25 0.344 0.375 0.75 0.375 1.094 0 1.031-0.969 1.625-1.906 1.719l-0.531 0.031h-4.75c-0.094 0-0.156 0.031-0.25 0.031-0.531 0-0.969-0.281-1.281-0.594-1-1.219-1.969-2.469-2.938-3.688-0.188-0.25-0.25-0.281-0.438-0.406-0.219 0.906-0.406 1.844-0.625 2.781l-0.094 0.531c-0.156 0.563-0.563 1.156-1.313 1.313l-0.438 0.031h-3.063c-5.406 0-10.25-7.688-13.656-17.281-0.094-0.25-0.156-0.594-0.156-0.906zM18.875 15.844c-0.813 0-1.719-0.469-1.719-1.344v-7.188c0-0.844-0.375-1.156-1.406-1.156l-1.781 0.063c-1 0-1.563 0.156-2.031 0.469 0.719 0.344 1.375 0.813 1.375 2.125v5.5c-0.094 1.094-1 1.813-1.875 1.813-0.594 0-1.125-0.344-1.438-0.906-1.406-2.125-2.594-4.125-3.625-7l-0.281-0.813-4.156-0.031c-0.563 0-0.5 0.031-0.5 0.313 0 0.188 0.031 0.438 0.063 0.594l0.656 1.75c3.406 8.813 7.688 14.594 11.75 14.594h3.125c0.438 0 0.406-0.531 0.5-0.844l0.594-2.75c0.125-0.281 0.219-0.531 0.438-0.75 0.25-0.25 0.531-0.344 0.813-0.344 0.594 0 1.156 0.469 1.531 0.906l2.656 3.375c0.219 0.344 0.406 0.406 0.531 0.406h5.156c0.5 0 0.938-0.156 0.938-0.469 0-0.094-0.031-0.219-0.094-0.313l-4.531-5.656c-0.375-0.469-0.531-0.938-0.531-1.406 0-0.5 0.188-1 0.5-1.438 1.313-1.969 4.125-4.781 4.781-7.094l0.094-0.406c-0.031-0.156-0.031-0.281-0.063-0.438h-4.906c-0.313 0.125-0.563 0.313-0.75 0.563l-0.188 0.594c-0.719 2-2.688 4.75-4.094 6.656-0.469 0.438-1 0.625-1.531 0.625z"></path> </g></svg>

<div class='mt_mt'>
@thesamedessert
</div>

</div>
<div class='svg_soc'>
<svg width={'40px'} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M26.67,38.57l-.82,11.54A2.88,2.88,0,0,0,28.14,49l5.5-5.26,11.42,8.35c2.08,1.17,3.55.56,4.12-1.92l7.49-35.12h0c.66-3.09-1.08-4.33-3.16-3.55l-44,16.85C6.47,29.55,6.54,31.23,9,32l11.26,3.5L45.59,20.71c1.23-.83,2.36-.37,1.44.44Z" stroke-linecap="round"></path></g></svg>

<div class='mt_mt'>
@thesamedessert
</div>

</div>
<div class='svg_soc'>
<svg  width={'40px'} fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M511 4c138 0 155 1 209 3 53 2 90 11 123 24 34 13 62 30 90 58s45 56 58 90c13 33 22 70 24 123 2 54 3 71 3 209s-1 155-3 209c-2 53-11 90-24 123-13 34-30 62-58 90s-56 45-90 58c-33 13-70 22-123 24-54 2-71 3-209 3s-155-1-209-3c-53-2-90-11-123-24-34-13-62-30-90-58s-45-56-58-90C18 810 9 773 7 720c-2-54-3-71-3-209s1-155 3-209c2-53 11-90 24-123 13-34 30-62 58-90s56-45 90-58c33-13 70-22 123-24 54-2 71-3 209-3zm0 66c-144 0-161 1-217 3-52 2-81 12-100 19-49 20-82 53-102 102-7 19-17 48-19 100-2 56-3 73-3 217s1 161 3 217c2 52 12 81 19 100 20 49 53 82 102 102 19 7 48 17 100 19 56 2 73 3 217 3s161-1 217-3c52-2 81-12 100-19 49-20 82-53 102-102 7-19 17-48 19-100 2-56 3-73 3-217s-1-161-3-217c-2-52-12-81-19-100-20-49-53-82-102-102-19-7-48-17-100-19-56-2-73-3-217-3zm0 644c112 0 203-91 203-203s-91-203-203-203-203 91-203 203 91 203 203 203zm0-463c144 0 260 116 260 260S655 771 511 771 251 655 251 511s116-260 260-260zm332-10c0 34-28 60-62 60s-60-26-60-60 26-62 60-62 62 28 62 62z"></path></g></svg>

<div class='mt_mt'>
@tsd
</div>

</div>



<div class='svg_soc'>
<svg height="40px" width="40px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"  fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path class="st0" d="M94.811,21.696c-35.18,22.816-42.091,94.135-28.809,152.262c10.344,45.266,32.336,105.987,69.42,163.165 c34.886,53.79,83.557,102.022,120.669,129.928c47.657,35.832,115.594,58.608,150.774,35.792 c17.789-11.537,44.218-43.058,45.424-48.714c0,0-15.498-23.896-18.899-29.14l-51.972-80.135 c-3.862-5.955-28.082-0.512-40.386,6.457c-16.597,9.404-31.882,34.636-31.882,34.636c-11.38,6.575-20.912,0.024-40.828-9.142 c-24.477-11.262-51.997-46.254-73.9-77.947c-20.005-32.923-40.732-72.322-41.032-99.264c-0.247-21.922-2.341-33.296,8.304-41.006 c0,0,29.272-3.666,44.627-14.984c11.381-8.392,26.228-28.286,22.366-34.242l-51.972-80.134c-3.401-5.244-18.899-29.14-18.899-29.14 C152.159-1.117,112.6,10.159,94.811,21.696z"></path> </g> </g></svg>

<div class='mt_mt2'>
+ 79967854060
</div>

</div>

</div>
</div>
        </div>
    );
});

export default Delivery;
