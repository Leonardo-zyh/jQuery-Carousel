var allButtons = $('buttons>span')
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var p = index * -900
        
        $('#images').css({
            transfrom:'translate(' +p+ 'px)'
        })
        n=index
        allButtons.eq(n)
            .addClass('red')
            .siblings('.red').removeClass('red')
    })
}

n = 0
var size = allButtons.length
allButtons.eq(n%size).trigger('click')

var timerId = setInterval(()=>{
    n+=1
    allButtons.eq(n%size).trigger('click')
},1000)

$('.windowImg').on('mouseenter',function(){
    window.clearInterval(timerId)
})
$('.windowImg').on('mouseleave',function(){
    timerId = setInterval(()=>{
        n += 1
        allButtons.eq(n).trigger('click')
    },1000)
})