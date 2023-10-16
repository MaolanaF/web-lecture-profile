// models/pengajaran.js
const client = require("../connection");

const getAllPengajaran = (callback) => {
    client.query('SELECT * FROM riwayat_pengajaran', callback);
}

const getPengajaranById = (id_pengajaran, callback) => {
    const query = 'SELECT * FROM riwayat_pengajaran WHERE id_pengajaran = $1';
    const values = [id_pengajaran];
    client.query(query, values, callback);
}

const insertPengajaran = (id_matkul, id_dosen, callback) => {
    const query = 'INSERT INTO riwayat_pengajaran(id_matkul, id_dosen) VALUES($1, $2)';
    const values = [id_matkul, id_dosen];
    client.query(query, values, callback);
}

const updatePengajaran = (id_pengajaran, id_matkul, id_dosen, callback) => {
    const query = 'UPDATE riwayat_pengajaran SET id_matkul = $1, id_dosen = $2 WHERE id_pengajaran = $3';
    const values = [id_matkul, id_dosen, id_pengajaran];
    client.query(query, values, callback);
}

const deletePengajaran = (id_pengajaran, callback) => {
    const query = 'DELETE FROM riwayat_pengajaran] WHERE id_pengajaran = $1';
    const values = [id_pengajaran];
    client.query(query, values, callback);
}

module.exports = {
    getAllPengajaran,
    getPengajaranById,
    insertPengajaran,
    updatePengajaran,
    deletePengajaran
};