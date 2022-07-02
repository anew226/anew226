// takes user's input and decides which event listener to use keydown, keypress, or keyup based on id of input
(function userinput() {
    const input = document.querySelector("input");

    if (input.id === "CharInput_kd") {
        document.querySelector("#CharInput_kd").addEventListener("keydown", function(e, i) {
            filter(e, i);
        });
    } else if (input.id === "CharInput_kp") {
        document.querySelector("#CharInput_kp").addEventListener("keypress", function(e, i) {
            filter(e, i);
        });
    } else if (input.id === "CharInput_ku") {
        document.querySelector("#CharInput_ku").addEventListener("keyup", function(e, i) {
            filter(e, i);
        });
    }
})();

// 'prints' to screen based on user input
function print(e, i, descr, num) {
    // DOM variables
    const input = document.querySelector("input"),
        key = document.querySelector("#key"),
        code = document.querySelector("#code"),
        which = document.querySelector("#which"),
        keyCode = document.querySelector("#keyCode"),
        charCode = document.querySelector("#charCode"),
        html = document.querySelector("#HTML"),
        special = document.querySelector("#specialChar"),
        printHTMLCode = document.querySelector("#printHTMLCode");

    e.preventDefault();
    // these 4 print the same for keydown, keypress, and keyup
    key.textContent = e.key;
    code.textContent = e.code;
    which.textContent = e.which;
    keyCode.textContent = e.keyCode;
    charCode.textContent = e.charCode;
    input.value = e.key;

    // 'html' and 'special description' change based on filter function
    if (!descr) {
        // Path for lowercase & uppercase letters, and numbers
        html.textContent = `&#${e.key.charCodeAt(i)};`;
        special.textContent = "none";
        printHTMLCode.innerHTML = (`&#${e.key.charCodeAt(i)}`); 
    } else if (descr == "NoDescr") {
        // Path for filtered inputs: Alt Keys, Arrow Keys, Function Keys, and PageUP and PageDown, and Windows Meta Keys
        // Also path for Ctrl, Shift, Enter, Arrow Keys, Tab, CapsLock, Insert, Delete, Backspace, Home, End, Clear, and Esc
        html.textContent = "none";
        special.textContent = "none";
        printHTMLCode.innerHTML = "";
    } else if (descr && num) {
        // Path for inputs with special descriptions and hard coded num
        html.textContent = `&#${num};`;
        special.textContent = descr;
        printHTMLCode.innerHTML = `&#${num};`;
    } else {
        // Path for inputs with special descriptions
        html.textContent = `&#${e.key.charCodeAt(i)};`;
        special.textContent = descr;
        printHTMLCode.innerHTML = `&#${e.key.charCodeAt(i)};`; 
    }
}

// filters user's input for print() function
function filter(e, i) {
    const html = document.querySelector("#HTML");

    // main filtering in first if statement
    if (
        e.which >= 47 // filters for Shift, Ctrl, CaplLock, Insert, Delete, End, ArrowDown, PageDown, ArrowLeft, Clear, ArrowRight, Home, ArrowUp, PageUp
        && e.which <= 126 // filers for characters that need Special Descriptions and hardcoded nums
        && e.code.charAt(0) !== "F" // filters out 'Function' Keys
        && e.code.charAt(0) !== "M" // filters out 'Meta' Keys (windows meta keys)
        && e.code.charAt(0) !== "C" // filters 'Context' Keys
        && e.code.charAt(0) !== "O" // filters 'OS' Keys
    ) {
      // prints lowercase & uppercase letters, and numbers
      print(e, i);

    // Adds Special Descriptions and hardcoded 'html' nums
    // (when 'which' value is different than 'html' value)
    } else if (e.key === " ") {
        print(e, i, "Space", 32);
    } else if (e.key === "\"") {
        print(e, i, "Double Quote", 34);
    } else if (e.key === "\'") {
        print(e, i, "Single Quote", 39);
    } else if (e.key === "+") {
        print(e, i, "Plus", 43);
    } else if(e.key === ",") {
        print(e, i, "Coma", 44);
    } else if(e.key === "-") {
        print(e, i, "Minus", 45);
    } else if(e.key === ".") {
        print(e, i, "Period", 46);
    } else if (e.key === "/") {
        print(e, i, "Slash", 47);
    } else if(e.key === ":") {
        print(e, i, "Colon", 58);
    } else if(e.key === ";") {
        print(e, i, "Semicolon", 59);
    } else if (e.key === "<") {
        print(e, i, "Less Than / Left-hand Angle Bracket", 60);
    } else if (e.key === "=") {
        print(e, i, "Equals Sign", 61);
    } else if (e.key === ">") {
        print(e, i, "Greater Than / Right-hand Angle Bracket", 62);
    } else if (e.key === "?") {
        print(e, i, "Question Mark", 63);
    } else if (e.key === "[") {
        print(e, i, "Left-hand Square Bracket", 91);
    } else if (e.key === "\\") {
        print(e, i, "Backslash", 92);
    } else if (e.key === "]") {
        print(e, i, "Right-hand Square Bracket", 93);
    } else if (e.key === "_") {
        print(e, i, "Underscore", 95);
    } else if (e.key === "`") {
        print(e, i, "Backquote / Backtick / Accent / Grave", 96);
    } else if (e.key === "{") {
        print(e, i, "Left-hand Curly Bracket", 123);
    } else if (e.key === "|") {
        print(e, i, "Vertical Bar / Pipe", 124);
    } else if (e.key === "}") {
        print(e, i, "Right-hand Curly Bracket", 125);
    } else if (e.key === "~") {
        print(e, i, "Tilde", 126);
    } else {

        // Path for Alt Keys, Arrow Keys, Function Keys, and PageUP and PageDown, and Windows Meta Keys 
        // Also path for Ctrl, Shift, Enter, Arrow Keys, Tab, CapsLock, Insert, Delete, Backspace, Home, End, Clear, and Esc
        print(e, i, "NoDescr");
    }

    // Adds Special Descriptions to some characters
    if (e.key === "!") {
        print(e, i, "Exclamation Mark");
    } else if (e.key === "@") {
        print(e, i, "At Sign");
    } else if (e.key === "#") {
        print(e, i, "Number Sign / Hash / Pound Sign");
    } else if (e.key === "$") {
        print(e, i, "Dollar Sign");
    } else if (e.key === "%") {
        print(e, i, "Percent / Modulo / Modulus");
    } else if (e.key === "^") {
        print(e, i, "Caret / Circumflex");
    } else if (e.key === "&") {
        print(e, i, "Ampersand");
    } else if (e.key === "*") {
        print(e, i, "Asterisk");
    } else if (e.key === "(") {
        print(e, i, "Left-hand Parenthesis");
    } else if (e.key === ")") {
        print(e, i, "Right-hand Parenthesis");
    }

    // Adds html number for 'Enter' and 'Tab' keys
    if (e.key === "Enter") {
        html.textContent = `&#${e.which};`;
    } else if (e.key === "Tab") {
        html.textContent = `&#0${e.which};`;
    }   
}
