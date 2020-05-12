$(function(){

$('.add').on('click', function(){
    $('.list').append('<li>item</li>');
});
$('.remove').on('click',function(){
    $('.list li:last-child').remove();
    //let a=$('.list li');
    //a[a.length-1].remove();
});

});