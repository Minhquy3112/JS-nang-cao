'use strict';
const restaurant = {
    name: 'Minh Quý',
    location: 'Vĩnh Lộc, Thanh Hóa, Việt Nam',
    categories: ['Món truyền thống', 'Món chay', 'Món mặn', 'Đồ ăn vặt'],
    starterMenu: ['Sa-lát', 'Súp', 'Bánh mì', 'Bánh bao'],
    mainMenu: ['Mì tôm', 'Cơm bình dân', 'Phở các loại'],
    openingHours: {
        sau: {
            open: 12,
            close: 22,
        },
        bay: {
            open: 11,
            close: 23,
        },
        nhat: {
            open: 10,
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderThanhHoa: function({starterIndex, mainIndex, time, address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
    },

    orderMitom: function(a, b, c){
        console.log(`Ở đây bạn có thể ăn mì tôm với ${a}, ${b} hoặc ${c}`);
    }
};
restaurant.orderThanhHoa(
    {
        time: '22:30',
        address: 'Vĩnh Lộc',
        mainIndex: 2,
        starterIndex: 1,
    
    }
);

const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);
//  Thay đổi tên biến
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);
// Cách đặt giá trị mặc định
const {menu = [], starterMenu: starter = []} = restaurant;
// console.log(menu, starter);
// Các đối tượng lồng nhau
const {sau: {open, close}} = openingHours;
// console.log(open, close);

//  TOÁN TỬ SPREAD: sử dụng với mảng
const arr = [7,8,9];
console.log(...arr);
console.log(arr);
const arrNew = [1, 2, arr[0], arr[1], arr[2]];
console.log(arrNew);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Bánh cuốn'];
console.log(newMenu);


// Copy mảng
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// Nối 2 mảng
const menu_noi = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu_noi);

// TOÁN TỬ SPREAD: sử dụng với hàm
const luachon = [
    prompt ("Móm ăn kèm thứ nhất: "),
    prompt ("Móm ăn kèm thứ hai: "),
    prompt ("Móm ăn kèm thứ ba: "),
];
console.log(luachon);
// Sử dụng tương tự như đối với mảng12
restaurant.orderMitom(...luachon);

// TOÁN TỬ SPREAD: sử dụng với đối tượng
const restaurantNew = {
    founderIn: 2003,
    ...restaurant, 
    founder: 'Minh Quý',
    
}
console.log(restaurantNew);

// TOÁN TỬ && VÀ ||
restaurant.numGuests = 23;
const quests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(quests1);
const quests2 =  restaurant.numGuests || 10;
console.log(quests2);
// if(restaurant.orderThanhHoa){
//     restaurant.orderThanhHoa('Vĩnh Lộc', 'Hà Trung')
// }

// TOÁN TỬ LIÊN KẾT NULLISH
restaurant.numGuests = 0;
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);


// Thay đổi (ghi đè) giá trị khi đã khởi tạo từ ban đầu 
// let a = 12; 
// let b = 20;
// console.log(a, b);
// const obj = {a: 1, b: 3, c: 5};
// // Sử dụng dấu () để gán giá trị cho một đối tượng 
// ({a, b} = obj);
// console.log(a, b);

