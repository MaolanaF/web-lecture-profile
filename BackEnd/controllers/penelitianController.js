const penelitianModel = require("../models/penelitian");

const getPenelitianById = (req, res) => {
  const id_penelitian = req.params.id_penelitian;
  penelitianModel.getPenelitianById(id_penelitian, (err, result) => {
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

const getAllPenelitian = (req, res) => {
  penelitianModel.getAllPenelitian((err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      res.status(500).send(err.message);
    }
  });
}

const insertPenelitian = (req, res) => {
  const {judul, tanggal_publikasi, bidang, author, link_penelitian } = req.body;

  penelitianModel.insertPenelitian(judul, tanggal_publikasi, bidang, author, link_penelitian, (err, result) => {
    if (!err) {
      res.send('Insert success');
    } else {
      res.status(500).send(err.message);
    }

  });  
}

const updatePenelitian = (req, res) => {
  const id_penelitian = req.params.id_penelitian;
  const { judul, tanggal_publikasi, bidang, author, link_penelitian } = req.body;
  penelitianModel.updatePenelitian(id_penelitian, judul, tanggal_publikasi, bidang, author, link_penelitian, (err, result) => {
    if (!err) {
      res.send('Update success');
    } else {
      res.status(500).send(err.message);
    }
  });
}

const deletePenelitian = (req, res) => {
  const id_penelitian = req.params.id_penelitian;
  
  penelitianModel.deletePenelitian(id_penelitian, (err, result) => {
    if (!err) {
      res.send('Delete success');
    } else {
      res.status(500).send(err.message);
    }
  });
}

module.exports = {
  getAllPenelitian,
  getPenelitianById,
  insertPenelitian,
  updatePenelitian,
  deletePenelitian
};


