// routes/dosenRoute.js
const express = require("express");
const router = express.Router();
const dosenController = require("../controllers/dosenController");

router.get('/dosen', dosenController.getAllDosen);
router.get('/dosen/:id_dosen', dosenController.getDosenById);
router.post('/dosen', dosenController.insertDosen);
router.put('/dosen/:id_dosen', dosenController.updateDosen);
router.delete('/dosen/:id_dosen', dosenController.deleteDosen);

module.exports = router;
