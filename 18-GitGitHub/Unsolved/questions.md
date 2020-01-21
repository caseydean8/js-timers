# Git Basic Interview Questions

1. What is the difference between Git and GitHub?
Git is the Version Controm System, and GitHub is the central server where the "versions" are stored.

2. Why would you use Git?
To easily collaborate with a team and have multiple back ups of files in case of server failure or hacking.

3. Why would you use GitHub?
To store project repos and be able to access those repos from any location.

4. What is the first step necessary to create a _local_ Git repository?
Create a git repo in github, or mkdir a new file and git init

5. Once a repository is created and linked to GitHub, what are the three commands you need to do each time you create or modify files to send something up to GitHub?
git add, git commit, git push
6. How do you update your local repository from GitHub?
git pull
7. What is one way to create a new branch?
git checkout -b ""
8. What is one way to check and see what branch you are currently in? (a terminal/bash command)?
git branch
9. What is it called when you make a request on GitHub to merge a branch into another branch?
pull request
10. How would you delete a _local_ Git repository?
rm -rf .git
11. What does `git clone` do?
adds a remote repo to local folder
12. What is "branching" for?
allowing multiple developers to work on the same file or set of files
