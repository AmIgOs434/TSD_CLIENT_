import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import '../css/one.css'
import { DESSERT_ROUTE, ITEM_ROUTE, MENU_ROUTE } from '../utils/consts';
import axios from 'axios';
import $ from 'jquery'
import { Code, Code_auth, PostMessage, get_user, registration_0 } from '../http/userAPI';
import { fetchDevices } from '../http/deviceAPI';
import useState from 'react-usestateref'
import set_message from './message';
import Onas from './onas';

const Menu  = observer( ()=>{

  const [device,setdevice,setdeviceRef] = useState(null)
  const [text,settext,settextRef] = useState('Подскажите, как вас зовут ?')
  const [const1,setconst,setconstRef] = useState(1)

  const [name,setName,setNameRef] = useState(1)
  const [email,setEmail,setEmailRef] = useState(1)
  // Николай, остался последний шаг, подскажите вашу почту
  $('.delivery').removeClass('fill_tsd_activ')
  $('.present').removeClass('fill_tsd_activ')
  $('.basket').removeClass('fill_tsd_activ')
 $('.menu').addClass('fill_tsd_activ')



 const set_message1 = async()=>{

 }
 const sendMessage = async()=>{
 
  const code=generateRandomString(10)
  PostMessage(setEmailRef.current,`http://localhost:3000/present?auth=%${code}`)
  const storedToken = localStorage.getItem('token');
  const userId = jwt_decode(storedToken)
  await Code(userId.id,code,setNameRef.current,setEmailRef.current)
}

  const fetchdevices = async()=>{
    let device1
   device1 = await fetchDevices()
   setdevice(device1)
   console.log(setdeviceRef.current)
  }
  function generateRandomString(length) {
    return Math.random().toString(36).substring(2, length + 2);
}
  const present = async()=>{
    $('.stape_1').toggleClass('stape_active1')
    $('.stape_2').toggleClass('stape_active')
    $('.stape_3').toggleClass('stape_active1')
    $('.stape_4').toggleClass('stape_active')
    setconst(setconstRef.current+1)
    if(setconstRef.current %2===0 ){
      settext(`${setNameRef.current}, остался последний шаг, мы вышлем секретную ссылку на вашу почту`)
      $('.input_6').toggleClass('input_inactive')
      $('.input_7').toggleClass('input_active')
      
     }else{
      settext('Подскажите, как вас зовут ?')
     }
      }

//   const present = async()=>{
// $('.present_for_you').toggleClass('present_for_you_active')
// $('.img_menu__').toggleClass('img_menu__none')

//   }
const static_click = async()=>{
  const storedToken = localStorage.getItem('token');
  const userId = jwt_decode(storedToken)
  const user = await get_user(userId.id)
  console.log(user.data.code )
  if(user.data.code === '0'){
    $('.modal-dialog_act_2').addClass('modal-dialog_active')
    $('.modal-dialog_act_1').addClass('modal-dialog_none')
  }
  console.log(user.data.code)


}
  

    useEffect(() => {
      fetchdevices()
   
    }, [])
    
   

    const navigate = useNavigate()
    return (
        <div class='menu_container' >
          <div class="message-box"></div>
          <div class="modal fade" id="staticBackdrop"  data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog_act_1">
    <div class="modal-content">
     
<div class='present_for_you'>
<div class='present_for_you_1'>
PRESENT

<div class='present_for_you_2'>
  Пройдите два простых шага
</div>
<div class='present_for_you_2 present_for_you_3'>
  <div class='stape stape_1'> STAPE 1</div>  
  <div class='stape stape2 stape_2'> STAPE 2</div>  
</div>
<div class='present_for_you_4 present_for_you_3'>
  {settextRef.current}
</div>

<input type="text" class="input_4 input_6 height mr_top_m_bot "onChange={ e => setName(e.target.value)}  placeholder="Ваше имя"></input>
<input type="text" class="input_4 input_7 height mr_top_m_bot "onChange={ e => setEmail(e.target.value)} placeholder="Вашa почта"></input>

<div class='present_for_you_2 present_for_you_3'>
  <div class='stape stape2 stape_3' onClick={present}> STAPE 2</div>  
  <div class='stape stape2 stape_4' onClick={sendMessage}> </div>  
</div>
</div>

</div>
      
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary">Понял</button>
      </div> */}
    </div>
  </div>
  <div class="modal-dialog modal-dialog_act_2">
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
      <div class="stape stape2 stape_4 stape_active" data-bs-toggle="modal" data-bs-target="#staticBackdrop" > </div>
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary" >Выбрать этот адрес</button> */}
      </div>
    </div>
  </div>
</div>
          <div class='d_flex'>
       
          <div class='tt h-65 img_menu__1 img_menu__2'>

<div class='item_text mb-10 the_same item_text__'>
               THE SAME
            </div>

<div class=' ta-c bt_115 bott_'>
THE SAME DESSERT
</div>

<div class='df_center w-100' >

<div class='zakaz_bottom_1  zakaz_bottom_3 ml-10_ ml-10__' onClick={static_click} data-bs-toggle="modal" data-bs-target="#staticBackdrop">

</div>

</div>     
<div class=' ta-c ta-c_1 mb_-3' >
ПОЛУЧИ ПОДАРОК  
</div>


{/* <div class='present_for_you'>
<div class='present_for_you_1'>
PRESENT

<div class='present_for_you_2'>
  Пройдите два простых шага
</div>
<div class='present_for_you_2 present_for_you_3'>
  <div class='stape'> STAPE 1</div>  
</div>
<div class='present_for_you_4 present_for_you_3'>
  Подскажите, как вас зовут ?
</div>
<input type="text" class="input_4 height " placeholder="Ваше имя"></input>
<input type="text" class="input_4 height " placeholder="Ваше имя"></input>
<div class='present_for_you_2 present_for_you_3'>
  <div class='stape stape2'> STAPE 2</div>  
</div>
</div>

</div> */}


<img class='img_menu img_menu__' src='https://sun9-41.userapi.com/impg/CZcciQVm8JSr4fZeqjy5fdvSD5ihhO4Na-k2kQ/faM475UVXhc.jpg?size=720x1080&quality=96&sign=6296ad7b6815ae18baebdcfb1948a75f&type=album'/>
{/* <div class="but_1 top-50" ><div href="/" class="ddott ml-5 ">DESSERT</div></div> */}

</div>
          <div class='tt h-65 photo_ img_menu__2'>
         <div class='item_text mb-10 item_text__ ' >
                        ЧИЗКЕЙКИ
                     </div>
         <div class=' ta-c bt_115 bott_'>
          CHEESECAKES
</div>

<div class='df_center w-100' onClick={set_message1}>

<a href='#title'class='zakaz_bottom_1 ml-10_ ml-10__ zakaz_bottom_1_1'>
  
</a>

</div>     
<div class=' ta-c ta-c_1 mb_-3'>
ЧИЗКЕЙКИ
</div>



         <img class='img_menu height_80' src='https://sun9-47.userapi.com/impg/kvlA_w6pv4wmxBqcqS5vtACjh1XQhsJNhLWUsQ/rtdPMljif3k.jpg?size=720x1080&quality=96&sign=866d06a9b8b1b8c20343e4e1e6efc041&type=album'/>
         {/* <div class="but_1 top-50" ><div href="/" class="ddott ml-5 ">DESSERT</div></div> */}

         </div>
       


         <div class='tt h-65 photo_ img_menu__3'>
         <div class='item_text mb-10 item_text__ '>
                        ЧИЗКЕЙКИ
                     </div>
         <div class=' ta-c bt_115 bott_'>
         CHEESECAKES
</div>

<div class='df_center w-100' onClick={set_message1}>

<a href='#title' class='zakaz_bottom_1 ml-10_ ml-10__ zakaz_bottom_1_1'>
  
</a>

</div>     
<div class=' ta-c ta-c_1 mb_-3'>
ЧИЗКЕЙКИ
</div>



         <img class='img_menu height_80' src='https://sun9-47.userapi.com/impg/kvlA_w6pv4wmxBqcqS5vtACjh1XQhsJNhLWUsQ/rtdPMljif3k.jpg?size=720x1080&quality=96&sign=866d06a9b8b1b8c20343e4e1e6efc041&type=album'/>
         {/* <div class="but_1 top-50" ><div href="/" class="ddott ml-5 ">DESSERT</div></div> */}

         </div>
         <div class='tt h-65 img_menu__1 img_menu__3 mt-45p'>

         <div class='item_text mb-10 the_same item_text__'>
                        THE SAME
                     </div>

<div class=' ta-c bt_115 bott_'>
THE SAME DESSERT
</div>

<div class='df_center w-100'>

<div class='zakaz_bottom_1 ml-10_ ml-10__'  onClick={static_click} data-bs-toggle="modal" data-bs-target="#staticBackdrop">

</div>

</div>     
<div class=' ta-c ta-c_1 mb_-3'>
ПОЛУЧИ ПОДАРОК  
</div>


<div class='present_for_you'>
<div class='present_for_you_1'>

</div>

</div>
<img class='img_menu img_menu__' src='https://sun9-41.userapi.com/impg/CZcciQVm8JSr4fZeqjy5fdvSD5ihhO4Na-k2kQ/faM475UVXhc.jpg?size=720x1080&quality=96&sign=6296ad7b6815ae18baebdcfb1948a75f&type=album'/>
{/* <div class="but_1 top-50" ><div href="/" class="ddott ml-5 ">DESSERT</div></div> */}

</div>
<div class='tt h-65 photo_ mr-15_'>
<div class='item_text mb-10 item_text__'>
                        СЫРКИ
                     </div>


<div class=' ta-c bt_115 bott_ '>
CHEESE
</div>

<div class='df_center w-100'>

<a href='#title' class='zakaz_bottom_1 ml-10_ ml-10__ zakaz_bottom_1_1'>

</a>

</div>     
<div class=' ta-c ta-c_1 mb_-3'>
СЫРКИ
</div>



<img class='img_menu height_80' src='https://sun9-79.userapi.com/impg/vmdNQ94fFqY9ClbIco3ZaMheAPbIXGeFCfUUZA/9H6VusaCjUg.jpg?size=720x1080&quality=96&sign=f8ff9c3ae6a60ebd789f2353f1d56042&type=album'/>
{/* <div class="but_1 top-50" ><div href="/" class="ddott ml-5 ">DESSERT</div></div> */}

</div>
</div>

         {/* <div class=' ta-c'>
THE SAME DESSERT
</div>

<div class='df_center w-100'>

<div class='zakaz_bottom_1 ml-10_'>
  
</div>

</div>     
<div class=' ta-c ta-c_1'>
ПОЛУЧИ ПОДАРОК  
</div> */}

  {/* <div class='menu_nach'>
    <div class='content'>


  <div class='but_filters1'> 
Популярное
  </div>   
  <div class='but_filters1'> 
Акции
  </div>   
  <div class='but_filters1'> 
Праздник
  </div>   
  <div class='but_filters1'> 
Диета
  </div> 
  <div class='but_filters1'> 
Для детей
  </div> 
  <div class='but_filters1'> 
Для детей
  </div> 
  <div class='but_filters1'> 
Для детей
  </div> 
  <div class='but_filters1'> 
Для детей
  </div> 

  </div> 
    <div class='menu_nach_1'>

    <div class='but_filters'> 
    <svg width="35px" class='svg_filters' height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class='svg_filters' d="M19 4V10M19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14M19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14M19 14V20M12 4V16M12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16ZM5 8V20M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z"  stroke-width="1.5" stroke-linecap="round"/>
</svg>
    Фильтры</div>        
    </div>

  </div> */}
  <div class='title' id='title'> Desserts</div>
  <div class='menu_container1'>
    <div class='menu_items w-100 category'>





    {setdeviceRef?.current?.map(device =>

    
<div key={device.id} class='mt-20 col-md-4 col-sm-6 cart display_menu_item pr_40' onClick={() => navigate(ITEM_ROUTE + '/' + device.id)}>
  <div class='item_text_0'>
{device.name}
</div>
<div class='w-100 img_menu_cintainer'>
<img class='menu_item img_menu_ width_item'  src={device.img1}/>
</div>
  <div>
<div class='menu_info'>
{device.title}
    </div>
    <div class='item_text_1 price_it'>
    Купить
    <div class='item_text_2'>
    {device.price}Р
    </div>
    </div>
</div>
<div class='cart_line'>
</div>
</div>
        // <Checkitem key={device.id} device={device} device1={device1} />
    )}
            
    


            <div class='w-100 d-flexx '>
<div class='title title2_ ptmt60'> О Компании</div>
<div class='text_company'>
  <div class='text_company_ text_company___'>
  Добро пожаловать в TSD
  </div>
  <div class='text_company___'>

  – ваш собственный сладкий рай, где каждый кусочек является произведением искусства! Мы - молодой и динамично развивающийся бренд, специализируемся на создании высококачественных чизкейков и разнообразной кондитерской продукции. Наша миссия – делать жизнь сладкой, а особые моменты - незабываемыми.
  </div>

 <div class='line_text_2'>
<div class='text_company_ text_company___'>
  Наше начало
  </div>
  <div class='text_company___'>

  The Same Dessert зародился из страсти к чизкейкам и желания делиться радостью с каждым клиентом. Мы начали свой путь как небольшая домашняя пекарня, которая стремилась предложить нечто большее, чем просто десерты. Со временем мы превратились в любимое место среди сладкоежек благодаря нашему уникальному вкусу, высокому качеству продукции и отзывчивому обслуживанию клиентов.</div>
</div>
<div class='line_text_2'>
<div class='text_company_ text_company___'>
Наши ценности
  </div>
  <div class='text_company___ b-20P'>

  1. Качество: Ни один десерт не покидает нашу кухню, если он не соответствует нашим высоким стандартам качества.<br/><br/>
2. Творческий подход: Мы всегда ищем новые идеи и рецепты, чтобы поражать ваше воображение и вкусовые рецепторы.<br/><br/>
3. Забота о клиентах: Пожелания и удовлетворенность клиентов для нас – превыше всего. Мы на связи 24/7, чтобы обеспечить вам лучший сервис.<br/><br/>
4. Устойчивое развитие: Мы прилагаем усилия для использования экологичной упаковки и непрерывно работаем над снижением отпечатка на окружающую среду.</div>
</div>
</div>




</div> 

<div class='w-100 d-flexx'>
<div class='title title2_'> Контакты</div>
<div class='display_svg'>
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
    
  </div>
        </div>
    );
});

export default Menu;
