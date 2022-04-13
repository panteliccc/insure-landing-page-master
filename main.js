var ind = true;
$('.btt').click(function(){
    if(ind == true){
        ind = false;
        $('.modal').css('display' , 'flex');
        $('.hero_img').css('display' , 'none');
    }
    else{
        $('.modal').css('display', 'none');
        $('.hero_img').css('display' , 'block');
        ind = true;
    }
});