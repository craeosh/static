function login(e) {
    console.log("login");
    var username = document.getElementById("inputUsername").value;
    var password = document.getElementById("inputPassword").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/controls", true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Authorization", 'Basic ' + btoa(`${username}:${password}`));
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.status == 200) {
            window.location.replace("/controls");
        } else {
            $('#errAl').show();
            setTimeout(function(){ $('#errAl').hide(); }, 5000);
        }
    };
    xhr.send();
}

window.onload = function () {
    $('#errAl').hide();
    //automatically login if login header is set
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/controls", true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Authorization", 'Basic ' + btoa(`a:a`));
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.status == 200) {
            window.location.replace("/controls");
        }
    };
    xhr.send();
}