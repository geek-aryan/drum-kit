let numberOfButtons=document.querySelectorAll('.drum').length

for(let i=0;i<numberOfButtons;i++)
{
    document.querySelectorAll('.drum')[i].addEventListener('click',function(e)
    {
        let btniInnerHTML=this.innerHTML
        makeSound(btniInnerHTML) 
        makeAnimate(btniInnerHTML)
    })
}

document.addEventListener('keypress',function(e){
    makeSound(e.key)
    makeAnimate(e.key)
})

function makeSound(key)
{
    switch (key) {
        case "w":
            var sound=new Audio('sounds/tom-1.mp3')
            sound.play()
            break;
        case "a":
            var sound=new Audio('sounds/tom-2.mp3')
            sound.play()
            break;
        case "s":
            var sound=new Audio('sounds/tom-3.mp3')
            sound.play()
            break;
        case "d":
            var sound=new Audio('sounds/tom-4.mp3')
            sound.play()
            break;
        case "j":
            var sound=new Audio('sounds/snare.mp3')
            sound.play()
            break;
        case "k":
            var sound=new Audio('sounds/crash.mp3')
            sound.play()
            break;
        case "l":
            var sound=new Audio('sounds/kick-bass.mp3')
            sound.play()
            break;
        
        default:
            console.log(btniInnerHTML)
            break;
    }
}

function makeAnimate(key)
{
    document.querySelector("."+key).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed")
    },100)
}