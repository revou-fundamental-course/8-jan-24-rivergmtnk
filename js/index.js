function hitungLuas(){
    sisi = document.getElementById("txtsisi").value;
    Luas = sisi * sisi; document.getElementById("txtLuas").value =  Luas;
    
}
function hitungKeliling(){
    sisi = document.getElementById("txtsisi").value;
    Keliling = 4 * sisi; document.getElementById("txtKeliling").value =  Keliling;
    
}
function changeTheme(){
    if(document.getElementById('btn').innerHTML==='Dark Theme'){
    document.body.style.background='#555';
    document.body.style.color='white';
    document.getElementById('btn').innerHTML='Light Theme';
    }
    else{
    document.body.style.background='white';
    document.body.style.color='#555';
    document.getElementById('btn').innerHTML='Dark Theme';
    }
}