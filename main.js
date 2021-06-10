var name_of_guest_array=[];
function submit()
{
    var Guest_name = document.getElementById("Enter_name").value;
name_of_guest_array.push(Guest_name);
document.getElementById(display_names).innerHTML = name_of_guest_array;
console.log(name_of_guest_array);
var length_of_the_array = name_of_guest_array.length;
console.log(length_of_the_array);
}


function show()
{
    var i = name_of_guest_array.join("<br>");
    console.log(name_of_guest_array);
    document.getElementById("show_names").innerHTML = i.toString;
}


function sort()
{
    name_of_guest_array.sort();
    var i = name_of_guest_array.join("<br>");
    console.log(name_of_guest_array);
    document.getElementById("sort_names").innerHTML = i.toString;
}


function search()
{
    var s = document.getElementById("Search_name").value;
    var found = 0;
    var join;
    for(j=0 j<name_of_guest_array.length, j++) {
        if(s==name_of_guest_array[j]){
            found=found+1;
        }  
    }
    document.getElementById("search_names").innerHTML = "Name found" +found+"Time/s";
    console.log("Name found" +found+"Time/s");
}