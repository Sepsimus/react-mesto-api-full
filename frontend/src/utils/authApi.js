class AuthApi{
    constructor({baseUrl}){
       this._baseUrl = baseUrl;
    }

    _checkResponse(res){
        if(res.ok){  
            return res.json();
            }
            return Promise.reject(res.status)
    }

    registration(postInquiry){
        return fetch(`${this._baseUrl}/signup`, {
                method: 'POST',
                credentials: 'include',
                headers:{
                    "Content-Type": "application/json"
                },
                body:postInquiry,
            }
        )
        .then(this._checkResponse);
    }

    authorization(postInquiry){
        return fetch(`${this._baseUrl}/signin`, {
                method: 'POST',
                credentials: 'include',
                headers:{
                    "Content-Type": "application/json"
                },
                body:postInquiry,
            }
        )
        .then(this._checkResponse);
    }

    tokenCheck(token){
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers:{
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`
            }
        }
    )
    .then(this._checkResponse);
}
}

const authApi = new AuthApi({
    baseUrl: 'http://localhost:3000',
});

export default authApi;