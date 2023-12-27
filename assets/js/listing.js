class Listing{
  constructor(wrapper, list){
    this.list = list;
    this.wrapper = wrapper;
    this.listing()
    this.apply_width_value()
  }
  static createHTMLElement(tagName, className){
    let div = document.createElement(tagName);
    div.setAttribute("class",className);
    return div;
    
  }
  element_list(txt_label, percent_value){
    const label = Listing.createHTMLElement("span", "label");
    const percent = Listing.createHTMLElement("span", "percent")
    const progress = Listing.createHTMLElement("div","progress");
    const static_bar = Listing.createHTMLElement("div","static-bar");
    const wrapper_progress = Listing.createHTMLElement("div","wrapper-progress");
    const element_list = Listing.createHTMLElement("div","element-list");
    
    static_bar.appendChild(progress)

    
    element_list.appendChild(label)
    element_list.appendChild(static_bar)
    element_list.appendChild(percent)
    
    label.innerText = txt_label
    percent.innerText = percent_value + "%"
    
    return element_list;
  }
  
  listing(){
    let length_arr = this.list.length;
    
    for(let i=0; i < length_arr; i++){
      this.wrapper.appendChild(this.element_list(this.list[i][0], this.list[i][1]))
    }
  }
  apply_width_value(){
    let values =[]
    const node_static_bar = Array.from(document.querySelectorAll("div.stats-list div.static-bar"))
    let node_progress = Array.from(document.querySelectorAll("div.stats-list div.progress"))
    node_static_bar.map((n,index)=>{
      let width_v = this.progress_width_value(this.list[index][1], parseInt(getComputedStyle(n).width, 10));
      node_progress[index].style.width = width_v + "px";
    })
  }
  progress_width_value(progress_value, static_bar_width){
    return (progress_value * static_bar_width)/100;
  }
}

let stats_list = [
  ["HTML",99],
  ["CSS",95],
  ["UX/UI DESIGN", 65],
  ["Database SQL", 73],
  ["JavaScript",90],
  ["PHP", 78],
  ["Symphony", 55],
  ["React", 66]
]

let wrapper = document.querySelector("div.stats-dev div.stats-list")

new Listing(wrapper, stats_list);