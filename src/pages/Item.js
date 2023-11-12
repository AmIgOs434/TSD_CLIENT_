import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";
import { useNavigate, useParams } from 'react-router-dom';
import useState from 'react-usestateref'
import $ from "jquery"
import photo from '../css/img/egg.png'
import photo1 from '../css/img/slivki.png'
import jwt_decode from "jwt-decode";
import { Create_Basket_Device, Device_Basket_Put, delete_Basket_device, fetch2_Basket, fetchOneDevice } from '../http/deviceAPI';
import { BASKET_ROUTE } from '../utils/consts';
const Item  = observer( ()=>{
   const {id} = useParams()
   const [device,setdevice,setdeviceRef] = useState(null)
   const [userId,setuserId,setuserIdRef] = useState(0)
   const [basket_device_id,setbasket_device_id,setbasket_device_idRef] = useState(0)
   const [final_price,setfinal_price,setfinal_priceIdRef] = useState(0)
   const [fin_price,setfin_price,fin_priceIdRef] = useState(0)
   const [quantity,setquantity,setquantityRef] = useState('none')
   const [price,setprice,setpriceRef] = useState()
   const [price1,setprice1,setpriceRef1] = useState()
   const [activeSvg, setactiveSvg,activeSvgRef] = useState(null);
   const handleClick = e => {
      setactiveSvg(null)
        $('.item_color_1_text').removeClass('description_activ')
        $('.item_color_2_text').removeClass('description_activ')
        $('.item_color_3_text').removeClass('description_activ')

        $('.item_color_1').removeClass('item_color_activ')
        $('.item_color_2').removeClass('item_color_activ')
        $('.item_color_3').removeClass('item_color_activ')
        const link = e.target.getAttribute('activ')
        $(`.${link}`).addClass('item_color_activ')
        $(`.${link}_text`).addClass('description_activ')

  
      };
      const check = async()=>{
        const devic = await fetch2_Basket(id,setuserIdRef.current)
       
       
       console.log(devic)
       if(devic.data != null){
         setbasket_device_id(devic.data.id)
         setquantity(devic.data.quantity)
         setprice1(devic.data.fin_price)
         setprice(devic.data.final_price)
         $('.add_basket_2').addClass('passive')
         $('.add_basket_').removeClass('passive')
       }
      }
      const addbasket_device = async()=>{
     if(setquantityRef.current==='none'){
      $('.add_basket_2').addClass('passive')
      $('.add_basket_').removeClass('passive')
      setquantity(1)
      console.log(setdeviceRef.current)
      console.log(setdeviceRef.current.description1)
      
      const device = await Create_Basket_Device(id,setuserIdRef.current,setfinal_priceIdRef.current,setdeviceRef.current.img[0].img,setdeviceRef.current.name,setdeviceRef.current.description1)
     console.log(device)
      setbasket_device_id(device.data.id)
      setprice1(device.data.fin_price)
      setprice(device.data.fin_price)
     }
     if(setquantityRef.current===0){
     
     await delete_Basket_device(setbasket_device_idRef.current)
$('.add_basket_').addClass('passive')
$('.add_basket_2').removeClass('passive')
setquantity('none')
     }

         };

         const plus_quantity = async()=>{
            setprice1(setpriceRef1.current+setpriceRef.current)
            setquantity(setquantityRef.current+1)
            setfin_price(setquantityRef.current*setfinal_priceIdRef.current)
           await Device_Basket_Put(id,setuserIdRef.current,setquantityRef.current,setfinal_priceIdRef.current,fin_priceIdRef.current)
          
      
          };
          const minus_quantity = async()=>{
            setprice1(setpriceRef1.current-setpriceRef.current)
            setquantity(setquantityRef.current-1)
            setfin_price(setquantityRef.current*setfinal_priceIdRef.current)
            await Device_Basket_Put(id,setuserIdRef.current,setquantityRef.current,setfinal_priceIdRef.current,fin_priceIdRef.current)
            addbasket_device()
          };

    useEffect(() => {
      fetchdevice()
      check()
      $(`.item_color_1`).addClass('item_color_activ')
      $(`.item_color_1_text`).addClass('description_activ')
    }, [])
    
    const fetchdevice = async()=>{
      const storedToken = localStorage.getItem('token');
      const userId = jwt_decode(storedToken)
      setuserId(userId.id)
     let device1
     device1 = await fetchOneDevice(id)
     setdevice(device1)
     setfinal_price(device1.price)
     console.log(setdeviceRef.current)
    }

    const navigate = useNavigate()
    return (
        <div class='item d-flex fw' >
                

                <div class='col-md-6 col-sm-12 col-sm-12_ '>
            
                      <div class='df_img tt'>
                      
                      
                    
                     <div class='item_text mb-10'>
                        ЧИЗКЕЙКИ
                     </div>
                     
                     <img  src ={setdeviceRef?.current?.img[1].img} class="d-block w-100 dostav img_i " alt="..."/>

                  
                 
                     <img  src ={setdeviceRef?.current?.img[0].img} class="d-block w-100 dostav img_i" alt="..."/>
                     <img  src ={setdeviceRef?.current?.img[2].img} class="d-block w-100 dostav img_i" alt="..."/>
                     <img  src ={setdeviceRef?.current?.img[3].img} class="d-block w-100 dostav img_i" alt="..."/>
               
                  </div>
                  <div id="carouselExampleCaptions" class="carousel carousel1 slide carousel-dark">
                  <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  
                  </div>
                  <div class="carousel-inner">
                  <div class='item_text mb-10'>
                        ЧИЗКЕЙКИ
                     </div>
                  <div class="carousel-item active">
                     <img  src ={setdeviceRef?.current?.img[0].img} class="d-block w-100 dostav img_i" alt="..."/>

                  </div>
                  <div class="carousel-item">
                     <img  src ={setdeviceRef?.current?.img[1].img} class="d-block w-100 dostav img_i" alt="..."/>

                  </div>
                  <div class="carousel-item">
                     <img  src ={setdeviceRef?.current?.img[2].img} class="d-block w-100 dostav img_i" alt="..."/>

                  </div>

                  <div class="carousel-item">
                     <img src ={setdeviceRef?.current?.img[3].img} class="d-block w-100 dostav img_i" alt="..."/>

                  </div>
          
                  </div>
                  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Предыдущий</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Следующий</span>
                  </button>
                  </div>
                </div>

                <div class='col-md-6 col-sm-12 bgc1'>
                  
                     <div class='item_text_ mb-10 fs-20'>
                        НАБОР ИЗ 4-х ЧИЗКЕЙКОВ
                     </div>
                     
                     <div class='item_text_2 item_text_3'>
                     {setdeviceRef?.current?.title_desk}
                     </div>

                     <div class='item_choose'>
                          <div activ={'item_color_1'} onClick={handleClick} class='item_choose_text item_color_1'>
                             Описание
                          </div>
                          <div activ={'item_color_2'} onClick={handleClick} class='item_choose_text item_color_2'>
                             Ингридиенты
                          </div>
                          <div activ={'item_color_3'} onClick={handleClick} class='item_choose_text item_color_3'>
                             Хранение
                          </div>
                          
                     </div>

                  
                     <div class='description item_color_1_text'>
   
 {/* {setdeviceRef?.current?.info.map(device =>
  <div class='' key={device.id}>  
 {device.description}
 </div>
 )} */}
 
 <div class='mb-10_'>{setdeviceRef?.current?.description1}</div>

<div class='mt-20'>{setdeviceRef?.current?.description2}</div>
<div class=''>{setdeviceRef?.current?.description3}</div>
<div class=''>{setdeviceRef?.current?.description4}</div>
<div class='mt-20 mb-10_'>     
{setdeviceRef?.current?.description5}
</div>
<div class='mt-20'> 
{setdeviceRef?.current?.description7}
</div>

                     </div>



                     <div class='description item_color_2_text '>
              
<div class='ingrid_item'>

<div class='mb-40'>
{setdeviceRef?.current?.title_ingrid}
</div>
<div class='title_ingr'>Главные ингридиенты </div>

 {setdeviceRef?.current?.ingrid.map(device =>


<div class='col-md-6_' key={device.id}>
   <div class='dd-f '>
   <img class='ingridient' src={device.img}/>    
<div class='ingrid_text'>
   {device.name}
</div>

   </div>
  
</div>


 )}




</div>








                     </div>



                     <div class='description item_color_3_text'>
                     <div class='mb-40'>
   Наша продукция имеет максимально сбалансированный состав ю Для рациона, в качестве питательной, богатой важнейшими компонентами добавки, мы предлагаем кедровый жмых. Это отжатые ореховые ядра после получения кедрового масличка. Он из лучшего ореха, содержит меньше жиров, чем в ядре.
</div>
<div class='mt-20 icon_'> 

<div class='icon_text_1 col-25'>

<svg class='width' fill='#9d3b3b'  viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <title>time-alarm</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="invisible_box" data-name="invisible box">
      <rect width="48" height="48" fill="none"/>
    </g>
    <g id="icons_Q2" data-name="icons Q2">
      <path d="M24,12A15,15,0,1,1,9,27,15,15,0,0,1,24,12m0-4A19,19,0,1,0,43,27,19,19,0,0,0,24,8Z"/>
      <path d="M32,33a1.7,1.7,0,0,1-1-.3l-9-4.6V19a2,2,0,0,1,4,0v6.9l7,3.4a1.9,1.9,0,0,1,.7,2.7A1.9,1.9,0,0,1,32,33Z"/>
      <path d="M6,12a2.1,2.1,0,0,1-1.6-.8,2,2,0,0,1,.4-2.8l8-6a2,2,0,0,1,2.8.4,2,2,0,0,1-.4,2.8l-8,6A1.9,1.9,0,0,1,6,12Z"/>
      <path d="M42,12a1.9,1.9,0,0,1-1.2-.4l-8-6a2,2,0,0,1-.4-2.8,2,2,0,0,1,2.8-.4l8,6a2,2,0,0,1,.4,2.8A2.1,2.1,0,0,1,42,12Z"/>
    </g>
  </g>
</svg>
<div class='icon_text_flex'>


<div class='icon_text bg-color'>
{setdeviceRef?.current?.srok_godn}
</div>
<div class='icon_text'>
Срок годности
</div>
</div>


</div>

<div class='icon_text_1 col-25'>
<svg class='width' stroke='#9d3b3b'viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1299 3V5M15.1299 5V9.98468M15.1299 5L14.1299 4M15.1299 5L16.1299 4M15.1299 9.98468V10.0153M15.1299 9.98468L13.5 9.04366M15.1299 9.98468L15.1564 10M15.1299 10.0153V15M15.1299 10.0153L15.1564 10M15.1299 10.0153L13.5 10.9562M15.1299 15V17M15.1299 15L14.1299 16M15.1299 15L16.1299 16M15.1564 10L19.3998 12.4499M15.1564 10L19.3997 7.55001M19.3998 12.4499L21.2186 13.5M19.3998 12.4499L19.9121 14.3624M19.3998 12.4499L21.3119 11.9376M21.2183 6.5L19.3997 7.55001M19.3997 7.55001L19.9121 5.63757M19.3997 7.55001L21.3123 8.06241M7 15.9998C6.44772 15.9998 6 16.4475 6 16.9998C6 17.5521 6.44772 17.9998 7 17.9998C7.55228 17.9998 8 17.5521 8 16.9998C8 16.4475 7.55228 15.9998 7 15.9998ZM7 15.9998L7.00707 14M7 16.9998L7.00707 17.0069M11 16.9998C11 19.209 9.20914 20.9998 7 20.9998C4.79086 20.9998 3 19.209 3 16.9998C3 15.9854 3.37764 15.0591 4 14.354L4 6C4 4.34315 5.34315 3 7 3C8.65685 3 10 4.34315 10 6V14.354C10.6224 15.0591 11 15.9854 11 16.9998Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



<div class='icon_text_flex'>
<div class='icon_text bg-color'>
{setdeviceRef?.current?.temp}
</div>
<div class='icon_text'>
Темп. хранения
</div>
</div>

</div>

<div class='icon_text_1 col-25'>
<svg class='width' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g clip-path="url(#a)" fill="#9d3b3b">

<path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/>

</g>

<defs>

<clipPath id="a">

<path fill="#9d3b3b" d="M0 0h24v24H0z"/>

</clipPath>

</defs>

</svg>
<div class='icon_text_flex'>
<div class='icon_text bg-color'>
{setdeviceRef?.current?.lumus}
</div>
<div class='icon_text'>
Рек. Освещение
</div>
</div>
</div>
<div class='icon_text_1 col-25' >
<svg class='width'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0066 3.25608C16.8483 2.85737 19.1331 2.8773 22.2423 3.65268C22.7781 3.78629 23.1038 4.32791 22.9699 4.86241C22.836 5.39691 22.2931 5.7219 21.7573 5.58829C18.8666 4.86742 16.9015 4.88747 15.4308 5.20587C13.9555 5.52524 12.895 6.15867 11.7715 6.84363L11.6874 6.89494C10.6044 7.55565 9.40515 8.28729 7.82073 8.55069C6.17734 8.82388 4.23602 8.58235 1.62883 7.54187C1.11607 7.33724 0.866674 6.75667 1.0718 6.24513C1.27692 5.73359 1.85889 5.48479 2.37165 5.68943C4.76435 6.6443 6.32295 6.77699 7.492 6.58265C8.67888 6.38535 9.58373 5.83916 10.7286 5.14119C11.855 4.45445 13.1694 3.6538 15.0066 3.25608Z" fill="#9d3b3b"/>
<path d="M22.2423 7.64302C19.1331 6.86765 16.8483 6.84772 15.0066 7.24642C13.1694 7.64415 11.855 8.44479 10.7286 9.13153C9.58373 9.8295 8.67888 10.3757 7.492 10.573C6.32295 10.7673 4.76435 10.6346 2.37165 9.67977C1.85889 9.47514 1.27692 9.72393 1.0718 10.2355C0.866674 10.747 1.11607 11.3276 1.62883 11.5322C4.23602 12.5727 6.17734 12.8142 7.82073 12.541C9.40515 12.2776 10.6044 11.546 11.6874 10.8853L11.7715 10.834C12.895 10.149 13.9555 9.51558 15.4308 9.19621C16.9015 8.87781 18.8666 8.85777 21.7573 9.57863C22.2931 9.71224 22.836 9.38726 22.9699 8.85275C23.1038 8.31825 22.7781 7.77663 22.2423 7.64302Z" fill="#9d3b3b"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9998 10.0266C18.6526 10.0266 18.3633 10.2059 18.1614 10.4772C18.0905 10.573 17.9266 10.7972 17.7089 11.111C17.4193 11.5283 17.0317 12.1082 16.6424 12.7555C16.255 13.3996 15.8553 14.128 15.5495 14.8397C15.2567 15.5213 14.9989 16.2614 14.9999 17.0117C15.0006 17.2223 15.0258 17.4339 15.0604 17.6412C15.1182 17.9872 15.2356 18.4636 15.4804 18.9521C15.7272 19.4446 16.1131 19.9674 16.7107 20.3648C17.3146 20.7664 18.0748 21 18.9998 21C19.9248 21 20.685 20.7664 21.2888 20.3648C21.8864 19.9674 22.2724 19.4446 22.5192 18.9522C22.764 18.4636 22.8815 17.9872 22.9393 17.6413C22.974 17.4337 22.9995 17.2215 22.9998 17.0107C23.0001 16.2604 22.743 15.5214 22.4501 14.8397C22.1444 14.128 21.7447 13.3996 21.3573 12.7555C20.968 12.1082 20.5803 11.5283 20.2907 11.111C20.073 10.7972 19.909 10.573 19.8382 10.4772C19.6363 10.2059 19.3469 10.0266 18.9998 10.0266ZM20.6119 15.6257C20.3552 15.0281 20.0049 14.3848 19.6423 13.782C19.4218 13.4154 19.2007 13.0702 18.9998 12.7674C18.7989 13.0702 18.5778 13.4154 18.3573 13.782C17.9948 14.3848 17.6445 15.0281 17.3878 15.6257L17.3732 15.6595C17.1965 16.0704 16.9877 16.5562 17.0001 17.0101C17.0121 17.3691 17.1088 17.7397 17.2693 18.0599C17.3974 18.3157 17.574 18.5411 17.8201 18.7048C18.06 18.8643 18.4248 19.0048 18.9998 19.0048C19.5748 19.0048 19.9396 18.8643 20.1795 18.7048C20.4256 18.5411 20.6022 18.3156 20.7304 18.0599C20.8909 17.7397 20.9876 17.3691 20.9996 17.01C21.0121 16.5563 20.8032 16.0705 20.6265 15.6597L20.6119 15.6257Z" fill="#9d3b3b"/>
<path d="M14.1296 11.5308C14.8899 11.2847 15.4728 12.076 15.1153 12.7892C14.952 13.1151 14.7683 13.3924 14.4031 13.5214C13.426 13.8666 12.6166 14.3527 11.7715 14.8679L11.6874 14.9192C10.6044 15.5799 9.40516 16.3115 7.82074 16.5749C6.17735 16.8481 4.23604 16.6066 1.62884 15.5661C1.11608 15.3615 0.866688 14.7809 1.07181 14.2694C1.27694 13.7578 1.8589 13.509 2.37167 13.7137C4.76436 14.6685 6.32297 14.8012 7.49201 14.6069C8.67889 14.4096 9.58374 13.8634 10.7286 13.1654C11.8166 12.5021 12.9363 11.9171 14.1296 11.5308Z" fill="#9d3b3b"/>
</svg>
<div class='icon_text_flex'>
<div class='icon_text bg-color' >
{setdeviceRef?.current?.vlaga}
</div>
<div class='icon_text'>
Рек. Влажность
</div>
</div>

</div>

</div>

                     </div>


<div class='add_basket'>
   <div class='add_basket_2' onClick={()=> addbasket_device()}>
  Добавить в корзину
   </div>

   <div class='add_basket_ passive'>
   <div class='add_basket_1' onClick={()=>navigate(BASKET_ROUTE)}>

<svg width="28px "  class='basket marg_r-10'   link='basket' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
  
    <g id="Iconly/Bold/Bag"  link='basket' stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
        <g id="Bag"  link='basket' transform="translate(3.000000, 2.000000)" class='fill_tsd'>
            <path   link='basket' class='basket fill_d' d="M9.00494392,-1.77635684e-14 C11.684893,-1.77635684e-14 13.8881654,2.10590955 14,4.77432394 L13.9738707,4.77432394 C13.977008,4.85188923 13.9621034,4.9291268 13.9303218,5 L14.0864529,5 C15.3034636,5 16.5778419,5.8435091 17.0888377,7.87980254 L17.1443642,8.12007277 L17.913261,14.3147362 C18.46659,18.2657474 16.3049606,19.9272845 13.3562029,19.997658 L13.158474,20 L4.86852947,20 C1.87177637,20 -0.437455746,18.9079745 0.0702808406,14.5835537 L0.104904598,14.3147362 L0.882639271,8.12007277 C1.26614074,5.92718531 2.55360997,5.06224784 3.79411983,5.00326364 L3.9317127,5 L4.00988785,5 C3.99670405,4.92534832 3.99670405,4.84897562 4.00988785,4.77432394 C4.1217224,2.10590955 6.32499483,-1.77635684e-14 9.00494392,-1.77635684e-14 Z M6.09699673,8.32929048 C5.60889332,8.32929048 5.21320733,8.73655117 5.21320733,9.23893269 C5.21320733,9.74131421 5.60889332,10.1485749 6.09699673,10.1485749 C6.58510014,10.1485749 6.98078613,9.74131421 6.98078613,9.23893269 L6.98078613,9.23893269 L6.97390016,9.1248291 C6.91936452,8.6763055 6.54755372,8.32929048 6.09699673,8.32929048 Z M11.8858173,8.32929048 C11.3977139,8.32929048 11.0020279,8.73655117 11.0020279,9.23893269 C11.0020279,9.74131421 11.3977139,10.1485749 11.8858173,10.1485749 C12.3739207,10.1485749 12.7696067,9.74131421 12.7696067,9.23893269 C12.7696067,8.73655117 12.3739207,8.32929048 11.8858173,8.32929048 Z M8.96574994,1.30238454 C7.04163953,1.30238454 5.48183986,2.85682476 5.48183986,4.77432394 C5.49502365,4.84897562 5.49502365,4.92534832 5.48183986,5 L12.4932089,5 C12.4653783,4.92794354 12.4506323,4.85152772 12.44966,4.77432394 C12.44966,2.85682476 10.8898603,1.30238454 8.96574994,1.30238454 Z" id="Combined-Shape"></path>
        </g>
    </g>
</svg>
 {setpriceRef1.current}
   </div>
   <div class='d-flex ai-center fs-17'>
   <svg class='width-30' onClick={()=>minus_quantity()} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="none"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8L11 13.5858L9.70711 12.2929C9.31658 11.9024 8.68342 11.9024 8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071L11.2059 16.6201C11.2209 16.6351 11.2363 16.6497 11.252 16.6637C11.4352 16.87 11.7024 17 12 17C12.2976 17 12.5648 16.87 12.748 16.6637C12.7637 16.6497 12.7791 16.6351 12.7941 16.6201L15.7071 13.7071C16.0976 13.3166 16.0976 12.6834 15.7071 12.2929C15.3166 11.9024 14.6834 11.9024 14.2929 12.2929L13 13.5858L13 8Z" />
</svg>


<div class='inp_numb'>{setquantityRef.current}</div>
  

<svg class='width-30' onClick={()=>plus_quantity()}viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="none"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16L13 10.4142L14.2929 11.7071C14.6834 12.0976 15.3166 12.0976 15.7071 11.7071C16.0976 11.3166 16.0976 10.6834 15.7071 10.2929L12.7941 7.37993C12.7791 7.36486 12.7637 7.35031 12.748 7.33627C12.5648 7.12998 12.2976 7 12 7C11.7024 7 11.4352 7.12998 11.252 7.33627C11.2363 7.3503 11.2209 7.36486 11.2059 7.37993L8.29289 10.2929C7.90237 10.6834 7.90237 11.3166 8.29289 11.7071C8.68342 12.0976 9.31658 12.0976 9.70711 11.7071L11 10.4142L11 16Z" />
</svg>
   </div>
   </div>

</div>
                </div>

        </div>
    );
});

export default Item;
