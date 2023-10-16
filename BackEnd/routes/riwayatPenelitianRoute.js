// routes/dosenRoute.js
const express = require("express");
const router = express.Router();
const riwayatPenelitianController = require("../controllers/riwayatPenelitianController");

router.get('/riwayat_penelitian', riwayatPenelitianController.getAllRiwayatPenelitian);
router.get('/riwayat_penelitian/:id_riwayatpenelitian', riwayatPenelitianController.getRiwayatPenelitianById);
router.post('/riwayat_penelitian', riwayatPenelitianController.insertRiwayatPenelitian);
router.put('/riwayat_penelitian/:id_riwayatpenelitian', riwayatPenelitianController.updateRiwayatPenelitian);
router.delete('/riwayat_penelitian/:id_riwayatpenelitian', riwayatPenelitianController.deleteRiwayatPenelitian);

module.exports = router;
