nameofthestudentsarray = [];
function submit()
{
    var name_1 = document.getElementById("name_of_the_student_1").value;
    var name_2 = document.getElementById("name_of_the_student_2").value;
    var name_3 = document.getElementById("name_of_the_student_3").value;
    var name_4 = document.getElementById("name_of_the_student_4").value;

    nameofthestudentsarray.push(name_1);
    nameofthestudentsarray.push(name_2);
    nameofthestudentsarray.push(name_3);
    nameofthestudentsarray.push(name_4);

    console.log(nameofthestudentsarray);

    document.getElementById("display_name").innerHTML = nameofthestudentsarray;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
    nameofthestudentsarray.sort();
    console.log(nameofthestudentsarray);
    document.getElementById("display_name").innerHTML = nameofthestudentsarray;
}

