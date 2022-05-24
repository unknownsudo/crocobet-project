const $29ef2dd485efba1c$var$request = async (path)=>{
    const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';
    try {
        const response = await fetch(`${API_ENDPOINT}/${path}`);
        return await response.json();
    } catch (e) {
        console.log(e);
    }
};
// this function creates user posts template
const $29ef2dd485efba1c$var$buildPostsPage = (name, posts)=>{
    const postTemplates = posts.map(({ title: title , body: body  })=>`
      <div class='post'>
        <h2 class='post-title'>${title}</h2>
        <p class='post-body'>${body}</p>
      </div>
    `
    );
    const container = document.querySelector('#container');
    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button');
    homeButton.innerText = 'Home';
    homeButton.addEventListener('click', $29ef2dd485efba1c$var$buildUsersPage);
    container.innerHTML = `
    <h1 class='heading'>Posts of ${name}</h1>
      
    <div class='container-inner'>
      ${postTemplates.join('')}
    <div>
  `;
    container.appendChild(homeButton);
    postTemplates.join('');
};
const $29ef2dd485efba1c$var$buildUsersPage = async ()=>{
    try {
        const users = await $29ef2dd485efba1c$var$request('users');
        const posts = await $29ef2dd485efba1c$var$request('posts');
        const container = document.querySelector('#container');
        container.innerHTML = '';
        users.forEach((user)=>{
            const userPosts = posts.filter(({ userId: userId  })=>userId === user.id
            );
            const button = document.createElement('button');
            button.classList.add('user-button');
            button.textContent = user.name;
            button.addEventListener('click', ()=>{
                container.replaceChildren($29ef2dd485efba1c$var$createUserDetailsTemplate(user, userPosts));
            });
            container.appendChild(button);
        });
        return users;
    } catch (e) {
        console.log(e);
    }
};
// this function creates user details template
const $29ef2dd485efba1c$var$createUserDetailsTemplate = ({ name: name , email: email , username: username , website: website , address: { suite: suite , street: street , city: city , zipcode: zipcode  }  }, userPosts)=>{
    const div = document.createElement('div');
    const postsButton = document.createElement('button');
    const homeButton = document.createElement('button');
    postsButton.classList.add('posts-button');
    homeButton.classList.add('home-button');
    homeButton.textContent = 'Home';
    postsButton.textContent = 'View Posts';
    postsButton.addEventListener('click', ()=>$29ef2dd485efba1c$var$buildPostsPage(name, userPosts)
    );
    homeButton.addEventListener('click', $29ef2dd485efba1c$var$buildUsersPage);
    div.classList.add('user-details');
    div.innerHTML = `
    <h1 class='heading'>User details for ${name}</h1>
    
    <div class='container-inner'>
      <dl class='definition-list'>
        <dt class='definition-list-key'>Name:</dt>
        <dd class='definition-list-value'>${name}</dd>
        
        <dt class='definition-list-key'>Email:</dt>
        <dd class='definition-list-value'>${email}</dd>
        
        <dt class='definition-list-key'>Username:</dt>
        <dd class='definition-list-value'>${username}</dd>
        
        <dt class='definition-list-key'>Address:</dt>
        <dd class='definition-list-value'>${suite} ${street}, ${city}, ${zipcode}</dd>
        
        <dt class='definition-list-key'>Website:</dt>
        <dd class='definition-list-value'>
          <a href='http://${website}'>${website}</a>
        </dd>
      </dl>
    </div>
  `;
    div.appendChild(postsButton);
    div.appendChild(homeButton);
    return div;
};
// start
(async ()=>await $29ef2dd485efba1c$var$buildUsersPage()
)();


//# sourceMappingURL=index.js.map
