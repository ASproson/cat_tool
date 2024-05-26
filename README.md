# Unix Stylw cat Tool

Implementation of the unix cat functionality using NodeJS. `cat` in unix allows the user to output the content a file to the terminal with a variety of options such as reading by line, reading the entire file, concatenating two files together, or printing the file to the terminal with or without numbered lines/blank spaces.

## Installation and Use

Please clone the repo below:

When in the repo directory you can run the following commands on the test files:

> `https://github.com/ASproson/cat_tool.git`

> `node main.js readline test.txt`

> `node main.js cat test.txt test2.txt`

> `node main.js cat test.txt | head -n3`

> `node main.js number test.txt`

> `node main.js number test.txt -b`

> `node main.js number test.txt | head -n3`

> `sed G test3.txt | node main.js number test3.txt -b | head -n4`

> `sed G test3.txt | node main.js number test3.txt | head -n4`

## Demo

![Animation2](https://github.com/ASproson/cat_tool/assets/77736272/e603ecb1-556a-41c4-ae3e-eba0d1634517)
