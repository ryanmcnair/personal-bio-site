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
        domString +=    `<h2>${projects[i].title}</h2>`
        domString +=    `<img src="${projects[i].screenshot}/>`
        domString +=    `<div>Description: ${projects[i].description}</div>`
        domString +=    `<h3>${projects[i].technologiesUsed}</h3>`
        domString +=    `<a href="${projects[i].url}">See the project here</a><br></br>`
        domString +=    `<a href="${projects[i].githubUrl}">GitHub</a>`
        domString += `</div>`
 
    }
    printToDom('projectsPage', domString);
  }
  createProjectCards();