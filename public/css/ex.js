let flag=0;
slideshow(flag);
function slideshow(num){
  let slide=document.getElementsByClassName('content');
slide[num].style.dispaly="block";
}
