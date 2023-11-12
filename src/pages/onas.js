import React,{Component, useEffect} from 'react';
import $ from 'jquery'
import '../css/style1.scss'
import '../css/style2.scss'
const Onas =  ()=>{


  useEffect(()=>{

   
    $(document).ready(function(){
      $('.accordion-list > li2 > .answer').hide();
        
      $('.accordion-list > li2').click(function() {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".answer").slideUp();
        } else {
          $(".accordion-list > li2.active .answer").slideUp();
          $(".accordion-list > li2.active").removeClass("active");
          $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
      });
      
    });
  
  },[])

    


   
    



    
    return (


      <div class='top_ bg'>
     <div class='containet_FQU'> 
      <div class="accordion-list ul2">
                   <div class='FQU'>
                    FQI
                  </div>       
                  <li2 class='li2 borderr__1'>
                  <div class="text_company_ text_company___">Добро пожаловать в TSD</div>
                    <div class="answer ">
                    <div class="text_company___ ">– ваш собственный сладкий рай, где каждый кусочек является произведением искусства! Мы - молодой и динамично развивающийся бренд, специализируемся на создании высококачественных чизкейков и разнообразной кондитерской продукции. Наша миссия – делать жизнь сладкой, а особые моменты - незабываемыми.</div>
                    </div>
                  </li2>
      
                  <li2 class='li2 borderr__2'>
                  <div class="text_company_ text_company___">Наше начало</div>
                    <div class="answer">
                    <div class="text_company___ ">– ваш собственный сладкий рай, где каждый кусочек является произведением искусства! Мы - молодой и динамично развивающийся бренд, специализируемся на создании высококачественных чизкейков и разнообразной кондитерской продукции. Наша миссия – делать жизнь сладкой, а особые моменты - незабываемыми.</div>
                    </div>
                  </li2>
                  <li2 class='li2 borderr__2'>
                  <div class="text_company_ text_company___">Наш подход</div>
                    <div class="answer">
                    <div class='p2'>Заказ можно оформить через наш сайт, выбрав понравившийся вам чизкейк и добавив его в корзину, или позвонив нам по телефону, который указан на сайте.
                    </div>
                    </div>
                  </li2>
                  <li2 class='li2 borderr__2'>
                  <div class="text_company_ text_company___">Наши изделия</div>
                    <div class="answer">
                    <div class='p2'>Мы принимаем к оплате банковские карты, онлайн-платежи, также вы можете оплатить заказ наличными при получении.
                    </div>
                    </div>
                  </li2>
                  <li2 class='li2 borderr__2'>
                 <div class="text_company_ text_company___">Наши ценности</div>
                    <div class="answer">
                    <div class='p2'> Стоимость доставки зависит от вашего региона и общей стоимости заказа. Точную стоимость вы всегда можете увидеть при оформлении заказа, перед подтверждением покупки.
                    </div>
                    </div>
                  </li2>
                  <li2 class='li2 borderr__3'>
                  <div><h3 class='text_company_ text_company___'>Можно ли заказать у вас торт на свадьбу или другое мероприятие?</h3></div>
                    <div class="answer">
                    <div class='p2'> Конечно, мы рады помочь в организации вашего торжества. Пожалуйста, свяжитесь с нами заранее для обсуждения всех деталей и индивидуальных пожеланий.
                    </div>
                    </div>
                  </li2>

                  
                </div>
                </div>
                </div>
            )
         

 


}



export default Onas;