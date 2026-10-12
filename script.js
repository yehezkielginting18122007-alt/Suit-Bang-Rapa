let mode = "";
let pilihanUser = -1;

const data = {
    batu: [
        { nama: "Batu", gambarId: "img-batu" },
        { nama: "Gunting", gambarId: "img-gunting" },
        { nama: "Kertas", gambarId: "img-kertas" }
    ],

    gajah: [
        { nama: "Gajah", gambarId: "img-gajah" },
        { nama: "Orang", gambarId: "img-orang" },
        { nama: "Semut", gambarId: "img-semut" }
    ],

    jari: [
        { nama: "Jempol", gambarId: "img-jempol" },
        { nama: "Telunjuk", gambarId: "img-telunjuk" },
        { nama: "Kelingking", gambarId: "img-kelingking" }
    ]
};

function sumberGambar(item) {
    return document.getElementById(item.gambarId).src;
}

function pilihMode(p) {
    mode = p;
    pilihanUser = -1;

    document.getElementById("menu").hidden = true;
    document.getElementById("game").hidden = false;

    const judul = {
        batu: "BATU GUNTING KERTAS",
        gajah: "GAJAH ORANG SEMUT",
        jari: "SUIT JARI"
    };

    document.getElementById("judulMode").innerText = judul[mode];

    document.getElementById("gambarUser").removeAttribute("src");
    document.getElementById("gambarKomputer").removeAttribute("src");

    document.getElementById("user").innerText = "Belum memilih";
    document.getElementById("komputer").innerText = "Menunggu...";
    document.getElementById("hasil").innerText = "";

    const wadah = document.getElementById("pilihan");
    wadah.innerHTML = "";

    data[mode].forEach(function(item, i) {
        const tombol = document.createElement("button");

        const gambar = document.createElement("img");
        gambar.src = sumberGambar(item);
        gambar.alt = item.nama;

        const nama = document.createElement("span");
        nama.innerText = item.nama;

        tombol.appendChild(gambar);
        tombol.appendChild(nama);

        tombol.onclick = function() {
            pilihanUser = i;

            wadah.querySelectorAll("button").forEach(function(btn) {
                btn.classList.remove("terpilih");
            });

            tombol.classList.add("terpilih");

            document.getElementById("gambarUser").src =
                sumberGambar(item);

            document.getElementById("user").innerText = item.nama;

            document.getElementById("gambarKomputer").removeAttribute("src");
            document.getElementById("komputer").innerText = "Menunggu...";
            document.getElementById("hasil").innerText = "";
        };

        wadah.appendChild(tombol);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function main() {
    if (mode === "") {
        alert("Pilih mode permainan dulu, blay!");
        return;
    }

    if (pilihanUser === -1) {
        alert("Pilih suit dulu, blay!");
        return;
    }

    const pilihanKomputer = Math.floor(Math.random() * 3);

    const user = data[mode][pilihanUser];
    const komputer = data[mode][pilihanKomputer];

    document.getElementById("gambarKomputer").src =
        sumberGambar(komputer);

    document.getElementById("komputer").innerText = komputer.nama;

    let menang = false;

    if (mode === "batu") {
        menang =
            (pilihanUser === 0 && pilihanKomputer === 1) ||
            (pilihanUser === 1 && pilihanKomputer === 2) ||
            (pilihanUser === 2 && pilihanKomputer === 0);
    }

    else if (mode === "gajah") {
        menang =
            (pilihanUser === 0 && pilihanKomputer === 1) ||
            (pilihanUser === 1 && pilihanKomputer === 2) ||
            (pilihanUser === 2 && pilihanKomputer === 0);
    }

    else if (mode === "jari") {
        menang =
            (pilihanUser === 0 && pilihanKomputer === 1) ||
            (pilihanUser === 1 && pilihanKomputer === 2) ||
            (pilihanUser === 2 && pilihanKomputer === 0);
    }

    let hasil;

    if (pilihanUser === pilihanKomputer) {
        hasil = "SERI YE, HOKI LU BLAY!";
    } else if (menang) {
        hasil = "MENANG, JAGO LU BLAY!";
    } else {
        hasil = "KALAH, YAHAHA CUPU BLAY!";
    }

    document.getElementById("hasil").innerText = hasil;

    alert(
        "HASIL PERTANDINGAN\n\n" +
        "LO: " + user.nama + "\n" +
        "KOMPUTER: " + komputer.nama + "\n\n" +
        hasil
    );
}

function kembali() {
    document.getElementById("game").hidden = true;
    document.getElementById("menu").hidden = false;

    mode = "";
    pilihanUser = -1;

    document.getElementById("gambarUser").removeAttribute("src");
    document.getElementById("gambarKomputer").removeAttribute("src");

    document.getElementById("user").innerText = "Belum memilih";
    document.getElementById("komputer").innerText = "Menunggu...";
    document.getElementById("hasil").innerText = "";

    document.getElementById("pilihan").innerHTML = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}