const express = require("express");
const router = express.Router();
const pkmController = require("../controllers/pkmController");

router.get('/pkms', pkmController.getPKM);
router.post('/pkms', pkmController.insertPKM);
router.put('/pkms/:id', pkmController.updatePKM);
router.delete('/pkms/:id', pkmController.deletePKM);

module.exports = router;