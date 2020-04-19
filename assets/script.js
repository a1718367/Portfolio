
window.addEventListener("resize", function(){
    let viewportwidth = window.innerWidth;
    console.log(viewportwidth);
if(viewportwidth<=568){
    document.getElementById('banner').style.height="25rem";
    document.getElementById('bannertext').style.paddingTop="5rem"
}else{
    document.getElementById('banner').style.height="40rem";
    document.getElementById('bannertext').style.paddingTop="15rem"
    
}
    
})

$('#quiz').on('click',function(){
    window.open('https://a1718367.github.io/quiz_generator/','_blank')
})
$('#golf').on('click',function(){
    window.open('https://a1718367.github.io/GolfApp-v2/', '_blank')
})
$('#weather').on('click',function(){
    window.open('https://a1718367.github.io/weatherApp/', '_blank')
})