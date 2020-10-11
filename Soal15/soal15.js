let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis : "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: "172",
    warnaSampul: ["hitam"]
}


const combined1 = [...warna, ...buku.warnaSampul]

const combined2 = [buku, ...dataBukuTambahan ] 

console.log(combined1)
console.log(combined2)