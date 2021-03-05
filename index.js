const s = (selector, i = 0) => document.querySelectorAll(selector)[i] ;

const trigger_click = elements => elements.map(el => el.click()); 

const classes = ['.wpO6b  ', '.coreSpriteRightPaginationArrow'];

const insta_bot = n => {
   let 
      like = null , 
      arrow = null;
   window.setInterval(() => { 
      like = s(classes[0],1) ; 
      arrow = s(classes[1]); 
      trigger_click([like,arrow]);
   }, n);
};

const youtube_bot = n => {
   let dislike = s('.yt-simple-endpoint',10);
   window.setInterval(() => dislike.click(),n);
};

//insta_bot(2000); 

//youtube_bot(75);


