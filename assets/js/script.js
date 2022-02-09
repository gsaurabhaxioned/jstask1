const photo=document.querySelectorAll('.photo');
for(i=0;i<=photo.length-1;i++){
    photo[i].addEventListener('click',function(){
        for(let j=0;j<=photo.length-1;j++){
            photo[j].style.width="7.1%";
        }
        this.style.width="70%";
    });
}















