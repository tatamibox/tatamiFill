
const loadProfileButton = document.querySelector('.loadProfileButton');

//form selectors
const discordField = document.querySelector('#discord');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');
const submitNewProfileButton = document.querySelector('.submitNewProfile');
//

// profile constructor
const profiles = [chrome.storage.sync.get('Profiles')];
class Profile {
    constructor(email, discord, password) {
        this.email = email;
        this.discord = discord;
        this.password = password;
    }
}
//

// set fields to chrome storage sync
submitNewProfileButton.addEventListener('click', (e) => {
    e.preventDefault();
    const profile = new Profile(emailField.value, discord.value, passwordField.value);
    profiles.push(profile);
    chrome.storage.sync.set({ Profiles: profiles });
    chrome.storage.sync.get('Profiles');
})
//

export { profiles };




