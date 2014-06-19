if (window.location.href.indexOf("221.179.9.21")>0) 
{
    var a = document.getElementById("loginIframe").src;
    // window.open(a);
    window.location.href=a;
}
if (window.location.href.indexOf("221.176.66.85:81")>0) 
{
    var ph="17000000000";//your phonenum here
    var pas="";//you pass here
    var phNumberID = "phoneNum";
    var codeID="code";

    var phNumber = document.getElementById(phNumberID);
    var code = document.getElementById(codeID);

    phNumber.value = ph;
    code.value=pas;
    
    var lb=document.getElementById("login");
    lb.setAttribute("class","button01");
    lb.attributes.removeNamedItem("disabled");
};
