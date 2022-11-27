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
            .then(result => { 
                if (result){
                    console.log(result);
                    return result;
                }
            })
            .catch(err => console.log(err.message))
};
//API log
export const userSignIn = (dataUser) => {
    const url = `${base_url}/${api_version}/log-in`
    const requestInit = {
        metohod: "POST",
        body: JSON.stringify(dataUser),
        headers: {
            "Content-Type": "application/json"
        }
    }

    return fetch(url, requestInit)
        .then(res => res.json())
        .then(result => result)
        .catch(err => console.log(err))
}