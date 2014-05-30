var render = function(temp, data){
  var keys = Object.keys(data);
  for (var i in keys){
    var j = "{{" + keys[i] + "}}";
    var re = new RegExp(j, "g");
    temp = temp.replace(re, data[keys[i]]);
  };
  return temp;
};
