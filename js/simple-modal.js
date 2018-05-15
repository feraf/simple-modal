var initSimpleModal = function(){
    let $ = param => document.querySelector(param);
    let $s = param => document.querySelectorAll(param);
    
    let modals = $s("[sm-modal]");
    modals.forEach(modal => {
        modal.classList.add("sm-modal");
        let modalType = modal.getAttribute("sm-modal");
        if (modalType) modal.classList.add(modalType);
    });

    let openers = $s("[sm-open]");
    openers.forEach(opener => {
        opener.onclick = function(){
            let target = this.getAttribute("sm-open");
            if (!target) return;

            $(target).classList.add("show");
            createOverlay(target);
        }
    });

    let createOverlay = function(targetName){
        let target = $(targetName);
        let overlay = document.createElement("div");

        overlay.setAttribute("id", "modal-overlay");
        overlay.classList.add("sm-overlay");

        let blurElement = target.getAttribute("sm-blur");
        if (blurElement) $(blurElement).classList.add("sm-blur");

        overlay.onclick = function(){
            overlay.remove();
            target.classList.remove("show");
            if (blurElement) $(blurElement).classList.remove("sm-blur");
        }

        $("body").appendChild(overlay);
    }
}