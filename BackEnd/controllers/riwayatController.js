const riwayatModel = require("../../models/riwayat");

const getPengajaranByIdDosen = (req, res) => {
  const id_dosen = req.params.id_dosen;
  riwayatModel.getPengajaranById(id_dosen, (err, result) => {
    if (!err) {
      if (result) {
        res.send(result);
      } else {
        res.status(404).send('Riwayat Pengajaran tidak ditemukan');
      }
    } else {
      res.status(500).send(err.message);
    }
  });
}

module.exports = {
    getPengajaranByIdDosen,
};