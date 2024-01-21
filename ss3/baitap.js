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