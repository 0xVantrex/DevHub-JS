//Search and filtering functionality

//function to convert search term from regular expression and implement search pattern
function escapeRegExp(string) {
  if (!string) return "";
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightMatch(text, searchTerm) {
  if (!searchTerm || searchTerm.trim() === "") return text;
  const safeTerm = escapeRegExp(searchTerm);
  const regex = new RegExp(`(${safeTerm})`, "gi");
  const highlighted = text.replace(regex, "<mark>$1</mark>");
  return highlighted;
}
    
function setupSearch(profilesArray) {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredProfiles = profilesArray.filter(profile =>
            profile.name.toLowerCase().includes(searchTerm) || 
            profile.skills.some(skill => skill.toLowerCase().includes(searchTerm))
        );
        displayFilteredProfiles(filteredProfiles, searchTerm);
    });
}


function displayFilteredProfiles(filtered, searchInput = "") {
  const container = document.getElementById('profilesContainer');
  container.innerHTML = '';

  if (filtered.length === 0) {
    const message = document.createElement('div');
    message.classList.add('no-results');
    message.textContent = 'No results found.';
    container.appendChild(message);
    return;
  }

  filtered.forEach(profile => {
    const highlightedName = highlightMatch(profile.name, searchInput);
    const highlightedSkills = profile.skills
      .map((skill) => highlightMatch(skill, searchInput))
      .join(", ");

    const profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');
    profileCard.innerHTML = `
      <h3>${highlightedName}</h3>
      <p><strong>Skills:</strong> ${highlightedSkills}</p>
    `;
    container.appendChild(profileCard);
  });
}

export { setupSearch, displayFilteredProfiles };