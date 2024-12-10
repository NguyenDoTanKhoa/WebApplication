// JavaScript Document
function checkdn(){
        username=document.myform.username;
        password=document.myform.password;
        if(username.value==""){
            alert("Hãy nhập tên người dùng");
            username.focus();
            return false;
        }
        if(password.value==""){
            alert("Hãy nhập mật khẩu");
            password.focus();
            return false;
        }
        else alert('Đăng nhập thành công!');
        return true;
    }
function checkdk(){
        username=document.formdk.username;
        password=document.formdk.password;
        password1=document.formdk.password1;
        hoten=document.formdk.hoten;
        email=document.formdk.email;
		re=/\w+@\w+\.\w+/;
		testmail=re.test(email.value);
        if(username.value==""){
            alert("Hãy chọn tên đăng nhập");
            username.focus();
            return false;
        }
        if(password.value==""){
            alert("Chưa nhập mật khẩu");
            password.focus();
            return false;
        }
        if(password1.value==""||password1.value!==password.value){
            alert("Mật khẩu lần 2 chưa khớp");
            password1.focus();
            return false;
        }
        if(hoten.value==""){
            alert("Họ và Tên không được để trống!");
            hoten.focus();
            return false;
		}
		if(email.value==""){
            alert("Địa chỉ email không được để trống!");
            email.focus();
            return false;
		}
        if(!testmail){
            alert("Địa chỉ email không hợp lệ");
            email.focus();
            return false;
        }
        else 
		alert('Đăng ký thành công!');
        return true;
    }