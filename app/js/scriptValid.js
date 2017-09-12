function valid (form)
{
    var fail = false;
    var name = form.login.value;
    var email = form.email.value;

    var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

    if(name == "" || name == " ")
    {
        fail = "Вы не ввели своё имя!";
    }
    else if(adr_pattern.test(email) == false)
    {
        fail = "Вы ввели email неправильно!";
    }
    else if(email == "")
    {
        fail = "Вы не ввели email!";
    }
    if(fail)
    {
        alert(fail);
    }
}