Before starting work run npm install to add dependencies

Go to directory Task_1

Select arguments to pass

|   argument   |  type  | example    | value                    |
|--------------|--------|------------|--------------------------|
| -s, --shift  | number |    8       |  a shift                 |
| -i, --input  | string | input.txt  | an input file            |
| -o, --output | string | output.txt | an output file           |
| -a, --action | string | encode     | an action encode/decode  |

Command line examples:

+ node index.js -a encode -s 7 -i input.txt -o output.txt
+ node index.js -a decode -s 7 -i input.txt -o output.txt

After completing the entry, press the Enter key. To exit the input mode, press ctrl + C.