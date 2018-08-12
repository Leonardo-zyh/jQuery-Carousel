let n
initialize()           //状态机
let timer = setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))            
        })
        makeCurrent(getImage(n+1))
            n += 1
},3000)

document.addEventListener('visibilitychange',function(e){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setInterval(() => {
            makeLeave(getImage(n))
                .one('transitionend', (e) => {
                    makeEnter($(e.currentTarget))            
                })
                makeCurrent(getImage(n+1))
                    n += 1
        },3000)
                
    }
})











function initialize() {
    n = 1
    $(`.images>img:nth-child(${n}`).addClass('current')
        .siblings().addClass('enter')
}
function getImage(n){
    return $(`.images>img:nth-child(${x(n)}`)
}
function x(n) {
    if (n > 0) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    return n
}



function makeCurrent($node){
    return $node.addClass('current').removeClass('enter leave')
}
function makeEnter($node){
    return $node.addClass('enter').removeClass('current leave')
}
function makeLeave($node){
    return $node.addClass('leave').removeClass('enter current')
}