# sort array of fixed size using tcl  only 10 elements in array without using sort command  
# returns the list sorted in ascending way with a minimum number of iterations.



## preform quick  sort on array of fixed size it has
# BIg O notation of O(n log n) for time complexity 
# and O(n) for space complexity


proc quickSort {array} {
    set size [llength $array]
    if {$size <= 1} {
        return $array
    }
    set pivot [lindex $array 0]
    set left {}
    set right {}
    for {set i 1} {$i < $size} {incr i} {
        set element [lindex $array $i]
        if {$element < $pivot} {
            lappend left $element
        } else {
            lappend right $element
        }
    }
    set left [quickSort $left]
    set right [quickSort $right]
    return [concat $left $pivot $right]
}


# example :  
set array {5 4 3 2 1 6 7 8 9 10}

# this will return {1 2 3 4 5 6 7 8 9 10}

set sortedArray [quickSort $array]
puts $sortedArray

# Write a TCL procedure that takes a string as an argument, and returns the results as a reversed string.

# big o notation of O(n) for time complexity and O(n) for space complexity


proc reverse {string} {
    set n [llength $string]
    set i 0
    set result {}
    while {$i < $n} {
        set result [linsert $result 0 [lindex $string $i]]
        incr i
    }
    return $result
}

# example:  reverse { TCL is a Tool Command Language }=> {  Language Command Tool a is TCL }


puts [reverse {TCL is a Tool Command Language}]
