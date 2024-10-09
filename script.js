function toggleMenu(element) {
    // Toggle the active class to the header for arrow rotation
    element.classList.toggle('active-submenu');
    
    // Find the next sibling (the submenu) and toggle its visibility
    const submenu = element.nextElementSibling;
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }
}
  