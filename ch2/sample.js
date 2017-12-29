var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
    Sex[Sex["UNKNOEN"] = 2] = "UNKNOEN";
})(Sex || (Sex = {}));
var m = Sex.MALE;
console.log(m);
console.log(Sex[m]);
