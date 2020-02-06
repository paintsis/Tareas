var mes=1;
if(mes == 12 || (mes > 0 && mes <=2)){
  document.write('es invierno');
}else if(mes > 2 && mes <= 5){
  document.write('es primavera');
}else if(mes > 5 && mes <= 8){
  document.write('es verano');
}else if(mes > 8 && mes <= 11){
  document.write('es otoño');
}else{
  document.write('Valor invalido');
}

