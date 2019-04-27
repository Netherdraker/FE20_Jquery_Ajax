$(document).ready(function () {
    var nguoiDungService = new NguoiDungServices();

    layDSUser();

    function setHeaderFooterModal(title, titleButton, idButton) {
        $(".modal-title").html(title);
        var footer = `
            <button id="${idButton}" class="btn btn-success">${titleButton}</button>
        `
        $(".modal-footer").html(footer);
    }

    $("#btnThemNguoiDung").click(function() {
        setHeaderFooterModal("Thêm người dùng", "Thêm mới", "btnThem");

    })

    $("body").delegate(".btnSua", "click", function() { // -khác syntax- nút btnSua sinh ra sau bởi js, không có sẵn trong html
        setHeaderFooterModal("Sửa người dùng", "Cập nhật", "btnCapNhat");
        var taiKhoan = $(this).data('taikhoan');
        var nguoiDung = nguoiDungService.layThongTinNguoiDung(taiKhoan);
        
        $("#TaiKhoan").attr("disable", "disabled");

        $("#TaiKhoan").val(nguoiDung.TaiKhoan);
        $("#HoTen").val(nguoiDung.HoTen);
        $("#MatKhau").val(nguoiDung.MatKhau);
        $("#Email").val(nguoiDung.Email);
        $("#SoDienThoai").val(nguoiDung.SoDienThoai);
        $("#loaiNguoiDung").val(nguoiDung.MaLoaiNguoiDung);
    })

    $("body").delegate("#btnThem", "click", function() {
        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var soDienThoai = $("#SoDienThoai").val();
        
        var maloaiNguoiDung = $("#loaiNguoiDung").val();

        var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDienThoai, maloaiNguoiDung);

        nguoiDungService.themNguoiDung(nguoiDung);
    })

    $("body").delegate(".btnXoa", "click", function() {
        var taiKhoan = $(this).data('taikhoan');
        nguoiDungService.xoaNguoiDung(taiKhoan);
    })

    $("body").delegate("#btnCapNhat", "click", function(){

        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var soDienThoai = $("#SoDienThoai").val();
        console.log(soDienThoai);
        var maloaiNguoiDung = $("#loaiNguoiDung").val();

        var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDienThoai, maloaiNguoiDung);
        nguoiDungService.capNhatNguoiDung(nguoiDung);
    })


    function layDSUser() {
        nguoiDungService.layDSNguoiDung();
    }

    function testBranch(){
        
    }

})