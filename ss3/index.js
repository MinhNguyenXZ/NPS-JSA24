///Cú pháp lưu trữ với Localstorage

// let a = "Hello World!!";
// localStorage.setItem("a",a);

// let b = 123456
// localStorage.setItem("b",b);

// ///Cú pháp truy vấn dữ liệu với localStorage
// console.log(
//     localStorage.getItem("a")
// );

// console.log(
//     localStorage.getItem("b")
// );


////////Cú pháp chuẩn: Ép kiểu dữ liệu trước về String => lưu trữ với lS
// let a = 123456;
// localStorage.setItem("a", JSON.stringify(a));

// /// truy vấn dữ liệu từ LS với cú pháp chuẩn
// console.log(
//     JSON.parse(localStorage.getItem("a"))
// );


///Bài toán với lưu trữ mảng
// let arr = [1,2,3,4,"Hello," hi" , true, false, {name: "Hiếu", age: 26 }];

// localtorage.setItem("arr", JSON.stringify(arr));


// console.log(
//     JSON.parse(localStorage.getItem("arr"))
// );


let danhba = [
    {
        name:"Hiếu",
        phone:"123456",
        email:"hieu@gmail.com"
    },
    {
        name:"Minh",
        phone:"123456",
        email:"minh@fmail.com"
    }
]
localStorage.setItem("danhba",JSON.stringify(danhba))

console.log(
    JSON.parse(localStorage.getItem("danhba"))
);