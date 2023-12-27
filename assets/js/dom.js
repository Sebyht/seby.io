let project_cards = Array.from(document.querySelectorAll("div.project div.card"));

let obs = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.style.opacity=1
    }
  })
}, {
  threshold : 0.6
})
project_cards.forEach((pc)=>{
  obs.observe(pc)
})
obs.observe(document.querySelector("div.profile"))
obs.observe(document.querySelector("footer"))

let node_bar_progress = Array.from(document.querySelectorAll("div.stats-list div.progress"))
let node_value = Array.from(document.querySelectorAll("div.stats-list span.percent"))

node_bar_progress.map((node, index)=>{
  let width_px = parseInt(getComputedStyle(node).width)
  let value_txt = parseInt(node_value[index].innerText)
  let i = 0;
  let time = setInterval(()=>{
  i++
  if(i < width_px){
    node.style.width = i + "px";
    if(i < value_txt){
      node_value[index].innerText = i + "%";
    }
  }else{
    clearInterval(time)
    node.style.width = width_px + "px"
  }
}, 40)
})

let dep_bar = document.querySelector("div.profile div.bar-dep")
let education = document.querySelector("div.profile div.education")
let is_deployed = false
dep_bar.addEventListener("click",()=>{
  if(!is_deployed){
    setTimeout(()=>{
      education.style.display = "block";
      education.style.opacity = 1;
    }, 200)
    is_deployed = true;
  }else{
    education.style.display ="none";
    is_deployed = false;
  }
})