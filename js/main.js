function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var telp = document.getElementById("telp").value;

    if (nama != "" && email != "" && telp != "") {
        swal("Succes!", "Terimakasih telah menghubungi kami", "success");
    } else {
        swal("Error", "Maaf Data Yang Anda Inputkan Tidak Lengkap!", "error");
    }
}