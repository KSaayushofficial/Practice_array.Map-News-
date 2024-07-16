const projectsArray =[
    {
        id:1, 
        title:"First Project",
        sub_title: "This is the news description.",
        img:"https://media.cnn.com/api/v1/images/stellar/prod/ap24195803071965.jpg?c=original",
    },
    {
        id:2, 
        title:"Second Project",
        sub_title: "This is the news description.",
        img:"https://media.cnn.com/api/v1/images/stellar/prod/dareen-clip-10.jpg?c=16x9&q=h_540,w_960,c_fill",
    },
    {
        id:3, 
        title:"Third Project",
        sub_title: "This is the news description.",
        img:"https://media.cnn.com/api/v1/images/stellar/prod/231116135354-celestial-cabin-image-1.jpg?c=original",
    },
    {
        id:4, 
        title:"Fourth Project",
        sub_title: "This is the news description.",
        img:"https://media.cnn.com/api/v1/images/stellar/prod/dsc00035.jpg?c=original",
    },
]

const myContent = document.querySelector(".myContent")

const showInHtml = projectsArray.map((project, index)=>{
    return `
    <div class="col">
    <div class="card" style="width:18rem">
        <img src="${project.img}" style="width:40rem" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.sub_title}</p>
            <a href="#" class="btn btn-primary">Visit</a>
        </div>
    </div>
    </div>


    `
})
myContent.innerHTML = showInHtml