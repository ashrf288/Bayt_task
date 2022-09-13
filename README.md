# task requirements


## 1-TCL Assignment:

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
[go to solution](task1_TCL/main.tcl)


### 2- Reverse Procedure

Write a TCL procedure that takes a string as an argument, and returns the results as a reversed string.

Example:

```
reverse { TCL is a Tool Command Language }
=> {  Language Command Tool a is TCL }

reverse { Welcome to you }
=> { you to Welcome }

```



[go to solution](task1_TCL/main.tcl)


## 2- RSS Parser

We need to implement a new web page OR desktop app that should:
- Read the jobs from bayt client RSS: (https://www.rotanacareers.com/live-bookmarks/all-rss.xml)
- Parse the fetched jobs to get the job titles.
- Draw the jobs in a list.
- Draw the jobs based on locations on google maps (you can choose javascript or any backend language)

Notes:
- As an end-user, I should see all bayt jobs titles Vs location in a table.
- You are free to choose any programming language you want.

[go to solution](task2_RSS_parser/README.md)


## 3- Write an ER diagram for the case below :

A system has three main objects: User, Role, and permission.

Every User has the following attributes: Name, Contact Number, and Email Address.

Every Role has the following attributes: Name in Arabic, Name in English.

Every Permission has the following attributes: Name and description.

User Can have a 0 or 1 or more Roles, For example, Ali can have the roles : 
QA Team Leader, and QA Engineer. While Dana has the Role: "Software Engineer"

Every Role has 1 or more Permissions, For example, QA Engineer has the permissions: "QA Assurance" and "Release Management"

Hint: Different users could have the same role.

You need to write an ER-Diagram that has all the needed tables to support this system. The Diagram should contain every table and its columns and their types, primary keys (If exists), and indexes (if exist). The ER- diagram also should have the relationships between the tables. (one to one, one to many, ....)

[go to solution](task3_ERD/README.md)