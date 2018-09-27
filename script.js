//show and element
let show = function (elem) {
	elem.style.display = 'block';
};
// Hide an element
let hide = function (elem) {
	elem.style.display = 'none';
};

async function getUser(name) 
{
    let response = await fetch(`https://api.github.com/users/${name}`);
    let data = await response.json()
    return data;
}

const success = document.querySelector("#success")
const input = document.querySelector("#input")
const finding = document.querySelector("#finding")
const submit = document.getElementById('submit')

function add_twitter_link_for (username, id) {
        let tweetLink = "https://twitter.com?status=" + encodeURIComponent("Found out I'm GitHub user " + id);
        var a = document.querySelector('#tweet'); //or grab it by tagname etc
        a.href = tweetLink;
}
          

function show_user(username, id) {
  document.querySelector('#username').innerHTML = username;
  document.querySelector('#id').innerHTML = id;
  hide(input);
  show(success);
}
 
let submitForm = function() {
  show(finding)
  let name = document.querySelector("#github_username").value;
  getUser(name).then(function(data){
    add_twitter_link_for(data.login, data.id)
    show_user(data.login, data.id)
  })
};
