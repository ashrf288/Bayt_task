

## TCL Assignment:

You'll be kindly requested to solve the below assignment, two problems that need very basic knowledge of TCL language.
To know more about TCL you might need to look for some online tutorials and resources ( You need to find your way )


### 1- Sort Function

Suppose that you have a list of 10 numbers, this list contains the numbers from 0 - 9 which are randomly sorted.

The list reserves 10 bytes of memory, each number reserves one byte.

Write a TCL procedure, which takes this list as an argument, and returns the list sorted in ascending way with a minimum number of iterations.

NOTE: Don't use TCL built-in sort function.

```
sortList :: { 3 6 8 7 0 1 4 2 9 5 } -> { 0 1 2 3 4 5 6 7 8 9 }

proc sortList {L} {...}

Example:

sortList { 3 6 8 7 0 1 4 2 9 5 }
=> { 0 1 2 3 4 5 6 7 8 9 }


```



### 2- Reverse Procedure

Write a TCL procedure that takes a string as an argument, and returns the results as a reversed string.

Example:


```

reverse { TCL is a Tool Command Language }
=> {  Language Command Tool a is TCL }

reverse { Welcome to you }
=> { you to Welcome }

```
