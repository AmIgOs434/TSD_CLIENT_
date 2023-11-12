import React,{Component, useEffect} from 'react';
import $ from 'jquery'
import useState from 'react-usestateref'
const Support =  ()=>{
  const [text,settext,settextRef] = useState('Ваш номер')

  useEffect(() => {
    $('.teleph').addClass('border_')
  }, [])
  const handleClick = e => {
    $('.vk').removeClass('border_')
    $('.tg').removeClass('border_')
      $('.teleph').removeClass('border_')
      const link = e.target.getAttribute('link')
      if(link==='vk'){
        settext('Ссылка на вк')
      }
      if(link==='tg'){
        settext('Ваш ник')
      }
      if(link==='teleph'){
        settext('Ваш номер')
      }
     
      $(`.${link}`).addClass('border_')
      console.log(link)
  
    };
    return (




             <div class='bg'>

<div class='del_text_3 pt-10 '>
       Поддержка
        </div> 
        <div class='support_text'> 
          Обращение в поддержку
        </div>
        <div class='support_inp'>

        <textarea link='otprav_2' class='input_1 height' rows="3"></textarea>
        </div>
        <div class='support_text'> 
          Где вам удобнее получить обратную связь ? 
        </div>
        <div class='df_jc mt-20'>

<div class='svg_support vk' onClick={handleClick} link='vk'>
</div>

<div class='svg_support tg 'onClick={handleClick}  link='tg'>
  </div>

  <div class='svg_support teleph'onClick={handleClick}  link='teleph'>
  </div>


        </div>
        <div class='support_text_10'> 
         {settextRef.current}
        </div>
     <div class='df_jc mt-20'>
     <input class="zakaz_bottom border m-w460 zak_bot_1"></input>
     <div class="zakaz_bottom border m-w460 mt_33">Оформить</div>
     </div>
              </div>



            )
         

 


}



export default Support;