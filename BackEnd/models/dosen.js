// models/dosen.js
const client = require("../connection");

const getAllDosen = (callback) => {
    client.query('SELECT * FROM dosen', callback);
}

// Mendapatkan data dosen dari database berdasarkan ID
const getDosenById = (id_dosen, callback) => {
    const query = 'SELECT * FROM dosen WHERE id_dosen = $1';
    const values = [id_dosen];
    client.query(query, values, callback);
}

const insertDosen = (id_dosen, nama, email, jabatan, jurusan, callback) => {
    const query = 'INSERT INTO dosen(id_dosen, nama, email, jabatan, jurusan) VALUES($1, $2, $3, $4, $5)';
    const values = [id_dosen, nama, email, jabatan, jurusan];
    client.query(query, values, callback);
}

const updateDosen = (id_dosen, nama, email, jabatan, jurusan, callback) => {
    const query = 'UPDATE dosen SET nama = $1, email = $2, jabatan = $3, jurusan = $4 WHERE id_dosen = $5';
    const values = [nama, email, jabatan, jurusan, id_dosen];
    client.query(query, values, callback);
}

const deleteDosen = (id_dosen, callback) => {
    const query = 'DELETE FROM dosen WHERE id_dosen = $1';
    const values = [id_dosen];
    client.query(query, values, callback);
}

module.exports = {
    getAllDosen,
    getDosenById,
    insertDosen,
    updateDosen,
    deleteDosen
};