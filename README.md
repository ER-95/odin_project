# odin_test
Hello Odin!

This is where I'll be going through The Odin Project. The readme itself includes random tidbits I've picked up along the way that are relevant to me as I'm learning, but probably won't be relevant to future me.

Apologies for the insistence on all lowercase in the readme - it makes it a lot easier for me to jot down my nonsense

# vs code stuff
* ctrl shift p for shortcut

* commit messages go at the bottom of the file it opens, save and close it once done to commit

* commit files one by one, add a commit message for each, then sync - don't stage all your files in one go, then commit and sync straight away

* add the below to preferences: open keyboard shortcuts (json):
```
[
    // ...
    {
        "key": "ctrl+tab",
        "command": "workbench.action.nextEditor"
    },
    {
        "key": "ctrl+shift+tab",
        "command": "workbench.action.previousEditor"
    }
]
```

* disable "HTML: Auto Create Quotes" in preferences

# html stuff
* html foundations covers:
    * what tags are and examples of them
        * div
        * p
        * h1-h6
        * ul vs ol (and li)
        * strong
        * em
        * comments
        * img
        * a href (both relative and absolute)
    * what a boilerplate html file should include (see [here](./1-html-boilerplate/index.html))
    * what should go in the head (meta tags, title)

# css stuff
* things covered in foundations:
    * basic css (what it is, basic syntax, etc)
    * type selectors in css (e.g. div, p)
    * classes (preceded by .)
    * ids (preceded by #, unique)
    * grouping classes in css (i.e. class-one, class-two{[stylistic features]}) - for when different classes share some but not all stylistic features
    * chaining classes/ids in html (i.e. class="class-one class-two") and css - for when an element should have multiple classes or ids applied to it. similarly you can do .class-one.class-two{[stylistic features]} in css and it'll only apply those styles to elements with both of those classes
    * descendant combinators in css (.parent .child only selects .child if it's a child of (i.e. nested in) a .parent in the html)

* in css, img.huge targets any images with the huge class, whereas .huge-image is a class of its own and while it can be applied to images, it can also be applied to literally anythinge else. so while on the front-end, these **should** function similarly (provided the rest of your code is good), it's bad practice to use the latter because it's asking for trouble, and makes your code unnecessarily hard to read

* for font-family, only use quotation marks around the font name if there are spaces in it (e.g. times new roman)

* best practice is to use a space before {, but not for = or "

* at the time of writing (i.e. this probably won't be relevant beyond june 2023), i'm not entirely sure what the use case is for ids, grouping, chaining, or descendants - i understand how to use them in theory, but in reality i'm not sure when to apply each

* best practice is to use hyphens instead of camelCase

# git stuff
* things covered in foundations:
    * setting up git, pretty much
        * refer [here](https://www.theodinproject.com/lessons/foundations-git-basics) for a crash course (incl. setting up commits in vs code)

* general order of affairs is git add FILENAME, git commit -m "message", git push

* when using the git cli, instead of moving or deleting files via an explorer, git mv or git rm them, then push the change - otherwise you'll make a mess. note: this doesn't apply when using vs code as it does this for you

* rather than doing git add \*, it's best to git add files individually - that way you can add individual commit messages rather than all of your commit messages in one commit being the same

# notes for myself
## i won't be clearing these out when they're completed, but it's nice to have a history of where i've been and where i am in comparison - i'll probably at least mark them as complete

* look into what these do - they're not covered by The Odin Project
```
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* done - look into when to use ids, grouping, chaining, and descendants