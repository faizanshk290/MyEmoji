const myEmojis = ["👨‍💻","🦴","🎓"]

const emojiBoxEl = document.getElementById("emoji-container")
const inputEl = document.getElementById("input-btn")

const pushBtnEl = document.getElementById("push-btn")
const unshiftBtnEl = document.getElementById("unshift-btn")

const popBtnEl = document.getElementById("pop-btn")
const shiftBtnEl = document.getElementById("shift-btn")

function renderEmojis()
{
    let emojisString = ""
    for(let i = 0 ; i < myEmojis.length ; i++)
    {
        emojisString += 
        `
            <span>${myEmojis[i]}</span>
        
        `
    }
    emojiBoxEl.innerHTML = emojisString
}
renderEmojis()

pushBtnEl.addEventListener("click",()=>{
    if(inputEl.value)
    {
        myEmojis.push(inputEl.value)
        emojiBoxEl.value = ""
        emojiBoxEl.innerHTML = ""
        renderEmojis()
        inputEl.value = ""
    }
})

unshiftBtnEl.addEventListener("click",()=>{
    if(inputEl.value)
    {
        myEmojis.unshift(inputEl.value)
        emojiBoxEl.value = ""
        emojiBoxEl.innerHTML = ""
        renderEmojis()
        inputEl.value = ""
    }
})

popBtnEl.addEventListener("click",()=>{
    
    myEmojis.pop()
    emojiBoxEl.value = ""
    emojiBoxEl.innerHTML = ""
    renderEmojis()
    inputEl.value = ""
})

shiftBtnEl.addEventListener("click",()=>{
    
    myEmojis.shift()
    emojiBoxEl.value = ""
    emojiBoxEl.innerHTML = ""
    renderEmojis()
    inputEl.value = ""
})