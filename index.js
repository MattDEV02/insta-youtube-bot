const s = (selector, i = 0) => document.querySelectorAll(selector)[i] ;

const trigger_click = elements => elements.map(el => el.click()); 

const classes = ['.wpO6b  ', '.coreSpriteRightPaginationArrow'];

const insta_bot = n => {
   let 
      cuore = null , 
      freccia = null;
   window.setInterval(() => { 
      cuore = s(classes[0],1) ; 
      freccia = s(classes[1]); 
      trigger_click([cuore,freccia]);
   }, n);
};


insta_bot(750); // You can change this.
