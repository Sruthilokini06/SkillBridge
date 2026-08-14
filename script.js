function showPath(path) {

    const result = document.getElementById("result");

    const paths = {

        "Web Development":
            "HTML → CSS → JavaScript → Git/GitHub → React → Projects → Internship",

        "AI & ML":
            "Python → Mathematics → Machine Learning → AI Tools → Projects",

        "Data Science":
            "Python → SQL → Statistics → Data Visualization → Projects",

        "UI/UX Design":
            "Design Thinking → Figma → User Research → Prototyping → Portfolio"
    };

    result.innerHTML = `
        <h3>🚀 ${path} Roadmap</h3>
        <p>${paths[path]}</p>
    `;

    result.style.display = "block";
}
function getRecommendation() {

    const goal = document.getElementById("goal").value;
    const level = document.getElementById("level").value;
    const result = document.getElementById("recommendationResult");

    if (goal === "" || level === "") {
        result.style.display = "block";
        result.innerHTML = "⚠️ Please select both your goal and current level.";
        return;
    }

    let path = "";

    if (goal === "internship") {
        path = `
            <h3>🚀 Your Internship Roadmap</h3>
            <p>HTML/CSS → JavaScript → Git/GitHub → Projects → Resume → Internships</p>
        `;
    }

    else if (goal === "job") {
        path = `
            <h3>💼 Your Job Preparation Roadmap</h3>
            <p>Programming → DSA → Core CS → Projects → Aptitude → Interview Preparation</p>
        `;
    }

    else if (goal === "skill") {
        path = `
            <h3>📚 Your Skill-Building Roadmap</h3>
            <p>Choose a skill → Learn fundamentals → Practice → Build projects → Create portfolio</p>
        `;
    }

    else if (goal === "project") {
        path = `
            <h3>🛠️ Your Project Roadmap</h3>
            <p>Find a problem → Research → Design → Build → Test → Deploy → Showcase</p>
        `;
    }

    result.style.display = "block";

    result.innerHTML = `
        ${path}
        <hr>
        <strong>Current Level:</strong> ${level.charAt(0).toUpperCase() + level.slice(1)}
        <br><br>
        💡 Keep learning, practicing, and building!
    `;
}