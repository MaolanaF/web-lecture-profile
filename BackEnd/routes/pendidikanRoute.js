const express = require("express");
const router = express.Router();
const riwayatController = require("../controllers/pendidikanController");

router.get('/riwayat_pendidikan', riwayatController.getAllRiwayat);
router.get('/riwayat_pendidikan/:id_pendidikan', riwayatController.getPendidikanById);
router.post('/riwayat_pendidikan', riwayatController.insertRiwayat);
router.put('/riwayat_pendidikan/:id_pendidikan', riwayatController.updateRiwayat);
router.delete('/riwayat_pendidikan/:id_pendidikan', riwayatController.deleteRiwayat);

module.exports = router;