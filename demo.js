function drag(e){
    const task = document.querySelector(".task")
    let pos = window.getComputedStyle(task)
    let left = parseFloat(pos.left)
    let top = parseFloat(pos.top)
    task.style.left = left+e.movementX+'px'
    task.style.top = top+e.movementY+'px'
}

const dragElement=document.querySelector(".drag")
dragElement.addEventListener("mousedown", () =>{
    document.addEventListener("mousemove", drag)
    document.addEventListener("mouseup", () =>{
        document.removeEventListener("mousemove", drag)
    })
})
