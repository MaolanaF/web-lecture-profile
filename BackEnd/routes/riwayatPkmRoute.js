const express = require("express");
const router = express.Router();
const riwayatPkmController = require("../controllers/riwayatPkmController");

router.get('/riwayatpkm', riwayatPkmController.getRiwayatPKMData);
router.get('/profile_dosen/riwayatpkm/:id_dosen', riwayatPkmController.getRiwayatPKMbyIdDosen);
router.post('/riwayatpkm', riwayatPkmController.insertRiwayatPKM);
router.put('/riwayatpkm/:id_riwayatpkm', riwayatPkmController.updateRiwayatPKM);
router.delete('/riwayatpkm/:id_riwayatpkm', riwayatPkmController.deleteRiwayatPKM);

module.exports = router;