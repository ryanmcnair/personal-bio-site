const projects = [
    {
    title: "The Sorting Hat", 
    screenshot: "https://user-images.githubusercontent.com/67588177/89460999-d595fc80-d730-11ea-80b0-8203658c656f.png", 
    description: "Tasked with bringing the Hogwarts Sorting Hat to life. Users are asked to add their name on a form. The name is then randomly assigned a house value and color. The end result is a card that shows username, house value, a background color that matches the house and an expel button to remove the card from display.",
    technologiesUsed: "HTML, CSS, JavaScript & Bootstrap",
    available: true,
    url: "https://sortinghat-mcnair.netlify.app/",
    githubUrl: "https://github.com/ryanmcnair/sorting-hat",
  },
    {
    title: "Product Cards", 
    screenshot: "https://user-images.githubusercontent.com/67588177/89460343-bfd40780-d72f-11ea-8489-a9de88929c38.png", 
    description: "Tasked with building a grid of cards for a company's products",
    technologiesUsed: "HTML & CSS",
    available: true,
    url: "https://rmcnair-productcards.netlify.app/",
    githubUrl: "https://github.com/ryanmcnair/ASSIGNMENT-product-cards",
  },
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    }
    
const createProjectCards = () => {
  let domString = "";
    for(let i = 0; i < projects.length; i++){
      if (projects[i].available){
        domString+=`<div class="project-card">
                      <img src="${projects[i].screenshot}" alt="${projects[i].title}" class="project-image">
                      <div class="project-details">
                      <h1 class="project-details-title">${projects[i].title}</h1>
                             <p class="project-details-description">${projects[i].description}</p>
                             <p class="project-details-technologies">Technologies used: ${projects[i].technologiesUsed}</p>
                             <a class="project-details-link" href="${projects[i].url}">${projects[i].url}</a><p></p>
                             <a class="project-details-git" href="${projects[i].githubUrl}">${projects[i].githubUrl}</a>
                            </div>
                          </div>` 
          }
      }
      printToDom("projectsPage", domString);
  }
createProjectCards();