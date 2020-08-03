let boutonInsert = $(".btn_insert");
let egale = $("#egale");
let ecran = $("#ecran");
let reset = $("#reset");
let regX = /(x|X)+/i;
let regD = /(÷)+/;
let regP = /(\+)+/;
let regM = /(-)+/;
let val;
let res;

boutonInsert.on("click", (e) => {
  ecran.val(ecran.val() + e.target.value);
});

egale.on("click", (e) => {
  val = ecran.val();
  val = val.replace(regX, "*");
  val = val.replace(regD, "/");
  val = val.replace(regP, "+");
  val = val.replace(regM, "-");

  console.log(val);

  res = eval(val);

  console.log(res);

  ecran.val(res);
});

reset.on("click", (e) => {
  ecran.val("0");
});
