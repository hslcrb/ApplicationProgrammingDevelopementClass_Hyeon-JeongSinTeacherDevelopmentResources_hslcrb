function chk(){  
	if(document.frm.do_code.value==""){  
		alert("일정번호가 입력되지 않았습니다");  
		document.frm.do_code.focus();  
		return false;  
	}
}
