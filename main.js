//Get Element 
let sliderImage =Array.from(document.querySelectorAll(".slider-container img"))
// slide Number String Element
let slideNumberElement = document.querySelector(".slide-number")
// Priveous And Next Button
let nextBtn =document.querySelector(".next")
let prevBtn =document.querySelector(".prevent")

//Get Number Of Slide
let slideCout=sliderImage.length;

//Set current Slide 
let currentSlide =1;

// Handle Click on Previous and Next Button
nextBtn.addEventListener("click",nextSlide)
prevBtn.addEventListener("click",previousSlide)

// Create The Main UL Element
let createULElement=document.createElement("ul");
createULElement.setAttribute("id","pagination-ul");

//craete List Items Based On Slides Count
for(let i=1;i<=slideCout;i++){
// Create The LI
createULItem =document.createElement("li");
// Set Custom Attrbute
createULItem.setAttribute("data-index",i);
// set Item Content
createULItem.appendChild(document.createTextNode(i));
// Append item To The Main Ul List
createULElement.appendChild(createULItem)
}
// Add The Craeted Ul Eleemnt To Page
document.querySelector(".indicator").appendChild(createULElement)
// Get The new craeted Ul
let paginationCraedteUl=document.getElementById("pagination-ul")

// Get Bulttes Item | Array.form To convert to Array
let paginationBulttes =Array.from(document.querySelectorAll("#pagination-ul li"))

// Loop Through All Bulltes Items
for(let i=0 ;i<paginationBulttes.length;i++){
  paginationBulttes[i].onclick = function(){
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChcker();  
}

}


 // Trigger the checker function 
 theChcker();

// function Next Slide 
function nextSlide(){
if(nextBtn.classList.contains("disabled")){
return false
}else{
    currentSlide++;
    theChcker();
}
}

// function Previos Slide 
function previousSlide(){
    if(prevBtn.classList.contains("disabled")){
        return false
        }else{
            currentSlide--;
            theChcker();
        }
}

// create The Checker Function
 function theChcker(){
    // Set The Slide Number
 slideNumberElement.textContent = `Slide # ` + (currentSlide) + ` of ` + (slideCout);
 
 //// call Function Remove All Actve Class
 removeAllActive()
 // Set Active Class Current slide
  sliderImage[currentSlide -1].classList.add("active")
 // Set Active Class On Current Pagination item
 createULElement.children[currentSlide -1].classList.add("active")
console.log( createULElement.children)
// check if Current Slide The First

if (currentSlide ==1){
// Add disable class on previous Button
   prevBtn.classList.add("disabled")
}else{
    // remove disable class on previous Button
  prevBtn.classList.remove("disabled")
}

// check if Current Slide The Latset

if (currentSlide ==slideCout){
// Add disable class on previous Button
   nextBtn.classList.add("disabled")
}else{
    // remove disable class on previous Button
    nextBtn.classList.remove("disabled")
}

}

// Remove All Actve Class from Image and pagination buttles

function removeAllActive(){

// loop Through images
 sliderImage.forEach((img)=>{
    img.classList.remove("active")
 })

 // loop Through Pagination Bulltes 
 paginationBulttes.forEach((l)=>{
 l.classList.remove("active")
 })
}