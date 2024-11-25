# odin_test
Hello Odin!

This is where I'll be going through The Odin Project. The readme itself includes random tidbits I've picked up along the way that are relevant to me as I'm learning, but probably won't be relevant to future me. This mostly consists of things that catch me off guard or are otherwise unexpected.

Apologies for the insistence on all lowercase in the readme - it makes it a lot easier for me to jot down my nonsense

There are almost definitely going to be sections in here that aren't explicitly covered by The Odin Project, just by nature of coming across other resources while working on it

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
        * comments
        * `img`
        * `a href` (both relative and absolute)
        * `span` (for only marking up part of a piece of text - see [this file](./4-css-test\index.html) for more info)
    * what a boilerplate html file should include (see [here](./1-html-boilerplate/index.html))
    * what should go in the head (meta tags, title)
    * [when to use strong, b, em, and i](https://medium.com/@zac_heisey/when-to-use-strong-b-em-and-i-tags-in-your-markup-fa4d0af8affb)

* split content into `<section>`s instead of using `<div>`s - similarly use `<header>` and `<footer>` (e.g. actually put a header/footer in them rather than leaving them blank)

* html reference sheets can be found [here (devdocs)](https://devdocs.io/html/) and [here (mozilla)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)

# css stuff
* things covered in foundations:
    * basic css (what it is, basic syntax, etc)
    * type selectors in css (e.g. `div{[stylistic features]}`, `p{[stylistic features]}`)
    * classes (preceded by `.`)
    * ids (preceded by `#`, unique)
    * grouping classes in css (i.e. `class-one, class-two{[stylistic features]}`) - for when different classes share some but not all stylistic features
    * chaining classes/ids in html (i.e. `class="class-one class-two"`) - for when an element should have multiple classes or ids applied to it.
    * you can do `.class-one.class-two{[stylistic features]}` in css and it'll only apply those styles to elements with both of those classes
    * ~~personally i feel like these should have different names as the html is the same whether you're applying multiple classes to the same element or applying styling to something with both classes in css - my opinion on this will likely change down the line as i see various use cases for it, but at the time of writing it's far more confusing than grouping and descendants~~ - not sure what i meant by this but i think it was with regard to chaining having the same name in html and css despite being something different
    * descendant combinators in css (`.parent.child` only selects `.child` if it's a child of (i.e. nested in) a `.parent` in the html - this can also be done on elements/types, so instead of `.parent.child {[stylistic features]}` you could do `div p {[stylistic features]}` to apply styling to any `p`s that are children of `div`s
    * other selectors include:
        * `,` to select more than one set of selectors (i.e. addition - so `p, div` selects all `p`s and all `div`s)
        * `*` to select everything, which can also be used to select everything inside something else (e.g. `p *` selects everything inside a `p`)
        * `+` to select any siblings - elements that directly follow another that are on the same level (NOT children)
        * `~` to select all siblings - `A ~ B` selects all `B`s that appear after `A`, but not `A` itself
        * `>` selects all direct children of an element
        * `X:first-child` selects `X` when it's the first child of another element - NOT the first child of `X`
        * `X:only-child` - selects `X` if it's the only child of another element
        * `X:last-child` - selects `X` when it's the last chid of another element
        * `X:nth-child(N)` - selects `X` when it's the Nth child of another element - this includes its siblings, so it selects the item if it's only the Nth child in the list, and not the Nth `X`
        * `X:nth-last-child(N)` - selects `X` when it's the Nth child from the end - again, this includes siblings, so `X:nth-last-child(3)` won't select the 3rd last `X`, but will only select `X` if it's 3rd from the end out of all of its siblings
            * if you specifically wanted the 3rd last X, you could ask for `X:nth-last-of-type(3)`
        * `X:first-of-type` - selects `X` when it's the first `X` in a list
        * `X:nth-of-type(N)` - selects `X` when it's the Nth `X` in a list, where N can be a number, or `even`, or `odd`
            * this also accepts `Nn+Y`, such as `2n+3` which would select every 2nd `X`, starting from the 3rd one, so 3, 5, 7 etc
        * `X:only-of-type` - selects `X` when it's the only child of its type within the parent
        * `X:last-of-type` - selects `X` when its the last of its type within its parent
        * `X:empty` - selects any `X` without children
        * `X:not(Y)` - selects any `X` that doesn't have attribute `Y`
        * `X[attribute="Y"]` - selects anything with said attribute, so:
            * `[href]` selects anything with an `href`, 
            * `a[href]` selects any `a`s that have an `href` attached (i.e. `a href="URL"`)
            * `a href="google.com"` selects any `a`s that have an `href` of `google.com`
            * `X[attribute^="xyz"]` selects anything where the attribute **begins** with `xyz` - you can use `$` instead of `^` for when you want it to end with `xyz`, and `*` when you want `xyz` to appear anywhere in the attribute
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

* you can use something like `background: red !important` to confirm you're selecting the correct element (similarly we can do `border: 2px solid red`)

* css reference sheets can be found [here (devdocs)](https://devdocs.io/css/) and [here (mozilla)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

* other useful css info can be found at [csstricks](https://css-tricks.com/)

* in css, `img.huge` targets any images with the `huge` class, whereas `.huge-image` is a class of its own and while it can be applied to images, it can also be applied to literally anything else. so while on the front-end, these **should** function similarly (provided the rest of your code is good), it's bad practice to use the latter because it's asking for trouble, and makes your code unnecessarily hard to read

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
    * increasing the `margin` of one element effectively increases the size of its container - so take into account size changes when using margin. if one element has `margin: 12px` then applying `margin: auto` to something else in the same container, while it will take the `margin` of the other element into account, might not look right visually because the margin isn't visible - use borders (see `box-container` class [here](./6-css-margin-and-padding\1-margin-and-padding\index.html) and [here](./6-css-margin-and-padding\1-margin-and-padding\style.css) for more info) or inspect element to help with debugging
    * ran into an interesting issue when doing 2-margin-and-padding:
        * `text-align: center` worked as expected
        * i wanted to approach it with a different solution by wrapping the text in `span` tags and using `margin: auto`
        * this didn't work
        * solution: `span` is an `inline` element by default, so the `margin` was effectively ignored - we had to make the `display: flex` as well
        * we could also wrap it in `p` tags and set the `width` to `fit-content`, because `p` is a `block` by default

* ul has a default padding of 40px, so you might want to override this
    
* flex stuff:
    * `justify-content` accepts:
        * `flex-start`
        * `flex-end`
        * `center`
        * `space-between`
        * `space-around`

    * `align-content` accepts the same as the above as well as `stretch`

    * `align-items` and `align-self` accept:
        * `flex-start`
        * `flex-end`
        * `center`
        * `baseline`
        * `stretch`

    * `align-content` determines spacing between lines and only comes into effect when there are multiple lines, while `align-items` aligns the items themselves

    * `flex-direction` accepts:
        * `row` / `row-reverse`
        * `column` / `column-reverse`
        * both of the above `reverse`s will require you to use `flex-end` if you want the items to appear at the start rather than the end, as the new starting point is set to the original end when using `reverse`

    * `flex-wrap` accepts:
        * `nowrap`
        * `wrap`
        * `wrap-reverse`

    * `flex-flow` combines `flex-direction` and `flex-wrap` and accepts the same arguments as them, e.g. `flex-flow: row wrap`

    * `justify-content: center` to a container is usually functionally the same as adding `margin: 0 auto` to that container's children (but the latter is bad practice, generally)- remember, `justify-content` does exactly what it says, it **aligns the contents inside it, and not the element itself** - `align-self` aligns an actual element and takes precedence over `justify-content` and `align-content`
        * `justify-content: space-around` puts equal spacing on both sides of the items, including at the edges, whereas `space-between` puts space between them (so goes to the edge of the container)
        
    * items inside `containers-2`, which in turn is inside `container-1`, don't count as items in `container-1` (i.e. items aren't found recursively) - an item is only really a child of its direct container. in the below code, the only items in `menu` are `date` and `links` - not `signup` or `login`
        ~~~~
        <div class='menu'>
            <div class='date'>Aug 14, 2016</div>
            <div class='links'>
                <div class='signup'>Sign Up</div>
                <div class='login'>Login</div>
            </div>
        </div>
        ~~~~
        * `display: flex` only applies to direct children of a container rather than grandchildren. similarly, `justify-content` only applies to direct children, not children of children - see [this exercise](./8-flexbox/3-flex-header-2/index.html) for a good example of this
    * `align-items` is used for vertical alignment, but when you rotate a container's direction, the `justify-content` property also changes, so `justify-content` and `align-content` switch functions - **the best way to see this is that `justify-content` applies along the main axis, and `align-items` applies along the cross axis**
    * by default, `flex-direction: row-reverse` only applies on a per row basis - `order` applies throughout the whole container
    * `order` is `0` by default, if we change an item's order to `1`, ceteris paribus it would move to the end of the container
    * `flex: initial` overrides something inherited like `flex: 1`, so rather than scaling, it lets you set fixed widths
    * applying `margin-left: auto` to something in a container will move it to the right hand side of the container; it will also shift any items after that item in the container
    * `flex: 1` is equivalent to `flex: 1 1 0` which is also equivalent to `flex-grow: 1; flex-shrink: 1; flex-basis: 0`
        * `flex-grow` defines how quickly an item increases in size to take up the extra space beyond its defined `width` or `flex-basis`
        * `flex-shrink` defines how quickly an item shrinks in size when the container is too small
        * `flex-basis` defines the base size of an item - above this, the `flex-grow` multiplier will apply how quickly it scales up in relation to other elements, and below this, the `flex-shrink` value will apply - so it's not the `width`, so much as "this is the minimum width we'd like it to be in an ideal world, but you can shrink if necessary", provided `flex-shrink` is set to `1` or more
        * setting `flex-basis` to `auto` means that they use their defined `height` when `flex-direction` is `column` (similarly, defined `width` is used when `flex-direction` is `row`) - if we simply use `flex: 1` then `flex-basis` is set to `0px`, meaning that the height of any columns created will be `0`
        * `height` overrides `flex: 1` when `flex-direction` is `row`, and `width` overrides `flex: 1` when `flex-direction` is `column` - no matter what, the item won't go above these values
    * `justify-self` is ignored in flexbox - if we want to move something to the end of the container, we set `margin-top` or `margin-left` to `auto` depending on where we want it to go
    * by default, children bunch at the start of the primary axis, and stretch to fill the entire container along the cross axis
    * when `flex-wrap` is set to `wrap`, `align-items` applies to the items on each individual row, whereas `align-content` applies to every row in that box
    * remember to set `display: flex`!!! this needs to be done in multiple places depending on what you want to flex - usually you'll want to apply this to anything whose children should flex. similarly, you don't want to overuse flex - while you can achieve what you want, [this exercise](./8-flexbox/4-flex-information/index.html) is a good example of how you can achieve the same without using flexbox

* `min-width` is set to the the length of the longest unbroken string of characters for elements containing text, but can be set manually - content will overflow from the container if `min-width` is bigger than the size of the container

* we can use `@media all and (max-width: VALUE) { .container{} }` to apply conditional formatting based on display width (see [this css-tricks article](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for more info)

* `margin: auto` doesn't work on `<div>`s because they automatically take up full width

* `vw` can be used on a height, similarly `vh` can be used on a width - this lets you make items scale (like the boxes [here](./9-landing-page/index.html))

* generally speaking, `px` is best to use for padding, `svw`/`svh` for responsiveness, and sometimes `%` for height - but play it by ear
    * `dvh` and `vh` cause content to resize as the user scrolls which isn't ideal
    * `px` is mostly used for borders, margin, box shadows etc
    * `em` for font sizes

* `rem` is best to use for font sizes, potentially with `clamp` (e.g. `3rem, 5svw+1rem, 6rem` - min, preferred, max)
    * you can also use a `clamp` or even `min` on `gap`s between elements

* media queries can be used to stack side by side elements into a column on mobile

# js stuff
* `let`, `const`, and `var` are used for variables
    * `let` and `var` are very similar, but `var` has no block scope - only current function or global (if defined outside a function), and are processed at function start (or script start for globals)
    * `const` cannot be reassigned
    * generall speaking, `const` names are uppercase for legibility

* we can define multiple variables on each line by separating with commas, or on separate lines with tab indentation:
    ```
    let user = 'name',
        age = 25,
        message = 'Hello';
    ```
* when changing a variable, you can't use `let` etc on it again - it's already declared as a type

* variables can only contain letters, numbers, and \$ or \_, first character cannot be a number, and they are case sensitive

* `==` tests whether values are the same, `===` tests whether the data types are **also** the same; same with `!=` and `!==`

* prefixing and postfixing operators (++, for example) works slightly differently - `counter++` increments the counter and returns the original value, `++counter` increments it and returns the new value - in the below example, `a`, `b`, and `c` are output as `2`, `d` is output as `1`
    ```
    let a = 1, b = 1;
    let c = ++a;
    let d = b++;
    ```

* `+` will concatenate anything in the same statement if it encounters a string, so:
    * `"" + 1 + 0` will output `10`
    * `4 + 5 + "px"` will output `45px`
    * `4 + 5 + "px" + 2 + 7` will output `45px27`

* putting `+` before a string variable will convert them to a number - so if `apples = "2"` and `oranges = "3" ` (note the quotation marks) and we `alert (apples + oranges)`, we'll get `23` because they're concatenated strings, but if we `alert (+apples + +oranges`), we'll get `5` because they've been converted to numbers

* to include a variable in a concatenation, you have to use template literals -  `` ` `` instead of `"` or `'` - so `` `Hello, ${name}` ``, for example - these also respect line breaks without needing to manually enter a break character
    * calculations can be done in template literals by doing `` `${variableA - variableB}` ``

* all string methods return a new string rather than modifying the original string

* regex is written without quotes

* OR (`||`) finds the first truthy value when given multiple values - or returns the last value if all are false
    * similarly, AND (`&&`) finds the first false value when given multiple values- or returns the last value if all are true

* variables declared within a function are local to that function - variables defined outside of a function are available and editable globally
    * similarly, if a variable exists globally but we define it inside a function with `let` or similar, the global value remains ignored and unedited

* we can edit an argument that's been passed to a function, for example to emphasise text (e.g. `function showMessage(from, text){from = '*' + from + '*' + text;}` will italicise the original `from` value)

* you can define a default value in a function (i.e. the value used if no argument is given) by putting `=` and then the default string or value after the parameter - we can also set a default value to be another function, so that if no parameter is given for X, we call a different function instead

* calling `return` without a value causes a function to exit immediately

* best practice is that a function should do exactly what its name says - `show`, `get`, `calc`, `create`, or `check`, for example. so, `getAge` shouldn't show an `alert` with `age`

* the standard way of creating a function (`function Y(){CODE}`) is called a function declaration, but we can also have a function expression, whereby we say `let Y = function(){CODE};` (note the semicolon at the end) - this stores it in a variable, and writing `alert(Y)` would output the code, rather than running it
    * function expressions are only usable from the moment they appear in the code, rather than being created at runtime
    * however, if we have a function declaration inside another function or a conditional then call it outside that function, it won't work as intended, because function declarations are local and only visible in the code block in which they reside
        * we can use a function expression to declare a variable as a function outside of that function, then define it inside - this is especially useful for conditionals, for example
    * generally speaking, we only want to use function expressions when a function declaration is not fit for the task (as above)

* callback functions can be used as arguments in another function:
    ```
    function ask(question, yes, no) {
        if (confirm(question)) yes();
        else no();
    }

    function showOk() {
        alert( "You agreed." );
    }

    function showCancel() {
        alert( "You canceled the execution." );
    }

    // usage: functions showOk, showCancel are passed as arguments to ask
    ask("Do you agree?", showOk, showCancel);
    ```

    or in the shorter form:
    ```
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
    }

    ask(
        "Do you agree?",
        function() { alert("You agreed."); },
        function() { alert("You canceled the execution."); }
    );
    ```
* functions should be short and do exactly one thing
    * best practice is to nest functions, so rather than putting your whole code in `function showPrimes(n){}`, `showPrimes()` should have one or more functions inside, such as `isPrime()`
        * compare how much easier the second one is to read compared to the first:
            ```
            function showPrimes(n) {
            nextPrime: for (let i = 2; i < n; i++) {
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) continue nextPrime;
                }
                alert( i ); // a prime
                }
            }
            ```
            vs
            ```
            function showPrimes(n) {
                for (let i = 2; i < n; i++) {
                    if (!isPrime(i)) continue;
                    alert(i);  // a prime
                }
            }
            function isPrime(n) {
                for (let i = 2; i < n; i++) {
                    if ( n % i == 0) return false;
                }
                return true;
            }
            ```
    
* question mark operators can also be used in functions for if/else queries, e.g. `function checkAge(age) { return (age > 18) ? true : confirm("Did your parents give you permission?") }` - the colon separates the response for true from the response for false
    * similarly, we can use or operators to do the same, `return (age > 18) || confirm("Did your parents give you permission?")`

* arrow functions are another way of expressing functions, e.g. `let sum (a, b) => a+b;`
    * if there is a single argument, parentheses around it can be ommitted, if there are no arguments then they can be empty but must be present
    * they can also be used with operators, e.g. `let function = (a < x) ? () => alert("Hello") : () => alert("Goodbye");`
    * another example is `let double = n => alert(n + " doubled is equal to " + n * 2); double(3)`

* when troubleshooting errors, type errors can tell you something isn't a function when it actually is - the key thing to bear in mind here is that the function you're calling might not be compatible with that type of data (see below for example)
        ```
        const str1 = "Hello";
        const str2 = "World!";
        const message = str1.push(str2);
        ```

* when working with the console, remember to use `console.log()` and not `return`

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

# devtools notes
* in chrome, f12 --> console --> cog on second row --> tick "selected content only" to hide errors from extensions

* extra tools can be used via chrome dev tools by clicking the three dots and going to more tools

* the .cls button (in styles) can be used to add a class to an element - remember to press enter after doing this
    * similarly, .hov can be used to force element states (visited, hover, etc)

* the window icon to the right of .cls and .hov can be used to open up the sidebar (padding/margin) pane

* sources --> breakpoints can be used to pause javascript (specifically event listener ones)
    * plugin *.js files may interfere here, so you can right click and ignore them
    * you can also click on a line number to always pause on that line

* scope in the devtools tells you what variables are currently defined

* when editing js in devtools, we have to ctrl + s to save it

# useful reference material
## general
* [devdocs - useful reference sheet for pretty much every language ever](https://devdocs.io/)

## css
### specificity
* [css specificity on w3schools](https://www.w3schools.com/css/css_specificity.asp)
* [the css cascade - a beautiful page with tests on specificity](https://2019.wattenberger.com/blog/css-cascade)

### flexbox
* [flexbox cheat sheet (malven)](https://flexbox.malven.co/)
* [interactive guide to flexbox (josh w comeau)](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
* [css-tricks flexbox cheat sheet (image)](./!readme-images/css-flexbox-poster.png)
    * compact version of [this css-tricks guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [flexbox visual guide - marina ferreira](https://marina-ferreira.github.io/tutorials/css/flexbox/)

## javascript
* [javascript.info](https://javascript.info/)
* [javascript string methods w3schools](https://www.w3schools.com/js/js_string_methods.asp) and [w3schools reference](https://www.w3schools.com/jsref/jsref_obj_string.asp), also at [mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* [arrow functions cheat sheet (samantha ming)](https://www.samanthaming.com/tidbits/47-arrow-functions-cheatsheet/)

## gamification
* [flexbox froggy](https://flexboxfroggy.com/)
* [anchoreum](https://anchoreum.com/)
* [grid garden](https://cssgridgarden.com/)
* [css diner](https://flukeout.github.io/)

## misc supplementary links
### general
* [the xy problem - how to ask questions](https://xyproblem.info/)
    * [how to ask smart questions](http://www.catb.org/esr/faqs/smart-questions.html)
* [conventional commits - how to structure your commit messages](https://www.conventionalcommits.org/en/v1.0.0/)
* [introduction to flexbox - interneting is hard](https://internetingishard.netlify.app/html-and-css/flexbox/index.html)
* [interneting is hard as a whole](https://internetingishard.netlify.app/index.html)
* [interneting is hard - responsive design](https://internetingishard.netlify.app/html-and-css/responsive-design/index.html)
* [freecodecamp's intro to flexbox](https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/)
* one day, I want my portfolio to look like [this](https://stefantopalovicdev.vercel.app/) (video on it [here](https://www.youtube.com/watch?v=VjiWpGR82t0))
    * or [this](https://www.benjaminbaker.dev/) (video on it [here](https://www.youtube.com/watch?v=gcpYTxa0GGw))
* [javascript for impatient programmers](https://exploringjs.com/js/book/index.html)
* [when not to use regex](https://softwareengineering.stackexchange.com/questions/113237/when-you-should-not-use-regular-expressions)
* [differences between regular and arrow functions](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)

### video guides
* [youtube - flexbox crash course](https://www.youtube.com/watch?v=3YW65K6LcIA)
* [conquering responsive layouts course](https://courses.kevinpowell.co/conquering-responsive-layouts)
* [net ninja regex tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD)

### ai-based
i firmly believe that ai is a scourge but have to concede that it has its uses for debugging and getting it to eli5 things, so...
* [ai chatbot repo 1](https://fmhy.net/ai)
* [ai chatbot repo 2 - linked to by the above, but the above could die at any moment](https://github.com/LiLittleCat/awesome-free-chatgpt/blob/main/README_en.md)

# useful tools
* [prettier - automatic code formatting](https://prettier.io/)
* [codebeautify - similar to prettier](https://codebeautify.org/)
* [code beautifier - similar again](http://www.codebeautifier.com/)
* [css optimizer - restructure function is really useful for merging classes with same properties](https://css.github.io/csso/csso.html)
* [caniuse - checks browser compatibility with various things](https://caniuse.com/)
* [autoprefixer - uses caniuse for adding vendor prefixes to css automatically](https://github.com/postcss/autoprefixer)
* free images can be found at [pexels](https://www.pexels.com/), [pixabay](https://pixabay.com/), and [unsplash](https://unsplash.com/)
* [realtimecolors](https://realtimecolors.com/) to see color schemes on a live website
* [fontpair](https://www.fontpair.co/all) for fonts that go well together
* [haikei](https://app.haikei.app/) to generate svg/png graphics
* [gradient.style](https://gradient.style/) for css gradients and shapes
* [omatsuri](https://omatsuri.app/) for a bunch of stuff, from color shades to triangle generators, symbols, etc
* [utopia](https://utopia.fyi/) for type scaling
* [wowebook](https://www.wowebook.com/) for free webdev ebooks
* [live update the page you're working on (installed)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

# paid courses to look into:
* [https://css-for-js.dev/](https://css-for-js.dev/)
* [ui.dev](ui.dev)
* [https://codewithmosh.com/](https://codewithmosh.com/)
* [https://courses.webdevsimplified.com/](https://courses.webdevsimplified.com/)