const matkulModel = require("../models/matkul");

const getAllMatkul = (req, res) => {
    matkulModel.getAllMatkul((err, result) => {
      if (!err) {
        res.send(result.rows);
      }else {
        res.status(500).send(err.message);
      }
    });
}

const insertMatkul = (req, res) => {
    const { id_matkul, kode_matkul, nama_matkul, semester, kode_kelas, perguruan_tinggi } = req.body;
    matkulModel.insertMatkul(id_matkul, kode_matkul, nama_matkul, semester, kode_kelas, perguruan_tinggi, (err, result) => {
      if (!err) {
        res.send('Insert success');
      } else {
        res.status(500).send(err.message);
      }
    });
}

const updateMatkul = (req, res) => {
    const id_matkul = req.params.id_matkul;
    const { kode_matkul, nama_matkul, semester, kode_kelas, perguruan_tinggi } = req.body;
    matkulModel.updateMatkul(id_matkul, kode_matkul, nama_matkul, semester, kode_kelas, perguruan_tinggi, (err, result) => {
      if (!err) {
        res.send('Update success');
      } else {
        res.status(500).send(err.message);
      }
    });
}

const deleteMatkul = (req, res) => {
    const id_matkul = req.params.id_matkul;
    matkulModel.deleteMatkul(id_matkul, (err, result) => {
      if (!err) {
        res.send('Delete success');
      } else {
        res.status(500).send(err.message);
      }
    });
}

module.exports = {
    getAllMatkul,
    insertMatkul,
    updateMatkul,
    deleteMatkul
};