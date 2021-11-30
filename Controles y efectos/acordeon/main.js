class Accordeon{
    constructor(selector, multiple = true){
        this.accordeon = document.querySelector(selector);
         this.multiple = multiple;
        this.bindEvents();
       
    }

    bindEvents(){
        this.accordeon.querySelectorAll(".item header").forEach(itemHeader => {
            itemHeader.addEventListener("click", () => {
                let item = itemHeader.parentNode;
                this.validateMultiple(item);
                item.classList.toggle("active");
            })
        });
    }
    validateMultiple(selectedItem) {
        if (this.multiple) return;

        this.accordeon.querySelectorAll(".item").forEach(item => {
            if(selectedItem == item) return;
            item.classList.remove("active");
        })
    }
}

(function () {
    new Accordeon(".accordeon", false);
})();