function Validation() {
    this.trong = function (value, id, message) {

        if (value.trim() == "") {
            document.getElementById(id).innerHTML = message
            document.getElementById(id).style.display = 'block'
            return false
        }
        document.getElementById(id).innerHTML = ""
        document.getElementById(id).style.display = 'none'
        return true
    }
    this.kiSo46 = function (value, id, message) {
        pattern = /^(?=.*[a-z A-Z])(?=.*[0-9])(?!.*[^A-Za-z0-9])(?!.*\s).{4,6}$/
        if (value.match(pattern)) {
            document.getElementById(id).innerHTML = ""
            document.getElementById(id).style.display = 'none'
            return true
        }
        document.getElementById(id).innerHTML = message
        document.getElementById(id).style.display = 'block'
        return false
    }
    this.chiCoChu = function (value, id, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/
        if (value.match(pattern)) {
            document.getElementById(id).innerHTML = ""
            document.getElementById(id).style.display = 'none'
            return true
        }
        document.getElementById(id).innerHTML = message
        document.getElementById(id).style.display = 'block'
        return false
    }
    this.Email = function (value, id, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (value.match(pattern)) {
            document.getElementById(id).innerHTML = ""
            document.getElementById(id).style.display = 'none'
            return true
        }
        document.getElementById(id).innerHTML = message
        document.getElementById(id).style.display = 'block'
        return false
    }
    this.matKhau = function (value, id, message) {
        var pattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?!.*\s).{6,10}$/
        if (value.match(pattern)) {
            document.getElementById(id).innerHTML = ""
            document.getElementById(id).style.display = 'none'
            return true
        }
        document.getElementById(id).innerHTML = message
        document.getElementById(id).style.display = 'block'
        return false
    }
    this.ngayLam = function (value, id, message) {
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/
        if (value.match(pattern)) {
            document.getElementById(id).innerHTML = ""
            document.getElementById(id).style.display = 'none'
            return true
        }
        document.getElementById(id).innerHTML = message
        document.getElementById(id).style.display = 'block'
        return false
    }
    this.luong = function (value, id, message) {
        if (value >= 1000000 && value <= 20000000) {
            document.getElementById(id).innerHTML = ""
            document.getElementById(id).style.display = 'none'
            return true
        }
        document.getElementById(id).innerHTML = message
        document.getElementById(id).style.display = 'block'
        return false
    }
    this.chucvu = function (value, id, message) {
        if (value != "Chọn chức vụ") {
            document.getElementById(id).innerHTML = ""
            document.getElementById(id).style.display = 'none'
            return true
        }
        document.getElementById(id).innerHTML = message
        document.getElementById(id).style.display = 'block'
        return false
    }
    this.giolam = function (value, id, message) {
        if (value >= 80 && value <= 200) {
            document.getElementById(id).innerHTML = ""
            document.getElementById(id).style.display = 'none'
            return true
        }
        document.getElementById(id).innerHTML = message
        document.getElementById(id).style.display = 'block'
        return false
    }
    this.trung = function (value, id, message) {
        var n = 0
        dsnv.mangNV.map(function (nv, index) {
            if (value == nv.taiKhoanNV)
                n++
        })
        if(n==0){
            document.getElementById(id).innerHTML = ""
            document.getElementById(id).style.display = 'none'
            return true
        }
        document.getElementById(id).innerHTML = message
        document.getElementById(id).style.display = 'block'
        return false
    }
}