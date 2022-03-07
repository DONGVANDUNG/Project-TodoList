const btnAdd = document.querySelector('.btn-add')
const inputField = document.querySelector('.input')
const listItem = document.querySelector('.list-item')
const modal = document.querySelector('.modal')
const boxEdit = document.querySelector('.box-activity')
    //validate Input

//input error
function displayAnounce() {
    if (inputField.value == '') {
        inputField.placeholder = 'Vui lòng nhập lịch trình';
    }
}
//set input default
function inputDefault() {
    inputField.placeholder = 'Input activity';
}

function validatInput() {
    if (inputField.value == '') {
        setTimeout(displayAnounce, 500)
        setTimeout(inputDefault, 1300)
    }
}

// add element to DOM
function addElement() {
    if (inputField.value) {
        listItem.insertAdjacentHTML("beforeend",
            `<div class="item">
              <p class="title-schedule" title="Hoạt động">${inputField.value}</p>
            <div class="icon">
              <i class="fa-solid fa-hammer icon-edit" title="Sửa"></i>
              <i class="fa-regular fa-trash-can icon-delete" title="Xóa"></i>
            </div>
         </div>`)
    }
    inputField.value = '';
    const iconDelete = document.querySelectorAll('.icon-delete')
    const iconEdit = document.querySelectorAll('.icon-edit');
    //delete activity
    Array.from(iconDelete).forEach(function(icon) {
        icon.addEventListener('click', function() {
            icon.parentElement.parentElement.remove()
        })
    })

    //edit activity
    const btnCancel = document.querySelector('.btn-cancel');
    const btnSave = document.querySelector('.btn-save');
    const inputActivity = document.querySelector('.activity');
    //event keyboard
    inputActivity.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            btnSave.click();
        }
    })
    Array.from(iconEdit).forEach(function(icon) {
        icon.addEventListener('click', function() {
            modal.style.display = 'block';
            boxEdit.style.display = 'flex';
            const valueActivity = icon.parentElement.parentElement.firstElementChild;
            inputActivity.value = valueActivity.textContent;
            btnSave.addEventListener('click', function() {
                valueActivity.innerHTML = inputActivity.value;
                boxEdit.style.display = 'none';
                modal.style.display = 'none';
            })
            btnCancel.addEventListener('click', function() {
                modal.style.display = 'none';
                boxEdit.style.display = 'none';
            })
        })
    })
}

btnAdd.addEventListener('click', validatInput);
btnAdd.addEventListener('click', addElement)
inputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        btnAdd.click();
    }
})