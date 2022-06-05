function nhanVien(tk, hoten, email, matkhau, ngaylam, chucvu, luong, giolam) {
    this.taiKhoanNV = tk
    this.hoTenNV = hoten
    this.matKhauNV = matkhau
    this.emailNV = email
    this.ngayLamNV = ngaylam
    this.chucVuNV = chucvu
    this.luongNV = luong
    this.gioLamNV = giolam

    this.tinhLuongNV =function (){
        if (this.chucVuNV == 'Sếp') {
            return luong * 3
        } else if (this.chucVuNV == 'Trưởng phòng') {
            return luong * 2
        } else return luong
    }
    this.xeploaiNV = function(){
        if (giolam < 160) {
            return "Trung Bình"
        } else if (giolam < 176) {
            return "Khá"
        } else if (giolam < 192) {
            return "Giỏi"
        }else return "Xuất Sắc"
    }
    this.tongLuongNV = this.tinhLuongNV()
    this.loaiNV = this.xeploaiNV()
}