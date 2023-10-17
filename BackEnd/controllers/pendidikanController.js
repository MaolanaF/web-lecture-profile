const riwayatModel = require('../models/pendidikan');

const getAllRiwayat = (req, res) => {
    riwayatModel.getAllRiwayat((err, result) =>{
        if (!err){
            res.send(result.rows);
        }else {
            res.status(500).send(err.massage);
        }
    }); 
}

const getPendidikanById = (req, res) => {
  const id_pendidikan = req.params.id_pendidikan;
  riwayatModel.getRiwayatById(id_pendidikan, (err, result) => {
      if (!err) {
          if (result) {
              res.send(result);
          } else {
              res.status(404).send('Penelitian tidak ditemukan');
          }
      } else {
          res.status(500).send(err.message);
      }
  });
}

const insertRiwayat = (req, res) => {
    const {id_pendidikan, jenjang_pendidikan, nama_institusi, tahun_lulus} = req.body;
    riwayatModel.insertRiwayat(id_pendidikan, jenjang_pendidikan, nama_institusi, tahun_lulus,( err, result)=>{
        if(!err ){
            res.send('Insert success');
        }else {
            res.status(500).send(err.massage);
        }
    });
}

const updateRiwayat = (req, res) => {
    const id_pendidikan = req.params.id_pendidikan;
    const { jenjang_pendidikan, nama_institusi, tahun_lulus } = req.body;
    riwayatModel.updateRiwayat(id_pendidikan, jenjang_pendidikan, nama_institusi, tahun_lulus, (err, result) => {
      if (!err) {
        res.send('Update success');
      } else {
        res.status(500).send(err.message);
      }
    });
  }

const deleteRiwayat = (req, res) => {
    const id_pendidikan = req.params.id_pendidikan;
    riwayatModel.deleteRiwayat(id_pendidikan, (err, result) => {
      if (!err) {
        res.send('Delete success');
      } else {
        res.status(500).send(err.message);
      }
    });
  }

module.exports = {
    getAllRiwayat,
    getPendidikanById,
    insertRiwayat,
    updateRiwayat,
    deleteRiwayat
};