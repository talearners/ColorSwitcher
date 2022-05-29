const switchbtn = document.querySelector('#switch');
const colorbox = document.getElementById("colorbox");
const buttons = document.querySelectorAll('button')

switchbtn.addEventListener("click",()=>{
    let arrow = document.getElementById("arrow-icon");
    if (colorbox.style.display == "none" || colorbox.style.display == ""){
        colorbox.style.display = "block";
        arrow.style.transform = "rotate(-90deg)"

    }else{
        colorbox.style.display = "none";
        arrow.style.transform = "rotate(0deg)"
    }
})

for (var button of buttons){
    button.addEventListener("click",(e) =>{
        let target = e.target
        document.querySelector('.active').classList.remove('active');
        target.classList.add('active');
        let colors = target.getAttribute('data-color').split(' ');
        let root = document.querySelector(':root');
        if (colors[1].includes('-+-') == true){
            let multicolor = colors[1].split('-+-');
            root.style.setProperty("--sidebar-color","linear-gradient("+multicolor[0] + "," + multicolor[1] +")");
        }
        else{
            root.style.setProperty("--sidebar-color",colors[1]);
        }
        root.style.setProperty("--text-color",colors[0]);
        root.style.setProperty("--text-logo",colors[0]);
    });
}