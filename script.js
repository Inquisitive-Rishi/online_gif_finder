const img = document.querySelector('img')
const input = document.querySelector('input')
const searchBtn = document.querySelector('button')

img.style.height = '300px'
img.style.aspectRatio = 1;  

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    img.src = '';
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=l9wddb2iB91ZMFFD1U2BXvF4C5wubzBG&s=${input.value}`, {mode:'cors'})
    .then(response => response.json())
    .then(response => {
        img.src = response.data.images.original.url;
        console.log(img.src)
    })    
    input.value = '';
})

