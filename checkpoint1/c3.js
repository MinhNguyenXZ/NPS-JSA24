let a = [
    {
        name: "Quan",
        password: 123456,
        dob: '01/02/2008',
        gender:"male"
    }
];

localStorage.setItem("a",JSON.stringify(a));

console.log(
    localStorage.getItem("a")
);

let b = [
    {
    name: "Le Anh",
    password:686868,
    dob:'02/03/2008',
    gender:"male"
    }
];

localStorage.setItem("b",JSON.stringify(b));

console.log(
    localStorage.getItem("b")
);

