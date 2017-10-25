/**
 * Created by thuan on 9/22/2017.
 */
var listData = {};
var eleObj = {};
var indexListCoin = 0;
var listCoin = [
    "BTC-AMP", "BTC-ARK", "BTC-BLOCK", "BTC-BRK", "BTC-BRX", "BTC-DASH", "BTC-DCR",
    "BTC-ETH", "BTC-EXCL", "BTC-GAM", "BTC-GBG", "BTC-GRS", "BTC-GUP", "BTC-IOC", "BTC-IOP", "BTC-LTC", "BTC-NLG", "BTC-NXC", "BTC-PIVX",
    "BTC-PTOY", "BTC-QWARK", "BTC-RADS", "BTC-REP", "BTC-SIB", "BTC-SLS", "BTC-START", "BTC-STRAT", "BTC-SWIFT", "BTC-SYS", "BTC-TRIG", "BTC-TRST",
    "BTC-TX", "BTC-XCP", "BTC-XEL", "BTC-XMR", "BTC-XVG", "BTC-ZCL", "USDT-BCC", "USDT-ETH", "USDT-NEO", "USDT-XMR", "USDT-XRP", "USDT-ZEC",
    "BTC-ADT", "BTC-BAY", "BTC-BLK", "BTC-DGD", "BTC-EDG", "BTC-GCR", "BTC-GNO", "BTC-HMQ", "BTC-KORE", "BTC-LBC", "BTC-LSK", "BTC-MONA",
    "BTC-MUE", "BTC-NXS", "BTC-NXT", "BTC-OMG", "BTC-PAY", "BTC-PINK", "BTC-QRL", "BTC-QTUM", "BTC-SAFEX", "BTC-SEQ", "BTC-SHIFT", "BTC-SNRG",
    "BTC-SPR", "BTC-SYNX", "BTC-VTC", "BTC-ARDR", "BTC-BCC", "BTC-BITB", "BTC-CLOAK", "BTC-DCT", "BTC-DMD", "BTC-DOPE", "BTC-DYN", "BTC-LMC",
    "BTC-LUN", "BTC-MCO", "BTC-MLN", "BTC-NAV", "BTC-NEO", "BTC-NMR", "BTC-OK", "BTC-RISE", "BTC-STEEM", "BTC-SWT", "BTC-VIA", "BTC-XWC",
    "USDT-ETC", "BTC-ADX", "BTC-CURE", "BTC-DOGE", "BTC-ERC", "BTC-ZEC", "USDT-DASH", "BTC-KMD", "BTC-WAVES", "USDT-OMG", "BTC-APX",
    "BTC-EMC", "BTC-SC", "BTC-BAT", "BTC-XEM", "USDT-BTC", "BTC-ABY", "BTC-CVC", "BTC-EMC2", "BTC-GEO", "BTC-MTL", "BTC-MUSIC",
    "BTC-PKB", "BTC-XST", "BTC-XZC", "BTC-BSD", "BTC-SNT", "BTC-ANT", "BTC-GBYTE", "BTC-TIME", "BTC-XRP", "BTC-NEOS", "BTC-RLC", "BTC-GAME",
    "BTC-EBST", "BTC-1ST", "BTC-MAID", "BTC-VOX", "BTC-GRC", "BTC-ETC", "BTC-EXP", "BTC-MYST", "BTC-STORJ", "BTC-XVC", "BTC-GNT", "BTC-FTC",
    "BTC-XLM", "USDT-LTC", "BTC-CRB", "BTC-INCNT", "BTC-THC", "BTC-BTCD", "BTC-SLR", "BTC-VRC", "BTC-XDN", "BTC-VTR", "BTC-SNGLS", "BTC-PPC",
    "BTC-SBD", "BTC-CFI", "BTC-CLAM", "BTC-CRW", "BTC-ZEN", "BTC-SPHR", "BTC-UNB", "BTC-FUN", "BTC-CLUB", "BTC-WINGS", "BTC-DGB", "BTC-XAUR",
    "BTC-POT", "BTC-UBQ", "BTC-GLD", "BTC-PDC", "BTC-TRUST", "BTC-EFL", "BTC-BCY", "BTC-BNT", "BTC-FCT", "BTC-RDD", "BTC-XMG", "BTC-COVAL",
    "BTC-TKN", "BTC-FAIR", "BTC-FLO", "BTC-PTC", "BTC-OMNI", "BTC-LGD", "BTC-AEON", "BTC-INFX", "BTC-AUR", "BTC-VRM", "BTC-XMY", "BTC-UNO",
    "BTC-BYC", "BTC-ION", "BTC-TKS", "BTC-RBY", "BTC-MEME", "BTC-BURST", "BTC-2GIVE", "BTC-FLDC", "BTC-CANN", "BTC-CPC", "BTC-NBT", "BTC-EGC", "BTC-GOLOS", "BTC-ENRG",
    "BTC-DTB", "BTC-AGRS", "BTC-BLITZ", "BTC-PART", "FINISH"
];
var countM = 15;

$(document).ready(function () {
    var $table = $('#demo');
    $table.floatThead({
        position: 'fixed'
    });
    rendertable(listCoin);
    getMarketHistory(listCoin[indexListCoin]);
});

goM15();

function rendertable(obj) {
    $.each(obj, function (key, value) {
        if ((value) == "FINISH") {
            //do nothing
        }
        else {
            if ($('#' + value).length == 0) {
                $('#table').append("<tr id=" + value + "></tr>");
                $('#' + value).append("<td class='name'><a target='_blank' " + "href='https://bittrex.com/Market/Index?MarketName=" + value + "'>" + value + "</a></td>");
                $('#' + value).append("<td class='volBuy'></td>");
                $('#' + value).append("<td class='volSell'></td>");
                $('#' + value).append("<td class='totalVol'></td>");
                $('#' + value).append("<td class='changeVol'></td>");
                $('#' + value).append("<td class='totalVolM15'></td>");
                $('#' + value).append("<td class='changeVolM15'></td>");
                $('#' + value).append("<td class='totalVolM30'></td>");
                $('#' + value).append("<td class='changeVolM30'></td>");
                $('#' + value).append("<td class='totalVolM45'></td>");
                $('#' + value).append("<td class='changeVolM45'></td>");
                $('#' + value).append("<td class='totalVolH1'></td>");
                $('#' + value).append("<td class='changeVolH1'></td>");

                eleObj[value] = $('#' + value);
            }
            else {
                //do nothing
            }
        }
    })
}

function renderMinutes(obj, classnameTotalM, classnameToTal, classnamechangeVolM, classnamechangeVol) {
    $.each(obj, function (key, value) {
        var splitClassTotal = eleObj[key].children(classnameToTal).attr('class').split(' ');
        var splitClassVol = eleObj[key].children(classnamechangeVol).attr('class').split(' ');

        eleObj[key].children(classnameTotalM).text(eleObj[key].children(classnameToTal).text());
        eleObj[key].children(classnameTotalM).addClass(splitClassTotal[1]);

        eleObj[key].children(classnamechangeVolM).text(eleObj[key].children(classnamechangeVol).text());
        eleObj[key].children(classnamechangeVolM).addClass(splitClassVol[1]);

    });
}
function goM15() {
    setInterval(function () {
        indexListCoin = 0;
        if (countM % 60 == 0) {
            renderMinutes(listData, '.totalVolH1', '.totalVolM45', '.changeVolH1', '.changeVolM45');
        }
        if (countM % 45 == 0) {
            renderMinutes(listData, '.totalVolM45', '.totalVolM30', '.changeVolM45', '.changeVolM30');
        }
        if (countM % 30 == 0) {
            renderMinutes(listData, '.totalVolM30', '.totalVolM15', '.changeVolM30', '.changeVolM15');
        }
        if (countM % 15 == 0) {
            renderMinutes(listData, '.totalVolM15', '.totalVol', '.changeVolM15', '.changeVol');
        }

        getMarketHistory(listCoin[indexListCoin]);
        countM += 15;
    }, 900000);
}

function renderMarketHistory(obj) {
    $.each(obj, function (key, value) {
        eleObj[key].children('.volBuy').text(sumCalculate(value, "BUY"));
        eleObj[key].children('.volSell').text(sumCalculate(value, "SELL"));

        changeVol(key);
        renderTotalVol(key);
    })
}

function getMarketHistory(name) {
    if (name == "FINISH") {
        //do nothing
        indexListCoin = 0;
        renderMarketHistory(listData);
    }
    else {
        var link = "ghttps://bittrex.com/api/v1.1/public/getmarkethistory?market=" + name;
        console.log(link);
        $.get(link)
            .then(function (data) {
                var dataC = JSON.parse(data);
                // console.log(dataC);
                listData[name] = dataC.result;
                console.log(listData[name]);
                indexListCoin++;
                getMarketHistory(listCoin[indexListCoin]);
            })
            .catch(function (error) {
                console.log(error);
                getMarketHistory(listCoin[indexListCoin]);
            })
    }
}

function sumCalculate(obj, type) {
    var sum = 0;
    $.each(obj, function (key, value) {
        if (value.OrderType == type)
            sum += value.Total;
    });
    return sum.toFixed(6);
}

function changeVol(name) {
    var temp = Number(100 / eleObj[name].children('.volSell').text() * eleObj[name].children('.volBuy').text() - 100).toFixed(2);
    deleteColor(name, '.changeVol');
    if (temp >= 50) {
        eleObj[name].children('.changeVol').addClass('green-color');
        eleObj[name].children('.changeVol').text(temp + "%");
    }
    if (temp <= -50) {
        eleObj[name].children('.changeVol').addClass('danger-color');
        eleObj[name].children('.changeVol').text(temp + "%");
    }
    eleObj[name].children('.changeVol').text(temp + "%");
}

function renderTotalVol(name) {
    var temp = Number(eleObj[name].children('.volSell').text()) + Number(eleObj[name].children('.volBuy').text());
    eleObj[name].children('.totalVol').text(temp.toFixed(6));
}

function deleteColor(MarketName, classname) {
    eleObj[MarketName].children(classname).removeClass("green-color");
    eleObj[MarketName].children(classname).removeClass("info-color");
}
