let menu = ["rau xào", "thịt luộc", "gà rán"];
localStorage.setItem("menu",JSON.stringify(menu));
let input;

do{
  input = prompt("Mời người dùng nhập vào yêu cầu: C,R,U,D");
  if(input.toLowerCase().trim() == "c"){    
    menu.push(
        prompt("Mời người dùng nhập món ăn muốn thêm vào menu")
    )
  }
  else if(input.toLowerCase.trim == "r"){
     alert(menu.join(", "))
  }
  else if(input.toLowerCase.trim == "u"){
    let viTriPhanTuMuonTim = menu.indexOf(prompt("Mời người dùng nhập vào tên món muốn update"))
    menu[viTriPhanTuMuonTim] = prompt("Mời người dùng nhập vào tên món ăn mới")
  }
  else if(input.toLowerCase.trim == "d"){
    let viTriPhanTuMuonTim = menu.indexOf(prompt("Mời người dùng nhập vào tên món muốn Delete"))
    menu.splice(3,1)
  }
  
}
while(input == "c" || input =="r" || input =="u" || input =="d");




