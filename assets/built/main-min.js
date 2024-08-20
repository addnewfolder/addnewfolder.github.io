!(function (e, t) {
  var n = (function (e, t) {
    "use strict";
    var n, a;
    if (
      ((function () {
        var t,
          n = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            autosizesClass: "lazyautosizes",
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: 0.8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 0,
            throttleDelay: 125,
          };
        for (t in ((a = e.lazySizesConfig || e.lazysizesConfig || {}), n))
          t in a || (a[t] = n[t]);
      })(),
      !t || !t.getElementsByClassName)
    )
      return { init: function () {}, cfg: a, noSupport: !0 };
    var i = t.documentElement,
      o = e.Date,
      r = e.HTMLPictureElement,
      s = "addEventListener",
      l = "getAttribute",
      c = e[s],
      d = e.setTimeout,
      u = e.requestAnimationFrame || d,
      f = e.requestIdleCallback,
      p = /^picture$/i,
      m = ["load", "error", "lazyincluded", "_lazyloaded"],
      h = {},
      y = Array.prototype.forEach,
      v = function (e, t) {
        return (
          h[t] || (h[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
          h[t].test(e[l]("class") || "") && h[t]
        );
      },
      g = function (e, t) {
        v(e, t) ||
          e.setAttribute("class", (e[l]("class") || "").trim() + " " + t);
      },
      b = function (e, t) {
        var n;
        (n = v(e, t)) &&
          e.setAttribute("class", (e[l]("class") || "").replace(n, " "));
      },
      z = function (e, t, n) {
        var a = n ? s : "removeEventListener";
        n && z(e, t),
          m.forEach(function (n) {
            e[a](n, t);
          });
      },
      C = function (e, a, i, o, r) {
        var s = t.createEvent("Event");
        return (
          i || (i = {}),
          (i.instance = n),
          s.initEvent(a, !o, !r),
          (s.detail = i),
          e.dispatchEvent(s),
          s
        );
      },
      w = function (t, n) {
        var i;
        !r && (i = e.picturefill || a.pf)
          ? (n && n.src && !t[l]("srcset") && t.setAttribute("srcset", n.src),
            i({ reevaluate: !0, elements: [t] }))
          : n && n.src && (t.src = n.src);
      },
      $ = function (e, t) {
        return (getComputedStyle(e, null) || {})[t];
      },
      E = function (e, t, n) {
        for (n = n || e.offsetWidth; n < a.minSize && t && !e._lazysizesWidth; )
          (n = t.offsetWidth), (t = t.parentNode);
        return n;
      },
      _ = (function () {
        var e,
          n,
          a = [],
          i = [],
          o = a,
          r = function () {
            var t = o;
            for (o = a.length ? i : a, e = !0, n = !1; t.length; ) t.shift()();
            e = !1;
          },
          s = function (a, i) {
            e && !i
              ? a.apply(this, arguments)
              : (o.push(a), n || ((n = !0), (t.hidden ? d : u)(r)));
          };
        return (s._lsFlush = r), s;
      })(),
      A = function (e, t) {
        return t
          ? function () {
              _(e);
            }
          : function () {
              var t = this,
                n = arguments;
              _(function () {
                e.apply(t, n);
              });
            };
      },
      k = function (e) {
        var t,
          n = 0,
          i = a.throttleDelay,
          r = a.ricTimeout,
          s = function () {
            (t = !1), (n = o.now()), e();
          },
          l =
            f && r > 49
              ? function () {
                  f(s, { timeout: r }),
                    r !== a.ricTimeout && (r = a.ricTimeout);
                }
              : A(function () {
                  d(s);
                }, !0);
        return function (e) {
          var a;
          (e = !0 === e) && (r = 33),
            t ||
              ((t = !0),
              (a = i - (o.now() - n)) < 0 && (a = 0),
              e || a < 9 ? l() : d(l, a));
        };
      },
      x = function (e) {
        var t,
          n,
          a = function () {
            (t = null), e();
          },
          i = function () {
            var e = o.now() - n;
            e < 99 ? d(i, 99 - e) : (f || a)(a);
          };
        return function () {
          (n = o.now()), t || (t = d(i, 99));
        };
      },
      S = (function () {
        var r,
          f,
          m,
          h,
          E,
          S,
          T,
          L,
          M,
          W,
          R,
          q,
          B = /^img$/i,
          D = /^iframe$/i,
          F = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
          H = 0,
          O = 0,
          I = -1,
          P = function (e) {
            O--, (!e || O < 0 || !e.target) && (O = 0);
          },
          j = function (e) {
            return (
              null == q && (q = "hidden" == $(t.body, "visibility")),
              q ||
                !(
                  "hidden" == $(e.parentNode, "visibility") &&
                  "hidden" == $(e, "visibility")
                )
            );
          },
          U = function (e, n) {
            var a,
              o = e,
              r = j(e);
            for (
              L -= n, R += n, M -= n, W += n;
              r && (o = o.offsetParent) && o != t.body && o != i;

            )
              (r = ($(o, "opacity") || 1) > 0) &&
                "visible" != $(o, "overflow") &&
                ((a = o.getBoundingClientRect()),
                (r =
                  W > a.left &&
                  M < a.right &&
                  R > a.top - 1 &&
                  L < a.bottom + 1));
            return r;
          },
          G = function () {
            var e,
              o,
              s,
              c,
              d,
              u,
              p,
              m,
              y,
              v,
              g,
              b,
              z = n.elements;
            if ((h = a.loadMode) && O < 8 && (e = z.length)) {
              for (o = 0, I++; o < e; o++)
                if (z[o] && !z[o]._lazyRace)
                  if (!F || (n.prematureUnveil && n.prematureUnveil(z[o])))
                    Z(z[o]);
                  else if (
                    (((m = z[o][l]("data-expand")) && (u = 1 * m)) || (u = H),
                    v ||
                      ((v =
                        !a.expand || a.expand < 1
                          ? i.clientHeight > 500 && i.clientWidth > 500
                            ? 500
                            : 370
                          : a.expand),
                      (n._defEx = v),
                      (g = v * a.expFactor),
                      (b = a.hFac),
                      (q = null),
                      H < g && O < 1 && I > 2 && h > 2 && !t.hidden
                        ? ((H = g), (I = 0))
                        : (H = h > 1 && I > 1 && O < 6 ? v : 0)),
                    y !== u &&
                      ((S = innerWidth + u * b),
                      (T = innerHeight + u),
                      (p = -1 * u),
                      (y = u)),
                    (s = z[o].getBoundingClientRect()),
                    (R = s.bottom) >= p &&
                      (L = s.top) <= T &&
                      (W = s.right) >= p * b &&
                      (M = s.left) <= S &&
                      (R || W || M || L) &&
                      (a.loadHidden || j(z[o])) &&
                      ((f && O < 3 && !m && (h < 3 || I < 4)) || U(z[o], u)))
                  ) {
                    if ((Z(z[o]), (d = !0), O > 9)) break;
                  } else
                    !d &&
                      f &&
                      !c &&
                      O < 4 &&
                      I < 4 &&
                      h > 2 &&
                      (r[0] || a.preloadAfterLoad) &&
                      (r[0] ||
                        (!m &&
                          (R ||
                            W ||
                            M ||
                            L ||
                            "auto" != z[o][l](a.sizesAttr)))) &&
                      (c = r[0] || z[o]);
              c && !d && Z(c);
            }
          },
          X = k(G),
          J = function (e) {
            var t = e.target;
            t._lazyCache
              ? delete t._lazyCache
              : (P(e),
                g(t, a.loadedClass),
                b(t, a.loadingClass),
                z(t, Q),
                C(t, "lazyloaded"));
          },
          K = A(J),
          Q = function (e) {
            K({ target: e.target });
          },
          V = function (e) {
            var t,
              n = e[l](a.srcsetAttr);
            (t = a.customMedia[e[l]("data-media") || e[l]("media")]) &&
              e.setAttribute("media", t),
              n && e.setAttribute("srcset", n);
          },
          Y = A(function (e, t, n, i, o) {
            var r, s, c, u, f, h;
            (f = C(e, "lazybeforeunveil", t)).defaultPrevented ||
              (i && (n ? g(e, a.autosizesClass) : e.setAttribute("sizes", i)),
              (s = e[l](a.srcsetAttr)),
              (r = e[l](a.srcAttr)),
              o && ((c = e.parentNode), (u = c && p.test(c.nodeName || ""))),
              (h = t.firesLoad || ("src" in e && (s || r || u))),
              (f = { target: e }),
              g(e, a.loadingClass),
              h && (clearTimeout(m), (m = d(P, 2500)), z(e, Q, !0)),
              u && y.call(c.getElementsByTagName("source"), V),
              s
                ? e.setAttribute("srcset", s)
                : r &&
                  !u &&
                  (D.test(e.nodeName)
                    ? (function (e, t) {
                        try {
                          e.contentWindow.location.replace(t);
                        } catch (n) {
                          e.src = t;
                        }
                      })(e, r)
                    : (e.src = r)),
              o && (s || u) && w(e, { src: r })),
              e._lazyRace && delete e._lazyRace,
              b(e, a.lazyClass),
              _(function () {
                var t = e.complete && e.naturalWidth > 1;
                (h && !t) ||
                  (t && g(e, "ls-is-cached"),
                  J(f),
                  (e._lazyCache = !0),
                  d(function () {
                    "_lazyCache" in e && delete e._lazyCache;
                  }, 9)),
                  "lazy" == e.loading && O--;
              }, !0);
          }),
          Z = function (e) {
            if (!e._lazyRace) {
              var t,
                n = B.test(e.nodeName),
                i = n && (e[l](a.sizesAttr) || e[l]("sizes")),
                o = "auto" == i;
              ((!o && f) ||
                !n ||
                (!e[l]("src") && !e.srcset) ||
                e.complete ||
                v(e, a.errorClass) ||
                !v(e, a.lazyClass)) &&
                ((t = C(e, "lazyunveilread").detail),
                o && N.updateElem(e, !0, e.offsetWidth),
                (e._lazyRace = !0),
                O++,
                Y(e, t, o, i, n));
            }
          },
          ee = x(function () {
            (a.loadMode = 3), X();
          }),
          te = function () {
            3 == a.loadMode && (a.loadMode = 2), ee();
          },
          ne = function () {
            if (!f) {
              if (o.now() - E < 999) return void d(ne, 999);
              (f = !0), (a.loadMode = 3), X(), c("scroll", te, !0);
            }
          };
        return {
          _: function () {
            (E = o.now()),
              (n.elements = t.getElementsByClassName(a.lazyClass)),
              (r = t.getElementsByClassName(
                a.lazyClass + " " + a.preloadClass
              )),
              c("scroll", X, !0),
              c("resize", X, !0),
              c("pageshow", function (e) {
                if (e.persisted) {
                  var n = t.querySelectorAll("." + a.loadingClass);
                  n.length &&
                    n.forEach &&
                    u(function () {
                      n.forEach(function (e) {
                        e.complete && Z(e);
                      });
                    });
                }
              }),
              e.MutationObserver
                ? new MutationObserver(X).observe(i, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                  })
                : (i[s]("DOMNodeInserted", X, !0),
                  i[s]("DOMAttrModified", X, !0),
                  setInterval(X, 999)),
              c("hashchange", X, !0),
              [
                "focus",
                "mouseover",
                "click",
                "load",
                "transitionend",
                "animationend",
              ].forEach(function (e) {
                t[s](e, X, !0);
              }),
              /d$|^c/.test(t.readyState)
                ? ne()
                : (c("load", ne), t[s]("DOMContentLoaded", X), d(ne, 2e4)),
              n.elements.length ? (G(), _._lsFlush()) : X();
          },
          checkElems: X,
          unveil: Z,
          _aLSL: te,
        };
      })(),
      N = (function () {
        var e,
          n = A(function (e, t, n, a) {
            var i, o, r;
            if (
              ((e._lazysizesWidth = a),
              (a += "px"),
              e.setAttribute("sizes", a),
              p.test(t.nodeName || ""))
            )
              for (
                i = t.getElementsByTagName("source"), o = 0, r = i.length;
                o < r;
                o++
              )
                i[o].setAttribute("sizes", a);
            n.detail.dataAttr || w(e, n.detail);
          }),
          i = function (e, t, a) {
            var i,
              o = e.parentNode;
            o &&
              ((a = E(e, o, a)),
              (i = C(e, "lazybeforesizes", { width: a, dataAttr: !!t }))
                .defaultPrevented ||
                ((a = i.detail.width) &&
                  a !== e._lazysizesWidth &&
                  n(e, o, i, a)));
          },
          o = x(function () {
            var t,
              n = e.length;
            if (n) for (t = 0; t < n; t++) i(e[t]);
          });
        return {
          _: function () {
            (e = t.getElementsByClassName(a.autosizesClass)), c("resize", o);
          },
          checkElems: o,
          updateElem: i,
        };
      })(),
      T = function () {
        !T.i && t.getElementsByClassName && ((T.i = !0), N._(), S._());
      };
    return (
      d(function () {
        a.init && T();
      }),
      (n = {
        cfg: a,
        autoSizer: N,
        loader: S,
        init: T,
        uP: w,
        aC: g,
        rC: b,
        hC: v,
        fire: C,
        gW: E,
        rAF: _,
      })
    );
  })(e, e.document);
  (e.lazySizes = n),
    "object" == typeof module && module.exports && (module.exports = n);
})("undefined" != typeof window ? window : {}),
  (function (e, t) {
    var n = t.querySelector(".js-button-pagination");
    if (n) {
      var a = t.querySelector(".post-feed");
      if (a) {
        var i = !1;
        n.addEventListener("click", function (t) {
          t.preventDefault(), i || e.requestAnimationFrame(r), (i = !1);
        });
      }
    }
    function o() {
      var e = this.response.querySelectorAll("article.post");
      e.forEach(function (n) {
        a.appendChild(t.importNode(n, !0)), console.log(e);
      }),
        n.classList.remove("loading"),
        pagination_next_page_number++,
        pagination_next_page_number > pagination_available_pages_number &&
          n.classList.add("disabled");
      var i = this.response.querySelector("link[rel=next]");
      i ? (n.href = i.href) : n.classList.add("disabled");
    }
    function r() {
      var t = new e.XMLHttpRequest();
      (t.responseType = "document"),
        t.addEventListener("load", o),
        t.open("GET", n.href),
        n.classList.add("loading"),
        t.send(null);
    }
  })(window, document);
var body = $("body");
function mobileMenu() {
  $(".siskin-burger").click(function () {
    $("body").toggleClass("siskin-head-open");
  });
}
function mobileSubmenu() {
  $(window).width() < 930 &&
    $(".siskin-nav-trigger").click(function () {
      $(this).parent().toggleClass("siskin-nav-open");
    });
}
function setNavbarHeight() {
  document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
    ? $("header#siskin-head").addClass("shrink")
    : $("header#siskin-head").removeClass("shrink");
}
function player() {
  "use strict";
  var e,
    t = $(".player"),
    n = $(".player-audio"),
    a = t.find(".post-media"),
    i = t.find(".post-image"),
    o = t.find(".post-title-link"),
    r = $(".player-progress"),
    s = 1,
    l = $(".player-button-play"),
    c = $(".player-button-backward"),
    d = $(".player-button-forward"),
    u = $(".player-button-speed"),
    f = ($(".player-button-close"), $(".player-time-current")),
    p = $(".player-time-duration"),
    m = $(".btn-download"),
    h = $(".btn-tw"),
    y = $(".btn-fb");
  $(".viewport").on("click", ".js-play", function () {
    var t = $(this),
      r = t.attr("data-url"),
      s = t.attr("data-id");
    if (
      ($(".player-external").length && body.addClass("player-opened"),
      s !== a.attr("data-id") &&
        (n.attr("src", r),
        i.attr("srcset", t.find(".post-image").attr("src")),
        o.text(t.closest(".post").find(".post-card-title").text()),
        m.attr("href", r),
        y.attr(
          "href",
          "https://www.facebook.com/sharer.php?u=" +
            site_url +
            t.closest(".post").find(".post-card-title a").attr("href")
        ),
        h.attr(
          "href",
          "https://twitter.com/intent/tweet?url=" +
            site_url +
            t.closest(".post").find(".post-card-title a").attr("href")
        ),
        $(".post-" + a.attr("data-id"))
          .find(".icon")
          .removeClass("icon-pause")
          .addClass("icon-play"),
        a.attr("data-id", s),
        l.attr("data-id", s),
        (e = $('[data-id="' + s + '"]').find(".icon-play"))),
      n[0].paused)
    ) {
      var c = n[0].play();
      void 0 !== c &&
        c
          .then(function () {
            t.find(".icon").removeClass("icon-play").addClass("icon-pause"),
              e && e.addClass("icon-pause");
          })
          .catch(function (e) {
            console.log(e);
          });
    } else
      n[0].pause(),
        t.find(".icon").removeClass("icon-pause").addClass("icon-play"),
        e && e.removeClass("icon-pause").addClass("icon-play");
  }),
    n.on("loadedmetadata", function () {
      p.text(new Date(1e3 * n[0].duration).toISOString().substr(11, 8)),
        n[0].addEventListener("timeupdate", function (e) {
          f.text(
            new Date(1e3 * e.target.currentTime).toISOString().substr(11, 8)
          ),
            r.css("width", (e.target.currentTime / n[0].duration) * 100 + "%");
        });
    }),
    c.on("click", function () {
      n[0].currentTime = n[0].currentTime - 10;
    }),
    d.on("click", function () {
      n[0].currentTime = n[0].currentTime + 30;
    }),
    u.on("click", function () {
      s < 2 ? (s += 0.5) : (s = 1), (n[0].playbackRate = s), u.text(s + "x");
    });
}
document.addEventListener("lazyloaded", function (e) {}),
  $(function () {
    "use strict";
    player(),
      mobileMenu(),
      mobileSubmenu(),
      setNavbarHeight(),
      $("#subscribe-floating-button").click(function () {
        $(".subscribe-popup").addClass("show");
      }),
      $(".subscribe-popup-form-close, .subscribe-popup-background").click(
        function () {
          $(".subscribe-popup").removeClass("show");
        }
      );
  }),
  $(window).resize(function () {
    mobileSubmenu();
  }),
  $(window).scroll(function () {
    setNavbarHeight();
  });
//# sourceMappingURL=main-min.js.map