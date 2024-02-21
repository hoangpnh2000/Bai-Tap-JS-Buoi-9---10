const dsnv = new DSNV();

getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

function layThongTinNhanVien() {
    // Lấy thông tin nhân viên
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

    // Tính toán
    nv.tinhTongLuong();
    nv.xepLoai();

    return nv;
}

/**
 * Lưu mảng nhân viên xuống localStorge
 */
function setLocalStorage() {
    // Chuyển mảng sinh viên thành chuỗi
    const arrString = JSON.stringify(dsnv.arr);
    // Lưu xuống
    localStorage.setItem("DSNV", arrString);
}

/**
 * Lấy mảng sinh viên xuống localStorge
 */
function getLocalStorage() {
    if (!localStorage.getItem("DSNV")) return;

    //Lấy mảng nhân viên từ localStorage
    const arrString = localStorage.getItem("DSNV");

    //Chuyển mảng nhân viên từ chuỗi --> Json
    const arrJSON = JSON.parse(arrString);

    //Phục hồi data cho dsnv.arr
    dsnv.arr = arrJSON;

    // Hiển thị danh sách sinh viên
    hienThiDanhSachNhanVien(dsnv.arr);
}

function hienThiDanhSachNhanVien(data) {
    let content = "";

    for (let i = 0; i < data.length; i++) {
        const nv = data[i];

        content += `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.tenNV}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.loaiNhanVien}</td>
                <td><button class="btn btn-info" onclick= "" data-toggle="modal"
                                        data-target="#myModal"> Update </button>
                </td>
                <td><button class="btn btn-danger" onclick= "deleteNV(${nv.taiKhoan})"> Delete </button>
                </td>
            </tr>
        `;
    }

    getEle("tableDanhSach").innerHTML = content;
}

/**
 * Reset form
 */

function resetForm() {
    getEle("tknv").value = "";
    getEle("name").value = "";
    getEle("email").value = "";
    getEle("password").value = "";
    getEle("datepicker").value = "";
    getEle("luongCB").value = "";
    getEle("chucvu").value = "";
    getEle("gioLam").value = "";
}

/**
 * Thêm nhân viên
 */

function themNV() {
    const nv = layThongTinNhanVien();

    //Thêm nhân viên vào mảng
    dsnv.themNV(nv);
    // Hiển thị danh sách sinh viên
    hienThiDanhSachNhanVien(dsnv.arr);
    resetForm();
    setLocalStorage();
}

/**
 * Xóa nhân viên
 */
function deleteNV(id) {
    dsnv.xoaNV(id);

    hienThiDanhSachNhanVien(dsnv.arr);
    setLocalStorage();
}

/**
 * Tìm kiếm nhân viên
 * callback function: hàm có tham số, tham số là 1 hàm khác
 */

getEle("searchName").addEventListener("keyup", function () {
    //Lấy từ khóa tìm kiếm
    const keyword = getEle("searchName").value;
    console.log(keyword);
    const mangTimKiem = dsnv.timKiemNV(keyword);
    hienThiDanhSachNhanVien(mangTimKiem);
});
