function NhanVien(
    _taiKhoan,
    _tenNV,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
) {
    this.taiKhoan = _taiKhoan;
    this.tenNV = _tenNV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    // this.xepLoai = "";
    this.loaiNhanVien = "";

    this.tinhTongLuong = function () {
        if (this.chucVu == "Sếp") {
            this.tongLuong = Number(this.luongCoBan) * 3 * Number(this.gioLam);
        } else if (this.chucVu == "Trưởng phòng") {
            this.tongLuong = Number(this.luongCoBan) * 2 * Number(this.gioLam);
        } else if (this.chucVu == "Nhân viên") {
            this.tongLuong = Number(this.luongCoBan) * Number(this.gioLam);
        }
    };

    this.xepLoai = function () {
        if (this.gioLam >= 192) {
            this.loaiNhanVien = "Nhân viên xuất sắc";
        } else if (this.gioLam >= 176) {
            this.loaiNhanVien = "Nhân viên giỏi";
        } else if (this.gioLam >= 160) {
            this.loaiNhanVien = "Nhân viên khá";
        } else {
            this.loaiNhanVien = "Nhân viên trung bình";
        }
    };
}
