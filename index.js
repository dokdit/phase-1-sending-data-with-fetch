function submitData(userName,userEmail){
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({name:userName,email:userEmail})
    })
    .then(res=> res.json())
    .then(data => {
        const userID = document.createElement("p");
        userID.innerHTML = `${data.id}`;
        document.body.appendChild(userID);
    })
    .catch(e => {
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = `Error: ${e}`;
        document.body.appendChild(errorMessage);
    });
}
