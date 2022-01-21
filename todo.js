window.addEventListener("load", function () {
    let x = document.getElementById("addBtn")
    x.addEventListener("click", function () {
        //alert("hello world"); 
        
        let date=document.getElementById("date");
        let display = document.getElementById("myInput");
        let y=document.createElement("li");
        y.addEventListener("click", function(){y.classList.toggle("checked")})
        y.innerText=display.value+"  "+date.value
        document.getElementById("myUl").appendChild(y)
        let btn=document.createElement("BUTTON");
         btn.innerHTML="x";
         btn.addEventListener("click", function(){y.remove()})
      y.appendChild(btn);
      btn.classList.add("remove")
      document.getElementById("myUl").appendChild(y);
      display.value="";
      
     
    });
});

