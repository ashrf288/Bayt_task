# sort array of fixed size using tcl  only 10 elements in array without using sort command  returns the list sorted in ascending way with a minimum number of iterations.


proc sortList {list} {
    set n [llength $list]
    for {set i 0} {$i < $n} {incr i} {
        for {set j $i} {$j < $n} {incr j} {
            if {[lindex $list $i] > [lindex $list $j]} {
                set list [lreplace $list $i $i [lindex $list $j]]
                set list [lreplace $list $j $j [lindex $list $i]]
            }
        }
    }
    return $list

}


proc sortList2{list}{
    
    set n [llength $list]
    set i 0
    while {$i < $n} {
        set j [expr {$i + 1}]
        while {$j < $n} {
            if {[lindex $list $i] > [lindex $list $j]} {
                set list [lreplace $list $i $i [lindex $list $j]]
                set list [lreplace $list $j $j [lindex $list [expr {$i + 1}]]]
            }
            incr j
        }
        incr i
    }
    return $list
   

}

set list {3 2 1 4 5 6 7 8 9 10}

puts [sortList $list]



# Write a TCL procedure that takes a string as an argument, and returns the results as a reversed string.
# example:  reverse { TCL is a Tool Command Language }=> {  Language Command Tool a is TCL }

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

puts [reverse {TCL is a Tool Command Language}]
