
var lastindex = 0;

var images = document.querySelectorAll('.container img');

images.forEach(function(item,index){
    document.querySelectorAll('.bullet-single')[index].addEventListener('click', function(){
        let lastimage = document.querySelectorAll('.container img')[lastindex];
        let actualimage = document.querySelectorAll('.container img')[index];

        // Resetar os bullets e setar a nova com base na imagem
        
        document.querySelectorAll('.bullet-single')[lastindex].classList.remove('active-bullet');

        document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet');

        lastimage.style.opacity = 0;
        actualimage.style.opacity = 1;

        lastindex = index;

    })
})