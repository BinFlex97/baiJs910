function danhSachNhanVien() {
    this.mangNV = []
    this.themNV = function(nv){
        this.mangNV.push(nv)
    }
    this.capNhatNV = function(nv,index){
        this.mangNV[index] = nv
    }
}