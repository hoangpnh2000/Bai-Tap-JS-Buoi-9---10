function DSNV() {
    this.arr = [];

    this.themNV = function (nv) {
        this.arr.push(nv);
    };

    this.timViTriNV = function (taiKhoan) {
        let index = -1;
        for (let i = 0; i < this.arr.length; i++) {
            const nv = this.arr[i];
            if (nv.taiKhoan == taiKhoan) {
                index = i;
                break;
            }
        }
        return index;
    };

    this.xoaNV = function (taiKhoan) {
        const index = this.timViTriNV(taiKhoan);
        if (index != -1) {
            this.arr.splice(index, 1);
        }
    };

    this.capNhat = function () {};

    this.timNV = function () {};

    /**
     * 0. Khai báo biến mangTimKiem = []
     * 1. Duyệt mảng this.arr
     *      1.1. mv từ this.arr[i]
     *      1.2. Chuyển keyword về chữ thường
     *      1.3. Chuyển nv.tenNV về chữ thường
     *      1.4. Nếu tìm thấy nv.tenNV chứa từ khóa keyword
     *          => true: thêm nv vào mangTimKiem
     * 2. Trả về mangTimKiem
     */
    this.timKiemNV = function (keyword) {
        let mangTimKiem = [];
        for (let i = 0; i < this.arr.length; i++) {
            const nv = this.arr[i];
            const keywordLowerCase = keyword.toLowerCase();
            const tenNVLowerCase = nv.tenNV.toLowerCase();
            if (tenNVLowerCase.indexof(keywordLowerCase) != -1) {
                mangTimKiem.push(nv);
            }
        }
        return mangTimKiem;
    };
}
