function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

function selectOption(optionName) {
    document.getElementById('selectedOption').innerText = optionName;
    hideSubDropdown();
}

function selectOptionWithSubOptions(optionName) {
    document.getElementById('selectedOption').innerText = optionName;
    showSubDropdown();
}

function selectSubOption(subOptionName) {
    document.getElementById('selectedSubOption').innerText = subOptionName;
}

function showSubDropdown() {
    document.getElementById('subDropdown').style.display = 'block';
}

function hideSubDropdown() {
    document.getElementById('subDropdown').style.display = 'none';
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.sub-dropbtn')) {
        hideDropdowns();
    }
};

function hideDropdowns() {
    var dropdowns = document.querySelectorAll('.dropdown-content, .sub-dropdown-content');
    dropdowns.forEach(function (dropdown) {
        dropdown.style.display = 'none';
    });
}
