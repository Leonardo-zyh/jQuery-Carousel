var allButtons = $('#buttons>span')
    
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var p = index * -900
        $('#images').css({
            transform:'translate(' + p + 'px)'
        })
        n = index
        allButtons.eq(n)
            .addClass('red')
            .siblings('.red').removeClass('red')
        
    })
}

var n = 0
var size = allButtons.length 
allButtons.eq(n % size).trigger('click')

var timerId = setInterval(()=>{
    n+=1
    allButtons.eq(n % size).trigger('click')
},2500)

$('.windowImg').on('mouseenter', function(){
    window.clearInterval(timerId)
})
$('.windowImg').on('mouseleave', function(){
    timerId = setInterval(()=>{
    n+=1
    allButtons.eq(n%size).trigger('click')
},2500)
})

document.addEventListener('visibilitychange',function(e){
if(document.hidden){
    window.clearInterval(timerId)
}else{
    timerId = setInterval(()=>{
    n+=1
    allButtons.eq(n%size).trigger('click')
},2500)
            
}
})