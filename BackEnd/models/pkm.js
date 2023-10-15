// models/Todo.js
const client = require('../connection'); // Assuming you have a database connection module

class PkmModel {
  async insertPKM(id_pkm, judul_pkm, tahun_pkm, bidang_pkm) {
    try {
      const newPkm = await client.query(
        "INSERT INTO pkm (id_pkm, judul_pkm, tahun_pkm, bidang_pkm) VALUES($1, $2, $3, $4) RETURNING *",
        [id_pkm, judul_pkm, tahun_pkm, bidang_pkm]
      );
      return newPkm.rows;
    } catch (err) {
      throw err;
    }
  }

  async getPKM() {
    try {
      const allPkms = await client.query("SELECT * FROM pkm");
      return allPkms.rows;
    } catch (err) {
      throw err;
    }
  }

  async updatePKM(id, judul_pkm, tahun_pkm, bidang_pkm) {
    try {
      await client.query(
        "UPDATE pkm SET judul_pkm = $1, tahun_pkm = $2, bidang_pkm = $3 WHERE id_pkm = $4",
        [judul_pkm, tahun_pkm, bidang_pkm, id]
      );
      console.log("PKM updated successfully!");
    } catch (err) {
      console.error("Error updating PKM:", err);
      throw err;
    }
  }
  

  async deletePKM(id) {
    try {
      await client.query("DELETE FROM pkm WHERE id_pkm = $1", [id]);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = PkmModel;