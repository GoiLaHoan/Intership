var courseApi = 'http://localhost:3000/course';


function start() {
    getCourses(renderCourses);

    handleCreateForm();
}

start();

function getCourses(callback) {
    fetch(courseApi)
        .then((response) => response.json())
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)

    };
    fetch(courseApi, options)
        .then((response) => response.json())
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        }

    };
    fetch(courseApi + '/' + id, options)
        .then((response) => response.json())
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

function handleUpdateCourse(id) {
    var updateBtn = document.querySelector('.course-item-' + id);

    var nameInput = document.querySelector('input[name="name"]');
    var description = document.querySelector('input[name="description"]');
    console.log(updateBtn);
    fetch(courseApi)
        .then((response) => response.json())
        .then(function(data) {
            // for
            // console.log(data[].id);
        });
    // updateBtn.onclick = function() {
    //     var name = document.querySelector('input[name="name"]').value;
    //     var description = document.querySelector('input[name="description"]').value;

    //     var formData = {
    //         name: name,
    //         desc: description
    //     };
    //     console.log(formData);
    // }
}

function renderCourses(courses) {

    var listCoursesBlock = document.querySelector('#list-courses');
    console.log(courses);
    var htmls = courses.map(function(course) {
        return `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.desc}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xoá</button>
            <button onclick="handleUpdateCourse(${course.id})">Sửa</button>
        </li>
        `;
    });

    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            desc: description
        };
        console.log(formData);
        createCourse(formData, function() {
            getCourses(renderCourses);
        });
    }
}