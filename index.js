// window.addEventListener('load', generatememe);
// async function generatememe(){
//     const response = await fetch("https://meme-api.com/gimme/wholesomememes")
//     const data = await response.json()
//     console.log(data);
//     console.log(data.url);

//     title.innerHTML = data.title;
//     image.setAttribute('src',data.url)
// }

document.addEventListener('DOMContentLoaded', function () {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const title = document.querySelector('.title')
            title.innerHTML = data.title;
            console.log(data.title);

            const image = document.querySelector('.image')
            image.setAttribute('src', data.url);
        })
        .catch(error => console.error('Error fetching meme:', error));
});


