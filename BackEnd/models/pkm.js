// models/pkm.js
const client = require('../connection');

class PkmModel {
  async insertPKM(judul_pkm, tahun_pkm, bidang_pkm, link_pkm) {
    try {
      const newPkm = await client.query(
        "INSERT INTO pkm (judul_pkm, tahun_pkm, bidang_pkm, link_pkm) VALUES($1, $2, $3, $4) RETURNING *",
        [judul_pkm, tahun_pkm, bidang_pkm, link_pkm]
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

  async getPKMbyId(id_pkm) {
    try {
      const pkm = await client.query("SELECT * FROM pkm WHERE id_pkm = $1", [id_pkm]);
      return pkm.rows;
    } catch (err) {
      throw err;
    }
  }

  async updatePKM(id_pkm, judul_pkm, tahun_pkm, bidang_pkm, link_pkm) {
    try {
      await client.query(
        "UPDATE pkm SET judul_pkm = $1, tahun_pkm = $2, bidang_pkm = $3, link_pkm = $4 WHERE id_pkm = $5",
        [judul_pkm, tahun_pkm, bidang_pkm, link_pkm, id_pkm]
      );
      console.log("PKM updated successfully!");
    } catch (err) {
      console.error("Error updating PKM:", err);
      throw err;
    }
  }

  async deletePKM(id_pkm) {
    try {
      await client.query("DELETE FROM pkm WHERE id_pkm = $1", [id_pkm]);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = PkmModel;
