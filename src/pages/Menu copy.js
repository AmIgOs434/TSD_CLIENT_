import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import useState from 'react-usestateref'
import '../css/one.css'
import { DESSERT_ROUTE, ITEM_ROUTE, MENU_ROUTE } from '../utils/consts';


const Menu  = observer( ()=>{




    useEffect(() => {

    }, [])
    
   

    const navigate = useNavigate()
    return (
        <div class='menu_container' >
         <div class='tt'>

         <img class='img_menu' src='https://www.cobsbread.com/wp-content/uploads/2022/12/Product_Hero_Main_1600x1000-1600x1000-2.jpg'/>
         <div class="but_1 top-50" ><div href="/" class="ddott ml-5 ">DESSERT</div></div>


         </div>
  <div class='menu_nach'>
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

  </div>
  <div class='menu_container1'>
    <div class='menu_items  row'>


    <div class='mt-20 col-md-4 col-sm-6 cart display_menu_item' onClick={() => navigate(ITEM_ROUTE)}>
  <div class='item_text'>
ЧИЗКЕЙКИ
</div>
<div class='w-100 img_menu_cintainer'>
<img class='menu_item img_menu_ ' src='https://psv4.userapi.com/c237031/u210034432/docs/d33/f86117b48a85/DSC_6024_1_1.png?extra=HJ6wlcoj38f_17U5YfIIBceNIzrrqOVAYEUjqY1v48vdF8RBNrx6Oz5t8U0tDH2uQkugbLjyCMRYinRtsmRNV9jh5u8iRvUVIZepbGtGDOpfBb_MOVx1DHvxKLAjLZzV6oHlXu0iRhxvTpXyOManrNTHGDw'/>
</div>
  <div>
<div class='menu_info'>
    НАБОР ВКУСНЕЙШИХ ЧИЗКЕЙКОВ
    </div>
    <div class='item_text_1'>
    Изучить
    <div class='item_text_2'>
    1800Р
    </div>
    </div>
</div>
<div class='cart_line'>
</div>
</div>


<div class='mt-20 col-md-4 col-sm-6 cart display_menu_item' onClick={() => navigate(ITEM_ROUTE)}>
  <div class='item_text'>
ЗЕФИР
</div>
<div class='w-100 img_menu_cintainer'>
<img class='menu_item img_menu_ width_item' src='https://psv4.userapi.com/c237031/u210034432/docs/d8/2fb0526a760f/DSC_6003_2__1.png?extra=qdnmX2SG9vg4e9RuCROG202yUbgDZUn2mSAhBfOvB2KYzZblPL1S7B2MiOyGK5yfpZAlWXfbag-E0rc_V7uDSNPR674lTJIHJGD_sCMNSYhbG6cBOStSeC9WNWOeJnyWxd7P8ByZCpEKoWmthZF9NEj5f5Q'/>
</div>
  <div>
<div class='menu_info'>
    НАБОР ЗЕФИРА
    </div>
    <div class='item_text_1'>
    Изучить
    <div class='item_text_2'>
    1800Р
    </div>
    </div>
</div>
<div class='cart_line'>
</div>
</div>




<div class='mt-20 col-md-4 col-sm-6 cart display_menu_item' onClick={() => navigate(ITEM_ROUTE)}>
  <div class='item_text'>
КОНФЕТЫ
</div>
<div class='w-100 img_menu_cintainer'>
<img class='menu_item img_menu_ ' src='https://psv4.userapi.com/c237031/u210034432/docs/d16/34e023f9cac9/DSC_6017_1_1.png?extra=2OfsTLxR1pknaR47EWHE-PlXTWqMoK9geRwoSFz36p417UAw__y7lkFOsLfD_HloR8CQk3g1c5nUcUQQ8R93yBCNBhJ3cCjjZD-QjX5JwM6_8JO4bGIEn8NsObfxfuMUeq6lvAvpkWHiNLRm8QU3xJm3rLg'/>
</div>
  <div>
<div class='menu_info'>
    НАБОР КОНФЕТ 
    </div>
    <div class='item_text_1'>
    Изучить
    <div class='item_text_2'>
    1800Р
    </div>
    </div>
</div>
<div class='cart_line'>
</div>
</div>



<div class='mt-20 col-md-4 col-sm-6 cart display_menu_item' onClick={() => navigate(ITEM_ROUTE)}>
  <div class='item_text'>
ТРАЙФЛЫ
</div>
<div class='w-100 img_menu_cintainer'>
<img class='menu_item img_menu_ width_item' src='https://psv4.userapi.com/c237031/u210034432/docs/d28/610f8f37c486/DSC_5995_1_1_-transformed_1_1_2.png?extra=kbuXn4Ux4UMfPSarO2mtBgnDrsB7uOIH8L1rukTVDzRtL3yi395nzNEcrDalC3ukvBHZIqeTlAlqsOv0xujnCBc6GlC3D8bHYLv0sTaz7IB8XELVWpA1hnKnY8qOOJuOLe46MDbdcjT1HXkeUw_wVX_C1s4'/>
</div>
  <div>
<div class='menu_info'>
ТРИ ШОКОЛАДА
    </div>
    <div class='item_text_1'>
    Изучить
    <div class='item_text_2'>
    1800Р
    </div>
    </div>
</div>
<div class='cart_line'>
</div>
</div>





<div class='mt-20 col-md-4 col-sm-6 cart display_menu_item' onClick={() => navigate(ITEM_ROUTE)}>
  <div class='item_text'>
  ТРАЙФЛЫ
</div>
<div class='w-100 img_menu_cintainer'>
<img class='menu_item img_menu_ width_item' src='https://psv4.userapi.com/c909418/u210034432/docs/d17/c75b1f27c91e/DSC_5996_1_1_-HaPke3JYL-transformed-transformed-transformed_1_1_1_1_2.png?extra=8RS6YZkApWGgqMGz_NMnzHnoN8GBCfGCbSk1jNMpUN5TZsPcLU4xzHdgiV94zZXgnzsZ5ljYY5agL4L3TmTdqsR2E-c5NkUb2_nIxbXnZHq0tVCHzAxzpuj8n0XZvDt8wFQO6pY1k2xDrp8iAYcccSetqbQ'/>
</div>
  <div>
<div class='menu_info'>
    КРАСНЫЙ БАРХАТ
    </div>
    <div class='item_text_1'>
    Изучить
    <div class='item_text_2'>
    1800Р
    </div>
    </div>
</div>
<div class='cart_line'>
</div>
</div>

    </div>
    
  </div>
        </div>
    );
});

export default Menu;
