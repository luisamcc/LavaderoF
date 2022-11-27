import { base_url, api_version } from "../constants/UrlBase"

export const userSignUp = (dataUser) =>{
    const url_api = `${base_url}/${api_version}/createUser`
    const params = {
        method: 'POST',
        body: JSON.stringify(dataUser),
        headers: {
            "Content-Type" : "application/json"
        }
    }

    return fetch(url_api, params)
            .then(res => res.json())
            .then(result => result)

            // // PARA COMPROBAR LA CONEXION antes de poner el result en el then
                // {
                // if(result.status){
                //     console.log('Estamos desde userSignUp')
                //     console.log('usuario guardado con exito')
                //     console.log(result)
                //     return result
                // }else{
                //     console.log(result.message)
                // }
                //})
            .catch(err => console.log(err.message))
};
//API log
export const userSignIn = (dataUser) => {
    const url = `${base_url}/${api_version}/login`
    const requestInit = {
        metohod: "POST",
        body: JSON.stringify(dataUser),
        headers: {
            "Content-Type": "application/json"
        }
    }

    return fetch(url, requestInit)
    .then(res => res.json())
    .then(result => result// {
        // if (result.message){
        //     console.log(result.message)
        // }else{
        //     console.log(result.accessToken)
        // }
    //}
    )
    .catch(err => console.log(err))
}