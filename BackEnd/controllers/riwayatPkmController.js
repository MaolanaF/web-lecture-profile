const RiwayatPkm = require('../models/riwayatPkm');

const riwayatPkmController = {
  async insertRiwayatPKM(req, res) {
    try {
      const { id_pkm, id_dosen } = req.body;

      const riwayatPkmModel = new RiwayatPkm();
  
      const isPKMValid = await riwayatPkmModel.validatePKM(id_pkm);
      const isDosenValid = await riwayatPkmModel.validateDosen(id_dosen);
  
      if (!isPKMValid || !isDosenValid) {
        return res.status(400).json({ message: 'ID PKM atau ID Dosen tidak valid' });
      }
  
      const newRiwayatPkm = await riwayatPkmModel.insertRiwayatPKM(id_dosen, id_pkm);
      return res.json({ message: 'Data Riwayat PKM berhasil ditambahkan' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
    // try {
    //   const { id_dosen, id_pkm } = req.body;
    //   const riwayatPkmModel = new RiwayatPkm();
    //   const newRiwayatPkm = await riwayatPkmModel.insertRiwayatPKM(id_dosen, id_pkm);
    //   res.json("Pkm Insert");
    // } catch (err) {
    //   console.error(err.message);
    //   res.status(500).send(err.message);
    // }
  },

  async getRiwayatPKMData(req, res) {
    try {
      const riwayatPkmModel = new RiwayatPkm();
      const riwayatPkmData = await riwayatPkmModel.getRiwayatPKMData();
      res.json(riwayatPkmData);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  async getRiwayatPKMbyIdDosen(req, res) {
    try {
      const { id_dosen } = req.params;
      const riwayatPkmModel = new RiwayatPkm();
      const riwayatPkmbyIdDosen = await riwayatPkmModel.getRiwayatPKMbyIdDosen(id_dosen);
      res.json(riwayatPkmbyIdDosen);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  async updateRiwayatPKM (req, res) {
    try {
      const { id } = req.params;
      const { id_dosen, id_pkm } = req.body;
      const riwayatPkmModel = new RiwayatPkm();
      await riwayatPkmModel.updateRiwayatPKM(id, id_dosen, id_pkm);
      res.json("Riwayat Pkm was updated!");
    } catch (err) {
      console.error("Error updating todo:", err);
      res.status(500).send('Server Error');
    }
  },

  async deleteRiwayatPKM(req, res) {
    try {
      const { id_riwayatpkm } = req.params;
      const riwayatPkmModel = new RiwayatPkm();
      await riwayatPkmModel.deleteRiwayatPKM(id_riwayatpkm);
      res.json("Riwayat Pkm was deleted!");
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
};

module.exports = riwayatPkmController;
