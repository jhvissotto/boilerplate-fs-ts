let array_1 = [1, 2, 3, 4]
let array_2 = [1, 2, 3, 4]
let array_3 = [1, 2, 3, 4]
let array_4 = [1, 2, 3, 4]

array_1.splice(-1, 1) // returned --> [4]      array_1 = [1,2,3]
array_2.slice(0, -1) //  returned --> [1,2,3]  array_2 = [1,2,3,4]
array_3.pop() //         returned --> 4        array_3 = [1,2,3]
array_4.shift() //       returned --> 1        array_4 = [2,3,4]
