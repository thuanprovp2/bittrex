/**
 * Created by thuan on 8/18/2017.
 */
var Socket = new WebSocket("wss://socket.bittrex.com/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=55Fjf4aWwdI1Igznap5IJzqpwj1BcbpJHGd5VJBl9OrF2kEbR4%2BxZqrE1Rzs7ouxq3trOfLZFLWSND0fpHQMJbpcqE1Y0qyqxdWhDPXZ2L7YVOXBASsARvJtY5ql%2FnZkyi7FLQ%3D%3D&connectionData=%5B%7B%22name%22%3A%22corehub%22%7D%5D&tid=9");
var currentObj = {};
var currentM1 = {}, currentM5 = {}, currentM15 = {}, currentM30 = {};
var dem = 0;

$(document).ready(function () {
    var $table = $('#demo');
    $table.floatThead({
        position: 'fixed'
    });
    // Socket.onmessage();

    $('#hideMColumn').click(function () {
        // $('th:nth-child(n+3):nth-child(-n+6)').hide();
    });
});
// console.log(Socket);
Socket.onmessage = function (evt) {
    var receiveData = evt.data;
    var obj = JSON.parse(receiveData);
    var preData;

    if (obj === undefined || obj.M[0] === undefined) {
        //do nothing
    }
    else {

        preData = obj.M[0].A[0].Deltas;

        //add data vào currentObj
        for (var i = 0; i < preData.length; i++) {
            currentObj[preData[i].MarketName] = preData[i];
        }

        // console.log(currentObj["BTC-STRAT"].Last);
        console.log(Object.keys(currentObj).length + "current");

        if (dem == 0) {
            setTimeout(function () {
                currentM1 = JSON.parse(JSON.stringify(currentObj));
                currentM5 = JSON.parse(JSON.stringify(currentObj));
                currentM15 = JSON.parse(JSON.stringify(currentObj));
                currentM30 = JSON.parse(JSON.stringify(currentObj));
            }, 30000);
            renderTable(currentObj);
            $('tr').click(borderClick);
            dem = 1;
        }
        else {
            renderTable(currentObj);
            $('tr').click(borderClick);
        }
    }
};

function renderTable(currenObj) {

    for (key in currentObj) {

        if ($('#' + currentObj[key].MarketName).length == 0) {
            $('#table').append("<tr id=" + currentObj[key].MarketName + "></tr>");
            $('#' + currentObj[key].MarketName).append("<td class='name'><a target='_blank' " +
                "href='https://bittrex.com/Market/Index?MarketName=" + currentObj[key].MarketName + "'>" + currentObj[key].MarketName + "</a></td>");
            $('#' + currentObj[key].MarketName).append("<td class='last'>" + currentObj[key].Last + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='priceM1'>" + ((currentM1[key] === undefined) ? "chua co data" : currentM1[key].Last) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='priceM5'>" + ((currentM5[key] === undefined) ? "chua co data" : currentM5[key].Last) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='priceM15'>" + ((currentM15[key] === undefined) ? "chua co data" : currentM15[key].Last) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='priceM30'>" + ((currentM30[key] === undefined) ? "chua co data" : currentM30[key].Last) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='volume'>" + currentObj[key].BaseVolume.toFixed(3) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='volumeM1'>" + ((currentM1[key] === undefined) ? "chua co data" : currentM1[key].BaseVolume) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='volumeM5'>" + ((currentM5[key] === undefined) ? "chua co data" : currentM5[key].BaseVolume) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='volumeM15'>" + ((currentM15[key] === undefined) ? "chua co data" : currentM15[key].BaseVolume) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='volumeM30'>" + ((currentM30[key] === undefined) ? "chua co data" : currentM30[key].BaseVolume) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='openBuyOrder'>" + currentObj[key].OpenBuyOrders + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='openBuyOrderM1'>" + ((currentM1[key] === undefined) ? "chua co data" : currentM1[key].OpenBuyOrders) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='openBuyOrderM5'>" + ((currentM5[key] === undefined) ? "chua co data" : currentM5[key].OpenBuyOrders) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='openBuyOrderM15'>" + ((currentM15[key] === undefined) ? "chua co data" : currentM15[key].OpenBuyOrders) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='openBuyOrderM30'>" + ((currentM30[key] === undefined) ? "chua co data" : currentM30[key].OpenBuyOrders) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='openSellOrder'>" + currentObj[key].OpenSellOrders + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='openSellOrderM1'>" + ((currentM1[key] === undefined) ? "chua co data" : currentM1[key].OpenSellOrders) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='openSellOrderM5'>" + ((currentM5[key] === undefined) ? "chua co data" : currentM5[key].OpenSellOrders) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='openSellOrderM15'>" + ((currentM15[key] === undefined) ? "chua co data" : currentM15[key].OpenSellOrders) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='openSellOrderM30'>" + ((currentM30[key] === undefined) ? "chua co data" : currentM30[key].OpenSellOrders) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='orderAlert'></td>");
            $('#' + currentObj[key].MarketName).append("<td class='high'>" + currentObj[key].High.toFixed(8) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='low'>" + currentObj[key].Low.toFixed(8) + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='ask'>" + currentObj[key].Ask + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='bid'>" + currentObj[key].Bid + "</td>");
            $('#' + currentObj[key].MarketName).append("<td class='spread'>" + spread(currentObj[key].Ask, currentObj[key].Bid, currentObj[key]) + "%</td>");
            $('#' + currentObj[key].MarketName).append("<td class='changePrice'></td>");
            $('#' + currentObj[key].MarketName).append("<td class='priceAlert'></td>");
            $('#' + currentObj[key].MarketName).append("<td class='buyWall'></td>");
            $('#' + currentObj[key].MarketName).append("<td class='sellWall'></td>");
            $('#' + currentObj[key].MarketName).append("<td class='sumBuy'></td>");
            $('#' + currentObj[key].MarketName).append("<td class='sumSell'></td>");
            $('#' + currentObj[key].MarketName).append("<td class='sumAlert'></td>");
        }
        else {
            $('#' + currentObj[key].MarketName + " .last").text(currentObj[key].Last);
            $('#' + currentObj[key].MarketName + " .priceM1").text(((currentM1[key] === undefined) ? "chua co data" : currentM1[key].Last) + " and " + priceColor(currentM1[key], currentObj[key], "priceM1", 0.5) + "%");
            $('#' + currentObj[key].MarketName + " .priceM5").text(((currentM5[key] === undefined) ? "chua co data" : currentM5[key].Last) + " and " + priceColor(currentM5[key], currentM1[key], "priceM5", 0.5) + "%");
            $('#' + currentObj[key].MarketName + " .priceM15").text(((currentM15[key] === undefined) ? "chua co data" : currentM15[key].Last) + " and " + priceColor(currentM15[key], currentM5[key], "priceM15", 0.5) + "%");
            $('#' + currentObj[key].MarketName + " .priceM30").text(((currentM30[key] === undefined) ? "chua co data" : currentM30[key].Last) + " and " + priceColor(currentM30[key], currentM15[key], "priceM30", 0.5) + "%");
            $('#' + currentObj[key].MarketName + " .volume").text(currentObj[key].BaseVolume.toFixed(3));
            $('#' + currentObj[key].MarketName + " .volumeM1").text(((currentM1[key] === undefined) ? "chua co data" : currentM1[key].BaseVolume.toFixed(3)) + " and " + volumeColor(currentM1[key], currenObj[key], "volumeM1", 0.5) + "%");
            $('#' + currentObj[key].MarketName + " .volumeM5").text(((currentM5[key] === undefined) ? "chua co data" : currentM5[key].BaseVolume.toFixed(3)) + " and " + volumeColor(currentM5[key], currentM1[key], "volumeM5", 0.5) + "%");
            $('#' + currentObj[key].MarketName + " .volumeM15").text(((currentM15[key] === undefined) ? "chua co data" : currentM15[key].BaseVolume.toFixed(3)) + " and " + volumeColor(currentM15[key], currentM5[key], "volumeM15", 2) + "%");
            $('#' + currentObj[key].MarketName + " .volumeM30").text(((currentM30[key] === undefined) ? "chua co data" : currentM30[key].BaseVolume.toFixed(3)) + " and " + volumeColor(currentM30[key], currentM15[key], "volumeM30", 5) + "%");
            $('#' + currentObj[key].MarketName + " .openBuyOrder").text(currentObj[key].OpenBuyOrders);
            $('#' + currentObj[key].MarketName + " .openBuyOrderM1").text(((currentM1[key] === undefined) ? "chua co data" : currentM1[key].OpenBuyOrders));
            $('#' + currentObj[key].MarketName + " .openBuyOrderM5").text(((currentM5[key] === undefined) ? "chua co data" : currentM5[key].OpenBuyOrders));
            $('#' + currentObj[key].MarketName + " .openBuyOrderM15").text(((currentM15[key] === undefined) ? "chua co data" : currentM15[key].OpenBuyOrders));
            $('#' + currentObj[key].MarketName + " .openBuyOrderM30").text(((currentM30[key] === undefined) ? "chua co data" : currentM30[key].OpenBuyOrders));
            $('#' + currentObj[key].MarketName + " .openSellOrder").text(currentObj[key].OpenSellOrders);
            $('#' + currentObj[key].MarketName + " .openSellOrderM1").text(((currentM1[key] === undefined) ? "chua co data" : currentM1[key].OpenSellOrders));
            $('#' + currentObj[key].MarketName + " .openSellOrderM5").text(((currentM5[key] === undefined) ? "chua co data" : currentM5[key].OpenSellOrders));
            $('#' + currentObj[key].MarketName + " .openSellOrderM15").text(((currentM15[key] === undefined) ? "chua co data" : currentM15[key].OpenSellOrders));
            $('#' + currentObj[key].MarketName + " .openSellOrderM30").text(((currentM30[key] === undefined) ? "chua co data" : currentM30[key].OpenSellOrders));
            $('#' + currentObj[key].MarketName + " .orderAlert").text();
            $('#' + currentObj[key].MarketName + " .high").text(currentObj[key].High.toFixed(8));
            $('#' + currentObj[key].MarketName + " .low").text(currentObj[key].Low.toFixed(8));
            $('#' + currentObj[key].MarketName + " .ask").text(currentObj[key].Ask);
            $('#' + currentObj[key].MarketName + " .bid").text(currentObj[key].Bid);
            $('#' + currentObj[key].MarketName + " .spread").text(spread(currentObj[key].Ask, currentObj[key].Bid, currentObj[key]) + "%");
            $('#' + currentObj[key].MarketName + " .changePrice").text();
            $('#' + currentObj[key].MarketName + " .priceAlert").text();
            $('#' + currentObj[key].MarketName + " .buyWall").text();
            $('#' + currentObj[key].MarketName + " .sellWall").text();
            $('#' + currentObj[key].MarketName + " .sumBuy").text();
            $('#' + currentObj[key].MarketName + " .sumSell").text();
            $('#' + currentObj[key].MarketName + " .sumAlert").text();
            priceAlert(currentObj[key]);
            orderAlert(currentObj[key]);
            orderColor(currenObj[key], currentM1[key], "openBuyOrderM1");
            orderColor(currentM1[key], currentM5[key], "openBuyOrderM5");
            orderColor(currentM5[key], currentM15[key], "openBuyOrderM15");
            orderColor(currentM15[key], currentM30[key], "openBuyOrderM30");

            orderSellColor(currentObj[key], currentM1[key], "openSellOrderM1");
            orderSellColor(currentM1[key], currentM5[key], "openSellOrderM5");
            orderSellColor(currentM5[key], currentM15[key], "openSellOrderM15");
            orderSellColor(currentM15[key], currentM30[key], "openSellOrderM30");

            // priceColor(currentM1[key], currentM5[key], "priceM5");
        }

    }
}

goSave();

function priceColor(obj, objM, classname, percent) {
    if (obj === undefined || objM === undefined) {
        //do nothing
    }
    else {
        $('#' + obj.MarketName + ' .' + classname).removeClass("green-color");
        $('#' + obj.MarketName + ' .' + classname).removeClass("danger-color");
        $('#' + obj.MarketName + ' .' + classname).removeClass("warning-color");
        var temp = ((100 / obj.Last * objM.Last) - 100).toFixed(2);
        // console.log(temp);
        if (temp > percent) {
            $('#' + obj.MarketName + " ." + classname).addClass("green-color");
            return temp;
        }
        else if (temp < (-1 * percent)) {
            $('#' + obj.MarketName + " ." + classname).addClass("danger-color");
            return temp;
        }
        else {
            $('#' + obj.MarketName + " ." + classname).addClass("warning-color");
            return temp;
        }
    }
}

function volumeColor(obj, objM, classname, percent) {
    if (obj === undefined || objM === undefined) {
        //do nothing
    }
    else {
        $('#' + obj.MarketName + ' .' + classname).removeClass("green-color");
        $('#' + obj.MarketName + ' .' + classname).removeClass("danger-color");
        $('#' + obj.MarketName + ' .' + classname).removeClass("warning-color");
        var temp = ((100 / obj.BaseVolume * objM.BaseVolume) - 100).toFixed(2);
        // console.log(temp);
        if (temp > percent) {
            $('#' + obj.MarketName + " ." + classname).addClass("green-color");
            return temp;
        }
        else if (temp < (-1 * percent)) {
            $('#' + obj.MarketName + " ." + classname).addClass("danger-color");
            return temp;
        }
        else {
            $('#' + obj.MarketName + " ." + classname).addClass("warning-color");
            return temp;
        }
    }
}

function orderColor(obj, objM, classname) {
    if (obj === undefined || objM === undefined) {
        //do nothing
    }
    else {
        $('#' + obj.MarketName + " ." + classname).removeClass("success-color");
        $('#' + obj.MarketName + " ." + classname).removeClass("danger-color");
        $('#' + obj.MarketName + " ." + classname).removeClass("warning-color");
        if (obj.OpenBuyOrders > objM.OpenBuyOrders)
            $('#' + obj.MarketName + " ." + classname).addClass("success-color");
        else if (obj.OpenBuyOrders == objM.OpenBuyOrders)
            $('#' + obj.MarketName + " ." + classname).addClass("warning-color");
        else $('#' + obj.MarketName + " ." + classname).addClass("danger-color");
    }
}

function orderSellColor(obj, objM, classname) {
    if (obj === undefined || objM === undefined) {
        //do nothing
    }
    else {
        $('#' + obj.MarketName + " ." + classname).removeClass("success-color");
        $('#' + obj.MarketName + " ." + classname).removeClass("danger-color");
        $('#' + obj.MarketName + " ." + classname).removeClass("warning-color");
        if (obj.OpenSellOrders > objM.OpenSellOrders)
            $('#' + obj.MarketName + " ." + classname).addClass("danger-color");
        else if (obj.OpenSellOrders == objM.OpenSellOrders)
            $('#' + obj.MarketName + " ." + classname).addClass("warning-color");
        else $('#' + obj.MarketName + " ." + classname).addClass("success-color");
    }
}

function spread(number1, number2, obj) {
    $('#' + obj.MarketName + " .spread").removeClass("success-color");
    if (((100 * Math.max(number1, number2)) / Math.min(number1, number2) - 100).toFixed(2) >= 5) {
        $('#' + obj.MarketName + " .spread").addClass("success-color");
        return ((100 * Math.max(number1, number2)) / Math.min(number1, number2) - 100).toFixed(2);
    }
    else {
        return ((100 * Math.max(number1, number2)) / Math.min(number1, number2) - 100).toFixed(2);
    }
}

function priceAlert(obj) {
    if (obj.Last <= obj.Low) {
        $('#' + obj.MarketName + " .priceAlert").addClass("success-color");
        $('#' + obj.MarketName + " .priceAlert").html("Đáy mới <br>" + obj.Last);
    }
    else if (obj.Last >= obj.High) {
        $('#' + obj.MarketName + " .priceAlert").addClass("warning-color");
        $('#' + obj.MarketName + " .priceAlert").html("Đỉnh mới <br>" + obj.Last);
        // $('#' + obj.MarketName + " .priceAlert").css({"background": "#ED2027"});
    }
}

function orderAlert(obj) {
    $('#' + obj.MarketName + " .orderAlert").removeClass("success-color");
    if ((obj.OpenBuyOrders - obj.OpenSellOrders) >= 0) {
        $('#' + obj.MarketName + " .orderAlert").addClass("success-color");
        $('#' + obj.MarketName + " .orderAlert").text("Strong Buy");
    }
    else {
        $('#' + obj.MarketName + " .orderAlert").text("");
    }
}

function borderClick() {
    $('tr').removeClass('border-blue');
    $(this).addClass("border-blue");
}

function goSave() {
    setInterval(function () {
        currentM1 = JSON.parse(JSON.stringify(currentObj));
        console.log(Object.keys(currentM1).length + "local1");
    }, 60000);
    setInterval(function () {
        currentM5 = JSON.parse(JSON.stringify(currentM1));
        console.log(Object.keys(currentM5).length + "local2");
    }, 240000);
    setInterval(function () {
        currentM15 = JSON.parse(JSON.stringify(currentM5));
        console.log(Object.keys(currentM15).length + "local3");
    }, 600000);
    setInterval(function () {
        currentM30 = JSON.parse(JSON.stringify(currentM15));
        console.log(Object.keys(currentM30).length + "local4");
    }, 900000);
    // renderCurrentLocal(currentM1);
}

function hidecolumn() {
    $('#priceM1').hide();
    $('#priceM5').hide();
    $('#priceM15').hide();
    $('#priceM30').hide();
}

// $('h2').text(localStorage.getItem("currentM1").Last);
// }
