var produkData = [
    { id: 1, nama: "Nike Dunk Low Abu", harga: 1549000 },
    { id: 2, nama: "Nike Dunk Low Biru", harga: 1499000 },
    { id: 3, nama: "Nike Dunk Low Cream", harga: 10843000 },
    { id: 4, nama: "Nike Dunk Low Hitam", harga: 2549000 },
    { id: 5, nama: "Nike Air Jordan Low Bread Toe", harga: 2310000 },
    { id: 6, nama: "Nike Dunk Low Pink", harga: 2549000 }
];

var keranjangBelanja = [];

function tampilkanProduk() {
    var daftarProdukHTML = "";
    produkData.forEach(function(produk) {
        var variasiGambar = ["abu.png", "biru.png", "cream.png", "hitam.png", "merah.png", "pink.png"];
        var indexGambar = (produk.id - 1) % variasiGambar.length;
        var gambarProduk = variasiGambar[indexGambar];
        daftarProdukHTML += `
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="img/${gambarProduk}" class="card-img-top" alt="${escapeHTML(produk.nama)}">
                    <div class="card-body">
                        <h5 class="card-title text-center">${escapeHTML(produk.nama)}</h5>
                        <p class="card-text">Harga: Rp${produk.harga}</p>
                        <button class="btn btn-primary btn-sm text-center" onclick="tambahKeKeranjang(${produk.id})">Tambah ke Keranjang</button>
                    </div>
                </div>
            </div>`;
    });
    document.getElementById("daftarProduk").innerHTML = daftarProdukHTML;
}

function tambahKeKeranjang(idProduk) {
    var produk = produkData.find(item => item.id === idProduk);
    keranjangBelanja.push(produk);
    updateKeranjang();
    document.getElementById("keranjangBelanja").classList.add("active");
}

function updateKeranjang() {
    var listKeranjangHTML = "";
    var totalHarga = 0;
    keranjangBelanja.forEach(function(item) {
        listKeranjangHTML += `<li class="list-group-item">${escapeHTML(item.nama)} - Rp${item.harga}</li>`;
        totalHarga += item.harga;
    });

    document.getElementById("listKeranjang").innerHTML = listKeranjangHTML;
    document.getElementById("hargaTotal").innerText = totalHarga; 
    document.getElementById("keranjangBelanja").style.display = "block"; 
    console.log("Keranjang belanja diperbarui:", keranjangBelanja);
}

function escapeHTML(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
tampilkanProduk();