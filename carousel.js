var allButtons = $('buttons>span')
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var p = index * -900
        
        $('#images').css({
            transfrom:'translate(' +p+ 'px)'
        })
        n=index
        activeButton(allButtons.eq(n))
    })
}

n = 0
var size = allButtons.length
playSide(n%size)
var timerId = setTimer()


function setTimer(){
    return setInterval(()=>{
        n+=1
        playSide(n%size)
    },1000)
}
function playSide(index){
    allButtons.eq(index).trigger('click')
}

function activeButton($button){
            $button
            .addClass('red')
            .siblings('.red').removeClass('red')
}

$('.windowImg').on('mouseenter',function(){
    window.clearInterval(timerId)
})
$('.windowImg').on('mouseleave',function(){
    timerId = setTimer()
})