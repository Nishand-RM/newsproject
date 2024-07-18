function label_create(tagname,attrname,attrvalue,content ){
        var ele = document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.innerHTML = content;
        return ele;
}

function line_break(){
    var ele = document.createElement("br");
    return ele;
}

function input_item(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}

function button_tag(tagname,attrname,attrvalue,attrname1,attrvalue1,content){
     var ele = document.createElement(tagname);
     ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.innerHTML = content;
    return ele;
}


var first_label = label_create("label","for","first_name","First_Name");
var break_br = line_break();
var first_input =input_item ("input","type","text","id","first_name");
document.body.append(first_label,break_br,first_input);

var break_br = line_break();
document.body.append(break_br);

var middle_label = label_create("label","for","middle_name","Middle_Name");
var break_br = line_break();
var middle_input =input_item ("input","type","text","id","middle_name");
document.body.append(middle_label,break_br,middle_input);

var break_br = line_break();
document.body.append(break_br);

var last_label = label_create("label","for","last_name","Last_Name");
var break_br = line_break();
var last_input =input_item ("input","type","text","id","last_name");
document.body.append(last_label,break_br,last_input);


var break_br = line_break();
document.body.append(break_br);

var email_label = label_create("label","for","email","Email");
var break_br = line_break();
var email_input =input_item ("input","type","email","id","email");
document.body.append(email_label,break_br,email_input);

var break_br = line_break();
document.body.append(break_br);

var password_label = label_create("label","for","password","PASSWORD");
var break_br = line_break();
var password_input =input_item ("input","type","Password","id","password");
document.body.append(password_label,break_br,password_input);

var break_br = line_break();
document.body.append(break_br);

var button_input = button_tag("button","type","button","onclick","foo()","submit");
var break_br = line_break();
document.body.append(button_input,break_br);

function foo(){
    var res = document.getElementById("first_name").value;
    console.log(res);

    var res = document.getElementById("middle_name").value;
    console.log(res);

    var res = document.getElementById("last_name").value;
    console.log(res);

    var res = document.getElementById("email").value;
    console.log(res);

    var res = document.getElementById("password").value;
    console.log(res);
}

