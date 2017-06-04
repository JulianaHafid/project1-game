Git and GitHub Intro Lab

Introduction

Note: This can be a pair programming activity or done independently.
Let's apply what we've learned from class to share and update each other's code. With a partner, you're going going to alternate between who 'drives' and who 'navigates' while following the requirements under "Exercise" below. The goal will be to create a project, have a partner fork, clone, and edit the project, submit the changes as a pull request, and then have the changes merged.

Be sure to look at the previous lesson for notes and helpful hints.

Exercise

Partners will be referred to as partner1 and partner2.

Setup

Part 1

With partner1 driving:

create a seperate folder called git-and-github-practice

within that folder create the following files index.html, style.css, and scripts.js

copy and paste the code from the index.html and style.css into your own files

add // JavaScript to be added to your scripts.js file

initiate a git repository, commit your changes, and push to GitHub

With partner2 driving, from their computer:

get your partners link to the GitHub repository and fork and clone it

open script.js and paste in the follow

window.onload = function(){
  var button = document.getElementById("button-yellow");
  button.addEventListener("click", function(event){
    prompt('What is your email?')
  });
}
commit your changes and submit a pull request back to partner1

With partner1 driving:

merge the pull request from the GitHub interface
Part 2

With partner2 driving:

create a folder called git-and-github-practice-two
within that folder create the following files index.html, style.css, and script.js
copy and paste the code from the merged pull request files (of your partners git-and-github-practice project) from each of the appropriate files to your own
initiate a git repository, commit your changes, and push to GitHub
Note: Partner2 should now have the solution from Part 1 locally
With partner1 driving:

get your partner's link to the new GitHub repository - fork and clone it

open script.js and paste in the follow

window.onload = function(){
  var button = document.getElementById("button-yellow");
  button.addEventListener("click", function(event){
    prompt('What is your email?');
    button.innerHTML = "Thanks for your email!"
  });
}
commit your changes and submit a pull request back to partner2

With partner2 driving:

merge the pull request from the GitHub interface
Bonus:

use the syncing a fork documentation to update partner2's local version of git-and-github-practice without copying and pasting any code
push the updated local copy to GitHub
Deliverable

There is no screenshot for this lab. You should have two separate GitHub repositories that have merged pull requests. Try not to, but if you need, peak at the command line/code answers to part 1 for help.

Additional Resources

Git documentation
Forking on github
Syncing a fork
