$(document).ready(function (e) {
    $("#hide").click(function () {
        $("#key").hide();
    });
    $(".word").click(function () {
        $("#key").show();
    });
    var password = [];
    $("td").each(function (i) {
        $(".key" + i).click(function () {
            for (var j = 0; j <= 5; j++) {
                if (password[j] == null) {
                    if (i == 10) {
                        password[j] = 0;
                    } else {
                        password[j] = i + 1;
                    }
                    $(".text" + (j + 1)).css("display", "block");
                    if (password.length == 6) {
                        alert(password.join(","));
                    }
                    return false;
                }
            }
        });
    });
    $(".reset").click(function () {
        password = [];
        $(".text").css("display", "none");
    });
    $(".back").click(function () {
        for (var i = 5; i >= 0; i--) {
            if (password[i] != null) {
                password[i] = null;
                $(".text" + (i + 1)).css("display", "none");
                return false;
            }
        }
    });
});