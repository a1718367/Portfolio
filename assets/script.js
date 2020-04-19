
resize();
window.addEventListener("resize", function(){

    let viewportwidth = window.innerWidth;
    console.log(viewportwidth);
if(viewportwidth<=568){
    document.getElementById('banner').style.height="25rem";
    document.getElementById('bannertext').style.paddingTop="3rem";
    document.getElementById('about').style.paddingTop="1rem";
    document.getElementById('about').style.fontSize="20px";
    document.getElementById('bannertext').style.textAlign="center";
}else{
    document.getElementById('banner').style.height="50rem";
    document.getElementById('bannertext').style.paddingTop="8rem";
    document.getElementById('about').style.paddingTop="15rem";
    document.getElementById('about').style.fontSize="25px";
    document.getElementById('bannertext').style.textAlign="right";
    
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

window.addEventListener('scroll',function(){
    let y = window.pageYOffset;
    console.log(y);
if(y<=200){
    document.getElementById('h3').style.color="white";
}else{
    document.getElementById('h3').style.color="black"
};
if(y<=440){
    document.getElementById('h2').style.color="white";
}else{
    document.getElementById('h2').style.color="black"
};
if(y<=660){
    document.getElementById('h1').style.color="white";
}else{
    document.getElementById('h1').style.color="black"
}
})

function resize(){
let viewportwidth = window.innerWidth;
    console.log(viewportwidth);
if(viewportwidth<=568){
    document.getElementById('banner').style.height="25rem";
    document.getElementById('bannertext').style.paddingTop="3rem";
    document.getElementById('about').style.paddingTop="1rem";
    document.getElementById('about').style.fontSize="20px";
    document.getElementById('bannertext').style.textAlign="center";
}else{
    document.getElementById('banner').style.height="50rem";
    document.getElementById('bannertext').style.paddingTop="8rem";
    document.getElementById('about').style.paddingTop="15rem";
    document.getElementById('about').style.fontSize="25px";
    document.getElementById('bannertext').style.textAlign="right";
    
}
}