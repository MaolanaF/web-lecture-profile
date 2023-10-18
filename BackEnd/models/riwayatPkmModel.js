// models/Todo.js
const client = require('../connection'); // Assuming you have a database connection module

class RiwayatPkmModel {

  async validatePKM(id_pkm) {
    const query = 'SELECT id_pkm FROM pkm WHERE id_pkm = $1';
    const result = await client.query(query, [id_pkm]);
    return result.rows.length > 0;
  }

  async validateDosen(id_dosen) {
    const query = 'SELECT id_dosen FROM dosen WHERE id_dosen = $1';
    const result = await client.query(query, [id_dosen]);
    return result.rows.length > 0;
  }

  async insertRiwayatPKM(id_dosen, id_pkm) {
    const query = 'INSERT INTO riwayat_pkm (id_pkm, id_dosen) VALUES ($1, $2)';
    await client.query(query, [id_pkm, id_dosen]);
    // try {
    //   const newRiwayatPkm = await client.query(
    //     "INSERT INTO riwayat_pkm (id_dosen, id_pkm) VALUES ($1, $2) RETURNING *",
    //     [id_dosen, id_pkm]
    //   );
    //   return newRiwayatPkm.rows;
    // } catch (err) {
    //   throw err;
    // }
  }

  async getRiwayatPKMData() {
    try {
      const riwayatPkmData = await client.query
      ("SELECT rp.id_riwayatpkm, p.id_pkm, p.judul_pkm, p.tahun_pkm, p.bidang_pkm, string_agg(d.nama, ', ') AS nama_dosen FROM riwayat_pkm rp JOIN pkm p ON rp.id_pkm = p.id_pkm JOIN riwayat_pkm pd ON p.id_pkm = pd.id_pkm JOIN dosen d ON pd.id_dosen = d.id_dosen GROUP BY rp.id_riwayatpkm, p.id_pkm, p.judul_pkm, p.tahun_pkm, p.bidang_pkm;");
      return riwayatPkmData.rows;
    } catch (err) {
      throw err;
    }
  }

  async updateRiwayatPKM(id, id_dosen, id_pkm) {
    try {
      await client.query(
        "UPDATE riwayat_pkm SET id_dosen = $1, id_pkm = $2",
        [id_dosen, id_pkm, bidang_pkm, id]
      );
      console.log("Riwayat PKM updated successfully!");
    } catch (err) {
      console.error("Error updating Riwayat PKM:", err);
      throw err;
    }
  }
  
  async deleteRiwayatPKM(id_riwayatpkm) {
    try {
      await client.query("DELETE FROM riwayat_pkm WHERE id_riwayatpkm = $1", [id_riwayatpkm]);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = RiwayatPkmModel;
