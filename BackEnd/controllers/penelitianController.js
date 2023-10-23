const penelitianModel = require('../models/penelitian');
const fs = require('fs');
// import path from "path";

const getPenelitianById = (req, res) => {
  const id_penelitian = req.params.id_penelitian;
  penelitianModel.getPenelitianById(id_penelitian, (err, result) => {
      if (!err) {
          if (result) {
              res.send(result);
          } else {
              res.status(404).send('Penelitian tidak ditemukan');
          }
      } else {
          res.status(500).send(err.message);
      }
  });
}

const getPenelitianByIdDosen = (req, res) => {
  const id_penelitian = req.params.id_penelitian;
  penelitianModel.getPenelitianById(id_penelitian, (err, result) => {
      if (!err) {
          if (result) {
              res.send(result.rows);
          } else {
              res.status(404).send('Penelitian tidak ditemukan');
          }
      } else {
          res.status(500).send(err.message);
      }
  });
}

const getAllPenelitian = (req, res) => {
  penelitianModel.getAllPenelitian((err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      res.status(500).send(err.message);
    }
  });
}

const insertPenelitian = (req, res) => {
  
  const {judul, tanggal_publikasi, bidang, author } = req.body;

  penelitianModel.insertPenelitian(judul, tanggal_publikasi, bidang, author, req.file.filename, (err, result) => {
    if (!err) {
      res.send('Insert success');
    } else {
      res.status(500).send(err.message);
    }
  });  
  
  // if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
  // const name = req.body.title;
  // const file = req.files.file;
  // const fileSize = file.data.length;
  // const ext = path.extname(file.name);
  // const fileName = file.md5 + ext;
  // const url = `${req.protocol}://${req.get("host")}/files/${fileName}`;
  // const allowedType = ['.pdf','.jpg','.jpeg'];

  // if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
  // if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

  // file.mv(`./public/images/${fileName}`, async(err)=>{
  //     if(err) return res.status(500).json({msg: err.message});
  //     try {
  //       penelitianModel.insertPenelitian(judul, tanggal_publikasi, bidang, author, fileName, (err, result) => {
  //         if (!err) {
  //           res.send('Insert success');
  //         } else {
  //           res.status(500).send(err.message);
  //         }
  //       })
  //     } catch (error) {
  //         console.log(error.message);
  //     }
  // })
}

const updatePenelitian = (req, res) => {
  const id_penelitian = req.params.id_penelitian;

  const { judul, tanggal_publikasi, bidang, author, link_penelitian } = req.body;

  const link_baru = req.file ? req.file.filename : link_penelitian 

  if(req.file) {
    var deletedFile = './public/uploads/penelitian/' + link_penelitian
    if (fs.existsSync(deletedFile)) {
        fs.unlink(deletedFile, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('deleted');
        })
    }
  }

  penelitianModel.updatePenelitian(id_penelitian, judul, tanggal_publikasi, bidang, author, link_baru, (err, result) => {
    if (!err) {
      res.send('Update success');
    } else {
      res.status(500).send(err.message);
    }
  });
}

const deletePenelitian = (req, res) => {
  const id_penelitian = req.params.id_penelitian;
  
  penelitianModel.deletePenelitian(id_penelitian, (err, result) => {
    if (!err) {
      res.send('Delete success');
    } else {
      res.status(500).send(err.message);
    }
  });
}

module.exports = {
  getAllPenelitian,
  getPenelitianById,
  getPenelitianByIdDosen,
  insertPenelitian,
  updatePenelitian,
  deletePenelitian
};


