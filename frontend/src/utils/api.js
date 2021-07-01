class Api {
    constructor({baseUrl, authorization}){
        this._baseUrl = baseUrl;
        this._authorization = authorization;
    }

    _checkResponse(res){
        if(res.ok){  
            return res.json();
            }
            return Promise.reject(res.status)
    }

    userServerInfo(){
       return fetch(`${this._baseUrl}/users/me`, {
        credentials: 'include',
            /*headers: {
                authorization: this._authorization
            }*/
        })
        .then(this._checkResponse);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            credentials: 'include',
            /*headers: {
                authorization: this._authorization
            }*/
        })
        .then(this._checkResponse);
    }

    editProfile(patchInquiry) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
               // authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: patchInquiry
        })
        .then(this._checkResponse); 
    }

    addCard(postInquiry) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                // authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: postInquiry
        })
        .then(this._checkResponse);
    }

    deleteCard(delInquiry){
        return fetch(`${this._baseUrl}/cards/${delInquiry}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
               // authorization: this._authorization,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(this._checkResponse);
    }

    changeLikeCardStatus(inquiry, isLiked){
        if(isLiked){
            return fetch(`${this._baseUrl}/cards/likes/${inquiry}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                   // authorization: this._authorization,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(this._checkResponse)
        }else{  
            return fetch(`${this._baseUrl}/cards/likes/${inquiry}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                   // authorization: this._authorization,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(this._checkResponse)
        }
    }

    editAvatar(patchInquiry){
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
               // authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: patchInquiry
        })
        .then(this._checkResponse);
    }

}

const api = new Api({
    baseUrl: 'https://api.domainname.kostya2120.nomoredomains.club',
    //authorization: '2aa5c816-8b07-4613-97bf-d801be8b799e',
  });

  export default api;