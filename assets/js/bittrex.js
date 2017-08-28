/**
 * Created by thuan on 8/25/2017.
 */
if (!function (n, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function (n) {
            if (!n.document)throw new Error("jQuery requires a window with a document");
            return t(n)
        } : t(n)
    }("undefined" != typeof window ? window : this, function (n, t) {
        function ii(n) {
            var t = !!n && "length" in n && n.length, r = i.type(n);
            return "function" === r || i.isWindow(n) ? !1 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
        }

        function ri(n, t, r) {
            if (i.isFunction(t))return i.grep(n, function (n, i) {
                return !!t.call(n, i, n) !== r
            });
            if (t.nodeType)return i.grep(n, function (n) {
                return n === t !== r
            });
            if ("string" == typeof t) {
                if (bf.test(t))return i.filter(t, n, r);
                t = i.filter(t, n)
            }
            return i.grep(n, function (n) {
                return lt.call(t, n) > -1 !== r
            })
        }

        function hr(n, t) {
            while ((n = n[t]) && 1 !== n.nodeType);
            return n
        }

        function kf(n) {
            var t = {};
            return i.each(n.match(h) || [], function (n, i) {
                t[i] = !0
            }), t
        }

        function yt() {
            u.removeEventListener("DOMContentLoaded", yt);
            n.removeEventListener("load", yt);
            i.ready()
        }

        function et() {
            this.expando = i.expando + et.uid++
        }

        function lr(n, t, r) {
            var u;
            if (void 0 === r && 1 === n.nodeType)if (u = "data-" + t.replace(cr, "-$&").toLowerCase(), r = n.getAttribute(u), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : df.test(r) ? i.parseJSON(r) : r
                } catch (f) {
                }
                e.set(n, t, r)
            } else r = void 0;
            return r
        }

        function vr(n, t, r, u) {
            var h, e = 1, l = 20, c = u ? function () {
                    return u.cur()
                } : function () {
                    return i.css(n, t, "")
                }, s = c(), o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
                f = (i.cssNumber[t] || "px" !== o && +s) && ot.exec(i.css(n, t));
            if (f && f[3] !== o) {
                o = o || f[3];
                r = r || [];
                f = +s || 1;
                do e = e || ".5", f /= e, i.style(n, t, f + o); while (e !== (e = c() / s) && 1 !== e && --l)
            }
            return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h
        }

        function o(n, t) {
            var r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [];
            return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
        }

        function ui(n, t) {
            for (var i = 0, u = n.length; u > i; i++)r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
        }

        function kr(n, t, r, u, f) {
            for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0,
                     b = n.length; b > l; l++)if (e = n[l], e || 0 === e)if ("object" === i.type(e)) i.merge(y, e.nodeType ? [e] : e); else if (br.test(e)) {
                for (s = s || h.appendChild(t.createElement("div")), p = (pr.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;)s = s.lastChild;
                i.merge(y, s.childNodes);
                s = h.firstChild;
                s.textContent = ""
            } else y.push(t.createTextNode(e));
            for (h.textContent = "", l = 0; e = y[l++];)if (u && i.inArray(e, u) > -1) f && f.push(e); else if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && ui(s), r)for (v = 0; e = s[v++];)wr.test(e.type || "") && r.push(e);
            return h
        }

        function pt() {
            return !0
        }

        function nt() {
            return !1
        }

        function gr() {
            try {
                return u.activeElement
            } catch (n) {
            }
        }

        function fi(n, t, r, u, f, e) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof r && (u = u || r, r = void 0);
                for (s in t)fi(n, s, r, u, t[s], e);
                return n
            }
            if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), f === !1) f = nt; else if (!f)return n;
            return 1 === e && (o = f, f = function (n) {
                return i().off(n), o.apply(this, arguments)
            }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function () {
                i.event.add(this, t, f, u, r)
            })
        }

        function nu(n, t) {
            return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
        }

        function ee(n) {
            return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
        }

        function oe(n) {
            var t = ue.exec(n.type);
            return t ? n.type = t[1] : n.removeAttribute("type"), n
        }

        function tu(n, t) {
            var u, c, f, s, h, l, a, o;
            if (1 === t.nodeType) {
                if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) {
                    delete h.handle;
                    h.events = {};
                    for (f in o)for (u = 0, c = o[f].length; c > u; u++)i.event.add(t, f, o[f][u])
                }
                e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
            }
        }

        function se(n, t) {
            var i = t.nodeName.toLowerCase();
            "input" === i && yr.test(n.type) ? t.checked = n.checked : "input" !== i && "textarea" !== i || (t.defaultValue = n.defaultValue)
        }

        function b(n, t, u, e) {
            t = gi.apply([], t);
            var l, p, c, a, s, w, h = 0, v = n.length, d = v - 1, y = t[0], k = i.isFunction(y);
            if (k || v > 1 && "string" == typeof y && !f.checkClone && re.test(y))return n.each(function (i) {
                var r = n.eq(i);
                k && (t[0] = y.call(this, i, r.html()));
                b(r, t, u, e)
            });
            if (v && (l = kr(t, n[0].ownerDocument, !1, n, e), p = l.firstChild, 1 === l.childNodes.length && (l = p), p || e)) {
                for (c = i.map(o(l, "script"), ee), a = c.length; v > h; h++)s = l, h !== d && (s = i.clone(s, !0, !0), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h);
                if (a)for (w = c[c.length - 1].ownerDocument, i.map(c, oe), h = 0; a > h; h++)s = c[h], wr.test(s.type || "") && !r.access(s, "globalEval") && i.contains(w, s) && (s.src ? i._evalUrl && i._evalUrl(s.src) : i.globalEval(s.textContent.replace(fe, "")))
            }
            return n
        }

        function iu(n, t, r) {
            for (var u, e = t ? i.filter(t, n) : n,
                     f = 0; null != (u = e[f]); f++)r || 1 !== u.nodeType || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && ui(o(u, "script")), u.parentNode.removeChild(u));
            return n
        }

        function ru(n, t) {
            var r = i(t.createElement(n)).appendTo(t.body), u = i.css(r[0], "display");
            return r.detach(), u
        }

        function oi(n) {
            var r = u, t = ei[n];
            return t || (t = ru(n, r), "none" !== t && t || (wt = (wt || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = wt[0].contentDocument, r.write(), r.close(), t = ru(n, r), wt.detach()), ei[n] = t), t
        }

        function tt(n, t, r) {
            var o, s, h, u, e = n.style;
            return r = r || bt(n), u = r ? r.getPropertyValue(t) || r[t] : void 0, "" !== u && void 0 !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), r && !f.pixelMarginRight() && si.test(u) && uu.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h), void 0 !== u ? u + "" : u
        }

        function ci(n, t) {
            return {
                get: function () {
                    return n() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function su(n) {
            if (n in ou)return n;
            for (var i = n[0].toUpperCase() + n.slice(1), t = eu.length; t--;)if (n = eu[t] + i, n in ou)return n
        }

        function hu(n, t, i) {
            var r = ot.exec(t);
            return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
        }

        function cu(n, t, r, u, f) {
            for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
                     o = 0; 4 > e; e += 2)"margin" === r && (o += i.css(n, r + w[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
            return o
        }

        function lu(t, r, e) {
            var h = !0, o = "width" === r ? t.offsetWidth : t.offsetHeight, s = bt(t),
                c = "border-box" === i.css(t, "boxSizing", !1, s);
            if (u.msFullscreenElement && n.top !== n && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[r])), 0 >= o || null == o) {
                if (o = tt(t, r, s), (0 > o || null == o) && (o = t.style[r]), si.test(o))return o;
                h = c && (f.boxSizingReliable() || o === t.style[r]);
                o = parseFloat(o) || 0
            }
            return o + cu(t, r, e || (c ? "border" : "content"), h, s) + "px"
        }

        function au(n, t) {
            for (var e, u, s, o = [], f = 0,
                     h = n.length; h > f; f++)u = n[f], u.style && (o[f] = r.get(u, "olddisplay"), e = u.style.display, t ? (o[f] || "none" !== e || (u.style.display = ""), "" === u.style.display && st(u) && (o[f] = r.access(u, "olddisplay", oi(u.nodeName)))) : (s = st(u), "none" === e && s || r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
            for (f = 0; h > f; f++)u = n[f], u.style && (t && "none" !== u.style.display && "" !== u.style.display || (u.style.display = t ? o[f] || "" : "none"));
            return n
        }

        function s(n, t, i, r, u) {
            return new s.prototype.init(n, t, i, r, u)
        }

        function pu() {
            return n.setTimeout(function () {
                it = void 0
            }), it = i.now()
        }

        function dt(n, t) {
            var r, u = 0, i = {height: n};
            for (t = t ? 1 : 0; 4 > u; u += 2 - t)r = w[u], i["margin" + r] = i["padding" + r] = n;
            return t && (i.opacity = i.width = n), i
        }

        function wu(n, t, i) {
            for (var u, f = (l.tweeners[t] || []).concat(l.tweeners["*"]), r = 0,
                     e = f.length; e > r; r++)if (u = f[r].call(i, t, n))return u
        }

        function le(n, t, u) {
            var f, a, p, v, o, w, h, b, l = this, y = {}, s = n.style, c = n.nodeType && st(n), e = r.get(n, "fxshow");
            u.queue || (o = i._queueHooks(n, "fx"), null == o.unqueued && (o.unqueued = 0, w = o.empty.fire, o.empty.fire = function () {
                o.unqueued || w()
            }), o.unqueued++, l.always(function () {
                l.always(function () {
                    o.unqueued--;
                    i.queue(n, "fx").length || o.empty.fire()
                })
            }));
            1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], h = i.css(n, "display"), b = "none" === h ? r.get(n, "olddisplay") || oi(n.nodeName) : h, "inline" === b && "none" === i.css(n, "float") && (s.display = "inline-block"));
            u.overflow && (s.overflow = "hidden", l.always(function () {
                s.overflow = u.overflow[0];
                s.overflowX = u.overflow[1];
                s.overflowY = u.overflow[2]
            }));
            for (f in t)if (a = t[f], vu.exec(a)) {
                if (delete t[f], p = p || "toggle" === a, a === (c ? "hide" : "show")) {
                    if ("show" !== a || !e || void 0 === e[f])continue;
                    c = !0
                }
                y[f] = e && e[f] || i.style(n, f)
            } else h = void 0;
            if (i.isEmptyObject(y)) "inline" === ("none" === h ? oi(n.nodeName) : h) && (s.display = h); else {
                e ? "hidden" in e && (c = e.hidden) : e = r.access(n, "fxshow", {});
                p && (e.hidden = !c);
                c ? i(n).show() : l.done(function () {
                    i(n).hide()
                });
                l.done(function () {
                    var t;
                    r.remove(n, "fxshow");
                    for (t in y)i.style(n, t, y[t])
                });
                for (f in y)v = wu(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = "width" === f || "height" === f ? 1 : 0))
            }
        }

        function ae(n, t) {
            var r, f, e, u, o;
            for (r in n)if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
        }

        function l(n, t, r) {
            var e, o, s = 0, a = l.prefilters.length, f = i.Deferred().always(function () {
                delete c.elem
            }), c = function () {
                if (o)return !1;
                for (var s = it || pu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0,
                         i = 1 - h, r = 0, e = u.tweens.length; e > r; r++)u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), 1 > i && e ? t : (f.resolveWith(n, [u]), !1)
            }, u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {specialEasing: {}, easing: i.easing._default}, r),
                originalProperties: t,
                originalOptions: r,
                startTime: it || pu(),
                duration: r.duration,
                tweens: [],
                createTween: function (t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function (t) {
                    var i = 0, r = t ? u.tweens.length : 0;
                    if (o)return this;
                    for (o = !0; r > i; i++)u.tweens[i].run(1);
                    return t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this
                }
            }), h = u.props;
            for (ae(h, u.opts.specialEasing); a > s; s++)if (e = l.prefilters[s].call(u, n, h, u.opts))return i.isFunction(e.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)), e;
            return i.map(h, wu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function k(n) {
            return n.getAttribute && n.getAttribute("class") || ""
        }

        function ff(n) {
            return function (t, r) {
                "string" != typeof t && (r = t, t = "*");
                var u, f = 0, e = t.toLowerCase().match(h) || [];
                if (i.isFunction(r))while (u = e[f++])"+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
            }
        }

        function ef(n, t, r, u) {
            function e(s) {
                var h;
                return f[s] = !0, i.each(n[s] || [], function (n, i) {
                    var s = i(t, r, u);
                    return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
                }), h
            }

            var f = {}, o = n === yi;
            return e(t.dataTypes[0]) || !f["*"] && e("*")
        }

        function wi(n, t) {
            var r, u, f = i.ajaxSettings.flatOptions || {};
            for (r in t)void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
            return u && i.extend(!0, n, u), n
        }

        function be(n, t, i) {
            for (var e, u, f, o, s = n.contents,
                     r = n.dataTypes; "*" === r[0];)r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
            if (e)for (u in s)if (s[u] && s[u].test(e)) {
                r.unshift(u);
                break
            }
            if (r[0] in i) f = r[0]; else {
                for (u in i) {
                    if (!r[0] || n.converters[u + " " + r[0]]) {
                        f = u;
                        break
                    }
                    o || (o = u)
                }
                f = f || o
            }
            if (f)return (f !== r[0] && r.unshift(f), i[f])
        }

        function ke(n, t, i, r) {
            var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
            if (c[1])for (f in n.converters)o[f.toLowerCase()] = n.converters[f];
            for (u = c.shift(); u;)if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())if ("*" === u) u = e; else if ("*" !== e && e !== u) {
                if (f = o[e + " " + u] || o["* " + u], !f)for (h in o)if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                    f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                    break
                }
                if (f !== !0)if (f && n.throws) t = f(t); else try {
                    t = f(t)
                } catch (l) {
                    return {state: "parsererror", error: f ? l : "No conversion from " + e + " to " + u}
                }
            }
            return {state: "success", data: t}
        }

        function bi(n, t, r, u) {
            var f;
            if (i.isArray(t)) i.each(t, function (t, i) {
                r || ge.test(n) ? u(n, i) : bi(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
            }); else if (r || "object" !== i.type(t)) u(n, t); else for (f in t)bi(n + "[" + f + "]", t[f], r, u)
        }

        function hf(n) {
            return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView
        }

        var y = [], u = n.document, v = y.slice, gi = y.concat, ti = y.push, lt = y.indexOf, at = {}, af = at.toString,
            ft = at.hasOwnProperty, f = {}, nr = "2.2.3", i = function (n, t) {
                return new i.fn.init(n, t)
            }, vf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, yf = /^-ms-/, pf = /-([\da-z])/gi, wf = function (n, t) {
                return t.toUpperCase()
            }, p, ur, fr, er, or, sr, h, vt, a, g, br, wt, ei, it, kt, vu, yu, bu, rt, ku, du, gt, gu, nf, li, sf, ut, ki,
            ni, di, cf, lf;
        i.fn = i.prototype = {
            jquery: nr, constructor: i, selector: "", length: 0, toArray: function () {
                return v.call(this)
            }, get: function (n) {
                return null != n ? 0 > n ? this[n + this.length] : this[n] : v.call(this)
            }, pushStack: function (n) {
                var t = i.merge(this.constructor(), n);
                return t.prevObject = this, t.context = this.context, t
            }, each: function (n) {
                return i.each(this, n)
            }, map: function (n) {
                return this.pushStack(i.map(this, function (t, i) {
                    return n.call(t, i, t)
                }))
            }, slice: function () {
                return this.pushStack(v.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (n) {
                var i = this.length, t = +n + (0 > n ? i : 0);
                return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: ti, sort: y.sort, splice: y.splice
        };
        i.extend = i.fn.extend = function () {
            var e, f, r, t, o, s, n = arguments[0] || {}, u = 1, c = arguments.length, h = !1;
            for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)if (null != (e = arguments[u]))for (f in e)r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
            return n
        };
        i.extend({
            expando: "jQuery" + (nr + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (n) {
                throw new Error(n);
            }, noop: function () {
            }, isFunction: function (n) {
                return "function" === i.type(n)
            }, isArray: Array.isArray, isWindow: function (n) {
                return null != n && n === n.window
            }, isNumeric: function (n) {
                var t = n && n.toString();
                return !i.isArray(n) && t - parseFloat(t) + 1 >= 0
            }, isPlainObject: function (n) {
                var t;
                if ("object" !== i.type(n) || n.nodeType || i.isWindow(n) || n.constructor && !ft.call(n, "constructor") && !ft.call(n.constructor.prototype || {}, "isPrototypeOf"))return !1;
                for (t in n);
                return void 0 === t || ft.call(n, t)
            }, isEmptyObject: function (n) {
                for (var t in n)return !1;
                return !0
            }, type: function (n) {
                return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? at[af.call(n)] || "object" : typeof n
            }, globalEval: function (n) {
                var t, r = eval;
                n = i.trim(n);
                n && (1 === n.indexOf("use strict") ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n))
            }, camelCase: function (n) {
                return n.replace(yf, "ms-").replace(pf, wf)
            }, nodeName: function (n, t) {
                return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (n, t) {
                var r, i = 0;
                if (ii(n)) {
                    for (r = n.length; r > i; i++)if (t.call(n[i], i, n[i]) === !1)break
                } else for (i in n)if (t.call(n[i], i, n[i]) === !1)break;
                return n
            }, trim: function (n) {
                return null == n ? "" : (n + "").replace(vf, "")
            }, makeArray: function (n, t) {
                var r = t || [];
                return null != n && (ii(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ti.call(r, n)), r
            }, inArray: function (n, t, i) {
                return null == t ? -1 : lt.call(t, n, i)
            }, merge: function (n, t) {
                for (var u = +t.length, i = 0, r = n.length; u > i; i++)n[r++] = t[i];
                return n.length = r, n
            }, grep: function (n, t, i) {
                for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++)u = !t(n[r], r), u !== o && f.push(n[r]);
                return f
            }, map: function (n, t, i) {
                var e, u, r = 0, f = [];
                if (ii(n))for (e = n.length; e > r; r++)u = t(n[r], r, i), null != u && f.push(u); else for (r in n)u = t(n[r], r, i), null != u && f.push(u);
                return gi.apply([], f)
            }, guid: 1, proxy: function (n, t) {
                var u, f, r;
                return "string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n) ? (f = v.call(arguments, 2), r = function () {
                    return n.apply(t || this, f.concat(v.call(arguments)))
                }, r.guid = n.guid = n.guid || i.guid++, r) : void 0
            }, now: Date.now, support: f
        });
        "function" == typeof Symbol && (i.fn[Symbol.iterator] = y[Symbol.iterator]);
        i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (n, t) {
            at["[object " + t + "]"] = t.toLowerCase()
        });
        p = function (n) {
            function u(n, t, r, u) {
                var l, w, a, s, nt, d, y, g, p = t && t.ownerDocument, v = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof n || !n || 1 !== v && 9 !== v && 11 !== v)return r;
                if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                    if (11 !== v && (d = sr.exec(n)))if (l = d[1]) {
                        if (9 === v) {
                            if (!(a = t.getElementById(l)))return r;
                            if (a.id === l)return r.push(a), r
                        } else if (p && (a = p.getElementById(l)) && et(t, a) && a.id === l)return r.push(a), r
                    } else {
                        if (d[2])return k.apply(r, t.getElementsByTagName(n)), r;
                        if ((l = d[3]) && f.getElementsByClassName && t.getElementsByClassName)return k.apply(r, t.getElementsByClassName(l)), r
                    }
                    if (f.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                        if (1 !== v) p = t, g = n; else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(hr, "\\$&") : t.setAttribute("id", s = e), y = ft(n), w = y.length, nt = yi.test(s) ? "#" + s : "[id='" + s + "']"; w--;)y[w] = nt + " " + yt(y[w]);
                            g = y.join(",");
                            p = gt.test(n) && ii(t.parentNode) || t
                        }
                        if (g)try {
                            return k.apply(r, p.querySelectorAll(g)), r
                        } catch (tt) {
                        } finally {
                            s === e && t.removeAttribute("id")
                        }
                    }
                }
                return si(n.replace(at, "$1"), t, r, u)
            }

            function ni() {
                function n(r, u) {
                    return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
                }

                var i = [];
                return n
            }

            function l(n) {
                return n[e] = !0, n
            }

            function a(n) {
                var t = i.createElement("div");
                try {
                    return !!n(t)
                } catch (r) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                    t = null
                }
            }

            function ti(n, i) {
                for (var r = n.split("|"), u = r.length; u--;)t.attrHandle[r[u]] = i
            }

            function wi(n, t) {
                var i = t && n,
                    r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li);
                if (r)return r;
                if (i)while (i = i.nextSibling)if (i === t)return -1;
                return n ? 1 : -1
            }

            function cr(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return "input" === i && t.type === n
                }
            }

            function lr(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === n
                }
            }

            function it(n) {
                return l(function (t) {
                    return t = +t, l(function (i, r) {
                        for (var u, f = n([], i.length, t), e = f.length; e--;)i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                    })
                })
            }

            function ii(n) {
                return n && "undefined" != typeof n.getElementsByTagName && n
            }

            function bi() {
            }

            function yt(n) {
                for (var t = 0, r = n.length, i = ""; r > t; t++)i += n[t].value;
                return i
            }

            function ri(n, t, i) {
                var r = t.dir, u = i && "parentNode" === r, f = ki++;
                return t.first ? function (t, i, f) {
                    while (t = t[r])if (1 === t.nodeType || u)return n(t, i, f)
                } : function (t, i, o) {
                    var s, h, c, l = [v, f];
                    if (o) {
                        while (t = t[r])if ((1 === t.nodeType || u) && n(t, i, o))return !0
                    } else while (t = t[r])if (1 === t.nodeType || u) {
                        if (c = t[e] || (t[e] = {}), h = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = h[r]) && s[0] === v && s[1] === f)return l[2] = s[2];
                        if (h[r] = l, l[2] = n(t, i, o))return !0
                    }
                }
            }

            function ui(n) {
                return n.length > 1 ? function (t, i, r) {
                    for (var u = n.length; u--;)if (!n[u](t, i, r))return !1;
                    return !0
                } : n[0]
            }

            function ar(n, t, i) {
                for (var r = 0, f = t.length; f > r; r++)u(n, t[r], i);
                return i
            }

            function pt(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length,
                         h = null != t; s > f; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
                return o
            }

            function fi(n, t, i, r, u, f) {
                return r && !r[e] && (r = fi(r)), u && !u[e] && (u = fi(u, f)), l(function (f, e, o, s) {
                    var l, c, a, p = [], y = [], w = e.length, b = f || ar(t || "*", o.nodeType ? [o] : o, []),
                        v = !n || !f && t ? b : pt(b, p, n, o, s), h = i ? u || (f ? n : w || r) ? [] : e : v;
                    if (i && i(v, h, o, s), r)for (l = pt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                    if (f) {
                        if (u || n) {
                            if (u) {
                                for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                u(null, h = [], l, s)
                            }
                            for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                        }
                    } else h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
                })
            }

            function ei(n) {
                for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0,
                         l = ri(function (n) {
                             return n === o
                         }, c, !0), a = ri(function (n) {
                        return nt(o, n) > -1
                    }, c, !0), f = [function (n, t, i) {
                        var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                        return o = null, r
                    }]; s > i; i++)if (u = t.relative[n[i].type]) f = [ri(ui(f), u)]; else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[e]) {
                        for (r = ++i; s > r; r++)if (t.relative[n[r].type])break;
                        return fi(i > 1 && ui(f), i > 1 && yt(n.slice(0, i - 1).concat({value: " " === n[i - 2].type ? "*" : ""})).replace(at, "$1"), u, r > i && ei(n.slice(i, r)), s > r && ei(n = n.slice(r)), s > r && yt(n))
                    }
                    f.push(u)
                }
                return ui(f)
            }

            function vr(n, r) {
                var f = r.length > 0, e = n.length > 0, o = function (o, s, c, l, a) {
                    var y, nt, d, g = 0, p = "0", tt = o && [], w = [], it = ht, rt = o || e && t.find.TAG("*", a),
                        ut = v += null == it ? 1 : Math.random() || .1, ft = rt.length;
                    for (a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
                        if (e && y) {
                            for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)if (d(y, s || i, c)) {
                                l.push(y);
                                break
                            }
                            a && (v = ut)
                        }
                        f && ((y = !d && y) && g--, o && tt.push(y))
                    }
                    if (g += p, f && p !== g) {
                        for (nt = 0; d = r[nt++];)d(tt, w, s, c);
                        if (o) {
                            if (g > 0)while (p--)tt[p] || w[p] || (w[p] = gi.call(l));
                            w = pt(w)
                        }
                        k.apply(l, w);
                        a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                    }
                    return a && (v = ut, ht = it), tt
                };
                return f ? l(o) : o
            }

            var rt, f, t, st, oi, ft, wt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date,
                c = n.document, v = 0, ki = 0, hi = ni(), ci = ni(), lt = ni(), bt = function (n, t) {
                    return n === t && (ut = !0), 0
                }, li = -2147483648, di = {}.hasOwnProperty, g = [], gi = g.pop, nr = g.push, k = g.push, ai = g.slice,
                nt = function (n, t) {
                    for (var i = 0, r = n.length; r > i; i++)if (n[i] === t)return i;
                    return -1
                },
                kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                r = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
                dt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
                tr = new RegExp(r + "+", "g"), at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
                ir = new RegExp("^" + r + "*," + r + "*"), rr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
                ur = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"), fr = new RegExp(dt),
                yi = new RegExp("^" + tt + "$"), vt = {
                    ID: new RegExp("^#(" + tt + ")"),
                    CLASS: new RegExp("^\\.(" + tt + ")"),
                    TAG: new RegExp("^(" + tt + "|[*])"),
                    ATTR: new RegExp("^" + vi),
                    PSEUDO: new RegExp("^" + dt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + kt + ")$", "i"),
                    needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
                }, er = /^(?:input|select|textarea|button)$/i, or = /^h\d$/i, ot = /^[^{]+\{\s*\[native \w/,
                sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/, hr = /'|\\/g,
                y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"), p = function (n, t, i) {
                    var r = "0x" + t - 65536;
                    return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }, pi = function () {
                    b()
                };
            try {
                k.apply(g = ai.call(c.childNodes), c.childNodes);
                g[c.childNodes.length].nodeType
            } catch (yr) {
                k = {
                    apply: g.length ? function (n, t) {
                        nr.apply(n, ai.call(t))
                    } : function (n, t) {
                        for (var i = n.length, r = 0; n[i++] = t[r++];);
                        n.length = i - 1
                    }
                }
            }
            f = u.support = {};
            oi = u.isXML = function (n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            };
            b = u.setDocument = function (n) {
                var v, u, l = n ? n.ownerDocument || n : c;
                return l !== i && 9 === l.nodeType && l.documentElement ? (i = l, s = i.documentElement, h = !oi(i), (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), f.attributes = a(function (n) {
                    return n.className = "i", !n.getAttribute("className")
                }), f.getElementsByTagName = a(function (n) {
                    return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
                }), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function (n) {
                    return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length
                }), f.getById ? (t.find.ID = function (n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var i = t.getElementById(n);
                        return i ? [i] : []
                    }
                }, t.filter.ID = function (n) {
                    var t = n.replace(y, p);
                    return function (n) {
                        return n.getAttribute("id") === t
                    }
                }) : (delete t.find.ID, t.filter.ID = function (n) {
                    var t = n.replace(y, p);
                    return function (n) {
                        var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), t.find.TAG = f.getElementsByTagName ? function (n, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0
                } : function (n, t) {
                    var i, r = [], f = 0, u = t.getElementsByTagName(n);
                    if ("*" === n) {
                        while (i = u[f++])1 === i.nodeType && r.push(i);
                        return r
                    }
                    return u
                }, t.find.CLASS = f.getElementsByClassName && function (n, t) {
                        if ("undefined" != typeof t.getElementsByClassName && h)return t.getElementsByClassName(n)
                    }, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function (n) {
                    s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + kt + ")");
                    n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                    n.querySelectorAll(":checked").length || o.push(":checked");
                    n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]")
                }), a(function (n) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                    n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    o.push(",.*:")
                })), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function (n) {
                    f.disconnectedMatch = ct.call(n, "div");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", dt)
                }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function (n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n, i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function (n, t) {
                    if (t)while (t = t.parentNode)if (t === n)return !0;
                    return !1
                }, bt = v ? function (n, t) {
                    if (n === t)return ut = !0, 0;
                    var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                    return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & r || !f.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
                } : function (n, t) {
                    if (n === t)return ut = !0, 0;
                    var r, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
                    if (!o || !s)return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    if (o === s)return wi(n, t);
                    for (r = n; r = r.parentNode;)f.unshift(r);
                    for (r = t; r = r.parentNode;)e.unshift(r);
                    while (f[u] === e[u])u++;
                    return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
                }, i) : i
            };
            u.matches = function (n, t) {
                return u(n, null, null, t)
            };
            u.matchesSelector = function (n, t) {
                if ((n.ownerDocument || n) !== i && b(n), t = t.replace(ur, "='$1']"), f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t)))try {
                    var r = ct.call(n, t);
                    if (r || f.disconnectedMatch || n.document && 11 !== n.document.nodeType)return r
                } catch (e) {
                }
                return u(t, i, null, [n]).length > 0
            };
            u.contains = function (n, t) {
                return (n.ownerDocument || n) !== i && b(n), et(n, t)
            };
            u.attr = function (n, r) {
                (n.ownerDocument || n) !== i && b(n);
                var e = t.attrHandle[r.toLowerCase()],
                    u = e && di.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
                return void 0 !== u ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
            };
            u.error = function (n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            u.uniqueSort = function (n) {
                var r, u = [], t = 0, i = 0;
                if (ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(bt), ut) {
                    while (r = n[i++])r === n[i] && (t = u.push(i));
                    while (t--)n.splice(u[t], 1)
                }
                return w = null, n
            };
            st = u.getText = function (n) {
                var r, i = "", u = 0, t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent)return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling)i += st(n)
                    } else if (3 === t || 4 === t)return n.nodeValue
                } else while (r = n[u++])i += st(r);
                return i
            };
            t = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: vt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (n) {
                        return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    }, CHILD: function (n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                    }, PSEUDO: function (n) {
                        var i, t = !n[6] && n[2];
                        return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (n) {
                        var t = n.replace(y, p).toLowerCase();
                        return "*" === n ? function () {
                            return !0
                        } : function (n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (n) {
                        var t = hi[n + " "];
                        return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function (n) {
                                return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                            })
                    }, ATTR: function (n, t, i) {
                        return function (r) {
                            var f = u.attr(r, n);
                            return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    }, CHILD: function (n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3), o = "last" !== n.slice(-4), f = "of-type" === t;
                        return 1 === r && 0 === u ? function (n) {
                            return !!n.parentNode
                        } : function (t, i, h) {
                            var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling", d = t.parentNode,
                                nt = f && t.nodeName.toLowerCase(), g = !h && !f, l = !1;
                            if (d) {
                                if (s) {
                                    while (k) {
                                        for (c = t; c = c[k];)if (f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType)return !1;
                                        b = k = "only" === n && !b && "nextSibling"
                                    }
                                    return !0
                                }
                                if (b = [o ? d.firstChild : d.lastChild], o && g) {
                                    for (c = d, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)if (1 === c.nodeType && ++l && c === t) {
                                        w[n] = [v, a, l];
                                        break
                                    }
                                } else if (g && (c = t, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)while (c = ++a && c && c[k] || (l = a = 0) || b.pop())if ((f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && (y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t))break;
                                return l -= u, l === r || l % r == 0 && l / r >= 0
                            }
                        }
                    }, PSEUDO: function (n, i) {
                        var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                        return r[e] ? r(i) : r.length > 1 ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function (n, t) {
                            for (var u, f = r(n, i), e = f.length; e--;)u = nt(n, f[e]), n[u] = !(t[u] = f[e])
                        }) : function (n) {
                            return r(n, 0, f)
                        }) : r
                    }
                },
                pseudos: {
                    not: l(function (n) {
                        var t = [], r = [], i = wt(n.replace(at, "$1"));
                        return i[e] ? l(function (n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                        }) : function (n, u, f) {
                            return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                        }
                    }), has: l(function (n) {
                        return function (t) {
                            return u(n, t).length > 0
                        }
                    }), contains: l(function (n) {
                        return n = n.replace(y, p), function (t) {
                            return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                        }
                    }), lang: l(function (n) {
                        return yi.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(), function (t) {
                            var i;
                            do if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }), target: function (t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    }, root: function (n) {
                        return n === s
                    }, focus: function (n) {
                        return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    }, enabled: function (n) {
                        return n.disabled === !1
                    }, disabled: function (n) {
                        return n.disabled === !0
                    }, checked: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && !!n.checked || "option" === t && !!n.selected
                    }, selected: function (n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    }, empty: function (n) {
                        for (n = n.firstChild; n; n = n.nextSibling)if (n.nodeType < 6)return !1;
                        return !0
                    }, parent: function (n) {
                        return !t.pseudos.empty(n)
                    }, header: function (n) {
                        return or.test(n.nodeName)
                    }, input: function (n) {
                        return er.test(n.nodeName)
                    }, button: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && "button" === n.type || "button" === t
                    }, text: function (n) {
                        var t;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: it(function () {
                        return [0]
                    }), last: it(function (n, t) {
                        return [t - 1]
                    }), eq: it(function (n, t, i) {
                        return [0 > i ? i + t : i]
                    }), even: it(function (n, t) {
                        for (var i = 0; t > i; i += 2)n.push(i);
                        return n
                    }), odd: it(function (n, t) {
                        for (var i = 1; t > i; i += 2)n.push(i);
                        return n
                    }), lt: it(function (n, t, i) {
                        for (var r = 0 > i ? i + t : i; --r >= 0;)n.push(r);
                        return n
                    }), gt: it(function (n, t, i) {
                        for (var r = 0 > i ? i + t : i; ++r < t;)n.push(r);
                        return n
                    })
                }
            };
            t.pseudos.nth = t.pseudos.eq;
            for (rt in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})t.pseudos[rt] = cr(rt);
            for (rt in{submit: !0, reset: !0})t.pseudos[rt] = lr(rt);
            return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, ft = u.tokenize = function (n, i) {
                var e, f, s, o, r, h, c, l = ci[n + " "];
                if (l)return i ? 0 : l.slice(0);
                for (r = n, h = [], c = t.preFilter; r;) {
                    (!e || (f = ir.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                    e = !1;
                    (f = rr.exec(r)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(at, " ")
                    }), r = r.slice(e.length));
                    for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                        value: e,
                        type: o,
                        matches: f
                    }), r = r.slice(e.length));
                    if (!e)break
                }
                return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
            }, wt = u.compile = function (n, t) {
                var r, u = [], f = [], i = lt[n + " "];
                if (!i) {
                    for (t || (t = ft(n)), r = t.length; r--;)i = ei(t[r]), i[e] ? u.push(i) : f.push(i);
                    i = lt(n, vr(f, u));
                    i.selector = n
                }
                return i
            }, si = u.select = function (n, i, r, u) {
                var s, e, o, a, v, l = "function" == typeof n && n, c = !u && ft(n = l.selector || n);
                if (r = r || [], 1 === c.length) {
                    if (e = c[0] = c[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && f.getById && 9 === i.nodeType && h && t.relative[e[1].type]) {
                        if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0], !i)return r;
                        l && (i = i.parentNode);
                        n = n.slice(e.shift().value.length)
                    }
                    for (s = vt.needsContext.test(n) ? 0 : e.length; s--;) {
                        if (o = e[s], t.relative[a = o.type])break;
                        if ((v = t.find[a]) && (u = v(o.matches[0].replace(y, p), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                            if (e.splice(s, 1), n = u.length && yt(e), !n)return k.apply(r, u), r;
                            break
                        }
                    }
                }
                return (l || wt(n, c))(u, i, !h, r, !i || gt.test(n) && ii(i.parentNode) || i), r
            }, f.sortStable = e.split("").sort(bt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function (n) {
                return 1 & n.compareDocumentPosition(i.createElement("div"))
            }), a(function (n) {
                return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
            }) || ti("type|href|height|width", function (n, t, i) {
                if (!i)return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), f.attributes && a(function (n) {
                return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
            }) || ti("value", function (n, t, i) {
                if (!i && "input" === n.nodeName.toLowerCase())return n.defaultValue
            }), a(function (n) {
                return null == n.getAttribute("disabled")
            }) || ti(kt, function (n, t, i) {
                var r;
                if (!i)return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
            }), u
        }(n);
        i.find = p;
        i.expr = p.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.uniqueSort = i.unique = p.uniqueSort;
        i.text = p.getText;
        i.isXMLDoc = p.isXML;
        i.contains = p.contains;
        var d = function (n, t, r) {
            for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType;)if (1 === n.nodeType) {
                if (f && i(n).is(r))break;
                u.push(n)
            }
            return u
        }, tr = function (n, t) {
            for (var i = []; n; n = n.nextSibling)1 === n.nodeType && n !== t && i.push(n);
            return i
        }, ir = i.expr.match.needsContext, rr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, bf = /^.[^:#\[\.,]*$/;
        i.filter = function (n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function (n) {
                return 1 === n.nodeType
            }))
        };
        i.fn.extend({
            find: function (n) {
                var t, u = this.length, r = [], f = this;
                if ("string" != typeof n)return this.pushStack(i(n).filter(function () {
                    for (t = 0; u > t; t++)if (i.contains(f[t], this))return !0
                }));
                for (t = 0; u > t; t++)i.find(n, f[t], r);
                return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
            }, filter: function (n) {
                return this.pushStack(ri(this, n || [], !1))
            }, not: function (n) {
                return this.pushStack(ri(this, n || [], !0))
            }, is: function (n) {
                return !!ri(this, "string" == typeof n && ir.test(n) ? i(n) : n || [], !1).length
            }
        });
        fr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        er = i.fn.init = function (n, t, r) {
            var f, e;
            if (!n)return this;
            if (r = r || ur, "string" == typeof n) {
                if (f = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : fr.exec(n), !f || !f[1] && t)return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
                if (f[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), rr.test(f[1]) && i.isPlainObject(t))for (f in t)i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                    return this
                }
                return e = u.getElementById(f[2]), e && e.parentNode && (this.length = 1, this[0] = e), this.context = u, this.selector = n, this
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        };
        er.prototype = i.fn;
        ur = i(u);
        or = /^(?:parents|prev(?:Until|All))/;
        sr = {children: !0, contents: !0, next: !0, prev: !0};
        i.fn.extend({
            has: function (n) {
                var t = i(n, this), r = t.length;
                return this.filter(function () {
                    for (var n = 0; r > n; n++)if (i.contains(this, t[n]))return !0
                })
            }, closest: function (n, t) {
                for (var r, f = 0, o = this.length, u = [],
                         e = ir.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)for (r = this[f]; r && r !== t; r = r.parentNode)if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                    u.push(r);
                    break
                }
                return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
            }, index: function (n) {
                return n ? "string" == typeof n ? lt.call(i(n), this[0]) : lt.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (n, t) {
                return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
            }, addBack: function (n) {
                return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
            }
        });
        i.each({
            parent: function (n) {
                var t = n.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (n) {
                return d(n, "parentNode")
            }, parentsUntil: function (n, t, i) {
                return d(n, "parentNode", i)
            }, next: function (n) {
                return hr(n, "nextSibling")
            }, prev: function (n) {
                return hr(n, "previousSibling")
            }, nextAll: function (n) {
                return d(n, "nextSibling")
            }, prevAll: function (n) {
                return d(n, "previousSibling")
            }, nextUntil: function (n, t, i) {
                return d(n, "nextSibling", i)
            }, prevUntil: function (n, t, i) {
                return d(n, "previousSibling", i)
            }, siblings: function (n) {
                return tr((n.parentNode || {}).firstChild, n)
            }, children: function (n) {
                return tr(n.firstChild)
            }, contents: function (n) {
                return n.contentDocument || i.merge([], n.childNodes)
            }
        }, function (n, t) {
            i.fn[n] = function (r, u) {
                var f = i.map(this, t, r);
                return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (sr[n] || i.uniqueSort(f), or.test(n) && f.reverse()), this.pushStack(f)
            }
        });
        h = /\S+/g;
        i.Callbacks = function (n) {
            n = "string" == typeof n ? kf(n) : i.extend({}, n);
            var o, r, h, f, t = [], e = [], u = -1, c = function () {
                for (f = n.once, h = o = !0; e.length; u = -1)for (r = e.shift(); ++u < t.length;)t[u].apply(r[0], r[1]) === !1 && n.stopOnFalse && (u = t.length, r = !1);
                n.memory || (r = !1);
                o = !1;
                f && (t = r ? [] : "")
            }, s = {
                add: function () {
                    return t && (r && !o && (u = t.length - 1, e.push(r)), function f(r) {
                        i.each(r, function (r, u) {
                            i.isFunction(u) ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== i.type(u) && f(u)
                        })
                    }(arguments), r && !o && c()), this
                }, remove: function () {
                    return i.each(arguments, function (n, r) {
                        for (var f; (f = i.inArray(r, t, f)) > -1;)t.splice(f, 1), u >= f && u--
                    }), this
                }, has: function (n) {
                    return n ? i.inArray(n, t) > -1 : t.length > 0
                }, empty: function () {
                    return t && (t = []), this
                }, disable: function () {
                    return f = e = [], t = r = "", this
                }, disabled: function () {
                    return !t
                }, lock: function () {
                    return f = e = [], r || (t = r = ""), this
                }, locked: function () {
                    return !!f
                }, fireWith: function (n, t) {
                    return f || (t = t || [], t = [n, t.slice ? t.slice() : t], e.push(t), o || c()), this
                }, fire: function () {
                    return s.fireWith(this, arguments), this
                }, fired: function () {
                    return !!h
                }
            };
            return s
        };
        i.extend({
            Deferred: function (n) {
                var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]],
                    f = "pending", r = {
                        state: function () {
                            return f
                        }, always: function () {
                            return t.done(arguments).fail(arguments), this
                        }, then: function () {
                            var n = arguments;
                            return i.Deferred(function (f) {
                                i.each(u, function (u, e) {
                                    var o = i.isFunction(n[u]) && n[u];
                                    t[e[1]](function () {
                                        var n = o && o.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().progress(f.notify).done(f.resolve).fail(f.reject) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                    })
                                });
                                n = null
                            }).promise()
                        }, promise: function (n) {
                            return null != n ? i.extend(n, r) : r
                        }
                    }, t = {};
                return r.pipe = r.then, i.each(u, function (n, i) {
                    var e = i[2], o = i[3];
                    r[i[1]] = e.add;
                    o && e.add(function () {
                        f = o
                    }, u[1 ^ n][2].disable, u[2][2].lock);
                    t[i[0]] = function () {
                        return t[i[0] + "With"](this === t ? r : this, arguments), this
                    };
                    t[i[0] + "With"] = e.fireWith
                }), r.promise(t), n && n.call(t, t), t
            }, when: function (n) {
                var t = 0, u = v.call(arguments), r = u.length, e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                    f = 1 === e ? n : i.Deferred(), h = function (n, t, i) {
                        return function (r) {
                            t[n] = this;
                            i[n] = arguments.length > 1 ? v.call(arguments) : r;
                            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                        }
                    }, o, c, s;
                if (r > 1)for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++)u[t] && i.isFunction(u[t].promise) ? u[t].promise().progress(h(t, c, o)).done(h(t, s, u)).fail(f.reject) : --e;
                return e || f.resolveWith(s, u), f.promise()
            }
        });
        i.fn.ready = function (n) {
            return i.ready.promise().done(n), this
        };
        i.extend({
            isReady: !1, readyWait: 1, holdReady: function (n) {
                n ? i.readyWait++ : i.ready(!0)
            }, ready: function (n) {
                (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || (vt.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready"))))
            }
        });
        i.ready.promise = function (t) {
            return vt || (vt = i.Deferred(), "complete" === u.readyState || "loading" !== u.readyState && !u.documentElement.doScroll ? n.setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", yt), n.addEventListener("load", yt))), vt.promise(t)
        };
        i.ready.promise();
        a = function (n, t, r, u, f, e, o) {
            var s = 0, c = n.length, h = null == r;
            if ("object" === i.type(r)) {
                f = !0;
                for (s in r)a(n, t, s, r[s], !0, e, o)
            } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function (n, t, r) {
                    return h.call(i(n), r)
                })), t))for (; c > s; s++)t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        };
        g = function (n) {
            return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
        };
        et.uid = 1;
        et.prototype = {
            register: function (n, t) {
                var i = t || {};
                return n.nodeType ? n[this.expando] = i : Object.defineProperty(n, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), n[this.expando]
            }, cache: function (n) {
                if (!g(n))return {};
                var t = n[this.expando];
                return t || (t = {}, g(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            }, set: function (n, t, i) {
                var r, u = this.cache(n);
                if ("string" == typeof t) u[t] = i; else for (r in t)u[r] = t[r];
                return u
            }, get: function (n, t) {
                return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][t]
            }, access: function (n, t, r) {
                var u;
                return void 0 === t || t && "string" == typeof t && void 0 === r ? (u = this.get(n, t), void 0 !== u ? u : this.get(n, i.camelCase(t))) : (this.set(n, t, r), void 0 !== r ? r : t)
            }, remove: function (n, t) {
                var f, r, e, u = n[this.expando];
                if (void 0 !== u) {
                    if (void 0 === t) this.register(n); else for (i.isArray(t) ? r = t.concat(t.map(i.camelCase)) : (e = i.camelCase(t), (t in u) ? r = [t, e] : (r = e, r = (r in u) ? [r] : r.match(h) || [])), f = r.length; f--;)delete u[r[f]];
                    (void 0 === t || i.isEmptyObject(u)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
                }
            }, hasData: function (n) {
                var t = n[this.expando];
                return void 0 !== t && !i.isEmptyObject(t)
            }
        };
        var r = new et, e = new et, df = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, cr = /[A-Z]/g;
        i.extend({
            hasData: function (n) {
                return e.hasData(n) || r.hasData(n)
            }, data: function (n, t, i) {
                return e.access(n, t, i)
            }, removeData: function (n, t) {
                e.remove(n, t)
            }, _data: function (n, t, i) {
                return r.access(n, t, i)
            }, _removeData: function (n, t) {
                r.remove(n, t)
            }
        });
        i.fn.extend({
            data: function (n, t) {
                var o, f, s, u = this[0], h = u && u.attributes;
                if (void 0 === n) {
                    if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
                        for (o = h.length; o--;)h[o] && (f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), lr(u, f, s[f])));
                        r.set(u, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof n ? this.each(function () {
                    e.set(this, n)
                }) : a(this, function (t) {
                    var r, f;
                    if (u && void 0 === t) {
                        if ((r = e.get(u, n) || e.get(u, n.replace(cr, "-$&").toLowerCase()), void 0 !== r) || (f = i.camelCase(n), r = e.get(u, f), void 0 !== r) || (r = lr(u, f, void 0), void 0 !== r))return r
                    } else f = i.camelCase(n), this.each(function () {
                        var i = e.get(this, f);
                        e.set(this, f, t);
                        n.indexOf("-") > -1 && void 0 !== i && e.set(this, n, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            }, removeData: function (n) {
                return this.each(function () {
                    e.remove(this, n)
                })
            }
        });
        i.extend({
            queue: function (n, t, u) {
                var f;
                if (n)return (t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || [])
            }, dequeue: function (n, t) {
                t = t || "fx";
                var r = i.queue(n, t), e = r.length, u = r.shift(), f = i._queueHooks(n, t), o = function () {
                    i.dequeue(n, t)
                };
                "inprogress" === u && (u = r.shift(), e--);
                u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
                !e && f && f.empty.fire()
            }, _queueHooks: function (n, t) {
                var u = t + "queueHooks";
                return r.get(n, u) || r.access(n, u, {
                        empty: i.Callbacks("once memory").add(function () {
                            r.remove(n, [t + "queue", u])
                        })
                    })
            }
        });
        i.fn.extend({
            queue: function (n, t) {
                var r = 2;
                return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function () {
                    var r = i.queue(this, n, t);
                    i._queueHooks(this, n);
                    "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
                })
            }, dequeue: function (n) {
                return this.each(function () {
                    i.dequeue(this, n)
                })
            }, clearQueue: function (n) {
                return this.queue(n || "fx", [])
            }, promise: function (n, t) {
                var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function () {
                    --e || o.resolveWith(f, [f])
                };
                for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
                return h(), o.promise(t)
            }
        });
        var ar = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ot = new RegExp("^(?:([+-])=|)(" + ar + ")([a-z%]*)$", "i"), w = ["Top", "Right", "Bottom", "Left"],
            st = function (n, t) {
                return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
            };
        var yr = /^(?:checkbox|radio)$/i, pr = /<([\w:-]+)/, wr = /^$|\/(?:java|ecma)script/i, c = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };
        c.optgroup = c.option;
        c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
        c.th = c.td;
        br = /<|&#?\w+;/;
        !function () {
            var i = u.createDocumentFragment(), n = i.appendChild(u.createElement("div")), t = u.createElement("input");
            t.setAttribute("type", "radio");
            t.setAttribute("checked", "checked");
            t.setAttribute("name", "t");
            n.appendChild(t);
            f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
            n.innerHTML = "<textarea>x<\/textarea>";
            f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
        }();
        var gf = /^key/, ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, dr = /^([^.]*)(?:\.(.+)|)/;
        i.event = {
            global: {},
            add: function (n, t, u, f, e) {
                var v, y, w, p, b, c, s, l, o, k, d, a = r.get(n);
                if (a)for (u.handler && (v = u, u = v.handler, e = v.selector), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function (t) {
                    if ("undefined" != typeof i && i.event.triggered !== t.type)return i.event.dispatch.apply(n, arguments)
                }), t = (t || "").match(h) || [""], b = t.length; b--;)w = dr.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, c = i.extend({
                    type: o,
                    origType: d,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: k.join(".")
                }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)), s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[o] = !0)
            },
            remove: function (n, t, u, f, e) {
                var y, k, c, v, p, s, l, a, o, b, d, w = r.hasData(n) && r.get(n);
                if (w && (v = w.events)) {
                    for (t = (t || "").match(h) || [""], p = t.length; p--;)if (c = dr.exec(t[p]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), o) {
                        for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;)s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                        k && !a.length && (l.teardown && l.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o])
                    } else for (o in v)i.event.remove(n, o + t[p], u, f, !0);
                    i.isEmptyObject(v) && r.remove(n, "handle events")
                }
            },
            dispatch: function (n) {
                n = i.event.fix(n);
                var o, s, e, u, t, h = [], c = v.call(arguments), l = (r.get(this, "events") || {})[n.type] || [],
                    f = i.event.special[n.type] || {};
                if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                    for (h = i.event.handlers.call(this, n, l), o = 0; (u = h[o++]) && !n.isPropagationStopped();)for (n.currentTarget = u.elem, s = 0; (t = u.handlers[s++]) && !n.isImmediatePropagationStopped();)n.rnamespace && !n.rnamespace.test(t.namespace) || (n.handleObj = t, n.data = t.data, e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c), void 0 !== e && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                    return f.postDispatch && f.postDispatch.call(this, n), n.result
                }
            },
            handlers: function (n, t) {
                var e, u, f, o, h = [], s = t.delegateCount, r = n.target;
                if (s && r.nodeType && ("click" !== n.type || isNaN(n.button) || n.button < 1))for (; r !== this; r = r.parentNode || this)if (1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) {
                    for (u = [], e = 0; s > e; e++)o = t[e], f = o.selector + " ", void 0 === u[f] && (u[f] = o.needsContext ? i(f, this).index(r) > -1 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
                    u.length && h.push({elem: r, handlers: u})
                }
                return s < t.length && h.push({elem: this, handlers: t.slice(s)}), h
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (n, t) {
                    return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (n, t) {
                    var e, i, r, f = t.button;
                    return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, i = e.documentElement, r = e.body, n.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), n.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n
                }
            },
            fix: function (n) {
                if (n[i.expando])return n;
                var f, e, o, r = n.type, s = n, t = this.fixHooks[r];
                for (t || (this.fixHooks[r] = t = ne.test(r) ? this.mouseHooks : gf.test(r) ? this.keyHooks : {}), o = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(s), f = o.length; f--;)e = o[f], n[e] = s[e];
                return n.target || (n.target = u), 3 === n.target.nodeType && (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== gr() && this.focus)return (this.focus(), !1)
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === gr() && this.blur)return (this.blur(), !1)
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && i.nodeName(this, "input"))return (this.click(), !1)
                    }, _default: function (n) {
                        return i.nodeName(n.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (n) {
                        void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                    }
                }
            }
        };
        i.removeEvent = function (n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i)
        };
        i.Event = function (n, t) {
            return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? pt : nt) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
        };
        i.Event.prototype = {
            constructor: i.Event,
            isDefaultPrevented: nt,
            isPropagationStopped: nt,
            isImmediatePropagationStopped: nt,
            preventDefault: function () {
                var n = this.originalEvent;
                this.isDefaultPrevented = pt;
                n && n.preventDefault()
            },
            stopPropagation: function () {
                var n = this.originalEvent;
                this.isPropagationStopped = pt;
                n && n.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var n = this.originalEvent;
                this.isImmediatePropagationStopped = pt;
                n && n.stopImmediatePropagation();
                this.stopPropagation()
            }
        };
        i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (n, t) {
            i.event.special[n] = {
                delegateType: t, bindType: t, handle: function (n) {
                    var u, f = this, r = n.relatedTarget, e = n.handleObj;
                    return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
                }
            }
        });
        i.fn.extend({
            on: function (n, t, i, r) {
                return fi(this, n, t, i, r)
            }, one: function (n, t, i, r) {
                return fi(this, n, t, i, r, 1)
            }, off: function (n, t, r) {
                var u, f;
                if (n && n.preventDefault && n.handleObj)return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
                if ("object" == typeof n) {
                    for (f in n)this.off(f, t, n[f]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (r = t, t = void 0), r === !1 && (r = nt), this.each(function () {
                    i.event.remove(this, n, r, t)
                })
            }
        });
        var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ie = /<script|<style|<link/i, re = /checked\s*(?:[^=]|=\s*.checked.)/i, ue = /^true\/(.*)/,
            fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        i.extend({
            htmlPrefilter: function (n) {
                return n.replace(te, "<$1><\/$2>")
            }, clone: function (n, t, r) {
                var u, c, s, e, h = n.cloneNode(!0), l = i.contains(n.ownerDocument, n);
                if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))for (e = o(h), s = o(n), u = 0, c = s.length; c > u; u++)se(s[u], e[u]);
                if (t)if (r)for (s = s || o(n), e = e || o(h), u = 0, c = s.length; c > u; u++)tu(s[u], e[u]); else tu(n, h);
                return e = o(h, "script"), e.length > 0 && ui(e, !l && o(n, "script")), h
            }, cleanData: function (n) {
                for (var u, t, f, s = i.event.special, o = 0; void 0 !== (t = n[o]); o++)if (g(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)for (f in u.events)s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[e.expando] && (t[e.expando] = void 0)
                }
            }
        });
        i.fn.extend({
            domManip: b, detach: function (n) {
                return iu(this, n, !0)
            }, remove: function (n) {
                return iu(this, n)
            }, text: function (n) {
                return a(this, function (n) {
                    return void 0 === n ? i.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                    })
                }, null, n, arguments.length)
            }, append: function () {
                return b(this, arguments, function (n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = nu(this, n);
                        t.appendChild(n)
                    }
                })
            }, prepend: function () {
                return b(this, arguments, function (n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = nu(this, n);
                        t.insertBefore(n, t.firstChild)
                    }
                })
            }, before: function () {
                return b(this, arguments, function (n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                })
            }, after: function () {
                return b(this, arguments, function (n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
                })
            }, empty: function () {
                for (var n,
                         t = 0; null != (n = this[t]); t++)1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = "");
                return this
            }, clone: function (n, t) {
                return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function () {
                    return i.clone(this, n, t)
                })
            }, html: function (n) {
                return a(this, function (n) {
                    var t = this[0] || {}, r = 0, u = this.length;
                    if (void 0 === n && 1 === t.nodeType)return t.innerHTML;
                    if ("string" == typeof n && !ie.test(n) && !c[(pr.exec(n) || ["", ""])[1].toLowerCase()]) {
                        n = i.htmlPrefilter(n);
                        try {
                            for (; u > r; r++)t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                            t = 0
                        } catch (f) {
                        }
                    }
                    t && this.empty().append(n)
                }, null, n, arguments.length)
            }, replaceWith: function () {
                var n = [];
                return b(this, arguments, function (t) {
                    var r = this.parentNode;
                    i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this))
                }, n)
            }
        });
        i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (n, t) {
            i.fn[n] = function (n) {
                for (var u, f = [], e = i(n), o = e.length - 1,
                         r = 0; o >= r; r++)u = r === o ? this : this.clone(!0), i(e[r])[t](u), ti.apply(f, u.get());
                return this.pushStack(f)
            }
        });
        ei = {HTML: "block", BODY: "block"};
        var uu = /^margin/, si = new RegExp("^(" + ar + ")(?!px)[a-z%]+$", "i"), bt = function (t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = n), i.getComputedStyle(t)
        }, hi = function (n, t, i, r) {
            var f, u, e = {};
            for (u in t)e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t)n.style[u] = e[u];
            return f
        }, ht = u.documentElement;
        !function () {
            var s, e, h, c, r = u.createElement("div"), t = u.createElement("div");
            if (t.style) {
                t.style.backgroundClip = "content-box";
                t.cloneNode(!0).style.backgroundClip = "";
                f.clearCloneStyle = "content-box" === t.style.backgroundClip;
                r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
                r.appendChild(t);
                function o() {
                    t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                    t.innerHTML = "";
                    ht.appendChild(r);
                    var i = n.getComputedStyle(t);
                    s = "1%" !== i.top;
                    c = "2px" === i.marginLeft;
                    e = "4px" === i.width;
                    t.style.marginRight = "50%";
                    h = "4px" === i.marginRight;
                    ht.removeChild(r)
                }

                i.extend(f, {
                    pixelPosition: function () {
                        return o(), s
                    }, boxSizingReliable: function () {
                        return null == e && o(), e
                    }, pixelMarginRight: function () {
                        return null == e && o(), h
                    }, reliableMarginLeft: function () {
                        return null == e && o(), c
                    }, reliableMarginRight: function () {
                        var f, i = t.appendChild(u.createElement("div"));
                        return i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", ht.appendChild(r), f = !parseFloat(n.getComputedStyle(i).marginRight), ht.removeChild(r), t.removeChild(i), f
                    }
                })
            }
        }();
        var he = /^(none|table(?!-c[ea]).+)/, ce = {position: "absolute", visibility: "hidden", display: "block"},
            fu = {letterSpacing: "0", fontWeight: "400"}, eu = ["Webkit", "O", "Moz", "ms"],
            ou = u.createElement("div").style;
        i.extend({
            cssHooks: {
                opacity: {
                    get: function (n, t) {
                        if (t) {
                            var i = tt(n, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: "cssFloat"},
            style: function (n, t, r, u) {
                if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                    var e, h, o, s = i.camelCase(t), c = n.style;
                    return t = i.cssProps[s] || (i.cssProps[s] = su(s) || s), o = i.cssHooks[t] || i.cssHooks[s], void 0 === r ? o && "get" in o && void 0 !== (e = o.get(n, !1, u)) ? e : c[t] : (h = typeof r, "string" === h && (e = ot.exec(r)) && e[1] && (r = vr(n, t, e), h = "number"), null != r && r === r && ("number" === h && (r += e && e[3] || (i.cssNumber[s] ? "" : "px")), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (c[t] = r)), void 0)
                }
            },
            css: function (n, t, r, u) {
                var f, s, o, e = i.camelCase(t);
                return t = i.cssProps[e] || (i.cssProps[e] = su(e) || e), o = i.cssHooks[t] || i.cssHooks[e], o && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = tt(n, t, u)), "normal" === f && t in fu && (f = fu[t]), "" === r || r ? (s = parseFloat(f), r === !0 || isFinite(s) ? s || 0 : f) : f
            }
        });
        i.each(["height", "width"], function (n, t) {
            i.cssHooks[t] = {
                get: function (n, r, u) {
                    if (r)return he.test(i.css(n, "display")) && 0 === n.offsetWidth ? hi(n, ce, function () {
                        return lu(n, t, u)
                    }) : lu(n, t, u)
                }, set: function (n, r, u) {
                    var f, e = u && bt(n), o = u && cu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, e), e);
                    return o && (f = ot.exec(r)) && "px" !== (f[3] || "px") && (n.style[t] = r, r = i.css(n, t)), hu(n, r, o)
                }
            }
        });
        i.cssHooks.marginLeft = ci(f.reliableMarginLeft, function (n, t) {
            if (t)return (parseFloat(tt(n, "marginLeft")) || n.getBoundingClientRect().left - hi(n, {marginLeft: 0}, function () {
                    return n.getBoundingClientRect().left
                })) + "px"
        });
        i.cssHooks.marginRight = ci(f.reliableMarginRight, function (n, t) {
            if (t)return hi(n, {display: "inline-block"}, tt, [n, "marginRight"])
        });
        i.each({margin: "", padding: "", border: "Width"}, function (n, t) {
            i.cssHooks[n + t] = {
                expand: function (i) {
                    for (var r = 0, f = {},
                             u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++)f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                    return f
                }
            };
            uu.test(n) || (i.cssHooks[n + t].set = hu)
        });
        i.fn.extend({
            css: function (n, t) {
                return a(this, function (n, t, r) {
                    var f, e, o = {}, u = 0;
                    if (i.isArray(t)) {
                        for (f = bt(n), e = t.length; e > u; u++)o[t[u]] = i.css(n, t[u], !1, f);
                        return o
                    }
                    return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
                }, n, t, arguments.length > 1)
            }, show: function () {
                return au(this, !0)
            }, hide: function () {
                return au(this)
            }, toggle: function (n) {
                return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function () {
                    st(this) ? i(this).show() : i(this).hide()
                })
            }
        });
        i.Tween = s;
        s.prototype = {
            constructor: s, init: function (n, t, r, u, f, e) {
                this.elem = n;
                this.prop = r;
                this.easing = f || i.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = u;
                this.unit = e || (i.cssNumber[r] ? "" : "px")
            }, cur: function () {
                var n = s.propHooks[this.prop];
                return n && n.get ? n.get(this) : s.propHooks._default.get(this)
            }, run: function (n) {
                var t, r = s.propHooks[this.prop];
                return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
            }
        };
        s.prototype.init.prototype = s.prototype;
        s.propHooks = {
            _default: {
                get: function (n) {
                    var t;
                    return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0)
                }, set: function (n) {
                    i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
                }
            }
        };
        s.propHooks.scrollTop = s.propHooks.scrollLeft = {
            set: function (n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
            }
        };
        i.easing = {
            linear: function (n) {
                return n
            }, swing: function (n) {
                return .5 - Math.cos(n * Math.PI) / 2
            }, _default: "swing"
        };
        i.fx = s.prototype.init;
        i.fx.step = {};
        vu = /^(?:toggle|show|hide)$/;
        yu = /queueHooks$/;
        i.Animation = i.extend(l, {
            tweeners: {
                "*": [function (n, t) {
                    var i = this.createTween(n, t);
                    return vr(i.elem, n, ot.exec(t), i), i
                }]
            }, tweener: function (n, t) {
                i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(h);
                for (var r, u = 0,
                         f = n.length; f > u; u++)r = n[u], l.tweeners[r] = l.tweeners[r] || [], l.tweeners[r].unshift(t)
            }, prefilters: [le], prefilter: function (n, t) {
                t ? l.prefilters.unshift(n) : l.prefilters.push(n)
            }
        });
        i.speed = function (n, t, r) {
            var u = n && "object" == typeof n ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, null != u.queue && u.queue !== !0 || (u.queue = "fx"), u.old = u.complete, u.complete = function () {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
        };
        i.fn.extend({
            fadeTo: function (n, t, i, r) {
                return this.filter(st).css("opacity", 0).show().end().animate({opacity: t}, n, i, r)
            }, animate: function (n, t, u, f) {
                var s = i.isEmptyObject(n), o = i.speed(t, u, f), e = function () {
                    var t = l(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
                return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
            }, stop: function (n, t, u) {
                var f = function (n) {
                    var t = n.stop;
                    delete n.stop;
                    t(u)
                };
                return "string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function () {
                    var s = !0, t = null != n && n + "queueHooks", o = i.timers, e = r.get(this);
                    if (t) e[t] && e[t].stop && f(e[t]); else for (t in e)e[t] && e[t].stop && yu.test(t) && f(e[t]);
                    for (t = o.length; t--;)o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                    !s && u || i.dequeue(this, n)
                })
            }, finish: function (n) {
                return n !== !1 && (n = n || "fx"), this.each(function () {
                    var t, e = r.get(this), u = e[n + "queue"], o = e[n + "queueHooks"], f = i.timers,
                        s = u ? u.length : 0;
                    for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;)f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                    for (t = 0; s > t; t++)u[t] && u[t].finish && u[t].finish.call(this);
                    delete e.finish
                })
            }
        });
        i.each(["toggle", "show", "hide"], function (n, t) {
            var r = i.fn[t];
            i.fn[t] = function (n, i, u) {
                return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(dt(t, !0), n, i, u)
            }
        });
        i.each({
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (n, t) {
            i.fn[n] = function (n, i, r) {
                return this.animate(t, n, i, r)
            }
        });
        i.timers = [];
        i.fx.tick = function () {
            var r, n = 0, t = i.timers;
            for (it = i.now(); n < t.length; n++)r = t[n], r() || t[n] !== r || t.splice(n--, 1);
            t.length || i.fx.stop();
            it = void 0
        };
        i.fx.timer = function (n) {
            i.timers.push(n);
            n() ? i.fx.start() : i.timers.pop()
        };
        i.fx.interval = 13;
        i.fx.start = function () {
            kt || (kt = n.setInterval(i.fx.tick, i.fx.interval))
        };
        i.fx.stop = function () {
            n.clearInterval(kt);
            kt = null
        };
        i.fx.speeds = {slow: 600, fast: 200, _default: 400};
        i.fn.delay = function (t, r) {
            return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function (i, r) {
                var u = n.setTimeout(i, t);
                r.stop = function () {
                    n.clearTimeout(u)
                }
            })
        }, function () {
            var n = u.createElement("input"), t = u.createElement("select"),
                i = t.appendChild(u.createElement("option"));
            n.type = "checkbox";
            f.checkOn = "" !== n.value;
            f.optSelected = i.selected;
            t.disabled = !0;
            f.optDisabled = !i.disabled;
            n = u.createElement("input");
            n.value = "t";
            n.type = "radio";
            f.radioValue = "t" === n.value
        }();
        rt = i.expr.attrHandle;
        i.fn.extend({
            attr: function (n, t) {
                return a(this, i.attr, n, t, arguments.length > 1)
            }, removeAttr: function (n) {
                return this.each(function () {
                    i.removeAttr(this, n)
                })
            }
        });
        i.extend({
            attr: function (n, t, r) {
                var u, f, e = n.nodeType;
                if (3 !== e && 8 !== e && 2 !== e)return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), f = i.attrHooks[t] || (i.expr.match.bool.test(t) ? bu : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : f && "set" in f && void 0 !== (u = f.set(n, r, t)) ? u : (n.setAttribute(t, r + ""), r) : f && "get" in f && null !== (u = f.get(n, t)) ? u : (u = i.find.attr(n, t), null == u ? void 0 : u))
            }, attrHooks: {
                type: {
                    set: function (n, t) {
                        if (!f.radioValue && "radio" === t && i.nodeName(n, "input")) {
                            var r = n.value;
                            return n.setAttribute("type", t), r && (n.value = r), t
                        }
                    }
                }
            }, removeAttr: function (n, t) {
                var r, u, e = 0, f = t && t.match(h);
                if (f && 1 === n.nodeType)while (r = f[e++])u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r)
            }
        });
        bu = {
            set: function (n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
            }
        };
        i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
            var r = rt[t] || i.find.attr;
            rt[t] = function (n, t, i) {
                var u, f;
                return i || (f = rt[t], rt[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, rt[t] = f), u
            }
        });
        ku = /^(?:input|select|textarea|button)$/i;
        du = /^(?:a|area)$/i;
        i.fn.extend({
            prop: function (n, t) {
                return a(this, i.prop, n, t, arguments.length > 1)
            }, removeProp: function (n) {
                return this.each(function () {
                    delete this[i.propFix[n] || n]
                })
            }
        });
        i.extend({
            prop: function (n, t, r) {
                var f, u, e = n.nodeType;
                if (3 !== e && 8 !== e && 2 !== e)return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
            }, propHooks: {
                tabIndex: {
                    get: function (n) {
                        var t = i.find.attr(n, "tabindex");
                        return t ? parseInt(t, 10) : ku.test(n.nodeName) || du.test(n.nodeName) && n.href ? 0 : -1
                    }
                }
            }, propFix: {"for": "htmlFor", "class": "className"}
        });
        f.optSelected || (i.propHooks.selected = {
            get: function (n) {
                var t = n.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }, set: function (n) {
                var t = n.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        });
        i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            i.propFix[this.toLowerCase()] = this
        });
        gt = /[\t\r\n\f]/g;
        i.fn.extend({
            addClass: function (n) {
                var o, t, r, u, f, s, e, c = 0;
                if (i.isFunction(n))return this.each(function (t) {
                    i(this).addClass(n.call(this, t, k(this)))
                });
                if ("string" == typeof n && n)for (o = n.match(h) || []; t = this[c++];)if (u = k(t), r = 1 === t.nodeType && (" " + u + " ").replace(gt, " ")) {
                    for (s = 0; f = o[s++];)r.indexOf(" " + f + " ") < 0 && (r += f + " ");
                    e = i.trim(r);
                    u !== e && t.setAttribute("class", e)
                }
                return this
            }, removeClass: function (n) {
                var o, r, t, u, f, s, e, c = 0;
                if (i.isFunction(n))return this.each(function (t) {
                    i(this).removeClass(n.call(this, t, k(this)))
                });
                if (!arguments.length)return this.attr("class", "");
                if ("string" == typeof n && n)for (o = n.match(h) || []; r = this[c++];)if (u = k(r), t = 1 === r.nodeType && (" " + u + " ").replace(gt, " ")) {
                    for (s = 0; f = o[s++];)while (t.indexOf(" " + f + " ") > -1)t = t.replace(" " + f + " ", " ");
                    e = i.trim(t);
                    u !== e && r.setAttribute("class", e)
                }
                return this
            }, toggleClass: function (n, t) {
                var u = typeof n;
                return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function (r) {
                    i(this).toggleClass(n.call(this, r, k(this), t), t)
                }) : this.each(function () {
                    var t, e, f, o;
                    if ("string" === u)for (e = 0, f = i(this), o = n.match(h) || []; t = o[e++];)f.hasClass(t) ? f.removeClass(t) : f.addClass(t); else void 0 !== n && "boolean" !== u || (t = k(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
                })
            }, hasClass: function (n) {
                for (var t, r = 0,
                         i = " " + n + " "; t = this[r++];)if (1 === t.nodeType && (" " + k(t) + " ").replace(gt, " ").indexOf(i) > -1)return !0;
                return !1
            }
        });
        gu = /\r/g;
        nf = /[\x20\t\r\n\f]+/g;
        i.fn.extend({
            val: function (n) {
                var t, r, f, u = this[0];
                return arguments.length ? (f = i.isFunction(n), this.each(function (r) {
                    var u;
                    1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function (n) {
                            return null == n ? "" : n + ""
                        })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
                })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(gu, "") : null == r ? "" : r)) : void 0
            }
        });
        i.extend({
            valHooks: {
                option: {
                    get: function (n) {
                        var t = i.find.attr(n, "value");
                        return null != t ? t : i.trim(i.text(n)).replace(nf, " ")
                    }
                }, select: {
                    get: function (n) {
                        for (var o, t, s = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r,
                                 h = u ? null : [], c = u ? r + 1 : s.length,
                                 e = 0 > r ? c : u ? r : 0; c > e; e++)if (t = s[e], (t.selected || e === r) && (f.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(), u)return o;
                            h.push(o)
                        }
                        return h
                    }, set: function (n, t) {
                        for (var u, r, f = n.options, e = i.makeArray(t),
                                 o = f.length; o--;)r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
                        return u || (n.selectedIndex = -1), e
                    }
                }
            }
        });
        i.each(["radio", "checkbox"], function () {
            i.valHooks[this] = {
                set: function (n, t) {
                    if (i.isArray(t))return n.checked = i.inArray(i(n).val(), t) > -1
                }
            };
            f.checkOn || (i.valHooks[this].get = function (n) {
                return null === n.getAttribute("value") ? "on" : n.value
            })
        });
        li = /^(?:focusinfocus|focusoutblur)$/;
        i.extend(i.event, {
            trigger: function (t, f, e, o) {
                var w, s, c, b, a, v, l, p = [e || u], h = ft.call(t, "type") ? t.type : t,
                    y = ft.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !li.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                    if (!o && !l.noBubble && !i.isWindow(e)) {
                        for (b = l.delegateType || h, li.test(b + h) || (s = s.parentNode); s; s = s.parentNode)p.push(s), c = s;
                        c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                    }
                    for (w = 0; (s = p[w++]) && !t.isPropagationStopped();)t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && g(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                    return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !g(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result
                }
            }, simulate: function (n, t, r) {
                var u = i.extend(new i.Event, r, {type: n, isSimulated: !0});
                i.event.trigger(u, null, t);
                u.isDefaultPrevented() && r.preventDefault()
            }
        });
        i.fn.extend({
            trigger: function (n, t) {
                return this.each(function () {
                    i.event.trigger(n, t, this)
                })
            }, triggerHandler: function (n, t) {
                var r = this[0];
                if (r)return i.event.trigger(n, t, r, !0)
            }
        });
        i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
            i.fn[t] = function (n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        });
        i.fn.extend({
            hover: function (n, t) {
                return this.mouseenter(n).mouseleave(t || n)
            }
        });
        f.focusin = "onfocusin" in n;
        f.focusin || i.each({focus: "focusin", blur: "focusout"}, function (n, t) {
            var u = function (n) {
                i.event.simulate(t, n.target, i.event.fix(n))
            };
            i.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this, f = r.access(i, t);
                    f || i.addEventListener(n, u, !0);
                    r.access(i, t, (f || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, f = r.access(i, t) - 1;
                    f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
                }
            }
        });
        var ct = n.location, ai = i.now(), vi = /\?/;
        i.parseJSON = function (n) {
            return JSON.parse(n + "")
        };
        i.parseXML = function (t) {
            var r;
            if (!t || "string" != typeof t)return null;
            try {
                r = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (u) {
                r = void 0
            }
            return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
        };
        var ve = /#.*$/, tf = /([?&])_=[^&]*/, ye = /^(.*?):[ \t]*([^\r\n]*)$/gm, pe = /^(?:GET|HEAD)$/, we = /^\/\//,
            rf = {}, yi = {}, uf = "*/".concat("*"), pi = u.createElement("a");
        pi.href = ct.href;
        i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ct.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": uf,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": i.parseJSON, "text xml": i.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (n, t) {
                return t ? wi(wi(n, i.ajaxSettings), t) : wi(i.ajaxSettings, n)
            },
            ajaxPrefilter: ff(rf),
            ajaxTransport: ff(yi),
            ajax: function (t, r) {
                function b(t, r, u, h) {
                    var a, rt, it, p, b, l = r;
                    2 !== s && (s = 2, d && n.clearTimeout(d), v = void 0, k = h || "", e.readyState = t > 0 ? 4 : 0, a = t >= 200 && 300 > t || 304 === t, u && (p = be(f, e, u)), p = ke(f, p, e, a), a ? (f.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), 204 === t || "HEAD" === f.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, it = p.error, a = !it)) : (it = l, !t && l || (l = "error", 0 > t && (t = 0))), e.status = t, e.statusText = (r || l) + "", a ? nt.resolveWith(c, [rt, l, e]) : nt.rejectWith(c, [e, l, it]), e.statusCode(w), w = void 0, y && g.trigger(a ? "ajaxSuccess" : "ajaxError", [e, f, a ? rt : it]), tt.fireWith(c, [e, l]), y && (g.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (r = t, t = void 0);
                r = r || {};
                var v, o, k, p, d, l, y, a, f = i.ajaxSetup({}, r), c = f.context || f,
                    g = f.context && (c.nodeType || c.jquery) ? i(c) : i.event, nt = i.Deferred(),
                    tt = i.Callbacks("once memory"), w = f.statusCode || {}, it = {}, rt = {}, s = 0, ut = "canceled",
                    e = {
                        readyState: 0, getResponseHeader: function (n) {
                            var t;
                            if (2 === s) {
                                if (!p)for (p = {}; t = ye.exec(k);)p[t[1].toLowerCase()] = t[2];
                                t = p[n.toLowerCase()]
                            }
                            return null == t ? null : t
                        }, getAllResponseHeaders: function () {
                            return 2 === s ? k : null
                        }, setRequestHeader: function (n, t) {
                            var i = n.toLowerCase();
                            return s || (n = rt[i] = rt[i] || n, it[n] = t), this
                        }, overrideMimeType: function (n) {
                            return s || (f.mimeType = n), this
                        }, statusCode: function (n) {
                            var t;
                            if (n)if (2 > s)for (t in n)w[t] = [w[t], n[t]]; else e.always(n[e.status]);
                            return this
                        }, abort: function (n) {
                            var t = n || ut;
                            return v && v.abort(t), b(0, t), this
                        }
                    };
                if (nt.promise(e).complete = tt.add, e.success = e.done, e.error = e.fail, f.url = ((t || f.url || ct.href) + "").replace(ve, "").replace(we, ct.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = i.trim(f.dataType || "*").toLowerCase().match(h) || [""], null == f.crossDomain) {
                    l = u.createElement("a");
                    try {
                        l.href = f.url;
                        l.href = l.href;
                        f.crossDomain = pi.protocol + "//" + pi.host != l.protocol + "//" + l.host
                    } catch (ft) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = i.param(f.data, f.traditional)), ef(rf, f, r, e), 2 === s)return e;
                y = i.event && f.global;
                y && 0 == i.active++ && i.event.trigger("ajaxStart");
                f.type = f.type.toUpperCase();
                f.hasContent = !pe.test(f.type);
                o = f.url;
                f.hasContent || (f.data && (o = f.url += (vi.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = tf.test(o) ? o.replace(tf, "$1_=" + ai++) : o + (vi.test(o) ? "&" : "?") + "_=" + ai++));
                f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
                (f.data && f.hasContent && f.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", f.contentType);
                e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + uf + "; q=0.01" : "") : f.accepts["*"]);
                for (a in f.headers)e.setRequestHeader(a, f.headers[a]);
                if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || 2 === s))return e.abort();
                ut = "abort";
                for (a in{success: 1, error: 1, complete: 1})e[a](f[a]);
                if (v = ef(yi, f, r, e)) {
                    if (e.readyState = 1, y && g.trigger("ajaxSend", [e, f]), 2 === s)return e;
                    f.async && f.timeout > 0 && (d = n.setTimeout(function () {
                        e.abort("timeout")
                    }, f.timeout));
                    try {
                        s = 1;
                        v.send(it, b)
                    } catch (ft) {
                        if (!(2 > s))throw ft;
                        b(-1, ft)
                    }
                } else b(-1, "No Transport");
                return e
            },
            getJSON: function (n, t, r) {
                return i.get(n, t, r, "json")
            },
            getScript: function (n, t) {
                return i.get(n, void 0, t, "script")
            }
        });
        i.each(["get", "post"], function (n, t) {
            i[t] = function (n, r, u, f) {
                return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax(i.extend({
                    url: n,
                    type: t,
                    dataType: f,
                    data: r,
                    success: u
                }, i.isPlainObject(n) && n))
            }
        });
        i._evalUrl = function (n) {
            return i.ajax({url: n, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
        };
        i.fn.extend({
            wrapAll: function (n) {
                var t;
                return i.isFunction(n) ? this.each(function (t) {
                    i(this).wrapAll(n.call(this, t))
                }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var n = this; n.firstElementChild;)n = n.firstElementChild;
                    return n
                }).append(this)), this)
            }, wrapInner: function (n) {
                return i.isFunction(n) ? this.each(function (t) {
                    i(this).wrapInner(n.call(this, t))
                }) : this.each(function () {
                    var t = i(this), r = t.contents();
                    r.length ? r.wrapAll(n) : t.append(n)
                })
            }, wrap: function (n) {
                var t = i.isFunction(n);
                return this.each(function (r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        i.expr.filters.hidden = function (n) {
            return !i.expr.filters.visible(n)
        };
        i.expr.filters.visible = function (n) {
            return n.offsetWidth > 0 || n.offsetHeight > 0 || n.getClientRects().length > 0
        };
        var de = /%20/g, ge = /\[\]$/, of = /\r?\n/g, no = /^(?:submit|button|image|reset|file)$/i,
            to = /^(?:input|select|textarea|keygen)/i;
        return i.param = function (n, t) {
            var r, u = [], f = function (n, t) {
                t = i.isFunction(t) ? t() : null == t ? "" : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
                f(this.name, this.value)
            }); else for (r in n)bi(r, n[r], t, f);
            return u.join("&").replace(de, "+")
        }, i.fn.extend({
            serialize: function () {
                return i.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var n = i.prop(this, "elements");
                    return n ? i.makeArray(n) : this
                }).filter(function () {
                    var n = this.type;
                    return this.name && !i(this).is(":disabled") && to.test(this.nodeName) && !no.test(n) && (this.checked || !yr.test(n))
                }).map(function (n, t) {
                    var r = i(this).val();
                    return null == r ? null : i.isArray(r) ? i.map(r, function (n) {
                        return {name: t.name, value: n.replace(of, "\r\n")}
                    }) : {name: t.name, value: r.replace(of, "\r\n")}
                }).get()
            }
        }), i.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (t) {
            }
        }, sf = {
            0: 200,
            1223: 204
        }, ut = i.ajaxSettings.xhr(), f.cors = !!ut && "withCredentials" in ut, f.ajax = ut = !!ut, i.ajaxTransport(function (t) {
            var i, r;
            if (f.cors || ut && !t.crossDomain)return {
                send: function (u, f) {
                    var o, e = t.xhr();
                    if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)e[o] = t.xhrFields[o];
                    t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                    t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                    for (o in u)e.setRequestHeader(o, u[o]);
                    i = function (n) {
                        return function () {
                            i && (i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(sf[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {binary: e.response} : {text: e.responseText}, e.getAllResponseHeaders()))
                        }
                    };
                    e.onload = i();
                    r = e.onerror = i("error");
                    void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function () {
                        4 === e.readyState && n.setTimeout(function () {
                            i && r()
                        })
                    };
                    i = i("abort");
                    try {
                        e.send(t.hasContent && t.data || null)
                    } catch (s) {
                        if (i)throw s;
                    }
                }, abort: function () {
                    i && i()
                }
            }
        }), i.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (n) {
                    return i.globalEval(n), n
                }
            }
        }), i.ajaxPrefilter("script", function (n) {
            void 0 === n.cache && (n.cache = !1);
            n.crossDomain && (n.type = "GET")
        }), i.ajaxTransport("script", function (n) {
            if (n.crossDomain) {
                var r, t;
                return {
                    send: function (f, e) {
                        r = i("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", t = function (n) {
                            r.remove();
                            t = null;
                            n && e("error" === n.type ? 404 : 200, n.type)
                        });
                        u.head.appendChild(r[0])
                    }, abort: function () {
                        t && t()
                    }
                }
            }
        }), ki = [], ni = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var n = ki.pop() || i.expando + "_" + ai++;
                return this[n] = !0, n
            }
        }), i.ajaxPrefilter("json jsonp", function (t, r, u) {
            var f, e, o,
                s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (vi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function () {
                return o || i.error(f + " was not called"), o[0]
            }, t.dataTypes[0] = "json", e = n[f], n[f] = function () {
                o = arguments
            }, u.always(function () {
                void 0 === e ? i(n).removeProp(f) : n[f] = e;
                t[f] && (t.jsonpCallback = r.jsonpCallback, ki.push(f));
                o && i.isFunction(e) && e(o[0]);
                o = e = void 0
            }), "script")
        }), i.parseHTML = function (n, t, r) {
            if (!n || "string" != typeof n)return null;
            "boolean" == typeof t && (r = t, t = !1);
            t = t || u;
            var f = rr.exec(n), e = !r && [];
            return f ? [t.createElement(f[1])] : (f = kr([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
        }, di = i.fn.load, i.fn.load = function (n, t, r) {
            if ("string" != typeof n && di)return di.apply(this, arguments);
            var u, o, s, f = this, e = n.indexOf(" ");
            return e > -1 && (u = i.trim(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({
                url: n,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function (n) {
                s = arguments;
                f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
            }).always(r && function (n, t) {
                    f.each(function () {
                        r.apply(this, s || [n.responseText, t, n])
                    })
                }), this
        }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (n, t) {
            i.fn[t] = function (n) {
                return this.on(t, n)
            }
        }), i.expr.filters.animated = function (n) {
            return i.grep(i.timers, function (t) {
                return n === t.elem
            }).length
        }, i.offset = {
            setOffset: function (n, t, r) {
                var e, o, s, h, u, c, v, l = i.css(n, "position"), a = i(n), f = {};
                "static" === l && (n.style.position = "relative");
                u = a.offset();
                s = i.css(n, "top");
                c = i.css(n, "left");
                v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
                v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
                i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
                null != t.top && (f.top = t.top - u.top + h);
                null != t.left && (f.left = t.left - u.left + o);
                "using" in t ? t.using.call(n, f) : a.css(f)
            }
        }, i.fn.extend({
            offset: function (n) {
                if (arguments.length)return void 0 === n ? this : this.each(function (t) {
                    i.offset.setOffset(this, n, t)
                });
                var t, f, r = this[0], u = {top: 0, left: 0}, e = r && r.ownerDocument;
                if (e)return t = e.documentElement, i.contains(t, r) ? (u = r.getBoundingClientRect(), f = hf(e), {
                    top: u.top + f.pageYOffset - t.clientTop,
                    left: u.left + f.pageXOffset - t.clientLeft
                }) : u
            }, position: function () {
                if (this[0]) {
                    var n, r, u = this[0], t = {top: 0, left: 0};
                    return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                        top: r.top - t.top - i.css(u, "marginTop", !0),
                        left: r.left - t.left - i.css(u, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var n = this.offsetParent; n && "static" === i.css(n, "position");)n = n.offsetParent;
                    return n || ht
                })
            }
        }), i.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (n, t) {
            var r = "pageYOffset" === t;
            i.fn[n] = function (i) {
                return a(this, function (n, i, u) {
                    var f = hf(n);
                    return void 0 === u ? f ? f[t] : n[i] : void(f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u)
                }, n, i, arguments.length)
            }
        }), i.each(["top", "left"], function (n, t) {
            i.cssHooks[t] = ci(f.pixelPosition, function (n, r) {
                if (r)return (r = tt(n, t), si.test(r) ? i(n).position()[t] + "px" : r)
            })
        }), i.each({Height: "height", Width: "width"}, function (n, t) {
            i.each({padding: "inner" + n, content: t, "": "outer" + n}, function (r, u) {
                i.fn[u] = function (u, f) {
                    var e = arguments.length && (r || "boolean" != typeof u),
                        o = r || (u === !0 || f === !0 ? "margin" : "border");
                    return a(this, function (t, r, u) {
                        var f;
                        return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                    }, t, e ? u : void 0, e, null)
                }
            })
        }), i.fn.extend({
            bind: function (n, t, i) {
                return this.on(n, null, t, i)
            }, unbind: function (n, t) {
                return this.off(n, null, t)
            }, delegate: function (n, t, i, r) {
                return this.on(t, n, i, r)
            }, undelegate: function (n, t, i) {
                return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
            }, size: function () {
                return this.length
            }
        }), i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return i
        }), cf = n.jQuery, lf = n.$, i.noConflict = function (t) {
            return n.$ === i && (n.$ = lf), t && n.jQuery === i && (n.jQuery = cf), i
        }, t || (n.jQuery = n.$ = i), i
    }), function (n) {
        "function" == typeof define && define.amd ? define(["jquery"], n) : n(jQuery)
    }(function (n) {
        function h(t, i) {
            var r, u, f, e = t.nodeName.toLowerCase();
            return "area" === e ? (r = t.parentNode, u = r.name, t.href && u && "map" === r.nodeName.toLowerCase() ? (f = n("img[usemap='#" + u + "']")[0], !!f && c(f)) : !1) : (/^(input|select|textarea|button|object)$/.test(e) ? !t.disabled : "a" === e ? t.href || i : i) && c(t)
        }

        function c(t) {
            return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function () {
                    return "hidden" === n.css(this, "visibility")
                }).length
        }

        function k(n) {
            for (var t, i; n.length && n[0] !== document;) {
                if (t = n.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(n.css("zIndex"), 10), !isNaN(i) && 0 !== i))return i;
                n = n.parent()
            }
            return 0
        }

        function l() {
            this._curInst = null;
            this._keyEvent = !1;
            this._disabledInputs = [];
            this._datepickerShowing = !1;
            this._inDialog = !1;
            this._mainDivId = "ui-datepicker-div";
            this._inlineClass = "ui-datepicker-inline";
            this._appendClass = "ui-datepicker-append";
            this._triggerClass = "ui-datepicker-trigger";
            this._dialogClass = "ui-datepicker-dialog";
            this._disableClass = "ui-datepicker-disabled";
            this._unselectableClass = "ui-datepicker-unselectable";
            this._currentClass = "ui-datepicker-current-day";
            this._dayOverClass = "ui-datepicker-days-cell-over";
            this.regional = [];
            this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            };
            n.extend(this._defaults, this.regional[""]);
            this.regional.en = n.extend(!0, {}, this.regional[""]);
            this.regional["en-US"] = n.extend(!0, {}, this.regional.en);
            this.dpDiv = a(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
        }

        function a(t) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(i, "mouseout", function () {
                n(this).removeClass("ui-state-hover");
                -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).removeClass("ui-datepicker-prev-hover");
                -1 !== this.className.indexOf("ui-datepicker-next") && n(this).removeClass("ui-datepicker-next-hover")
            }).delegate(i, "mouseover", v)
        }

        function v() {
            n.datepicker._isDisabledDatepicker(i.inline ? i.dpDiv.parent()[0] : i.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && n(this).addClass("ui-datepicker-next-hover"))
        }

        function u(t, i) {
            n.extend(t, i);
            for (var r in i)null == i[r] && (t[r] = i[r]);
            return t
        }

        function t(n) {
            return function () {
                var t = this.element.val();
                n.apply(this, arguments);
                this._refresh();
                t !== this.element.val() && this._trigger("change")
            }
        }

        var y, f, r, i, o, s;
        n.ui = n.ui || {};
        n.extend(n.ui, {
            version: "1.11.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        });
        n.fn.extend({
            scrollParent: function (t) {
                var i = this.css("position"), u = "absolute" === i, f = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    r = this.parents().filter(function () {
                        var t = n(this);
                        return u && "static" === t.css("position") ? !1 : f.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== i && r.length ? r : n(this[0].ownerDocument || document)
            }, uniqueId: function () {
                var n = 0;
                return function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++n)
                    })
                }
            }(), removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && n(this).removeAttr("id")
                })
            }
        });
        n.extend(n.expr[":"], {
            data: n.expr.createPseudo ? n.expr.createPseudo(function (t) {
                return function (i) {
                    return !!n.data(i, t)
                }
            }) : function (t, i, r) {
                return !!n.data(t, r[3])
            }, focusable: function (t) {
                return h(t, !isNaN(n.attr(t, "tabindex")))
            }, tabbable: function (t) {
                var i = n.attr(t, "tabindex"), r = isNaN(i);
                return (r || i >= 0) && h(t, !r)
            }
        });
        n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function (t, i) {
            function r(t, i, r, u) {
                return n.each(e, function () {
                    i -= parseFloat(n.css(t, "padding" + this)) || 0;
                    r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0);
                    u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
                }), i
            }

            var e = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], u = i.toLowerCase(), f = {
                innerWidth: n.fn.innerWidth,
                innerHeight: n.fn.innerHeight,
                outerWidth: n.fn.outerWidth,
                outerHeight: n.fn.outerHeight
            };
            n.fn["inner" + i] = function (t) {
                return void 0 === t ? f["inner" + i].call(this) : this.each(function () {
                    n(this).css(u, r(this, t) + "px")
                })
            };
            n.fn["outer" + i] = function (t, e) {
                return "number" != typeof t ? f["outer" + i].call(this, t) : this.each(function () {
                    n(this).css(u, r(this, t, !0, e) + "px")
                })
            }
        });
        n.fn.addBack || (n.fn.addBack = function (n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        });
        n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function (t) {
            return function (i) {
                return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this)
            }
        }(n.fn.removeData));
        n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        n.fn.extend({
            focus: function (t) {
                return function (i, r) {
                    return "number" == typeof i ? this.each(function () {
                        var t = this;
                        setTimeout(function () {
                            n(t).focus();
                            r && r.call(t)
                        }, i)
                    }) : t.apply(this, arguments)
                }
            }(n.fn.focus), disableSelection: function () {
                var n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function () {
                    return this.bind(n + ".ui-disableSelection", function (n) {
                        n.preventDefault()
                    })
                }
            }(), enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            }, zIndex: function (t) {
                if (void 0 !== t)return this.css("zIndex", t);
                if (this.length)for (var r, u, i = n(this[0]); i.length && i[0] !== document;) {
                    if (r = i.css("position"), ("absolute" === r || "relative" === r || "fixed" === r) && (u = parseInt(i.css("zIndex"), 10), !isNaN(u) && 0 !== u))return u;
                    i = i.parent()
                }
                return 0
            }
        });
        n.ui.plugin = {
            add: function (t, i, r) {
                var u, f = n.ui[t].prototype;
                for (u in r)f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]])
            }, call: function (n, t, i, r) {
                var u, f = n.plugins[t];
                if (f && (r || n.element[0].parentNode && 11 !== n.element[0].parentNode.nodeType))for (u = 0; f.length > u; u++)n.options[f[u][0]] && f[u][1].apply(n.element, i)
            }
        };
        y = 0;
        f = Array.prototype.slice;
        n.cleanData = function (t) {
            return function (i) {
                for (var r, u, f = 0; null != (u = i[f]); f++)try {
                    r = n._data(u, "events");
                    r && r.remove && n(u).triggerHandler("remove")
                } catch (e) {
                }
                t(i)
            }
        }(n.cleanData);
        n.widget = function (t, i, r) {
            var s, f, u, o, h = {}, e = t.split(".")[0];
            return t = t.split(".")[1], s = e + "-" + t, r || (r = i, i = n.Widget), n.expr[":"][s.toLowerCase()] = function (t) {
                return !!n.data(t, s)
            }, n[e] = n[e] || {}, f = n[e][t], u = n[e][t] = function (n, t) {
                return this._createWidget ? (arguments.length && this._createWidget(n, t), void 0) : new u(n, t)
            }, n.extend(u, f, {
                version: r.version,
                _proto: n.extend({}, r),
                _childConstructors: []
            }), o = new i, o.options = n.widget.extend({}, o.options), n.each(r, function (t, r) {
                return n.isFunction(r) ? (h[t] = function () {
                    var n = function () {
                        return i.prototype[t].apply(this, arguments)
                    }, u = function (n) {
                        return i.prototype[t].apply(this, n)
                    };
                    return function () {
                        var t, i = this._super, f = this._superApply;
                        return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t
                    }
                }(), void 0) : (h[t] = r, void 0)
            }), u.prototype = n.widget.extend(o, {widgetEventPrefix: f ? o.widgetEventPrefix || t : t}, h, {
                constructor: u,
                namespace: e,
                widgetName: t,
                widgetFullName: s
            }), f ? (n.each(f._childConstructors, function (t, i) {
                var r = i.prototype;
                n.widget(r.namespace + "." + r.widgetName, u, i._proto)
            }), delete f._childConstructors) : i._childConstructors.push(u), n.widget.bridge(t, u), u
        };
        n.widget.extend = function (t) {
            for (var i, r, e = f.call(arguments, 1), u = 0,
                     o = e.length; o > u; u++)for (i in e[u])r = e[u][i], e[u].hasOwnProperty(i) && void 0 !== r && (t[i] = n.isPlainObject(r) ? n.isPlainObject(t[i]) ? n.widget.extend({}, t[i], r) : n.widget.extend({}, r) : r);
            return t
        };
        n.widget.bridge = function (t, i) {
            var r = i.prototype.widgetFullName || t;
            n.fn[t] = function (u) {
                var s = "string" == typeof u, o = f.call(arguments, 1), e = this;
                return s ? this.each(function () {
                    var i, f = n.data(this, r);
                    return "instance" === u ? (e = f, !1) : f ? n.isFunction(f[u]) && "_" !== u.charAt(0) ? (i = f[u].apply(f, o), i !== f && void 0 !== i ? (e = i && i.jquery ? e.pushStack(i.get()) : i, !1) : void 0) : n.error("no such method '" + u + "' for " + t + " widget instance") : n.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + u + "'")
                }) : (o.length && (u = n.widget.extend.apply(null, [u].concat(o))), this.each(function () {
                    var t = n.data(this, r);
                    t ? (t.option(u || {}), t._init && t._init()) : n.data(this, r, new i(u, this))
                })), e
            }
        };
        n.Widget = function () {
        };
        n.Widget._childConstructors = [];
        n.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {disabled: !1, create: null},
            _createWidget: function (t, i) {
                i = n(i || this.defaultElement || this)[0];
                this.element = n(i);
                this.uuid = y++;
                this.eventNamespace = "." + this.widgetName + this.uuid;
                this.bindings = n();
                this.hoverable = n();
                this.focusable = n();
                i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (n) {
                        n.target === i && this.destroy()
                    }
                }), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
                this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
                this._create();
                this._trigger("create", null, this._getCreateEventData());
                this._init()
            },
            _getCreateOptions: n.noop,
            _getCreateEventData: n.noop,
            _create: n.noop,
            _init: n.noop,
            destroy: function () {
                this._destroy();
                this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));
                this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
                this.bindings.unbind(this.eventNamespace);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            },
            _destroy: n.noop,
            widget: function () {
                return this.element
            },
            option: function (t, i) {
                var r, u, f, e = t;
                if (0 === arguments.length)return n.widget.extend({}, this.options);
                if ("string" == typeof t)if (e = {}, r = t.split("."), t = r.shift(), r.length) {
                    for (u = e[t] = n.widget.extend({}, this.options[t]), f = 0; r.length - 1 > f; f++)u[r[f]] = u[r[f]] || {}, u = u[r[f]];
                    if (t = r.pop(), 1 === arguments.length)return void 0 === u[t] ? null : u[t];
                    u[t] = i
                } else {
                    if (1 === arguments.length)return void 0 === this.options[t] ? null : this.options[t];
                    e[t] = i
                }
                return this._setOptions(e), this
            },
            _setOptions: function (n) {
                for (var t in n)this._setOption(t, n[t]);
                return this
            },
            _setOption: function (n, t) {
                return this.options[n] = t, "disabled" === n && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function () {
                return this._setOptions({disabled: !1})
            },
            disable: function () {
                return this._setOptions({disabled: !0})
            },
            _on: function (t, i, r) {
                var f, u = this;
                "boolean" != typeof t && (r = i, i = t, t = !1);
                r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
                n.each(r, function (r, e) {
                    function o() {
                        if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled"))return ("string" == typeof e ? u[e] : e).apply(u, arguments)
                    }

                    "string" != typeof e && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                    var s = r.match(/^([\w:-]*)\s*(.*)$/), h = s[1] + u.eventNamespace, c = s[2];
                    c ? f.delegate(c, h, o) : i.bind(h, o)
                })
            },
            _off: function (t, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
                t.unbind(i).undelegate(i);
                this.bindings = n(this.bindings.not(t).get());
                this.focusable = n(this.focusable.not(t).get());
                this.hoverable = n(this.hoverable.not(t).get())
            },
            _delay: function (n, t) {
                function r() {
                    return ("string" == typeof n ? i[n] : n).apply(i, arguments)
                }

                var i = this;
                return setTimeout(r, t || 0)
            },
            _hoverable: function (t) {
                this.hoverable = this.hoverable.add(t);
                this._on(t, {
                    mouseenter: function (t) {
                        n(t.currentTarget).addClass("ui-state-hover")
                    }, mouseleave: function (t) {
                        n(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (t) {
                this.focusable = this.focusable.add(t);
                this._on(t, {
                    focusin: function (t) {
                        n(t.currentTarget).addClass("ui-state-focus")
                    }, focusout: function (t) {
                        n(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (t, i, r) {
                var u, f, e = this.options[t];
                if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent)for (u in f)u in i || (i[u] = f[u]);
                return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
            }
        };
        n.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
            n.Widget.prototype["_" + t] = function (r, u, f) {
                "string" == typeof u && (u = {effect: u});
                var o, e = u ? u === !0 || "number" == typeof u ? i : u.effect || i : t;
                u = u || {};
                "number" == typeof u && (u = {duration: u});
                o = !n.isEmptyObject(u);
                u.complete = f;
                u.delay && r.delay(u.delay);
                o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function (i) {
                    n(this)[t]();
                    f && f.call(r[0]);
                    i()
                })
            }
        });
        n.widget;
        r = !1;
        n(document).mouseup(function () {
            r = !1
        });
        n.widget("ui.mouse", {
            version: "1.11.4",
            options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
            _mouseInit: function () {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function (n) {
                    return t._mouseDown(n)
                }).bind("click." + this.widgetName, function (i) {
                    if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent"))return (n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1)
                });
                this.started = !1
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName);
                this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (t) {
                if (!r) {
                    this._mouseMoved = !1;
                    this._mouseStarted && this._mouseUp(t);
                    this._mouseDownEvent = t;
                    var i = this, u = 1 === t.which,
                        f = "string" == typeof this.options.cancel && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1;
                    return u && !f && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        i.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (n) {
                        return i._mouseMove(n)
                    }, this._mouseUpDelegate = function (n) {
                        return i._mouseUp(n)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), r = !0, !0)) : !0
                }
            },
            _mouseMove: function (t) {
                return this._mouseMoved && (n.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button || !t.which) ? this._mouseUp(t) : ((t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted))
            },
            _mouseUp: function (t) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), r = !1, !1
            },
            _mouseDistanceMet: function (n) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () {
            },
            _mouseDrag: function () {
            },
            _mouseStop: function () {
            },
            _mouseCapture: function () {
                return !0
            }
        }), function () {
            function f(n, t, i) {
                return [parseFloat(n[0]) * (a.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (a.test(n[1]) ? i / 100 : 1)]
            }

            function i(t, i) {
                return parseInt(n.css(t, i), 10) || 0
            }

            function v(t) {
                var i = t[0];
                return 9 === i.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {top: 0, left: 0}
                } : n.isWindow(i) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {top: t.scrollTop(), left: t.scrollLeft()}
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {top: i.pageY, left: i.pageX}
                } : {width: t.outerWidth(), height: t.outerHeight(), offset: t.offset()}
            }

            n.ui = n.ui || {};
            var u, e, r = Math.max, t = Math.abs, o = Math.round, s = /left|center|right/, h = /top|center|bottom/,
                c = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, a = /%$/, y = n.fn.position;
            n.position = {
                scrollbarWidth: function () {
                    if (void 0 !== u)return u;
                    var r, i,
                        t = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
                        f = t.children()[0];
                    return n("body").append(t), r = f.offsetWidth, t.css("overflow", "scroll"), i = f.offsetWidth, r === i && (i = t[0].clientWidth), t.remove(), u = r - i
                }, getScrollInfo: function (t) {
                    var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        u = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                        f = "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight;
                    return {width: f ? n.position.scrollbarWidth() : 0, height: u ? n.position.scrollbarWidth() : 0}
                }, getWithinInfo: function (t) {
                    var i = n(t || window), r = n.isWindow(i[0]), u = !!i[0] && 9 === i[0].nodeType;
                    return {
                        element: i,
                        isWindow: r,
                        isDocument: u,
                        offset: i.offset() || {left: 0, top: 0},
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: r || u ? i.width() : i.outerWidth(),
                        height: r || u ? i.height() : i.outerHeight()
                    }
                }
            };
            n.fn.position = function (u) {
                if (!u || !u.of)return y.apply(this, arguments);
                u = n.extend({}, u);
                var k, a, p, b, w, g, nt = n(u.of), it = n.position.getWithinInfo(u.within),
                    rt = n.position.getScrollInfo(it), d = (u.collision || "flip").split(" "), tt = {};
                return g = v(nt), nt[0].preventDefault && (u.at = "left top"), a = g.width, p = g.height, b = g.offset, w = n.extend({}, b), n.each(["my", "at"], function () {
                    var t, i, n = (u[this] || "").split(" ");
                    1 === n.length && (n = s.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
                    n[0] = s.test(n[0]) ? n[0] : "center";
                    n[1] = h.test(n[1]) ? n[1] : "center";
                    t = c.exec(n[0]);
                    i = c.exec(n[1]);
                    tt[this] = [t ? t[0] : 0, i ? i[0] : 0];
                    u[this] = [l.exec(n[0])[0], l.exec(n[1])[0]]
                }), 1 === d.length && (d[1] = d[0]), "right" === u.at[0] ? w.left += a : "center" === u.at[0] && (w.left += a / 2), "bottom" === u.at[1] ? w.top += p : "center" === u.at[1] && (w.top += p / 2), k = f(tt.at, a, p), w.left += k[0], w.top += k[1], this.each(function () {
                    var y, g, h = n(this), c = h.outerWidth(), l = h.outerHeight(), ut = i(this, "marginLeft"),
                        ft = i(this, "marginTop"), et = c + ut + i(this, "marginRight") + rt.width,
                        ot = l + ft + i(this, "marginBottom") + rt.height, s = n.extend({}, w),
                        v = f(tt.my, h.outerWidth(), h.outerHeight());
                    "right" === u.my[0] ? s.left -= c : "center" === u.my[0] && (s.left -= c / 2);
                    "bottom" === u.my[1] ? s.top -= l : "center" === u.my[1] && (s.top -= l / 2);
                    s.left += v[0];
                    s.top += v[1];
                    e || (s.left = o(s.left), s.top = o(s.top));
                    y = {marginLeft: ut, marginTop: ft};
                    n.each(["left", "top"], function (t, i) {
                        n.ui.position[d[t]] && n.ui.position[d[t]][i](s, {
                            targetWidth: a,
                            targetHeight: p,
                            elemWidth: c,
                            elemHeight: l,
                            collisionPosition: y,
                            collisionWidth: et,
                            collisionHeight: ot,
                            offset: [k[0] + v[0], k[1] + v[1]],
                            my: u.my,
                            at: u.at,
                            within: it,
                            elem: h
                        })
                    });
                    u.using && (g = function (n) {
                        var i = b.left - s.left, o = i + a - c, f = b.top - s.top, v = f + p - l, e = {
                            target: {element: nt, left: b.left, top: b.top, width: a, height: p},
                            element: {element: h, left: s.left, top: s.top, width: c, height: l},
                            horizontal: 0 > o ? "left" : i > 0 ? "right" : "center",
                            vertical: 0 > v ? "top" : f > 0 ? "bottom" : "middle"
                        };
                        c > a && a > t(i + o) && (e.horizontal = "center");
                        l > p && p > t(f + v) && (e.vertical = "middle");
                        e.important = r(t(i), t(o)) > r(t(f), t(v)) ? "horizontal" : "vertical";
                        u.using.call(this, n, e)
                    });
                    h.offset(n.extend(s, {using: g}))
                })
            };
            n.ui.position = {
                fit: {
                    left: function (n, t) {
                        var h, e = t.within, u = e.isWindow ? e.scrollLeft : e.offset.left, o = e.width,
                            s = n.left - t.collisionPosition.marginLeft, i = u - s, f = s + t.collisionWidth - o - u;
                        t.collisionWidth > o ? i > 0 && 0 >= f ? (h = n.left + i + t.collisionWidth - o - u, n.left += i - h) : n.left = f > 0 && 0 >= i ? u : i > f ? u + o - t.collisionWidth : u : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = r(n.left - s, n.left)
                    }, top: function (n, t) {
                        var h, o = t.within, u = o.isWindow ? o.scrollTop : o.offset.top, e = t.within.height,
                            s = n.top - t.collisionPosition.marginTop, i = u - s, f = s + t.collisionHeight - e - u;
                        t.collisionHeight > e ? i > 0 && 0 >= f ? (h = n.top + i + t.collisionHeight - e - u, n.top += i - h) : n.top = f > 0 && 0 >= i ? u : i > f ? u + e - t.collisionHeight : u : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = r(n.top - s, n.top)
                    }
                }, flip: {
                    left: function (n, i) {
                        var o, s, r = i.within, y = r.offset.left + r.scrollLeft, c = r.width,
                            h = r.isWindow ? r.scrollLeft : r.offset.left, l = n.left - i.collisionPosition.marginLeft,
                            a = l - h, v = l + i.collisionWidth - c - h,
                            u = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0,
                            f = "left" === i.at[0] ? i.targetWidth : "right" === i.at[0] ? -i.targetWidth : 0,
                            e = -2 * i.offset[0];
                        0 > a ? (o = n.left + u + f + e + i.collisionWidth - c - y, (0 > o || t(a) > o) && (n.left += u + f + e)) : v > 0 && (s = n.left - i.collisionPosition.marginLeft + u + f + e - h, (s > 0 || v > t(s)) && (n.left += u + f + e))
                    }, top: function (n, i) {
                        var o, s, r = i.within, y = r.offset.top + r.scrollTop, c = r.height,
                            h = r.isWindow ? r.scrollTop : r.offset.top, l = n.top - i.collisionPosition.marginTop,
                            a = l - h, v = l + i.collisionHeight - c - h, p = "top" === i.my[1],
                            u = p ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0,
                            f = "top" === i.at[1] ? i.targetHeight : "bottom" === i.at[1] ? -i.targetHeight : 0,
                            e = -2 * i.offset[1];
                        0 > a ? (s = n.top + u + f + e + i.collisionHeight - c - y, (0 > s || t(a) > s) && (n.top += u + f + e)) : v > 0 && (o = n.top - i.collisionPosition.marginTop + u + f + e - h, (o > 0 || v > t(o)) && (n.top += u + f + e))
                    }
                }, flipfit: {
                    left: function () {
                        n.ui.position.flip.left.apply(this, arguments);
                        n.ui.position.fit.left.apply(this, arguments)
                    }, top: function () {
                        n.ui.position.flip.top.apply(this, arguments);
                        n.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }, function () {
                var t, i, r, u, f, o = document.getElementsByTagName("body")[0], s = document.createElement("div");
                t = document.createElement(o ? "div" : "body");
                r = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"};
                o && n.extend(r, {position: "absolute", left: "-1000px", top: "-1000px"});
                for (f in r)t.style[f] = r[f];
                t.appendChild(s);
                i = o || document.documentElement;
                i.insertBefore(t, i.firstChild);
                s.style.cssText = "position: absolute; left: 10.7432222px;";
                u = n(s).offset().left;
                e = u > 10 && 11 > u;
                t.innerHTML = "";
                i.removeChild(t)
            }()
        }();
        n.ui.position;
        n.widget("ui.accordion", {
            version: "1.11.4",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function () {
                var t = this.options;
                this.prevShow = this.prevHide = n();
                this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
                t.collapsible || t.active !== !1 && null != t.active || (t.active = 0);
                this._processPanels();
                0 > t.active && (t.active += this.headers.length);
                this._refresh()
            },
            _getCreateEventData: function () {
                return {header: this.active, panel: this.active.length ? this.active.next() : n()}
            },
            _createIcons: function () {
                var t = this.options.icons;
                t && (n("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function () {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function () {
                var n;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
                this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
                this._destroyIcons();
                n = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
                "content" !== this.options.heightStyle && n.css("height", "")
            },
            _setOption: function (n, t) {
                return "active" === n ? (this._activate(t), void 0) : ("event" === n && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(n, t), "collapsible" !== n || t || this.options.active !== !1 || this._activate(0), "icons" === n && (this._destroyIcons(), t && this._createIcons()), "disabled" === n && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0)
            },
            _keydown: function (t) {
                if (!t.altKey && !t.ctrlKey) {
                    var i = n.ui.keyCode, u = this.headers.length, f = this.headers.index(t.target), r = !1;
                    switch (t.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            r = this.headers[(f + 1) % u];
                            break;
                        case i.LEFT:
                        case i.UP:
                            r = this.headers[(f - 1 + u) % u];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(t);
                            break;
                        case i.HOME:
                            r = this.headers[0];
                            break;
                        case i.END:
                            r = this.headers[u - 1]
                    }
                    r && (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), r.focus(), t.preventDefault())
                }
            },
            _panelKeyDown: function (t) {
                t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().focus()
            },
            refresh: function () {
                var t = this.options;
                this._processPanels();
                t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = n()) : t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active);
                this._destroyIcons();
                this._refresh()
            },
            _processPanels: function () {
                var t = this.headers, n = this.panels;
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
                this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
                n && (this._off(t.not(this.headers)), this._off(n.not(this.panels)))
            },
            _refresh: function () {
                var t, i = this.options, r = i.heightStyle, u = this.element.parent();
                this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
                this.active.next().addClass("ui-accordion-content-active").show();
                this.headers.attr("role", "tab").each(function () {
                    var t = n(this), r = t.uniqueId().attr("id"), i = t.next(), u = i.uniqueId().attr("id");
                    t.attr("aria-controls", u);
                    i.attr("aria-labelledby", r)
                }).next().attr("role", "tabpanel");
                this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({"aria-hidden": "true"}).hide();
                this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0);
                this._createIcons();
                this._setupEvents(i.event);
                "fill" === r ? (t = u.height(), this.element.siblings(":visible").each(function () {
                    var i = n(this), r = i.css("position");
                    "absolute" !== r && "fixed" !== r && (t -= i.outerHeight(!0))
                }), this.headers.each(function () {
                    t -= n(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
                }).css("overflow", "auto")) : "auto" === r && (t = 0, this.headers.next().each(function () {
                        t = Math.max(t, n(this).css("height", "").height())
                    }).height(t))
            },
            _activate: function (t) {
                var i = this._findActive(t)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: n.noop
                }))
            },
            _findActive: function (t) {
                return "number" == typeof t ? this.headers.eq(t) : n()
            },
            _setupEvents: function (t) {
                var i = {keydown: "_keydown"};
                t && n.each(t.split(" "), function (n, t) {
                    i[t] = "_eventHandler"
                });
                this._off(this.headers.add(this.headers.next()));
                this._on(this.headers, i);
                this._on(this.headers.next(), {keydown: "_panelKeyDown"});
                this._hoverable(this.headers);
                this._focusable(this.headers)
            },
            _eventHandler: function (t) {
                var i = this.options, u = this.active, r = n(t.currentTarget), f = r[0] === u[0],
                    e = f && i.collapsible, s = e ? n() : r.next(), h = u.next(),
                    o = {oldHeader: u, oldPanel: h, newHeader: e ? n() : r, newPanel: s};
                t.preventDefault();
                f && !i.collapsible || this._trigger("beforeActivate", t, o) === !1 || (i.active = e ? !1 : this.headers.index(r), this.active = f ? n() : r, this._toggle(o), u.removeClass("ui-accordion-header-active ui-state-active"), i.icons && u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), f || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), r.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function (t) {
                var r = t.newPanel, i = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0);
                this.prevShow = r;
                this.prevHide = i;
                this.options.animate ? this._animate(r, i, t) : (i.hide(), r.show(), this._toggleComplete(t));
                i.attr({"aria-hidden": "true"});
                i.prev().attr({"aria-selected": "false", "aria-expanded": "false"});
                r.length && i.length ? i.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : r.length && this.headers.filter(function () {
                        return 0 === parseInt(n(this).attr("tabIndex"), 10)
                    }).attr("tabIndex", -1);
                r.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function (n, t, i) {
                var h, r, u, c = this, o = 0, l = n.css("box-sizing"),
                    a = n.length && (!t.length || n.index() < t.index()), e = this.options.animate || {},
                    f = a && e.down || e, s = function () {
                        c._toggleComplete(i)
                    };
                return "number" == typeof f && (u = f), "string" == typeof f && (r = f), r = r || f.easing || e.easing, u = u || f.duration || e.duration, t.length ? n.length ? (h = n.show().outerHeight(), t.animate(this.hideProps, {
                    duration: u,
                    easing: r,
                    step: function (n, t) {
                        t.now = Math.round(n)
                    }
                }), n.hide().animate(this.showProps, {
                    duration: u, easing: r, complete: s, step: function (n, i) {
                        i.now = Math.round(n);
                        "height" !== i.prop ? "content-box" === l && (o += i.now) : "content" !== c.options.heightStyle && (i.now = Math.round(h - t.outerHeight() - o), o = 0)
                    }
                }), void 0) : t.animate(this.hideProps, u, r, s) : n.animate(this.showProps, u, r, s)
            },
            _toggleComplete: function (n) {
                var t = n.oldPanel;
                t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
                t.length && (t.parent()[0].className = t.parent()[0].className);
                this._trigger("activate", null, n)
            }
        });
        n.widget("ui.menu", {
            version: "1.11.4",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {submenu: "ui-icon-carat-1-e"},
                items: "> *",
                menus: "ul",
                position: {my: "left-1 top", at: "right top"},
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function () {
                this.activeMenu = this.element;
                this.mouseHandled = !1;
                this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                });
                this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
                this._on({
                    "mousedown .ui-menu-item": function (n) {
                        n.preventDefault()
                    }, "click .ui-menu-item": function (t) {
                        var i = n(t.target);
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && n(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    }, "mouseenter .ui-menu-item": function (t) {
                        if (!this.previousFilter) {
                            var i = n(t.currentTarget);
                            i.siblings(".ui-state-active").removeClass("ui-state-active");
                            this.focus(t, i)
                        }
                    }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (n, t) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(n, i)
                    }, blur: function (t) {
                        this._delay(function () {
                            n.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                        })
                    }, keydown: "_keydown"
                });
                this.refresh();
                this._on(this.document, {
                    click: function (n) {
                        this._closeOnDocumentClick(n) && this.collapseAll(n);
                        this.mouseHandled = !1
                    }
                })
            },
            _destroy: function () {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
                this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                    var t = n(this);
                    t.data("ui-menu-submenu-carat") && t.remove()
                });
                this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function (t) {
                var i, u, r, f, e = !0;
                switch (t.keyCode) {
                    case n.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case n.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case n.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case n.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case n.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case n.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case n.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case n.ui.keyCode.ENTER:
                    case n.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case n.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        e = !1;
                        u = this.previousFilter || "";
                        r = String.fromCharCode(t.keyCode);
                        f = !1;
                        clearTimeout(this.filterTimer);
                        r === u ? f = !0 : r = u + r;
                        i = this._filterMenuItems(r);
                        i = f && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i;
                        i.length || (r = String.fromCharCode(t.keyCode), i = this._filterMenuItems(r));
                        i.length ? (this.focus(t, i), this.previousFilter = r, this.filterTimer = this._delay(function () {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                e && t.preventDefault()
            },
            _activate: function (n) {
                this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(n) : this.select(n))
            },
            refresh: function () {
                var i, t, u = this, f = this.options.icons.submenu, r = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
                r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function () {
                    var t = n(this), i = t.parent(),
                        r = n("<span>").addClass("ui-menu-icon ui-icon " + f).data("ui-menu-submenu-carat", !0);
                    i.attr("aria-haspopup", "true").prepend(r);
                    t.attr("aria-labelledby", i.attr("id"))
                });
                i = r.add(this.element);
                t = i.find(this.options.items);
                t.not(".ui-menu-item").each(function () {
                    var t = n(this);
                    u._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
                });
                t.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                });
                t.filter(".ui-state-disabled").attr("aria-disabled", "true");
                this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {menu: "menuitem", listbox: "option"}[this.options.role]
            },
            _setOption: function (n, t) {
                "icons" === n && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu);
                "disabled" === n && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t);
                this._super(n, t)
            },
            focus: function (n, t) {
                var i, r;
                this.blur(n, n && "focus" === n.type);
                this._scrollIntoView(t);
                this.active = t.first();
                r = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
                this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
                this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
                n && "keydown" === n.type ? this._close() : this.timer = this._delay(function () {
                    this._close()
                }, this.delay);
                i = t.children(".ui-menu");
                i.length && n && /^mouse/.test(n.type) && this._startOpening(i);
                this.activeMenu = t.parent();
                this._trigger("focus", n, {item: t})
            },
            _scrollIntoView: function (t) {
                var e, o, i, r, u, f;
                this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.outerHeight(), 0 > i ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
            },
            blur: function (n, t) {
                t || clearTimeout(this.timer);
                this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", n, {item: this.active}))
            },
            _startOpening: function (n) {
                clearTimeout(this.timer);
                "true" === n.attr("aria-hidden") && (this.timer = this._delay(function () {
                    this._close();
                    this._open(n)
                }, this.delay))
            },
            _open: function (t) {
                var i = n.extend({of: this.active}, this.options.position);
                clearTimeout(this.timer);
                this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
                t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function (t, i) {
                clearTimeout(this.timer);
                this.timer = this._delay(function () {
                    var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                    r.length || (r = this.element);
                    this._close(r);
                    this.blur(t);
                    this.activeMenu = r
                }, this.delay)
            },
            _close: function (n) {
                n || (n = this.active ? this.active.parent() : this.element);
                n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
            },
            _closeOnDocumentClick: function (t) {
                return !n(t.target).closest(".ui-menu").length
            },
            _isDivider: function (n) {
                return !/[^\-\u2014\u2013\s]/.test(n.text())
            },
            collapse: function (n) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(n, t))
            },
            expand: function (n) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function () {
                    this.focus(n, t)
                }))
            },
            next: function (n) {
                this._move("next", "first", n)
            },
            previous: function (n) {
                this._move("prev", "last", n)
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function (n, t, i) {
                var r;
                this.active && (r = "first" === n || "last" === n ? this.active["first" === n ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0));
                r && r.length && this.active || (r = this.activeMenu.find(this.options.items)[t]());
                this.focus(i, r)
            },
            nextPage: function (t) {
                var i, r, u;
                return this.active ? (this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                    return i = n(this), 0 > i.offset().top - r - u
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0)
            },
            previousPage: function (t) {
                var i, r, u;
                return this.active ? (this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                    return i = n(this), i.offset().top - r + u > 0
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0)
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function (t) {
                this.active = this.active || n(t.target).closest(".ui-menu-item");
                var i = {item: this.active};
                this.active.has(".ui-menu").length || this.collapseAll(t, !0);
                this._trigger("select", t, i)
            },
            _filterMenuItems: function (t) {
                var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), r = RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                    return r.test(n.trim(n(this).text()))
                })
            }
        });
        n.widget("ui.autocomplete", {
            version: "1.11.4",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {my: "left top", at: "left bottom", collision: "none"},
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function () {
                var t, i, r, u = this.element[0].nodeName.toLowerCase(), f = "textarea" === u, e = "input" === u;
                this.isMultiLine = f ? !0 : e ? !1 : this.element.prop("isContentEditable");
                this.valueMethod = this.element[f || e ? "val" : "text"];
                this.isNewMenu = !0;
                this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
                this._on(this.element, {
                    keydown: function (u) {
                        if (this.element.prop("readOnly"))return t = !0, r = !0, i = !0, void 0;
                        t = !1;
                        r = !1;
                        i = !1;
                        var f = n.ui.keyCode;
                        switch (u.keyCode) {
                            case f.PAGE_UP:
                                t = !0;
                                this._move("previousPage", u);
                                break;
                            case f.PAGE_DOWN:
                                t = !0;
                                this._move("nextPage", u);
                                break;
                            case f.UP:
                                t = !0;
                                this._keyEvent("previous", u);
                                break;
                            case f.DOWN:
                                t = !0;
                                this._keyEvent("next", u);
                                break;
                            case f.ENTER:
                                this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u));
                                break;
                            case f.TAB:
                                this.menu.active && this.menu.select(u);
                                break;
                            case f.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(u), u.preventDefault());
                                break;
                            default:
                                i = !0;
                                this._searchTimeout(u)
                        }
                    }, keypress: function (r) {
                        if (t)return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault(), void 0;
                        if (!i) {
                            var u = n.ui.keyCode;
                            switch (r.keyCode) {
                                case u.PAGE_UP:
                                    this._move("previousPage", r);
                                    break;
                                case u.PAGE_DOWN:
                                    this._move("nextPage", r);
                                    break;
                                case u.UP:
                                    this._keyEvent("previous", r);
                                    break;
                                case u.DOWN:
                                    this._keyEvent("next", r)
                            }
                        }
                    }, input: function (n) {
                        return r ? (r = !1, n.preventDefault(), void 0) : (this._searchTimeout(n), void 0)
                    }, focus: function () {
                        this.selectedItem = null;
                        this.previous = this._value()
                    }, blur: function (n) {
                        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(n), this._change(n), void 0)
                    }
                });
                this._initSource();
                this.menu = n("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance");
                this._on(this.menu.element, {
                    mousedown: function (t) {
                        t.preventDefault();
                        this.cancelBlur = !0;
                        this._delay(function () {
                            delete this.cancelBlur
                        });
                        var i = this.menu.element[0];
                        n(t.target).closest(".ui-menu-item").length || this._delay(function () {
                            var t = this;
                            this.document.one("mousedown", function (r) {
                                r.target === t.element[0] || r.target === i || n.contains(i, r.target) || t.close()
                            })
                        })
                    }, menufocus: function (t, i) {
                        var r, u;
                        return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
                            n(t.target).trigger(t.originalEvent)
                        }), void 0) : (u = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {item: u}) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(u.value), r = i.item.attr("aria-label") || u.value, r && n.trim(r).length && (this.liveRegion.children().hide(), n("<div>").text(r).appendTo(this.liveRegion)), void 0)
                    }, menuselect: function (n, t) {
                        var i = t.item.data("ui-autocomplete-item"), r = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function () {
                            this.previous = r;
                            this.selectedItem = i
                        }));
                        !1 !== this._trigger("select", n, {item: i}) && this._value(i.value);
                        this.term = this._value();
                        this.close(n);
                        this.selectedItem = i
                    }
                });
                this.liveRegion = n("<span>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
                this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function () {
                clearTimeout(this.searching);
                this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
                this.menu.element.remove();
                this.liveRegion.remove()
            },
            _setOption: function (n, t) {
                this._super(n, t);
                "source" === n && this._initSource();
                "appendTo" === n && this.menu.element.appendTo(this._appendTo());
                "disabled" === n && t && this.xhr && this.xhr.abort()
            },
            _appendTo: function () {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _initSource: function () {
                var i, r, t = this;
                n.isArray(this.options.source) ? (i = this.options.source, this.source = function (t, r) {
                    r(n.ui.autocomplete.filter(i, t.term))
                }) : "string" == typeof this.options.source ? (r = this.options.source, this.source = function (i, u) {
                    t.xhr && t.xhr.abort();
                    t.xhr = n.ajax({
                        url: r, data: i, dataType: "json", success: function (n) {
                            u(n)
                        }, error: function () {
                            u([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function (n) {
                clearTimeout(this.searching);
                this.searching = this._delay(function () {
                    var t = this.term === this._value(), i = this.menu.element.is(":visible"),
                        r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                    t && (!t || i || r) || (this.selectedItem = null, this.search(null, n))
                }, this.options.delay)
            },
            search: function (n, t) {
                return n = null != n ? n : this._value(), this.term = this._value(), n.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(n) : void 0
            },
            _search: function (n) {
                this.pending++;
                this.element.addClass("ui-autocomplete-loading");
                this.cancelSearch = !1;
                this.source({term: n}, this._response())
            },
            _response: function () {
                var t = ++this.requestIndex;
                return n.proxy(function (n) {
                    t === this.requestIndex && this.__response(n);
                    this.pending--;
                    this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function (n) {
                n && (n = this._normalize(n));
                this._trigger("response", null, {content: n});
                !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close()
            },
            close: function (n) {
                this.cancelSearch = !0;
                this._close(n)
            },
            _close: function (n) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n))
            },
            _change: function (n) {
                this.previous !== this._value() && this._trigger("change", n, {item: this.selectedItem})
            },
            _normalize: function (t) {
                return t.length && t[0].label && t[0].value ? t : n.map(t, function (t) {
                    return "string" == typeof t ? {label: t, value: t} : n.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    })
                })
            },
            _suggest: function (t) {
                var i = this.menu.element.empty();
                this._renderMenu(i, t);
                this.isNewMenu = !0;
                this.menu.refresh();
                i.show();
                this._resizeMenu();
                i.position(n.extend({of: this.element}, this.options.position));
                this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function () {
                var n = this.menu.element;
                n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function (t, i) {
                var r = this;
                n.each(i, function (n, i) {
                    r._renderItemData(t, i)
                })
            },
            _renderItemData: function (n, t) {
                return this._renderItem(n, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function (t, i) {
                return n("<li>").text(i.label).appendTo(t)
            },
            _move: function (n, t) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[n](t), void 0) : (this.search(null, t), void 0)
            },
            widget: function () {
                return this.menu.element
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function (n, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault())
            }
        });
        n.extend(n.ui.autocomplete, {
            escapeRegex: function (n) {
                return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }, filter: function (t, i) {
                var r = RegExp(n.ui.autocomplete.escapeRegex(i), "i");
                return n.grep(t, function (n) {
                    return r.test(n.label || n.value || n)
                })
            }
        });
        n.widget("ui.autocomplete", n.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function (n) {
                        return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            }, __response: function (t) {
                var i;
                this._superApply(arguments);
                this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), n("<div>").text(i).appendTo(this.liveRegion))
            }
        });
        n.ui.autocomplete;
        var e, p = "ui-button ui-widget ui-state-default ui-corner-all",
            w = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            d = function () {
                var t = n(this);
                setTimeout(function () {
                    t.find(":ui-button").button("refresh")
                }, 1)
            }, b = function (t) {
                var i = t.name, r = t.form, u = n([]);
                return i && (i = i.replace(/'/g, "\\'"), u = r ? n(r).find("[name='" + i + "'][type=radio]") : n("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () {
                    return !this.form
                })), u
            };
        n.widget("ui.button", {
            version: "1.11.4",
            defaultElement: "<button>",
            options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}},
            _create: function () {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, d);
                "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
                this._determineButtonType();
                this.hasTitle = !!this.buttonElement.attr("title");
                var i = this, t = this.options, r = "checkbox" === this.type || "radio" === this.type,
                    u = r ? "" : "ui-state-active";
                null === t.label && (t.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html());
                this._hoverable(this.buttonElement);
                this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                    t.disabled || this === e && n(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function () {
                    t.disabled || n(this).removeClass(u)
                }).bind("click" + this.eventNamespace, function (n) {
                    t.disabled && (n.preventDefault(), n.stopImmediatePropagation())
                });
                this._on({
                    focus: function () {
                        this.buttonElement.addClass("ui-state-focus")
                    }, blur: function () {
                        this.buttonElement.removeClass("ui-state-focus")
                    }
                });
                r && this.element.bind("change" + this.eventNamespace, function () {
                    i.refresh()
                });
                "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                    if (t.disabled)return !1
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                    if (t.disabled)return !1;
                    n(this).addClass("ui-state-active");
                    i.buttonElement.attr("aria-pressed", "true");
                    var r = i.element[0];
                    b(r).not(r).map(function () {
                        return n(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                    return t.disabled ? !1 : (n(this).addClass("ui-state-active"), e = this, i.document.one("mouseup", function () {
                        e = null
                    }), void 0)
                }).bind("mouseup" + this.eventNamespace, function () {
                    return t.disabled ? !1 : (n(this).removeClass("ui-state-active"), void 0)
                }).bind("keydown" + this.eventNamespace, function (i) {
                    return t.disabled ? !1 : ((i.keyCode === n.ui.keyCode.SPACE || i.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active"), void 0)
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                    n(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                    t.keyCode === n.ui.keyCode.SPACE && n(this).click()
                }));
                this._setOption("disabled", t.disabled);
                this._resetButton()
            },
            _determineButtonType: function () {
                var n, t, i;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
                "checkbox" === this.type || "radio" === this.type ? (n = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = n.find(t), this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(), this.buttonElement = n.filter(t), this.buttonElement.length || (this.buttonElement = n.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
            },
            widget: function () {
                return this.buttonElement
            },
            _destroy: function () {
                this.element.removeClass("ui-helper-hidden-accessible");
                this.buttonElement.removeClass(p + " ui-state-active " + w).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
                this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function (n, t) {
                return this._super(n, t), "disabled" === n ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0)
            },
            refresh: function () {
                var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOption("disabled", t);
                "radio" === this.type ? b(this.element[0]).each(function () {
                    n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function () {
                if ("input" === this.type)return this.options.label && this.element.val(this.options.label), void 0;
                var i = this.buttonElement.removeClass(w),
                    f = n("<span><\/span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),
                    t = this.options.icons, u = t.primary && t.secondary, r = [];
                t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"), t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"), this.options.text || (r.push(u ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || i.attr("title", n.trim(f)))) : r.push("ui-button-text-only");
                i.addClass(r.join(" "))
            }
        });
        n.widget("ui.buttonset", {
            version: "1.11.4",
            options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},
            _create: function () {
                this.element.addClass("ui-buttonset")
            },
            _init: function () {
                this.refresh()
            },
            _setOption: function (n, t) {
                "disabled" === n && this.buttons.button("option", n, t);
                this._super(n, t)
            },
            refresh: function () {
                var i = "rtl" === this.element.css("direction"), t = this.element.find(this.options.items),
                    r = t.filter(":ui-button");
                t.not(":ui-button").button();
                r.button("refresh");
                this.buttons = t.map(function () {
                    return n(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(i ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(i ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function () {
                this.element.removeClass("ui-buttonset");
                this.buttons.map(function () {
                    return n(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        });
        n.ui.button;
        n.extend(n.ui, {datepicker: {version: "1.11.4"}});
        n.extend(l.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (n) {
                return u(this._defaults, n || {}), this
            },
            _attachDatepicker: function (t, i) {
                var r, f, u;
                r = t.nodeName.toLowerCase();
                f = "div" === r || "span" === r;
                t.id || (this.uuid += 1, t.id = "dp" + this.uuid);
                u = this._newInst(n(t), f);
                u.settings = n.extend({}, i || {});
                "input" === r ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u)
            },
            _newInst: function (t, i) {
                var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: r,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? a(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function (t, i) {
                var r = n(t);
                i.append = n([]);
                i.trigger = n([]);
                r.hasClass(this.markerClassName) || (this._attachments(r, i), r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), n.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function (t, i) {
                var u, r, f, e = this._get(i, "appendText"), o = this._get(i, "isRTL");
                i.append && i.append.remove();
                e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"), t[o ? "before" : "after"](i.append));
                t.unbind("focus", this._showDatepicker);
                i.trigger && i.trigger.remove();
                u = this._get(i, "showOn");
                ("focus" === u || "both" === u) && t.focus(this._showDatepicker);
                ("button" === u || "both" === u) && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: r,
                    title: r
                }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({
                    src: f,
                    alt: r,
                    title: r
                }) : r)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
                    return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1
                }))
            },
            _autoSize: function (n) {
                if (this._get(n, "autoSize") && !n.inline) {
                    var r, u, f, t, i = new Date(2009, 11, 20), e = this._get(n, "dateFormat");
                    e.match(/[DM]/) && (r = function (n) {
                        for (u = 0, f = 0, t = 0; n.length > t; t++)n[t].length > u && (u = n[t].length, f = t);
                        return f
                    }, i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))), i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay()));
                    n.input.attr("size", this._formatDate(n, i).length)
                }
            },
            _inlineDatepicker: function (t, i) {
                var r = n(t);
                r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(i.dpDiv), n.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function (t, i, r, f, e) {
                var s, h, c, l, a, o = this._dialogInst;
                return o || (this.uuid += 1, s = "dp" + this.uuid, this._dialogInput = n("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), n("body").append(this._dialogInput), o = this._dialogInst = this._newInst(this._dialogInput, !1), o.settings = {}, n.data(this._dialogInput[0], "datepicker", o)), u(o.settings, f || {}), i = i && i.constructor === Date ? this._formatDate(o, i) : i, this._dialogInput.val(i), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null, this._pos || (h = document.documentElement.clientWidth, c = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, a = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + l, c / 2 - 150 + a]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = r, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], "datepicker", o), this
            },
            _destroyDatepicker: function (t) {
                var r, u = n(t), f = n.data(t, "datepicker");
                u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), n.removeData(t, "datepicker"), "input" === r ? (f.append.remove(), f.trigger.remove(), u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === r || "span" === r) && u.removeClass(this.markerClassName).empty(), i === f && (i = null))
            },
            _enableDatepicker: function (t) {
                var i, r, u = n(t), f = n.data(t, "datepicker");
                u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, f.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === i || "span" === i) && (r = u.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs, function (n) {
                    return n === t ? null : n
                }))
            },
            _disableDatepicker: function (t) {
                var i, r, u = n(t), f = n.data(t, "datepicker");
                u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, f.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === i || "span" === i) && (r = u.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs, function (n) {
                    return n === t ? null : n
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function (n) {
                if (!n)return !1;
                for (var t = 0; this._disabledInputs.length > t; t++)if (this._disabledInputs[t] === n)return !0;
                return !1
            },
            _getInst: function (t) {
                try {
                    return n.data(t, "datepicker")
                } catch (i) {
                    throw"Missing instance data for this datepicker";
                }
            },
            _optionDatepicker: function (t, i, r) {
                var e, h, o, s, f = this._getInst(t);
                return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? n.extend({}, n.datepicker._defaults) : f ? "all" === i ? n.extend({}, f.settings) : this._get(f, i) : null : (e = i || {}, "string" == typeof i && (e = {}, e[i] = r), f && (this._curInst === f && this._hideDatepicker(), h = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(f, "min"), s = this._getMinMaxDate(f, "max"), u(f.settings, e), null !== o && void 0 !== e.dateFormat && void 0 === e.minDate && (f.settings.minDate = this._formatDate(f, o)), null !== s && void 0 !== e.dateFormat && void 0 === e.maxDate && (f.settings.maxDate = this._formatDate(f, s)), "disabled" in e && (e.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(n(t), f), this._autoSize(f), this._setDate(f, h), this._updateAlternate(f), this._updateDatepicker(f)), void 0)
            },
            _changeDatepicker: function (n, t, i) {
                this._optionDatepicker(n, t, i)
            },
            _refreshDatepicker: function (n) {
                var t = this._getInst(n);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function (n, t) {
                var i = this._getInst(n);
                i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function (n, t) {
                var i = this._getInst(n);
                return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
            },
            _doKeyDown: function (t) {
                var u, e, f, i = n.datepicker._getInst(t.target), r = !0, o = i.dpDiv.is(".ui-datepicker-rtl");
                if (i._keyEvent = !0, n.datepicker._datepickerShowing)switch (t.keyCode) {
                    case 9:
                        n.datepicker._hideDatepicker();
                        r = !1;
                        break;
                    case 13:
                        return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv), f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]), u = n.datepicker._get(i, "onSelect"), u ? (e = n.datepicker._formatDate(i), u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(), !1;
                    case 27:
                        n.datepicker._hideDatepicker();
                        break;
                    case 33:
                        n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 34:
                        n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
                        r = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
                        r = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D");
                        r = t.ctrlKey || t.metaKey;
                        t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
                        r = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D");
                        r = t.ctrlKey || t.metaKey;
                        t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
                        r = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        r = !1
                } else 36 === t.keyCode && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
                r && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function (t) {
                var i, r, u = n.datepicker._getInst(t.target);
                if (n.datepicker._get(u, "constrainInput"))return (i = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")), r = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > r || !i || i.indexOf(r) > -1)
            },
            _doKeyUp: function (t) {
                var r, i = n.datepicker._getInst(t.target);
                if (i.input.val() !== i.lastVal)try {
                    r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
                    r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i))
                } catch (u) {
                }
                return !0
            },
            _showDatepicker: function (t) {
                if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
                    var i, o, s, r, f, e, h;
                    i = n.datepicker._getInst(t);
                    n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0]));
                    o = n.datepicker._get(i, "beforeShow");
                    s = o ? o.apply(t, [t, i]) : {};
                    s !== !1 && (u(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), r = !1, n(t).parents().each(function () {
                        return r |= "fixed" === n(this).css("position"), !r
                    }), f = {
                        left: n.datepicker._pos[0],
                        top: n.datepicker._pos[1]
                    }, n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), n.datepicker._updateDatepicker(i), f = n.datepicker._checkOffset(i, f, r), i.dpDiv.css({
                        position: n.datepicker._inDialog && n.blockUI ? "static" : r ? "fixed" : "absolute",
                        display: "none",
                        left: f.left + "px",
                        top: f.top + "px"
                    }), i.inline || (e = n.datepicker._get(i, "showAnim"), h = n.datepicker._get(i, "duration"), i.dpDiv.css("z-index", k(n(t)) + 1), n.datepicker._datepickerShowing = !0, n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null), n.datepicker._shouldFocusInput(i) && i.input.focus(), n.datepicker._curInst = i))
                }
            },
            _updateDatepicker: function (t) {
                this.maxRows = 4;
                i = t;
                t.dpDiv.empty().append(this._generateHTML(t));
                this._attachHandlers(t);
                var r, u = this._getNumberOfMonths(t), f = u[1], e = t.dpDiv.find("." + this._dayOverClass + " a");
                e.length > 0 && v.apply(e.get(0));
                t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
                f > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", 17 * f + "em");
                t.dpDiv[(1 !== u[0] || 1 !== u[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
                t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
                t === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(t) && t.input.focus();
                t.yearshtml && (r = t.yearshtml, setTimeout(function () {
                    r === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);
                    r = t.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function (n) {
                return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus")
            },
            _checkOffset: function (t, i, r) {
                var u = t.dpDiv.outerWidth(), f = t.dpDiv.outerHeight(), h = t.input ? t.input.outerWidth() : 0,
                    o = t.input ? t.input.outerHeight() : 0,
                    e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()),
                    s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
                return i.left -= this._get(t, "isRTL") ? u - h : 0, i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0, i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0), i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0), i
            },
            _findPos: function (t) {
                for (var i, r = this._getInst(t),
                         u = this._get(r, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || n.expr.filters.hidden(t));)t = t[u ? "previousSibling" : "nextSibling"];
                return i = n(t).offset(), [i.left, i.top]
            },
            _hideDatepicker: function (t) {
                var r, f, u, e, i = this._curInst;
                !i || t && i !== n.data(t, "datepicker") || this._datepickerShowing && (r = this._get(i, "showAnim"), f = this._get(i, "duration"), u = function () {
                    n.datepicker._tidyDialog(i)
                }, n.effects && (n.effects.effect[r] || n.effects[r]) ? i.dpDiv.hide(r, n.datepicker._get(i, "showOptions"), f, u) : i.dpDiv["slideDown" === r ? "slideUp" : "fadeIn" === r ? "fadeOut" : "hide"](r ? f : null, u), r || u(), this._datepickerShowing = !1, e = this._get(i, "onClose"), e && e.apply(i.input ? i.input[0] : null, [i.input ? i.input.val() : "", i]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function (n) {
                n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (t) {
                if (n.datepicker._curInst) {
                    var i = n(t.target), r = n.datepicker._getInst(i[0]);
                    (i[0].id === n.datepicker._mainDivId || 0 !== i.parents("#" + n.datepicker._mainDivId).length || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function (t, i, r) {
                var f = n(t), u = this._getInst(f[0]);
                this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + ("M" === r ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u))
            },
            _gotoToday: function (t) {
                var r, u = n(t), i = this._getInst(u[0]);
                this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear());
                this._notifyChange(i);
                this._adjustDate(u)
            },
            _selectMonthYear: function (t, i, r) {
                var f = n(t), u = this._getInst(f[0]);
                u["selected" + ("M" === r ? "Month" : "Year")] = u["draw" + ("M" === r ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
                this._notifyChange(u);
                this._adjustDate(f)
            },
            _selectDay: function (t, i, r, u) {
                var f, e = n(t);
                n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
            },
            _clearDate: function (t) {
                var i = n(t);
                this._selectDate(i, "")
            },
            _selectDate: function (t, i) {
                var u, f = n(t), r = this._getInst(f[0]);
                i = null != i ? i : this._formatDate(r);
                r.input && r.input.val(i);
                this._updateAlternate(r);
                u = this._get(r, "onSelect");
                u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
                r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function (t) {
                var i, r, u, f = this._get(t, "altField");
                f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), u = this.formatDate(i, r, this._getFormatConfig(t)), n(f).each(function () {
                    n(this).val(u)
                }))
            },
            noWeekends: function (n) {
                var t = n.getDay();
                return [t > 0 && 6 > t, ""]
            },
            iso8601Week: function (n) {
                var i, t = new Date(n.getTime());
                return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
            },
            parseDate: function (t, i, r) {
                if (null == t || null == i)throw"Invalid arguments";
                if (i = "object" == typeof i ? "" + i : i + "", "" === i)return null;
                for (var a, v, u, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                         d = "string" != typeof y ? y : (new Date).getFullYear() % 100 + parseInt(y, 10),
                         g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
                         nt = (r ? r.dayNames : null) || this._defaults.dayNames,
                         tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
                         it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, s = -1, h = -1, p = -1,
                         w = !1, l = function (n) {
                        var i = t.length > o + 1 && t.charAt(o + 1) === n;
                        return i && o++, i
                    }, c = function (n) {
                        var u = l(n), r = "@" === n ? 14 : "!" === n ? 20 : "y" === n && u ? 4 : "o" === n ? 3 : 2,
                            e = "y" === n ? r : 1, o = RegExp("^\\d{" + e + "," + r + "}"), t = i.substring(f).match(o);
                        if (!t)throw"Missing number at position " + f;
                        return f += t[0].length, parseInt(t[0], 10)
                    }, k = function (t, r, u) {
                        var e = -1, o = n.map(l(t) ? u : r, function (n, t) {
                            return [[t, n]]
                        }).sort(function (n, t) {
                            return -(n[1].length - t[1].length)
                        });
                        if (n.each(o, function (n, t) {
                                var r = t[1];
                                if (i.substr(f, r.length).toLowerCase() === r.toLowerCase())return (e = t[0], f += r.length, !1)
                            }), -1 !== e)return e + 1;
                        throw"Unknown name at position " + f;
                    }, b = function () {
                        if (i.charAt(f) !== t.charAt(o))throw"Unexpected literal at position " + f;
                        f++
                    },
                         o = 0; t.length > o; o++)if (w) "'" !== t.charAt(o) || l("'") ? b() : w = !1; else switch (t.charAt(o)) {
                    case"d":
                        h = c("d");
                        break;
                    case"D":
                        k("D", g, nt);
                        break;
                    case"o":
                        p = c("o");
                        break;
                    case"m":
                        s = c("m");
                        break;
                    case"M":
                        s = k("M", tt, it);
                        break;
                    case"y":
                        e = c("y");
                        break;
                    case"@":
                        u = new Date(c("@"));
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case"!":
                        u = new Date((c("!") - this._ticksTo1970) / 1e4);
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case"'":
                        l("'") ? b() : w = !0;
                        break;
                    default:
                        b()
                }
                if (i.length > f && (v = i.substr(f), !/^\s+/.test(v)))throw"Extra/unparsed characters found in date: " + v;
                if (-1 === e ? e = (new Date).getFullYear() : 100 > e && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= e ? 0 : -100)), p > -1)for (s = 1, h = p; ;) {
                    if (a = this._getDaysInMonth(e, s - 1), a >= h)break;
                    s++;
                    h -= a
                }
                if (u = this._daylightSavingAdjust(new Date(e, s - 1, h)), u.getFullYear() !== e || u.getMonth() + 1 !== s || u.getDate() !== h)throw"Invalid date";
                return u
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function (n, t, i) {
                if (!t)return "";
                var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    c = (i ? i.dayNames : null) || this._defaults.dayNames,
                    l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (i ? i.monthNames : null) || this._defaults.monthNames, f = function (t) {
                        var i = n.length > u + 1 && n.charAt(u + 1) === t;
                        return i && u++, i
                    }, e = function (n, t, i) {
                        var r = "" + t;
                        if (f(n))for (; i > r.length;)r = "0" + r;
                        return r
                    }, s = function (n, t, i, r) {
                        return f(n) ? r[t] : i[t]
                    }, r = "", o = !1;
                if (t)for (u = 0; n.length > u; u++)if (o) "'" !== n.charAt(u) || f("'") ? r += n.charAt(u) : o = !1; else switch (n.charAt(u)) {
                    case"d":
                        r += e("d", t.getDate(), 2);
                        break;
                    case"D":
                        r += s("D", t.getDay(), h, c);
                        break;
                    case"o":
                        r += e("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                        break;
                    case"m":
                        r += e("m", t.getMonth() + 1, 2);
                        break;
                    case"M":
                        r += s("M", t.getMonth(), l, a);
                        break;
                    case"y":
                        r += f("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                        break;
                    case"@":
                        r += t.getTime();
                        break;
                    case"!":
                        r += 1e4 * t.getTime() + this._ticksTo1970;
                        break;
                    case"'":
                        f("'") ? r += "'" : o = !0;
                        break;
                    default:
                        r += n.charAt(u)
                }
                return r
            },
            _possibleChars: function (n) {
                for (var i = "", r = !1, u = function (i) {
                        var r = n.length > t + 1 && n.charAt(t + 1) === i;
                        return r && t++, r
                    },
                         t = 0; n.length > t; t++)if (r) "'" !== n.charAt(t) || u("'") ? i += n.charAt(t) : r = !1; else switch (n.charAt(t)) {
                    case"d":
                    case"m":
                    case"y":
                    case"@":
                        i += "0123456789";
                        break;
                    case"D":
                    case"M":
                        return null;
                    case"'":
                        u("'") ? i += "'" : r = !0;
                        break;
                    default:
                        i += n.charAt(t)
                }
                return i
            },
            _get: function (n, t) {
                return void 0 !== n.settings[t] ? n.settings[t] : this._defaults[t]
            },
            _setDateFromField: function (n, t) {
                if (n.input.val() !== n.lastVal) {
                    var f = this._get(n, "dateFormat"), r = n.lastVal = n.input ? n.input.val() : null,
                        u = this._getDefaultDate(n), i = u, e = this._getFormatConfig(n);
                    try {
                        i = this.parseDate(f, r, e) || u
                    } catch (o) {
                        r = t ? "" : r
                    }
                    n.selectedDay = i.getDate();
                    n.drawMonth = n.selectedMonth = i.getMonth();
                    n.drawYear = n.selectedYear = i.getFullYear();
                    n.currentDay = r ? i.getDate() : 0;
                    n.currentMonth = r ? i.getMonth() : 0;
                    n.currentYear = r ? i.getFullYear() : 0;
                    this._adjustInstDate(n)
                }
            },
            _getDefaultDate: function (n) {
                return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
            },
            _determineDate: function (t, i, r) {
                var f = function (n) {
                        var t = new Date;
                        return t.setDate(t.getDate() + n), t
                    }, e = function (i) {
                        try {
                            return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                        } catch (h) {
                        }
                        for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date,
                                 f = o.getFullYear(), e = o.getMonth(), r = o.getDate(),
                                 s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
                            switch (u[2] || "d") {
                                case"d":
                                case"D":
                                    r += parseInt(u[1], 10);
                                    break;
                                case"w":
                                case"W":
                                    r += 7 * parseInt(u[1], 10);
                                    break;
                                case"m":
                                case"M":
                                    e += parseInt(u[1], 10);
                                    r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                                    break;
                                case"y":
                                case"Y":
                                    f += parseInt(u[1], 10);
                                    r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                            }
                            u = s.exec(i)
                        }
                        return new Date(f, e, r)
                    },
                    u = null == i || "" === i ? r : "string" == typeof i ? e(i) : "number" == typeof i ? isNaN(i) ? r : f(i) : new Date(i.getTime());
                return u = u && "Invalid Date" == "" + u ? r : u, u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)), this._daylightSavingAdjust(u)
            },
            _daylightSavingAdjust: function (n) {
                return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null
            },
            _setDate: function (n, t, i) {
                var u = !t, f = n.selectedMonth, e = n.selectedYear,
                    r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
                n.selectedDay = n.currentDay = r.getDate();
                n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
                n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
                f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n);
                this._adjustInstDate(n);
                n.input && n.input.val(u ? "" : this._formatDate(n))
            },
            _getDate: function (n) {
                return !n.currentYear || n.input && "" === n.input.val() ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
            },
            _attachHandlers: function (t) {
                var r = this._get(t, "stepMonths"), i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function () {
                    var t = {
                        prev: function () {
                            n.datepicker._adjustDate(i, -r, "M")
                        }, next: function () {
                            n.datepicker._adjustDate(i, +r, "M")
                        }, hide: function () {
                            n.datepicker._hideDatepicker()
                        }, today: function () {
                            n.datepicker._gotoToday(i)
                        }, selectDay: function () {
                            return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        }, selectMonth: function () {
                            return n.datepicker._selectMonthYear(i, this, "M"), !1
                        }, selectYear: function () {
                            return n.datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function (n) {
                var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, o, y, ct, p, lt, l, u, at,
                    vt, yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date,
                    gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())),
                    f = this._get(n, "isRTL"), li = this._get(n, "showButtonPanel"),
                    hi = this._get(n, "hideIfNoPrevNext"), ni = this._get(n, "navigationAsDateFormat"),
                    e = this._getNumberOfMonths(n), ai = this._get(n, "showCurrentAtPos"),
                    ci = this._get(n, "stepMonths"), ti = 1 !== e[0] || 1 !== e[1],
                    ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)),
                    w = this._getMinMaxDate(n, "min"), v = this._getMinMaxDate(n, "max"), t = n.drawMonth - ai,
                    r = n.drawYear;
                if (0 > t && (t += 12, r--), v)for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - e[0] * e[1] + 1, v.getDate())), b = w && w > b ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;)t--, 0 > t && (t = 11, r--);
                for (n.drawMonth = t, n.drawYear = r, s = this._get(n, "prevText"), s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s, rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>", h = this._get(n, "nextText"), h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h, ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>", k = this._get(n, "currentText"), ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt, k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k, et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>", ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (f ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (f ? "" : et) + "<\/div>" : "", c = parseInt(this._get(n, "firstDay"), 10), c = isNaN(c) ? 0 : c, ot = this._get(n, "showWeek"), ui = this._get(n, "dayNames"), fi = this._get(n, "dayNamesMin"), ei = this._get(n, "monthNames"), oi = this._get(n, "monthNamesShort"), st = this._get(n, "beforeShowDay"), g = this._get(n, "showOtherMonths"), si = this._get(n, "selectOtherMonths"), ht = this._getDefaultDate(n), nt = "", y = 0; e[0] > y; y++) {
                    for (ct = "", this.maxRows = 4, p = 0; e[1] > p; p++) {
                        if (lt = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)), l = " ui-corner-all", u = "", ti) {
                            if (u += "<div class='ui-datepicker-group", e[1] > 1)switch (p) {
                                case 0:
                                    u += " ui-datepicker-group-first";
                                    l = " ui-corner-" + (f ? "right" : "left");
                                    break;
                                case e[1] - 1:
                                    u += " ui-datepicker-group-last";
                                    l = " ui-corner-" + (f ? "left" : "right");
                                    break;
                                default:
                                    u += " ui-datepicker-group-middle";
                                    l = ""
                            }
                            u += "'>"
                        }
                        for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && 0 === y ? f ? ut : rt : "") + (/all|right/.test(l) && 0 === y ? f ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>", at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "", o = 0; 7 > o; o++)vt = (o + c) % 7, at += "<th scope='col'" + ((o + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>";
                        for (u += at + "<\/tr><\/thead><tbody>", yt = this._getDaysInMonth(r, t), r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)), pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7, tt = Math.ceil((pt + yt) / 7), wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt, this.maxRows = wt, i = this._daylightSavingAdjust(new Date(r, t, 1 - pt)), bt = 0; wt > bt; bt++) {
                            for (u += "<tr>", kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "", o = 0; 7 > o; o++)d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""], a = i.getMonth() !== t, it = a && !si || !d[0] || w && w > i || v && i > v, kt += "<td class='" + ((o + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + (a && !g || !d[2] ? "" : " title='" + d[2].replace(/'/g, "&#39;") + "'") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>", i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
                            u += kt + "<\/tr>"
                        }
                        t++;
                        t > 11 && (t = 0, r++);
                        u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (e[0] > 0 && p === e[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
                        ct += u
                    }
                    nt += ct
                }
                return nt += ri, n._keyEvent = !1, nt
            },
            _generateMonthYearHeader: function (n, t, i, r, u, f, e, o) {
                var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"), b = this._get(n, "changeYear"),
                    g = this._get(n, "showMonthAfterYear"), c = "<div class='ui-datepicker-title'>", l = "";
                if (f || !w) l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>"; else {
                    for (k = r && r.getFullYear() === i, d = u && u.getFullYear() === i, l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)(!k || h >= r.getMonth()) && (!d || u.getMonth() >= h) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
                    l += "<\/select>"
                }
                if (g || (c += l + (!f && w && b ? "" : "&#xa0;")), !n.yearshtml)if (n.yearshtml = "", f || !b) c += "<span class='ui-datepicker-year'>" + i + "<\/span>"; else {
                    for (v = this._get(n, "yearRange").split(":"), y = (new Date).getFullYear(), p = function (n) {
                        var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
                        return isNaN(t) ? y : t
                    }, s = p(v[0]), a = Math.max(s, p(v[1] || "")), s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; a >= s; s++)n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                    n.yearshtml += "<\/select>";
                    c += n.yearshtml;
                    n.yearshtml = null
                }
                return c += this._get(n, "yearSuffix"), g && (c += (!f && w && b ? "" : "&#xa0;") + l), c + "<\/div>"
            },
            _adjustInstDate: function (n, t, i) {
                var u = n.drawYear + ("Y" === i ? t : 0), f = n.drawMonth + ("M" === i ? t : 0),
                    e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + ("D" === i ? t : 0),
                    r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
                n.selectedDay = r.getDate();
                n.drawMonth = n.selectedMonth = r.getMonth();
                n.drawYear = n.selectedYear = r.getFullYear();
                ("M" === i || "Y" === i) && this._notifyChange(n)
            },
            _restrictMinMax: function (n, t) {
                var i = this._getMinMaxDate(n, "min"), r = this._getMinMaxDate(n, "max"), u = i && i > t ? i : t;
                return r && u > r ? r : u
            },
            _notifyChange: function (n) {
                var t = this._get(n, "onChangeMonthYear");
                t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
            },
            _getNumberOfMonths: function (n) {
                var t = this._get(n, "numberOfMonths");
                return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
            },
            _getMinMaxDate: function (n, t) {
                return this._determineDate(n, this._get(n, t + "Date"), null)
            },
            _getDaysInMonth: function (n, t) {
                return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function (n, t) {
                return new Date(n, t, 1).getDay()
            },
            _canAdjustMonth: function (n, t, i, r) {
                var f = this._getNumberOfMonths(n),
                    u = this._daylightSavingAdjust(new Date(i, r + (0 > t ? t : f[0] * f[1]), 1));
                return 0 > t && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())), this._isInRange(n, u)
            },
            _isInRange: function (n, t) {
                var i, f, e = this._getMinMaxDate(n, "min"), o = this._getMinMaxDate(n, "max"), r = null, u = null,
                    s = this._get(n, "yearRange");
                return s && (i = s.split(":"), f = (new Date).getFullYear(), r = parseInt(i[0], 10), u = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += f), i[1].match(/[+\-].*/) && (u += f)), (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || u >= t.getFullYear())
            },
            _getFormatConfig: function (n) {
                var t = this._get(n, "shortYearCutoff");
                return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(n, "dayNamesShort"),
                    dayNames: this._get(n, "dayNames"),
                    monthNamesShort: this._get(n, "monthNamesShort"),
                    monthNames: this._get(n, "monthNames")
                }
            },
            _formatDate: function (n, t, i, r) {
                t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
                var u = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
                return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
            }
        });
        n.fn.datepicker = function (t) {
            if (!this.length)return this;
            n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick), n.datepicker.initialized = !0);
            0 === n("#" + n.datepicker._mainDivId).length && n("body").append(n.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function () {
                "string" == typeof t ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
            }) : n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i))
        };
        n.datepicker = new l;
        n.datepicker.initialized = !1;
        n.datepicker.uuid = (new Date).getTime();
        n.datepicker.version = "1.11.4";
        n.datepicker;
        n.widget("ui.draggable", n.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function () {
                "original" === this.options.helper && this._setPositionRelative();
                this.options.addClasses && this.element.addClass("ui-draggable");
                this.options.disabled && this.element.addClass("ui-draggable-disabled");
                this._setHandleClassName();
                this._mouseInit()
            },
            _setOption: function (n, t) {
                this._super(n, t);
                "handle" === n && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function () {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
            },
            _mouseCapture: function (t) {
                var i = this.options;
                return this._blurActiveElement(t), this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
            },
            _blockFrames: function (t) {
                this.iframeBlocks = this.document.find(t).map(function () {
                    var t = n(this);
                    return n("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function (t) {
                var i = this.document[0];
                if (this.handleElement.is(t.target))try {
                    i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && n(i.activeElement).blur()
                } catch (r) {
                }
            },
            _mouseStart: function (t) {
                var i = this.options;
                return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                        return "fixed" === n(this).css("position")
                    }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0)
            },
            _refreshOffsets: function (n) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                };
                this.offset.click = {left: n.pageX - this.offset.left, top: n.pageY - this.offset.top}
            },
            _mouseDrag: function (t, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var r = this._uiHash();
                    if (this._trigger("drag", t, r) === !1)return this._mouseUp({}), !1;
                    this.position = r.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function (t) {
                var r = this, i = !1;
                return n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    r._trigger("stop", t) !== !1 && r._clear()
                }) : this._trigger("stop", t) !== !1 && this._clear(), !1
            },
            _mouseUp: function (t) {
                return this._unblockFrames(), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), n.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function () {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function (t) {
                return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _setHandleClassName: function () {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
                this.handleElement.addClass("ui-draggable-handle")
            },
            _removeHandleClassName: function () {
                this.handleElement.removeClass("ui-draggable-handle")
            },
            _createHelper: function (t) {
                var r = this.options, u = n.isFunction(r.helper),
                    i = u ? n(r.helper.apply(this.element[0], [t])) : "clone" === r.helper ? this.element.clone().removeAttr("id") : this.element;
                return i.parents("body").length || i.appendTo("parent" === r.appendTo ? this.element[0].parentNode : r.appendTo), u && i[0] === this.element[0] && this._setPositionRelative(), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
            },
            _setPositionRelative: function () {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function (t) {
                "string" == typeof t && (t = t.split(" "));
                n.isArray(t) && (t = {left: +t[0], top: +t[1] || 0});
                "left" in t && (this.offset.click.left = t.left + this.margins.left);
                "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
                "top" in t && (this.offset.click.top = t.top + this.margins.top);
                "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _isRootNode: function (n) {
                return /(html|body)/i.test(n.tagName) || n === this.document[0]
            },
            _getParentOffset: function () {
                var t = this.offsetParent.offset(), i = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== i && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" !== this.cssPosition)return {top: 0, left: 0};
                var n = this.element.position(), t = this._isRootNode(this.scrollParent[0]);
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
            },
            _setContainment: function () {
                var f, t, i, r = this.options, u = this.document[0];
                return this.relativeContainer = null, r.containment ? "window" === r.containment ? (this.containment = [n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, n(window).scrollLeft() + n(window).width() - this.helperProportions.width - this.margins.left, n(window).scrollTop() + (n(window).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === r.containment ? (this.containment = [0, 0, n(u).width() - this.helperProportions.width - this.margins.left, (n(u).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : r.containment.constructor === Array ? (this.containment = r.containment, void 0) : ("parent" === r.containment && (r.containment = this.helper[0].parentNode), t = n(r.containment), i = t[0], i && (f = /(scroll|auto)/.test(t.css("overflow")), this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (f ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = t), void 0) : (this.containment = null, void 0)
            },
            _convertPositionTo: function (n, t) {
                t || (t = this.position);
                var i = "absolute" === n ? 1 : -1, r = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * i,
                    left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function (n, t) {
                var i, s, u, f, r = this.options, h = this._isRootNode(this.scrollParent[0]), e = n.pageX, o = n.pageY;
                return h && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, n.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left), n.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top), n.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left), n.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, o = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u, f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, e = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f), "y" === r.axis && (e = this.originalPageX), "x" === r.axis && (o = this.originalPageY)), {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                    left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function () {
                this.helper.removeClass("ui-draggable-dragging");
                this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
                this.helper = null;
                this.cancelHelperRemoval = !1;
                this.destroyOnClear && this.destroy()
            },
            _normalizeRightBottom: function () {
                "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto"));
                "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
            },
            _trigger: function (t, i, r) {
                return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), r.offset = this.positionAbs), n.Widget.prototype._trigger.call(this, t, i, r)
            },
            plugins: {},
            _uiHash: function () {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        });
        n.ui.plugin.add("draggable", "connectToSortable", {
            start: function (t, i, r) {
                var u = n.extend({}, i, {item: r.element});
                r.sortables = [];
                n(r.options.connectToSortable).each(function () {
                    var i = n(this).sortable("instance");
                    i && !i.options.disabled && (r.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, u))
                })
            }, stop: function (t, i, r) {
                var u = n.extend({}, i, {item: r.element});
                r.cancelHelperRemoval = !1;
                n.each(r.sortables, function () {
                    var n = this;
                    n.isOver ? (n.isOver = 0, r.cancelHelperRemoval = !0, n.cancelHelperRemoval = !1, n._storedCSS = {
                        position: n.placeholder.css("position"),
                        top: n.placeholder.css("top"),
                        left: n.placeholder.css("left")
                    }, n._mouseStop(t), n.options.helper = n.options._helper) : (n.cancelHelperRemoval = !0, n._trigger("deactivate", t, u))
                })
            }, drag: function (t, i, r) {
                n.each(r.sortables, function () {
                    var f = !1, u = this;
                    u.positionAbs = r.positionAbs;
                    u.helperProportions = r.helperProportions;
                    u.offset.click = r.offset.click;
                    u._intersectsWith(u.containerCache) && (f = !0, n.each(r.sortables, function () {
                        return this.positionAbs = r.positionAbs, this.helperProportions = r.helperProportions, this.offset.click = r.offset.click, this !== u && this._intersectsWith(this.containerCache) && n.contains(u.element[0], this.element[0]) && (f = !1), f
                    }));
                    f ? (u.isOver || (u.isOver = 1, r._parent = i.helper.parent(), u.currentItem = i.helper.appendTo(u.element).data("ui-sortable-item", !0), u.options._helper = u.options.helper, u.options.helper = function () {
                        return i.helper[0]
                    }, t.target = u.currentItem[0], u._mouseCapture(t, !0), u._mouseStart(t, !0, !0), u.offset.click.top = r.offset.click.top, u.offset.click.left = r.offset.click.left, u.offset.parent.left -= r.offset.parent.left - u.offset.parent.left, u.offset.parent.top -= r.offset.parent.top - u.offset.parent.top, r._trigger("toSortable", t), r.dropped = u.element, n.each(r.sortables, function () {
                        this.refreshPositions()
                    }), r.currentItem = r.element, u.fromOutside = r), u.currentItem && (u._mouseDrag(t), i.position = u.position)) : u.isOver && (u.isOver = 0, u.cancelHelperRemoval = !0, u.options._revert = u.options.revert, u.options.revert = !1, u._trigger("out", t, u._uiHash(u)), u._mouseStop(t, !0), u.options.revert = u.options._revert, u.options.helper = u.options._helper, u.placeholder && u.placeholder.remove(), i.helper.appendTo(r._parent), r._refreshOffsets(t), i.position = r._generatePosition(t, !0), r._trigger("fromSortable", t), r.dropped = !1, n.each(r.sortables, function () {
                            this.refreshPositions()
                        }))
                })
            }
        });
        n.ui.plugin.add("draggable", "cursor", {
            start: function (t, i, r) {
                var u = n("body"), f = r.options;
                u.css("cursor") && (f._cursor = u.css("cursor"));
                u.css("cursor", f.cursor)
            }, stop: function (t, i, r) {
                var u = r.options;
                u._cursor && n("body").css("cursor", u._cursor)
            }
        });
        n.ui.plugin.add("draggable", "opacity", {
            start: function (t, i, r) {
                var u = n(i.helper), f = r.options;
                u.css("opacity") && (f._opacity = u.css("opacity"));
                u.css("opacity", f.opacity)
            }, stop: function (t, i, r) {
                var u = r.options;
                u._opacity && n(i.helper).css("opacity", u._opacity)
            }
        });
        n.ui.plugin.add("draggable", "scroll", {
            start: function (n, t, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1));
                i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            }, drag: function (t, i, r) {
                var u = r.options, o = !1, e = r.scrollParentNotHidden[0], f = r.document[0];
                e !== f && "HTML" !== e.tagName ? (u.axis && "x" === u.axis || (r.overflowOffset.top + e.offsetHeight - t.pageY < u.scrollSensitivity ? e.scrollTop = o = e.scrollTop + u.scrollSpeed : t.pageY - r.overflowOffset.top < u.scrollSensitivity && (e.scrollTop = o = e.scrollTop - u.scrollSpeed)), u.axis && "y" === u.axis || (r.overflowOffset.left + e.offsetWidth - t.pageX < u.scrollSensitivity ? e.scrollLeft = o = e.scrollLeft + u.scrollSpeed : t.pageX - r.overflowOffset.left < u.scrollSensitivity && (e.scrollLeft = o = e.scrollLeft - u.scrollSpeed))) : (u.axis && "x" === u.axis || (t.pageY - n(f).scrollTop() < u.scrollSensitivity ? o = n(f).scrollTop(n(f).scrollTop() - u.scrollSpeed) : n(window).height() - (t.pageY - n(f).scrollTop()) < u.scrollSensitivity && (o = n(f).scrollTop(n(f).scrollTop() + u.scrollSpeed))), u.axis && "y" === u.axis || (t.pageX - n(f).scrollLeft() < u.scrollSensitivity ? o = n(f).scrollLeft(n(f).scrollLeft() - u.scrollSpeed) : n(window).width() - (t.pageX - n(f).scrollLeft()) < u.scrollSensitivity && (o = n(f).scrollLeft(n(f).scrollLeft() + u.scrollSpeed))));
                o !== !1 && n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
            }
        });
        n.ui.plugin.add("draggable", "snap", {
            start: function (t, i, r) {
                var u = r.options;
                r.snapElements = [];
                n(u.snap.constructor !== String ? u.snap.items || ":data(ui-draggable)" : u.snap).each(function () {
                    var t = n(this), i = t.offset();
                    this !== r.element[0] && r.snapElements.push({
                        item: this,
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            }, drag: function (t, i, r) {
                for (var e, o, s, h, c, a, l, v, w, b = r.options, f = b.snapTolerance, y = i.offset.left,
                         k = y + r.helperProportions.width, p = i.offset.top, d = p + r.helperProportions.height,
                         u = r.snapElements.length - 1; u >= 0; u--)c = r.snapElements[u].left - r.margins.left, a = c + r.snapElements[u].width, l = r.snapElements[u].top - r.margins.top, v = l + r.snapElements[u].height, c - f > k || y > a + f || l - f > d || p > v + f || !n.contains(r.snapElements[u].item.ownerDocument, r.snapElements[u].item) ? (r.snapElements[u].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {snapItem: r.snapElements[u].item})), r.snapElements[u].snapping = !1) : ("inner" !== b.snapMode && (e = f >= Math.abs(l - d), o = f >= Math.abs(v - p), s = f >= Math.abs(c - k), h = f >= Math.abs(a - y), e && (i.position.top = r._convertPositionTo("relative", {
                    top: l - r.helperProportions.height,
                    left: 0
                }).top), o && (i.position.top = r._convertPositionTo("relative", {
                    top: v,
                    left: 0
                }).top), s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c - r.helperProportions.width
                }).left), h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left)), w = e || o || s || h, "outer" !== b.snapMode && (e = f >= Math.abs(l - p), o = f >= Math.abs(v - d), s = f >= Math.abs(c - y), h = f >= Math.abs(a - k), e && (i.position.top = r._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top), o && (i.position.top = r._convertPositionTo("relative", {
                    top: v - r.helperProportions.height,
                    left: 0
                }).top), s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c
                }).left), h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a - r.helperProportions.width
                }).left)), !r.snapElements[u].snapping && (e || o || s || h || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {snapItem: r.snapElements[u].item})), r.snapElements[u].snapping = e || o || s || h || w)
            }
        });
        n.ui.plugin.add("draggable", "stack", {
            start: function (t, i, r) {
                var f, e = r.options, u = n.makeArray(n(e.stack)).sort(function (t, i) {
                    return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
                });
                u.length && (f = parseInt(n(u[0]).css("zIndex"), 10) || 0, n(u).each(function (t) {
                    n(this).css("zIndex", f + t)
                }), this.css("zIndex", f + u.length))
            }
        });
        n.ui.plugin.add("draggable", "zIndex", {
            start: function (t, i, r) {
                var u = n(i.helper), f = r.options;
                u.css("zIndex") && (f._zIndex = u.css("zIndex"));
                u.css("zIndex", f.zIndex)
            }, stop: function (t, i, r) {
                var u = r.options;
                u._zIndex && n(i.helper).css("zIndex", u._zIndex)
            }
        });
        n.ui.draggable;
        n.widget("ui.resizable", n.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function (n) {
                return parseInt(n, 10) || 0
            },
            _isNumber: function (n) {
                return !isNaN(parseInt(n, 10))
            },
            _hasScroll: function (t, i) {
                if ("hidden" === n(t).css("overflow"))return !1;
                var r = i && "left" === i ? "scrollLeft" : "scrollTop", u = !1;
                return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u)
            },
            _create: function () {
                var e, f, u, i, o, r = this, t = this.options;
                if (this.element.addClass("ui-resizable"), n.extend(this, {
                        _aspectRatio: !!t.aspectRatio,
                        aspectRatio: t.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                            n: ".ui-resizable-n",
                            e: ".ui-resizable-e",
                            s: ".ui-resizable-s",
                            w: ".ui-resizable-w",
                            se: ".ui-resizable-se",
                            sw: ".ui-resizable-sw",
                            ne: ".ui-resizable-ne",
                            nw: ".ui-resizable-nw"
                        } : "e,s,se"), this._handles = n(), this.handles.constructor === String)for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, f = 0; e.length > f; f++)u = n.trim(e[f]), o = "ui-resizable-" + u, i = n("<div class='ui-resizable-handle " + o + "'><\/div>"), i.css({zIndex: t.zIndex}), "se" === u && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[u] = ".ui-resizable-" + u, this.element.append(i);
                this._renderAxis = function (t) {
                    var i, u, f, e;
                    t = t || this.element;
                    for (i in this.handles)this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = n(this.handles[i]), this._on(this.handles[i], {mousedown: r._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (u = n(this.handles[i], this.element), e = /sw|ne|nw|se|n|s/.test(i) ? u.outerHeight() : u.outerWidth(), f = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(f, e), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                };
                this._renderAxis(this.element);
                this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
                this._handles.disableSelection();
                this._handles.mouseover(function () {
                    r.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = i && i[1] ? i[1] : "se")
                });
                t.autoHide && (this._handles.hide(), n(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                    t.disabled || (n(this).removeClass("ui-resizable-autohide"), r._handles.show())
                }).mouseleave(function () {
                    t.disabled || r.resizing || (n(this).addClass("ui-resizable-autohide"), r._handles.hide())
                }));
                this._mouseInit()
            },
            _destroy: function () {
                this._mouseDestroy();
                var t, i = function (t) {
                    n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                    position: t.css("position"),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css("top"),
                    left: t.css("left")
                }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _mouseCapture: function (t) {
                var r, i, u = !1;
                for (r in this.handles)i = n(this.handles[r])[0], (i === t.target || n.contains(i, t.target)) && (u = !0);
                return !this.options.disabled && u
            },
            _mouseStart: function (t) {
                var u, f, e, r = this.options, i = this.element;
                return this.resizing = !0, this._renderProxy(), u = this._num(this.helper.css("left")), f = this._num(this.helper.css("top")), r.containment && (u += n(r.containment).scrollLeft() || 0, f += n(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: u,
                    top: f
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {width: i.width(), height: i.height()}, this.originalSize = this._helper ? {
                    width: i.outerWidth(),
                    height: i.outerHeight()
                } : {width: i.width(), height: i.height()}, this.sizeDiff = {
                    width: i.outerWidth() - i.width(),
                    height: i.outerHeight() - i.height()
                }, this.originalPosition = {left: u, top: f}, this.originalMousePosition = {
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), i.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function (t) {
                var i, r, u = this.originalMousePosition, e = this.axis, o = t.pageX - u.left || 0,
                    s = t.pageY - u.top || 0, f = this._change[e];
                return this._updatePrevProperties(), f ? (i = f.apply(this, [t, o, s]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), r = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), n.isEmptyObject(r) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function (t) {
                this.resizing = !1;
                var r, u, f, e, o, s, h, c = this.options, i = this;
                return this._helper && (r = this._proportionallyResizeElements, u = r.length && /textarea/i.test(r[0].nodeName), f = u && this._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, e = u ? 0 : i.sizeDiff.width, o = {
                    width: i.helper.width() - e,
                    height: i.helper.height() - f
                }, s = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null, c.animate || this.element.css(n.extend(o, {
                    top: h,
                    left: s
                })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !c.animate && this._proportionallyResize()), n("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function () {
                this.prevPosition = {top: this.position.top, left: this.position.left};
                this.prevSize = {width: this.size.width, height: this.size.height}
            },
            _applyChanges: function () {
                var n = {};
                return this.position.top !== this.prevPosition.top && (n.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (n.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (n.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (n.height = this.size.height + "px"), this.helper.css(n), n
            },
            _updateVirtualBoundaries: function (n) {
                var r, u, f, e, t, i = this.options;
                t = {
                    minWidth: this._isNumber(i.minWidth) ? i.minWidth : 0,
                    maxWidth: this._isNumber(i.maxWidth) ? i.maxWidth : 1 / 0,
                    minHeight: this._isNumber(i.minHeight) ? i.minHeight : 0,
                    maxHeight: this._isNumber(i.maxHeight) ? i.maxHeight : 1 / 0
                };
                (this._aspectRatio || n) && (r = t.minHeight * this.aspectRatio, f = t.minWidth / this.aspectRatio, u = t.maxHeight * this.aspectRatio, e = t.maxWidth / this.aspectRatio, r > t.minWidth && (t.minWidth = r), f > t.minHeight && (t.minHeight = f), t.maxWidth > u && (t.maxWidth = u), t.maxHeight > e && (t.maxHeight = e));
                this._vBoundaries = t
            },
            _updateCache: function (n) {
                this.offset = this.helper.offset();
                this._isNumber(n.left) && (this.position.left = n.left);
                this._isNumber(n.top) && (this.position.top = n.top);
                this._isNumber(n.height) && (this.size.height = n.height);
                this._isNumber(n.width) && (this.size.width = n.width)
            },
            _updateRatio: function (n) {
                var t = this.position, i = this.size, r = this.axis;
                return this._isNumber(n.height) ? n.width = n.height * this.aspectRatio : this._isNumber(n.width) && (n.height = n.width / this.aspectRatio), "sw" === r && (n.left = t.left + (i.width - n.width), n.top = null), "nw" === r && (n.top = t.top + (i.height - n.height), n.left = t.left + (i.width - n.width)), n
            },
            _respectSize: function (n) {
                var t = this._vBoundaries, i = this.axis,
                    r = this._isNumber(n.width) && t.maxWidth && t.maxWidth < n.width,
                    u = this._isNumber(n.height) && t.maxHeight && t.maxHeight < n.height,
                    f = this._isNumber(n.width) && t.minWidth && t.minWidth > n.width,
                    e = this._isNumber(n.height) && t.minHeight && t.minHeight > n.height,
                    o = this.originalPosition.left + this.originalSize.width, s = this.position.top + this.size.height,
                    h = /sw|nw|w/.test(i), c = /nw|ne|n/.test(i);
                return f && (n.width = t.minWidth), e && (n.height = t.minHeight), r && (n.width = t.maxWidth), u && (n.height = t.maxHeight), f && h && (n.left = o - t.minWidth), r && h && (n.left = o - t.maxWidth), e && c && (n.top = s - t.minHeight), u && c && (n.top = s - t.maxHeight), n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null, n
            },
            _getPaddingPlusBorderDimensions: function (n) {
                for (var t = 0, i = [],
                         r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")],
                         u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")]; 4 > t; t++)i[t] = parseInt(r[t], 10) || 0, i[t] += parseInt(u[t], 10) || 0;
                return {height: i[0] + i[2], width: i[1] + i[3]}
            },
            _proportionallyResize: function () {
                if (this._proportionallyResizeElements.length)for (var n, t = 0,
                                                                       i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++)n = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(n)), n.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
            },
            _renderProxy: function () {
                var t = this.element, i = this.options;
                this.elementOffset = t.offset();
                this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function (n, t) {
                    return {width: this.originalSize.width + t}
                }, w: function (n, t) {
                    var i = this.originalSize, r = this.originalPosition;
                    return {left: r.left + t, width: i.width - t}
                }, n: function (n, t, i) {
                    var r = this.originalSize, u = this.originalPosition;
                    return {top: u.top + i, height: r.height - i}
                }, s: function (n, t, i) {
                    return {height: this.originalSize.height + i}
                }, se: function (t, i, r) {
                    return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
                }, sw: function (t, i, r) {
                    return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
                }, ne: function (t, i, r) {
                    return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
                }, nw: function (t, i, r) {
                    return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
                }
            },
            _propagate: function (t, i) {
                n.ui.plugin.call(this, t, [i, this.ui()]);
                "resize" !== t && this._trigger(t, i, this.ui())
            },
            plugins: {},
            ui: function () {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        });
        n.ui.plugin.add("resizable", "animate", {
            stop: function (t) {
                var i = n(this).resizable("instance"), u = i.options, r = i._proportionallyResizeElements,
                    f = r.length && /textarea/i.test(r[0].nodeName),
                    s = f && i._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, h = f ? 0 : i.sizeDiff.width,
                    c = {width: i.size.width - h, height: i.size.height - s},
                    e = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                    o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(n.extend(c, o && e ? {top: o, left: e} : {}), {
                    duration: u.animateDuration,
                    easing: u.animateEasing,
                    step: function () {
                        var u = {
                            width: parseInt(i.element.css("width"), 10),
                            height: parseInt(i.element.css("height"), 10),
                            top: parseInt(i.element.css("top"), 10),
                            left: parseInt(i.element.css("left"), 10)
                        };
                        r && r.length && n(r[0]).css({width: u.width, height: u.height});
                        i._updateCache(u);
                        i._propagate("resize", t)
                    }
                })
            }
        });
        n.ui.plugin.add("resizable", "containment", {
            start: function () {
                var r, f, e, o, s, h, c, t = n(this).resizable("instance"), l = t.options, a = t.element,
                    u = l.containment, i = u instanceof n ? u.get(0) : /parent/.test(u) ? a.parent().get(0) : u;
                i && (t.containerElement = n(i), /document/.test(u) || u === document ? (t.containerOffset = {
                    left: 0,
                    top: 0
                }, t.containerPosition = {left: 0, top: 0}, t.parentData = {
                    element: n(document),
                    left: 0,
                    top: 0,
                    width: n(document).width(),
                    height: n(document).height() || document.body.parentNode.scrollHeight
                }) : (r = n(i), f = [], n(["Top", "Right", "Left", "Bottom"]).each(function (n, i) {
                    f[n] = t._num(r.css("padding" + i))
                }), t.containerOffset = r.offset(), t.containerPosition = r.position(), t.containerSize = {
                    height: r.innerHeight() - f[3],
                    width: r.innerWidth() - f[1]
                }, e = t.containerOffset, o = t.containerSize.height, s = t.containerSize.width, h = t._hasScroll(i, "left") ? i.scrollWidth : s, c = t._hasScroll(i) ? i.scrollHeight : o, t.parentData = {
                    element: i,
                    left: e.left,
                    top: e.top,
                    width: h,
                    height: c
                }))
            }, resize: function (t) {
                var o, s, h, c, i = n(this).resizable("instance"), v = i.options, r = i.containerOffset, l = i.position,
                    f = i._aspectRatio || t.shiftKey, e = {top: 0, left: 0}, a = i.containerElement, u = !0;
                a[0] !== document && /static/.test(a.css("position")) && (e = r);
                l.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - e.left), f && (i.size.height = i.size.width / i.aspectRatio, u = !1), i.position.left = v.helper ? r.left : 0);
                l.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), f && (i.size.width = i.size.height * i.aspectRatio, u = !1), i.position.top = i._helper ? r.top : 0);
                h = i.containerElement.get(0) === i.element.parent().get(0);
                c = /relative|absolute/.test(i.containerElement.css("position"));
                h && c ? (i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top) : (i.offset.left = i.element.offset().left, i.offset.top = i.element.offset().top);
                o = Math.abs(i.sizeDiff.width + (i._helper ? i.offset.left - e.left : i.offset.left - r.left));
                s = Math.abs(i.sizeDiff.height + (i._helper ? i.offset.top - e.top : i.offset.top - r.top));
                o + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - o, f && (i.size.height = i.size.width / i.aspectRatio, u = !1));
                s + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - s, f && (i.size.width = i.size.height * i.aspectRatio, u = !1));
                u || (i.position.left = i.prevPosition.left, i.position.top = i.prevPosition.top, i.size.width = i.prevSize.width, i.size.height = i.prevSize.height)
            }, stop: function () {
                var t = n(this).resizable("instance"), r = t.options, u = t.containerOffset, f = t.containerPosition,
                    e = t.containerElement, i = n(t.helper), o = i.offset(), s = i.outerWidth() - t.sizeDiff.width,
                    h = i.outerHeight() - t.sizeDiff.height;
                t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                    left: o.left - f.left - u.left,
                    width: s,
                    height: h
                });
                t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                    left: o.left - f.left - u.left,
                    width: s,
                    height: h
                })
            }
        });
        n.ui.plugin.add("resizable", "alsoResize", {
            start: function () {
                var t = n(this).resizable("instance"), i = t.options;
                n(i.alsoResize).each(function () {
                    var t = n(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            }, resize: function (t, i) {
                var r = n(this).resizable("instance"), e = r.options, u = r.originalSize, f = r.originalPosition, o = {
                    height: r.size.height - u.height || 0,
                    width: r.size.width - u.width || 0,
                    top: r.position.top - f.top || 0,
                    left: r.position.left - f.left || 0
                };
                n(e.alsoResize).each(function () {
                    var t = n(this), u = n(this).data("ui-resizable-alsoresize"), r = {},
                        f = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    n.each(f, function (n, t) {
                        var i = (u[t] || 0) + (o[t] || 0);
                        i && i >= 0 && (r[t] = i || null)
                    });
                    t.css(r)
                })
            }, stop: function () {
                n(this).removeData("resizable-alsoresize")
            }
        });
        n.ui.plugin.add("resizable", "ghost", {
            start: function () {
                var t = n(this).resizable("instance"), i = t.options, r = t.size;
                t.ghost = t.originalElement.clone();
                t.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: r.height,
                    width: r.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : "");
                t.ghost.appendTo(t.helper)
            }, resize: function () {
                var t = n(this).resizable("instance");
                t.ghost && t.ghost.css({position: "relative", height: t.size.height, width: t.size.width})
            }, stop: function () {
                var t = n(this).resizable("instance");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        });
        n.ui.plugin.add("resizable", "grid", {
            resize: function () {
                var h, t = n(this).resizable("instance"), i = t.options, y = t.size, o = t.originalSize,
                    s = t.originalPosition, c = t.axis, l = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                    f = l[0] || 1, e = l[1] || 1, a = Math.round((y.width - o.width) / f) * f,
                    v = Math.round((y.height - o.height) / e) * e, r = o.width + a, u = o.height + v,
                    p = i.maxWidth && r > i.maxWidth, w = i.maxHeight && u > i.maxHeight,
                    b = i.minWidth && i.minWidth > r, k = i.minHeight && i.minHeight > u;
                i.grid = l;
                b && (r += f);
                k && (u += e);
                p && (r -= f);
                w && (u -= e);
                /^(se|s|e)$/.test(c) ? (t.size.width = r, t.size.height = u) : /^(ne)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.top = s.top - v) : /^(sw)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.left = s.left - a) : ((0 >= u - e || 0 >= r - f) && (h = t._getPaddingPlusBorderDimensions(this)), u - e > 0 ? (t.size.height = u, t.position.top = s.top - v) : (u = e - h.height, t.size.height = u, t.position.top = s.top + o.height - u), r - f > 0 ? (t.size.width = r, t.position.left = s.left - a) : (r = f - h.width, t.size.width = r, t.position.left = s.left + o.width - r))
            }
        });
        n.ui.resizable;
        n.widget("ui.dialog", {
            version: "1.11.4",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "Close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center", at: "center", of: window, collision: "fit", using: function (t) {
                        var i = n(this).css(t).offset().top;
                        0 > i && n(this).css("top", t.top - i)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0},
            _create: function () {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                };
                this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                };
                this.originalTitle = this.element.attr("title");
                this.options.title = this.options.title || this.originalTitle;
                this._createWrapper();
                this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
                this._createTitlebar();
                this._createButtonPane();
                this.options.draggable && n.fn.draggable && this._makeDraggable();
                this.options.resizable && n.fn.resizable && this._makeResizable();
                this._isOpen = !1;
                this._trackFocus()
            },
            _init: function () {
                this.options.autoOpen && this.open()
            },
            _appendTo: function () {
                var t = this.options.appendTo;
                return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
            },
            _destroy: function () {
                var n, t = this.originalPosition;
                this._untrackInstance();
                this._destroyOverlay();
                this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
                this.uiDialog.stop(!0, !0).remove();
                this.originalTitle && this.element.attr("title", this.originalTitle);
                n = t.parent.children().eq(t.index);
                n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
            },
            widget: function () {
                return this.uiDialog
            },
            disable: n.noop,
            enable: n.noop,
            close: function (t) {
                var i, r = this;
                if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                    if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length)try {
                        i = this.document[0].activeElement;
                        i && "body" !== i.nodeName.toLowerCase() && n(i).blur()
                    } catch (u) {
                    }
                    this._hide(this.uiDialog, this.options.hide, function () {
                        r._trigger("close", t)
                    })
                }
            },
            isOpen: function () {
                return this._isOpen
            },
            moveToTop: function () {
                this._moveToTop()
            },
            _moveToTop: function (t, i) {
                var r = !1, f = this.uiDialog.siblings(".ui-front:visible").map(function () {
                    return +n(this).css("z-index")
                }).get(), u = Math.max.apply(null, f);
                return u >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", u + 1), r = !0), r && !i && this._trigger("focus", t), r
            },
            open: function () {
                var t = this;
                return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = n(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                    t._focusTabbable();
                    t._trigger("focus")
                }), this._makeFocusTarget(), this._trigger("open"), void 0)
            },
            _focusTabbable: function () {
                var n = this._focusedElement;
                n || (n = this.element.find("[autofocus]"));
                n.length || (n = this.element.find(":tabbable"));
                n.length || (n = this.uiDialogButtonPane.find(":tabbable"));
                n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable"));
                n.length || (n = this.uiDialog);
                n.eq(0).focus()
            },
            _keepFocus: function (t) {
                function i() {
                    var t = this.document[0].activeElement,
                        i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
                    i || this._focusTabbable()
                }

                t.preventDefault();
                i.call(this);
                this._delay(i)
            },
            _createWrapper: function () {
                this.uiDialog = n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo());
                this._on(this.uiDialog, {
                    keydown: function (t) {
                        if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE)return t.preventDefault(), this.close(t), void 0;
                        if (t.keyCode === n.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                            var i = this.uiDialog.find(":tabbable"), r = i.filter(":first"), u = i.filter(":last");
                            t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== r[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
                                    u.focus()
                                }), t.preventDefault()) : (this._delay(function () {
                                r.focus()
                            }), t.preventDefault())
                        }
                    }, mousedown: function (n) {
                        this._moveToTop(n) && this._focusTabbable()
                    }
                });
                this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
            },
            _createTitlebar: function () {
                var t;
                this.uiDialogTitlebar = n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
                this._on(this.uiDialogTitlebar, {
                    mousedown: function (t) {
                        n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                });
                this.uiDialogTitlebarClose = n("<button type='button'><\/button>").button({
                    label: this.options.closeText,
                    icons: {primary: "ui-icon-closethick"},
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
                this._on(this.uiDialogTitlebarClose, {
                    click: function (n) {
                        n.preventDefault();
                        this.close(n)
                    }
                });
                t = n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
                this._title(t);
                this.uiDialog.attr({"aria-labelledby": t.attr("id")})
            },
            _title: function (n) {
                this.options.title || n.html("&#160;");
                n.text(this.options.title)
            },
            _createButtonPane: function () {
                this.uiDialogButtonPane = n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
                this.uiButtonSet = n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
                this._createButtons()
            },
            _createButtons: function () {
                var i = this, t = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), n.isEmptyObject(t) || n.isArray(t) && !t.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (n.each(t, function (t, r) {
                    var u, f;
                    r = n.isFunction(r) ? {click: r, text: t} : r;
                    r = n.extend({type: "button"}, r);
                    u = r.click;
                    r.click = function () {
                        u.apply(i.element[0], arguments)
                    };
                    f = {icons: r.icons, text: r.showText};
                    delete r.icons;
                    delete r.showText;
                    n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
            },
            _makeDraggable: function () {
                function i(n) {
                    return {position: n.position, offset: n.offset}
                }

                var t = this, r = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function (r, u) {
                        n(this).addClass("ui-dialog-dragging");
                        t._blockFrames();
                        t._trigger("dragStart", r, i(u))
                    },
                    drag: function (n, r) {
                        t._trigger("drag", n, i(r))
                    },
                    stop: function (u, f) {
                        var e = f.offset.left - t.document.scrollLeft(), o = f.offset.top - t.document.scrollTop();
                        r.position = {
                            my: "left top",
                            at: "left" + (e >= 0 ? "+" : "") + e + " top" + (o >= 0 ? "+" : "") + o,
                            of: t.window
                        };
                        n(this).removeClass("ui-dialog-dragging");
                        t._unblockFrames();
                        t._trigger("dragStop", u, i(f))
                    }
                })
            },
            _makeResizable: function () {
                function r(n) {
                    return {
                        originalPosition: n.originalPosition,
                        originalSize: n.originalSize,
                        position: n.position,
                        size: n.size
                    }
                }

                var t = this, i = this.options, u = i.resizable, f = this.uiDialog.css("position"),
                    e = "string" == typeof u ? u : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: i.maxWidth,
                    maxHeight: i.maxHeight,
                    minWidth: i.minWidth,
                    minHeight: this._minHeight(),
                    handles: e,
                    start: function (i, u) {
                        n(this).addClass("ui-dialog-resizing");
                        t._blockFrames();
                        t._trigger("resizeStart", i, r(u))
                    },
                    resize: function (n, i) {
                        t._trigger("resize", n, r(i))
                    },
                    stop: function (u, f) {
                        var e = t.uiDialog.offset(), o = e.left - t.document.scrollLeft(),
                            s = e.top - t.document.scrollTop();
                        i.height = t.uiDialog.height();
                        i.width = t.uiDialog.width();
                        i.position = {
                            my: "left top",
                            at: "left" + (o >= 0 ? "+" : "") + o + " top" + (s >= 0 ? "+" : "") + s,
                            of: t.window
                        };
                        n(this).removeClass("ui-dialog-resizing");
                        t._unblockFrames();
                        t._trigger("resizeStop", u, r(f))
                    }
                }).css("position", f)
            },
            _trackFocus: function () {
                this._on(this.widget(), {
                    focusin: function (t) {
                        this._makeFocusTarget();
                        this._focusedElement = n(t.target)
                    }
                })
            },
            _makeFocusTarget: function () {
                this._untrackInstance();
                this._trackingInstances().unshift(this)
            },
            _untrackInstance: function () {
                var t = this._trackingInstances(), i = n.inArray(this, t);
                -1 !== i && t.splice(i, 1)
            },
            _trackingInstances: function () {
                var n = this.document.data("ui-dialog-instances");
                return n || (n = [], this.document.data("ui-dialog-instances", n)), n
            },
            _minHeight: function () {
                var n = this.options;
                return "auto" === n.height ? n.minHeight : Math.min(n.minHeight, n.height)
            },
            _position: function () {
                var n = this.uiDialog.is(":visible");
                n || this.uiDialog.show();
                this.uiDialog.position(this.options.position);
                n || this.uiDialog.hide()
            },
            _setOptions: function (t) {
                var i = this, r = !1, u = {};
                n.each(t, function (n, t) {
                    i._setOption(n, t);
                    n in i.sizeRelatedOptions && (r = !0);
                    n in i.resizableRelatedOptions && (u[n] = t)
                });
                r && (this._size(), this._position());
                this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", u)
            },
            _setOption: function (n, t) {
                var u, r, i = this.uiDialog;
                "dialogClass" === n && i.removeClass(this.options.dialogClass).addClass(t);
                "disabled" !== n && (this._super(n, t), "appendTo" === n && this.uiDialog.appendTo(this._appendTo()), "buttons" === n && this._createButtons(), "closeText" === n && this.uiDialogTitlebarClose.button({label: "" + t}), "draggable" === n && (u = i.is(":data(ui-draggable)"), u && !t && i.draggable("destroy"), !u && t && this._makeDraggable()), "position" === n && this._position(), "resizable" === n && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && "string" == typeof t && i.resizable("option", "handles", t), r || t === !1 || this._makeResizable()), "title" === n && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function () {
                var t, i, r, n = this.options;
                this.element.show().css({width: "auto", minHeight: 0, maxHeight: "none", height: 0});
                n.minWidth > n.width && (n.width = n.minWidth);
                t = this.uiDialog.css({height: "auto", width: n.width}).outerHeight();
                i = Math.max(0, n.minHeight - t);
                r = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none";
                "auto" === n.height ? this.element.css({
                    minHeight: i,
                    maxHeight: r,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t));
                this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function () {
                this.iframeBlocks = this.document.find("iframe").map(function () {
                    var t = n(this);
                    return n("<div>").css({
                        position: "absolute",
                        width: t.outerWidth(),
                        height: t.outerHeight()
                    }).appendTo(t.parent()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function (t) {
                return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length
            },
            _createOverlay: function () {
                if (this.options.modal) {
                    var t = !0;
                    this._delay(function () {
                        t = !1
                    });
                    this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function (n) {
                            t || this._allowInteraction(n) || (n.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                        }
                    });
                    this.overlay = n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                    this._on(this.overlay, {mousedown: "_keepFocus"});
                    this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function () {
                if (this.options.modal && this.overlay) {
                    var n = this.document.data("ui-dialog-overlays") - 1;
                    n ? this.document.data("ui-dialog-overlays", n) : this.document.unbind("focusin").removeData("ui-dialog-overlays");
                    this.overlay.remove();
                    this.overlay = null
                }
            }
        });
        n.widget("ui.droppable", {
            version: "1.11.4",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function () {
                var t, i = this.options, r = i.accept;
                this.isover = !1;
                this.isout = !0;
                this.accept = n.isFunction(r) ? r : function (n) {
                    return n.is(r)
                };
                this.proportions = function () {
                    return arguments.length ? (t = arguments[0], void 0) : t ? t : t = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                };
                this._addToManager(i.scope);
                i.addClasses && this.element.addClass("ui-droppable")
            },
            _addToManager: function (t) {
                n.ui.ddmanager.droppables[t] = n.ui.ddmanager.droppables[t] || [];
                n.ui.ddmanager.droppables[t].push(this)
            },
            _splice: function (n) {
                for (var t = 0; n.length > t; t++)n[t] === this && n.splice(t, 1)
            },
            _destroy: function () {
                var t = n.ui.ddmanager.droppables[this.options.scope];
                this._splice(t);
                this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function (t, i) {
                if ("accept" === t) this.accept = n.isFunction(i) ? i : function (n) {
                    return n.is(i)
                }; else if ("scope" === t) {
                    var r = n.ui.ddmanager.droppables[this.options.scope];
                    this._splice(r);
                    this._addToManager(i)
                }
                this._super(t, i)
            },
            _activate: function (t) {
                var i = n.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass);
                i && this._trigger("activate", t, this.ui(i))
            },
            _deactivate: function (t) {
                var i = n.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass);
                i && this._trigger("deactivate", t, this.ui(i))
            },
            _over: function (t) {
                var i = n.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
            },
            _out: function (t) {
                var i = n.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
            },
            _drop: function (t, i) {
                var r = i || n.ui.ddmanager.current, u = !1;
                return r && (r.currentItem || r.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                    var i = n(this).droppable("instance");
                    if (i.options.greedy && !i.options.disabled && i.options.scope === r.options.scope && i.accept.call(i.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(i, {offset: i.element.offset()}), i.options.tolerance, t))return (u = !0, !1)
                }), u ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1) : !1
            },
            ui: function (n) {
                return {
                    draggable: n.currentItem || n.element,
                    helper: n.helper,
                    position: n.position,
                    offset: n.positionAbs
                }
            }
        });
        n.ui.intersect = function () {
            function n(n, t, i) {
                return n >= t && t + i > n
            }

            return function (t, i, r, u) {
                if (!i.offset)return !1;
                var o = (t.positionAbs || t.position.absolute).left + t.margins.left,
                    s = (t.positionAbs || t.position.absolute).top + t.margins.top, h = o + t.helperProportions.width,
                    c = s + t.helperProportions.height, f = i.offset.left, e = i.offset.top,
                    l = f + i.proportions().width, a = e + i.proportions().height;
                switch (r) {
                    case"fit":
                        return o >= f && l >= h && s >= e && a >= c;
                    case"intersect":
                        return o + t.helperProportions.width / 2 > f && l > h - t.helperProportions.width / 2 && s + t.helperProportions.height / 2 > e && a > c - t.helperProportions.height / 2;
                    case"pointer":
                        return n(u.pageY, e, i.proportions().height) && n(u.pageX, f, i.proportions().width);
                    case"touch":
                        return (s >= e && a >= s || c >= e && a >= c || e > s && c > a) && (o >= f && l >= o || h >= f && l >= h || f > o && h > l);
                    default:
                        return !1
                }
            }
        }();
        n.ui.ddmanager = {
            current: null, droppables: {"default": []}, prepareOffsets: function (t, i) {
                var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null,
                    e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                n:for (r = 0; u.length > r; r++)if (!(u[r].options.disabled || t && !u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                    for (f = 0; e.length > f; f++)if (e[f] === u[r].element[0]) {
                        u[r].proportions().height = 0;
                        continue n
                    }
                    u[r].visible = "none" !== u[r].element.css("display");
                    u[r].visible && ("mousedown" === o && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions({
                        width: u[r].element[0].offsetWidth,
                        height: u[r].element[0].offsetHeight
                    }))
                }
            }, drop: function (t, i) {
                var r = !1;
                return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                    this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance, i) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                }), r
            }, dragStart: function (t, i) {
                t.element.parentsUntil("body").bind("scroll.droppable", function () {
                    t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
                })
            }, drag: function (t, i) {
                t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
                n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function () {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var r, e, f, o = n.ui.intersect(t, this, this.options.tolerance, i),
                            u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                        u && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function () {
                            return n(this).droppable("instance").options.scope === e
                        }), f.length && (r = n(f[0]).droppable("instance"), r.greedyChild = "isover" === u)), r && "isover" === u && (r.isover = !1, r.isout = !0, r._out.call(r, i)), this[u] = !0, this["isout" === u ? "isover" : "isout"] = !1, this["isover" === u ? "_over" : "_out"].call(this, i), r && "isout" === u && (r.isout = !1, r.isover = !0, r._over.call(r, i)))
                    }
                })
            }, dragStop: function (t, i) {
                t.element.parentsUntil("body").unbind("scroll.droppable");
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            }
        };
        n.ui.droppable;
        o = "ui-effects-";
        s = n;
        n.effects = {effect: {}}, function (n, t) {
            function f(n, t, i) {
                var r = h[t.type] || {};
                return null == n ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : n > r.max ? r.max : n)
            }

            function s(f) {
                var o = i(), s = o._rgba = [];
                return f = f.toLowerCase(), r(v, function (n, i) {
                    var r, h = i.re.exec(f), c = h && i.parse(h), e = i.space || "rgba";
                    return c ? (r = o[e](c), o[u[e].cache] = r[u[e].cache], s = o._rgba = r._rgba, !1) : t
                }), s.length ? ("0,0,0,0" === s.join() && n.extend(s, e.transparent), o) : e[f]
            }

            function o(n, t, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? n + 6 * (t - n) * i : 1 > 2 * i ? t : 2 > 3 * i ? n + 6 * (t - n) * (2 / 3 - i) : n
            }

            var e, a = /^([\-+])=\s*(\d+\.?\d*)/, v = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (n) {
                        return [n[1], n[2], n[3], n[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (n) {
                        return [2.55 * n[1], 2.55 * n[2], 2.55 * n[3], n[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (n) {
                        return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (n) {
                        return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (n) {
                        return [n[1], n[2] / 100, n[3] / 100, n[4]]
                    }
                }], i = n.Color = function (t, i, r, u) {
                    return new n.Color.fn.parse(t, i, r, u)
                }, u = {
                    rgba: {
                        props: {
                            red: {idx: 0, type: "byte"},
                            green: {idx: 1, type: "byte"},
                            blue: {idx: 2, type: "byte"}
                        }
                    },
                    hsla: {
                        props: {
                            hue: {idx: 0, type: "degrees"},
                            saturation: {idx: 1, type: "percent"},
                            lightness: {idx: 2, type: "percent"}
                        }
                    }
                }, h = {byte: {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, c = i.support = {},
                l = n("<p>")[0], r = n.each;
            l.style.cssText = "background-color:rgba(1,1,1,.5)";
            c.rgba = l.style.backgroundColor.indexOf("rgba") > -1;
            r(u, function (n, t) {
                t.cache = "_" + n;
                t.props.alpha = {idx: 3, type: "percent", def: 1}
            });
            i.fn = n.extend(i.prototype, {
                parse: function (o, h, c, l) {
                    if (o === t)return this._rgba = [null, null, null, null], this;
                    (o.jquery || o.nodeType) && (o = n(o).css(h), h = t);
                    var a = this, v = n.type(o), y = this._rgba = [];
                    return h !== t && (o = [o, h, c, l], v = "array"), "string" === v ? this.parse(s(o) || e._default) : "array" === v ? (r(u.rgba.props, function (n, t) {
                        y[t.idx] = f(o[t.idx], t)
                    }), this) : "object" === v ? (o instanceof i ? r(u, function (n, t) {
                        o[t.cache] && (a[t.cache] = o[t.cache].slice())
                    }) : r(u, function (t, i) {
                        var u = i.cache;
                        r(i.props, function (n, t) {
                            if (!a[u] && i.to) {
                                if ("alpha" === n || null == o[n])return;
                                a[u] = i.to(a._rgba)
                            }
                            a[u][t.idx] = f(o[n], t, !0)
                        });
                        a[u] && 0 > n.inArray(null, a[u].slice(0, 3)) && (a[u][3] = 1, i.from && (a._rgba = i.from(a[u])))
                    }), this) : t
                }, is: function (n) {
                    var o = i(n), f = !0, e = this;
                    return r(u, function (n, i) {
                        var s, u = o[i.cache];
                        return u && (s = e[i.cache] || i.to && i.to(e._rgba) || [], r(i.props, function (n, i) {
                            return null != u[i.idx] ? f = u[i.idx] === s[i.idx] : t
                        })), f
                    }), f
                }, _space: function () {
                    var n = [], t = this;
                    return r(u, function (i, r) {
                        t[r.cache] && n.push(i)
                    }), n.pop()
                }, transition: function (n, t) {
                    var e = i(n), c = e._space(), o = u[c], l = 0 === this.alpha() ? i("transparent") : this,
                        a = l[o.cache] || o.to(l._rgba), s = a.slice();
                    return e = e[o.cache], r(o.props, function (n, i) {
                        var c = i.idx, r = a[c], u = e[c], o = h[i.type] || {};
                        null !== u && (null === r ? s[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), s[c] = f((u - r) * t + r, i)))
                    }), this[c](s)
                }, blend: function (t) {
                    if (1 === this._rgba[3])return this;
                    var r = this._rgba.slice(), u = r.pop(), f = i(t)._rgba;
                    return i(n.map(r, function (n, t) {
                        return (1 - u) * f[t] + u * n
                    }))
                }, toRgbaString: function () {
                    var i = "rgba(", t = n.map(this._rgba, function (n, t) {
                        return null == n ? t > 2 ? 1 : 0 : n
                    });
                    return 1 === t[3] && (t.pop(), i = "rgb("), i + t.join() + ")"
                }, toHslaString: function () {
                    var i = "hsla(", t = n.map(this.hsla(), function (n, t) {
                        return null == n && (n = t > 2 ? 1 : 0), t && 3 > t && (n = Math.round(100 * n) + "%"), n
                    });
                    return 1 === t[3] && (t.pop(), i = "hsl("), i + t.join() + ")"
                }, toHexString: function (t) {
                    var i = this._rgba.slice(), r = i.pop();
                    return t && i.push(~~(255 * r)), "#" + n.map(i, function (n) {
                        return n = (n || 0).toString(16), 1 === n.length ? "0" + n : n
                    }).join("")
                }, toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            });
            i.fn.parse.prototype = i.fn;
            u.hsla.to = function (n) {
                if (null == n[0] || null == n[1] || null == n[2])return [null, null, null, n[3]];
                var s, h, i = n[0] / 255, r = n[1] / 255, f = n[2] / 255, c = n[3], u = Math.max(i, r, f),
                    e = Math.min(i, r, f), t = u - e, o = u + e, l = .5 * o;
                return s = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, h = 0 === t ? 0 : .5 >= l ? t / o : t / (2 - o), [Math.round(s) % 360, h, l, null == c ? 1 : c]
            };
            u.hsla.from = function (n) {
                if (null == n[0] || null == n[1] || null == n[2])return [null, null, null, n[3]];
                var r = n[0] / 360, u = n[1], t = n[2], e = n[3], i = .5 >= t ? t * (1 + u) : t + u - t * u,
                    f = 2 * t - i;
                return [Math.round(255 * o(f, i, r + 1 / 3)), Math.round(255 * o(f, i, r)), Math.round(255 * o(f, i, r - 1 / 3)), e]
            };
            r(u, function (u, e) {
                var s = e.props, o = e.cache, h = e.to, c = e.from;
                i.fn[u] = function (u) {
                    if (h && !this[o] && (this[o] = h(this._rgba)), u === t)return this[o].slice();
                    var l, a = n.type(u), v = "array" === a || "object" === a ? u : arguments, e = this[o].slice();
                    return r(s, function (n, t) {
                        var i = v["object" === a ? n : t.idx];
                        null == i && (i = e[t.idx]);
                        e[t.idx] = f(i, t)
                    }), c ? (l = i(c(e)), l[o] = e, l) : i(e)
                };
                r(s, function (t, r) {
                    i.fn[t] || (i.fn[t] = function (i) {
                        var f, e = n.type(i), h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : u, o = this[h](),
                            s = o[r.idx];
                        return "undefined" === e ? s : ("function" === e && (i = i.call(this, s), e = n.type(i)), null == i && r.empty ? this : ("string" === e && (f = a.exec(i), f && (i = s + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), o[r.idx] = i, this[h](o)))
                    })
                })
            });
            i.hook = function (t) {
                var u = t.split(" ");
                r(u, function (t, r) {
                    n.cssHooks[r] = {
                        set: function (t, u) {
                            var o, f, e = "";
                            if ("transparent" !== u && ("string" !== n.type(u) || (o = s(u)))) {
                                if (u = i(o || u), !c.rgba && 1 !== u._rgba[3]) {
                                    for (f = "backgroundColor" === r ? t.parentNode : t; ("" === e || "transparent" === e) && f && f.style;)try {
                                        e = n.css(f, "backgroundColor");
                                        f = f.parentNode
                                    } catch (h) {
                                    }
                                    u = u.blend(e && "transparent" !== e ? e : "_default")
                                }
                                u = u.toRgbaString()
                            }
                            try {
                                t.style[r] = u
                            } catch (h) {
                            }
                        }
                    };
                    n.fx.step[r] = function (t) {
                        t.colorInit || (t.start = i(t.elem, r), t.end = i(t.end), t.colorInit = !0);
                        n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            };
            i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
            n.cssHooks.borderColor = {
                expand: function (n) {
                    var t = {};
                    return r(["Top", "Right", "Bottom", "Left"], function (i, r) {
                        t["border" + r + "Color"] = n
                    }), t
                }
            };
            e = n.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(s), function () {
            function t(t) {
                var r, u,
                    i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    f = {};
                if (i && i.length && i[0] && i[i[0]])for (u = i.length; u--;)r = i[u], "string" == typeof i[r] && (f[n.camelCase(r)] = i[r]); else for (r in i)"string" == typeof i[r] && (f[r] = i[r]);
                return f
            }

            function i(t, i) {
                var r, f, e = {};
                for (r in i)f = i[r], t[r] !== f && (u[r] || (n.fx.step[r] || !isNaN(parseFloat(f))) && (e[r] = f));
                return e
            }

            var r = ["add", "remove", "toggle"], u = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
            n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
                n.fx.step[i] = function (n) {
                    ("none" === n.end || n.setAttr) && (1 !== n.pos || n.setAttr) || (s.style(n.elem, i, n.end), n.setAttr = !0)
                }
            });
            n.fn.addBack || (n.fn.addBack = function (n) {
                return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
            });
            n.effects.animateClass = function (u, f, e, o) {
                var s = n.speed(f, e, o);
                return this.queue(function () {
                    var o, e = n(this), h = e.attr("class") || "", f = s.children ? e.find("*").addBack() : e;
                    f = f.map(function () {
                        var i = n(this);
                        return {el: i, start: t(this)}
                    });
                    o = function () {
                        n.each(r, function (n, t) {
                            u[t] && e[t + "Class"](u[t])
                        })
                    };
                    o();
                    f = f.map(function () {
                        return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
                    });
                    e.attr("class", h);
                    f = f.map(function () {
                        var i = this, t = n.Deferred(), r = n.extend({}, s, {
                            queue: !1, complete: function () {
                                t.resolve(i)
                            }
                        });
                        return this.el.animate(this.diff, r), t.promise()
                    });
                    n.when.apply(n, f.get()).done(function () {
                        o();
                        n.each(arguments, function () {
                            var t = this.el;
                            n.each(this.diff, function (n) {
                                t.css(n, "")
                            })
                        });
                        s.complete.call(e[0])
                    })
                })
            };
            n.fn.extend({
                addClass: function (t) {
                    return function (i, r, u, f) {
                        return r ? n.effects.animateClass.call(this, {add: i}, r, u, f) : t.apply(this, arguments)
                    }
                }(n.fn.addClass), removeClass: function (t) {
                    return function (i, r, u, f) {
                        return arguments.length > 1 ? n.effects.animateClass.call(this, {remove: i}, r, u, f) : t.apply(this, arguments)
                    }
                }(n.fn.removeClass), toggleClass: function (t) {
                    return function (i, r, u, f, e) {
                        return "boolean" == typeof r || void 0 === r ? u ? n.effects.animateClass.call(this, r ? {add: i} : {remove: i}, u, f, e) : t.apply(this, arguments) : n.effects.animateClass.call(this, {toggle: i}, r, u, f)
                    }
                }(n.fn.toggleClass), switchClass: function (t, i, r, u, f) {
                    return n.effects.animateClass.call(this, {add: i, remove: t}, r, u, f)
                }
            })
        }(), function () {
            function t(t, i, r, u) {
                return n.isPlainObject(t) && (i = t, t = t.effect), t = {effect: t}, null == i && (i = {}), n.isFunction(i) && (u = i, r = null, i = {}), ("number" == typeof i || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : "number" == typeof r ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t
            }

            function i(t) {
                return !t || "number" == typeof t || n.fx.speeds[t] ? !0 : "string" != typeof t || n.effects.effect[t] ? n.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
            }

            n.extend(n.effects, {
                version: "1.11.4", save: function (n, t) {
                    for (var i = 0; t.length > i; i++)null !== t[i] && n.data(o + t[i], n[0].style[t[i]])
                }, restore: function (n, t) {
                    for (var r,
                             i = 0; t.length > i; i++)null !== t[i] && (r = n.data(o + t[i]), void 0 === r && (r = ""), n.css(t[i], r))
                }, setMode: function (n, t) {
                    return "toggle" === t && (t = n.is(":hidden") ? "show" : "hide"), t
                }, getBaseline: function (n, t) {
                    var i, r;
                    switch (n[0]) {
                        case"top":
                            i = 0;
                            break;
                        case"middle":
                            i = .5;
                            break;
                        case"bottom":
                            i = 1;
                            break;
                        default:
                            i = n[0] / t.height
                    }
                    switch (n[1]) {
                        case"left":
                            r = 0;
                            break;
                        case"center":
                            r = .5;
                            break;
                        case"right":
                            r = 1;
                            break;
                        default:
                            r = n[1] / t.width
                    }
                    return {x: r, y: i}
                }, createWrapper: function (t) {
                    if (t.parent().is(".ui-effects-wrapper"))return t.parent();
                    var i = {width: t.outerWidth(!0), height: t.outerHeight(!0), float: t.css("float")},
                        u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }), f = {width: t.width(), height: t.height()}, r = document.activeElement;
                    try {
                        r.id
                    } catch (e) {
                        r = document.body
                    }
                    return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).focus(), u = t.parent(), "static" === t.css("position") ? (u.css({position: "relative"}), t.css({position: "relative"})) : (n.extend(i, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), n.each(["top", "left", "bottom", "right"], function (n, r) {
                        i[r] = t.css(r);
                        isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(f), u.css(i).show()
                }, removeWrapper: function (t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus()), t
                }, setTransition: function (t, i, r, u) {
                    return u = u || {}, n.each(i, function (n, i) {
                        var f = t.cssUnit(i);
                        f[0] > 0 && (u[i] = f[0] * r + f[1])
                    }), u
                }
            });
            n.fn.extend({
                effect: function () {
                    function r(t) {
                        function f() {
                            n.isFunction(o) && o.call(r[0]);
                            n.isFunction(t) && t()
                        }

                        var r = n(this), o = i.complete, u = i.mode;
                        (r.is(":hidden") ? "hide" === u : "show" === u) ? (r[u](), f()) : e.call(r[0], i, f)
                    }

                    var i = t.apply(this, arguments), u = i.mode, f = i.queue, e = n.effects.effect[i.effect];
                    return n.fx.off || !e ? u ? this[u](i.duration, i.complete) : this.each(function () {
                        i.complete && i.complete.call(this)
                    }) : f === !1 ? this.each(r) : this.queue(f || "fx", r)
                }, show: function (n) {
                    return function (r) {
                        if (i(r))return n.apply(this, arguments);
                        var u = t.apply(this, arguments);
                        return u.mode = "show", this.effect.call(this, u)
                    }
                }(n.fn.show), hide: function (n) {
                    return function (r) {
                        if (i(r))return n.apply(this, arguments);
                        var u = t.apply(this, arguments);
                        return u.mode = "hide", this.effect.call(this, u)
                    }
                }(n.fn.hide), toggle: function (n) {
                    return function (r) {
                        if (i(r) || "boolean" == typeof r)return n.apply(this, arguments);
                        var u = t.apply(this, arguments);
                        return u.mode = "toggle", this.effect.call(this, u)
                    }
                }(n.fn.toggle), cssUnit: function (t) {
                    var i = this.css(t), r = [];
                    return n.each(["em", "px", "%", "pt"], function (n, t) {
                        i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                    }), r
                }
            })
        }(), function () {
            var t = {};
            n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (n, i) {
                t[i] = function (t) {
                    return Math.pow(t, n + 2)
                }
            });
            n.extend(t, {
                Sine: function (n) {
                    return 1 - Math.cos(n * Math.PI / 2)
                }, Circ: function (n) {
                    return 1 - Math.sqrt(1 - n * n)
                }, Elastic: function (n) {
                    return 0 === n || 1 === n ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin((80 * (n - 1) - 7.5) * Math.PI / 15)
                }, Back: function (n) {
                    return n * n * (3 * n - 2)
                }, Bounce: function (n) {
                    for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > n;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - n, 2)
                }
            });
            n.each(t, function (t, i) {
                n.easing["easeIn" + t] = i;
                n.easing["easeOut" + t] = function (n) {
                    return 1 - i(1 - n)
                };
                n.easing["easeInOut" + t] = function (n) {
                    return .5 > n ? i(2 * n) / 2 : 1 - i(-2 * n + 2) / 2
                }
            })
        }();
        n.effects;
        n.effects.effect.blind = function (t, i) {
            var u, f, e, r = n(this), s = ["position", "top", "bottom", "left", "right", "height", "width"],
                v = n.effects.setMode(r, t.mode || "hide"), y = t.direction || "up", o = /up|down|vertical/.test(y),
                h = o ? "height" : "width", c = o ? "top" : "left", p = /up|left|vertical|horizontal/.test(y), l = {},
                a = "show" === v;
            r.parent().is(".ui-effects-wrapper") ? n.effects.save(r.parent(), s) : n.effects.save(r, s);
            r.show();
            u = n.effects.createWrapper(r).css({overflow: "hidden"});
            f = u[h]();
            e = parseFloat(u.css(c)) || 0;
            l[h] = a ? f : 0;
            p || (r.css(o ? "bottom" : "right", 0).css(o ? "top" : "left", "auto").css({position: "absolute"}), l[c] = a ? e : f + e);
            a && (u.css(h, 0), p || u.css(c, e + f));
            u.animate(l, {
                duration: t.duration, easing: t.easing, queue: !1, complete: function () {
                    "hide" === v && r.hide();
                    n.effects.restore(r, s);
                    n.effects.removeWrapper(r);
                    i()
                }
            })
        };
        n.effects.effect.bounce = function (t, i) {
            var v, f, e, r = n(this), y = ["position", "top", "bottom", "left", "right", "height", "width"],
                k = n.effects.setMode(r, t.mode || "effect"), o = "hide" === k, p = "show" === k,
                h = t.direction || "up", u = t.distance, w = t.times || 5, d = 2 * w + (p || o ? 1 : 0),
                c = t.duration / d, l = t.easing, s = "up" === h || "down" === h ? "top" : "left",
                b = "up" === h || "left" === h, a = r.queue(), g = a.length;
            for ((p || o) && y.push("opacity"), n.effects.save(r, y), r.show(), n.effects.createWrapper(r), u || (u = r["top" === s ? "outerHeight" : "outerWidth"]() / 3), p && (e = {opacity: 1}, e[s] = 0, r.css("opacity", 0).css(s, b ? 2 * -u : 2 * u).animate(e, c, l)), o && (u /= Math.pow(2, w - 1)), e = {}, e[s] = 0, v = 0; w > v; v++)f = {}, f[s] = (b ? "-=" : "+=") + u, r.animate(f, c, l).animate(e, c, l), u = o ? 2 * u : u / 2;
            o && (f = {opacity: 0}, f[s] = (b ? "-=" : "+=") + u, r.animate(f, c, l));
            r.queue(function () {
                o && r.hide();
                n.effects.restore(r, y);
                n.effects.removeWrapper(r);
                i()
            });
            g > 1 && a.splice.apply(a, [1, 0].concat(a.splice(g, d + 1)));
            r.dequeue()
        };
        n.effects.effect.clip = function (t, i) {
            var h, u, f, r = n(this), c = ["position", "top", "bottom", "left", "right", "height", "width"],
                v = n.effects.setMode(r, t.mode || "hide"), e = "show" === v, y = t.direction || "vertical",
                l = "vertical" === y, o = l ? "height" : "width", a = l ? "top" : "left", s = {};
            n.effects.save(r, c);
            r.show();
            h = n.effects.createWrapper(r).css({overflow: "hidden"});
            u = "IMG" === r[0].tagName ? h : r;
            f = u[o]();
            e && (u.css(o, 0), u.css(a, f / 2));
            s[o] = e ? f : 0;
            s[a] = e ? 0 : f / 2;
            u.animate(s, {
                queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                    e || r.hide();
                    n.effects.restore(r, c);
                    n.effects.removeWrapper(r);
                    i()
                }
            })
        };
        n.effects.effect.drop = function (t, i) {
            var u, r = n(this), h = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                c = n.effects.setMode(r, t.mode || "hide"), e = "show" === c, f = t.direction || "left",
                o = "up" === f || "down" === f ? "top" : "left", s = "up" === f || "left" === f ? "pos" : "neg",
                l = {opacity: e ? 1 : 0};
            n.effects.save(r, h);
            r.show();
            n.effects.createWrapper(r);
            u = t.distance || r["top" === o ? "outerHeight" : "outerWidth"](!0) / 2;
            e && r.css("opacity", 0).css(o, "pos" === s ? -u : u);
            l[o] = (e ? "pos" === s ? "+=" : "-=" : "pos" === s ? "-=" : "+=") + u;
            r.animate(l, {
                queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                    "hide" === c && r.hide();
                    n.effects.restore(r, h);
                    n.effects.removeWrapper(r);
                    i()
                }
            })
        };
        n.effects.effect.explode = function (t, i) {
            function b() {
                p.push(this);
                p.length === o * c && k()
            }

            function k() {
                r.css({visibility: "visible"});
                n(p).remove();
                u || r.hide();
                i()
            }

            for (var e, l, a, v, y, o = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = o, r = n(this),
                     d = n.effects.setMode(r, t.mode || "hide"), u = "show" === d,
                     w = r.show().css("visibility", "hidden").offset(), s = Math.ceil(r.outerWidth() / c),
                     h = Math.ceil(r.outerHeight() / o), p = [],
                     f = 0; o > f; f++)for (a = w.top + f * h, y = f - (o - 1) / 2, e = 0; c > e; e++)l = w.left + e * s, v = e - (c - 1) / 2, r.clone().appendTo("body").wrap("<div><\/div>").css({
                position: "absolute",
                visibility: "visible",
                left: -e * s,
                top: -f * h
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: s,
                height: h,
                left: l + (u ? v * s : 0),
                top: a + (u ? y * h : 0),
                opacity: u ? 0 : 1
            }).animate({
                left: l + (u ? 0 : v * s),
                top: a + (u ? 0 : y * h),
                opacity: u ? 1 : 0
            }, t.duration || 500, t.easing, b)
        };
        n.effects.effect.fade = function (t, i) {
            var r = n(this), u = n.effects.setMode(r, t.mode || "toggle");
            r.animate({opacity: u}, {queue: !1, duration: t.duration, easing: t.easing, complete: i})
        };
        n.effects.effect.fold = function (t, i) {
            var r, e, u = n(this), s = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = n.effects.setMode(u, t.mode || "hide"), o = "show" === h, c = "hide" === h, f = t.size || 15,
                l = /([0-9]+)%/.exec(f), a = !!t.horizFirst, v = o !== a,
                y = v ? ["width", "height"] : ["height", "width"], p = t.duration / 2, w = {}, b = {};
            n.effects.save(u, s);
            u.show();
            r = n.effects.createWrapper(u).css({overflow: "hidden"});
            e = v ? [r.width(), r.height()] : [r.height(), r.width()];
            l && (f = parseInt(l[1], 10) / 100 * e[c ? 0 : 1]);
            o && r.css(a ? {height: 0, width: f} : {height: f, width: 0});
            w[y[0]] = o ? e[0] : f;
            b[y[1]] = o ? e[1] : 0;
            r.animate(w, p, t.easing).animate(b, p, t.easing, function () {
                c && u.hide();
                n.effects.restore(u, s);
                n.effects.removeWrapper(u);
                i()
            })
        };
        n.effects.effect.highlight = function (t, i) {
            var r = n(this), u = ["backgroundImage", "backgroundColor", "opacity"],
                f = n.effects.setMode(r, t.mode || "show"), e = {backgroundColor: r.css("backgroundColor")};
            "hide" === f && (e.opacity = 0);
            n.effects.save(r, u);
            r.show().css({backgroundImage: "none", backgroundColor: t.color || "#ffff99"}).animate(e, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function () {
                    "hide" === f && r.hide();
                    n.effects.restore(r, u);
                    i()
                }
            })
        };
        n.effects.effect.size = function (t, i) {
            var f, l, u, r = n(this),
                w = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                a = ["width", "height", "overflow"], v = ["fontSize"],
                e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                h = n.effects.setMode(r, t.mode || "effect"), y = t.restore || "effect" !== h, c = t.scale || "both",
                b = t.origin || ["middle", "center"], k = r.css("position"),
                s = y ? w : ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                p = {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
            "show" === h && r.show();
            f = {height: r.height(), width: r.width(), outerHeight: r.outerHeight(), outerWidth: r.outerWidth()};
            "toggle" === t.mode && "show" === h ? (r.from = t.to || p, r.to = t.from || f) : (r.from = t.from || ("show" === h ? p : f), r.to = t.to || ("hide" === h ? p : f));
            u = {
                from: {y: r.from.height / f.height, x: r.from.width / f.width},
                to: {y: r.to.height / f.height, x: r.to.width / f.width}
            };
            ("box" === c || "both" === c) && (u.from.y !== u.to.y && (s = s.concat(e), r.from = n.effects.setTransition(r, e, u.from.y, r.from), r.to = n.effects.setTransition(r, e, u.to.y, r.to)), u.from.x !== u.to.x && (s = s.concat(o), r.from = n.effects.setTransition(r, o, u.from.x, r.from), r.to = n.effects.setTransition(r, o, u.to.x, r.to)));
            ("content" === c || "both" === c) && u.from.y !== u.to.y && (s = s.concat(v).concat(a), r.from = n.effects.setTransition(r, v, u.from.y, r.from), r.to = n.effects.setTransition(r, v, u.to.y, r.to));
            n.effects.save(r, s);
            r.show();
            n.effects.createWrapper(r);
            r.css("overflow", "hidden").css(r.from);
            b && (l = n.effects.getBaseline(b, f), r.from.top = (f.outerHeight - r.outerHeight()) * l.y, r.from.left = (f.outerWidth - r.outerWidth()) * l.x, r.to.top = (f.outerHeight - r.to.outerHeight) * l.y, r.to.left = (f.outerWidth - r.to.outerWidth) * l.x);
            r.css(r.from);
            ("content" === c || "both" === c) && (e = e.concat(["marginTop", "marginBottom"]).concat(v), o = o.concat(["marginLeft", "marginRight"]), a = w.concat(e).concat(o), r.find("*[width]").each(function () {
                var i = n(this), r = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
                y && n.effects.save(i, a);
                i.from = {
                    height: r.height * u.from.y,
                    width: r.width * u.from.x,
                    outerHeight: r.outerHeight * u.from.y,
                    outerWidth: r.outerWidth * u.from.x
                };
                i.to = {
                    height: r.height * u.to.y,
                    width: r.width * u.to.x,
                    outerHeight: r.height * u.to.y,
                    outerWidth: r.width * u.to.x
                };
                u.from.y !== u.to.y && (i.from = n.effects.setTransition(i, e, u.from.y, i.from), i.to = n.effects.setTransition(i, e, u.to.y, i.to));
                u.from.x !== u.to.x && (i.from = n.effects.setTransition(i, o, u.from.x, i.from), i.to = n.effects.setTransition(i, o, u.to.x, i.to));
                i.css(i.from);
                i.animate(i.to, t.duration, t.easing, function () {
                    y && n.effects.restore(i, a)
                })
            }));
            r.animate(r.to, {
                queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                    0 === r.to.opacity && r.css("opacity", r.from.opacity);
                    "hide" === h && r.hide();
                    n.effects.restore(r, s);
                    y || ("static" === k ? r.css({
                        position: "relative",
                        top: r.to.top,
                        left: r.to.left
                    }) : n.each(["top", "left"], function (n, t) {
                        r.css(t, function (t, i) {
                            var f = parseInt(i, 10), u = n ? r.to.left : r.to.top;
                            return "auto" === i ? u + "px" : f + u + "px"
                        })
                    }));
                    n.effects.removeWrapper(r);
                    i()
                }
            })
        };
        n.effects.effect.scale = function (t, i) {
            var u = n(this), r = n.extend(!0, {}, t), f = n.effects.setMode(u, t.mode || "effect"),
                s = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === f ? 0 : 100),
                h = t.direction || "both", c = t.origin,
                e = {height: u.height(), width: u.width(), outerHeight: u.outerHeight(), outerWidth: u.outerWidth()},
                o = {y: "horizontal" !== h ? s / 100 : 1, x: "vertical" !== h ? s / 100 : 1};
            r.effect = "size";
            r.queue = !1;
            r.complete = i;
            "effect" !== f && (r.origin = c || ["middle", "center"], r.restore = !0);
            r.from = t.from || ("show" === f ? {height: 0, width: 0, outerHeight: 0, outerWidth: 0} : e);
            r.to = {
                height: e.height * o.y,
                width: e.width * o.x,
                outerHeight: e.outerHeight * o.y,
                outerWidth: e.outerWidth * o.x
            };
            r.fade && ("show" === f && (r.from.opacity = 0, r.to.opacity = 1), "hide" === f && (r.from.opacity = 1, r.to.opacity = 0));
            u.effect(r)
        };
        n.effects.effect.puff = function (t, i) {
            var r = n(this), e = n.effects.setMode(r, t.mode || "hide"), o = "hide" === e,
                s = parseInt(t.percent, 10) || 150, f = s / 100,
                u = {height: r.height(), width: r.width(), outerHeight: r.outerHeight(), outerWidth: r.outerWidth()};
            n.extend(t, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: e,
                complete: i,
                percent: o ? s : 100,
                from: o ? u : {
                    height: u.height * f,
                    width: u.width * f,
                    outerHeight: u.outerHeight * f,
                    outerWidth: u.outerWidth * f
                }
            });
            r.effect(t)
        };
        n.effects.effect.pulsate = function (t, i) {
            var e, r = n(this), o = n.effects.setMode(r, t.mode || "show"), h = "show" === o, a = "hide" === o,
                v = h || "hide" === o, s = 2 * (t.times || 5) + (v ? 1 : 0), c = t.duration / s, u = 0, f = r.queue(),
                l = f.length;
            for ((h || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1), e = 1; s > e; e++)r.animate({opacity: u}, c, t.easing), u = 1 - u;
            r.animate({opacity: u}, c, t.easing);
            r.queue(function () {
                a && r.hide();
                i()
            });
            l > 1 && f.splice.apply(f, [1, 0].concat(f.splice(l, s + 1)));
            r.dequeue()
        };
        n.effects.effect.shake = function (t, i) {
            var o, r = n(this), v = ["position", "top", "bottom", "left", "right", "height", "width"],
                k = n.effects.setMode(r, t.mode || "effect"), f = t.direction || "left", s = t.distance || 20,
                y = t.times || 3, p = 2 * y + 1, u = Math.round(t.duration / p),
                h = "up" === f || "down" === f ? "top" : "left", c = "up" === f || "left" === f, l = {}, a = {}, w = {},
                e = r.queue(), b = e.length;
            for (n.effects.save(r, v), r.show(), n.effects.createWrapper(r), l[h] = (c ? "-=" : "+=") + s, a[h] = (c ? "+=" : "-=") + 2 * s, w[h] = (c ? "-=" : "+=") + 2 * s, r.animate(l, u, t.easing), o = 1; y > o; o++)r.animate(a, u, t.easing).animate(w, u, t.easing);
            r.animate(a, u, t.easing).animate(l, u / 2, t.easing).queue(function () {
                "hide" === k && r.hide();
                n.effects.restore(r, v);
                n.effects.removeWrapper(r);
                i()
            });
            b > 1 && e.splice.apply(e, [1, 0].concat(e.splice(b, p + 1)));
            r.dequeue()
        };
        n.effects.effect.slide = function (t, i) {
            var u, r = n(this), s = ["position", "top", "bottom", "left", "right", "width", "height"],
                h = n.effects.setMode(r, t.mode || "show"), c = "show" === h, f = t.direction || "left",
                e = "up" === f || "down" === f ? "top" : "left", o = "up" === f || "left" === f, l = {};
            n.effects.save(r, s);
            r.show();
            u = t.distance || r["top" === e ? "outerHeight" : "outerWidth"](!0);
            n.effects.createWrapper(r).css({overflow: "hidden"});
            c && r.css(e, o ? isNaN(u) ? "-" + u : -u : u);
            l[e] = (c ? o ? "+=" : "-=" : o ? "-=" : "+=") + u;
            r.animate(l, {
                queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                    "hide" === h && r.hide();
                    n.effects.restore(r, s);
                    n.effects.removeWrapper(r);
                    i()
                }
            })
        };
        n.effects.effect.transfer = function (t, i) {
            var u = n(this), r = n(t.to), f = "fixed" === r.css("position"), e = n("body"), o = f ? e.scrollTop() : 0,
                s = f ? e.scrollLeft() : 0, h = r.offset(),
                l = {top: h.top - o, left: h.left - s, height: r.innerHeight(), width: r.innerWidth()}, c = u.offset(),
                a = n("<div class='ui-effects-transfer'><\/div>").appendTo(document.body).addClass(t.className).css({
                    top: c.top - o,
                    left: c.left - s,
                    height: u.innerHeight(),
                    width: u.innerWidth(),
                    position: f ? "fixed" : "absolute"
                }).animate(l, t.duration, t.easing, function () {
                    a.remove();
                    i()
                })
        };
        n.widget("ui.progressbar", {
            version: "1.11.4",
            options: {max: 100, value: 0, change: null, complete: null},
            min: 0,
            _create: function () {
                this.oldValue = this.options.value = this._constrainedValue();
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                });
                this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element);
                this._refreshValue()
            },
            _destroy: function () {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
                this.valueDiv.remove()
            },
            value: function (n) {
                return void 0 === n ? this.options.value : (this.options.value = this._constrainedValue(n), this._refreshValue(), void 0)
            },
            _constrainedValue: function (n) {
                return void 0 === n && (n = this.options.value), this.indeterminate = n === !1, "number" != typeof n && (n = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n))
            },
            _setOptions: function (n) {
                var t = n.value;
                delete n.value;
                this._super(n);
                this.options.value = this._constrainedValue(t);
                this._refreshValue()
            },
            _setOption: function (n, t) {
                "max" === n && (t = Math.max(this.min, t));
                "disabled" === n && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t);
                this._super(n, t)
            },
            _percentage: function () {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function () {
                var t = this.options.value, i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%");
                this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
                this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = n("<div class='ui-progressbar-overlay'><\/div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": t
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
                this.oldValue !== t && (this.oldValue = t, this._trigger("change"));
                t === this.options.max && this._trigger("complete")
            }
        });
        n.widget("ui.selectable", n.ui.mouse, {
            version: "1.11.4",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function () {
                var t, i = this;
                this.element.addClass("ui-selectable");
                this.dragged = !1;
                this.refresh = function () {
                    t = n(i.options.filter, i.element[0]);
                    t.addClass("ui-selectee");
                    t.each(function () {
                        var t = n(this), i = t.offset();
                        n.data(this, "selectable-item", {
                            element: this,
                            $element: t,
                            left: i.left,
                            top: i.top,
                            right: i.left + t.outerWidth(),
                            bottom: i.top + t.outerHeight(),
                            startselected: !1,
                            selected: t.hasClass("ui-selected"),
                            selecting: t.hasClass("ui-selecting"),
                            unselecting: t.hasClass("ui-unselecting")
                        })
                    })
                };
                this.refresh();
                this.selectees = t.addClass("ui-selectee");
                this._mouseInit();
                this.helper = n("<div class='ui-selectable-helper'><\/div>")
            },
            _destroy: function () {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item");
                this.element.removeClass("ui-selectable ui-selectable-disabled");
                this._mouseDestroy()
            },
            _mouseStart: function (t) {
                var i = this, r = this.options;
                this.opos = [t.pageX, t.pageY];
                this.options.disabled || (this.selectees = n(r.filter, this.element[0]), this._trigger("start", t), n(r.appendTo).append(this.helper), this.helper.css({
                    left: t.pageX,
                    top: t.pageY,
                    width: 0,
                    height: 0
                }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                    var r = n.data(this, "selectable-item");
                    r.startselected = !0;
                    t.metaKey || t.ctrlKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, i._trigger("unselecting", t, {unselecting: r.element}))
                }), n(t.target).parents().addBack().each(function () {
                    var u, r = n.data(this, "selectable-item");
                    if (r)return (u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"), r.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"), r.unselecting = !u, r.selecting = u, r.selected = u, u ? i._trigger("selecting", t, {selecting: r.element}) : i._trigger("unselecting", t, {unselecting: r.element}), !1)
                }))
            },
            _mouseDrag: function (t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var e, o = this, s = this.options, i = this.opos[0], r = this.opos[1], u = t.pageX, f = t.pageY;
                    return i > u && (e = u, u = i, i = e), r > f && (e = f, f = r, r = e), this.helper.css({
                        left: i,
                        top: r,
                        width: u - i,
                        height: f - r
                    }), this.selectees.each(function () {
                        var e = n.data(this, "selectable-item"), h = !1;
                        e && e.element !== o.element[0] && ("touch" === s.tolerance ? h = !(e.left > u || i > e.right || e.top > f || r > e.bottom) : "fit" === s.tolerance && (h = e.left > i && u > e.right && e.top > r && f > e.bottom), h ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, o._trigger("selecting", t, {selecting: e.element}))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), o._trigger("unselecting", t, {unselecting: e.element}))), e.selected && (t.metaKey || t.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, o._trigger("unselecting", t, {unselecting: e.element})))))
                    }), !1
                }
            },
            _mouseStop: function (t) {
                var i = this;
                return this.dragged = !1, n(".ui-unselecting", this.element[0]).each(function () {
                    var r = n.data(this, "selectable-item");
                    r.$element.removeClass("ui-unselecting");
                    r.unselecting = !1;
                    r.startselected = !1;
                    i._trigger("unselected", t, {unselected: r.element})
                }), n(".ui-selecting", this.element[0]).each(function () {
                    var r = n.data(this, "selectable-item");
                    r.$element.removeClass("ui-selecting").addClass("ui-selected");
                    r.selecting = !1;
                    r.selected = !0;
                    r.startselected = !0;
                    i._trigger("selected", t, {selected: r.element})
                }), this._trigger("stop", t), this.helper.remove(), !1
            }
        });
        n.widget("ui.selectmenu", {
            version: "1.11.4",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                disabled: null,
                icons: {button: "ui-icon-triangle-1-s"},
                position: {my: "left top", at: "left bottom", collision: "none"},
                width: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function () {
                var n = this.element.uniqueId().attr("id");
                this.ids = {element: n, button: n + "-button", menu: n + "-menu"};
                this._drawButton();
                this._drawMenu();
                this.options.disabled && this.disable()
            },
            _drawButton: function () {
                var t = this;
                this.label = n("label[for='" + this.ids.element + "']").attr("for", this.ids.button);
                this._on(this.label, {
                    click: function (n) {
                        this.button.focus();
                        n.preventDefault()
                    }
                });
                this.element.hide();
                this.button = n("<span>", {
                    "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true"
                }).insertAfter(this.element);
                n("<span>", {"class": "ui-icon " + this.options.icons.button}).prependTo(this.button);
                this.buttonText = n("<span>", {"class": "ui-selectmenu-text"}).appendTo(this.button);
                this._setText(this.buttonText, this.element.find("option:selected").text());
                this._resizeButton();
                this._on(this.button, this._buttonEvents);
                this.button.one("focusin", function () {
                    t.menuItems || t._refreshMenu()
                });
                this._hoverable(this.button);
                this._focusable(this.button)
            },
            _drawMenu: function () {
                var t = this;
                this.menu = n("<ul>", {"aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu});
                this.menuWrap = n("<div>", {"class": "ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo());
                this.menuInstance = this.menu.menu({
                    role: "listbox", select: function (n, i) {
                        n.preventDefault();
                        t._setSelection();
                        t._select(i.item.data("ui-selectmenu-item"), n)
                    }, focus: function (n, i) {
                        var r = i.item.data("ui-selectmenu-item");
                        null != t.focusIndex && r.index !== t.focusIndex && (t._trigger("focus", n, {item: r}), t.isOpen || t._select(r, n));
                        t.focusIndex = r.index;
                        t.button.attr("aria-activedescendant", t.menuItems.eq(r.index).attr("id"))
                    }
                }).menu("instance");
                this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");
                this.menuInstance._off(this.menu, "mouseleave");
                this.menuInstance._closeOnDocumentClick = function () {
                    return !1
                };
                this.menuInstance._isDivider = function () {
                    return !1
                }
            },
            refresh: function () {
                this._refreshMenu();
                this._setText(this.buttonText, this._getSelectedItem().text());
                this.options.width || this._resizeButton()
            },
            _refreshMenu: function () {
                this.menu.empty();
                var n, t = this.element.find("option");
                t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), n = this._getSelectedItem(), this.menuInstance.focus(null, n), this._setAria(n.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function (n) {
                this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", n))
            },
            _position: function () {
                this.menuWrap.position(n.extend({of: this.button}, this.options.position))
            },
            close: function (n) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", n))
            },
            widget: function () {
                return this.button
            },
            menuWidget: function () {
                return this.menu
            },
            _renderMenu: function (t, i) {
                var u = this, r = "";
                n.each(i, function (i, f) {
                    f.optgroup !== r && (n("<li>", {
                        "class": "ui-selectmenu-optgroup ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                        text: f.optgroup
                    }).appendTo(t), r = f.optgroup);
                    u._renderItemData(t, f)
                })
            },
            _renderItemData: function (n, t) {
                return this._renderItem(n, t).data("ui-selectmenu-item", t)
            },
            _renderItem: function (t, i) {
                var r = n("<li>");
                return i.disabled && r.addClass("ui-state-disabled"), this._setText(r, i.label), r.appendTo(t)
            },
            _setText: function (n, t) {
                t ? n.text(t) : n.html("&#160;")
            },
            _move: function (n, t) {
                var i, r, u = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), u += ":not(.ui-state-disabled)");
                r = "first" === n || "last" === n ? i["first" === n ? "prevAll" : "nextAll"](u).eq(-1) : i[n + "All"](u).eq(0);
                r.length && this.menuInstance.focus(t, r)
            },
            _getSelectedItem: function () {
                return this.menuItems.eq(this.element[0].selectedIndex)
            },
            _toggle: function (n) {
                this[this.isOpen ? "close" : "open"](n)
            },
            _setSelection: function () {
                var n;
                this.range && (window.getSelection ? (n = window.getSelection(), n.removeAllRanges(), n.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function (t) {
                    this.isOpen && (n(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
                }
            },
            _buttonEvents: {
                mousedown: function () {
                    var n;
                    window.getSelection ? (n = window.getSelection(), n.rangeCount && (this.range = n.getRangeAt(0))) : this.range = document.selection.createRange()
                }, click: function (n) {
                    this._setSelection();
                    this._toggle(n)
                }, keydown: function (t) {
                    var i = !0;
                    switch (t.keyCode) {
                        case n.ui.keyCode.TAB:
                        case n.ui.keyCode.ESCAPE:
                            this.close(t);
                            i = !1;
                            break;
                        case n.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(t);
                            break;
                        case n.ui.keyCode.UP:
                            t.altKey ? this._toggle(t) : this._move("prev", t);
                            break;
                        case n.ui.keyCode.DOWN:
                            t.altKey ? this._toggle(t) : this._move("next", t);
                            break;
                        case n.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                            break;
                        case n.ui.keyCode.LEFT:
                            this._move("prev", t);
                            break;
                        case n.ui.keyCode.RIGHT:
                            this._move("next", t);
                            break;
                        case n.ui.keyCode.HOME:
                        case n.ui.keyCode.PAGE_UP:
                            this._move("first", t);
                            break;
                        case n.ui.keyCode.END:
                        case n.ui.keyCode.PAGE_DOWN:
                            this._move("last", t);
                            break;
                        default:
                            this.menu.trigger(t);
                            i = !1
                    }
                    i && t.preventDefault()
                }
            },
            _selectFocusedItem: function (n) {
                var t = this.menuItems.eq(this.focusIndex);
                t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), n)
            },
            _select: function (n, t) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = n.index;
                this._setText(this.buttonText, n.label);
                this._setAria(n);
                this._trigger("select", t, {item: n});
                n.index !== i && this._trigger("change", t, {item: n});
                this.close(t)
            },
            _setAria: function (n) {
                var t = this.menuItems.eq(n.index).attr("id");
                this.button.attr({"aria-labelledby": t, "aria-activedescendant": t});
                this.menu.attr("aria-activedescendant", t)
            },
            _setOption: function (n, t) {
                "icons" === n && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button);
                this._super(n, t);
                "appendTo" === n && this.menuWrap.appendTo(this._appendTo());
                "disabled" === n && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0));
                "width" === n && this._resizeButton()
            },
            _appendTo: function () {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _toggleAttr: function () {
                this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen);
                this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen);
                this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function () {
                var n = this.options.width;
                n || (n = this.element.show().outerWidth(), this.element.hide());
                this.button.outerWidth(n)
            },
            _resizeMenu: function () {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function () {
                return {disabled: this.element.prop("disabled")}
            },
            _parseOptions: function (t) {
                var i = [];
                t.each(function (t, r) {
                    var u = n(r), f = u.parent("optgroup");
                    i.push({
                        element: u,
                        index: t,
                        value: u.val(),
                        label: u.text(),
                        optgroup: f.attr("label") || "",
                        disabled: f.prop("disabled") || u.prop("disabled")
                    })
                });
                this.items = i
            },
            _destroy: function () {
                this.menuWrap.remove();
                this.button.remove();
                this.element.show();
                this.element.removeUniqueId();
                this.label.attr("for", this.ids.element)
            }
        });
        n.widget("ui.slider", n.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function () {
                this._keySliding = !1;
                this._mouseSliding = !1;
                this._animateOff = !0;
                this._handleIndex = null;
                this._detectOrientation();
                this._mouseInit();
                this._calculateNewMax();
                this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
                this._refresh();
                this._setOption("disabled", this.options.disabled);
                this._animateOff = !1
            },
            _refresh: function () {
                this._createRange();
                this._createHandles();
                this._setupEvents();
                this._refreshValue()
            },
            _createHandles: function () {
                var r, i, u = this.options,
                    t = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), f = [];
                for (i = u.values && u.values.length || 1, t.length > i && (t.slice(i).remove(), t = t.slice(0, i)), r = t.length; i > r; r++)f.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'><\/span>");
                this.handles = t.add(n(f.join("")).appendTo(this.element));
                this.handle = this.handles.eq(0);
                this.handles.each(function (t) {
                    n(this).data("ui-slider-handle-index", t)
                })
            },
            _createRange: function () {
                var t = this.options, i = "";
                t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = n("<div><\/div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function () {
                this._off(this.handles);
                this._on(this.handles, this._handleEvents);
                this._hoverable(this.handles);
                this._focusable(this.handles)
            },
            _destroy: function () {
                this.handles.remove();
                this.range && this.range.remove();
                this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
                this._mouseDestroy()
            },
            _mouseCapture: function (t) {
                var s, f, r, i, u, h, e, c, o = this, l = this.options;
                return l.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), s = {
                    x: t.pageX,
                    y: t.pageY
                }, f = this._normValueFromMouse(s), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                    var e = Math.abs(f - o.values(t));
                    (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e, i = n(this), u = t)
                }), h = this._start(t, u), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = u, i.addClass("ui-state-active").focus(), e = i.offset(), c = !n(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - e.left - i.width() / 2,
                    top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, f), this._animateOff = !0, !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (n) {
                var t = {x: n.pageX, y: n.pageY}, i = this._normValueFromMouse(t);
                return this._slide(n, this._handleIndex, i), !1
            },
            _mouseStop: function (n) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function (n) {
                var i, r, t, u, f;
                return "horizontal" === this.orientation ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), 0 > t && (t = 0), "vertical" === this.orientation && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f)
            },
            _start: function (n, t) {
                var i = {handle: this.handles[t], value: this.value()};
                return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", n, i)
            },
            _slide: function (n, t, i) {
                var r, f, u;
                this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > r || 1 === t && r > i) && (i = r), i !== this.values(t) && (f = this.values(), f[t] = i, u = this._trigger("slide", n, {
                    handle: this.handles[t],
                    value: i,
                    values: f
                }), r = this.values(t ? 0 : 1), u !== !1 && this.values(t, i))) : i !== this.value() && (u = this._trigger("slide", n, {
                        handle: this.handles[t],
                        value: i
                    }), u !== !1 && this.value(i))
            },
            _stop: function (n, t) {
                var i = {handle: this.handles[t], value: this.value()};
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
                this._trigger("stop", n, i)
            },
            _change: function (n, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {handle: this.handles[t], value: this.value()};
                    this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
                    this._lastChangedValue = t;
                    this._trigger("change", n, i)
                }
            },
            value: function (n) {
                return arguments.length ? (this.options.value = this._trimAlignValue(n), this._refreshValue(), this._change(null, 0), void 0) : this._value()
            },
            values: function (t, i) {
                var u, f, r;
                if (arguments.length > 1)return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
                if (!arguments.length)return this._values();
                if (!n.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(t) : this.value();
                for (u = this.options.values, f = arguments[0], r = 0; u.length > r; r += 1)u[r] = this._trimAlignValue(f[r]), this._change(null, r);
                this._refreshValue()
            },
            _setOption: function (t, i) {
                var r, u = 0;
                switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), n.isArray(this.options.values) && (u = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
                    case"orientation":
                        this._detectOrientation();
                        this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                        this._refreshValue();
                        this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case"value":
                        this._animateOff = !0;
                        this._refreshValue();
                        this._change(null, 0);
                        this._animateOff = !1;
                        break;
                    case"values":
                        for (this._animateOff = !0, this._refreshValue(), r = 0; u > r; r += 1)this._change(null, r);
                        this._animateOff = !1;
                        break;
                    case"step":
                    case"min":
                    case"max":
                        this._animateOff = !0;
                        this._calculateNewMax();
                        this._refreshValue();
                        this._animateOff = !1;
                        break;
                    case"range":
                        this._animateOff = !0;
                        this._refresh();
                        this._animateOff = !1
                }
            },
            _value: function () {
                var n = this.options.value;
                return this._trimAlignValue(n)
            },
            _values: function (n) {
                var r, t, i;
                if (arguments.length)return r = this.options.values[n], r = this._trimAlignValue(r);
                if (this.options.values && this.options.values.length) {
                    for (t = this.options.values.slice(), i = 0; t.length > i; i += 1)t[i] = this._trimAlignValue(t[i]);
                    return t
                }
                return []
            },
            _trimAlignValue: function (n) {
                if (this._valueMin() >= n)return this._valueMin();
                if (n >= this._valueMax())return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1, i = (n - this._valueMin()) % t, r = n - i;
                return 2 * Math.abs(i) >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5))
            },
            _calculateNewMax: function () {
                var n = this.options.max, t = this._valueMin(), i = this.options.step,
                    r = Math.floor(+(n - t).toFixed(this._precision()) / i) * i;
                n = r + t;
                this.max = parseFloat(n.toFixed(this._precision()))
            },
            _precision: function () {
                var n = this._precisionOf(this.options.step);
                return null !== this.options.min && (n = Math.max(n, this._precisionOf(this.options.min))), n
            },
            _precisionOf: function (n) {
                var t = "" + n, i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.max
            },
            _refreshValue: function () {
                var s, t, c, f, h, e = this.options.range, i = this.options, r = this,
                    u = this._animateOff ? !1 : i.animate, o = {};
                this.options.values && this.options.values.length ? this.handles.each(function (f) {
                    t = 100 * ((r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()));
                    o["horizontal" === r.orientation ? "left" : "bottom"] = t + "%";
                    n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
                    r.options.range === !0 && ("horizontal" === r.orientation ? (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({left: t + "%"}, i.animate), 1 === f && r.range[u ? "animate" : "css"]({width: t - s + "%"}, {
                        queue: !1,
                        duration: i.animate
                    })) : (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({bottom: t + "%"}, i.animate), 1 === f && r.range[u ? "animate" : "css"]({height: t - s + "%"}, {
                        queue: !1,
                        duration: i.animate
                    })));
                    s = t
                }) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? 100 * ((c - f) / (h - f)) : 0, o["horizontal" === this.orientation ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate), "min" === e && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({width: t + "%"}, i.animate), "max" === e && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({width: 100 - t + "%"}, {
                    queue: !1,
                    duration: i.animate
                }), "min" === e && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({height: t + "%"}, i.animate), "max" === e && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({height: 100 - t + "%"}, {
                    queue: !1,
                    duration: i.animate
                }))
            },
            _handleEvents: {
                keydown: function (t) {
                    var e, r, i, u, f = n(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case n.ui.keyCode.HOME:
                        case n.ui.keyCode.END:
                        case n.ui.keyCode.PAGE_UP:
                        case n.ui.keyCode.PAGE_DOWN:
                        case n.ui.keyCode.UP:
                        case n.ui.keyCode.RIGHT:
                        case n.ui.keyCode.DOWN:
                        case n.ui.keyCode.LEFT:
                            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, n(t.target).addClass("ui-state-active"), e = this._start(t, f), e === !1))return
                    }
                    switch (u = this.options.step, r = i = this.options.values && this.options.values.length ? this.values(f) : this.value(), t.keyCode) {
                        case n.ui.keyCode.HOME:
                            i = this._valueMin();
                            break;
                        case n.ui.keyCode.END:
                            i = this._valueMax();
                            break;
                        case n.ui.keyCode.PAGE_UP:
                            i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case n.ui.keyCode.PAGE_DOWN:
                            i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case n.ui.keyCode.UP:
                        case n.ui.keyCode.RIGHT:
                            if (r === this._valueMax())return;
                            i = this._trimAlignValue(r + u);
                            break;
                        case n.ui.keyCode.DOWN:
                        case n.ui.keyCode.LEFT:
                            if (r === this._valueMin())return;
                            i = this._trimAlignValue(r - u)
                    }
                    this._slide(t, f, i)
                }, keyup: function (t) {
                    var i = n(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), n(t.target).removeClass("ui-state-active"))
                }
            }
        });
        n.widget("ui.sortable", n.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function (n, t, i) {
                return n >= t && t + i > n
            },
            _isFloating: function (n) {
                return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display"))
            },
            _create: function () {
                this.containerCache = {};
                this.element.addClass("ui-sortable");
                this.refresh();
                this.offset = this.element.offset();
                this._mouseInit();
                this._setHandleClassName();
                this.ready = !0
            },
            _setOption: function (n, t) {
                this._super(n, t);
                "handle" === n && this._setHandleClassName()
            },
            _setHandleClassName: function () {
                this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
                n.each(this.items, function () {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                })
            },
            _destroy: function () {
                this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
                this._mouseDestroy();
                for (var n = this.items.length - 1; n >= 0; n--)this.items[n].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function (t, i) {
                var r = null, f = !1, u = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), n(t.target).parents().each(function () {
                    if (n.data(this, u.widgetName + "-item") === u)return (r = n(this), !1)
                }), n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)), r ? !this.options.handle || i || (n(this.options.handle, r).find("*").addBack().each(function () {
                    this === t.target && (f = !0)
                }), f) ? (this.currentItem = r, this._removeCurrentsFromItems(), !0) : !1 : !1)
            },
            _mouseStart: function (t, i, r) {
                var f, e, u = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, n.extend(this.offset, {
                        click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top},
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && "auto" !== u.cursor && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", u.cursor), this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }<\/style>").appendTo(e)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r)for (f = this.containers.length - 1; f >= 0; f--)this.containers[f]._trigger("activate", t, this._uiHash(this));
                return n.ui.ddmanager && (n.ui.ddmanager.current = this), n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function (t) {
                var e, u, f, o, i = this.options, r = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - this.document.scrollTop() < i.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - i.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < i.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + i.scrollSpeed)), t.pageX - this.document.scrollLeft() < i.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - i.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < i.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--)if (u = this.items[e], f = u.item[0], o = this._intersectsWithPointer(u), o && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && ("semi-dynamic" === this.options.type ? !n.contains(this.element[0], f) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(u))break;
                    this._rearrange(t, u);
                    this._trigger("change", t, this._uiHash());
                    break
                }
                return this._contactContainers(t), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function (t, i) {
                if (t) {
                    if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) {
                        var e = this, f = this.placeholder.offset(), r = this.options.axis, u = {};
                        r && "x" !== r || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft));
                        r && "y" !== r || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop));
                        this.reverting = !0;
                        n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function () {
                            e._clear(t)
                        })
                    } else this._clear(t, i);
                    return !1
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp({target: null});
                    "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var t = this.containers.length - 1; t >= 0; t--)this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function (t) {
                var r = this._getItemsAsjQuery(t && t.connected), i = [];
                return t = t || {}, n(r).each(function () {
                    var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                    r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
                }), !i.length && t.key && i.push(t.key + "="), i.join("&")
            },
            toArray: function (t) {
                var r = this._getItemsAsjQuery(t && t.connected), i = [];
                return t = t || {}, r.each(function () {
                    i.push(n(t.item || this).attr(t.attribute || "id") || "")
                }), i
            },
            _intersectsWith: function (n) {
                var t = this.positionAbs.left, h = t + this.helperProportions.width, i = this.positionAbs.top,
                    c = i + this.helperProportions.height, r = n.left, f = r + n.width, u = n.top, e = u + n.height,
                    o = this.offset.click.top, s = this.offset.click.left,
                    l = "x" === this.options.axis || i + o > u && e > i + o,
                    a = "y" === this.options.axis || t + s > r && f > t + s, v = l && a;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? v : t + this.helperProportions.width / 2 > r && f > h - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > u && e > c - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function (n) {
                var r = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top, n.height),
                    u = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left, n.width),
                    f = r && u, t = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection();
                return f ? this.floating ? i && "right" === i || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1) : !1
            },
            _intersectsWithSides: function (n) {
                var r = this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height),
                    u = this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width),
                    t = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection();
                return this.floating && i ? "right" === i && u || "left" === i && !u : t && ("down" === t && r || "up" === t && !r)
            },
            _getDragVerticalDirection: function () {
                var n = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== n && (n > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function () {
                var n = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== n && (n > 0 ? "right" : "left")
            },
            refresh: function (n) {
                return this._refreshItems(n), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function () {
                var n = this.options;
                return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith
            },
            _getItemsAsjQuery: function (t) {
                function h() {
                    s.push(this)
                }

                var r, u, e, i, s = [], f = [], o = this._connectWith();
                if (o && t)for (r = o.length - 1; r >= 0; r--)for (e = n(o[r], this.document[0]), u = e.length - 1; u >= 0; u--)i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
                for (f.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = f.length - 1; r >= 0; r--)f[r][0].each(h);
                return n(s)
            },
            _removeCurrentsFromItems: function () {
                var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = n.grep(this.items, function (n) {
                    for (var i = 0; t.length > i; i++)if (t[i] === n.item[0])return !1;
                    return !0
                })
            },
            _refreshItems: function (t) {
                this.items = [];
                this.containers = [this];
                var r, u, e, i, o, s, h, l, a = this.items,
                    f = [[n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {item: this.currentItem}) : n(this.options.items, this.element), this]],
                    c = this._connectWith();
                if (c && this.ready)for (r = c.length - 1; r >= 0; r--)for (e = n(c[r], this.document[0]), u = e.length - 1; u >= 0; u--)i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {item: this.currentItem}) : n(i.options.items, i.element), i]), this.containers.push(i));
                for (r = f.length - 1; r >= 0; r--)for (o = f[r][1], s = f[r][0], u = 0, l = s.length; l > u; u++)h = n(s[u]), h.data(this.widgetName + "-item", o), a.push({
                    item: h,
                    instance: o,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            },
            refreshPositions: function (t) {
                this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1;
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                for (var r, f, u,
                         i = this.items.length - 1; i >= 0; i--)r = this.items[i], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0] || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--)u = this.containers[i].element.offset(), this.containers[i].containerCache.left = u.left, this.containers[i].containerCache.top = u.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function (t) {
                t = t || this;
                var r, i = t.options;
                i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder, i.placeholder = {
                    element: function () {
                        var u = t.currentItem[0].nodeName.toLowerCase(),
                            i = n("<" + u + ">", t.document[0]).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tbody" === u ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), n("<tr>", t.document[0]).appendTo(i)) : "tr" === u ? t._createTrPlaceholder(t.currentItem, i) : "img" === u && i.attr("src", t.currentItem.attr("src")), r || i.css("visibility", "hidden"), i
                    }, update: function (n, u) {
                        (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                });
                t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem));
                t.currentItem.after(t.placeholder);
                i.placeholder.update(t, t.placeholder)
            },
            _createTrPlaceholder: function (t, i) {
                var r = this;
                t.children().each(function () {
                    n("<td>&#160;<\/td>", r.document[0]).attr("colspan", n(this).attr("colspan") || 1).appendTo(i)
                })
            },
            _contactContainers: function (t) {
                for (var u, c, f, a, v, o, l, s, h, e = null, i = null,
                         r = this.containers.length - 1; r >= 0; r--)if (!n.contains(this.currentItem[0], this.containers[r].element[0]))if (this._intersectsWith(this.containers[r].containerCache)) {
                    if (e && n.contains(this.containers[r].element[0], e.element[0]))continue;
                    e = this.containers[r];
                    i = r
                } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)), this.containers[r].containerCache.over = 0);
                if (e)if (1 === this.containers.length) this.containers[i].containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1); else {
                    for (c = 1e4, f = null, s = e.floating || this._isFloating(this.currentItem), a = s ? "left" : "top", v = s ? "width" : "height", h = s ? "clientX" : "clientY", u = this.items.length - 1; u >= 0; u--)n.contains(this.containers[i].element[0], this.items[u].item[0]) && this.items[u].item[0] !== this.currentItem[0] && (o = this.items[u].item.offset()[a], l = !1, t[h] - o > this.items[u][v] / 2 && (l = !0), c > Math.abs(t[h] - o) && (c = Math.abs(t[h] - o), f = this.items[u], this.direction = l ? "up" : "down"));
                    if (!f && !this.options.dropOnEmpty)return;
                    if (this.currentContainer === this.containers[i])return this.currentContainer.containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
                    f ? this._rearrange(t, f, null, !0) : this._rearrange(t, null, this.containers[i].element, !0);
                    this._trigger("change", t, this._uiHash());
                    this.containers[i]._trigger("change", t, this._uiHash(this));
                    this.currentContainer = this.containers[i];
                    this.options.placeholder.update(this.currentContainer, this.placeholder);
                    this.containers[i]._trigger("over", t, this._uiHash(this));
                    this.containers[i].containerCache.over = 1
                }
            },
            _createHelper: function (t) {
                var r = this.options,
                    i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === r.helper ? this.currentItem.clone() : this.currentItem;
                return i.parents("body").length || n("parent" !== r.appendTo ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()), i
            },
            _adjustOffsetFromHelper: function (t) {
                "string" == typeof t && (t = t.split(" "));
                n.isArray(t) && (t = {left: +t[0], top: +t[1] || 0});
                "left" in t && (this.offset.click.left = t.left + this.margins.left);
                "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
                "top" in t && (this.offset.click.top = t.top + this.margins.top);
                "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && n.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" === this.cssPosition) {
                    var n = this.currentItem.position();
                    return {
                        top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {top: 0, left: 0}
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
            },
            _setContainment: function () {
                var t, r, u, i = this.options;
                "parent" === i.containment && (i.containment = this.helper[0].parentNode);
                ("document" === i.containment || "window" === i.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === i.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === i.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
                /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0], r = n(i.containment).offset(), u = "hidden" !== n(t).css("overflow"), this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function (t, i) {
                i || (i = this.position);
                var r = "absolute" === t ? 1 : -1,
                    u = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    f = /(html|body)/i.test(u[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                    left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
                }
            },
            _generatePosition: function (t) {
                var r, u, i = this.options, f = t.pageX, e = t.pageY,
                    o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(o[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)), {
                    top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                    left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
                }
            },
            _rearrange: function (n, t, i, r) {
                i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling);
                this.counter = this.counter ? ++this.counter : 1;
                var u = this.counter;
                this._delay(function () {
                    u === this.counter && this.refreshPositions(!r)
                })
            },
            _clear: function (n, t) {
                function u(n, t, i) {
                    return function (r) {
                        i._trigger(n, r, t._uiHash(t))
                    }
                }

                this.reverting = !1;
                var i, r = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !t && r.push(function (n) {
                    this._trigger("receive", n, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push(function (n) {
                    this._trigger("update", n, this._uiHash())
                }), this !== this.currentContainer && (t || (r.push(function (n) {
                    this._trigger("remove", n, this._uiHash())
                }), r.push(function (n) {
                    return function (t) {
                        n._trigger("receive", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), r.push(function (n) {
                    return function (t) {
                        n._trigger("update", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--)t || r.push(u("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(u("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", n, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                    for (i = 0; r.length > i; i++)r[i].call(this, n);
                    this._trigger("stop", n, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function () {
                n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function (t) {
                var i = t || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || n([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: t ? t.element : null
                }
            }
        });
        n.widget("ui.spinner", {
            version: "1.11.4",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function () {
                this._setOption("max", this.options.max);
                this._setOption("min", this.options.min);
                this._setOption("step", this.options.step);
                "" !== this.value() && this._value(this.element.val(), !0);
                this._draw();
                this._on(this._events);
                this._refresh();
                this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function () {
                var t = {}, i = this.element;
                return n.each(["min", "max", "step"], function (n, r) {
                    var u = i.attr(r);
                    void 0 !== u && u.length && (t[r] = u)
                }), t
            },
            _events: {
                keydown: function (n) {
                    this._start(n) && this._keydown(n) && n.preventDefault()
                }, keyup: "_stop", focus: function () {
                    this.previous = this.element.val()
                }, blur: function (n) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", n), void 0)
                }, mousewheel: function (n, t) {
                    if (t) {
                        if (!this.spinning && !this._start(n))return !1;
                        this._spin((t > 0 ? 1 : -1) * this.options.step, n);
                        clearTimeout(this.mousewheelTimer);
                        this.mousewheelTimer = this._delay(function () {
                            this.spinning && this._stop(n)
                        }, 100);
                        n.preventDefault()
                    }
                }, "mousedown .ui-spinner-button": function (t) {
                    function r() {
                        var n = this.element[0] === this.document[0].activeElement;
                        n || (this.element.focus(), this.previous = i, this._delay(function () {
                            this.previous = i
                        }))
                    }

                    var i;
                    i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
                    t.preventDefault();
                    r.call(this);
                    this.cancelBlur = !0;
                    this._delay(function () {
                        delete this.cancelBlur;
                        r.call(this)
                    });
                    this._start(t) !== !1 && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (t) {
                    if (n(t.currentTarget).hasClass("ui-state-active"))return this._start(t) === !1 ? !1 : (this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0)
                }, "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function () {
                var n = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton");
                this.buttons = n.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
                this.buttons.height() > Math.ceil(.5 * n.height()) && n.height() > 0 && n.height(n.height());
                this.options.disabled && this.disable()
            },
            _keydown: function (t) {
                var r = this.options, i = n.ui.keyCode;
                switch (t.keyCode) {
                    case i.UP:
                        return this._repeat(null, 1, t), !0;
                    case i.DOWN:
                        return this._repeat(null, -1, t), !0;
                    case i.PAGE_UP:
                        return this._repeat(null, r.page, t), !0;
                    case i.PAGE_DOWN:
                        return this._repeat(null, -r.page, t), !0
                }
                return !1
            },
            _uiSpinnerHtml: function () {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'><\/span>"
            },
            _buttonHtml: function () {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;<\/span><\/a>"
            },
            _start: function (n) {
                return this.spinning || this._trigger("start", n) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
            },
            _repeat: function (n, t, i) {
                n = n || 500;
                clearTimeout(this.timer);
                this.timer = this._delay(function () {
                    this._repeat(40, t, i)
                }, n);
                this._spin(t * this.options.step, i)
            },
            _spin: function (n, t) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1);
                i = this._adjustValue(i + n * this._increment(this.counter));
                this.spinning && this._trigger("spin", t, {value: i}) === !1 || (this._value(i), this.counter++)
            },
            _increment: function (t) {
                var i = this.options.incremental;
                return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
            },
            _precision: function () {
                var n = this._precisionOf(this.options.step);
                return null !== this.options.min && (n = Math.max(n, this._precisionOf(this.options.min))), n
            },
            _precisionOf: function (n) {
                var t = "" + n, i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1
            },
            _adjustValue: function (n) {
                var r, i, t = this.options;
                return r = null !== t.min ? t.min : 0, i = n - r, i = Math.round(i / t.step) * t.step, n = r + i, n = parseFloat(n.toFixed(this._precision())), null !== t.max && n > t.max ? t.max : null !== t.min && t.min > n ? t.min : n
            },
            _stop: function (n) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", n))
            },
            _setOption: function (n, t) {
                if ("culture" === n || "numberFormat" === n) {
                    var i = this._parse(this.element.val());
                    return this.options[n] = t, this.element.val(this._format(i)), void 0
                }
                ("max" === n || "min" === n || "step" === n) && "string" == typeof t && (t = this._parse(t));
                "icons" === n && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down));
                this._super(n, t);
                "disabled" === n && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"))
            },
            _setOptions: t(function (n) {
                this._super(n)
            }),
            _parse: function (n) {
                return "string" == typeof n && "" !== n && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n), "" === n || isNaN(n) ? null : n
            },
            _format: function (n) {
                return "" === n ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
            },
            _refresh: function () {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function () {
                var n = this.value();
                return null === n ? !1 : n === this._adjustValue(n)
            },
            _value: function (n, t) {
                var i;
                "" !== n && (i = this._parse(n), null !== i && (t || (i = this._adjustValue(i)), n = this._format(i)));
                this.element.val(n);
                this._refresh()
            },
            _destroy: function () {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
                this.uiSpinner.replaceWith(this.element)
            },
            stepUp: t(function (n) {
                this._stepUp(n)
            }),
            _stepUp: function (n) {
                this._start() && (this._spin((n || 1) * this.options.step), this._stop())
            },
            stepDown: t(function (n) {
                this._stepDown(n)
            }),
            _stepDown: function (n) {
                this._start() && (this._spin((n || 1) * -this.options.step), this._stop())
            },
            pageUp: t(function (n) {
                this._stepUp((n || 1) * this.options.page)
            }),
            pageDown: t(function (n) {
                this._stepDown((n || 1) * this.options.page)
            }),
            value: function (n) {
                return arguments.length ? (t(this._value).call(this, n), void 0) : this._parse(this.element.val())
            },
            widget: function () {
                return this.uiSpinner
            }
        });
        n.widget("ui.tabs", {
            version: "1.11.4",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function () {
                var n = /#.*$/;
                return function (t) {
                    var i, r;
                    t = t.cloneNode(!1);
                    i = t.href.replace(n, "");
                    r = location.href.replace(n, "");
                    try {
                        i = decodeURIComponent(i)
                    } catch (u) {
                    }
                    try {
                        r = decodeURIComponent(r)
                    } catch (u) {
                    }
                    return t.hash.length > 1 && i === r
                }
            }(),
            _create: function () {
                var i = this, t = this.options;
                this.running = !1;
                this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible);
                this._processTabs();
                t.active = this._initialActive();
                n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function (n) {
                    return i.tabs.index(n)
                }))).sort());
                this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n();
                this._refresh();
                this.active.length && this.load(t.active)
            },
            _initialActive: function () {
                var t = this.options.active, i = this.options.collapsible, r = location.hash.substring(1);
                return null === t && (r && this.tabs.each(function (i, u) {
                    if (n(u).attr("aria-controls") === r)return (t = i, !1)
                }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
            },
            _getCreateEventData: function () {
                return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : n()}
            },
            _tabKeydown: function (t) {
                var r = n(this.document[0].activeElement).closest("li"), i = this.tabs.index(r), u = !0;
                if (!this._handlePageNav(t)) {
                    switch (t.keyCode) {
                        case n.ui.keyCode.RIGHT:
                        case n.ui.keyCode.DOWN:
                            i++;
                            break;
                        case n.ui.keyCode.UP:
                        case n.ui.keyCode.LEFT:
                            u = !1;
                            i--;
                            break;
                        case n.ui.keyCode.END:
                            i = this.anchors.length - 1;
                            break;
                        case n.ui.keyCode.HOME:
                            i = 0;
                            break;
                        case n.ui.keyCode.SPACE:
                            return t.preventDefault(), clearTimeout(this.activating), this._activate(i), void 0;
                        case n.ui.keyCode.ENTER:
                            return t.preventDefault(), clearTimeout(this.activating), this._activate(i === this.options.active ? !1 : i), void 0;
                        default:
                            return
                    }
                    t.preventDefault();
                    clearTimeout(this.activating);
                    i = this._focusNextTab(i, u);
                    t.ctrlKey || t.metaKey || (r.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function () {
                        this.option("active", i)
                    }, this.delay))
                }
            },
            _panelKeydown: function (t) {
                this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
            },
            _handlePageNav: function (t) {
                return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (t, i) {
                function u() {
                    return t > r && (t = 0), 0 > t && (t = r), t
                }

                for (var r = this.tabs.length - 1; -1 !== n.inArray(u(), this.options.disabled);)t = i ? t + 1 : t - 1;
                return t
            },
            _focusNextTab: function (n, t) {
                return n = this._findNextTab(n, t), this.tabs.eq(n).focus(), n
            },
            _setOption: function (n, t) {
                return "active" === n ? (this._activate(t), void 0) : "disabled" === n ? (this._setupDisabled(t), void 0) : (this._super(n, t), "collapsible" === n && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === n && this._setupEvents(t), "heightStyle" === n && this._setupHeightStyle(t), void 0)
            },
            _sanitizeSelector: function (n) {
                return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var t = this.options, i = this.tablist.children(":has(a[href])");
                t.disabled = n.map(i.filter(".ui-state-disabled"), function (n) {
                    return i.index(n)
                });
                this._processTabs();
                t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = n());
                this._refresh()
            },
            _refresh: function () {
                this._setupDisabled(this.options.disabled);
                this._setupEvents(this.options.event);
                this._setupHeightStyle(this.options.heightStyle);
                this.tabs.not(this.active).attr({"aria-selected": "false", "aria-expanded": "false", tabIndex: -1});
                this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"});
                this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function () {
                var t = this, i = this.tabs, r = this.anchors, u = this.panels;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (t) {
                    n(this).is(".ui-state-disabled") && t.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                    n(this).closest("li").is(".ui-state-disabled") && this.blur()
                });
                this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                });
                this.anchors = this.tabs.map(function () {
                    return n("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({role: "presentation", tabIndex: -1});
                this.panels = n();
                this.anchors.each(function (i, r) {
                    var f, u, e, s = n(r).uniqueId().attr("id"), o = n(r).closest("li"), h = o.attr("aria-controls");
                    t._isLocal(r) ? (f = r.hash, e = f.substring(1), u = t.element.find(t._sanitizeSelector(f))) : (e = o.attr("aria-controls") || n({}).uniqueId()[0].id, f = "#" + e, u = t.element.find(f), u.length || (u = t._createPanel(e), u.insertAfter(t.panels[i - 1] || t.tablist)), u.attr("aria-live", "polite"));
                    u.length && (t.panels = t.panels.add(u));
                    h && o.data("ui-tabs-aria-controls", h);
                    o.attr({"aria-controls": e, "aria-labelledby": s});
                    u.attr("aria-labelledby", s)
                });
                this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
                i && (this._off(i.not(this.tabs)), this._off(r.not(this.anchors)), this._off(u.not(this.panels)))
            },
            _getList: function () {
                return this.tablist || this.element.find("ol,ul").eq(0)
            },
            _createPanel: function (t) {
                return n("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function (t) {
                n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                for (var i,
                         r = 0; i = this.tabs[r]; r++)t === !0 || -1 !== n.inArray(r, t) ? n(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : n(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = t
            },
            _setupEvents: function (t) {
                var i = {};
                t && n.each(t.split(" "), function (n, t) {
                    i[t] = "_eventHandler"
                });
                this._off(this.anchors.add(this.tabs).add(this.panels));
                this._on(!0, this.anchors, {
                    click: function (n) {
                        n.preventDefault()
                    }
                });
                this._on(this.anchors, i);
                this._on(this.tabs, {keydown: "_tabKeydown"});
                this._on(this.panels, {keydown: "_panelKeydown"});
                this._focusable(this.tabs);
                this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (t) {
                var i, r = this.element.parent();
                "fill" === t ? (i = r.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                    var t = n(this), r = t.css("position");
                    "absolute" !== r && "fixed" !== r && (i -= t.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function () {
                    i -= n(this).outerHeight(!0)
                }), this.panels.each(function () {
                    n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
                }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
                        i = Math.max(i, n(this).height("").height())
                    }).height(i))
            },
            _eventHandler: function (t) {
                var u = this.options, r = this.active, c = n(t.currentTarget), i = c.closest("li"), f = i[0] === r[0],
                    e = f && u.collapsible, o = e ? n() : this._getPanelForTab(i),
                    s = r.length ? this._getPanelForTab(r) : n(),
                    h = {oldTab: r, oldPanel: s, newTab: e ? n() : i, newPanel: o};
                t.preventDefault();
                i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1 || (u.active = e ? !1 : this.tabs.index(i), this.active = f ? n() : i, this.xhr && this.xhr.abort(), s.length || o.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(i), t), this._toggle(t, h))
            },
            _toggle: function (t, i) {
                function e() {
                    u.running = !1;
                    u._trigger("activate", t, i)
                }

                function o() {
                    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                    r.length && u.options.show ? u._show(r, u.options.show, e) : (r.show(), e())
                }

                var u = this, r = i.newPanel, f = i.oldPanel;
                this.running = !0;
                f.length && this.options.hide ? this._hide(f, this.options.hide, function () {
                    i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    o()
                }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), f.hide(), o());
                f.attr("aria-hidden", "true");
                i.oldTab.attr({"aria-selected": "false", "aria-expanded": "false"});
                r.length && f.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function () {
                        return 0 === n(this).attr("tabIndex")
                    }).attr("tabIndex", -1);
                r.attr("aria-hidden", "false");
                i.newTab.attr({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0})
            },
            _activate: function (t) {
                var r, i = this._findActive(t);
                i[0] !== this.active[0] && (i.length || (i = this.active), r = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: r,
                    currentTarget: r,
                    preventDefault: n.noop
                }))
            },
            _findActive: function (t) {
                return t === !1 ? n() : this.tabs.eq(t)
            },
            _getIndex: function (n) {
                return "string" == typeof n && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))), n
            },
            _destroy: function () {
                this.xhr && this.xhr.abort();
                this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
                this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
                this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
                this.tablist.unbind(this.eventNamespace);
                this.tabs.add(this.panels).each(function () {
                    n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                });
                this.tabs.each(function () {
                    var t = n(this), i = t.data("ui-tabs-aria-controls");
                    i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                });
                this.panels.show();
                "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (t) {
                var i = this.options.disabled;
                i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = n.isArray(i) ? n.map(i, function (n) {
                    return n !== t ? n : null
                }) : n.map(this.tabs, function (n, i) {
                    return i !== t ? i : null
                })), this._setupDisabled(i))
            },
            disable: function (t) {
                var i = this.options.disabled;
                if (i !== !0) {
                    if (void 0 === t) i = !0; else {
                        if (t = this._getIndex(t), -1 !== n.inArray(t, i))return;
                        i = n.isArray(i) ? n.merge([t], i).sort() : [t]
                    }
                    this._setupDisabled(i)
                }
            },
            load: function (t, i) {
                t = this._getIndex(t);
                var u = this, r = this.tabs.eq(t), e = r.find(".ui-tabs-anchor"), f = this._getPanelForTab(r),
                    o = {tab: r, panel: f}, s = function (n, t) {
                        "abort" === t && u.panels.stop(!1, !0);
                        r.removeClass("ui-tabs-loading");
                        f.removeAttr("aria-busy");
                        n === u.xhr && delete u.xhr
                    };
                this._isLocal(e[0]) || (this.xhr = n.ajax(this._ajaxSettings(e, i, o)), this.xhr && "canceled" !== this.xhr.statusText && (r.addClass("ui-tabs-loading"), f.attr("aria-busy", "true"), this.xhr.done(function (n, t, r) {
                    setTimeout(function () {
                        f.html(n);
                        u._trigger("load", i, o);
                        s(r, t)
                    }, 1)
                }).fail(function (n, t) {
                    setTimeout(function () {
                        s(n, t)
                    }, 1)
                })))
            },
            _ajaxSettings: function (t, i, r) {
                var u = this;
                return {
                    url: t.attr("href"), beforeSend: function (t, f) {
                        return u._trigger("beforeLoad", i, n.extend({jqXHR: t, ajaxSettings: f}, r))
                    }
                }
            },
            _getPanelForTab: function (t) {
                var i = n(t).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        });
        n.widget("ui.tooltip", {
            version: "1.11.4", options: {
                content: function () {
                    var t = n(this).attr("title") || "";
                    return n("<a>").text(t).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            }, _addDescribedBy: function (t, i) {
                var r = (t.attr("aria-describedby") || "").split(/\s+/);
                r.push(i);
                t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
            }, _removeDescribedBy: function (t) {
                var u = t.data("ui-tooltip-id"), i = (t.attr("aria-describedby") || "").split(/\s+/),
                    r = n.inArray(u, i);
                -1 !== r && i.splice(r, 1);
                t.removeData("ui-tooltip-id");
                i = n.trim(i.join(" "));
                i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
            }, _create: function () {
                this._on({mouseover: "open", focusin: "open"});
                this.tooltips = {};
                this.parents = {};
                this.options.disabled && this._disable();
                this.liveRegion = n("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
            }, _setOption: function (t, i) {
                var r = this;
                return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && n.each(this.tooltips, function (n, t) {
                    r._updateContent(t.element)
                }), void 0)
            }, _disable: function () {
                var t = this;
                n.each(this.tooltips, function (i, r) {
                    var u = n.Event("blur");
                    u.target = u.currentTarget = r.element[0];
                    t.close(u, !0)
                });
                this.element.find(this.options.items).addBack().each(function () {
                    var t = n(this);
                    t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
                })
            }, _enable: function () {
                this.element.find(this.options.items).addBack().each(function () {
                    var t = n(this);
                    t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                })
            }, open: function (t) {
                var r = this, i = n(t ? t.target : this.element).closest(this.options.items);
                i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && "mouseover" === t.type && i.parents().each(function () {
                    var i, t = n(this);
                    t.data("ui-tooltip-open") && (i = n.Event("blur"), i.target = i.currentTarget = this, r.close(i, !0));
                    t.attr("title") && (t.uniqueId(), r.parents[this.id] = {
                        element: this,
                        title: t.attr("title")
                    }, t.attr("title", ""))
                }), this._registerCloseHandlers(t, i), this._updateContent(i, t))
            }, _updateContent: function (n, t) {
                var i, r = this.options.content, u = this, f = t ? t.type : null;
                return "string" == typeof r ? this._open(t, n, r) : (i = r.call(n[0], function (i) {
                    u._delay(function () {
                        n.data("ui-tooltip-open") && (t && (t.type = f), this._open(t, n, i))
                    })
                }), i && this._open(t, n, i), void 0)
            }, _open: function (t, i, r) {
                function o(n) {
                    s.of = n;
                    u.is(":hidden") || u.position(s)
                }

                var f, u, h, e, s = n.extend({}, this.options.position);
                if (r) {
                    if (f = this._find(i))return f.tooltip.find(".ui-tooltip-content").html(r), void 0;
                    i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title"));
                    f = this._tooltip(i);
                    u = f.tooltip;
                    this._addDescribedBy(i, u.attr("id"));
                    u.find(".ui-tooltip-content").html(r);
                    this.liveRegion.children().hide();
                    r.clone ? (e = r.clone(), e.removeAttr("id").find("[id]").removeAttr("id")) : e = r;
                    n("<div>").html(e).appendTo(this.liveRegion);
                    this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {mousemove: o}), o(t)) : u.position(n.extend({of: i}, this.options.position));
                    u.hide();
                    this._show(u, this.options.show);
                    this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
                        u.is(":visible") && (o(s.of), clearInterval(h))
                    }, n.fx.interval));
                    this._trigger("open", t, {tooltip: u})
                }
            }, _registerCloseHandlers: function (t, i) {
                var r = {
                    keyup: function (t) {
                        if (t.keyCode === n.ui.keyCode.ESCAPE) {
                            var r = n.Event(t);
                            r.currentTarget = i[0];
                            this.close(r, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (r.remove = function () {
                    this._removeTooltip(this._find(i).tooltip)
                });
                t && "mouseover" !== t.type || (r.mouseleave = "close");
                t && "focusin" !== t.type || (r.focusout = "close");
                this._on(!0, i, r)
            }, close: function (t) {
                var u, f = this, i = n(t ? t.currentTarget : this.element), r = this._find(i);
                return r ? (u = r.tooltip, r.closing || (clearInterval(this.delayedShow), i.data("ui-tooltip-title") && !i.attr("title") && i.attr("title", i.data("ui-tooltip-title")), this._removeDescribedBy(i), r.hiding = !0, u.stop(!0), this._hide(u, this.options.hide, function () {
                    f._removeTooltip(n(this))
                }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && n.each(this.parents, function (t, i) {
                    n(i.element).attr("title", i.title);
                    delete f.parents[t]
                }), r.closing = !0, this._trigger("close", t, {tooltip: u}), r.hiding || (r.closing = !1)), void 0) : (i.removeData("ui-tooltip-open"), void 0)
            }, _tooltip: function (t) {
                var i = n("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                    r = i.uniqueId().attr("id");
                return n("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[r] = {
                    element: t,
                    tooltip: i
                }
            }, _find: function (n) {
                var t = n.data("ui-tooltip-id");
                return t ? this.tooltips[t] : null
            }, _removeTooltip: function (n) {
                n.remove();
                delete this.tooltips[n.attr("id")]
            }, _destroy: function () {
                var t = this;
                n.each(this.tooltips, function (i, r) {
                    var f = n.Event("blur"), u = r.element;
                    f.target = f.currentTarget = u[0];
                    t.close(f, !0);
                    n("#" + i).remove();
                    u.data("ui-tooltip-title") && (u.attr("title") || u.attr("title", u.data("ui-tooltip-title")), u.removeData("ui-tooltip-title"))
                });
                this.liveRegion.remove()
            }
        })
    }), !function (n) {
        "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = n(require("jquery")) : n(jQuery)
    }(function (n) {
        n.extend(n.fn, {
            validate: function (t) {
                if (!this.length)return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var i = n.data(this[0], "validator");
                return i ? i : (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
                    i.settings.submitHandler && (i.submitButton = t.target);
                    n(this).hasClass("cancel") && (i.cancelSubmit = !0);
                    void 0 !== n(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.on("submit.validate", function (t) {
                    function r() {
                        var u, r;
                        return i.settings.submitHandler ? (i.submitButton && (u = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), r = i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && u.remove(), void 0 !== r ? r : !1) : !0
                    }

                    return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
                })), i)
            }, valid: function () {
                var t, i, r;
                return n(this[0]).is("form") ? t = this.validate().form() : (r = [], t = !0, i = n(this[0].form).validate(), this.each(function () {
                    t = i.element(this) && t;
                    t || (r = r.concat(i.errorList))
                }), i.errorList = r), t
            }, rules: function (t, i) {
                if (this.length) {
                    var e, s, f, u, o, h, r = this[0];
                    if (t)switch (e = n.data(r.form, "validator").settings, s = e.rules, f = n.validator.staticRules(r), t) {
                        case"add":
                            n.extend(f, n.validator.normalizeRule(i));
                            delete f.messages;
                            s[r.name] = f;
                            i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                            break;
                        case"remove":
                            return i ? (h = {}, n.each(i.split(/\s/), function (t, i) {
                                h[i] = f[i];
                                delete f[i];
                                "required" === i && n(r).removeAttr("aria-required")
                            }), h) : (delete s[r.name], f)
                    }
                    return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r), u.required && (o = u.required, delete u.required, u = n.extend({required: o}, u), n(r).attr("aria-required", "true")), u.remote && (o = u.remote, delete u.remote, u = n.extend(u, {remote: o})), u
                }
            }
        });
        n.extend(n.expr[":"], {
            blank: function (t) {
                return !n.trim("" + n(t).val())
            }, filled: function (t) {
                var i = n(t).val();
                return null !== i && !!n.trim("" + i)
            }, unchecked: function (t) {
                return !n(t).prop("checked")
            }
        });
        n.validator = function (t, i) {
            this.settings = n.extend(!0, {}, n.validator.defaults, t);
            this.currentForm = i;
            this.init()
        };
        n.validator.format = function (t, i) {
            return 1 === arguments.length ? function () {
                var i = n.makeArray(arguments);
                return i.unshift(t), n.validator.format.apply(this, i)
            } : void 0 === i ? t : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function (n, i) {
                t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function () {
                    return i
                })
            }), t)
        };
        n.extend(n.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: n([]),
                errorLabelContainer: n([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (n) {
                    this.lastActive = n;
                    this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(n)))
                },
                onfocusout: function (n) {
                    !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
                },
                onkeyup: function (t, i) {
                    9 === i.which && "" === this.elementValue(t) || -1 !== n.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
                },
                onclick: function (n) {
                    n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
                },
                highlight: function (t, i, r) {
                    "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
                },
                unhighlight: function (t, i, r) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
                }
            },
            setDefaults: function (t) {
                n.extend(n.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: n.validator.format("Please enter no more than {0} characters."),
                minlength: n.validator.format("Please enter at least {0} characters."),
                rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
                range: n.validator.format("Please enter a value between {0} and {1}."),
                max: n.validator.format("Please enter a value less than or equal to {0}."),
                min: n.validator.format("Please enter a value greater than or equal to {0}."),
                step: n.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function i(t) {
                        var r = n.data(this.form, "validator"), u = "on" + t.type.replace(/^validate/, ""),
                            i = r.settings;
                        i[u] && !n(this).is(i.ignore) && i[u].call(r, this, t)
                    }

                    this.labelContainer = n(this.settings.errorLabelContainer);
                    this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                    this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                    this.submitted = {};
                    this.valueCache = {};
                    this.pendingRequest = 0;
                    this.pending = {};
                    this.invalid = {};
                    this.reset();
                    var t, r = this.groups = {};
                    n.each(this.settings.groups, function (t, i) {
                        "string" == typeof i && (i = i.split(/\s/));
                        n.each(i, function (n, i) {
                            r[i] = t
                        })
                    });
                    t = this.settings.rules;
                    n.each(t, function (i, r) {
                        t[i] = n.validator.normalizeRule(r)
                    });
                    n(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", i).on("click.validate", "select, option, [type='radio'], [type='checkbox']", i);
                    this.settings.invalidHandler && n(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                    n(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                }, form: function () {
                    return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                }, checkForm: function () {
                    this.prepareForm();
                    for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++)this.check(t[n]);
                    return this.valid()
                }, element: function (t) {
                    var e, o, i = this.clean(t), r = this.validationTargetFor(i), u = this, f = !0;
                    return void 0 === r ? delete this.invalid[i.name] : (this.prepareElement(r), this.currentElements = n(r), o = this.groups[r.name], o && n.each(this.groups, function (n, t) {
                        t === o && n !== r.name && (i = u.validationTargetFor(u.clean(u.findByName(n))), i && i.name in u.invalid && (u.currentElements.push(i), f = f && u.check(i)))
                    }), e = this.check(r) !== !1, f = f && e, this.invalid[r.name] = e ? !1 : !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n(t).attr("aria-invalid", !e)), f
                }, showErrors: function (t) {
                    if (t) {
                        var i = this;
                        n.extend(this.errorMap, t);
                        this.errorList = n.map(this.errorMap, function (n, t) {
                            return {message: n, element: i.findByName(t)[0]}
                        });
                        this.successList = n.grep(this.successList, function (n) {
                            return !(n.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                }, resetForm: function () {
                    n.fn.resetForm && n(this.currentForm).resetForm();
                    this.invalid = {};
                    this.submitted = {};
                    this.prepareForm();
                    this.hideErrors();
                    var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(t)
                }, resetElements: function (n) {
                    var t;
                    if (this.settings.unhighlight)for (t = 0; n[t]; t++)this.settings.unhighlight.call(this, n[t], this.settings.errorClass, ""), this.findByName(n[t].name).removeClass(this.settings.validClass); else n.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                }, numberOfInvalids: function () {
                    return this.objectLength(this.invalid)
                }, objectLength: function (n) {
                    var t, i = 0;
                    for (t in n)n[t] && i++;
                    return i
                }, hideErrors: function () {
                    this.hideThese(this.toHide)
                }, hideThese: function (n) {
                    n.not(this.containers).text("");
                    this.addWrapper(n).hide()
                }, valid: function () {
                    return 0 === this.size()
                }, size: function () {
                    return this.errorList.length
                }, focusInvalid: function () {
                    if (this.settings.focusInvalid)try {
                        n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {
                    }
                }, findLastActive: function () {
                    var t = this.lastActive;
                    return t && 1 === n.grep(this.errorList, function (n) {
                            return n.element.name === t.name
                        }).length && t
                }, elements: function () {
                    var t = this, i = {};
                    return n(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                        var r = this.name || n(this).attr("name");
                        return !r && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = n(this).closest("form")[0]), r in i || !t.objectLength(n(this).rules()) ? !1 : (i[r] = !0, !0)
                    })
                }, clean: function (t) {
                    return n(t)[0]
                }, errors: function () {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return n(this.settings.errorElement + "." + t, this.errorContext)
                }, resetInternals: function () {
                    this.successList = [];
                    this.errorList = [];
                    this.errorMap = {};
                    this.toShow = n([]);
                    this.toHide = n([])
                }, reset: function () {
                    this.resetInternals();
                    this.currentElements = n([])
                }, prepareForm: function () {
                    this.reset();
                    this.toHide = this.errors().add(this.containers)
                }, prepareElement: function (n) {
                    this.reset();
                    this.toHide = this.errorsFor(n)
                }, elementValue: function (t) {
                    var i, r, f = n(t), u = t.type;
                    return "radio" === u || "checkbox" === u ? this.findByName(t.name).filter(":checked").val() : "number" === u && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" : f.val() : (i = t.hasAttribute("contenteditable") ? f.text() : f.val(), "file" === u ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (r = i.lastIndexOf("/"), r >= 0 ? i.substr(r + 1) : (r = i.lastIndexOf("\\"), r >= 0 ? i.substr(r + 1) : i)) : "string" == typeof i ? i.replace(/\r/g, "") : i)
                }, check: function (t) {
                    t = this.validationTargetFor(this.clean(t));
                    var u, f, r, i = n(t).rules(), h = n.map(i, function (n, t) {
                        return t
                    }).length, s = !1, e = this.elementValue(t);
                    if ("function" == typeof i.normalizer) {
                        if (e = i.normalizer.call(t, e), "string" != typeof e)throw new TypeError("The normalizer should return a string value.");
                        delete i.normalizer
                    }
                    for (f in i) {
                        r = {method: f, parameters: i[f]};
                        try {
                            if (u = n.validator.methods[f].call(this, e, t, r.parameters), "dependency-mismatch" === u && 1 === h) {
                                s = !0;
                                continue
                            }
                            if (s = !1, "pending" === u)return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                            if (!u)return this.formatAndAdd(t, r), !1
                        } catch (o) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", o), o instanceof TypeError && (o.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), o;
                        }
                    }
                    if (!s)return this.objectLength(i) && this.successList.push(t), !0
                }, customDataMessage: function (t, i) {
                    return n(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || n(t).data("msg")
                }, customMessage: function (n, t) {
                    var i = this.settings.messages[n];
                    return i && (i.constructor === String ? i : i[t])
                }, findDefined: function () {
                    for (var n = 0; n < arguments.length; n++)if (void 0 !== arguments[n])return arguments[n]
                }, defaultMessage: function (t, i) {
                    var r = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, n.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "<\/strong>"),
                        u = /\$?\{(\d+)\}/g;
                    return "function" == typeof r ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters)), r
                }, formatAndAdd: function (n, t) {
                    var i = this.defaultMessage(n, t);
                    this.errorList.push({message: i, element: n, method: t.method});
                    this.errorMap[n.name] = i;
                    this.submitted[n.name] = i
                }, addWrapper: function (n) {
                    return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
                }, defaultShowErrors: function () {
                    for (var i, t,
                             n = 0; this.errorList[n]; n++)t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (n = 0; this.successList[n]; n++)this.showLabel(this.successList[n]);
                    if (this.settings.unhighlight)for (n = 0, i = this.validElements(); i[n]; n++)this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow);
                    this.hideErrors();
                    this.addWrapper(this.toShow).show()
                }, validElements: function () {
                    return this.currentElements.not(this.invalidElements())
                }, invalidElements: function () {
                    return n(this.errorList).map(function () {
                        return this.element
                    })
                }, showLabel: function (t, i) {
                    var u, s, e, o, r = this.errorsFor(t), h = this.idOrName(t), f = n(t).attr("aria-describedby");
                    r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(i || ""), u = r, this.settings.wrapper && (u = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(u) : this.settings.errorPlacement ? this.settings.errorPlacement(u, n(t)) : u.insertAfter(t), r.is("label") ? r.attr("for", h) : 0 === r.parents("label[for='" + this.escapeCssMeta(h) + "']").length && (e = r.attr("id"), f ? f.match(new RegExp("\\b" + this.escapeCssMeta(e) + "\\b")) || (f += " " + e) : f = e, n(t).attr("aria-describedby", f), s = this.groups[t.name], s && (o = this, n.each(o.groups, function (t, i) {
                            i === s && n("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", r.attr("id"))
                        }))));
                    !i && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t));
                    this.toShow = this.toShow.add(r)
                }, errorsFor: function (t) {
                    var r = this.escapeCssMeta(this.idOrName(t)), u = n(t).attr("aria-describedby"),
                        i = "label[for='" + r + "'], label[for='" + r + "'] *";
                    return u && (i = i + ", #" + this.escapeCssMeta(u).replace(/\s+/g, ", #")), this.errors().filter(i)
                }, escapeCssMeta: function (n) {
                    return n.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
                }, idOrName: function (n) {
                    return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
                }, validationTargetFor: function (t) {
                    return this.checkable(t) && (t = this.findByName(t.name)), n(t).not(this.settings.ignore)[0]
                }, checkable: function (n) {
                    return /radio|checkbox/i.test(n.type)
                }, findByName: function (t) {
                    return n(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
                }, getLength: function (t, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case"select":
                            return n("option:selected", i).length;
                        case"input":
                            if (this.checkable(i))return this.findByName(i.name).filter(":checked").length
                    }
                    return t.length
                }, depend: function (n, t) {
                    return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
                }, dependTypes: {
                    boolean: function (n) {
                        return n
                    }, string: function (t, i) {
                        return !!n(t, i.form).length
                    }, "function": function (n, t) {
                        return n(t)
                    }
                }, optional: function (t) {
                    var i = this.elementValue(t);
                    return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
                }, startRequest: function (t) {
                    this.pending[t.name] || (this.pendingRequest++, n(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
                }, stopRequest: function (t, i) {
                    this.pendingRequest--;
                    this.pendingRequest < 0 && (this.pendingRequest = 0);
                    delete this.pending[t.name];
                    n(t).removeClass(this.settings.pendingClass);
                    i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                }, previousValue: function (t, i) {
                    return n.data(t, "previousValue") || n.data(t, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(t, {method: i})
                        })
                }, destroy: function () {
                    this.resetForm();
                    n(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
                }
            },
            classRuleSettings: {
                required: {required: !0},
                email: {email: !0},
                url: {url: !0},
                date: {date: !0},
                dateISO: {dateISO: !0},
                number: {number: !0},
                digits: {digits: !0},
                creditcard: {creditcard: !0}
            },
            addClassRules: function (t, i) {
                t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
            },
            classRules: function (t) {
                var i = {}, r = n(t).attr("class");
                return r && n.each(r.split(" "), function () {
                    this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
                }), i
            },
            normalizeAttributeRule: function (n, t, i, r) {
                /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (r = Number(r), isNaN(r) && (r = void 0));
                r || 0 === r ? n[i] = r : t === i && "range" !== t && (n[i] = !0)
            },
            attributeRules: function (t) {
                var r, i, u = {}, f = n(t), e = t.getAttribute("type");
                for (r in n.validator.methods)"required" === r ? (i = t.getAttribute(r), "" === i && (i = !0), i = !!i) : i = f.attr(r), this.normalizeAttributeRule(u, e, r, i);
                return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength, u
            },
            dataRules: function (t) {
                var i, r, u = {}, f = n(t), e = t.getAttribute("type");
                for (i in n.validator.methods)r = f.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(u, e, i, r);
                return u
            },
            staticRules: function (t) {
                var i = {}, r = n.data(t.form, "validator");
                return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
            },
            normalizeRules: function (t, i) {
                return n.each(t, function (r, u) {
                    if (u === !1)return void delete t[r];
                    if (u.param || u.depends) {
                        var f = !0;
                        switch (typeof u.depends) {
                            case"string":
                                f = !!n(u.depends, i.form).length;
                                break;
                            case"function":
                                f = u.depends.call(i, i)
                        }
                        f ? t[r] = void 0 !== u.param ? u.param : !0 : (n.data(i.form, "validator").resetElements(n(i)), delete t[r])
                    }
                }), n.each(t, function (r, u) {
                    t[r] = n.isFunction(u) && "normalizer" !== r ? u(i) : u
                }), n.each(["minlength", "maxlength"], function () {
                    t[this] && (t[this] = Number(t[this]))
                }), n.each(["rangelength", "range"], function () {
                    var i;
                    t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
                }), n.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
            },
            normalizeRule: function (t) {
                if ("string" == typeof t) {
                    var i = {};
                    n.each(t.split(/\s/), function () {
                        i[this] = !0
                    });
                    t = i
                }
                return t
            },
            addMethod: function (t, i, r) {
                n.validator.methods[t] = i;
                n.validator.messages[t] = void 0 !== r ? r : n.validator.messages[t];
                i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
            },
            methods: {
                required: function (t, i, r) {
                    if (!this.depend(r, i))return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var u = n(i).val();
                        return u && u.length > 0
                    }
                    return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
                }, email: function (n, t) {
                    return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)
                }, url: function (n, t) {
                    return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(n)
                }, date: function (n, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
                }, dateISO: function (n, t) {
                    return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(n)
                }, number: function (n, t) {
                    return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
                }, digits: function (n, t) {
                    return this.optional(t) || /^\d+$/.test(n)
                }, minlength: function (t, i, r) {
                    var u = n.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || u >= r
                }, maxlength: function (t, i, r) {
                    var u = n.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || r >= u
                }, rangelength: function (t, i, r) {
                    var u = n.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || u >= r[0] && u <= r[1]
                }, min: function (n, t, i) {
                    return this.optional(t) || n >= i
                }, max: function (n, t, i) {
                    return this.optional(t) || i >= n
                }, range: function (n, t, i) {
                    return this.optional(t) || n >= i[0] && n <= i[1]
                }, step: function (t, i, r) {
                    var u = n(i).attr("type"), f = "Step attribute on input type " + u + " is not supported.",
                        e = new RegExp("\\b" + u + "\\b"), o = u && !e.test("text,number,range");
                    if (o)throw new Error(f);
                    return this.optional(i) || t % r == 0
                }, equalTo: function (t, i, r) {
                    var u = n(r);
                    return this.settings.onfocusout && u.not(".validate-equalTo-blur").length && u.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                        n(i).valid()
                    }), t === u.val()
                }, remote: function (t, i, r, u) {
                    if (this.optional(i))return "dependency-mismatch";
                    u = "string" == typeof u && u || "remote";
                    var f, o, s, e = this.previousValue(i, u);
                    return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), e.originalMessage = e.originalMessage || this.settings.messages[i.name][u], this.settings.messages[i.name][u] = e.message, r = "string" == typeof r && {url: r} || r, s = n.param(n.extend({data: t}, r.data)), e.old === s ? e.valid : (e.old = s, f = this, this.startRequest(i), o = {}, o[i.name] = t, n.ajax(n.extend(!0, {
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: o,
                        context: f.currentForm,
                        success: function (n) {
                            var r, s, h, o = n === !0 || "true" === n;
                            f.settings.messages[i.name][u] = e.originalMessage;
                            o ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(i), f.formSubmitted = h, f.successList.push(i), f.invalid[i.name] = !1, f.showErrors()) : (r = {}, s = n || f.defaultMessage(i, {
                                    method: u,
                                    parameters: t
                                }), r[i.name] = e.message = s, f.invalid[i.name] = !0, f.showErrors(r));
                            e.valid = o;
                            f.stopRequest(i, o)
                        }
                    }, r)), "pending")
                }
            }
        });
        var i, t = {};
        n.ajaxPrefilter ? n.ajaxPrefilter(function (n, i, r) {
            var u = n.port;
            "abort" === n.mode && (t[u] && t[u].abort(), t[u] = r)
        }) : (i = n.ajax, n.ajax = function (r) {
            var f = ("mode" in r ? r : n.ajaxSettings).mode, u = ("port" in r ? r : n.ajaxSettings).port;
            return "abort" === f ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
        })
    }), function (n) {
        function i(n, t, i) {
            n.rules[t] = i;
            n.message && (n.messages[t] = n.message)
        }

        function h(n) {
            return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
        }

        function f(n) {
            return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
        }

        function e(n) {
            return n.substr(0, n.lastIndexOf(".") + 1)
        }

        function o(n, t) {
            return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n
        }

        function c(t, i) {
            var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']"), u = r.attr("data-valmsg-replace"),
                e = u ? n.parseJSON(u) !== !1 : null;
            r.removeClass("field-validation-valid").addClass("field-validation-error");
            t.data("unobtrusiveContainer", r);
            e ? (r.empty(), t.removeClass("input-validation-error").appendTo(r)) : t.hide()
        }

        function l(t, i) {
            var u = n(this).find("[data-valmsg-summary=true]"), r = u.find("ul");
            r && r.length && i.errorList.length && (r.empty(), u.addClass("validation-summary-errors").removeClass("validation-summary-valid"), n.each(i.errorList, function () {
                n("<li />").html(this.message).appendTo(r)
            }))
        }

        function a(t) {
            var i = t.data("unobtrusiveContainer"), r = i.attr("data-valmsg-replace"), u = r ? n.parseJSON(r) : null;
            i && (i.addClass("field-validation-valid").removeClass("field-validation-error"), t.removeData("unobtrusiveContainer"), u && i.empty())
        }

        function v() {
            var t = n(this), i = "__jquery_unobtrusive_validation_form_reset";
            if (!t.data(i)) {
                t.data(i, !0);
                try {
                    t.data("validator").resetForm()
                } finally {
                    t.removeData(i)
                }
                t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
                t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
            }
        }

        function s(t) {
            var i = n(t), f = i.data(u), s = n.proxy(v, t), e = r.unobtrusive.options || {}, o = function (i, r) {
                var u = e[i];
                u && n.isFunction(u) && u.apply(t, r)
            };
            return f || (f = {
                options: {
                    errorClass: e.errorClass || "input-validation-error",
                    errorElement: e.errorElement || "span",
                    errorPlacement: function () {
                        c.apply(t, arguments);
                        o("errorPlacement", arguments)
                    },
                    invalidHandler: function () {
                        l.apply(t, arguments);
                        o("invalidHandler", arguments)
                    },
                    messages: {},
                    rules: {},
                    success: function () {
                        a.apply(t, arguments);
                        o("success", arguments)
                    }
                }, attachValidation: function () {
                    i.off("reset." + u, s).on("reset." + u, s).validate(this.options)
                }, validate: function () {
                    return i.validate(), i.valid()
                }
            }, i.data(u, f)), f
        }

        var r = n.validator, t, u = "unobtrusiveValidation";
        r.unobtrusive = {
            adapters: [], parseElement: function (t, i) {
                var u = n(t), f = u.parents("form")[0], r, e, o;
                f && (r = s(f), r.options.rules[t.name] = e = {}, r.options.messages[t.name] = o = {}, n.each(this.adapters, function () {
                    var i = "data-val-" + this.name, r = u.attr(i), s = {};
                    r !== undefined && (i += "-", n.each(this.params, function () {
                        s[this] = u.attr(i + this)
                    }), this.adapt({element: t, form: f, message: r, params: s, rules: e, messages: o}))
                }), n.extend(e, {__dummy__: !0}), i || r.attachValidation())
            }, parse: function (t) {
                var i = n(t), u = i.parents().addBack().filter("form").add(i.find("form")).has("[data-val=true]");
                i.find("[data-val=true]").each(function () {
                    r.unobtrusive.parseElement(this, !0)
                });
                u.each(function () {
                    var n = s(this);
                    n && n.attachValidation()
                })
            }
        };
        t = r.unobtrusive.adapters;
        t.add = function (n, t, i) {
            return i || (i = t, t = []), this.push({name: n, params: t, adapt: i}), this
        };
        t.addBool = function (n, t) {
            return this.add(n, function (r) {
                i(r, t || n, !0)
            })
        };
        t.addMinMax = function (n, t, r, u, f, e) {
            return this.add(n, [f || "min", e || "max"], function (n) {
                var f = n.params.min, e = n.params.max;
                f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
            })
        };
        t.addSingleVal = function (n, t, r) {
            return this.add(n, [t || "val"], function (u) {
                i(u, r || n, u.params[t])
            })
        };
        r.addMethod("__dummy__", function () {
            return !0
        });
        r.addMethod("regex", function (n, t, i) {
            var r;
            return this.optional(t) ? !0 : (r = new RegExp(i).exec(n), r && r.index === 0 && r[0].length === n.length)
        });
        r.addMethod("nonalphamin", function (n, t, i) {
            var r;
            return i && (r = n.match(/\W/g), r = r && r.length >= i), r
        });
        r.methods.extension ? (t.addSingleVal("accept", "mimtype"), t.addSingleVal("extension", "extension")) : t.addSingleVal("extension", "extension", "accept");
        t.addSingleVal("regex", "pattern");
        t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
        t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
        t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
        t.add("equalto", ["other"], function (t) {
            var r = e(t.element.name), u = t.params.other, s = o(u, r),
                h = n(t.form).find(":input").filter("[name='" + f(s) + "']")[0];
            i(t, "equalTo", h)
        });
        t.add("required", function (n) {
            (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && i(n, "required", !0)
        });
        t.add("remote", ["url", "type", "additionalfields"], function (t) {
            var r = {url: t.params.url, type: t.params.type || "GET", data: {}}, u = e(t.element.name);
            n.each(h(t.params.additionalfields || t.element.name), function (i, e) {
                var s = o(e, u);
                r.data[s] = function () {
                    var i = n(t.form).find(":input").filter("[name='" + f(s) + "']");
                    return i.is(":checkbox") ? i.filter(":checked").val() || i.filter(":hidden").val() || "" : i.is(":radio") ? i.filter(":checked").val() || "" : i.val()
                }
            });
            i(t, "remote", r)
        });
        t.add("password", ["min", "nonalphamin", "regex"], function (n) {
            n.params.min && i(n, "minlength", n.params.min);
            n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin);
            n.params.regex && i(n, "regex", n.params.regex)
        });
        n(function () {
            r.unobtrusive.parse(document)
        })
    }(jQuery), function (n) {
        typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
    }(function (n) {
        function i(n) {
            return t.raw ? n : encodeURIComponent(n)
        }

        function f(n) {
            return t.raw ? n : decodeURIComponent(n)
        }

        function e(n) {
            return i(t.json ? JSON.stringify(n) : String(n))
        }

        function o(n) {
            n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return n = decodeURIComponent(n.replace(u, " ")), t.json ? JSON.parse(n) : n
            } catch (i) {
            }
        }

        function r(i, r) {
            var u = t.raw ? i : o(i);
            return n.isFunction(r) ? r(u) : u
        }

        var u = /\+/g, t = n.cookie = function (u, o, s) {
            var y, a, h, v, c, p;
            if (o !== undefined && !n.isFunction(o))return s = n.extend({}, t.defaults, s), typeof s.expires == "number" && (y = s.expires, a = s.expires = new Date, a.setTime(+a + y * 864e5)), document.cookie = [i(u), "=", e(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("");
            for (h = u ? undefined : {}, v = document.cookie ? document.cookie.split("; ") : [], c = 0, p = v.length; c < p; c++) {
                var w = v[c].split("="), b = f(w.shift()), l = w.join("=");
                if (u && u === b) {
                    h = r(l, o);
                    break
                }
                u || (l = r(l)) === undefined || (h[b] = l)
            }
            return h
        };
        t.defaults = {};
        n.removeCookie = function (t, i) {
            return n.cookie(t) === undefined ? !1 : (n.cookie(t, "", n.extend({}, i, {expires: -1})), !n.cookie(t))
        }
    }), function (n) {
        var o = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: !1,
            getWidthFrom: ""
        }, u = n(window), s = n(document), t = [], f = u.height(), r = function () {
            for (var r, e = u.scrollTop(), h = s.height(), c = h - f, l = e > c ? c - e : 0, o = 0; o < t.length; o++) {
                var i = t[o], a = i.stickyWrapper.offset().top, v = a - i.topSpacing - l;
                e <= v ? i.currentTop !== null && (i.stickyElement.css("position", "").css("top", ""), i.stickyElement.parent().removeClass(i.className), i.currentTop = null) : (r = h - i.stickyElement.outerHeight() - i.topSpacing - i.bottomSpacing - e - l, r = r < 0 ? r + i.topSpacing : i.topSpacing, i.currentTop != r && (i.stickyElement.css("position", "fixed").css("top", r), typeof i.getWidthFrom != "undefined" && i.stickyElement.css("width", n(i.getWidthFrom).width()), i.stickyElement.parent().addClass(i.className), i.currentTop = r))
            }
        }, e = function () {
            f = u.height()
        }, i = {
            init: function (i) {
                var r = n.extend(o, i);
                return this.each(function () {
                    var i = n(this), f = i.attr("id"),
                        e = n("<div><\/div>").attr("id", f + "-sticky-wrapper").addClass(r.wrapperClassName), u;
                    i.wrapAll(e);
                    r.center && i.parent().css({width: i.outerWidth(), marginLeft: "auto", marginRight: "auto"});
                    i.css("float") == "right" && i.css({float: "none"}).parent().css({float: "right"});
                    u = i.parent();
                    u.css("height", i.outerHeight());
                    t.push({
                        topSpacing: r.topSpacing,
                        bottomSpacing: r.bottomSpacing,
                        stickyElement: i,
                        currentTop: null,
                        stickyWrapper: u,
                        className: r.className,
                        getWidthFrom: r.getWidthFrom
                    })
                })
            }, update: r, unstick: function () {
                return this.each(function () {
                    var r = n(this), i;
                    for (removeIdx = -1, i = 0; i < t.length; i++)t[i].stickyElement.get(0) == r.get(0) && (removeIdx = i);
                    removeIdx != -1 && (t.splice(removeIdx, 1), r.unwrap(), r.removeAttr("style"))
                })
            }
        };
        window.addEventListener ? (window.addEventListener("scroll", r, !1), window.addEventListener("resize", e, !1)) : window.attachEvent && (window.attachEvent("onscroll", r), window.attachEvent("onresize", e));
        n.fn.sticky = function (t) {
            if (i[t])return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
            if (typeof t != "object" && t) n.error("Method " + t + " does not exist on jQuery.sticky"); else return i.init.apply(this, arguments)
        };
        n.fn.unstick = function (t) {
            if (i[t])return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
            if (typeof t != "object" && t) n.error("Method " + t + " does not exist on jQuery.sticky"); else return i.unstick.apply(this, arguments)
        };
        n(function () {
            setTimeout(r, 0)
        })
    }(jQuery), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery);
+function (n) {
    "use strict";
    function t() {
        var i = document.createElement("bootstrap"), n = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var t in n)if (void 0 !== i.style[t])return {end: n[t]};
        return !1
    }

    n.fn.emulateTransitionEnd = function (t) {
        var i = !1, u = this, r;
        n(this).one("bsTransitionEnd", function () {
            i = !0
        });
        return r = function () {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    };
    n(function () {
        n.support.transition = t();
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function (t) {
                if (n(t.target).is(this))return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery);
+function (n) {
    "use strict";
    function u(i) {
        return this.each(function () {
            var r = n(this), u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }

    var i = '[data-dismiss="alert"]', t = function (t) {
        n(t).on("click", i, this.close)
    }, r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function (i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }

        var f = n(this), u = f.attr("data-target"), r;
        u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
        r = n(u);
        i && i.preventDefault();
        r.length || (r = f.closest(".alert"));
        r.trigger(i = n.Event("close.bs.alert"));
        i.isDefaultPrevented() || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function () {
        return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery);
+function (n) {
    "use strict";
    function i(i) {
        return this.each(function () {
            var u = n(this), r = u.data("bs.button"), f = "object" == typeof i && i;
            r || u.data("bs.button", r = new t(this, f));
            "toggle" == i ? r.toggle() : i && r.setState(i)
        })
    }

    var t = function (i, r) {
        this.$element = n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.isLoading = !1
    }, r;
    t.VERSION = "3.3.6";
    t.DEFAULTS = {loadingText: "loading..."};
    t.prototype.setState = function (t) {
        var r = "disabled", i = this.$element, f = i.is("input") ? "val" : "html", u = i.data();
        t += "Text";
        null == u.resetText && i.data("resetText", i[f]());
        setTimeout(n.proxy(function () {
            i[f](null == u[t] ? this.options[t] : u[t]);
            "loadingText" == t ? (this.isLoading = !0, i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1, i.removeClass(r).removeAttr(r))
        }, this), 0)
    };
    t.prototype.toggle = function () {
        var t = !0, i = this.$element.closest('[data-toggle="buttons"]'), n;
        i.length ? (n = this.$element.find("input"), "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function () {
        return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        var r = n(t.target);
        r.hasClass("btn") || (r = r.closest(".btn"));
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"]') || n(t.target).is('input[type="checkbox"]') || t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery);
+function (n) {
    "use strict";
    function i(i) {
        return this.each(function () {
            var u = n(this), r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
                e = "string" == typeof i ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }

    var t = function (t, i) {
        this.$element = n(t);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = i;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
    }, u, r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0, keyboard: !0};
    t.prototype.keydown = function (n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    };
    t.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    };
    t.prototype.getItemIndex = function (n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    };
    t.prototype.getItemForDirection = function (n, t) {
        var i = this.getItemIndex(t), f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1, r, u;
        return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
    };
    t.prototype.to = function (n) {
        var i = this, t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1) && !(0 > n))return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    };
    t.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    t.prototype.next = function () {
        if (!this.sliding)return this.slide("next")
    };
    t.prototype.prev = function () {
        if (!this.sliding)return this.slide("prev")
    };
    t.prototype.slide = function (i, r) {
        var e = this.$element.find(".item.active"), u = r || this.getItemForDirection(i, e), l = this.interval,
            f = "next" == i ? "left" : "right", a = this, o, s, h, c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), (this.$element.trigger(s), !s.isDefaultPrevented()) ? ((this.sliding = !0, l && this.pause(), this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function () {
            u.removeClass([i, f].join(" ")).addClass("active");
            e.removeClass(["active", f].join(" "));
            a.sliding = !1;
            setTimeout(function () {
                a.$element.trigger(c)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this) : void 0)
    };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function () {
        return n.fn.carousel = u, this
    };
    r = function (t) {
        var o, r = n(this), u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")), e,
            f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function () {
        n('[data-ride="carousel"]').each(function () {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery);
+function (n) {
    "use strict";
    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function () {
            var u = n(this), r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }

    var t = function (i, r) {
        this.$element = n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    }, u;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {toggle: !0};
    t.prototype.dimension = function () {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    };
    t.prototype.show = function () {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !(r && r.length && (f = r.data("bs.collapse"), f && f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented()))) {
            if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition)return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    };
    t.prototype.hide = function () {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented()))return i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function () {
            this.transitioning = 0;
            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        }, n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
    };
    t.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    t.prototype.getParent = function () {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function (t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function (n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function () {
        return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u), e = f.data("bs.collapse"), o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery);
+function (n) {
    "use strict";
    function r(t) {
        var i = t.attr("data-target"), r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function u(t) {
        t && 3 === t.which || (n(o).remove(), n(i).each(function () {
            var u = n(this), i = r(u), f = {relatedTarget: this};
            i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function e(i) {
        return this.each(function () {
            var r = n(this), u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }

    var o = ".dropdown-backdrop", i = '[data-toggle="dropdown"]', t = function (t) {
        n(t).on("click.bs.dropdown", this.toggle)
    }, f;
    t.VERSION = "3.3.6";
    t.prototype.toggle = function (t) {
        var f = n(this), i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f), o = i.hasClass("open"), u(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u), e = {relatedTarget: this}, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented())return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    };
    t.prototype.keydown = function (t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = r(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which)return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
            h = " li:not(.disabled):visible a";
            f = o.find(".dropdown-menu" + h);
            f.length && (u = f.index(t.target), 38 == t.which && u > 0 && u--, 40 == t.which && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function () {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function (n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery);
+function (n) {
    "use strict";
    function i(i, r) {
        return this.each(function () {
            var f = n(this), u = f.data("bs.modal"), e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
            u || f.data("bs.modal", u = new t(this, e));
            "string" == typeof i ? u[i](r) : e.show && u.show(r)
        })
    }

    var t = function (t, i) {
        this.options = i;
        this.$body = n(document.body);
        this.$element = n(t);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    }, r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0};
    t.prototype.toggle = function (n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function (i) {
        var r = this, u = n.Event("show.bs.modal", {relatedTarget: i});
        this.$element.trigger(u);
        this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            r.$element.one("mouseup.dismiss.bs.modal", function (t) {
                n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var f = n.support.transition && r.$element.hasClass("fade"), u;
            r.$element.parent().length || r.$element.appendTo(r.$body);
            r.$element.show().scrollTop(0);
            r.adjustDialog();
            f && r.$element[0].offsetWidth;
            r.$element.addClass("in");
            r.enforceFocus();
            u = n.Event("shown.bs.modal", {relatedTarget: i});
            f ? r.$dialog.one("bsTransitionEnd", function () {
                r.$element.trigger("focus").trigger(u)
            }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
        }))
    };
    t.prototype.hide = function (i) {
        i && i.preventDefault();
        i = n.Event("hide.bs.modal");
        this.$element.trigger(i);
        this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function () {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function (n) {
            this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    };
    t.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function (n) {
            27 == n.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function () {
        this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function () {
        var n = this;
        this.$element.hide();
        this.backdrop(function () {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function (i) {
        var e = this, f = this.$element.hasClass("fade") ? "fade" : "", r, u;
        if (this.isShown && this.options.backdrop) {
            if (r = n.support.transition && f, this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function (n) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i)return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function () {
            e.removeBackdrop();
            i && i()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    };
    t.prototype.handleUpdate = function () {
        this.adjustDialog()
    };
    t.prototype.adjustDialog = function () {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    };
    t.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    };
    t.prototype.checkScrollbar = function () {
        var n = window.innerWidth, t;
        n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function () {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    t.prototype.measureScrollbar = function () {
        var n = document.createElement("div"), t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function () {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var r = n(this), f = r.attr("href"), u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({remote: !/#/.test(f) && f}, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function (n) {
            n.isDefaultPrevented() || u.one("hidden.bs.modal", function () {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery);
+function (n) {
    "use strict";
    function r(i) {
        return this.each(function () {
            var u = n(this), r = u.data("bs.tooltip"), f = "object" == typeof i && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }

    var t = function (n, t) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init("tooltip", n, t)
    }, i;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    };
    t.prototype.init = function (t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "), e = f.length; e--;)if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this)); else"manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function () {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function (t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    };
    t.prototype.getDelegateOptions = function () {
        var t = {}, i = this.getDefaults();
        return this._options && n.each(this._options, function (n, r) {
            i[n] != r && (t[n] = r)
        }), t
    };
    t.prototype.enter = function (t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    };
    t.prototype.isInStateTrue = function () {
        for (var n in this.inState)if (this.inState[n])return !0;
        return !1
    };
    t.prototype.leave = function (t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    };
    t.prototype.show = function () {
        var c = n.Event("show.bs." + this.type), l, p, e, w, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l)return;
            var u = this, r = this.tip(), a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                v = /\s?auto?\s?/i, y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({top: 0, left: 0, display: "block"}).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(), o = r[0].offsetWidth, s = r[0].offsetHeight;
            y && (p = i, e = this.getPosition(this.$viewport), i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function () {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                "out" == n && u.leave(u)
            };
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    };
    t.prototype.applyPlacement = function (t, i) {
        var r = this.tip(), l = r[0].offsetWidth, e = r[0].offsetHeight, o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10), h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function (n) {
                r.css({top: Math.round(n.top), left: Math.round(n.left)})
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        "top" == i && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i), a = c ? 2 * u.left - l + h : 2 * u.top - e + f,
            v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    };
    t.prototype.replaceArrow = function (n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    };
    t.prototype.setContent = function () {
        var n = this.tip(), t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function (i) {
        function f() {
            "in" != u.hoverState && r.detach();
            u.$element.removeAttr("aria-describedby").trigger("hidden.bs." + u.type);
            i && i()
        }

        var u = this, r = n(this.$tip), e = n.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this)
    };
    t.prototype.fixTitle = function () {
        var n = this.$element;
        (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function () {
        return this.getTitle()
    };
    t.prototype.getPosition = function (t) {
        t = t || this.$element;
        var u = t[0], r = "BODY" == u.tagName, i = u.getBoundingClientRect();
        null == i.width && (i = n.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
        var f = r ? {top: 0, left: 0} : t.offset(),
            e = {scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()},
            o = r ? {width: n(window).width(), height: n(window).height()} : null;
        return n.extend({}, i, e, o, f)
    };
    t.prototype.getCalculatedOffset = function (n, t, i, r) {
        return "bottom" == n ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : "top" == n ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : "left" == n ? {top: t.top + t.height / 2 - r / 2, left: t.left - i} : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function (n, t, i, r) {
        var f = {top: 0, left: 0}, e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function () {
        var t = this.$element, n = this.options;
        return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function (n) {
        do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
        return n
    };
    t.prototype.tip = function () {
        if (!this.$tip && (this.$tip = n(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function () {
        this.enabled = !0
    };
    t.prototype.disable = function () {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function (t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function () {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function () {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null
        })
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function () {
        return n.fn.tooltip = i, this
    }
}(jQuery);
+function (n) {
    "use strict";
    function r(i) {
        return this.each(function () {
            var u = n(this), r = u.data("bs.popover"), f = "object" == typeof i && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }

    var t = function (n, t) {
        this.init("popover", n, t)
    }, i;
    if (!n.fn.tooltip)throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.6";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function () {
        return t.DEFAULTS
    };
    t.prototype.setContent = function () {
        var n = this.tip(), i = this.getTitle(), t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function () {
        var t = this.$element, n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function () {
        return n.fn.popover = i, this
    }
}(jQuery);
+function (n) {
    "use strict";
    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(n(i).is(document.body) ? window : i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function i(i) {
        return this.each(function () {
            var u = n(this), r = u.data("bs.scrollspy"), f = "object" == typeof i && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }

    t.VERSION = "3.3.6";
    t.DEFAULTS = {offset: 10};
    t.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function () {
        var t = this, i = "offset", r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function () {
            var f = n(this), u = f.data("target") || f.attr("href"), t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [[t[i]().top + r, u]] || null
        }).sort(function (n, t) {
            return n[0] - t[0]
        }).each(function () {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function () {
        var n, i = this.$scrollElement.scrollTop() + this.options.offset, f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(), t = this.offsets, r = this.targets,
            u = this.activeTarget;
        if (this.scrollHeight != f && this.refresh(), i >= e)return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0])return this.activeTarget = null, this.clear();
        for (n = t.length; n--;)u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function (t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function () {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function () {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function () {
        n('[data-spy="scroll"]').each(function () {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery);
+function (n) {
    "use strict";
    function r(i) {
        return this.each(function () {
            var u = n(this), r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            "string" == typeof i && r[i]()
        })
    }

    var t = function (t) {
        this.element = n(t)
    }, u, i;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function () {
        var t = this.element, f = t.closest("ul:not(.dropdown-menu)"), i = t.data("target"), u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"), e = n.Event("hide.bs.tab", {relatedTarget: t[0]}),
                o = n.Event("show.bs.tab", {relatedTarget: r[0]});
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function () {
                r.trigger({type: "hidden.bs.tab", relatedTarget: t[0]});
                t.trigger({type: "shown.bs.tab", relatedTarget: r[0]})
            }))
        }
    };
    t.prototype.activate = function (i, r, u) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }

        var f = r.find("> .active"),
            o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
        f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function () {
        return n.fn.tab = u, this
    };
    i = function (t) {
        t.preventDefault();
        r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery);
+function (n) {
    "use strict";
    function i(i) {
        return this.each(function () {
            var u = n(this), r = u.data("bs.affix"), f = "object" == typeof i && i;
            r || u.data("bs.affix", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }

    var t = function (i, r) {
        this.options = n.extend({}, t.DEFAULTS, r);
        this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
        this.$element = n(i);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition()
    }, r;
    t.VERSION = "3.3.6";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {offset: 0, target: window};
    t.prototype.getState = function (n, t, i, r) {
        var u = this.$target.scrollTop(), f = this.$element.offset(), e = this.$target.height();
        if (null != i && "top" == this.affixed)return i > u ? "top" : !1;
        if ("bottom" == this.affixed)return null != i ? u + this.unpin <= f.top ? !1 : "bottom" : n - r >= u + e ? !1 : "bottom";
        var o = null == this.affixed, s = o ? u : f.top, h = o ? e : t;
        return null != i && i >= u ? "top" : null != r && s + h >= n - r ? "bottom" : !1
    };
    t.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(), i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function () {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function () {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(), r = this.options.offset, f = r.top, u = r.bottom,
                h = Math.max(n(document).height(), n(document.body).height());
            if ("object" != typeof r && (u = f = r), "function" == typeof f && (f = r.top(this.$element)), "function" == typeof u && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
                if (null != this.unpin && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented())return;
                this.affixed = i;
                this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == i && this.$element.offset({top: h - s - u})
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function () {
        return n.fn.affix = r, this
    };
    n(window).on("load", function () {
        n('[data-spy="affix"]').each(function () {
            var r = n(this), t = r.data();
            t.offset = t.offset || {};
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            null != t.offsetTop && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery);
!function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : n("object" == typeof exports ? require("jquery") : jQuery)
}(function (n) {
    function i(i, r, u) {
        var r = {
            content: {
                message: "object" == typeof r ? r.message : r,
                title: r.title ? r.title : "",
                icon: r.icon ? r.icon : "",
                url: r.url ? r.url : "#",
                target: r.target ? r.target : "-"
            }
        };
        u = n.extend(!0, {}, r, u);
        this.settings = n.extend(!0, {}, t, u);
        this._defaults = t;
        "-" == this.settings.content.target && (this.settings.content.target = this.settings.url_target);
        this.animations = {
            start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
            end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
        };
        "number" == typeof this.settings.offset && (this.settings.offset = {
            x: this.settings.offset,
            y: this.settings.offset
        });
        this.init()
    }

    var t = {
        element: "body",
        position: null,
        type: "info",
        allow_dismiss: !0,
        newest_on_top: !1,
        showProgressbar: !1,
        placement: {from: "top", align: "right"},
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5e3,
        timer: 1e3,
        url_target: "_blank",
        mouse_over: null,
        animate: {enter: "animated fadeInDown", exit: "animated fadeOutUp"},
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: "class",
        template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;<\/button><span data-notify="icon"><\/span> <span data-notify="title">{1}<\/span> <span data-notify="message">{2}<\/span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"><\/div><\/div><a href="{3}" target="{4}" data-notify="url"><\/a><\/div>'
    };
    String.format = function () {
        for (var t = arguments[0],
                 n = 1; n < arguments.length; n++)t = t.replace(RegExp("\\{" + (n - 1) + "\\}", "gm"), arguments[n]);
        return t
    };
    n.extend(i.prototype, {
        init: function () {
            var n = this;
            this.buildNotify();
            this.settings.content.icon && this.setIcon();
            "#" != this.settings.content.url && this.styleURL();
            this.placement();
            this.bind();
            this.notify = {
                $ele: this.$ele, update: function (t, i) {
                    var r = {}, t, u, f, e;
                    "string" == typeof t ? r[t] = i : r = t;
                    for (t in r)switch (t) {
                        case"type":
                            this.$ele.removeClass("alert-" + n.settings.type);
                            this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + n.settings.type);
                            n.settings.type = r[t];
                            this.$ele.addClass("alert-" + r[t]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + r[t]);
                            break;
                        case"icon":
                            u = this.$ele.find('[data-notify="icon"]');
                            "class" == n.settings.icon_type.toLowerCase() ? u.removeClass(n.settings.content.icon).addClass(r[t]) : (u.is("img") || u.find("img"), u.attr("src", r[t]));
                            break;
                        case"progress":
                            f = n.settings.delay - n.settings.delay * (r[t] / 100);
                            this.$ele.data("notify-delay", f);
                            this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", r[t]).css("width", r[t] + "%");
                            break;
                        case"url":
                            this.$ele.find('[data-notify="url"]').attr("href", r[t]);
                            break;
                        case"target":
                            this.$ele.find('[data-notify="url"]').attr("target", r[t]);
                            break;
                        default:
                            this.$ele.find('[data-notify="' + t + '"]').html(r[t])
                    }
                    e = this.$ele.outerHeight() + parseInt(n.settings.spacing) + parseInt(n.settings.offset.y);
                    n.reposition(e)
                }, close: function () {
                    n.close()
                }
            }
        }, buildNotify: function () {
            var t = this.settings.content;
            this.$ele = n(String.format(this.settings.template, this.settings.type, t.title, t.message, t.url, t.target));
            this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align);
            this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none");
            (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
        }, setIcon: function () {
            "class" == this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
        }, styleURL: function () {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                height: "100%",
                left: "0px",
                position: "absolute",
                top: "0px",
                width: "100%",
                zIndex: this.settings.z_index + 1
            });
            this.$ele.find('[data-notify="dismiss"]').css({
                position: "absolute",
                right: "10px",
                top: "5px",
                zIndex: this.settings.z_index + 2
            })
        }, placement: function () {
            var t = this, i = this.settings.offset.y, r = {
                display: "inline-block",
                margin: "0px auto",
                position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
                transition: "all .5s ease-in-out",
                zIndex: this.settings.z_index
            }, u = !1, f = this.settings;
            switch (n('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
                return i = Math.max(i, parseInt(n(this).css(f.placement.from)) + parseInt(n(this).outerHeight()) + parseInt(f.spacing))
            }), 1 == this.settings.newest_on_top && (i = this.settings.offset.y), r[this.settings.placement.from] = i + "px", this.settings.placement.align) {
                case"left":
                case"right":
                    r[this.settings.placement.align] = this.settings.offset.x + "px";
                    break;
                case"center":
                    r.left = 0;
                    r.right = 0
            }
            this.$ele.css(r).addClass(this.settings.animate.enter);
            n.each(Array("webkit", "moz", "o", "ms", ""), function (n, i) {
                t.$ele[0].style[i + "AnimationIterationCount"] = 1
            });
            n(this.settings.element).append(this.$ele);
            1 == this.settings.newest_on_top && (i = parseInt(i) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(i));
            n.isFunction(t.settings.onShow) && t.settings.onShow.call(this.$ele);
            this.$ele.one(this.animations.start, function () {
                u = !0
            }).one(this.animations.end, function () {
                n.isFunction(t.settings.onShown) && t.settings.onShown.call(this)
            });
            setTimeout(function () {
                u || n.isFunction(t.settings.onShown) && t.settings.onShown.call(this)
            }, 600)
        }, bind: function () {
            var t = this, i;
            (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
                t.close()
            }), this.$ele.mouseover(function () {
                n(this).data("data-hover", "true")
            }).mouseout(function () {
                n(this).data("data-hover", "false")
            }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) && (t.$ele.data("notify-delay", t.settings.delay), i = setInterval(function () {
                var n = parseInt(t.$ele.data("notify-delay")) - t.settings.timer, r;
                ("false" === t.$ele.data("data-hover") && "pause" == t.settings.mouse_over || "pause" != t.settings.mouse_over) && (r = (t.settings.delay - n) / t.settings.delay * 100, t.$ele.data("notify-delay", n), t.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", r).css("width", r + "%"));
                n <= -t.settings.timer && (clearInterval(i), t.close())
            }, t.settings.timer))
        }, close: function () {
            var t = this, r = parseInt(this.$ele.css(this.settings.placement.from)), i = !1;
            this.$ele.data("closing", "true").addClass(this.settings.animate.exit);
            t.reposition(r);
            n.isFunction(t.settings.onClose) && t.settings.onClose.call(this.$ele);
            this.$ele.one(this.animations.start, function () {
                i = !0
            }).one(this.animations.end, function () {
                n(this).remove();
                n.isFunction(t.settings.onClosed) && t.settings.onClosed.call(this)
            });
            setTimeout(function () {
                i || (t.$ele.remove(), t.settings.onClosed && t.settings.onClosed(t.$ele))
            }, 600)
        }, reposition: function (t) {
            var i = this,
                r = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
                u = this.$ele.nextAll(r);
            1 == this.settings.newest_on_top && (u = this.$ele.prevAll(r));
            u.each(function () {
                n(this).css(i.settings.placement.from, t);
                t = parseInt(t) + parseInt(i.settings.spacing) + n(this).outerHeight()
            })
        }
    });
    n.notify = function (n, t) {
        var r = new i(this, n, t);
        return r.notify
    };
    n.notifyDefaults = function (i) {
        return t = n.extend(!0, {}, t, i)
    };
    n.notifyClose = function (t) {
        "undefined" == typeof t || "all" == t ? n("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : n('[data-notify-position="' + t + '"]').find('[data-notify="dismiss"]').trigger("click")
    }
});
!function (n) {
    "use strict";
    n.matchMedia = n.matchMedia || function (n) {
            var u, i = n.documentElement, f = i.firstElementChild || i.firstChild, r = n.createElement("body"),
                t = n.createElement("div");
            return t.id = "mq-test-1", t.style.cssText = "position:absolute;top:-100em", r.style.background = "none", r.appendChild(t), function (n) {
                return t.innerHTML = '&shy;<style media="' + n + '"> #mq-test-1 { width: 42px; }<\/style>', i.insertBefore(r, f), u = 42 === t.offsetWidth, i.removeChild(r), {
                    matches: u,
                    media: n
                }
            }
        }(n.document)
}(this), function (n) {
    "use strict";
    function p() {
        y(!0)
    }

    var t = {};
    n.respond = t;
    t.update = function () {
    };
    var f = [], tt = function () {
        var t = !1;
        try {
            t = new n.XMLHttpRequest
        } catch (i) {
            t = new n.ActiveXObject("Microsoft.XMLHTTP")
        }
        return function () {
            return t
        }
    }(), w = function (n, t) {
        var i = tt();
        i && (i.open("GET", n, !0), i.onreadystatechange = function () {
            4 !== i.readyState || 200 !== i.status && 304 !== i.status || t(i.responseText)
        }, 4 !== i.readyState && i.send(null))
    };
    if (t.ajax = w, t.queue = f, t.regex = {
            media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
            keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
            urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
            findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
            only: /(only\s+)?([a-zA-Z]+)\s?/,
            minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
            maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/
        }, t.mediaQueriesSupported = n.matchMedia && null !== n.matchMedia("only all") && n.matchMedia("only all").matches, !t.mediaQueriesSupported) {
        var c, b, l, i = n.document, r = i.documentElement, e = [], o = [], u = [], a = {}, k = 30,
            s = i.getElementsByTagName("head")[0] || r, it = i.getElementsByTagName("base")[0],
            h = s.getElementsByTagName("link"), v = function () {
                var u, t = i.createElement("div"), n = i.body, o = r.style.fontSize, e = n && n.style.fontSize, f = !1;
                return t.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = f = i.createElement("body"), n.style.background = "none"), r.style.fontSize = "100%", n.style.fontSize = "100%", n.appendChild(t), f && r.insertBefore(n, r.firstChild), u = t.offsetWidth, f ? r.removeChild(n) : n.removeChild(t), r.style.fontSize = o, e && (n.style.fontSize = e), u = l = parseFloat(u)
            }, y = function (t) {
                var rt = "clientWidth", ut = r[rt], ft = "CSS1Compat" === i.compatMode && ut || i.body[rt] || ut, p = {},
                    ct = h[h.length - 1], et = (new Date).getTime(), tt, g, nt, f, it;
                if (t && c && k > et - c)return n.clearTimeout(b), b = n.setTimeout(y, k), void 0;
                c = et;
                for (tt in e)if (e.hasOwnProperty(tt)) {
                    var a = e[tt], w = a.minw, d = a.maxw, ot = null === w, st = null === d, ht = "em";
                    w && (w = parseFloat(w) * (w.indexOf(ht) > -1 ? l || v() : 1));
                    d && (d = parseFloat(d) * (d.indexOf(ht) > -1 ? l || v() : 1));
                    a.hasquery && (ot && st || !(ot || ft >= w) || !(st || d >= ft)) || (p[a.media] || (p[a.media] = []), p[a.media].push(o[a.rules]))
                }
                for (g in u)u.hasOwnProperty(g) && u[g] && u[g].parentNode === s && s.removeChild(u[g]);
                u.length = 0;
                for (nt in p)p.hasOwnProperty(nt) && (f = i.createElement("style"), it = p[nt].join("\n"), f.type = "text/css", f.media = nt, s.insertBefore(f, ct.nextSibling), f.styleSheet ? f.styleSheet.cssText = it : f.appendChild(i.createTextNode(it)), u.push(f))
            }, d = function (n, i, r) {
                var h = n.replace(t.regex.keyframes, "").match(t.regex.media), c = h && h.length || 0, l, a, f, v, u, p, w,
                    s;
                for (i = i.substring(0, i.lastIndexOf("/")), l = function (n) {
                    return n.replace(t.regex.urls, "$1" + i + "$2$3")
                }, a = !c && r, i.length && (i += "/"), a && (c = 1), f = 0; c > f; f++)for (a ? (v = r, o.push(l(n))) : (v = h[f].match(t.regex.findStyles) && RegExp.$1, o.push(RegExp.$2 && l(RegExp.$2))), p = v.split(","), w = p.length, s = 0; w > s; s++)u = p[s], e.push({
                    media: u.split("(")[0].match(t.regex.only) && RegExp.$2 || "all",
                    rules: o.length - 1,
                    hasquery: u.indexOf("(") > -1,
                    minw: u.match(t.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw: u.match(t.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                });
                y()
            }, g = function () {
                if (f.length) {
                    var t = f.shift();
                    w(t.href, function (i) {
                        d(i, t.href, t.media);
                        a[t.href] = !0;
                        n.setTimeout(function () {
                            g()
                        }, 0)
                    })
                }
            }, nt = function () {
                for (var r = 0; r < h.length; r++) {
                    var i = h[r], t = i.href, u = i.media, e = i.rel && "stylesheet" === i.rel.toLowerCase();
                    t && e && !a[t] && (i.styleSheet && i.styleSheet.rawCssText ? (d(i.styleSheet.rawCssText, t, u), a[t] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(t) && !it || t.replace(RegExp.$1, "").split("/")[0] === n.location.host) && ("//" === t.substring(0, 2) && (t = n.location.protocol + t), f.push({
                            href: t,
                            media: u
                        })))
                }
                g()
            };
        nt();
        t.update = nt;
        t.getEmValue = v;
        n.addEventListener ? n.addEventListener("resize", p, !1) : n.attachEvent && n.attachEvent("onresize", p)
    }
}(this), function () {
    (function (n) {
        var r = this || eval("this"), t = r.document, f = r.navigator, i = r.jQuery, u = r.JSON;
        (function (n) {
            "function" == typeof define && define.amd ? define(["exports", "require"], n) : "object" == typeof exports && "object" == typeof module ? n(module.exports || exports) : n(r.ko = {})
        })(function (e, o) {
            function b(n, t) {
                return null === n || typeof n in nt ? n === t : !1
            }

            function tt(t, i) {
                var r;
                return function () {
                    r || (r = s.a.setTimeout(function () {
                        r = n;
                        t()
                    }, i))
                }
            }

            function it(n, t) {
                var i;
                return function () {
                    clearTimeout(i);
                    i = s.a.setTimeout(n, t)
                }
            }

            function rt(n, t) {
                t && t !== p ? "beforeChange" === t ? this.Kb(n) : this.Ha(n, t) : this.Lb(n)
            }

            function ut(n, t) {
                null !== t && t.k && t.k()
            }

            function ft(n, t) {
                var i = this.Hc, r = i[h];
                r.R || (this.lb && this.Ma[t] ? (i.Pb(t, n, this.Ma[t]), this.Ma[t] = null, --this.lb) : r.r[t] || i.Pb(t, n, r.s ? {ia: n} : i.uc(n)))
            }

            function k(n, t, i, r) {
                s.d[n] = {
                    init: function (n, u, f, e, o) {
                        var c, h;
                        return s.m(function () {
                            var l = s.a.c(u()), f = !i != !l, e = !h;
                            (e || t || f !== c) && (e && s.va.Aa() && (h = s.a.ua(s.f.childNodes(n), !0)), f ? (e || s.f.da(n, s.a.ua(h)), s.eb(r ? r(o, l) : o, n)) : s.f.xa(n), c = f)
                        }, null, {i: n}), {controlsDescendantBindings: !0}
                    }
                };
                s.h.ta[n] = !1;
                s.f.Z[n] = !0
            }

            var s = "undefined" != typeof e ? e : {}, nt, p, l, v, a, y, h, d, g, w;
            s.b = function (n, t) {
                for (var i = n.split("."), r = s, u = 0; u < i.length - 1; u++)r = r[i[u]];
                r[i[i.length - 1]] = t
            };
            s.G = function (n, t, i) {
                n[t] = i
            };
            s.version = "3.4.0";
            s.b("version", s.version);
            s.options = {deferUpdates: !1, useOnlyNativeEvents: !1};
            s.a = function () {
                function o(n, t) {
                    for (var i in n)n.hasOwnProperty(i) && t(i, n[i])
                }

                function l(n, t) {
                    if (t)for (var i in t)t.hasOwnProperty(i) && (n[i] = t[i]);
                    return n
                }

                function a(n, t) {
                    return n.__proto__ = t, n
                }

                function v(n, t, i, r) {
                    var u = n[t].match(c) || [];
                    s.a.q(i.match(c), function (n) {
                        s.a.pa(u, n, r)
                    });
                    n[t] = u.join(" ")
                }

                var y = {__proto__: []} instanceof Array, w = "function" == typeof Symbol, h = {}, p = {};
                h[f && /Firefox\/2/i.test(f.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                h.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                o(h, function (n, t) {
                    if (t.length)for (var i = 0, r = t.length; i < r; i++)p[t[i]] = n
                });
                var b = {propertychange: !0}, e = t && function () {
                        for (var i = 3, r = t.createElement("div"),
                                 u = r.getElementsByTagName("i"); r.innerHTML = "<!--[if gt IE " + ++i + "]><i><\/i><![endif]-->", u[0];);
                        return 4 < i ? i : n
                    }(), c = /\S+/g;
                return {
                    cc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/], q: function (n, t) {
                        for (var i = 0, r = n.length; i < r; i++)t(n[i], i)
                    }, o: function (n, t) {
                        if ("function" == typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(n, t);
                        for (var i = 0, r = n.length; i < r; i++)if (n[i] === t)return i;
                        return -1
                    }, Sb: function (n, t, i) {
                        for (var r = 0, u = n.length; r < u; r++)if (t.call(i, n[r], r))return n[r];
                        return null
                    }, La: function (n, t) {
                        var i = s.a.o(n, t);
                        0 < i ? n.splice(i, 1) : 0 === i && n.shift()
                    }, Tb: function (n) {
                        n = n || [];
                        for (var i = [], t = 0, r = n.length; t < r; t++)0 > s.a.o(i, n[t]) && i.push(n[t]);
                        return i
                    }, fb: function (n, t) {
                        n = n || [];
                        for (var r = [], i = 0, u = n.length; i < u; i++)r.push(t(n[i], i));
                        return r
                    }, Ka: function (n, t) {
                        n = n || [];
                        for (var r = [], i = 0, u = n.length; i < u; i++)t(n[i], i) && r.push(n[i]);
                        return r
                    }, ra: function (n, t) {
                        if (t instanceof Array) n.push.apply(n, t); else for (var i = 0,
                                                                                  r = t.length; i < r; i++)n.push(t[i]);
                        return n
                    }, pa: function (n, t, i) {
                        var r = s.a.o(s.a.zb(n), t);
                        0 > r ? i && n.push(t) : i || n.splice(r, 1)
                    }, ka: y, extend: l, Xa: a, Ya: y ? a : l, D: o, Ca: function (n, t) {
                        if (!n)return n;
                        var r = {};
                        for (var i in n)n.hasOwnProperty(i) && (r[i] = t(n[i], i, n));
                        return r
                    }, ob: function (n) {
                        for (; n.firstChild;)s.removeNode(n.firstChild)
                    }, jc: function (n) {
                        n = s.a.V(n);
                        for (var r = (n[0] && n[0].ownerDocument || t).createElement("div"), i = 0,
                                 u = n.length; i < u; i++)r.appendChild(s.$(n[i]));
                        return r
                    }, ua: function (n, t) {
                        for (var r, i = 0, f = n.length,
                                 u = []; i < f; i++)r = n[i].cloneNode(!0), u.push(t ? s.$(r) : r);
                        return u
                    }, da: function (n, t) {
                        if (s.a.ob(n), t)for (var i = 0, r = t.length; i < r; i++)n.appendChild(t[i])
                    }, qc: function (n, t) {
                        var r = n.nodeType ? [n] : n;
                        if (0 < r.length) {
                            for (var f = r[0], e = f.parentNode, i = 0,
                                     u = t.length; i < u; i++)e.insertBefore(t[i], f);
                            for (i = 0, u = r.length; i < u; i++)s.removeNode(r[i])
                        }
                    }, za: function (n, t) {
                        if (n.length) {
                            for (t = 8 === t.nodeType && t.parentNode || t; n.length && n[0].parentNode !== t;)n.splice(0, 1);
                            for (; 1 < n.length && n[n.length - 1].parentNode !== t;)n.length--;
                            if (1 < n.length) {
                                var i = n[0], r = n[n.length - 1];
                                for (n.length = 0; i !== r;)n.push(i), i = i.nextSibling;
                                n.push(r)
                            }
                        }
                        return n
                    }, sc: function (n, t) {
                        7 > e ? n.setAttribute("selected", t) : n.selected = t
                    }, $a: function (t) {
                        return null === t || t === n ? "" : t.trim ? t.trim() : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    }, nd: function (n, t) {
                        return n = n || "", t.length > n.length ? !1 : n.substring(0, t.length) === t
                    }, Mc: function (n, t) {
                        if (n === t)return !0;
                        if (11 === n.nodeType)return !1;
                        if (t.contains)return t.contains(3 === n.nodeType ? n.parentNode : n);
                        if (t.compareDocumentPosition)return 16 == (t.compareDocumentPosition(n) & 16);
                        for (; n && n != t;)n = n.parentNode;
                        return !!n
                    }, nb: function (n) {
                        return s.a.Mc(n, n.ownerDocument.documentElement)
                    }, Qb: function (n) {
                        return !!s.a.Sb(n, s.a.nb)
                    }, A: function (n) {
                        return n && n.tagName && n.tagName.toLowerCase()
                    }, Wb: function (n) {
                        return s.onError ? function () {
                            try {
                                return n.apply(this, arguments)
                            } catch (t) {
                                throw s.onError && s.onError(t), t;
                            }
                        } : n
                    }, setTimeout: function (n, t) {
                        return setTimeout(s.a.Wb(n), t)
                    }, $b: function (n) {
                        setTimeout(function () {
                            s.onError && s.onError(n);
                            throw n;
                        }, 0)
                    }, p: function (n, t, r) {
                        var u = s.a.Wb(r), f, o;
                        if (r = e && b[t], s.options.useOnlyNativeEvents || r || !i)if (r || "function" != typeof n.addEventListener)if ("undefined" != typeof n.attachEvent) f = function (t) {
                            u.call(n, t)
                        }, o = "on" + t, n.attachEvent(o, f), s.a.F.oa(n, function () {
                            n.detachEvent(o, f)
                        }); else throw Error("Browser doesn't support addEventListener or attachEvent"); else n.addEventListener(t, u, !1); else i(n).bind(t, u)
                    }, Da: function (n, u) {
                        if (!n || !n.nodeType)throw Error("element must be a DOM node when calling triggerEvent");
                        var f;
                        if ("input" === s.a.A(n) && n.type && "click" == u.toLowerCase() ? (f = n.type, f = "checkbox" == f || "radio" == f) : f = !1, s.options.useOnlyNativeEvents || !i || f)if ("function" == typeof t.createEvent)if ("function" == typeof n.dispatchEvent) f = t.createEvent(p[u] || "HTMLEvents"), f.initEvent(u, !0, !0, r, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, n), n.dispatchEvent(f); else throw Error("The supplied element doesn't support dispatchEvent"); else if (f && n.click) n.click(); else if ("undefined" != typeof n.fireEvent) n.fireEvent("on" + u); else throw Error("Browser doesn't support triggering events"); else i(n).trigger(u)
                    }, c: function (n) {
                        return s.H(n) ? n() : n
                    }, zb: function (n) {
                        return s.H(n) ? n.t() : n
                    }, bb: function (n, t, i) {
                        var r;
                        t && ("object" == typeof n.classList ? (r = n.classList[i ? "add" : "remove"], s.a.q(t.match(c), function (t) {
                            r.call(n.classList, t)
                        })) : "string" == typeof n.className.baseVal ? v(n.className, "baseVal", t, i) : v(n, "className", t, i))
                    }, Za: function (t, i) {
                        var r = s.a.c(i), u;
                        (null === r || r === n) && (r = "");
                        u = s.f.firstChild(t);
                        !u || 3 != u.nodeType || s.f.nextSibling(u) ? s.f.da(t, [t.ownerDocument.createTextNode(r)]) : u.data = r;
                        s.a.Rc(t)
                    }, rc: function (n, i) {
                        if (n.name = i, 7 >= e)try {
                            n.mergeAttributes(t.createElement("<input name='" + n.name + "'/>"), !1)
                        } catch (r) {
                        }
                    }, Rc: function (n) {
                        9 <= e && (n = 1 == n.nodeType ? n : n.parentNode, n.style && (n.style.zoom = n.style.zoom))
                    }, Nc: function (n) {
                        if (e) {
                            var t = n.style.width;
                            n.style.width = 0;
                            n.style.width = t
                        }
                    }, hd: function (n, t) {
                        n = s.a.c(n);
                        t = s.a.c(t);
                        for (var r = [], i = n; i <= t; i++)r.push(i);
                        return r
                    }, V: function (n) {
                        for (var i = [], t = 0, r = n.length; t < r; t++)i.push(n[t]);
                        return i
                    }, Yb: function (n) {
                        return w ? Symbol(n) : n
                    }, rd: 6 === e, sd: 7 === e, C: e, ec: function (n, t) {
                        for (var r = s.a.V(n.getElementsByTagName("input")).concat(s.a.V(n.getElementsByTagName("textarea"))),
                                 f = "string" == typeof t ? function (n) {
                                     return n.name === t
                                 } : function (n) {
                                     return t.test(n.name)
                                 }, u = [], i = r.length - 1; 0 <= i; i--)f(r[i]) && u.push(r[i]);
                        return u
                    }, ed: function (n) {
                        return "string" == typeof n && (n = s.a.$a(n)) ? u && u.parse ? u.parse(n) : new Function("return " + n)() : null
                    }, Eb: function (n, t, i) {
                        if (!u || !u.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return u.stringify(s.a.c(n), t, i)
                    }, fd: function (n, i, r) {
                        var v, e, h, f, u, c;
                        r = r || {};
                        var l = r.params || {}, a = r.includeFields || this.cc, v = n;
                        if ("object" == typeof n && "form" === s.a.A(n))for (v = n.action, e = a.length - 1; 0 <= e; e--)for (h = s.a.ec(n, a[e]), f = h.length - 1; 0 <= f; f--)l[h[f].name] = h[f].value;
                        i = s.a.c(i);
                        u = t.createElement("form");
                        u.style.display = "none";
                        u.action = v;
                        u.method = "post";
                        for (c in i)n = t.createElement("input"), n.type = "hidden", n.name = c, n.value = s.a.Eb(s.a.c(i[c])), u.appendChild(n);
                        o(l, function (n, i) {
                            var r = t.createElement("input");
                            r.type = "hidden";
                            r.name = n;
                            r.value = i;
                            u.appendChild(r)
                        });
                        t.body.appendChild(u);
                        r.submitter ? r.submitter(u) : u.submit();
                        setTimeout(function () {
                            u.parentNode.removeChild(u)
                        }, 0)
                    }
                }
            }();
            s.b("utils", s.a);
            s.b("utils.arrayForEach", s.a.q);
            s.b("utils.arrayFirst", s.a.Sb);
            s.b("utils.arrayFilter", s.a.Ka);
            s.b("utils.arrayGetDistinctValues", s.a.Tb);
            s.b("utils.arrayIndexOf", s.a.o);
            s.b("utils.arrayMap", s.a.fb);
            s.b("utils.arrayPushAll", s.a.ra);
            s.b("utils.arrayRemoveItem", s.a.La);
            s.b("utils.extend", s.a.extend);
            s.b("utils.fieldsIncludedWithJsonPost", s.a.cc);
            s.b("utils.getFormFields", s.a.ec);
            s.b("utils.peekObservable", s.a.zb);
            s.b("utils.postJson", s.a.fd);
            s.b("utils.parseJson", s.a.ed);
            s.b("utils.registerEventHandler", s.a.p);
            s.b("utils.stringifyJson", s.a.Eb);
            s.b("utils.range", s.a.hd);
            s.b("utils.toggleDomNodeCssClass", s.a.bb);
            s.b("utils.triggerEvent", s.a.Da);
            s.b("utils.unwrapObservable", s.a.c);
            s.b("utils.objectForEach", s.a.D);
            s.b("utils.addOrRemoveItem", s.a.pa);
            s.b("utils.setTextContent", s.a.Za);
            s.b("unwrap", s.a.c);
            Function.prototype.bind || (Function.prototype.bind = function (n) {
                var t = this, i;
                return 1 === arguments.length ? function () {
                    return t.apply(n, arguments)
                } : (i = Array.prototype.slice.call(arguments, 1), function () {
                    var r = i.slice(0);
                    return r.push.apply(r, arguments), t.apply(n, r)
                })
            });
            s.a.e = new function () {
                function r(r, f) {
                    var e = r[t];
                    if (!e || "null" === e || !i[e]) {
                        if (!f)return n;
                        e = r[t] = "ko" + u++;
                        i[e] = {}
                    }
                    return i[e]
                }

                var u = 0, t = "__ko__" + (new Date).getTime(), i = {};
                return {
                    get: function (t, i) {
                        var u = r(t, !1);
                        return u === n ? n : u[i]
                    }, set: function (t, i, u) {
                        (u !== n || r(t, !1) !== n) && (r(t, !0)[i] = u)
                    }, clear: function (n) {
                        var r = n[t];
                        return r ? (delete i[r], n[t] = null, !0) : !1
                    }, I: function () {
                        return u++ + t
                    }
                }
            };
            s.b("utils.domData", s.a.e);
            s.b("utils.domData.clear", s.a.e.clear);
            s.a.F = new function () {
                function t(t, i) {
                    var r = s.a.e.get(t, u);
                    return r === n && i && (r = [], s.a.e.set(t, u, r)), r
                }

                function r(n) {
                    var i = t(n, !1), u;
                    if (i)for (i = i.slice(0), u = 0; u < i.length; u++)i[u](n);
                    if (s.a.e.clear(n), s.a.F.cleanExternalData(n), f[n.nodeType])for (i = n.firstChild; n = i;)i = n.nextSibling, 8 === n.nodeType && r(n)
                }

                var u = s.a.e.I(), e = {1: !0, 8: !0, 9: !0}, f = {1: !0, 9: !0};
                return {
                    oa: function (n, i) {
                        if ("function" != typeof i)throw Error("Callback must be a function");
                        t(n, !0).push(i)
                    }, pc: function (i, r) {
                        var f = t(i, !1);
                        f && (s.a.La(f, r), 0 == f.length && s.a.e.set(i, u, n))
                    }, $: function (n) {
                        var t, i, u;
                        if (e[n.nodeType] && (r(n), f[n.nodeType]))for (t = [], s.a.ra(t, n.getElementsByTagName("*")), i = 0, u = t.length; i < u; i++)r(t[i]);
                        return n
                    }, removeNode: function (n) {
                        s.$(n);
                        n.parentNode && n.parentNode.removeChild(n)
                    }, cleanExternalData: function (n) {
                        i && "function" == typeof i.cleanData && i.cleanData([n])
                    }
                }
            };
            s.$ = s.a.F.$;
            s.removeNode = s.a.F.removeNode;
            s.b("cleanNode", s.$);
            s.b("removeNode", s.removeNode);
            s.b("utils.domNodeDisposal", s.a.F);
            s.b("utils.domNodeDisposal.addDisposeCallback", s.a.F.oa);
            s.b("utils.domNodeDisposal.removeDisposeCallback", s.a.F.pc), function () {
                var h = [0, "", ""], u = [1, "<table>", "<\/table>"],
                    f = [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                    e = [1, "<select multiple='multiple'>", "<\/select>"], c = {
                        thead: u,
                        tbody: u,
                        tfoot: u,
                        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                        td: f,
                        th: f,
                        option: e,
                        optgroup: e
                    }, o = 8 >= s.a.C;
                s.a.ma = function (n, u) {
                    var f, e;
                    if (i) {
                        if (i.parseHTML) f = i.parseHTML(n, u) || []; else if ((f = i.clean([n], u)) && f[0]) {
                            for (e = f[0]; e.parentNode && 11 !== e.parentNode.nodeType;)e = e.parentNode;
                            e.parentNode && e.parentNode.removeChild(e)
                        }
                    } else {
                        (f = u) || (f = t);
                        var e = f.parentWindow || f.defaultView || r, v = s.a.$a(n).toLowerCase(),
                            l = f.createElement("div"), a;
                        for (a = (v = v.match(/^<([a-z]+)[ >]/)) && c[v[1]] || h, v = a[0], a = "ignored<div>" + a[1] + n + a[2] + "<\/div>", "function" == typeof e.innerShiv ? l.appendChild(e.innerShiv(a)) : (o && f.appendChild(l), l.innerHTML = a, o && l.parentNode.removeChild(l)); v--;)l = l.lastChild;
                        f = s.a.V(l.lastChild.childNodes)
                    }
                    return f
                };
                s.a.Cb = function (t, r) {
                    if (s.a.ob(t), r = s.a.c(r), null !== r && r !== n)if ("string" != typeof r && (r = r.toString()), i) i(t).html(r); else for (var f = s.a.ma(r, t.ownerDocument),
                                                                                                                                                      u = 0; u < f.length; u++)t.appendChild(f[u])
                }
            }();
            s.b("utils.parseHtmlFragment", s.a.ma);
            s.b("utils.setHtml", s.a.Cb);
            s.M = function () {
                function i(n, t) {
                    var r;
                    if (n)if (8 == n.nodeType) r = s.M.lc(n.nodeValue), null != r && t.push({
                        Lc: n,
                        cd: r
                    }); else if (1 == n.nodeType)for (var r = 0, u = n.childNodes, f = u.length; r < f; r++)i(u[r], t)
                }

                var t = {};
                return {
                    wb: function (n) {
                        if ("function" != typeof n)throw Error("You can only pass a function to ko.memoization.memoize()");
                        var i = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        return t[i] = n, "<!--[ko_memo:" + i + "]-->"
                    }, xc: function (i, r) {
                        var u = t[i];
                        if (u === n)throw Error("Couldn't find any memo with ID " + i + ". Perhaps it's already been unmemoized.");
                        try {
                            return u.apply(null, r || []), !0
                        } finally {
                            delete t[i]
                        }
                    }, yc: function (n, t) {
                        var f = [], u, o, r, e;
                        for (i(n, f), u = 0, o = f.length; u < o; u++)r = f[u].Lc, e = [r], t && s.a.ra(e, t), s.M.xc(f[u].cd, e), r.nodeValue = "", r.parentNode && r.parentNode.removeChild(r)
                    }, lc: function (n) {
                        return (n = n.match(/^\[ko_memo\:(.*?)\]$/)) ? n[1] : null
                    }
                }
            }();
            s.b("memoization", s.M);
            s.b("memoization.memoize", s.M.wb);
            s.b("memoization.unmemoize", s.M.xc);
            s.b("memoization.parseMemoText", s.M.lc);
            s.b("memoization.unmemoizeDomNodeAndDescendants", s.M.yc);
            s.Y = function () {
                function f() {
                    if (n)for (var t = n, r = 0, f; i < n;)if (f = u[i++]) {
                        if (i > t) {
                            if (5e3 <= ++r) {
                                i = n;
                                s.a.$b(Error("'Too much recursion' after processing " + r + " task groups."));
                                break
                            }
                            t = n
                        }
                        try {
                            f()
                        } catch (e) {
                            s.a.$b(e)
                        }
                    }
                }

                function e() {
                    f();
                    i = n = u.length = 0
                }

                var u = [], n = 0, o = 1, i = 0;
                return {
                    scheduler: r.MutationObserver ? function (n) {
                        var i = t.createElement("div");
                        return new MutationObserver(n).observe(i, {attributes: !0}), function () {
                            i.classList.toggle("foo")
                        }
                    }(e) : t && "onreadystatechange" in t.createElement("script") ? function (n) {
                        var i = t.createElement("script");
                        i.onreadystatechange = function () {
                            i.onreadystatechange = null;
                            t.documentElement.removeChild(i);
                            i = null;
                            n()
                        };
                        t.documentElement.appendChild(i)
                    } : function (n) {
                        setTimeout(n, 0)
                    }, Wa: function (t) {
                        return n || s.Y.scheduler(e), u[n++] = t, o++
                    }, cancel: function (t) {
                        t -= o - n;
                        t >= i && t < n && (u[t] = null)
                    }, resetForTesting: function () {
                        var t = n - i;
                        return i = n = u.length = 0, t
                    }, md: f
                }
            }();
            s.b("tasks", s.Y);
            s.b("tasks.schedule", s.Y.Wa);
            s.b("tasks.runEarly", s.Y.md);
            s.ya = {
                throttle: function (n, t) {
                    n.throttleEvaluation = t;
                    var i = null;
                    return s.B({
                        read: n, write: function (r) {
                            clearTimeout(i);
                            i = s.a.setTimeout(function () {
                                n(r)
                            }, t)
                        }
                    })
                }, rateLimit: function (n, t) {
                    var i, r, u;
                    "number" == typeof t ? i = t : (i = t.timeout, r = t.method);
                    n.cb = !1;
                    u = "notifyWhenChangesStop" == r ? it : tt;
                    n.Ta(function (n) {
                        return u(n, i)
                    })
                }, deferred: function (t, i) {
                    if (!0 !== i)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                    t.cb || (t.cb = !0, t.Ta(function (i) {
                        var r;
                        return function () {
                            s.Y.cancel(r);
                            r = s.Y.Wa(i);
                            t.notifySubscribers(n, "dirty")
                        }
                    }))
                }, notify: function (n, t) {
                    n.equalityComparer = "always" == t ? null : b
                }
            };
            nt = {undefined: 1, boolean: 1, number: 1, string: 1};
            s.b("extenders", s.ya);
            s.vc = function (n, t, i) {
                this.ia = n;
                this.gb = t;
                this.Kc = i;
                this.R = !1;
                s.G(this, "dispose", this.k)
            };
            s.vc.prototype.k = function () {
                this.R = !0;
                this.Kc()
            };
            s.J = function () {
                s.a.Ya(this, l);
                l.rb(this)
            };
            p = "change";
            l = {
                rb: function (n) {
                    n.K = {};
                    n.Nb = 1
                }, X: function (n, t, i) {
                    var r = this, u;
                    return i = i || p, u = new s.vc(r, t ? n.bind(t) : n, function () {
                        s.a.La(r.K[i], u);
                        r.Ia && r.Ia(i)
                    }), r.sa && r.sa(i), r.K[i] || (r.K[i] = []), r.K[i].push(u), u
                }, notifySubscribers: function (n, t) {
                    if (t = t || p, t === p && this.zc(), this.Pa(t))try {
                        s.l.Ub();
                        for (var u = this.K[t].slice(0), r = 0, i; i = u[r]; ++r)i.R || i.gb(n)
                    } finally {
                        s.l.end()
                    }
                }, Na: function () {
                    return this.Nb
                }, Uc: function (n) {
                    return this.Na() !== n
                }, zc: function () {
                    ++this.Nb
                }, Ta: function (n) {
                    var t = this, e = s.H(t), r, u, i, f;
                    t.Ha || (t.Ha = t.notifySubscribers, t.notifySubscribers = rt);
                    f = n(function () {
                        t.Mb = !1;
                        e && i === t && (i = t());
                        r = !1;
                        t.tb(u, i) && t.Ha(u = i)
                    });
                    t.Lb = function (n) {
                        t.Mb = r = !0;
                        i = n;
                        f()
                    };
                    t.Kb = function (n) {
                        r || (u = n, t.Ha(n, "beforeChange"))
                    }
                }, Pa: function (n) {
                    return this.K[n] && this.K[n].length
                }, Sc: function (n) {
                    if (n)return this.K[n] && this.K[n].length || 0;
                    var t = 0;
                    return s.a.D(this.K, function (n, i) {
                        "dirty" !== n && (t += i.length)
                    }), t
                }, tb: function (n, t) {
                    return !this.equalityComparer || !this.equalityComparer(n, t)
                }, extend: function (n) {
                    var t = this;
                    return n && s.a.D(n, function (n, i) {
                        var r = s.ya[n];
                        "function" == typeof r && (t = r(t, i) || t)
                    }), t
                }
            };
            s.G(l, "subscribe", l.X);
            s.G(l, "extend", l.extend);
            s.G(l, "getSubscriptionsCount", l.Sc);
            s.a.ka && s.a.Xa(l, Function.prototype);
            s.J.fn = l;
            s.hc = function (n) {
                return null != n && "function" == typeof n.X && "function" == typeof n.notifySubscribers
            };
            s.b("subscribable", s.J);
            s.b("isSubscribable", s.hc);
            s.va = s.l = function () {
                function t(t) {
                    r.push(n);
                    n = t
                }

                function i() {
                    n = r.pop()
                }

                var r = [], n, u = 0;
                return {
                    Ub: t, end: i, oc: function (t) {
                        if (n) {
                            if (!s.hc(t))throw Error("Only subscribable things can act as dependencies");
                            n.gb.call(n.Gc, t, t.Cc || (t.Cc = ++u))
                        }
                    }, w: function (n, r, u) {
                        try {
                            return t(), n.apply(r, u || [])
                        } finally {
                            i()
                        }
                    }, Aa: function () {
                        if (n)return n.m.Aa()
                    }, Sa: function () {
                        if (n)return n.Sa
                    }
                }
            }();
            s.b("computedContext", s.va);
            s.b("computedContext.getDependenciesCount", s.va.Aa);
            s.b("computedContext.isInitial", s.va.Sa);
            s.b("ignoreDependencies", s.qd = s.l.w);
            v = s.a.Yb("_latestValue");
            s.N = function (n) {
                function t() {
                    return 0 < arguments.length ? (t.tb(t[v], arguments[0]) && (t.ga(), t[v] = arguments[0], t.fa()), this) : (s.l.oc(t), t[v])
                }

                return t[v] = n, s.a.ka || s.a.extend(t, s.J.fn), s.J.fn.rb(t), s.a.Ya(t, a), s.options.deferUpdates && s.ya.deferred(t, !0), t
            };
            a = {
                equalityComparer: b, t: function () {
                    return this[v]
                }, fa: function () {
                    this.notifySubscribers(this[v])
                }, ga: function () {
                    this.notifySubscribers(this[v], "beforeChange")
                }
            };
            s.a.ka && s.a.Xa(a, s.J.fn);
            y = s.N.gd = "__ko_proto__";
            a[y] = s.N;
            s.Oa = function (t, i) {
                return null === t || t === n || t[y] === n ? !1 : t[y] === i ? !0 : s.Oa(t[y], i)
            };
            s.H = function (n) {
                return s.Oa(n, s.N)
            };
            s.Ba = function (n) {
                return "function" == typeof n && n[y] === s.N || "function" == typeof n && n[y] === s.B && n.Vc ? !0 : !1
            };
            s.b("observable", s.N);
            s.b("isObservable", s.H);
            s.b("isWriteableObservable", s.Ba);
            s.b("isWritableObservable", s.Ba);
            s.b("observable.fn", a);
            s.G(a, "peek", a.t);
            s.G(a, "valueHasMutated", a.fa);
            s.G(a, "valueWillMutate", a.ga);
            s.la = function (n) {
                if (n = n || [], "object" != typeof n || !("length" in n))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                return n = s.N(n), s.a.Ya(n, s.la.fn), n.extend({trackArrayChanges: !0})
            };
            s.la.fn = {
                remove: function (n) {
                    for (var u, r = this.t(), i = [], f = "function" != typeof n || s.H(n) ? function (t) {
                            return t === n
                        } : n,
                             t = 0; t < r.length; t++)u = r[t], f(u) && (0 === i.length && this.ga(), i.push(u), r.splice(t, 1), t--);
                    return i.length && this.fa(), i
                }, removeAll: function (t) {
                    if (t === n) {
                        var i = this.t(), r = i.slice(0);
                        return this.ga(), i.splice(0, i.length), this.fa(), r
                    }
                    return t ? this.remove(function (n) {
                        return 0 <= s.a.o(t, n)
                    }) : []
                }, destroy: function (n) {
                    var i = this.t(), r = "function" != typeof n || s.H(n) ? function (t) {
                        return t === n
                    } : n, t;
                    for (this.ga(), t = i.length - 1; 0 <= t; t--)r(i[t]) && (i[t]._destroy = !0);
                    this.fa()
                }, destroyAll: function (t) {
                    return t === n ? this.destroy(function () {
                        return !0
                    }) : t ? this.destroy(function (n) {
                        return 0 <= s.a.o(t, n)
                    }) : []
                }, indexOf: function (n) {
                    var t = this();
                    return s.a.o(t, n)
                }, replace: function (n, t) {
                    var i = this.indexOf(n);
                    0 <= i && (this.ga(), this.t()[i] = t, this.fa())
                }
            };
            s.a.ka && s.a.Xa(s.la.fn, s.N.fn);
            s.a.q("pop push reverse shift sort splice unshift".split(" "), function (n) {
                s.la.fn[n] = function () {
                    var t = this.t(), i;
                    return this.ga(), this.Vb(t, n, arguments), i = t[n].apply(t, arguments), this.fa(), i === t ? this : i
                }
            });
            s.a.q(["slice"], function (n) {
                s.la.fn[n] = function () {
                    var t = this();
                    return t[n].apply(t, arguments)
                }
            });
            s.b("observableArray", s.la);
            s.ya.trackArrayChanges = function (n, t) {
                function h() {
                    var e, t;
                    r || (r = !0, e = n.notifySubscribers, n.notifySubscribers = function (n, t) {
                        return t && t !== p || ++u, e.apply(this, arguments)
                    }, t = [].concat(n.t() || []), i = null, f = n.X(function (r) {
                        if (r = [].concat(r || []), n.Pa("arrayChange")) {
                            var f;
                            (!i || 1 < u) && (i = s.a.ib(t, r, n.hb));
                            f = i
                        }
                        t = r;
                        i = null;
                        u = 0;
                        f && f.length && n.notifySubscribers(f, "arrayChange")
                    }))
                }

                if (n.hb = {}, t && "object" == typeof t && s.a.extend(n.hb, t), n.hb.sparse = !0, !n.Vb) {
                    var r = !1, i = null, f, u = 0, e = n.sa, o = n.Ia;
                    n.sa = function (t) {
                        e && e.call(n, t);
                        "arrayChange" === t && h()
                    };
                    n.Ia = function (t) {
                        o && o.call(n, t);
                        "arrayChange" !== t || n.Pa("arrayChange") || (f.k(), r = !1)
                    };
                    n.Vb = function (n, t, f) {
                        function c(n, t, i) {
                            return l[l.length] = {status: n, value: t, index: i}
                        }

                        if (r && !u) {
                            var l = [], e = n.length, h = f.length, o = 0;
                            switch (t) {
                                case"push":
                                    o = e;
                                case"unshift":
                                    for (t = 0; t < h; t++)c("added", f[t], o + t);
                                    break;
                                case"pop":
                                    o = e - 1;
                                case"shift":
                                    e && c("deleted", n[o], o);
                                    break;
                                case"splice":
                                    t = Math.min(Math.max(0, 0 > f[0] ? e + f[0] : f[0]), e);
                                    for (var e = 1 === h ? e : Math.min(t + (f[1] || 0), e), h = t + h - 2,
                                             o = Math.max(e, h), a = [], v = [],
                                             y = 2; t < o; ++t, ++y)t < e && v.push(c("deleted", n[t], t)), t < h && a.push(c("added", f[y], t));
                                    s.a.dc(v, a);
                                    break;
                                default:
                                    return
                            }
                            i = l
                        }
                    }
                }
            };
            h = s.a.Yb("_state");
            s.m = s.B = function (t, i, r) {
                function u() {
                    if (0 < arguments.length) {
                        if ("function" == typeof e) e.apply(f.pb, arguments); else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this
                    }
                    return s.l.oc(u), (f.S || f.s && u.Qa()) && u.aa(), f.T
                }

                if ("object" == typeof t ? r = t : (r = r || {}, t && (r.read = t)), "function" != typeof r.read)throw Error("Pass a function that returns the value of the ko.computed");
                var e = r.write, f = {
                    T: n,
                    S: !0,
                    Ra: !1,
                    Fb: !1,
                    R: !1,
                    Va: !1,
                    s: !1,
                    jd: r.read,
                    pb: i || r.owner,
                    i: r.disposeWhenNodeIsRemoved || r.i || null,
                    wa: r.disposeWhen || r.wa,
                    mb: null,
                    r: {},
                    L: 0,
                    bc: null
                };
                return u[h] = f, u.Vc = "function" == typeof e, s.a.ka || s.a.extend(u, s.J.fn), s.J.fn.rb(u), s.a.Ya(u, c), r.pure ? (f.Va = !0, f.s = !0, s.a.extend(u, et)) : r.deferEvaluation && s.a.extend(u, ot), s.options.deferUpdates && s.ya.deferred(u, !0), f.i && (f.Fb = !0, f.i.nodeType || (f.i = null)), f.s || r.deferEvaluation || u.aa(), f.i && u.ba() && s.a.F.oa(f.i, f.mb = function () {
                    u.k()
                }), u
            };
            var c = {
                equalityComparer: b, Aa: function () {
                    return this[h].L
                }, Pb: function (n, t, i) {
                    if (this[h].Va && t === this)throw Error("A 'pure' computed must not be called recursively");
                    this[h].r[n] = i;
                    i.Ga = this[h].L++;
                    i.na = t.Na()
                }, Qa: function () {
                    var n, t, i = this[h].r;
                    for (n in i)if (i.hasOwnProperty(n) && (t = i[n], t.ia.Uc(t.na)))return !0
                }, bd: function () {
                    this.Fa && !this[h].Ra && this.Fa()
                }, ba: function () {
                    return this[h].S || 0 < this[h].L
                }, ld: function () {
                    this.Mb || this.ac()
                }, uc: function (n) {
                    if (n.cb && !this[h].i) {
                        var t = n.X(this.bd, this, "dirty"), i = n.X(this.ld, this);
                        return {
                            ia: n, k: function () {
                                t.k();
                                i.k()
                            }
                        }
                    }
                    return n.X(this.ac, this)
                }, ac: function () {
                    var n = this, t = n.throttleEvaluation;
                    t && 0 <= t ? (clearTimeout(this[h].bc), this[h].bc = s.a.setTimeout(function () {
                        n.aa(!0)
                    }, t)) : n.Fa ? n.Fa() : n.aa(!0)
                }, aa: function (n) {
                    var t = this[h], i = t.wa;
                    if (!t.Ra && !t.R) {
                        if (t.i && !s.a.nb(t.i) || i && i()) {
                            if (!t.Fb) {
                                this.k();
                                return
                            }
                        } else t.Fb = !1;
                        t.Ra = !0;
                        try {
                            this.Qc(n)
                        } finally {
                            t.Ra = !1
                        }
                        t.L || this.k()
                    }
                }, Qc: function (t) {
                    var i = this[h], u = i.Va ? n : !i.L, r = {Hc: this, Ma: i.r, lb: i.L};
                    s.l.Ub({Gc: r, gb: ft, m: this, Sa: u});
                    i.r = {};
                    i.L = 0;
                    r = this.Pc(i, r);
                    this.tb(i.T, r) && (i.s || this.notifySubscribers(i.T, "beforeChange"), i.T = r, i.s ? this.zc() : t && this.notifySubscribers(i.T));
                    u && this.notifySubscribers(i.T, "awake")
                }, Pc: function (n, t) {
                    try {
                        var i = n.jd;
                        return n.pb ? i.call(n.pb) : i()
                    } finally {
                        s.l.end();
                        t.lb && !n.s && s.a.D(t.Ma, ut);
                        n.S = !1
                    }
                }, t: function () {
                    var n = this[h];
                    return (n.S && !n.L || n.s && this.Qa()) && this.aa(), n.T
                }, Ta: function (n) {
                    s.J.fn.Ta.call(this, n);
                    this.Fa = function () {
                        this.Kb(this[h].T);
                        this[h].S = !0;
                        this.Lb(this)
                    }
                }, k: function () {
                    var n = this[h];
                    !n.s && n.r && s.a.D(n.r, function (n, t) {
                        t.k && t.k()
                    });
                    n.i && n.mb && s.a.F.pc(n.i, n.mb);
                    n.r = null;
                    n.L = 0;
                    n.R = !0;
                    n.S = !1;
                    n.s = !1;
                    n.i = null
                }
            }, et = {
                sa: function (n) {
                    var i = this, t = i[h], r;
                    !t.R && t.s && "change" == n && (t.s = !1, t.S || i.Qa() ? (t.r = null, t.L = 0, t.S = !0, i.aa()) : (r = [], s.a.D(t.r, function (n, t) {
                        r[t.Ga] = n
                    }), s.a.q(r, function (n, r) {
                        var f = t.r[n], u = i.uc(f.ia);
                        u.Ga = r;
                        u.na = f.na;
                        t.r[n] = u
                    })), t.R || i.notifySubscribers(t.T, "awake"))
                }, Ia: function (t) {
                    var i = this[h];
                    i.R || "change" != t || this.Pa("change") || (s.a.D(i.r, function (n, t) {
                        t.k && (i.r[n] = {ia: t.ia, Ga: t.Ga, na: t.na}, t.k())
                    }), i.s = !0, this.notifySubscribers(n, "asleep"))
                }, Na: function () {
                    var n = this[h];
                    return n.s && (n.S || this.Qa()) && this.aa(), s.J.fn.Na.call(this)
                }
            }, ot = {
                sa: function (n) {
                    "change" != n && "beforeChange" != n || this.t()
                }
            };
            s.a.ka && s.a.Xa(c, s.J.fn);
            d = s.N.gd;
            s.m[d] = s.N;
            c[d] = s.m;
            s.Xc = function (n) {
                return s.Oa(n, s.m)
            };
            s.Yc = function (n) {
                return s.Oa(n, s.m) && n[h] && n[h].Va
            };
            s.b("computed", s.m);
            s.b("dependentObservable", s.m);
            s.b("isComputed", s.Xc);
            s.b("isPureComputed", s.Yc);
            s.b("computed.fn", c);
            s.G(c, "peek", c.t);
            s.G(c, "dispose", c.k);
            s.G(c, "isActive", c.ba);
            s.G(c, "getDependenciesCount", c.Aa);
            s.nc = function (n, t) {
                return "function" == typeof n ? s.m(n, t, {pure: !0}) : (n = s.a.extend({}, n), n.pure = !0, s.m(n, t))
            };
            s.b("pureComputed", s.nc), function () {
                function t(u, f, e) {
                    if (e = e || new i, u = f(u), "object" != typeof u || null === u || u === n || u instanceof RegExp || u instanceof Date || u instanceof String || u instanceof Number || u instanceof Boolean)return u;
                    var o = u instanceof Array ? [] : {};
                    return e.save(u, o), r(u, function (i) {
                        var r = f(u[i]), s;
                        switch (typeof r) {
                            case"boolean":
                            case"number":
                            case"string":
                            case"function":
                                o[i] = r;
                                break;
                            case"object":
                            case"undefined":
                                s = e.get(r);
                                o[i] = s !== n ? s : t(r, f, e)
                        }
                    }), o
                }

                function r(n, t) {
                    if (n instanceof Array) {
                        for (var i = 0; i < n.length; i++)t(i);
                        "function" == typeof n.toJSON && t("toJSON")
                    } else for (i in n)t(i)
                }

                function i() {
                    this.keys = [];
                    this.Ib = []
                }

                s.wc = function (n) {
                    if (0 == arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");
                    return t(n, function (n) {
                        for (var t = 0; s.H(n) && 10 > t; t++)n = n();
                        return n
                    })
                };
                s.toJSON = function (n, t, i) {
                    return n = s.wc(n), s.a.Eb(n, t, i)
                };
                i.prototype = {
                    save: function (n, t) {
                        var i = s.a.o(this.keys, n);
                        0 <= i ? this.Ib[i] = t : (this.keys.push(n), this.Ib.push(t))
                    }, get: function (t) {
                        return t = s.a.o(this.keys, t), 0 <= t ? this.Ib[t] : n
                    }
                }
            }();
            s.b("toJS", s.wc);
            s.b("toJSON", s.toJSON), function () {
                s.j = {
                    u: function (t) {
                        switch (s.a.A(t)) {
                            case"option":
                                return !0 === t.__ko__hasDomDataOptionValue__ ? s.a.e.get(t, s.d.options.xb) : 7 >= s.a.C ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;
                            case"select":
                                return 0 <= t.selectedIndex ? s.j.u(t.options[t.selectedIndex]) : n;
                            default:
                                return t.value
                        }
                    }, ha: function (t, i, r) {
                        switch (s.a.A(t)) {
                            case"option":
                                switch (typeof i) {
                                    case"string":
                                        s.a.e.set(t, s.d.options.xb, n);
                                        "__ko__hasDomDataOptionValue__" in t && delete t.__ko__hasDomDataOptionValue__;
                                        t.value = i;
                                        break;
                                    default:
                                        s.a.e.set(t, s.d.options.xb, i);
                                        t.__ko__hasDomDataOptionValue__ = !0;
                                        t.value = "number" == typeof i ? i : ""
                                }
                                break;
                            case"select":
                                ("" === i || null === i) && (i = n);
                                for (var f = -1, u = 0, o = t.options.length,
                                         e; u < o; ++u)if (e = s.j.u(t.options[u]), e == i || "" == e && i === n) {
                                    f = u;
                                    break
                                }
                                (r || 0 <= f || i === n && 1 < t.size) && (t.selectedIndex = f);
                                break;
                            default:
                                (null === i || i === n) && (i = "");
                                t.value = i
                        }
                    }
                }
            }();
            s.b("selectExtensions", s.j);
            s.b("selectExtensions.readValue", s.j.u);
            s.b("selectExtensions.writeValue", s.j.ha);
            s.h = function () {
                function n(n) {
                    var c, u, i;
                    n = s.a.$a(n);
                    123 === n.charCodeAt(0) && (n = n.slice(1, -1));
                    var a = [], h = n.match(t), o, r = [], l = 0;
                    if (h)for (h.push(","), c = 0; u = h[c]; ++c) {
                        if (i = u.charCodeAt(0), 44 === i) {
                            if (0 >= l) {
                                a.push(o && r.length ? {key: o, value: r.join("")} : {unknown: o || r.join("")});
                                o = l = 0;
                                r = [];
                                continue
                            }
                        } else if (58 === i) {
                            if (!l && !o && 1 === r.length) {
                                o = r.pop();
                                continue
                            }
                        } else 47 === i && c && 1 < u.length ? (i = h[c - 1].match(f)) && !e[i[0]] && (n = n.substr(n.indexOf(u) + 1), h = n.match(t), h.push(","), c = -1, u = "/") : 40 === i || 123 === i || 91 === i ? ++l : 41 === i || 125 === i || 93 === i ? --l : o || r.length || 34 !== i && 39 !== i || (u = u.slice(1, -1));
                        r.push(u)
                    }
                    return a
                }

                var r = ["true", "false", "null", "undefined"],
                    u = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                    t = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
                    f = /[\])"'A-Za-z0-9_$]+$/, e = {"in": 1, "return": 1, "typeof": 1}, i = {};
                return {
                    ta: [], ea: i, yb: n, Ua: function (t, f) {
                        function e(n, t) {
                            var a, f;
                            if (!l) {
                                if (f = s.getBindingHandler(n), f && f.preprocess && !(t = f.preprocess(t, n, e)))return;
                                (f = i[n]) && (a = t, 0 <= s.a.o(r, a) ? a = !1 : (f = a.match(u), a = null === f ? !1 : f[1] ? "Object(" + f[1] + ")" + f[2] : a), f = a);
                                f && o.push("'" + n + "':function(_z){" + a + "=_z}")
                            }
                            c && (t = "function(){return " + t + " }");
                            h.push("'" + n + "':" + t)
                        }

                        f = f || {};
                        var h = [], o = [], c = f.valueAccessors, l = f.bindingParams,
                            a = "string" == typeof t ? n(t) : t;
                        return s.a.q(a, function (n) {
                            e(n.key || n.unknown, n.value)
                        }), o.length && e("_ko_property_writers", "{" + o.join(",") + " }"), h.join(",")
                    }, ad: function (n, t) {
                        for (var i = 0; i < n.length; i++)if (n[i].key == t)return !0;
                        return !1
                    }, Ea: function (n, t, i, r, u) {
                        n && s.H(n) ? !s.Ba(n) || u && n.t() === r || n(r) : (n = t.get("_ko_property_writers")) && n[i] && n[i](r)
                    }
                }
            }();
            s.b("expressionRewriting", s.h);
            s.b("expressionRewriting.bindingRewriteValidators", s.h.ta);
            s.b("expressionRewriting.parseObjectLiteral", s.h.yb);
            s.b("expressionRewriting.preProcessBindings", s.h.Ua);
            s.b("expressionRewriting._twoWayBindings", s.h.ea);
            s.b("jsonExpressionRewriting", s.h);
            s.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", s.h.Ua), function () {
                function n(n) {
                    return 8 == n.nodeType && e.test(i ? n.text : n.nodeValue)
                }

                function r(n) {
                    return 8 == n.nodeType && o.test(i ? n.text : n.nodeValue)
                }

                function u(t, i) {
                    for (var u = t, f = 1, e = []; u = u.nextSibling;) {
                        if (r(u) && (f--, 0 === f))return e;
                        e.push(u);
                        n(u) && f++
                    }
                    if (!i)throw Error("Cannot find closing comment tag to match: " + t.nodeValue);
                    return null
                }

                function f(n, t) {
                    var i = u(n, t);
                    return i ? 0 < i.length ? i[i.length - 1].nextSibling : n.nextSibling : null
                }

                var i = t && "<!--test-->" === t.createComment("test").text,
                    e = i ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                    o = i ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, h = {ul: !0, ol: !0};
                s.f = {
                    Z: {}, childNodes: function (t) {
                        return n(t) ? u(t) : t.childNodes
                    }, xa: function (t) {
                        if (n(t)) {
                            t = s.f.childNodes(t);
                            for (var i = 0, r = t.length; i < r; i++)s.removeNode(t[i])
                        } else s.a.ob(t)
                    }, da: function (t, i) {
                        if (n(t)) {
                            s.f.xa(t);
                            for (var u = t.nextSibling, r = 0,
                                     f = i.length; r < f; r++)u.parentNode.insertBefore(i[r], u)
                        } else s.a.da(t, i)
                    }, mc: function (t, i) {
                        n(t) ? t.parentNode.insertBefore(i, t.nextSibling) : t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i)
                    }, gc: function (t, i, r) {
                        r ? n(t) ? t.parentNode.insertBefore(i, r.nextSibling) : r.nextSibling ? t.insertBefore(i, r.nextSibling) : t.appendChild(i) : s.f.mc(t, i)
                    }, firstChild: function (t) {
                        return n(t) ? !t.nextSibling || r(t.nextSibling) ? null : t.nextSibling : t.firstChild
                    }, nextSibling: function (t) {
                        return n(t) && (t = f(t)), t.nextSibling && r(t.nextSibling) ? null : t.nextSibling
                    }, Tc: n, pd: function (n) {
                        return (n = (i ? n.text : n.nodeValue).match(e)) ? n[1] : null
                    }, kc: function (t) {
                        var o, i, u, e;
                        if (h[s.a.A(t)] && (o = t.firstChild, o))do if (1 === o.nodeType) {
                            if (i = o.firstChild, u = null, i)do u ? u.push(i) : n(i) ? (e = f(i, !0), e ? i = e : u = [i]) : r(i) && (u = [i]); while (i = i.nextSibling);
                            if (i = u)for (u = o.nextSibling, e = 0; e < i.length; e++)u ? t.insertBefore(i[e], u) : t.appendChild(i[e])
                        } while (o = o.nextSibling)
                    }
                }
            }();
            s.b("virtualElements", s.f);
            s.b("virtualElements.allowedBindings", s.f.Z);
            s.b("virtualElements.emptyNode", s.f.xa);
            s.b("virtualElements.insertAfter", s.f.gc);
            s.b("virtualElements.prepend", s.f.mc);
            s.b("virtualElements.setDomNodeChildren", s.f.da), function () {
                s.Q = function () {
                    this.Fc = {}
                };
                s.a.extend(s.Q.prototype, {
                    nodeHasBindings: function (n) {
                        switch (n.nodeType) {
                            case 1:
                                return null != n.getAttribute("data-bind") || s.g.getComponentNameForNode(n);
                            case 8:
                                return s.f.Tc(n);
                            default:
                                return !1
                        }
                    }, getBindings: function (n, t) {
                        var i = this.getBindingsString(n, t), i = i ? this.parseBindingsString(i, t, n) : null;
                        return s.g.Ob(i, n, t, !1)
                    }, getBindingAccessors: function (n, t) {
                        var i = this.getBindingsString(n, t),
                            i = i ? this.parseBindingsString(i, t, n, {valueAccessors: !0}) : null;
                        return s.g.Ob(i, n, t, !0)
                    }, getBindingsString: function (n) {
                        switch (n.nodeType) {
                            case 1:
                                return n.getAttribute("data-bind");
                            case 8:
                                return s.f.pd(n);
                            default:
                                return null
                        }
                    }, parseBindingsString: function (n, t, i, r) {
                        var u, f, e, h, c;
                        try {
                            return u = this.Fc, f = n + (r && r.valueAccessors || ""), (e = u[f]) || (c = "with($context){with($data||{}){return{" + s.h.Ua(n, r) + "}}}", h = new Function("$context", "$element", c), e = u[f] = h), e(t, i)
                        } catch (o) {
                            throw o.message = "Unable to parse bindings.\nBindings value: " + n + "\nMessage: " + o.message, o;
                        }
                    }
                });
                s.Q.instance = new s.Q
            }();
            s.b("bindingProvider", s.Q), function () {
                function v(n) {
                    return function () {
                        return n
                    }
                }

                function u(n) {
                    return n()
                }

                function o(n) {
                    return s.a.Ca(s.l.w(n), function (t, i) {
                        return function () {
                            return n()[i]
                        }
                    })
                }

                function y(n, t, i) {
                    return "function" == typeof n ? o(n.bind(null, t, i)) : s.a.Ca(n, v)
                }

                function p(n, t) {
                    return o(this.getBindings.bind(this, n, t))
                }

                function h(n, t, i) {
                    var r, u = s.f.firstChild(t), f = s.Q.instance, e = f.preprocessNode;
                    if (e) {
                        for (; r = u;)u = s.f.nextSibling(r), e.call(f, r);
                        u = s.f.firstChild(t)
                    }
                    for (; r = u;)u = s.f.nextSibling(r), c(n, r, i)
                }

                function c(n, t, i) {
                    var u = !0, r = 1 === t.nodeType;
                    r && s.f.kc(t);
                    (r && i || s.Q.instance.nodeHasBindings(t)) && (u = l(t, null, n, i).shouldBindDescendants);
                    u && !a[s.a.A(t)] && h(n, t, !r)
                }

                function w(n) {
                    var i = [], r = {}, t = [];
                    return s.a.D(n, function u(f) {
                        if (!r[f]) {
                            var e = s.getBindingHandler(f);
                            e && (e.after && (t.push(f), s.a.q(e.after, function (i) {
                                if (n[i]) {
                                    if (-1 !== s.a.o(t, i))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + t.join(", "));
                                    u(i)
                                }
                            }), t.length--), i.push({key: f, fc: e}));
                            r[f] = !0
                        }
                    }), i
                }

                function l(t, i, r, e) {
                    var v = s.a.e.get(t, f), o, l, a, c;
                    if (!i) {
                        if (v)throw Error("You cannot apply bindings multiple times to the same element.");
                        s.a.e.set(t, f, !0)
                    }
                    if (!v && e && s.tc(t, r), i && "function" != typeof i) o = i; else {
                        var y = s.Q.instance, b = y.getBindingAccessors || p, h = s.B(function () {
                            return (o = i ? i(r, t) : b.call(y, t, r)) && r.P && r.P(), o
                        }, null, {i: t});
                        o && h.ba() || (h = null)
                    }
                    return o && (a = h ? function (n) {
                        return function () {
                            return u(h()[n])
                        }
                    } : function (n) {
                        return o[n]
                    }, c = function () {
                        return s.a.Ca(h ? h() : o, u)
                    }, c.get = function (n) {
                        return o[n] && u(a(n))
                    }, c.has = function (n) {
                        return n in o
                    }, e = w(o), s.a.q(e, function (i) {
                        var e = i.fc.init, h = i.fc.update, u = i.key;
                        if (8 === t.nodeType && !s.f.Z[u])throw Error("The binding '" + u + "' cannot be used with virtual elements");
                        try {
                            "function" == typeof e && s.l.w(function () {
                                var i = e(t, a(u), c, r.$data, r);
                                if (i && i.controlsDescendantBindings) {
                                    if (l !== n)throw Error("Multiple bindings (" + l + " and " + u + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                    l = u
                                }
                            });
                            "function" == typeof h && s.B(function () {
                                h(t, a(u), c, r.$data, r)
                            }, null, {i: t})
                        } catch (f) {
                            throw f.message = 'Unable to process binding "' + u + ": " + o[u] + '"\nMessage: ' + f.message, f;
                        }
                    })), {shouldBindDescendants: l === n}
                }

                function t(n) {
                    return n && n instanceof s.U ? n : new s.U(n)
                }

                var a, f, e;
                s.d = {};
                a = {script: !0, textarea: !0, template: !0};
                s.getBindingHandler = function (n) {
                    return s.d[n]
                };
                s.U = function (t, i, r, u) {
                    var f = this, h = "function" == typeof t && !s.H(t), o, e = s.B(function () {
                        var o = h ? t() : t, n = s.a.c(o);
                        return i ? (i.P && i.P(), s.a.extend(f, i), e && (f.P = e)) : (f.$parents = [], f.$root = n, f.ko = s), f.$rawData = o, f.$data = n, r && (f[r] = n), u && u(f, i, n), f.$data
                    }, null, {
                        wa: function () {
                            return o && !s.a.Qb(o)
                        }, i: !0
                    });
                    e.ba() && (f.P = e, e.equalityComparer = null, o = [], e.Ac = function (t) {
                        o.push(t);
                        s.a.F.oa(t, function (t) {
                            s.a.La(o, t);
                            o.length || (e.k(), f.P = e = n)
                        })
                    })
                };
                s.U.prototype.createChildContext = function (n, t, i) {
                    return new s.U(n, this, t, function (n, t) {
                        n.$parentContext = t;
                        n.$parent = t.$data;
                        n.$parents = (t.$parents || []).slice(0);
                        n.$parents.unshift(n.$parent);
                        i && i(n)
                    })
                };
                s.U.prototype.extend = function (n) {
                    return new s.U(this.P || this.$data, this, null, function (t, i) {
                        t.$rawData = i.$rawData;
                        s.a.extend(t, "function" == typeof n ? n() : n)
                    })
                };
                f = s.a.e.I();
                e = s.a.e.I();
                s.tc = function (n, t) {
                    if (2 == arguments.length) s.a.e.set(n, e, t), t.P && t.P.Ac(n); else return s.a.e.get(n, e)
                };
                s.Ja = function (n, i, r) {
                    return 1 === n.nodeType && s.f.kc(n), l(n, i, t(r), !0)
                };
                s.Dc = function (n, i, r) {
                    return r = t(r), s.Ja(n, y(i, r, n), r)
                };
                s.eb = function (n, i) {
                    1 !== i.nodeType && 8 !== i.nodeType || h(t(n), i, !0)
                };
                s.Rb = function (n, u) {
                    if (!i && r.jQuery && (i = r.jQuery), u && 1 !== u.nodeType && 8 !== u.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    u = u || r.document.body;
                    c(t(n), u, !0)
                };
                s.kb = function (t) {
                    switch (t.nodeType) {
                        case 1:
                        case 8:
                            var i = s.tc(t);
                            if (i)return i;
                            if (t.parentNode)return s.kb(t.parentNode)
                    }
                    return n
                };
                s.Jc = function (t) {
                    return (t = s.kb(t)) ? t.$data : n
                };
                s.b("bindingHandlers", s.d);
                s.b("applyBindings", s.Rb);
                s.b("applyBindingsToDescendants", s.eb);
                s.b("applyBindingAccessorsToNode", s.Ja);
                s.b("applyBindingsToNode", s.Dc);
                s.b("contextFor", s.kb);
                s.b("dataFor", s.Jc)
            }(), function (n) {
                function u(t, u) {
                    var e = i.hasOwnProperty(t) ? i[t] : n, o;
                    e ? e.X(u) : (e = i[t] = new s.J, e.X(u), f(t, function (n, u) {
                        var f = !(!u || !u.synchronous);
                        r[t] = {definition: n, Zc: f};
                        delete i[t];
                        o || f ? e.notifySubscribers(n) : s.Y.Wa(function () {
                            e.notifySubscribers(n)
                        })
                    }), o = !0)
                }

                function f(n, i) {
                    t("getConfig", [n], function (r) {
                        r ? t("loadComponent", [n, r], function (n) {
                            i(n, r)
                        }) : i(null, null)
                    })
                }

                function t(i, r, u, f) {
                    var e, o, h;
                    if (f || (f = s.g.loaders.slice(0)), e = f.shift(), e)if (o = e[i], o) {
                        if (h = !1, o.apply(e, r.concat(function (n) {
                                h ? u(null) : null !== n ? u(n) : t(i, r, u, f)
                            })) !== n && (h = !0, !e.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                    } else t(i, r, u, f); else u(null)
                }

                var i = {}, r = {};
                s.g = {
                    get: function (t, i) {
                        var f = r.hasOwnProperty(t) ? r[t] : n;
                        f ? f.Zc ? s.l.w(function () {
                            i(f.definition)
                        }) : s.Y.Wa(function () {
                            i(f.definition)
                        }) : u(t, i)
                    }, Xb: function (n) {
                        delete r[n]
                    }, Jb: t
                };
                s.g.loaders = [];
                s.b("components", s.g);
                s.b("components.get", s.g.get);
                s.b("components.clearCachedDefinition", s.g.Xb)
            }(), function () {
                function l(n, t, r, f) {
                    function e() {
                        0 == --c && f(o)
                    }

                    var o = {}, c = 2, h = r.template;
                    r = r.viewModel;
                    h ? u(t, h, function (t) {
                        s.g.Jb("loadTemplate", [n, t], function (n) {
                            o.template = n;
                            e()
                        })
                    }) : e();
                    r ? u(t, r, function (t) {
                        s.g.Jb("loadViewModel", [n, t], function (n) {
                            o[i] = n;
                            e()
                        })
                    }) : e()
                }

                function e(n, t, r) {
                    if ("function" == typeof t) r(function (n) {
                        return new t(n)
                    }); else if ("function" == typeof t[i]) r(t[i]); else if ("instance" in t) {
                        var u = t.instance;
                        r(function () {
                            return u
                        })
                    } else"viewModel" in t ? e(n, t.viewModel, r) : n("Unknown viewModel value: " + t)
                }

                function h(n) {
                    switch (s.a.A(n)) {
                        case"script":
                            return s.a.ma(n.text);
                        case"textarea":
                            return s.a.ma(n.value);
                        case"template":
                            if (c(n.content))return s.a.ua(n.content.childNodes)
                    }
                    return s.a.ua(n.childNodes)
                }

                function c(n) {
                    return r.DocumentFragment ? n instanceof DocumentFragment : n && 11 === n.nodeType
                }

                function u(n, t, i) {
                    "string" == typeof t.require ? o || r.require ? (o || r.require)([t.require], i) : n("Uses require, but no AMD loader is present") : i(t)
                }

                function f(n) {
                    return function (t) {
                        throw Error("Component '" + n + "': " + t);
                    }
                }

                var n = {}, i;
                s.g.register = function (t, i) {
                    if (!i)throw Error("Invalid configuration for " + t);
                    if (s.g.ub(t))throw Error("Component " + t + " is already registered");
                    n[t] = i
                };
                s.g.ub = function (t) {
                    return n.hasOwnProperty(t)
                };
                s.g.od = function (t) {
                    delete n[t];
                    s.g.Xb(t)
                };
                s.g.Zb = {
                    getConfig: function (t, i) {
                        i(n.hasOwnProperty(t) ? n[t] : null)
                    }, loadComponent: function (n, t, i) {
                        var r = f(n);
                        u(r, t, function (t) {
                            l(n, r, t, i)
                        })
                    }, loadTemplate: function (n, i, u) {
                        if (n = f(n), "string" == typeof i) u(s.a.ma(i)); else if (i instanceof Array) u(i); else if (c(i)) u(s.a.V(i.childNodes)); else if (i.element)if (i = i.element, r.HTMLElement ? i instanceof HTMLElement : i && i.tagName && 1 === i.nodeType) u(h(i)); else if ("string" == typeof i) {
                            var e = t.getElementById(i);
                            e ? u(h(e)) : n("Cannot find element with ID " + i)
                        } else n("Unknown element type: " + i); else n("Unknown template value: " + i)
                    }, loadViewModel: function (n, t, i) {
                        e(f(n), t, i)
                    }
                };
                i = "createViewModel";
                s.b("components.register", s.g.register);
                s.b("components.isRegistered", s.g.ub);
                s.b("components.unregister", s.g.od);
                s.b("components.defaultLoader", s.g.Zb);
                s.g.loaders.push(s.g.Zb);
                s.g.Bc = n
            }(), function () {
                function n(n, t) {
                    var r = n.getAttribute("params");
                    if (r) {
                        var r = i.parseBindingsString(r, t, n, {valueAccessors: !0, bindingParams: !0}),
                            r = s.a.Ca(r, function (t) {
                                return s.m(t, null, {i: n})
                            }), u = s.a.Ca(r, function (t) {
                                var i = t.t();
                                return t.ba() ? s.m({
                                    read: function () {
                                        return s.a.c(t())
                                    }, write: s.Ba(i) && function (n) {
                                        t()(n)
                                    }, i: n
                                }) : i
                            });
                        return u.hasOwnProperty("$raw") || (u.$raw = r), u
                    }
                    return {$raw: {}}
                }

                s.g.getComponentNameForNode = function (n) {
                    var t = s.a.A(n);
                    if (s.g.ub(t) && (-1 != t.indexOf("-") || "[object HTMLUnknownElement]" == "" + n || 8 >= s.a.C && n.tagName === t))return t
                };
                s.g.Ob = function (t, i, r, u) {
                    var f, e;
                    if (1 === i.nodeType && (f = s.g.getComponentNameForNode(i), f)) {
                        if (t = t || {}, t.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
                        e = {name: f, params: n(i, r)};
                        t.component = u ? function () {
                            return e
                        } : e
                    }
                    return t
                };
                var i = new s.Q;
                9 > s.a.C && (s.g.register = function (n) {
                    return function (i) {
                        return t.createElement(i), n.apply(this, arguments)
                    }
                }(s.g.register), t.createDocumentFragment = function (n) {
                    return function () {
                        var t = n(), i = s.g.Bc;
                        for (var r in i)i.hasOwnProperty(r) && t.createElement(r);
                        return t
                    }
                }(t.createDocumentFragment))
            }(), function (n) {
                function t(n, t, i) {
                    if (t = t.template, !t)throw Error("Component '" + n + "' has no template");
                    n = s.a.ua(t);
                    s.f.da(i, n)
                }

                function i(n, t, i, r) {
                    var u = n.createViewModel;
                    return u ? u.call(n, r, {element: t, templateNodes: i}) : r
                }

                var r = 0;
                s.d.component = {
                    init: function (u, f, e, o, h) {
                        function a() {
                            var n = c && c.dispose;
                            "function" == typeof n && n.call(c);
                            l = c = null
                        }

                        var c, l, v = s.a.V(s.f.childNodes(u));
                        return s.a.F.oa(u, a), s.m(function () {
                            var o = s.a.c(f()), e, y, p;
                            if ("string" == typeof o ? e = o : (e = s.a.c(o.name), y = s.a.c(o.params)), !e)throw Error("No component name specified");
                            p = l = ++r;
                            s.g.get(e, function (r) {
                                if (l === p) {
                                    if (a(), !r)throw Error("Unknown component '" + e + "'");
                                    t(e, r, u);
                                    var f = i(r, u, v, y);
                                    r = h.createChildContext(f, n, function (n) {
                                        n.$component = f;
                                        n.$componentTemplateNodes = v
                                    });
                                    c = f;
                                    s.eb(r, u)
                                }
                            })
                        }, null, {i: u}), {controlsDescendantBindings: !0}
                    }
                };
                s.f.Z.component = !0
            }();
            g = {"class": "className", "for": "htmlFor"};
            s.d.attr = {
                update: function (t, i) {
                    var r = s.a.c(i()) || {};
                    s.a.D(r, function (i, r) {
                        r = s.a.c(r);
                        var u = !1 === r || null === r || r === n;
                        u && t.removeAttribute(i);
                        8 >= s.a.C && i in g ? (i = g[i], u ? t.removeAttribute(i) : t[i] = r) : u || t.setAttribute(i, r.toString());
                        "name" === i && s.a.rc(t, u ? "" : r.toString())
                    })
                }
            }, function () {
                s.d.checked = {
                    after: ["value", "attr"], init: function (t, i, r) {
                        function l() {
                            var l = t.checked, o = y ? f() : l, n, h;
                            s.va.Sa() || e && !l || (n = s.l.w(i), u ? (h = a ? n.t() : n, c !== o ? (l && (s.a.pa(h, o, !0), s.a.pa(h, c, !1)), c = o) : s.a.pa(h, o, l), a && s.Ba(n) && n(h)) : s.h.Ea(n, r, "checked", o, !0))
                        }

                        function v() {
                            var n = s.a.c(i());
                            t.checked = u ? 0 <= s.a.o(n, f()) : h ? n : f() === n
                        }

                        var f = s.nc(function () {
                            return r.has("checkedValue") ? s.a.c(r.get("checkedValue")) : r.has("value") ? s.a.c(r.get("value")) : t.value
                        }), h = "checkbox" == t.type, e = "radio" == t.type;
                        if (h || e) {
                            var o = i(), u = h && s.a.c(o) instanceof Array, a = !(u && o.push && o.splice),
                                c = u ? f() : n, y = e || u;
                            e && !t.name && s.d.uniqueName.init(t, function () {
                                return !0
                            });
                            s.m(l, null, {i: t});
                            s.a.p(t, "click", l);
                            s.m(v, null, {i: t});
                            o = n
                        }
                    }
                };
                s.h.ea.checked = !0;
                s.d.checkedValue = {
                    update: function (n, t) {
                        n.value = s.a.c(t())
                    }
                }
            }();
            s.d.css = {
                update: function (n, t) {
                    var i = s.a.c(t());
                    null !== i && "object" == typeof i ? s.a.D(i, function (t, i) {
                        i = s.a.c(i);
                        s.a.bb(n, t, i)
                    }) : (i = s.a.$a(String(i || "")), s.a.bb(n, n.__ko__cssValue, !1), n.__ko__cssValue = i, s.a.bb(n, i, !0))
                }
            };
            s.d.enable = {
                update: function (n, t) {
                    var i = s.a.c(t());
                    i && n.disabled ? n.removeAttribute("disabled") : i || n.disabled || (n.disabled = !0)
                }
            };
            s.d.disable = {
                update: function (n, t) {
                    s.d.enable.update(n, function () {
                        return !s.a.c(t())
                    })
                }
            };
            s.d.event = {
                init: function (n, t, i, r, u) {
                    var f = t() || {};
                    s.a.D(f, function (f) {
                        "string" == typeof f && s.a.p(n, f, function (n) {
                            var o, h = t()[f], e;
                            if (h) {
                                try {
                                    e = s.a.V(arguments);
                                    r = u.$data;
                                    e.unshift(r);
                                    o = h.apply(r, e)
                                } finally {
                                    !0 !== o && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
                                }
                                !1 === i.get(f + "Bubble") && (n.cancelBubble = !0, n.stopPropagation && n.stopPropagation())
                            }
                        })
                    })
                }
            };
            s.d.foreach = {
                ic: function (n) {
                    return function () {
                        var i = n(), t = s.a.zb(i);
                        return !t || "number" == typeof t.length ? {
                            foreach: i,
                            templateEngine: s.W.sb
                        } : (s.a.c(i), {
                            foreach: t.data,
                            as: t.as,
                            includeDestroyed: t.includeDestroyed,
                            afterAdd: t.afterAdd,
                            beforeRemove: t.beforeRemove,
                            afterRender: t.afterRender,
                            beforeMove: t.beforeMove,
                            afterMove: t.afterMove,
                            templateEngine: s.W.sb
                        })
                    }
                }, init: function (n, t) {
                    return s.d.template.init(n, s.d.foreach.ic(t))
                }, update: function (n, t, i, r, u) {
                    return s.d.template.update(n, s.d.foreach.ic(t), i, r, u)
                }
            };
            s.h.ta.foreach = !1;
            s.f.Z.foreach = !0;
            s.d.hasfocus = {
                init: function (n, t, i) {
                    function r(r) {
                        var u, f;
                        if (n.__ko_hasfocusUpdating = !0, u = n.ownerDocument, "activeElement" in u) {
                            try {
                                f = u.activeElement
                            } catch (e) {
                                f = u.body
                            }
                            r = f === n
                        }
                        u = t();
                        s.h.Ea(u, i, "hasfocus", r, !0);
                        n.__ko_hasfocusLastValue = r;
                        n.__ko_hasfocusUpdating = !1
                    }

                    var u = r.bind(null, !0), f = r.bind(null, !1);
                    s.a.p(n, "focus", u);
                    s.a.p(n, "focusin", u);
                    s.a.p(n, "blur", f);
                    s.a.p(n, "focusout", f)
                }, update: function (n, t) {
                    var i = !!s.a.c(t());
                    n.__ko_hasfocusUpdating || n.__ko_hasfocusLastValue === i || (i ? n.focus() : n.blur(), !i && n.__ko_hasfocusLastValue && n.ownerDocument.body.focus(), s.l.w(s.a.Da, null, [n, i ? "focusin" : "focusout"]))
                }
            };
            s.h.ea.hasfocus = !0;
            s.d.hasFocus = s.d.hasfocus;
            s.h.ea.hasFocus = !0;
            s.d.html = {
                init: function () {
                    return {controlsDescendantBindings: !0}
                }, update: function (n, t) {
                    s.a.Cb(n, t())
                }
            };
            k("if");
            k("ifnot", !1, !0);
            k("with", !0, !1, function (n, t) {
                return n.createChildContext(t)
            });
            w = {};
            s.d.options = {
                init: function (n) {
                    if ("select" !== s.a.A(n))throw Error("options binding applies only to SELECT elements");
                    for (; 0 < n.length;)n.remove(0);
                    return {controlsDescendantBindings: !0}
                }, update: function (t, i, r) {
                    function a() {
                        return s.a.Ka(t.options, function (n) {
                            return n.selected
                        })
                    }

                    function v(n, t, i) {
                        var r = typeof t;
                        return "function" == r ? t(n) : "string" == r ? n[t] : i
                    }

                    function y(n, i) {
                        if (o && e) s.j.ha(t, s.a.c(r.get("value")), !0); else if (f.length) {
                            var u = 0 <= s.a.o(f, s.j.u(i[0]));
                            s.a.sc(i[0], u);
                            o && !u && s.l.w(s.a.Da, null, [t, "change"])
                        }
                    }

                    var h = t.multiple, c = 0 != t.length && h ? t.scrollTop : null, u = s.a.c(i()),
                        e = r.get("valueAllowUnset") && r.has("value"), p = r.get("optionsIncludeDestroyed"), l, f, o;
                    i = {};
                    f = [];
                    e || (h ? f = s.a.fb(a(), s.j.u) : 0 <= t.selectedIndex && f.push(s.j.u(t.options[t.selectedIndex])));
                    u && ("undefined" == typeof u.length && (u = [u]), l = s.a.Ka(u, function (t) {
                        return p || t === n || null === t || !s.a.c(t._destroy)
                    }), r.has("optionsCaption") && (u = s.a.c(r.get("optionsCaption")), null !== u && u !== n && l.unshift(w)));
                    o = !1;
                    i.beforeRemove = function (n) {
                        t.removeChild(n)
                    };
                    u = y;
                    r.has("optionsAfterRender") && "function" == typeof r.get("optionsAfterRender") && (u = function (t, i) {
                        y(0, i);
                        s.l.w(r.get("optionsAfterRender"), null, [i[0], t !== w ? t : n])
                    });
                    s.a.Bb(t, l, function (i, u, h) {
                        return h.length && (f = !e && h[0].selected ? [s.j.u(h[0])] : [], o = !0), u = t.ownerDocument.createElement("option"), i === w ? (s.a.Za(u, r.get("optionsCaption")), s.j.ha(u, n)) : (h = v(i, r.get("optionsValue"), i), s.j.ha(u, s.a.c(h)), i = v(i, r.get("optionsText"), h), s.a.Za(u, i)), [u]
                    }, i, u);
                    s.l.w(function () {
                        e ? s.j.ha(t, s.a.c(r.get("value")), !0) : (h ? f.length && a().length < f.length : f.length && 0 <= t.selectedIndex ? s.j.u(t.options[t.selectedIndex]) !== f[0] : f.length || 0 <= t.selectedIndex) && s.a.Da(t, "change")
                    });
                    s.a.Nc(t);
                    c && 20 < Math.abs(c - t.scrollTop) && (t.scrollTop = c)
                }
            };
            s.d.options.xb = s.a.e.I();
            s.d.selectedOptions = {
                after: ["options", "foreach"], init: function (n, t, i) {
                    s.a.p(n, "change", function () {
                        var u = t(), r = [];
                        s.a.q(n.getElementsByTagName("option"), function (n) {
                            n.selected && r.push(s.j.u(n))
                        });
                        s.h.Ea(u, i, "selectedOptions", r)
                    })
                }, update: function (n, t) {
                    if ("select" != s.a.A(n))throw Error("values binding applies only to SELECT elements");
                    var i = s.a.c(t()), r = n.scrollTop;
                    i && "number" == typeof i.length && s.a.q(n.getElementsByTagName("option"), function (n) {
                        var t = 0 <= s.a.o(i, s.j.u(n));
                        n.selected != t && s.a.sc(n, t)
                    });
                    n.scrollTop = r
                }
            };
            s.h.ea.selectedOptions = !0;
            s.d.style = {
                update: function (t, i) {
                    var r = s.a.c(i() || {});
                    s.a.D(r, function (i, r) {
                        r = s.a.c(r);
                        (null === r || r === n || !1 === r) && (r = "");
                        t.style[i] = r
                    })
                }
            };
            s.d.submit = {
                init: function (n, t, i, r, u) {
                    if ("function" != typeof t())throw Error("The value for a submit binding must be a function");
                    s.a.p(n, "submit", function (i) {
                        var r, f = t();
                        try {
                            r = f.call(u.$data, n)
                        } finally {
                            !0 !== r && (i.preventDefault ? i.preventDefault() : i.returnValue = !1)
                        }
                    })
                }
            };
            s.d.text = {
                init: function () {
                    return {controlsDescendantBindings: !0}
                }, update: function (n, t) {
                    s.a.Za(n, t())
                }
            };
            s.f.Z.text = !0, function () {
                if (r && r.navigator)var t = function (n) {
                        if (n)return parseFloat(n[1])
                    }, e = r.opera && r.opera.version && parseInt(r.opera.version()), i = r.navigator.userAgent,
                    o = t(i.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)), h = t(i.match(/Firefox\/([^ ]*)/));
                if (10 > s.a.C)var u = s.a.e.I(), f = s.a.e.I(), c = function (n) {
                    var t = this.activeElement;
                    (t = t && s.a.e.get(t, f)) && t(n)
                }, l = function (n, t) {
                    var i = n.ownerDocument;
                    s.a.e.get(i, u) || (s.a.e.set(i, u, !0), s.a.p(i, "selectionchange", c));
                    s.a.e.set(n, f, t)
                };
                s.d.textInput = {
                    init: function (t, i, r) {
                        function u(n, i) {
                            s.a.p(t, n, i)
                        }

                        function p() {
                            var r = s.a.c(i());
                            (null === r || r === n) && (r = "");
                            v !== n && r === v ? s.a.setTimeout(p, 4) : t.value !== r && (y = r, t.value = r)
                        }

                        function c() {
                            a || (v = t.value, a = s.a.setTimeout(f, 4))
                        }

                        function f() {
                            clearTimeout(a);
                            v = a = n;
                            var u = t.value;
                            y !== u && (y = u, s.h.Ea(i(), r, "textInput", u))
                        }

                        var y = t.value, a, v, w = 9 == s.a.C ? c : f;
                        10 > s.a.C ? (u("propertychange", function (n) {
                            "value" === n.propertyName && w(n)
                        }), 8 == s.a.C && (u("keyup", f), u("keydown", f)), 8 <= s.a.C && (l(t, w), u("dragend", c))) : (u("input", f), 5 > o && "textarea" === s.a.A(t) ? (u("keydown", c), u("paste", c), u("cut", c)) : 11 > e ? u("keydown", c) : 4 > h && (u("DOMAutoComplete", f), u("dragdrop", f), u("drop", f)));
                        u("change", f);
                        s.m(p, null, {i: t})
                    }
                };
                s.h.ea.textInput = !0;
                s.d.textinput = {
                    preprocess: function (n, t, i) {
                        i("textInput", n)
                    }
                }
            }();
            s.d.uniqueName = {
                init: function (n, t) {
                    if (t()) {
                        var i = "ko_unique_" + ++s.d.uniqueName.Ic;
                        s.a.rc(n, i)
                    }
                }
            };
            s.d.uniqueName.Ic = 0;
            s.d.value = {
                after: ["options", "foreach"], init: function (n, t, i) {
                    var o, h;
                    if ("input" != n.tagName.toLowerCase() || "checkbox" != n.type && "radio" != n.type) {
                        var r = ["change"], u = i.get("valueUpdate"), f = !1, e = null;
                        u && ("string" == typeof u && (u = [u]), s.a.ra(r, u), r = s.a.Tb(r));
                        o = function () {
                            e = null;
                            f = !1;
                            var r = t(), u = s.j.u(n);
                            s.h.Ea(r, i, "value", u)
                        };
                        !s.a.C || "input" != n.tagName.toLowerCase() || "text" != n.type || "off" == n.autocomplete || n.form && "off" == n.form.autocomplete || -1 != s.a.o(r, "propertychange") || (s.a.p(n, "propertychange", function () {
                            f = !0
                        }), s.a.p(n, "focus", function () {
                            f = !1
                        }), s.a.p(n, "blur", function () {
                            f && o()
                        }));
                        s.a.q(r, function (t) {
                            var i = o;
                            s.a.nd(t, "after") && (i = function () {
                                e = s.j.u(n);
                                s.a.setTimeout(o, 0)
                            }, t = t.substring(5));
                            s.a.p(n, t, i)
                        });
                        h = function () {
                            var r = s.a.c(t()), u = s.j.u(n), f;
                            null !== e && r === e ? s.a.setTimeout(h, 0) : r !== u && ("select" === s.a.A(n) ? (f = i.get("valueAllowUnset"), u = function () {
                                    s.j.ha(n, r, f)
                                }, u(), f || r === s.j.u(n) ? s.a.setTimeout(u, 0) : s.l.w(s.a.Da, null, [n, "change"])) : s.j.ha(n, r))
                        };
                        s.m(h, null, {i: n})
                    } else s.Ja(n, {checkedValue: t})
                }, update: function () {
                }
            };
            s.h.ea.value = !0;
            s.d.visible = {
                update: function (n, t) {
                    var i = s.a.c(t()), r = "none" != n.style.display;
                    i && !r ? n.style.display = "" : !i && r && (n.style.display = "none")
                }
            }, function (n) {
                s.d[n] = {
                    init: function (t, i, r, u, f) {
                        return s.d.event.init.call(this, t, function () {
                            var t = {};
                            return t[n] = i(), t
                        }, r, u, f)
                    }
                }
            }("click");
            s.O = function () {
            };
            s.O.prototype.renderTemplateSource = function () {
                throw Error("Override renderTemplateSource");
            };
            s.O.prototype.createJavaScriptEvaluatorBlock = function () {
                throw Error("Override createJavaScriptEvaluatorBlock");
            };
            s.O.prototype.makeTemplateSource = function (n, i) {
                if ("string" == typeof n) {
                    i = i || t;
                    var r = i.getElementById(n);
                    if (!r)throw Error("Cannot find template with ID " + n);
                    return new s.v.n(r)
                }
                if (1 == n.nodeType || 8 == n.nodeType)return new s.v.qa(n);
                throw Error("Unknown template type: " + n);
            };
            s.O.prototype.renderTemplate = function (n, t, i, r) {
                return n = this.makeTemplateSource(n, r), this.renderTemplateSource(n, t, i, r)
            };
            s.O.prototype.isTemplateRewritten = function (n, t) {
                return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(n, t).data("isRewritten")
            };
            s.O.prototype.rewriteTemplate = function (n, t, i) {
                n = this.makeTemplateSource(n, i);
                t = t(n.text());
                n.text(t);
                n.data("isRewritten", !0)
            };
            s.b("templateEngine", s.O);
            s.Gb = function () {
                function n(n, t, i, r) {
                    var o, f, u, e;
                    for (n = s.h.yb(n), o = s.h.ta, f = 0; f < n.length; f++)if (u = n[f].key, o.hasOwnProperty(u))if (e = o[u], "function" == typeof e) {
                        if (u = e(n[f].value))throw Error(u);
                    } else if (!e)throw Error("This template engine does not support the '" + u + "' binding within its templates");
                    return i = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + s.h.Ua(n, {valueAccessors: !0}) + " } })()},'" + i.toLowerCase() + "')", r.createJavaScriptEvaluatorBlock(i) + t
                }

                var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                    i = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return {
                    Oc: function (n, t, i) {
                        t.isTemplateRewritten(n, i) || t.rewriteTemplate(n, function (n) {
                            return s.Gb.dd(n, t)
                        }, i)
                    }, dd: function (r, u) {
                        return r.replace(t, function (t, i, r, f, e) {
                            return n(e, i, r, u)
                        }).replace(i, function (t, i) {
                            return n(i, "<!-- ko -->", "#comment", u)
                        })
                    }, Ec: function (n, t) {
                        return s.M.wb(function (i, r) {
                            var u = i.nextSibling;
                            u && u.nodeName.toLowerCase() === t && s.Ja(u, n, r)
                        })
                    }
                }
            }();
            s.b("__tr_ambtns", s.Gb.Ec), function () {
                var i, t;
                s.v = {};
                s.v.n = function (n) {
                    if (this.n = n) {
                        var t = s.a.A(n);
                        this.ab = "script" === t ? 1 : "textarea" === t ? 2 : "template" == t && n.content && 11 === n.content.nodeType ? 3 : 4
                    }
                };
                s.v.n.prototype.text = function () {
                    var n = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML", t;
                    if (0 == arguments.length)return this.n[n];
                    t = arguments[0];
                    "innerHTML" === n ? s.a.Cb(this.n, t) : this.n[n] = t
                };
                i = s.a.e.I() + "_";
                s.v.n.prototype.data = function (n) {
                    if (1 === arguments.length)return s.a.e.get(this.n, i + n);
                    s.a.e.set(this.n, i + n, arguments[1])
                };
                t = s.a.e.I();
                s.v.n.prototype.nodes = function () {
                    var i = this.n;
                    if (0 == arguments.length)return (s.a.e.get(i, t) || {}).jb || (3 === this.ab ? i.content : 4 === this.ab ? i : n);
                    s.a.e.set(i, t, {jb: arguments[0]})
                };
                s.v.qa = function (n) {
                    this.n = n
                };
                s.v.qa.prototype = new s.v.n;
                s.v.qa.prototype.text = function () {
                    if (0 == arguments.length) {
                        var i = s.a.e.get(this.n, t) || {};
                        return i.Hb === n && i.jb && (i.Hb = i.jb.innerHTML), i.Hb
                    }
                    s.a.e.set(this.n, t, {Hb: arguments[0]})
                };
                s.b("templateSources", s.v);
                s.b("templateSources.domElement", s.v.n);
                s.b("templateSources.anonymousTemplate", s.v.qa)
            }(), function () {
                function t(n, t, i) {
                    var r;
                    for (t = s.f.nextSibling(t); n && (r = n) !== t;)n = s.f.nextSibling(r), i(r, n)
                }

                function f(n, i) {
                    if (n.length) {
                        var r = n[0], u = n[n.length - 1], f = r.parentNode, e = s.Q.instance, o = e.preprocessNode;
                        if (o) {
                            if (t(r, u, function (n, t) {
                                    var f = n.previousSibling, i = o.call(e, n);
                                    i && (n === r && (r = i[0] || t), n === u && (u = i[i.length - 1] || f))
                                }), n.length = 0, !r)return;
                            r === u ? n.push(r) : (n.push(r, u), s.a.za(n, f))
                        }
                        t(r, u, function (n) {
                            1 !== n.nodeType && 8 !== n.nodeType || s.Rb(i, n)
                        });
                        t(r, u, function (n) {
                            1 !== n.nodeType && 8 !== n.nodeType || s.M.yc(n, [i])
                        });
                        s.a.za(n, f)
                    }
                }

                function i(n) {
                    return n.nodeType ? n : 0 < n.length ? n[0] : null
                }

                function e(n, t, u, e, o) {
                    o = o || {};
                    var h = (n && i(n) || u || {}).ownerDocument, c = o.templateEngine || r;
                    if (s.Gb.Oc(u, c, h), u = c.renderTemplate(u, e, o, h), "number" != typeof u.length || 0 < u.length && "number" != typeof u[0].nodeType)throw Error("Template engine must return an array of DOM nodes");
                    h = !1;
                    switch (t) {
                        case"replaceChildren":
                            s.f.da(n, u);
                            h = !0;
                            break;
                        case"replaceNode":
                            s.a.qc(n, u);
                            h = !0;
                            break;
                        case"ignoreTargetNode":
                            break;
                        default:
                            throw Error("Unknown renderMode: " + t);
                    }
                    return h && (f(u, e), o.afterRender && s.l.w(o.afterRender, null, [u, e.$data])), u
                }

                function o(n, t, i) {
                    return s.H(n) ? n() : "function" == typeof n ? n(t, i) : n
                }

                var r, u;
                s.Db = function (t) {
                    if (t != n && !(t instanceof s.O))throw Error("templateEngine must inherit from ko.templateEngine");
                    r = t
                };
                s.Ab = function (t, u, f, h, c) {
                    if (f = f || {}, (f.templateEngine || r) == n)throw Error("Set a template engine before calling renderTemplate");
                    if (c = c || "replaceChildren", h) {
                        var l = i(h);
                        return s.B(function () {
                            var n = u && u instanceof s.U ? u : new s.U(s.a.c(u)), r = o(t, n.$data, n),
                                n = e(h, c, r, n, f);
                            "replaceNode" == c && (h = n, l = i(h))
                        }, null, {
                            wa: function () {
                                return !l || !s.a.nb(l)
                            }, i: l && "replaceNode" == c ? l.parentNode : l
                        })
                    }
                    return s.M.wb(function (n) {
                        s.Ab(t, u, f, n, "replaceNode")
                    })
                };
                s.kd = function (t, i, r, u, h) {
                    function l(n, t) {
                        f(t, c);
                        r.afterRender && r.afterRender(t, n);
                        c = null
                    }

                    function a(n, i) {
                        c = h.createChildContext(n, r.as, function (n) {
                            n.$index = i
                        });
                        var u = o(t, n, c);
                        return e(null, "ignoreTargetNode", u, c, r)
                    }

                    var c;
                    return s.B(function () {
                        var t = s.a.c(i) || [];
                        "undefined" == typeof t.length && (t = [t]);
                        t = s.a.Ka(t, function (t) {
                            return r.includeDestroyed || t === n || null === t || !s.a.c(t._destroy)
                        });
                        s.l.w(s.a.Bb, null, [u, t, a, r, l])
                    }, null, {i: u})
                };
                u = s.a.e.I();
                s.d.template = {
                    init: function (n, t) {
                        var i = s.a.c(t());
                        if ("string" == typeof i || i.name) s.f.xa(n); else {
                            if ("nodes" in i) {
                                if (i = i.nodes || [], s.H(i))throw Error('The "nodes" option must be a plain, non-observable array.');
                            } else i = s.f.childNodes(n);
                            i = s.a.jc(i);
                            new s.v.qa(n).nodes(i)
                        }
                        return {controlsDescendantBindings: !0}
                    }, update: function (t, i, r, f, e) {
                        var h = i(), o;
                        i = s.a.c(h);
                        r = !0;
                        f = null;
                        "string" == typeof i ? i = {} : (h = i.name, "if" in i && (r = s.a.c(i["if"])), r && "ifnot" in i && (r = !s.a.c(i.ifnot)), o = s.a.c(i.data));
                        "foreach" in i ? f = s.kd(h || t, r && i.foreach || [], i, t, e) : r ? (e = "data" in i ? e.createChildContext(o, i.as) : e, f = s.Ab(h || t, e, i, t)) : s.f.xa(t);
                        e = f;
                        (o = s.a.e.get(t, u)) && "function" == typeof o.k && o.k();
                        s.a.e.set(t, u, e && e.ba() ? e : n)
                    }
                };
                s.h.ta.template = function (n) {
                    return n = s.h.yb(n), 1 == n.length && n[0].unknown || s.h.ad(n, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                };
                s.f.Z.template = !0
            }();
            s.b("setTemplateEngine", s.Db);
            s.b("renderTemplate", s.Ab);
            s.a.dc = function (n, t, i) {
                if (n.length && t.length)for (var o, r, f, e, u = o = 0; (!i || u < i) && (f = n[o]); ++o) {
                    for (r = 0; e = t[r]; ++r)if (f.value === e.value) {
                        f.moved = e.index;
                        e.moved = f.index;
                        t.splice(r, 1);
                        u = r = 0;
                        break
                    }
                    u += r
                }
            };
            s.a.ib = function () {
                function n(n, t, i, r, u) {
                    for (var o = Math.min, l = Math.max, a = [], c = n.length, f, h = t.length, v = h - c || 1,
                             w = c + h + 1, y, p, b,
                             e = 0; e <= c; e++)for (p = y, a.push(y = []), b = o(h, e + v), f = l(0, e - 1); f <= b; f++)y[f] = f ? e ? n[e - 1] === t[f - 1] ? p[f - 1] : o(p[f] || w, y[f - 1] || w) + 1 : f + 1 : e + 1;
                    for (o = [], l = [], v = [], e = c, f = h; e || f;)h = a[e][f] - 1, f && h === a[e][f - 1] ? l.push(o[o.length] = {
                        status: i,
                        value: t[--f],
                        index: f
                    }) : e && h === a[e - 1][f] ? v.push(o[o.length] = {
                        status: r,
                        value: n[--e],
                        index: e
                    }) : (--f, --e, u.sparse || o.push({status: "retained", value: t[f]}));
                    return s.a.dc(v, l, !u.dontLimitMoves && 10 * c), o.reverse()
                }

                return function (t, i, r) {
                    return r = "boolean" == typeof r ? {dontLimitMoves: r} : r || {}, t = t || [], i = i || [], t.length < i.length ? n(t, i, "added", "deleted", r) : n(i, t, "deleted", "added", r)
                }
            }();
            s.b("utils.compareArrays", s.a.ib), function () {
                function r(t, i, r, u, f) {
                    var e = [], o = s.B(function () {
                        var n = i(r, f, s.a.za(e, t)) || [];
                        0 < e.length && (s.a.qc(e, n), u && s.l.w(u, null, [r, n, f]));
                        e.length = 0;
                        s.a.ra(e, n)
                    }, null, {
                        i: t, wa: function () {
                            return !s.a.Qb(e)
                        }
                    });
                    return {ca: e, B: o.ba() ? o : n}
                }

                var t = s.a.e.I(), i = s.a.e.I();
                s.a.Bb = function (u, f, e, o, h) {
                    function ut(n, t) {
                        c = g[t];
                        tt !== t && (rt[n] = c);
                        c.qb(tt++);
                        s.a.za(c.ca, u);
                        w.push(c);
                        b.push(c)
                    }

                    function y(n, t) {
                        if (n)for (var i = 0, r = t.length; i < r; i++)t[i] && s.a.q(t[i].ca, function (r) {
                            n(r, i, t[i].ja)
                        })
                    }

                    var l, p, ft;
                    f = f || [];
                    o = o || {};
                    var p = s.a.e.get(u, t) === n, g = s.a.e.get(u, t) || [], nt = s.a.fb(g, function (n) {
                        return n.ja
                    }), a = s.a.ib(nt, f, o.dontLimitMoves), w = [], v = 0, tt = 0, it = [], b = [];
                    f = [];
                    for (var rt = [], nt = [], c, l = 0, k, d; k = a[l]; l++)switch (d = k.moved, k.status) {
                        case"deleted":
                            d === n && (c = g[v], c.B && (c.B.k(), c.B = n), s.a.za(c.ca, u).length && (o.beforeRemove && (w.push(c), b.push(c), c.ja === i ? c = null : f[l] = c), c && it.push.apply(it, c.ca)));
                            v++;
                            break;
                        case"retained":
                            ut(l, v++);
                            break;
                        case"added":
                            d !== n ? ut(l, d) : (c = {
                                ja: k.value,
                                qb: s.N(tt++)
                            }, w.push(c), b.push(c), p || (nt[l] = c))
                    }
                    for (s.a.e.set(u, t, w), y(o.beforeMove, rt), s.a.q(it, o.beforeRemove ? s.$ : s.removeNode), l = 0, p = s.f.firstChild(u); c = b[l]; l++) {
                        for (c.ca || s.a.extend(c, r(u, e, c.ja, h, c.qb)), v = 0; a = c.ca[v]; p = a.nextSibling, ft = a, v++)a !== p && s.f.gc(u, a, ft);
                        !c.Wc && h && (h(c.ja, c.ca, c.qb), c.Wc = !0)
                    }
                    for (y(o.beforeRemove, f), l = 0; l < f.length; ++l)f[l] && (f[l].ja = i);
                    y(o.afterMove, rt);
                    y(o.afterAdd, nt)
                }
            }();
            s.b("utils.setDomNodeChildrenFromArrayMapping", s.a.Bb);
            s.W = function () {
                this.allowTemplateRewriting = !1
            };
            s.W.prototype = new s.O;
            s.W.prototype.renderTemplateSource = function (n, t, i, r) {
                return (t = (9 > s.a.C ? 0 : n.nodes) ? n.nodes() : null) ? s.a.V(t.cloneNode(!0).childNodes) : (n = n.text(), s.a.ma(n, r))
            };
            s.W.sb = new s.W;
            s.Db(s.W.sb);
            s.b("nativeTemplateEngine", s.W), function () {
                s.vb = function () {
                    var n = this.$c = function () {
                        if (!i || !i.tmpl)return 0;
                        try {
                            if (0 <= i.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2
                        } catch (n) {
                        }
                        return 1
                    }();
                    this.renderTemplateSource = function (r, u, f, e) {
                        if (e = e || t, f = f || {}, 2 > n)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var o = r.data("precompiled");
                        return o || (o = r.text() || "", o = i.template(null, "{{ko_with $item.koBindingContext}}" + o + "{{/ko_with}}"), r.data("precompiled", o)), r = [u.$data], u = i.extend({koBindingContext: u}, f.templateOptions), u = i.tmpl(o, r, u), u.appendTo(e.createElement("div")), i.fragments = {}, u
                    };
                    this.createJavaScriptEvaluatorBlock = function (n) {
                        return "{{ko_code ((function() { return " + n + " })()) }}"
                    };
                    this.addTemplate = function (n, i) {
                        t.write("<script type='text/html' id='" + n + "'>" + i + "<\/script>")
                    };
                    0 < n && (i.tmpl.tag.ko_code = {open: "__.push($1 || '');"}, i.tmpl.tag.ko_with = {
                        open: "with($1) {",
                        close: "} "
                    })
                };
                s.vb.prototype = new s.O;
                var n = new s.vb;
                0 < n.$c && s.Db(n);
                s.b("jqueryTmplTemplateEngine", s.vb)
            }()
        })
    })()
}(), function () {
    function nt(t) {
        function r(n, i, r, u, f, e) {
            for (; f >= 0 && e > f; f += t) {
                var o = u ? u[f] : f;
                r = i(r, n[o], o, n)
            }
            return r
        }

        return function (u, f, o, s) {
            f = e(f, s, 4);
            var h = !i(u) && n.keys(u), l = (h || u).length, c = t > 0 ? 0 : l - 1;
            return arguments.length < 3 && (o = u[h ? h[c] : c], c += t), r(u, f, o, h, c, l)
        }
    }

    function tt(n) {
        return function (i, r, f) {
            r = t(r, f);
            for (var o = u(i), e = n > 0 ? 0 : o - 1; e >= 0 && o > e; e += n)if (r(i[e], e, i))return e;
            return -1
        }
    }

    function it(t, i, f) {
        return function (e, o, s) {
            var c = 0, h = u(e);
            if ("number" == typeof s) t > 0 ? c = s >= 0 ? s : Math.max(s + h, c) : h = s >= 0 ? Math.min(s + 1, h) : s + h + 1; else if (f && s && h)return s = f(e, o), e[s] === o ? s : -1;
            if (o !== o)return s = i(r.call(e, c, h), n.isNaN), s >= 0 ? s + c : -1;
            for (s = t > 0 ? c : h - 1; s >= 0 && h > s; s += t)if (e[s] === o)return s;
            return -1
        }
    }

    function rt(t, i) {
        var u = d.length, f = t.constructor, e = n.isFunction(f) && f.prototype || v, r = "constructor";
        for (n.has(t, r) && !n.contains(i, r) && i.push(r); u--;)r = d[u], r in t && t[r] !== e[r] && !n.contains(i, r) && i.push(r)
    }

    var a = this, lt = a._, s = Array.prototype, v = Object.prototype, at = Function.prototype, vt = s.push,
        r = s.slice, o = v.toString, yt = v.hasOwnProperty, pt = Array.isArray, ut = Object.keys, y = at.bind,
        ft = Object.create, p = function () {
        }, n = function (t) {
            return t instanceof n ? t : this instanceof n ? void(this._wrapped = t) : new n(t)
        }, e, t, h, f, b, k, d, c, ct, l;
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), exports._ = n) : a._ = n;
    n.VERSION = "1.8.3";
    e = function (n, t, i) {
        if (t === void 0)return n;
        switch (null == i ? 3 : i) {
            case 1:
                return function (i) {
                    return n.call(t, i)
                };
            case 2:
                return function (i, r) {
                    return n.call(t, i, r)
                };
            case 3:
                return function (i, r, u) {
                    return n.call(t, i, r, u)
                };
            case 4:
                return function (i, r, u, f) {
                    return n.call(t, i, r, u, f)
                }
        }
        return function () {
            return n.apply(t, arguments)
        }
    };
    t = function (t, i, r) {
        return null == t ? n.identity : n.isFunction(t) ? e(t, i, r) : n.isObject(t) ? n.matcher(t) : n.property(t)
    };
    n.iteratee = function (n, i) {
        return t(n, i, 1 / 0)
    };
    var w = function (n, t) {
        return function (i) {
            var e = arguments.length, r, u;
            if (2 > e || null == i)return i;
            for (r = 1; e > r; r++)for (var o = arguments[r], s = n(o), h = s.length,
                                            f = 0; h > f; f++)u = s[f], t && i[u] !== void 0 || (i[u] = o[u]);
            return i
        }
    }, et = function (t) {
        if (!n.isObject(t))return {};
        if (ft)return ft(t);
        p.prototype = t;
        var i = new p;
        return p.prototype = null, i
    }, ot = function (n) {
        return function (t) {
            if (null != t)return t[n]
        }
    }, wt = Math.pow(2, 53) - 1, u = ot("length"), i = function (n) {
        var t = u(n);
        return "number" == typeof t && t >= 0 && wt >= t
    };
    n.each = n.forEach = function (t, r, u) {
        var f, o, s;
        if (r = e(r, u), i(t))for (f = 0, o = t.length; o > f; f++)r(t[f], f, t); else for (s = n.keys(t), f = 0, o = s.length; o > f; f++)r(t[s[f]], s[f], t);
        return t
    };
    n.map = n.collect = function (r, u, f) {
        var s;
        u = t(u, f);
        for (var o = !i(r) && n.keys(r), h = (o || r).length, c = Array(h),
                 e = 0; h > e; e++)s = o ? o[e] : e, c[e] = u(r[s], s, r);
        return c
    };
    n.reduce = n.foldl = n.inject = nt(1);
    n.reduceRight = n.foldr = nt(-1);
    n.find = n.detect = function (t, r, u) {
        var f;
        return f = i(t) ? n.findIndex(t, r, u) : n.findKey(t, r, u), f !== void 0 && f !== -1 ? t[f] : void 0
    };
    n.filter = n.select = function (i, r, u) {
        var f = [];
        return r = t(r, u), n.each(i, function (n, t, i) {
            r(n, t, i) && f.push(n)
        }), f
    };
    n.reject = function (i, r, u) {
        return n.filter(i, n.negate(t(r)), u)
    };
    n.every = n.all = function (r, u, f) {
        var s;
        u = t(u, f);
        for (var o = !i(r) && n.keys(r), h = (o || r).length,
                 e = 0; h > e; e++)if (s = o ? o[e] : e, !u(r[s], s, r))return !1;
        return !0
    };
    n.some = n.any = function (r, u, f) {
        var s;
        u = t(u, f);
        for (var o = !i(r) && n.keys(r), h = (o || r).length,
                 e = 0; h > e; e++)if (s = o ? o[e] : e, u(r[s], s, r))return !0;
        return !1
    };
    n.contains = n.includes = n.include = function (t, r, u, f) {
        return i(t) || (t = n.values(t)), ("number" != typeof u || f) && (u = 0), n.indexOf(t, r, u) >= 0
    };
    n.invoke = function (t, i) {
        var u = r.call(arguments, 2), f = n.isFunction(i);
        return n.map(t, function (n) {
            var t = f ? i : n[i];
            return null == t ? t : t.apply(n, u)
        })
    };
    n.pluck = function (t, i) {
        return n.map(t, n.property(i))
    };
    n.where = function (t, i) {
        return n.filter(t, n.matcher(i))
    };
    n.findWhere = function (t, i) {
        return n.find(t, n.matcher(i))
    };
    n.max = function (r, u, f) {
        var h, o, e = -1 / 0, c = -1 / 0, s, l;
        if (null == u && null != r)for (r = i(r) ? r : n.values(r), s = 0, l = r.length; l > s; s++)h = r[s], h > e && (e = h); else u = t(u, f), n.each(r, function (n, t, i) {
            o = u(n, t, i);
            (o > c || o === -1 / 0 && e === -1 / 0) && (e = n, c = o)
        });
        return e
    };
    n.min = function (r, u, f) {
        var h, o, e = 1 / 0, c = 1 / 0, s, l;
        if (null == u && null != r)for (r = i(r) ? r : n.values(r), s = 0, l = r.length; l > s; s++)h = r[s], e > h && (e = h); else u = t(u, f), n.each(r, function (n, t, i) {
            o = u(n, t, i);
            (c > o || 1 / 0 === o && 1 / 0 === e) && (e = n, c = o)
        });
        return e
    };
    n.shuffle = function (t) {
        for (var u, e = i(t) ? t : n.values(t), o = e.length, f = Array(o),
                 r = 0; o > r; r++)u = n.random(0, r), u !== r && (f[r] = f[u]), f[u] = e[r];
        return f
    };
    n.sample = function (t, r, u) {
        return null == r || u ? (i(t) || (t = n.values(t)), t[n.random(t.length - 1)]) : n.shuffle(t).slice(0, Math.max(0, r))
    };
    n.sortBy = function (i, r, u) {
        return r = t(r, u), n.pluck(n.map(i, function (n, t, i) {
            return {value: n, index: t, criteria: r(n, t, i)}
        }).sort(function (n, t) {
            var i = n.criteria, r = t.criteria;
            if (i !== r) {
                if (i > r || i === void 0)return 1;
                if (r > i || r === void 0)return -1
            }
            return n.index - t.index
        }), "value")
    };
    h = function (i) {
        return function (r, u, f) {
            var e = {};
            return u = t(u, f), n.each(r, function (n, t) {
                var f = u(n, t, r);
                i(e, n, f)
            }), e
        }
    };
    n.groupBy = h(function (t, i, r) {
        n.has(t, r) ? t[r].push(i) : t[r] = [i]
    });
    n.indexBy = h(function (n, t, i) {
        n[i] = t
    });
    n.countBy = h(function (t, i, r) {
        n.has(t, r) ? t[r]++ : t[r] = 1
    });
    n.toArray = function (t) {
        return t ? n.isArray(t) ? r.call(t) : i(t) ? n.map(t, n.identity) : n.values(t) : []
    };
    n.size = function (t) {
        return null == t ? 0 : i(t) ? t.length : n.keys(t).length
    };
    n.partition = function (i, r, u) {
        r = t(r, u);
        var f = [], e = [];
        return n.each(i, function (n, t, i) {
            (r(n, t, i) ? f : e).push(n)
        }), [f, e]
    };
    n.first = n.head = n.take = function (t, i, r) {
        if (null != t)return null == i || r ? t[0] : n.initial(t, t.length - i)
    };
    n.initial = function (n, t, i) {
        return r.call(n, 0, Math.max(0, n.length - (null == t || i ? 1 : t)))
    };
    n.last = function (t, i, r) {
        if (null != t)return null == i || r ? t[t.length - 1] : n.rest(t, Math.max(0, t.length - i))
    };
    n.rest = n.tail = n.drop = function (n, t, i) {
        return r.call(n, null == t || i ? 1 : t)
    };
    n.compact = function (t) {
        return n.filter(t, n.identity)
    };
    f = function (t, r, e, o) {
        for (var s, l, a, h = [], v = 0, c = o || 0,
                 y = u(t); y > c; c++)if (s = t[c], i(s) && (n.isArray(s) || n.isArguments(s)))for (r || (s = f(s, r, e)), l = 0, a = s.length, h.length += a; a > l;)h[v++] = s[l++]; else e || (h[v++] = s);
        return h
    };
    n.flatten = function (n, t) {
        return f(n, t, !1)
    };
    n.without = function (t) {
        return n.difference(t, r.call(arguments, 1))
    };
    n.uniq = n.unique = function (i, r, f, e) {
        var o, c;
        n.isBoolean(r) || (e = f, f = r, r = !1);
        null != f && (f = t(f, e));
        for (var s = [], l = [], h = 0,
                 a = u(i); a > h; h++)o = i[h], c = f ? f(o, h, i) : o, r ? (h && l === c || s.push(o), l = c) : f ? n.contains(l, c) || (l.push(c), s.push(o)) : n.contains(s, o) || s.push(o);
        return s
    };
    n.union = function () {
        return n.uniq(f(arguments, !0, !0))
    };
    n.intersection = function (t) {
        for (var r, i, f = [], o = arguments.length, e = 0, s = u(t); s > e; e++)if (r = t[e], !n.contains(f, r)) {
            for (i = 1; o > i && n.contains(arguments[i], r); i++);
            i === o && f.push(r)
        }
        return f
    };
    n.difference = function (t) {
        var i = f(arguments, !0, !0, 1);
        return n.filter(t, function (t) {
            return !n.contains(i, t)
        })
    };
    n.zip = function () {
        return n.unzip(arguments)
    };
    n.unzip = function (t) {
        for (var r = t && n.max(t, u).length || 0, f = Array(r), i = 0; r > i; i++)f[i] = n.pluck(t, i);
        return f
    };
    n.object = function (n, t) {
        for (var r = {}, i = 0, f = u(n); f > i; i++)t ? r[n[i]] = t[i] : r[n[i][0]] = n[i][1];
        return r
    };
    n.findIndex = tt(1);
    n.findLastIndex = tt(-1);
    n.sortedIndex = function (n, i, r, f) {
        var o;
        r = t(r, f, 1);
        for (var h = r(i), e = 0, s = u(n); s > e;)o = Math.floor((e + s) / 2), r(n[o]) < h ? e = o + 1 : s = o;
        return e
    };
    n.indexOf = it(1, n.findIndex, n.sortedIndex);
    n.lastIndexOf = it(-1, n.findLastIndex);
    n.range = function (n, t, i) {
        null == t && (t = n || 0, n = 0);
        i = i || 1;
        for (var u = Math.max(Math.ceil((t - n) / i), 0), f = Array(u), r = 0; u > r; r++, n += i)f[r] = n;
        return f
    };
    b = function (t, i, r, u, f) {
        if (!(u instanceof i))return t.apply(r, f);
        var e = et(t.prototype), o = t.apply(e, f);
        return n.isObject(o) ? o : e
    };
    n.bind = function (t, i) {
        if (y && t.bind === y)return y.apply(t, r.call(arguments, 1));
        if (!n.isFunction(t))throw new TypeError("Bind must be called on a function");
        var f = r.call(arguments, 2), u = function () {
            return b(t, u, i, this, f.concat(r.call(arguments)))
        };
        return u
    };
    n.partial = function (t) {
        var i = r.call(arguments, 1), u = function () {
            for (var f = 0, o = i.length, e = Array(o), r = 0; o > r; r++)e[r] = i[r] === n ? arguments[f++] : i[r];
            for (; f < arguments.length;)e.push(arguments[f++]);
            return b(t, u, this, this, e)
        };
        return u
    };
    n.bindAll = function (t) {
        var i, r, u = arguments.length;
        if (1 >= u)throw new Error("bindAll must be passed function names");
        for (i = 1; u > i; i++)r = arguments[i], t[r] = n.bind(t[r], t);
        return t
    };
    n.memoize = function (t, i) {
        var r = function (u) {
            var f = r.cache, e = "" + (i ? i.apply(this, arguments) : u);
            return n.has(f, e) || (f[e] = t.apply(this, arguments)), f[e]
        };
        return r.cache = {}, r
    };
    n.delay = function (n, t) {
        var i = r.call(arguments, 2);
        return setTimeout(function () {
            return n.apply(null, i)
        }, t)
    };
    n.defer = n.partial(n.delay, n, 1);
    n.throttle = function (t, i, r) {
        var f, e, s, u = null, o = 0, h;
        return r || (r = {}), h = function () {
            o = r.leading === !1 ? 0 : n.now();
            u = null;
            s = t.apply(f, e);
            u || (f = e = null)
        }, function () {
            var l = n.now(), c;
            return o || r.leading !== !1 || (o = l), c = i - (l - o), f = this, e = arguments, 0 >= c || c > i ? (u && (clearTimeout(u), u = null), o = l, s = t.apply(f, e), u || (f = e = null)) : u || r.trailing === !1 || (u = setTimeout(h, c)), s
        }
    };
    n.debounce = function (t, i, r) {
        var u, f, e, s, o, h = function () {
            var c = n.now() - s;
            i > c && c >= 0 ? u = setTimeout(h, i - c) : (u = null, r || (o = t.apply(e, f), u || (e = f = null)))
        };
        return function () {
            e = this;
            f = arguments;
            s = n.now();
            var c = r && !u;
            return u || (u = setTimeout(h, i)), c && (o = t.apply(e, f), e = f = null), o
        }
    };
    n.wrap = function (t, i) {
        return n.partial(i, t)
    };
    n.negate = function (n) {
        return function () {
            return !n.apply(this, arguments)
        }
    };
    n.compose = function () {
        var n = arguments, t = n.length - 1;
        return function () {
            for (var r = t, i = n[t].apply(this, arguments); r--;)i = n[r].call(this, i);
            return i
        }
    };
    n.after = function (n, t) {
        return function () {
            if (--n < 1)return t.apply(this, arguments)
        }
    };
    n.before = function (n, t) {
        var i;
        return function () {
            return --n > 0 && (i = t.apply(this, arguments)), 1 >= n && (t = null), i
        }
    };
    n.once = n.partial(n.before, 2);
    k = !{toString: null}.propertyIsEnumerable("toString");
    d = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    n.keys = function (t) {
        var i, r;
        if (!n.isObject(t))return [];
        if (ut)return ut(t);
        i = [];
        for (r in t)n.has(t, r) && i.push(r);
        return k && rt(t, i), i
    };
    n.allKeys = function (t) {
        var i, r;
        if (!n.isObject(t))return [];
        i = [];
        for (r in t)i.push(r);
        return k && rt(t, i), i
    };
    n.values = function (t) {
        for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; u > i; i++)f[i] = t[r[i]];
        return f
    };
    n.mapObject = function (i, r, u) {
        r = t(r, u);
        for (var f, o = n.keys(i), h = o.length, s = {}, e = 0; h > e; e++)f = o[e], s[f] = r(i[f], f, i);
        return s
    };
    n.pairs = function (t) {
        for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; u > i; i++)f[i] = [r[i], t[r[i]]];
        return f
    };
    n.invert = function (t) {
        for (var u = {}, r = n.keys(t), i = 0, f = r.length; f > i; i++)u[t[r[i]]] = r[i];
        return u
    };
    n.functions = n.methods = function (t) {
        var i = [];
        for (var r in t)n.isFunction(t[r]) && i.push(r);
        return i.sort()
    };
    n.extend = w(n.allKeys);
    n.extendOwn = n.assign = w(n.keys);
    n.findKey = function (i, r, u) {
        r = t(r, u);
        for (var f, o = n.keys(i), e = 0, s = o.length; s > e; e++)if (f = o[e], r(i[f], f, i))return f
    };
    n.pick = function (t, i, r) {
        var c, o, l = {}, u = t, s, v, h, a;
        if (null == u)return l;
        for (n.isFunction(i) ? (o = n.allKeys(u), c = e(i, r)) : (o = f(arguments, !1, !1, 1), c = function (n, t, i) {
            return t in i
        }, u = Object(u)), s = 0, v = o.length; v > s; s++)h = o[s], a = u[h], c(a, h, u) && (l[h] = a);
        return l
    };
    n.omit = function (t, i, r) {
        if (n.isFunction(i)) i = n.negate(i); else {
            var u = n.map(f(arguments, !1, !1, 1), String);
            i = function (t, i) {
                return !n.contains(u, i)
            }
        }
        return n.pick(t, i, r)
    };
    n.defaults = w(n.allKeys, !0);
    n.create = function (t, i) {
        var r = et(t);
        return i && n.extendOwn(r, i), r
    };
    n.clone = function (t) {
        return n.isObject(t) ? n.isArray(t) ? t.slice() : n.extend({}, t) : t
    };
    n.tap = function (n, t) {
        return t(n), n
    };
    n.isMatch = function (t, i) {
        var e = n.keys(i), o = e.length, f, r, u;
        if (null == t)return !o;
        for (f = Object(t), r = 0; o > r; r++)if (u = e[r], i[u] !== f[u] || !(u in f))return !1;
        return !0
    };
    c = function (t, i, r, u) {
        var h, a, e, s, f, l, v;
        if (t === i)return 0 !== t || 1 / t == 1 / i;
        if (null == t || null == i)return t === i;
        if (t instanceof n && (t = t._wrapped), i instanceof n && (i = i._wrapped), h = o.call(t), h !== o.call(i))return !1;
        switch (h) {
            case"[object RegExp]":
            case"[object String]":
                return "" + t == "" + i;
            case"[object Number]":
                return +t != +t ? +i != +i : 0 == +t ? 1 / +t == 1 / i : +t == +i;
            case"[object Date]":
            case"[object Boolean]":
                return +t == +i
        }
        if (a = "[object Array]" === h, !a && ("object" != typeof t || "object" != typeof i || (e = t.constructor, s = i.constructor, e !== s && !(n.isFunction(e) && e instanceof e && n.isFunction(s) && s instanceof s) && "constructor" in t && "constructor" in i)))return !1;
        for (r = r || [], u = u || [], f = r.length; f--;)if (r[f] === t)return u[f] === i;
        if (r.push(t), u.push(i), a) {
            if (f = t.length, f !== i.length)return !1;
            for (; f--;)if (!c(t[f], i[f], r, u))return !1
        } else {
            if (v = n.keys(t), f = v.length, n.keys(i).length !== f)return !1;
            for (; f--;)if (l = v[f], !n.has(i, l) || !c(t[l], i[l], r, u))return !1
        }
        return r.pop(), u.pop(), !0
    };
    n.isEqual = function (n, t) {
        return c(n, t)
    };
    n.isEmpty = function (t) {
        return null == t ? !0 : i(t) && (n.isArray(t) || n.isString(t) || n.isArguments(t)) ? 0 === t.length : 0 === n.keys(t).length
    };
    n.isElement = function (n) {
        return !(!n || 1 !== n.nodeType)
    };
    n.isArray = pt || function (n) {
            return "[object Array]" === o.call(n)
        };
    n.isObject = function (n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n
    };
    n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
        n["is" + t] = function (n) {
            return o.call(n) === "[object " + t + "]"
        }
    });
    n.isArguments(arguments) || (n.isArguments = function (t) {
        return n.has(t, "callee")
    });
    "function" != typeof/./ && "object" != typeof Int8Array && (n.isFunction = function (n) {
        return "function" == typeof n || !1
    });
    n.isFinite = function (n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    };
    n.isNaN = function (t) {
        return n.isNumber(t) && t !== +t
    };
    n.isBoolean = function (n) {
        return n === !0 || n === !1 || "[object Boolean]" === o.call(n)
    };
    n.isNull = function (n) {
        return null === n
    };
    n.isUndefined = function (n) {
        return n === void 0
    };
    n.has = function (n, t) {
        return null != n && yt.call(n, t)
    };
    n.noConflict = function () {
        return a._ = lt, this
    };
    n.identity = function (n) {
        return n
    };
    n.constant = function (n) {
        return function () {
            return n
        }
    };
    n.noop = function () {
    };
    n.property = ot;
    n.propertyOf = function (n) {
        return null == n ? function () {
        } : function (t) {
            return n[t]
        }
    };
    n.matcher = n.matches = function (t) {
        return t = n.extendOwn({}, t), function (i) {
            return n.isMatch(i, t)
        }
    };
    n.times = function (n, t, i) {
        var u = Array(Math.max(0, n)), r;
        for (t = e(t, i, 1), r = 0; n > r; r++)u[r] = t(r);
        return u
    };
    n.random = function (n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    };
    n.now = Date.now || function () {
            return (new Date).getTime()
        };
    var st = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, bt = n.invert(st),
        ht = function (t) {
            var r = function (n) {
                return t[n]
            }, i = "(?:" + n.keys(t).join("|") + ")", u = RegExp(i), f = RegExp(i, "g");
            return function (n) {
                return n = null == n ? "" : "" + n, u.test(n) ? n.replace(f, r) : n
            }
        };
    n.escape = ht(st);
    n.unescape = ht(bt);
    n.result = function (t, i, r) {
        var u = null == t ? void 0 : t[i];
        return u === void 0 && (u = r), n.isFunction(u) ? u.call(t) : u
    };
    ct = 0;
    n.uniqueId = function (n) {
        var t = ++ct + "";
        return n ? n + t : t
    };
    n.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var g = /(.)^/, kt = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
        dt = /\\|'|\r|\n|\u2028|\u2029/g, gt = function (n) {
            return "\\" + kt[n]
        };
    n.template = function (t, i, r) {
        var o, f, h;
        !i && r && (i = r);
        i = n.defaults({}, i, n.templateSettings);
        var c = RegExp([(i.escape || g).source, (i.interpolate || g).source, (i.evaluate || g).source].join("|") + "|$", "g"),
            e = 0, u = "__p+='";
        t.replace(c, function (n, i, r, f, o) {
            return u += t.slice(e, o).replace(dt, gt), e = o + n.length, i ? u += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : r ? u += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : f && (u += "';\n" + f + "\n__p+='"), n
        });
        u += "';\n";
        i.variable || (u = "with(obj||{}){\n" + u + "}\n");
        u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        try {
            o = new Function(i.variable || "obj", "_", u)
        } catch (s) {
            throw s.source = u, s;
        }
        return f = function (t) {
            return o.call(this, t, n)
        }, h = i.variable || "obj", f.source = "function(" + h + "){\n" + u + "}", f
    };
    n.chain = function (t) {
        var i = n(t);
        return i._chain = !0, i
    };
    l = function (t, i) {
        return t._chain ? n(i).chain() : i
    };
    n.mixin = function (t) {
        n.each(n.functions(t), function (i) {
            var r = n[i] = t[i];
            n.prototype[i] = function () {
                var t = [this._wrapped];
                return vt.apply(t, arguments), l(this, r.apply(n, t))
            }
        })
    };
    n.mixin(n);
    n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var i = s[t];
        n.prototype[t] = function () {
            var n = this._wrapped;
            return i.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], l(this, n)
        }
    });
    n.each(["concat", "join", "slice"], function (t) {
        var i = s[t];
        n.prototype[t] = function () {
            return l(this, i.apply(this._wrapped, arguments))
        }
    });
    n.prototype.value = function () {
        return this._wrapped
    };
    n.prototype.valueOf = n.prototype.toJSON = n.prototype.value;
    n.prototype.toString = function () {
        return "" + this._wrapped
    };
    "function" == typeof define && define.amd && define("underscore", [], function () {
        return n
    })
}.call(this);
!function (n) {
    var t = t;
    "function" == typeof t && t.amd ? t(["knockout", "underscore"], n) : n(window.ko, window._)
}(function (n, t) {
    var i = ["union", "union_", "intersection", "intersection_", "zip", "zip_"];
    t.property = function (t) {
        return function (i) {
            if (null != i)return n.utils.unwrapObservable(n.utils.unwrapObservable(i)[t])
        }
    };
    t.propertyOf = function (t) {
        return null == t ? function () {
        } : function (i) {
            return n.utils.unwrapObservable(n.utils.unwrapObservable(t)[i])
        }
    };
    t.isMatch = function (i, r) {
        var o = t.keys(r), s = o.length, e, u, f;
        if (null == i)return !s;
        for (e = Object(n.utils.unwrapObservable(i)), u = 0; s > u; u++)if (f = o[u], n.utils.unwrapObservable(r[f]) !== n.utils.unwrapObservable(e[f]) || !(f in e))return !1;
        return !0
    };
    t.each(t.union(["each", "forEach", "map", "collect", "reduce", "inject", "foldl", "reduceRight", "foldr", "find", "detect", "filter", "select", "filter_", "select_", "where", "findWhere", "reject", "reject_", "all", "every", "any", "some", "include", "contains", "invoke", "invoke_", "pluck", "max", "min", "sortBy", "sortBy_", "groupBy", "groupBy_", "indexBy", "countBy", "shuffle", "shuffle_", "sample", "size", "partition", "first", "head", "take", "initial", "last", "rest", "tail", "drop", "rest_", "tail_", "drop_", "compact", "compact_", "flatten", "flatten_", "without", "without_", "union", "union_", "intersection", "intersection_", "difference", "difference_", "uniq", "unique", "uniq_", "unique_", "zip", "zip_", "unzip", "unzip_", "object", "lastIndexOf", "sortedIndex", "findIndex", "findLastIndex", "chain"], i), function (r) {
        n.observableArray.fn[r] || (n.observableArray.fn[r] = function () {
            var n = t.toArray(arguments);
            return t.include(i, r) && t.each(n, function (t, i) {
                "function" == typeof t && t[r] && (n[i] = t())
            }), n.splice(0, 0, this()), "_" === r.substr(r.length - 1, 1) ? this(t[r.substr(0, r.length - 1)].apply(this, n)) : t[r].apply(this, n)
        })
    })
});
!function (n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.moment = t()
}(this, function () {
    "use strict";
    function t() {
        return ae.apply(null, arguments)
    }

    function vo(n) {
        ae = n
    }

    function pt(n) {
        return n instanceof Array || "[object Array]" === Object.prototype.toString.call(n)
    }

    function ai(n) {
        return n instanceof Date || "[object Date]" === Object.prototype.toString.call(n)
    }

    function bu(n, t) {
        for (var r = [], i = 0; i < n.length; ++i)r.push(t(n[i], i));
        return r
    }

    function w(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }

    function wt(n, t) {
        for (var i in t)w(t, i) && (n[i] = t[i]);
        return w(t, "toString") && (n.toString = t.toString), w(t, "valueOf") && (n.valueOf = t.valueOf), n
    }

    function it(n, t, i, r) {
        return pf(n, t, i, r, !0).utc()
    }

    function yo() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null
        }
    }

    function f(n) {
        return null == n._pf && (n._pf = yo()), n._pf
    }

    function sr(n) {
        if (null == n._isValid) {
            var t = f(n), i = ve.call(t.parsedDateParts, function (n) {
                return null != n
            });
            n._isValid = !isNaN(n._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && i);
            n._strict && (n._isValid = n._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
        }
        return n._isValid
    }

    function vi(n) {
        var t = it(NaN);
        return null != n ? wt(f(t), n) : f(t).userInvalidated = !0, t
    }

    function p(n) {
        return void 0 === n
    }

    function hr(n, t) {
        var u, i, r;
        if (p(t._isAMomentObject) || (n._isAMomentObject = t._isAMomentObject), p(t._i) || (n._i = t._i), p(t._f) || (n._f = t._f), p(t._l) || (n._l = t._l), p(t._strict) || (n._strict = t._strict), p(t._tzm) || (n._tzm = t._tzm), p(t._isUTC) || (n._isUTC = t._isUTC), p(t._offset) || (n._offset = t._offset), p(t._pf) || (n._pf = f(t)), p(t._locale) || (n._locale = t._locale), fu.length > 0)for (u in fu)i = fu[u], r = t[i], p(r) || (n[i] = r);
        return n
    }

    function ei(n) {
        hr(this, n);
        this._d = new Date(null != n._d ? n._d.getTime() : NaN);
        eu === !1 && (eu = !0, t.updateOffset(this), eu = !1)
    }

    function st(n) {
        return n instanceof ei || null != n && null != n._isAMomentObject
    }

    function b(n) {
        return 0 > n ? Math.ceil(n) : Math.floor(n)
    }

    function e(n) {
        var t = +n, i = 0;
        return 0 !== t && isFinite(t) && (i = b(t)), i
    }

    function ku(n, t, i) {
        for (var f = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), u = 0,
                 r = 0; f > r; r++)(i && n[r] !== t[r] || !i && e(n[r]) !== e(t[r])) && u++;
        return u + o
    }

    function du(n) {
        t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + n)
    }

    function d(n, i) {
        var r = !0;
        return wt(function () {
            return null != t.deprecationHandler && t.deprecationHandler(null, n), r && (du(n + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), r = !1), i.apply(this, arguments)
        }, i)
    }

    function cr(n, i) {
        null != t.deprecationHandler && t.deprecationHandler(n, i);
        ye[n] || (du(i), ye[n] = !0)
    }

    function ht(n) {
        return n instanceof Function || "[object Function]" === Object.prototype.toString.call(n)
    }

    function gu(n) {
        return "[object Object]" === Object.prototype.toString.call(n)
    }

    function po(n) {
        var t;
        for (var i in n)t = n[i], ht(t) ? this[i] = t : this["_" + i] = t;
        this._config = n;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function lr(n, t) {
        var i, r = wt({}, n);
        for (i in t)w(t, i) && (gu(n[i]) && gu(t[i]) ? (r[i] = {}, wt(r[i], n[i]), wt(r[i], t[i])) : null != t[i] ? r[i] = t[i] : delete r[i]);
        return r
    }

    function ar(n) {
        null != n && this.set(n)
    }

    function nf(n) {
        return n ? n.toLowerCase().replace("_", "-") : n
    }

    function wo(n) {
        for (var i, t, f, r, u = 0; u < n.length;) {
            for (r = nf(n[u]).split("-"), i = r.length, t = nf(n[u + 1]), t = t ? t.split("-") : null; i > 0;) {
                if (f = tf(r.slice(0, i).join("-")))return f;
                if (t && t.length >= i && ku(r, t, !0) >= i - 1)break;
                i--
            }
            u++
        }
        return null
    }

    function tf(n) {
        var t = null;
        if (!l[n] && "undefined" != typeof module && module && module.exports)try {
            t = nr._abbr;
            require("./locale/" + n);
            ti(t)
        } catch (i) {
        }
        return l[n]
    }

    function ti(n, t) {
        var i;
        return n && (i = p(t) ? ct(n) : rf(n, t), i && (nr = i)), nr._abbr
    }

    function rf(n, t) {
        return null !== t ? (t.abbr = n, null != l[n] ? (cr("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), t = lr(l[n]._config, t)) : null != t.parentLocale && (null != l[t.parentLocale] ? t = lr(l[t.parentLocale]._config, t) : cr("parentLocaleUndefined", "specified parentLocale is not defined yet")), l[n] = new ar(t), ti(n), l[n]) : (delete l[n], null)
    }

    function bo(n, t) {
        if (null != t) {
            var i;
            null != l[n] && (t = lr(l[n]._config, t));
            i = new ar(t);
            i.parentLocale = l[n];
            l[n] = i;
            ti(n)
        } else null != l[n] && (null != l[n].parentLocale ? l[n] = l[n].parentLocale : null != l[n] && delete l[n]);
        return l[n]
    }

    function ct(n) {
        var t;
        if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n)return nr;
        if (!pt(n)) {
            if (t = tf(n))return t;
            n = [n]
        }
        return wo(n)
    }

    function ko() {
        return pe(l)
    }

    function y(n, t) {
        var i = n.toLowerCase();
        ci[i] = ci[i + "s"] = ci[t] = n
    }

    function g(n) {
        if ("string" == typeof n)return ci[n] || ci[n.toLowerCase()]
    }

    function uf(n) {
        var i, t, r = {};
        for (t in n)w(n, t) && (i = g(t), i && (r[i] = n[t]));
        return r
    }

    function ii(n, i) {
        return function (r) {
            return null != r ? (ff(this, n, r), t.updateOffset(this, i), this) : yi(this, n)
        }
    }

    function yi(n, t) {
        return n.isValid() ? n._d["get" + (n._isUTC ? "UTC" : "") + t]() : NaN
    }

    function ff(n, t, i) {
        n.isValid() && n._d["set" + (n._isUTC ? "UTC" : "") + t](i)
    }

    function ef(n, t) {
        var i;
        if ("object" == typeof n)for (i in n)this.set(i, n[i]); else if (n = g(n), ht(this[n]))return this[n](t);
        return this
    }

    function ut(n, t, i) {
        var r = "" + Math.abs(n), u = t - r.length, f = n >= 0;
        return (f ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, u)).toString().substr(1) + r
    }

    function r(n, t, i, r) {
        var u = r;
        "string" == typeof r && (u = function () {
            return this[r]()
        });
        n && (ui[n] = u);
        t && (ui[t[0]] = function () {
            return ut(u.apply(this, arguments), t[1], t[2])
        });
        i && (ui[i] = function () {
            return this.localeData().ordinal(u.apply(this, arguments), n)
        })
    }

    function go(n) {
        return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "")
    }

    function ns(n) {
        for (var t = n.match(we), i = 0, r = t.length; r > i; i++)t[i] = ui[t[i]] ? ui[t[i]] : go(t[i]);
        return function (i) {
            for (var f = "", u = 0; r > u; u++)f += t[u] instanceof Function ? t[u].call(i, n) : t[u];
            return f
        }
    }

    function vr(n, t) {
        return n.isValid() ? (t = of(t, n.localeData()), ou[t] = ou[t] || ns(t), ou[t](n)) : n.localeData().invalidDate()
    }

    function of(n, t) {
        function r(n) {
            return t.longDateFormat(n) || n
        }

        var i = 5;
        for (tr.lastIndex = 0; i >= 0 && tr.test(n);)n = n.replace(tr, r), tr.lastIndex = 0, i -= 1;
        return n
    }

    function i(n, t, i) {
        cu[n] = ht(t) ? t : function (n) {
            return n && i ? i : t
        }
    }

    function ts(n, t) {
        return w(cu, n) ? cu[n](t._strict, t._locale) : new RegExp(is(n))
    }

    function is(n) {
        return bt(n.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (n, t, i, r, u) {
            return t || i || r || u
        }))
    }

    function bt(n) {
        return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function s(n, t) {
        var i, r = t;
        for ("string" == typeof n && (n = [n]), "number" == typeof t && (r = function (n, i) {
            i[t] = e(n)
        }), i = 0; i < n.length; i++)lu[n[i]] = r
    }

    function oi(n, t) {
        s(n, function (n, i, r, u) {
            r._w = r._w || {};
            t(n, r._w, r, u)
        })
    }

    function rs(n, t, i) {
        null != t && w(lu, n) && lu[n](t, i._a, i, n)
    }

    function yr(n, t) {
        return new Date(Date.UTC(n, t + 1, 0)).getUTCDate()
    }

    function us(n, t) {
        return pt(this._months) ? this._months[n.month()] : this._months[no.test(t) ? "format" : "standalone"][n.month()]
    }

    function fs(n, t) {
        return pt(this._monthsShort) ? this._monthsShort[n.month()] : this._monthsShort[no.test(t) ? "format" : "standalone"][n.month()]
    }

    function es(n, t, i) {
        var u, r, e, f = n.toLocaleLowerCase();
        if (!this._monthsParse)for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], u = 0; 12 > u; ++u)e = it([2e3, u]), this._shortMonthsParse[u] = this.monthsShort(e, "").toLocaleLowerCase(), this._longMonthsParse[u] = this.months(e, "").toLocaleLowerCase();
        return i ? "MMM" === t ? (r = a.call(this._shortMonthsParse, f), -1 !== r ? r : null) : (r = a.call(this._longMonthsParse, f), -1 !== r ? r : null) : "MMM" === t ? (r = a.call(this._shortMonthsParse, f), -1 !== r ? r : (r = a.call(this._longMonthsParse, f), -1 !== r ? r : null)) : (r = a.call(this._longMonthsParse, f), -1 !== r ? r : (r = a.call(this._shortMonthsParse, f), -1 !== r ? r : null))
    }

    function os(n, t, i) {
        var r, u, f;
        if (this._monthsParseExact)return es.call(this, n, t, i);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++)if ((u = it([2e3, r]), i && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(u, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(u, "").replace(".", "") + "$", "i")), i || this._monthsParse[r] || (f = "^" + this.months(u, "") + "|^" + this.monthsShort(u, ""), this._monthsParse[r] = new RegExp(f.replace(".", ""), "i")), i && "MMMM" === t && this._longMonthsParse[r].test(n)) || i && "MMM" === t && this._shortMonthsParse[r].test(n) || !i && this._monthsParse[r].test(n))return r
    }

    function sf(n, t) {
        var i;
        if (!n.isValid())return n;
        if ("string" == typeof t)if (/^\d+$/.test(t)) t = e(t); else if (t = n.localeData().monthsParse(t), "number" != typeof t)return n;
        return i = Math.min(n.date(), yr(n.year(), t)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i), n
    }

    function hf(n) {
        return null != n ? (sf(this, n), t.updateOffset(this, !0), this) : yi(this, "Month")
    }

    function ss() {
        return yr(this.year(), this.month())
    }

    function hs(n) {
        return this._monthsParseExact ? (w(this, "_monthsRegex") || cf.call(this), n ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && n ? this._monthsShortStrictRegex : this._monthsShortRegex
    }

    function cs(n) {
        return this._monthsParseExact ? (w(this, "_monthsRegex") || cf.call(this), n ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && n ? this._monthsStrictRegex : this._monthsRegex
    }

    function cf() {
        function f(n, t) {
            return t.length - n.length
        }

        for (var i, r = [], u = [], t = [],
                 n = 0; 12 > n; n++)i = it([2e3, n]), r.push(this.monthsShort(i, "")), u.push(this.months(i, "")), t.push(this.months(i, "")), t.push(this.monthsShort(i, ""));
        for (r.sort(f), u.sort(f), t.sort(f), n = 0; 12 > n; n++)r[n] = bt(r[n]), u[n] = bt(u[n]), t[n] = bt(t[n]);
        this._monthsRegex = new RegExp("^(" + t.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + u.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function pr(n) {
        var i, t = n._a;
        return t && -2 === f(n).overflow && (i = t[ft] < 0 || t[ft] > 11 ? ft : t[rt] < 1 || t[rt] > yr(t[nt], t[ft]) ? rt : t[v] < 0 || t[v] > 24 || 24 === t[v] && (0 !== t[tt] || 0 !== t[et] || 0 !== t[ni]) ? v : t[tt] < 0 || t[tt] > 59 ? tt : t[et] < 0 || t[et] > 59 ? et : t[ni] < 0 || t[ni] > 999 ? ni : -1, f(n)._overflowDayOfYear && (nt > i || i > rt) && (i = rt), f(n)._overflowWeeks && -1 === i && (i = yv), f(n)._overflowWeekday && -1 === i && (i = pv), f(n).overflow = i), n
    }

    function lf(n) {
        var t, r, o, e, u, s, h = n._i, i = gv.exec(h) || ny.exec(h);
        if (i) {
            for (f(n).iso = !0, t = 0, r = or.length; r > t; t++)if (or[t][1].exec(i[1])) {
                e = or[t][0];
                o = or[t][2] !== !1;
                break
            }
            if (null == e)return void(n._isValid = !1);
            if (i[3]) {
                for (t = 0, r = au.length; r > t; t++)if (au[t][1].exec(i[3])) {
                    u = (i[2] || " ") + au[t][0];
                    break
                }
                if (null == u)return void(n._isValid = !1)
            }
            if (!o && null != u)return void(n._isValid = !1);
            if (i[4]) {
                if (!ty.exec(i[4]))return void(n._isValid = !1);
                s = "Z"
            }
            n._f = e + (u || "") + (s || "");
            br(n)
        } else n._isValid = !1
    }

    function ls(n) {
        var i = iy.exec(n._i);
        return null !== i ? void(n._d = new Date(+i[1])) : (lf(n), void(n._isValid === !1 && (delete n._isValid, t.createFromInputFallback(n))))
    }

    function as(n, t, i, r, u, f, e) {
        var o = new Date(n, t, i, r, u, f, e);
        return 100 > n && n >= 0 && isFinite(o.getFullYear()) && o.setFullYear(n), o
    }

    function pi(n) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 100 > n && n >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(n), t
    }

    function si(n) {
        return af(n) ? 366 : 365
    }

    function af(n) {
        return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
    }

    function vs() {
        return af(this.year())
    }

    function wi(n, t, i) {
        var r = 7 + t - i, u = (7 + pi(n, 0, r).getUTCDay() - t) % 7;
        return -u + r - 1
    }

    function vf(n, t, i, r, u) {
        var f, o, s = (7 + i - r) % 7, h = wi(n, r, u), e = 1 + 7 * (t - 1) + s + h;
        return 0 >= e ? (f = n - 1, o = si(f) + e) : e > si(n) ? (f = n + 1, o = e - si(n)) : (f = n, o = e), {
            year: f,
            dayOfYear: o
        }
    }

    function hi(n, t, i) {
        var f, r, e = wi(n.year(), t, i), u = Math.floor((n.dayOfYear() - e - 1) / 7) + 1;
        return 1 > u ? (r = n.year() - 1, f = u + kt(r, t, i)) : u > kt(n.year(), t, i) ? (f = u - kt(n.year(), t, i), r = n.year() + 1) : (r = n.year(), f = u), {
            week: f,
            year: r
        }
    }

    function kt(n, t, i) {
        var r = wi(n, t, i), u = wi(n + 1, t, i);
        return (si(n) - r + u) / 7
    }

    function ri(n, t, i) {
        return null != n ? n : null != t ? t : i
    }

    function ys(n) {
        var i = new Date(t.now());
        return n._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
    }

    function wr(n) {
        var t, i, r, u, e = [];
        if (!n._d) {
            for (r = ys(n), n._w && null == n._a[rt] && null == n._a[ft] && ps(n), n._dayOfYear && (u = ri(n._a[nt], r[nt]), n._dayOfYear > si(u) && (f(n)._overflowDayOfYear = !0), i = pi(u, 0, n._dayOfYear), n._a[ft] = i.getUTCMonth(), n._a[rt] = i.getUTCDate()), t = 0; 3 > t && null == n._a[t]; ++t)n._a[t] = e[t] = r[t];
            for (; 7 > t; t++)n._a[t] = e[t] = null == n._a[t] ? 2 === t ? 1 : 0 : n._a[t];
            24 === n._a[v] && 0 === n._a[tt] && 0 === n._a[et] && 0 === n._a[ni] && (n._nextDay = !0, n._a[v] = 0);
            n._d = (n._useUTC ? pi : as).apply(null, e);
            null != n._tzm && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
            n._nextDay && (n._a[v] = 24)
        }
    }

    function ps(n) {
        var t, o, u, i, r, e, c, s;
        t = n._w;
        null != t.GG || null != t.W || null != t.E ? (r = 1, e = 4, o = ri(t.GG, n._a[nt], hi(h(), 1, 4).year), u = ri(t.W, 1), i = ri(t.E, 1), (1 > i || i > 7) && (s = !0)) : (r = n._locale._week.dow, e = n._locale._week.doy, o = ri(t.gg, n._a[nt], hi(h(), r, e).year), u = ri(t.w, 1), null != t.d ? (i = t.d, (0 > i || i > 6) && (s = !0)) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (s = !0)) : i = r);
        1 > u || u > kt(o, r, e) ? f(n)._overflowWeeks = !0 : null != s ? f(n)._overflowWeekday = !0 : (c = vf(o, u, i, r, e), n._a[nt] = c.year, n._dayOfYear = c.dayOfYear)
    }

    function br(n) {
        if (n._f === t.ISO_8601)return void lf(n);
        n._a = [];
        f(n).empty = !0;
        for (var i, u, s, r = "" + n._i, c = r.length, h = 0, o = of(n._f, n._locale).match(we) || [],
                 e = 0; e < o.length; e++)u = o[e], i = (r.match(ts(u, n)) || [])[0], i && (s = r.substr(0, r.indexOf(i)), s.length > 0 && f(n).unusedInput.push(s), r = r.slice(r.indexOf(i) + i.length), h += i.length), ui[u] ? (i ? f(n).empty = !1 : f(n).unusedTokens.push(u), rs(u, i, n)) : n._strict && !i && f(n).unusedTokens.push(u);
        f(n).charsLeftOver = c - h;
        r.length > 0 && f(n).unusedInput.push(r);
        f(n).bigHour === !0 && n._a[v] <= 12 && n._a[v] > 0 && (f(n).bigHour = void 0);
        f(n).parsedDateParts = n._a.slice(0);
        f(n).meridiem = n._meridiem;
        n._a[v] = ws(n._locale, n._a[v], n._meridiem);
        wr(n);
        pr(n)
    }

    function ws(n, t, i) {
        var r;
        return null == i ? t : null != n.meridiemHour ? n.meridiemHour(t, i) : null != n.isPM ? (r = n.isPM(i), r && 12 > t && (t += 12), r || 12 !== t || (t = 0), t) : t
    }

    function bs(n) {
        var t, e, u, r, i;
        if (0 === n._f.length)return f(n).invalidFormat = !0, void(n._d = new Date(NaN));
        for (r = 0; r < n._f.length; r++)i = 0, t = hr({}, n), null != n._useUTC && (t._useUTC = n._useUTC), t._f = n._f[r], br(t), sr(t) && (i += f(t).charsLeftOver, i += 10 * f(t).unusedTokens.length, f(t).score = i, (null == u || u > i) && (u = i, e = t));
        wt(n, e || t)
    }

    function ks(n) {
        if (!n._d) {
            var t = uf(n._i);
            n._a = bu([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (n) {
                return n && parseInt(n, 10)
            });
            wr(n)
        }
    }

    function ds(n) {
        var t = new ei(pr(yf(n)));
        return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
    }

    function yf(n) {
        var t = n._i, i = n._f;
        return n._locale = n._locale || ct(n._l), null === t || void 0 === i && "" === t ? vi({nullInput: !0}) : ("string" == typeof t && (n._i = t = n._locale.preparse(t)), st(t) ? new ei(pr(t)) : (pt(i) ? bs(n) : i ? br(n) : ai(t) ? n._d = t : gs(n), sr(n) || (n._d = null), n))
    }

    function gs(n) {
        var i = n._i;
        void 0 === i ? n._d = new Date(t.now()) : ai(i) ? n._d = new Date(i.valueOf()) : "string" == typeof i ? ls(n) : pt(i) ? (n._a = bu(i.slice(0), function (n) {
            return parseInt(n, 10)
        }), wr(n)) : "object" == typeof i ? ks(n) : "number" == typeof i ? n._d = new Date(i) : t.createFromInputFallback(n)
    }

    function pf(n, t, i, r, u) {
        var f = {};
        return "boolean" == typeof i && (r = i, i = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = u, f._l = i, f._i = n, f._f = t, f._strict = r, ds(f)
    }

    function h(n, t, i, r) {
        return pf(n, t, i, r, !1)
    }

    function wf(n, t) {
        var r, i;
        if (1 === t.length && pt(t[0]) && (t = t[0]), !t.length)return h();
        for (r = t[0], i = 1; i < t.length; ++i)(!t[i].isValid() || t[i][n](r)) && (r = t[i]);
        return r
    }

    function nh() {
        var n = [].slice.call(arguments, 0);
        return wf("isBefore", n)
    }

    function th() {
        var n = [].slice.call(arguments, 0);
        return wf("isAfter", n)
    }

    function bi(n) {
        var t = uf(n), i = t.year || 0, r = t.quarter || 0, u = t.month || 0, f = t.week || 0, e = t.day || 0,
            o = t.hour || 0, s = t.minute || 0, h = t.second || 0, c = t.millisecond || 0;
        this._milliseconds = +c + 1e3 * h + 6e4 * s + 36e5 * o;
        this._days = +e + 7 * f;
        this._months = +u + 3 * r + 12 * i;
        this._data = {};
        this._locale = ct();
        this._bubble()
    }

    function kr(n) {
        return n instanceof bi
    }

    function bf(n, t) {
        r(n, 0, 0, function () {
            var n = this.utcOffset(), i = "+";
            return 0 > n && (n = -n, i = "-"), i + ut(~~(n / 60), 2) + t + ut(~~n % 60, 2)
        })
    }

    function dr(n, t) {
        var r = (t || "").match(n) || [], f = r[r.length - 1] || [], i = (f + "").match(to) || ["-", 0, 0],
            u = +(60 * i[1]) + e(i[2]);
        return "+" === i[0] ? u : -u
    }

    function gr(n, i) {
        var r, u;
        return i._isUTC ? (r = i.clone(), u = (st(n) || ai(n) ? n.valueOf() : h(n).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + u), t.updateOffset(r, !1), r) : h(n).local()
    }

    function nu(n) {
        return 15 * -Math.round(n._d.getTimezoneOffset() / 15)
    }

    function ih(n, i) {
        var r, u = this._offset || 0;
        return this.isValid() ? null != n ? ("string" == typeof n ? n = dr(er, n) : Math.abs(n) < 16 && (n = 60 * n), !this._isUTC && i && (r = nu(this)), this._offset = n, this._isUTC = !0, null != r && this.add(r, "m"), u !== n && (!i || this._changeInProgress ? te(this, lt(n - u, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? u : nu(this) : null != n ? this : NaN
    }

    function rh(n, t) {
        return null != n ? ("string" != typeof n && (n = -n), this.utcOffset(n, t), this) : -this.utcOffset()
    }

    function uh(n) {
        return this.utcOffset(0, n)
    }

    function fh(n) {
        return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(nu(this), "m")), this
    }

    function eh() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(dr(vv, this._i)), this
    }

    function oh(n) {
        return this.isValid() ? (n = n ? h(n).utcOffset() : 0, (this.utcOffset() - n) % 60 == 0) : !1
    }

    function sh() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function hh() {
        var n, t;
        return p(this._isDSTShifted) ? (n = {}, (hr(n, this), n = yf(n), n._a) ? (t = n._isUTC ? it(n._a) : h(n._a), this._isDSTShifted = this.isValid() && ku(n._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted) : this._isDSTShifted
    }

    function ch() {
        return this.isValid() ? !this._isUTC : !1
    }

    function lh() {
        return this.isValid() ? this._isUTC : !1
    }

    function kf() {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1
    }

    function lt(n, t) {
        var u, f, o, i = n, r = null;
        return kr(n) ? i = {
            ms: n._milliseconds,
            d: n._days,
            M: n._months
        } : "number" == typeof n ? (i = {}, t ? i[t] = n : i.milliseconds = n) : (r = io.exec(n)) ? (u = "-" === r[1] ? -1 : 1, i = {
            y: 0,
            d: e(r[rt]) * u,
            h: e(r[v]) * u,
            m: e(r[tt]) * u,
            s: e(r[et]) * u,
            ms: e(r[ni]) * u
        }) : (r = ro.exec(n)) ? (u = "-" === r[1] ? -1 : 1, i = {
            y: dt(r[2], u),
            M: dt(r[3], u),
            w: dt(r[4], u),
            d: dt(r[5], u),
            h: dt(r[6], u),
            m: dt(r[7], u),
            s: dt(r[8], u)
        }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (o = ah(h(i.from), h(i.to)), i = {}, i.ms = o.milliseconds, i.M = o.months), f = new bi(i), kr(n) && w(n, "_locale") && (f._locale = n._locale), f
    }

    function dt(n, t) {
        var i = n && parseFloat(n.replace(",", "."));
        return (isNaN(i) ? 0 : i) * t
    }

    function df(n, t) {
        var i = {milliseconds: 0, months: 0};
        return i.months = t.month() - n.month() + 12 * (t.year() - n.year()), n.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +n.clone().add(i.months, "M"), i
    }

    function ah(n, t) {
        var i;
        return n.isValid() && t.isValid() ? (t = gr(t, n), n.isBefore(t) ? i = df(n, t) : (i = df(t, n), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : {
            milliseconds: 0,
            months: 0
        }
    }

    function gf(n) {
        return 0 > n ? -1 * Math.round(-1 * n) : Math.round(n)
    }

    function ne(n, t) {
        return function (i, r) {
            var u, f;
            return null === r || isNaN(+r) || (cr(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), f = i, i = r, r = f), i = "string" == typeof i ? +i : i, u = lt(i, r), te(this, u, n), this
        }
    }

    function te(n, i, r, u) {
        var o = i._milliseconds, f = gf(i._days), e = gf(i._months);
        n.isValid() && (u = null == u ? !0 : u, o && n._d.setTime(n._d.valueOf() + o * r), f && ff(n, "Date", yi(n, "Date") + f * r), e && sf(n, yi(n, "Month") + e * r), u && t.updateOffset(n, f || e))
    }

    function vh(n, t) {
        var u = n || h(), f = gr(u, this).startOf("day"), i = this.diff(f, "days", !0),
            r = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse",
            e = t && (ht(t[r]) ? t[r]() : t[r]);
        return this.format(e || this.localeData().calendar(r, this, h(u)))
    }

    function yh() {
        return new ei(this)
    }

    function ph(n, t) {
        var i = st(n) ? n : h(n);
        return this.isValid() && i.isValid() ? (t = g(p(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(t).valueOf()) : !1
    }

    function wh(n, t) {
        var i = st(n) ? n : h(n);
        return this.isValid() && i.isValid() ? (t = g(p(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < i.valueOf() : this.clone().endOf(t).valueOf() < i.valueOf()) : !1
    }

    function bh(n, t, i, r) {
        return r = r || "()", ("(" === r[0] ? this.isAfter(n, i) : !this.isBefore(n, i)) && (")" === r[1] ? this.isBefore(t, i) : !this.isAfter(t, i))
    }

    function kh(n, t) {
        var i, r = st(n) ? n : h(n);
        return this.isValid() && r.isValid() ? (t = g(t || "millisecond"), "millisecond" === t ? this.valueOf() === r.valueOf() : (i = r.valueOf(), this.clone().startOf(t).valueOf() <= i && i <= this.clone().endOf(t).valueOf())) : !1
    }

    function dh(n, t) {
        return this.isSame(n, t) || this.isAfter(n, t)
    }

    function gh(n, t) {
        return this.isSame(n, t) || this.isBefore(n, t)
    }

    function nc(n, t, i) {
        var f, e, r, u;
        return this.isValid() ? (f = gr(n, this), f.isValid() ? (e = 6e4 * (f.utcOffset() - this.utcOffset()), t = g(t), "year" === t || "month" === t || "quarter" === t ? (u = tc(this, f), "quarter" === t ? u /= 3 : "year" === t && (u /= 12)) : (r = this - f, u = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - e) / 864e5 : "week" === t ? (r - e) / 6048e5 : r), i ? u : b(u)) : NaN) : NaN
    }

    function tc(n, t) {
        var r, f, u = 12 * (t.year() - n.year()) + (t.month() - n.month()), i = n.clone().add(u, "months");
        return 0 > t - i ? (r = n.clone().add(u - 1, "months"), f = (t - i) / (i - r)) : (r = n.clone().add(u + 1, "months"), f = (t - i) / (r - i)), -(u + f) || 0
    }

    function ic() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function rc() {
        var n = this.clone().utc();
        return 0 < n.year() && n.year() <= 9999 ? ht(Date.prototype.toISOString) ? this.toDate().toISOString() : vr(n, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : vr(n, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function uc(n) {
        n || (n = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var i = vr(this, n);
        return this.localeData().postformat(i)
    }

    function fc(n, t) {
        return this.isValid() && (st(n) && n.isValid() || h(n).isValid()) ? lt({
            to: this,
            from: n
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function ec(n) {
        return this.from(h(), n)
    }

    function oc(n, t) {
        return this.isValid() && (st(n) && n.isValid() || h(n).isValid()) ? lt({
            from: this,
            to: n
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function sc(n) {
        return this.to(h(), n)
    }

    function ie(n) {
        var t;
        return void 0 === n ? this._locale._abbr : (t = ct(n), null != t && (this._locale = t), this)
    }

    function re() {
        return this._locale
    }

    function hc(n) {
        switch (n = g(n)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
            case"date":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return "week" === n && this.weekday(0), "isoWeek" === n && this.isoWeekday(1), "quarter" === n && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function cc(n) {
        return n = g(n), void 0 === n || "millisecond" === n ? this : ("date" === n && (n = "day"), this.startOf(n).add(1, "isoWeek" === n ? "week" : n).subtract(1, "ms"))
    }

    function lc() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function ac() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function vc() {
        return this._offset ? new Date(this.valueOf()) : this._d
    }

    function yc() {
        var n = this;
        return [n.year(), n.month(), n.date(), n.hour(), n.minute(), n.second(), n.millisecond()]
    }

    function pc() {
        var n = this;
        return {
            years: n.year(),
            months: n.month(),
            date: n.date(),
            hours: n.hours(),
            minutes: n.minutes(),
            seconds: n.seconds(),
            milliseconds: n.milliseconds()
        }
    }

    function wc() {
        return this.isValid() ? this.toISOString() : null
    }

    function bc() {
        return sr(this)
    }

    function kc() {
        return wt({}, f(this))
    }

    function dc() {
        return f(this).overflow
    }

    function gc() {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }

    function ki(n, t) {
        r(0, [n, n.length], 0, t)
    }

    function nl(n) {
        return ue.call(this, n, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function tl(n) {
        return ue.call(this, n, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function il() {
        return kt(this.year(), 1, 4)
    }

    function rl() {
        var n = this.localeData()._week;
        return kt(this.year(), n.dow, n.doy)
    }

    function ue(n, t, i, r, u) {
        var f;
        return null == n ? hi(this, r, u).year : (f = kt(n, r, u), t > f && (t = f), ul.call(this, n, t, i, r, u))
    }

    function ul(n, t, i, r, u) {
        var e = vf(n, t, i, r, u), f = pi(e.year, 0, e.dayOfYear);
        return this.year(f.getUTCFullYear()), this.month(f.getUTCMonth()), this.date(f.getUTCDate()), this
    }

    function fl(n) {
        return null == n ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (n - 1) + this.month() % 3)
    }

    function el(n) {
        return hi(n, this._week.dow, this._week.doy).week
    }

    function ol() {
        return this._week.dow
    }

    function sl() {
        return this._week.doy
    }

    function hl(n) {
        var t = this.localeData().week(this);
        return null == n ? t : this.add(7 * (n - t), "d")
    }

    function cl(n) {
        var t = hi(this, 1, 4).week;
        return null == n ? t : this.add(7 * (n - t), "d")
    }

    function ll(n, t) {
        return "string" != typeof n ? n : isNaN(n) ? (n = t.weekdaysParse(n), "number" == typeof n ? n : null) : parseInt(n, 10)
    }

    function al(n, t) {
        return pt(this._weekdays) ? this._weekdays[n.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][n.day()]
    }

    function vl(n) {
        return this._weekdaysShort[n.day()]
    }

    function yl(n) {
        return this._weekdaysMin[n.day()]
    }

    function pl(n, t, i) {
        var f, r, e, u = n.toLocaleLowerCase();
        if (!this._weekdaysParse)for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], f = 0; 7 > f; ++f)e = it([2e3, 1]).day(f), this._minWeekdaysParse[f] = this.weekdaysMin(e, "").toLocaleLowerCase(), this._shortWeekdaysParse[f] = this.weekdaysShort(e, "").toLocaleLowerCase(), this._weekdaysParse[f] = this.weekdays(e, "").toLocaleLowerCase();
        return i ? "dddd" === t ? (r = a.call(this._weekdaysParse, u), -1 !== r ? r : null) : "ddd" === t ? (r = a.call(this._shortWeekdaysParse, u), -1 !== r ? r : null) : (r = a.call(this._minWeekdaysParse, u), -1 !== r ? r : null) : "dddd" === t ? (r = a.call(this._weekdaysParse, u), -1 !== r ? r : (r = a.call(this._shortWeekdaysParse, u), -1 !== r ? r : (r = a.call(this._minWeekdaysParse, u), -1 !== r ? r : null))) : "ddd" === t ? (r = a.call(this._shortWeekdaysParse, u), -1 !== r ? r : (r = a.call(this._weekdaysParse, u), -1 !== r ? r : (r = a.call(this._minWeekdaysParse, u), -1 !== r ? r : null))) : (r = a.call(this._minWeekdaysParse, u), -1 !== r ? r : (r = a.call(this._weekdaysParse, u), -1 !== r ? r : (r = a.call(this._shortWeekdaysParse, u), -1 !== r ? r : null)))
    }

    function wl(n, t, i) {
        var r, u, f;
        if (this._weekdaysParseExact)return pl.call(this, n, t, i);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; 7 > r; r++)if ((u = it([2e3, 1]).day(r), i && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(u, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(u, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(u, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[r] || (f = "^" + this.weekdays(u, "") + "|^" + this.weekdaysShort(u, "") + "|^" + this.weekdaysMin(u, ""), this._weekdaysParse[r] = new RegExp(f.replace(".", ""), "i")), i && "dddd" === t && this._fullWeekdaysParse[r].test(n)) || i && "ddd" === t && this._shortWeekdaysParse[r].test(n) || i && "dd" === t && this._minWeekdaysParse[r].test(n) || !i && this._weekdaysParse[r].test(n))return r
    }

    function bl(n) {
        if (!this.isValid())return null != n ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != n ? (n = ll(n, this.localeData()), this.add(n - t, "d")) : t
    }

    function kl(n) {
        if (!this.isValid())return null != n ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == n ? t : this.add(n - t, "d")
    }

    function dl(n) {
        return this.isValid() ? null == n ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7) : null != n ? this : NaN
    }

    function gl(n) {
        return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || tu.call(this), n ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && n ? this._weekdaysStrictRegex : this._weekdaysRegex
    }

    function na(n) {
        return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || tu.call(this), n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
    }

    function ta(n) {
        return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || tu.call(this), n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
    }

    function tu() {
        function u(n, t) {
            return t.length - n.length
        }

        for (var f, e, o, s, h = [], i = [], r = [], t = [],
                 n = 0; 7 > n; n++)f = it([2e3, 1]).day(n), e = this.weekdaysMin(f, ""), o = this.weekdaysShort(f, ""), s = this.weekdays(f, ""), h.push(e), i.push(o), r.push(s), t.push(e), t.push(o), t.push(s);
        for (h.sort(u), i.sort(u), r.sort(u), t.sort(u), n = 0; 7 > n; n++)i[n] = bt(i[n]), r[n] = bt(r[n]), t[n] = bt(t[n]);
        this._weekdaysRegex = new RegExp("^(" + t.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + h.join("|") + ")", "i")
    }

    function ia(n) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == n ? t : this.add(n - t, "d")
    }

    function iu() {
        return this.hours() % 12 || 12
    }

    function ra() {
        return this.hours() || 24
    }

    function fe(n, t) {
        r(n, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function ee(n, t) {
        return t._meridiemParse
    }

    function ua(n) {
        return "p" === (n + "").toLowerCase().charAt(0)
    }

    function fa(n, t, i) {
        return n > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
    }

    function ea(n, t) {
        t[ni] = e(1e3 * ("0." + n))
    }

    function oa() {
        return this._isUTC ? "UTC" : ""
    }

    function sa() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function ha(n) {
        return h(1e3 * n)
    }

    function ca() {
        return h.apply(null, arguments).parseZone()
    }

    function la(n, t, i) {
        var r = this._calendar[n];
        return ht(r) ? r.call(t, i) : r
    }

    function aa(n) {
        var t = this._longDateFormat[n], i = this._longDateFormat[n.toUpperCase()];
        return t || !i ? t : (this._longDateFormat[n] = i.replace(/MMMM|MM|DD|dddd/g, function (n) {
            return n.slice(1)
        }), this._longDateFormat[n])
    }

    function va() {
        return this._invalidDate
    }

    function ya(n) {
        return this._ordinal.replace("%d", n)
    }

    function oe(n) {
        return n
    }

    function pa(n, t, i, r) {
        var u = this._relativeTime[i];
        return ht(u) ? u(n, t, i, r) : u.replace(/%d/i, n)
    }

    function wa(n, t) {
        var i = this._relativeTime[n > 0 ? "future" : "past"];
        return ht(i) ? i(t) : i.replace(/%s/i, t)
    }

    function di(n, t, i, r) {
        var u = ct(), f = it().set(r, t);
        return u[i](f, n)
    }

    function se(n, t, i) {
        if ("number" == typeof n && (t = n, n = void 0), n = n || "", null != t)return di(n, t, i, "month");
        for (var u = [], r = 0; 12 > r; r++)u[r] = di(n, r, i, "month");
        return u
    }

    function ru(n, t, i, r) {
        var o, f, u, e;
        if ("boolean" == typeof n ? ("number" == typeof t && (i = t, t = void 0), t = t || "") : (t = n, i = t, n = !1, "number" == typeof t && (i = t, t = void 0), t = t || ""), o = ct(), f = n ? o._week.dow : 0, null != i)return di(t, (i + f) % 7, r, "day");
        for (e = [], u = 0; 7 > u; u++)e[u] = di(t, (u + f) % 7, r, "day");
        return e
    }

    function ba(n, t) {
        return se(n, t, "months")
    }

    function ka(n, t) {
        return se(n, t, "monthsShort")
    }

    function da(n, t, i) {
        return ru(n, t, i, "weekdays")
    }

    function ga(n, t, i) {
        return ru(n, t, i, "weekdaysShort")
    }

    function nv(n, t, i) {
        return ru(n, t, i, "weekdaysMin")
    }

    function tv() {
        var n = this._data;
        return this._milliseconds = ot(this._milliseconds), this._days = ot(this._days), this._months = ot(this._months), n.milliseconds = ot(n.milliseconds), n.seconds = ot(n.seconds), n.minutes = ot(n.minutes), n.hours = ot(n.hours), n.months = ot(n.months), n.years = ot(n.years), this
    }

    function he(n, t, i, r) {
        var u = lt(t, i);
        return n._milliseconds += r * u._milliseconds, n._days += r * u._days, n._months += r * u._months, n._bubble()
    }

    function iv(n, t) {
        return he(this, n, t, 1)
    }

    function rv(n, t) {
        return he(this, n, t, -1)
    }

    function ce(n) {
        return 0 > n ? Math.floor(n) : Math.ceil(n)
    }

    function uv() {
        var u, f, e, s, o, r = this._milliseconds, n = this._days, t = this._months, i = this._data;
        return r >= 0 && n >= 0 && t >= 0 || 0 >= r && 0 >= n && 0 >= t || (r += 864e5 * ce(uu(t) + n), n = 0, t = 0), i.milliseconds = r % 1e3, u = b(r / 1e3), i.seconds = u % 60, f = b(u / 60), i.minutes = f % 60, e = b(f / 60), i.hours = e % 24, n += b(e / 24), o = b(le(n)), t += o, n -= ce(uu(o)), s = b(t / 12), t %= 12, i.days = n, i.months = t, i.years = s, this
    }

    function le(n) {
        return 4800 * n / 146097
    }

    function uu(n) {
        return 146097 * n / 4800
    }

    function fv(n) {
        var t, r, i = this._milliseconds;
        if (n = g(n), "month" === n || "year" === n)return t = this._days + i / 864e5, r = this._months + le(t), "month" === n ? r : r / 12;
        switch (t = this._days + Math.round(uu(this._months)), n) {
            case"week":
                return t / 7 + i / 6048e5;
            case"day":
                return t + i / 864e5;
            case"hour":
                return 24 * t + i / 36e5;
            case"minute":
                return 1440 * t + i / 6e4;
            case"second":
                return 86400 * t + i / 1e3;
            case"millisecond":
                return Math.floor(864e5 * t) + i;
            default:
                throw new Error("Unknown unit " + n);
        }
    }

    function ev() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * e(this._months / 12)
    }

    function at(n) {
        return function () {
            return this.as(n)
        }
    }

    function ov(n) {
        return n = g(n), this[n + "s"]()
    }

    function gt(n) {
        return function () {
            return this._data[n]
        }
    }

    function sv() {
        return b(this.days() / 7)
    }

    function hv(n, t, i, r, u) {
        return u.relativeTime(t || 1, !!i, n, r)
    }

    function cv(n, t, i) {
        var r = lt(n).abs(), h = fi(r.as("s")), f = fi(r.as("m")), e = fi(r.as("h")), o = fi(r.as("d")),
            s = fi(r.as("M")), c = fi(r.as("y")),
            u = h < yt.s && ["s", h] || 1 >= f && ["m"] || f < yt.m && ["mm", f] || 1 >= e && ["h"] || e < yt.h && ["hh", e] || 1 >= o && ["d"] || o < yt.d && ["dd", o] || 1 >= s && ["M"] || s < yt.M && ["MM", s] || 1 >= c && ["y"] || ["yy", c];
        return u[2] = t, u[3] = +n > 0, u[4] = i, hv.apply(null, u)
    }

    function lv(n, t) {
        return void 0 === yt[n] ? !1 : void 0 === t ? yt[n] : (yt[n] = t, !0)
    }

    function av(n) {
        var t = this.localeData(), i = cv(this, !n, t);
        return n && (i = t.pastFuture(+this, i)), t.postformat(i)
    }

    function gi() {
        var n, e, o, t = wu(this._milliseconds) / 1e3, a = wu(this._days), i = wu(this._months);
        n = b(t / 60);
        e = b(n / 60);
        t %= 60;
        n %= 60;
        o = b(i / 12);
        i %= 12;
        var s = o, h = i, c = a, r = e, u = n, f = t, l = this.asSeconds();
        return l ? (0 > l ? "-" : "") + "P" + (s ? s + "Y" : "") + (h ? h + "M" : "") + (c ? c + "D" : "") + (r || u || f ? "T" : "") + (r ? r + "H" : "") + (u ? u + "M" : "") + (f ? f + "S" : "") : "P0D"
    }

    var ae, ve, pe, vu, to, io, ro, uo, fo, yu, eo, pu, oo, so, ho, co, vt, lo, n;
    ve = Array.prototype.some ? Array.prototype.some : function (n) {
        for (var i = Object(this), r = i.length >>> 0,
                 t = 0; r > t; t++)if (t in i && n.call(this, i[t], t, i))return !0;
        return !1
    };
    var fu = t.momentProperties = [], eu = !1, ye = {};
    t.suppressDeprecationWarnings = !1;
    t.deprecationHandler = null;
    pe = Object.keys ? Object.keys : function (n) {
        var t, i = [];
        for (t in n)w(n, t) && i.push(t);
        return i
    };
    var nr, a, l = {}, ci = {},
        we = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        tr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ou = {}, ui = {}, be = /\d/, k = /\d\d/, ke = /\d{3}/,
        su = /\d{4}/, ir = /[+-]?\d{6}/, c = /\d\d?/, de = /\d\d\d\d?/, ge = /\d\d\d\d\d\d?/, rr = /\d{1,3}/,
        hu = /\d{1,4}/, ur = /[+-]?\d{1,6}/, fr = /[+-]?\d+/, vv = /Z|[+-]\d\d:?\d\d/gi, er = /Z|[+-]\d\d(?::?\d\d)?/gi,
        li = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        cu = {}, lu = {}, nt = 0, ft = 1, rt = 2, v = 3, tt = 4, et = 5, ni = 6, yv = 7, pv = 8;
    a = Array.prototype.indexOf ? Array.prototype.indexOf : function (n) {
        for (var t = 0; t < this.length; ++t)if (this[t] === n)return t;
        return -1
    };
    r("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    });
    r("MMM", 0, 0, function (n) {
        return this.localeData().monthsShort(this, n)
    });
    r("MMMM", 0, 0, function (n) {
        return this.localeData().months(this, n)
    });
    y("month", "M");
    i("M", c);
    i("MM", c, k);
    i("MMM", function (n, t) {
        return t.monthsShortRegex(n)
    });
    i("MMMM", function (n, t) {
        return t.monthsRegex(n)
    });
    s(["M", "MM"], function (n, t) {
        t[ft] = e(n) - 1
    });
    s(["MMM", "MMMM"], function (n, t, i, r) {
        var u = i._locale.monthsParse(n, r, i._strict);
        null != u ? t[ft] = u : f(i).invalidMonth = n
    });
    var no = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
        wv = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        bv = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), kv = li, dv = li,
        gv = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        ny = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        ty = /Z|[+-]\d\d(?::?\d\d)?/,
        or = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
        au = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
        iy = /^\/?Date\((\-?\d+)/i;
    t.createFromInputFallback = d("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (n) {
        n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
    });
    r("Y", 0, 0, function () {
        var n = this.year();
        return 9999 >= n ? "" + n : "+" + n
    });
    r(0, ["YY", 2], 0, function () {
        return this.year() % 100
    });
    r(0, ["YYYY", 4], 0, "year");
    r(0, ["YYYYY", 5], 0, "year");
    r(0, ["YYYYYY", 6, !0], 0, "year");
    y("year", "y");
    i("Y", fr);
    i("YY", c, k);
    i("YYYY", hu, su);
    i("YYYYY", ur, ir);
    i("YYYYYY", ur, ir);
    s(["YYYYY", "YYYYYY"], nt);
    s("YYYY", function (n, i) {
        i[nt] = 2 === n.length ? t.parseTwoDigitYear(n) : e(n)
    });
    s("YY", function (n, i) {
        i[nt] = t.parseTwoDigitYear(n)
    });
    s("Y", function (n, t) {
        t[nt] = parseInt(n, 10)
    });
    t.parseTwoDigitYear = function (n) {
        return e(n) + (e(n) > 68 ? 1900 : 2e3)
    };
    vu = ii("FullYear", !0);
    t.ISO_8601 = function () {
    };
    var ry = d("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
            var n = h.apply(null, arguments);
            return this.isValid() && n.isValid() ? this > n ? this : n : vi()
        }),
        uy = d("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
            var n = h.apply(null, arguments);
            return this.isValid() && n.isValid() ? n > this ? this : n : vi()
        }), fy = function () {
            return Date.now ? Date.now() : +new Date
        };
    bf("Z", ":");
    bf("ZZ", "");
    i("Z", er);
    i("ZZ", er);
    s(["Z", "ZZ"], function (n, t, i) {
        i._useUTC = !0;
        i._tzm = dr(er, n)
    });
    to = /([\+\-]|\d\d)/gi;
    t.updateOffset = function () {
    };
    io = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;
    ro = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    lt.fn = bi.prototype;
    uo = ne(1, "add");
    fo = ne(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    yu = d("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (n) {
        return void 0 === n ? this.localeData() : this.locale(n)
    });
    r(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    });
    r(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    });
    ki("gggg", "weekYear");
    ki("ggggg", "weekYear");
    ki("GGGG", "isoWeekYear");
    ki("GGGGG", "isoWeekYear");
    y("weekYear", "gg");
    y("isoWeekYear", "GG");
    i("G", fr);
    i("g", fr);
    i("GG", c, k);
    i("gg", c, k);
    i("GGGG", hu, su);
    i("gggg", hu, su);
    i("GGGGG", ur, ir);
    i("ggggg", ur, ir);
    oi(["gggg", "ggggg", "GGGG", "GGGGG"], function (n, t, i, r) {
        t[r.substr(0, 2)] = e(n)
    });
    oi(["gg", "GG"], function (n, i, r, u) {
        i[u] = t.parseTwoDigitYear(n)
    });
    r("Q", 0, "Qo", "quarter");
    y("quarter", "Q");
    i("Q", be);
    s("Q", function (n, t) {
        t[ft] = 3 * (e(n) - 1)
    });
    r("w", ["ww", 2], "wo", "week");
    r("W", ["WW", 2], "Wo", "isoWeek");
    y("week", "w");
    y("isoWeek", "W");
    i("w", c);
    i("ww", c, k);
    i("W", c);
    i("WW", c, k);
    oi(["w", "ww", "W", "WW"], function (n, t, i, r) {
        t[r.substr(0, 1)] = e(n)
    });
    eo = {dow: 0, doy: 6};
    r("D", ["DD", 2], "Do", "date");
    y("date", "D");
    i("D", c);
    i("DD", c, k);
    i("Do", function (n, t) {
        return n ? t._ordinalParse : t._ordinalParseLenient
    });
    s(["D", "DD"], rt);
    s("Do", function (n, t) {
        t[rt] = e(n.match(c)[0], 10)
    });
    pu = ii("Date", !0);
    r("d", 0, "do", "day");
    r("dd", 0, 0, function (n) {
        return this.localeData().weekdaysMin(this, n)
    });
    r("ddd", 0, 0, function (n) {
        return this.localeData().weekdaysShort(this, n)
    });
    r("dddd", 0, 0, function (n) {
        return this.localeData().weekdays(this, n)
    });
    r("e", 0, 0, "weekday");
    r("E", 0, 0, "isoWeekday");
    y("day", "d");
    y("weekday", "e");
    y("isoWeekday", "E");
    i("d", c);
    i("e", c);
    i("E", c);
    i("dd", function (n, t) {
        return t.weekdaysMinRegex(n)
    });
    i("ddd", function (n, t) {
        return t.weekdaysShortRegex(n)
    });
    i("dddd", function (n, t) {
        return t.weekdaysRegex(n)
    });
    oi(["dd", "ddd", "dddd"], function (n, t, i, r) {
        var u = i._locale.weekdaysParse(n, r, i._strict);
        null != u ? t.d = u : f(i).invalidWeekday = n
    });
    oi(["d", "e", "E"], function (n, t, i, r) {
        t[r] = e(n)
    });
    var ey = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        oy = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), sy = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), hy = li, cy = li,
        ly = li;
    for (r("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), y("dayOfYear", "DDD"), i("DDD", rr), i("DDDD", ke), s(["DDD", "DDDD"], function (n, t, i) {
        i._dayOfYear = e(n)
    }), r("H", ["HH", 2], 0, "hour"), r("h", ["hh", 2], 0, iu), r("k", ["kk", 2], 0, ra), r("hmm", 0, 0, function () {
        return "" + iu.apply(this) + ut(this.minutes(), 2)
    }), r("hmmss", 0, 0, function () {
        return "" + iu.apply(this) + ut(this.minutes(), 2) + ut(this.seconds(), 2)
    }), r("Hmm", 0, 0, function () {
        return "" + this.hours() + ut(this.minutes(), 2)
    }), r("Hmmss", 0, 0, function () {
        return "" + this.hours() + ut(this.minutes(), 2) + ut(this.seconds(), 2)
    }), fe("a", !0), fe("A", !1), y("hour", "h"), i("a", ee), i("A", ee), i("H", c), i("h", c), i("HH", c, k), i("hh", c, k), i("hmm", de), i("hmmss", ge), i("Hmm", de), i("Hmmss", ge), s(["H", "HH"], v), s(["a", "A"], function (n, t, i) {
        i._isPm = i._locale.isPM(n);
        i._meridiem = n
    }), s(["h", "hh"], function (n, t, i) {
        t[v] = e(n);
        f(i).bigHour = !0
    }), s("hmm", function (n, t, i) {
        var r = n.length - 2;
        t[v] = e(n.substr(0, r));
        t[tt] = e(n.substr(r));
        f(i).bigHour = !0
    }), s("hmmss", function (n, t, i) {
        var r = n.length - 4, u = n.length - 2;
        t[v] = e(n.substr(0, r));
        t[tt] = e(n.substr(r, 2));
        t[et] = e(n.substr(u));
        f(i).bigHour = !0
    }), s("Hmm", function (n, t) {
        var i = n.length - 2;
        t[v] = e(n.substr(0, i));
        t[tt] = e(n.substr(i))
    }), s("Hmmss", function (n, t) {
        var i = n.length - 4, r = n.length - 2;
        t[v] = e(n.substr(0, i));
        t[tt] = e(n.substr(i, 2));
        t[et] = e(n.substr(r))
    }), oo = /[ap]\.?m?\.?/i, so = ii("Hours", !0), r("m", ["mm", 2], 0, "minute"), y("minute", "m"), i("m", c), i("mm", c, k), s(["m", "mm"], tt), ho = ii("Minutes", !1), r("s", ["ss", 2], 0, "second"), y("second", "s"), i("s", c), i("ss", c, k), s(["s", "ss"], et), co = ii("Seconds", !1), r("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), r(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), r(0, ["SSS", 3], 0, "millisecond"), r(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), r(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), r(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), r(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), r(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), r(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), y("millisecond", "ms"), i("S", rr, be), i("SS", rr, k), i("SSS", rr, ke), vt = "SSSS"; vt.length <= 9; vt += "S")i(vt, /\d+/);
    for (vt = "S"; vt.length <= 9; vt += "S")s(vt, ea);
    lo = ii("Milliseconds", !1);
    r("z", 0, 0, "zoneAbbr");
    r("zz", 0, 0, "zoneName");
    n = ei.prototype;
    n.add = uo;
    n.calendar = vh;
    n.clone = yh;
    n.diff = nc;
    n.endOf = cc;
    n.format = uc;
    n.from = fc;
    n.fromNow = ec;
    n.to = oc;
    n.toNow = sc;
    n.get = ef;
    n.invalidAt = dc;
    n.isAfter = ph;
    n.isBefore = wh;
    n.isBetween = bh;
    n.isSame = kh;
    n.isSameOrAfter = dh;
    n.isSameOrBefore = gh;
    n.isValid = bc;
    n.lang = yu;
    n.locale = ie;
    n.localeData = re;
    n.max = uy;
    n.min = ry;
    n.parsingFlags = kc;
    n.set = ef;
    n.startOf = hc;
    n.subtract = fo;
    n.toArray = yc;
    n.toObject = pc;
    n.toDate = vc;
    n.toISOString = rc;
    n.toJSON = wc;
    n.toString = ic;
    n.unix = ac;
    n.valueOf = lc;
    n.creationData = gc;
    n.year = vu;
    n.isLeapYear = vs;
    n.weekYear = nl;
    n.isoWeekYear = tl;
    n.quarter = n.quarters = fl;
    n.month = hf;
    n.daysInMonth = ss;
    n.week = n.weeks = hl;
    n.isoWeek = n.isoWeeks = cl;
    n.weeksInYear = rl;
    n.isoWeeksInYear = il;
    n.date = pu;
    n.day = n.days = bl;
    n.weekday = kl;
    n.isoWeekday = dl;
    n.dayOfYear = ia;
    n.hour = n.hours = so;
    n.minute = n.minutes = ho;
    n.second = n.seconds = co;
    n.millisecond = n.milliseconds = lo;
    n.utcOffset = ih;
    n.utc = uh;
    n.local = fh;
    n.parseZone = eh;
    n.hasAlignedHourOffset = oh;
    n.isDST = sh;
    n.isDSTShifted = hh;
    n.isLocal = ch;
    n.isUtcOffset = lh;
    n.isUtc = kf;
    n.isUTC = kf;
    n.zoneAbbr = oa;
    n.zoneName = sa;
    n.dates = d("dates accessor is deprecated. Use date instead.", pu);
    n.months = d("months accessor is deprecated. Use month instead", hf);
    n.years = d("years accessor is deprecated. Use year instead", vu);
    n.zone = d("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", rh);
    var ao = n, u = ar.prototype;
    u._calendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };
    u.calendar = la;
    u._longDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    u.longDateFormat = aa;
    u._invalidDate = "Invalid date";
    u.invalidDate = va;
    u._ordinal = "%d";
    u.ordinal = ya;
    u._ordinalParse = /\d{1,2}/;
    u.preparse = oe;
    u.postformat = oe;
    u._relativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    };
    u.relativeTime = pa;
    u.pastFuture = wa;
    u.set = po;
    u.months = us;
    u._months = wv;
    u.monthsShort = fs;
    u._monthsShort = bv;
    u.monthsParse = os;
    u._monthsRegex = dv;
    u.monthsRegex = cs;
    u._monthsShortRegex = kv;
    u.monthsShortRegex = hs;
    u.week = el;
    u._week = eo;
    u.firstDayOfYear = sl;
    u.firstDayOfWeek = ol;
    u.weekdays = al;
    u._weekdays = ey;
    u.weekdaysMin = yl;
    u._weekdaysMin = sy;
    u.weekdaysShort = vl;
    u._weekdaysShort = oy;
    u.weekdaysParse = wl;
    u._weekdaysRegex = hy;
    u.weekdaysRegex = gl;
    u._weekdaysShortRegex = cy;
    u.weekdaysShortRegex = na;
    u._weekdaysMinRegex = ly;
    u.weekdaysMinRegex = ta;
    u.isPM = ua;
    u._meridiemParse = oo;
    u.meridiem = fa;
    ti("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (n) {
            var t = n % 10, i = 1 === e(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return n + i
        }
    });
    t.lang = d("moment.lang is deprecated. Use moment.locale instead.", ti);
    t.langData = d("moment.langData is deprecated. Use moment.localeData instead.", ct);
    var ot = Math.abs, ay = at("ms"), vy = at("s"), yy = at("m"), py = at("h"), wy = at("d"), by = at("w"),
        ky = at("M"), dy = at("y"), gy = gt("milliseconds"), np = gt("seconds"), tp = gt("minutes"), ip = gt("hours"),
        rp = gt("days"), up = gt("months"), fp = gt("years"), fi = Math.round, yt = {s: 45, m: 45, h: 22, d: 26, M: 11},
        wu = Math.abs, o = bi.prototype;
    return o.abs = tv, o.add = iv, o.subtract = rv, o.as = fv, o.asMilliseconds = ay, o.asSeconds = vy, o.asMinutes = yy, o.asHours = py, o.asDays = wy, o.asWeeks = by, o.asMonths = ky, o.asYears = dy, o.valueOf = ev, o._bubble = uv, o.get = ov, o.milliseconds = gy, o.seconds = np, o.minutes = tp, o.hours = ip, o.days = rp, o.weeks = sv, o.months = up, o.years = fp, o.humanize = av, o.toISOString = gi, o.toString = gi, o.toJSON = gi, o.locale = ie, o.localeData = re, o.toIsoString = d("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", gi), o.lang = yu, r("X", 0, 0, "unix"), r("x", 0, 0, "valueOf"), i("x", fr), i("X", /[+-]?\d+(\.\d{1,3})?/), s("X", function (n, t, i) {
        i._d = new Date(1e3 * parseFloat(n, 10))
    }), s("x", function (n, t, i) {
        i._d = new Date(e(n))
    }), t.version = "2.13.0", vo(h), t.fn = ao, t.min = nh, t.max = th, t.now = fy, t.utc = it, t.unix = ha, t.months = ba, t.isDate = ai, t.locale = ti, t.invalid = vi, t.duration = lt, t.isMoment = st, t.weekdays = da, t.parseZone = ca, t.localeData = ct, t.isDuration = kr, t.monthsShort = ka, t.weekdaysMin = nv, t.defineLocale = rf, t.updateLocale = bo, t.locales = ko, t.weekdaysShort = ga, t.normalizeUnits = g, t.relativeTimeThreshold = lv, t.prototype = ao, t
}), function (n, t, i) {
    function v(t, i) {
        var u, f;
        if (n.isArray(t)) {
            for (u = t.length - 1; u >= 0; u--)f = t[u], n.type(f) === "string" && r.transports[f] || (i.log("Invalid transport: " + f + ", removing it from the transports list."), t.splice(u, 1));
            t.length === 0 && (i.log("No transports remain within the specified transport array."), t = null)
        } else if (r.transports[t] || t === "auto") {
            if (t === "auto" && r._.ieVersion <= 8)return ["longPolling"]
        } else i.log("Invalid transport: " + t.toString() + "."), t = null;
        return t
    }

    function y(n) {
        return n === "http:" ? 80 : n === "https:" ? 443 : void 0
    }

    function h(n, t) {
        return t.match(/:\d+$/) ? t : t + ":" + y(n)
    }

    function p(t, i) {
        var u = this, r = [];
        u.tryBuffer = function (i) {
            return t.state === n.signalR.connectionState.connecting ? (r.push(i), !0) : !1
        };
        u.drain = function () {
            if (t.state === n.signalR.connectionState.connected)while (r.length > 0)i(r.shift())
        };
        u.clear = function () {
            r = []
        }
    }

    var f = {
        nojQuery: "jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.",
        noTransportOnInit: "No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.",
        errorOnNegotiate: "Error during negotiation request.",
        stoppedWhileLoading: "The connection was stopped during page load.",
        stoppedWhileNegotiating: "The connection was stopped during the negotiate request.",
        errorParsingNegotiateResponse: "Error parsing negotiate response.",
        errorDuringStartRequest: "Error during start request. Stopping the connection.",
        stoppedDuringStartRequest: "The connection was stopped during the start request.",
        errorParsingStartResponse: "Error parsing start response: '{0}'. Stopping the connection.",
        invalidStartResponse: "Invalid start response: '{0}'. Stopping the connection.",
        protocolIncompatible: "You are using a version of the client that isn't compatible with the server. Client version {0}, server version {1}.",
        sendFailed: "Send failed.",
        parseFailed: "Failed at parsing response: {0}",
        longPollFailed: "Long polling request failed.",
        eventSourceFailedToConnect: "EventSource failed to connect.",
        eventSourceError: "Error raised by EventSource",
        webSocketClosed: "WebSocket closed.",
        pingServerFailedInvalidResponse: "Invalid ping response when pinging server: '{0}'.",
        pingServerFailed: "Failed to ping server.",
        pingServerFailedStatusCode: "Failed to ping server.  Server responded with status code {0}, stopping the connection.",
        pingServerFailedParse: "Failed to parse ping server response, stopping the connection.",
        noConnectionTransport: "Connection is in an invalid state, there is no transport active.",
        webSocketsInvalidState: "The Web Socket transport is in an invalid state, transitioning into reconnecting.",
        reconnectTimeout: "Couldn't reconnect within the configured timeout of {0} ms, disconnecting.",
        reconnectWindowTimeout: "The client has been inactive since {0} and it has exceeded the inactivity timeout of {1} ms. Stopping the connection."
    };
    if (typeof n != "function")throw new Error(f.nojQuery);
    var r, c, o = t.document.readyState === "complete", e = n(t), l = "__Negotiate Aborted__", u = {
        onStart: "onStart",
        onStarting: "onStarting",
        onReceived: "onReceived",
        onError: "onError",
        onConnectionSlow: "onConnectionSlow",
        onReconnecting: "onReconnecting",
        onReconnect: "onReconnect",
        onStateChanged: "onStateChanged",
        onDisconnect: "onDisconnect"
    }, w = function (n, i) {
        if (i !== !1) {
            var r;
            typeof t.console != "undefined" && (r = "[" + (new Date).toTimeString() + "] SignalR: " + n, t.console.debug ? t.console.debug(r) : t.console.log && t.console.log(r))
        }
    }, s = function (t, i, r) {
        return i === t.state ? (t.state = r, n(t).triggerHandler(u.onStateChanged, [{
            oldState: i,
            newState: r
        }]), !0) : !1
    }, b = function (n) {
        return n.state === r.connectionState.disconnected
    }, a = function (n) {
        return n._.keepAliveData.activated && n.transport.supportsKeepAlive(n)
    }, k = function (i) {
        var f, e;
        i._.configuredStopReconnectingTimeout || (e = function (t) {
            var i = r._.format(r.resources.reconnectTimeout, t.disconnectTimeout);
            t.log(i);
            n(t).triggerHandler(u.onError, [r._.error(i, "TimeoutException")]);
            t.stop(!1, !1)
        }, i.reconnecting(function () {
            var n = this;
            n.state === r.connectionState.reconnecting && (f = t.setTimeout(function () {
                e(n)
            }, n.disconnectTimeout))
        }), i.stateChanged(function (n) {
            n.oldState === r.connectionState.reconnecting && t.clearTimeout(f)
        }), i._.configuredStopReconnectingTimeout = !0)
    };
    if (r = function (n, t, i) {
            return new r.fn.init(n, t, i)
        }, r._ = {
            defaultContentType: "application/x-www-form-urlencoded; charset=UTF-8", ieVersion: function () {
                var i, n;
                return t.navigator.appName === "Microsoft Internet Explorer" && (n = /MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent), n && (i = t.parseFloat(n[1]))), i
            }(), error: function (n, t, i) {
                var r = new Error(n);
                return r.source = t, typeof i != "undefined" && (r.context = i), r
            }, transportError: function (n, t, r, u) {
                var f = this.error(n, r, u);
                return f.transport = t ? t.name : i, f
            }, format: function () {
                for (var t = arguments[0],
                         n = 0; n < arguments.length - 1; n++)t = t.replace("{" + n + "}", arguments[n + 1]);
                return t
            }, firefoxMajorVersion: function (n) {
                var t = n.match(/Firefox\/(\d+)/);
                return !t || !t.length || t.length < 2 ? 0 : parseInt(t[1], 10)
            }, configurePingInterval: function (i) {
                var f = i._.config, e = function (t) {
                    n(i).triggerHandler(u.onError, [t])
                };
                f && !i._.pingIntervalId && f.pingInterval && (i._.pingIntervalId = t.setInterval(function () {
                    r.transports._logic.pingServer(i).fail(e)
                }, f.pingInterval))
            }
        }, r.events = u, r.resources = f, r.ajaxDefaults = {
            processData: !0,
            timeout: null,
            async: !0,
            global: !1,
            cache: !1
        }, r.changeState = s, r.isDisconnecting = b, r.connectionState = {
            connecting: 0,
            connected: 1,
            reconnecting: 2,
            disconnected: 4
        }, r.hub = {
            start: function () {
                throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/js'><\/script>.");
            }
        }, typeof e.on == "function") e.on("load", function () {
        o = !0
    }); else e.load(function () {
        o = !0
    });
    r.fn = r.prototype = {
        init: function (t, i, r) {
            var f = n(this);
            this.url = t;
            this.qs = i;
            this.lastError = null;
            this._ = {
                keepAliveData: {},
                connectingMessageBuffer: new p(this, function (n) {
                    f.triggerHandler(u.onReceived, [n])
                }),
                lastMessageAt: (new Date).getTime(),
                lastActiveAt: (new Date).getTime(),
                beatInterval: 5e3,
                beatHandle: null,
                totalTransportConnectTimeout: 0
            };
            typeof r == "boolean" && (this.logging = r)
        },
        _parseResponse: function (n) {
            var t = this;
            return n ? typeof n == "string" ? t.json.parse(n) : n : n
        },
        _originalJson: t.JSON,
        json: t.JSON,
        isCrossDomain: function (i, r) {
            var u;
            return (i = n.trim(i), r = r || t.location, i.indexOf("http") !== 0) ? !1 : (u = t.document.createElement("a"), u.href = i, u.protocol + h(u.protocol, u.host) !== r.protocol + h(r.protocol, r.host))
        },
        ajaxDataType: "text",
        contentType: "application/json; charset=UTF-8",
        logging: !1,
        state: r.connectionState.disconnected,
        clientProtocol: "1.5",
        reconnectDelay: 2e3,
        transportConnectTimeout: 0,
        disconnectTimeout: 3e4,
        reconnectWindow: 3e4,
        keepAliveWarnAt: 2 / 3,
        start: function (i, h) {
            var c = this, y = {pingInterval: 3e5, waitForPageLoad: !0, transport: "auto", jsonp: !1}, d,
                p = c._deferral || n.Deferred(), w = t.document.createElement("a"), b, g;
            if (c.lastError = null, c._deferral = p, !c.json)throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");
            if (n.type(i) === "function" ? h = i : n.type(i) === "object" && (n.extend(y, i), n.type(y.callback) === "function" && (h = y.callback)), y.transport = v(y.transport, c), !y.transport)throw new Error("SignalR: Invalid transport(s) specified, aborting start.");
            return (c._.config = y, !o && y.waitForPageLoad === !0) ? (c._.deferredStartHandler = function () {
                c.start(i, h)
            }, e.bind("load", c._.deferredStartHandler), p.promise()) : c.state === r.connectionState.connecting ? p.promise() : s(c, r.connectionState.disconnected, r.connectionState.connecting) === !1 ? (p.resolve(c), p.promise()) : (k(c), w.href = c.url, w.protocol && w.protocol !== ":" ? (c.protocol = w.protocol, c.host = w.host) : (c.protocol = t.document.location.protocol, c.host = w.host || t.document.location.host), c.baseUrl = c.protocol + "//" + c.host, c.wsProtocol = c.protocol === "https:" ? "wss://" : "ws://", y.transport === "auto" && y.jsonp === !0 && (y.transport = "longPolling"), c.url.indexOf("//") === 0 && (c.url = t.location.protocol + c.url, c.log("Protocol relative URL detected, normalizing it to '" + c.url + "'.")), this.isCrossDomain(c.url) && (c.log("Auto detected cross domain url."), y.transport === "auto" && (y.transport = ["webSockets", "serverSentEvents", "longPolling"]), typeof y.withCredentials == "undefined" && (y.withCredentials = !0), y.jsonp || (y.jsonp = !n.support.cors, y.jsonp && c.log("Using jsonp because this browser doesn't support CORS.")), c.contentType = r._.defaultContentType), c.withCredentials = y.withCredentials, c.ajaxDataType = y.jsonp ? "jsonp" : "text", n(c).bind(u.onStart, function () {
                n.type(h) === "function" && h.call(c);
                p.resolve(c)
            }), c._.initHandler = r.transports._logic.initHandler(c), d = function (i, o) {
                var l = r._.error(f.noTransportOnInit);
                if (o = o || 0, o >= i.length) {
                    o === 0 ? c.log("No transports supported by the server were selected.") : o === 1 ? c.log("No fallback transports were selected.") : c.log("Fallback transports exhausted.");
                    n(c).triggerHandler(u.onError, [l]);
                    p.reject(l);
                    c.stop();
                    return
                }
                if (c.state !== r.connectionState.disconnected) {
                    var y = i[o], h = r.transports[y], v = function () {
                        d(i, o + 1)
                    };
                    c.transport = h;
                    try {
                        c._.initHandler.start(h, function () {
                            var i = r._.firefoxMajorVersion(t.navigator.userAgent) >= 11, f = !!c.withCredentials && i;
                            c.log("The start request succeeded. Transitioning to the connected state.");
                            a(c) && r.transports._logic.monitorKeepAlive(c);
                            r.transports._logic.startHeartbeat(c);
                            r._.configurePingInterval(c);
                            s(c, r.connectionState.connecting, r.connectionState.connected) || c.log("WARNING! The connection was not in the connecting state.");
                            c._.connectingMessageBuffer.drain();
                            n(c).triggerHandler(u.onStart);
                            e.bind("unload", function () {
                                c.log("Window unloading, stopping the connection.");
                                c.stop(f)
                            });
                            i && e.bind("beforeunload", function () {
                                t.setTimeout(function () {
                                    c.stop(f)
                                }, 0)
                            })
                        }, v)
                    } catch (w) {
                        c.log(h.name + " transport threw '" + w.message + "' when attempting to start.");
                        v()
                    }
                }
            }, b = c.url + "/negotiate", g = function (t, i) {
                var e = r._.error(f.errorOnNegotiate, t, i._.negotiateRequest);
                n(i).triggerHandler(u.onError, e);
                p.reject(e);
                i.stop()
            }, n(c).triggerHandler(u.onStarting), b = r.transports._logic.prepareQueryString(c, b), c.log("Negotiating with '" + b + "'."), c._.negotiateRequest = r.transports._logic.ajax(c, {
                url: b,
                error: function (n, t) {
                    t !== l ? g(n, c) : p.reject(r._.error(f.stoppedWhileNegotiating, null, c._.negotiateRequest))
                },
                success: function (t) {
                    var i, e, h, o = [], s = [];
                    try {
                        i = c._parseResponse(t)
                    } catch (l) {
                        g(r._.error(f.errorParsingNegotiateResponse, l), c);
                        return
                    }
                    if (e = c._.keepAliveData, c.appRelativeUrl = i.Url, c.id = i.ConnectionId, c.token = i.ConnectionToken, c.webSocketServerUrl = i.WebSocketServerUrl, c._.pollTimeout = i.ConnectionTimeout * 1e3 + 1e4, c.disconnectTimeout = i.DisconnectTimeout * 1e3, c._.totalTransportConnectTimeout = c.transportConnectTimeout + i.TransportConnectTimeout * 1e3, i.KeepAliveTimeout ? (e.activated = !0, e.timeout = i.KeepAliveTimeout * 1e3, e.timeoutWarning = e.timeout * c.keepAliveWarnAt, c._.beatInterval = (e.timeout - e.timeoutWarning) / 3) : e.activated = !1, c.reconnectWindow = c.disconnectTimeout + (e.timeout || 0), !i.ProtocolVersion || i.ProtocolVersion !== c.clientProtocol) {
                        h = r._.error(r._.format(f.protocolIncompatible, c.clientProtocol, i.ProtocolVersion));
                        n(c).triggerHandler(u.onError, [h]);
                        p.reject(h);
                        return
                    }
                    n.each(r.transports, function (n) {
                        if (n.indexOf("_") === 0 || n === "webSockets" && !i.TryWebSockets)return !0;
                        s.push(n)
                    });
                    n.isArray(y.transport) ? n.each(y.transport, function (t, i) {
                        n.inArray(i, s) >= 0 && o.push(i)
                    }) : y.transport === "auto" ? o = s : n.inArray(y.transport, s) >= 0 && o.push(y.transport);
                    d(o)
                }
            }), p.promise())
        },
        starting: function (t) {
            var i = this;
            return n(i).bind(u.onStarting, function () {
                t.call(i)
            }), i
        },
        send: function (n) {
            var t = this;
            if (t.state === r.connectionState.disconnected)throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()");
            if (t.state === r.connectionState.connecting)throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.");
            return t.transport.send(t, n), t
        },
        received: function (t) {
            var i = this;
            return n(i).bind(u.onReceived, function (n, r) {
                t.call(i, r)
            }), i
        },
        stateChanged: function (t) {
            var i = this;
            return n(i).bind(u.onStateChanged, function (n, r) {
                t.call(i, r)
            }), i
        },
        error: function (t) {
            var i = this;
            return n(i).bind(u.onError, function (n, r, u) {
                i.lastError = r;
                t.call(i, r, u)
            }), i
        },
        disconnected: function (t) {
            var i = this;
            return n(i).bind(u.onDisconnect, function () {
                t.call(i)
            }), i
        },
        connectionSlow: function (t) {
            var i = this;
            return n(i).bind(u.onConnectionSlow, function () {
                t.call(i)
            }), i
        },
        reconnecting: function (t) {
            var i = this;
            return n(i).bind(u.onReconnecting, function () {
                t.call(i)
            }), i
        },
        reconnected: function (t) {
            var i = this;
            return n(i).bind(u.onReconnect, function () {
                t.call(i)
            }), i
        },
        stop: function (i, h) {
            var c = this, v = c._deferral;
            if (c._.deferredStartHandler && e.unbind("load", c._.deferredStartHandler), delete c._.config, delete c._.deferredStartHandler, !o && (!c._.config || c._.config.waitForPageLoad === !0)) {
                c.log("Stopping connection prior to negotiate.");
                v && v.reject(r._.error(f.stoppedWhileLoading));
                return
            }
            if (c.state !== r.connectionState.disconnected)return c.log("Stopping connection."), t.clearTimeout(c._.beatHandle), t.clearInterval(c._.pingIntervalId), c.transport && (c.transport.stop(c), h !== !1 && c.transport.abort(c, i), a(c) && r.transports._logic.stopMonitoringKeepAlive(c), c.transport = null), c._.negotiateRequest && (c._.negotiateRequest.abort(l), delete c._.negotiateRequest), c._.initHandler && c._.initHandler.stop(), delete c._deferral, delete c.messageId, delete c.groupsToken, delete c.id, delete c._.pingIntervalId, delete c._.lastMessageAt, delete c._.lastActiveAt, c._.connectingMessageBuffer.clear(), s(c, c.state, r.connectionState.disconnected), n(c).triggerHandler(u.onDisconnect), c
        },
        log: function (n) {
            w(n, this.logging)
        }
    };
    r.fn.init.prototype = r.fn;
    r.noConflict = function () {
        return n.connection === r && (n.connection = c), r
    };
    n.connection && (c = n.connection);
    n.connection = n.signalR = r
}(window.jQuery, window), function (n, t, i) {
    function o(n) {
        n._.keepAliveData.monitoring && c(n);
        u.markActive(n) && (n._.beatHandle = t.setTimeout(function () {
            o(n)
        }, n._.beatInterval))
    }

    function c(t) {
        var i = t._.keepAliveData, u;
        t.state === r.connectionState.connected && (u = (new Date).getTime() - t._.lastMessageAt, u >= i.timeout ? (t.log("Keep alive timed out.  Notifying transport that connection has been lost."), t.transport.lostConnection(t)) : u >= i.timeoutWarning ? i.userNotified || (t.log("Keep alive has been missed, connection may be dead/slow."), n(t).triggerHandler(f.onConnectionSlow), i.userNotified = !0) : i.userNotified = !1)
    }

    function e(n, t) {
        var i = n.url + t;
        return n.transport && (i += "?transport=" + n.transport.name), u.prepareQueryString(n, i)
    }

    function s(n) {
        this.connection = n;
        this.startRequested = !1;
        this.startCompleted = !1;
        this.connectionStopped = !1
    }

    var r = n.signalR, f = n.signalR.events, l = n.signalR.changeState, h = "__Start Aborted__", u;
    r.transports = {};
    s.prototype = {
        start: function (n, r, u) {
            var f = this, e = f.connection, o = !1;
            if (f.startRequested || f.connectionStopped) {
                e.log("WARNING! " + n.name + " transport cannot be started. Initialization ongoing or completed.");
                return
            }
            e.log(n.name + " transport starting.");
            n.start(e, function () {
                o || f.initReceived(n, r)
            }, function (t) {
                return o || (o = !0, f.transportFailed(n, t, u)), !f.startCompleted || f.connectionStopped
            });
            f.transportTimeoutHandle = t.setTimeout(function () {
                o || (o = !0, e.log(n.name + " transport timed out when trying to connect."), f.transportFailed(n, i, u))
            }, e._.totalTransportConnectTimeout)
        }, stop: function () {
            this.connectionStopped = !0;
            t.clearTimeout(this.transportTimeoutHandle);
            r.transports._logic.tryAbortStartRequest(this.connection)
        }, initReceived: function (n, i) {
            var u = this, f = u.connection;
            if (u.startRequested) {
                f.log("WARNING! The client received multiple init messages.");
                return
            }
            u.connectionStopped || (u.startRequested = !0, t.clearTimeout(u.transportTimeoutHandle), f.log(n.name + " transport connected. Initiating start request."), r.transports._logic.ajaxStart(f, function () {
                u.startCompleted = !0;
                i()
            }))
        }, transportFailed: function (i, u, e) {
            var o = this.connection, h = o._deferral, s;
            this.connectionStopped || (t.clearTimeout(this.transportTimeoutHandle), this.startRequested ? this.startCompleted || (s = r._.error(r.resources.errorDuringStartRequest, u), o.log(i.name + " transport failed during the start request. Stopping the connection."), n(o).triggerHandler(f.onError, [s]), h && h.reject(s), o.stop()) : (i.stop(o), o.log(i.name + " transport failed to connect. Attempting to fall back."), e()))
        }
    };
    u = r.transports._logic = {
        ajax: function (t, i) {
            return n.ajax(n.extend(!0, {}, n.signalR.ajaxDefaults, {
                type: "GET",
                data: {},
                xhrFields: {withCredentials: t.withCredentials},
                contentType: t.contentType,
                dataType: t.ajaxDataType
            }, i))
        }, pingServer: function (t) {
            var e, f, i = n.Deferred();
            return t.transport ? (e = t.url + "/ping", e = u.addQs(e, t.qs), f = u.ajax(t, {
                url: e, success: function (n) {
                    var u;
                    try {
                        u = t._parseResponse(n)
                    } catch (e) {
                        i.reject(r._.transportError(r.resources.pingServerFailedParse, t.transport, e, f));
                        t.stop();
                        return
                    }
                    u.Response === "pong" ? i.resolve() : i.reject(r._.transportError(r._.format(r.resources.pingServerFailedInvalidResponse, n), t.transport, null, f))
                }, error: function (n) {
                    n.status === 401 || n.status === 403 ? (i.reject(r._.transportError(r._.format(r.resources.pingServerFailedStatusCode, n.status), t.transport, n, f)), t.stop()) : i.reject(r._.transportError(r.resources.pingServerFailed, t.transport, n, f))
                }
            })) : i.reject(r._.transportError(r.resources.noConnectionTransport, t.transport)), i.promise()
        }, prepareQueryString: function (n, i) {
            var r;
            return r = u.addQs(i, "clientProtocol=" + n.clientProtocol), r = u.addQs(r, n.qs), n.token && (r += "&connectionToken=" + t.encodeURIComponent(n.token)), n.data && (r += "&connectionData=" + t.encodeURIComponent(n.data)), r
        }, addQs: function (t, i) {
            var r = t.indexOf("?") !== -1 ? "&" : "?", u;
            if (!i)return t;
            if (typeof i == "object")return t + r + n.param(i);
            if (typeof i == "string")return u = i.charAt(0), (u === "?" || u === "&") && (r = ""), t + r + i;
            throw new Error("Query string property must be either a string or object.");
        }, getUrl: function (n, i, r, f, e) {
            var h = i === "webSockets" ? "" : n.baseUrl, o = h + n.appRelativeUrl, s = "transport=" + i;
            return !e && n.groupsToken && (s += "&groupsToken=" + t.encodeURIComponent(n.groupsToken)), r ? (o += f ? "/poll" : "/reconnect", !e && n.messageId && (s += "&messageId=" + t.encodeURIComponent(n.messageId))) : o += "/connect", o += "?" + s, o = u.prepareQueryString(n, o), e || (o += "&tid=" + Math.floor(Math.random() * 11)), o
        }, maximizePersistentResponse: function (n) {
            return {
                MessageId: n.C,
                Messages: n.M,
                Initialized: typeof n.S != "undefined" ? !0 : !1,
                ShouldReconnect: typeof n.T != "undefined" ? !0 : !1,
                LongPollDelay: n.L,
                GroupsToken: n.G
            }
        }, updateGroups: function (n, t) {
            t && (n.groupsToken = t)
        }, stringifySend: function (n, t) {
            return typeof t == "string" || typeof t == "undefined" || t === null ? t : n.json.stringify(t)
        }, ajaxSend: function (t, i) {
            var h = u.stringifySend(t, i), c = e(t, "/send"), o, s = function (t, u) {
                n(u).triggerHandler(f.onError, [r._.transportError(r.resources.sendFailed, u.transport, t, o), i])
            };
            return o = u.ajax(t, {
                url: c,
                type: t.ajaxDataType === "jsonp" ? "GET" : "POST",
                contentType: r._.defaultContentType,
                data: {data: h},
                success: function (n) {
                    var i;
                    if (n) {
                        try {
                            i = t._parseResponse(n)
                        } catch (r) {
                            s(r, t);
                            t.stop();
                            return
                        }
                        u.triggerReceived(t, i)
                    }
                },
                error: function (n, i) {
                    i !== "abort" && i !== "parsererror" && s(n, t)
                }
            })
        }, ajaxAbort: function (n, t) {
            if (typeof n.transport != "undefined") {
                t = typeof t == "undefined" ? !0 : t;
                var i = e(n, "/abort");
                u.ajax(n, {url: i, async: t, timeout: 1e3, type: "POST"});
                n.log("Fired ajax abort async = " + t + ".")
            }
        }, ajaxStart: function (t, i) {
            var s = function (n) {
                var i = t._deferral;
                i && i.reject(n)
            }, o = function (i) {
                t.log("The start request failed. Stopping the connection.");
                n(t).triggerHandler(f.onError, [i]);
                s(i);
                t.stop()
            };
            t._.startRequest = u.ajax(t, {
                url: e(t, "/start"), success: function (n, u, f) {
                    var e;
                    try {
                        e = t._parseResponse(n)
                    } catch (s) {
                        o(r._.error(r._.format(r.resources.errorParsingStartResponse, n), s, f));
                        return
                    }
                    e.Response === "started" ? i() : o(r._.error(r._.format(r.resources.invalidStartResponse, n), null, f))
                }, error: function (n, i, u) {
                    i !== h ? o(r._.error(r.resources.errorDuringStartRequest, u, n)) : (t.log("The start request aborted because connection.stop() was called."), s(r._.error(r.resources.stoppedDuringStartRequest, null, n)))
                }
            })
        }, tryAbortStartRequest: function (n) {
            n._.startRequest && (n._.startRequest.abort(h), delete n._.startRequest)
        }, tryInitialize: function (n, t, i) {
            t.Initialized && i ? i() : t.Initialized && n.log("WARNING! The client received an init message after reconnecting.")
        }, triggerReceived: function (t, i) {
            t._.connectingMessageBuffer.tryBuffer(i) || n(t).triggerHandler(f.onReceived, [i])
        }, processMessages: function (t, i, r) {
            var f;
            u.markLastMessage(t);
            i && (f = u.maximizePersistentResponse(i), u.updateGroups(t, f.GroupsToken), f.MessageId && (t.messageId = f.MessageId), f.Messages && (n.each(f.Messages, function (n, i) {
                u.triggerReceived(t, i)
            }), u.tryInitialize(t, f, r)))
        }, monitorKeepAlive: function (t) {
            var i = t._.keepAliveData;
            i.monitoring ? t.log("Tried to monitor keep alive but it's already being monitored.") : (i.monitoring = !0, u.markLastMessage(t), t._.keepAliveData.reconnectKeepAliveUpdate = function () {
                u.markLastMessage(t)
            }, n(t).bind(f.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t.log("Now monitoring keep alive with a warning timeout of " + i.timeoutWarning + ", keep alive timeout of " + i.timeout + " and disconnecting timeout of " + t.disconnectTimeout))
        }, stopMonitoringKeepAlive: function (t) {
            var i = t._.keepAliveData;
            i.monitoring && (i.monitoring = !1, n(t).unbind(f.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t._.keepAliveData = {}, t.log("Stopping the monitoring of the keep alive."))
        }, startHeartbeat: function (n) {
            n._.lastActiveAt = (new Date).getTime();
            o(n)
        }, markLastMessage: function (n) {
            n._.lastMessageAt = (new Date).getTime()
        }, markActive: function (n) {
            return u.verifyLastActive(n) ? (n._.lastActiveAt = (new Date).getTime(), !0) : !1
        }, isConnectedOrReconnecting: function (n) {
            return n.state === r.connectionState.connected || n.state === r.connectionState.reconnecting
        }, ensureReconnectingState: function (t) {
            return l(t, r.connectionState.connected, r.connectionState.reconnecting) === !0 && n(t).triggerHandler(f.onReconnecting), t.state === r.connectionState.reconnecting
        }, clearReconnectTimeout: function (n) {
            n && n._.reconnectTimeout && (t.clearTimeout(n._.reconnectTimeout), delete n._.reconnectTimeout)
        }, verifyLastActive: function (t) {
            if ((new Date).getTime() - t._.lastActiveAt >= t.reconnectWindow) {
                var i = r._.format(r.resources.reconnectWindowTimeout, new Date(t._.lastActiveAt), t.reconnectWindow);
                return t.log(i), n(t).triggerHandler(f.onError, [r._.error(i, "TimeoutException")]), t.stop(!1, !1), !1
            }
            return !0
        }, reconnect: function (n, i) {
            var f = r.transports[i];
            if (u.isConnectedOrReconnecting(n) && !n._.reconnectTimeout) {
                if (!u.verifyLastActive(n))return;
                n._.reconnectTimeout = t.setTimeout(function () {
                    u.verifyLastActive(n) && (f.stop(n), u.ensureReconnectingState(n) && (n.log(i + " reconnecting."), f.start(n)))
                }, n.reconnectDelay)
            }
        }, handleParseFailure: function (t, i, u, e, o) {
            var s = r._.transportError(r._.format(r.resources.parseFailed, i), t.transport, u, o);
            e && e(s) ? t.log("Failed to parse server response while attempting to connect.") : (n(t).triggerHandler(f.onError, [s]), t.stop())
        }, initHandler: function (n) {
            return new s(n)
        }, foreverFrame: {count: 0, connections: {}}
    }
}(window.jQuery, window), function (n, t) {
    var r = n.signalR, u = n.signalR.events, f = n.signalR.changeState, i = r.transports._logic;
    r.transports.webSockets = {
        name: "webSockets", supportsKeepAlive: function () {
            return !0
        }, send: function (t, f) {
            var e = i.stringifySend(t, f);
            try {
                t.socket.send(e)
            } catch (o) {
                n(t).triggerHandler(u.onError, [r._.transportError(r.resources.webSocketsInvalidState, t.transport, o, t.socket), f])
            }
        }, start: function (e, o, s) {
            var h, c = !1, l = this, a = !o, v = n(e);
            if (!t.WebSocket) {
                s();
                return
            }
            e.socket || (h = e.webSocketServerUrl ? e.webSocketServerUrl : e.wsProtocol + e.host, h += i.getUrl(e, this.name, a), e.log("Connecting to websocket endpoint '" + h + "'."), e.socket = new t.WebSocket(h), e.socket.onopen = function () {
                c = !0;
                e.log("Websocket opened.");
                i.clearReconnectTimeout(e);
                f(e, r.connectionState.reconnecting, r.connectionState.connected) === !0 && v.triggerHandler(u.onReconnect)
            }, e.socket.onclose = function (t) {
                var i;
                this === e.socket && (c && typeof t.wasClean != "undefined" && t.wasClean === !1 ? (i = r._.transportError(r.resources.webSocketClosed, e.transport, t), e.log("Unclean disconnect from websocket: " + (t.reason || "[no reason given]."))) : e.log("Websocket closed."), s && s(i) || (i && n(e).triggerHandler(u.onError, [i]), l.reconnect(e)))
            }, e.socket.onmessage = function (t) {
                var r;
                try {
                    r = e._parseResponse(t.data)
                } catch (u) {
                    i.handleParseFailure(e, t.data, u, s, t);
                    return
                }
                r && (n.isEmptyObject(r) || r.M ? i.processMessages(e, r, o) : i.triggerReceived(e, r))
            })
        }, reconnect: function (n) {
            i.reconnect(n, this.name)
        }, lostConnection: function (n) {
            this.reconnect(n)
        }, stop: function (n) {
            i.clearReconnectTimeout(n);
            n.socket && (n.log("Closing the Websocket."), n.socket.close(), n.socket = null)
        }, abort: function (n, t) {
            i.ajaxAbort(n, t)
        }
    }
}(window.jQuery, window), function (n, t) {
    var i = n.signalR, u = n.signalR.events, e = n.signalR.changeState, r = i.transports._logic, f = function (n) {
        t.clearTimeout(n._.reconnectAttemptTimeoutHandle);
        delete n._.reconnectAttemptTimeoutHandle
    };
    i.transports.serverSentEvents = {
        name: "serverSentEvents", supportsKeepAlive: function () {
            return !0
        }, timeOut: 3e3, start: function (o, s, h) {
            var c = this, l = !1, a = n(o), v = !s, y;
            if (o.eventSource && (o.log("The connection already has an event source. Stopping it."), o.stop()), !t.EventSource) {
                h && (o.log("This browser doesn't support SSE."), h());
                return
            }
            y = r.getUrl(o, this.name, v);
            try {
                o.log("Attempting to connect to SSE endpoint '" + y + "'.");
                o.eventSource = new t.EventSource(y, {withCredentials: o.withCredentials})
            } catch (p) {
                o.log("EventSource failed trying to connect with error " + p.Message + ".");
                h ? h() : (a.triggerHandler(u.onError, [i._.transportError(i.resources.eventSourceFailedToConnect, o.transport, p)]), v && c.reconnect(o));
                return
            }
            v && (o._.reconnectAttemptTimeoutHandle = t.setTimeout(function () {
                l === !1 && o.eventSource.readyState !== t.EventSource.OPEN && c.reconnect(o)
            }, c.timeOut));
            o.eventSource.addEventListener("open", function () {
                o.log("EventSource connected.");
                f(o);
                r.clearReconnectTimeout(o);
                l === !1 && (l = !0, e(o, i.connectionState.reconnecting, i.connectionState.connected) === !0 && a.triggerHandler(u.onReconnect))
            }, !1);
            o.eventSource.addEventListener("message", function (n) {
                var t;
                if (n.data !== "initialized") {
                    try {
                        t = o._parseResponse(n.data)
                    } catch (i) {
                        r.handleParseFailure(o, n.data, i, h, n);
                        return
                    }
                    r.processMessages(o, t, s)
                }
            }, !1);
            o.eventSource.addEventListener("error", function (n) {
                var r = i._.transportError(i.resources.eventSourceError, o.transport, n);
                this === o.eventSource && (h && h(r) || (o.log("EventSource readyState: " + o.eventSource.readyState + "."), n.eventPhase === t.EventSource.CLOSED ? (o.log("EventSource reconnecting due to the server connection ending."), c.reconnect(o)) : (o.log("EventSource error."), a.triggerHandler(u.onError, [r]))))
            }, !1)
        }, reconnect: function (n) {
            r.reconnect(n, this.name)
        }, lostConnection: function (n) {
            this.reconnect(n)
        }, send: function (n, t) {
            r.ajaxSend(n, t)
        }, stop: function (n) {
            f(n);
            r.clearReconnectTimeout(n);
            n && n.eventSource && (n.log("EventSource calling close()."), n.eventSource.close(), n.eventSource = null, delete n.eventSource)
        }, abort: function (n, t) {
            r.ajaxAbort(n, t)
        }
    }
}(window.jQuery, window), function (n, t) {
    var r = n.signalR, e = n.signalR.events, o = n.signalR.changeState, i = r.transports._logic, u = function () {
        var n = t.document.createElement("iframe");
        return n.setAttribute("style", "position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;"), n
    }, f = function () {
        var i = null, f = 1e3, n = 0;
        return {
            prevent: function () {
                r._.ieVersion <= 8 && (n === 0 && (i = t.setInterval(function () {
                    var n = u();
                    t.document.body.appendChild(n);
                    t.document.body.removeChild(n);
                    n = null
                }, f)), n++)
            }, cancel: function () {
                n === 1 && t.clearInterval(i);
                n > 0 && n--
            }
        }
    }();
    r.transports.foreverFrame = {
        name: "foreverFrame", supportsKeepAlive: function () {
            return !0
        }, iframeClearThreshold: 50, start: function (n, r, e) {
            var l = this, s = i.foreverFrame.count += 1, h, o = u(), c = function () {
                n.log("Forever frame iframe finished loading and is no longer receiving messages.");
                e && e() || l.reconnect(n)
            };
            if (t.EventSource) {
                e && (n.log("Forever Frame is not supported by SignalR on browsers with SSE support."), e());
                return
            }
            o.setAttribute("data-signalr-connection-id", n.id);
            f.prevent();
            h = i.getUrl(n, this.name);
            h += "&frameId=" + s;
            t.document.documentElement.appendChild(o);
            n.log("Binding to iframe's load event.");
            o.addEventListener ? o.addEventListener("load", c, !1) : o.attachEvent && o.attachEvent("onload", c);
            o.src = h;
            i.foreverFrame.connections[s] = n;
            n.frame = o;
            n.frameId = s;
            r && (n.onSuccess = function () {
                n.log("Iframe transport started.");
                r()
            })
        }, reconnect: function (n) {
            var r = this;
            i.isConnectedOrReconnecting(n) && i.verifyLastActive(n) && t.setTimeout(function () {
                if (i.verifyLastActive(n) && n.frame && i.ensureReconnectingState(n)) {
                    var u = n.frame, t = i.getUrl(n, r.name, !0) + "&frameId=" + n.frameId;
                    n.log("Updating iframe src to '" + t + "'.");
                    u.src = t
                }
            }, n.reconnectDelay)
        }, lostConnection: function (n) {
            this.reconnect(n)
        }, send: function (n, t) {
            i.ajaxSend(n, t)
        }, receive: function (t, u) {
            var f, e, o;
            if (t.json !== t._originalJson && (u = t._originalJson.stringify(u)), o = t._parseResponse(u), i.processMessages(t, o, t.onSuccess), t.state === n.signalR.connectionState.connected && (t.frameMessageCount = (t.frameMessageCount || 0) + 1, t.frameMessageCount > r.transports.foreverFrame.iframeClearThreshold && (t.frameMessageCount = 0, f = t.frame.contentWindow || t.frame.contentDocument, f && f.document && f.document.body)))for (e = f.document.body; e.firstChild;)e.removeChild(e.firstChild)
        }, stop: function (n) {
            var r = null;
            if (f.cancel(), n.frame) {
                if (n.frame.stop) n.frame.stop(); else try {
                    r = n.frame.contentWindow || n.frame.contentDocument;
                    r.document && r.document.execCommand && r.document.execCommand("Stop")
                } catch (u) {
                    n.log("Error occurred when stopping foreverFrame transport. Message = " + u.message + ".")
                }
                n.frame.parentNode === t.document.body && t.document.body.removeChild(n.frame);
                delete i.foreverFrame.connections[n.frameId];
                n.frame = null;
                n.frameId = null;
                delete n.frame;
                delete n.frameId;
                delete n.onSuccess;
                delete n.frameMessageCount;
                n.log("Stopping forever frame.")
            }
        }, abort: function (n, t) {
            i.ajaxAbort(n, t)
        }, getConnection: function (n) {
            return i.foreverFrame.connections[n]
        }, started: function (t) {
            o(t, r.connectionState.reconnecting, r.connectionState.connected) === !0 && n(t).triggerHandler(e.onReconnect)
        }
    }
}(window.jQuery, window), function (n, t) {
    var r = n.signalR, u = n.signalR.events, e = n.signalR.changeState, f = n.signalR.isDisconnecting,
        i = r.transports._logic;
    r.transports.longPolling = {
        name: "longPolling", supportsKeepAlive: function () {
            return !1
        }, reconnectDelay: 3e3, start: function (o, s, h) {
            var a = this, v = function () {
                v = n.noop;
                o.log("LongPolling connected.");
                s ? s() : o.log("WARNING! The client received an init message after reconnecting.")
            }, y = function (n) {
                return h(n) ? (o.log("LongPolling failed to connect."), !0) : !1
            }, c = o._, l = 0, p = function (i) {
                t.clearTimeout(c.reconnectTimeoutId);
                c.reconnectTimeoutId = null;
                e(i, r.connectionState.reconnecting, r.connectionState.connected) === !0 && (i.log("Raising the reconnect event"), n(i).triggerHandler(u.onReconnect))
            }, w = 36e5;
            o.pollXhr && (o.log("Polling xhr requests already exists, aborting."), o.stop());
            o.messageId = null;
            c.reconnectTimeoutId = null;
            c.pollTimeoutId = t.setTimeout(function () {
                (function e(s, h) {
                    var g = s.messageId, nt = g === null, k = !nt, tt = !h, d = i.getUrl(s, a.name, k, tt, !0), b = {};
                    (s.messageId && (b.messageId = s.messageId), s.groupsToken && (b.groupsToken = s.groupsToken), f(s) !== !0) && (o.log("Opening long polling request to '" + d + "'."), s.pollXhr = i.ajax(o, {
                        xhrFields: {
                            onprogress: function () {
                                i.markLastMessage(o)
                            }
                        },
                        url: d,
                        type: "POST",
                        contentType: r._.defaultContentType,
                        data: b,
                        timeout: o._.pollTimeout,
                        success: function (r) {
                            var h, w = 0, u, a;
                            o.log("Long poll complete.");
                            l = 0;
                            try {
                                h = o._parseResponse(r)
                            } catch (b) {
                                i.handleParseFailure(s, r, b, y, s.pollXhr);
                                return
                            }
                            (c.reconnectTimeoutId !== null && p(s), h && (u = i.maximizePersistentResponse(h)), i.processMessages(s, h, v), u && n.type(u.LongPollDelay) === "number" && (w = u.LongPollDelay), f(s) !== !0) && (a = u && u.ShouldReconnect, !a || i.ensureReconnectingState(s)) && (w > 0 ? c.pollTimeoutId = t.setTimeout(function () {
                                e(s, a)
                            }, w) : e(s, a))
                        },
                        error: function (f, h) {
                            var v = r._.transportError(r.resources.longPollFailed, o.transport, f, s.pollXhr);
                            if (t.clearTimeout(c.reconnectTimeoutId), c.reconnectTimeoutId = null, h === "abort") {
                                o.log("Aborted xhr request.");
                                return
                            }
                            if (!y(v)) {
                                if (l++, o.state !== r.connectionState.reconnecting && (o.log("An error occurred using longPolling. Status = " + h + ".  Response = " + f.responseText + "."), n(s).triggerHandler(u.onError, [v])), (o.state === r.connectionState.connected || o.state === r.connectionState.reconnecting) && !i.verifyLastActive(o))return;
                                if (!i.ensureReconnectingState(s))return;
                                c.pollTimeoutId = t.setTimeout(function () {
                                    e(s, !0)
                                }, a.reconnectDelay)
                            }
                        }
                    }), k && h === !0 && (c.reconnectTimeoutId = t.setTimeout(function () {
                        p(s)
                    }, Math.min(1e3 * (Math.pow(2, l) - 1), w))))
                })(o)
            }, 250)
        }, lostConnection: function (n) {
            n.pollXhr && n.pollXhr.abort("lostConnection")
        }, send: function (n, t) {
            i.ajaxSend(n, t)
        }, stop: function (n) {
            t.clearTimeout(n._.pollTimeoutId);
            t.clearTimeout(n._.reconnectTimeoutId);
            delete n._.pollTimeoutId;
            delete n._.reconnectTimeoutId;
            n.pollXhr && (n.pollXhr.abort(), n.pollXhr = null, delete n.pollXhr)
        }, abort: function (n, t) {
            i.ajaxAbort(n, t)
        }
    }
}(window.jQuery, window), function (n) {
    function r(n) {
        return n + s
    }

    function e(n, t, i) {
        for (var f = n.length, u = [], r = 0; r < f; r += 1)n.hasOwnProperty(r) && (u[r] = t.call(i, n[r], r, n));
        return u
    }

    function o(t) {
        return n.isFunction(t) ? null : n.type(t) === "undefined" ? null : t
    }

    function u(n) {
        for (var t in n)if (n.hasOwnProperty(t))return !0;
        return !1
    }

    function f(n, t) {
        var i = n._.invocationCallbacks, r, f;
        u(i) && n.log("Clearing hub invocation callbacks with error: " + t + ".");
        n._.invocationCallbackId = 0;
        delete n._.invocationCallbacks;
        n._.invocationCallbacks = {};
        for (f in i)r = i[f], r.method.call(r.scope, {E: t})
    }

    function i(n, t) {
        return new i.fn.init(n, t)
    }

    function t(i, r) {
        var u = {qs: null, logging: !1, useDefaultPath: !0};
        return n.extend(u, r), (!i || u.useDefaultPath) && (i = (i || "") + "/signalr"), new t.fn.init(i, u)
    }

    var s = ".hubProxy", h = n.signalR;
    i.fn = i.prototype = {
        init: function (n, t) {
            this.state = {};
            this.connection = n;
            this.hubName = t;
            this._ = {callbackMap: {}}
        }, constructor: i, hasSubscriptions: function () {
            return u(this._.callbackMap)
        }, on: function (t, i) {
            var u = this, f = u._.callbackMap;
            return t = t.toLowerCase(), f[t] || (f[t] = {}), f[t][i] = function (n, t) {
                i.apply(u, t)
            }, n(u).bind(r(t), f[t][i]), u
        }, off: function (t, i) {
            var e = this, o = e._.callbackMap, f;
            return t = t.toLowerCase(), f = o[t], f && (f[i] ? (n(e).unbind(r(t), f[i]), delete f[i], u(f) || delete o[t]) : i || (n(e).unbind(r(t)), delete o[t])), e
        }, invoke: function (t) {
            var i = this, r = i.connection, s = n.makeArray(arguments).slice(1), c = e(s, o),
                f = {H: i.hubName, M: t, A: c, I: r._.invocationCallbackId}, u = n.Deferred(), l = function (f) {
                    var e = i._maximizeHubResponse(f), s, o;
                    n.extend(i.state, e.State);
                    e.Progress ? u.notifyWith ? u.notifyWith(i, [e.Progress.Data]) : r._.progressjQueryVersionLogged || (r.log("A hub method invocation progress update was received but the version of jQuery in use (" + n.prototype.jquery + ") does not support progress updates. Upgrade to jQuery 1.7+ to receive progress notifications."), r._.progressjQueryVersionLogged = !0) : e.Error ? (e.StackTrace && r.log(e.Error + "\n" + e.StackTrace + "."), s = e.IsHubException ? "HubException" : "Exception", o = h._.error(e.Error, s), o.data = e.ErrorData, r.log(i.hubName + "." + t + " failed to execute. Error: " + o.message), u.rejectWith(i, [o])) : (r.log("Invoked " + i.hubName + "." + t), u.resolveWith(i, [e.Result]))
                };
            return r._.invocationCallbacks[r._.invocationCallbackId.toString()] = {
                scope: i,
                method: l
            }, r._.invocationCallbackId += 1, n.isEmptyObject(i.state) || (f.S = i.state), r.log("Invoking " + i.hubName + "." + t), r.send(f), u.promise()
        }, _maximizeHubResponse: function (n) {
            return {
                State: n.S,
                Result: n.R,
                Progress: n.P ? {Id: n.P.I, Data: n.P.D} : null,
                Id: n.I,
                IsHubException: n.H,
                Error: n.E,
                StackTrace: n.T,
                ErrorData: n.D
            }
        }
    };
    i.fn.init.prototype = i.fn;
    t.fn = t.prototype = n.connection();
    t.fn.init = function (t, i) {
        var e = {qs: null, logging: !1, useDefaultPath: !0}, u = this;
        n.extend(e, i);
        n.signalR.fn.init.call(u, t, e.qs, e.logging);
        u.proxies = {};
        u._.invocationCallbackId = 0;
        u._.invocationCallbacks = {};
        u.received(function (t) {
            var f, o, e, i, s, h;
            t && (typeof t.P != "undefined" ? (e = t.P.I.toString(), i = u._.invocationCallbacks[e], i && i.method.call(i.scope, t)) : typeof t.I != "undefined" ? (e = t.I.toString(), i = u._.invocationCallbacks[e], i && (u._.invocationCallbacks[e] = null, delete u._.invocationCallbacks[e], i.method.call(i.scope, t))) : (f = this._maximizeClientHubInvocation(t), u.log("Triggering client hub event '" + f.Method + "' on hub '" + f.Hub + "'."), s = f.Hub.toLowerCase(), h = f.Method.toLowerCase(), o = this.proxies[s], n.extend(o.state, f.State), n(o).triggerHandler(r(h), [f.Args])))
        });
        u.error(function (n, t) {
            var i, r;
            t && (i = t.I, r = u._.invocationCallbacks[i], r && (u._.invocationCallbacks[i] = null, delete u._.invocationCallbacks[i], r.method.call(r.scope, {E: n})))
        });
        u.reconnecting(function () {
            u.transport && u.transport.name === "webSockets" && f(u, "Connection started reconnecting before invocation result was received.")
        });
        u.disconnected(function () {
            f(u, "Connection was disconnected before invocation result was received.")
        })
    };
    t.fn._maximizeClientHubInvocation = function (n) {
        return {Hub: n.H, Method: n.M, Args: n.A, State: n.S}
    };
    t.fn._registerSubscribedHubs = function () {
        var t = this;
        t._subscribedToHubs || (t._subscribedToHubs = !0, t.starting(function () {
            var i = [];
            n.each(t.proxies, function (n) {
                this.hasSubscriptions() && (i.push({name: n}), t.log("Client subscribed to hub '" + n + "'."))
            });
            i.length === 0 && t.log("No hubs have been subscribed to.  The client will not receive data from hubs.  To fix, declare at least one client side function prior to connection start for each hub you wish to subscribe to.");
            t.data = t.json.stringify(i)
        }))
    };
    t.fn.createHubProxy = function (n) {
        n = n.toLowerCase();
        var t = this.proxies[n];
        return t || (t = i(this, n), this.proxies[n] = t), this._registerSubscribedHubs(), t
    };
    t.fn.init.prototype = t.fn;
    n.hubConnection = t
}(window.jQuery, window), function (n) {
    n.signalR.version = "2.2.1"
}(window.jQuery)