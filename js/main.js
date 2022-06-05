var dsnv = new danhSachNhanVien()
var valid = new Validation()
var indexDSNV = -1

dsnv.mangNV = getLocalStorage('DSNV')
hienThiDanhSach('DSNV');

getELE('btnThem').onclick = function () {
    getELE('btnCapNhat').disabled = true
    getELE('btnThemNV').style.display = 'block'
}
function getELE(x) {
    return document.getElementById(x)
}
// thêm + cập nhật
function themNhanVien(param) {
    var tk = getELE('tknv').value
    var hoten = getELE('name').value
    var email = getELE('email').value
    var matkhau = getELE('password').value
    var ngaylam = getELE('datepicker').value
    var luong = getELE('luongCB').value
    var chucvu = getELE('chucvu').value
    var giolam = getELE('gioLam').value

    var isValid = true

    isValid &= valid.trong(tk, 'tbTKNV', 'Tài khoản không được để trống') && valid.kiSo46(tk, 'tbTKNV', 'Tài khoản tối đa 4 - 6 ký số')
    isValid &= valid.trong(hoten, 'tbTen', 'Tên không được để trống') && valid.chiCoChu(hoten, 'tbTen', 'Tên nhân viên phải là chữ')
    isValid &= valid.trong(email, 'tbEmail', 'Email không được để trống') && valid.Email(email, 'tbEmail', 'Email không đúng định dạng')
    isValid &= valid.trong(matkhau, 'tbMatKhau', 'Mật khẩu không được để trống') && valid.matKhau(matkhau, 'tbMatKhau', 'mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)')
    isValid &= valid.trong(ngaylam, 'tbNgay', 'Ngày làm không được để trống') && valid.ngayLam(ngaylam, 'tbNgay', 'Ngày làm sai định dạng')
    isValid &= valid.luong(luong, 'tbLuongCB', 'Lương cơ bản 1 000 000 - 20 000 000')
    isValid &= valid.chucvu(chucvu, 'tbChucVu', 'Chọn chức vụ')
    isValid &= valid.giolam(giolam, 'tbGiolam', 'Số giờ làm trong tháng 80 - 200 giờ')



    if (isValid) {
        var nv = new nhanVien(tk, hoten, email, matkhau, ngaylam, chucvu, luong, giolam)


        if (param == "add" && valid.trung(tk, 'tbTKNV', 'Tài khoản không được trùng')) {

            dsnv.themNV(nv)

        } else if (param == "update") {

            dsnv.capNhatNV(nv, indexDSNV)
        }


        setLocalStorage('DSNV', dsnv.mangNV)
        dsnv.mangNV = getLocalStorage('DSNV')
        hienThiDanhSach('DSNV')
    }

}
function hienThiDanhSach(name) {
    var content = ""
    getLocalStorage(name).map(function (nv) {
        content += `<tr>
        <td>${nv.taiKhoanNV}</td>
        <td>${nv.hoTenNV}</td>
        <td>${nv.emailNV}</td>
        <td>${nv.ngayLamNV}</td>
        <td>${nv.chucVuNV}</td>
        <td>${nv.tongLuongNV}</td>
        <td>${nv.loaiNV}</td>
        <td>
            <button class="btnChinhSua alert alert-danger " onclick = "xoaNhanVien('${nv.taiKhoanNV}')">Xóa</button>
            <button class="btnChinhSua alert alert-success" onclick = "xemNhanVien('${nv.taiKhoanNV}')" data-toggle="modal" data-target="#myModal">Xem</button>
        </td>
        </tr>`
    })
    getELE('tableDanhSach').innerHTML = content
}
function xoaNhanVien(id) {
    var n = -1
    dsnv.mangNV.map(function (nv, index) {
        if (id == nv.taiKhoanNV) {
            n = index
        }
    })
    dsnv.mangNV.splice(n, 1)

    setLocalStorage('DSNV', dsnv.mangNV)
    dsnv.mangNV = getLocalStorage('DSNV')
    hienThiDanhSach('DSNV', dsnv.mangNV)
}
function xemNhanVien(id) {
    dsnv.mangNV.map(function (nv, index) {
        if (id == nv.taiKhoanNV) {
            getELE('tknv').value = nv.taiKhoanNV
            getELE('name').value = nv.hoTenNV
            getELE('email').value = nv.emailNV
            getELE('password').value = nv.matKhauNV
            getELE('datepicker').value = nv.ngayLamNV
            getELE('luongCB').value = nv.luongNV
            getELE('chucvu').value = nv.chucVuNV
            getELE('gioLam').value = nv.gioLamNV
            indexDSNV = index
        }
        getELE('btnCapNhat').disabled = false
        getELE('btnThemNV').style.display = 'none'
    })
}
function setLocalStorage(str, id) {
    localStorage.setItem(str, JSON.stringify(id))
}
function getLocalStorage(str) {
    return JSON.parse(localStorage.getItem(str));
}
function hienThiLoaiNV() {
    if (getELE('searchName').value == "Tìm Loại Nhân Viên - tất cả") {
        hienThiDanhSach('DSNV')
    } else {
        var dsxl = new danhSachNhanVien()
        dsnv.mangNV.map(function (nv) {
            if (nv.loaiNV == getELE('searchName').value) {
                dsxl.themNV(nv)
            }
        })
        setLocalStorage('DSXL', dsxl.mangNV)
        dsxl.mangNV = getLocalStorage('DSXL')
        hienThiDanhSach('DSXL', dsxl.mangNV)

        const xoaButton = document.querySelectorAll(".btnChinhSua");
        for (let i = 0; i < dsxl.mangNV.length*2; i++) {
            xoaButton[i].style.display = "none";
        }
    }
}