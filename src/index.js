console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded",function(){
    fetchDogImages()
    fetchDogbreeds()
})
function fetchDogImages(){
    fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then(response=>response.json())
    .then(data=>{
        let images = data.message
        //console.log(images)
        images.forEach(image => {
            //console.log(image)
            loadImagetoDom(image)
            
        })});
}
function loadImagetoDom(image){
    let dogConst = document.getElementById("dog-image-container")
    let ourImage = document.createElement("img")
    ourImage.src= image
    dogConst.appendChild(ourImage)
}
function fetchDogbreeds(){
    fetch(breedUrl = 'https://dog.ceo/api/breeds/list/all')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        let breedNames = data.message
        for(namez in breedNames){ 
            loadBreedNameToDom(namez)
        console.log(namez)}
    })
}
function loadBreedNameToDom(namez){
    let tagToAdd=document.getElementById("dog-breeds")
    let newTag = document.createElement("li")
    newTag.innerText=namez
    tagToAdd.appendChild(newTag)
}