const dosenModel = require("../models/dosen");

const getAllDosen = (req, res) => {
    dosenModel.getAllDosen((err, result) => {
      if (!err) {
        res.send(result.rows);
      }else {
        res.status(500).send(err.message);
      }
    });
}

const insertDosen = (req, res) => {
    const { nama, gelar, jabatan, jurusan } = req.body;
    dosenModel.insertDosen(nama, gelar, jabatan, jurusan, (err, result) => {
      if (!err) {
        res.send('Insert success');
      } else {
        res.status(500).send(err.message);
      }
    });
}

const updateDosen = (req, res) => {
    const id_dosen = req.params.id_dosen;
    const { nama, gelar, jabatan, jurusan } = req.body;
    dosenModel.updateDosen(id_dosen, nama, gelar, jabatan, jurusan, (err, result) => {
      if (!err) {
        res.send('Update success');
      } else {
        res.status(500).send(err.message);
      }
    });
}

const deleteDosen = (req, res) => {
    const id_dosen = req.params.id_dosen;
    dosenModel.deleteDosen(id_dosen, (err, result) => {
      if (!err) {
        res.send('Delete success');
      } else {
        res.status(500).send(err.message);
      }
    });
}

module.exports = {
    getAllDosen,
    insertDosen,
    updateDosen,
    deleteDosen
};