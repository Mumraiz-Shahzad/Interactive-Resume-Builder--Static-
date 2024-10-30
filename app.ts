// app.ts
document.addEventListener("DOMContentLoaded", () => {
    console.log("Static Resume Loaded");

    // Toggle Skills Section
    const toggleSkillsButton = document.getElementById("toggleSkills") as HTMLButtonElement | null;
    const skillsList = document.getElementById("skillsList");

    if (toggleSkillsButton) { // Check if toggleSkillsButton is not null
        toggleSkillsButton.addEventListener("click", () => {
            if (skillsList) { // Check if skillsList is not null
                if (skillsList.style.display === "none" || skillsList.style.display === "") {
                    skillsList.style.display = "block"; // Show skills
                } else {
                    skillsList.style.display = "none"; // Hide skills
                }
            }
        });
    } else {
        console.error("Toggle Skills button not found.");
    }
});


