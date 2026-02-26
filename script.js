document.addEventListener("DOMContentLoaded", function () {

    const skills = document.querySelectorAll(".skills-grid div");

    const colors = [
        "#FF6B6B",
        "#4ECDC4",
        "#1A535C",
        "#FF9F1C",
        "#6A4C93",
        "#2EC4B6",
        "#E71D36",
        "#3A86FF"
    ];

    skills.forEach(skill => {

        skill.addEventListener("mouseenter", function () {

            // Pick random color
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            skill.style.backgroundColor = randomColor;
            skill.style.transform = "scale(1.1)";
            skill.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
        });

        skill.addEventListener("mouseleave", function () {

            skill.style.backgroundColor = "#111";
            skill.style.transform = "scale(1)";
            skill.style.boxShadow = "none";
        });

    });

});
