const express = require("express");
const router = express.Router();
const dosenController = require("../controllers/dosenController");

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: "./public/uploads/foto",
    filename: function (req, file, cb) {
        // console.log(file);
        cb(null,"IMG-" + Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ 
    storage: storage,
    limits:{fileSize: 1000000},
  });
  
router.get("/dosen", dosenController.getAllDosen);
router.get("/dosen/:id_dosen", dosenController.getDosenById);
router.post("/dosen", upload.single('file'), dosenController.insertDosen);
router.put("/dosen/:id_dosen", upload.single('foto'), dosenController.updateDosen);
router.delete("/dosen/:id_dosen", dosenController.deleteDosen);

router.post("/login", dosenController.getUserByUsername);
router.get("/login/:id_user", dosenController.getDosenByIdUser);

module.exports = router;