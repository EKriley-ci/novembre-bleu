function toggleSidebar() {
    const sidebar = document.getElementById("sideBar");
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-100%"; // Cache la sidebar en la déplaçant à droite
    } else {
        sidebar.style.right = "0px"; // Affiche la sidebar en la ramenant à gauche
    }
}
