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
}
