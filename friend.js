const loadFriend = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => buddyFriends(data))
}

loadFriend();

const buddyFriends = friends =>{
    console.log(friends);
    const buddys = friends.results;
    const frinedbuddy = document.getElementById('friends');
    for(const friend of buddys){
        const p = document.createElement('p');
        p.innerText = `Name: ${friend.name.first} Email: ${friend.email}`;
        frinedbuddy.appendChild(p);
    }
}