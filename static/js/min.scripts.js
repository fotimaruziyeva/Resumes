!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    g = function e(t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
    y = function e(t) {
      return null != t && t === t.window;
    },
    v = { type: !0, src: !0, noModule: !0 };
  function m(e, t, n) {
    var i,
      o = (t = t || r).createElement("script");
    if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var b = "3.3.1",
    w = function (e, t) {
      return new w.fn.init(e, t);
    },
    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.fn = w.prototype =
    {
      jquery: "3.3.1",
      constructor: w,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        return null == e
          ? o.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || g(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                a !== (r = e[t]) &&
                  (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                        : (o = n && w.isPlainObject(n) ? n : {}),
                      (a[t] = w.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    w.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== c.call(e)) &&
          (!(t = i(e)) ||
            ("function" ==
              typeof (n = f.call(t, "constructor") && t.constructor) &&
              p.call(n) === d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        m(e);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (C(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(T, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (C(Object(e))
              ? w.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
          (r = !t(e[o], o)) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (C(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return a.apply([], s);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  function C(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !g(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  var E = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p,
      d,
      h,
      g,
      y,
      v,
      m,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      E = ae(),
      k = ae(),
      S = ae(),
      D = function (e, t) {
        return e === t && (f = !0), 0;
      },
      N = {}.hasOwnProperty,
      A = [],
      j = A.pop,
      q = A.push,
      L = A.push,
      H = A.slice,
      O = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      I =
        "\\[" +
        M +
        "*(" +
        R +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        R +
        "))|)" +
        M +
        "*\\]",
      W =
        ":(" +
        R +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        I +
        ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      F = new RegExp("^" + M + "*," + M + "*"),
      _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      X = new RegExp(W),
      U = new RegExp("^" + R + "$"),
      V = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ee = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      re = function () {
        p();
      },
      ie = me(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      L.apply((A = H.call(w.childNodes)), w.childNodes),
        A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length
          ? function (e, t) {
              q.apply(e, H.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        v,
        m = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
      ) {
        if (11 !== T && (f = J.exec(e)))
          if ((o = f[1])) {
            if (9 === T) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
              return r.push(l), r;
          } else {
            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return L.apply(r, t.getElementsByClassName(o)), r;
          }
        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) (m = t), (v = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id"))
              ? (c = c.replace(te, ne))
              : t.setAttribute("id", (c = b)),
              (s = (h = a(e)).length);
            while (s--) h[s] = "#" + c + " " + ve(h[s]);
            (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
          }
          if (v)
            try {
              return L.apply(r, m.querySelectorAll(v)), r;
            } catch (e) {
            } finally {
              c === b && t.removeAttribute("id");
            }
        }
      }
      return u(e.replace(B, "$1"), t, r, i);
    }
    function ae() {
      var e = [];
      function t(n, i) {
        return (
          e.push(n + " ") > r.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      }
      return t;
    }
    function se(e) {
      return (e[b] = !0), e;
    }
    function ue(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function le(e, t) {
      var n = e.split("|"),
        i = n.length;
      while (i--) r.attrHandle[n[i]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function de(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function he(e) {
      return se(function (t) {
        return (
          (t = +t),
          se(function (n, r) {
            var i,
              o = e([], n.length, t),
              a = o.length;
            while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    (n = oe.support = {}),
      (o = oe.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (p = oe.setDocument =
        function (e) {
          var t,
            i,
            a = e ? e.ownerDocument || e : w;
          return a !== d && 9 === a.nodeType && a.documentElement
            ? ((d = a),
              (h = d.documentElement),
              (g = !o(d)),
              w !== d &&
                (i = d.defaultView) &&
                i.top !== i &&
                (i.addEventListener
                  ? i.addEventListener("unload", re, !1)
                  : i.attachEvent && i.attachEvent("onunload", re)),
              (n.attributes = ue(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (n.getElementsByTagName = ue(function (e) {
                return (
                  e.appendChild(d.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
              (n.getById = ue(function (e) {
                return (
                  (h.appendChild(e).id = b),
                  !d.getElementsByName || !d.getElementsByName(b).length
                );
              })),
              n.getById
                ? ((r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        (i = t.getElementsByName(e)), (r = 0);
                        while ((o = i[r++]))
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (r.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (r.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e);
                }),
              (v = []),
              (y = []),
              (n.qsa = Q.test(d.querySelectorAll)) &&
                (ue(function (e) {
                  (h.appendChild(e).innerHTML =
                    "<a id='" +
                    b +
                    "'></a><select id='" +
                    b +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      y.push("[*^$]=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      y.push("\\[" + M + "*(?:value|" + P + ")"),
                    e.querySelectorAll("[id~=" + b + "-]").length ||
                      y.push("~="),
                    e.querySelectorAll(":checked").length || y.push(":checked"),
                    e.querySelectorAll("a#" + b + "+*").length ||
                      y.push(".#.+[+~]");
                }),
                ue(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = d.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      y.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      y.push(":enabled", ":disabled"),
                    (h.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      y.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    y.push(",.*:");
                })),
              (n.matchesSelector = Q.test(
                (m =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                ue(function (e) {
                  (n.disconnectedMatch = m.call(e, "*")),
                    m.call(e, "[s!='']:x"),
                    v.push("!=", W);
                }),
              (y = y.length && new RegExp(y.join("|"))),
              (v = v.length && new RegExp(v.join("|"))),
              (t = Q.test(h.compareDocumentPosition)),
              (x =
                t || Q.test(h.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                      return !1;
                    }),
              (D = t
                ? function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var r =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 &
                        (r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === r)
                        ? e === d || (e.ownerDocument === w && x(w, e))
                          ? -1
                          : t === d || (t.ownerDocument === w && x(w, t))
                          ? 1
                          : c
                          ? O(c, e) - O(c, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!i || !o)
                      return e === d
                        ? -1
                        : t === d
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : c
                        ? O(c, e) - O(c, t)
                        : 0;
                    if (i === o) return ce(e, t);
                    n = e;
                    while ((n = n.parentNode)) a.unshift(n);
                    n = t;
                    while ((n = n.parentNode)) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r
                      ? ce(a[r], s[r])
                      : a[r] === w
                      ? -1
                      : s[r] === w
                      ? 1
                      : 0;
                  }),
              d)
            : d;
        }),
      (oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }),
      (oe.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== d && p(e),
          (t = t.replace(z, "='$1']")),
          n.matchesSelector &&
            g &&
            !S[t + " "] &&
            (!v || !v.test(t)) &&
            (!y || !y.test(t)))
        )
          try {
            var r = m.call(e, t);
            if (
              r ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {}
        return oe(t, d, null, [e]).length > 0;
      }),
      (oe.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && p(e), x(e, t);
      }),
      (oe.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);
        var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o
          ? o
          : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
          ? o.value
          : null;
      }),
      (oe.escape = function (e) {
        return (e + "").replace(te, ne);
      }),
      (oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (oe.uniqueSort = function (e) {
        var t,
          r = [],
          i = 0,
          o = 0;
        if (
          ((f = !n.detectDuplicates),
          (c = !n.sortStable && e.slice(0)),
          e.sort(D),
          f)
        ) {
          while ((t = e[o++])) t === e[o] && (i = r.push(o));
          while (i--) e.splice(r[i], 1);
        }
        return (c = null), e;
      }),
      (i = oe.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else while ((t = e[r++])) n += i(t);
          return n;
        }),
      ((r = oe.selectors =
        {
          cacheLength: 50,
          createPseudo: se,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(Z, ee)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || oe.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && oe.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return V.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      X.test(n) &&
                      (t = a(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(Z, ee).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = E[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                  E(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (r) {
                var i = oe.attr(r, e);
                return null == i
                  ? "!=" === t
                  : !t ||
                      ((i += ""),
                      "=" === t
                        ? i === n
                        : "!=" === t
                        ? i !== n
                        : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                        ? n && i.indexOf(n) > -1
                        : "$=" === t
                        ? n && i.slice(-n.length) === n
                        : "~=" === t
                        ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                        : "|=" === t &&
                          (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      p,
                      d,
                      h,
                      g = o !== a ? "nextSibling" : "previousSibling",
                      y = t.parentNode,
                      v = s && t.nodeName.toLowerCase(),
                      m = !u && !s,
                      x = !1;
                    if (y) {
                      if (o) {
                        while (g) {
                          p = t;
                          while ((p = p[g]))
                            if (
                              s
                                ? p.nodeName.toLowerCase() === v
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                        (x =
                          (d =
                            (l =
                              (c =
                                (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]) && l[2]),
                          (p = d && y.childNodes[d]);
                        while (
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                        )
                          if (1 === p.nodeType && ++x && p === t) {
                            c[e] = [T, d, x];
                            break;
                          }
                      } else if (
                        (m &&
                          (x = d =
                            (l =
                              (c =
                                (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]),
                        !1 === x)
                      )
                        while (
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                        )
                          if (
                            (s
                              ? p.nodeName.toLowerCase() === v
                              : 1 === p.nodeType) &&
                            ++x &&
                            (m &&
                              ((c =
                                (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] = [T, x]),
                            p === t)
                          )
                            break;
                      return (x -= i) === r || (x % r == 0 && x / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                i =
                  r.pseudos[e] ||
                  r.setFilters[e.toLowerCase()] ||
                  oe.error("unsupported pseudo: " + e);
              return i[b]
                ? i(t)
                : i.length > 1
                ? ((n = [e, e, "", t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? se(function (e, n) {
                        var r,
                          o = i(e, t),
                          a = o.length;
                        while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                      })
                    : function (e) {
                        return i(e, 0, n);
                      })
                : i;
            },
          },
          pseudos: {
            not: se(function (e) {
              var t = [],
                n = [],
                r = s(e.replace(B, "$1"));
              return r[b]
                ? se(function (e, t, n, i) {
                    var o,
                      a = r(e, null, i, []),
                      s = e.length;
                    while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, i, o) {
                    return (
                      (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: se(function (e) {
              return function (t) {
                return oe(e, t).length > 0;
              };
            }),
            contains: se(function (e) {
              return (
                (e = e.replace(Z, ee)),
                function (t) {
                  return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: se(function (e) {
              return (
                U.test(e || "") || oe.error("unsupported lang: " + e),
                (e = e.replace(Z, ee).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = g
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === h;
            },
            focus: function (e) {
              return (
                e === d.activeElement &&
                (!d.hasFocus || d.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: de(!1),
            disabled: de(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !r.pseudos.empty(e);
            },
            header: function (e) {
              return Y.test(e.nodeName);
            },
            input: function (e) {
              return G.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: he(function () {
              return [0];
            }),
            last: he(function (e, t) {
              return [t - 1];
            }),
            eq: he(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: he(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: he(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = r.pseudos.eq);
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      r.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
    function ye() {}
    (ye.prototype = r.filters = r.pseudos),
      (r.setFilters = new ye()),
      (a = oe.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = k[e + " "];
          if (c) return t ? 0 : c.slice(0);
          (s = e), (u = []), (l = r.preFilter);
          while (s) {
            (n && !(i = F.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (n = !1),
              (i = _.exec(s)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(B, " ") }),
                (s = s.slice(n.length)));
            for (a in r.filter)
              !(i = V[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((n = i.shift()),
                o.push({ value: n, type: a, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        });
    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function me(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        s = C++;
      return t.first
        ? function (t, n, i) {
            while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
            return !1;
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              p = [T, s];
            if (u) {
              while ((t = t[r]))
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              while ((t = t[r]))
                if (1 === t.nodeType || a)
                  if (
                    ((f = t[b] || (t[b] = {})),
                    (c = f[t.uniqueID] || (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === T && l[1] === s)
                      return (p[2] = l[2]);
                    if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                  }
            return !1;
          };
    }
    function xe(e) {
      return e.length > 1
        ? function (t, n, r) {
            var i = e.length;
            while (i--) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
      return n;
    }
    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(e, t, n, r, i, o) {
      return (
        r && !r[b] && (r = Te(r)),
        i && !i[b] && (i = Te(i, o)),
        se(function (o, a, s, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!o && t) ? g : we(g, p, e, s, u),
            v = n ? (i || (o ? e : h || r) ? [] : a) : y;
          if ((n && n(y, v, s, u), r)) {
            (l = we(v, d)), r(l, [], s, u), (c = l.length);
            while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
          if (o) {
            if (i || e) {
              if (i) {
                (l = []), (c = v.length);
                while (c--) (f = v[c]) && l.push((y[c] = f));
                i(null, (v = []), l, u);
              }
              c = v.length;
              while (c--)
                (f = v[c]) &&
                  (l = i ? O(o, f) : p[c]) > -1 &&
                  (o[l] = !(a[l] = f));
            }
          } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
        })
      );
    }
    function Ce(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[" "],
          u = a ? 1 : 0,
          c = me(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          f = me(
            function (e) {
              return O(t, e) > -1;
            },
            s,
            !0
          ),
          p = [
            function (e, n, r) {
              var i =
                (!a && (r || n !== l)) ||
                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            },
          ];
        u < o;
        u++
      )
        if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
            return Te(
              u > 1 && xe(p),
              u > 1 &&
                ve(
                  e
                    .slice(0, u - 1)
                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              n,
              u < i && Ce(e.slice(u, i)),
              i < o && Ce((e = e.slice(i))),
              i < o && ve(e)
            );
          }
          p.push(n);
        }
      return xe(p);
    }
    function Ee(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        o = function (o, a, s, u, c) {
          var f,
            h,
            y,
            v = 0,
            m = "0",
            x = o && [],
            b = [],
            w = l,
            C = o || (i && r.find.TAG("*", c)),
            E = (T += null == w ? 1 : Math.random() || 0.1),
            k = C.length;
          for (
            c && (l = a === d || a || c);
            m !== k && null != (f = C[m]);
            m++
          ) {
            if (i && f) {
              (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
              while ((y = e[h++]))
                if (y(f, a || d, s)) {
                  u.push(f);
                  break;
                }
              c && (T = E);
            }
            n && ((f = !y && f) && v--, o && x.push(f));
          }
          if (((v += m), n && m !== v)) {
            h = 0;
            while ((y = t[h++])) y(x, b, a, s);
            if (o) {
              if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
              b = we(b);
            }
            L.apply(u, b),
              c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
          }
          return c && ((T = E), (l = w)), x;
        };
      return n ? se(o) : o;
    }
    return (
      (s = oe.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = S[e + " "];
          if (!o) {
            t || (t = a(e)), (n = t.length);
            while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
            (o = S(e, Ee(i, r))).selector = e;
          }
          return o;
        }),
      (u = oe.select =
        function (e, t, n, i) {
          var o,
            u,
            l,
            c,
            f,
            p = "function" == typeof e && e,
            d = !i && a((e = p.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              (u = d[0] = d[0].slice(0)).length > 2 &&
              "ID" === (l = u[0]).type &&
              9 === t.nodeType &&
              g &&
              r.relative[u[1].type]
            ) {
              if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
            }
            o = V.needsContext.test(e) ? 0 : u.length;
            while (o--) {
              if (((l = u[o]), r.relative[(c = l.type)])) break;
              if (
                (f = r.find[c]) &&
                (i = f(
                  l.matches[0].replace(Z, ee),
                  (K.test(u[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((u.splice(o, 1), !(e = i.length && ve(u))))
                  return L.apply(n, i), n;
                break;
              }
            }
          }
          return (
            (p || s(e, d))(
              i,
              t,
              !g,
              n,
              !t || (K.test(e) && ge(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = b.split("").sort(D).join("") === b),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        le("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        le("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        le(P, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      oe
    );
  })(e);
  (w.find = E),
    (w.expr = E.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = E.uniqueSort),
    (w.text = E.getText),
    (w.isXMLDoc = E.isXML),
    (w.contains = E.contains),
    (w.escapeSelector = E.escape);
  var k = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && w(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    D = w.expr.match.needsContext;
  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
    return g(t)
      ? w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return u.call(t, e) > -1 !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? w.find.matchesSelector(r, e)
          ? [r]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
        return r > 1 ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : L.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(
            this,
            w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)
          ),
          A.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (q = w(r));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && w(e);
      if (!D.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? u.call(w(e), this[0])
          : u.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  });
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  w.each(
    {
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (e) {
        return k(e, "parentNode");
      },
      parentsUntil: function (e, t, n) {
        return k(e, "parentNode", n);
      },
      next: function (e) {
        return P(e, "nextSibling");
      },
      prev: function (e) {
        return P(e, "previousSibling");
      },
      nextAll: function (e) {
        return k(e, "nextSibling");
      },
      prevAll: function (e) {
        return k(e, "previousSibling");
      },
      nextUntil: function (e, t, n) {
        return k(e, "nextSibling", n);
      },
      prevUntil: function (e, t, n) {
        return k(e, "previousSibling", n);
      },
      siblings: function (e) {
        return S((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return S(e.firstChild);
      },
      contents: function (e) {
        return N(e, "iframe")
          ? e.contentDocument
          : (N(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes));
      },
    },
    function (e, t) {
      w.fn[e] = function (n, r) {
        var i = w.map(this, t, n);
        return (
          "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = w.filter(r, i)),
          this.length > 1 &&
            (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
          this.pushStack(i)
        );
      };
    }
  );
  var M = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    var t = {};
    return (
      w.each(e.match(M) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      a = [],
      s = -1,
      u = function () {
        for (i = i || e.once, r = t = !0; a.length; s = -1) {
          n = a.shift();
          while (++s < o.length)
            !1 === o[s].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((s = o.length), (n = !1));
        }
        e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
      },
      l = {
        add: function () {
          return (
            o &&
              (n && !t && ((s = o.length - 1), a.push(n)),
              (function t(n) {
                w.each(n, function (n, r) {
                  g(r)
                    ? (e.unique && l.has(r)) || o.push(r)
                    : r && r.length && "string" !== x(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              var n;
              while ((n = w.inArray(t, o, n)) > -1)
                o.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? w.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (i = a = []), (o = n = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (i = a = []), n || t || (o = n = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return l;
  };
  function I(e) {
    return e;
  }
  function W(e) {
    throw e;
  }
  function $(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && g((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  w.extend({
    Deferred: function (t) {
      var n = [
          [
            "notify",
            "progress",
            w.Callbacks("memory"),
            w.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            w.Callbacks("once memory"),
            w.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            w.Callbacks("once memory"),
            w.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        r = "pending",
        i = {
          state: function () {
            return r;
          },
          always: function () {
            return o.done(arguments).fail(arguments), this;
          },
          catch: function (e) {
            return i.then(null, e);
          },
          pipe: function () {
            var e = arguments;
            return w
              .Deferred(function (t) {
                w.each(n, function (n, r) {
                  var i = g(e[r[4]]) && e[r[4]];
                  o[r[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && g(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }),
                  (e = null);
              })
              .promise();
          },
          then: function (t, r, i) {
            var o = 0;
            function a(t, n, r, i) {
              return function () {
                var s = this,
                  u = arguments,
                  l = function () {
                    var e, l;
                    if (!(t < o)) {
                      if ((e = r.apply(s, u)) === n.promise())
                        throw new TypeError("Thenable self-resolution");
                      (l =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        g(l)
                          ? i
                            ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                            : (o++,
                              l.call(
                                e,
                                a(o, n, I, i),
                                a(o, n, W, i),
                                a(o, n, I, n.notifyWith)
                              ))
                          : (r !== I && ((s = void 0), (u = [e])),
                            (i || n.resolveWith)(s, u));
                    }
                  },
                  c = i
                    ? l
                    : function () {
                        try {
                          l();
                        } catch (e) {
                          w.Deferred.exceptionHook &&
                            w.Deferred.exceptionHook(e, c.stackTrace),
                            t + 1 >= o &&
                              (r !== W && ((s = void 0), (u = [e])),
                              n.rejectWith(s, u));
                        }
                      };
                t
                  ? c()
                  : (w.Deferred.getStackHook &&
                      (c.stackTrace = w.Deferred.getStackHook()),
                    e.setTimeout(c));
              };
            }
            return w
              .Deferred(function (e) {
                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                  n[1][3].add(a(0, e, g(t) ? t : I)),
                  n[2][3].add(a(0, e, g(r) ? r : W));
              })
              .promise();
          },
          promise: function (e) {
            return null != e ? w.extend(e, i) : i;
          },
        },
        o = {};
      return (
        w.each(n, function (e, t) {
          var a = t[2],
            s = t[5];
          (i[t[1]] = a.add),
            s &&
              a.add(
                function () {
                  r = s;
                },
                n[3 - e][2].disable,
                n[3 - e][3].disable,
                n[0][2].lock,
                n[0][3].lock
              ),
            a.add(t[3].fire),
            (o[t[0]] = function () {
              return (
                o[t[0] + "With"](this === o ? void 0 : this, arguments), this
              );
            }),
            (o[t[0] + "With"] = a.fireWith);
        }),
        i.promise(o),
        t && t.call(o, o),
        o
      );
    },
    when: function (e) {
      var t = arguments.length,
        n = t,
        r = Array(n),
        i = o.call(arguments),
        a = w.Deferred(),
        s = function (e) {
          return function (n) {
            (r[e] = this),
              (i[e] = arguments.length > 1 ? o.call(arguments) : n),
              --t || a.resolveWith(r, i);
          };
        };
      if (
        t <= 1 &&
        ($(e, a.done(s(n)).resolve, a.reject, !t),
        "pending" === a.state() || g(i[n] && i[n].then))
      )
        return a.then();
      while (n--) $(i[n], s(n), a.reject);
      return a.promise();
    },
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      B.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var F = w.Deferred();
  (w.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0),
          (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
      },
    }),
    (w.ready.then = F.then);
  function _() {
    r.removeEventListener("DOMContentLoaded", _),
      e.removeEventListener("load", _),
      w.ready();
  }
  "complete" === r.readyState ||
  ("loading" !== r.readyState && !r.documentElement.doScroll)
    ? e.setTimeout(w.ready)
    : (r.addEventListener("DOMContentLoaded", _),
      e.addEventListener("load", _));
  var z = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) {
        i = !0;
        for (s in n) z(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        g(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(w(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    X = /^-ms-/,
    U = /-([a-z])/g;
  function V(e, t) {
    return t.toUpperCase();
  }
  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }
  var Y = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = w.expando + Q.uid++;
  }
  (Q.uid = 1),
    (Q.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Y(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[G(t)] = n;
        else for (r in t) i[G(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][G(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(G)
              : (t = G(t)) in r
              ? [t]
              : t.match(M) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || w.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var J = new Q(),
    K = new Q(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ee = /[A-Z]/g;
  function te(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Z.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = te(n);
        } catch (e) {}
        K.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function (e, t) {
      J.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
          ) {
            n = a.length;
            while (n--)
              a[n] &&
                0 === (r = a[n].name).indexOf("data-") &&
                ((r = G(r.slice(5))), ne(o, r, i[r]));
            J.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              K.set(this, e);
            })
          : z(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) {
                  if (void 0 !== (n = K.get(o, e))) return n;
                  if (void 0 !== (n = ne(o, e))) return n;
                } else
                  this.each(function () {
                    K.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          K.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = J.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = J.access(e, t, w.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function () {
            w.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          J.get(e, n) ||
          J.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              J.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = J.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
    oe = ["Top", "Right", "Bottom", "Left"],
    ae = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          w.contains(e.ownerDocument, e) &&
          "none" === w.css(e, "display"))
      );
    },
    se = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    };
  function ue(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        w.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), w.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var le = {};
  function ce(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = le[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = w.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (le[r] = i),
      i)
    );
  }
  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((i[o] = J.get(r, "display") || null),
              i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r)))
          : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  function ye(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
  }
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && w.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((l = w.contains(o.ownerDocument, o)),
        (a = ye(f.appendChild(o), "script")),
        l && ve(a),
        n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  !(function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
      t = r.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var be = r.documentElement,
    we = /^key/,
    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ce = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function De(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (s in t) De(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ke;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, i, r, n);
      })
    );
  }
  (w.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.get(e);
      if (y) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && w.find.matchesSelector(be, i),
          n.guid || (n.guid = w.guid++),
          (u = y.events) || (u = y.events = {}),
          (a = y.handle) ||
            (a = y.handle =
              function (t) {
                return "undefined" != typeof w && w.event.triggered !== t.type
                  ? w.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
          (l = (t = (t || "").match(M) || [""]).length);
        while (l--)
          (d = g = (s = Ce.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = w.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = w.event.special[d] || {}),
              (c = w.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && w.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                  (e.addEventListener && e.addEventListener(d, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (w.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.hasData(e) && J.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;
        while (l--)
          if (
            ((s = Ce.exec(t[l]) || []),
            (d = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = w.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                w.removeEvent(e, d, y.handle),
              delete u[d]);
          } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t = w.event.fix(e),
        n,
        r,
        i,
        o,
        a,
        s,
        u = new Array(arguments.length),
        l = (J.get(this, "events") || {})[t.type] || [],
        c = w.event.special[t.type] || {};
      for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
      if (
        ((t.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, t))
      ) {
        (s = w.event.handlers.call(this, t, l)), (n = 0);
        while ((o = s[n++]) && !t.isPropagationStopped()) {
          (t.currentTarget = o.elem), (r = 0);
          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
            (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
              ((t.handleObj = a),
              (t.data = a.data),
              void 0 !==
                (i = (
                  (w.event.special[a.origType] || {}).handle || a.handler
                ).apply(o.elem, u)) &&
                !1 === (t.result = i) &&
                (t.preventDefault(), t.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? w(i, this).index(l) > -1
                  : w.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && N(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return N(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ee
              : ke),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ee),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ee),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ee),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && we.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Te.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      w.event.addProp
    ),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || w.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, r) {
        return De(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return De(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            w(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ke),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ae = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? w(e).children("tbody")[0] || e
      : e;
  }
  function He(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Oe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        J.hasData(e) &&
        ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))
      ) {
        delete a.handle, (a.events = {});
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
      }
      K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
    }
  }
  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
      o,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      y = t[0],
      v = g(y);
    if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
      return e.each(function (i) {
        var o = e.eq(i);
        v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
      });
    if (
      p &&
      ((i = xe(t, e[0].ownerDocument, !1, e, r)),
      (o = i.firstChild),
      1 === i.childNodes.length && (i = o),
      o || r)
    ) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
        (l = i),
          f !== d &&
            ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))),
          n.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
          (l = s[f]),
            he.test(l.type || "") &&
              !J.access(l, "globalEval") &&
              w.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? w._evalUrl && w._evalUrl(l.src)
                : m(l.textContent.replace(qe, ""), c, l));
    }
    return e;
  }
  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || w.cleanData(ye(r)),
        r.parentNode &&
          (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = w.contains(e.ownerDocument, e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)
          Me(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++)
            Pe(o[r], a[r]);
        else Pe(e, s);
      return (
        (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Y(n)) {
          if ((t = n[J.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            n[J.expando] = void 0;
          }
          n[K.expando] && (n[K.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Ie(this, e, !0);
      },
      remove: function (e) {
        return Ie(this, e);
      },
      text: function (e) {
        return z(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Re(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Le(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Re(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return z(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Re(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ye(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              w(i[a])[t](n),
              s.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
    $e = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Be = new RegExp(oe.join("|"), "i");
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (a = 36 === c.offsetWidth || "absolute"),
          be.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      a,
      s,
      u,
      l = r.createElement("div"),
      c = r.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), a;
        },
      }));
  })();
  function Fe(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || $e(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          w.contains(e.ownerDocument, e) ||
          (a = w.style(e, t)),
        !h.pixelBoxStyles() &&
          We.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  var ze = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ue = { position: "absolute", visibility: "hidden", display: "block" },
    Ve = { letterSpacing: "0", fontWeight: "400" },
    Ge = ["Webkit", "Moz", "ms"],
    Ye = r.createElement("div").style;
  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
      n = Ge.length;
    while (n--) if ((e = Ge[n] + t) in Ye) return e;
  }
  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }
  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
        r
          ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n &&
              (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
          : ((u += w.css(e, "padding" + oe[a], !0, i)),
            "padding" !== n
              ? (u += w.css(e, "border" + oe[a] + "Width", !0, i))
              : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
    return (
      !r &&
        o >= 0 &&
        (u += Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
          )
        )),
      u
    );
  }
  function et(e, t, n) {
    var r = $e(e),
      i = Fe(e, t, r),
      o = "border-box" === w.css(e, "boxSizing", !1, r),
      a = o;
    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }
    return (
      (a = a && (h.boxSizingReliable() || i === e.style[t])),
      ("auto" === i ||
        (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) &&
        ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
      (i = parseFloat(i) || 0) +
        Ze(e, t, n || (o ? "border" : "content"), a, r, i) +
        "px"
    );
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
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
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = G(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = typeof n) &&
          (i = ie.exec(n)) &&
          i[1] &&
          ((n = ue(e, t, i)), (o = "number")),
          null != n &&
            n === n &&
            ("number" === o &&
              (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = G(t);
      return (
        Xe.test(t) || (t = Je(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Fe(e, t, r)),
        "normal" === i && t in Ve && (i = Ve[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !ze.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, t, r)
              : se(e, Ue, function () {
                  return et(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
          return (
            a &&
              h.scrollboxSize() === o.position &&
              (s -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Ze(e, t, "border", !1, o) -
                  0.5
              )),
            s &&
              (i = ie.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Ke(e, n, s)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Fe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              se(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }),
    w.fn.extend({
      css: function (e, t) {
        return z(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = $e(e), i = t.length; a < i; a++)
                o[t[a]] = w.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    });
  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }
  (w.Tween = tt),
    (tt.prototype = {
      constructor: tt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = tt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : tt.propHooks._default.set(this),
          this
        );
      },
    }),
    (tt.prototype.init.prototype = tt.prototype),
    (tt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (tt.propHooks.scrollTop = tt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = tt.prototype.init),
    (w.fx.step = {});
  var nt,
    rt,
    it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function at() {
    rt &&
      (!1 === r.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(at)
        : e.setTimeout(at, w.fx.interval),
      w.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function () {
        nt = void 0;
      }),
      (nt = Date.now())
    );
  }
  function ut(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function lt(e, t, n) {
    for (
      var r,
        i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ct(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f = "width" in t || "height" in t,
      p = this,
      d = {},
      h = e.style,
      g = e.nodeType && ae(e),
      y = J.get(e, "fxshow");
    n.queue ||
      (null == (a = w._queueHooks(e, "fx")).unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || s();
        })),
      a.unqueued++,
      p.always(function () {
        p.always(function () {
          a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
        });
      }));
    for (r in t)
      if (((i = t[r]), it.test(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))
        ) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }
        d[r] = (y && y[r]) || w.style(e, r);
      }
    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (l = y && y.display) && (l = J.get(e, "display")),
        "none" === (c = w.css(e, "display")) &&
          (l
            ? (c = l)
            : (fe([e], !0),
              (l = e.style.display || l),
              (c = w.css(e, "display")),
              fe([e]))),
        ("inline" === c || ("inline-block" === c && null != l)) &&
          "none" === w.css(e, "float") &&
          (u ||
            (p.done(function () {
              h.display = l;
            }),
            null == l && ((c = h.display), (l = "none" === c ? "" : c))),
          (h.display = "inline-block"))),
        n.overflow &&
          ((h.overflow = "hidden"),
          p.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          })),
        (u = !1);
      for (r in d)
        u ||
          (y
            ? "hidden" in y && (g = y.hidden)
            : (y = J.access(e, "fxshow", { display: l })),
          o && (y.hidden = !g),
          g && fe([e], !0),
          p.done(function () {
            g || fe([e]), J.remove(e, "fxshow");
            for (r in d) w.style(e, r, d[r]);
          })),
          (u = lt(g ? y[r] : 0, r, p)),
          r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
    }
  }
  function ft(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = G(n)),
        (i = t[r]),
        (o = e[n]),
        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = w.cssHooks[r]) && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function pt(e, t, n) {
    var r,
      i,
      o = 0,
      a = pt.prefilters.length,
      s = w.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = nt || st(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            a = l.tweens.length;
          o < a;
          o++
        )
          l.tweens[o].run(r);
        return (
          s.notifyWith(e, [l, r, n]),
          r < 1 && a
            ? n
            : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: nt || st(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = w.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (ft(c, l.opts.specialEasing); o < a; o++)
      if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
        return (
          g(r.stop) &&
            (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      w.map(c, lt, l),
      g(l.opts.start) && l.opts.start.call(e, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (w.Animation = w.extend(pt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ue(n.elem, e, ie.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (pt.tweeners[n] = pt.tweeners[n] || []),
          pt.tweeners[n].unshift(t);
    },
    prefilters: [ct],
    prefilter: function (e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (g(e) && e),
              duration: e,
              easing: (n && t) || (t && !g(t) && t),
            };
      return (
        w.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in w.fx.speeds
              ? (r.duration = w.fx.speeds[r.duration])
              : (r.duration = w.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }),
        r
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function () {
            var t = pt(this, w.extend({}, e), o);
            (i || J.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = w.timers,
              a = J.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = J.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = w.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ut(t, !0), e, r, i);
      };
    }),
    w.each(
      {
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (nt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (nt = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      rt || ((rt = !0), at());
    }),
    (w.fx.stop = function () {
      rt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = w.fx ? w.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
      (e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = r.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value);
    })();
  var dt,
    ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
                (i =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = w.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && N(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(M);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (dt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          r ||
            ((o = ht[a]),
            (ht[a] = i),
            (i = null != n(e, t, r) ? a : null),
            (ht[a] = o)),
          i
        );
      };
    });
  var gt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function (e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (i = w.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    );
  function vt(e) {
    return (e.match(M) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }
  w.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function (t) {
          w(this).addClass(e.call(this, t, mt(this)));
        });
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
            a = 0;
            while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = vt(r)) && n.setAttribute("class", s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function (t) {
          w(this).removeClass(e.call(this, t, mt(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
            a = 0;
            while ((o = t[a++]))
              while (r.indexOf(" " + o + " ") > -1)
                r = r.replace(" " + o + " ", " ");
            i !== (s = vt(r)) && n.setAttribute("class", s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        r = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && r
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : g(e)
        ? this.each(function (n) {
            w(this).toggleClass(e.call(this, n, mt(this), t), t);
          })
        : this.each(function () {
            var t, i, o, a;
            if (r) {
              (i = 0), (o = w(this)), (a = xt(e));
              while ((t = a[i++]))
                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while ((n = this[r++]))
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
          return !0;
      return !1;
    },
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = g(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : Array.isArray(i) &&
                    (i = w.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  w.valHooks[this.type] ||
                  w.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            })
          );
        if (i)
          return (t =
            w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(i, "value"))
            ? n
            : "string" == typeof (n = i.value)
            ? n.replace(bt, "")
            : null == n
            ? ""
            : n;
      }
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : vt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = w.inArray(w(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var wt = /^(?:focusinfocus|focusoutblur)$/,
    Tt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h,
        v = [i || r],
        m = f.call(t, "type") ? t.type : t,
        x = f.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = h = u = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !wt.test(m + w.event.triggered) &&
          (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
          (c = m.indexOf(":") < 0 && "on" + m),
          (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
          (t.isTrigger = o ? 2 : 3),
          (t.namespace = x.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[m] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !y(i)) {
          for (
            l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            v.push(s), (u = s);
          u === (i.ownerDocument || r) &&
            v.push(u.defaultView || u.parentWindow || e);
        }
        a = 0;
        while ((s = v[a++]) && !t.isPropagationStopped())
          (h = s),
            (t.type = a > 1 ? l : d.bindType || m),
            (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) &&
              p.apply(s, n),
            (p = c && s[c]) &&
              p.apply &&
              Y(s) &&
              ((t.result = p.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = m),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !Y(i) ||
            (c &&
              g(i[m]) &&
              !y(i) &&
              ((u = i[c]) && (i[c] = null),
              (w.event.triggered = m),
              t.isPropagationStopped() && h.addEventListener(m, Tt),
              i[m](),
              t.isPropagationStopped() && h.removeEventListener(m, Tt),
              (w.event.triggered = void 0),
              u && (i[c] = u))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(r, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = J.access(r, t);
            i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = J.access(r, t) - 1;
            i
              ? J.access(r, t, i)
              : (r.removeEventListener(e, n, !0), J.remove(r, t));
          },
        };
      });
  var Ct = e.location,
    Et = Date.now(),
    kt = /\?/;
  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        w.error("Invalid XML: " + t),
      n
    );
  };
  var St = /\[\]$/,
    Dt = /\r?\n/g,
    Nt = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;
  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      w.each(t, function (t, i) {
        n || St.test(e)
          ? r(e, i)
          : jt(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== x(t)) r(e, t);
    else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
  }
  (w.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = g(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              At.test(this.nodeName) &&
              !Nt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Dt, "\r\n") };
          })
          .get();
      },
    });
  var qt = /%20/g,
    Lt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Mt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Bt = r.createElement("a");
  Bt.href = Ct.href;
  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(M) || [];
      if (g(n))
        while ((r = o[i++]))
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function _t(e, t, n, r) {
    var i = {},
      o = e === Wt;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        w.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || o || i[l]
            ? o
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && w.extend(!0, e, r), e;
  }
  function Xt(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.contents,
      u = e.dataTypes;
    while ("*" === u[0])
      u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function Ut(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    o = c.shift();
    while (o)
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (!(a = l[u + " " + o] || l["* " + o]))
            for (i in l)
              if (
                (s = i.split(" "))[1] === o &&
                (a = l[u + " " + s[0]] || l["* " + s[0]])
              ) {
                !0 === a
                  ? (a = l[i])
                  : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e["throws"]) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function (t, n) {
      "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h = w.ajaxSetup({}, n),
        g = h.context || h,
        y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
        v = w.Deferred(),
        m = w.Callbacks("once memory"),
        x = h.statusCode || {},
        b = {},
        T = {},
        C = "canceled",
        E = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (c) {
              if (!s) {
                s = {};
                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
              }
              t = s[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return c ? a : null;
          },
          setRequestHeader: function (e, t) {
            return (
              null == c &&
                ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                (b[e] = t)),
              this
            );
          },
          overrideMimeType: function (e) {
            return null == c && (h.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (c) E.always(e[E.status]);
              else for (t in e) x[t] = [x[t], e[t]];
            return this;
          },
          abort: function (e) {
            var t = e || C;
            return i && i.abort(t), k(0, t), this;
          },
        };
      if (
        (v.promise(E),
        (h.url = ((t || h.url || Ct.href) + "").replace(
          Rt,
          Ct.protocol + "//"
        )),
        (h.type = n.method || n.type || h.method || h.type),
        (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
        null == h.crossDomain)
      ) {
        l = r.createElement("a");
        try {
          (l.href = h.url),
            (l.href = l.href),
            (h.crossDomain =
              Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
        } catch (e) {
          h.crossDomain = !0;
        }
      }
      if (
        (h.data &&
          h.processData &&
          "string" != typeof h.data &&
          (h.data = w.param(h.data, h.traditional)),
        _t(It, h, n, E),
        c)
      )
        return E;
      (f = w.event && h.global) &&
        0 == w.active++ &&
        w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Mt.test(h.type)),
        (o = h.url.replace(Lt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(qt, "+"))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Ht, "$1")),
              (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (w.lastModified[o] &&
            E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
          w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          E.setRequestHeader("Content-Type", h.contentType),
        E.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : h.accepts["*"]
        );
      for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
        return E.abort();
      if (
        ((C = "abort"),
        m.add(h.complete),
        E.done(h.success),
        E.fail(h.error),
        (i = _t(Wt, h, n, E)))
      ) {
        if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c))
          return E;
        h.async &&
          h.timeout > 0 &&
          (u = e.setTimeout(function () {
            E.abort("timeout");
          }, h.timeout));
        try {
          (c = !1), i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");
      function k(t, n, r, s) {
        var l,
          p,
          d,
          b,
          T,
          C = n;
        c ||
          ((c = !0),
          u && e.clearTimeout(u),
          (i = void 0),
          (a = s || ""),
          (E.readyState = t > 0 ? 4 : 0),
          (l = (t >= 200 && t < 300) || 304 === t),
          r && (b = Xt(h, E, r)),
          (b = Ut(h, b, E, l)),
          l
            ? (h.ifModified &&
                ((T = E.getResponseHeader("Last-Modified")) &&
                  (w.lastModified[o] = T),
                (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
              204 === t || "HEAD" === h.type
                ? (C = "nocontent")
                : 304 === t
                ? (C = "notmodified")
                : ((C = b.state), (p = b.data), (l = !(d = b.error))))
            : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
          (E.status = t),
          (E.statusText = (n || C) + ""),
          l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
          E.statusCode(x),
          (x = void 0),
          f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
          m.fireWith(g, [E, C]),
          f &&
            (y.trigger("ajaxComplete", [E, h]),
            --w.active || w.event.trigger("ajaxStop")));
      }
      return E;
    },
    getJSON: function (e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return w.get(e, void 0, t, "script");
    },
  }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, r, i) {
        return (
          g(n) && ((i = i || r), (r = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (w._evalUrl = function (e) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return g(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = g(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Vt = { 0: 200, 1223: 204 },
    Gt = w.ajaxSettings.xhr();
  (h.cors = !!Gt && "withCredentials" in Gt),
    (h.ajax = Gt = !!Gt),
    w.ajaxTransport(function (t) {
      var n, r;
      if (h.cors || (Gt && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i["X-Requested-With"] ||
                (i["X-Requested-With"] = "XMLHttpRequest");
            for (a in i) s.setRequestHeader(a, i[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        Vt[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            (t = w("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              r.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Yt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Qt.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Qt, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? w(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)),
              a && g(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument = (function () {
      var e = r.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (w.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var i, o, a;
      return (
        t ||
          (h.createHTMLDocument
            ? (((i = (t =
                r.implementation.createHTMLDocument("")).createElement(
                "base"
              )).href = r.location.href),
              t.head.appendChild(i))
            : (t = r)),
        (o = A.exec(e)),
        (a = !n && []),
        o
          ? [t.createElement(o[1])]
          : ((o = xe([e], t, a)),
            a && a.length && w(a).remove(),
            w.merge([], o.childNodes))
      );
    }),
    (w.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        g(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        a.length > 0 &&
          w
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
        "static" === c && (e.style.position = "relative"),
          (s = f.offset()),
          (o = w.css(e, "top")),
          (u = w.css(e, "left")),
          (l =
            ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1)
            ? ((a = (r = f.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          g(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (p.top = t.top - s.top + a),
          null != t.left && (p.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, p) : f.css(p);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        if (r)
          return r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (i.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - w.css(r, "marginTop", !0),
            left: t.left - i.left - w.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === w.css(e, "position")) e = e.offsetParent;
          return e || be;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
          return z(
            this,
            function (e, r, i) {
              var o;
              if (
                (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
        if (n)
          return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          w.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === o ? "margin" : "border");
            return z(
              this,
              function (t, n, i) {
                var o;
                return y(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? w.css(t, n, s)
                  : w.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a
            );
          };
        }
      );
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    w.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (w.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (r = o.call(arguments, 2)),
          (i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)));
          }),
          (i.guid = e.guid = e.guid || w.guid++),
          i
        );
    }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = N),
    (w.isFunction = g),
    (w.isWindow = y),
    (w.camelCase = G),
    (w.type = x),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Jt = e.jQuery,
    Kt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }),
    t || (e.jQuery = e.$ = w),
    w
  );
});
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof module && module.exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length)
        return void (
          b &&
          b.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.")
        );
      var c = a.data(this[0], "validator");
      return c
        ? c
        : (this.attr("novalidate", "novalidate"),
          (c = new a.validator(b, this[0])),
          a.data(this[0], "validator", c),
          c.settings.onsubmit &&
            (this.on("click.validate", ":submit", function (b) {
              (c.submitButton = b.currentTarget),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") &&
                  (c.cancelSubmit = !0);
            }),
            this.on("submit.validate", function (b) {
              function d() {
                var d, e;
                return (
                  c.submitButton &&
                    (c.settings.submitHandler || c.formSubmitted) &&
                    (d = a("<input type='hidden'/>")
                      .attr("name", c.submitButton.name)
                      .val(a(c.submitButton).val())
                      .appendTo(c.currentForm)),
                  !c.settings.submitHandler ||
                    ((e = c.settings.submitHandler.call(c, c.currentForm, b)),
                    d && d.remove(),
                    void 0 !== e && e)
                );
              }
              return (
                c.settings.debug && b.preventDefault(),
                c.cancelSubmit
                  ? ((c.cancelSubmit = !1), d())
                  : c.form()
                  ? c.pendingRequest
                    ? ((c.formSubmitted = !0), !1)
                    : d()
                  : (c.focusInvalid(), !1)
              );
            })),
          c);
    },
    valid: function () {
      var b, c, d;
      return (
        a(this[0]).is("form")
          ? (b = this.validate().form())
          : ((d = []),
            (b = !0),
            (c = a(this[0].form).validate()),
            this.each(function () {
              (b = c.element(this) && b), b || (d = d.concat(c.errorList));
            }),
            (c.errorList = d)),
        b
      );
    },
    rules: function (b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j = this[0];
      if (
        null != j &&
        (!j.form &&
          j.hasAttribute("contenteditable") &&
          ((j.form = this.closest("form")[0]), (j.name = this.attr("name"))),
        null != j.form)
      ) {
        if (b)
          switch (
            ((d = a.data(j.form, "validator").settings),
            (e = d.rules),
            (f = a.validator.staticRules(j)),
            b)
          ) {
            case "add":
              a.extend(f, a.validator.normalizeRule(c)),
                delete f.messages,
                (e[j.name] = f),
                c.messages &&
                  (d.messages[j.name] = a.extend(
                    d.messages[j.name],
                    c.messages
                  ));
              break;
            case "remove":
              return c
                ? ((i = {}),
                  a.each(c.split(/\s/), function (a, b) {
                    (i[b] = f[b]), delete f[b];
                  }),
                  i)
                : (delete e[j.name], f);
          }
        return (
          (g = a.validator.normalizeRules(
            a.extend(
              {},
              a.validator.classRules(j),
              a.validator.attributeRules(j),
              a.validator.dataRules(j),
              a.validator.staticRules(j)
            ),
            j
          )),
          g.required &&
            ((h = g.required),
            delete g.required,
            (g = a.extend({ required: h }, g))),
          g.remote &&
            ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
          g
        );
      }
    },
  }),
    a.extend(a.expr.pseudos || a.expr[":"], {
      blank: function (b) {
        return !a.trim("" + a(b).val());
      },
      filled: function (b) {
        var c = a(b).val();
        return null !== c && !!a.trim("" + c);
      },
      unchecked: function (b) {
        return !a(b).prop("checked");
      },
    }),
    (a.validator = function (b, c) {
      (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
        (this.currentForm = c),
        this.init();
    }),
    (a.validator.format = function (b, c) {
      return 1 === arguments.length
        ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
          }
        : void 0 === c
        ? b
        : (arguments.length > 2 &&
            c.constructor !== Array &&
            (c = a.makeArray(arguments).slice(1)),
          c.constructor !== Array && (c = [c]),
          a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
              return c;
            });
          }),
          b);
    }),
    a.extend(a.validator, {
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
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (a) {
          (this.lastActive = a),
            this.settings.focusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  a,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.hideThese(this.errorsFor(a)));
        },
        onfocusout: function (a) {
          this.checkable(a) ||
            (!(a.name in this.submitted) && this.optional(a)) ||
            this.element(a);
        },
        onkeyup: function (b, c) {
          var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
          (9 === c.which && "" === this.elementValue(b)) ||
            a.inArray(c.keyCode, d) !== -1 ||
            ((b.name in this.submitted || b.name in this.invalid) &&
              this.element(b));
        },
        onclick: function (a) {
          a.name in this.submitted
            ? this.element(a)
            : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).addClass(c).removeClass(d)
            : a(b).addClass(c).removeClass(d);
        },
        unhighlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).removeClass(c).addClass(d)
            : a(b).removeClass(c).addClass(d);
        },
      },
      setDefaults: function (b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: a.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: a.validator.format("Please enter at least {0} characters."),
        rangelength: a.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: a.validator.format("Please enter a value between {0} and {1}."),
        max: a.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: a.validator.format(
          "Please enter a value greater than or equal to {0}."
        ),
        step: a.validator.format("Please enter a multiple of {0}."),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function b(b) {
            !this.form &&
              this.hasAttribute("contenteditable") &&
              ((this.form = a(this).closest("form")[0]),
              (this.name = a(this).attr("name")));
            var c = a.data(this.form, "validator"),
              d = "on" + b.type.replace(/^validate/, ""),
              e = c.settings;
            e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
          }
          (this.labelContainer = a(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              a(this.currentForm)),
            (this.containers = a(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var c,
            d = (this.groups = {});
          a.each(this.settings.groups, function (b, c) {
            "string" == typeof c && (c = c.split(/\s/)),
              a.each(c, function (a, c) {
                d[c] = b;
              });
          }),
            (c = this.settings.rules),
            a.each(c, function (b, d) {
              c[b] = a.validator.normalizeRule(d);
            }),
            a(this.currentForm)
              .on(
                "focusin.validate focusout.validate keyup.validate",
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                b
              )
              .on(
                "click.validate",
                "select, option, [type='radio'], [type='checkbox']",
                b
              ),
            this.settings.invalidHandler &&
              a(this.currentForm).on(
                "invalid-form.validate",
                this.settings.invalidHandler
              );
        },
        form: function () {
          return (
            this.checkForm(),
            a.extend(this.submitted, this.errorMap),
            (this.invalid = a.extend({}, this.errorMap)),
            this.valid() ||
              a(this.currentForm).triggerHandler("invalid-form", [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (
            var a = 0, b = (this.currentElements = this.elements());
            b[a];
            a++
          )
            this.check(b[a]);
          return this.valid();
        },
        element: function (b) {
          var c,
            d,
            e = this.clean(b),
            f = this.validationTargetFor(e),
            g = this,
            h = !0;
          return (
            void 0 === f
              ? delete this.invalid[e.name]
              : (this.prepareElement(f),
                (this.currentElements = a(f)),
                (d = this.groups[f.name]),
                d &&
                  a.each(this.groups, function (a, b) {
                    b === d &&
                      a !== f.name &&
                      ((e = g.validationTargetFor(g.clean(g.findByName(a)))),
                      e &&
                        e.name in g.invalid &&
                        (g.currentElements.push(e), (h = g.check(e) && h)));
                  }),
                (c = this.check(f) !== !1),
                (h = h && c),
                c ? (this.invalid[f.name] = !1) : (this.invalid[f.name] = !0),
                this.numberOfInvalids() ||
                  (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                a(b).attr("aria-invalid", !c)),
            h
          );
        },
        showErrors: function (b) {
          if (b) {
            var c = this;
            a.extend(this.errorMap, b),
              (this.errorList = a.map(this.errorMap, function (a, b) {
                return { message: a, element: c.findByName(b)[0] };
              })),
              (this.successList = a.grep(this.successList, function (a) {
                return !(a.name in b);
              }));
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          a.fn.resetForm && a(this.currentForm).resetForm(),
            (this.invalid = {}),
            (this.submitted = {}),
            this.prepareForm(),
            this.hideErrors();
          var b = this.elements()
            .removeData("previousValue")
            .removeAttr("aria-invalid");
          this.resetElements(b);
        },
        resetElements: function (a) {
          var b;
          if (this.settings.unhighlight)
            for (b = 0; a[b]; b++)
              this.settings.unhighlight.call(
                this,
                a[b],
                this.settings.errorClass,
                ""
              ),
                this.findByName(a[b].name).removeClass(
                  this.settings.validClass
                );
          else
            a.removeClass(this.settings.errorClass).removeClass(
              this.settings.validClass
            );
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (a) {
          var b,
            c = 0;
          for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
          return c;
        },
        hideErrors: function () {
          this.hideThese(this.toHide);
        },
        hideThese: function (a) {
          a.not(this.containers).text(""), this.addWrapper(a).hide();
        },
        valid: function () {
          return 0 === this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              a(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .focus()
                .trigger("focusin");
            } catch (b) {}
        },
        findLastActive: function () {
          var b = this.lastActive;
          return (
            b &&
            1 ===
              a.grep(this.errorList, function (a) {
                return a.element.name === b.name;
              }).length &&
            b
          );
        },
        elements: function () {
          var b = this,
            c = {};
          return a(this.currentForm)
            .find("input, select, textarea, [contenteditable]")
            .not(":submit, :reset, :image, :disabled")
            .not(this.settings.ignore)
            .filter(function () {
              var d = this.name || a(this).attr("name");
              return (
                !d &&
                  b.settings.debug &&
                  window.console &&
                  console.error("%o has no name assigned", this),
                this.hasAttribute("contenteditable") &&
                  ((this.form = a(this).closest("form")[0]), (this.name = d)),
                !(d in c || !b.objectLength(a(this).rules())) &&
                  ((c[d] = !0), !0)
              );
            });
        },
        clean: function (b) {
          return a(b)[0];
        },
        errors: function () {
          var b = this.settings.errorClass.split(" ").join(".");
          return a(this.settings.errorElement + "." + b, this.errorContext);
        },
        resetInternals: function () {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = a([])),
            (this.toHide = a([]));
        },
        reset: function () {
          this.resetInternals(), (this.currentElements = a([]));
        },
        prepareForm: function () {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function (a) {
          this.reset(), (this.toHide = this.errorsFor(a));
        },
        elementValue: function (b) {
          var c,
            d,
            e = a(b),
            f = b.type;
          return "radio" === f || "checkbox" === f
            ? this.findByName(b.name).filter(":checked").val()
            : "number" === f && "undefined" != typeof b.validity
            ? b.validity.badInput
              ? "NaN"
              : e.val()
            : ((c = b.hasAttribute("contenteditable") ? e.text() : e.val()),
              "file" === f
                ? "C:\\fakepath\\" === c.substr(0, 12)
                  ? c.substr(12)
                  : ((d = c.lastIndexOf("/")),
                    d >= 0
                      ? c.substr(d + 1)
                      : ((d = c.lastIndexOf("\\")),
                        d >= 0 ? c.substr(d + 1) : c))
                : "string" == typeof c
                ? c.replace(/\r/g, "")
                : c);
        },
        check: function (b) {
          b = this.validationTargetFor(this.clean(b));
          var c,
            d,
            e,
            f,
            g = a(b).rules(),
            h = a.map(g, function (a, b) {
              return b;
            }).length,
            i = !1,
            j = this.elementValue(b);
          if (
            ("function" == typeof g.normalizer
              ? (f = g.normalizer)
              : "function" == typeof this.settings.normalizer &&
                (f = this.settings.normalizer),
            f)
          ) {
            if (((j = f.call(b, j)), "string" != typeof j))
              throw new TypeError(
                "The normalizer should return a string value."
              );
            delete g.normalizer;
          }
          for (d in g) {
            e = { method: d, parameters: g[d] };
            try {
              if (
                ((c = a.validator.methods[d].call(this, j, b, e.parameters)),
                "dependency-mismatch" === c && 1 === h)
              ) {
                i = !0;
                continue;
              }
              if (((i = !1), "pending" === c))
                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!c) return this.formatAndAdd(b, e), !1;
            } catch (k) {
              throw (
                (this.settings.debug &&
                  window.console &&
                  console.log(
                    "Exception occurred when checking element " +
                      b.id +
                      ", check the '" +
                      e.method +
                      "' method.",
                    k
                  ),
                k instanceof TypeError &&
                  (k.message +=
                    ".  Exception occurred when checking element " +
                    b.id +
                    ", check the '" +
                    e.method +
                    "' method."),
                k)
              );
            }
          }
          if (!i) return this.objectLength(g) && this.successList.push(b), !0;
        },
        customDataMessage: function (b, c) {
          return (
            a(b).data(
              "msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
            ) || a(b).data("msg")
          );
        },
        customMessage: function (a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor === String ? c : c[b]);
        },
        findDefined: function () {
          for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a];
        },
        defaultMessage: function (b, c) {
          "string" == typeof c && (c = { method: c });
          var d = this.findDefined(
              this.customMessage(b.name, c.method),
              this.customDataMessage(b, c.method),
              (!this.settings.ignoreTitle && b.title) || void 0,
              a.validator.messages[c.method],
              "<strong>Warning: No message defined for " + b.name + "</strong>"
            ),
            e = /\$?\{(\d+)\}/g;
          return (
            "function" == typeof d
              ? (d = d.call(this, c.parameters, b))
              : e.test(d) &&
                (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
            d
          );
        },
        formatAndAdd: function (a, b) {
          var c = this.defaultMessage(a, b);
          this.errorList.push({ message: c, element: a, method: b.method }),
            (this.errorMap[a.name] = c),
            (this.submitted[a.name] = c);
        },
        addWrapper: function (a) {
          return (
            this.settings.wrapper &&
              (a = a.add(a.parent(this.settings.wrapper))),
            a
          );
        },
        defaultShowErrors: function () {
          var a, b, c;
          for (a = 0; this.errorList[a]; a++)
            (c = this.errorList[a]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  c.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(c.element, c.message);
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (a = 0; this.successList[a]; a++)
              this.showLabel(this.successList[a]);
          if (this.settings.unhighlight)
            for (a = 0, b = this.validElements(); b[a]; a++)
              this.settings.unhighlight.call(
                this,
                b[a],
                this.settings.errorClass,
                this.settings.validClass
              );
          (this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show();
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return a(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (b, c) {
          var d,
            e,
            f,
            g,
            h = this.errorsFor(b),
            i = this.idOrName(b),
            j = a(b).attr("aria-describedby");
          h.length
            ? (h
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              h.html(c))
            : ((h = a("<" + this.settings.errorElement + ">")
                .attr("id", i + "-error")
                .addClass(this.settings.errorClass)
                .html(c || "")),
              (d = h),
              this.settings.wrapper &&
                (d = h
                  .hide()
                  .show()
                  .wrap("<" + this.settings.wrapper + "/>")
                  .parent()),
              this.labelContainer.length
                ? this.labelContainer.append(d)
                : this.settings.errorPlacement
                ? this.settings.errorPlacement.call(this, d, a(b))
                : d.insertAfter(b),
              h.is("label")
                ? h.attr("for", i)
                : 0 ===
                    h.parents("label[for='" + this.escapeCssMeta(i) + "']")
                      .length &&
                  ((f = h.attr("id")),
                  j
                    ? j.match(
                        new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")
                      ) || (j += " " + f)
                    : (j = f),
                  a(b).attr("aria-describedby", j),
                  (e = this.groups[b.name]),
                  e &&
                    ((g = this),
                    a.each(g.groups, function (b, c) {
                      c === e &&
                        a(
                          "[name='" + g.escapeCssMeta(b) + "']",
                          g.currentForm
                        ).attr("aria-describedby", h.attr("id"));
                    })))),
            !c &&
              this.settings.success &&
              (h.text(""),
              "string" == typeof this.settings.success
                ? h.addClass(this.settings.success)
                : this.settings.success(h, b)),
            (this.toShow = this.toShow.add(h));
        },
        errorsFor: function (b) {
          var c = this.escapeCssMeta(this.idOrName(b)),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
          return (
            d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
            this.errors().filter(e)
          );
        },
        escapeCssMeta: function (a) {
          return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
        },
        idOrName: function (a) {
          return (
            this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          );
        },
        validationTargetFor: function (b) {
          return (
            this.checkable(b) && (b = this.findByName(b.name)),
            a(b).not(this.settings.ignore)[0]
          );
        },
        checkable: function (a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function (b) {
          return a(this.currentForm).find(
            "[name='" + this.escapeCssMeta(b) + "']"
          );
        },
        getLength: function (b, c) {
          switch (c.nodeName.toLowerCase()) {
            case "select":
              return a("option:selected", c).length;
            case "input":
              if (this.checkable(c))
                return this.findByName(c.name).filter(":checked").length;
          }
          return b.length;
        },
        depend: function (a, b) {
          return (
            !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
          );
        },
        dependTypes: {
          boolean: function (a) {
            return a;
          },
          string: function (b, c) {
            return !!a(b, c.form).length;
          },
          function: function (a, b) {
            return a(b);
          },
        },
        optional: function (b) {
          var c = this.elementValue(b);
          return (
            !a.validator.methods.required.call(this, c, b) &&
            "dependency-mismatch"
          );
        },
        startRequest: function (b) {
          this.pending[b.name] ||
            (this.pendingRequest++,
            a(b).addClass(this.settings.pendingClass),
            (this.pending[b.name] = !0));
        },
        stopRequest: function (b, c) {
          this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[b.name],
            a(b).removeClass(this.settings.pendingClass),
            c && 0 === this.pendingRequest && this.formSubmitted && this.form()
              ? (a(this.currentForm).submit(),
                this.submitButton &&
                  a(
                    "input:hidden[name='" + this.submitButton.name + "']",
                    this.currentForm
                  ).remove(),
                (this.formSubmitted = !1))
              : !c &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (a(this.currentForm).triggerHandler("invalid-form", [this]),
                (this.formSubmitted = !1));
        },
        previousValue: function (b, c) {
          return (
            (c = ("string" == typeof c && c) || "remote"),
            a.data(b, "previousValue") ||
              a.data(b, "previousValue", {
                old: null,
                valid: !0,
                message: this.defaultMessage(b, { method: c }),
              })
          );
        },
        destroy: function () {
          this.resetForm(),
            a(this.currentForm)
              .off(".validate")
              .removeData("validator")
              .find(".validate-equalTo-blur")
              .off(".validate-equalTo")
              .removeClass("validate-equalTo-blur");
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (b, c) {
        b.constructor === String
          ? (this.classRuleSettings[b] = c)
          : a.extend(this.classRuleSettings, b);
      },
      classRules: function (b) {
        var c = {},
          d = a(b).attr("class");
        return (
          d &&
            a.each(d.split(" "), function () {
              this in a.validator.classRuleSettings &&
                a.extend(c, a.validator.classRuleSettings[this]);
            }),
          c
        );
      },
      normalizeAttributeRule: function (a, b, c, d) {
        /min|max|step/.test(c) &&
          (null === b || /number|range|text/.test(b)) &&
          ((d = Number(d)), isNaN(d) && (d = void 0)),
          d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
      },
      attributeRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          "required" === c
            ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
            : (d = f.attr(c)),
            this.normalizeAttributeRule(e, g, c, d);
        return (
          e.maxlength &&
            /-1|2147483647|524288/.test(e.maxlength) &&
            delete e.maxlength,
          e
        );
      },
      dataRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          (d = f.data(
            "rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
          )),
            this.normalizeAttributeRule(e, g, c, d);
        return e;
      },
      staticRules: function (b) {
        var c = {},
          d = a.data(b.form, "validator");
        return (
          d.settings.rules &&
            (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
          c
        );
      },
      normalizeRules: function (b, c) {
        return (
          a.each(b, function (d, e) {
            if (e === !1) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case "string":
                  f = !!a(e.depends, c.form).length;
                  break;
                case "function":
                  f = e.depends.call(c, c);
              }
              f
                ? (b[d] = void 0 === e.param || e.param)
                : (a.data(c.form, "validator").resetElements(a(c)),
                  delete b[d]);
            }
          }),
          a.each(b, function (d, e) {
            b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
          }),
          a.each(["minlength", "maxlength"], function () {
            b[this] && (b[this] = Number(b[this]));
          }),
          a.each(["rangelength", "range"], function () {
            var c;
            b[this] &&
              (a.isArray(b[this])
                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                : "string" == typeof b[this] &&
                  ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                  (b[this] = [Number(c[0]), Number(c[1])])));
          }),
          a.validator.autoCreateRanges &&
            (null != b.min &&
              null != b.max &&
              ((b.range = [b.min, b.max]), delete b.min, delete b.max),
            null != b.minlength &&
              null != b.maxlength &&
              ((b.rangelength = [b.minlength, b.maxlength]),
              delete b.minlength,
              delete b.maxlength)),
          b
        );
      },
      normalizeRule: function (b) {
        if ("string" == typeof b) {
          var c = {};
          a.each(b.split(/\s/), function () {
            c[this] = !0;
          }),
            (b = c);
        }
        return b;
      },
      addMethod: function (b, c, d) {
        (a.validator.methods[b] = c),
          (a.validator.messages[b] =
            void 0 !== d ? d : a.validator.messages[b]),
          c.length < 3 &&
            a.validator.addClassRules(b, a.validator.normalizeRule(b));
      },
      methods: {
        required: function (b, c, d) {
          if (!this.depend(d, c)) return "dependency-mismatch";
          if ("select" === c.nodeName.toLowerCase()) {
            var e = a(c).val();
            return e && e.length > 0;
          }
          return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
        },
        email: function (a, b) {
          return (
            this.optional(b) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              a
            )
          );
        },
        url: function (a, b) {
          return (
            this.optional(b) ||
            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
              a
            )
          );
        },
        date: function (a, b) {
          return (
            this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
          );
        },
        dateISO: function (a, b) {
          return (
            this.optional(b) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              a
            )
          );
        },
        number: function (a, b) {
          return (
            this.optional(b) ||
            /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
          );
        },
        digits: function (a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        minlength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || e >= d;
        },
        maxlength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || e <= d;
        },
        rangelength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || (e >= d[0] && e <= d[1]);
        },
        min: function (a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function (a, b, c) {
          return this.optional(b) || a <= c;
        },
        range: function (a, b, c) {
          return this.optional(b) || (a >= c[0] && a <= c[1]);
        },
        step: function (b, c, d) {
          var e,
            f = a(c).attr("type"),
            g = "Step attribute on input type " + f + " is not supported.",
            h = ["text", "number", "range"],
            i = new RegExp("\\b" + f + "\\b"),
            j = f && !i.test(h.join()),
            k = function (a) {
              var b = ("" + a).match(/(?:\.(\d+))?$/);
              return b && b[1] ? b[1].length : 0;
            },
            l = function (a) {
              return Math.round(a * Math.pow(10, e));
            },
            m = !0;
          if (j) throw new Error(g);
          return (
            (e = k(d)),
            (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
            this.optional(c) || m
          );
        },
        equalTo: function (b, c, d) {
          var e = a(d);
          return (
            this.settings.onfocusout &&
              e.not(".validate-equalTo-blur").length &&
              e
                .addClass("validate-equalTo-blur")
                .on("blur.validate-equalTo", function () {
                  a(c).valid();
                }),
            b === e.val()
          );
        },
        remote: function (b, c, d, e) {
          if (this.optional(c)) return "dependency-mismatch";
          e = ("string" == typeof e && e) || "remote";
          var f,
            g,
            h,
            i = this.previousValue(c, e);
          return (
            this.settings.messages[c.name] ||
              (this.settings.messages[c.name] = {}),
            (i.originalMessage =
              i.originalMessage || this.settings.messages[c.name][e]),
            (this.settings.messages[c.name][e] = i.message),
            (d = ("string" == typeof d && { url: d }) || d),
            (h = a.param(a.extend({ data: b }, d.data))),
            i.old === h
              ? i.valid
              : ((i.old = h),
                (f = this),
                this.startRequest(c),
                (g = {}),
                (g[c.name] = b),
                a.ajax(
                  a.extend(
                    !0,
                    {
                      mode: "abort",
                      port: "validate" + c.name,
                      dataType: "json",
                      data: g,
                      context: f.currentForm,
                      success: function (a) {
                        var d,
                          g,
                          h,
                          j = a === !0 || "true" === a;
                        (f.settings.messages[c.name][e] = i.originalMessage),
                          j
                            ? ((h = f.formSubmitted),
                              f.resetInternals(),
                              (f.toHide = f.errorsFor(c)),
                              (f.formSubmitted = h),
                              f.successList.push(c),
                              (f.invalid[c.name] = !1),
                              f.showErrors())
                            : ((d = {}),
                              (g =
                                a ||
                                f.defaultMessage(c, {
                                  method: e,
                                  parameters: b,
                                })),
                              (d[c.name] = i.message = g),
                              (f.invalid[c.name] = !0),
                              f.showErrors(d)),
                          (i.valid = j),
                          f.stopRequest(c, j);
                      },
                    },
                    d
                  )
                ),
                "pending")
          );
        },
      },
    });
  var b,
    c = {};
  return (
    a.ajaxPrefilter
      ? a.ajaxPrefilter(function (a, b, d) {
          var e = a.port;
          "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
        })
      : ((b = a.ajax),
        (a.ajax = function (d) {
          var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
          return "abort" === e
            ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f])
            : b.apply(this, arguments);
        })),
    a
  );
});
!(function (n) {
  var i = {};
  function o(e) {
    if (i[e]) return i[e].exports;
    var t = (i[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = n),
    (o.c = i),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          o.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 11));
})([
  ,
  ,
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      "complete" === document.readyState ||
      "interactive" === document.readyState
        ? e.call()
        : document.attachEvent
        ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && e.call();
          })
        : document.addEventListener &&
          document.addEventListener("DOMContentLoaded", e);
    };
  },
  ,
  function (n, e, t) {
    "use strict";
    (function (e) {
      var t;
      (t =
        "undefined" != typeof window
          ? window
          : void 0 !== e
          ? e
          : "undefined" != typeof self
          ? self
          : {}),
        (n.exports = t);
    }).call(this, t(5));
  },
  function (e, t, n) {
    "use strict";
    var i,
      o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
    i = (function () {
      return this;
    })();
    try {
      i = i || new Function("return this")();
    } catch (e) {
      "object" === ("undefined" == typeof window ? "undefined" : o(window)) &&
        (i = window);
    }
    e.exports = i;
  },
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    e.exports = n(12);
  },
  function (e, t, n) {
    "use strict";
    var i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      o = l(n(2)),
      a = n(4),
      r = l(n(13));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = a.window.jarallax;
    if (
      ((a.window.jarallax = r["default"]),
      (a.window.jarallax.noConflict = function () {
        return (a.window.jarallax = s), this;
      }),
      void 0 !== a.jQuery)
    ) {
      var c = function () {
        var e = arguments || [];
        Array.prototype.unshift.call(e, this);
        var t = r["default"].apply(a.window, e);
        return "object" !== (void 0 === t ? "undefined" : i(t)) ? t : this;
      };
      c.constructor = r["default"].constructor;
      var u = a.jQuery.fn.jarallax;
      (a.jQuery.fn.jarallax = c),
        (a.jQuery.fn.jarallax.noConflict = function () {
          return (a.jQuery.fn.jarallax = u), this;
        });
    }
    (0, o["default"])(function () {
      (0, r["default"])(document.querySelectorAll("[data-jarallax]"));
    });
  },
  function (e, I, P) {
    "use strict";
    (function (e) {
      Object.defineProperty(I, "__esModule", { value: !0 });
      var s = function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                i = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var r, l = e[Symbol.iterator]();
                  !(i = (r = l.next()).done) &&
                  (n.push(r.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (o = !0), (a = e);
              } finally {
                try {
                  !i && l["return"] && l["return"]();
                } finally {
                  if (o) throw a;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        },
        t = function (e, t, n) {
          return t && i(e.prototype, t), n && i(e, n), e;
        };
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        n = r(P(2)),
        o = r(P(14)),
        a = P(4);
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u =
          -1 < navigator.userAgent.indexOf("MSIE ") ||
          -1 < navigator.userAgent.indexOf("Trident/") ||
          -1 < navigator.userAgent.indexOf("Edge/"),
        l =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
        d = (function () {
          for (
            var e = "transform WebkitTransform MozTransform".split(" "),
              t = document.createElement("div"),
              n = 0;
            n < e.length;
            n++
          )
            if (t && void 0 !== t.style[e[n]]) return e[n];
          return !1;
        })(),
        m = void 0;
      var v = void 0,
        b = void 0,
        p = void 0,
        f = !1,
        g = !1;
      function y(e) {
        (v = a.window.innerWidth || document.documentElement.clientWidth),
          (b = l
            ? (!m &&
                document.body &&
                (((m = document.createElement("div")).style.cssText =
                  "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;"),
                document.body.appendChild(m)),
              (m ? m.clientHeight : 0) ||
                a.window.innerHeight ||
                document.documentElement.clientHeight)
            : a.window.innerHeight || document.documentElement.clientHeight),
          "object" !== (void 0 === e ? "undefined" : c(e)) ||
            ("load" !== e.type && "dom-loaded" !== e.type) ||
            (f = !0);
      }
      y(),
        a.window.addEventListener("resize", y),
        a.window.addEventListener("orientationchange", y),
        a.window.addEventListener("load", y),
        (0, n["default"])(function () {
          y({ type: "dom-loaded" });
        });
      var h = [],
        x = !1;
      function w() {
        if (h.length) {
          p =
            void 0 !== a.window.pageYOffset
              ? a.window.pageYOffset
              : (
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body
                ).scrollTop;
          var t = f || !x || x.width !== v || x.height !== b,
            n = g || t || !x || x.y !== p;
          (g = f = !1),
            (t || n) &&
              (h.forEach(function (e) {
                t && e.onResize(), n && e.onScroll();
              }),
              (x = { width: v, height: b, y: p })),
            (0, o["default"])(w);
        }
      }
      var A =
          !!e.ResizeObserver &&
          new e.ResizeObserver(function (e) {
            e &&
              e.length &&
              (0, o["default"])(function () {
                e.forEach(function (e) {
                  e.target &&
                    e.target.jarallax &&
                    (f || e.target.jarallax.onResize(), (g = !0));
                });
              });
          }),
        $ = 0,
        S =
          (t(j, [
            {
              key: "css",
              value: function (t, n) {
                return "string" == typeof n
                  ? a.window.getComputedStyle(t).getPropertyValue(n)
                  : (n.transform && d && (n[d] = n.transform),
                    Object.keys(n).forEach(function (e) {
                      t.style[e] = n[e];
                    }),
                    t);
              },
            },
            {
              key: "extend",
              value: function (n) {
                var i = arguments;
                return (
                  (n = n || {}),
                  Object.keys(arguments).forEach(function (t) {
                    i[t] &&
                      Object.keys(i[t]).forEach(function (e) {
                        n[e] = i[t][e];
                      });
                  }),
                  n
                );
              },
            },
            {
              key: "getWindowData",
              value: function () {
                return { width: v, height: b, y: p };
              },
            },
            {
              key: "initImg",
              value: function () {
                var e = this,
                  t = e.options.imgElement;
                return (
                  t && "string" == typeof t && (t = e.$item.querySelector(t)),
                  t instanceof Element ||
                    (e.options.imgSrc
                      ? ((t = new Image()).src = e.options.imgSrc)
                      : (t = null)),
                  t &&
                    (e.options.keepImg
                      ? (e.image.$item = t.cloneNode(!0))
                      : ((e.image.$item = t),
                        (e.image.$itemParent = t.parentNode)),
                    (e.image.useImgTag = !0)),
                  !(
                    !e.image.$item &&
                    (null === e.image.src &&
                      ((e.image.src =
                        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
                      (e.image.bgImage = e.css(e.$item, "background-image"))),
                    !e.image.bgImage || "none" === e.image.bgImage)
                  )
                );
              },
            },
            {
              key: "canInitParallax",
              value: function () {
                return d && !this.options.disableParallax();
              },
            },
            {
              key: "init",
              value: function () {
                var e = this,
                  t = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    pointerEvents: "none",
                  },
                  n = {};
                if (!e.options.keepImg) {
                  var i = e.$item.getAttribute("style");
                  if (
                    (i &&
                      e.$item.setAttribute("data-jarallax-original-styles", i),
                    e.image.useImgTag)
                  ) {
                    var o = e.image.$item.getAttribute("style");
                    o &&
                      e.image.$item.setAttribute(
                        "data-jarallax-original-styles",
                        o
                      );
                  }
                }
                if (
                  ("static" === e.css(e.$item, "position") &&
                    e.css(e.$item, { position: "relative" }),
                  "auto" === e.css(e.$item, "z-index") &&
                    e.css(e.$item, { zIndex: 0 }),
                  (e.image.$container = document.createElement("div")),
                  e.css(e.image.$container, t),
                  e.css(e.image.$container, { "z-index": e.options.zIndex }),
                  u && e.css(e.image.$container, { opacity: 0.9999 }),
                  e.image.$container.setAttribute(
                    "id",
                    "jarallax-container-" + e.instanceID
                  ),
                  e.$item.appendChild(e.image.$container),
                  e.image.useImgTag
                    ? (n = e.extend(
                        {
                          "object-fit": e.options.imgSize,
                          "object-position": e.options.imgPosition,
                          "font-family":
                            "object-fit: " +
                            e.options.imgSize +
                            "; object-position: " +
                            e.options.imgPosition +
                            ";",
                          "max-width": "none",
                        },
                        t,
                        n
                      ))
                    : ((e.image.$item = document.createElement("div")),
                      e.image.src &&
                        (n = e.extend(
                          {
                            "background-position": e.options.imgPosition,
                            "background-size": e.options.imgSize,
                            "background-repeat": e.options.imgRepeat,
                            "background-image":
                              e.image.bgImage || 'url("' + e.image.src + '")',
                          },
                          t,
                          n
                        ))),
                  ("opacity" !== e.options.type &&
                    "scale" !== e.options.type &&
                    "scale-opacity" !== e.options.type &&
                    1 !== e.options.speed) ||
                    (e.image.position = "absolute"),
                  "fixed" === e.image.position)
                )
                  for (
                    var a = 0, r = e.$item;
                    null !== r && r !== document && 0 === a;

                  ) {
                    var l =
                      e.css(r, "-webkit-transform") ||
                      e.css(r, "-moz-transform") ||
                      e.css(r, "transform");
                    l &&
                      "none" !== l &&
                      ((a = 1), (e.image.position = "absolute")),
                      (r = r.parentNode);
                  }
                (n.position = e.image.position),
                  e.css(e.image.$item, n),
                  e.image.$container.appendChild(e.image.$item),
                  e.onResize(),
                  e.onScroll(!0),
                  e.options.automaticResize && A && A.observe(e.$item),
                  e.options.onInit && e.options.onInit.call(e),
                  "none" !== e.css(e.$item, "background-image") &&
                    e.css(e.$item, { "background-image": "none" }),
                  e.addToParallaxList();
              },
            },
            {
              key: "addToParallaxList",
              value: function () {
                h.push(this), 1 === h.length && w();
              },
            },
            {
              key: "removeFromParallaxList",
              value: function () {
                var n = this;
                h.forEach(function (e, t) {
                  e.instanceID === n.instanceID && h.splice(t, 1);
                });
              },
            },
            {
              key: "destroy",
              value: function () {
                var e = this;
                e.removeFromParallaxList();
                var t = e.$item.getAttribute("data-jarallax-original-styles");
                if (
                  (e.$item.removeAttribute("data-jarallax-original-styles"),
                  t
                    ? e.$item.setAttribute("style", t)
                    : e.$item.removeAttribute("style"),
                  e.image.useImgTag)
                ) {
                  var n = e.image.$item.getAttribute(
                    "data-jarallax-original-styles"
                  );
                  e.image.$item.removeAttribute(
                    "data-jarallax-original-styles"
                  ),
                    n
                      ? e.image.$item.setAttribute("style", t)
                      : e.image.$item.removeAttribute("style"),
                    e.image.$itemParent &&
                      e.image.$itemParent.appendChild(e.image.$item);
                }
                e.$clipStyles &&
                  e.$clipStyles.parentNode.removeChild(e.$clipStyles),
                  e.image.$container &&
                    e.image.$container.parentNode.removeChild(
                      e.image.$container
                    ),
                  e.options.onDestroy && e.options.onDestroy.call(e),
                  delete e.$item.jarallax;
              },
            },
            {
              key: "clipContainer",
              value: function () {
                if ("fixed" === this.image.position) {
                  var e = this,
                    t = e.image.$container.getBoundingClientRect(),
                    n = t.width,
                    i = t.height;
                  e.$clipStyles ||
                    ((e.$clipStyles = document.createElement("style")),
                    e.$clipStyles.setAttribute("type", "text/css"),
                    e.$clipStyles.setAttribute(
                      "id",
                      "jarallax-clip-" + e.instanceID
                    ),
                    (
                      document.head || document.getElementsByTagName("head")[0]
                    ).appendChild(e.$clipStyles));
                  var o =
                    "#jarallax-container-" +
                    e.instanceID +
                    " {\n           clip: rect(0 " +
                    n +
                    "px " +
                    i +
                    "px 0);\n           clip: rect(0, " +
                    n +
                    "px, " +
                    i +
                    "px, 0);\n        }";
                  e.$clipStyles.styleSheet
                    ? (e.$clipStyles.styleSheet.cssText = o)
                    : (e.$clipStyles.innerHTML = o);
                }
              },
            },
            {
              key: "coverImage",
              value: function () {
                var e = this,
                  t = e.image.$container.getBoundingClientRect(),
                  n = t.height,
                  i = e.options.speed,
                  o =
                    "scroll" === e.options.type ||
                    "scroll-opacity" === e.options.type,
                  a = 0,
                  r = n,
                  l = 0;
                return (
                  o &&
                    (i < 0
                      ? ((a = i * Math.max(n, b)), b < n && (a -= i * (n - b)))
                      : (a = i * (n + b)),
                    1 < i
                      ? (r = Math.abs(a - b))
                      : i < 0
                      ? (r = a / i + Math.abs(a))
                      : (r += (b - n) * (1 - i)),
                    (a /= 2)),
                  (e.parallaxScrollDistance = a),
                  (l = o ? (b - r) / 2 : (n - r) / 2),
                  e.css(e.image.$item, {
                    height: r + "px",
                    marginTop: l + "px",
                    left: "fixed" === e.image.position ? t.left + "px" : "0",
                    width: t.width + "px",
                  }),
                  e.options.onCoverImage && e.options.onCoverImage.call(e),
                  { image: { height: r, marginTop: l }, container: t }
                );
              },
            },
            {
              key: "isVisible",
              value: function () {
                return this.isElementInViewport || !1;
              },
            },
            {
              key: "onScroll",
              value: function (e) {
                var t = this,
                  n = t.$item.getBoundingClientRect(),
                  i = n.top,
                  o = n.height,
                  a = {},
                  r = n;
                if (
                  (t.options.elementInViewport &&
                    (r = t.options.elementInViewport.getBoundingClientRect()),
                  (t.isElementInViewport =
                    0 <= r.bottom && 0 <= r.right && r.top <= b && r.left <= v),
                  e || t.isElementInViewport)
                ) {
                  var l = Math.max(0, i),
                    s = Math.max(0, o + i),
                    c = Math.max(0, -i),
                    u = Math.max(0, i + o - b),
                    d = Math.max(0, o - (i + o - b)),
                    m = Math.max(0, -i + b - o),
                    p = 1 - (2 * (b - i)) / (b + o),
                    f = 1;
                  if (
                    (o < b
                      ? (f = 1 - (c || u) / o)
                      : s <= b
                      ? (f = s / b)
                      : d <= b && (f = d / b),
                    ("opacity" !== t.options.type &&
                      "scale-opacity" !== t.options.type &&
                      "scroll-opacity" !== t.options.type) ||
                      ((a.transform = "translate3d(0,0,0)"), (a.opacity = f)),
                    "scale" === t.options.type ||
                      "scale-opacity" === t.options.type)
                  ) {
                    var g = 1;
                    t.options.speed < 0
                      ? (g -= t.options.speed * f)
                      : (g += t.options.speed * (1 - f)),
                      (a.transform = "scale(" + g + ") translate3d(0,0,0)");
                  }
                  if (
                    "scroll" === t.options.type ||
                    "scroll-opacity" === t.options.type
                  ) {
                    var y = t.parallaxScrollDistance * p;
                    "absolute" === t.image.position && (y -= i),
                      (a.transform = "translate3d(0," + y + "px,0)");
                  }
                  t.css(t.image.$item, a),
                    t.options.onScroll &&
                      t.options.onScroll.call(t, {
                        section: n,
                        beforeTop: l,
                        beforeTopEnd: s,
                        afterTop: c,
                        beforeBottom: u,
                        beforeBottomEnd: d,
                        afterBottom: m,
                        visiblePercent: f,
                        fromViewportCenter: p,
                      });
                }
              },
            },
            {
              key: "onResize",
              value: function () {
                this.coverImage(), this.clipContainer();
              },
            },
          ]),
          j);
      function j(e, t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, j);
        var n = this;
        (n.instanceID = $++),
          (n.$item = e),
          (n.defaults = {
            type: "scroll",
            speed: 0.5,
            imgSrc: null,
            imgElement: ".jarallax-img",
            imgSize: "cover",
            imgPosition: "50% 50%",
            imgRepeat: "no-repeat",
            keepImg: !1,
            elementInViewport: null,
            zIndex: -100,
            disableParallax: !1,
            disableVideo: !1,
            automaticResize: !0,
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: !0,
            videoPlayOnlyVisible: !0,
            videoLazyLoading: !0,
            onScroll: null,
            onInit: null,
            onDestroy: null,
            onCoverImage: null,
          });
        var i = n.$item.dataset || {},
          o = {};
        if (
          (Object.keys(i).forEach(function (e) {
            var t = e.substr(0, 1).toLowerCase() + e.substr(1);
            t && void 0 !== n.defaults[t] && (o[t] = i[e]);
          }),
          (n.options = n.extend({}, n.defaults, o, t)),
          (n.pureOptions = n.extend({}, n.options)),
          Object.keys(n.options).forEach(function (e) {
            "true" === n.options[e]
              ? (n.options[e] = !0)
              : "false" === n.options[e] && (n.options[e] = !1);
          }),
          (n.options.speed = Math.min(
            2,
            Math.max(-1, parseFloat(n.options.speed))
          )),
          "string" == typeof n.options.disableParallax &&
            (n.options.disableParallax = new RegExp(n.options.disableParallax)),
          n.options.disableParallax instanceof RegExp)
        ) {
          var a = n.options.disableParallax;
          n.options.disableParallax = function () {
            return a.test(navigator.userAgent);
          };
        }
        if (
          ("function" != typeof n.options.disableParallax &&
            (n.options.disableParallax = function () {
              return !1;
            }),
          "string" == typeof n.options.disableVideo &&
            (n.options.disableVideo = new RegExp(n.options.disableVideo)),
          n.options.disableVideo instanceof RegExp)
        ) {
          var r = n.options.disableVideo;
          n.options.disableVideo = function () {
            return r.test(navigator.userAgent);
          };
        }
        "function" != typeof n.options.disableVideo &&
          (n.options.disableVideo = function () {
            return !1;
          });
        var l = n.options.elementInViewport;
        l &&
          "object" === (void 0 === l ? "undefined" : c(l)) &&
          void 0 !== l.length &&
          (l = s(l, 1)[0]);
        l instanceof Element || (l = null),
          (n.options.elementInViewport = l),
          (n.image = {
            src: n.options.imgSrc || null,
            $container: null,
            useImgTag: !1,
            position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent)
              ? "absolute"
              : "fixed",
          }),
          n.initImg() && n.canInitParallax() && n.init();
      }
      function E(e, t) {
        ("object" ===
        ("undefined" == typeof HTMLElement ? "undefined" : c(HTMLElement))
          ? e instanceof HTMLElement
          : e &&
            "object" === (void 0 === e ? "undefined" : c(e)) &&
            null !== e &&
            1 === e.nodeType &&
            "string" == typeof e.nodeName) && (e = [e]);
        for (
          var n = t,
            i = Array.prototype.slice.call(arguments, 2),
            o = e.length,
            a = 0,
            r = void 0;
          a < o;
          a++
        )
          if (
            ("object" === (void 0 === n ? "undefined" : c(n)) || void 0 === n
              ? e[a].jarallax || (e[a].jarallax = new S(e[a], n))
              : e[a].jarallax && (r = e[a].jarallax[n].apply(e[a].jarallax, i)),
            void 0 !== r)
          )
            return r;
        return e;
      }
      (E.constructor = S), (I["default"] = E);
    }).call(this, P(5));
  },
  function (e, t, n) {
    "use strict";
    var i = n(15),
      o =
        i.requestAnimationFrame ||
        i.webkitRequestAnimationFrame ||
        i.mozRequestAnimationFrame ||
        function (e) {
          var t = +new Date(),
            n = Math.max(0, 16 - (t - a)),
            i = setTimeout(e, n);
          return (a = t), i;
        },
      a = +new Date();
    var r =
      i.cancelAnimationFrame ||
      i.webkitCancelAnimationFrame ||
      i.mozCancelAnimationFrame ||
      clearTimeout;
    Function.prototype.bind && ((o = o.bind(i)), (r = r.bind(i))),
      ((e.exports = o).cancel = r);
  },
  function (n, e, t) {
    "use strict";
    (function (e) {
      var t;
      (t =
        "undefined" != typeof window
          ? window
          : void 0 !== e
          ? e
          : "undefined" != typeof self
          ? self
          : {}),
        (n.exports = t);
    }).call(this, t(5));
  },
]);
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("simpleParallax", [], e)
    : "object" == typeof exports
    ? (exports.simpleParallax = e())
    : (t.simpleParallax = e());
})(window, function () {
  return ((n = {}),
  (s.m = i =
    [
      function (t, e, i) {
        "use strict";
        function n(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        i.r(e);
        var s = (function () {
            function t() {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.positions = { top: 0, bottom: 0, height: 0 });
            }
            return (
              (function (t, e, i) {
                e && n(t.prototype, e), i && n(t, i);
              })(t, [
                {
                  key: "setViewportTop",
                  value: function () {
                    return (
                      (this.positions.top = window.pageYOffset), this.positions
                    );
                  },
                },
                {
                  key: "setViewportBottom",
                  value: function () {
                    return (
                      (this.positions.bottom =
                        this.positions.top + this.positions.height),
                      this.positions
                    );
                  },
                },
                {
                  key: "setViewportHeight",
                  value: function () {
                    return (
                      (this.positions.height =
                        document.documentElement.clientHeight),
                      this.positions
                    );
                  },
                },
                {
                  key: "setViewportAll",
                  value: function () {
                    return (
                      (this.positions.top = window.pageYOffset),
                      (this.positions.bottom =
                        this.positions.top + this.positions.height),
                      (this.positions.height =
                        document.documentElement.clientHeight),
                      this.positions
                    );
                  },
                },
              ]),
              t
            );
          })(),
          o = function (t) {
            return NodeList.prototype.isPrototypeOf(t) ||
              HTMLCollection.prototype.isPrototypeOf(t)
              ? Array.from(t)
              : "string" == typeof t || t instanceof String
              ? document.querySelectorAll(t)
              : [t];
          },
          r = (function () {
            for (
              var t,
                e =
                  "transform webkitTransform mozTransform oTransform msTransform".split(
                    " "
                  ),
                i = 0;
              void 0 === t;

            )
              (t =
                void 0 !== document.createElement("div").style[e[i]]
                  ? e[i]
                  : void 0),
                (i += 1);
            return t;
          })(),
          a = function (t) {
            return (
              !!t &&
              !!t.complete &&
              (void 0 === t.naturalWidth || 0 !== t.naturalWidth)
            );
          };
        function l(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) {
                for (var e = 0, i = new Array(t.length); e < t.length; e++)
                  i[e] = t[e];
                return i;
              }
            })(t) ||
            (function (t) {
              if (
                Symbol.iterator in Object(t) ||
                "[object Arguments]" === Object.prototype.toString.call(t)
              )
                return Array.from(t);
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance"
              );
            })()
          );
        }
        function u(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        var h = (function () {
          function i(t, e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
              (this.element = t),
              (this.elementContainer = t),
              (this.settings = e),
              (this.isVisible = !0),
              (this.isInit = !1),
              (this.oldTranslateValue = -1),
              (this.init = this.init.bind(this)),
              a(t)
                ? this.init()
                : this.element.addEventListener("load", this.init);
          }
          return (
            (function (t, e, i) {
              e && u(t.prototype, e), i && u(t, i);
            })(i, [
              {
                key: "init",
                value: function () {
                  this.isInit ||
                    this.element.closest(".simpleParallax") ||
                    (!1 === this.settings.overflow &&
                      this.wrapElement(this.element),
                    this.setStyle(),
                    this.getElementOffset(),
                    this.intersectionObserver(),
                    this.getTranslateValue(),
                    this.animate(),
                    (this.isInit = !0));
                },
              },
              {
                key: "wrapElement",
                value: function () {
                  var t = this.element.closest("picture") || this.element,
                    e = document.createElement("div");
                  e.classList.add("simpleParallax"),
                    (e.style.overflow = "hidden"),
                    t.parentNode.insertBefore(e, t),
                    e.appendChild(t),
                    (this.elementContainer = e);
                },
              },
              {
                key: "unWrapElement",
                value: function () {
                  var t = this.elementContainer;
                  t.replaceWith.apply(t, l(t.childNodes));
                },
              },
              {
                key: "setStyle",
                value: function () {
                  !1 === this.settings.overflow &&
                    (this.element.style[r] = "scale(".concat(
                      this.settings.scale,
                      ")"
                    )),
                    0 < this.settings.delay &&
                      (this.element.style.transition = "transform "
                        .concat(this.settings.delay, "s ")
                        .concat(this.settings.transition)),
                    (this.element.style.willChange = "transform");
                },
              },
              {
                key: "unSetStyle",
                value: function () {
                  (this.element.style.willChange = ""),
                    (this.element.style[r] = ""),
                    (this.element.style.transition = "");
                },
              },
              {
                key: "getElementOffset",
                value: function () {
                  var t = this.elementContainer.getBoundingClientRect();
                  (this.elementHeight = t.height),
                    (this.elementTop = t.top + d.positions.top),
                    (this.elementBottom = this.elementHeight + this.elementTop);
                },
              },
              {
                key: "buildThresholdList",
                value: function () {
                  for (var t = [], e = 1; e <= this.elementHeight; e++) {
                    var i = e / this.elementHeight;
                    t.push(i);
                  }
                  return t;
                },
              },
              {
                key: "intersectionObserver",
                value: function () {
                  var t = { root: null, threshold: this.buildThresholdList() };
                  (this.observer = new IntersectionObserver(
                    this.intersectionObserverCallback.bind(this),
                    t
                  )),
                    this.observer.observe(this.element);
                },
              },
              {
                key: "intersectionObserverCallback",
                value: function (t) {
                  for (var e = t.length - 1; 0 <= e; e--)
                    t[e].isIntersecting
                      ? (this.isVisible = !0)
                      : (this.isVisible = !1);
                },
              },
              {
                key: "checkIfVisible",
                value: function () {
                  return (
                    this.elementBottom > d.positions.top &&
                    this.elementTop < d.positions.bottom
                  );
                },
              },
              {
                key: "getRangeMax",
                value: function () {
                  var t = this.element.clientHeight;
                  this.rangeMax = t * this.settings.scale - t;
                },
              },
              {
                key: "getTranslateValue",
                value: function () {
                  var t = (
                    (d.positions.bottom - this.elementTop) /
                    ((d.positions.height + this.elementHeight) / 100)
                  ).toFixed(1);
                  return (
                    (t = Math.min(100, Math.max(0, t))),
                    this.oldPercentage !== t &&
                      (this.rangeMax || this.getRangeMax(),
                      (this.translateValue = (
                        (t / 100) * this.rangeMax -
                        this.rangeMax / 2
                      ).toFixed(0)),
                      this.oldTranslateValue !== this.translateValue &&
                        ((this.oldPercentage = t),
                        (this.oldTranslateValue = this.translateValue),
                        !0))
                  );
                },
              },
              {
                key: "animate",
                value: function () {
                  var t,
                    e = 0,
                    i = 0;
                  (this.settings.orientation.includes("left") ||
                    this.settings.orientation.includes("right")) &&
                    (i = "".concat(
                      this.settings.orientation.includes("left")
                        ? -1 * this.translateValue
                        : this.translateValue,
                      "px"
                    )),
                    (this.settings.orientation.includes("up") ||
                      this.settings.orientation.includes("down")) &&
                      (e = "".concat(
                        this.settings.orientation.includes("up")
                          ? -1 * this.translateValue
                          : this.translateValue,
                        "px"
                      )),
                    (t =
                      !1 === this.settings.overflow
                        ? "translate3d("
                            .concat(i, ", ")
                            .concat(e, ", 0) scale(")
                            .concat(this.settings.scale, ")")
                        : "translate3d(".concat(i, ", ").concat(e, ", 0)")),
                    (this.element.style[r] = t);
                },
              },
            ]),
            i
          );
        })();
        function c(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        i.d(e, "viewport", function () {
          return d;
        }),
          i.d(e, "default", function () {
            return b;
          });
        var f,
          p,
          m,
          d = new s(),
          g = !0,
          v = !1,
          y = [],
          b = (function () {
            function i(t, e) {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
                t &&
                  ((this.elements = o(t)),
                  (this.defaults = {
                    delay: 0.4,
                    orientation: "up",
                    scale: 1.3,
                    overflow: !1,
                    transition: "cubic-bezier(0,0,0,1)",
                    breakpoint: !1,
                  }),
                  (this.settings = Object.assign(this.defaults, e)),
                  (this.settings.breakpoint &&
                    document.documentElement.clientWidth <=
                      this.settings.breakpoint) ||
                    ("IntersectionObserver" in window || (g = !1),
                    (this.lastPosition = -1),
                    (this.resizeIsDone = this.resizeIsDone.bind(this)),
                    (this.handleResize = this.handleResize.bind(this)),
                    (this.proceedRequestAnimationFrame =
                      this.proceedRequestAnimationFrame.bind(this)),
                    this.init()));
            }
            return (
              (function (t, e, i) {
                e && c(t.prototype, e), i && c(t, i);
              })(i, [
                {
                  key: "init",
                  value: function () {
                    d.setViewportAll();
                    for (var t = this.elements.length - 1; 0 <= t; t--) {
                      var e = new h(this.elements[t], this.settings);
                      y.push(e);
                    }
                    (f = y.length),
                      v ||
                        (this.proceedRequestAnimationFrame(),
                        window.addEventListener("resize", this.resizeIsDone),
                        (v = !0));
                  },
                },
                {
                  key: "resizeIsDone",
                  value: function () {
                    clearTimeout(m), (m = setTimeout(this.handleResize, 500));
                  },
                },
                {
                  key: "handleResize",
                  value: function () {
                    d.setViewportAll(),
                      this.settings.breakpoint &&
                        document.documentElement.clientWidth <=
                          this.settings.breakpoint &&
                        this.destroy();
                    for (var t = f - 1; 0 <= t; t--)
                      y[t].getElementOffset(), y[t].getRangeMax();
                    this.lastPosition = -1;
                  },
                },
                {
                  key: "proceedRequestAnimationFrame",
                  value: function () {
                    if (
                      (d.setViewportTop(),
                      this.lastPosition !== d.positions.top)
                    ) {
                      d.setViewportBottom();
                      for (var t = f - 1; 0 <= t; t--)
                        this.proceedElement(y[t]);
                      (p = window.requestAnimationFrame(
                        this.proceedRequestAnimationFrame
                      )),
                        (this.lastPosition = d.positions.top);
                    } else
                      p = window.requestAnimationFrame(
                        this.proceedRequestAnimationFrame
                      );
                  },
                },
                {
                  key: "proceedElement",
                  value: function (t) {
                    (g ? t.isVisible : t.checkIfVisible()) &&
                      t.getTranslateValue() &&
                      t.animate();
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var e = this,
                      i = [];
                    y = y.filter(function (t) {
                      if (!e.elements.includes(t.element)) return t;
                      i.push(t);
                    });
                    for (var t = i.length - 1; 0 <= t; t--)
                      i[t].unSetStyle(),
                        !1 === this.settings.overflow && i[t].unWrapElement();
                    (f = y.length) ||
                      (window.cancelAnimationFrame(p),
                      window.removeEventListener("resize", this.handleResize));
                  },
                },
              ]),
              i
            );
          })();
      },
    ]),
  (s.c = n),
  (s.d = function (t, e, i) {
    s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
  }),
  (s.r = function (t) {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(t, "__esModule", { value: !0 });
  }),
  (s.t = function (e, t) {
    if ((1 & t && (e = s(e)), 8 & t)) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (
      (s.r(i),
      Object.defineProperty(i, "default", { enumerable: !0, value: e }),
      2 & t && "string" != typeof e)
    )
      for (var n in e)
        s.d(
          i,
          n,
          function (t) {
            return e[t];
          }.bind(null, n)
        );
    return i;
  }),
  (s.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t["default"];
          }
        : function () {
            return t;
          };
    return s.d(e, "a", e), e;
  }),
  (s.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }),
  (s.p = ""),
  s((s.s = 0)))["default"];
  function s(t) {
    if (n[t]) return n[t].exports;
    var e = (n[t] = { i: t, l: !1, exports: {} });
    return i[t].call(e.exports, e, e.exports, s), (e.l = !0), e.exports;
  }
  var i, n;
});
!(function ($) {
  "use strict";
  var Typed = function (el, options) {
    this.el = $(el);
    this.options = $.extend({}, $.fn.typed.defaults, options);
    this.isInput = this.el.is("input");
    this.attr = this.options.attr;
    this.showCursor = this.isInput ? false : this.options.showCursor;
    this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();
    this.contentType = this.options.contentType;
    this.typeSpeed = this.options.typeSpeed;
    this.startDelay = this.options.startDelay;
    this.backSpeed = this.options.backSpeed;
    this.backDelay = this.options.backDelay;
    this.stringsElement = this.options.stringsElement;
    this.strings = this.options.strings;
    this.strPos = 0;
    this.arrayPos = 0;
    this.stopNum = 0;
    this.loop = this.options.loop;
    this.loopCount = this.options.loopCount;
    this.curLoop = 0;
    this.stop = false;
    this.cursorChar = this.options.cursorChar;
    this.shuffle = this.options.shuffle;
    this.sequence = [];
    this.build();
  };
  Typed.prototype = {
    constructor: Typed,
    init: function () {
      var self = this;
      self.timeout = setTimeout(function () {
        for (var i = 0; i < self.strings.length; ++i) self.sequence[i] = i;
        if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
        self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
      }, self.startDelay);
    },
    build: function () {
      var self = this;
      if (this.showCursor === true) {
        this.cursor = $(
          '<span class="typed-cursor">' + this.cursorChar + "</span>"
        );
        this.el.after(this.cursor);
      }
      if (this.stringsElement) {
        self.strings = [];
        this.stringsElement.hide();
        var strings = this.stringsElement.find("p");
        $.each(strings, function (key, value) {
          self.strings.push($(value).html());
        });
      }
      this.init();
    },
    typewrite: function (curString, curStrPos) {
      if (this.stop === true) {
        return;
      }
      var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
      var self = this;
      self.timeout = setTimeout(function () {
        var charPause = 0;
        var substr = curString.substr(curStrPos);
        if (substr.charAt(0) === "^") {
          var skip = 1;
          if (/^\^\d+/.test(substr)) {
            substr = /\d+/.exec(substr)[0];
            skip += substr.length;
            charPause = parseInt(substr);
          }
          curString =
            curString.substring(0, curStrPos) +
            curString.substring(curStrPos + skip);
        }
        if (self.contentType === "html") {
          var curChar = curString.substr(curStrPos).charAt(0);
          if (curChar === "<" || curChar === "&") {
            var tag = "";
            var endTag = "";
            if (curChar === "<") {
              endTag = ">";
            } else {
              endTag = ";";
            }
            while (curString.substr(curStrPos).charAt(0) !== endTag) {
              tag += curString.substr(curStrPos).charAt(0);
              curStrPos++;
            }
            curStrPos++;
            tag += endTag;
          }
        }
        self.timeout = setTimeout(function () {
          if (curStrPos === curString.length) {
            self.options.onStringTyped(self.arrayPos);
            if (self.arrayPos === self.strings.length - 1) {
              self.options.callback();
              self.curLoop++;
              if (self.loop === false || self.curLoop === self.loopCount)
                return;
            }
            self.timeout = setTimeout(function () {
              self.backspace(curString, curStrPos);
            }, self.backDelay);
          } else {
            if (curStrPos === 0) self.options.preStringTyped(self.arrayPos);
            var nextString = curString.substr(0, curStrPos + 1);
            if (self.attr) {
              self.el.attr(self.attr, nextString);
            } else {
              if (self.isInput) {
                self.el.val(nextString);
              } else if (self.contentType === "html") {
                self.el.html(nextString);
              } else {
                self.el.text(nextString);
              }
            }
            curStrPos++;
            self.typewrite(curString, curStrPos);
          }
        }, charPause);
      }, humanize);
    },
    backspace: function (curString, curStrPos) {
      if (this.stop === true) {
        return;
      }
      var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
      var self = this;
      self.timeout = setTimeout(function () {
        if (self.contentType === "html") {
          if (curString.substr(curStrPos).charAt(0) === ">") {
            var tag = "";
            while (curString.substr(curStrPos).charAt(0) !== "<") {
              tag -= curString.substr(curStrPos).charAt(0);
              curStrPos--;
            }
            curStrPos--;
            tag += "<";
          }
        }
        var nextString = curString.substr(0, curStrPos);
        if (self.attr) {
          self.el.attr(self.attr, nextString);
        } else {
          if (self.isInput) {
            self.el.val(nextString);
          } else if (self.contentType === "html") {
            self.el.html(nextString);
          } else {
            self.el.text(nextString);
          }
        }
        if (curStrPos > self.stopNum) {
          curStrPos--;
          self.backspace(curString, curStrPos);
        } else if (curStrPos <= self.stopNum) {
          self.arrayPos++;
          if (self.arrayPos === self.strings.length) {
            self.arrayPos = 0;
            if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
            self.init();
          } else
            self.typewrite(
              self.strings[self.sequence[self.arrayPos]],
              curStrPos
            );
        }
      }, humanize);
    },
    shuffleArray: function (array) {
      var tmp,
        current,
        top = array.length;
      if (top)
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      return array;
    },
    reset: function () {
      var self = this;
      clearInterval(self.timeout);
      var id = this.el.attr("id");
      this.el.after('<span id="' + id + '"/>');
      this.el.remove();
      if (typeof this.cursor !== "undefined") {
        this.cursor.remove();
      }
      self.options.resetCallback();
    },
  };
  $.fn.typed = function (option) {
    return this.each(function () {
      var $this = $(this),
        data = $this.data("typed"),
        options = typeof option == "object" && option;
      if (!data) $this.data("typed", (data = new Typed(this, options)));
      if (typeof option == "string") data[option]();
    });
  };
  $.fn.typed.defaults = {
    strings: [
      "These are the default values...",
      "You know what you should do?",
      "Use your own!",
      "Have a great day!",
    ],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    shuffle: false,
    backDelay: 500,
    loop: false,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    attr: null,
    contentType: "html",
    callback: function () {},
    preStringTyped: function () {},
    onStringTyped: function () {},
    resetCallback: function () {},
  };
})(window.jQuery);
(function (modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", { enumerable: true, value: value });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__((__webpack_require__.s = 6));
})([
  ,
  ,
  function (module, exports, __webpack_require__) {
    "use strict";
    module.exports = function (callback) {
      if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
      ) {
        callback.call();
      } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function () {
          if (document.readyState === "interactive") callback.call();
        });
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback);
      }
    };
  },
  ,
  function (module, exports, __webpack_require__) {
    "use strict";
    (function (global) {
      var win;
      if (typeof window !== "undefined") {
        win = window;
      } else if (typeof global !== "undefined") {
        win = global;
      } else if (typeof self !== "undefined") {
        win = self;
      } else {
        win = {};
      }
      module.exports = win;
    }).call(this, __webpack_require__(5));
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
    var g;
    g = (function () {
      return this;
    })();
    try {
      g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
      if (
        (typeof window === "undefined" ? "undefined" : _typeof(window)) ===
        "object"
      )
        g = window;
    }
    module.exports = g;
  },
  function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(7);
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    var _videoWorker = __webpack_require__(8);
    var _videoWorker2 = _interopRequireDefault(_videoWorker);
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);
    var _liteReady = __webpack_require__(2);
    var _liteReady2 = _interopRequireDefault(_liteReady);
    var _jarallaxVideo = __webpack_require__(10);
    var _jarallaxVideo2 = _interopRequireDefault(_jarallaxVideo);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    _global2["default"].VideoWorker =
      _global2["default"].VideoWorker || _videoWorker2["default"];
    (0, _jarallaxVideo2["default"])();
    (0, _liteReady2["default"])(function () {
      if (typeof jarallax !== "undefined") {
        jarallax(document.querySelectorAll("[data-jarallax-video]"));
      }
    });
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    module.exports = __webpack_require__(9);
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
    var _createClass = (function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    })();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function Deferred() {
      this._done = [];
      this._fail = [];
    }
    Deferred.prototype = {
      execute: function execute(list, args) {
        var i = list.length;
        args = Array.prototype.slice.call(args);
        while (i--) {
          list[i].apply(null, args);
        }
      },
      resolve: function resolve() {
        this.execute(this._done, arguments);
      },
      reject: function reject() {
        this.execute(this._fail, arguments);
      },
      done: function done(callback) {
        this._done.push(callback);
      },
      fail: function fail(callback) {
        this._fail.push(callback);
      },
    };
    var ID = 0;
    var YoutubeAPIadded = 0;
    var VimeoAPIadded = 0;
    var loadingYoutubePlayer = 0;
    var loadingVimeoPlayer = 0;
    var loadingYoutubeDefer = new Deferred();
    var loadingVimeoDefer = new Deferred();
    var VideoWorker = (function () {
      function VideoWorker(url, options) {
        _classCallCheck(this, VideoWorker);
        var self = this;
        self.url = url;
        self.options_default = {
          autoplay: false,
          loop: false,
          mute: false,
          volume: 100,
          showContols: true,
          startTime: 0,
          endTime: 0,
        };
        self.options = self.extend({}, self.options_default, options);
        self.videoID = self.parseURL(url);
        if (self.videoID) {
          self.ID = ID++;
          self.loadAPI();
          self.init();
        }
      }
      _createClass(VideoWorker, [
        {
          key: "extend",
          value: function extend(out) {
            var _arguments = arguments;
            out = out || {};
            Object.keys(arguments).forEach(function (i) {
              if (!_arguments[i]) {
                return;
              }
              Object.keys(_arguments[i]).forEach(function (key) {
                out[key] = _arguments[i][key];
              });
            });
            return out;
          },
        },
        {
          key: "parseURL",
          value: function parseURL(url) {
            function getYoutubeID(ytUrl) {
              var regExp =
                /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
              var match = ytUrl.match(regExp);
              return match && match[1].length === 11 ? match[1] : false;
            }
            function getVimeoID(vmUrl) {
              var regExp =
                /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
              var match = vmUrl.match(regExp);
              return match && match[3] ? match[3] : false;
            }
            function getLocalVideos(locUrl) {
              var videoFormats = locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
              var result = {};
              var ready = 0;
              videoFormats.forEach(function (val) {
                var match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                if (match && match[1] && match[2]) {
                  result[match[1] === "ogv" ? "ogg" : match[1]] = match[2];
                  ready = 1;
                }
              });
              return ready ? result : false;
            }
            var Youtube = getYoutubeID(url);
            var Vimeo = getVimeoID(url);
            var Local = getLocalVideos(url);
            if (Youtube) {
              this.type = "youtube";
              return Youtube;
            } else if (Vimeo) {
              this.type = "vimeo";
              return Vimeo;
            } else if (Local) {
              this.type = "local";
              return Local;
            }
            return false;
          },
        },
        {
          key: "isValid",
          value: function isValid() {
            return !!this.videoID;
          },
        },
        {
          key: "on",
          value: function on(name, callback) {
            this.userEventsList = this.userEventsList || [];
            (
              this.userEventsList[name] || (this.userEventsList[name] = [])
            ).push(callback);
          },
        },
        {
          key: "off",
          value: function off(name, callback) {
            var _this = this;
            if (!this.userEventsList || !this.userEventsList[name]) {
              return;
            }
            if (!callback) {
              delete this.userEventsList[name];
            } else {
              this.userEventsList[name].forEach(function (val, key) {
                if (val === callback) {
                  _this.userEventsList[name][key] = false;
                }
              });
            }
          },
        },
        {
          key: "fire",
          value: function fire(name) {
            var _this2 = this;
            var args = [].slice.call(arguments, 1);
            if (
              this.userEventsList &&
              typeof this.userEventsList[name] !== "undefined"
            ) {
              this.userEventsList[name].forEach(function (val) {
                if (val) {
                  val.apply(_this2, args);
                }
              });
            }
          },
        },
        {
          key: "play",
          value: function play(start) {
            var self = this;
            if (!self.player) {
              return;
            }
            if (self.type === "youtube" && self.player.playVideo) {
              if (typeof start !== "undefined") {
                self.player.seekTo(start || 0);
              }
              if (YT.PlayerState.PLAYING !== self.player.getPlayerState()) {
                self.player.playVideo();
              }
            }
            if (self.type === "vimeo") {
              if (typeof start !== "undefined") {
                self.player.setCurrentTime(start);
              }
              self.player.getPaused().then(function (paused) {
                if (paused) {
                  self.player.play();
                }
              });
            }
            if (self.type === "local") {
              if (typeof start !== "undefined") {
                self.player.currentTime = start;
              }
              if (self.player.paused) {
                self.player.play();
              }
            }
          },
        },
        {
          key: "pause",
          value: function pause() {
            var self = this;
            if (!self.player) {
              return;
            }
            if (self.type === "youtube" && self.player.pauseVideo) {
              if (YT.PlayerState.PLAYING === self.player.getPlayerState()) {
                self.player.pauseVideo();
              }
            }
            if (self.type === "vimeo") {
              self.player.getPaused().then(function (paused) {
                if (!paused) {
                  self.player.pause();
                }
              });
            }
            if (self.type === "local") {
              if (!self.player.paused) {
                self.player.pause();
              }
            }
          },
        },
        {
          key: "mute",
          value: function mute() {
            var self = this;
            if (!self.player) {
              return;
            }
            if (self.type === "youtube" && self.player.mute) {
              self.player.mute();
            }
            if (self.type === "vimeo" && self.player.setVolume) {
              self.player.setVolume(0);
            }
            if (self.type === "local") {
              self.$video.muted = true;
            }
          },
        },
        {
          key: "unmute",
          value: function unmute() {
            var self = this;
            if (!self.player) {
              return;
            }
            if (self.type === "youtube" && self.player.mute) {
              self.player.unMute();
            }
            if (self.type === "vimeo" && self.player.setVolume) {
              self.player.setVolume(self.options.volume);
            }
            if (self.type === "local") {
              self.$video.muted = false;
            }
          },
        },
        {
          key: "setVolume",
          value: function setVolume() {
            var volume =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : false;
            var self = this;
            if (!self.player || !volume) {
              return;
            }
            if (self.type === "youtube" && self.player.setVolume) {
              self.player.setVolume(volume);
            }
            if (self.type === "vimeo" && self.player.setVolume) {
              self.player.setVolume(volume);
            }
            if (self.type === "local") {
              self.$video.volume = volume / 100;
            }
          },
        },
        {
          key: "getVolume",
          value: function getVolume(callback) {
            var self = this;
            if (!self.player) {
              callback(false);
              return;
            }
            if (self.type === "youtube" && self.player.getVolume) {
              callback(self.player.getVolume());
            }
            if (self.type === "vimeo" && self.player.getVolume) {
              self.player.getVolume().then(function (volume) {
                callback(volume);
              });
            }
            if (self.type === "local") {
              callback(self.$video.volume * 100);
            }
          },
        },
        {
          key: "getMuted",
          value: function getMuted(callback) {
            var self = this;
            if (!self.player) {
              callback(null);
              return;
            }
            if (self.type === "youtube" && self.player.isMuted) {
              callback(self.player.isMuted());
            }
            if (self.type === "vimeo" && self.player.getVolume) {
              self.player.getVolume().then(function (volume) {
                callback(!!volume);
              });
            }
            if (self.type === "local") {
              callback(self.$video.muted);
            }
          },
        },
        {
          key: "getImageURL",
          value: function getImageURL(callback) {
            var self = this;
            if (self.videoImage) {
              callback(self.videoImage);
              return;
            }
            if (self.type === "youtube") {
              var availableSizes = [
                "maxresdefault",
                "sddefault",
                "hqdefault",
                "0",
              ];
              var step = 0;
              var tempImg = new Image();
              tempImg.onload = function () {
                if (
                  (this.naturalWidth || this.width) !== 120 ||
                  step === availableSizes.length - 1
                ) {
                  self.videoImage =
                    "https://img.youtube.com/vi/" +
                    self.videoID +
                    "/" +
                    availableSizes[step] +
                    ".jpg";
                  callback(self.videoImage);
                } else {
                  step++;
                  this.src =
                    "https://img.youtube.com/vi/" +
                    self.videoID +
                    "/" +
                    availableSizes[step] +
                    ".jpg";
                }
              };
              tempImg.src =
                "https://img.youtube.com/vi/" +
                self.videoID +
                "/" +
                availableSizes[step] +
                ".jpg";
            }
            if (self.type === "vimeo") {
              var request = new XMLHttpRequest();
              request.open(
                "GET",
                "https://vimeo.com/api/v2/video/" + self.videoID + ".json",
                true
              );
              request.onreadystatechange = function () {
                if (this.readyState === 4) {
                  if (this.status >= 200 && this.status < 400) {
                    var response = JSON.parse(this.responseText);
                    self.videoImage = response[0].thumbnail_large;
                    callback(self.videoImage);
                  } else {
                  }
                }
              };
              request.send();
              request = null;
            }
          },
        },
        {
          key: "getIframe",
          value: function getIframe(callback) {
            this.getVideo(callback);
          },
        },
        {
          key: "getVideo",
          value: function getVideo(callback) {
            var self = this;
            if (self.$video) {
              callback(self.$video);
              return;
            }
            self.onAPIready(function () {
              var hiddenDiv = void 0;
              if (!self.$video) {
                hiddenDiv = document.createElement("div");
                hiddenDiv.style.display = "none";
              }
              if (self.type === "youtube") {
                self.playerOptions = {};
                self.playerOptions.videoId = self.videoID;
                self.playerOptions.playerVars = {
                  autohide: 1,
                  rel: 0,
                  autoplay: 0,
                  playsinline: 1,
                };
                if (!self.options.showContols) {
                  self.playerOptions.playerVars.iv_load_policy = 3;
                  self.playerOptions.playerVars.modestbranding = 1;
                  self.playerOptions.playerVars.controls = 0;
                  self.playerOptions.playerVars.showinfo = 0;
                  self.playerOptions.playerVars.disablekb = 1;
                }
                var ytStarted = void 0;
                var ytProgressInterval = void 0;
                self.playerOptions.events = {
                  onReady: function onReady(e) {
                    if (self.options.mute) {
                      e.target.mute();
                    } else if (self.options.volume) {
                      e.target.setVolume(self.options.volume);
                    }
                    if (self.options.autoplay) {
                      self.play(self.options.startTime);
                    }
                    self.fire("ready", e);
                    if (self.options.loop && !self.options.endTime) {
                      var secondsOffset = 0.1;
                      self.options.endTime =
                        self.player.getDuration() - secondsOffset;
                    }
                    setInterval(function () {
                      self.getVolume(function (volume) {
                        if (self.options.volume !== volume) {
                          self.options.volume = volume;
                          self.fire("volumechange", e);
                        }
                      });
                    }, 150);
                  },
                  onStateChange: function onStateChange(e) {
                    if (self.options.loop && e.data === YT.PlayerState.ENDED) {
                      self.play(self.options.startTime);
                    }
                    if (!ytStarted && e.data === YT.PlayerState.PLAYING) {
                      ytStarted = 1;
                      self.fire("started", e);
                    }
                    if (e.data === YT.PlayerState.PLAYING) {
                      self.fire("play", e);
                    }
                    if (e.data === YT.PlayerState.PAUSED) {
                      self.fire("pause", e);
                    }
                    if (e.data === YT.PlayerState.ENDED) {
                      self.fire("ended", e);
                    }
                    if (e.data === YT.PlayerState.PLAYING) {
                      ytProgressInterval = setInterval(function () {
                        self.fire("timeupdate", e);
                        if (
                          self.options.endTime &&
                          self.player.getCurrentTime() >= self.options.endTime
                        ) {
                          if (self.options.loop) {
                            self.play(self.options.startTime);
                          } else {
                            self.pause();
                          }
                        }
                      }, 150);
                    } else {
                      clearInterval(ytProgressInterval);
                    }
                  },
                };
                var firstInit = !self.$video;
                if (firstInit) {
                  var div = document.createElement("div");
                  div.setAttribute("id", self.playerID);
                  hiddenDiv.appendChild(div);
                  document.body.appendChild(hiddenDiv);
                }
                self.player =
                  self.player ||
                  new window.YT.Player(self.playerID, self.playerOptions);
                if (firstInit) {
                  self.$video = document.getElementById(self.playerID);
                  self.videoWidth =
                    parseInt(self.$video.getAttribute("width"), 10) || 1280;
                  self.videoHeight =
                    parseInt(self.$video.getAttribute("height"), 10) || 720;
                }
              }
              if (self.type === "vimeo") {
                self.playerOptions = {
                  id: self.videoID,
                  autopause: 0,
                  transparent: 0,
                  autoplay: self.options.autoplay ? 1 : 0,
                  loop: self.options.loop ? 1 : 0,
                  muted: self.options.mute ? 1 : 0,
                };
                if (self.options.volume) {
                  self.playerOptions.volume = self.options.volume;
                }
                if (!self.options.showContols) {
                  self.playerOptions.badge = 0;
                  self.playerOptions.byline = 0;
                  self.playerOptions.portrait = 0;
                  self.playerOptions.title = 0;
                }
                if (!self.$video) {
                  var playerOptionsString = "";
                  Object.keys(self.playerOptions).forEach(function (key) {
                    if (playerOptionsString !== "") {
                      playerOptionsString += "&";
                    }
                    playerOptionsString +=
                      key + "=" + encodeURIComponent(self.playerOptions[key]);
                  });
                  self.$video = document.createElement("iframe");
                  self.$video.setAttribute("id", self.playerID);
                  self.$video.setAttribute(
                    "src",
                    "https://player.vimeo.com/video/" +
                      self.videoID +
                      "?" +
                      playerOptionsString
                  );
                  self.$video.setAttribute("frameborder", "0");
                  self.$video.setAttribute("mozallowfullscreen", "");
                  self.$video.setAttribute("allowfullscreen", "");
                  hiddenDiv.appendChild(self.$video);
                  document.body.appendChild(hiddenDiv);
                }
                self.player =
                  self.player ||
                  new Vimeo.Player(self.$video, self.playerOptions);
                if (self.options.startTime && self.options.autoplay) {
                  self.player.setCurrentTime(self.options.startTime);
                }
                self.player.getVideoWidth().then(function (width) {
                  self.videoWidth = width || 1280;
                });
                self.player.getVideoHeight().then(function (height) {
                  self.videoHeight = height || 720;
                });
                var vmStarted = void 0;
                self.player.on("timeupdate", function (e) {
                  if (!vmStarted) {
                    self.fire("started", e);
                    vmStarted = 1;
                  }
                  self.fire("timeupdate", e);
                  if (self.options.endTime) {
                    if (
                      self.options.endTime &&
                      e.seconds >= self.options.endTime
                    ) {
                      if (self.options.loop) {
                        self.play(self.options.startTime);
                      } else {
                        self.pause();
                      }
                    }
                  }
                });
                self.player.on("play", function (e) {
                  self.fire("play", e);
                  if (self.options.startTime && e.seconds === 0) {
                    self.play(self.options.startTime);
                  }
                });
                self.player.on("pause", function (e) {
                  self.fire("pause", e);
                });
                self.player.on("ended", function (e) {
                  self.fire("ended", e);
                });
                self.player.on("loaded", function (e) {
                  self.fire("ready", e);
                });
                self.player.on("volumechange", function (e) {
                  self.fire("volumechange", e);
                });
              }
              function addSourceToLocal(element, src, type) {
                var source = document.createElement("source");
                source.src = src;
                source.type = type;
                element.appendChild(source);
              }
              if (self.type === "local") {
                if (!self.$video) {
                  self.$video = document.createElement("video");
                  if (self.options.showContols) {
                    self.$video.controls = true;
                  }
                  if (self.options.mute) {
                    self.$video.muted = true;
                  } else if (self.$video.volume) {
                    self.$video.volume = self.options.volume / 100;
                  }
                  if (self.options.loop) {
                    self.$video.loop = true;
                  }
                  self.$video.setAttribute("playsinline", "");
                  self.$video.setAttribute("webkit-playsinline", "");
                  self.$video.setAttribute("id", self.playerID);
                  hiddenDiv.appendChild(self.$video);
                  document.body.appendChild(hiddenDiv);
                  Object.keys(self.videoID).forEach(function (key) {
                    addSourceToLocal(
                      self.$video,
                      self.videoID[key],
                      "video/" + key
                    );
                  });
                }
                self.player = self.player || self.$video;
                var locStarted = void 0;
                self.player.addEventListener("playing", function (e) {
                  if (!locStarted) {
                    self.fire("started", e);
                  }
                  locStarted = 1;
                });
                self.player.addEventListener("timeupdate", function (e) {
                  self.fire("timeupdate", e);
                  if (self.options.endTime) {
                    if (
                      self.options.endTime &&
                      this.currentTime >= self.options.endTime
                    ) {
                      if (self.options.loop) {
                        self.play(self.options.startTime);
                      } else {
                        self.pause();
                      }
                    }
                  }
                });
                self.player.addEventListener("play", function (e) {
                  self.fire("play", e);
                });
                self.player.addEventListener("pause", function (e) {
                  self.fire("pause", e);
                });
                self.player.addEventListener("ended", function (e) {
                  self.fire("ended", e);
                });
                self.player.addEventListener("loadedmetadata", function () {
                  self.videoWidth = this.videoWidth || 1280;
                  self.videoHeight = this.videoHeight || 720;
                  self.fire("ready");
                  if (self.options.autoplay) {
                    self.play(self.options.startTime);
                  }
                });
                self.player.addEventListener("volumechange", function (e) {
                  self.getVolume(function (volume) {
                    self.options.volume = volume;
                  });
                  self.fire("volumechange", e);
                });
              }
              callback(self.$video);
            });
          },
        },
        {
          key: "init",
          value: function init() {
            var self = this;
            self.playerID = "VideoWorker-" + self.ID;
          },
        },
        {
          key: "loadAPI",
          value: function loadAPI() {
            var self = this;
            if (YoutubeAPIadded && VimeoAPIadded) {
              return;
            }
            var src = "";
            if (self.type === "youtube" && !YoutubeAPIadded) {
              YoutubeAPIadded = 1;
              src = "https://www.youtube.com/iframe_api";
            }
            if (self.type === "vimeo" && !VimeoAPIadded) {
              VimeoAPIadded = 1;
              src = "https://player.vimeo.com/api/player.js";
            }
            if (!src) {
              return;
            }
            var tag = document.createElement("script");
            var head = document.getElementsByTagName("head")[0];
            tag.src = src;
            head.appendChild(tag);
            head = null;
            tag = null;
          },
        },
        {
          key: "onAPIready",
          value: function onAPIready(callback) {
            var self = this;
            if (self.type === "youtube") {
              if (
                (typeof YT === "undefined" || YT.loaded === 0) &&
                !loadingYoutubePlayer
              ) {
                loadingYoutubePlayer = 1;
                window.onYouTubeIframeAPIReady = function () {
                  window.onYouTubeIframeAPIReady = null;
                  loadingYoutubeDefer.resolve("done");
                  callback();
                };
              } else if (
                (typeof YT === "undefined" ? "undefined" : _typeof(YT)) ===
                  "object" &&
                YT.loaded === 1
              ) {
                callback();
              } else {
                loadingYoutubeDefer.done(function () {
                  callback();
                });
              }
            }
            if (self.type === "vimeo") {
              if (typeof Vimeo === "undefined" && !loadingVimeoPlayer) {
                loadingVimeoPlayer = 1;
                var vimeoInterval = setInterval(function () {
                  if (typeof Vimeo !== "undefined") {
                    clearInterval(vimeoInterval);
                    loadingVimeoDefer.resolve("done");
                    callback();
                  }
                }, 20);
              } else if (typeof Vimeo !== "undefined") {
                callback();
              } else {
                loadingVimeoDefer.done(function () {
                  callback();
                });
              }
            }
            if (self.type === "local") {
              callback();
            }
          },
        },
      ]);
      return VideoWorker;
    })();
    exports["default"] = VideoWorker;
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports["default"] = jarallaxVideo;
    var _videoWorker = __webpack_require__(8);
    var _videoWorker2 = _interopRequireDefault(_videoWorker);
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function jarallaxVideo() {
      var jarallax =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : _global2["default"].jarallax;
      if (typeof jarallax === "undefined") {
        return;
      }
      var Jarallax = jarallax.constructor;
      var defInit = Jarallax.prototype.init;
      Jarallax.prototype.init = function () {
        var self = this;
        defInit.apply(self);
        if (self.video && !self.options.disableVideo()) {
          self.video.getVideo(function (video) {
            var $parent = video.parentNode;
            self.css(video, {
              position: self.image.position,
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px",
              width: "100%",
              height: "100%",
              maxWidth: "none",
              maxHeight: "none",
              margin: 0,
              zIndex: -1,
            });
            self.$video = video;
            self.image.$container.appendChild(video);
            $parent.parentNode.removeChild($parent);
          });
        }
      };
      var defCoverImage = Jarallax.prototype.coverImage;
      Jarallax.prototype.coverImage = function () {
        var self = this;
        var imageData = defCoverImage.apply(self);
        var node = self.image.$item ? self.image.$item.nodeName : false;
        if (
          imageData &&
          self.video &&
          node &&
          (node === "IFRAME" || node === "VIDEO")
        ) {
          var h = imageData.image.height;
          var w = (h * self.image.width) / self.image.height;
          var ml = (imageData.container.width - w) / 2;
          var mt = imageData.image.marginTop;
          if (imageData.container.width > w) {
            w = imageData.container.width;
            h = (w * self.image.height) / self.image.width;
            ml = 0;
            mt += (imageData.image.height - h) / 2;
          }
          if (node === "IFRAME") {
            h += 400;
            mt -= 200;
          }
          self.css(self.$video, {
            width: w + "px",
            marginLeft: ml + "px",
            height: h + "px",
            marginTop: mt + "px",
          });
        }
        return imageData;
      };
      var defInitImg = Jarallax.prototype.initImg;
      Jarallax.prototype.initImg = function () {
        var self = this;
        var defaultResult = defInitImg.apply(self);
        if (!self.options.videoSrc) {
          self.options.videoSrc =
            self.$item.getAttribute("data-jarallax-video") || null;
        }
        if (self.options.videoSrc) {
          self.defaultInitImgResult = defaultResult;
          return true;
        }
        return defaultResult;
      };
      var defCanInitParallax = Jarallax.prototype.canInitParallax;
      Jarallax.prototype.canInitParallax = function () {
        var self = this;
        var defaultResult = defCanInitParallax.apply(self);
        if (!self.options.videoSrc) {
          return defaultResult;
        }
        var video = new _videoWorker2["default"](self.options.videoSrc, {
          autoplay: true,
          loop: self.options.videoLoop,
          showContols: false,
          startTime: self.options.videoStartTime || 0,
          endTime: self.options.videoEndTime || 0,
          mute: self.options.videoVolume ? 0 : 1,
          volume: self.options.videoVolume || 0,
        });
        if (video.isValid()) {
          if (!defaultResult) {
            if (!self.defaultInitImgResult) {
              video.getImageURL(function (url) {
                var curStyle = self.$item.getAttribute("style");
                if (curStyle) {
                  self.$item.setAttribute(
                    "data-jarallax-original-styles",
                    curStyle
                  );
                }
                self.css(self.$item, {
                  "background-image": 'url("' + url + '")',
                  "background-position": "center",
                  "background-size": "cover",
                });
              });
            }
          } else {
            video.on("ready", function () {
              if (self.options.videoPlayOnlyVisible) {
                var oldOnScroll = self.onScroll;
                self.onScroll = function () {
                  oldOnScroll.apply(self);
                  if (
                    self.options.videoLoop ||
                    (!self.options.videoLoop && !self.videoEnded)
                  ) {
                    if (self.isVisible()) {
                      video.play();
                    } else {
                      video.pause();
                    }
                  }
                };
              } else {
                video.play();
              }
            });
            video.on("started", function () {
              self.image.$default_item = self.image.$item;
              self.image.$item = self.$video;
              self.image.width = self.video.videoWidth || 1280;
              self.image.height = self.video.videoHeight || 720;
              self.coverImage();
              self.clipContainer();
              self.onScroll();
              if (self.image.$default_item) {
                self.image.$default_item.style.display = "none";
              }
            });
            video.on("ended", function () {
              self.videoEnded = true;
              if (!self.options.videoLoop) {
                if (self.image.$default_item) {
                  self.image.$item = self.image.$default_item;
                  self.image.$item.style.display = "block";
                  self.coverImage();
                  self.clipContainer();
                  self.onScroll();
                }
              }
            });
            self.video = video;
            if (!self.defaultInitImgResult) {
              if (video.type !== "local") {
                video.getImageURL(function (url) {
                  self.image.src = url;
                  self.init();
                });
                return false;
              }
              self.image.src =
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
              return true;
            }
          }
        }
        return defaultResult;
      };
      var defDestroy = Jarallax.prototype.destroy;
      Jarallax.prototype.destroy = function () {
        var self = this;
        if (self.image.$default_item) {
          self.image.$item = self.image.$default_item;
          delete self.image.$default_item;
        }
        defDestroy.apply(self);
      };
    }
  },
]);
(function (modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", { enumerable: true, value: value });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__((__webpack_require__.s = 0));
})([
  function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(1);
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    var _liteReady = __webpack_require__(2);
    var _liteReady2 = _interopRequireDefault(_liteReady);
    var _jarallaxElement = __webpack_require__(3);
    var _jarallaxElement2 = _interopRequireDefault(_jarallaxElement);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    (0, _jarallaxElement2["default"])();
    (0, _liteReady2["default"])(function () {
      if (typeof jarallax !== "undefined") {
        jarallax(document.querySelectorAll("[data-jarallax-element]"));
      }
    });
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    module.exports = function (callback) {
      if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
      ) {
        callback.call();
      } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function () {
          if (document.readyState === "interactive") callback.call();
        });
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback);
      }
    };
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports["default"] = jarallaxElement;
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function jarallaxElement() {
      var jarallax =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : _global2["default"].jarallax;
      if (typeof jarallax === "undefined") {
        return;
      }
      var Jarallax = jarallax.constructor;
      [
        "initImg",
        "canInitParallax",
        "init",
        "destroy",
        "clipContainer",
        "coverImage",
        "isVisible",
        "onScroll",
        "onResize",
      ].forEach(function (key) {
        var def = Jarallax.prototype[key];
        Jarallax.prototype[key] = function () {
          var self = this;
          var args = arguments || [];
          if (
            key === "initImg" &&
            self.$item.getAttribute("data-jarallax-element") !== null
          ) {
            self.options.type = "element";
            self.pureOptions.speed =
              self.$item.getAttribute("data-jarallax-element") ||
              self.pureOptions.speed;
          }
          if (self.options.type !== "element") {
            return def.apply(self, args);
          }
          self.pureOptions.threshold =
            self.$item.getAttribute("data-threshold") || "";
          switch (key) {
            case "init":
              var speedArr = self.pureOptions.speed.split(" ");
              self.options.speed = self.pureOptions.speed || 0;
              self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
              self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;
              var thresholdArr = self.pureOptions.threshold.split(" ");
              self.options.thresholdY = thresholdArr[0]
                ? parseFloat(thresholdArr[0])
                : null;
              self.options.thresholdX = thresholdArr[1]
                ? parseFloat(thresholdArr[1])
                : null;
              break;
            case "onResize":
              var defTransform = self.css(self.$item, "transform");
              self.css(self.$item, { transform: "" });
              var rect = self.$item.getBoundingClientRect();
              self.itemData = {
                width: rect.width,
                height: rect.height,
                y: rect.top + self.getWindowData().y,
                x: rect.left,
              };
              self.css(self.$item, { transform: defTransform });
              break;
            case "onScroll":
              var wnd = self.getWindowData();
              var centerPercent =
                (wnd.y +
                  wnd.height / 2 -
                  self.itemData.y -
                  self.itemData.height / 2) /
                (wnd.height / 2);
              var moveY = centerPercent * self.options.speedY;
              var moveX = centerPercent * self.options.speedX;
              var my = moveY;
              var mx = moveX;
              if (
                self.options.thresholdY !== null &&
                moveY > self.options.thresholdY
              )
                my = 0;
              if (
                self.options.thresholdX !== null &&
                moveX > self.options.thresholdX
              )
                mx = 0;
              self.css(self.$item, {
                transform: "translate3d(" + mx + "px," + my + "px,0)",
              });
              break;
            case "initImg":
            case "isVisible":
            case "clipContainer":
            case "coverImage":
              return true;
          }
          return def.apply(self, args);
        };
      });
    }
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    (function (global) {
      var win;
      if (typeof window !== "undefined") {
        win = window;
      } else if (typeof global !== "undefined") {
        win = global;
      } else if (typeof self !== "undefined") {
        win = self;
      } else {
        win = {};
      }
      module.exports = win;
    }).call(this, __webpack_require__(5));
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
    var g;
    g = (function () {
      return this;
    })();
    try {
      g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
      if (
        (typeof window === "undefined" ? "undefined" : _typeof(window)) ===
        "object"
      )
        g = window;
    }
    module.exports = g;
  },
]);
(function (global, factory) {
  if (typeof define == "function" && define.amd) {
    define("ev-emitter/ev-emitter", factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory();
  } else {
    global.EvEmitter = factory();
  }
})(typeof window != "undefined" ? window : this, function () {
  function EvEmitter() {}
  var proto = EvEmitter.prototype;
  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    var events = (this._events = this._events || {});
    var listeners = (events[eventName] = events[eventName] || []);
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }
    return this;
  };
  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    this.on(eventName, listener);
    var onceEvents = (this._onceEvents = this._onceEvents || {});
    var onceListeners = (onceEvents[eventName] = onceEvents[eventName] || {});
    onceListeners[listener] = true;
    return this;
  };
  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }
    return this;
  };
  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    listeners = listeners.slice(0);
    args = args || [];
    var onceListeners = this._onceEvents && this._onceEvents[eventName];
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        this.off(eventName, listener);
        delete onceListeners[listener];
      }
      listener.apply(this, args);
    }
    return this;
  };
  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };
  return EvEmitter;
});
(function (window, factory) {
  "use strict";
  if (typeof define == "function" && define.amd) {
    define(["ev-emitter/ev-emitter"], function (EvEmitter) {
      return factory(window, EvEmitter);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(window, require("ev-emitter"));
  } else {
    window.imagesLoaded = factory(window, window.EvEmitter);
  }
})(
  typeof window !== "undefined" ? window : this,
  function factory(window, EvEmitter) {
    var $ = window.jQuery;
    var console = window.console;
    function extend(a, b) {
      for (var prop in b) {
        a[prop] = b[prop];
      }
      return a;
    }
    var arraySlice = Array.prototype.slice;
    function makeArray(obj) {
      if (Array.isArray(obj)) {
        return obj;
      }
      var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
      if (isArrayLike) {
        return arraySlice.call(obj);
      }
      return [obj];
    }
    function ImagesLoaded(elem, options, onAlways) {
      if (!(this instanceof ImagesLoaded)) {
        return new ImagesLoaded(elem, options, onAlways);
      }
      var queryElem = elem;
      if (typeof elem == "string") {
        queryElem = document.querySelectorAll(elem);
      }
      if (!queryElem) {
        console.error("Bad element for imagesLoaded " + (queryElem || elem));
        return;
      }
      this.elements = makeArray(queryElem);
      this.options = extend({}, this.options);
      if (typeof options == "function") {
        onAlways = options;
      } else {
        extend(this.options, options);
      }
      if (onAlways) {
        this.on("always", onAlways);
      }
      this.getImages();
      if ($) {
        this.jqDeferred = new $.Deferred();
      }
      setTimeout(this.check.bind(this));
    }
    ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
    ImagesLoaded.prototype.options = {};
    ImagesLoaded.prototype.getImages = function () {
      this.images = [];
      this.elements.forEach(this.addElementImages, this);
    };
    ImagesLoaded.prototype.addElementImages = function (elem) {
      if (elem.nodeName == "IMG") {
        this.addImage(elem);
      }
      if (this.options.background === true) {
        this.addElementBackgroundImages(elem);
      }
      var nodeType = elem.nodeType;
      if (!nodeType || !elementNodeTypes[nodeType]) {
        return;
      }
      var childImgs = elem.querySelectorAll("img");
      for (var i = 0; i < childImgs.length; i++) {
        var img = childImgs[i];
        this.addImage(img);
      }
      if (typeof this.options.background == "string") {
        var children = elem.querySelectorAll(this.options.background);
        for (i = 0; i < children.length; i++) {
          var child = children[i];
          this.addElementBackgroundImages(child);
        }
      }
    };
    var elementNodeTypes = { 1: true, 9: true, 11: true };
    ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
      var style = getComputedStyle(elem);
      if (!style) {
        return;
      }
      var reURL = /url\((['"])?(.*?)\1\)/gi;
      var matches = reURL.exec(style.backgroundImage);
      while (matches !== null) {
        var url = matches && matches[2];
        if (url) {
          this.addBackground(url, elem);
        }
        matches = reURL.exec(style.backgroundImage);
      }
    };
    ImagesLoaded.prototype.addImage = function (img) {
      var loadingImage = new LoadingImage(img);
      this.images.push(loadingImage);
    };
    ImagesLoaded.prototype.addBackground = function (url, elem) {
      var background = new Background(url, elem);
      this.images.push(background);
    };
    ImagesLoaded.prototype.check = function () {
      var _this = this;
      this.progressedCount = 0;
      this.hasAnyBroken = false;
      if (!this.images.length) {
        this.complete();
        return;
      }
      function onProgress(image, elem, message) {
        setTimeout(function () {
          _this.progress(image, elem, message);
        });
      }
      this.images.forEach(function (loadingImage) {
        loadingImage.once("progress", onProgress);
        loadingImage.check();
      });
    };
    ImagesLoaded.prototype.progress = function (image, elem, message) {
      this.progressedCount++;
      this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
      this.emitEvent("progress", [this, image, elem]);
      if (this.jqDeferred && this.jqDeferred.notify) {
        this.jqDeferred.notify(this, image);
      }
      if (this.progressedCount == this.images.length) {
        this.complete();
      }
      if (this.options.debug && console) {
        console.log("progress: " + message, image, elem);
      }
    };
    ImagesLoaded.prototype.complete = function () {
      var eventName = this.hasAnyBroken ? "fail" : "done";
      this.isComplete = true;
      this.emitEvent(eventName, [this]);
      this.emitEvent("always", [this]);
      if (this.jqDeferred) {
        var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[jqMethod](this);
      }
    };
    function LoadingImage(img) {
      this.img = img;
    }
    LoadingImage.prototype = Object.create(EvEmitter.prototype);
    LoadingImage.prototype.check = function () {
      var isComplete = this.getIsImageComplete();
      if (isComplete) {
        this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
        return;
      }
      this.proxyImage = new Image();
      this.proxyImage.addEventListener("load", this);
      this.proxyImage.addEventListener("error", this);
      this.img.addEventListener("load", this);
      this.img.addEventListener("error", this);
      this.proxyImage.src = this.img.src;
    };
    LoadingImage.prototype.getIsImageComplete = function () {
      return this.img.complete && this.img.naturalWidth;
    };
    LoadingImage.prototype.confirm = function (isLoaded, message) {
      this.isLoaded = isLoaded;
      this.emitEvent("progress", [this, this.img, message]);
    };
    LoadingImage.prototype.handleEvent = function (event) {
      var method = "on" + event.type;
      if (this[method]) {
        this[method](event);
      }
    };
    LoadingImage.prototype.onload = function () {
      this.confirm(true, "onload");
      this.unbindEvents();
    };
    LoadingImage.prototype.onerror = function () {
      this.confirm(false, "onerror");
      this.unbindEvents();
    };
    LoadingImage.prototype.unbindEvents = function () {
      this.proxyImage.removeEventListener("load", this);
      this.proxyImage.removeEventListener("error", this);
      this.img.removeEventListener("load", this);
      this.img.removeEventListener("error", this);
    };
    function Background(url, element) {
      this.url = url;
      this.element = element;
      this.img = new Image();
    }
    Background.prototype = Object.create(LoadingImage.prototype);
    Background.prototype.check = function () {
      this.img.addEventListener("load", this);
      this.img.addEventListener("error", this);
      this.img.src = this.url;
      var isComplete = this.getIsImageComplete();
      if (isComplete) {
        this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
        this.unbindEvents();
      }
    };
    Background.prototype.unbindEvents = function () {
      this.img.removeEventListener("load", this);
      this.img.removeEventListener("error", this);
    };
    Background.prototype.confirm = function (isLoaded, message) {
      this.isLoaded = isLoaded;
      this.emitEvent("progress", [this, this.element, message]);
    };
    ImagesLoaded.makeJQueryPlugin = function (jQuery) {
      jQuery = jQuery || window.jQuery;
      if (!jQuery) {
        return;
      }
      $ = jQuery;
      $.fn.imagesLoaded = function (options, callback) {
        var instance = new ImagesLoaded(this, options, callback);
        return instance.jqDeferred.promise($(this));
      };
    };
    ImagesLoaded.makeJQueryPlugin();
    return ImagesLoaded;
  }
);
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("jquery-bridget/jquery-bridget", ["jquery"], function (jQuery) {
      return factory(window, jQuery);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(window, require("jquery"));
  } else {
    window.jQueryBridget = factory(window, window.jQuery);
  }
})(window, function factory(window, jQuery) {
  "use strict";
  var arraySlice = Array.prototype.slice;
  var console = window.console;
  var logError =
    typeof console == "undefined"
      ? function () {}
      : function (message) {
          console.error(message);
        };
  function jQueryBridget(namespace, PluginClass, $) {
    $ = $ || jQuery || window.jQuery;
    if (!$) {
      return;
    }
    if (!PluginClass.prototype.option) {
      PluginClass.prototype.option = function (opts) {
        if (!$.isPlainObject(opts)) {
          return;
        }
        this.options = $.extend(true, this.options, opts);
      };
    }
    $.fn[namespace] = function (arg0) {
      if (typeof arg0 == "string") {
        var args = arraySlice.call(arguments, 1);
        return methodCall(this, arg0, args);
      }
      plainCall(this, arg0);
      return this;
    };
    function methodCall($elems, methodName, args) {
      var returnValue;
      var pluginMethodStr = "$()." + namespace + '("' + methodName + '")';
      $elems.each(function (i, elem) {
        var instance = $.data(elem, namespace);
        if (!instance) {
          logError(
            namespace +
              " not initialized. Cannot call methods, i.e. " +
              pluginMethodStr
          );
          return;
        }
        var method = instance[methodName];
        if (!method || methodName.charAt(0) == "_") {
          logError(pluginMethodStr + " is not a valid method");
          return;
        }
        var value = method.apply(instance, args);
        returnValue = returnValue === undefined ? value : returnValue;
      });
      return returnValue !== undefined ? returnValue : $elems;
    }
    function plainCall($elems, options) {
      $elems.each(function (i, elem) {
        var instance = $.data(elem, namespace);
        if (instance) {
          instance.option(options);
          instance._init();
        } else {
          instance = new PluginClass(elem, options);
          $.data(elem, namespace, instance);
        }
      });
    }
    updateJQuery($);
  }
  function updateJQuery($) {
    if (!$ || ($ && $.bridget)) {
      return;
    }
    $.bridget = jQueryBridget;
  }
  updateJQuery(jQuery || window.jQuery);
  return jQueryBridget;
});
(function (global, factory) {
  if (typeof define == "function" && define.amd) {
    define("ev-emitter/ev-emitter", factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory();
  } else {
    global.EvEmitter = factory();
  }
})(typeof window != "undefined" ? window : this, function () {
  function EvEmitter() {}
  var proto = EvEmitter.prototype;
  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    var events = (this._events = this._events || {});
    var listeners = (events[eventName] = events[eventName] || []);
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }
    return this;
  };
  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    this.on(eventName, listener);
    var onceEvents = (this._onceEvents = this._onceEvents || {});
    var onceListeners = (onceEvents[eventName] = onceEvents[eventName] || {});
    onceListeners[listener] = true;
    return this;
  };
  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }
    return this;
  };
  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    listeners = listeners.slice(0);
    args = args || [];
    var onceListeners = this._onceEvents && this._onceEvents[eventName];
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        this.off(eventName, listener);
        delete onceListeners[listener];
      }
      listener.apply(this, args);
    }
    return this;
  };
  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };
  return EvEmitter;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("get-size/get-size", factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory();
  } else {
    window.getSize = factory();
  }
})(window, function factory() {
  "use strict";
  function getStyleSize(value) {
    var num = parseFloat(value);
    var isValid = value.indexOf("%") == -1 && !isNaN(num);
    return isValid && num;
  }
  function noop() {}
  var logError =
    typeof console == "undefined"
      ? noop
      : function (message) {
          console.error(message);
        };
  var measurements = [
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingBottom",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginBottom",
    "borderLeftWidth",
    "borderRightWidth",
    "borderTopWidth",
    "borderBottomWidth",
  ];
  var measurementsLength = measurements.length;
  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0,
    };
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      size[measurement] = 0;
    }
    return size;
  }
  function getStyle(elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      logError(
        "Style returned " +
          style +
          ". Are you running this code in a hidden iframe on Firefox? " +
          "See https://bit.ly/getsizebug1"
      );
    }
    return style;
  }
  var isSetup = false;
  var isBoxSizeOuter;
  function setup() {
    if (isSetup) {
      return;
    }
    isSetup = true;
    var div = document.createElement("div");
    div.style.width = "200px";
    div.style.padding = "1px 2px 3px 4px";
    div.style.borderStyle = "solid";
    div.style.borderWidth = "1px 2px 3px 4px";
    div.style.boxSizing = "border-box";
    var body = document.body || document.documentElement;
    body.appendChild(div);
    var style = getStyle(div);
    isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
    getSize.isBoxSizeOuter = isBoxSizeOuter;
    body.removeChild(div);
  }
  function getSize(elem) {
    setup();
    if (typeof elem == "string") {
      elem = document.querySelector(elem);
    }
    if (!elem || typeof elem != "object" || !elem.nodeType) {
      return;
    }
    var style = getStyle(elem);
    if (style.display == "none") {
      return getZeroSize();
    }
    var size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;
    var isBorderBox = (size.isBorderBox = style.boxSizing == "border-box");
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      var value = style[measurement];
      var num = parseFloat(value);
      size[measurement] = !isNaN(num) ? num : 0;
    }
    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;
    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
    var styleWidth = getStyleSize(style.width);
    if (styleWidth !== false) {
      size.width =
        styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
    }
    var styleHeight = getStyleSize(style.height);
    if (styleHeight !== false) {
      size.height =
        styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
    }
    size.innerWidth = size.width - (paddingWidth + borderWidth);
    size.innerHeight = size.height - (paddingHeight + borderHeight);
    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;
    return size;
  }
  return getSize;
});
(function (window, factory) {
  "use strict";
  if (typeof define == "function" && define.amd) {
    define("desandro-matches-selector/matches-selector", factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory();
  } else {
    window.matchesSelector = factory();
  }
})(window, function factory() {
  "use strict";
  var matchesMethod = (function () {
    var ElemProto = window.Element.prototype;
    if (ElemProto.matches) {
      return "matches";
    }
    if (ElemProto.matchesSelector) {
      return "matchesSelector";
    }
    var prefixes = ["webkit", "moz", "ms", "o"];
    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var method = prefix + "MatchesSelector";
      if (ElemProto[method]) {
        return method;
      }
    }
  })();
  return function matchesSelector(elem, selector) {
    return elem[matchesMethod](selector);
  };
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("fizzy-ui-utils/utils", [
      "desandro-matches-selector/matches-selector",
    ], function (matchesSelector) {
      return factory(window, matchesSelector);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(window, require("desandro-matches-selector"));
  } else {
    window.fizzyUIUtils = factory(window, window.matchesSelector);
  }
})(window, function factory(window, matchesSelector) {
  var utils = {};
  utils.extend = function (a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  };
  utils.modulo = function (num, div) {
    return ((num % div) + div) % div;
  };
  var arraySlice = Array.prototype.slice;
  utils.makeArray = function (obj) {
    if (Array.isArray(obj)) {
      return obj;
    }
    if (obj === null || obj === undefined) {
      return [];
    }
    var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
    if (isArrayLike) {
      return arraySlice.call(obj);
    }
    return [obj];
  };
  utils.removeFrom = function (ary, obj) {
    var index = ary.indexOf(obj);
    if (index != -1) {
      ary.splice(index, 1);
    }
  };
  utils.getParent = function (elem, selector) {
    while (elem.parentNode && elem != document.body) {
      elem = elem.parentNode;
      if (matchesSelector(elem, selector)) {
        return elem;
      }
    }
  };
  utils.getQueryElement = function (elem) {
    if (typeof elem == "string") {
      return document.querySelector(elem);
    }
    return elem;
  };
  utils.handleEvent = function (event) {
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  utils.filterFindElements = function (elems, selector) {
    elems = utils.makeArray(elems);
    var ffElems = [];
    elems.forEach(function (elem) {
      if (!(elem instanceof HTMLElement)) {
        return;
      }
      if (!selector) {
        ffElems.push(elem);
        return;
      }
      if (matchesSelector(elem, selector)) {
        ffElems.push(elem);
      }
      var childElems = elem.querySelectorAll(selector);
      for (var i = 0; i < childElems.length; i++) {
        ffElems.push(childElems[i]);
      }
    });
    return ffElems;
  };
  utils.debounceMethod = function (_class, methodName, threshold) {
    threshold = threshold || 100;
    var method = _class.prototype[methodName];
    var timeoutName = methodName + "Timeout";
    _class.prototype[methodName] = function () {
      var timeout = this[timeoutName];
      clearTimeout(timeout);
      var args = arguments;
      var _this = this;
      this[timeoutName] = setTimeout(function () {
        method.apply(_this, args);
        delete _this[timeoutName];
      }, threshold);
    };
  };
  utils.docReady = function (callback) {
    var readyState = document.readyState;
    if (readyState == "complete" || readyState == "interactive") {
      setTimeout(callback);
    } else {
      document.addEventListener("DOMContentLoaded", callback);
    }
  };
  utils.toDashed = function (str) {
    return str
      .replace(/(.)([A-Z])/g, function (match, $1, $2) {
        return $1 + "-" + $2;
      })
      .toLowerCase();
  };
  var console = window.console;
  utils.htmlInit = function (WidgetClass, namespace) {
    utils.docReady(function () {
      var dashedNamespace = utils.toDashed(namespace);
      var dataAttr = "data-" + dashedNamespace;
      var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
      var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
      var elems = utils
        .makeArray(dataAttrElems)
        .concat(utils.makeArray(jsDashElems));
      var dataOptionsAttr = dataAttr + "-options";
      var jQuery = window.jQuery;
      elems.forEach(function (elem) {
        var attr =
          elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
        var options;
        try {
          options = attr && JSON.parse(attr);
        } catch (error) {
          if (console) {
            console.error(
              "Error parsing " +
                dataAttr +
                " on " +
                elem.className +
                ": " +
                error
            );
          }
          return;
        }
        var instance = new WidgetClass(elem, options);
        if (jQuery) {
          jQuery.data(elem, namespace, instance);
        }
      });
    });
  };
  return utils;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("outlayer/item", [
      "ev-emitter/ev-emitter",
      "get-size/get-size",
    ], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(require("ev-emitter"), require("get-size"));
  } else {
    window.Outlayer = {};
    window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
  }
})(window, function factory(EvEmitter, getSize) {
  "use strict";
  function isEmptyObj(obj) {
    for (var prop in obj) {
      return false;
    }
    prop = null;
    return true;
  }
  var docElemStyle = document.documentElement.style;
  var transitionProperty =
    typeof docElemStyle.transition == "string"
      ? "transition"
      : "WebkitTransition";
  var transformProperty =
    typeof docElemStyle.transform == "string" ? "transform" : "WebkitTransform";
  var transitionEndEvent = {
    WebkitTransition: "webkitTransitionEnd",
    transition: "transitionend",
  }[transitionProperty];
  var vendorProperties = {
    transform: transformProperty,
    transition: transitionProperty,
    transitionDuration: transitionProperty + "Duration",
    transitionProperty: transitionProperty + "Property",
    transitionDelay: transitionProperty + "Delay",
  };
  function Item(element, layout) {
    if (!element) {
      return;
    }
    this.element = element;
    this.layout = layout;
    this.position = { x: 0, y: 0 };
    this._create();
  }
  var proto = (Item.prototype = Object.create(EvEmitter.prototype));
  proto.constructor = Item;
  proto._create = function () {
    this._transn = { ingProperties: {}, clean: {}, onEnd: {} };
    this.css({ position: "absolute" });
  };
  proto.handleEvent = function (event) {
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  proto.getSize = function () {
    this.size = getSize(this.element);
  };
  proto.css = function (style) {
    var elemStyle = this.element.style;
    for (var prop in style) {
      var supportedProp = vendorProperties[prop] || prop;
      elemStyle[supportedProp] = style[prop];
    }
  };
  proto.getPosition = function () {
    var style = getComputedStyle(this.element);
    var isOriginLeft = this.layout._getOption("originLeft");
    var isOriginTop = this.layout._getOption("originTop");
    var xValue = style[isOriginLeft ? "left" : "right"];
    var yValue = style[isOriginTop ? "top" : "bottom"];
    var x = parseFloat(xValue);
    var y = parseFloat(yValue);
    var layoutSize = this.layout.size;
    if (xValue.indexOf("%") != -1) {
      x = (x / 100) * layoutSize.width;
    }
    if (yValue.indexOf("%") != -1) {
      y = (y / 100) * layoutSize.height;
    }
    x = isNaN(x) ? 0 : x;
    y = isNaN(y) ? 0 : y;
    x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
    y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
    this.position.x = x;
    this.position.y = y;
  };
  proto.layoutPosition = function () {
    var layoutSize = this.layout.size;
    var style = {};
    var isOriginLeft = this.layout._getOption("originLeft");
    var isOriginTop = this.layout._getOption("originTop");
    var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
    var xProperty = isOriginLeft ? "left" : "right";
    var xResetProperty = isOriginLeft ? "right" : "left";
    var x = this.position.x + layoutSize[xPadding];
    style[xProperty] = this.getXValue(x);
    style[xResetProperty] = "";
    var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
    var yProperty = isOriginTop ? "top" : "bottom";
    var yResetProperty = isOriginTop ? "bottom" : "top";
    var y = this.position.y + layoutSize[yPadding];
    style[yProperty] = this.getYValue(y);
    style[yResetProperty] = "";
    this.css(style);
    this.emitEvent("layout", [this]);
  };
  proto.getXValue = function (x) {
    var isHorizontal = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !isHorizontal
      ? (x / this.layout.size.width) * 100 + "%"
      : x + "px";
  };
  proto.getYValue = function (y) {
    var isHorizontal = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && isHorizontal
      ? (y / this.layout.size.height) * 100 + "%"
      : y + "px";
  };
  proto._transitionTo = function (x, y) {
    this.getPosition();
    var curX = this.position.x;
    var curY = this.position.y;
    var didNotMove = x == this.position.x && y == this.position.y;
    this.setPosition(x, y);
    if (didNotMove && !this.isTransitioning) {
      this.layoutPosition();
      return;
    }
    var transX = x - curX;
    var transY = y - curY;
    var transitionStyle = {};
    transitionStyle.transform = this.getTranslate(transX, transY);
    this.transition({
      to: transitionStyle,
      onTransitionEnd: { transform: this.layoutPosition },
      isCleaning: true,
    });
  };
  proto.getTranslate = function (x, y) {
    var isOriginLeft = this.layout._getOption("originLeft");
    var isOriginTop = this.layout._getOption("originTop");
    x = isOriginLeft ? x : -x;
    y = isOriginTop ? y : -y;
    return "translate3d(" + x + "px, " + y + "px, 0)";
  };
  proto.goTo = function (x, y) {
    this.setPosition(x, y);
    this.layoutPosition();
  };
  proto.moveTo = proto._transitionTo;
  proto.setPosition = function (x, y) {
    this.position.x = parseFloat(x);
    this.position.y = parseFloat(y);
  };
  proto._nonTransition = function (args) {
    this.css(args.to);
    if (args.isCleaning) {
      this._removeStyles(args.to);
    }
    for (var prop in args.onTransitionEnd) {
      args.onTransitionEnd[prop].call(this);
    }
  };
  proto.transition = function (args) {
    if (!parseFloat(this.layout.options.transitionDuration)) {
      this._nonTransition(args);
      return;
    }
    var _transition = this._transn;
    for (var prop in args.onTransitionEnd) {
      _transition.onEnd[prop] = args.onTransitionEnd[prop];
    }
    for (prop in args.to) {
      _transition.ingProperties[prop] = true;
      if (args.isCleaning) {
        _transition.clean[prop] = true;
      }
    }
    if (args.from) {
      this.css(args.from);
      var h = this.element.offsetHeight;
      h = null;
    }
    this.enableTransition(args.to);
    this.css(args.to);
    this.isTransitioning = true;
  };
  function toDashedAll(str) {
    return str.replace(/([A-Z])/g, function ($1) {
      return "-" + $1.toLowerCase();
    });
  }
  var transitionProps = "opacity," + toDashedAll(transformProperty);
  proto.enableTransition = function () {
    if (this.isTransitioning) {
      return;
    }
    var duration = this.layout.options.transitionDuration;
    duration = typeof duration == "number" ? duration + "ms" : duration;
    this.css({
      transitionProperty: transitionProps,
      transitionDuration: duration,
      transitionDelay: this.staggerDelay || 0,
    });
    this.element.addEventListener(transitionEndEvent, this, false);
  };
  proto.onwebkitTransitionEnd = function (event) {
    this.ontransitionend(event);
  };
  proto.onotransitionend = function (event) {
    this.ontransitionend(event);
  };
  var dashedVendorProperties = { "-webkit-transform": "transform" };
  proto.ontransitionend = function (event) {
    if (event.target !== this.element) {
      return;
    }
    var _transition = this._transn;
    var propertyName =
      dashedVendorProperties[event.propertyName] || event.propertyName;
    delete _transition.ingProperties[propertyName];
    if (isEmptyObj(_transition.ingProperties)) {
      this.disableTransition();
    }
    if (propertyName in _transition.clean) {
      this.element.style[event.propertyName] = "";
      delete _transition.clean[propertyName];
    }
    if (propertyName in _transition.onEnd) {
      var onTransitionEnd = _transition.onEnd[propertyName];
      onTransitionEnd.call(this);
      delete _transition.onEnd[propertyName];
    }
    this.emitEvent("transitionEnd", [this]);
  };
  proto.disableTransition = function () {
    this.removeTransitionStyles();
    this.element.removeEventListener(transitionEndEvent, this, false);
    this.isTransitioning = false;
  };
  proto._removeStyles = function (style) {
    var cleanStyle = {};
    for (var prop in style) {
      cleanStyle[prop] = "";
    }
    this.css(cleanStyle);
  };
  var cleanTransitionStyle = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: "",
  };
  proto.removeTransitionStyles = function () {
    this.css(cleanTransitionStyle);
  };
  proto.stagger = function (delay) {
    delay = isNaN(delay) ? 0 : delay;
    this.staggerDelay = delay + "ms";
  };
  proto.removeElem = function () {
    this.element.parentNode.removeChild(this.element);
    this.css({ display: "" });
    this.emitEvent("remove", [this]);
  };
  proto.remove = function () {
    if (
      !transitionProperty ||
      !parseFloat(this.layout.options.transitionDuration)
    ) {
      this.removeElem();
      return;
    }
    this.once("transitionEnd", function () {
      this.removeElem();
    });
    this.hide();
  };
  proto.reveal = function () {
    delete this.isHidden;
    this.css({ display: "" });
    var options = this.layout.options;
    var onTransitionEnd = {};
    var transitionEndProperty =
      this.getHideRevealTransitionEndProperty("visibleStyle");
    onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
    this.transition({
      from: options.hiddenStyle,
      to: options.visibleStyle,
      isCleaning: true,
      onTransitionEnd: onTransitionEnd,
    });
  };
  proto.onRevealTransitionEnd = function () {
    if (!this.isHidden) {
      this.emitEvent("reveal");
    }
  };
  proto.getHideRevealTransitionEndProperty = function (styleProperty) {
    var optionStyle = this.layout.options[styleProperty];
    if (optionStyle.opacity) {
      return "opacity";
    }
    for (var prop in optionStyle) {
      return prop;
    }
  };
  proto.hide = function () {
    this.isHidden = true;
    this.css({ display: "" });
    var options = this.layout.options;
    var onTransitionEnd = {};
    var transitionEndProperty =
      this.getHideRevealTransitionEndProperty("hiddenStyle");
    onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
    this.transition({
      from: options.visibleStyle,
      to: options.hiddenStyle,
      isCleaning: true,
      onTransitionEnd: onTransitionEnd,
    });
  };
  proto.onHideTransitionEnd = function () {
    if (this.isHidden) {
      this.css({ display: "none" });
      this.emitEvent("hide");
    }
  };
  proto.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: "",
    });
  };
  return Item;
});
(function (window, factory) {
  "use strict";
  if (typeof define == "function" && define.amd) {
    define("outlayer/outlayer", [
      "ev-emitter/ev-emitter",
      "get-size/get-size",
      "fizzy-ui-utils/utils",
      "./item",
    ], function (EvEmitter, getSize, utils, Item) {
      return factory(window, EvEmitter, getSize, utils, Item);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(
      window,
      require("ev-emitter"),
      require("get-size"),
      require("fizzy-ui-utils"),
      require("./item")
    );
  } else {
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }
})(window, function factory(window, EvEmitter, getSize, utils, Item) {
  "use strict";
  var console = window.console;
  var jQuery = window.jQuery;
  var noop = function () {};
  var GUID = 0;
  var instances = {};
  function Outlayer(element, options) {
    var queryElement = utils.getQueryElement(element);
    if (!queryElement) {
      if (console) {
        console.error(
          "Bad element for " +
            this.constructor.namespace +
            ": " +
            (queryElement || element)
        );
      }
      return;
    }
    this.element = queryElement;
    if (jQuery) {
      this.$element = jQuery(this.element);
    }
    this.options = utils.extend({}, this.constructor.defaults);
    this.option(options);
    var id = ++GUID;
    this.element.outlayerGUID = id;
    instances[id] = this;
    this._create();
    var isInitLayout = this._getOption("initLayout");
    if (isInitLayout) {
      this.layout();
    }
  }
  Outlayer.namespace = "outlayer";
  Outlayer.Item = Item;
  Outlayer.defaults = {
    containerStyle: { position: "relative" },
    initLayout: true,
    originLeft: true,
    originTop: true,
    resize: true,
    resizeContainer: true,
    transitionDuration: "0.4s",
    hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
    visibleStyle: { opacity: 1, transform: "scale(1)" },
  };
  var proto = Outlayer.prototype;
  utils.extend(proto, EvEmitter.prototype);
  proto.option = function (opts) {
    utils.extend(this.options, opts);
  };
  proto._getOption = function (option) {
    var oldOption = this.constructor.compatOptions[option];
    return oldOption && this.options[oldOption] !== undefined
      ? this.options[oldOption]
      : this.options[option];
  };
  Outlayer.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer",
  };
  proto._create = function () {
    this.reloadItems();
    this.stamps = [];
    this.stamp(this.options.stamp);
    utils.extend(this.element.style, this.options.containerStyle);
    var canBindResize = this._getOption("resize");
    if (canBindResize) {
      this.bindResize();
    }
  };
  proto.reloadItems = function () {
    this.items = this._itemize(this.element.children);
  };
  proto._itemize = function (elems) {
    var itemElems = this._filterFindItemElements(elems);
    var Item = this.constructor.Item;
    var items = [];
    for (var i = 0; i < itemElems.length; i++) {
      var elem = itemElems[i];
      var item = new Item(elem, this);
      items.push(item);
    }
    return items;
  };
  proto._filterFindItemElements = function (elems) {
    return utils.filterFindElements(elems, this.options.itemSelector);
  };
  proto.getItemElements = function () {
    return this.items.map(function (item) {
      return item.element;
    });
  };
  proto.layout = function () {
    this._resetLayout();
    this._manageStamps();
    var layoutInstant = this._getOption("layoutInstant");
    var isInstant =
      layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, isInstant);
    this._isLayoutInited = true;
  };
  proto._init = proto.layout;
  proto._resetLayout = function () {
    this.getSize();
  };
  proto.getSize = function () {
    this.size = getSize(this.element);
  };
  proto._getMeasurement = function (measurement, size) {
    var option = this.options[measurement];
    var elem;
    if (!option) {
      this[measurement] = 0;
    } else {
      if (typeof option == "string") {
        elem = this.element.querySelector(option);
      } else if (option instanceof HTMLElement) {
        elem = option;
      }
      this[measurement] = elem ? getSize(elem)[size] : option;
    }
  };
  proto.layoutItems = function (items, isInstant) {
    items = this._getItemsForLayout(items);
    this._layoutItems(items, isInstant);
    this._postLayout();
  };
  proto._getItemsForLayout = function (items) {
    return items.filter(function (item) {
      return !item.isIgnored;
    });
  };
  proto._layoutItems = function (items, isInstant) {
    this._emitCompleteOnItems("layout", items);
    if (!items || !items.length) {
      return;
    }
    var queue = [];
    items.forEach(function (item) {
      var position = this._getItemLayoutPosition(item);
      position.item = item;
      position.isInstant = isInstant || item.isLayoutInstant;
      queue.push(position);
    }, this);
    this._processLayoutQueue(queue);
  };
  proto._getItemLayoutPosition = function () {
    return { x: 0, y: 0 };
  };
  proto._processLayoutQueue = function (queue) {
    this.updateStagger();
    queue.forEach(function (obj, i) {
      this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
    }, this);
  };
  proto.updateStagger = function () {
    var stagger = this.options.stagger;
    if (stagger === null || stagger === undefined) {
      this.stagger = 0;
      return;
    }
    this.stagger = getMilliseconds(stagger);
    return this.stagger;
  };
  proto._positionItem = function (item, x, y, isInstant, i) {
    if (isInstant) {
      item.goTo(x, y);
    } else {
      item.stagger(i * this.stagger);
      item.moveTo(x, y);
    }
  };
  proto._postLayout = function () {
    this.resizeContainer();
  };
  proto.resizeContainer = function () {
    var isResizingContainer = this._getOption("resizeContainer");
    if (!isResizingContainer) {
      return;
    }
    var size = this._getContainerSize();
    if (size) {
      this._setContainerMeasure(size.width, true);
      this._setContainerMeasure(size.height, false);
    }
  };
  proto._getContainerSize = noop;
  proto._setContainerMeasure = function (measure, isWidth) {
    if (measure === undefined) {
      return;
    }
    var elemSize = this.size;
    if (elemSize.isBorderBox) {
      measure += isWidth
        ? elemSize.paddingLeft +
          elemSize.paddingRight +
          elemSize.borderLeftWidth +
          elemSize.borderRightWidth
        : elemSize.paddingBottom +
          elemSize.paddingTop +
          elemSize.borderTopWidth +
          elemSize.borderBottomWidth;
    }
    measure = Math.max(measure, 0);
    this.element.style[isWidth ? "width" : "height"] = measure + "px";
  };
  proto._emitCompleteOnItems = function (eventName, items) {
    var _this = this;
    function onComplete() {
      _this.dispatchEvent(eventName + "Complete", null, [items]);
    }
    var count = items.length;
    if (!items || !count) {
      onComplete();
      return;
    }
    var doneCount = 0;
    function tick() {
      doneCount++;
      if (doneCount == count) {
        onComplete();
      }
    }
    items.forEach(function (item) {
      item.once(eventName, tick);
    });
  };
  proto.dispatchEvent = function (type, event, args) {
    var emitArgs = event ? [event].concat(args) : args;
    this.emitEvent(type, emitArgs);
    if (jQuery) {
      this.$element = this.$element || jQuery(this.element);
      if (event) {
        var $event = jQuery.Event(event);
        $event.type = type;
        this.$element.trigger($event, args);
      } else {
        this.$element.trigger(type, args);
      }
    }
  };
  proto.ignore = function (elem) {
    var item = this.getItem(elem);
    if (item) {
      item.isIgnored = true;
    }
  };
  proto.unignore = function (elem) {
    var item = this.getItem(elem);
    if (item) {
      delete item.isIgnored;
    }
  };
  proto.stamp = function (elems) {
    elems = this._find(elems);
    if (!elems) {
      return;
    }
    this.stamps = this.stamps.concat(elems);
    elems.forEach(this.ignore, this);
  };
  proto.unstamp = function (elems) {
    elems = this._find(elems);
    if (!elems) {
      return;
    }
    elems.forEach(function (elem) {
      utils.removeFrom(this.stamps, elem);
      this.unignore(elem);
    }, this);
  };
  proto._find = function (elems) {
    if (!elems) {
      return;
    }
    if (typeof elems == "string") {
      elems = this.element.querySelectorAll(elems);
    }
    elems = utils.makeArray(elems);
    return elems;
  };
  proto._manageStamps = function () {
    if (!this.stamps || !this.stamps.length) {
      return;
    }
    this._getBoundingRect();
    this.stamps.forEach(this._manageStamp, this);
  };
  proto._getBoundingRect = function () {
    var boundingRect = this.element.getBoundingClientRect();
    var size = this.size;
    this._boundingRect = {
      left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
      top: boundingRect.top + size.paddingTop + size.borderTopWidth,
      right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
      bottom:
        boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth),
    };
  };
  proto._manageStamp = noop;
  proto._getElementOffset = function (elem) {
    var boundingRect = elem.getBoundingClientRect();
    var thisRect = this._boundingRect;
    var size = getSize(elem);
    var offset = {
      left: boundingRect.left - thisRect.left - size.marginLeft,
      top: boundingRect.top - thisRect.top - size.marginTop,
      right: thisRect.right - boundingRect.right - size.marginRight,
      bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom,
    };
    return offset;
  };
  proto.handleEvent = utils.handleEvent;
  proto.bindResize = function () {
    window.addEventListener("resize", this);
    this.isResizeBound = true;
  };
  proto.unbindResize = function () {
    window.removeEventListener("resize", this);
    this.isResizeBound = false;
  };
  proto.onresize = function () {
    this.resize();
  };
  utils.debounceMethod(Outlayer, "onresize", 100);
  proto.resize = function () {
    if (!this.isResizeBound || !this.needsResizeLayout()) {
      return;
    }
    this.layout();
  };
  proto.needsResizeLayout = function () {
    var size = getSize(this.element);
    var hasSizes = this.size && size;
    return hasSizes && size.innerWidth !== this.size.innerWidth;
  };
  proto.addItems = function (elems) {
    var items = this._itemize(elems);
    if (items.length) {
      this.items = this.items.concat(items);
    }
    return items;
  };
  proto.appended = function (elems) {
    var items = this.addItems(elems);
    if (!items.length) {
      return;
    }
    this.layoutItems(items, true);
    this.reveal(items);
  };
  proto.prepended = function (elems) {
    var items = this._itemize(elems);
    if (!items.length) {
      return;
    }
    var previousItems = this.items.slice(0);
    this.items = items.concat(previousItems);
    this._resetLayout();
    this._manageStamps();
    this.layoutItems(items, true);
    this.reveal(items);
    this.layoutItems(previousItems);
  };
  proto.reveal = function (items) {
    this._emitCompleteOnItems("reveal", items);
    if (!items || !items.length) {
      return;
    }
    var stagger = this.updateStagger();
    items.forEach(function (item, i) {
      item.stagger(i * stagger);
      item.reveal();
    });
  };
  proto.hide = function (items) {
    this._emitCompleteOnItems("hide", items);
    if (!items || !items.length) {
      return;
    }
    var stagger = this.updateStagger();
    items.forEach(function (item, i) {
      item.stagger(i * stagger);
      item.hide();
    });
  };
  proto.revealItemElements = function (elems) {
    var items = this.getItems(elems);
    this.reveal(items);
  };
  proto.hideItemElements = function (elems) {
    var items = this.getItems(elems);
    this.hide(items);
  };
  proto.getItem = function (elem) {
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      if (item.element == elem) {
        return item;
      }
    }
  };
  proto.getItems = function (elems) {
    elems = utils.makeArray(elems);
    var items = [];
    elems.forEach(function (elem) {
      var item = this.getItem(elem);
      if (item) {
        items.push(item);
      }
    }, this);
    return items;
  };
  proto.remove = function (elems) {
    var removeItems = this.getItems(elems);
    this._emitCompleteOnItems("remove", removeItems);
    if (!removeItems || !removeItems.length) {
      return;
    }
    removeItems.forEach(function (item) {
      item.remove();
      utils.removeFrom(this.items, item);
    }, this);
  };
  proto.destroy = function () {
    var style = this.element.style;
    style.height = "";
    style.position = "";
    style.width = "";
    this.items.forEach(function (item) {
      item.destroy();
    });
    this.unbindResize();
    var id = this.element.outlayerGUID;
    delete instances[id];
    delete this.element.outlayerGUID;
    if (jQuery) {
      jQuery.removeData(this.element, this.constructor.namespace);
    }
  };
  Outlayer.data = function (elem) {
    elem = utils.getQueryElement(elem);
    var id = elem && elem.outlayerGUID;
    return id && instances[id];
  };
  Outlayer.create = function (namespace, options) {
    var Layout = subclass(Outlayer);
    Layout.defaults = utils.extend({}, Outlayer.defaults);
    utils.extend(Layout.defaults, options);
    Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
    Layout.namespace = namespace;
    Layout.data = Outlayer.data;
    Layout.Item = subclass(Item);
    utils.htmlInit(Layout, namespace);
    if (jQuery && jQuery.bridget) {
      jQuery.bridget(namespace, Layout);
    }
    return Layout;
  };
  function subclass(Parent) {
    function SubClass() {
      Parent.apply(this, arguments);
    }
    SubClass.prototype = Object.create(Parent.prototype);
    SubClass.prototype.constructor = SubClass;
    return SubClass;
  }
  var msUnits = { ms: 1, s: 1e3 };
  function getMilliseconds(time) {
    if (typeof time == "number") {
      return time;
    }
    var matches = time.match(/(^\d*\.?\d*)(\w*)/);
    var num = matches && matches[1];
    var unit = matches && matches[2];
    if (!num.length) {
      return 0;
    }
    num = parseFloat(num);
    var mult = msUnits[unit] || 1;
    return num * mult;
  }
  Outlayer.Item = Item;
  return Outlayer;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("isotope-layout/js/item", ["outlayer/outlayer"], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(require("outlayer"));
  } else {
    window.Isotope = window.Isotope || {};
    window.Isotope.Item = factory(window.Outlayer);
  }
})(window, function factory(Outlayer) {
  "use strict";
  function Item() {
    Outlayer.Item.apply(this, arguments);
  }
  var proto = (Item.prototype = Object.create(Outlayer.Item.prototype));
  var _create = proto._create;
  proto._create = function () {
    this.id = this.layout.itemGUID++;
    _create.call(this);
    this.sortData = {};
  };
  proto.updateSortData = function () {
    if (this.isIgnored) {
      return;
    }
    this.sortData.id = this.id;
    this.sortData["original-order"] = this.id;
    this.sortData.random = Math.random();
    var getSortData = this.layout.options.getSortData;
    var sorters = this.layout._sorters;
    for (var key in getSortData) {
      var sorter = sorters[key];
      this.sortData[key] = sorter(this.element, this);
    }
  };
  var _destroy = proto.destroy;
  proto.destroy = function () {
    _destroy.apply(this, arguments);
    this.css({ display: "" });
  };
  return Item;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("isotope-layout/js/layout-mode", [
      "get-size/get-size",
      "outlayer/outlayer",
    ], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(require("get-size"), require("outlayer"));
  } else {
    window.Isotope = window.Isotope || {};
    window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
  }
})(window, function factory(getSize, Outlayer) {
  "use strict";
  function LayoutMode(isotope) {
    this.isotope = isotope;
    if (isotope) {
      this.options = isotope.options[this.namespace];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }
  var proto = LayoutMode.prototype;
  var facadeMethods = [
    "_resetLayout",
    "_getItemLayoutPosition",
    "_manageStamp",
    "_getContainerSize",
    "_getElementOffset",
    "needsResizeLayout",
    "_getOption",
  ];
  facadeMethods.forEach(function (methodName) {
    proto[methodName] = function () {
      return Outlayer.prototype[methodName].apply(this.isotope, arguments);
    };
  });
  proto.needsVerticalResizeLayout = function () {
    var size = getSize(this.isotope.element);
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };
  proto._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments);
  };
  proto.getColumnWidth = function () {
    this.getSegmentSize("column", "Width");
  };
  proto.getRowHeight = function () {
    this.getSegmentSize("row", "Height");
  };
  proto.getSegmentSize = function (segment, size) {
    var segmentName = segment + size;
    var outerSize = "outer" + size;
    this._getMeasurement(segmentName, outerSize);
    if (this[segmentName]) {
      return;
    }
    var firstItemSize = this.getFirstItemSize();
    this[segmentName] =
      (firstItemSize && firstItemSize[outerSize]) ||
      this.isotope.size["inner" + size];
  };
  proto.getFirstItemSize = function () {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize(firstItem.element);
  };
  proto.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments);
  };
  proto.getSize = function () {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };
  LayoutMode.modes = {};
  LayoutMode.create = function (namespace, options) {
    function Mode() {
      LayoutMode.apply(this, arguments);
    }
    Mode.prototype = Object.create(proto);
    Mode.prototype.constructor = Mode;
    if (options) {
      Mode.options = options;
    }
    Mode.prototype.namespace = namespace;
    LayoutMode.modes[namespace] = Mode;
    return Mode;
  };
  return LayoutMode;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("masonry-layout/masonry", [
      "outlayer/outlayer",
      "get-size/get-size",
    ], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(require("outlayer"), require("get-size"));
  } else {
    window.Masonry = factory(window.Outlayer, window.getSize);
  }
})(window, function factory(Outlayer, getSize) {
  var Masonry = Outlayer.create("masonry");
  Masonry.compatOptions.fitWidth = "isFitWidth";
  var proto = Masonry.prototype;
  proto._resetLayout = function () {
    this.getSize();
    this._getMeasurement("columnWidth", "outerWidth");
    this._getMeasurement("gutter", "outerWidth");
    this.measureColumns();
    this.colYs = [];
    for (var i = 0; i < this.cols; i++) {
      this.colYs.push(0);
    }
    this.maxY = 0;
    this.horizontalColIndex = 0;
  };
  proto.measureColumns = function () {
    this.getContainerWidth();
    if (!this.columnWidth) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      this.columnWidth =
        (firstItemElem && getSize(firstItemElem).outerWidth) ||
        this.containerWidth;
    }
    var columnWidth = (this.columnWidth += this.gutter);
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    var excess = columnWidth - (containerWidth % columnWidth);
    var mathMethod = excess && excess < 1 ? "round" : "floor";
    cols = Math[mathMethod](cols);
    this.cols = Math.max(cols, 1);
  };
  proto.getContainerWidth = function () {
    var isFitWidth = this._getOption("fitWidth");
    var container = isFitWidth ? this.element.parentNode : this.element;
    var size = getSize(container);
    this.containerWidth = size && size.innerWidth;
  };
  proto._getItemLayoutPosition = function (item) {
    item.getSize();
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
    var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
    colSpan = Math.min(colSpan, this.cols);
    var colPosMethod = this.options.horizontalOrder
      ? "_getHorizontalColPosition"
      : "_getTopColPosition";
    var colPosition = this[colPosMethod](colSpan, item);
    var position = { x: this.columnWidth * colPosition.col, y: colPosition.y };
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for (var i = colPosition.col; i < setMax; i++) {
      this.colYs[i] = setHeight;
    }
    return position;
  };
  proto._getTopColPosition = function (colSpan) {
    var colGroup = this._getTopColGroup(colSpan);
    var minimumY = Math.min.apply(Math, colGroup);
    return { col: colGroup.indexOf(minimumY), y: minimumY };
  };
  proto._getTopColGroup = function (colSpan) {
    if (colSpan < 2) {
      return this.colYs;
    }
    var colGroup = [];
    var groupCount = this.cols + 1 - colSpan;
    for (var i = 0; i < groupCount; i++) {
      colGroup[i] = this._getColGroupY(i, colSpan);
    }
    return colGroup;
  };
  proto._getColGroupY = function (col, colSpan) {
    if (colSpan < 2) {
      return this.colYs[col];
    }
    var groupColYs = this.colYs.slice(col, col + colSpan);
    return Math.max.apply(Math, groupColYs);
  };
  proto._getHorizontalColPosition = function (colSpan, item) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    col = isOver ? 0 : col;
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
    return { col: col, y: this._getColGroupY(col, colSpan) };
  };
  proto._manageStamp = function (stamp) {
    var stampSize = getSize(stamp);
    var offset = this._getElementOffset(stamp);
    var isOriginLeft = this._getOption("originLeft");
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor(firstX / this.columnWidth);
    firstCol = Math.max(0, firstCol);
    var lastCol = Math.floor(lastX / this.columnWidth);
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min(this.cols - 1, lastCol);
    var isOriginTop = this._getOption("originTop");
    var stampMaxY =
      (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
    for (var i = firstCol; i <= lastCol; i++) {
      this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
    }
  };
  proto._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var size = { height: this.maxY };
    if (this._getOption("fitWidth")) {
      size.width = this._getContainerFitWidth();
    }
    return size;
  };
  proto._getContainerFitWidth = function () {
    var unusedCols = 0;
    var i = this.cols;
    while (--i) {
      if (this.colYs[i] !== 0) {
        break;
      }
      unusedCols++;
    }
    return (this.cols - unusedCols) * this.columnWidth - this.gutter;
  };
  proto.needsResizeLayout = function () {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };
  return Masonry;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("isotope-layout/js/layout-modes/masonry", [
      "../layout-mode",
      "masonry-layout/masonry",
    ], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(
      require("../layout-mode"),
      require("masonry-layout")
    );
  } else {
    factory(window.Isotope.LayoutMode, window.Masonry);
  }
})(window, function factory(LayoutMode, Masonry) {
  "use strict";
  var MasonryMode = LayoutMode.create("masonry");
  var proto = MasonryMode.prototype;
  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true,
  };
  for (var method in Masonry.prototype) {
    if (!keepModeMethods[method]) {
      proto[method] = Masonry.prototype[method];
    }
  }
  var measureColumns = proto.measureColumns;
  proto.measureColumns = function () {
    this.items = this.isotope.filteredItems;
    measureColumns.call(this);
  };
  var _getOption = proto._getOption;
  proto._getOption = function (option) {
    if (option == "fitWidth") {
      return this.options.isFitWidth !== undefined
        ? this.options.isFitWidth
        : this.options.fitWidth;
    }
    return _getOption.apply(this.isotope, arguments);
  };
  return MasonryMode;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("isotope-layout/js/layout-modes/fit-rows", [
      "../layout-mode",
    ], factory);
  } else if (typeof exports == "object") {
    module.exports = factory(require("../layout-mode"));
  } else {
    factory(window.Isotope.LayoutMode);
  }
})(window, function factory(LayoutMode) {
  "use strict";
  var FitRows = LayoutMode.create("fitRows");
  var proto = FitRows.prototype;
  proto._resetLayout = function () {
    this.x = 0;
    this.y = 0;
    this.maxY = 0;
    this._getMeasurement("gutter", "outerWidth");
  };
  proto._getItemLayoutPosition = function (item) {
    item.getSize();
    var itemWidth = item.size.outerWidth + this.gutter;
    var containerWidth = this.isotope.size.innerWidth + this.gutter;
    if (this.x !== 0 && itemWidth + this.x > containerWidth) {
      this.x = 0;
      this.y = this.maxY;
    }
    var position = { x: this.x, y: this.y };
    this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
    this.x += itemWidth;
    return position;
  };
  proto._getContainerSize = function () {
    return { height: this.maxY };
  };
  return FitRows;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define("isotope-layout/js/layout-modes/vertical", [
      "../layout-mode",
    ], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(require("../layout-mode"));
  } else {
    factory(window.Isotope.LayoutMode);
  }
})(window, function factory(LayoutMode) {
  "use strict";
  var Vertical = LayoutMode.create("vertical", { horizontalAlignment: 0 });
  var proto = Vertical.prototype;
  proto._resetLayout = function () {
    this.y = 0;
  };
  proto._getItemLayoutPosition = function (item) {
    item.getSize();
    var x =
      (this.isotope.size.innerWidth - item.size.outerWidth) *
      this.options.horizontalAlignment;
    var y = this.y;
    this.y += item.size.outerHeight;
    return { x: x, y: y };
  };
  proto._getContainerSize = function () {
    return { height: this.y };
  };
  return Vertical;
});
(function (window, factory) {
  if (typeof define == "function" && define.amd) {
    define([
      "outlayer/outlayer",
      "get-size/get-size",
      "desandro-matches-selector/matches-selector",
      "fizzy-ui-utils/utils",
      "isotope-layout/js/item",
      "isotope-layout/js/layout-mode",
      "isotope-layout/js/layout-modes/masonry",
      "isotope-layout/js/layout-modes/fit-rows",
      "isotope-layout/js/layout-modes/vertical",
    ], function (Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
      return factory(
        window,
        Outlayer,
        getSize,
        matchesSelector,
        utils,
        Item,
        LayoutMode
      );
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(
      window,
      require("outlayer"),
      require("get-size"),
      require("desandro-matches-selector"),
      require("fizzy-ui-utils"),
      require("isotope-layout/js/item"),
      require("isotope-layout/js/layout-mode"),
      require("isotope-layout/js/layout-modes/masonry"),
      require("isotope-layout/js/layout-modes/fit-rows"),
      require("isotope-layout/js/layout-modes/vertical")
    );
  } else {
    window.Isotope = factory(
      window,
      window.Outlayer,
      window.getSize,
      window.matchesSelector,
      window.fizzyUIUtils,
      window.Isotope.Item,
      window.Isotope.LayoutMode
    );
  }
})(
  window,
  function factory(
    window,
    Outlayer,
    getSize,
    matchesSelector,
    utils,
    Item,
    LayoutMode
  ) {
    var jQuery = window.jQuery;
    var trim = String.prototype.trim
      ? function (str) {
          return str.trim();
        }
      : function (str) {
          return str.replace(/^\s+|\s+$/g, "");
        };
    var Isotope = Outlayer.create("isotope", {
      layoutMode: "masonry",
      isJQueryFiltering: true,
      sortAscending: true,
    });
    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;
    var proto = Isotope.prototype;
    proto._create = function () {
      this.itemGUID = 0;
      this._sorters = {};
      this._getSorters();
      Outlayer.prototype._create.call(this);
      this.modes = {};
      this.filteredItems = this.items;
      this.sortHistory = ["original-order"];
      for (var name in LayoutMode.modes) {
        this._initLayoutMode(name);
      }
    };
    proto.reloadItems = function () {
      this.itemGUID = 0;
      Outlayer.prototype.reloadItems.call(this);
    };
    proto._itemize = function () {
      var items = Outlayer.prototype._itemize.apply(this, arguments);
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item.id = this.itemGUID++;
      }
      this._updateItemsSortData(items);
      return items;
    };
    proto._initLayoutMode = function (name) {
      var Mode = LayoutMode.modes[name];
      var initialOpts = this.options[name] || {};
      this.options[name] = Mode.options
        ? utils.extend(Mode.options, initialOpts)
        : initialOpts;
      this.modes[name] = new Mode(this);
    };
    proto.layout = function () {
      if (!this._isLayoutInited && this._getOption("initLayout")) {
        this.arrange();
        return;
      }
      this._layout();
    };
    proto._layout = function () {
      var isInstant = this._getIsInstant();
      this._resetLayout();
      this._manageStamps();
      this.layoutItems(this.filteredItems, isInstant);
      this._isLayoutInited = true;
    };
    proto.arrange = function (opts) {
      this.option(opts);
      this._getIsInstant();
      var filtered = this._filter(this.items);
      this.filteredItems = filtered.matches;
      this._bindArrangeComplete();
      if (this._isInstant) {
        this._noTransition(this._hideReveal, [filtered]);
      } else {
        this._hideReveal(filtered);
      }
      this._sort();
      this._layout();
    };
    proto._init = proto.arrange;
    proto._hideReveal = function (filtered) {
      this.reveal(filtered.needReveal);
      this.hide(filtered.needHide);
    };
    proto._getIsInstant = function () {
      var isLayoutInstant = this._getOption("layoutInstant");
      var isInstant =
        isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
      this._isInstant = isInstant;
      return isInstant;
    };
    proto._bindArrangeComplete = function () {
      var isLayoutComplete, isHideComplete, isRevealComplete;
      var _this = this;
      function arrangeParallelCallback() {
        if (isLayoutComplete && isHideComplete && isRevealComplete) {
          _this.dispatchEvent("arrangeComplete", null, [_this.filteredItems]);
        }
      }
      this.once("layoutComplete", function () {
        isLayoutComplete = true;
        arrangeParallelCallback();
      });
      this.once("hideComplete", function () {
        isHideComplete = true;
        arrangeParallelCallback();
      });
      this.once("revealComplete", function () {
        isRevealComplete = true;
        arrangeParallelCallback();
      });
    };
    proto._filter = function (items) {
      var filter = this.options.filter;
      filter = filter || "*";
      var matches = [];
      var hiddenMatched = [];
      var visibleUnmatched = [];
      var test = this._getFilterTest(filter);
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.isIgnored) {
          continue;
        }
        var isMatched = test(item);
        if (isMatched) {
          matches.push(item);
        }
        if (isMatched && item.isHidden) {
          hiddenMatched.push(item);
        } else if (!isMatched && !item.isHidden) {
          visibleUnmatched.push(item);
        }
      }
      return {
        matches: matches,
        needReveal: hiddenMatched,
        needHide: visibleUnmatched,
      };
    };
    proto._getFilterTest = function (filter) {
      if (jQuery && this.options.isJQueryFiltering) {
        return function (item) {
          return jQuery(item.element).is(filter);
        };
      }
      if (typeof filter == "function") {
        return function (item) {
          return filter(item.element);
        };
      }
      return function (item) {
        return matchesSelector(item.element, filter);
      };
    };
    proto.updateSortData = function (elems) {
      var items;
      if (elems) {
        elems = utils.makeArray(elems);
        items = this.getItems(elems);
      } else {
        items = this.items;
      }
      this._getSorters();
      this._updateItemsSortData(items);
    };
    proto._getSorters = function () {
      var getSortData = this.options.getSortData;
      for (var key in getSortData) {
        var sorter = getSortData[key];
        this._sorters[key] = mungeSorter(sorter);
      }
    };
    proto._updateItemsSortData = function (items) {
      var len = items && items.length;
      for (var i = 0; len && i < len; i++) {
        var item = items[i];
        item.updateSortData();
      }
    };
    var mungeSorter = (function () {
      function mungeSorter(sorter) {
        if (typeof sorter != "string") {
          return sorter;
        }
        var args = trim(sorter).split(" ");
        var query = args[0];
        var attrMatch = query.match(/^\[(.+)\]$/);
        var attr = attrMatch && attrMatch[1];
        var getValue = getValueGetter(attr, query);
        var parser = Isotope.sortDataParsers[args[1]];
        sorter = parser
          ? function (elem) {
              return elem && parser(getValue(elem));
            }
          : function (elem) {
              return elem && getValue(elem);
            };
        return sorter;
      }
      function getValueGetter(attr, query) {
        if (attr) {
          return function getAttribute(elem) {
            return elem.getAttribute(attr);
          };
        }
        return function getChildText(elem) {
          var child = elem.querySelector(query);
          return child && child.textContent;
        };
      }
      return mungeSorter;
    })();
    Isotope.sortDataParsers = {
      parseInt: function (val) {
        return parseInt(val, 10);
      },
      parseFloat: function (val) {
        return parseFloat(val);
      },
    };
    proto._sort = function () {
      if (!this.options.sortBy) {
        return;
      }
      var sortBys = utils.makeArray(this.options.sortBy);
      if (!this._getIsSameSortBy(sortBys)) {
        this.sortHistory = sortBys.concat(this.sortHistory);
      }
      var itemSorter = getItemSorter(
        this.sortHistory,
        this.options.sortAscending
      );
      this.filteredItems.sort(itemSorter);
    };
    proto._getIsSameSortBy = function (sortBys) {
      for (var i = 0; i < sortBys.length; i++) {
        if (sortBys[i] != this.sortHistory[i]) {
          return false;
        }
      }
      return true;
    };
    function getItemSorter(sortBys, sortAsc) {
      return function sorter(itemA, itemB) {
        for (var i = 0; i < sortBys.length; i++) {
          var sortBy = sortBys[i];
          var a = itemA.sortData[sortBy];
          var b = itemB.sortData[sortBy];
          if (a > b || a < b) {
            var isAscending =
              sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
            var direction = isAscending ? 1 : -1;
            return (a > b ? 1 : -1) * direction;
          }
        }
        return 0;
      };
    }
    proto._mode = function () {
      var layoutMode = this.options.layoutMode;
      var mode = this.modes[layoutMode];
      if (!mode) {
        throw new Error("No layout mode: " + layoutMode);
      }
      mode.options = this.options[layoutMode];
      return mode;
    };
    proto._resetLayout = function () {
      Outlayer.prototype._resetLayout.call(this);
      this._mode()._resetLayout();
    };
    proto._getItemLayoutPosition = function (item) {
      return this._mode()._getItemLayoutPosition(item);
    };
    proto._manageStamp = function (stamp) {
      this._mode()._manageStamp(stamp);
    };
    proto._getContainerSize = function () {
      return this._mode()._getContainerSize();
    };
    proto.needsResizeLayout = function () {
      return this._mode().needsResizeLayout();
    };
    proto.appended = function (elems) {
      var items = this.addItems(elems);
      if (!items.length) {
        return;
      }
      var filteredItems = this._filterRevealAdded(items);
      this.filteredItems = this.filteredItems.concat(filteredItems);
    };
    proto.prepended = function (elems) {
      var items = this._itemize(elems);
      if (!items.length) {
        return;
      }
      this._resetLayout();
      this._manageStamps();
      var filteredItems = this._filterRevealAdded(items);
      this.layoutItems(this.filteredItems);
      this.filteredItems = filteredItems.concat(this.filteredItems);
      this.items = items.concat(this.items);
    };
    proto._filterRevealAdded = function (items) {
      var filtered = this._filter(items);
      this.hide(filtered.needHide);
      this.reveal(filtered.matches);
      this.layoutItems(filtered.matches, true);
      return filtered.matches;
    };
    proto.insert = function (elems) {
      var items = this.addItems(elems);
      if (!items.length) {
        return;
      }
      var i, item;
      var len = items.length;
      for (i = 0; i < len; i++) {
        item = items[i];
        this.element.appendChild(item.element);
      }
      var filteredInsertItems = this._filter(items).matches;
      for (i = 0; i < len; i++) {
        items[i].isLayoutInstant = true;
      }
      this.arrange();
      for (i = 0; i < len; i++) {
        delete items[i].isLayoutInstant;
      }
      this.reveal(filteredInsertItems);
    };
    var _remove = proto.remove;
    proto.remove = function (elems) {
      elems = utils.makeArray(elems);
      var removeItems = this.getItems(elems);
      _remove.call(this, elems);
      var len = removeItems && removeItems.length;
      for (var i = 0; len && i < len; i++) {
        var item = removeItems[i];
        utils.removeFrom(this.filteredItems, item);
      }
    };
    proto.shuffle = function () {
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        item.sortData.random = Math.random();
      }
      this.options.sortBy = "random";
      this._sort();
      this._layout();
    };
    proto._noTransition = function (fn, args) {
      var transitionDuration = this.options.transitionDuration;
      this.options.transitionDuration = 0;
      var returnValue = fn.apply(this, args);
      this.options.transitionDuration = transitionDuration;
      return returnValue;
    };
    proto.getFilteredItemElements = function () {
      return this.filteredItems.map(function (item) {
        return item.element;
      });
    };
    return Isotope;
  }
);
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global = global || self), (global.Swiper = factory()));
})(this, function () {
  "use strict";
  var doc =
    typeof document === "undefined"
      ? {
          body: {},
          addEventListener: function addEventListener() {},
          removeEventListener: function removeEventListener() {},
          activeElement: { blur: function blur() {}, nodeName: "" },
          querySelector: function querySelector() {
            return null;
          },
          querySelectorAll: function querySelectorAll() {
            return [];
          },
          getElementById: function getElementById() {
            return null;
          },
          createEvent: function createEvent() {
            return { initEvent: function initEvent() {} };
          },
          createElement: function createElement() {
            return {
              children: [],
              childNodes: [],
              style: {},
              setAttribute: function setAttribute() {},
              getElementsByTagName: function getElementsByTagName() {
                return [];
              },
            };
          },
          location: { hash: "" },
        }
      : document;
  var win =
    typeof window === "undefined"
      ? {
          document: doc,
          navigator: { userAgent: "" },
          location: {},
          history: {},
          CustomEvent: function CustomEvent() {
            return this;
          },
          addEventListener: function addEventListener() {},
          removeEventListener: function removeEventListener() {},
          getComputedStyle: function getComputedStyle() {
            return {
              getPropertyValue: function getPropertyValue() {
                return "";
              },
            };
          },
          Image: function Image() {},
          Date: function Date() {},
          screen: {},
          setTimeout: function setTimeout() {},
          clearTimeout: function clearTimeout() {},
        }
      : window;
  var Dom7 = function Dom7(arr) {
    var self = this;
    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    return this;
  };
  function $(selector, context) {
    var arr = [];
    var i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
      if (typeof selector === "string") {
        var els;
        var tempParent;
        var html = selector.trim();
        if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
          var toCreate = "div";
          if (html.indexOf("<li") === 0) {
            toCreate = "ul";
          }
          if (html.indexOf("<tr") === 0) {
            toCreate = "tbody";
          }
          if (html.indexOf("<td") === 0 || html.indexOf("<th") === 0) {
            toCreate = "tr";
          }
          if (html.indexOf("<tbody") === 0) {
            toCreate = "table";
          }
          if (html.indexOf("<option") === 0) {
            toCreate = "select";
          }
          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === "#" && !selector.match(/[ .<>:~]/)) {
            els = [doc.getElementById(selector.trim().split("#")[1])];
          } else {
            els = (context || doc).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) {
              arr.push(els[i]);
            }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }
  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;
  function unique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  function addClass(className) {
    if (typeof className === "undefined") {
      return this;
    }
    var classes = className.split(" ");
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (
          typeof this[j] !== "undefined" &&
          typeof this[j].classList !== "undefined"
        ) {
          this[j].classList.add(classes[i]);
        }
      }
    }
    return this;
  }
  function removeClass(className) {
    var classes = className.split(" ");
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (
          typeof this[j] !== "undefined" &&
          typeof this[j].classList !== "undefined"
        ) {
          this[j].classList.remove(classes[i]);
        }
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) {
      return false;
    }
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    var classes = className.split(" ");
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (
          typeof this[j] !== "undefined" &&
          typeof this[j].classList !== "undefined"
        ) {
          this[j].classList.toggle(classes[i]);
        }
      }
    }
    return this;
  }
  function attr(attrs, value) {
    var arguments$1 = arguments;
    if (arguments.length === 1 && typeof attrs === "string") {
      if (this[0]) {
        return this[0].getAttribute(attrs);
      }
      return undefined;
    }
    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        this[i].setAttribute(attrs, value);
      } else {
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  function data(key, value) {
    var el;
    if (typeof value === "undefined") {
      el = this[0];
      if (el) {
        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
          return el.dom7ElementDataStorage[key];
        }
        var dataKey = el.getAttribute("data-" + key);
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }
    for (var i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) {
        el.dom7ElementDataStorage = {};
      }
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    if (typeof duration !== "string") {
      duration = duration + "ms";
    }
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  function on() {
    var assign;
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === "function") {
      (assign = args),
        (eventType = assign[0]),
        (listener = assign[1]),
        (capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) {
      capture = false;
    }
    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) {
        return;
      }
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) {
        listener.apply(target, eventData);
      } else {
        var parents = $(target).parents();
        for (var k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) {
            listener.apply(parents[k], eventData);
          }
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(" ");
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) {
            el.dom7Listeners = {};
          }
          if (!el.dom7Listeners[event]) {
            el.dom7Listeners[event] = [];
          }
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];
          if (!el.dom7LiveListeners) {
            el.dom7LiveListeners = {};
          }
          if (!el.dom7LiveListeners[event$1]) {
            el.dom7LiveListeners[event$1] = [];
          }
          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    var assign;
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === "function") {
      (assign = args),
        (eventType = assign[0]),
        (listener = assign[1]),
        (capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) {
      capture = false;
    }
    var events = eventType.split(" ");
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = void 0;
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (
              listener &&
              handler.listener &&
              handler.listener.dom7proxy &&
              handler.listener.dom7proxy === listener
            ) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    var events = args[0].split(" ");
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var evt = void 0;
        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
        } catch (e) {
          evt = doc.createEvent("Event");
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var events = ["webkitTransitionEnd", "transitionend"];
    var dom = this;
    var i;
    function fireCallBack(e) {
      if (e.target !== this) {
        return;
      }
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var styles = this.styles();
        return (
          this[0].offsetWidth +
          parseFloat(styles.getPropertyValue("margin-right")) +
          parseFloat(styles.getPropertyValue("margin-left"))
        );
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var styles = this.styles();
        return (
          this[0].offsetHeight +
          parseFloat(styles.getPropertyValue("margin-top")) +
          parseFloat(styles.getPropertyValue("margin-bottom"))
        );
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft,
      };
    }
    return null;
  }
  function styles() {
    if (this[0]) {
      return win.getComputedStyle(this[0], null);
    }
    return {};
  }
  function css(props, value) {
    var i;
    if (arguments.length === 1) {
      if (typeof props === "string") {
        if (this[0]) {
          return win.getComputedStyle(this[0], null).getPropertyValue(props);
        }
      } else {
        for (i = 0; i < this.length; i += 1) {
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === "string") {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  function each(callback) {
    if (!callback) {
      return this;
    }
    for (var i = 0; i < this.length; i += 1) {
      if (callback.call(this[i], i, this[i]) === false) {
        return this;
      }
    }
    return this;
  }
  function html(html) {
    if (typeof html === "undefined") {
      return this[0] ? this[0].innerHTML : undefined;
    }
    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  function text(text) {
    if (typeof text === "undefined") {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }
    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === "undefined") {
      return false;
    }
    if (typeof selector === "string") {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      }
      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) {
          return true;
        }
      }
      return false;
    } else if (selector === doc) {
      return el === doc;
    } else if (selector === win) {
      return el === win;
    }
    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) {
          return true;
        }
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) {
          i += 1;
        }
      }
      return i;
    }
    return undefined;
  }
  function eq(index) {
    if (typeof index === "undefined") {
      return this;
    }
    var length = this.length;
    var returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) {
        return new Dom7([]);
      }
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append() {
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    var newChild;
    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === "string") {
          var tempDiv = doc.createElement("div");
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }
    return this;
  }
  function prepend(newChild) {
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === "string") {
        var tempDiv = doc.createElement("div");
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (
          this[0].nextElementSibling &&
          $(this[0].nextElementSibling).is(selector)
        ) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }
      if (this[0].nextElementSibling) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) {
      return new Dom7([]);
    }
    while (el.nextElementSibling) {
      var next = el.nextElementSibling;
      if (selector) {
        if ($(next).is(selector)) {
          nextEls.push(next);
        }
      } else {
        nextEls.push(next);
      }
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (
          el.previousElementSibling &&
          $(el.previousElementSibling).is(selector)
        ) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }
      if (el.previousElementSibling) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) {
      return new Dom7([]);
    }
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling;
      if (selector) {
        if ($(prev).is(selector)) {
          prevEls.push(prev);
        }
      } else {
        prevEls.push(prev);
      }
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function parent(selector) {
    var parents = [];
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) {
            parents.push(this[i].parentNode);
          }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $(unique(parents));
  }
  function parents(selector) {
    var parents = [];
    for (var i = 0; i < this.length; i += 1) {
      var parent = this[i].parentNode;
      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) {
            parents.push(parent);
          }
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(unique(parents));
  }
  function closest(selector) {
    var closest = this;
    if (typeof selector === "undefined") {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    var children = [];
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].childNodes;
      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) {
            children.push(childNodes[j]);
          }
        } else if (
          childNodes[j].nodeType === 1 &&
          $(childNodes[j]).is(selector)
        ) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) {
        this[i].parentNode.removeChild(this[i]);
      }
    }
    return this;
  }
  function add() {
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    var dom = this;
    var i;
    var j;
    for (i = 0; i < args.length; i += 1) {
      var toAdd = $(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }
  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    remove: remove,
    add: add,
    styles: styles,
  };
  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = Methods[methodName];
  });
  var Utils = {
    deleteProps: function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {}
        try {
          delete object[key];
        } catch (e) {}
      });
    },
    nextTick: function nextTick(callback, delay) {
      if (delay === void 0) delay = 0;
      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if (axis === void 0) axis = "x";
      var matrix;
      var curTransform;
      var transformMatrix;
      var curStyle = win.getComputedStyle(el, null);
      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(",").length > 6) {
          curTransform = curTransform
            .split(", ")
            .map(function (a) {
              return a.replace(",", ".");
            })
            .join(", ");
        }
        transformMatrix = new win.WebKitCSSMatrix(
          curTransform === "none" ? "" : curTransform
        );
      } else {
        transformMatrix =
          curStyle.MozTransform ||
          curStyle.OTransform ||
          curStyle.MsTransform ||
          curStyle.msTransform ||
          curStyle.transform ||
          curStyle
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,");
        matrix = transformMatrix.toString().split(",");
      }
      if (axis === "x") {
        if (win.WebKitCSSMatrix) {
          curTransform = transformMatrix.m41;
        } else if (matrix.length === 16) {
          curTransform = parseFloat(matrix[12]);
        } else {
          curTransform = parseFloat(matrix[4]);
        }
      }
      if (axis === "y") {
        if (win.WebKitCSSMatrix) {
          curTransform = transformMatrix.m42;
        } else if (matrix.length === 16) {
          curTransform = parseFloat(matrix[13]);
        } else {
          curTransform = parseFloat(matrix[5]);
        }
      }
      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || win.location.href;
      var i;
      var params;
      var param;
      var length;
      if (typeof urlToParse === "string" && urlToParse.length) {
        urlToParse =
          urlToParse.indexOf("?") > -1 ? urlToParse.replace(/\S*\?/, "") : "";
        params = urlToParse.split("&").filter(function (paramsPart) {
          return paramsPart !== "";
        });
        length = params.length;
        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, "").split("=");
          query[decodeURIComponent(param[0])] =
            typeof param[1] === "undefined"
              ? undefined
              : decodeURIComponent(param[1]) || "";
        }
      }
      return query;
    },
    isObject: function isObject(o) {
      return (
        typeof o === "object" &&
        o !== null &&
        o.constructor &&
        o.constructor === Object
      );
    },
    extend: function extend() {
      var args = [],
        len$1 = arguments.length;
      while (len$1--) args[len$1] = arguments[len$1];
      var to = Object(args[0]);
      for (var i = 1; i < args.length; i += 1) {
        var nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));
          for (
            var nextIndex = 0, len = keysArray.length;
            nextIndex < len;
            nextIndex += 1
          ) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (
                Utils.isObject(to[nextKey]) &&
                Utils.isObject(nextSource[nextKey])
              ) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (
                !Utils.isObject(to[nextKey]) &&
                Utils.isObject(nextSource[nextKey])
              ) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };
  var Support = (function Support() {
    var testDiv = doc.createElement("div");
    return {
      touch:
        (win.Modernizr && win.Modernizr.touch === true) ||
        (function checkTouch() {
          return !!(
            win.navigator.maxTouchPoints > 0 ||
            "ontouchstart" in win ||
            (win.DocumentTouch && doc instanceof win.DocumentTouch)
          );
        })(),
      pointerEvents: !!(
        win.navigator.pointerEnabled ||
        win.PointerEvent ||
        ("maxTouchPoints" in win.navigator && win.navigator.maxTouchPoints > 0)
      ),
      prefixedPointerEvents: !!win.navigator.msPointerEnabled,
      transition: (function checkTransition() {
        var style = testDiv.style;
        return (
          "transition" in style ||
          "webkitTransition" in style ||
          "MozTransition" in style
        );
      })(),
      transforms3d:
        (win.Modernizr && win.Modernizr.csstransforms3d === true) ||
        (function checkTransforms3d() {
          var style = testDiv.style;
          return (
            "webkitPerspective" in style ||
            "MozPerspective" in style ||
            "OPerspective" in style ||
            "MsPerspective" in style ||
            "perspective" in style
          );
        })(),
      flexbox: (function checkFlexbox() {
        var style = testDiv.style;
        var styles =
          "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
            " "
          );
        for (var i = 0; i < styles.length; i += 1) {
          if (styles[i] in style) {
            return true;
          }
        }
        return false;
      })(),
      observer: (function checkObserver() {
        return "MutationObserver" in win || "WebkitMutationObserver" in win;
      })(),
      passiveListener: (function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, "passive", {
            get: function get() {
              supportsPassive = true;
            },
          });
          win.addEventListener("testPassiveListener", null, opts);
        } catch (e) {}
        return supportsPassive;
      })(),
      gestures: (function checkGestures() {
        return "ongesturestart" in win;
      })(),
    };
  })();
  var Browser = (function Browser() {
    function isSafari() {
      var ua = win.navigator.userAgent.toLowerCase();
      return (
        ua.indexOf("safari") >= 0 &&
        ua.indexOf("chrome") < 0 &&
        ua.indexOf("android") < 0
      );
    }
    return {
      isIE:
        !!win.navigator.userAgent.match(/Trident/g) ||
        !!win.navigator.userAgent.match(/MSIE/g),
      isEdge: !!win.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        win.navigator.userAgent
      ),
    };
  })();
  var SwiperClass = function SwiperClass(params) {
    if (params === void 0) params = {};
    var self = this;
    self.params = params;
    self.eventsListeners = {};
    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };
  var staticAccessors = { components: { configurable: true } };
  SwiperClass.prototype.on = function on(events, handler, priority) {
    var self = this;
    if (typeof handler !== "function") {
      return self;
    }
    var method = priority ? "unshift" : "push";
    events.split(" ").forEach(function (event) {
      if (!self.eventsListeners[event]) {
        self.eventsListeners[event] = [];
      }
      self.eventsListeners[event][method](handler);
    });
    return self;
  };
  SwiperClass.prototype.once = function once(events, handler, priority) {
    var self = this;
    if (typeof handler !== "function") {
      return self;
    }
    function onceHandler() {
      var args = [],
        len = arguments.length;
      while (len--) args[len] = arguments[len];
      handler.apply(self, args);
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  };
  SwiperClass.prototype.off = function off(events, handler) {
    var self = this;
    if (!self.eventsListeners) {
      return self;
    }
    events.split(" ").forEach(function (event) {
      if (typeof handler === "undefined") {
        self.eventsListeners[event] = [];
      } else if (
        self.eventsListeners[event] &&
        self.eventsListeners[event].length
      ) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (
            eventHandler === handler ||
            (eventHandler.f7proxy && eventHandler.f7proxy === handler)
          ) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };
  SwiperClass.prototype.emit = function emit() {
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    var self = this;
    if (!self.eventsListeners) {
      return self;
    }
    var events;
    var data;
    var context;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    var eventsArray = Array.isArray(events) ? events : events.split(" ");
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };
  SwiperClass.prototype.useModulesParams = function useModulesParams(
    instanceParams
  ) {
    var instance = this;
    if (!instance.modules) {
      return;
    }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };
  SwiperClass.prototype.useModules = function useModules(modulesParams) {
    if (modulesParams === void 0) modulesParams = {};
    var instance = this;
    if (!instance.modules) {
      return;
    }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {};
      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          var moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === "function") {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };
  staticAccessors.components.set = function (components) {
    var Class = this;
    if (!Class.use) {
      return;
    }
    Class.use(components);
  };
  SwiperClass.installModule = function installModule(module) {
    var params = [],
      len = arguments.length - 1;
    while (len-- > 0) params[len] = arguments[len + 1];
    var Class = this;
    if (!Class.prototype.modules) {
      Class.prototype.modules = {};
    }
    var name =
      module.name ||
      Object.keys(Class.prototype.modules).length + "_" + Utils.now();
    Class.prototype.modules[name] = module;
    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    }
    if (module["static"]) {
      Object.keys(module["static"]).forEach(function (key) {
        Class[key] = module["static"][key];
      });
    }
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  };
  SwiperClass.use = function use(module) {
    var params = [],
      len = arguments.length - 1;
    while (len-- > 0) params[len] = arguments[len + 1];
    var Class = this;
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Class.installModule(m);
      });
      return Class;
    }
    return Class.installModule.apply(Class, [module].concat(params));
  };
  Object.defineProperties(SwiperClass, staticAccessors);
  function updateSize() {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== "undefined") {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== "undefined") {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if (
      (width === 0 && swiper.isHorizontal()) ||
      (height === 0 && swiper.isVertical())
    ) {
      return;
    }
    width =
      width -
      parseInt($el.css("padding-left"), 10) -
      parseInt($el.css("padding-right"), 10);
    height =
      height -
      parseInt($el.css("padding-top"), 10) -
      parseInt($el.css("padding-bottom"), 10);
    Utils.extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height,
    });
  }
  function updateSlides() {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var swiperSize = swiper.size;
    var rtl = swiper.rtlTranslate;
    var wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual
      ? swiper.virtual.slides.length
      : swiper.slides.length;
    var slides = $wrapperEl.children("." + swiper.params.slideClass);
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];
    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;
    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween =
        (parseFloat(spaceBetween.replace("%", "")) / 100) * swiperSize;
    }
    swiper.virtualSize = -spaceBetween;
    if (rtl) {
      slides.css({ marginLeft: "", marginTop: "" });
    } else {
      slides.css({ marginRight: "", marginBottom: "" });
    }
    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (
        Math.floor(slidesLength / params.slidesPerColumn) ===
        slidesLength / swiper.params.slidesPerColumn
      ) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows =
          Math.ceil(slidesLength / params.slidesPerColumn) *
          params.slidesPerColumn;
      }
      if (
        params.slidesPerView !== "auto" &&
        params.slidesPerColumnFill === "row"
      ) {
        slidesNumberEvenToRows = Math.max(
          slidesNumberEvenToRows,
          params.slidesPerView * params.slidesPerColumn
        );
      }
    }
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        var newSlideOrderIndex = void 0;
        var column = void 0;
        var row = void 0;
        if (params.slidesPerColumnFill === "column") {
          column = Math.floor(i / slidesPerColumn);
          row = i - column * slidesPerColumn;
          if (
            column > numFullColumns ||
            (column === numFullColumns && row === slidesPerColumn - 1)
          ) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
          newSlideOrderIndex =
            column + (row * slidesNumberEvenToRows) / slidesPerColumn;
          slide.css({
            "-webkit-box-ordinal-group": newSlideOrderIndex,
            "-moz-box-ordinal-group": newSlideOrderIndex,
            "-ms-flex-order": newSlideOrderIndex,
            "-webkit-order": newSlideOrderIndex,
            order: newSlideOrderIndex,
          });
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }
        slide
          .css(
            "margin-" + (swiper.isHorizontal() ? "top" : "left"),
            row !== 0 && params.spaceBetween && params.spaceBetween + "px"
          )
          .attr("data-swiper-column", column)
          .attr("data-swiper-row", row);
      }
      if (slide.css("display") === "none") {
        continue;
      }
      if (params.slidesPerView === "auto") {
        var slideStyles = win.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide.outerWidth(true)
            : slide.outerHeight(true);
        } else {
          if (swiper.isHorizontal()) {
            var width = parseFloat(slideStyles.getPropertyValue("width"));
            var paddingLeft = parseFloat(
              slideStyles.getPropertyValue("padding-left")
            );
            var paddingRight = parseFloat(
              slideStyles.getPropertyValue("padding-right")
            );
            var marginLeft = parseFloat(
              slideStyles.getPropertyValue("margin-left")
            );
            var marginRight = parseFloat(
              slideStyles.getPropertyValue("margin-right")
            );
            var boxSizing = slideStyles.getPropertyValue("box-sizing");
            if (boxSizing && boxSizing === "border-box") {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize =
                width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            var height = parseFloat(slideStyles.getPropertyValue("height"));
            var paddingTop = parseFloat(
              slideStyles.getPropertyValue("padding-top")
            );
            var paddingBottom = parseFloat(
              slideStyles.getPropertyValue("padding-bottom")
            );
            var marginTop = parseFloat(
              slideStyles.getPropertyValue("margin-top")
            );
            var marginBottom = parseFloat(
              slideStyles.getPropertyValue("margin-bottom")
            );
            var boxSizing$1 = slideStyles.getPropertyValue("box-sizing");
            if (boxSizing$1 && boxSizing$1 === "border-box") {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize =
                height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) {
          slideSize = Math.floor(slideSize);
        }
      } else {
        slideSize =
          (swiperSize - (params.slidesPerView - 1) * spaceBetween) /
          params.slidesPerView;
        if (params.roundLengths) {
          slideSize = Math.floor(slideSize);
        }
        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition =
          slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) {
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        }
        if (i === 0) {
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        }
        if (Math.abs(slidePosition) < 1 / 1e3) {
          slidePosition = 0;
        }
        if (params.roundLengths) {
          slidePosition = Math.floor(slidePosition);
        }
        if (index % params.slidesPerGroup === 0) {
          snapGrid.push(slidePosition);
        }
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) {
          slidePosition = Math.floor(slidePosition);
        }
        if (index % params.slidesPerGroup === 0) {
          snapGrid.push(slidePosition);
        }
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;
    if (
      rtl &&
      wrongRTL &&
      (params.effect === "slide" || params.effect === "coverflow")
    ) {
      $wrapperEl.css({
        width: swiper.virtualSize + params.spaceBetween + "px",
      });
    }
    if (!Support.flexbox || params.setWrapperSize) {
      if (swiper.isHorizontal()) {
        $wrapperEl.css({
          width: swiper.virtualSize + params.spaceBetween + "px",
        });
      } else {
        $wrapperEl.css({
          height: swiper.virtualSize + params.spaceBetween + "px",
        });
      }
    }
    if (params.slidesPerColumn > 1) {
      swiper.virtualSize =
        (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize =
        Math.ceil(swiper.virtualSize / params.slidesPerColumn) -
        params.spaceBetween;
      if (swiper.isHorizontal()) {
        $wrapperEl.css({
          width: swiper.virtualSize + params.spaceBetween + "px",
        });
      } else {
        $wrapperEl.css({
          height: swiper.virtualSize + params.spaceBetween + "px",
        });
      }
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          var slidesGridItem = snapGrid[i$1];
          if (params.roundLengths) {
            slidesGridItem = Math.floor(slidesGridItem);
          }
          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) {
            newSlidesGrid.push(slidesGridItem);
          }
        }
        snapGrid = newSlidesGrid;
      }
    }
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        var slidesGridItem$1 = snapGrid[i$2];
        if (params.roundLengths) {
          slidesGridItem$1 = Math.floor(slidesGridItem$1);
        }
        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem$1);
        }
      }
      snapGrid = newSlidesGrid;
      if (
        Math.floor(swiper.virtualSize - swiperSize) -
          Math.floor(snapGrid[snapGrid.length - 1]) >
        1
      ) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) {
      snapGrid = [0];
    }
    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) {
          slides.css({ marginLeft: spaceBetween + "px" });
        } else {
          slides.css({ marginRight: spaceBetween + "px" });
        }
      } else {
        slides.css({ marginBottom: spaceBetween + "px" });
      }
    }
    if (params.centerInsufficientSlides) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize +=
          slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }
  function updateAutoHeight(speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    if (
      swiper.params.slidesPerView !== "auto" &&
      swiper.params.slidesPerView > 1
    ) {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) {
          break;
        }
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight) {
      swiper.$wrapperEl.css("height", newHeight + "px");
    }
  }
  function updateSlidesOffset() {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal()
        ? slides[i].offsetLeft
        : slides[i].offsetTop;
    }
  }
  function updateSlidesProgress(translate) {
    if (translate === void 0) translate = (this && this.translate) || 0;
    var swiper = this;
    var params = swiper.params;
    var slides = swiper.slides;
    var rtl = swiper.rtlTranslate;
    if (slides.length === 0) {
      return;
    }
    if (typeof slides[0].swiperSlideOffset === "undefined") {
      swiper.updateSlidesOffset();
    }
    var offsetCenter = -translate;
    if (rtl) {
      offsetCenter = translate;
    }
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress =
        (offsetCenter +
          (params.centeredSlides ? swiper.minTranslate() : 0) -
          slide.swiperSlideOffset) /
        (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible =
          (slideBefore >= 0 && slideBefore < swiper.size) ||
          (slideAfter > 0 && slideAfter <= swiper.size) ||
          (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
  }
  function updateProgress(translate) {
    if (translate === void 0) translate = (this && this.translate) || 0;
    var swiper = this;
    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress;
    var isBeginning = swiper.isBeginning;
    var isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd,
    });
    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesProgress(translate);
    }
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }
  function updateSlidesClasses() {
    var swiper = this;
    var slides = swiper.slides;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(
      params.slideActiveClass +
        " " +
        params.slideNextClass +
        " " +
        params.slidePrevClass +
        " " +
        params.slideDuplicateActiveClass +
        " " +
        params.slideDuplicateNextClass +
        " " +
        params.slideDuplicatePrevClass
    );
    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(
        "." +
          params.slideClass +
          '[data-swiper-slide-index="' +
          activeIndex +
          '"]'
      );
    } else {
      activeSlide = slides.eq(activeIndex);
    }
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              ":not(." +
              params.slideDuplicateClass +
              ')[data-swiper-slide-index="' +
              realIndex +
              '"]'
          )
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              "." +
              params.slideDuplicateClass +
              '[data-swiper-slide-index="' +
              realIndex +
              '"]'
          )
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    var nextSlide = activeSlide
      .nextAll("." + params.slideClass)
      .eq(0)
      .addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    var prevSlide = activeSlide
      .prevAll("." + params.slideClass)
      .eq(0)
      .addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              ":not(." +
              params.slideDuplicateClass +
              ')[data-swiper-slide-index="' +
              nextSlide.attr("data-swiper-slide-index") +
              '"]'
          )
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              "." +
              params.slideDuplicateClass +
              '[data-swiper-slide-index="' +
              nextSlide.attr("data-swiper-slide-index") +
              '"]'
          )
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              ":not(." +
              params.slideDuplicateClass +
              ')[data-swiper-slide-index="' +
              prevSlide.attr("data-swiper-slide-index") +
              '"]'
          )
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              "." +
              params.slideDuplicateClass +
              '[data-swiper-slide-index="' +
              prevSlide.attr("data-swiper-slide-index") +
              '"]'
          )
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }
  function updateActiveIndex(newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var params = swiper.params;
    var previousIndex = swiper.activeIndex;
    var previousRealIndex = swiper.realIndex;
    var previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === "undefined") {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (
            translate >= slidesGrid[i] &&
            translate <
              slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2
          ) {
            activeIndex = i;
          } else if (
            translate >= slidesGrid[i] &&
            translate < slidesGrid[i + 1]
          ) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined") {
          activeIndex = 0;
        }
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) {
      snapIndex = snapGrid.length - 1;
    }
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    var realIndex = parseInt(
      swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") ||
        activeIndex,
      10
    );
    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    swiper.emit("slideChange");
  }
  function updateClickedSlide(e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest("." + params.slideClass)[0];
    var slideFound = false;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
        }
      }
    }
    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(
          $(slide).attr("data-swiper-slide-index"),
          10
        );
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (
      params.slideToClickedSlide &&
      swiper.clickedIndex !== undefined &&
      swiper.clickedIndex !== swiper.activeIndex
    ) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };
  function getTranslate(axis) {
    if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
    var swiper = this;
    var params = swiper.params;
    var rtl = swiper.rtlTranslate;
    var translate = swiper.translate;
    var $wrapperEl = swiper.$wrapperEl;
    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) {
      currentTranslate = -currentTranslate;
    }
    return currentTranslate || 0;
  }
  function setTranslate(translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    if (!params.virtualTranslate) {
      if (Support.transforms3d) {
        $wrapperEl.transform(
          "translate3d(" + x + "px, " + y + "px, " + z + "px)"
        );
      } else {
        $wrapperEl.transform("translate(" + x + "px, " + y + "px)");
      }
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
  };
  function setTransition(duration, byController) {
    var swiper = this;
    swiper.$wrapperEl.transition(duration);
    swiper.emit("setTransition", duration, byController);
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var params = swiper.params;
    var previousIndex = swiper.previousIndex;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) {
        dir = "next";
      } else if (activeIndex < previousIndex) {
        dir = "prev";
      } else {
        dir = "reset";
      }
    }
    swiper.emit("transitionStart");
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit("slideResetTransitionStart");
        return;
      }
      swiper.emit("slideChangeTransitionStart");
      if (dir === "next") {
        swiper.emit("slideNextTransitionStart");
      } else {
        swiper.emit("slidePrevTransitionStart");
      }
    }
  }
  function transitionEnd$1(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var previousIndex = swiper.previousIndex;
    swiper.animating = false;
    swiper.setTransition(0);
    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) {
        dir = "next";
      } else if (activeIndex < previousIndex) {
        dir = "prev";
      } else {
        dir = "reset";
      }
    }
    swiper.emit("transitionEnd");
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit("slideResetTransitionEnd");
        return;
      }
      swiper.emit("slideChangeTransitionEnd");
      if (dir === "next") {
        swiper.emit("slideNextTransitionEnd");
      } else {
        swiper.emit("slidePrevTransitionEnd");
      }
    }
  }
  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1,
  };
  function slideTo(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) {
      slideIndex = 0;
    }
    var params = swiper.params;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var previousIndex = swiper.previousIndex;
    var activeIndex = swiper.activeIndex;
    var rtl = swiper.rtlTranslate;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) {
      snapIndex = snapGrid.length - 1;
    }
    if (
      (activeIndex || params.initialSlide || 0) === (previousIndex || 0) &&
      runCallbacks
    ) {
      swiper.emit("beforeSlideChangeStart");
    }
    var translate = -snapGrid[snapIndex];
    swiper.updateProgress(translate);
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (
        !swiper.allowSlideNext &&
        translate < swiper.translate &&
        translate < swiper.minTranslate()
      ) {
        return false;
      }
      if (
        !swiper.allowSlidePrev &&
        translate > swiper.translate &&
        translate > swiper.maxTranslate()
      ) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    var direction;
    if (slideIndex > activeIndex) {
      direction = "next";
    } else if (slideIndex < activeIndex) {
      direction = "prev";
    } else {
      direction = "reset";
    }
    if (
      (rtl && -translate === swiper.translate) ||
      (!rtl && translate === swiper.translate)
    ) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (speed === 0 || !Support.transition) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) {
              return;
            }
            if (e.target !== this) {
              return;
            }
            swiper.$wrapperEl[0].removeEventListener(
              "transitionend",
              swiper.onSlideToWrapperTransitionEnd
            );
            swiper.$wrapperEl[0].removeEventListener(
              "webkitTransitionEnd",
              swiper.onSlideToWrapperTransitionEnd
            );
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener(
          "transitionend",
          swiper.onSlideToWrapperTransitionEnd
        );
        swiper.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          swiper.onSlideToWrapperTransitionEnd
        );
      }
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    if (params.loop) {
      if (animating) {
        return false;
      }
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      return swiper.slideTo(
        swiper.activeIndex + params.slidesPerGroup,
        speed,
        runCallbacks,
        internal
      );
    }
    return swiper.slideTo(
      swiper.activeIndex + params.slidesPerGroup,
      speed,
      runCallbacks,
      internal
    );
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var rtlTranslate = swiper.rtlTranslate;
    if (params.loop) {
      if (animating) {
        return false;
      }
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) {
        return -Math.floor(Math.abs(val));
      }
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) {
      return normalize(val);
    });
    var normalizedSlidesGrid = slidesGrid.map(function (val) {
      return normalize(val);
    });
    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap =
      snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    var prevIndex;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) {
        prevIndex = swiper.activeIndex - 1;
      }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var index = swiper.activeIndex;
    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);
    if (snapIndex < swiper.snapGrid.length - 1) {
      var translate = swiper.rtlTranslate
        ? swiper.translate
        : -swiper.translate;
      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate - currentSnap > (nextSnap - currentSnap) / 2) {
        index = swiper.params.slidesPerGroup;
      }
    }
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesPerView =
      params.slidesPerView === "auto"
        ? swiper.slidesPerViewDynamic()
        : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating) {
        return;
      }
      realIndex = parseInt(
        $(swiper.clickedSlide).attr("data-swiper-slide-index"),
        10
      );
      if (params.centeredSlides) {
        if (
          slideToIndex < swiper.loopedSlides - slidesPerView / 2 ||
          slideToIndex >
            swiper.slides.length - swiper.loopedSlides + slidesPerView / 2
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(
              "." +
                params.slideClass +
                '[data-swiper-slide-index="' +
                realIndex +
                '"]:not(.' +
                params.slideDuplicateClass +
                ")"
            )
            .eq(0)
            .index();
          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(
            "." +
              params.slideClass +
              '[data-swiper-slide-index="' +
              realIndex +
              '"]:not(.' +
              params.slideDuplicateClass +
              ")"
          )
          .eq(0)
          .index();
        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };
  function loopCreate() {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    $wrapperEl
      .children("." + params.slideClass + "." + params.slideDuplicateClass)
      .remove();
    var slides = $wrapperEl.children("." + params.slideClass);
    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum =
        params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(doc.createElement("div")).addClass(
            params.slideClass + " " + params.slideBlankClass
          );
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children("." + params.slideClass);
      }
    }
    if (params.slidesPerView === "auto" && !params.loopedSlides) {
      params.loopedSlides = slides.length;
    }
    swiper.loopedSlides = parseInt(
      params.loopedSlides || params.slidesPerView,
      10
    );
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }
    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
      var slide = $(el);
      if (index < swiper.loopedSlides) {
        appendSlides.push(el);
      }
      if (
        index < slides.length &&
        index >= slides.length - swiper.loopedSlides
      ) {
        prependSlides.push(el);
      }
      slide.attr("data-swiper-slide-index", index);
    });
    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append(
        $(appendSlides[i$1].cloneNode(true)).addClass(
          params.slideDuplicateClass
        )
      );
    }
    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend(
        $(prependSlides[i$2].cloneNode(true)).addClass(
          params.slideDuplicateClass
        )
      );
    }
  }
  function loopFix() {
    var swiper = this;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var slides = swiper.slides;
    var loopedSlides = swiper.loopedSlides;
    var allowSlidePrev = swiper.allowSlidePrev;
    var allowSlideNext = swiper.allowSlideNext;
    var snapGrid = swiper.snapGrid;
    var rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();
    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate(
          (rtl ? -swiper.translate : swiper.translate) - diff
        );
      }
    } else if (
      (params.slidesPerView === "auto" && activeIndex >= loopedSlides * 2) ||
      activeIndex >= slides.length - loopedSlides
    ) {
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate(
          (rtl ? -swiper.translate : swiper.translate) - diff
        );
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  }
  function loopDestroy() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl
      .children(
        "." +
          params.slideClass +
          "." +
          params.slideDuplicateClass +
          ",." +
          params.slideClass +
          "." +
          params.slideBlankClass
      )
      .remove();
    slides.removeAttr("data-swiper-slide-index");
  }
  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
  };
  function setGrabCursor(moving) {
    var swiper = this;
    if (
      Support.touch ||
      !swiper.params.simulateTouch ||
      (swiper.params.watchOverflow && swiper.isLocked)
    ) {
      return;
    }
    var el = swiper.el;
    el.style.cursor = "move";
    el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
    el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
    el.style.cursor = moving ? "grabbing" : "grab";
  }
  function unsetGrabCursor() {
    var swiper = this;
    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) {
      return;
    }
    swiper.el.style.cursor = "";
  }
  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
  };
  function appendSlide(slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === "object" && "length" in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) {
          $wrapperEl.append(slides[i]);
        }
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }
  function prependSlide(slides) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === "object" && "length" in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) {
          $wrapperEl.prepend(slides[i]);
        }
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }
  function addSlide(index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex =
      activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (slides[i$1]) {
          $wrapperEl.append(slides[i$1]);
        }
      }
      newActiveIndex =
        activeIndexBuffer > index
          ? activeIndexBuffer + slides.length
          : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }
    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
      $wrapperEl.append(slidesBuffer[i$2]);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeSlide(slidesIndexes) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) {
          swiper.slides.eq(indexToRemove).remove();
        }
        if (indexToRemove < newActiveIndex) {
          newActiveIndex -= 1;
        }
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) {
        swiper.slides.eq(indexToRemove).remove();
      }
      if (indexToRemove < newActiveIndex) {
        newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeAllSlides() {
    var swiper = this;
    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }
  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };
  var Device = (function Device() {
    var ua = win.navigator.userAgent;
    var device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      windows: false,
      iphone: false,
      ipod: false,
      ipad: false,
      cordova: win.cordova || win.phonegap,
      phonegap: win.cordova || win.phonegap,
    };
    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/);
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    if (windows) {
      device.os = "windows";
      device.osVersion = windows[2];
      device.windows = true;
    }
    if (android && !windows) {
      device.os = "android";
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf("chrome") >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, ".");
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, ".");
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, ".") : null;
      device.iphone = true;
    }
    if (device.ios && device.osVersion && ua.indexOf("Version/") >= 0) {
      if (device.osVersion.split(".")[0] === "10") {
        device.osVersion = ua.toLowerCase().split("version/")[1].split(" ")[0];
      }
    }
    device.desktop = !(device.os || device.android || device.webView);
    device.webView =
      (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);
    if (device.os && device.os === "ios") {
      var osVersionArr = device.osVersion.split(".");
      var metaViewport = doc.querySelector('meta[name="viewport"]');
      device.minimalUi =
        !device.webView &&
        (ipod || iphone) &&
        (osVersionArr[0] * 1 === 7
          ? osVersionArr[1] * 1 >= 1
          : osVersionArr[0] * 1 > 7) &&
        metaViewport &&
        metaViewport.getAttribute("content").indexOf("minimal-ui") >= 0;
    }
    device.pixelRatio = win.devicePixelRatio || 1;
    return device;
  })();
  function onTouchStart(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent) {
      e = e.originalEvent;
    }
    data.isTouchEvent = e.type === "touchstart";
    if (!data.isTouchEvent && "which" in e && e.which === 3) {
      return;
    }
    if (!data.isTouchEvent && "button" in e && e.button > 0) {
      return;
    }
    if (data.isTouched && data.isMoved) {
      return;
    }
    if (
      params.noSwiping &&
      $(e.target).closest(
        params.noSwipingSelector
          ? params.noSwipingSelector
          : "." + params.noSwipingClass
      )[0]
    ) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$(e).closest(params.swipeHandler)[0]) {
        return;
      }
    }
    touches.currentX =
      e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY =
      e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;
    var edgeSwipeDetection =
      params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold =
      params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection &&
      (startX <= edgeSwipeThreshold ||
        startX >= win.screen.width - edgeSwipeThreshold)
    ) {
      return;
    }
    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) {
      data.allowThresholdMove = false;
    }
    if (e.type !== "touchstart") {
      var preventDefault = true;
      if ($(e.target).is(data.formElements)) {
        preventDefault = false;
      }
      if (
        doc.activeElement &&
        $(doc.activeElement).is(data.formElements) &&
        doc.activeElement !== e.target
      ) {
        doc.activeElement.blur();
      }
      var shouldPreventDefault =
        preventDefault &&
        swiper.allowTouchMove &&
        params.touchStartPreventDefault;
      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }
    swiper.emit("touchStart", e);
  }
  function onTouchMove(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) {
      e = e.originalEvent;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    if (data.isTouchEvent && e.type === "mousemove") {
      return;
    }
    var pageX = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
    var pageY = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (
          (pageY < touches.startY &&
            swiper.translate <= swiper.maxTranslate()) ||
          (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
        (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) {
      return;
    }
    touches.currentX = pageX;
    touches.currentY = pageY;
    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (
      swiper.params.threshold &&
      Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) <
        swiper.params.threshold
    ) {
      return;
    }
    if (typeof data.isScrolling === "undefined") {
      var touchAngle;
      if (
        (swiper.isHorizontal() && touches.currentY === touches.startY) ||
        (swiper.isVertical() && touches.currentX === touches.startX)
      ) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle =
            (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal()
            ? touchAngle > params.touchAngle
            : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data.startMoving === "undefined") {
      if (
        touches.currentX !== touches.startX ||
        touches.currentY !== touches.startY
      ) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
      }
      data.allowMomentumBounce = false;
      if (
        params.grabCursor &&
        (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
      ) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
    }
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    data.currentTranslate = diff + data.startTranslate;
    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate =
          swiper.minTranslate() -
          1 +
          Math.pow(
            -swiper.minTranslate() + data.startTranslate + diff,
            resistanceRatio
          );
      }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate =
          swiper.maxTranslate() +
          1 -
          Math.pow(
            swiper.maxTranslate() - data.startTranslate - diff,
            resistanceRatio
          );
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (
      !swiper.allowSlideNext &&
      swiper.swipeDirection === "next" &&
      data.currentTranslate < data.startTranslate
    ) {
      data.currentTranslate = data.startTranslate;
    }
    if (
      !swiper.allowSlidePrev &&
      swiper.swipeDirection === "prev" &&
      data.currentTranslate > data.startTranslate
    ) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal()
            ? touches.currentX - touches.startX
            : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger) {
      return;
    }
    if (
      params.freeMode ||
      params.watchSlidesProgress ||
      params.watchSlidesVisibility
    ) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? "startX" : "startY"],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
        time: Utils.now(),
      });
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent) {
      e = e.originalEvent;
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (
      params.grabCursor &&
      data.isMoved &&
      data.isTouched &&
      (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
    ) {
      swiper.setGrabCursor(false);
    }
    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit("tap", e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime > 300) {
        if (data.clickTimeout) {
          clearTimeout(data.clickTimeout);
        }
        data.clickTimeout = Utils.nextTick(function () {
          if (!swiper || swiper.destroyed) {
            return;
          }
          swiper.emit("click", e);
        }, 300);
      }
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        if (data.clickTimeout) {
          clearTimeout(data.clickTimeout);
        }
        swiper.emit("doubleTap", e);
      }
    }
    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) {
        swiper.allowClick = true;
      }
    });
    if (
      !data.isTouched ||
      !data.isMoved ||
      !swiper.swipeDirection ||
      touches.diff === 0 ||
      data.currentTranslate === data.startTranslate
    ) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();
          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;
        data.velocities.length = 0;
        var momentumDuration = 1e3 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;
        var newPosition = swiper.translate + momentumDistance;
        if (rtl) {
          newPosition = -newPosition;
        }
        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount =
          Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) {
            needsLoopFix = true;
          }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) {
            needsLoopFix = true;
          }
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }
          if (
            Math.abs(snapGrid[nextSlide] - newPosition) <
              Math.abs(snapGrid[nextSlide - 1] - newPosition) ||
            swiper.swipeDirection === "next"
          ) {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once("transitionEnd", function () {
            swiper.loopFix();
          });
        }
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs(
              (-newPosition - swiper.translate) / swiper.velocity
            );
          } else {
            momentumDuration = Math.abs(
              (newPosition - swiper.translate) / swiper.velocity
            );
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }
        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) {
              return;
            }
            swiper.emit("momentumBounce");
            swiper.setTransition(params.speed);
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) {
                return;
              }
              swiper.transitionEnd();
            });
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) {
                return;
              }
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }
      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
      if (typeof slidesGrid[i + params.slidesPerGroup] !== "undefined") {
        if (
          currentPos >= slidesGrid[i] &&
          currentPos < slidesGrid[i + params.slidesPerGroup]
        ) {
          stopIndex = i;
          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize =
          slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio) {
          swiper.slideTo(stopIndex + params.slidesPerGroup);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + params.slidesPerGroup);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(stopIndex + params.slidesPerGroup);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    var swiper = this;
    var params = swiper.params;
    var el = swiper.el;
    if (el && el.offsetWidth === 0) {
      return;
    }
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    var allowSlideNext = swiper.allowSlideNext;
    var allowSlidePrev = swiper.allowSlidePrev;
    var snapGrid = swiper.snapGrid;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    if (params.freeMode) {
      var newTranslate = Math.min(
        Math.max(swiper.translate, swiper.maxTranslate()),
        swiper.minTranslate()
      );
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      swiper.updateSlidesClasses();
      if (
        (params.slidesPerView === "auto" || params.slidesPerView > 1) &&
        swiper.isEnd &&
        !swiper.params.centeredSlides
      ) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    var swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) {
        e.preventDefault();
      }
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;
    {
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    var target = params.touchEventsTarget === "container" ? el : wrapperEl;
    var capture = !!params.nested;
    {
      if (
        !Support.touch &&
        (Support.pointerEvents || Support.prefixedPointerEvents)
      ) {
        target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener =
            touchEvents.start === "touchstart" &&
            Support.passiveListener &&
            params.passiveListeners
              ? { passive: true, capture: false }
              : false;
          target.addEventListener(
            touchEvents.start,
            swiper.onTouchStart,
            passiveListener
          );
          target.addEventListener(
            touchEvents.move,
            swiper.onTouchMove,
            Support.passiveListener
              ? { passive: false, capture: capture }
              : capture
          );
          target.addEventListener(
            touchEvents.end,
            swiper.onTouchEnd,
            passiveListener
          );
        }
        if (
          (params.simulateTouch && !Device.ios && !Device.android) ||
          (params.simulateTouch && !Support.touch && Device.ios)
        ) {
          target.addEventListener("mousedown", swiper.onTouchStart, false);
          doc.addEventListener("mousemove", swiper.onTouchMove, capture);
          doc.addEventListener("mouseup", swiper.onTouchEnd, false);
        }
      }
      if (params.preventClicks || params.preventClicksPropagation) {
        target.addEventListener("click", swiper.onClick, true);
      }
    }
    swiper.on(
      Device.ios || Device.android
        ? "resize orientationchange observerUpdate"
        : "resize observerUpdate",
      onResize,
      true
    );
  }
  function detachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;
    var target = params.touchEventsTarget === "container" ? el : wrapperEl;
    var capture = !!params.nested;
    {
      if (
        !Support.touch &&
        (Support.pointerEvents || Support.prefixedPointerEvents)
      ) {
        target.removeEventListener(
          touchEvents.start,
          swiper.onTouchStart,
          false
        );
        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener =
            touchEvents.start === "onTouchStart" &&
            Support.passiveListener &&
            params.passiveListeners
              ? { passive: true, capture: false }
              : false;
          target.removeEventListener(
            touchEvents.start,
            swiper.onTouchStart,
            passiveListener
          );
          target.removeEventListener(
            touchEvents.move,
            swiper.onTouchMove,
            capture
          );
          target.removeEventListener(
            touchEvents.end,
            swiper.onTouchEnd,
            passiveListener
          );
        }
        if (
          (params.simulateTouch && !Device.ios && !Device.android) ||
          (params.simulateTouch && !Support.touch && Device.ios)
        ) {
          target.removeEventListener("mousedown", swiper.onTouchStart, false);
          doc.removeEventListener("mousemove", swiper.onTouchMove, capture);
          doc.removeEventListener("mouseup", swiper.onTouchEnd, false);
        }
      }
      if (params.preventClicks || params.preventClicksPropagation) {
        target.removeEventListener("click", swiper.onClick, true);
      }
    }
    swiper.off(
      Device.ios || Device.android
        ? "resize orientationchange observerUpdate"
        : "resize observerUpdate",
      onResize
    );
  }
  var events = { attachEvents: attachEvents, detachEvents: detachEvents };
  function setBreakpoint() {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var initialized = swiper.initialized;
    var loopedSlides = swiper.loopedSlides;
    if (loopedSlides === void 0) loopedSlides = 0;
    var params = swiper.params;
    var breakpoints = params.breakpoints;
    if (
      !breakpoints ||
      (breakpoints && Object.keys(breakpoints).length === 0)
    ) {
      return;
    }
    var breakpoint = swiper.getBreakpoint(breakpoints);
    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams =
        breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      if (breakpointOnlyParams) {
        ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (
          param
        ) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === "undefined") {
            return;
          }
          if (
            param === "slidesPerView" &&
            (paramValue === "AUTO" || paramValue === "auto")
          ) {
            breakpointOnlyParams[param] = "auto";
          } else if (param === "slidesPerView") {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }
      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var directionChanged =
        breakpointParams.direction &&
        breakpointParams.direction !== params.direction;
      var needsReLoop =
        params.loop &&
        (breakpointParams.slidesPerView !== params.slidesPerView ||
          directionChanged);
      if (directionChanged && initialized) {
        swiper.changeDirection();
      }
      Utils.extend(swiper.params, breakpointParams);
      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });
      swiper.currentBreakpoint = breakpoint;
      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(
          activeIndex - loopedSlides + swiper.loopedSlides,
          0,
          false
        );
      }
      swiper.emit("breakpoint", breakpointParams);
    }
  }
  function getBreakpoint(breakpoints) {
    var swiper = this;
    if (!breakpoints) {
      return undefined;
    }
    var breakpoint = false;
    var points = [];
    Object.keys(breakpoints).forEach(function (point) {
      points.push(point);
    });
    points.sort(function (a, b) {
      return parseInt(a, 10) - parseInt(b, 10);
    });
    for (var i = 0; i < points.length; i += 1) {
      var point = points[i];
      if (swiper.params.breakpointsInverse) {
        if (point <= win.innerWidth) {
          breakpoint = point;
        }
      } else if (point >= win.innerWidth && !breakpoint) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoint,
  };
  function addClasses() {
    var swiper = this;
    var classNames = swiper.classNames;
    var params = swiper.params;
    var rtl = swiper.rtl;
    var $el = swiper.$el;
    var suffixes = [];
    suffixes.push("initialized");
    suffixes.push(params.direction);
    if (params.freeMode) {
      suffixes.push("free-mode");
    }
    if (!Support.flexbox) {
      suffixes.push("no-flexbox");
    }
    if (params.autoHeight) {
      suffixes.push("autoheight");
    }
    if (rtl) {
      suffixes.push("rtl");
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push("multirow");
    }
    if (Device.android) {
      suffixes.push("android");
    }
    if (Device.ios) {
      suffixes.push("ios");
    }
    if (
      (Browser.isIE || Browser.isEdge) &&
      (Support.pointerEvents || Support.prefixedPointerEvents)
    ) {
      suffixes.push("wp8-" + params.direction);
    }
    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });
    $el.addClass(classNames.join(" "));
  }
  function removeClasses() {
    var swiper = this;
    var $el = swiper.$el;
    var classNames = swiper.classNames;
    $el.removeClass(classNames.join(" "));
  }
  var classes = { addClasses: addClasses, removeClasses: removeClasses };
  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;
    function onReady() {
      if (callback) {
        callback();
      }
    }
    if (!imageEl.complete || !checkForComplete) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      onReady();
    }
  }
  function preloadImages() {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find("img");
    function onReady() {
      if (
        typeof swiper === "undefined" ||
        swiper === null ||
        !swiper ||
        swiper.destroyed
      ) {
        return;
      }
      if (swiper.imagesLoaded !== undefined) {
        swiper.imagesLoaded += 1;
      }
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) {
          swiper.update();
        }
        swiper.emit("imagesReady");
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute("src"),
        imageEl.srcset || imageEl.getAttribute("srcset"),
        imageEl.sizes || imageEl.getAttribute("sizes"),
        true,
        onReady
      );
    }
  }
  var images = { loadImage: loadImage, preloadImages: preloadImages };
  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked;
    swiper.isLocked = swiper.snapGrid.length === 1;
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }
  var checkOverflow$1 = { checkOverflow: checkOverflow };
  var defaults = {
    init: true,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    preventInteractionOnTransition: false,
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    autoHeight: false,
    setWrapperSize: false,
    virtualTranslate: false,
    effect: "slide",
    breakpoints: undefined,
    breakpointsInverse: false,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    watchOverflow: false,
    roundLengths: false,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    uniqueNavElements: true,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    grabCursor: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    preloadImages: true,
    updateOnImagesReady: true,
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: true,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: true,
  };
  var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };
  var extendedDefaults = {};
  var Swiper = (function (SwiperClass) {
    function Swiper() {
      var assign;
      var args = [],
        len = arguments.length;
      while (len--) args[len] = arguments[len];
      var el;
      var params;
      if (
        args.length === 1 &&
        args[0].constructor &&
        args[0].constructor === Object
      ) {
        params = args[0];
      } else {
        (assign = args), (el = assign[0]), (params = assign[1]);
      }
      if (!params) {
        params = {};
      }
      params = Utils.extend({}, params);
      if (el && !params.el) {
        params.el = el;
      }
      SwiperClass.call(this, params);
      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] =
              prototypes[prototypeGroup][protoMethod];
          }
        });
      });
      var swiper = this;
      if (typeof swiper.modules === "undefined") {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== "object" || moduleParams === null) {
            return;
          }
          if (!(moduleParamName in params && "enabled" in moduleParams)) {
            return;
          }
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (
            typeof params[moduleParamName] === "object" &&
            !("enabled" in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) {
            params[moduleParamName] = { enabled: false };
          }
        }
      });
      var swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);
      swiper.$ = $;
      var $el = $(swiper.params.el);
      el = $el[0];
      if (!el) {
        return undefined;
      }
      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (index, containerEl) {
          var newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }
      el.swiper = swiper;
      $el.data("swiper", swiper);
      var $wrapperEl = $el.children("." + swiper.params.wrapperClass);
      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],
        classNames: [],
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical: function isVertical() {
          return swiper.params.direction === "vertical";
        },
        rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
        rtlTranslate:
          swiper.params.direction === "horizontal" &&
          (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
        wrongRTL: $wrapperEl.css("display") === "-webkit-box",
        activeIndex: 0,
        realIndex: 0,
        isBeginning: true,
        isEnd: false,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        touchEvents: (function touchEvents() {
          var touch = ["touchstart", "touchmove", "touchend"];
          var desktop = ["mousedown", "mousemove", "mouseup"];
          if (Support.pointerEvents) {
            desktop = ["pointerdown", "pointermove", "pointerup"];
          } else if (Support.prefixedPointerEvents) {
            desktop = ["MSPointerDown", "MSPointerMove", "MSPointerUp"];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return Support.touch || !swiper.params.simulateTouch
            ? swiper.touchEventsTouch
            : swiper.touchEventsDesktop;
        })(),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          formElements: "input, select, option, textarea, button, video",
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },
        allowClick: true,
        allowTouchMove: swiper.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      });
      swiper.useModules();
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    if (SwiperClass) Swiper.__proto__ = SwiperClass;
    Swiper.prototype = Object.create(SwiperClass && SwiperClass.prototype);
    Swiper.prototype.constructor = Swiper;
    var staticAccessors = {
      extendedDefaults: { configurable: true },
      defaults: { configurable: true },
      Class: { configurable: true },
      $: { configurable: true },
    };
    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic() {
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var slidesGrid = swiper.slidesGrid;
      var swiperSize = swiper.size;
      var activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) {
              breakLoop = true;
            }
          }
        }
        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) {
              breakLoop = true;
            }
          }
        }
      } else {
        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };
    Swiper.prototype.update = function update() {
      var swiper = this;
      if (!swiper || swiper.destroyed) {
        return;
      }
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate() {
        var translateValue = swiper.rtlTranslate
          ? swiper.translate * -1
          : swiper.translate;
        var newTranslate = Math.min(
          Math.max(translateValue, swiper.maxTranslate()),
          swiper.minTranslate()
        );
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if (
          (swiper.params.slidesPerView === "auto" ||
            swiper.params.slidesPerView > 1) &&
          swiper.isEnd &&
          !swiper.params.centeredSlides
        ) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    };
    Swiper.prototype.changeDirection = function changeDirection(
      newDirection,
      needUpdate
    ) {
      if (needUpdate === void 0) needUpdate = true;
      var swiper = this;
      var currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection =
          currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (
        newDirection === currentDirection ||
        (newDirection !== "horizontal" && newDirection !== "vertical")
      ) {
        return swiper;
      }
      if (currentDirection === "vertical") {
        swiper.$el
          .removeClass(
            swiper.params.containerModifierClass + "vertical wp8-vertical"
          )
          .addClass("" + swiper.params.containerModifierClass + newDirection);
        if (
          (Browser.isIE || Browser.isEdge) &&
          (Support.pointerEvents || Support.prefixedPointerEvents)
        ) {
          swiper.$el.addClass(
            swiper.params.containerModifierClass + "wp8-" + newDirection
          );
        }
      }
      if (currentDirection === "horizontal") {
        swiper.$el
          .removeClass(
            swiper.params.containerModifierClass + "horizontal wp8-horizontal"
          )
          .addClass("" + swiper.params.containerModifierClass + newDirection);
        if (
          (Browser.isIE || Browser.isEdge) &&
          (Support.pointerEvents || Support.prefixedPointerEvents)
        ) {
          swiper.$el.addClass(
            swiper.params.containerModifierClass + "wp8-" + newDirection
          );
        }
      }
      swiper.params.direction = newDirection;
      swiper.slides.each(function (slideIndex, slideEl) {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate) {
        swiper.update();
      }
      return swiper;
    };
    Swiper.prototype.init = function init() {
      var swiper = this;
      if (swiper.initialized) {
        return;
      }
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }
      if (swiper.params.loop) {
        swiper.slideTo(
          swiper.params.initialSlide + swiper.loopedSlides,
          0,
          swiper.params.runCallbacksOnInit
        );
      } else {
        swiper.slideTo(
          swiper.params.initialSlide,
          0,
          swiper.params.runCallbacksOnInit
        );
      }
      swiper.attachEvents();
      swiper.initialized = true;
      swiper.emit("init");
    };
    Swiper.prototype.destroy = function destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) deleteInstance = true;
      if (cleanStyles === void 0) cleanStyles = true;
      var swiper = this;
      var params = swiper.params;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr("style");
        $wrapperEl.removeAttr("style");
        if (slides && slides.length) {
          slides
            .removeClass(
              [
                params.slideVisibleClass,
                params.slideActiveClass,
                params.slideNextClass,
                params.slidePrevClass,
              ].join(" ")
            )
            .removeAttr("style")
            .removeAttr("data-swiper-slide-index")
            .removeAttr("data-swiper-column")
            .removeAttr("data-swiper-row");
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data("swiper", null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    };
    Swiper.extendDefaults = function extendDefaults(newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };
    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };
    staticAccessors.defaults.get = function () {
      return defaults;
    };
    staticAccessors.Class.get = function () {
      return SwiperClass;
    };
    staticAccessors.$.get = function () {
      return $;
    };
    Object.defineProperties(Swiper, staticAccessors);
    return Swiper;
  })(SwiperClass);
  var Device$1 = {
    name: "device",
    proto: { device: Device },
    static: { device: Device },
  };
  var Support$1 = {
    name: "support",
    proto: { support: Support },
    static: { support: Support },
  };
  var Browser$1 = {
    name: "browser",
    proto: { browser: Browser },
    static: { browser: Browser },
  };
  var Resize = {
    name: "resize",
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) {
              return;
            }
            swiper.emit("beforeResize");
            swiper.emit("resize");
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) {
              return;
            }
            swiper.emit("orientationchange");
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        win.addEventListener("resize", swiper.resize.resizeHandler);
        win.addEventListener(
          "orientationchange",
          swiper.resize.orientationChangeHandler
        );
      },
      destroy: function destroy() {
        var swiper = this;
        win.removeEventListener("resize", swiper.resize.resizeHandler);
        win.removeEventListener(
          "orientationchange",
          swiper.resize.orientationChangeHandler
        );
      },
    },
  };
  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if (options === void 0) options = {};
      var swiper = this;
      var ObserverFunc = Observer.func;
      var observer = new ObserverFunc(function (mutations) {
        if (mutations.length === 1) {
          swiper.emit("observerUpdate", mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate() {
          swiper.emit("observerUpdate", mutations[0]);
        };
        if (win.requestAnimationFrame) {
          win.requestAnimationFrame(observerUpdate);
        } else {
          win.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes:
          typeof options.attributes === "undefined" ? true : options.attributes,
        childList:
          typeof options.childList === "undefined" ? true : options.childList,
        characterData:
          typeof options.characterData === "undefined"
            ? true
            : options.characterData,
      });
      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!Support.observer || !swiper.params.observer) {
        return;
      }
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      swiper.observer.attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren,
      });
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };
  var Observer$1 = {
    name: "observer",
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.destroy();
      },
    },
  };
  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var ref = swiper.params;
      var slidesPerView = ref.slidesPerView;
      var slidesPerGroup = ref.slidesPerGroup;
      var centeredSlides = ref.centeredSlides;
      var ref$1 = swiper.params.virtual;
      var addSlidesBefore = ref$1.addSlidesBefore;
      var addSlidesAfter = ref$1.addSlidesAfter;
      var ref$2 = swiper.virtual;
      var previousFrom = ref$2.from;
      var previousTo = ref$2.to;
      var slides = ref$2.slides;
      var previousSlidesGrid = ref$2.slidesGrid;
      var renderSlide = ref$2.renderSlide;
      var previousOffset = ref$2.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;
      var offsetProp;
      if (swiper.rtlTranslate) {
        offsetProp = "right";
      } else {
        offsetProp = swiper.isHorizontal() ? "left" : "top";
      }
      var slidesAfter;
      var slidesBefore;
      if (centeredSlides) {
        slidesAfter =
          Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore =
          Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }
      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      Utils.extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
      });
      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }
      if (previousFrom === from && previousTo === to && !force) {
        if (
          swiper.slidesGrid !== previousSlidesGrid &&
          offset !== previousOffset
        ) {
          swiper.slides.css(offsetProp, offset + "px");
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            var slidesToRender = [];
            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          })(),
        });
        onRendered();
        return;
      }
      var prependIndexes = [];
      var appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl
              .find(
                "." +
                  swiper.params.slideClass +
                  '[data-swiper-slide-index="' +
                  i +
                  '"]'
              )
              .remove();
          }
        }
      }
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === "undefined" || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) {
              appendIndexes.push(i$1);
            }
            if (i$1 < previousFrom) {
              prependIndexes.push(i$1);
            }
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes
        .sort(function (a, b) {
          return b - a;
        })
        .forEach(function (index) {
          swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
      swiper.$wrapperEl
        .children(".swiper-slide")
        .css(offsetProp, offset + "px");
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      var $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide, index))
        : $(
            '<div class="' +
              swiper.params.slideClass +
              '" data-swiper-slide-index="' +
              index +
              '">' +
              slide +
              "</div>"
          );
      if (!$slideEl.attr("data-swiper-slide-index")) {
        $slideEl.attr("data-swiper-slide-index", index);
      }
      if (params.cache) {
        swiper.virtual.cache[index] = $slideEl;
      }
      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      var swiper = this;
      if (typeof slides === "object" && "length" in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) {
            swiper.virtual.slides.push(slides[i]);
          }
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;
      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) {
            swiper.virtual.slides.unshift(slides[i]);
          }
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] =
            cache[cachedIndex];
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      var swiper = this;
      if (typeof slidesIndexes === "undefined" || slidesIndexes === null) {
        return;
      }
      var activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) {
            activeIndex -= 1;
          }
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) {
          activeIndex -= 1;
        }
        activeIndex = Math.max(activeIndex, 0);
      }
      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var swiper = this;
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    },
  };
  var Virtual$1 = {
    name: "virtual",
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          removeSlide: Virtual.removeSlide.bind(swiper),
          removeAllSlides: Virtual.removeAllSlides.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) {
          return;
        }
        swiper.classNames.push(
          swiper.params.containerModifierClass + "virtual"
        );
        var overwriteParams = { watchSlidesProgress: true };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) {
          return;
        }
        swiper.virtual.update();
      },
    },
  };
  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      var kc = e.keyCode || e.charCode;
      if (
        !swiper.allowSlideNext &&
        ((swiper.isHorizontal() && kc === 39) ||
          (swiper.isVertical() && kc === 40))
      ) {
        return false;
      }
      if (
        !swiper.allowSlidePrev &&
        ((swiper.isHorizontal() && kc === 37) ||
          (swiper.isVertical() && kc === 38))
      ) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (
        doc.activeElement &&
        doc.activeElement.nodeName &&
        (doc.activeElement.nodeName.toLowerCase() === "input" ||
          doc.activeElement.nodeName.toLowerCase() === "textarea")
      ) {
        return undefined;
      }
      if (
        swiper.params.keyboard.onlyInViewport &&
        (kc === 37 || kc === 39 || kc === 38 || kc === 40)
      ) {
        var inView = false;
        if (
          swiper.$el.parents("." + swiper.params.slideClass).length > 0 &&
          swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0
        ) {
          return undefined;
        }
        var windowWidth = win.innerWidth;
        var windowHeight = win.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) {
          swiperOffset.left -= swiper.$el[0].scrollLeft;
        }
        var swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiper.width, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiper.height],
          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
        ];
        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];
          if (
            point[0] >= 0 &&
            point[0] <= windowWidth &&
            point[1] >= 0 &&
            point[1] <= windowHeight
          ) {
            inView = true;
          }
        }
        if (!inView) {
          return undefined;
        }
      }
      if (swiper.isHorizontal()) {
        if (kc === 37 || kc === 39) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }
        if ((kc === 39 && !rtl) || (kc === 37 && rtl)) {
          swiper.slideNext();
        }
        if ((kc === 37 && !rtl) || (kc === 39 && rtl)) {
          swiper.slidePrev();
        }
      } else {
        if (kc === 38 || kc === 40) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }
        if (kc === 40) {
          swiper.slideNext();
        }
        if (kc === 38) {
          swiper.slidePrev();
        }
      }
      swiper.emit("keyPress", kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      if (swiper.keyboard.enabled) {
        return;
      }
      $(doc).on("keydown", swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      if (!swiper.keyboard.enabled) {
        return;
      }
      $(doc).off("keydown", swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };
  var Keyboard$1 = {
    name: "keyboard",
    params: { keyboard: { enabled: false, onlyInViewport: true } },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };
  function isEventSupported() {
    var eventName = "onwheel";
    var isSupported = eventName in doc;
    if (!isSupported) {
      var element = doc.createElement("div");
      element.setAttribute(eventName, "return;");
      isSupported = typeof element[eventName] === "function";
    }
    if (
      !isSupported &&
      doc.implementation &&
      doc.implementation.hasFeature &&
      doc.implementation.hasFeature("", "") !== true
    ) {
      isSupported = doc.implementation.hasFeature("Events.wheel", "3.0");
    }
    return isSupported;
  }
  var Mousewheel = {
    lastScrollTime: Utils.now(),
    event: (function getEvent() {
      if (win.navigator.userAgent.indexOf("firefox") > -1) {
        return "DOMMouseScroll";
      }
      return isEventSupported() ? "wheel" : "mousewheel";
    })(),
    normalize: function normalize(e) {
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;
      var sX = 0;
      var sY = 0;
      var pX = 0;
      var pY = 0;
      if ("detail" in e) {
        sY = e.detail;
      }
      if ("wheelDelta" in e) {
        sY = -e.wheelDelta / 120;
      }
      if ("wheelDeltaY" in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ("wheelDeltaX" in e) {
        sX = -e.wheelDeltaX / 120;
      }
      if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ("deltaY" in e) {
        pY = e.deltaY;
      }
      if ("deltaX" in e) {
        pX = e.deltaX;
      }
      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return { spinX: sX, spinY: sY, pixelX: pX, pixelY: pY };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;
      if (!swiper.mouseEntered && !params.releaseOnEdges) {
        return true;
      }
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;
      var data = Mousewheel.normalize(e);
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) {
            delta = data.pixelX * rtlFactor;
          } else {
            return true;
          }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) {
          delta = data.pixelY;
        } else {
          return true;
        }
      } else {
        delta =
          Math.abs(data.pixelX) > Math.abs(data.pixelY)
            ? -data.pixelX * rtlFactor
            : -data.pixelY;
      }
      if (delta === 0) {
        return true;
      }
      if (params.invert) {
        delta = -delta;
      }
      if (!swiper.params.freeMode) {
        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext();
              swiper.emit("scroll", e);
            } else if (params.releaseOnEdges) {
              return true;
            }
          } else if (
            (!swiper.isBeginning || swiper.params.loop) &&
            !swiper.animating
          ) {
            swiper.slidePrev();
            swiper.emit("scroll", e);
          } else if (params.releaseOnEdges) {
            return true;
          }
        }
        swiper.mousewheel.lastScrollTime = new win.Date().getTime();
      } else {
        if (swiper.params.loop) {
          swiper.loopFix();
        }
        var position = swiper.getTranslate() + delta * params.sensitivity;
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) {
          position = swiper.minTranslate();
        }
        if (position <= swiper.maxTranslate()) {
          position = swiper.maxTranslate();
        }
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (
          (!wasBeginning && swiper.isBeginning) ||
          (!wasEnd && swiper.isEnd)
        ) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.freeModeSticky) {
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = Utils.nextTick(function () {
            swiper.slideToClosest();
          }, 300);
        }
        swiper.emit("scroll", e);
        if (
          swiper.params.autoplay &&
          swiper.params.autoplayDisableOnInteraction
        ) {
          swiper.autoplay.stop();
        }
        if (
          position === swiper.minTranslate() ||
          position === swiper.maxTranslate()
        ) {
          return true;
        }
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      return false;
    },
    enable: function enable() {
      var swiper = this;
      if (!Mousewheel.event) {
        return false;
      }
      if (swiper.mousewheel.enabled) {
        return false;
      }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== "container") {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.on("mouseenter", swiper.mousewheel.handleMouseEnter);
      target.on("mouseleave", swiper.mousewheel.handleMouseLeave);
      target.on(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      if (!Mousewheel.event) {
        return false;
      }
      if (!swiper.mousewheel.enabled) {
        return false;
      }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== "container") {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.off(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };
  var Mousewheel$1 = {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: "container",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          lastScrollTime: Utils.now(),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.mousewheel.enabled) {
          swiper.mousewheel.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.mousewheel.enabled) {
          swiper.mousewheel.disable();
        }
      },
    },
  };
  var Navigation = {
    update: function update() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (swiper.params.loop) {
        return;
      }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[
          swiper.params.watchOverflow && swiper.isLocked
            ? "addClass"
            : "removeClass"
        ](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[
          swiper.params.watchOverflow && swiper.isLocked
            ? "addClass"
            : "removeClass"
        ](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) {
        return;
      }
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) {
        return;
      }
      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) {
        return;
      }
      var $nextEl;
      var $prevEl;
      if (params.nextEl) {
        $nextEl = $(params.nextEl);
        if (
          swiper.params.uniqueNavElements &&
          typeof params.nextEl === "string" &&
          $nextEl.length > 1 &&
          swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = $(params.prevEl);
        if (
          swiper.params.uniqueNavElements &&
          typeof params.prevEl === "string" &&
          $prevEl.length > 1 &&
          swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on("click", swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on("click", swiper.navigation.onPrevClick);
      }
      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off("click", swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off("click", swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };
  var Navigation$1 = {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;
        if (
          swiper.params.navigation.hideOnClick &&
          !$(e.target).is($prevEl) &&
          !$(e.target).is($nextEl)
        ) {
          var isHidden;
          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            swiper.emit("navigationShow", swiper);
          } else {
            swiper.emit("navigationHide", swiper);
          }
          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      },
    },
  };
  var Pagination = {
    update: function update() {
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (
        !params.el ||
        !swiper.pagination.el ||
        !swiper.pagination.$el ||
        swiper.pagination.$el.length === 0
      ) {
        return;
      }
      var slidesLength =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.virtual.slides.length
          : swiper.slides.length;
      var $el = swiper.pagination.$el;
      var current;
      var total = swiper.params.loop
        ? Math.ceil(
            (slidesLength - swiper.loopedSlides * 2) /
              swiper.params.slidesPerGroup
          )
        : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil(
          (swiper.activeIndex - swiper.loopedSlides) /
            swiper.params.slidesPerGroup
        );
        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
          current -= slidesLength - swiper.loopedSlides * 2;
        }
        if (current > total - 1) {
          current -= total;
        }
        if (current < 0 && swiper.params.paginationType !== "bullets") {
          current = total + current;
        }
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      if (
        params.type === "bullets" &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length > 0
      ) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets
            .eq(0)
            [swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
          $el.css(
            swiper.isHorizontal() ? "width" : "height",
            swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) +
              "px"
          );
          if (
            params.dynamicMainBullets > 1 &&
            swiper.previousIndex !== undefined
          ) {
            swiper.pagination.dynamicBulletIndex +=
              current - swiper.previousIndex;
            if (
              swiper.pagination.dynamicBulletIndex >
              params.dynamicMainBullets - 1
            ) {
              swiper.pagination.dynamicBulletIndex =
                params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex =
            firstIndex +
            (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(
          params.bulletActiveClass +
            " " +
            params.bulletActiveClass +
            "-next " +
            params.bulletActiveClass +
            "-next-next " +
            params.bulletActiveClass +
            "-prev " +
            params.bulletActiveClass +
            "-prev-prev " +
            params.bulletActiveClass +
            "-main"
        );
        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(params.bulletActiveClass + "-main");
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(params.bulletActiveClass + "-prev")
                  .prev()
                  .addClass(params.bulletActiveClass + "-prev-prev");
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(params.bulletActiveClass + "-next")
                  .next()
                  .addClass(params.bulletActiveClass + "-next-next");
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(params.bulletActiveClass + "-main");
            }
            $firstDisplayedBullet
              .prev()
              .addClass(params.bulletActiveClass + "-prev")
              .prev()
              .addClass(params.bulletActiveClass + "-prev-prev");
            $lastDisplayedBullet
              .next()
              .addClass(params.bulletActiveClass + "-next")
              .next()
              .addClass(params.bulletActiveClass + "-next-next");
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(
            bullets.length,
            params.dynamicMainBullets + 4
          );
          var bulletsOffset =
            (swiper.pagination.bulletSize * dynamicBulletsLength -
              swiper.pagination.bulletSize) /
              2 -
            midIndex * swiper.pagination.bulletSize;
          var offsetProp = rtl ? "right" : "left";
          bullets.css(
            swiper.isHorizontal() ? offsetProp : "top",
            bulletsOffset + "px"
          );
        }
      }
      if (params.type === "fraction") {
        $el
          .find("." + params.currentClass)
          .text(params.formatFractionCurrent(current + 1));
        $el
          .find("." + params.totalClass)
          .text(params.formatFractionTotal(total));
      }
      if (params.type === "progressbar") {
        var progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal()
            ? "vertical"
            : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal()
            ? "horizontal"
            : "vertical";
        }
        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el
          .find("." + params.progressbarFillClass)
          .transform(
            "translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")"
          )
          .transition(swiper.params.speed);
      }
      if (params.type === "custom" && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit("paginationRender", swiper, $el[0]);
      } else {
        swiper.emit("paginationUpdate", swiper, $el[0]);
      }
      $el[
        swiper.params.watchOverflow && swiper.isLocked
          ? "addClass"
          : "removeClass"
      ](params.lockClass);
    },
    render: function render() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (
        !params.el ||
        !swiper.pagination.el ||
        !swiper.pagination.$el ||
        swiper.pagination.$el.length === 0
      ) {
        return;
      }
      var slidesLength =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.virtual.slides.length
          : swiper.slides.length;
      var $el = swiper.pagination.$el;
      var paginationHTML = "";
      if (params.type === "bullets") {
        var numberOfBullets = swiper.params.loop
          ? Math.ceil(
              (slidesLength - swiper.loopedSlides * 2) /
                swiper.params.slidesPerGroup
            )
          : swiper.snapGrid.length;
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(
              swiper,
              i,
              params.bulletClass
            );
          } else {
            paginationHTML +=
              "<" +
              params.bulletElement +
              ' class="' +
              params.bulletClass +
              '"></' +
              params.bulletElement +
              ">";
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find("." + params.bulletClass);
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(
            swiper,
            params.currentClass,
            params.totalClass
          );
        } else {
          paginationHTML =
            '<span class="' +
            params.currentClass +
            '"></span>' +
            " / " +
            '<span class="' +
            params.totalClass +
            '"></span>';
        }
        $el.html(paginationHTML);
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(
            swiper,
            params.progressbarFillClass
          );
        } else {
          paginationHTML =
            '<span class="' + params.progressbarFillClass + '"></span>';
        }
        $el.html(paginationHTML);
      }
      if (params.type !== "custom") {
        swiper.emit("paginationRender", swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) {
        return;
      }
      var $el = $(params.el);
      if ($el.length === 0) {
        return;
      }
      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === "string" &&
        $el.length > 1 &&
        swiper.$el.find(params.el).length === 1
      ) {
        $el = swiper.$el.find(params.el);
      }
      if (params.type === "bullets" && params.clickable) {
        $el.addClass(params.clickableClass);
      }
      $el.addClass(params.modifierClass + params.type);
      if (params.type === "bullets" && params.dynamicBullets) {
        $el.addClass("" + params.modifierClass + params.type + "-dynamic");
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        $el.on("click", "." + params.bulletClass, function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) {
            index += swiper.loopedSlides;
          }
          swiper.slideTo(index);
        });
      }
      Utils.extend(swiper.pagination, { $el: $el, el: $el[0] });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (
        !params.el ||
        !swiper.pagination.el ||
        !swiper.pagination.$el ||
        swiper.pagination.$el.length === 0
      ) {
        return;
      }
      var $el = swiper.pagination.$el;
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) {
        swiper.pagination.bullets.removeClass(params.bulletActiveClass);
      }
      if (params.clickable) {
        $el.off("click", "." + params.bulletClass);
      }
    },
  };
  var Pagination$1 = {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (number) {
          return number;
        },
        formatFractionTotal: function (number) {
          return number;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === "undefined") {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        var swiper = this;
        if (
          swiper.params.pagination.el &&
          swiper.params.pagination.hideOnClick &&
          swiper.pagination.$el.length > 0 &&
          !$(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          var isHidden = swiper.pagination.$el.hasClass(
            swiper.params.pagination.hiddenClass
          );
          if (isHidden === true) {
            swiper.emit("paginationShow", swiper);
          } else {
            swiper.emit("paginationHide", swiper);
          }
          swiper.pagination.$el.toggleClass(
            swiper.params.pagination.hiddenClass
          );
        }
      },
    },
  };
  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
        return;
      }
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var progress = swiper.progress;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      var params = swiper.params.scrollbar;
      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        if (Support.transforms3d) {
          $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
        } else {
          $dragEl.transform("translateX(" + newPos + "px)");
        }
        $dragEl[0].style.width = newSize + "px";
      } else {
        if (Support.transforms3d) {
          $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
        } else {
          $dragEl.transform("translateY(" + newPos + "px)");
        }
        $dragEl[0].style.height = newSize + "px";
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1e3);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
        return;
      }
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
        return;
      }
      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      $dragEl[0].style.width = "";
      $dragEl[0].style.height = "";
      var trackSize = swiper.isHorizontal()
        ? $el[0].offsetWidth
        : $el[0].offsetHeight;
      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;
      if (swiper.params.scrollbar.dragSize === "auto") {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }
      if (divider >= 1) {
        $el[0].style.display = "none";
      } else {
        $el[0].style.display = "";
      }
      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize,
      });
      scrollbar.$el[
        swiper.params.watchOverflow && swiper.isLocked
          ? "addClass"
          : "removeClass"
      ](swiper.params.scrollbar.lockClass);
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var pointerPosition;
      if (swiper.isHorizontal()) {
        pointerPosition =
          e.type === "touchstart" || e.type === "touchmove"
            ? e.targetTouches[0].pageX
            : e.pageX || e.clientX;
      } else {
        pointerPosition =
          e.type === "touchstart" || e.type === "touchmove"
            ? e.targetTouches[0].pageY
            : e.pageY || e.clientY;
      }
      var positionRatio;
      positionRatio =
        (pointerPosition -
          $el.offset()[swiper.isHorizontal() ? "left" : "top"] -
          dragSize / 2) /
        (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      var position =
        swiper.minTranslate() +
        (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      e.preventDefault();
      e.stopPropagation();
      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);
      clearTimeout(swiper.scrollbar.dragTimeout);
      $el.transition(0);
      if (params.hide) {
        $el.css("opacity", 1);
      }
      swiper.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      if (!swiper.scrollbar.isTouched) {
        return;
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit("scrollbarDragMove", e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $el = scrollbar.$el;
      if (!swiper.scrollbar.isTouched) {
        return;
      }
      swiper.scrollbar.isTouched = false;
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css("opacity", 0);
          $el.transition(400);
        }, 1e3);
      }
      swiper.emit("scrollbarDragEnd", e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) {
        return;
      }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener =
        Support.passiveListener && params.passiveListeners
          ? { passive: false, capture: false }
          : false;
      var passiveListener =
        Support.passiveListener && params.passiveListeners
          ? { passive: true, capture: false }
          : false;
      if (!Support.touch) {
        target.addEventListener(
          touchEventsDesktop.start,
          swiper.scrollbar.onDragStart,
          activeListener
        );
        doc.addEventListener(
          touchEventsDesktop.move,
          swiper.scrollbar.onDragMove,
          activeListener
        );
        doc.addEventListener(
          touchEventsDesktop.end,
          swiper.scrollbar.onDragEnd,
          passiveListener
        );
      } else {
        target.addEventListener(
          touchEventsTouch.start,
          swiper.scrollbar.onDragStart,
          activeListener
        );
        target.addEventListener(
          touchEventsTouch.move,
          swiper.scrollbar.onDragMove,
          activeListener
        );
        target.addEventListener(
          touchEventsTouch.end,
          swiper.scrollbar.onDragEnd,
          passiveListener
        );
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) {
        return;
      }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener =
        Support.passiveListener && params.passiveListeners
          ? { passive: false, capture: false }
          : false;
      var passiveListener =
        Support.passiveListener && params.passiveListeners
          ? { passive: true, capture: false }
          : false;
      if (!Support.touch) {
        target.removeEventListener(
          touchEventsDesktop.start,
          swiper.scrollbar.onDragStart,
          activeListener
        );
        doc.removeEventListener(
          touchEventsDesktop.move,
          swiper.scrollbar.onDragMove,
          activeListener
        );
        doc.removeEventListener(
          touchEventsDesktop.end,
          swiper.scrollbar.onDragEnd,
          passiveListener
        );
      } else {
        target.removeEventListener(
          touchEventsTouch.start,
          swiper.scrollbar.onDragStart,
          activeListener
        );
        target.removeEventListener(
          touchEventsTouch.move,
          swiper.scrollbar.onDragMove,
          activeListener
        );
        target.removeEventListener(
          touchEventsTouch.end,
          swiper.scrollbar.onDragEnd,
          passiveListener
        );
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) {
        return;
      }
      var scrollbar = swiper.scrollbar;
      var $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;
      var $el = $(params.el);
      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === "string" &&
        $el.length > 1 &&
        $swiperEl.find(params.el).length === 1
      ) {
        $el = $swiperEl.find(params.el);
      }
      var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);
      if ($dragEl.length === 0) {
        $dragEl = $(
          '<div class="' + swiper.params.scrollbar.dragClass + '"></div>'
        );
        $el.append($dragEl);
      }
      Utils.extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0],
      });
      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };
  var Scrollbar$1 = {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };
  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;
      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;
      var p = $el.attr("data-swiper-parallax") || "0";
      var x = $el.attr("data-swiper-parallax-x");
      var y = $el.attr("data-swiper-parallax-y");
      var scale = $el.attr("data-swiper-parallax-scale");
      var opacity = $el.attr("data-swiper-parallax-opacity");
      if (x || y) {
        x = x || "0";
        y = y || "0";
      } else if (swiper.isHorizontal()) {
        x = p;
        y = "0";
      } else {
        y = p;
        x = "0";
      }
      if (x.indexOf("%") >= 0) {
        x = parseInt(x, 10) * progress * rtlFactor + "%";
      } else {
        x = x * progress * rtlFactor + "px";
      }
      if (y.indexOf("%") >= 0) {
        y = parseInt(y, 10) * progress + "%";
      } else {
        y = y * progress + "px";
      }
      if (typeof opacity !== "undefined" && opacity !== null) {
        var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === "undefined" || scale === null) {
        $el.transform("translate3d(" + x + ", " + y + ", 0px)");
      } else {
        var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        $el.transform(
          "translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"
        );
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      var progress = swiper.progress;
      var snapGrid = swiper.snapGrid;
      $el
        .children(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
        )
        .each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideIndex, slideEl) {
        var slideProgress = slideEl.progress;
        if (
          swiper.params.slidesPerGroup > 1 &&
          swiper.params.slidesPerView !== "auto"
        ) {
          slideProgress +=
            Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl)
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
          )
          .each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if (duration === void 0) duration = this.params.speed;
      var swiper = this;
      var $el = swiper.$el;
      $el
        .find(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
        )
        .each(function (index, parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration =
            parseInt($parallaxEl.attr("data-swiper-parallax-duration"), 10) ||
            duration;
          if (duration === 0) {
            parallaxDuration = 0;
          }
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };
  var Parallax$1 = {
    name: "parallax",
    params: { parallax: { enabled: false } },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) {
          return;
        }
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) {
          return;
        }
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) {
          return;
        }
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.parallax.enabled) {
          return;
        }
        swiper.parallax.setTransition(duration);
      },
    },
  };
  var Zoom = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) {
        return 1;
      }
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      return distance;
    },
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (
          e.type !== "touchstart" ||
          (e.type === "touchstart" && e.targetTouches.length < 2)
        ) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest(".swiper-slide");
        if (gesture.$slideEl.length === 0) {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
        gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas");
        gesture.$imageWrapEl = gesture.$imageEl.parent(
          "." + params.containerClass
        );
        gesture.maxRatio =
          gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      gesture.$imageEl.transition(0);
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (
          e.type !== "touchmove" ||
          (e.type === "touchmove" && e.targetTouches.length < 2)
        ) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale =
          (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale =
          gesture.maxRatio -
          1 +
          Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale =
          params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
      }
      gesture.$imageEl.transform(
        "translate3d(0,0,0) scale(" + zoom.scale + ")"
      );
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (
          e.type !== "touchend" ||
          (e.type === "touchend" &&
            e.changedTouches.length < 2 &&
            !Device.android)
        ) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      zoom.scale = Math.max(
        Math.min(zoom.scale, gesture.maxRatio),
        params.minRatio
      );
      gesture.$imageEl
        .transition(swiper.params.speed)
        .transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) {
        gesture.$slideEl = undefined;
      }
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      if (image.isTouched) {
        return;
      }
      if (Device.android) {
        e.preventDefault();
      }
      image.isTouched = true;
      image.touchesStart.x =
        e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y =
        e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) {
        return;
      }
      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], "x") || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], "y") || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      if (
        scaledWidth < gesture.slideWidth &&
        scaledHeight < gesture.slideHeight
      ) {
        return;
      }
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x =
        e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y =
        e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;
      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal() &&
          ((Math.floor(image.minX) === Math.floor(image.startX) &&
            image.touchesCurrent.x < image.touchesStart.x) ||
            (Math.floor(image.maxX) === Math.floor(image.startX) &&
              image.touchesCurrent.x > image.touchesStart.x))
        ) {
          image.isTouched = false;
          return;
        }
        if (
          !swiper.isHorizontal() &&
          ((Math.floor(image.minY) === Math.floor(image.startY) &&
            image.touchesCurrent.y < image.touchesStart.y) ||
            (Math.floor(image.maxY) === Math.floor(image.startY) &&
              image.touchesCurrent.y > image.touchesStart.y))
        ) {
          image.isTouched = false;
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();
      image.isMoved = true;
      image.currentX =
        image.touchesCurrent.x - image.touchesStart.x + image.startX;
      image.currentY =
        image.touchesCurrent.y - image.touchesStart.y + image.startY;
      if (image.currentX < image.minX) {
        image.currentX =
          image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
      }
      if (image.currentX > image.maxX) {
        image.currentX =
          image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
      }
      if (image.currentY < image.minY) {
        image.currentY =
          image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
      }
      if (image.currentY > image.maxY) {
        image.currentY =
          image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
      }
      if (!velocity.prevPositionX) {
        velocity.prevPositionX = image.touchesCurrent.x;
      }
      if (!velocity.prevPositionY) {
        velocity.prevPositionY = image.touchesCurrent.y;
      }
      if (!velocity.prevTime) {
        velocity.prevTime = Date.now();
      }
      velocity.x =
        (image.touchesCurrent.x - velocity.prevPositionX) /
        (Date.now() - velocity.prevTime) /
        2;
      velocity.y =
        (image.touchesCurrent.y - velocity.prevPositionY) /
        (Date.now() - velocity.prevTime) /
        2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) {
        velocity.x = 0;
      }
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) {
        velocity.y = 0;
      }
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.$imageWrapEl.transform(
        "translate3d(" + image.currentX + "px, " + image.currentY + "px,0)"
      );
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY;
      if (velocity.x !== 0) {
        momentumDurationX = Math.abs(
          (newPositionX - image.currentX) / velocity.x
        );
      }
      if (velocity.y !== 0) {
        momentumDurationY = Math.abs(
          (newPositionY - image.currentY) / velocity.y
        );
      }
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY;
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(
        Math.min(image.currentX, image.maxX),
        image.minX
      );
      image.currentY = Math.max(
        Math.min(image.currentY, image.maxY),
        image.minY
      );
      gesture.$imageWrapEl
        .transition(momentumDuration)
        .transform(
          "translate3d(" + image.currentX + "px, " + image.currentY + "px,0)"
        );
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        gesture.$imageEl.transform("translate3d(0,0,0) scale(1)");
        gesture.$imageWrapEl.transform("translate3d(0,0,0)");
        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      if (zoom.scale && zoom.scale !== 1) {
        zoom.out();
      } else {
        zoom["in"](e);
      }
    },
    in: function in$1(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide
          ? $(swiper.clickedSlide)
          : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas");
        gesture.$imageWrapEl = gesture.$imageEl.parent(
          "." + params.containerClass
        );
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      gesture.$slideEl.addClass("" + params.zoomedSlideClass);
      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;
      if (typeof image.touchesStart.x === "undefined" && e) {
        touchX = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }
      zoom.scale =
        gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
      zoom.currentScale =
        gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }
        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl
        .transition(300)
        .transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
      gesture.$imageEl
        .transition(300)
        .transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    out: function out() {
      var swiper = this;
      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide
          ? $(swiper.clickedSlide)
          : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas");
        gesture.$imageWrapEl = gesture.$imageEl.parent(
          "." + params.containerClass
        );
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
      gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
      gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
      gesture.$slideEl = undefined;
    },
    enable: function enable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (zoom.enabled) {
        return;
      }
      zoom.enabled = true;
      var passiveListener =
        swiper.touchEvents.start === "touchstart" &&
        Support.passiveListener &&
        swiper.params.passiveListeners
          ? { passive: true, capture: false }
          : false;
      if (Support.gestures) {
        swiper.$wrapperEl.on(
          "gesturestart",
          ".swiper-slide",
          zoom.onGestureStart,
          passiveListener
        );
        swiper.$wrapperEl.on(
          "gesturechange",
          ".swiper-slide",
          zoom.onGestureChange,
          passiveListener
        );
        swiper.$wrapperEl.on(
          "gestureend",
          ".swiper-slide",
          zoom.onGestureEnd,
          passiveListener
        );
      } else if (swiper.touchEvents.start === "touchstart") {
        swiper.$wrapperEl.on(
          swiper.touchEvents.start,
          ".swiper-slide",
          zoom.onGestureStart,
          passiveListener
        );
        swiper.$wrapperEl.on(
          swiper.touchEvents.move,
          ".swiper-slide",
          zoom.onGestureChange,
          passiveListener
        );
        swiper.$wrapperEl.on(
          swiper.touchEvents.end,
          ".swiper-slide",
          zoom.onGestureEnd,
          passiveListener
        );
      }
      swiper.$wrapperEl.on(
        swiper.touchEvents.move,
        "." + swiper.params.zoom.containerClass,
        zoom.onTouchMove
      );
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) {
        return;
      }
      swiper.zoom.enabled = false;
      var passiveListener =
        swiper.touchEvents.start === "touchstart" &&
        Support.passiveListener &&
        swiper.params.passiveListeners
          ? { passive: true, capture: false }
          : false;
      if (Support.gestures) {
        swiper.$wrapperEl.off(
          "gesturestart",
          ".swiper-slide",
          zoom.onGestureStart,
          passiveListener
        );
        swiper.$wrapperEl.off(
          "gesturechange",
          ".swiper-slide",
          zoom.onGestureChange,
          passiveListener
        );
        swiper.$wrapperEl.off(
          "gestureend",
          ".swiper-slide",
          zoom.onGestureEnd,
          passiveListener
        );
      } else if (swiper.touchEvents.start === "touchstart") {
        swiper.$wrapperEl.off(
          swiper.touchEvents.start,
          ".swiper-slide",
          zoom.onGestureStart,
          passiveListener
        );
        swiper.$wrapperEl.off(
          swiper.touchEvents.move,
          ".swiper-slide",
          zoom.onGestureChange,
          passiveListener
        );
        swiper.$wrapperEl.off(
          swiper.touchEvents.end,
          ".swiper-slide",
          zoom.onGestureEnd,
          passiveListener
        );
      }
      swiper.$wrapperEl.off(
        swiper.touchEvents.move,
        "." + swiper.params.zoom.containerClass,
        zoom.onTouchMove
      );
    },
  };
  var Zoom$1 = {
    name: "zoom",
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed",
      },
    },
    create: function create() {
      var swiper = this;
      var zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };
      "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
        .split(" ")
        .forEach(function (methodName) {
          zoom[methodName] = Zoom[methodName].bind(swiper);
        });
      Utils.extend(swiper, { zoom: zoom });
      var scale = 1;
      Object.defineProperty(swiper.zoom, "scale", {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl
              ? swiper.zoom.gesture.$imageEl[0]
              : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl
              ? swiper.zoom.gesture.$slideEl[0]
              : undefined;
            swiper.emit("zoomChange", value, imageEl, slideEl);
          }
          scale = value;
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) {
          return;
        }
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) {
          return;
        }
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var swiper = this;
        if (
          swiper.params.zoom.enabled &&
          swiper.zoom.enabled &&
          swiper.params.zoom.toggle
        ) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };
  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if (loadInDuplicate === void 0) loadInDuplicate = true;
      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === "undefined") {
        return;
      }
      if (swiper.slides.length === 0) {
        return;
      }
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var $slideEl = isVirtual
        ? swiper.$wrapperEl.children(
            "." +
              swiper.params.slideClass +
              '[data-swiper-slide-index="' +
              index +
              '"]'
          )
        : swiper.slides.eq(index);
      var $images = $slideEl.find(
        "." +
          params.elementClass +
          ":not(." +
          params.loadedClass +
          "):not(." +
          params.loadingClass +
          ")"
      );
      if (
        $slideEl.hasClass(params.elementClass) &&
        !$slideEl.hasClass(params.loadedClass) &&
        !$slideEl.hasClass(params.loadingClass)
      ) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) {
        return;
      }
      $images.each(function (imageIndex, imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);
        var background = $imageEl.attr("data-background");
        var src = $imageEl.attr("data-src");
        var srcset = $imageEl.attr("data-srcset");
        var sizes = $imageEl.attr("data-sizes");
        swiper.loadImage(
          $imageEl[0],
          src || background,
          srcset,
          sizes,
          false,
          function () {
            if (
              typeof swiper === "undefined" ||
              swiper === null ||
              !swiper ||
              (swiper && !swiper.params) ||
              swiper.destroyed
            ) {
              return;
            }
            if (background) {
              $imageEl.css("background-image", 'url("' + background + '")');
              $imageEl.removeAttr("data-background");
            } else {
              if (srcset) {
                $imageEl.attr("srcset", srcset);
                $imageEl.removeAttr("data-srcset");
              }
              if (sizes) {
                $imageEl.attr("sizes", sizes);
                $imageEl.removeAttr("data-sizes");
              }
              if (src) {
                $imageEl.attr("src", src);
                $imageEl.removeAttr("data-src");
              }
            }
            $imageEl
              .addClass(params.loadedClass)
              .removeClass(params.loadingClass);
            $slideEl.find("." + params.preloaderClass).remove();
            if (swiper.params.loop && loadInDuplicate) {
              var slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");
              if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                var originalSlide = swiper.$wrapperEl.children(
                  '[data-swiper-slide-index="' +
                    slideOriginalIndex +
                    '"]:not(.' +
                    swiper.params.slideDuplicateClass +
                    ")"
                );
                swiper.lazy.loadInSlide(originalSlide.index(), false);
              } else {
                var duplicatedSlide = swiper.$wrapperEl.children(
                  "." +
                    swiper.params.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    slideOriginalIndex +
                    '"]'
                );
                swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
              }
            }
            swiper.emit("lazyImageReady", $slideEl[0], $imageEl[0]);
          }
        );
        swiper.emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperParams = swiper.params;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;
      var slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === "auto") {
        slidesPerView = 0;
      }
      function slideExist(index) {
        if (isVirtual) {
          if (
            $wrapperEl.children(
              "." +
                swiperParams.slideClass +
                '[data-swiper-slide-index="' +
                index +
                '"]'
            ).length
          ) {
            return true;
          }
        } else if (slides[index]) {
          return true;
        }
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr("data-swiper-slide-index");
        }
        return $(slideEl).index();
      }
      if (!swiper.lazy.initialImageLoaded) {
        swiper.lazy.initialImageLoaded = true;
      }
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl
          .children("." + swiperParams.slideVisibleClass)
          .each(function (elIndex, slideEl) {
            var index = isVirtual
              ? $(slideEl).attr("data-swiper-slide-index")
              : $(slideEl).index();
            swiper.lazy.loadInSlide(index);
          });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) {
            swiper.lazy.loadInSlide(i);
          }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (
          slidesPerView > 1 ||
          (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)
        ) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(
            activeIndex + spv + Math.max(amount, spv),
            slides.length
          );
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          for (
            var i$1 = activeIndex + slidesPerView;
            i$1 < maxIndex;
            i$1 += 1
          ) {
            if (slideExist(i$1)) {
              swiper.lazy.loadInSlide(i$1);
            }
          }
          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) {
              swiper.lazy.loadInSlide(i$2);
            }
          }
        } else {
          var nextSlide = $wrapperEl.children(
            "." + swiperParams.slideNextClass
          );
          if (nextSlide.length > 0) {
            swiper.lazy.loadInSlide(slideIndex(nextSlide));
          }
          var prevSlide = $wrapperEl.children(
            "." + swiperParams.slidePrevClass
          );
          if (prevSlide.length > 0) {
            swiper.lazy.loadInSlide(slideIndex(prevSlide));
          }
        }
      }
    },
  };
  var Lazy$1 = {
    name: "lazy",
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        var swiper = this;
        if (
          swiper.params.lazy.enabled &&
          !swiper.params.loop &&
          swiper.params.initialSlide === 0
        ) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        var swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          if (
            swiper.params.lazy.loadOnTransitionStart ||
            (!swiper.params.lazy.loadOnTransitionStart &&
              !swiper.lazy.initialImageLoaded)
          ) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (
          swiper.params.lazy.enabled &&
          !swiper.params.lazy.loadOnTransitionStart
        ) {
          swiper.lazy.load();
        }
      },
    },
  };
  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = (function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = (maxIndex + minIndex) >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      })();
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      var i1;
      var i3;
      this.interpolate = function interpolate(x2) {
        if (!x2) {
          return 0;
        }
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;
        return (
          ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) /
            (this.x[i3] - this.x[i1]) +
          this.y[i1]
        );
      };
      return this;
    },
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      function setControlledTranslate(c) {
        var translate = swiper.rtlTranslate
          ? -swiper.translate
          : swiper.translate;
        if (swiper.params.controller.by === "slide") {
          swiper.controller.getInterpolateFunction(c);
          controlledTranslate = -swiper.controller.spline.interpolate(
            -translate
          );
        }
        if (
          !controlledTranslate ||
          swiper.params.controller.by === "container"
        ) {
          multiplier =
            (c.maxTranslate() - c.minTranslate()) /
            (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate =
            (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
        }
        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (
            controlled[i] !== byController &&
            controlled[i] instanceof Swiper
          ) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            Utils.nextTick(function () {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) {
              return;
            }
            if (c.params.loop && swiper.params.controller.by === "slide") {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (
            controlled[i] !== byController &&
            controlled[i] instanceof Swiper
          ) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: "controller",
    params: { controller: { control: undefined, inverse: false, by: "slide" } },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction:
            Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update: function update() {
        var swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        var swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        swiper.controller.setTransition(duration, byController);
      },
    },
  };
  var a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr("tabIndex", "0");
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr("role", role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr("aria-label", label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr("aria-disabled", true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr("aria-disabled", false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;
      if (e.keyCode !== 13) {
        return;
      }
      var $targetEl = $(e.target);
      if (
        swiper.navigation &&
        swiper.navigation.$nextEl &&
        $targetEl.is(swiper.navigation.$nextEl)
      ) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (
        swiper.navigation &&
        swiper.navigation.$prevEl &&
        $targetEl.is(swiper.navigation.$prevEl)
      ) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (
        swiper.pagination &&
        $targetEl.is("." + swiper.params.pagination.bulletClass)
      ) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) {
        return;
      }
      notification.html("");
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;
      if (swiper.params.loop) {
        return;
      }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;
      if (
        swiper.pagination &&
        swiper.params.pagination.clickable &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      ) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, "button");
          swiper.a11y.addElLabel(
            $bulletEl,
            params.paginationBulletMessage.replace(
              /{{index}}/,
              $bulletEl.index() + 1
            )
          );
        });
      }
    },
    init: function init() {
      var swiper = this;
      swiper.$el.append(swiper.a11y.liveRegion);
      var params = swiper.params.a11y;
      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, "button");
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on("keydown", swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, "button");
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on("keydown", swiper.a11y.onEnterKey);
      }
      if (
        swiper.pagination &&
        swiper.params.pagination.clickable &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      ) {
        swiper.pagination.$el.on(
          "keydown",
          "." + swiper.params.pagination.bulletClass,
          swiper.a11y.onEnterKey
        );
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) {
        swiper.a11y.liveRegion.remove();
      }
      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off("keydown", swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off("keydown", swiper.a11y.onEnterKey);
      }
      if (
        swiper.pagination &&
        swiper.params.pagination.clickable &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      ) {
        swiper.pagination.$el.off(
          "keydown",
          "." + swiper.params.pagination.bulletClass,
          swiper.a11y.onEnterKey
        );
      }
    },
  };
  var A11y = {
    name: "a11y",
    params: {
      a11y: {
        enabled: true,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $(
            '<span class="' +
              swiper.params.a11y.notificationClass +
              '" aria-live="assertive" aria-atomic="true"></span>'
          ),
        },
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.destroy();
      },
    },
  };
  var History = {
    init: function init() {
      var swiper = this;
      if (!swiper.params.history) {
        return;
      }
      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) {
        return;
      }
      history.scrollToSlide(
        0,
        history.paths.value,
        swiper.params.runCallbacksOnInit
      );
      if (!swiper.params.history.replaceState) {
        win.addEventListener("popstate", swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.history.replaceState) {
        win.removeEventListener("popstate", swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(
        swiper.params.speed,
        swiper.history.paths.value,
        false
      );
    },
    getPathValues: function getPathValues() {
      var pathArray = win.location.pathname
        .slice(1)
        .split("/")
        .filter(function (part) {
          return part !== "";
        });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return { key: key, value: value };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) {
        return;
      }
      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr("data-history"));
      if (!win.location.pathname.includes(key)) {
        value = key + "/" + value;
      }
      var currentState = win.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        win.history.replaceState({ value: value }, null, value);
      } else {
        win.history.pushState({ value: value }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text
        .toString()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;
      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr("data-history"));
          if (
            slideHistory === value &&
            !slide.hasClass(swiper.params.slideDuplicateClass)
          ) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };
  var History$1 = {
    name: "history",
    params: { history: { enabled: false, replaceState: false, key: "slides" } },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(
            swiper.params.history.key,
            swiper.activeIndex
          );
        }
      },
    },
  };
  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var newHash = doc.location.hash.replace("#", "");
      var activeSlideHash = swiper.slides
        .eq(swiper.activeIndex)
        .attr("data-hash");
      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl
          .children(
            "." + swiper.params.slideClass + '[data-hash="' + newHash + '"]'
          )
          .index();
        if (typeof newIndex === "undefined") {
          return;
        }
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;
      if (
        !swiper.hashNavigation.initialized ||
        !swiper.params.hashNavigation.enabled
      ) {
        return;
      }
      if (
        swiper.params.hashNavigation.replaceState &&
        win.history &&
        win.history.replaceState
      ) {
        win.history.replaceState(
          null,
          null,
          "#" + swiper.slides.eq(swiper.activeIndex).attr("data-hash") || ""
        );
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr("data-hash") || slide.attr("data-history");
        doc.location.hash = hash || "";
      }
    },
    init: function init() {
      var swiper = this;
      if (
        !swiper.params.hashNavigation.enabled ||
        (swiper.params.history && swiper.params.history.enabled)
      ) {
        return;
      }
      swiper.hashNavigation.initialized = true;
      var hash = doc.location.hash.replace("#", "");
      if (hash) {
        var speed = 0;
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr("data-hash") || slide.attr("data-history");
          if (
            slideHash === hash &&
            !slide.hasClass(swiper.params.slideDuplicateClass)
          ) {
            var index = slide.index();
            swiper.slideTo(
              index,
              speed,
              swiper.params.runCallbacksOnInit,
              true
            );
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(win).on("hashchange", swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        $(win).off("hashchange", swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };
  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr("data-swiper-autoplay")) {
        delay =
          $activeSlideEl.attr("data-swiper-autoplay") ||
          swiper.params.autoplay.delay;
      }
      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit("autoplay");
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(
              swiper.slides.length - 1,
              swiper.params.speed,
              true,
              true
            );
            swiper.emit("autoplay");
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else {
          swiper.autoplay.stop();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== "undefined") {
        return false;
      }
      if (swiper.autoplay.running) {
        return false;
      }
      swiper.autoplay.running = true;
      swiper.emit("autoplayStart");
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) {
        return false;
      }
      if (typeof swiper.autoplay.timeout === "undefined") {
        return false;
      }
      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit("autoplayStop");
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) {
        return;
      }
      if (swiper.autoplay.paused) {
        return;
      }
      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
      }
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener(
          "transitionend",
          swiper.autoplay.onTransitionEnd
        );
        swiper.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          swiper.autoplay.onTransitionEnd
        );
      }
    },
  };
  var Autoplay$1 = {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: false,
        delay: 3e3,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) {
              return;
            }
            if (e.target !== this) {
              return;
            }
            swiper.$wrapperEl[0].removeEventListener(
              "transitionend",
              swiper.autoplay.onTransitionEnd
            );
            swiper.$wrapperEl[0].removeEventListener(
              "webkitTransitionEnd",
              swiper.autoplay.onTransitionEnd
            );
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      },
    },
  };
  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) {
          tx -= swiper.translate;
        }
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({ opacity: slideOpacity })
          .transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) {
            return;
          }
          if (!swiper || swiper.destroyed) {
            return;
          }
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ["webkitTransitionEnd", "transitionend"];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };
  var EffectFade = {
    name: "effect-fade",
    params: { fadeEffect: { crossFade: false } },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== "fade") {
          return;
        }
        swiper.classNames.push(swiper.params.containerModifierClass + "fade");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== "fade") {
          return;
        }
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== "fade") {
          return;
        }
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };
  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var rtl = swiper.rtlTranslate;
      var swiperSize = swiper.size;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: swiperWidth + "px" });
        } else {
          $cubeShadowEl = $el.find(".swiper-cube-shadow");
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
        }
        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }
        if (rtl) {
          tx = -tx;
        }
        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }
        var transform =
          "rotateX(" +
          (isHorizontal ? 0 : -slideAngle) +
          "deg) rotateY(" +
          (isHorizontal ? slideAngle : 0) +
          "deg) translate3d(" +
          tx +
          "px, " +
          ty +
          "px, " +
          tz +
          "px)";
        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) {
            wrapperRotate = -slideIndex * 90 - progress * 90;
          }
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          var shadowBefore = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-left")
            : $slideEl.find(".swiper-slide-shadow-top");
          var shadowAfter = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-right")
            : $slideEl.find(".swiper-slide-shadow-bottom");
          if (shadowBefore.length === 0) {
            shadowBefore = $(
              '<div class="swiper-slide-shadow-' +
                (isHorizontal ? "left" : "top") +
                '"></div>'
            );
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(
              '<div class="swiper-slide-shadow-' +
                (isHorizontal ? "right" : "bottom") +
                '"></div>'
            );
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) {
            shadowBefore[0].style.opacity = Math.max(-progress, 0);
          }
          if (shadowAfter.length) {
            shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
      }
      $wrapperEl.css({
        "-webkit-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
        "transform-origin": "50% 50% -" + swiperSize / 2 + "px",
      });
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(
            "translate3d(0px, " +
              (swiperWidth / 2 + params.shadowOffset) +
              "px, " +
              -swiperWidth / 2 +
              "px) rotateX(90deg) rotateZ(0deg) scale(" +
              params.shadowScale +
              ")"
          );
        } else {
          var shadowAngle =
            Math.abs(wrapperRotate) -
            Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          var multiplier =
            1.5 -
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
              Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform(
            "scale3d(" +
              scale1 +
              ", 1, " +
              scale2 +
              ") translate3d(0px, " +
              (swiperHeight / 2 + offset) +
              "px, " +
              -swiperHeight / 2 / scale2 +
              "px) rotateX(-90deg)"
          );
        }
      }
      var zFactor =
        Browser.isSafari || Browser.isUiWebView ? -swiperSize / 2 : 0;
      $wrapperEl.transform(
        "translate3d(0px,0," +
          zFactor +
          "px) rotateX(" +
          (swiper.isHorizontal() ? 0 : wrapperRotate) +
          "deg) rotateY(" +
          (swiper.isHorizontal() ? -wrapperRotate : 0) +
          "deg)"
      );
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      slides
        .transition(duration)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find(".swiper-cube-shadow").transition(duration);
      }
    },
  };
  var EffectCube = {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== "cube") {
          return;
        }
        swiper.classNames.push(swiper.params.containerModifierClass + "cube");
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== "cube") {
          return;
        }
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== "cube") {
          return;
        }
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };
  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }
        $slideEl[0].style.zIndex =
          -Math.abs(Math.round(progress)) + slides.length;
        if (swiper.params.flipEffect.slideShadows) {
          var shadowBefore = swiper.isHorizontal()
            ? $slideEl.find(".swiper-slide-shadow-left")
            : $slideEl.find(".swiper-slide-shadow-top");
          var shadowAfter = swiper.isHorizontal()
            ? $slideEl.find(".swiper-slide-shadow-right")
            : $slideEl.find(".swiper-slide-shadow-bottom");
          if (shadowBefore.length === 0) {
            shadowBefore = $(
              '<div class="swiper-slide-shadow-' +
                (swiper.isHorizontal() ? "left" : "top") +
                '"></div>'
            );
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(
              '<div class="swiper-slide-shadow-' +
                (swiper.isHorizontal() ? "right" : "bottom") +
                '"></div>'
            );
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) {
            shadowBefore[0].style.opacity = Math.max(-progress, 0);
          }
          if (shadowAfter.length) {
            shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
        $slideEl.transform(
          "translate3d(" +
            tx +
            "px, " +
            ty +
            "px, 0px) rotateX(" +
            rotateX +
            "deg) rotateY(" +
            rotateY +
            "deg)"
        );
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) {
            return;
          }
          if (!swiper || swiper.destroyed) {
            return;
          }
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ["webkitTransitionEnd", "transitionend"];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };
  var EffectFlip = {
    name: "effect-flip",
    params: { flipEffect: { slideShadows: true, limitRotation: true } },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== "flip") {
          return;
        }
        swiper.classNames.push(swiper.params.containerModifierClass + "flip");
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== "flip") {
          return;
        }
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== "flip") {
          return;
        }
        swiper.flipEffect.setTransition(duration);
      },
    },
  };
  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal
        ? -transform + swiperWidth / 2
        : -transform + swiperHeight / 2;
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth;
      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier =
          ((center - slideOffset - slideSize / 2) / slideSize) *
          params.modifier;
        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        var translateZ = -translate * Math.abs(offsetMultiplier);
        var translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
        var translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;
        if (Math.abs(translateX) < 0.001) {
          translateX = 0;
        }
        if (Math.abs(translateY) < 0.001) {
          translateY = 0;
        }
        if (Math.abs(translateZ) < 0.001) {
          translateZ = 0;
        }
        if (Math.abs(rotateY) < 0.001) {
          rotateY = 0;
        }
        if (Math.abs(rotateX) < 0.001) {
          rotateX = 0;
        }
        var slideTransform =
          "translate3d(" +
          translateX +
          "px," +
          translateY +
          "px," +
          translateZ +
          "px)  rotateX(" +
          rotateX +
          "deg) rotateY(" +
          rotateY +
          "deg)";
        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          var $shadowBeforeEl = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-left")
            : $slideEl.find(".swiper-slide-shadow-top");
          var $shadowAfterEl = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-right")
            : $slideEl.find(".swiper-slide-shadow-bottom");
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $(
              '<div class="swiper-slide-shadow-' +
                (isHorizontal ? "left" : "top") +
                '"></div>'
            );
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $(
              '<div class="swiper-slide-shadow-' +
                (isHorizontal ? "right" : "bottom") +
                '"></div>'
            );
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) {
            $shadowBeforeEl[0].style.opacity =
              offsetMultiplier > 0 ? offsetMultiplier : 0;
          }
          if ($shadowAfterEl.length) {
            $shadowAfterEl[0].style.opacity =
              -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }
      }
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        var ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + "px 50%";
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides
        .transition(duration)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(duration);
    },
  };
  var EffectCoverflow = {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== "coverflow") {
          return;
        }
        swiper.classNames.push(
          swiper.params.containerModifierClass + "coverflow"
        );
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== "coverflow") {
          return;
        }
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== "coverflow") {
          return;
        }
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };
  var Thumbs = {
    init: function init() {
      var swiper = this;
      var ref = swiper.params;
      var thumbsParams = ref.thumbs;
      var SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Utils.extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(
          Utils.extend({}, thumbsParams.swiper, {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: false,
          })
        );
        swiper.thumbs.swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(
        swiper.params.thumbs.thumbsContainerClass
      );
      swiper.thumbs.swiper.on("tap", swiper.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) {
        return;
      }
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (
        clickedSlide &&
        $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)
      ) {
        return;
      }
      if (typeof clickedIndex === "undefined" || clickedIndex === null) {
        return;
      }
      var slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt(
          $(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"),
          10
        );
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;
        if (
          swiper.slides
            .eq(currentIndex)
            .hasClass(swiper.params.slideDuplicateClass)
        ) {
          swiper.loopFix();
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        var prevIndex = swiper.slides
          .eq(currentIndex)
          .prevAll('[data-swiper-slide-index="' + slideToIndex + '"]')
          .eq(0)
          .index();
        var nextIndex = swiper.slides
          .eq(currentIndex)
          .nextAll('[data-swiper-slide-index="' + slideToIndex + '"]')
          .eq(0)
          .index();
        if (typeof prevIndex === "undefined") {
          slideToIndex = nextIndex;
        } else if (typeof nextIndex === "undefined") {
          slideToIndex = prevIndex;
        } else if (nextIndex - currentIndex < currentIndex - prevIndex) {
          slideToIndex = nextIndex;
        } else {
          slideToIndex = prevIndex;
        }
      }
      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) {
        return;
      }
      var slidesPerView =
        thumbsSwiper.params.slidesPerView === "auto"
          ? thumbsSwiper.slidesPerViewDynamic()
          : thumbsSwiper.params.slidesPerView;
      if (swiper.realIndex !== thumbsSwiper.realIndex) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        if (thumbsSwiper.params.loop) {
          if (
            thumbsSwiper.slides
              .eq(currentThumbsIndex)
              .hasClass(thumbsSwiper.params.slideDuplicateClass)
          ) {
            thumbsSwiper.loopFix();
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          var prevThumbsIndex = thumbsSwiper.slides
            .eq(currentThumbsIndex)
            .prevAll('[data-swiper-slide-index="' + swiper.realIndex + '"]')
            .eq(0)
            .index();
          var nextThumbsIndex = thumbsSwiper.slides
            .eq(currentThumbsIndex)
            .nextAll('[data-swiper-slide-index="' + swiper.realIndex + '"]')
            .eq(0)
            .index();
          if (typeof prevThumbsIndex === "undefined") {
            newThumbsIndex = nextThumbsIndex;
          } else if (typeof nextThumbsIndex === "undefined") {
            newThumbsIndex = prevThumbsIndex;
          } else if (
            nextThumbsIndex - currentThumbsIndex ===
            currentThumbsIndex - prevThumbsIndex
          ) {
            newThumbsIndex = currentThumbsIndex;
          } else if (
            nextThumbsIndex - currentThumbsIndex <
            currentThumbsIndex - prevThumbsIndex
          ) {
            newThumbsIndex = nextThumbsIndex;
          } else {
            newThumbsIndex = prevThumbsIndex;
          }
        } else {
          newThumbsIndex = swiper.realIndex;
        }
        if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex =
                newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex =
                newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }
      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }
      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (thumbsSwiper.params.loop) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl
            .children(
              '[data-swiper-slide-index="' + (swiper.realIndex + i) + '"]'
            )
            .addClass(thumbActiveClass);
        }
      } else {
        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
          thumbsSwiper.slides
            .eq(swiper.realIndex + i$1)
            .addClass(thumbActiveClass);
        }
      }
    },
  };
  var Thumbs$1 = {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs",
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        var ref = swiper.params;
        var thumbs = ref.thumbs;
        if (!thumbs || !thumbs.swiper) {
          return;
        }
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (!swiper.thumbs.swiper) {
          return;
        }
        swiper.thumbs.update();
      },
      update: function update() {
        var swiper = this;
        if (!swiper.thumbs.swiper) {
          return;
        }
        swiper.thumbs.update();
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.thumbs.swiper) {
          return;
        }
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.thumbs.swiper) {
          return;
        }
        swiper.thumbs.update();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) {
          return;
        }
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) {
          return;
        }
        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };
  var components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1,
  ];
  if (typeof Swiper.use === "undefined") {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }
  Swiper.use(components);
  return Swiper;
});
(function (window, doc) {
  "use strict";
  function grained(ele, opt) {
    var element = null,
      elementId = null,
      selectorElement = null;
    if (typeof ele === "string") {
      element = doc.getElementById(ele.split("#")[1]);
    }
    if (!element) {
      console.error("Grained: cannot find the element with id " + ele);
      return;
    } else {
      elementId = element.id;
    }
    if (element.style.position !== "absolute") {
      element.style.position = "relative";
    }
    element.style.overflow = "hidden";
    var prefixes = ["", "-moz-", "-o-animation-", "-webkit-", "-ms-"];
    var options = {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.1,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1,
      grainChaos: 0.5,
      grainSpeed: 20,
    };
    Object.keys(opt).forEach(function (key) {
      options[key] = opt[key];
    });
    var generateNoise = function () {
      var canvas = doc.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = options.patternWidth;
      canvas.height = options.patternHeight;
      for (var w = 0; w < options.patternWidth; w += options.grainDensity) {
        for (var h = 0; h < options.patternHeight; h += options.grainDensity) {
          var rgb = (Math.random() * 256) | 0;
          ctx.fillStyle =
            "rgba(" + [rgb, rgb, rgb, options.grainOpacity].join() + ")";
          ctx.fillRect(w, h, options.grainWidth, options.grainHeight);
        }
      }
      return canvas.toDataURL("image/png");
    };
    function addCSSRule(sheet, selector, rules, index) {
      var ins = "";
      if (selector.length) {
        ins = selector + "{" + rules + "}";
      } else {
        ins = rules;
      }
      if ("insertRule" in sheet) {
        sheet.insertRule(ins, index);
      } else if ("addRule" in sheet) {
        sheet.addRule(selector, rules, index);
      }
    }
    var noise = generateNoise();
    var animation = "",
      keyFrames = [
        "0%:-10%,10%",
        "10%:-25%,0%",
        "20%:-30%,10%",
        "30%:-30%,30%",
        "40%::-20%,20%",
        "50%:-15%,10%",
        "60%:-20%,20%",
        "70%:-5%,20%",
        "80%:-25%,5%",
        "90%:-30%,25%",
        "100%:-10%,10%",
      ];
    var pre = prefixes.length;
    while (pre--) {
      animation += "@" + prefixes[pre] + "keyframes grained{";
      for (var key = 0; key < keyFrames.length; key++) {
        var keyVal = keyFrames[key].split(":");
        animation += keyVal[0] + "{";
        animation += prefixes[pre] + "transform:translate(" + keyVal[1] + ");";
        animation += "}";
      }
      animation += "}";
    }
    var animationAdded = doc.getElementById("grained-animation");
    if (animationAdded) {
      animationAdded.parentElement.removeChild(animationAdded);
    }
    var style = doc.createElement("style");
    style.type = "text/css";
    style.id = "grained-animation";
    style.innerHTML = animation;
    doc.body.appendChild(style);
    var styleAdded = doc.getElementById("grained-animation-" + elementId);
    if (styleAdded) {
      styleAdded.parentElement.removeChild(styleAdded);
    }
    style = doc.createElement("style");
    style.type = "text/css";
    style.id = "grained-animation-" + elementId;
    doc.body.appendChild(style);
    var rule = "background-image: url(" + noise + ");";
    rule +=
      'position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;';
    pre = prefixes.length;
    if (options.animate) {
      while (pre--) {
        rule += prefixes[pre] + "animation-name:grained;";
        rule += prefixes[pre] + "animation-iteration-count: infinite;";
        rule +=
          prefixes[pre] + "animation-duration: " + options.grainChaos + "s;";
        rule +=
          prefixes[pre] +
          "animation-timing-function: steps(" +
          options.grainSpeed +
          ", end);";
      }
    }
    selectorElement = "#" + elementId + "::before";
    addCSSRule(style.sheet, selectorElement, rule);
  }
  window.grained = grained;
})(window, document);
function initMap() {
  var e = {
    zoom: 16,
    center: new google.maps.LatLng(48.859003, 2.345275),
    mapTypeControl: !1,
    disableDefaultUI: !0,
    zoomControl: !1,
    scrollwheel: !1,
    styles: [
      {
        stylers: [
          { hue: "#ff1a00" },
          { invert_lightness: !0 },
          { saturation: -100 },
          { lightness: 33 },
          { gamma: 0.5 },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#2D333C" }],
      },
      { elementType: "labels", stylers: [{ visibility: "off" }] },
      { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      {
        featureType: "administrative.land_parcel",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative.neighborhood",
        stylers: [{ visibility: "off" }],
      },
    ],
  };
  new google.maps.Map(document.getElementById("map"), e);
}
!(function (n) {
  "use strict";
  (window.onpageshow = function (e) {
    e.persisted && window.location.reload();
  }),
    n(window).on("load", function () {
      var e = n(".preloader");
      e.find(".spinner").fadeOut(function () {
        e.fadeOut();
      }),
        n(".lines").addClass("finish"),
        setTimeout(function () {
          n(".lines").addClass("ready");
        }, 2e3),
        n(".typed-subtitle").length &&
          1 < n(".h-subtitle p").length &&
          n(".typed-subtitle").each(function () {
            n(this).typed({
              stringsElement: n(this).prev(".typing-subtitle"),
              loop: !0,
            });
          }),
        setTimeout(function () {
          n(".h-subtitles").addClass("ready"),
            n(".typed-bread").length &&
              n(".typed-bread").typed({
                stringsElement: n(".typing-bread"),
                showCursor: !1,
              });
        }, 1e3);
      var a = location.hash,
        t = n(a);
      if (
        (0 == a.indexOf("#section-") &&
          t.length &&
          n("body, html").animate({ scrollTop: n(a).offset().top - 68 }, 400),
        n(".jarallax").length && n(".jarallax").jarallax(),
        n(".started-carousel").length)
      ) {
        var i = new Swiper(".started-carousel .swiper-container", {
          init: !1,
          loop: !1,
          spaceBetween: 0,
          effect: "fade",
          slidesPerView: 1,
          simulateTouch: !1,
          autoplay: {
            delay: 6e3,
            disableOnInteraction: !1,
            waitForTransition: !1,
          },
          navigation: {
            nextEl: ".started .swiper-button-next",
            prevEl: ".started .swiper-button-prev",
          },
        });
        i.on("slideChange", function () {
          var t = i.realIndex,
            s = i.slides.length;
          n(".started-carousel .swiper-slide").removeClass("first"),
            n(".started-carousel .swiper-slide").each(function (e, a) {
              e <= t - 1
                ? n(a).addClass("swiper-clip-active")
                : n(a).removeClass("swiper-clip-active");
            }),
            n(".started-carousel .swiper-slide").each(function (e, a) {
              n(a).css({ "z-index": s - e });
            });
        }),
          i.init();
      }
      if (n(".reviews-carousel").length)
        new Swiper(".reviews-carousel .swiper-container", {
          loop: !0,
          spaceBetween: 70,
          slidesPerView: 2,
          autoplay: { delay: 6e3 },
          navigation: {
            nextEl: ".reviews-carousel .swiper-button-next",
            prevEl: ".reviews-carousel .swiper-button-prev",
          },
          breakpoints: {
            720: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 2, spaceBetween: 70 },
          },
        });
      setTimeout(function () {
        n(window).scrollTop(n(window).scrollTop() + 1);
      }, 100);
    });
  var e = n(window).width(),
    a = n(window).height();
  if (
    (n(".section.started").css({ height: a }),
    n(".logged-in .section.started").css({ height: a - 32 }),
    e < 783 &&
      (n(".section.started").css({ height: a }),
      n(".logged-in .section.started").css({ height: a - 46 })),
    !n(".grained-off").length)
  ) {
    grained("#grained_container", {
      animate: !0,
      patternWidth: 400,
      patternHeight: 400,
      grainOpacity: 0.15,
      grainDensity: 3,
      grainWidth: 1,
      grainHeight: 1,
    });
  }
  1199 < e &&
    (n(document).on("mousemove", function (e) {
      var a = e.pageX,
        t = e.pageY;
      n(".cursor-follower").css(
        "transform",
        "translate3d(" + a + "px," + t + "px,0px)"
      );
    }),
    n("a, .btn-group").on({
      mouseenter: function (e) {
        n(".cursor-follower")
          .stop()
          .animate(
            { width: 86, height: 86, opacity: 0.1, margin: "-43px 0 0 -43px" },
            500
          );
      },
      mouseleave: function (e) {
        n(".cursor-follower")
          .stop()
          .animate(
            { width: 26, height: 26, opacity: 0.4, margin: "-13px 0 0 -13px" },
            500
          );
      },
    })),
    n(".hover-masks a").each(function () {
      var e = n(this).html();
      n(this).wrapInner('<span class="mask-lnk"></span>'),
        n(this).append(
          '<span class="mask-lnk mask-lnk-hover">' + e + "</span>"
        );
    }),
    n(".hover-animated .circle").on({
      mouseenter: function (e) {
        0 === n(this).find(".ink").length &&
          n(this).prepend("<span class='ink'></span>");
        var a = n(this).find(".ink");
        if ((a.removeClass("animate"), !a.height() && !a.width())) {
          var t = Math.max(n(this).outerWidth(), n(this).outerHeight());
          a.css({ height: t, width: t });
        }
        var s = e.pageX - n(this).offset().left - a.width() / 2,
          i = e.pageY - n(this).offset().top - a.height() / 2;
        a.css({ top: i + "px", left: s + "px" }).addClass("ink-animate"),
          n(".cursor-follower").addClass("hide");
      },
      mouseleave: function (e) {
        var a = n(this).find(".ink"),
          t = e.pageX - n(this).offset().left - a.width() / 2,
          s = e.pageY - n(this).offset().top - a.height() / 2;
        a.css({ top: s + "px", left: t + "px" }).removeClass("ink-animate"),
          n(".cursor-follower").removeClass("hide");
      },
    }),
    n("header .top-menu, .typed-bread, .popup-box .bts, .animate-to-page").on(
      "click",
      "a",
      function () {
        var e = n(this).attr("href");
        return (
          0 == e.indexOf("#section-")
            ? (n("body").hasClass("home") || (location.href = "/" + e),
              n("body, html").animate(
                { scrollTop: n(e).offset().top - 68 },
                400
              ),
              n("header").hasClass("active") && n(".menu-btn").trigger("click"))
            : (n(".lines").removeClass("finish"),
              n(".lines").removeClass("ready"),
              n(".lines").addClass("no-lines"),
              setTimeout(function () {
                location.href = "" + e;
              }, 2500)),
          !1
        );
      }
    ),
    n(window).on("scroll", function () {
      n(this).scrollTop() >= n(".section.started").height()
        ? n("body").removeClass("background-enabled")
        : !n("header").hasClass("active") &&
          n(".video-bg").length &&
          n("body").addClass("background-enabled"),
        100 <= n(this).scrollTop() &&
          1 < n(".section").length &&
          (n(".header").addClass("fixed"),
          n(".footer").addClass("fixed"),
          n(".mouse_btn").fadeOut()),
        n(this).scrollTop() <= 100 &&
          1 < n(".section").length &&
          (n(".header").removeClass("fixed"),
          n(".footer").removeClass("fixed"),
          n(".mouse_btn").fadeIn());
    }),
    n("header").on("click", ".menu-btn", function () {
      return (
        n("header").hasClass("active")
          ? (n("header").removeClass("active"),
            n(".footer .soc").fadeIn(),
            n("body").addClass("loaded"),
            n(".video-bg").length && n("body").addClass("background-enabled"))
          : (n("header").addClass("active"),
            n(".footer .soc").hide(),
            n("body").removeClass("loaded"),
            n("body").removeClass("background-enabled")),
        !1
      );
    }),
    n(".section.about").on("click touchstart", ".btn", function () {
      location.href = n(this).attr("href");
    }),
    n(".section").on("click", ".mouse_btn", function () {
      n("body, html").animate({ scrollTop: a - 150 }, 800);
    }),
    1 < n(".section").length && n(".mouse_btn").show();
  var t = n(".portfolio-items");
  t.imagesLoaded(function () {
    if (
      (t.isotope({ percentPosition: !0, itemSelector: ".box-item" }),
      n(".portfolio-items").length)
    ) {
      var e = document.getElementsByClassName("wp-post-image");
      new simpleParallax(e);
    }
  }),
    n(".filters").on("click", ".btn-group", function () {
      var e = n(this).find("input").val();
      t.isotope({ filter: e }),
        n(".filters .btn-group label").removeClass("glitch-effect"),
        n(this).find("label").addClass("glitch-effect");
    }),
    /\.(?:jpg|jpeg|gif|png)$/i.test(n(".gallery-item:first a").attr("href")) &&
      n(".gallery-item a").magnificPopup({
        gallery: { enabled: !0 },
        type: "image",
        closeBtnInside: !1,
        mainClass: "mfp-fade",
      }),
    n(".has-popup-media").magnificPopup({
      type: "inline",
      overflowY: "auto",
      closeBtnInside: !0,
      mainClass: "mfp-fade",
    }),
    n(".has-popup-image").magnificPopup({
      type: "image",
      closeOnContentClick: !0,
      mainClass: "mfp-fade",
      image: { verticalFit: !0 },
    }),
    n(".has-popup-video").magnificPopup({
      disableOn: 700,
      type: "iframe",
      iframe: {
        patterns: {
          youtube_short: {
            index: "youtu.be/",
            id: "youtu.be/",
            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
        },
      },
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
      mainClass: "mfp-fade",
      callbacks: {
        markupParse: function (e, a, t) {
          e.find("iframe").attr("allow", "autoplay");
        },
      },
    }),
    n(".has-popup-music").magnificPopup({
      disableOn: 700,
      type: "iframe",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
      mainClass: "mfp-fade",
    }),
    n(".has-popup-gallery").on("click", function () {
      var e = n(this).attr("href");
      return (
        n(e)
          .magnificPopup({
            delegate: "a",
            type: "image",
            closeOnContentClick: !1,
            mainClass: "mfp-fade",
            removalDelay: 160,
            fixedContentPos: !1,
            gallery: { enabled: !0 },
          })
          .magnificPopup("open"),
        !1
      );
    });
  n(".video-unmuted-bg").length;
  var s = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    i = !1;
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent
  ) && (i = !0),
    n(".video-bg").length &&
      (n("body").addClass("background-enabled"),
      i
        ? n(".video-mobile-bg").each(function () {
            n(this).css(
              "background-image",
              "url(" + n(this).data("mobile-preview") + ")"
            );
          })
        : n(".jarallax-video").length &&
          n(".jarallax-video").each(function () {
            var e = n(this).data("volume");
            s || n(this).jarallax({ videoVolume: e }), s && n(this).jarallax();
          })),
    n(".section").length &&
      n(".top-menu li a").length &&
      n(window).on("scroll", function () {
        var t = n(window).scrollTop();
        n(".top-menu ul li a").each(function () {
          if (0 == n(this).attr("href").indexOf("#section-")) {
            var e = n(this),
              a = n(e.attr("href"));
            a.length &&
              a.offset().top <= t + 70 &&
              (n(".top-menu ul li").removeClass("current-menu-item"),
              e.closest("li").addClass("current-menu-item")),
              0 == t && n(".top-menu ul li").removeClass("current-menu-item");
          }
        });
      }),
    n(".single-post-text").each(function () {
      n(this).find("iframe").wrap('<div class="embed-container"></div>');
    }),
    setTimeout(function () {
      var e = n(".skills.dotted .progress"),
        a = e.width();
      e.length &&
        (e.append(
          '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
        ),
        e
          .find(".percentage")
          .append(
            '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
          ),
        e.find(".percentage .da").css({ width: a }));
    }, 1e3);
  var o = n(".skills.circles .progress");
  o.length &&
    o.append(
      '<div class="slice"><div class="bar"></div><div class="fill"></div></div>'
    ),
    n(window).resize(function () {
      var e = n(window).width(),
        a = n(window).height();
      n(".section.started").css({ height: a }),
        e < 783 && n(".section.started").css({ height: a });
      var t = n(".skills-list.dotted .progress"),
        s = t.width();
      t.length && t.find(".percentage .da").css({ width: s + 1 });
    }),
    n("#cform").validate({
      rules: {
        name: { required: !0 },
        message: { required: !0 },
        email: { required: !0, email: !0 },
      },
      success: "valid",
      submitHandler: function () {
        n.ajax({
          
          type: "post",
          dataType: "json",
          data:
            "name=" +
            n("#cform").find('input[name="name"]').val() +
            "&email=" +
            n("#cform").find('input[name="email"]').val() +
            "&message=" +
            n("#cform").find('textarea[name="message"]').val(),
          beforeSend: function () {},
          complete: function () {},
          success: function (e) {
            n("#cform").fadeOut(), n(".alert-success").delay(1e3).fadeIn();
          },
        });
      },
    }),
    n("#map").length && initMap();
})(jQuery);

(function ($) {
  "use strict";

  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/62961d197b967b1179922b9c/1g4d7oaso";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();
})(jQuery);
