const checkboxes = document.querySelectorAll(".topic");
const progress = document.getElementById("progress");

function updateProgress() {
    const total = checkboxes.length;
    const completed = document.querySelectorAll(".topic:checked").length;

    const percentage = Math.round((completed / total) * 100);

    progress.textContent = "Progress: " + percentage + "%";
}

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", updateProgress);
});
