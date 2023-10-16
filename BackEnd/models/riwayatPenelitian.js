// models/penelitian.js
const client = require("../connection");


const getAllRiwayatPenelitian = (callback) => {
    client.query('SELECT * FROM riwayat_penelitian', callback);
}

// Mendapatkan data dosen dari database berdasarkan ID
const getRiwayatPenelitianById = (id_riwayatpenelitian, callback) => {
    const query = 'SELECT * FROM riwayat_penelitian WHERE id_riwayatpenelitian = $1';
    const values = [id_riwayatpenelitian];
    client.query(query, values, callback);
}


const insertRiwayatPenelitian = (id_dosen, id_penelitian, callback) => {
    const query = 'INSERT INTO riwayat_penelitian (id_dosen, id_penelitian) VALUES ($1, $2) RETURNING id_riwayatpenelitian';
    const values = [id_dosen, id_penelitian];
    client.query(query, values, callback);
}

const updateRiwayatPenelitian = (id_penelitian, id_dosen, callback) => {
    const query = 'UPDATE riwayat_penelitian SET id_penelitian = $1, id_dosen = $2 WHERE id_riwayatpenelitian = $3';
    const values = [id_penelitian, id_dosen];
    client.query(query, values, callback);
}

const deleteRiwayatPenelitian = (id_riwayatpenelitian, callback) => {
    const query = 'DELETE FROM riwayat_penelitian WHERE id_riwayatpenelitian = $1';
    const values = [id_riwayatpenelitian];
    client.query(query, values);
}

module.exports = {
    getAllRiwayatPenelitian,
    getRiwayatPenelitianById,
    insertRiwayatPenelitian,
    updateRiwayatPenelitian,
    deleteRiwayatPenelitian
};
