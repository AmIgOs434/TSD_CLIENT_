import React, { useEffect} from 'react';

import { useNavigate } from 'react-router-dom';
import useState from 'react-usestateref'
import { Order_get_Device } from '../http/deviceAPI';

const OrderDevice = ({order})=>{

   const [device,setdevice,setdeviceRef] = useState()


    const navigate = useNavigate()
    const getItems = async() => {
        const device = await Order_get_Device(order.id)
        setdevice(device.data)
        console.log(device.data)
    }
    useEffect(() => {
        getItems()
            }, [])
    return (


     
        
               
<div class='df_end_'>


<div class='d-flex'>


{setdeviceRef?.current?.map(order =>  
<div class='df_center_' key={order.id}>
<div class='img_item_name ml-35'>
{order.name}
</div>
<img class='img_item ml-35' src={order.img}/>


<div class='df_  bottom_price'>
<div class='price_'>
  {order.price}Р    x {order.quantity}
</div>

<svg version="1.1" id="Capa_1"  class='svg_w' width='14px' height='14px' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 45.583 45.583" ><g><g><path d="M22.793,12.196c-3.361,0-6.078-2.729-6.078-6.099C16.715,2.73,19.432,0,22.793,0c3.353,0,6.073,2.729,6.073,6.097 C28.866,9.466,26.145,12.196,22.793,12.196z"/><path d="M22.794,28.889c-3.361,0-6.079-2.729-6.079-6.099c0-3.366,2.717-6.099,6.078-6.099c3.353,0,6.073,2.732,6.075,6.099 C28.866,26.162,26.144,28.889,22.794,28.889z"/><path d="M22.794,45.583c-3.361,0-6.079-2.729-6.079-6.099s2.717-6.098,6.078-6.098c3.353-0.002,6.073,2.729,6.073,6.098 S26.144,45.583,22.794,45.583z"/></g></g></svg>

</div>
</div>
 )} 

</div>



<div class='df_center_ pr-35'>
<div class='img_item_name ml-35'>
Открытка
</div>
<img class='img_item ml-35' src='https://avatars.mds.yandex.net/i?id=67f31b7c62f41d5a1f42d7ceaeea39267da91416-9246177-images-thumbs&n=13'/>


<div class='df_  bottom_price'>
<div class='price_'>
  В подарок
</div>

<svg version="1.1" id="Capa_1" class='svg_w' width='14px' height='14px' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 45.583 45.583" ><g><g><path d="M22.793,12.196c-3.361,0-6.078-2.729-6.078-6.099C16.715,2.73,19.432,0,22.793,0c3.353,0,6.073,2.729,6.073,6.097 C28.866,9.466,26.145,12.196,22.793,12.196z"/><path d="M22.794,28.889c-3.361,0-6.079-2.729-6.079-6.099c0-3.366,2.717-6.099,6.078-6.099c3.353,0,6.073,2.732,6.075,6.099 C28.866,26.162,26.144,28.889,22.794,28.889z"/><path d="M22.794,45.583c-3.361,0-6.079-2.729-6.079-6.099s2.717-6.098,6.078-6.098c3.353-0.002,6.073,2.729,6.073,6.098 S26.144,45.583,22.794,45.583z"/></g></g></svg>

</div>
</div>


</div>
     
    );
};

export default OrderDevice;