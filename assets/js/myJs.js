var Socket = new WebSocket("wss://socket.bittrex.com/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=RUQEjFaeTkAQVSvlfE1JouRPHFq9JorlwboVHo3DbizRlT0dafUaRHF510MIfbtcJW5HnqhjlIvosGsCuogAjipV19bcJtQobl475E8HTolI88jov0zNnEsIH63FwOOOPcHMOQ%3D%3D&connectionData=%5B%7B%22name%22%3A%22corehub%22%7D%5D&tid=7");
var currentObj = {};
var eleObj = {};
var currentS30 = [], currentM1 = [], currentM5 = {}, currentM15 = {}, currentM30 = {}, currentH1 = {}, currentH2 = {};
var triggerM1 = false, triggerS30 = false;
var countM = 5;
var realtimeM1 = {};
var arrayEle = ['S30', 'M1', 'M5', 'M15', 'M30', 'H1', 'H2'];


$(document).ready(function () {
    var $table = $('#demo');
    $table.floatThead({
        position: 'fixed'
    });
    // Socket.onmessage();
    $('#hideMPrice').click(function () {
        $.each(arrayEle, function (index, value) {
            $('.averagePrice' + value).each(function () {
                $(this).toggle();
            })
        });
    });

    $('#hideMVolume').click(function () {
        $.each(arrayEle, function (index, value) {
            $('.volume' + value).each(function () {
                $(this).toggle();
            })
        });
    });

    $('#hideMOrderBuy').click(function () {
        $.each(arrayEle, function (index, value) {
            $('.openBuyOrder' + value).each(function () {
                $(this).toggle();
            })
        });
    });

    $('#hideMOrderSell').click(function () {
        // $('th:nth-child(n+3):nth-child(-n+6)').hide();
        $.each(arrayEle, function (index, value) {
            $('.openSellOrder' + value).each(function () {
                $(this).toggle();
            })
        });
    });
    getMarket();
});

Socket.onmessage = function (evt) {
    var obj = JSON.parse(evt.data);
    var preData;

    if (obj === undefined || $.isEmptyObject(obj)) {
        //do nothing
    }
    else if (obj.M.length == 0) {
        //do nothing
    }
    else {
        preData = obj.M[0].A[0].Deltas;

        // console.log(currentObj["BTC-STRAT"].Last);
        console.log(Object.keys(currentObj).length + "current");
        // console.log(Object.keys(currentM1).length + "M1");
        // console.log(currentM1);
        currentS30.push(preData);
        currentM1.push(preData);
        // console.log(currentM1);

        if (triggerS30) {
            renderTableMinutes(currentS30[0], '', 'S30', '.averagePrice', '.volume', '.openBuyOrder', '.openSellOrder');
            currentS30.splice(0, 1);
        }

        if (triggerM1) {
            renderTableMinutesFix(currentM1[0], 'S30', 'M1', '.averagePriceS30', '.volumeS30', '.openBuyOrderS30', '.openSellOrderS30', 'M5', '.openBuyOrderM1', '.openSellOrderM1', '.averagePriceM1', '.volumeM1');
            currentM1.splice(0, 1);
            // console.log("done");
        }

        renderTable(preData);
        // $('tr').click(borderClick);
        // }
    }
};

function getMarket() {
    $.get("https://files.coinmarketcap.com/generated/stats/global.json")
        .then(function (data) {
            console.log(data);
            // // var obj = JSON.parse(data);
            var totalMarket = data.total_market_cap_by_available_supply_usd.toLocaleString(
                undefined, // use a string like 'en-US' to override browser locale
                {minimumFractionDigits: 0}
            );
            var totalVol = data.total_volume_usd.toLocaleString(
                undefined, // use a string like 'en-US' to override browser locale
                {minimumFractionDigits: 0}
            );
            //
            $('.totalMarket').text(totalMarket);
            $('.totalVol').text(totalVol);
            $('.totalPercent').text(data.bitcoin_percentage_of_market_cap.toFixed(2));
        });
}
function renderTable(current) {

    $.each(current, function (key, value) {
        // console.log(value.Last);
        currentObj[value.MarketName] = value;
        // eleObj[value.MarketName] = value;

        if ($('#' + value.MarketName).length == 0) {
            $('#table').append("<tr id=" + value.MarketName + "></tr>");
            $('#' + value.MarketName).append("<td class='name'><a target='_blank' " + "href='https://bittrex.com/Market/Index?MarketName=" + value.MarketName + "'>" + value.MarketName + "</a></td>");
            $('#' + value.MarketName).append("<td class='last'>" + value.Last + "</td>");

            $('#' + value.MarketName).append("<td class='averagePrice'><span class='averageText'>" + averagePrice(value) + "</span><br><span class='conclude'></span></td>");
            $('#' + value.MarketName).append("<td class='averagePriceS30'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='averagePriceM1'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='averagePriceM5'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='averagePriceM15'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='averagePriceM30'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='averagePriceH1'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='averagePriceH2'><span class='averageText'></span><br><span class='conclude'></td>");

            $('#' + value.MarketName).append("<td class='prevDay'>" + prevDay(value) + "%</td>");

            $('#' + value.MarketName).append("<td class='volume'><span class='averageText'>" + value.BaseVolume.toFixed(2) + "</span><br><span class='conclude'></span></td>");
            $('#' + value.MarketName).append("<td class='volumeS30'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='volumeM1'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='volumeM5'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='volumeM15'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='volumeM30'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='volumeH1'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='volumeH2'><span class='averageText'></span><br><span class='conclude'></td>");

            $('#' + value.MarketName).append("<td class='openBuyOrder'><span class='averageText'>" + value.OpenBuyOrders + "</span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openBuyOrderS30'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openBuyOrderM1'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openBuyOrderM5'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openBuyOrderM15'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openBuyOrderM30'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openBuyOrderH1'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openBuyOrderH2'><span class='averageText'></span><br><span class='conclude'></td>");

            $('#' + value.MarketName).append("<td class='openSellOrder'><span class='averageText'>" + value.OpenSellOrders + "</span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openSellOrderS30'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openSellOrderM1'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openSellOrderM5'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openSellOrderM15'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openSellOrderM30'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openSellOrderH1'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openSellOrderH2'><span class='averageText'></span><br><span class='conclude'></td>");

            $('#' + value.MarketName).append("<td class='orderAlert'></td>");
            $('#' + value.MarketName).append("<td class='high'>" + value.High.toFixed(8) + "</td>");
            $('#' + value.MarketName).append("<td class='low'>" + value.Low.toFixed(8) + "</td>");
            $('#' + value.MarketName).append("<td class='ask'>" + value.Ask + "</td>");
            $('#' + value.MarketName).append("<td class='bid'>" + value.Bid + "</td>");
            $('#' + value.MarketName).append("<td class='spread'>" + spread(value.Ask, value.Bid, value) + "%</td>");
            $('#' + value.MarketName).append("<td class='priceAlert'></td>");

            eleObj[value.MarketName] = $('#' + value.MarketName);
        }
        else {
            eleObj[value.MarketName].children('.last').text(value.Last);
            eleObj[value.MarketName].children('.averagePrice').children('.averageText').text(averagePrice(value));
            // eleObj[value.MarketName].children('.averagePriceS30').text();
            // eleObj[value.MarketName].children('.averagePriceM1').text();
            eleObj[value.MarketName].children('.prevDay').text(prevDay(value) + "%");
            eleObj[value.MarketName].children('.volume').children('.averageText').text(value.BaseVolume.toFixed(2));
            // eleObj[value.MarketName].children('.volumeM1').text();
            eleObj[value.MarketName].children('.openBuyOrder').children('.averageText').text(value.OpenBuyOrders);
            // eleObj[value.MarketName].children('.openBuyOrderM1').text();
            eleObj[value.MarketName].children('.openSellOrder').children('.averageText').text(value.OpenSellOrders);
            // eleObj[value.MarketName].children('.openSellOrderM1').text();
            eleObj[value.MarketName].children('.high').text(value.High.toFixed(8));
            eleObj[value.MarketName].children('.low').text(value.Low.toFixed(8));
            eleObj[value.MarketName].children('.ask').text(value.Ask);
            eleObj[value.MarketName].children('.spread').text(spread(value.Ask, value.Bid, value) + "%");

            priceAlert(value);
            orderAlert(value);
        }
    });
}

setTimeout(function () {
    triggerS30 = true;
}, 30000);
setTimeout(function () {
    triggerM1 = true;
}, 60000);
setTimeout(function () {
    currentM5 = R.clone(currentObj);
    currentM15 = R.clone(currentObj);
    currentM30 = R.clone(currentObj);
    currentH1 = R.clone(currentObj);
    currentH2 = R.clone(currentObj);
    goM5();
}, 300000);

function renderTableMinutes(currentM, classrender, classname, classprice, classvolume, classopenbuy, classopensell) {
    $.each(currentM, function (key, value) {
        eleObj[value.MarketName].children('.averagePrice' + classname).children('.averageText').text(averagePrice(value));
        eleObj[value.MarketName].children('.volume' + classname).children('.averageText').text(value.BaseVolume.toFixed(2));
        eleObj[value.MarketName].children('.openBuyOrder' + classname).children('.averageText').text(value.OpenBuyOrders);
        eleObj[value.MarketName].children('.openSellOrder' + classname).children('.averageText').text(value.OpenSellOrders);

        averageColor(Number(eleObj[value.MarketName].children('.averagePrice' + classrender).children('.averageText').text()), averagePrice(value), value, classprice, 0.3);
        averageColor(Number(eleObj[value.MarketName].children('.volume' + classrender).children('.averageText').text()), value.BaseVolume, value, classvolume, 0.2);
        BuyColor(Number(eleObj[value.MarketName].children('.openBuyOrder' + classrender).children('.averageText').text()), value.OpenBuyOrders, value, classopenbuy);
        SellColor(Number(eleObj[value.MarketName].children('.openSellOrder' + classrender).children('.averageText').text()), value.OpenSellOrders, value, classopensell);
        alertPump(value);
    });
}

function renderTableMinutesFix(currentM, classrender, classname, classprice, classvolume, classopenbuy, classopensell, classrenderlast, classopenbuylast, classopenselllast, classaveragelast, classvolumelast) {
    $.each(currentM, function (key, value) {
        eleObj[value.MarketName].children('.averagePrice' + classname).children('.averageText').text(averagePrice(value));
        eleObj[value.MarketName].children('.volume' + classname).children('.averageText').text(value.BaseVolume.toFixed(2));
        eleObj[value.MarketName].children('.openBuyOrder' + classname).children('.averageText').text(value.OpenBuyOrders);
        eleObj[value.MarketName].children('.openSellOrder' + classname).children('.averageText').text(value.OpenSellOrders);

        averageColor(Number(eleObj[value.MarketName].children('.averagePrice' + classrender).children('.averageText').text()), averagePrice(value), value, classprice, 0.5);
        averageColor(averagePrice(value), Number(eleObj[value.MarketName].children('.averagePrice' + classrenderlast).children('.averageText').text()), value, classaveragelast, 0.5);

        averageColor(Number(eleObj[value.MarketName].children('.volume' + classrender).children('.averageText').text()), value.BaseVolume, value, classvolume, 0.4);
        averageColor(value.BaseVolume, Number(eleObj[value.MarketName].children('.volume' + classrenderlast).children('.averageText').text()), value, classvolumelast, 0.4);

        BuyColor(Number(eleObj[value.MarketName].children('.openBuyOrder' + classrender).children('.averageText').text()), value.OpenBuyOrders, value, classopenbuy);
        BuyColor(value.OpenBuyOrders, Number(eleObj[value.MarketName].children('.openBuyOrder' + classrenderlast).children('.averageText').text()), value, classopenbuylast);

        SellColor(Number(eleObj[value.MarketName].children('.openSellOrder' + classrender).children('.averageText').text()), value.OpenSellOrders, value, classopensell);
        SellColor(value.OpenSellOrders, Number(eleObj[value.MarketName].children('.openSellOrder' + classrenderlast).children('.averageText').text()), value, classopenselllast);
    });
}

function goM5() {
    setInterval(function () {
        getMarket();
        renderTableMinutesFix(currentM5, 'M1', 'M5', '.averagePriceM1', '.volumeM1', '.openBuyOrderM1', '.openSellOrderM1', 'M15', '.openBuyOrderM5', '.openSellOrderM5', '.averagePriceM5', '.volumeM5');
        currentM5 = R.clone(currentObj);
        console.log(Object.keys(currentM5).length + "M5 repeat");
        if (countM % 15 == 0) {
            renderTableMinutesFix(currentM15, 'M5', 'M15', '.averagePriceM5', '.volumeM5', '.openBuyOrderM5', '.openSellOrderM5', 'M30', '.openBuyOrderM15', '.openSellOrderM15', '.averagePriceM15', '.volumeM15');
            currentM15 = R.clone(currentObj);
        }
        if (countM % 30 == 0) {
            renderTableMinutesFix(currentM30, 'M15', 'M30', '.averagePriceM15', '.volumeM15', '.openBuyOrderM15', '.openSellOrderM15', 'H1', '.openBuyOrderM30', '.openSellOrderM30', '.averagePriceM30', '.volumeM30');
            currentM30 = R.clone(currentObj);
        }
        if (countM % 60 == 0) {
            renderTableMinutesFix(currentH1, 'M30', 'H1', '.averagePriceM30', '.volumeM30', '.openBuyOrderM30', '.openSellOrderM30', 'H2', '.openBuyOrderH1', '.openBuyOrderH1', '.averagePriceH1', '.volumeH1');
            currentH1 = R.clone(currentObj);
        }
        if (countM % 120 == 0) {
            renderTableMinutes(currentH2, 'H1', 'H2', '.averagePriceH1', '.volumeH1', '.openBuyOrderH1', '.openSellOrderH1');
            currentH2 = R.clone(currentObj);
        }
        countM += 5;
    }, 300000);
}

function deleteColor(marketname, classname) {
    $('#' + marketname + " " + classname).removeClass("green-color");
    $('#' + marketname + " " + classname).removeClass("danger-color");
    $('#' + marketname + " " + classname).removeClass("info-color");
    // $('#' + marketname + " ." + classname).text();
}

function prevDay(obj) {
    if (obj === undefined) {
        //do nothing
    }
    else {
        deleteColor(obj.MarketName, ".prevDay");
        var temp = ((100 / obj.PrevDay * obj.Last) - 100).toFixed(1);
        if (temp >= 10) {
            $('#' + obj.MarketName + " .prevDay").addClass("green-color");
            return temp;
        }
        if (temp <= -10) {
            $('#' + obj.MarketName + " .prevDay").addClass("danger-color");
            return temp;
        }
        return temp;
    }
}

function averagePrice(obj) {
    return ((obj.Bid + obj.Ask) / 2).toFixed(8);
}

function averageColor(number, numberS, obj, classname, percent) {
    if (obj === undefined) {
        //do nothing
    }
    else {
        deleteColor(obj.MarketName, classname);
        var temp = ((100 / numberS * number) - 100).toFixed(2);
        if (temp > percent) {
            eleObj[obj.MarketName].children(classname).addClass("green-color");
            eleObj[obj.MarketName].children(classname).children('.conclude').text("Tăng " + temp + "%");
        }
        else if (temp < (-1 * percent)) {
            eleObj[obj.MarketName].children(classname).addClass("danger-color");
            eleObj[obj.MarketName].children(classname).children('.conclude').text("Giảm " + temp + "%");
        }
        else {
            eleObj[obj.MarketName].children(classname).addClass("info-color");
            eleObj[obj.MarketName].children(classname).children('.conclude').text("Chênh " + temp + "%");
        }
    }
}

function BuyColor(number, numberS, obj, classname) {
    if (obj === undefined) {
        //do nothing
    }
    else {
        deleteColor(obj.MarketName, classname);
        var temp = number - numberS;
        if (number > numberS) {
            eleObj[obj.MarketName].children(classname).addClass("green-color");
            eleObj[obj.MarketName].children(classname).children('.conclude').text(" Tăng " + temp);
        }
        else if (number < numberS) {
            eleObj[obj.MarketName].children(classname).addClass("danger-color");
            eleObj[obj.MarketName].children(classname).children('.conclude').text(" Giảm " + Math.abs(temp));
        }
        else {
            eleObj[obj.MarketName].children(classname).addClass("info-color");
            eleObj[obj.MarketName].children(classname).children('.conclude').text('');
        }
    }
}

function SellColor(number, numberS, obj, classname) {
    if (obj === undefined) {
        //do nothing
    }
    else {
        deleteColor(obj.MarketName, classname);
        var temp = number - numberS;
        if (number < numberS) {
            eleObj[obj.MarketName].children(classname).addClass("green-color");
            eleObj[obj.MarketName].children(classname).children('.conclude').text(" Giảm " + Math.abs(temp));
        }
        else if (number > numberS) {
            eleObj[obj.MarketName].children(classname).addClass("danger-color");
            eleObj[obj.MarketName].children(classname).children('.conclude').text(" Tăng " + temp);
        }
        else {
            eleObj[obj.MarketName].children(classname).addClass("info-color");
            eleObj[obj.MarketName].children(classname).children('.conclude').text('');
        }
    }
}

function spread(number1, number2, obj) {
    $('#' + obj.MarketName + " .spread").removeClass("green-color");
    if (((100 * Math.max(number1, number2)) / Math.min(number1, number2) - 100).toFixed(2) >= 5) {
        $('#' + obj.MarketName + " .spread").addClass("green-color");
        return ((100 * Math.max(number1, number2)) / Math.min(number1, number2) - 100).toFixed(2);
    }
    else {
        return ((100 * Math.max(number1, number2)) / Math.min(number1, number2) - 100).toFixed(2);
    }
}

function priceAlert(obj) {
    deleteColor(obj.MarketName, '.priceAlert');
    if (obj.Last <= obj.Low) {
        $('#' + obj.MarketName + " .priceAlert").addClass("green-color").text("Đáy mới \n" + obj.Last);
    }
    else if (obj.Last >= obj.High) {
        $('#' + obj.MarketName + " .priceAlert").addClass("info-color").text("Đỉnh mới \n" + obj.Last);
    }
}

function orderAlert(obj) {
    if ((obj.OpenBuyOrders - obj.OpenSellOrders) >= 0)
        $('#' + obj.MarketName + ' .orderAlert').addClass("green-color").text("Strong buy");
    else
        $('#' + obj.MarketName + ' .orderAlert').removeClass("green-color").text('');
}

function borderClick() {
    $('tr').removeClass('border-blue');
    $(this).addClass("border-blue");
}

function alertPump(obj) {
    if (eleObj[obj.MarketName].children('.volumeS30').hasClass('green-color')
        && eleObj[obj.MarketName].children('.openBuyOrderS30').hasClass('green-color')
        && eleObj[obj.MarketName].children('.openSellOrderS30').hasClass('green-color')) {
        $.notify(obj.MarketName + " Đang Tăng từ giá " + obj.Last, "success");
    }

    if (eleObj[obj.MarketName].children('.volumeS30').hasClass('danger-color')
        && eleObj[obj.MarketName].children('.openBuyOrderS30').hasClass('danger-color')
        && eleObj[obj.MarketName].children('.openSellOrderS30').hasClass('danger-color')) {
        $.notify(obj.MarketName + " Đang Giảm từ giá " + obj.Last, "warn");
    }

    if (eleObj[obj.MarketName].children('.volume').hasClass('green-color')
        && eleObj[obj.MarketName].children('.openBuyOrder').hasClass('green-color')
        && eleObj[obj.MarketName].children('.openSellOrder').hasClass('green-color')) {
        $.notify(obj.MarketName + "  Đang Tăng lúc này giá " + obj.Last, "info");
    }

    if (eleObj[obj.MarketName].children('.volume').hasClass('danger-color')
        && eleObj[obj.MarketName].children('.openBuyOrder').hasClass('danger-color')
        && eleObj[obj.MarketName].children('.openSellOrder').hasClass('danger-color')) {
        $.notify(obj.MarketName + "  Đang Giảm lúc này giá " + obj.Last, "warn");
    }
}