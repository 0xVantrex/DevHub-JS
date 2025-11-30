//localstorage handling

const STORAGE_KEY = "devhub_profiles";

//save profiles array to local storage
function saveProfiles(profiles) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
        console.log(" profile saved successfully on", new Date().toLocaleString());
    } catch (err) {
        console.error("Could not save profile:", err);
    }
}

//let's now load profile saved from the local storage

function loadProfiles() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            return JSON.parse(data);
        }
        else{
            return [];
        }
    } catch(err){
        console.error("could not load profiles", err);
        return [];
    }
}


// clearing profiles

function clearProfiles(){
    localStorage.removeItem(STORAGE_KEY);
}

export { saveProfiles, loadProfiles, clearProfiles};