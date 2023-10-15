const Pkm = require('../models/pkm');

const pkmController = {
  async insertPKM(req, res) {
    try {
      const { id_pkm, judul_pkm, tahun_pkm, bidang_pkm } = req.body;
      const pkmModel = new Pkm();
      const newPkm = await pkmModel.insertPKM(id_pkm, judul_pkm, tahun_pkm, bidang_pkm);
      res.json(newPkm);
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err.message);
    }
  },

  async getPKM(req, res) {
    try {
      const pkmModel = new Pkm();
      const allPkms = await pkmModel.getPKM();
      res.json(allPkms);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  async updatePKM (req, res) {
    try {
      const { id } = req.params;
      const { judul_pkm, tahun_pkm, bidang_pkm } = req.body;
      const pkmModel = new Pkm();
      await pkmModel.updatePKM(id, judul_pkm, tahun_pkm, bidang_pkm);
      res.json("Pkm was updated!");
    } catch (err) {
      console.error("Error updating todo:", err);
      res.status(500).send('Server Error');
    }
  },

  async deletePKM(req, res) {
    try {
      const { id } = req.params;
      const pkmModel = new Pkm();
      await pkmModel.deletePKM(id);
      res.json("Pkm was deleted!");
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
};

module.exports = pkmController;
