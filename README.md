# odin_test
Hello Odin!

This is where I'll be going through The Odin Project. The readme itself includes random tidbits I've picked up along the way that are relevant to me as I'm learning, but probably won't be relevant to future me.

# vs code stuff
* ctrl shift p for shortcut

* commit messages go at the bottom of the file it opens, save and close it once done to commit

# css stuff
* in css, img.huge targets any images with the huge class, whereas .huge-image is a class of its own and while it can be applied to images, it can also be applied to literally anythinge else. so while on the front-end, these **should** function similarly (provided the rest of your code is good), it's bad practice to use the latter because it's asking for trouble, and makes your code unnecessarily hard to read

# git stuff
* refer [here](https://www.theodinproject.com/lessons/foundations-git-basics) for a crash course on how to set up git (incl. setting up commits in vs code)

* general order of affairs is git add FILENAME, git commit -m "message", git push

* instead of moving or deleting files locally, git mv or git rm them, then push the change - otherwise you'll make a mess

* rather than doing git add \*, it's best to git add files individually - that way you can add individual commit messages rather than all of your commit messages in one commit being the same