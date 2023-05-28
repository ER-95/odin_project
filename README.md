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
    * [when to use strong, b, em, and i](https://medium.com/@zac_heisey/when-to-use-strong-b-em-and-i-tags-in-your-markup-fa4d0af8affb)

** html reference sheets can be found [here (devdocs)](https://devdocs.io/html/) and [here (mozilla)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)

# css stuff
* things covered in foundations:
    * basic css (what it is, basic syntax, etc)
    * type selectors in css (e.g. div, p)
    * classes (preceded by .)
    * ids (preceded by #, unique)
    * grouping classes in css (i.e. class-one, class-two{[stylistic features]}) - for when different classes share some but not all stylistic features
    * chaining classes/ids in html (i.e. class="class-one class-two") - for when an element should have multiple classes or ids applied to it. similarly you can do .class-one.class-two{[stylistic features]} in css and it'll only apply those styles to elements with both of those classes. personally i feel like these should have different names as the html is the same whether you're applying multiple classes to the same element or applying styling to something with both classes in css - my opinion on this will likely change down the line as i see various use cases for it, but at the time of writing it's far more confusing than grouping and descendants
    * descendant combinators in css (.parent .child only selects .child if it's a child of (i.e. nested in) a .parent in the html - this can also be done on elements, so instead of .parent .child {[stylistic features]} you could do div p {[stylistic features]} to apply styling to any ps that are children of divs
    * the cascade (i.e. specificity)
        * css specificity is **weird** at first:
        * check out [this page (w3schools)](https://www.w3schools.com/css/css_specificity.asp) for a comprehensive breakdown
        * in essence:
            * a declaration that is more specific will take precedence over one that is less specific
            * it's a scoring system whereby each id used gets 100 points, each class, pseudo-class, or attribute selector) gets 10, and each element selector or pseudo-element gets 1 point
                * i.e. in general, an id selector beats class selectors, which beat type selectors
            * inline styling gets a specificity value of 1,000 and is always given highest priority unless the `!important` rule is used
            * the lower down a rule is in the file, the higher the priority (if all else is equal) - if font-size is set to 24px on the bottom line and also set higher up at 18px for two rules of equal priority, 24px will take priority - similarly if something is styled with equal priority in both styles.css and index.html, the styling in the html file will take priority
            * the universal (*) selector (and +, ~, >, and empty spaces) have no specificity value, so * {[stylstic features]} is overridden by everything
            * the > selector is called a child selector - whereas .parent .child will select any .child foudn in .parent, no matter how deep it is, .parent > .child will only target .child when it's a DIRECT descendant of .parent (rather than ones that are also further nested)
            * i don't fully understand these at the time of writing, but:
                * id selectors have a higher specificity than attribute selectors
                * class selector beats any number of element selectors (i.e. .class{} > div{})
            * children inherit typography-based properties (color, font-size, font-family, etc), but targeting it directly overrides this (i.e. if parent class has font-size x and child class isn't explicitly set to font-size y, it will inherit this - if it **is** explicitly set to font-size y, this will override the inheritance)

* css reference sheets can be found [here (devdocs)](https://devdocs.io/css/) and [here (mozilla)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

* in css, img.huge targets any images with the huge class, whereas .huge-image is a class of its own and while it can be applied to images, it can also be applied to literally anythinge else. so while on the front-end, these **should** function similarly (provided the rest of your code is good), it's bad practice to use the latter because it's asking for trouble, and makes your code unnecessarily hard to read

* for font-family, only use quotation marks around the font name if there are spaces in it (e.g. times new roman)

* best practice is to use a space before {, but not for = or "

* at the time of writing (i.e. this probably won't be relevant beyond june 2023), i'm not entirely sure what the use case is for ids, grouping, chaining, or descendants - i understand how to use them in theory, but in reality i'm not sure when to apply each

* best practice is to use hyphens instead of camelCase
            

# git stuff
* things covered in foundations:
    * setting up git, pretty much
        * refer [here (odin project)](https://www.theodinproject.com/lessons/foundations-git-basics) for a crash course (incl. setting up commits in vs code)

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

* done - look into css specificity - foundation test 6-cascade-fix says chaining selectors and ids gives a rule a higher specificity, but what is the exact order?

# useful reference material
* [the xy problem - how to ask questions](https://xyproblem.info/)
    * [how to ask smart questions](http://www.catb.org/esr/faqs/smart-questions.html)
* [live update the page you're working on](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
* [conventional commits - how to structure your commit messages](https://www.conventionalcommits.org/en/v1.0.0/)
* [devdocs - useful reference sheet for pretty much every language ever](https://devdocs.io/)