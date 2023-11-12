import React,{Component, useEffect} from 'react';
import $ from 'jquery'
import '../css/style1.scss'

const FQU =  ()=>{


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
                  <li2 class='li2'>
                  <div ><h3 class='h33'>О НАС</h3></div>
                    <div class="answer">
                      <div class='p2'> The Same Dessert зародился из страсти к чизкейкам и желания делиться радостью с каждым клиентом. Мы начали свой путь как небольшая домашняя пекарня, которая стремилась предложить нечто большее, чем просто десерты. Со временем мы превратились в любимое место среди сладкоежек благодаря нашему уникальному вкусу, высокому качеству продукции и отзывчивому обслуживанию клиентов.</div>

                    </div>
                  </li2>
      
                  <li2 class='li2'>
                  <div><h3 class='h33'>Можно ли заказать чизкейк без определенного компонента (без глютена/лактозы)?</h3></div>
                    <div class="answer">
 <div class='p2'>
                    Да, мы предлагаем несколько вариантов чизкейков для людей с особыми пищевыми предпочтениями или аллергиями. Пожалуйста, укажите ваши требования при оформлении заказа.
                    </div>
                    </div>
                  </li2>
                  <li2 class='li2'>
                  <div><h3 class='h33'>Как сделать заказ?</h3></div>
                    <div class="answer">
                    <div class='p2'>Заказ можно оформить через наш сайт, выбрав понравившийся вам чизкейк и добавив его в корзину, или позвонив нам по телефону, который указан на сайте.
                    </div>
                    </div>
                  </li2>
                  <li2 class='li2'>
                  <div><h3 class='h33'>Какие способы оплаты вы принимаете?</h3></div>
                    <div class="answer">
                    <div class='p2'>Мы принимаем к оплате банковские карты, онлайн-платежи, также вы можете оплатить заказ наличными при получении.
                    </div>
                    </div>
                  </li2>
                  <li2 class='li2'>
                  <div><h3 class='h33'>Есть ли дополнительные сборы за доставку?</h3></div>
                    <div class="answer">
                    <div class='p2'> Стоимость доставки зависит от вашего региона и общей стоимости заказа. Точную стоимость вы всегда можете увидеть при оформлении заказа, перед подтверждением покупки.
                    </div>
                    </div>
                  </li2>
                  <li2 class='li2'>
                  <div><h3 class='h33'>Можно ли заказать у вас торт на свадьбу или другое мероприятие?</h3></div>
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



export default FQU;