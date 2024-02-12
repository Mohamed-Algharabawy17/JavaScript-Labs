
document.addEventListener("DOMContentLoaded", async function() {
    try 
    {
        let users = await fetchUserDataFetch();
        displayData(users);
    } catch (error) {
        console.error('Error fetching and displaying user data: ', error);
    }
});

async function fetchUserDataFetch() 
{
    try 
    {
        let response = await fetch('https://dummyjson.com/users');
        // console.log(response);
        if (!response.ok) 
        {
            console.log(`Error fetching user data: ${response.statusText}`);
        }
        // console.log(response.json());
        return response.json();
    } catch (error) {
        console.log(`Error fetching user data: ${error}`);
    }
}

function displayData(users) 
{
    let usersMainDiv = document.getElementById('usersMainDiv');
    // console.log(users.users);
    users.users.forEach(user => {
        let userDiv = document.createElement('div');
        userDiv.classList.add('user');
        let img = document.createElement('img');
        img.src = user.image;
        img.alt = 'User';
        let Id = document.createElement('p');
        Id.textContent = `ID: ${user.id}`;
        let email = document.createElement('p');
        email.textContent = `E-mail: ${user.email}`;
        userDiv.appendChild(img);
        userDiv.appendChild(Id);
        userDiv.appendChild(email);
        usersMainDiv.appendChild(userDiv);
    });
}
