const s = (selector, i = 0) => document.querySelectorAll(selector)[i] ;

const trigger_click = elements => elements.map(el => el.click()); 

const classes = ['.wpO6b  ', '.coreSpriteRightPaginationArrow'];

const insta_bot = n => {
   let 
      like = null , 
      arrow = null;
   window.setInterval(() => { 
      cuore = s(classes[0],1) ; 
      freccia = s(classes[1]); 
      trigger_click([like,arrow]);
   }, n);
};


insta_bot(2000); // You can change this.

/*

const youtube_bot = n => {
   let dislike = document.querySelectorAll('.yt-simple-endpoint')[10];
   window.setInterval(() => dislike.click(),n);
};


youtube_bot(75);

*/
