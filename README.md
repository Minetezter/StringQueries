![image](https://trinket-user-assets.trinket.io/4ec238650aa1cccc3ff6708e850fc155b1e7093a-63dbc8aa19adecb202eec38b.png)

# StringQueries new JS module
**~ The future of HTML ~**

# What is StringQueries?
StringQueries is a JavaScript module, designed to execute JavaScript expressions directly through HTML!
This means you can use curly braces (symbols like "{}") to execute any JavaScript in any part of the body.
For example you could use the HTML code "\<p\>Your browser name is: {window.navigator.appName}\</p\>"

# How to use StringQueries:
HOW TO USE THIS JS MODULE:
  Inside you HTML \<body\> tag, you can add curly braces (symbols like "{ }").
  Inside these curly braces, you can add a JavaScript expression, such as "5 + 5" or "new Date()".
  Then, when you run your code, it will execute the expression and replace the content and curly braces with the output.
  
  IMPORTANT!!!
    YOU MUST ASSIGN THE "scan()" FUNCTION TO THE ONLOAD ATTRIBUTE IN THE BODY, OR YOUR CODE WILL NOT WORK!
    MAKE SURE THAT IN YOUR YOUR BODY TAG LOOKS SOMETHING LIKE THIS: <body onload="scan()">.

===========================================================

EXAMPLE:
  INPUT:
    <body onload="scan()">
      <p>The sum of 5 + 5 is {5 + 5}.</p>
    </body>
  
  OUTPUT:
    The sum of 5 + 5 is 10.
  
  Please keep in mind that that was just an example!
  You can go much more advanced with it.

Go here for more examples! [HTML usage example](https://raw.githubusercontent.com/Minetezter/StringQueries/main/usage_example.html)

===========================================================

Please Enjoy using the awesome new JS module!
You can link you script tags to this: https://www.trinket-shell.com/20d675b00b703a82/StringQueries.js
MAKE SURE YOU DO NOT LINK YOUR SCRIPTS TO THE RAW GITHUB FILE! THIS WILL NOT WORK!!!

# USE THIS INSTEAD!!! [Source JS Script](https://www.trinket-shell.com/f62dc00ba3d14b32/StringQueries.js)
**If That does not work, you report it as a bug. (This probably means the location for www.trinket-shell.com has expired)**

# Please Enjoy using StringQueries!

