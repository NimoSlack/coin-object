let mainElement=document.querySelector('body')
let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           if(Math.random()>.5){
                this.state = 1
           } else{ 
                    this.state = 0
           }
           

    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           if(this.state === 1 ){ 
               return "Heads" 

           } else{
               return "Tails"
           }
           
            document.body.append(this.state)
    }, 
    toHTML: function() {
        let image = document.createElement('img');
        

    
        
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
           
           if(this.state === 1 ){
               image.src = "assets/images/coin_heads.png"
               
            } else{
                image.src = "assets/images/coin_tails.png"
            }
        return document.body.append(image);
        
        
    
    }
    
    
};
coin.flip()
console.log(coin.toString())
coin.toHTML()
// for (let display20Flips = 0; display20Flips >= 20; display20Flips++)
// for (let display20Images = 0; display20Images >= 20; display20Images++)
function display20Flipss() {
    let bbq = document.createElement('h1')
    document.body.append(bbq)
    for (let display20Flips = 0; display20Flips >= 20; display20Flips++) {
        coin.flip()
        bbq.append(coin.toString() + ",")
        
    } 
}
display20Flipss()