$(document).ready(function(){//jquery ready命令，比window.onload好用，能重复使用
    schedule();//执行一次
    setInterval(function(){schedule()},1000);//然后每秒刷新
});
    //自动切换课程表 0=自动，1=手动
    var autoSwitchFormalClassNumber = 0;
    //1=周一，2=周二，3=周三，4=周四，5=周五，6=周六，0=周日
    var chosenFormalClassNumber = 6;
    //晚自习 0=展示，1=不展示
    var displayNightClass = 0;
    //1=表一，2=表二，3=表三，4=特殊周备选表
    var nightClassNumber = 3;
    //1=表一，2=表二，3=表三，4=特殊周备选表
    var saturadayClassNumber = 4;
    //1-表一，2-表二，3-表三，4-全天表
    var sundayClassNumber = 3;
    //隐藏上午课程显示 0=开启，1=关闭
    var hideMorningDisplay = 1;

    //晚自习表//
    //表一
    var mondayNight1= "物理";
    var tuesdayNight1= "数学";
    var wednesdayNight1= "英语";
    var thursdayNight1= "生物";
    var fridayNight1= "化学";
    var saturdayNight1= "语文";
    var sundayNight1 = "";
    
    //表二
    var mondayNight2= "化学";
    var tuesdayNight2= "生物";
    var wednesdayNight2= "物理";
    var thursdayNight2= "英语";
    var fridayNight2= "数学";
    var saturdayNight2= "语文";
    var sundayNight2 = "";

    //表三
    var mondayNight3= "生物";
    var tuesdayNight3= "语文";
    var wednesdayNight3= "英语";
    var thursdayNight3= "数学";
    var fridayNight3= "物理";
    var saturdayNight3= "化学";
    var sundayNight3 = "";

    //特殊周备选表
    var mondayNight4= "待定";
    var tuesdayNight4= "待定";
    var wednesdayNight4= "待定";
    var thursdayNight4= "待定";
    var fridayNight4= "待定";
    var saturdayNight4= "待定";
    var sundayNight4 = "待定";
    
    //通表
    var mondayNight0= "";
    var tuesdayNight0= "";
    var wednesdayNight0= "";
    var thursdayNight0= "";
    var fridayNight0= "";
    var saturdayNight0= "";
    var sundayNight0 = "";

    //周六补课表//
    //表一
    var saturday1shangwu3 = "语文";
    var saturday1shangwu4 = "语文";
    var saturday1shangwu5 = "数学";
    var saturday1shangwu6 = "数学";
    var saturday1shangwu7 = "自习";
    var saturday1xiawu2 = "生物";
    var saturday1xiawu3 = "生物";
    var saturday1xiawu4 = "化学";
    var saturday1xiawu5 = "化学";

    //表二
    var saturday2shangwu3 = "英语";
    var saturday2shangwu4 = "英语";
    var saturday2shangwu5 = "物理";
    var saturday2shangwu6 = "物理";
    var saturday2shangwu7 = "自习";
    var saturday2xiawu2 = "语文";
    var saturday2xiawu3 = "语文";
    var saturday2xiawu4 = "数学";
    var saturday2xiawu5 = "数学";

    //表三
    var saturday3shangwu3 = "化学";
    var saturday3shangwu4 = "化学";
    var saturday3shangwu5 = "生物";
    var saturday3shangwu6 = "生物";
    var saturday3shangwu7 = "自习";
    var saturday3xiawu2 = "英语";
    var saturday3xiawu3 = "英语";
    var saturday3xiawu4 = "物理";
    var saturday3xiawu5 = "物理";

    //特殊表
    var saturday4shangwu3 = "";
    var saturday4shangwu4 = "";
    var saturday4shangwu5 = "";
    var saturday4shangwu6 = "";
    var saturday4shangwu7 = "";
    var saturday4xiawu2 = "英语";
    var saturday4xiawu3 = "英语";
    var saturday4xiawu4 = "物理";
    var saturday4xiawu5 = "物理";

    //通表
    var saturday0shangwu3 = "";
    var saturday0shangwu4 = "";
    var saturday0shangwu5 = "";
    var saturday0shangwu6 = "";
    var saturday0shangwu7 = "";
    var saturday0xiawu2 = "";
    var saturday0xiawu3 = "";
    var saturday0xiawu4 = "";
    var saturday0xiawu5 = "";
    var saturday0shangwu1 = "周六";
    var saturday0shangwu2 = "|";
    var saturday0shangwu8 = "0";
    var saturday0xiawu1
    var saturday0xiawu6 = "|";
    var saturday0xiawu7 = "0";

    //周日半天表

    //正课表
    //周一
    var monday0shangwu3 = "语文";
    var monday0shangwu4 = "语文";
    var monday0shangwu5 = "生物";
    var monday0shangwu6 = "英语";
    var monday0shangwu7 = "英语";
    var monday0xiawu2 = "数学";
    var monday0xiawu3 = "数学";
    var monday0xiawu4 = "物理";
    var monday0xiawu5 = "化学";

    var monday0shangwu1 = "周一";
    var monday0shangwu2 = "|";
    var monday0shangwu8 = "0";
    var monday0xiawu1
    var monday0xiawu6 = "|";
    var monday0xiawu7 = "0";

    //周二
    var tuesday0shangwu3 = "数学";
    var tuesday0shangwu4 = "化学";
    var tuesday0shangwu5 = "化学";
    var tuesday0shangwu6 = "物理";
    var tuesday0shangwu7 = "体育";
    var tuesday0xiawu2 = "英语";
    var tuesday0xiawu3 = "英语";
    var tuesday0xiawu4 = "生物";
    var tuesday0xiawu5 = "语文";

    var tuesday0shangwu1 = "周二";
    var tuesday0shangwu2 = "|";
    var tuesday0shangwu8 = "0";
    var tuesday0xiawu1
    var tuesday0xiawu6 = "|";
    var tuesday0xiawu7 = "0";

    //周三
    var wednesday0shangwu3 = "生物";
    var wednesday0shangwu4 = "生物";
    var wednesday0shangwu5 = "化学";
    var wednesday0shangwu6 = "物理";
    var wednesday0shangwu7 = "英语";
    var wednesday0xiawu2 = "语文";
    var wednesday0xiawu3 = "语文";
    var wednesday0xiawu4 = "数学";
    var wednesday0xiawu5 = "数学";

    var wednesday0shangwu1 = "周三";
    var wednesday0shangwu2 = "|";
    var wednesday0shangwu8 = "0";
    var wednesday0xiawu1
    var wednesday0xiawu6 = "|";
    var wednesday0xiawu7 = "0";

    //周四
    var thursday0shangwu3 = "语文";
    var thursday0shangwu4 = "生物";
    var thursday0shangwu5 = "化学";
    var thursday0shangwu6 = "物理";
    var thursday0shangwu7 = "物理";
    var thursday0xiawu2 = "数学";
    var thursday0xiawu3 = "英语";
    var thursday0xiawu4 = "研究";
    var thursday0xiawu5 = "研究";

    var thursday0shangwu1 = "周四";
    var thursday0shangwu2 = "|";
    var thursday0shangwu8 = "0";
    var thursday0xiawu1
    var thursday0xiawu6 = "|";
    var thursday0xiawu7 = "0";

    //周五
    var friday0shangwu3 = "英语";
    var friday0shangwu4 = "语文";
    var friday0shangwu5 = "化学";
    var friday0shangwu6 = "数学";
    var friday0shangwu7 = "数学";
    var friday0xiawu2 = "生物";
    var friday0xiawu3 = "物理";
    var friday0xiawu4 = "物理";
    var friday0xiawu5 = "班会";

    var friday0shangwu1 = "周五";
    var friday0shangwu2 = "|";
    var friday0shangwu8 = "0";
    var friday0xiawu1
    var friday0xiawu6 = "|";
    var friday0xiawu7 = "0";

    //周日全天备用表
    var sunday4shangwu3 = "英语";
    var sunday4shangwu4 = "英语";
    var sunday4shangwu5 = "物理";
    var sunday4shangwu6 = "物理";
    var sunday4shangwu7 = "物理";
    var sunday4xiawu2 = "数学";
    var sunday4xiawu3 = "语文";
    var sunday4xiawu4 = "化学";
    var sunday4xiawu5 = "生物";

    //通表
    var sunday0shangwu1 = "周日";
    var sunday0shangwu2 = "|";
    var sunday0shangwu3 = "英语";
    var sunday0shangwu4 = "英语";
    var sunday0shangwu5 = "物理";
    var sunday0shangwu6 = "物理";
    var sunday0shangwu7 = "自习";
    var sunday0xiawu2 = "";
    var sunday0xiawu3 = "";
    var sunday0xiawu4 = "";
    var sunday0xiawu5 = "";
    var sunday0shangwu8 = "0";
    var sunday0xiawu1
    var sunday0xiawu6 = "|";
    var sunday0xiawu7 = "0";
    
    //周日半天表
    //表1
    var sunday1shangwu3 = "英语";
    var sunday1shangwu4 = "英语";
    var sunday1shangwu5 = "物理";
    var sunday1shangwu6 = "物理";

    //表2
    var sunday2shangwu3 = "化学";
    var sunday2shangwu4 = "化学";
    var sunday2shangwu5 = "生物";
    var sunday2shangwu6 = "生物";

    //表3
    var sunday3shangwu3 = "语文";
    var sunday3shangwu4 = "语文";
    var sunday3shangwu5 = "数学";
    var sunday3shangwu6 = "数学";

    var dateColorR = "52";
    var dateColorG = "152";
    var dateColorB = "219";
    var positionMODE = "1";
    var positionX = "50";
    var positionY = "86";
    var shadowSIZE = "22";
    var borderRADIUS = "20";
    var opacity = "0.45";
    var gapSIZE = "0";
    var order = "0";
    var hide = "1";
    var divisionCode = "<span style=\"color:rgb("+dateColorR+","+dateColorG+","+dateColorB+");\">";
    /////////////////////////
    function schedule(){
    function check(i){//【修正：小于10在数字前面加0】
        if (i=="q615749669"){
            i="";
        }
        return i;
    }
    var now=new Date();//现在时间函数
    function formalClassChartNumber(){
        if (autoSwitchFormalClassNumber==0){
            xingqi=now.getDay();
        }else if (autoSwitchFormalClassNumber!==0){
            xingqi=chosenFormalClassNumber;
        }
        return xingqi;
    }
    if(hideMorningDisplay == 0){
        monday0xiawu1 = "";
        tuesday0xiawu1 = "";
        wednesday0xiawu1 = "";
        thursday0xiawu1 = "";
        friday0xiawu1 = "";
        saturday0xiawu1 = "";
        sunday0xiawu1 = "";
    }else if(hideMorningDisplay == 1) {
        monday0xiawu1 = "‖";
        tuesday0xiawu1 = "‖"
        wednesday0xiawu1 = "‖";
        thursday0xiawu1 = "‖";
        friday0xiawu1 = "‖"
        saturday0xiawu1 = "‖"
        sunday0xiawu1 = "‖"
    }
    function nightclass(){
    if (displayNightClass==0){
        switch (nightClassNumber){
            case 1 :{
                mondayNight0 = mondayNight1;
                tuesdayNight0 = tuesdayNight1;
                wednesdayNight0 = wednesdayNight1;
                thursdayNight0 = thursdayNight1;
                fridayNight0 = fridayNight1;
                saturdayNight0 = saturdayNight1;
                sundayNight0 = sundayNight1;
                break;
            }
            case 2 :{
                mondayNight0 = mondayNight2;
                tuesdayNight0 = tuesdayNight2;
                wednesdayNight0 = wednesdayNight2;
                thursdayNight0 = thursdayNight2;
                fridayNight0 = fridayNight2;
                saturdayNight0 = saturdayNight2;
                sundayNight0 = sundayNight2;
                break;
            }
            case 3 :{
                mondayNight0 = mondayNight3;
                tuesdayNight0 = tuesdayNight3;
                wednesdayNight0 = wednesdayNight3;
                thursdayNight0 = thursdayNight3;
                fridayNight0 = fridayNight3;
                saturdayNight0 = saturdayNight3;
                sundayNight0 = sundayNight3;
                break;
            }
            case 4 :{
                mondayNight0 = mondayNight4;
                tuesdayNight0 = tuesdayNight4;
                wednesdayNight0 = wednesdayNight4;
                thursdayNight0 = thursdayNight4;
                fridayNight0 = fridayNight4;
                saturdayNight0 = saturdayNight4;
                sundayNight0 = sundayNight4;
                break;
            }
        }
        switch (formalClassChartNumber()){
            case 1 : {
                nightclass = mondayNight0;
                break
            }
            case 2 : {
                nightclass = tuesdayNight0;
                break
            }
            case 3 : {
                nightclass = wednesdayNight0;
                break
            }
            case 4 : {
                nightclass = thursdayNight0;
                break
            }
            case 5 : {
                nightclass = fridayNight0;
                break
            }
            case 6 : {
                nightclass = saturdayNight0;
                break;
            }
            case 0 : {
                nightclass = sundayNight0;
                break;
            }
        }
    }else if (displayNightClass!==0){
        nightclass = "";
    }
        return " "+nightclass;
    }
    switch (saturadayClassNumber){
        case 1 :{
            saturday0shangwu3 = saturday1shangwu3;
            saturday0shangwu4 = saturday1shangwu4;
            saturday0shangwu5 = saturday1shangwu5;
            saturday0shangwu6 = saturday1shangwu6;
            saturday0shangwu7 = saturday1shangwu7;
            saturday0xiawu2 = saturday1xiawu2;
            saturday0xiawu3 = saturday1xiawu3;
            saturday0xiawu4 = saturday1xiawu4;
            saturday0xiawu5 = saturday1xiawu5;
            break
        }
        case 2 :{
            saturday0shangwu3 = saturday2shangwu3;
            saturday0shangwu4 = saturday2shangwu4;
            saturday0shangwu5 = saturday2shangwu5;
            saturday0shangwu6 = saturday2shangwu6;
            saturday0shangwu7 = saturday2shangwu7;
            saturday0xiawu2 = saturday2xiawu2;
            saturday0xiawu3 = saturday2xiawu3;
            saturday0xiawu4 = saturday2xiawu4;
            saturday0xiawu5 = saturday2xiawu5;
            break
        }
        case 3 :{
            saturday0shangwu3 = saturday3shangwu3;
            saturday0shangwu4 = saturday3shangwu4;
            saturday0shangwu5 = saturday3shangwu5;
            saturday0shangwu6 = saturday3shangwu6;
            saturday0shangwu7 = saturday3shangwu7;
            saturday0xiawu2 = saturday3xiawu2;
            saturday0xiawu3 = saturday3xiawu3;
            saturday0xiawu4 = saturday3xiawu4;
            saturday0xiawu5 = saturday3xiawu5;
            break
        }
        case 4 :{
            saturday0shangwu3 = saturday4shangwu3;
            saturday0shangwu4 = saturday4shangwu4;
            saturday0shangwu5 = saturday4shangwu5;
            saturday0shangwu6 = saturday4shangwu6;
            saturday0shangwu7 = saturday4shangwu7;
            saturday0xiawu2 = saturday4xiawu2;
            saturday0xiawu3 = saturday4xiawu3;
            saturday0xiawu4 = saturday4xiawu4;
            saturday0xiawu5 = saturday4xiawu5;
            break
        }
    }
    switch (sundayClassNumber){
        case 1 :{
            sunday0shangwu3=sunday1shangwu3
            sunday0shangwu4=sunday1shangwu4
            sunday0shangwu5=sunday1shangwu5
            sunday0shangwu6=sunday1shangwu6
            break
        }
        case 2 :{
            sunday0shangwu3=sunday2shangwu3
            sunday0shangwu4=sunday2shangwu4
            sunday0shangwu5=sunday2shangwu5
            sunday0shangwu6=sunday2shangwu6
            break
        }
        case 3 :{
            sunday0shangwu3=sunday3shangwu3
            sunday0shangwu4=sunday3shangwu4
            sunday0shangwu5=sunday3shangwu5
            sunday0shangwu6=sunday3shangwu6
            break
        }
        case 4:{
            sunday0shangwu3 = sunday4shangwu3;
            sunday0shangwu4 = sunday4shangwu4;
            sunday0shangwu5 = sunday4shangwu5;
            sunday0shangwu6 = sunday4shangwu6;
            sunday0shangwu7 = sunday4shangwu7;
            sunday0xiawu2 = sunday4xiawu2;
            sunday0xiawu3 = sunday4xiawu3;
            sunday0xiawu4 = sunday4xiawu4;
            sunday0xiawu5 = sunday4xiawu5;
            break
        }
    }
    var shangwu="";
    var xiawu="";
    if(formalClassChartNumber()==1){
        if(monday0shangwu8=="0"){
            shangwu = monday0shangwu1+" "+divisionCode+check(monday0shangwu2)+"</span>"+" "+check(monday0shangwu3)+" "+check(monday0shangwu4)+" "+check(monday0shangwu5)+" "+check(monday0shangwu6);
            document.getElementById("shangwu").innerHTML=shangwu;//【输出】
        }
        else{
            document.getElementById("kechengbiaoIMGshangwu").src=monday0shangwu1;
            document.getElementById("kechengbiaoIMGshangwu").style.zoom=monday0shangwu8+"%";
        }
        if(monday0xiawu7=="0"){
            nightclass =
            xiawu = divisionCode+monday0xiawu1+"</span>"+check(monday0xiawu2)+" "+check(monday0xiawu3)+" "+check(monday0xiawu4)+" "+check(monday0xiawu5)+" "+divisionCode+check(monday0xiawu6)+"</span>"+nightclass();
            document.getElementById("xiawu").innerHTML=xiawu;//【输出】
        }
        else{
            document.getElementById("kechengbiaoIMGxiawu").src=monday0xiawu1;
            document.getElementById("kechengbiaoIMGxiawu").style.zoom=monday0xiawu7+"%";
        }
    }
    if(formalClassChartNumber()==2){
        if(tuesday0shangwu8=="0"){
            shangwu = tuesday0shangwu1+" "+divisionCode+check(tuesday0shangwu2)+"</span>"+" "+check(tuesday0shangwu3)+" "+check(tuesday0shangwu4)+" "+check(tuesday0shangwu5)+" "+check(tuesday0shangwu6);
            document.getElementById("shangwu").innerHTML=shangwu;//【输出】
        }
        else{
            document.getElementById("kechengbiaoIMGshangwu").src=tuesday0shangwu1;
            document.getElementById("kechengbiaoIMGshangwu").style.zoom=tuesday0shangwu8+"%";
        }
        if(tuesday0xiawu7=="0"){
            xiawu = divisionCode+tuesday0xiawu1+"</span>"+check(tuesday0xiawu2)+" "+check(tuesday0xiawu3)+" "+check(tuesday0xiawu4)+" "+check(tuesday0xiawu5)+" "+divisionCode+check(tuesday0xiawu6)+"</span>"+nightclass();
            document.getElementById("xiawu").innerHTML=xiawu;//【输出】
        }
        else{
            document.getElementById("kechengbiaoIMGxiawu").src=tuesday0xiawu1;
            document.getElementById("kechengbiaoIMGxiawu").style.zoom=tuesday0xiawu7+"%";
        }
    }
    if(formalClassChartNumber()==3){
        if(wednesday0shangwu8=="0"){
            shangwu = wednesday0shangwu1+" "+divisionCode+check(wednesday0shangwu2)+"</span>"+" "+check(wednesday0shangwu3)+" "+check(wednesday0shangwu4)+" "+check(wednesday0shangwu5)+" "+check(wednesday0shangwu6);
            document.getElementById("shangwu").innerHTML=shangwu;//【输出】
        }
        else{
            document.getElementById("kechengbiaoIMGshangwu").src=wednesday0shangwu1;
            document.getElementById("kechengbiaoIMGshangwu").style.zoom=wednesday0shangwu8+"%";
        }
        if(wednesday0xiawu7=="0"){
            xiawu = divisionCode+wednesday0xiawu1+"</span>"+check(wednesday0xiawu2)+" "+check(wednesday0xiawu3)+" "+check(wednesday0xiawu4)+" "+check(wednesday0xiawu5)+" "+divisionCode+check(wednesday0xiawu6)+"</span>"+nightclass();
            document.getElementById("xiawu").innerHTML=xiawu;//【输出】
        }
        else{
            document.getElementById("kechengbiaoIMGxiawu").src=wednesday0xiawu1;
            document.getElementById("kechengbiaoIMGxiawu").style.zoom=wednesday0xiawu7+"%";
        }
    }
    if(formalClassChartNumber()==4){
        if(thursday0shangwu8=="0"){
            shangwu = thursday0shangwu1+" "+divisionCode+check(thursday0shangwu2+"</span>")+" "+check(thursday0shangwu3)+" "+check(thursday0shangwu4)+" "+check(thursday0shangwu5)+" "+check(thursday0shangwu6);
            document.getElementById("shangwu").innerHTML=shangwu;//【输出】
        }
        else{
            document.getElementById("kechengbiaoIMGshangwu").src=thursday0shangwu1;
            document.getElementById("kechengbiaoIMGshangwu").style.zoom=thursday0shangwu8+"%";
        }
        if(thursday0xiawu7=="0"){
            xiawu = divisionCode+thursday0xiawu1+"</span>"+check(thursday0xiawu2)+" "+check(thursday0xiawu3)+" "+check(thursday0xiawu4)+" "+check(thursday0xiawu5)+" "+divisionCode+check(thursday0xiawu6)+"</span>"+nightclass();
            document.getElementById("xiawu").innerHTML=xiawu;//【输出】
        }
        else{
            document.getElementById("kechengbiaoIMGxiawu").src=thursday0xiawu1;
            document.getElementById("kechengbiaoIMGxiawu").style.zoom=thursday0xiawu7+"%";
        }
    }
    if(formalClassChartNumber()==5){
        if(friday0shangwu8=="0"){
            shangwu = friday0shangwu1+" "+divisionCode+check(friday0shangwu2)+"</span>"+" "+check(friday0shangwu3)+" "+check(friday0shangwu4)+" "+check(friday0shangwu5)+" "+check(friday0shangwu6);
            document.getElementById("shangwu").innerHTML=shangwu;//【输出】
        }
        else{
            document.getElementById("kechengbiaoIMGshangwu").src=friday0shangwu1;
            document.getElementById("kechengbiaoIMGshangwu").style.zoom=friday0shangwu8+"%";
        }
        if(friday0xiawu7=="0"){
            xiawu = divisionCode+friday0xiawu1+"</span>"+check(friday0xiawu2)+" "+check(friday0xiawu3)+" "+check(friday0xiawu4)+" "+check(friday0xiawu5)+" "+divisionCode+check(friday0xiawu6)+"</span>"+nightclass();
            document.getElementById("xiawu").innerHTML=xiawu;//【输出】
        }
        else{
            document.getElementById("kechengbiaoIMGxiawu").src=friday0xiawu1;
            document.getElementById("kechengbiaoIMGxiawu").style.zoom=friday0xiawu7+"%";
        }
    }
    if(formalClassChartNumber()==6){
        if(saturday0shangwu8=="0"){
            shangwu = saturday0shangwu1+" "+divisionCode+check(saturday0shangwu2)+"</span>"+" "+check(saturday0shangwu3)+" "+check(saturday0shangwu4)+" "+check(saturday0shangwu5)+" "+check(saturday0shangwu6)+" "+check(saturday0shangwu7);;
            document.getElementById("shangwu").innerHTML=shangwu;//【输出】
        }
        else{
            document.getElementById("kechengbiaoIMGshangwu").src=saturday0shangwu1;
            document.getElementById("kechengbiaoIMGshangwu").style.zoom=saturday0shangwu8+"%";
        }
        if(saturday0xiawu7=="0"){
            xiawu = divisionCode+saturday0xiawu1+"</span>"+check(saturday0xiawu2)+" "+check(saturday0xiawu3)+" "+check(saturday0xiawu4)+" "+check(saturday0xiawu5)+" "+divisionCode+check(saturday0xiawu6)+"</span>"+nightclass();
            document.getElementById("xiawu").innerHTML=xiawu;//【输出】
        }
        else{
            document.getElementById("kechengbiaoIMGxiawu").src=saturday0xiawu1;
            document.getElementById("kechengbiaoIMGxiawu").style.zoom=saturday0xiawu7+"%";
        }
    }
    if(formalClassChartNumber()==0){
        if(sunday0shangwu8=="0"){
            if(sundayClassNumber!==4){
            shangwu = sunday0shangwu1+" "+divisionCode+check(sunday0shangwu2)+"</span>"+" "+check(sunday0shangwu3)+" "+check(sunday0shangwu4)+" "+check(sunday0shangwu5)+" "+check(sunday0shangwu6);
            document.getElementById("shangwu").innerHTML=shangwu;//【输出】
            }else if (sundayClassNumber==4){
            shangwu = sunday0shangwu1+" "+divisionCode+check(sunday0shangwu2)+"</span>"+" "+check(sunday0shangwu3)+" "+check(sunday0shangwu4)+" "+check(sunday0shangwu5)+" "+check(sunday0shangwu6)+" "+check(sunday0shangwu7);
            document.getElementById("shangwu").innerHTML=shangwu;
            }
        }
        else{
            document.getElementById("kechengbiaoIMGshangwu").src=sunday0shangwu1;
            document.getElementById("kechengbiaoIMGshangwu").style.zoom=sunday0shangwu8+"%";
        }
        if(sunday0xiawu7=="0"){
            if(sundayClassNumber==4){
            xiawu = divisionCode+sunday0xiawu1+"</span>"+check(sunday0xiawu2)+" "+check(sunday0xiawu3)+" "+check(sunday0xiawu4)+" "+check(sunday0xiawu5)+" "+divisionCode+check(sunday0xiawu6)+"</span>"+nightclass();
            document.getElementById("xiawu").innerHTML=xiawu;//【输出】
            }
        }
        else{
            document.getElementById("kechengbiaoIMGxiawu").src=sunday0xiawu1;
            document.getElementById("kechengbiaoIMGxiawu").style.zoom=sunday0xiawu7+"%";
        }
    }
    ////////////////////////////////////////////////
}
$(document).ready(function(){//jquery ready命令，比window.onload好用，能重复使用
    set();//执行一次
});
function set(){
    document.getElementById("kechengbiaoBOX").style.position="absolute";
    document.getElementById("kechengbiaoBOX").style.left=positionX+"%";
    document.getElementById("kechengbiaoBOX").style.top=positionY+"%";
    if(positionMODE=="1"){
        document.getElementById("kechengbiaoBOX").style.transform="translate(-50%,-50%)";
    }
    document.getElementById("kechengbiaoBOX").style.backgroundColor="rgba(0,0,0,"+opacity+")";
    document.getElementById("kechengbiaoBOX").style.padding=shadowSIZE+"rem";
    document.getElementById("kechengbiaoBOX").style.borderRadius=borderRADIUS+"rem";
    document.getElementById("gap").style.fontSize=gapSIZE+"rem";
    //document.getElementById("kechengbiaoBOX").style.zIndex=order;

    document.getElementById("shangwu").style.display="flex";
    document.getElementById("shangwu").style.justifyContent="space-ground";
    document.getElementById("shangwu").style.flexDirection="row";
    if(hide=="0"){
        document.getElementById("kechengbiaoBOX").style.opacity="0";
    }
}