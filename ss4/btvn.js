//Cau 1

// let height = 5;

// for (let i = 1;i <= 5; i++){
//     let line = ""

//     //In ra khoang trang ben trai
//     for(let j = 1;j <= height - i;j++){
//         line = line + " ";
//     }
     

//     for(let k = 1;k <= 2*i - 1;k++){
//         line= line + "1"
//     }
//     console.log(line);
// }

//Cau 2
// let arr = [1,2,3,4,5,6,7,8,9,10,0];
// for(let key of arr){
//     if(key %2 == 0){  ///Ktra so chan
//         console.log(key);
//     }
// }

//De luyen tap
let danhba = [
    {
        name: "Quan",
        phonenumber:123456789,
        email:"quan@gmail.com",
    },
    {
        name: "Le Anh",
        phonenumber:6868686868,
        email:"leanh@gmail.com",
    },
];
//Luu tru trong localStorage
localStorage.setItem("danhba",JSON.stringify(danhba));

let input;
do{
  input = prompt("Moi nguoi dung nhap vao yeu cau C,R,U,D.Nhap Q de thoat chuong trinh");
  if(input.toLowerCase().trim() == "c"){
    createContact();
  }
  else if(input.toLowerCase.trim == "r"){
    readContact();
  }
  else if(input.toLowerCase.trim == "u"){
    updateContact();
  }
  else if(input.toLowerCase.trim == "d"){
    deleteContact();
  }
  else{
     alert("Chua dung yeu cau nhap.Moi nhap lai!!!")
  }
}
while(input == "c" || input =="r" || input =="u" || input =="d" && input != "q");


function createContact(){
    const data = {
        
            name:prompt("Moi nguoi dung nhap vao ten muon them") ,
         phonenumber:prompt("Moi nguoi dung nhap vao so dien thoai muon them"),
         email:prompt("Moi nguoi dung nhap vao email muon them"),
        
    }

    let getDanhBa = JSON.parse(localStorage.getItem("danhba")); ///Day la lay du lieu LS ve
    getDanhBa.push(data); ///Them moi data vao mang

    localStorage.setItem("danhba",JSON.stringify(getDanhBa)); /// Cap nhat mang moi nhat da duoc them len LS
    return data;
}

function readContact(){
    let getDanhBa = JSON.parse(localStorage.getItem("danhba")); ///Day la lay du lieu LS ve
    for(let key of getDanhBa){
        console.log(`${key.name}: ${key.phonenumber}`);
    }
}

function updateContact(){
    let getDanhBa = JSON.parse(localStorage.getItem("danhba")); ///Day la lay du lieu LS ve
    let nameUpdate = prompt("Moi nguoi dung nhap vap ten muon update").trim();

    let vitriDanhBaCanUpdate = getDanhBa.indexOf()

    for(let key in getDanhBa){
        if(getDanhBa[key].name == nameUpdate){
            vitriDanhBaCanUpdate = key
        }
    }
    
    getDanhBa[vitriDanhBaCanUpdate] = createContact()

    localStorage.getItem("danhba",JSON.stringify(getDanhBa));
}
