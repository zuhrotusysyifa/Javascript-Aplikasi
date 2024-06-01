
var mahasiswaData = [];

document.getElementById("formMahasiswa").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var kelas = document.getElementById("kelas").value;
    var jurusan = document.getElementById("jurusan").value;

    mahasiswaData.push({ nama: nama, nim: nim, kelas: kelas, jurusan: jurusan });
    renderTable();
    document.getElementById("formMahasiswa").reset();
});

function renderTable() {
    var tableContent = "";
    mahasiswaData.forEach(function(mahasiswa) {
        tableContent += `
            <tr>
                <td>${mahasiswa.nama}</td>
                <td>${mahasiswa.nim}</td>
                <td>${mahasiswa.kelas}</td>
                <td>${mahasiswa.jurusan}</td>
            </tr>`;
    });
    document.getElementById("tableBody").innerHTML = tableContent;
}
