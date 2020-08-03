let boutonInsert = $(".btn_insert");
let egale = $("#egale");
let ecran = $("#ecran");
let reset = $("#reset");
let del = $("#del");

let regX = /(x|X)+/i;
let regD = /(÷)+/;
let regP = /(\+)+/;
let regM = /(-)+/;
let regMd = /(%)+/;
let val;
let res;

boutonInsert.on("click", (e) => {
  res =
    ecran.val() == "0"
      ? ".+-xX%÷".search(e.target.value) == -1
        ? e.target.value
        : ecran.val() + e.target.value
      : ecran.val() + e.target.value;
  ecran.val(res);
});

egale.on("click", () => {
  val = ecran.val();
  val = val.replace(regX, "*");
  val = val.replace(regD, "/");
  val = val.replace(regP, "+");
  val = val.replace(regM, "-");
  val = val.replace(regMd, "%");

  try {
    res = eval(val);
  } catch (error) {
    res = "0";
    console.log(error);
  }

  ecran.val(res);
});

del.on("click", () => {
  res = ecran.val().slice(0, -1);
  res = res == "" ? "0" : res;
  ecran.val(res);
});

reset.on("click", () => {
  ecran.val("0");
});
