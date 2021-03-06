$(function () {
    "use strict";
    function n(n) {
        function w() {
            u() && (!n || n.isAuthenticated) && (r && i.server.queryOrderState(r).done(function (n) {
                t("server.queryOrderState");
                t(n);
                n && s("data-query-orders", n)
            }), ut())
        }

        function ut() {
            if (u()) {
                var t = "/Api/v2.0/auth/orders/GetOrderHistory", i = {};
                (!n || n.isAuthenticated) && (n && n.version && n.version.needsUpdate || (r && (t = "/Api/v2.0/auth/market/GetOrderHistory", i.MarketName = r), jQuery.ajax({
                    url: t,
                    type: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    dataType: "json",
                    data: i,
                    success: function (n) {
                        n.success && s("data-query-closedOrders", n.result)
                    },
                    error: function () {
                        console.log("Error loading order history ...")
                    }
                })))
            }
        }

        function ft() {
            u() && i.server.queryBalanceState().done(function (n) {
                t("server.queryBalanceState");
                t(n);
                n && s("data-query-balances", n)
            })
        }

        function b() {
            u() && (l || (l = !0, i.server.queryExchangeState(r).done(function (n) {
                t("server.queryExchangeState().done()");
                t(n);
                n && p && s("data-query-exchange-" + r, n);
                l = !1
            })))
        }

        function et() {
            n && n.version && n.version.needsUpdate || jQuery.ajax({
                url: "/api/v2.0/pub/Markets/GetMarketSummaries",
                dataType: "json",
                cache: !1,
                success: function (n) {
                    n.success ? s("data-query-summaries", n.result) : console.log(n.message)
                },
                error: function () {
                    console.log("Error loading market summaries ...")
                }
            })
        }

        function o(n, t) {
            $("#event-store").trigger({type: n, serviceData: t})
        }

        function s(n, t) {
            $("#event-store").trigger({type: n, serviceData: t})
        }

        function ot() {
            return _.debounce(w, rt), !1
        }

        function st() {
            return b(), !1
        }

        var h = n && n.isAuthenticated, r = n.market && n.market.marketName ? n.market.marketName : null,
            v = n.market && n.market.marketName && n.market.fetchExchange, y = n.fetchFlood, u = ko.observable(!1),
            f = ko.observable("Disconnected"), i = $.connection.coreHub, c = window.location.href;
        c.indexOf("beta.bittrex.com") > -1 ? $.connection.hub.url = "https://socket-beta.bittrex.com/signalr" : c.indexOf("stage.bittrex.com") > -1 ? $.connection.hub.url = "https://socket-stage.bittrex.com/signalr" : c.indexOf("bittrex.com") > -1 && ($.connection.hub.url = "https://socket.bittrex.com/signalr");
        var p = !0, nt = !1, tt = !1, it = !1, rt = 5e3, l = !1, e = function () {
            tt && (console.log("hub.client"), console.log(i))
        }, t = function (n) {
            it && console.log(n)
        };
        i.client.updateOrderState = function (n) {
            e();
            t("client.updateOrderState");
            t(n);
            n && o("data-update-orders", n)
        };
        i.client.updateSummaryState = function (n) {
            e();
            t("client.updateSummaryState");
            t(n);
            n && n.Deltas && o("data-update-summaries", n)
        };
        i.client.updateBalanceState = function (n) {
            e();
            t("client.balanceStateDelta");
            t(n);
            n && o("data-update-balances", n)
        };
        i.client.updateExchangeState = function (n) {
            e();
            t("client.updateExchangeState");
            t(n);
            n && p && o("data-update-exchange-" + r, n)
        };
        i.client.updateFloodState = function (n) {
            e();
            t("client.updateFloodState");
            t(n);
            n && nt && o("data-update-flood", n)
        };
        $("#event-store").on("request-query-orders", ot);
        $("#event-store").on("request-query-exchange-" + r, st);
        var k = function k() {
            console.log("socketDataProvider.subscribeUser (start) ");
            h && i.server.subscribeToUserDeltas().done(function (n) {
                console.log("server.subscribeToUserDeltas (done)");
                n ? (w(), ft()) : h = !1
            }).fail(function () {
                console.log("socketDataProvider.subscribeToUserDeltas (failed): " + r);
                $.connection.hub.lastError && console.log("socketDataProvider.subscribeToUserDeltas (failed): " + $.connection.hub.lastError.message);
                setTimeout(function () {
                    k()
                }, 5e3)
            })
        }, a = function a() {
            console.log("socketDataProvider.subscribeMarket (start): " + r);
            r && v && i.server.subscribeToExchangeDeltas(r).done(function (n) {
                console.log("server.subscribeToExchangeDeltas (done) ");
                n ? b() : a()
            }).fail(function () {
                console.log("socketDataProvider.subscribeToExchangeDeltas (failed): " + r);
                $.connection.hub.lastError && console.log("socketDataProvider.subscribeToExchangeDeltas (failed): " + $.connection.hub.lastError.message);
                a()
            })
        }, d = function d() {
            console.log("socketDataProvider.subscribeFlood (start) ");
            y && i.server.subscribeToFloodDeltas().done(function () {
                console.log("server.subscribeToFloodDeltas (done)")
            }).fail(function () {
                console.log("socketDataProvider.subscribeToFloodDeltas (failed) ");
                $.connection.hub.lastError && console.log("socketDataProvider.subscribeToFloodDeltas (failed): " + $.connection.hub.lastError.message);
                d()
            })
        }, g = function () {
            console.log("websocket ready");
            f("Connected");
            $("#event-store").trigger({type: "socket-start"});
            h && k();
            v && a();
            y && d();
            et();
            u(!0)
        };
        $.connection.hub.start().done(g);
        i.client.stopClient = function () {
            $.connection.hub.stop()
        };
        i.client.refresh = function () {
            market.server.refresh()
        };
        $.connection.hub.connectionSlow(function () {
            console.log("websocket slow");
            f("Slow");
            $("#event-store").trigger({type: "socket-slow"})
        });
        $.connection.hub.reconnecting(function () {
            console.log("websocket reconnecting");
            f("Reconnecting");
            $("#event-store").trigger({type: "socket-reconnecting"})
        });
        $.connection.hub.reconnected(function () {
            console.log("websocket reconnected");
            f("Connected");
            $("#event-store").trigger({type: "socket-connected"})
        });
        $.connection.hub.disconnected(function () {
            console.log("websocket disconnected");
            f("Disconnected");
            $("#event-store").trigger({type: "socket-disconnected"});
            u(!1);
            setTimeout(function () {
                $.connection.hub.start().done(g);
                console.log("reconnect websockets")
            }, 5e3)
        })
    }

    n(bittrex)
});
$(function () {
    "use strict";
    function n(n) {
        function i() {
            if (bittrex && bittrex.version && bittrex.version.needsUpdate) {
                f();
                return
            }
            jQuery.ajax({
                url: "/Api/v2.0/pub/currencies/GetBTCPrice",
                dataType: "json",
                cache: !0,
                success: function (n) {
                    n.success && r(n.result)
                },
                error: function () {
                    console.log("Error loading latest bitcoin price ...")
                }
            })
        }

        function r(n) {
            $("#event-store").trigger({type: "data-update-bitcoinPrice", serviceData: n})
        }

        function u(n) {
            t !== null && clearInterval(t);
            t = setInterval(function () {
                i()
            }, n)
        }

        function f() {
            t !== null && clearInterval(t)
        }

        var t = null;
        i();
        u(n)
    }

    n(3e5)
})