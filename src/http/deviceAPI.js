import {$authHost, $host} from "./index";








export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}


export const delPromo = async (id) => {
    const {data} = await $authHost.delete('api/user/delpromo/'+ id )
    return data
}

export const createPromo = async (promo) => {
    const {data} = await $authHost.post('api/user/promocode', promo)
    return data
}
export const fetchPromo = async () => {
    const {data} = await $authHost.get('api/user/get_promo/1')  
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}
export const createColor = async (color) => {
    const {data} = await $authHost.post('api/color', color)
    return data
}

export const fetchColors = async () => {
    const {data} = await $host.get('api/color', )
    return data
}



export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const createSize_Color = async (size) => {
    const {data} = await $authHost.post('api/device/create_Size_Color', size)
    return data
}

export const createBasketDevice = async (basketDevice) => {
    const {data} = await $authHost.post('api/device/basket', basketDevice)
    return data
} 

export const fetchBasketDevice = async (id, basketId ,deviceId) => {
    const {data} = await $authHost.get('api/device/basket/'+ id, {params: {
        basketId, deviceId
    }})
    return data
} 


export const fetchAllBasketDevices = async () => {
    const {data} = await $authHost.get('api/device/basket')
    return data
} 

export const fetchDevices = async () => {
    const {data} = await $host.get('api/device')
    return data
}


export const fetchAllDevices = async ( page, limit= 50) => {
    const {data} = await $host.get('api/device', {params: {
            page, limit
        }})
    return data
}
export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const delDevice = async (id) => {
    const {data} = await $authHost.delete('api/device/' + id)
    return data
}

export const fetch_Basket_by_userId = async (id) => {
    const {data} = await $authHost.get('api/device/basket/basket/' + id)
    return data
}

export const fetch_One_Size = async (id) => {
  
    const data1 = await $host.get('api/device/deviceonesize/' + id)
    return data1
}

export const fetch_One_Color = async (id) => {
  
    const data1 = await $host.get('api/device/getSizeColor/' + id)
    return data1
}

export const fetch2_Basket = async (id,userId) => {
  
    const data1 = await $authHost.put('api/device/basket/get_2/' + id,  { basketId:userId})
    return data1
}

export const fetch3_Basket = async (id,sizeId,color,basketId) => {
  
    const data1 = await $authHost.get('api/device/basket/get_3/' + id, { params: { sizeId:sizeId,color:color,basketId:basketId} })
    return data1
}

export const fetch_Basket_by_userId1 = async (id) => {
  
    const data1 = await $authHost.get('api/device/basket/basket/' + id)
    return data1
}

export const fetch_Order= async () => {
  
    const data1 = await $authHost.get('api/order')
    return data1
}

export const fetch_my_Basket= async (id) => {
  
    const data1 = await $authHost.get('api/device/me/basket/' + id)
    return data1
}

export const update_Basket= async (id,results) => {
  
    const data1 = await $authHost.put('api/device/basket/update/' + id, {
        final_price: results,
         
    })
    return data1
}

export const update_Basket_= async (id,adress,adress1) => {
  
    const data1 = await $authHost.put('api/device/basket_/' + id, {
        adress: adress,
        adress1:adress1,
         
    })
    return data1
}


export const delete_Basket_device = async (id) => {
  
    const data1 = await $authHost.delete('api/device/basket/' + id)
    return data1
}

export const fetch_my_device= async (id) => {
  
    const data1 = await $authHost.get('api/device/' + id)
    return data1
}

export const put_my_device= async (id,name0,price0,typeId0) => {
  
    const data1 = await $authHost.put('api/device/' + id, {
        name: name0,
        price: price0,
        typeId: typeId0,

      })
    return data1
}

export const delete_device= async (id) => {
  
    const data1 = await $authHost.delete('api/device/' + id)
    return data1
}

export const CreateOrder= async (FIO,poluchatel,address,phone, otkrytca,comment,userId,name_poluch,familia_poluch) => {
  
    const data1 = await $authHost.post('api/order',{
        FIO : FIO,
        poluchatel:poluchatel,
        address:address,
        final_price:0,
        email:'my_email',
        phone:phone,
        status:'Заказ ожидает оплаты',
        comment:comment,
        otkrytca:otkrytca,
        userId:userId,
        name_poluch:name_poluch,
        familia_poluch:familia_poluch,
 
    })
    return data1
}


export const CreateOrderDevice= async (img,price,quantity,orderId,name) => {
  
    const data1 = await $authHost.post('api/order/order_device',{
        img:img,
        price:price,
        quantity:quantity,
        orderId:orderId,
        name:name
    })
    return data1
}

export const putOrder= async (id,orderId) => {
  
    const data1 = await $authHost.put('api/order/device/' + id, {
        orderId : orderId,
        status:0
    })
    return data1
}


export const getOrder= async (id) => {
  
    const data1 = await $authHost.get('api/order/device/' + id)
    return data1
}
export const getOrderById= async (id) => {
  
    const data1 = await $authHost.get('api/order/' + id)
    return data1
}

export const get_item_order= async (id) => {
  
    const data1 = await $authHost.get('api/device/item_order/' + id)
    return data1
}

export const put_Color= async (id,quantity) => {
    const data1 = await $authHost.put('api/device/color/put_/' + id,{
        quantity:quantity
     })
    return data1
}



export const Create_Basket_Device = async (deviceId,userId,final_price,img,name,description) => {
    const data1 = await $authHost.post('api/device/basket' , {
        deviceId: deviceId,
        userId: userId,
        final_price :final_price,
        fin_price :final_price,
      
        img:img,
        name:name,
        status:1,
        description:description,
    })
    return data1
}


export const Device_Basket_Put = async (id,userId,quantity,final_price,fin_price) => {
    const data1 = await $authHost.put('api/device/basket/put/'+id ,{
        basketId1:userId,
        quantity:quantity,
        final_price :final_price,
        fin_price :fin_price,
      })
    return data1
}

export const delete_basket_device= async (id) => {
  
    const data1 = await $host.delete('api/order/order_device/' + id)
    return data1
}

export const put_Color_1= async (id,color,quantity) => {
    const data1 = await $authHost.put('api/device/color/put/' + id,{
        color:color,
        quantity:quantity
     })
    return data1
}

export const put_Order_Status= async (id,status) => {
    const data1 = await $authHost.put('api/order/status/' + id,{
        status:status,
      
     })
    return data1
}


export const Order_getAllItem= async (id) => {
    const data1 = await $authHost.get('api/order/getallItem/' + id)
    return data1
}
export const Order_get_Device= async (id) => {
    const data1 = await $authHost.get('api/order/getorderdevice/' + id)
    return data1
}

export const getOneSize = async (size,deviceId) => {
    const data1 = await $authHost.get('api/device/getOneSize',{ params: { size:size,deviceId:deviceId } })
    return data1
}

