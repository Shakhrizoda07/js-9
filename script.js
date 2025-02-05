// const listItem = document.getElementsByTagName('li');
// console.log(listItem)   // 1. teg osqali ulash (привязаться к тегу)

// const item = document.getElementsByClassName('list_item');
// console.log(item) //class orqali ulash (привязаться к классу)

// const user = document.getElementById('click_btn');
// console.log(user)  // id orqali ulash (привязаться к id)

// const user = document.querySelector('#click_btn');
// console.log(user)  //universal

// const user = document.querySelectorAll('.list-item');
// user.forEach((item) 
// console.log(user)


//практика
// const name = prompt('Ismingizni kiriting?');
// const age = prompt('Yoshingizni kiriting?');
// const score = prompt('Ballingizni kiriting?');

// document.querySelector('#name').textContent = name;
// document.querySelector('#age').textContent = age;
// document.querySelector('#score').textContent = score;

// const resultElement = document.querySelector('#result');

// if (parseInt(score) >= 70) {
//     resultElement.textContent = 'Siz universitetga kirdingiz';
// } else {
//     resultElement.textContent = 'Siz universitetga kira olmadiz';
// }


//uy ishi
const name = prompt('Ismingiz nima?');
const second = prompt('Familiyangizni kiriting')
const age = prompt('Yoshingiz nechchida?');



document.querySelector('#name').textContent = name;
document.querySelector('#second').textContent = second;
document.querySelector('#age').textContent = age;


const resultElement = document.querySelector('#result');

let admin = prompt(`Ismingiz qanday harflarda yozilsin
    1:Kata
    2:Kichik`);
    if(admin === '1'){
        alert(admin.toUppercase())
    }else if(admin === '2'){
        alert(admin.toLowerCase())
    }else{
    alert('iltimos raqamlardan birini tanlang')
    }




