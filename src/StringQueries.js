"use strict";
scan = function() {
    const dom = document.body.innerHTML.replace(/{/g, 'ᝰ').replace(/}/g, 'ᝰ').split('ᝰ');
    
    for (let i = 0; i < dom.length; i++) {
        if (i % 2 === 1) {
            try {
                dom[i] = eval(dom[i]);
            } catch(err) {
                dom[i] = "<span style='color: red; font-weight: bold;'>{ " + err.message + " }</span>";
            }
        }
    }
    
    document.body.innerHTML = dom.join('');
}


/*

Source code at: https://github.com/Minetezter/StringQueries/

===========================================================
Let's get started on the tutorial!
===========================================================

HOW TO USE THIS JS MODULE:
  Inside you HTML <body> tag, you can add curly braces (symbols like "{ }").
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

===========================================================

Please Enjoy using the awesome new JS module!
You can link you scripts to this GitHub file directly!

*/



