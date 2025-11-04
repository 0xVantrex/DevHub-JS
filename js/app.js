//Main controller for the application
import {loadProfile, saveProfiles } from './storage.js';
import { renderProfiles, addProfile, editProfile, deleteProfile } from './profile.js';
import { updateStats } from './stats.js';
import { searchprofiles } from './search.js';
import { toggletheme} from './theme.js';
import { fetchGitHubData} from './github.js';

let profiles = [];

window.addEventListener('DOMContentLoaded', () => {
    profiles = loadProfiles();
    renderProfiles(profiles);
    updateStats(profiles);
    loadTheme();
});