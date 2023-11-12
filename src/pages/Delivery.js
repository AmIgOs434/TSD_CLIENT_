import React, { useEffect} from 'react';
import jwt_decode from "jwt-decode";
import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import useState from 'react-usestateref'
import '../css/one.css'
import '../static/video.mp4'
import videos from './video.mp4'
import { MENU_ROUTE } from '../utils/consts';
import $ from 'jquery'
import { CreateOrder, CreateOrderDevice, delete_basket_device, fetch_Basket_by_userId, fetch_my_Basket } from '../http/deviceAPI';
import axios from 'axios';
import set_message from './message';
const Delivery  = observer( ()=>{


  const getMessage = async(msg) => {
    await axios.post(`https://api.telegram.org/bot6407304230:AAGVM-rG1QT1DRq1UCziJA0tgoJpDBdzbqw/sendMessage?chat_id=-1002049438256&parse_mode=html&text=${msg}`)
    }


  const [name,setname,setnameRef] = useState(0)
  const [poluch,setpoluch,setpoluchRef] = useState(0)
  const [adress,setadress,setadressRef] = useState(0)
  const [otkrytka,setotkrytka,setotkrytkaRef] = useState()
  const [komment,setkomment,setkommentRef] = useState()

  const [name_poluch,setname_poluch,setname_poluchRef] = useState(0)
  const [familia_poluch,setfamilia_poluch,setfamilia_poluchRef] = useState(0)
  const [phone_poluch,setphone_poluch,setphone_poluchRef] = useState(0)


  const GetBasket = async() => {
    const storedToken = localStorage.getItem('token');
    const userId = jwt_decode(storedToken)
    const my_basket = await fetch_Basket_by_userId(userId.id)

    setadress(my_basket.adress)



  }


  const CreateOrder1 = async() => {
    console.log(setnameRef.current===0)
    if(setnameRef.current===0 || setnameRef.current.length===0){
      set_message("Введите ваше имя",'error')
      return
    }
    if( setpoluchRef.current===0 || setpoluchRef.current.length===0){
      set_message("Выберите получателя",'error')
      return
    }
   
    if(setname_poluchRef.current===0 || setname_poluchRef.current.length===0){
      set_message("Введите иия получателя",'error')
      return
    }
    if(setfamilia_poluchRef.current===0 || setfamilia_poluchRef.current.length===0){
      set_message("Введите фамилию получателя",'error')
      return
    }
    if(setphone_poluchRef.current===0 || setphone_poluchRef.current.length===0){
      set_message("Введите телефон получателя",'error')
      return
    }
    const storedToken = localStorage.getItem('token');
    const userId = jwt_decode(storedToken)
    const my_basket = await fetch_Basket_by_userId(userId.id)
    const  basket_device=  await fetch_my_Basket(userId.id)
 
if(basket_device.data.length===0){
  set_message("В вашей корзинке пусто",'error')
      return
}

const order= await CreateOrder(setnameRef.current,setpoluchRef.current,my_basket.adress,setphone_poluchRef.current,setotkrytkaRef.current,
  setkommentRef.current,userId.id,setname_poluchRef.current,setfamilia_poluchRef.current)


Promise.all(basket_device.data.map(async device => {
  let response
  try {
    response = await CreateOrderDevice(device.img,device.final_price,device.quantity,order.data.id, device.name)
    await delete_basket_device(device.id)
  } catch (err) {
    return err;
  }
  return response
})).then(results => {
console.log(results)
})


  }
  const handleClick = e => {

      $('.otprav_1').removeClass('category_item_activ')
      $('.otprav_2').removeClass('category_item_activ')
      $('.otprav_3').removeClass('category_item_activ')

      const link = e.target.getAttribute('link')
      if(link==='otprav_3'){
        setname('Anonim')
      }
     
      $(`.${link}`).addClass('category_item_activ')
    };

    const handleClick_1 = e => {

      $('.poluch_1').removeClass('category_item_activ')
      $('.poluch_2').removeClass('category_item_activ')


      const link = e.target.getAttribute('link')
      if(link==='poluch_1'){
        setpoluch('Получаетль сам клиент')
      }
      if(link==='poluch_2'){
        setpoluch('Заказ подарочный')
      }
      
      $(`.${link}`).addClass('category_item_activ')
    };

    const handleClick_2 = e => {

      $('.otkr_1').removeClass('category_item_activ')
      $('.otkr_2').removeClass('category_item_activ')
     
      // form-control2_active
      const link = e.target.getAttribute('link')
      if(link==='otkr_1'){
        $('.form-control2').addClass('form-control2_active')
      }
      if(link==='otkr_2'){
        $('.form-control2').removeClass('form-control2_active')
      }
   
      $(`.${link}`).addClass('category_item_activ')
    };
    const handleClick_3 = e => {

      $('.otkr_3').removeClass('category_item_activ')
      $('.otkr_4').removeClass('category_item_activ')
     
      // form-control2_active
      const link = e.target.getAttribute('link')
      if(link==='otkr_3'){
        $('.form-control3').addClass('form-control2_active')
      }
      if(link==='otkr_4'){
        $('.form-control3').removeClass('form-control2_active')
      }
   
      $(`.${link}`).addClass('category_item_activ')
    };
    useEffect(() => {
      GetBasket()
    }, [])
    
   

    const navigate = useNavigate()
    return (
      <div class='bg'> 
      <div class='delivery_container'>

        <div class='del_cont_1'>
        <div class='del_text_1'>
        Оформление 
      </div>

      <div class='delivery_text_1'>
      Отправитель
      </div>
      <div class='delivery_text_2'>
       Как вы хотите , чтобы вас назвали ?
      </div>

      <div class='category1'> 

<div class='d-flex1 w-100'>


      {/* <div class='category_item otprav_1 df_center' onClick={handleClick}  link='otprav_1'> 
      <div class='d-flex'>
      <svg id="_x30_1" width='13px  ' version="1.1" link='otprav_1' onClick={handleClick} viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" ><g><ellipse cx="256" link='otprav_1' class='' onClick={handleClick} cy="130" rx="110" ry="130"/><path link='otprav_1' onClick={handleClick} class='' d="M36,478.191C36,390.825,134.497,320,256,320s220,70.825,220,158.191v0C476,496.863,460.863,512,442.192,512H69.808   C51.137,512,36,496.863,36,478.191L36,478.191z"/></g></svg> 
       <div link='otprav_1' class='ml-3'>
       Николай
        </div>
      </div>
      </div> */}
      <div  class='category_item otprav_2 width_top mt-15 mb-15' onClick={handleClick} onChange={ e => setname(e.target.value)} link='otprav_2'> 
      <input type='text' onClick={handleClick} link='otprav_2' class='input_1 input_1_1 height' placeholder='Ваше имя'/>
   </div>
      <div class='category_item otprav_3 df_center w-410' onClick={handleClick}  link='otprav_3'> 
   Анонимно
   </div>
   </div>

      {/* <div  class='category_item otprav_2 width_top' onClick={handleClick} link='otprav_2'> 
      <input type='text' onClick={handleClick} link='otprav_2' class='input_1 height' placeholder='Придумать имя'/>
   </div> */}

      </div>




      <div class='delivery_text_1'>
      Получатель
      </div>
      <div class='delivery_text_2'>
       Кому вы хотите отправить вкусняшки ?
      </div>
      <div class='category1'> 
      <div class='d-flex w-100'>
      <div class='category_item poluch_1 df_center' onClick={handleClick_1}  link='poluch_1'> 
      Мне
      </div>
      <div class='category_item poluch_2 df_center'onClick={handleClick_1}  link='poluch_2'> 
     Это подарок
      </div>
      </div>
      </div>

      <div class='category1 '> 
      <div class='category_item  mt-0  width_top'> 
     <input type='text' class='input_1 input_1_1 height 'onChange={ e => setname_poluch(e.target.value)} placeholder='Имя'/>
      </div>
      <div class='category_item  mt-0 width_top'> 
      <input type='text' class='input_1  input_1_1 height 'onChange={ e => setfamilia_poluch(e.target.value)} placeholder='Фамилия'/>
      </div>
      <div class='category_item  mt-0 width_top'> 
      <input type='text' class='input_1 input_1_1 height ' onChange={ e => setphone_poluch(e.target.value)}placeholder='Телефон'/>
      </div>
      </div>



      <div class='delivery_text_1'>
      Адрес доставки : 
      </div>
      <div class='delivery_text_3'>
      {setadressRef.current}
      </div>
      <div class='delivery_text_2 mb-20'>
      Если вы заметили неточность, пожалуйста , испрвьте её в разделе "Доставка" вашей корзины.
      </div>


      <div class='delivery_text_1'>
     Открытка
      </div>
      <div class='delivery_text_2'>
       Порадуйте любимых дизайнерской открыткой.
      </div>
      <div class='category1'> 
      <div class='d-flex w-100'>
      <div class='category_item otkr_1 df_center' onClick={handleClick_2}  link='otkr_1'> 
      Добавить
      </div>
      <div class='category_item otkr_2 df_center' onClick={handleClick_2}  link='otkr_2'> 
   Нет , спасибо 
   </div>
   </div>
      </div>
      <textarea class="form-control2" id="exampleFormControlTextarea1" onChange={ e => setotkrytka(e.target.value)} rows="3"></textarea>



      <div class='delivery_text_1'>
     Комментарий к заказу
      </div>
      <div class='delivery_text_2'>
       Оставьте уточняющий комментарий , если требуется.
      </div>
      <div class='category1'> 
      <div class='d-flex w-100'>
      <div class='category_item otkr_3 df_center' onClick={handleClick_3}  link='otkr_3'> 
      Добавить
      </div>
      <div class='category_item otkr_4 df_center' onClick={handleClick_3}  link='otkr_4'> 
   Не добавлять
   </div>
   </div>
      </div>
      <textarea class="form-control3 form-control3_ " id="exampleFormControlTextarea1"onChange={ e => setkomment(e.target.value)}  rows="3"></textarea>


      <div class='zakaz_bottom border w-100 ml-10_ ml-0' onClick={CreateOrder1} >
   Оформить
</div>
        </div>

      </div>
        </div>
    );
});

export default Delivery;
