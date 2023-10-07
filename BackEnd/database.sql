CREATE DATABASE lectureProfile;

CREATE TABLE "user" (
    id_user VARCHAR(10) PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(20),
    role VARCHAR(20)
);

CREATE TABLE dosen (
    id_dosen VARCHAR(10) PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    jabatan VARCHAR(100),
    jurusan VARCHAR(100) NOT NULL
);

CREATE TABLE riwayat_pengajaran (
    id_pengajaran VARCHAR(10) PRIMARY KEY,
    id_matkul VARCHAR(10),
    id_dosen VARCHAR(10),
    FOREIGN KEY (id_matkul) REFERENCES mata_kuliah(id_matkul),
    FOREIGN KEY (id_dosen) REFERENCES dosen(id_dosen)
);

ALTER TABLE dosen ADD CONSTRAINT fk_dosen_id_user FOREIGN KEY (id_user) REFERENCES "user" (id_user);

CREATE TABLE mata_kuliah (
    id_matkul VARCHAR(10) PRIMARY KEY,
    kode_matkul VARCHAR(20),
    nama_matkul VARCHAR(255),
    semester VARCHAR(15),
    kode_kelas VARCHAR(10),
    perguruan_tinggi VARCHAR(255)
);

CREATE TABLE riwayat_penelitian (
    id_riwayatPenelitian VARCHAR(10) PRIMARY KEY,
    id_penelitian VARCHAR(10),
    id_dosen VARCHAR(10),
    FOREIGN KEY (id_penelitian) REFERENCES penelitian(id_penelitian),
    FOREIGN KEY (id_dosen) REFERENCES dosen(id_dosen)
);

CREATE TABLE penelitian (
    id_penelitian VARCHAR(10) PRIMARY KEY,
    judul VARCHAR(100),
    tahun INT,
    bidang VARCHAR(100),
    author VARCHAR(50)
);

CREATE TABLE riwayat_pendidikan (
    id_pendidikan VARCHAR(10) PRIMARY KEY,
    jenjang_pendidikan VARCHAR(100),
    nama_institusi VARCHAR(100),
    tahun_lulus INT,
    id_dosen VARCHAR(10),
    FOREIGN KEY (id_dosen) REFERENCES dosen(id_dosen)
);

CREATE TABLE riwayat_pkm (
    id_riwayatPkm VARCHAR(10) PRIMARY KEY,
    id_pkm VARCHAR(10),
    id_dosen VARCHAR(10),
    FOREIGN KEY (id_pkm) REFERENCES pkm(id_pkm),
    FOREIGN KEY (id_dosen) REFERENCES dosen(id_dosen)
);

CREATE TABLE pkm(
    id_pkm VARCHAR(10) PRIMARY KEY,
    judul_pkm VARCHAR(200),
    tahun_pkm INT,
    jenis_pkm VARCHAR(100)
);

-- Membuat TRIGGER untuk mengisi kolom "id_dosen" secara otomatis
-- CREATE TRIGGER set_dosen_id_trigger
-- BEFORE INSERT ON dosen
-- FOR EACH ROW
-- EXECUTE FUNCTION generate_dosen_id();

-- INSERT INTO dosen (nama, jabatan, jurusan)
-- VALUES
--     ('John Doe',  'Profesor', 'Ilmu Komputer'),
--     ('Jane Smith', 'Asisten Profesor', 'Teknik Elektro'),
--     ('Alice Johnson', 'Lektor', 'Sistem Informasi'),
--     ('Bob Brown', 'Profesor', 'Matematika');

-- -- Membuat SEQUENCE untuk menghasilkan nomor urut otomatis
-- CREATE SEQUENCE dosen_id_seq START 1;

-- -- Membuat fungsi untuk menghasilkan ID unik dan otomatis
-- CREATE OR REPLACE FUNCTION generate_dosen_id()
-- RETURNS TRIGGER AS $$
-- BEGIN
--     NEW.id_dosen := 'DSN' || to_char(nextval('dosen_id_seq'), 'FM0000');
--     RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;


SELECT * FROM dosen;