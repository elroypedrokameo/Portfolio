$darkMode = false

if (localStorage.getItem('defaultTheme') == 'dark') {
    toggleDarkMode()
}

function toggleDarkMode() {
    if ($darkMode == false) {
        document.body.style.backgroundColor = "rgb(85, 87, 86)"
        document.body.style.color = "White"
        document.getElementById("themeInfo").innerHTML = "Dark!"
        localStorage.setItems('defaultTheme', 'dark');
        $darkMode = true
    } else {
        document.body.style.backgroundColor = "White"
        document.body.style.color = "Black"
        document.getElementById("themeInfo").innerHTML = "Light!"
        localStorage.setItems('defaultTheme');
        $darkMode = false
    }
}


function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var telp = document.getElementById("telp").value;

    if (nama != "" && email != "" && telp != "") {
        return true;
    } else {
        alert('Data yang anda masukan kurang lengkap!')
    }
}