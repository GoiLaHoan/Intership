var dataApi = 'http://localhost:3000/data';


let email = document.querySelector("#email");
let password = document.querySelector("#password");
const btnlogin = document.querySelector("#submit");
const checksubmitlogin = document.querySelector("#checksubmit");




function getData() {
    fetch(dataApi)
        .then((response) => response.json())
        .then(function(data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].email == email.value && data[i].password == password.value) {
                    btnlogin.classList.add("d-none");
                    alert("done");
                    localStorage.setItem(`user ${data[i].id}`, JSON.stringify(data[i]));
                    return;
                }
            }
            email.addEventListener("click", function() {
                checksubmitlogin.innerHTML = ""
            })
            password.addEventListener("click", function() {
                checksubmitlogin.innerHTML = ""
            })

            checksubmitlogin.style.color = "red"
            checksubmitlogin.innerHTML = "Sai tài khoản hoặc mật khẩu"
        });
}