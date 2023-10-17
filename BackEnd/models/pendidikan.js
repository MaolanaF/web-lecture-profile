const client = require('../connection')

const getAllRiwayat = (callback) => {
    client.query(`SELECT * FROM riwayat_pendidikan`, callback);
}

const getRiwayatById = (id_pendidikan, callback) => {
    const query = 'SELECT * FROM riwayat_pendidikan WHERE id_pendidikan = $1';
    const values = [id_pendidikan];
    client.query(query, values, callback);
}

const insertRiwayat = (id_pendidikan, jenjang_pendidikan, nama_institusi, tahun_lulus, callback)=>{
    const query= `INSERT INTO riwayat_pendidikan(id_pendidikan, jenjang_pendidikan, nama_institusi, tahun_lulus) VALUES ($1, $2, $3, $4)`;
    const values= [id_pendidikan, jenjang_pendidikan, nama_institusi, tahun_lulus];
    client.query(query, values, callback)
}

const updateRiwayat = (id_pendidikan, jenjang_pendidikan, nama_institusi, tahun_lulus, callback) => {
    const query = 'UPDATE riwayat_pendidikan SET jenjang_pendidikan = $1, nama_institusi = $2, tahun_lulus = $3 WHERE id_pendidikan = $4';
    const values = [jenjang_pendidikan, nama_institusi, tahun_lulus, id_pendidikan];
    client.query(query, values, callback);
}

const deleteRiwayat = (id_pendidikan, callback) => {
    const query = 'DELETE FROM riwayat_pendidikan WHERE id_pendidikan = $1';
    const values = [id_pendidikan];
    client.query(query, values, callback);
}

module.exports = {
    getAllRiwayat,
    getRiwayatById,
    insertRiwayat,
    updateRiwayat,
    deleteRiwayat
};