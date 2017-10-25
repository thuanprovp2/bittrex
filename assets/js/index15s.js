/**
 * Created by thuan on 10/16/2017.
 */

var Socket = new WebSocket("wss://socket.bittrex.com/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=72RyeH5omW%2FzL7fxiASB%2FRbHP89KCfp05gKr%2BTrDjXy%2BINBjpVL3KBkuZx7%2FVSWjLJaeDr8zpCQ2Y8ba97bi%2BbsXq2AzqGWfnAslhHBTEaIkCcyiIP2cWAqMz%2FFOiQYtdIMCGQ%3D%3D&connectionData=%5B%7B%22name%22%3A%22corehub%22%7D%5D&tid=5");
var eleObj = {};
var currentS15 = [], currentS30 = [], currentM1 = [];
var triggerS15 = false, triggerS30 = false, triggerM1 = false;

$(document).ready(function () {
    var $table = $('#demo');
    $table.floatThead({
        position: 'fixed'
    });

    /*add style notification*/

    /*End add style notification*/
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

        currentS15.push(preData);
        currentS30.push(preData);
        currentM1.push(preData);

        renderTable(preData);
        if (triggerS15) {
            renderTableMinutes(currentS15[0], 'S15', '.averagePrice', '.volume', '.openBuyOrder', '.openSellOrder', '');
            currentS15.splice(0, 1);
        }
        if (triggerS30) {
            renderTableMinutes(currentS30[0], 'S30', '.averagePrice', '.volume', '.openBuyOrder', '.openSellOrder', 'S15');
            currentS30.splice(0, 1);
        }
        if (triggerM1) {
            renderTableMinutes(currentM1[0], 'M1', '.averagePrice', '.volume', '.openBuyOrder', '.openSellOrder', 'S30');
            currentM1.splice(0, 1);
        }
    }
};

/*Delay time */
setTimeout(function () {
    triggerS15 = true;
}, 15000);
setTimeout(function () {
    triggerS30 = true;
}, 30000);
setTimeout(function () {
    triggerM1 = true;
}, 60000);
/*End delay time*/

function renderTable(current) {
    console.log("Running....");
    $.each(current, function (key, value) {

        if ($('#' + value.MarketName).length == 0) {
            $('#table').append("<tr id=" + value.MarketName + "></tr>");
            $('#' + value.MarketName).append("<td class='name'><a target='_blank' " + "href='https://bittrex.com/Market/Index?MarketName=" + value.MarketName + "'>" + value.MarketName + "</a></td>");
            $('#' + value.MarketName).append("<td class='last'>" + value.Last + "</td>");

            $('#' + value.MarketName).append("<td class='averagePrice'><span class='averageText'>" + averagePrice(value) + "</span><br><span class='conclude'></span></td>");
            $('#' + value.MarketName).append("<td class='averagePriceS15'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='averagePriceS30'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='averagePriceM1'><span class='averageText'></span><br><span class='conclude'></td>");

            $('#' + value.MarketName).append("<td class='prevDay'></td>");

            $('#' + value.MarketName).append("<td class='volume'><span class='averageText'>" + value.BaseVolume.toFixed(2) + "</span><br><span class='conclude'></span></td>");
            $('#' + value.MarketName).append("<td class='volumeS15'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='volumeS30'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='volumeM1'><span class='averageText'></span><br><span class='conclude'></td>");

            $('#' + value.MarketName).append("<td class='openBuyOrder'><span class='averageText'>" + value.OpenBuyOrders + "</span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openBuyOrderS15'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openBuyOrderS30'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openBuyOrderM1'><span class='averageText'></span><br><span class='conclude'></td>");

            $('#' + value.MarketName).append("<td class='openSellOrder'><span class='averageText'>" + value.OpenSellOrders + "</span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openSellOrderS15'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openSellOrderS30'><span class='averageText'></span><br><span class='conclude'></td>");
            $('#' + value.MarketName).append("<td class='openSellOrderM1'><span class='averageText'></span><br><span class='conclude'></td>");

            $('#' + value.MarketName).append("<td class='orderAlert'></td>");
            $('#' + value.MarketName).append("<td class='high'>" + value.High.toFixed(8) + "</td>");
            $('#' + value.MarketName).append("<td class='low'>" + value.Low.toFixed(8) + "</td>");
            $('#' + value.MarketName).append("<td class='ask'>" + value.Ask + "</td>");
            $('#' + value.MarketName).append("<td class='bid'>" + value.Bid + "</td>");
            $('#' + value.MarketName).append("<td class='spread'></td>");
            $('#' + value.MarketName).append("<td class='priceAlert'></td>");

            eleObj[value.MarketName] = $('#' + value.MarketName);
            eleObj[value.MarketName].children('.prevDay').text(prevDay(value) + "%");
            eleObj[value.MarketName].children('.spread').text(spread(value.Ask, value.Bid, value) + "%");
        }
        else {
            eleObj[value.MarketName].children('.last').text(value.Last);
            eleObj[value.MarketName].children('.averagePrice').children('.averageText').text(averagePrice(value));
            eleObj[value.MarketName].children('.volume').children('.averageText').text(value.BaseVolume.toFixed(2));
            eleObj[value.MarketName].children('.openBuyOrder').children('.averageText').text(value.OpenBuyOrders);
            eleObj[value.MarketName].children('.openSellOrder').children('.averageText').text(value.OpenSellOrders);
            eleObj[value.MarketName].children('.high').text(value.High.toFixed(8));
            eleObj[value.MarketName].children('.low').text(value.Low.toFixed(8));
            eleObj[value.MarketName].children('.ask').text(value.Ask);
            eleObj[value.MarketName].children('.spread').text(spread(value.Ask, value.Bid, value) + "%");

            priceAlert(value);
            orderAlert(value);
        }
    });
}

function renderTableMinutes(currentM, classnameM, classprice, classvolume, classopenbuy, classopensell, classCompare) {
    $.each(currentM, function (key, value) {
        var averagePriceVar = averagePrice(value);
        eleObj[value.MarketName].children('.averagePrice' + classnameM).children('.averageText').text(averagePriceVar);
        eleObj[value.MarketName].children('.volume' + classnameM).children('.averageText').text(value.BaseVolume.toFixed(2));
        eleObj[value.MarketName].children('.openBuyOrder' + classnameM).children('.averageText').text(value.OpenBuyOrders);
        eleObj[value.MarketName].children('.openSellOrder' + classnameM).children('.averageText').text(value.OpenSellOrders);

        averageColor(Number(eleObj[value.MarketName].children('.averagePrice' + classCompare).children('.averageText').text()), averagePriceVar, value.MarketName, classprice + classnameM, 0.3);
        averageColor(Number(eleObj[value.MarketName].children('.volume' + classCompare).children('.averageText').text()), value.BaseVolume.toFixed(2), value.MarketName, classvolume + classnameM, 0.2);
        BuyColor(Number(eleObj[value.MarketName].children('.openBuyOrder' + classCompare).children('.averageText').text()), value.OpenBuyOrders, value.MarketName, classopenbuy + classnameM);
        SellColor(Number(eleObj[value.MarketName].children('.openSellOrder' + classCompare).children('.averageText').text()), value.OpenSellOrders, value.MarketName, classopensell + classnameM);
        pumpVol(value.MarketName, value.Last);
        checkStrongBuy(value.MarketName, value.Last);
        checkPricePump(value.MarketName, value.Last);
        // pumpPrice(value.MarketName,value.Last);
    });
}

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

function averagePrice(obj) {
    return ((obj.Bid + obj.Ask) / 2).toFixed(8);
}

function prevDay(obj) {
    if (obj === undefined) {
        //do nothing
    }
    else {
        var temp = ((100 / obj.PrevDay * obj.Last) - 100).toFixed(1);
        if (temp >= 10) {
            eleObj[obj.MarketName].children('.prevDay').addClass("green-color");
            return temp;
        }
        if (temp <= -10) {
            eleObj[obj.MarketName].children('.prevDay').addClass("danger-color");
            return temp;
        }
        return temp;
    }
}

function deleteColor(marketname, classname) {
    eleObj[marketname].children(classname).removeClass("green-color");
    eleObj[marketname].children(classname).removeClass("danger-color");
    eleObj[marketname].children(classname).removeClass("info-color");
}

function spread(number1, number2, obj) {
    eleObj[obj.MarketName].children('.spread').removeClass("green-color");
    if (((100 * Math.max(number1, number2)) / Math.min(number1, number2) - 100).toFixed(2) >= 3) {
        eleObj[obj.MarketName].children('.spread').addClass("green-color");
        return ((100 * Math.max(number1, number2)) / Math.min(number1, number2) - 100).toFixed(2);
    }
    else {
        return ((100 * Math.max(number1, number2)) / Math.min(number1, number2) - 100).toFixed(2);
    }
}

function priceAlert(obj) {
    deleteColor(obj.MarketName, '.priceAlert');
    if (obj.Last <= obj.Low) {
        eleObj[obj.MarketName].children('.priceAlert').addClass("green-color").text("Đáy mới \n" + obj.Last);
    }
    else if (obj.Last >= obj.High) {
        eleObj[obj.MarketName].children('.priceAlert').addClass("info-color").text("Đỉnh mới \n" + obj.Last);
    }
}

function orderAlert(obj) {
    if ((obj.OpenBuyOrders - obj.OpenSellOrders) >= 0)
        eleObj[obj.MarketName].children('.orderAlert').addClass("green-color").text("Strong buy");
    else
        eleObj[obj.MarketName].children('.orderAlert').removeClass("green-color").text('');
}

function averageColor(number, numberS, MarketName, classname, percent) {
    deleteColor(MarketName, classname);
    var temp = ((100 / numberS * number) - 100).toFixed(2);
    if (temp >= percent) {
        eleObj[MarketName].children(classname).addClass("green-color");
        eleObj[MarketName].children(classname).children('.conclude').text("Tăng " + temp + "%");
    }
    else if (temp <= (-1 * percent)) {
        eleObj[MarketName].children(classname).addClass("danger-color");
        eleObj[MarketName].children(classname).children('.conclude').text("Giảm " + temp + "%");
    }
    else {
        eleObj[MarketName].children(classname).addClass("info-color");
        eleObj[MarketName].children(classname).children('.conclude').text("Chênh " + temp + "%");
    }
}

function BuyColor(number, numberS, MarketName, classname) {
    deleteColor(MarketName, classname);
    var temp = number - numberS;
    if (number > numberS) {
        eleObj[MarketName].children(classname).addClass("green-color");
        eleObj[MarketName].children(classname).children('.conclude').text(temp);
    }
    else if (number < numberS) {
        eleObj[MarketName].children(classname).addClass("danger-color");
        eleObj[MarketName].children(classname).children('.conclude').text(temp);
    }
    else {
        eleObj[MarketName].children(classname).addClass("info-color");
        eleObj[MarketName].children(classname).children('.conclude').text('0');
    }
}

function SellColor(number, numberS, MarketName, classname) {
    deleteColor(MarketName, classname);
    var temp = number - numberS;
    if (number < numberS) {
        eleObj[MarketName].children(classname).addClass("green-color");
        eleObj[MarketName].children(classname).children('.conclude').text(temp);
    }
    else if (number > numberS) {
        eleObj[MarketName].children(classname).addClass("danger-color");
        eleObj[MarketName].children(classname).children('.conclude').text(temp);
    }
    else {
        eleObj[MarketName].children(classname).addClass("info-color");
        eleObj[MarketName].children(classname).children('.conclude').text('0');
    }
}

function pumpVol(MarketName, lastPrice) {
    if (eleObj[MarketName].children('.volumeS15').hasClass('green-color')
        && eleObj[MarketName].children('.openBuyOrderS15').hasClass('green-color')
        && eleObj[MarketName].children('.openSellOrderS15').hasClass('green-color')) {
        if (MarketName.indexOf("ETH-") >= 0) {
            $.notify(MarketName + " Dự đoán ko thể tăng nữa ", "warn");
        }
        else {
            if (eleObj[MarketName].children('.averagePriceS15').hasClass('green-color')) {
                $.notify("Tiềm năng TĂNG " + MarketName + " Tăng so với 15s trước " + lastPrice, "info");
            }
            else {
                $.notify(MarketName + " Tăng so với 15s trước " + lastPrice, "info");
            }
        }
    }

    if (eleObj[MarketName].children('.volumeS30').hasClass('green-color')
        && eleObj[MarketName].children('.openBuyOrderS30').hasClass('green-color')
        && eleObj[MarketName].children('.openSellOrderS30').hasClass('green-color')) {

        if (MarketName.indexOf("ETH-") >= 0) {
            $.notify(MarketName + " Dự đoán ko thể tăng nữa ", "warn");
        }
        else {
            if (eleObj[MarketName].children('.averagePriceS15').hasClass('green-color')) {
                $.notify("Tiềm năng TĂNG " + MarketName + " Tăng so với 30s trước " + lastPrice, "success");
            }
            else {
                $.notify(MarketName + " Tăng so với 30s trước " + lastPrice, "success");
            }
        }
    }

    // if (eleObj[MarketName].children('.volumeS15').hasClass('danger-color')
    //     && eleObj[MarketName].children('.openBuyOrderS15').hasClass('danger-color')
    //     && eleObj[MarketName].children('.openSellOrderS15').hasClass('danger-color')) {
    //     $.notify(MarketName + " Giảm so với 15s trước " + lastPrice, "warn");
    // }
    //
    // if (eleObj[MarketName].children('.volumeS30').hasClass('danger-color')
    //     && eleObj[MarketName].children('.openBuyOrderS30').hasClass('danger-color')
    //     && eleObj[MarketName].children('.openSellOrderS30').hasClass('danger-color')) {
    //     $.notify(MarketName + " Giảm so với 30s trước " + lastPrice, "error");
    // }
}

function pumpPrice(MarketName, lastPrice) {
    if (eleObj[MarketName].children('.averagePriceS15').hasClass('green-color')
        && eleObj[MarketName].children('.averagePriceS30').hasClass('green-color')
    ) {
        $.notify(MarketName + " Giá S15 + S30 tăng " + lastPrice, "info");
    }

    if (eleObj[MarketName].children('.averagePriceS15').hasClass('danger-color')
        && eleObj[MarketName].children('.averagePriceS30').hasClass('danger-color')
    ) {
        $.notify(MarketName + " Giá S15 + S30 giảm " + lastPrice, "warn");
    }
}

function checkStrongBuy(MarketName, lastPrice) {
    if (MarketName.indexOf("ETH-") >= 0) {
        // do nothing
    }
    else {
        if (eleObj[MarketName].children('.openBuyOrderS30').children('.conclude').text() == ""
            || eleObj[MarketName].children('.openSellOrderS30').children('.conclude').text() == ""
            || eleObj[MarketName].children('.openSellOrderM1').children('.conclude').text() == "") {
            //do nothing
        }
        else {
            if (eleObj[MarketName].children('.openBuyOrderS15').hasClass('green-color')
                && eleObj[MarketName].children('.openBuyOrderS30').hasClass('green-color')
                && eleObj[MarketName].children('.openBuyOrderM1').hasClass('green-color')
                && (Number(eleObj[MarketName].children('.openBuyOrderS15').children('.conclude').text() - eleObj[MarketName].children('.openSellOrderS15').children('.conclude').text()) >= 0)
                && (Number(eleObj[MarketName].children('.openBuyOrderS30').children('.conclude').text() - eleObj[MarketName].children('.openSellOrderS30').children('.conclude').text()) >= 0)
                && (Number(eleObj[MarketName].children('.openBuyOrderS30').children('.conclude').text() - eleObj[MarketName].children('.openSellOrderS30').children('.conclude').text()) >= 0)
            ) {
                $.notify(MarketName + " Đang được BUY rất mạnh " + lastPrice, "info");
            }
        }
    }
}

function checkPricePump(MarketName, lastPrice) {
    if (eleObj[MarketName].children('.averagePriceM1').hasClass('.green-color')) {
        $.notify(MarketName + " Giá đang TĂNG so với 1 phút trước từ " + lastPrice, "success");
    }
}