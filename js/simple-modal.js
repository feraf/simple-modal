window.onload = function(){
    let $ = function(param){
        return document.querySelector(param);
    }

    console.log("Initializing modal openers click handlers.");

    let openers = document.querySelectorAll("[data-modal-opener]");
    openers.forEach(opener => {
        opener.onclick = function(){
            let target = this.getAttribute("data-modal-opener");
            console.log(target);
            if (target){
                $(target).classList.add("show");
                let overlay = document.createElement("div");
                overlay.setAttribute("id", "modal-overlay");
                overlay.classList.add("overlay");
                overlay.onclick = function(){
                    overlay.remove();
                    $(target).classList.remove("show");
                }
                $("body").appendChild(overlay);
            }
        }
    })
}