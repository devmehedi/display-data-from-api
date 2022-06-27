
const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = buddies => {
    const buddy = buddies.results;
    console.log(buddy);
    const buddiesContainer = document.getElementById('buddies');
    for (const user of buddy) {
        const p = document.createElement('p');
        p.innerText = `Name: ${user.name.title} ${user.name.first} ${user.name.last}
        Gender: ${user.gender}
        Age: ${user.dob.age}
        Phone: ${user.phone}
        E-mail: ${user.email}
        Location: ${user.location.country}`;
        buddiesContainer.appendChild(p)
    }
}