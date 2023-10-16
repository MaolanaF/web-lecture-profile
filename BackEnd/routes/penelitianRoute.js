// routes/dosenRoute.js
const express = require("express");
const router = express.Router();
const penelitianController = require("../controllers/penelitianController");

router.get('/penelitian', penelitianController.getAllPenelitian);
router.get('/penelitian/:id_penelitian', penelitianController.getPenelitianById);
router.post('/penelitian', penelitianController.insertPenelitian);
router.put('/penelitian/:id_penelitian', penelitianController.updatePenelitian);
router.delete('/penelitian/:id_penelitian', penelitianController.deletePenelitian);

module.exports = router;
