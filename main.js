function exercise1() {
    let a = prompt("Nhập số a");
    let b = prompt("Nhật số b");

    a=parseFloat(a);
    b=parseFloat(b);

    alert('số a:'+' '+ a);
    alert('số b:'+' '+ b);

    if (a>b) {
        alert('a lớn hơn b');
    } 
    else if (a<b) {
        alert('a nhỏ hơn b');
    }
    else if (a==b) {
        alert('a bằng b');
    }
}

function exercise2() {
    let n = prompt("Nhập số");

    n=parseFloat(n);

    alert('số:'+' '+ n);

    if (n%2==0) {
        alert('số chẵn');
    }
    else if (n%2!=0) {
        alert('số lẻ');
    }
    else if (n==0) {
        alert('số 0');
    }
}

function exercise3() {
    let n = prompt("Nhập số");
    let d = prompt("Chia cho")

    n=parseFloat(n);
    d = parseFloat(d)

    if (n%d==0) {
        alert('số chia hết cho d');
    }
    else if (n%d!=0) {
        alert('số không chia hết cho'+' '+ d);
    }

}
function exercise4() {
    let cd = new Date();
    let dow = cd.getDay();
    let dn;

    switch (dow) {
        case 0:
            dn = "Chủ nhật";
            break;
        case 1:
            dn = "Thứ hai";
            break;
        case 2:
            dn = "Thứ ba";
            break;
        case 3:
            dn = "Thứ tư";
            break;
        case 4:
            dn = "Thứ năm";
            break;
        case 5:
            dn = "Thứ sáu";
            break;
        case 6:
            dn = "Thứ bảy";
            break;
        default:
            dn = "Không xác định được";
    }

    console.log(dn);
    alert("Hôm nay là " + dn);
}

function exercise5() {
    let fruitCode = prompt("Nhập mã trái cây:");
    let fruitName;

    switch (fruitCode) {
        case "1":
            fruitName = "Táo";
            break;
        case "2":
            fruitName = "Chuối";
            break;
        case "3":
            fruitName = "Cam";
            break;
        case "4":
            fruitName = "Dưa hấu";
            break;
        case "5":
            fruitName = "Nho";
            break;
        default:
            fruitName = "Mã trái cây không hợp lệ";
    }
    alert("Tên trái cây: " + fruitName);
}