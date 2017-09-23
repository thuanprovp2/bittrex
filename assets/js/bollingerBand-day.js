/**
 * Created by thuan on 9/19/2017.
 */
var Socket = new WebSocket("wss://socket.bittrex.com/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=pshj7pdH1eXBGKVEFRvvq81e%2F0J6V201m7uVRGAlEgiUM3qAvkyKjVHNQtEhc%2Fdvx8pXzqarx%2F6sPuRy5psmtNHRIUobeawZckb0%2F%2BTHv7uzYYAHE37uR1faTQxpEQXpdNv9RA%3D%3D&connectionData=%5B%7B%22name%22%3A%22corehub%22%7D%5D&tid=9");
var eleObj = {};
var listData = {};
var loadFullData = false;
var listCoin = [
        "BTC-AMP", "BTC-AGRS", "BTC-ARK", "BTC-BLOCK", "BTC-BRK", "BTC-BRX", "BTC-BTS", "BTC-CANN", "BTC-CPC", "BTC-DAR", "BTC-DASH", "BTC-DCR",
        "BTC-ETH", "BTC-EXCL", "BTC-GAM", "BTC-GBG", "BTC-GRS", "BTC-GUP", "BTC-IOC", "BTC-IOP", "BTC-LTC", "BTC-NLG", "BTC-NXC", "BTC-PIVX",
        "BTC-PTOY", "BTC-QWARK", "BTC-RADS", "BTC-REP", "BTC-SIB", "BTC-SLS", "BTC-START", "BTC-STRAT", "BTC-SWIFT", "BTC-SYS", "BTC-TRIG", "BTC-TRST",
        "BTC-TX", "BTC-XCP", "BTC-XEL", "BTC-XMR", "BTC-XVG", "BTC-ZCL", "USDT-BCC", "USDT-ETH", "USDT-NEO", "USDT-XMR", "USDT-XRP", "USDT-ZEC",
        "BTC-ADT", "BTC-BAY", "BTC-BLK", "BTC-DGD", "BTC-EDG", "BTC-GCR", "BTC-GNO", "BTC-HMQ", "BTC-KORE", "BTC-LBC", "BTC-LSK", "BTC-MONA",
        "BTC-MUE", "BTC-NXS", "BTC-NXT", "BTC-OMG", "BTC-PAY", "BTC-PINK", "BTC-QRL", "BTC-QTUM", "BTC-SAFEX", "BTC-SEQ", "BTC-SHIFT", "BTC-SNRG",
        "BTC-SPR", "BTC-SYNX", "BTC-VTC", "BTC-ARDR", "BTC-BCC", "BTC-BITB", "BTC-CLOAK", "BTC-DCT", "BTC-DMD", "BTC-DOPE", "BTC-DYN", "BTC-LMC",
        "BTC-LUN", "BTC-MCO", "BTC-MLN", "BTC-NAV", "BTC-NEO", "BTC-NMR", "BTC-OK", "BTC-RISE", "BTC-STEEM", "BTC-SWT", "BTC-VIA", "BTC-XWC",
        "USDT-ETC", "BTC-ADX", "BTC-CURE", "BTC-DOGE", "BTC-ERC", "BTC-ZEC", "USDT-DASH", "BTC-KMD", "BTC-WAVES", "USDT-OMG", "BTC-APX",
        "BTC-EMC", "BTC-SC", "BTC-BAT", "BTC-BTA", "BTC-XEM", "USDT-BTC", "BTC-ABY", "BTC-CVC", "BTC-EMC2", "BTC-GEO", "BTC-MTL", "BTC-MUSIC",
        "BTC-PKB", "BTC-XST", "BTC-XZC", "BTC-BSD", "BTC-SNT", "BTC-ANT", "BTC-GBYTE", "BTC-TIME", "BTC-XRP", "BTC-NEOS", "BTC-RLC", "BTC-GAME",
        "BTC-EBST", "BTC-1ST", "BTC-MAID", "BTC-VOX", "BTC-GRC", "BTC-ETC", "BTC-EXP", "BTC-MYST", "BTC-STORJ", "BTC-XVC", "BTC-GNT", "BTC-FTC",
        "BTC-XLM", "USDT-LTC", "BTC-CRB", "BTC-INCNT", "BTC-THC", "BTC-BTCD", "BTC-SLR", "BTC-VRC", "BTC-XDN", "BTC-VTR", "BTC-SNGLS", "BTC-PPC",
        "BTC-SBD", "BTC-CFI", "BTC-CLAM", "BTC-CRW", "BTC-ZEN", "BTC-SPHR", "BTC-UNB", "BTC-FUN", "BTC-CLUB", "BTC-WINGS", "BTC-DGB", "BTC-XAUR",
        "BTC-POT", "BTC-UBQ", "BTC-GLD", "BTC-PDC", "BTC-TRUST", "BTC-EFL", "BTC-BCY", "BTC-BNT", "BTC-FCT", "BTC-RDD", "BTC-XMG", "BTC-COVAL",
        "BTC-TKN", "BTC-FAIR", "BTC-FLO", "BTC-PTC", "BTC-OMNI", "BTC-LGD", "BTC-AEON", "BTC-INFX", "BTC-AUR", "BTC-VRM", "BTC-XMY", "BTC-UNO",
        "BTC-BYC", "BTC-ION", "BTC-TKS", "BTC-RBY", "BTC-MEME", "BTC-BURST", "BTC-2GIVE", "BTC-FLDC", "BTC-NBT", "BTC-EGC", "BTC-GOLOS", "BTC-ENRG",
        "BTC-DTB", "BTC-BLITZ", "BTC-PART", "BTC-DRACO", "FINISH"
    ]
    // ,"ETH-WAVES", "ETH-ADT", "ETH-BCC", "ETH-BNT", "ETH-CRB", "ETH-CVC", "ETH-DASH", "ETH-GNO",
    // "ETH-GNT", "ETH-LUN", "ETH-NEO", "ETH-NMR", "ETH-PAY", "ETH-PTOY", "ETH-QRL", "ETH-STRAT", "ETH-TIME", "ETH-ZEC", "ETH-BTS", "ETH-CFI",
    // "ETH-DGB", "ETH-FCT", "ETH-FUN", "ETH-ADX", "ETH-LTC", "ETH-GUP", "ETH-MTL", "ETH-SC", "ETH-SNGLS", "ETH-XEM", "ETH-ETC", "ETH-MYST",
    // "ETH-STORJ", "ETH-TKN", "ETH-TRST", "ETH-XLM", "ETH-XMR", "ETH-DGD", "ETH-HMQ", "ETH-OMG", "ETH-SNT", "ETH-MCO", "ETH-1ST", "ETH-RLC",
    // "ETH-QTUM", "ETH-WINGS", "ETH-BAT", "ETH-XRP", "ETH-REP", "ETH-LGD", "ETH-ANT"
;
var indexListCoin = 0;

$(document).ready(function () {
    // console.time('getFullTick');
    getFullTick(listCoin[indexListCoin]);
    // console.timeEnd('getFullTick');

    var $table = $('#demo');
    $table.floatThead({
        position: 'fixed'
    });
});

Socket.onmessage = function (evt) {
    var obj = JSON.parse(evt.data);

    if (obj === undefined || $.isEmptyObject(obj)) {
        //do nothing
    }
    else if (obj.M.length == 0) {
        //do nothing
    }
    else {

        rendertable(obj.M[0].A[0].Deltas);
    }
    // console.log(listData);
};

function rendertable(obj) {
    $.each(obj, function (key, value) {
        if ((value.MarketName).indexOf("ETH-") >= 0) {
            //do nothing
        }
        else {
            if ($('#' + value.MarketName).length == 0) {
                $('#table').append("<tr id=" + value.MarketName + "></tr>");
                $('#' + value.MarketName).append("<td class='name'><a target='_blank' " + "href='https://bittrex.com/Market/Index?MarketName=" + value.MarketName + "'>" + value.MarketName + "</a></td>");
                $('#' + value.MarketName).append("<td class='last'>" + value.Last + "</td>");
                $('#' + value.MarketName).append("<td class='sma'></td>");
                $('#' + value.MarketName).append("<td class='upperBand'></td>");
                $('#' + value.MarketName).append("<td class='lowerBand'></td>");

                eleObj[value.MarketName] = $('#' + value.MarketName);
            }
            else {
                eleObj[value.MarketName].children('.last').text(value.Last);

                if (loadFullData) {
                    calculateBB(listData[value.MarketName], value.MarketName);
                    // alertBB(value.MarketName);
                }
            }
        }
    })
}

function renderBB(marketName, sma, upperBand, lowerBand) {
    eleObj[marketName].children('.sma').text(sma);
    eleObj[marketName].children('.upperBand').text(upperBand);
    eleObj[marketName].children('.lowerBand').text(lowerBand);
    deleteColor(marketName, ".upperBand");
    deleteColor(marketName, ".lowerBand");
    if (eleObj[marketName].children('.last').text() >= upperBand) {
        eleObj[marketName].children('.upperBand').addClass("info-color");
    }
    if (eleObj[marketName].children('.last').text() <= lowerBand) {
        eleObj[marketName].children('.lowerBand').addClass("green-color");
    }

}

function getFullTick(name) {
    if (name == "FINISH") {
        console.log("Load data completed");
        console.log(listData);
        loadFullData = true;

        indexListCoin = 0;
        getLatestTick(listCoin[indexListCoin]);
    }
    else {
        var link = "https://cors.io/?https://bittrex.com/Api/v2.0/pub/market/GetTicks?marketName=" + name + "&tickInterval=day";
        $.get(link)
            .then(function (data) {
                var dataC = JSON.parse(data);
                if (Object.keys(dataC.result).length < 20) {
                    //do nothing
                    listData[name] = ["DATA LOST"];
                    indexListCoin++;
                    getFullTick(listCoin[indexListCoin]);
                }
                else {
                    console.log(dataC);
                    dataC.result.splice(0, dataC.result.length - 20);                   //xóa còn đúng 20 dữ liệu mới nhất
                    listData[name] = dataC.result;                                      //add vào listData
                    console.log(link);
                    console.log(listData[name]);
                    indexListCoin++;
                    getFullTick(listCoin[indexListCoin]);
                }
            })
            .catch(function (error) {
                console.log(error);
                getFullTick(listCoin[indexListCoin]);
            })
    }
}

function getLatestTick(name) {
    if (name == "FINISH") {
        console.log("Load data latest completed");

        indexListCoin = 0;
        getLatestTick(listCoin[indexListCoin]);
    }
    else {
        var link = "https://cors.io/?https://bittrex.com/Api/v2.0/pub/market/GetLatestTick?marketName=" + name + "&tickInterval=day";
        $.get(link)
            .then(function (data) {
                var dataC = JSON.parse(data);
                if (dataC.result[0].T == listData[name][19].T) {
                    listData[name][19] = dataC.result[0];                   //thay lastest data vào phần tử cuối
                    console.log(link);
                    console.log(listData[name]);
                }
                else {
                    listData[name].push(dataC.result[0]);                   //thêm giá trị mới nhất vào
                    listData[name].splice(0, 1);                             // xóa phần tử đầu tiên
                    console.log(link);
                    console.log(listData[name]);
                }

                indexListCoin++;
                getLatestTick(listCoin[indexListCoin]);
            })
            .catch(function (error) {
                console.log(error);
                getLatestTick(listCoin[indexListCoin]);
            })
    }
}

function calculateBB(obj, marketName) {
    if (obj[0] == "DATA LOST") {
        //do nothing
    }
    var sum = 0;
    $.each(obj, function (key, value) {
        sum += value.C;
    });
    var sma = Number((sum / 20).toFixed(8));
    var sumphuongsai = 0;
    $.each(obj, function (key, value) {
        sumphuongsai += Math.pow(value.C - sma, 2);
    });
    var phuongsai = sumphuongsai / 20;
    var dolechchuan = Math.sqrt(phuongsai);
    var upperBand = (sma + 2 * dolechchuan).toFixed(8);
    var lowerBand = (sma - 2 * dolechchuan).toFixed(8);

    renderBB(marketName, sma, upperBand, lowerBand);
    // console.log(" Dây giữa " + sma);
    // console.log(" Dây trên " + upperBand);
    // console.log(" Dây dưới " + lowerBand);
}

function deleteColor(MarketName, classname) {
    eleObj[MarketName].children(classname).removeClass("green-color");
    eleObj[MarketName].children(classname).removeClass("info-color");
}

function alertBB(MarketName) {
    var tempD = (100 / eleObj[MarketName].children('.lowerBand').text() * eleObj[MarketName].children('.last').text() - 100).toFixed(1);
    var tempT = (100 / eleObj[MarketName].children('.upperBand').text() * eleObj[MarketName].children('.last').text() - 100).toFixed(1);
    if (tempD <= -3) {
        $.notify(MarketName + " Đang nằm dưới BB " + tempD + " %", "success");
    }
    if (tempT >= 3) {
        $.notify(MarketName + " Đang nằm trên BB " + tempT + " %", "warn");
    }
}