import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const registration_0 = async (ip, date) => {
    const {data} = await $host.post('api/user/registration',  {ip, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login_0 = async (email, date) => {
    const data = await $host.post('api/user/login_0', {email, date})
    return data
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}


export const check_admin = async () => {
    const {data} = await $authHost.get('api/user/admin' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}


export const fetchUsers = async () => {
    const {data} = await $authHost.get('api/user/user_info', )
    return data
}

export const createLove = async (userId,deviceId) => {
    const {data} = await $authHost.post('api/user/create_love',
    {
        userId,deviceId
    } 
    )
    return data
}

export const fetchLove = async (userId) => {
    const {data} = await $authHost.get('api/user/get_love/2',{ params: { userId:userId } })
    return data
}

export const fetchLoveone = async (userId,deviceId) => {
    const {data} = await $authHost.get('api/user/get_loveone/1', { params: { userId:userId,deviceId:deviceId } }
     )
    return data
}

export const getUserInfo = async () => {
    const data = await $authHost.get('api/user/user_info'
     )
    return data
}

export const deleteUser = async (id) => {
    const data = await $authHost.delete('api/user/'+ id
     )
    return data
}

export const GetUser = async (id) => {
    const data = await $authHost.get('api/user/'+ id
     )
    return data
}

export const delLoveone = async (userId,deviceId) => {
    const {data} = await $authHost.delete('api/user/del_loveone/1', { params: { userId:userId,deviceId:deviceId } }
     )
    return data
}


export const fetchUserByEmail = async (id,email) => {
    const data = await $authHost.get('api/user/get_by_email/'+id,{ params: { email:email} }
     )
    return data
}

export const PostMessage = async (email,kod) => {
    const data = await $authHost.post('api/user/message' ,{
        email:email,
        tema: 'Добро пожаловать в TSD',
        kod:kod,
    }
     )
    return data
}
export const putUserStatus = async (id) => {
    const data = await $authHost.put('api/user/status/'+id
     )
    return data
}
export const putUserEmail = async (id,email) => {
    const data = await $authHost.put('api/user/status/'+id,{
        email:email,
    
    }
     )
    return data
}


export const putFIO= async (id,FIO) => {
  
    const data1 = await $authHost.put('api/user/FIO/' + id, {
        FIO : FIO,

    })
    return data1
}

export const putEmail= async (id,email) => {
  
    const data1 = await $authHost.put('api/user/email/' + id, {
        email : email,

    })
    return data1
}
export const putPhone= async (id,phone) => {
  
    const data1 = await $authHost.put('api/user/Phone/' + id, {
        phone : phone,

    })
    return data1
}



export const get_peomo_by_ident= async (id,identific) => {
  
    const data1 = await $authHost.get('api/user/get_promo/2',{ params: { id:id, identific:identific} }  )
    return data1
}
export const get_peomo_by= async (identific) => {
  
    const data1 = await $authHost.get('api/user/get_promo/3',{ params: {identific:identific} }  )
    return data1
}



export const get_user = async (id) => {
    const data = await $authHost.get('api/user/get/'+id 
    ) 
    return data
}
export const get_user_by_email = async (email) => {
    const data = await $authHost.put('api/user/get_user_by_email',{
        email:email
    }
    ) 
    return data
}
export const auth_0 = async (id) => {
    const data = await $authHost.put('api/user/auth_0',{
        id:id
    }
    ) 
    return data
}


export const putUser= async (id,phone,email,FIO,adress,pol,data_rozd) => {
  
    const data1 = await $authHost.put('api/user/update/' + id, {
   
        phone: phone,
        email: email,
        FIO: FIO,
        adress: adress,
        pol: pol,
        data_rozd: data_rozd,
    })
    return data1
}


export const Code= async (id,code,FIO,email) => {
  
    const data1 = await $authHost.put('api/user/code/' + id, {
        code: code,
        FIO:FIO,
        email:email,
    })
    return data1
}
export const Code_auth= async (id,cod_auth,email) => {
  
    const data1 = await $authHost.put('api/user/code_auth/' + id, {
        cod_auth: cod_auth,
        email:email,
    })
    return data1
}

export const get_skidka= async (userId) => {
  
    const data1 = await $authHost.put('api/user/get_skid/', { userId:userId } )
    return data1
}


export const create_skid = async (description,info,userId) => {
    const {data} = await $authHost.post('api/user/create_skid',
    {
        description,info,userId
    } 
    )
    return data
}