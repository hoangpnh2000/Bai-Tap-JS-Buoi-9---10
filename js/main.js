const dsnv = new DSNV();

function getEle(id) {
    return document.getElementById(id);
}

function layThongTinNhanVien() {
    // Lấy thông tin từ form
    const _taiKhoan = getEle("tknv").value;
    const _tenKH = getEle("name").value;
    const _email = getEle("email").value;
    const _matKhau = getEle("password").value;
    const _ngayLam = getEle("datepicker").value;
    const _luongCoBan = getEle("luongCB").value;
    const _chucVu = getEle("chucvu").value;
    const _gioLam = getEle("gioLam").value;

    // Tạo đối tượng sinh viên
    const nv = new NhanVien(
        _taiKhoan,
        _tenKH,
        _email,
        _matKhau,
        _ngayLam,
        _luongCoBan,
        _chucVu,
        _gioLam
    );

    // Tính tổng lương
    nv.tinhTongLuong();

    // Loai nhân viên
    nv.loaiNhanVien();
}

function setLocalStorage() {
    // Chuyển mảng sinh viên thành chuỗi
    const arrString = JSON.stringify(dsnv.arr);
    // Lưu xuống
}

function hienThiDanhSachNhanVien(data) {
    let content = "";

    for (let i = 0; i < data.length; i++) {
        const nv = data[i];

        content += `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.tenKH}</td>
                <td>${nv.email}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.loaiNhanVien}</td>
            </tr>
        `;
    }

    getEle("tableDanhSach").innerHTML = content;
}

function themNV() {
    const nv = layThongTinNhanVien();

    //Thêm nhân viên vào mảng
    dsnv.themNV(nv);

    // Hiển thị danh sách sinh viên
    hienThiDanhSachNhanVien(dsnv.arr);
}
