export default {
    login : user => {
        return fetch('http://localhost:5000/user/login', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data)
        .catch(err=>console.log(err))
    },
    signup : user => {
        console.log(user);
        
        return fetch('/user/signup',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        })         
        .then(data => data);
    },
}