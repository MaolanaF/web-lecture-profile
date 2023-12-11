const dosenModel = require("../models/dosen");
const fs = require('fs');

const getAllDosen = (req, res) => {
  dosenModel.getAllDosen((err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      res.status(500).send(err.message);
    }
  });
};

const getAllUser = (req, res) => {
  dosenModel.getAllUser((err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      res.status(500).send(err.message);
    }
  });
};

const getDosenById = (req, res) => {
  const id_dosen = req.params.id_dosen;
  dosenModel.getDosenById(id_dosen, (err, result) => {
    if (!err) {
      if (result) {
        res.send(result);
      } else {
        res.status(404).send("Dosen tidak ditemukan");
      }
    } else {
      res.status(500).send(err.message);
    }
  });
};

const insertDosen = (req, res) => {
  const { nama, email, jabatan, jurusan } = req.body;
  dosenModel.insertDosen(nama, email, jabatan, jurusan, req.file.filename, (err, result) => {
    if (!err) {
      res.send("Insert success");
    } else {
      res.status(500).send(err.message);
      console.log(err.message)
    }
  });
};

const updateDosen = (req, res) => {
  const id_dosen = req.params.id_dosen;
  const { nama, email, jabatan, jurusan, foto } = req.body;
  const foto_baru = req.file ? req.file.filename : foto
  
  if(req.file) {
    var deletedFile = './public/uploads/foto/' + foto
    if (fs.existsSync(deletedFile)) {
        fs.unlink(deletedFile, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('deleted');
        })
    }
  }
  
  dosenModel.updateDosen(id_dosen, nama, email, jabatan, jurusan, foto_baru, (err, result) => {
      if (!err) {
        res.send("Update success");
      } else {
        res.status(500).send(err.message);
      }
    }
  );
};

const deleteDosen = (req, res) => {
  const id_dosen = req.params.id_dosen;
  dosenModel.deleteDosen(id_dosen, (err, result) => {
    if (!err) {
      res.send("Delete success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

const getUserByUsername = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  dosenModel.getUserByUsername(username, password, (err, result) => {
    if (!err) {
      if (result) {
        res.send(result.rows);
      } else {
        res.status(404).send("Akun tidak ditemukan");
      }
    } else {
      res.status(500).send(err.message);
    }
  });
};

const getDosenByIdUser = (req, res) => {
  const id_user = req.params.id_user;
  dosenModel.getDosenByIdUser(id_user, (err, result) => {
    if (!err) {
      if (result) {
        res.send(result.rows);
      } else {
        res.status(404).send("Akun tidak ditemukan");
      }
    } else {
      res.status(500).send(err.message);
    }
  });
};

module.exports = {
  getAllDosen,
  getDosenById,
  insertDosen,
  updateDosen,
  deleteDosen,
  getUserByUsername,
  getDosenByIdUser
};