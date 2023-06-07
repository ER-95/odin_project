# odin_test
Hello Odin!

This is where I'll be going through The Odin Project. The readme itself includes random tidbits I've picked up along the way that are relevant to me as I'm learning, but probably won't be relevant to future me. This mostly consists of things that catch me off guard or are otherwise unexpected.

Apologies for the insistence on all lowercase in the readme - it makes it a lot easier for me to jot down my nonsense

# vs code stuff
* `ctrl + shift + p` for shortcut

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

* disable `HTML: Auto Create Quotes` in preferences

* vs code doesn't like `#` in filenames/folder names - `!` and `.` are okay

* disable `Workbench > Editor: Enable Preview` in preferences

* `ctrl + /` comments things out

# html stuff
* html foundations covers:
    * what tags are and examples of them
        * `div`
        * `p`
        * `h1`-`h6`
        * `ul` vs `ol` (and `li`) (unordered lists, ordered lists, and points in lists)
        * `strong`
        * `em`
        * `comments`
        * `img`
        * `a href` (both relative and absolute)
        * `span` (for only marking up part of a piece of text - see [this file](./4-css-test\index.html) for more info)
    * what a boilerplate html file should include (see [here](./1-html-boilerplate/index.html))
    * what should go in the head (meta tags, title)
    * [when to use strong, b, em, and i](https://medium.com/@zac_heisey/when-to-use-strong-b-em-and-i-tags-in-your-markup-fa4d0af8affb)

* html reference sheets can be found [here (devdocs)](https://devdocs.io/html/) and [here (mozilla)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)

# css stuff
* things covered in foundations:
    * basic css (what it is, basic syntax, etc)
    * type selectors in css (e.g. `div{[stylistic features]}`, `p{[stylistic features]}`)
    * classes (preceded by `.`)
    * ids (preceded by `#`, unique)
    * grouping classes in css (i.e. `class-one, class-two{[stylistic features]}`) - for when different classes share some but not all stylistic features
    * chaining classes/ids in html (i.e. `class="class-one class-two`) - for when an element should have multiple classes or ids applied to it. similarly you can do `.class-one.class-two{[stylistic features]}` in css and it'll only apply those styles to elements with both of those classes. personally i feel like these should have different names as the html is the same whether you're applying multiple classes to the same element or applying styling to something with both classes in css - my opinion on this will likely change down the line as i see various use cases for it, but at the time of writing it's far more confusing than grouping and descendants
    * descendant combinators in css (`.parent .child` only selects `.child` if it's a child of (i.e. nested in) a `.parent` in the html - this can also be done on elements/types, so instead of `.parent .child {[stylistic features]}` you could do `div p {[stylistic features]}` to apply styling to any `p`s that are children of `div`s
    * the cascade (i.e. specificity)
        * css specificity is **weird** at first:
        * check out [this page (w3schools)](https://www.w3schools.com/css/css_specificity.asp) for a comprehensive breakdown
        * in essence:
            * a declaration that is more specific will take precedence over one that is less specific
            * it's a scoring system whereby each id used gets 100 points, each class, pseudo-class (e.g. `:hover` and `:first-of-type`), or attribute selector(e.g. `[checked]`) gets 10, and each type selector or pseudo-element (e.g. `:before` and `:selection`) gets 1 point
                * i.e. in general, an id selector beats class selectors, which beat type selectors
            * inline styling gets a specificity value of 1,000 and is always given highest priority unless the `!important` rule is used
            * the lower down a rule is in the file, the higher the priority (if all else is equal) - if `font-size` is set to `24px` on the bottom line and also set higher up at `18px` for two rules of equal priority, `24px` will take priority - similarly if something is styled with equal priority in both `styles.css` and `index.html`, the styling in the html file will take priority
            * the universal (`*`) selector (and `+`, `~`, `>`, and empty spaces: ` `) have no specificity value, so `* {[stylstic features]}` is overridden by everything
            * the `>` selector is called a child selector - whereas `.parent .child` will select any `.child` found in `.parent`, no matter how deeply nested it is, `.parent > .child` will only target `.child` when it's a DIRECT descendant of `.parent` (rather than ones that are also further nested)
            * i don't fully understand these at the time of writing, but:
                * now understood -  id selectors have a higher specificity than attribute selectors
                * now understood - class selector beats any number of element selectors (i.e. `.class{}` will always beat `div{}`)
            * children inherit typography-based properties (`color`, `font-size`, `font-family`, etc), but targeting it directly overrides this (i.e. if parent class has `font-size` set to `18px` and child class isn't explicitly set to `font-size: 24px`, it will inherit `18px` - if it **is** explicitly set to `font-size: 24px`, this will override the inheritance)
            * the number of hits on the highest reached level matter - `.paragraph:first-of-type` has two hits on the fourth level (one class and one pseudo-class) whereas `p.paragraph` has one hit on the fourth level (`.paragraph`) and one on the fifth (`p` - a type selector)
            * from highest to lowest priority:
                1. anything that applies to an active transition
                2. `!important`
                3. anything that applies to an active animation
                4. almost everything else:
                    1. inline styling
                    2. `@layer`
                    3. id
                    4. class/attribute/pseudo-class
                    5. type/pseudo-element
                5. position on `styles.css`

* css reference sheets can be found [here (devdocs)](https://devdocs.io/css/) and [here (mozilla)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

* other useful css info can be found at [csstricks](https://css-tricks.com/)

* in css, `img.huge` targets any images with the `huge` class, whereas `.huge-image` is a class of its own and while it can be applied to images, it can also be applied to literally anythinge else. so while on the front-end, these **should** function similarly (provided the rest of your code is good), it's bad practice to use the latter because it's asking for trouble, and makes your code unnecessarily hard to read

* for `font-family`, only use quotation marks around the font name if there are spaces in it (e.g. "`Times New Roman"` vs `Verdana`)

* best practice is to use a space before `{`, but not for `=` or `"`

* at the time of writing (i.e. this probably won't be relevant beyond june 2023), i'm not entirely sure what the use case is for ids, grouping, chaining, or descendants - i understand how to use them in theory, but in reality i'm not sure when to apply each

* best practice is to use hyphens instead of camelCase

* in your browser's console, a strikethrough on a css style means it's overridden by something else

* when adding css via browser console, if you want to apply something universally throughout the page, ensure you have the root `<html>` tag selected - where your css goes depends on what you have selected

* the box model:
    * every element in a webpage is a box - `p`s are wrapped in boxes, `h1`s are, `img`s are, etc
    * `padding`, `margin`, and `border`:
        * `padding` increases the space between the border of a box and the content of the box
        * `margin` increases the space between the borders of a box and the borders of adjacent boxes.
        * `border` adds space (even if it’s only a pixel or two) between the margin and the padding
        * take a look at the below image for a visual explanation:<br>
        ![](!readme-images/padding-margin-border.png)
        * `margin` doesn't double up - if two elements next to one another have a `margin` of `60px`, the `margin` will be `60px` and not `120px` - if one has a `margin` of `70px`, the total `margin` will be `70px` (i.e. the one with the largest `margin` is picked)
        * the `height` of an element is actually calculated as `height` + `padding` + `border`, unless we use `box-sizing: border-box;` when we do this, the `height`/`width` of the element are dynamically assigned based on the `padding` + `border` (so if an element has `100px` `height`, `20px` `padding`, and `20px` `border`, it will be `140px` in total, but if we use `border-box`, the `height` will dynamically decrease to `60px`) - `border-box` is almost always used
    * boxes take both outer and inner display types:
        * outer display types include `block` and `inline`:
            * `block`:
                * box breaks onto a new line
                * `width` and `height` properties are respected
                * `padding`, `margin`, and `border` will cause other elements to be pushed away
                * if `width` is not specified, box will fill as much space available in its container as possible
                * some html elements such as `h1` and `p` use `block` as their default
            * `inline`:
                * will not break onto a new line
                * `width` and `height` are ignored
                * top and bottom `padding`, `margin`, and `border`s apply but don't cause other inline boxes to move away
                * left and right `padding`, `margin`, and `border`s apply and DO cause other inline boxes to move away
                * some html elements such as `a`, `span`, `em`, and `strong` use `inline` as their default
                * generally speaking, you don't want to add padding/margin to inline elements
        * inner display types dicate how elements inside that box are laid out
            * this can be changed by setting, for example, `display: flex` - the element will still keep `display: block`, but any direct children of this block will be come `flex` items (see: [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox))
        * there is also a middle ground of `display: inline-block` which behaves like an inline element but has block-style padding and margin, but generally `flexbox` is used instead
    * `div` and `span` have no implicit meaning, they primarily exist to hook `id`s or `class`es onto blocks.
        * `div` is usually used to divide the page into different blocks
        * `span` can be used to group text/inline elements and is only used when nothing else is appropriate (e.g. highlighting text in a `p`)
    * `margin-left: auto` will align an element to the right end of its container
    * increasing the `margin` of one element effectively increases the size of its container - so take into account size changes when using margin. if one element has `margin: 12px` then applying `margin: auto` to something else in the same container, whil it will take the `margin` of the other element into account, might not look right visually because the margin isn't visible - use borders (see `box-container` class [here](./6-css-margin-and-padding\1-margin-and-padding\index.html) and [here](./6-css-margin-and-padding\1-margin-and-padding\style.css) for more info) or inspect element to help with debugging
    * ran into an interesting issue when doing 2-margin-and-padding:
        * `text-align: center` worked as expected
        * i wanted to approach it with a different solution by wrapping the text in `span` tags and using `margin: auto`
        * this didn't work
        * solution: `span` is an `inline` element by default, so the `margin` was effectively ignored - we had to make the `display: flex` as well
        * we could also wrap it in `p` tags and set the `width` to `fit-content`, because `p` is a `block` by default

* ul has a default padding of 40px, so you might want to override this
    
* flex stuff:
    * `justify-content: center` to a container is usually functionally the same as adding `margin: 0 auto` to that container's children (but the latter is bad practice, generally)- remember, `justify-content` does exactly what it says, it **aligns the contents inside it, and not the element itself** - `align-self` aligns an actual element and takes precedence over `justify-content` and `align-content`
        * `justify-content: space-around` puts equal spacing on both sides of the items, including at the edges, whereas `space-between` puts space between them (so goes to the edge of the container)
    * `display: flex` only applies to direct children of a container rather than grandchildren. similarly, `justify-content` only applies to direct children, not children of children - see [this exercise](./8-flexbox/3-flex-header-2/index.html) for a good example of this
    * items inside `containers-2`, which in turn is inside `container-1`, doesn't count as an item in `container-1` (i.e. items aren't found recursively) - an item is only really a child of its direct container. in the below code, the only items in `menu` are `date` and `links`
        ~~~~
        <div class='menu'>
            <div class='date'>Aug 14, 2016</div>
            <div class='links'>
                <div class='signup'>Sign Up</div>
                <div class='login'>Login</div>
            </div>
        </div>
        ~~~~
    * `align-items` is used for vertical alignment, but when you rotate a container's direction, the `justify-content` property also rotates, so `justify-content` and `align-content` switch functions - **the best way to see this is that `justify-content` applies along the main axis, and `align-items` applies along the cross axis**
    * by default, `flex-direction: row-reverse` only applies on a per row basis - `order` applies throughout the whole container
    * `order` is `0` by default, if we change an item's order to `1`, ceteris paribus it would move to the end of the container
    * `flex: initial` overrides something inherited like `flex: 1`, so rather than scaling, it lets you set fixed widths
    * applying `margin-left: auto` to something in a container will move it to the right hand side of the container; it will also shift any items after that item in the container
    * `flex: 1` is equivalent to `flex: 1 1 0` which is also equivalent to `flex-grow: 1; flex-shrink: 1; flex-basis: 0`
    * `flex-grow` defines how quickly an item increases in size to take up the extra space beyond its defined `width` or `flex-basis`
    * `flex-shrink` defines how quickly an item shrinks in size when the container is too small
    * `flex-basis` defines the base size of an item - above this, the `flex-grow` multiplier will apply how quickly it scales up in relation to other elements, and below this, the `flex-shrink` value will apply - so it's not the `width`, so much as "this is the minimum width we'd like it to be in an ideal world, but you can shrink if necessary, provided `flex-shrink` is set to `1`
    * setting `flex-basis` to `auto` means that they use their defined `height` when `flex-direction` is `column` (similarly, defined `width` is used when `flex-direction` is `row`) - if we simply use `flex: 1` then `flex-basis` is set to `0px`, meaning that the height of any columns created will be `0`
    * `height` overrides `flex: 1` when `flex-direction` is `row`, and `width` overrides `flex: 1` when `flex-direction` is `column` - no matter what, the item won't go above these values
    * `justify-self` is ignored in flexbox - if we want to move something to the end of the container, we set `margin-top` or `margin-left` to `auto` depending on where we want it to go
    * by default, children bunch at the start of the primary axis, and stretch to fill the entire container along the cross axis
    * `min-width` is set to the the length of the longest unbreakable string of characters for elements containing text, but can be set manually - content will overflow from the container if `min-width` is bigger than the size of the container
    * when `flex-wrap` is set to `wrap`, `align-items` applies to the items on each individual row, whereas `align-content` applies to every row in that box
    * we can use `@media all and (max-width: VALUE) { .container{} }` to apply conditional formatting based on display width (see [this css-tricks article](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for more info)
    * remember to set `display: flex`!!! this needs to be done in multiple places depending on what you want to flex - usually you'll want to apply this to anything whose children should flex. similarly, you don't want to overuse flex - while you can achieve what you want, [this exercise](./8-flexbox/4-flex-information/index.html) is a good example of how you can achieve the same without using flexbox

# git stuff
* things covered in foundations:
    * setting up git, pretty much
        * refer [here (odin project)](https://www.theodinproject.com/lessons/foundations-git-basics) for a crash course (incl. setting up commits in vs code)

* general order of affairs is `git add FILENAME`, `git commit -m "message"`, `git push`

* when using the git cli, instead of moving or deleting files via an explorer, `git mv` or `git rm` them, then push the change - otherwise you'll make a mess. note: this doesn't apply when using vs code as it does this for you

* rather than doing `git add *`, it's best to git add files individually - that way you can add individual commit messages rather than all of your commit messages in one commit being the same

# to-do list
## i won't be clearing these out when they're completed, but it's nice to have a history of where i've been and where i am in comparison - i'll probably at least mark them as complete

* look into what these do - they're not covered by The Odin Project
```
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* done - look into when to use ids, grouping, chaining, and descendants

* done - look into css specificity - foundation test 6-cascade-fix says chaining selectors and ids gives a rule a higher specificity, but what is the exact order?

* done (see flexbox notes) - why doesn't `justify-self: flex-end` do the same as `margin: auto`?

* need to learn css grid

# useful reference material
* [devdocs - useful reference sheet for pretty much every language ever](https://devdocs.io/)
* [css specificity on w3schools](https://www.w3schools.com/css/css_specificity.asp)
* [the css cascade - a beautiful page with tests on specificity](https://2019.wattenberger.com/blog/css-cascade)
* [flexbox cheat sheet](https://flexbox.malven.co/)
* [interactive guide to flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
* [css-tricks flexbox cheat sheet](./!readme-images/css-flexbox-poster.png)

# supplementary links
* [the xy problem - how to ask questions](https://xyproblem.info/)
    * [how to ask smart questions](http://www.catb.org/esr/faqs/smart-questions.html)
* [live update the page you're working on](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
* [conventional commits - how to structure your commit messages](https://www.conventionalcommits.org/en/v1.0.0/)
* [introduction to flexbox - interneting is hard](https://internetingishard.netlify.app/html-and-css/flexbox/index.html)
* [interneting is hard as a whole](https://internetingishard.netlify.app/index.html)
* [interneting is hard - responsive design](https://internetingishard.netlify.app/html-and-css/responsive-design/index.html)
* [css tricks - complete guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [freecodecamp's intro to flexbox](https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/)
* [youtube - flexbox crash course](https://www.youtube.com/watch?v=3YW65K6LcIA)

# useful tools
* [prettier - automatic code formatting](https://prettier.io/)
* [codebeautify - similar to prettier](https://codebeautify.org/)
* [caniuse - checks browser compatibility with various things](https://caniuse.com/)
* [autoprefixer - uses caniuse for adding vendor prefixes to css automatically](https://github.com/postcss/autoprefixer)
* free images can be found at [pexels](https://www.pexels.com/), [pixabay](https://pixabay.com/), and [unsplash](https://unsplash.com/)

# paid courses to look into:
* [https://css-for-js.dev/](https://css-for-js.dev/)
* [ui.dev](ui.dev)
* [https://codewithmosh.com/](https://codewithmosh.com/)
* [https://courses.webdevsimplified.com/](https://courses.webdevsimplified.com/)