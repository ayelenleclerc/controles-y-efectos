class Dim{
    static getWidth(el) {
        let style = el.currentStyle = window.getComputedStyle(el);
        return el.offsetWidth + parseFloat(style.marginRight) + parseFloat(style.marginLeft);
    }
}

class Choreography{

            constructor(container_selector, item_selector){
                this.container = document.querySelector(container_selector);
                this.elements = this.container.querySelectorAll(item_selector);

                this.elements.forEach(e=>{
                    e.style.opacity = 0;
                });

                this.element = 0;

                this.getNItems();
            }

            getNItems(){
                let itemWidth = Dim.getWidth(this.elements[0]);
                let containerWidth =this.container.clientWidth;
                let itemsPerRow = Math.floor(containerWidth / itemWidth);

                this.addDelay(itemsPerRow);
                this.elements.forEach(e => {e.classList.add("zoomIn")})
            }

            addDelay(itemsPerRow, x=0, y=0){
                if(x < (this.elements.length / itemsPerRow)){
                    if(y < itemsPerRow && this.element < this.elements.length-1){

                        this.elements[this.element].style.animationDelay = (x+y*50)+"ms";
                        this.element++;

                        this.addDelay(itemsPerRow, x, y+1);   
                    }else{
                        this.addDelay(itemsPerRow, x+1, 0);   
                    }
                }
            }  
        }

(function () {
    new Choreography(".row", ".card");
   
})();