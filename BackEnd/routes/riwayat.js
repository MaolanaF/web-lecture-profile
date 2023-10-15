// routes/dosenRoute.js
const express = require("express");
const router = express.Router();
const riwayatController = require("../controllers/riwayatController");

router.get('/dosen/:id_dosen/riwayat_pengajaran', riwayatController.getPengajaranByIdDosen());

module.exports = router;
