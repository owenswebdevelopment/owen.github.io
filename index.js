//code to disable color-switcher
let colorIcons = document.querySelector(".color-icon"),
icons =  document.querySelector(".color-icon .icons")

icons.addEventListener("click",()=>{
    colorIcons.classList.toggle("open");
})

//js code to switch colors and night mode 
let buttons = document.querySelectorAll(".btn");

for (var button of buttons) {
    button.addEventListener("click" , (e)=>{
        
        let target = e.target;

        let open = document.querySelector(".open");
        if(open) open.classList.remove("open");

        document.querySelector(".active").classList.remove("active");
        target.classList.add("active");

        //js code to switch colors and night mode 

        let root = document.querySelector(":root"),
        dataColor = target.getAttribute("data-color"),
        color = dataColor.split(" "); 

        root.style.setProperty("--white", color[0])
        root.style.setProperty("--black", color[1])
        root.style.setProperty("--nav-main", color[2])
        root.style.setProperty("--switcher-main", color[3]);
        root.style.setProperty("--light-bg", color[4]);

        let iconName = target.className.split(" ")[2],
        colorText = document.querySelector(".home-content span");

          if(target.classList.contains("fa-moon")){ //if icon name is moon
        target.classList.replace(iconName, "fa-sun"); //replace it with the sun
        colorIcons.style.display = "none";
        colorText.classList.add("darkMode");
      }else if (target.classList.contains("fa-sun")) { //if icon name is sun
        target.classList.replace("fa-sun", "fa-moon"); //replace it with the sun
        colorIcons.style.display = "block";
        colorText.classList.remove("darkMode");
        document.querySelector(".btn.blue").click();
      }

    })
}

