// JavaScript for Modal functionality

// Example project data
const projectData = {
    project1: {
        image: "Images/Golf GTI TC.png",
        title: "Volkswagen Golf GTI TC!",
        description: "Speed and performance master, on road and track."
    },
    project2: {
        image: "Images/Golf.png",
        title: "Volkswagen Golf MK2!",
        description: "A timeless classic merging vintage style with modern flair."
    },
    project3: {
        image: "Images/Jeep.png",
        title: "Jeep Wrangler",
        description: "Ready to take you anywhere, from urban roads to off-road adventures."
    },
    project4: {
        image: "Images/Lamborghini.png",
        title: "Lamborghini Aventador",
        description: "A dream car that captures attention with its power and speed."
    },
    project5: {
        image: "Images/Retro.png",
        title: "Retro Cars",
        description: "Experience vintage elegance with a true gem on wheels."
    },
    project6: {
        image: "Images/Royal Enfield.png",
        title: "Royal Enfield",
        description: "A perfect fusion of retro style and modern performance."
    }
};

// Function to open modal and display project details
function openModal(projectId) {
    const project = projectData[projectId];
    if (project) {
        document.getElementById("modalImage").src = project.image;
        document.getElementById("modalTitle").textContent = project.title;
        document.getElementById("modalDescription").textContent = project.description;
        document.getElementById("projectModal").style.display = "flex";
    }
}

// Function to close modal
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Event listeners for projects and close button
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        openModal(project.getAttribute('data-id'));
    });
});

document.querySelector('.close').addEventListener('click', closeModal);

// Scroll to Projects
function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}