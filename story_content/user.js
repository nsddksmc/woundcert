function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ctDPsWacSQ":
        Script1();
        break;
      case "6lesFYAEgK8":
        Script2();
        break;
      case "677Rg22X1Gn":
        Script3();
        break;
      case "66DswJ5SFoJ":
        Script4();
        break;
      case "6cL7STeDDnn":
        Script5();
        break;
      case "5fWVj9OgGkJ":
        Script6();
        break;
      case "5yhlcHIsmEU":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_courses@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  var player = GetPlayer();
var email="nsdd_courses@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

