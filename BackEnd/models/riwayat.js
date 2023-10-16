// models/riwayat.js
const client = require("../../connection");

const getPengajaranByIdDosen = (id_dosen, callback) => {
    const query = 'SELECT mata_kuliah.kode_matkul, mata_kuliah.nama_matkul, mata_kuliah.semester, mata_kuliah.kode_kelas, mata_kuliah.perguruan_tinggi FROM riwayat_pengajaran INNER JOIN mata_kuliah ON riwayat_pengajaran.id_matkul = mata_kuliah.id_matkul WHERE riwayat_pengajaran.id_dosen = $1';
    const values = [id_dosen];
    client.query(query, values, callback);
}

const getPenelitianByIdDosen = (id_penelitian, callback) => {
    const query = 'SELECT penelitian.judul, penelitian.tanggal_publikasi, penelitian.bidang, penelitian.author, penelitian.link_penelitian FROM riwayat_penelitian INNER JOIN penelitian ON riwayat_penelitian.id_penelitian = penelitian.id_penelitian WHERE riwayat_penelitian.id_dosen = $1';
    const values = [id_penelitian];
    client.query(query, values, callback);
}

const getPKMByIdDosen = (id_pkm, callback) => {
    const query = 'SELECT * FROM riwayat_pkm WHERE id_penelitian = $1';
    const values = [id_pkm];
    client.query(query, values, callback);
}
    
const getPendidikanByIdDosen = (id_pkm, callback) => {
    const query = 'SELECT * FROM riwayat_pendidikan WHERE id_penelitian = $1';
    const values = [id_pkm];
    client.query(query, values, callback);
}

module.exports = {
    getPengajaranByIdDosen,
    getPenelitianByIdDosen,
    getPKMByIdDosen,
    getPendidikanByIdDosen
};