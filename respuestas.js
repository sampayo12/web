function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;

    // 1a pregunta
    if (document.getElementById('p11').checked==true) {p1=1}
    else {p1=0}
    // 2a pregunta
    if (document.getElementById('p24').checked==true) {p2=1}
    else {p2=0}
    // 3a pregunta
    if (document.getElementById('p33').checked==true) {p3=1}
    else {p3=0}
    // 4a pregunta
    if (document.getElementById('p41').checked==true) {p4=1}
    else {p4=0}
    // 5a pregunta
    if (document.getElementById('p52').checked==true) {p5=1}
    else {p5=0}
    // 6a pregunta
    if (document.getElementById('p61').checked==true) {p6=1}
    else {p6=0}
    // 7a pregunta
    if (document.getElementById('p73').checked==true) {p7=1}
    else {p7=0}
    // 8a pregunta
    if (document.getElementById('p88').checked==true) {p8=1}
    else {p8=0}
    // 9a pregunta
    if (document.getElementById('p91').checked==true) {p9=1}
    else {p9=0}
    // 10a pregunta
    if (document.getElementById('p01').checked==true) {p10=1}
    else {p10=0}
    // 11a pregunta
    if (document.getElementById('p07').checked==true) {p11=1}
    else {p11=0}
    // 12a pregunta
    if (document.getElementById('p055').checked==true) {p12=1}
    else {p12=0}
    // 13a pregunta
    if (document.getElementById('p078').checked==true) {p13=1}
    else {p13=0}
    // 14a pregunta
    if (document.getElementById('p068').checked==true) {p14=1}
    else {p14=0}
    // 15a pregunta
    if (document.getElementById('p0577').checked==true) {p14=1}
    else {p15=0}



    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    alert("Aciertos: " + nota 
    + "\n" + "1-5 Aciertos= Nivel 1"
    + "\n" + "6-10 Aciertos= Nivel 2"
    + "\n" + "11-15 Aciertos= Nivel 3"
    
    
    
    
    );
    window.location = 'cuestionario.html'
}