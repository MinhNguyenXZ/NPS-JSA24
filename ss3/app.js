// let arr=[1,2,3,4,5,6,7];
// for(let key in arr){
//     console.log(key);///key đại diện cho vị trí phần tử trong vòng lặp
//     console.log(arr[key]);
// }

///khi duyệt mảng bằng vòng lặp thường
// for(let i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let key of arr){
//     console.log(key);//Key:Đại diện cho giá trị phần tử trong vòng lặp
// }



///Đối với object
// let obj ={
//     name: "Hiếu",
//     age: 26,
// }
// for(let key in obj){
//     console.log(key);///Key:Đại diện cho khóa bên trong object
// }


//Chữa bài
let array=[
    ["Grape,15"],
    ["Banana,1"],
    ["Apple,20"],
    ["Watermelon,2"],
    ["Breast milk,2"],
    ["Star fruit,2"]
];

///In ra chữ dòng chữ:I have 15 grape
// console.log("I Have" + array[0][1] + " " array[0][0]);

// for(let i = 0; i < array.length; i++){
//     console.log(`I have ${array[i][1]} ${array[i][0]}`);
// }

// ///C2:Ứng dụng for of
// for(let key of array){
//     console.log(`I have ${key[1]} ${key[0]}`);
// }

var myDog = {
    "name":"Ngáo",
    "legs": 4,
    "friends":["everything!"]
};

myDog.name = "Husky"
console.log(myDog);

myDog.color = "brown";

delete myDog.friends;

console.log(myDog);


