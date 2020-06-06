function log_in(fm){
    var pw = fm.password.value;
    switch (pw) {
    case "1997":
        gotoPlace = "./real_index.html";
    break;
  default:
      break;
}
fm.action = gotoPlace;
}