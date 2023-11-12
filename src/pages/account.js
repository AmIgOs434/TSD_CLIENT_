import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import useState from 'react-usestateref'
import '../css/one.css'
import '../static/video.mp4'
import videos from './video.mp4'
import { MENU_ROUTE } from '../utils/consts';
import $ from 'jquery'
import pencil from '../css/svg/pencil-svgrepo-com.svg'
import { get_user, putUser } from '../http/userAPI';
import jwt_decode from "jwt-decode";
const Delivery  = observer( ()=>{

  

  const [FIO,setFIO,setFIORef] = useState('-')
  const [phone,setphone,setphoneRef] = useState('-')
  const [email,setemail,setemailRef] = useState('-')
  const [pol,setpol,setpolRef] = useState(0)
  const [adres,setadres,setadresRef] = useState('-')
  const [data_rozd,setdata_rozd,setdata_rozdRef] = useState('-')
  useEffect(() => {
    getUser()
    
  }, [])
  const getUser = async() => {
      
    const storedToken = localStorage.getItem('token');
    const userId = jwt_decode(storedToken)
    const user = await get_user(userId.id)
    console.log(user)
   setFIO(user.data.FIO)
   setphone(user.data.phone)
   setemail(user.data.email)
   setpol(user.data.pol)
   setadres(user.data.adress)
   setdata_rozd(user.data.data_rozd)
  

  }
  const putUser1 = async() => {
    const storedToken = localStorage.getItem('token');
    const userId = jwt_decode(storedToken)
  await putUser(userId.id,setphoneRef.current,setemailRef.current,setFIORef.current,setadresRef.current,setpolRef.current,setdata_rozdRef.current)
  getUser()
  }
  const navigate = useNavigate()
    return (
      <div class='bg'> 
                 <div class='account_container'>

                 <div class='dp_f_1'>
                 <div class='del_text_3 '>
       Профиль
        </div> 
      </div>

             
                       <div class='account_container_acc'>
                       <div class='dp_f'>
                 <div class='del_text_2'>
       Личные данные
        </div> 
      </div>
                        <div class='container_acc'>
                  
                          <div class='df_acc'>
                          <svg  data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft" viewBox="0 0 64 64" width ='17px'xmlns="http://www.w3.org/2000/svg"><g id="User"><path d="m32 34a16 16 0 1 0 -16-16 16.01833 16.01833 0 0 0 16 16z"/><path d="m32 46.58594 8.93073-8.93073a24.92054 24.92054 0 0 0 -17.86145 0z"/><path d="m42.9057 38.50836-10.1987 10.19864a.99964.99964 0 0 1 -1.41406 0l-10.19864-10.19864a25.02932 25.02932 0 0 0 -14.0943 22.49164.99942.99942 0 0 0 1 1h48a.99942.99942 0 0 0 1-1 25.02932 25.02932 0 0 0 -14.0943-22.49164z"/></g></svg>
                          <div class='df_acc_1'>
                          Сладкая булочка<img class='pencill_2' data-bs-toggle="modal" data-bs-target="#staticBackdrop" src={pencil} />
                            </div> 
                          </div>


                          <div class=' mt-40 df_mt_0'>


                       <div class=' '>
                       <div class='acc_info_1 '>
                       Дата рождения <img class='pencill_2'  />
                       </div>
                       <div class='acc_info'>
                       {setdata_rozdRef.current}
                       </div>
                          </div>

                          <div class=' ml-80 pt-4__'>
                       <div class='acc_info'>
                       ФИО <img class='pencill_2'  />
                       </div> 
                       <div class='acc_info '>
                       {setFIORef.current}
                       </div>

                          </div>
                          </div>


                          <div class=' mt-40 df_mt_'>

                          <div class=' mt-40'>
                       <div class='acc_info_1'>
                       Email <img class='pencill_2' />
                       </div>
                       <div class='acc_info'>
                       {setemailRef.current}
                       </div></div>

                       <div class='ml-80'>
                       <div class='acc_info_1 '>
                       Phone 
                       </div>
                       <div class='acc_info'>
                       {setphoneRef.current}
                       </div>

                          </div>

                       <div class=' ml-80 pt-4_'>
                       <div class='acc_info'>
                       Пол 
                       </div> 
                       <div class='acc_info '>
                      Мужской   
                       </div>

                          </div>

                          </div>

                       

                          

                        </div>

                       </div>

   
                  
                       <div class='account_container_acc style_1'>
                       <div class='dp_f'>
                 <div class='del_text_2'>
       Ваш адрес
        </div> 
        
      </div>
      <div class=' mt-40 style_1_1'>
                       <div class='acc_info_1 acc_info_1_1'>
                       Ваш адрес <img class='pencill_2 ' />
                       </div>
                       <div class='acc_info'>
                       {setadresRef.current}
                       </div></div>    
                       <div class='container_acc  '>
                  </div>
                       </div>

                 

                       <div class='account_container_acc style_2 h_180_'>
                       <div class='dp_f'>
                 <div class='del_text_2'>
                 Ваши предпочтения
        </div> 
      </div>
      <div class='display_flex_bottom'>

      
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Чизкейки
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Сырки
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Трайфлы
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Зефир
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Торты
  </label>
</div>
</div>
                       </div>
                 </div>
                 <div class='d-flex2'>

               
                 <div class='bottom_coxr'>
                  Сохранить
                 </div>
                 </div>
                

<div class="modal fade" id="staticBackdrop"  data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
<div class='present_for_you'>
<div class='present_for_you_1'>
ACCOUNT

<div class='present_for_you_2'>
  Заполните поля 
</div>
<div class='display-flex5'>

<div>

ФИО</div>

<input type="text" onChange={ e => setFIO(e.target.value)}class="input_4 input_5 height " placeholder="Шапкин Николай Алексеевич"></input>
</div>

<div class='display-flex5'>
Почта
<input type="text" onChange={ e => setemail(e.target.value)} class="input_4 input_5 height " placeholder="amigos@gmail.com"></input>
</div><div class='display-flex5'>

Телефон
<input type="text" onChange={ e => setphone(e.target.value)}class="input_4 input_5 height " placeholder="+79967854060"></input>
</div><div class='display-flex5'>
Адрес для доставки
<input type="text"onChange={ e => setadres(e.target.value)} class="input_4 input_5 height " placeholder="Санкт-петербург Тихая д3 к193"></input>
</div><div class='display-flex5'>
День рождения
<input type="date" onChange={ e => setdata_rozd(e.target.value)}class="input_4 input_5 input_6 height "placeholder="12.08.2002"/>
</div>
<div class='d-flex4 w-90'>
<div class='d-flex4'>
<div class="form-check d-f-c">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Женский
  </label>
</div>

<div class="form-check d-f-c">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Мужской
  </label>
</div></div>
</div>
<div class='present_for_you_2 present_for_you_3'>
  <div class='stape stape2' onClick={putUser1}> Сохранить</div>  
</div>
</div>

</div>
      
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary">Понял</button>
      </div> */}
    </div>
  </div>
</div>
        </div>
    );
});

export default Delivery;
