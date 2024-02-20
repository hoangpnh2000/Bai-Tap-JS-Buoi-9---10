function NhanVien(
    _taiKhoan,
    _tenKH,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
) {
    this.taiKhoan = _taiKhoan;
    this.tenKH = _tenKH;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien = "";

    this.tinhTongLuong = function () {
        this.tongLuong = function () {
            if (this.chucVu == "Sếp") {
                return Number(this.luongCoBan) * 3 * Number(this.gioLam);
            } else if (this.chucVu == "Trưởng phòng") {
                return Number(this.luongCoBan) * 2 * Number(this.gioLam);
            } else if (this.chucVu == "Nhân viên") {
                return Number(this.luongCoBan) * Number(this.gioLam);
            }
        };
    };

    this.loaiNhanVien = function () {
        if (this.gioLam >= 192) {
            return "Nhân viên xuất sắc";
        } else if (this.gioLam >= 176) {
            return "Nhân viên giỏi";
        } else if (this.gioLam >= 160) {
            return "Nhân viên khá";
        } else {
            return "Nhân viên trung bình";
        }
    };
}
