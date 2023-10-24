/* open sidenav w/push content effect & opacity, reduce  */ 
function openNav() {

  document.body.style.marginLeft = "208px";
  document.getElementById("mySidenav").style.width = "250px";

  /* manupulating some css adapting UI across different devices */
if (screen.width < 500) {
    document.getElementById("mySidenav").style.width = screen.width.toString()+"px";
    document.body.style.marginLeft = screen.width.toString()+"px";
    
  }  
  document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
}

/* return to normal */
function closeNav(){  

  document.getElementById("mySidenav").style.width = "0";  
  document.body.style.marginLeft ="0";  
  document.body.style.backgroundColor = "#f1f1f1";
  $(".drop").slideUp(500); /* close drop-down */
  $("#fa-elec").removeClass("fa fa-caret-down");
  $("#fa-elec").addClass("fa fa-caret-right");
}

function drop(sidenavLink, id) {
  /* style clicked link and display corresponding topnav */
  if (sidenavLink == "elec") {
    $("#fa-elec").removeClass("fa fa-caret-right");
    $("#fa-elec").addClass("fa fa-caret-down");
  }
  if (document.getElementById("elec_content").style.display == "block") {
      $("#fa-elec").removeClass("fa fa-caret-down");
      $("#fa-elec").addClass("fa fa-caret-right");
  }
  $(".sidenav .a").removeClass("active");
  var link = "#"+sidenavLink;
  $(link).addClass("active");
  $(".drop").css({"display": "none"});
  drp = "#"+id;
  $(drp).slideToggle(300);
}

/* remove orange borders if input present in that input box and add orange border around empty inputs (only two orange boxes at a time) */
var count = 2;
var inpCount = 0;
var zeroes = 0;
function check(inp_id) {
    inpCount++;
    id = "#"+inp_id;
    if ($(id).hasClass("to_calc")) {
        $(id).removeClass("to_calc");
        count--;
    }
    var v = $("#volt");
    var i = $("#amp");
    var r = $("#ohm");
    var w = $("#watt");
    
    if (v.val() == "" && count < 2 && !v.hasClass("to_calc")) {
        v.addClass("to_calc");
        count++;
    }
    if (i.val() == "" && count < 2 && !i.hasClass("to_calc")) {
        i.addClass("to_calc");
        count++;
    }
    if (r.val() == "" && count < 2 && !r.hasClass("to_calc")) {
        r.addClass("to_calc");
        count++;
    }
    if (w.val() == "" && count < 2 && !w.hasClass("to_calc")) {
        w.addClass("to_calc");
        count++;
    }
    
    $("#para").css("display", "none");
    $("btn").prop("disabled", false);
    if (count < 2 || inpCount == 0) {
        $("#para").css("display", "block");
    }
    if ($(id).val() == 0) {
        zeroes++;
    }
    if (zeroes > 0) {
        $("#para").css("display", "block");
        zeroes = 0;
    }
    if (inpCount > 0) {
        inpCount = 0;
    }
}

/* All functions below are for displaying drop-down and content of electronics */
function ohm() {
    $("#ohm_content").css({"display": "block"});
    closeNav();
}

var arr = [];
function calculate_ohm() {
    if (arr.length > 1) {
        $(arr[0]).val("");
        $(arr[1]).val("");
        arr = [];
    }
    var v = $("#volt").val();
    var i = $("#amp").val();
    var r = $("#ohm").val();
    var w = $("#watt").val();
    
    if (v === "") {
        arr.push("#volt");
        v = i * r;
        if (Math.round(v) !== v) {
            v = v.toFixed(2)
        }
        $("#volt").val(v);
        if (v == 0) {
            v = w / i;
            if (Math.round(v) !== v) {
                v = v.toFixed(2)
            }
            $("#volt").val(v);
            if (!isFinite(v)) {
                v = Math.sqrt(w * r);
                if (Math.round(v) !== v) {
                    v = v.toFixed(2)
                }
                $("#volt").val(v);
                if(v == 0) {
                    $("#para").css("display", "block");
                    $("#volt").val("");
                }
            }
        }
    }
    
    if (i === "") {
        arr.push("#amp");
        i = v / r;
         if (Math.round(i) !== i) {
            i = i.toFixed(2)
        }
        $("#amp").val(i);
        if (i == 0) {
            i = w / v;
            if (Math.round(i) !== i) {
                i = i.toFixed(2)
            }
            $("#amp").val(i);
            if (!isFinite(i)) {
                i = Math.sqrt(w / r);
                if (Math.round(i) !== i) {
                    i = i.toFixed(2)
                }
                $("#amp").val(i);
                if(i == 0) {
                    $("#para").css("display", "block");
                    $("#amp").val("");
                }
            }
        }
    }
    
    if (r === "") {
        arr.push("#ohm");
        r = v / i;
        if (Math.round(r) !== r) {
            r = r.toFixed(2)
        }
        $("#ohm").val(r);
        if (r == 0) {
            r = w / i*i;
            if (Math.round(r) !== r) {
                r = r.toFixed(2)
            }
            $("#ohm").val(r);
            if (!isFinite(r)) {
                r = v*v / w;
                if (Math.round(r) !== r) {
                    r = r.toFixed(2)
                }
                $("#ohm").val(r);
                if(r == 0) {
                    $("#para").css("display", "block");
                    $("#ohm").val("");
                }
            }
        }
    }
    
    if (w === "") {
        arr.push("#watt");
        w = v * i;
        if (Math.round(w) !== w) {
            w = w.toFixed(2)
        }
        $("#watt").val(w);
        if (w == 0) {
            w = r * i * i;
            if (Math.round(w) !== w) {
                w = w.toFixed(2)
            }
            $("#watt").val(w);
            if (w == 0) {
                w = v*v / r;
                if (Math.round(w) !== w) {
                    w = w.toFixed(2)
                }
                $("#watt").val(w);
                if(w == 0) {
                    $("#para").css("display", "block");
                    $("#watt").val("");
                }
            }
        }
    }
    
}
