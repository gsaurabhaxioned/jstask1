const photo=document.querySelectorAll('.photo');
const photo_title=document.querySelectorAll('a');
const photo_source=document.querySelectorAll('img');
console.log(photo_title);
for(let i=0;i<=photo.length-1;i++){
    photo[i].addEventListener('click',function(){
        for(let j=0;j<=photo.length-1;j++){
            photo[j].style.width="7.1%";
            photo_title[j].style.display="none";
            photo_source[j].style.borderRadius="100px";

        }
        this.style.width="70%";
        photo_title[i].style.display="block";
        photo_source[i].style.borderRadius="50px";
    });
}















