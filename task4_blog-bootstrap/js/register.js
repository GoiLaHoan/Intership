var dataApi = 'http://localhost:3000/data';

let fullname = document.querySelector("#fullname");
let gender = document.querySelectorAll("input[name=gender]");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
const btnreg = document.querySelector("#submit");
const checksubmitreg = document.querySelector("#checksubmit");



function createData(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)

    };
    fetch(dataApi, options)
        .then((response) => response.json())
        .then(callback);
}

var flag = true;


function handleCreateForm() {
    btnreg.addEventListener("click", function() {
        // Tạo formData đăng ký
        var formData = {
            name: fullname.value,
            gender: gender[0].value ? 0 : 1,
            email: email.value,
            password: password.value,
        };

        // Lấy data từ json ==> so sánh với data đăng ký    
        // Lỗi
        // fetch(dataApi)
        //     .then((response) => response.json())
        //     .then(function(data) {
        //         for (let i = 0; i < data.length; i++) {
        //             if (formData.email == data[i].email) {
        //                 alert("Trùng email, không thể đăng ký");
        //                 flag = false;

        //                 return;
        //             }
        //         }
        //     })

        addData(formData)
    });

}

function addData(formData) {
    if (flag) {
        createData(formData);
        btnreg.classList.add("d-none");
        alert("done");
    }
}