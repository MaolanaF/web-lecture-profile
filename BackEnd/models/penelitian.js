// models/penelitian.js
const client = require("../connection");


const getAllPenelitian = (callback) => {
    client.query('SELECT * FROM penelitian', callback);
}

const insertPenelitian = (id_penelitian, judul, tanggal_publikasi, bidang, author, link_penelitian, callback) => {
    const query = 'INSERT INTO penelitian (id_penelitian, judul, tanggal_publikasi, bidang, author, link_penelitian) VALUES ($1, $2, $3, $4, $5, $6)';
    const values = [id_penelitian, judul, tanggal_publikasi, bidang, author, link_penelitian];
    client.query(query, values, callback);
}

const updatePenelitian = (id_penelitian, judul, tanggal_publikasi, bidang, author, link_penelitian, callback) => {
    const query = 'UPDATE penelitian SET judul = $1, tanggal_publikasi = $2, bidang = $3, author = $4, link_penelitian = $5 WHERE id_penelitian = $6';
    const values = [judul, tanggal_publikasi, bidang, author, link_penelitian, id_penelitian];
    client.query(query, values, callback);
}

const deletePenelitian = (id_penelitian, callback) => {
    const query = 'DELETE FROM penelitian WHERE id_penelitian = $1';
    const values = [id_penelitian];
    client.query(query, values, callback);
}

module.exports = {
    getAllPenelitian,
    insertPenelitian,
    updatePenelitian,
    deletePenelitian
};