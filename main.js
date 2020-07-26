const projects = [
    {
    title: "Cool Project", 
    screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIm5WcdPN0JE9ssXr0S0HuLu2QHO30ckmDAg&usqp=CAU", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/ryanmcnair", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/ryanmcnair",
  }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    }
    

const createProjectCards = () => {
    let domString = '';

    for (let i = 0; i < projects.length; i++) {
        domString += `<div class="project">`
        domString +=    `<h1>${projects[i].title}</h1>`;
        domString +=    `<div><img src=${projects[i].screenshot}></div>`;
        domString +=    `<h2>Description: ${projects[i].description}</h2>`;
        domString +=    `<h3>Technologies Used: ${projects[i].technologiesUsed}</h3>`;
        domString +=    `<h3>${projects[i].available}</h3>`;
        domString +=    `<h4><a href=${projects[i].url}>See the project here</a</h4>`;
        domString +=    `<h5><a href="${projects[i].githubUrl}">GitHub</a></h5>`;
        domString += `</div>`
 
    }
    printToDom('projectsPage', domString);
  }
  createProjectCards();
  console.log(projects[0].description)