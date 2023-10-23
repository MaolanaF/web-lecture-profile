const express = require("express");
const router = express.Router();
const pkmController = require("../controllers/pkmController");

router.get('/pkms', pkmController.getPKM);
router.get('/pkms/:id_pkm', pkmController.getPKMbyId);
router.post('/pkms', pkmController.insertPKM);
router.put('/pkms/:id_pkm', pkmController.updatePKM);
router.delete('/pkms/:id_pkm', pkmController.deletePKM);

module.exports = router;