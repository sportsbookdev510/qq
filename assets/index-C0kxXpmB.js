(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function s(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = i(a);
    fetch(a.href, u);
  }
})();
function F0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var kc = { exports: {} },
  Gs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ig;
function JA() {
  if (Ig) return Gs;
  Ig = 1;
  var t = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.fragment");
  function i(s, a, u) {
    var c = null;
    if (
      (u !== void 0 && (c = "" + u),
      a.key !== void 0 && (c = "" + a.key),
      "key" in a)
    ) {
      u = {};
      for (var h in a) h !== "key" && (u[h] = a[h]);
    } else u = a;
    return (
      (a = u.ref),
      { $$typeof: t, type: s, key: c, ref: a !== void 0 ? a : null, props: u }
    );
  }
  return (Gs.Fragment = e), (Gs.jsx = i), (Gs.jsxs = i), Gs;
}
var Ug;
function KA() {
  return Ug || ((Ug = 1), (kc.exports = JA())), kc.exports;
}
var I = KA(),
  Bc = { exports: {} },
  ue = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lg;
function XA() {
  if (Lg) return ue;
  Lg = 1;
  var t = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    T = Symbol.for("react.activity"),
    S = Symbol.iterator;
  function _(N) {
    return N === null || typeof N != "object"
      ? null
      : ((N = (S && N[S]) || N["@@iterator"]),
        typeof N == "function" ? N : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    M = {};
  function b(N, F, W) {
    (this.props = N),
      (this.context = F),
      (this.refs = M),
      (this.updater = W || C);
  }
  (b.prototype.isReactComponent = {}),
    (b.prototype.setState = function (N, F) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, N, F, "setState");
    }),
    (b.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    });
  function k() {}
  k.prototype = b.prototype;
  function P(N, F, W) {
    (this.props = N),
      (this.context = F),
      (this.refs = M),
      (this.updater = W || C);
  }
  var Y = (P.prototype = new k());
  (Y.constructor = P), R(Y, b.prototype), (Y.isPureReactComponent = !0);
  var q = Array.isArray;
  function Q() {}
  var J = { H: null, A: null, T: null, S: null },
    Z = Object.prototype.hasOwnProperty;
  function $(N, F, W) {
    var te = W.ref;
    return {
      $$typeof: t,
      type: N,
      key: F,
      ref: te !== void 0 ? te : null,
      props: W,
    };
  }
  function ae(N, F) {
    return $(N.type, F, N.props);
  }
  function ge(N) {
    return typeof N == "object" && N !== null && N.$$typeof === t;
  }
  function Pe(N) {
    var F = { "=": "=0", ":": "=2" };
    return (
      "$" +
      N.replace(/[=:]/g, function (W) {
        return F[W];
      })
    );
  }
  var Ee = /\/+/g;
  function Be(N, F) {
    return typeof N == "object" && N !== null && N.key != null
      ? Pe("" + N.key)
      : F.toString(36);
  }
  function pt(N) {
    switch (N.status) {
      case "fulfilled":
        return N.value;
      case "rejected":
        throw N.reason;
      default:
        switch (
          (typeof N.status == "string"
            ? N.then(Q, Q)
            : ((N.status = "pending"),
              N.then(
                function (F) {
                  N.status === "pending" &&
                    ((N.status = "fulfilled"), (N.value = F));
                },
                function (F) {
                  N.status === "pending" &&
                    ((N.status = "rejected"), (N.reason = F));
                }
              )),
          N.status)
        ) {
          case "fulfilled":
            return N.value;
          case "rejected":
            throw N.reason;
        }
    }
    throw N;
  }
  function G(N, F, W, te, ce) {
    var he = typeof N;
    (he === "undefined" || he === "boolean") && (N = null);
    var Ne = !1;
    if (N === null) Ne = !0;
    else
      switch (he) {
        case "bigint":
        case "string":
        case "number":
          Ne = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case t:
            case e:
              Ne = !0;
              break;
            case v:
              return (Ne = N._init), G(Ne(N._payload), F, W, te, ce);
          }
      }
    if (Ne)
      return (
        (ce = ce(N)),
        (Ne = te === "" ? "." + Be(N, 0) : te),
        q(ce)
          ? ((W = ""),
            Ne != null && (W = Ne.replace(Ee, "$&/") + "/"),
            G(ce, F, W, "", function (Yo) {
              return Yo;
            }))
          : ce != null &&
            (ge(ce) &&
              (ce = ae(
                ce,
                W +
                  (ce.key == null || (N && N.key === ce.key)
                    ? ""
                    : ("" + ce.key).replace(Ee, "$&/") + "/") +
                  Ne
              )),
            F.push(ce)),
        1
      );
    Ne = 0;
    var mt = te === "" ? "." : te + ":";
    if (q(N))
      for (var Ye = 0; Ye < N.length; Ye++)
        (te = N[Ye]), (he = mt + Be(te, Ye)), (Ne += G(te, F, W, he, ce));
    else if (((Ye = _(N)), typeof Ye == "function"))
      for (N = Ye.call(N), Ye = 0; !(te = N.next()).done; )
        (te = te.value), (he = mt + Be(te, Ye++)), (Ne += G(te, F, W, he, ce));
    else if (he === "object") {
      if (typeof N.then == "function") return G(pt(N), F, W, te, ce);
      throw (
        ((F = String(N)),
        Error(
          "Objects are not valid as a React child (found: " +
            (F === "[object Object]"
              ? "object with keys {" + Object.keys(N).join(", ") + "}"
              : F) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Ne;
  }
  function K(N, F, W) {
    if (N == null) return N;
    var te = [],
      ce = 0;
    return (
      G(N, te, "", "", function (he) {
        return F.call(W, he, ce++);
      }),
      te
    );
  }
  function ie(N) {
    if (N._status === -1) {
      var F = N._result;
      (F = F()),
        F.then(
          function (W) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 1), (N._result = W));
          },
          function (W) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 2), (N._result = W));
          }
        ),
        N._status === -1 && ((N._status = 0), (N._result = F));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var _e =
      typeof reportError == "function"
        ? reportError
        : function (N) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var F = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof N == "object" &&
                  N !== null &&
                  typeof N.message == "string"
                    ? String(N.message)
                    : String(N),
                error: N,
              });
              if (!window.dispatchEvent(F)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", N);
              return;
            }
            console.error(N);
          },
    Me = {
      map: K,
      forEach: function (N, F, W) {
        K(
          N,
          function () {
            F.apply(this, arguments);
          },
          W
        );
      },
      count: function (N) {
        var F = 0;
        return (
          K(N, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (N) {
        return (
          K(N, function (F) {
            return F;
          }) || []
        );
      },
      only: function (N) {
        if (!ge(N))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return N;
      },
    };
  return (
    (ue.Activity = T),
    (ue.Children = Me),
    (ue.Component = b),
    (ue.Fragment = i),
    (ue.Profiler = a),
    (ue.PureComponent = P),
    (ue.StrictMode = s),
    (ue.Suspense = g),
    (ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J),
    (ue.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (N) {
        return J.H.useMemoCache(N);
      },
    }),
    (ue.cache = function (N) {
      return function () {
        return N.apply(null, arguments);
      };
    }),
    (ue.cacheSignal = function () {
      return null;
    }),
    (ue.cloneElement = function (N, F, W) {
      if (N == null)
        throw Error(
          "The argument must be a React element, but you passed " + N + "."
        );
      var te = R({}, N.props),
        ce = N.key;
      if (F != null)
        for (he in (F.key !== void 0 && (ce = "" + F.key), F))
          !Z.call(F, he) ||
            he === "key" ||
            he === "__self" ||
            he === "__source" ||
            (he === "ref" && F.ref === void 0) ||
            (te[he] = F[he]);
      var he = arguments.length - 2;
      if (he === 1) te.children = W;
      else if (1 < he) {
        for (var Ne = Array(he), mt = 0; mt < he; mt++)
          Ne[mt] = arguments[mt + 2];
        te.children = Ne;
      }
      return $(N.type, ce, te);
    }),
    (ue.createContext = function (N) {
      return (
        (N = {
          $$typeof: c,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (N.Provider = N),
        (N.Consumer = { $$typeof: u, _context: N }),
        N
      );
    }),
    (ue.createElement = function (N, F, W) {
      var te,
        ce = {},
        he = null;
      if (F != null)
        for (te in (F.key !== void 0 && (he = "" + F.key), F))
          Z.call(F, te) &&
            te !== "key" &&
            te !== "__self" &&
            te !== "__source" &&
            (ce[te] = F[te]);
      var Ne = arguments.length - 2;
      if (Ne === 1) ce.children = W;
      else if (1 < Ne) {
        for (var mt = Array(Ne), Ye = 0; Ye < Ne; Ye++)
          mt[Ye] = arguments[Ye + 2];
        ce.children = mt;
      }
      if (N && N.defaultProps)
        for (te in ((Ne = N.defaultProps), Ne))
          ce[te] === void 0 && (ce[te] = Ne[te]);
      return $(N, he, ce);
    }),
    (ue.createRef = function () {
      return { current: null };
    }),
    (ue.forwardRef = function (N) {
      return { $$typeof: h, render: N };
    }),
    (ue.isValidElement = ge),
    (ue.lazy = function (N) {
      return { $$typeof: v, _payload: { _status: -1, _result: N }, _init: ie };
    }),
    (ue.memo = function (N, F) {
      return { $$typeof: p, type: N, compare: F === void 0 ? null : F };
    }),
    (ue.startTransition = function (N) {
      var F = J.T,
        W = {};
      J.T = W;
      try {
        var te = N(),
          ce = J.S;
        ce !== null && ce(W, te),
          typeof te == "object" &&
            te !== null &&
            typeof te.then == "function" &&
            te.then(Q, _e);
      } catch (he) {
        _e(he);
      } finally {
        F !== null && W.types !== null && (F.types = W.types), (J.T = F);
      }
    }),
    (ue.unstable_useCacheRefresh = function () {
      return J.H.useCacheRefresh();
    }),
    (ue.use = function (N) {
      return J.H.use(N);
    }),
    (ue.useActionState = function (N, F, W) {
      return J.H.useActionState(N, F, W);
    }),
    (ue.useCallback = function (N, F) {
      return J.H.useCallback(N, F);
    }),
    (ue.useContext = function (N) {
      return J.H.useContext(N);
    }),
    (ue.useDebugValue = function () {}),
    (ue.useDeferredValue = function (N, F) {
      return J.H.useDeferredValue(N, F);
    }),
    (ue.useEffect = function (N, F) {
      return J.H.useEffect(N, F);
    }),
    (ue.useEffectEvent = function (N) {
      return J.H.useEffectEvent(N);
    }),
    (ue.useId = function () {
      return J.H.useId();
    }),
    (ue.useImperativeHandle = function (N, F, W) {
      return J.H.useImperativeHandle(N, F, W);
    }),
    (ue.useInsertionEffect = function (N, F) {
      return J.H.useInsertionEffect(N, F);
    }),
    (ue.useLayoutEffect = function (N, F) {
      return J.H.useLayoutEffect(N, F);
    }),
    (ue.useMemo = function (N, F) {
      return J.H.useMemo(N, F);
    }),
    (ue.useOptimistic = function (N, F) {
      return J.H.useOptimistic(N, F);
    }),
    (ue.useReducer = function (N, F, W) {
      return J.H.useReducer(N, F, W);
    }),
    (ue.useRef = function (N) {
      return J.H.useRef(N);
    }),
    (ue.useState = function (N) {
      return J.H.useState(N);
    }),
    (ue.useSyncExternalStore = function (N, F, W) {
      return J.H.useSyncExternalStore(N, F, W);
    }),
    (ue.useTransition = function () {
      return J.H.useTransition();
    }),
    (ue.version = "19.2.3"),
    ue
  );
}
var Vg;
function zf() {
  return Vg || ((Vg = 1), (Bc.exports = XA())), Bc.exports;
}
var X = zf();
const QA = F0(X);
var zc = { exports: {} },
  ks = {},
  qc = { exports: {} },
  Oc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pg;
function ZA() {
  return (
    Pg ||
      ((Pg = 1),
      (function (t) {
        function e(G, K) {
          var ie = G.length;
          G.push(K);
          e: for (; 0 < ie; ) {
            var _e = (ie - 1) >>> 1,
              Me = G[_e];
            if (0 < a(Me, K)) (G[_e] = K), (G[ie] = Me), (ie = _e);
            else break e;
          }
        }
        function i(G) {
          return G.length === 0 ? null : G[0];
        }
        function s(G) {
          if (G.length === 0) return null;
          var K = G[0],
            ie = G.pop();
          if (ie !== K) {
            G[0] = ie;
            e: for (var _e = 0, Me = G.length, N = Me >>> 1; _e < N; ) {
              var F = 2 * (_e + 1) - 1,
                W = G[F],
                te = F + 1,
                ce = G[te];
              if (0 > a(W, ie))
                te < Me && 0 > a(ce, W)
                  ? ((G[_e] = ce), (G[te] = ie), (_e = te))
                  : ((G[_e] = W), (G[F] = ie), (_e = F));
              else if (te < Me && 0 > a(ce, ie))
                (G[_e] = ce), (G[te] = ie), (_e = te);
              else break e;
            }
          }
          return K;
        }
        function a(G, K) {
          var ie = G.sortIndex - K.sortIndex;
          return ie !== 0 ? ie : G.id - K.id;
        }
        if (
          ((t.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          t.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            h = c.now();
          t.unstable_now = function () {
            return c.now() - h;
          };
        }
        var g = [],
          p = [],
          v = 1,
          T = null,
          S = 3,
          _ = !1,
          C = !1,
          R = !1,
          M = !1,
          b = typeof setTimeout == "function" ? setTimeout : null,
          k = typeof clearTimeout == "function" ? clearTimeout : null,
          P = typeof setImmediate < "u" ? setImmediate : null;
        function Y(G) {
          for (var K = i(p); K !== null; ) {
            if (K.callback === null) s(p);
            else if (K.startTime <= G)
              s(p), (K.sortIndex = K.expirationTime), e(g, K);
            else break;
            K = i(p);
          }
        }
        function q(G) {
          if (((R = !1), Y(G), !C))
            if (i(g) !== null) (C = !0), Q || ((Q = !0), Pe());
            else {
              var K = i(p);
              K !== null && pt(q, K.startTime - G);
            }
        }
        var Q = !1,
          J = -1,
          Z = 5,
          $ = -1;
        function ae() {
          return M ? !0 : !(t.unstable_now() - $ < Z);
        }
        function ge() {
          if (((M = !1), Q)) {
            var G = t.unstable_now();
            $ = G;
            var K = !0;
            try {
              e: {
                (C = !1), R && ((R = !1), k(J), (J = -1)), (_ = !0);
                var ie = S;
                try {
                  t: {
                    for (
                      Y(G), T = i(g);
                      T !== null && !(T.expirationTime > G && ae());

                    ) {
                      var _e = T.callback;
                      if (typeof _e == "function") {
                        (T.callback = null), (S = T.priorityLevel);
                        var Me = _e(T.expirationTime <= G);
                        if (((G = t.unstable_now()), typeof Me == "function")) {
                          (T.callback = Me), Y(G), (K = !0);
                          break t;
                        }
                        T === i(g) && s(g), Y(G);
                      } else s(g);
                      T = i(g);
                    }
                    if (T !== null) K = !0;
                    else {
                      var N = i(p);
                      N !== null && pt(q, N.startTime - G), (K = !1);
                    }
                  }
                  break e;
                } finally {
                  (T = null), (S = ie), (_ = !1);
                }
                K = void 0;
              }
            } finally {
              K ? Pe() : (Q = !1);
            }
          }
        }
        var Pe;
        if (typeof P == "function")
          Pe = function () {
            P(ge);
          };
        else if (typeof MessageChannel < "u") {
          var Ee = new MessageChannel(),
            Be = Ee.port2;
          (Ee.port1.onmessage = ge),
            (Pe = function () {
              Be.postMessage(null);
            });
        } else
          Pe = function () {
            b(ge, 0);
          };
        function pt(G, K) {
          J = b(function () {
            G(t.unstable_now());
          }, K);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (G) {
            G.callback = null;
          }),
          (t.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Z = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (t.unstable_next = function (G) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = S;
            }
            var ie = S;
            S = K;
            try {
              return G();
            } finally {
              S = ie;
            }
          }),
          (t.unstable_requestPaint = function () {
            M = !0;
          }),
          (t.unstable_runWithPriority = function (G, K) {
            switch (G) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                G = 3;
            }
            var ie = S;
            S = G;
            try {
              return K();
            } finally {
              S = ie;
            }
          }),
          (t.unstable_scheduleCallback = function (G, K, ie) {
            var _e = t.unstable_now();
            switch (
              (typeof ie == "object" && ie !== null
                ? ((ie = ie.delay),
                  (ie = typeof ie == "number" && 0 < ie ? _e + ie : _e))
                : (ie = _e),
              G)
            ) {
              case 1:
                var Me = -1;
                break;
              case 2:
                Me = 250;
                break;
              case 5:
                Me = 1073741823;
                break;
              case 4:
                Me = 1e4;
                break;
              default:
                Me = 5e3;
            }
            return (
              (Me = ie + Me),
              (G = {
                id: v++,
                callback: K,
                priorityLevel: G,
                startTime: ie,
                expirationTime: Me,
                sortIndex: -1,
              }),
              ie > _e
                ? ((G.sortIndex = ie),
                  e(p, G),
                  i(g) === null &&
                    G === i(p) &&
                    (R ? (k(J), (J = -1)) : (R = !0), pt(q, ie - _e)))
                : ((G.sortIndex = Me),
                  e(g, G),
                  C || _ || ((C = !0), Q || ((Q = !0), Pe()))),
              G
            );
          }),
          (t.unstable_shouldYield = ae),
          (t.unstable_wrapCallback = function (G) {
            var K = S;
            return function () {
              var ie = S;
              S = K;
              try {
                return G.apply(this, arguments);
              } finally {
                S = ie;
              }
            };
          });
      })(Oc)),
    Oc
  );
}
var Hg;
function $A() {
  return Hg || ((Hg = 1), (qc.exports = ZA())), qc.exports;
}
var Fc = { exports: {} },
  ft = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gg;
function WA() {
  if (Gg) return ft;
  Gg = 1;
  var t = zf();
  function e(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var s = {
      d: {
        f: i,
        r: function () {
          throw Error(e(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    a = Symbol.for("react.portal");
  function u(g, p, v) {
    var T =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: a,
      key: T == null ? null : "" + T,
      children: g,
      containerInfo: p,
      implementation: v,
    };
  }
  var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (ft.createPortal = function (g, p) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(e(299));
      return u(g, p, null, v);
    }),
    (ft.flushSync = function (g) {
      var p = c.T,
        v = s.p;
      try {
        if (((c.T = null), (s.p = 2), g)) return g();
      } finally {
        (c.T = p), (s.p = v), s.d.f();
      }
    }),
    (ft.preconnect = function (g, p) {
      typeof g == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        s.d.C(g, p));
    }),
    (ft.prefetchDNS = function (g) {
      typeof g == "string" && s.d.D(g);
    }),
    (ft.preinit = function (g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var v = p.as,
          T = h(v, p.crossOrigin),
          S = typeof p.integrity == "string" ? p.integrity : void 0,
          _ = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        v === "style"
          ? s.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: T,
              integrity: S,
              fetchPriority: _,
            })
          : v === "script" &&
            s.d.X(g, {
              crossOrigin: T,
              integrity: S,
              fetchPriority: _,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (ft.preinitModule = function (g, p) {
      if (typeof g == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var v = h(p.as, p.crossOrigin);
            s.d.M(g, {
              crossOrigin: v,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && s.d.M(g);
    }),
    (ft.preload = function (g, p) {
      if (
        typeof g == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var v = p.as,
          T = h(v, p.crossOrigin);
        s.d.L(g, v, {
          crossOrigin: T,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (ft.preloadModule = function (g, p) {
      if (typeof g == "string")
        if (p) {
          var v = h(p.as, p.crossOrigin);
          s.d.m(g, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else s.d.m(g);
    }),
    (ft.requestFormReset = function (g) {
      s.d.r(g);
    }),
    (ft.unstable_batchedUpdates = function (g, p) {
      return g(p);
    }),
    (ft.useFormState = function (g, p, v) {
      return c.H.useFormState(g, p, v);
    }),
    (ft.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (ft.version = "19.2.3"),
    ft
  );
}
var kg;
function jA() {
  if (kg) return Fc.exports;
  kg = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (e) {
        console.error(e);
      }
  }
  return t(), (Fc.exports = WA()), Fc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bg;
function eC() {
  if (Bg) return ks;
  Bg = 1;
  var t = $A(),
    e = zf(),
    i = jA();
  function s(n) {
    var o = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      o += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        o += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      n +
      "; visit " +
      o +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function u(n) {
    var o = n,
      l = n;
    if (n.alternate) for (; o.return; ) o = o.return;
    else {
      n = o;
      do (o = n), (o.flags & 4098) !== 0 && (l = o.return), (n = o.return);
      while (n);
    }
    return o.tag === 3 ? l : null;
  }
  function c(n) {
    if (n.tag === 13) {
      var o = n.memoizedState;
      if (
        (o === null && ((n = n.alternate), n !== null && (o = n.memoizedState)),
        o !== null)
      )
        return o.dehydrated;
    }
    return null;
  }
  function h(n) {
    if (n.tag === 31) {
      var o = n.memoizedState;
      if (
        (o === null && ((n = n.alternate), n !== null && (o = n.memoizedState)),
        o !== null)
      )
        return o.dehydrated;
    }
    return null;
  }
  function g(n) {
    if (u(n) !== n) throw Error(s(188));
  }
  function p(n) {
    var o = n.alternate;
    if (!o) {
      if (((o = u(n)), o === null)) throw Error(s(188));
      return o !== n ? null : n;
    }
    for (var l = n, r = o; ; ) {
      var m = l.return;
      if (m === null) break;
      var y = m.alternate;
      if (y === null) {
        if (((r = m.return), r !== null)) {
          l = r;
          continue;
        }
        break;
      }
      if (m.child === y.child) {
        for (y = m.child; y; ) {
          if (y === l) return g(m), n;
          if (y === r) return g(m), o;
          y = y.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== r.return) (l = m), (r = y);
      else {
        for (var E = !1, A = m.child; A; ) {
          if (A === l) {
            (E = !0), (l = m), (r = y);
            break;
          }
          if (A === r) {
            (E = !0), (r = m), (l = y);
            break;
          }
          A = A.sibling;
        }
        if (!E) {
          for (A = y.child; A; ) {
            if (A === l) {
              (E = !0), (l = y), (r = m);
              break;
            }
            if (A === r) {
              (E = !0), (r = y), (l = m);
              break;
            }
            A = A.sibling;
          }
          if (!E) throw Error(s(189));
        }
      }
      if (l.alternate !== r) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? n : o;
  }
  function v(n) {
    var o = n.tag;
    if (o === 5 || o === 26 || o === 27 || o === 6) return n;
    for (n = n.child; n !== null; ) {
      if (((o = v(n)), o !== null)) return o;
      n = n.sibling;
    }
    return null;
  }
  var T = Object.assign,
    S = Symbol.for("react.element"),
    _ = Symbol.for("react.transitional.element"),
    C = Symbol.for("react.portal"),
    R = Symbol.for("react.fragment"),
    M = Symbol.for("react.strict_mode"),
    b = Symbol.for("react.profiler"),
    k = Symbol.for("react.consumer"),
    P = Symbol.for("react.context"),
    Y = Symbol.for("react.forward_ref"),
    q = Symbol.for("react.suspense"),
    Q = Symbol.for("react.suspense_list"),
    J = Symbol.for("react.memo"),
    Z = Symbol.for("react.lazy"),
    $ = Symbol.for("react.activity"),
    ae = Symbol.for("react.memo_cache_sentinel"),
    ge = Symbol.iterator;
  function Pe(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (ge && n[ge]) || n["@@iterator"]),
        typeof n == "function" ? n : null);
  }
  var Ee = Symbol.for("react.client.reference");
  function Be(n) {
    if (n == null) return null;
    if (typeof n == "function")
      return n.$$typeof === Ee ? null : n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case R:
        return "Fragment";
      case b:
        return "Profiler";
      case M:
        return "StrictMode";
      case q:
        return "Suspense";
      case Q:
        return "SuspenseList";
      case $:
        return "Activity";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case C:
          return "Portal";
        case P:
          return n.displayName || "Context";
        case k:
          return (n._context.displayName || "Context") + ".Consumer";
        case Y:
          var o = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = o.displayName || o.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case J:
          return (
            (o = n.displayName || null), o !== null ? o : Be(n.type) || "Memo"
          );
        case Z:
          (o = n._payload), (n = n._init);
          try {
            return Be(n(o));
          } catch {}
      }
    return null;
  }
  var pt = Array.isArray,
    G = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ie = { pending: !1, data: null, method: null, action: null },
    _e = [],
    Me = -1;
  function N(n) {
    return { current: n };
  }
  function F(n) {
    0 > Me || ((n.current = _e[Me]), (_e[Me] = null), Me--);
  }
  function W(n, o) {
    Me++, (_e[Me] = n.current), (n.current = o);
  }
  var te = N(null),
    ce = N(null),
    he = N(null),
    Ne = N(null);
  function mt(n, o) {
    switch ((W(he, o), W(ce, n), W(te, null), o.nodeType)) {
      case 9:
      case 11:
        n = (n = o.documentElement) && (n = n.namespaceURI) ? tg(n) : 0;
        break;
      default:
        if (((n = o.tagName), (o = o.namespaceURI)))
          (o = tg(o)), (n = ng(o, n));
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    F(te), W(te, n);
  }
  function Ye() {
    F(te), F(ce), F(he);
  }
  function Yo(n) {
    n.memoizedState !== null && W(Ne, n);
    var o = te.current,
      l = ng(o, n.type);
    o !== l && (W(ce, n), W(te, l));
  }
  function dl(n) {
    ce.current === n && (F(te), F(ce)),
      Ne.current === n && (F(Ne), (Ls._currentValue = ie));
  }
  var Er, Dd;
  function mi(n) {
    if (Er === void 0)
      try {
        throw Error();
      } catch (l) {
        var o = l.stack.trim().match(/\n( *(at )?)/);
        (Er = (o && o[1]) || ""),
          (Dd =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Er +
      n +
      Dd
    );
  }
  var _r = !1;
  function Ar(n, o) {
    if (!n || _r) return "";
    _r = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (o) {
              var O = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(O.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(O, []);
                } catch (H) {
                  var V = H;
                }
                Reflect.construct(n, [], O);
              } else {
                try {
                  O.call();
                } catch (H) {
                  V = H;
                }
                n.call(O.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                V = H;
              }
              (O = n()) &&
                typeof O.catch == "function" &&
                O.catch(function () {});
            }
          } catch (H) {
            if (H && V && typeof H.stack == "string") return [H.stack, V.stack];
          }
          return [null, null];
        },
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var m = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name"
      );
      m &&
        m.configurable &&
        Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var y = r.DetermineComponentFrameRoot(),
        E = y[0],
        A = y[1];
      if (E && A) {
        var x = E.split(`
`),
          L = A.split(`
`);
        for (
          m = r = 0;
          r < x.length && !x[r].includes("DetermineComponentFrameRoot");

        )
          r++;
        for (; m < L.length && !L[m].includes("DetermineComponentFrameRoot"); )
          m++;
        if (r === x.length || m === L.length)
          for (
            r = x.length - 1, m = L.length - 1;
            1 <= r && 0 <= m && x[r] !== L[m];

          )
            m--;
        for (; 1 <= r && 0 <= m; r--, m--)
          if (x[r] !== L[m]) {
            if (r !== 1 || m !== 1)
              do
                if ((r--, m--, 0 > m || x[r] !== L[m])) {
                  var B =
                    `
` + x[r].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      B.includes("<anonymous>") &&
                      (B = B.replace("<anonymous>", n.displayName)),
                    B
                  );
                }
              while (1 <= r && 0 <= m);
            break;
          }
      }
    } finally {
      (_r = !1), (Error.prepareStackTrace = l);
    }
    return (l = n ? n.displayName || n.name : "") ? mi(l) : "";
  }
  function AE(n, o) {
    switch (n.tag) {
      case 26:
      case 27:
      case 5:
        return mi(n.type);
      case 16:
        return mi("Lazy");
      case 13:
        return n.child !== o && o !== null
          ? mi("Suspense Fallback")
          : mi("Suspense");
      case 19:
        return mi("SuspenseList");
      case 0:
      case 15:
        return Ar(n.type, !1);
      case 11:
        return Ar(n.type.render, !1);
      case 1:
        return Ar(n.type, !0);
      case 31:
        return mi("Activity");
      default:
        return "";
    }
  }
  function Id(n) {
    try {
      var o = "",
        l = null;
      do (o += AE(n, l)), (l = n), (n = n.return);
      while (n);
      return o;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  var Cr = Object.prototype.hasOwnProperty,
    xr = t.unstable_scheduleCallback,
    Mr = t.unstable_cancelCallback,
    CE = t.unstable_shouldYield,
    xE = t.unstable_requestPaint,
    Rt = t.unstable_now,
    ME = t.unstable_getCurrentPriorityLevel,
    Ud = t.unstable_ImmediatePriority,
    Ld = t.unstable_UserBlockingPriority,
    hl = t.unstable_NormalPriority,
    RE = t.unstable_LowPriority,
    Vd = t.unstable_IdlePriority,
    wE = t.log,
    NE = t.unstable_setDisableYieldValue,
    Jo = null,
    wt = null;
  function Gn(n) {
    if (
      (typeof wE == "function" && NE(n),
      wt && typeof wt.setStrictMode == "function")
    )
      try {
        wt.setStrictMode(Jo, n);
      } catch {}
  }
  var Nt = Math.clz32 ? Math.clz32 : IE,
    bE = Math.log,
    DE = Math.LN2;
  function IE(n) {
    return (n >>>= 0), n === 0 ? 32 : (31 - ((bE(n) / DE) | 0)) | 0;
  }
  var pl = 256,
    ml = 262144,
    gl = 4194304;
  function gi(n) {
    var o = n & 42;
    if (o !== 0) return o;
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return n & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return n & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return n;
    }
  }
  function yl(n, o, l) {
    var r = n.pendingLanes;
    if (r === 0) return 0;
    var m = 0,
      y = n.suspendedLanes,
      E = n.pingedLanes;
    n = n.warmLanes;
    var A = r & 134217727;
    return (
      A !== 0
        ? ((r = A & ~y),
          r !== 0
            ? (m = gi(r))
            : ((E &= A),
              E !== 0
                ? (m = gi(E))
                : l || ((l = A & ~n), l !== 0 && (m = gi(l)))))
        : ((A = r & ~y),
          A !== 0
            ? (m = gi(A))
            : E !== 0
            ? (m = gi(E))
            : l || ((l = r & ~n), l !== 0 && (m = gi(l)))),
      m === 0
        ? 0
        : o !== 0 &&
          o !== m &&
          (o & y) === 0 &&
          ((y = m & -m),
          (l = o & -o),
          y >= l || (y === 32 && (l & 4194048) !== 0))
        ? o
        : m
    );
  }
  function Ko(n, o) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & o) === 0;
  }
  function UE(n, o) {
    switch (n) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return o + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return o + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pd() {
    var n = gl;
    return (gl <<= 1), (gl & 62914560) === 0 && (gl = 4194304), n;
  }
  function Rr(n) {
    for (var o = [], l = 0; 31 > l; l++) o.push(n);
    return o;
  }
  function Xo(n, o) {
    (n.pendingLanes |= o),
      o !== 268435456 &&
        ((n.suspendedLanes = 0), (n.pingedLanes = 0), (n.warmLanes = 0));
  }
  function LE(n, o, l, r, m, y) {
    var E = n.pendingLanes;
    (n.pendingLanes = l),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.warmLanes = 0),
      (n.expiredLanes &= l),
      (n.entangledLanes &= l),
      (n.errorRecoveryDisabledLanes &= l),
      (n.shellSuspendCounter = 0);
    var A = n.entanglements,
      x = n.expirationTimes,
      L = n.hiddenUpdates;
    for (l = E & ~l; 0 < l; ) {
      var B = 31 - Nt(l),
        O = 1 << B;
      (A[B] = 0), (x[B] = -1);
      var V = L[B];
      if (V !== null)
        for (L[B] = null, B = 0; B < V.length; B++) {
          var H = V[B];
          H !== null && (H.lane &= -536870913);
        }
      l &= ~O;
    }
    r !== 0 && Hd(n, r, 0),
      y !== 0 && m === 0 && n.tag !== 0 && (n.suspendedLanes |= y & ~(E & ~o));
  }
  function Hd(n, o, l) {
    (n.pendingLanes |= o), (n.suspendedLanes &= ~o);
    var r = 31 - Nt(o);
    (n.entangledLanes |= o),
      (n.entanglements[r] = n.entanglements[r] | 1073741824 | (l & 261930));
  }
  function Gd(n, o) {
    var l = (n.entangledLanes |= o);
    for (n = n.entanglements; l; ) {
      var r = 31 - Nt(l),
        m = 1 << r;
      (m & o) | (n[r] & o) && (n[r] |= o), (l &= ~m);
    }
  }
  function kd(n, o) {
    var l = o & -o;
    return (
      (l = (l & 42) !== 0 ? 1 : wr(l)),
      (l & (n.suspendedLanes | o)) !== 0 ? 0 : l
    );
  }
  function wr(n) {
    switch (n) {
      case 2:
        n = 1;
        break;
      case 8:
        n = 4;
        break;
      case 32:
        n = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        n = 128;
        break;
      case 268435456:
        n = 134217728;
        break;
      default:
        n = 0;
    }
    return n;
  }
  function Nr(n) {
    return (
      (n &= -n),
      2 < n ? (8 < n ? ((n & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Bd() {
    var n = K.p;
    return n !== 0 ? n : ((n = window.event), n === void 0 ? 32 : xg(n.type));
  }
  function zd(n, o) {
    var l = K.p;
    try {
      return (K.p = n), o();
    } finally {
      K.p = l;
    }
  }
  var kn = Math.random().toString(36).slice(2),
    lt = "__reactFiber$" + kn,
    St = "__reactProps$" + kn,
    Oi = "__reactContainer$" + kn,
    br = "__reactEvents$" + kn,
    VE = "__reactListeners$" + kn,
    PE = "__reactHandles$" + kn,
    qd = "__reactResources$" + kn,
    Qo = "__reactMarker$" + kn;
  function Dr(n) {
    delete n[lt], delete n[St], delete n[br], delete n[VE], delete n[PE];
  }
  function Fi(n) {
    var o = n[lt];
    if (o) return o;
    for (var l = n.parentNode; l; ) {
      if ((o = l[Oi] || l[lt])) {
        if (
          ((l = o.alternate),
          o.child !== null || (l !== null && l.child !== null))
        )
          for (n = ug(n); n !== null; ) {
            if ((l = n[lt])) return l;
            n = ug(n);
          }
        return o;
      }
      (n = l), (l = n.parentNode);
    }
    return null;
  }
  function Yi(n) {
    if ((n = n[lt] || n[Oi])) {
      var o = n.tag;
      if (
        o === 5 ||
        o === 6 ||
        o === 13 ||
        o === 31 ||
        o === 26 ||
        o === 27 ||
        o === 3
      )
        return n;
    }
    return null;
  }
  function Zo(n) {
    var o = n.tag;
    if (o === 5 || o === 26 || o === 27 || o === 6) return n.stateNode;
    throw Error(s(33));
  }
  function Ji(n) {
    var o = n[qd];
    return (
      o ||
        (o = n[qd] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      o
    );
  }
  function tt(n) {
    n[Qo] = !0;
  }
  var Od = new Set(),
    Fd = {};
  function yi(n, o) {
    Ki(n, o), Ki(n + "Capture", o);
  }
  function Ki(n, o) {
    for (Fd[n] = o, n = 0; n < o.length; n++) Od.add(o[n]);
  }
  var HE = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Yd = {},
    Jd = {};
  function GE(n) {
    return Cr.call(Jd, n)
      ? !0
      : Cr.call(Yd, n)
      ? !1
      : HE.test(n)
      ? (Jd[n] = !0)
      : ((Yd[n] = !0), !1);
  }
  function vl(n, o, l) {
    if (GE(o))
      if (l === null) n.removeAttribute(o);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            n.removeAttribute(o);
            return;
          case "boolean":
            var r = o.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              n.removeAttribute(o);
              return;
            }
        }
        n.setAttribute(o, "" + l);
      }
  }
  function Tl(n, o, l) {
    if (l === null) n.removeAttribute(o);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(o);
          return;
      }
      n.setAttribute(o, "" + l);
    }
  }
  function mn(n, o, l, r) {
    if (r === null) n.removeAttribute(l);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(l);
          return;
      }
      n.setAttributeNS(o, l, "" + r);
    }
  }
  function Gt(n) {
    switch (typeof n) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Kd(n) {
    var o = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (o === "checkbox" || o === "radio")
    );
  }
  function kE(n, o, l) {
    var r = Object.getOwnPropertyDescriptor(n.constructor.prototype, o);
    if (
      !n.hasOwnProperty(o) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var m = r.get,
        y = r.set;
      return (
        Object.defineProperty(n, o, {
          configurable: !0,
          get: function () {
            return m.call(this);
          },
          set: function (E) {
            (l = "" + E), y.call(this, E);
          },
        }),
        Object.defineProperty(n, o, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (E) {
            l = "" + E;
          },
          stopTracking: function () {
            (n._valueTracker = null), delete n[o];
          },
        }
      );
    }
  }
  function Ir(n) {
    if (!n._valueTracker) {
      var o = Kd(n) ? "checked" : "value";
      n._valueTracker = kE(n, o, "" + n[o]);
    }
  }
  function Xd(n) {
    if (!n) return !1;
    var o = n._valueTracker;
    if (!o) return !0;
    var l = o.getValue(),
      r = "";
    return (
      n && (r = Kd(n) ? (n.checked ? "true" : "false") : n.value),
      (n = r),
      n !== l ? (o.setValue(n), !0) : !1
    );
  }
  function Sl(n) {
    if (
      ((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")
    )
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  var BE = /[\n"\\]/g;
  function kt(n) {
    return n.replace(BE, function (o) {
      return "\\" + o.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ur(n, o, l, r, m, y, E, A) {
    (n.name = ""),
      E != null &&
      typeof E != "function" &&
      typeof E != "symbol" &&
      typeof E != "boolean"
        ? (n.type = E)
        : n.removeAttribute("type"),
      o != null
        ? E === "number"
          ? ((o === 0 && n.value === "") || n.value != o) &&
            (n.value = "" + Gt(o))
          : n.value !== "" + Gt(o) && (n.value = "" + Gt(o))
        : (E !== "submit" && E !== "reset") || n.removeAttribute("value"),
      o != null
        ? Lr(n, E, Gt(o))
        : l != null
        ? Lr(n, E, Gt(l))
        : r != null && n.removeAttribute("value"),
      m == null && y != null && (n.defaultChecked = !!y),
      m != null &&
        (n.checked = m && typeof m != "function" && typeof m != "symbol"),
      A != null &&
      typeof A != "function" &&
      typeof A != "symbol" &&
      typeof A != "boolean"
        ? (n.name = "" + Gt(A))
        : n.removeAttribute("name");
  }
  function Qd(n, o, l, r, m, y, E, A) {
    if (
      (y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (n.type = y),
      o != null || l != null)
    ) {
      if (!((y !== "submit" && y !== "reset") || o != null)) {
        Ir(n);
        return;
      }
      (l = l != null ? "" + Gt(l) : ""),
        (o = o != null ? "" + Gt(o) : l),
        A || o === n.value || (n.value = o),
        (n.defaultValue = o);
    }
    (r = r ?? m),
      (r = typeof r != "function" && typeof r != "symbol" && !!r),
      (n.checked = A ? n.checked : !!r),
      (n.defaultChecked = !!r),
      E != null &&
        typeof E != "function" &&
        typeof E != "symbol" &&
        typeof E != "boolean" &&
        (n.name = E),
      Ir(n);
  }
  function Lr(n, o, l) {
    (o === "number" && Sl(n.ownerDocument) === n) ||
      n.defaultValue === "" + l ||
      (n.defaultValue = "" + l);
  }
  function Xi(n, o, l, r) {
    if (((n = n.options), o)) {
      o = {};
      for (var m = 0; m < l.length; m++) o["$" + l[m]] = !0;
      for (l = 0; l < n.length; l++)
        (m = o.hasOwnProperty("$" + n[l].value)),
          n[l].selected !== m && (n[l].selected = m),
          m && r && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Gt(l), o = null, m = 0; m < n.length; m++) {
        if (n[m].value === l) {
          (n[m].selected = !0), r && (n[m].defaultSelected = !0);
          return;
        }
        o !== null || n[m].disabled || (o = n[m]);
      }
      o !== null && (o.selected = !0);
    }
  }
  function Zd(n, o, l) {
    if (
      o != null &&
      ((o = "" + Gt(o)), o !== n.value && (n.value = o), l == null)
    ) {
      n.defaultValue !== o && (n.defaultValue = o);
      return;
    }
    n.defaultValue = l != null ? "" + Gt(l) : "";
  }
  function $d(n, o, l, r) {
    if (o == null) {
      if (r != null) {
        if (l != null) throw Error(s(92));
        if (pt(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        l = r;
      }
      l == null && (l = ""), (o = l);
    }
    (l = Gt(o)),
      (n.defaultValue = l),
      (r = n.textContent),
      r === l && r !== "" && r !== null && (n.value = r),
      Ir(n);
  }
  function Qi(n, o) {
    if (o) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = o;
        return;
      }
    }
    n.textContent = o;
  }
  var zE = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Wd(n, o, l) {
    var r = o.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? r
        ? n.setProperty(o, "")
        : o === "float"
        ? (n.cssFloat = "")
        : (n[o] = "")
      : r
      ? n.setProperty(o, l)
      : typeof l != "number" || l === 0 || zE.has(o)
      ? o === "float"
        ? (n.cssFloat = l)
        : (n[o] = ("" + l).trim())
      : (n[o] = l + "px");
  }
  function jd(n, o, l) {
    if (o != null && typeof o != "object") throw Error(s(62));
    if (((n = n.style), l != null)) {
      for (var r in l)
        !l.hasOwnProperty(r) ||
          (o != null && o.hasOwnProperty(r)) ||
          (r.indexOf("--") === 0
            ? n.setProperty(r, "")
            : r === "float"
            ? (n.cssFloat = "")
            : (n[r] = ""));
      for (var m in o)
        (r = o[m]), o.hasOwnProperty(m) && l[m] !== r && Wd(n, m, r);
    } else for (var y in o) o.hasOwnProperty(y) && Wd(n, y, o[y]);
  }
  function Vr(n) {
    if (n.indexOf("-") === -1) return !1;
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var qE = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    OE =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function El(n) {
    return OE.test("" + n)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : n;
  }
  function gn() {}
  var Pr = null;
  function Hr(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var Zi = null,
    $i = null;
  function eh(n) {
    var o = Yi(n);
    if (o && (n = o.stateNode)) {
      var l = n[St] || null;
      e: switch (((n = o.stateNode), o.type)) {
        case "input":
          if (
            (Ur(
              n,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (o = l.name),
            l.type === "radio" && o != null)
          ) {
            for (l = n; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + kt("" + o) + '"][type="radio"]'
              ),
                o = 0;
              o < l.length;
              o++
            ) {
              var r = l[o];
              if (r !== n && r.form === n.form) {
                var m = r[St] || null;
                if (!m) throw Error(s(90));
                Ur(
                  r,
                  m.value,
                  m.defaultValue,
                  m.defaultValue,
                  m.checked,
                  m.defaultChecked,
                  m.type,
                  m.name
                );
              }
            }
            for (o = 0; o < l.length; o++)
              (r = l[o]), r.form === n.form && Xd(r);
          }
          break e;
        case "textarea":
          Zd(n, l.value, l.defaultValue);
          break e;
        case "select":
          (o = l.value), o != null && Xi(n, !!l.multiple, o, !1);
      }
    }
  }
  var Gr = !1;
  function th(n, o, l) {
    if (Gr) return n(o, l);
    Gr = !0;
    try {
      var r = n(o);
      return r;
    } finally {
      if (
        ((Gr = !1),
        (Zi !== null || $i !== null) &&
          (ra(), Zi && ((o = Zi), (n = $i), ($i = Zi = null), eh(o), n)))
      )
        for (o = 0; o < n.length; o++) eh(n[o]);
    }
  }
  function $o(n, o) {
    var l = n.stateNode;
    if (l === null) return null;
    var r = l[St] || null;
    if (r === null) return null;
    l = r[o];
    e: switch (o) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((n = n.type),
          (r = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !r);
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(s(231, o, typeof l));
    return l;
  }
  var yn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    kr = !1;
  if (yn)
    try {
      var Wo = {};
      Object.defineProperty(Wo, "passive", {
        get: function () {
          kr = !0;
        },
      }),
        window.addEventListener("test", Wo, Wo),
        window.removeEventListener("test", Wo, Wo);
    } catch {
      kr = !1;
    }
  var Bn = null,
    Br = null,
    _l = null;
  function nh() {
    if (_l) return _l;
    var n,
      o = Br,
      l = o.length,
      r,
      m = "value" in Bn ? Bn.value : Bn.textContent,
      y = m.length;
    for (n = 0; n < l && o[n] === m[n]; n++);
    var E = l - n;
    for (r = 1; r <= E && o[l - r] === m[y - r]; r++);
    return (_l = m.slice(n, 1 < r ? 1 - r : void 0));
  }
  function Al(n) {
    var o = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && o === 13 && (n = 13))
        : (n = o),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function Cl() {
    return !0;
  }
  function ih() {
    return !1;
  }
  function Et(n) {
    function o(l, r, m, y, E) {
      (this._reactName = l),
        (this._targetInst = m),
        (this.type = r),
        (this.nativeEvent = y),
        (this.target = E),
        (this.currentTarget = null);
      for (var A in n)
        n.hasOwnProperty(A) && ((l = n[A]), (this[A] = l ? l(y) : y[A]));
      return (
        (this.isDefaultPrevented = (
          y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1
        )
          ? Cl
          : ih),
        (this.isPropagationStopped = ih),
        this
      );
    }
    return (
      T(o.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Cl));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Cl));
        },
        persist: function () {},
        isPersistent: Cl,
      }),
      o
    );
  }
  var vi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xl = Et(vi),
    jo = T({}, vi, { view: 0, detail: 0 }),
    FE = Et(jo),
    zr,
    qr,
    es,
    Ml = T({}, jo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Fr,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== es &&
              (es && n.type === "mousemove"
                ? ((zr = n.screenX - es.screenX), (qr = n.screenY - es.screenY))
                : (qr = zr = 0),
              (es = n)),
            zr);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : qr;
      },
    }),
    oh = Et(Ml),
    YE = T({}, Ml, { dataTransfer: 0 }),
    JE = Et(YE),
    KE = T({}, jo, { relatedTarget: 0 }),
    Or = Et(KE),
    XE = T({}, vi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    QE = Et(XE),
    ZE = T({}, vi, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    $E = Et(ZE),
    WE = T({}, vi, { data: 0 }),
    sh = Et(WE),
    jE = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    e_ = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    t_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function n_(n) {
    var o = this.nativeEvent;
    return o.getModifierState
      ? o.getModifierState(n)
      : (n = t_[n])
      ? !!o[n]
      : !1;
  }
  function Fr() {
    return n_;
  }
  var i_ = T({}, jo, {
      key: function (n) {
        if (n.key) {
          var o = jE[n.key] || n.key;
          if (o !== "Unidentified") return o;
        }
        return n.type === "keypress"
          ? ((n = Al(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
          ? e_[n.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fr,
      charCode: function (n) {
        return n.type === "keypress" ? Al(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? Al(n)
          : n.type === "keydown" || n.type === "keyup"
          ? n.keyCode
          : 0;
      },
    }),
    o_ = Et(i_),
    s_ = T({}, Ml, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    lh = Et(s_),
    l_ = T({}, jo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fr,
    }),
    a_ = Et(l_),
    r_ = T({}, vi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    u_ = Et(r_),
    c_ = T({}, Ml, {
      deltaX: function (n) {
        return "deltaX" in n
          ? n.deltaX
          : "wheelDeltaX" in n
          ? -n.wheelDeltaX
          : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
          ? -n.wheelDeltaY
          : "wheelDelta" in n
          ? -n.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    f_ = Et(c_),
    d_ = T({}, vi, { newState: 0, oldState: 0 }),
    h_ = Et(d_),
    p_ = [9, 13, 27, 32],
    Yr = yn && "CompositionEvent" in window,
    ts = null;
  yn && "documentMode" in document && (ts = document.documentMode);
  var m_ = yn && "TextEvent" in window && !ts,
    ah = yn && (!Yr || (ts && 8 < ts && 11 >= ts)),
    rh = " ",
    uh = !1;
  function ch(n, o) {
    switch (n) {
      case "keyup":
        return p_.indexOf(o.keyCode) !== -1;
      case "keydown":
        return o.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function fh(n) {
    return (n = n.detail), typeof n == "object" && "data" in n ? n.data : null;
  }
  var Wi = !1;
  function g_(n, o) {
    switch (n) {
      case "compositionend":
        return fh(o);
      case "keypress":
        return o.which !== 32 ? null : ((uh = !0), rh);
      case "textInput":
        return (n = o.data), n === rh && uh ? null : n;
      default:
        return null;
    }
  }
  function y_(n, o) {
    if (Wi)
      return n === "compositionend" || (!Yr && ch(n, o))
        ? ((n = nh()), (_l = Br = Bn = null), (Wi = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(o.ctrlKey || o.altKey || o.metaKey) || (o.ctrlKey && o.altKey)) {
          if (o.char && 1 < o.char.length) return o.char;
          if (o.which) return String.fromCharCode(o.which);
        }
        return null;
      case "compositionend":
        return ah && o.locale !== "ko" ? null : o.data;
      default:
        return null;
    }
  }
  var v_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function dh(n) {
    var o = n && n.nodeName && n.nodeName.toLowerCase();
    return o === "input" ? !!v_[n.type] : o === "textarea";
  }
  function hh(n, o, l, r) {
    Zi ? ($i ? $i.push(r) : ($i = [r])) : (Zi = r),
      (o = ma(o, "onChange")),
      0 < o.length &&
        ((l = new xl("onChange", "change", null, l, r)),
        n.push({ event: l, listeners: o }));
  }
  var ns = null,
    is = null;
  function T_(n) {
    Qm(n, 0);
  }
  function Rl(n) {
    var o = Zo(n);
    if (Xd(o)) return n;
  }
  function ph(n, o) {
    if (n === "change") return o;
  }
  var mh = !1;
  if (yn) {
    var Jr;
    if (yn) {
      var Kr = "oninput" in document;
      if (!Kr) {
        var gh = document.createElement("div");
        gh.setAttribute("oninput", "return;"),
          (Kr = typeof gh.oninput == "function");
      }
      Jr = Kr;
    } else Jr = !1;
    mh = Jr && (!document.documentMode || 9 < document.documentMode);
  }
  function yh() {
    ns && (ns.detachEvent("onpropertychange", vh), (is = ns = null));
  }
  function vh(n) {
    if (n.propertyName === "value" && Rl(is)) {
      var o = [];
      hh(o, is, n, Hr(n)), th(T_, o);
    }
  }
  function S_(n, o, l) {
    n === "focusin"
      ? (yh(), (ns = o), (is = l), ns.attachEvent("onpropertychange", vh))
      : n === "focusout" && yh();
  }
  function E_(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Rl(is);
  }
  function __(n, o) {
    if (n === "click") return Rl(o);
  }
  function A_(n, o) {
    if (n === "input" || n === "change") return Rl(o);
  }
  function C_(n, o) {
    return (n === o && (n !== 0 || 1 / n === 1 / o)) || (n !== n && o !== o);
  }
  var bt = typeof Object.is == "function" ? Object.is : C_;
  function os(n, o) {
    if (bt(n, o)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof o != "object" ||
      o === null
    )
      return !1;
    var l = Object.keys(n),
      r = Object.keys(o);
    if (l.length !== r.length) return !1;
    for (r = 0; r < l.length; r++) {
      var m = l[r];
      if (!Cr.call(o, m) || !bt(n[m], o[m])) return !1;
    }
    return !0;
  }
  function Th(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Sh(n, o) {
    var l = Th(n);
    n = 0;
    for (var r; l; ) {
      if (l.nodeType === 3) {
        if (((r = n + l.textContent.length), n <= o && r >= o))
          return { node: l, offset: o - n };
        n = r;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Th(l);
    }
  }
  function Eh(n, o) {
    return n && o
      ? n === o
        ? !0
        : n && n.nodeType === 3
        ? !1
        : o && o.nodeType === 3
        ? Eh(n, o.parentNode)
        : "contains" in n
        ? n.contains(o)
        : n.compareDocumentPosition
        ? !!(n.compareDocumentPosition(o) & 16)
        : !1
      : !1;
  }
  function _h(n) {
    n =
      n != null &&
      n.ownerDocument != null &&
      n.ownerDocument.defaultView != null
        ? n.ownerDocument.defaultView
        : window;
    for (var o = Sl(n.document); o instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof o.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = o.contentWindow;
      else break;
      o = Sl(n.document);
    }
    return o;
  }
  function Xr(n) {
    var o = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      o &&
      ((o === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        o === "textarea" ||
        n.contentEditable === "true")
    );
  }
  var x_ = yn && "documentMode" in document && 11 >= document.documentMode,
    ji = null,
    Qr = null,
    ss = null,
    Zr = !1;
  function Ah(n, o, l) {
    var r =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Zr ||
      ji == null ||
      ji !== Sl(r) ||
      ((r = ji),
      "selectionStart" in r && Xr(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ss && os(ss, r)) ||
        ((ss = r),
        (r = ma(Qr, "onSelect")),
        0 < r.length &&
          ((o = new xl("onSelect", "select", null, o, l)),
          n.push({ event: o, listeners: r }),
          (o.target = ji))));
  }
  function Ti(n, o) {
    var l = {};
    return (
      (l[n.toLowerCase()] = o.toLowerCase()),
      (l["Webkit" + n] = "webkit" + o),
      (l["Moz" + n] = "moz" + o),
      l
    );
  }
  var eo = {
      animationend: Ti("Animation", "AnimationEnd"),
      animationiteration: Ti("Animation", "AnimationIteration"),
      animationstart: Ti("Animation", "AnimationStart"),
      transitionrun: Ti("Transition", "TransitionRun"),
      transitionstart: Ti("Transition", "TransitionStart"),
      transitioncancel: Ti("Transition", "TransitionCancel"),
      transitionend: Ti("Transition", "TransitionEnd"),
    },
    $r = {},
    Ch = {};
  yn &&
    ((Ch = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete eo.animationend.animation,
      delete eo.animationiteration.animation,
      delete eo.animationstart.animation),
    "TransitionEvent" in window || delete eo.transitionend.transition);
  function Si(n) {
    if ($r[n]) return $r[n];
    if (!eo[n]) return n;
    var o = eo[n],
      l;
    for (l in o) if (o.hasOwnProperty(l) && l in Ch) return ($r[n] = o[l]);
    return n;
  }
  var xh = Si("animationend"),
    Mh = Si("animationiteration"),
    Rh = Si("animationstart"),
    M_ = Si("transitionrun"),
    R_ = Si("transitionstart"),
    w_ = Si("transitioncancel"),
    wh = Si("transitionend"),
    Nh = new Map(),
    Wr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Wr.push("scrollEnd");
  function Wt(n, o) {
    Nh.set(n, o), yi(o, [n]);
  }
  var wl =
      typeof reportError == "function"
        ? reportError
        : function (n) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var o = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof n == "object" &&
                  n !== null &&
                  typeof n.message == "string"
                    ? String(n.message)
                    : String(n),
                error: n,
              });
              if (!window.dispatchEvent(o)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", n);
              return;
            }
            console.error(n);
          },
    Bt = [],
    to = 0,
    jr = 0;
  function Nl() {
    for (var n = to, o = (jr = to = 0); o < n; ) {
      var l = Bt[o];
      Bt[o++] = null;
      var r = Bt[o];
      Bt[o++] = null;
      var m = Bt[o];
      Bt[o++] = null;
      var y = Bt[o];
      if (((Bt[o++] = null), r !== null && m !== null)) {
        var E = r.pending;
        E === null ? (m.next = m) : ((m.next = E.next), (E.next = m)),
          (r.pending = m);
      }
      y !== 0 && bh(l, m, y);
    }
  }
  function bl(n, o, l, r) {
    (Bt[to++] = n),
      (Bt[to++] = o),
      (Bt[to++] = l),
      (Bt[to++] = r),
      (jr |= r),
      (n.lanes |= r),
      (n = n.alternate),
      n !== null && (n.lanes |= r);
  }
  function eu(n, o, l, r) {
    return bl(n, o, l, r), Dl(n);
  }
  function Ei(n, o) {
    return bl(n, null, null, o), Dl(n);
  }
  function bh(n, o, l) {
    n.lanes |= l;
    var r = n.alternate;
    r !== null && (r.lanes |= l);
    for (var m = !1, y = n.return; y !== null; )
      (y.childLanes |= l),
        (r = y.alternate),
        r !== null && (r.childLanes |= l),
        y.tag === 22 &&
          ((n = y.stateNode), n === null || n._visibility & 1 || (m = !0)),
        (n = y),
        (y = y.return);
    return n.tag === 3
      ? ((y = n.stateNode),
        m &&
          o !== null &&
          ((m = 31 - Nt(l)),
          (n = y.hiddenUpdates),
          (r = n[m]),
          r === null ? (n[m] = [o]) : r.push(o),
          (o.lane = l | 536870912)),
        y)
      : null;
  }
  function Dl(n) {
    if (50 < Rs) throw ((Rs = 0), (uc = null), Error(s(185)));
    for (var o = n.return; o !== null; ) (n = o), (o = n.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var no = {};
  function N_(n, o, l, r) {
    (this.tag = n),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = o),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Dt(n, o, l, r) {
    return new N_(n, o, l, r);
  }
  function tu(n) {
    return (n = n.prototype), !(!n || !n.isReactComponent);
  }
  function vn(n, o) {
    var l = n.alternate;
    return (
      l === null
        ? ((l = Dt(n.tag, o, n.key, n.mode)),
          (l.elementType = n.elementType),
          (l.type = n.type),
          (l.stateNode = n.stateNode),
          (l.alternate = n),
          (n.alternate = l))
        : ((l.pendingProps = o),
          (l.type = n.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = n.flags & 65011712),
      (l.childLanes = n.childLanes),
      (l.lanes = n.lanes),
      (l.child = n.child),
      (l.memoizedProps = n.memoizedProps),
      (l.memoizedState = n.memoizedState),
      (l.updateQueue = n.updateQueue),
      (o = n.dependencies),
      (l.dependencies =
        o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
      (l.sibling = n.sibling),
      (l.index = n.index),
      (l.ref = n.ref),
      (l.refCleanup = n.refCleanup),
      l
    );
  }
  function Dh(n, o) {
    n.flags &= 65011714;
    var l = n.alternate;
    return (
      l === null
        ? ((n.childLanes = 0),
          (n.lanes = o),
          (n.child = null),
          (n.subtreeFlags = 0),
          (n.memoizedProps = null),
          (n.memoizedState = null),
          (n.updateQueue = null),
          (n.dependencies = null),
          (n.stateNode = null))
        : ((n.childLanes = l.childLanes),
          (n.lanes = l.lanes),
          (n.child = l.child),
          (n.subtreeFlags = 0),
          (n.deletions = null),
          (n.memoizedProps = l.memoizedProps),
          (n.memoizedState = l.memoizedState),
          (n.updateQueue = l.updateQueue),
          (n.type = l.type),
          (o = l.dependencies),
          (n.dependencies =
            o === null
              ? null
              : { lanes: o.lanes, firstContext: o.firstContext })),
      n
    );
  }
  function Il(n, o, l, r, m, y) {
    var E = 0;
    if (((r = n), typeof n == "function")) tu(n) && (E = 1);
    else if (typeof n == "string")
      E = LA(n, l, te.current)
        ? 26
        : n === "html" || n === "head" || n === "body"
        ? 27
        : 5;
    else
      e: switch (n) {
        case $:
          return (n = Dt(31, l, o, m)), (n.elementType = $), (n.lanes = y), n;
        case R:
          return _i(l.children, m, y, o);
        case M:
          (E = 8), (m |= 24);
          break;
        case b:
          return (
            (n = Dt(12, l, o, m | 2)), (n.elementType = b), (n.lanes = y), n
          );
        case q:
          return (n = Dt(13, l, o, m)), (n.elementType = q), (n.lanes = y), n;
        case Q:
          return (n = Dt(19, l, o, m)), (n.elementType = Q), (n.lanes = y), n;
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case P:
                E = 10;
                break e;
              case k:
                E = 9;
                break e;
              case Y:
                E = 11;
                break e;
              case J:
                E = 14;
                break e;
              case Z:
                (E = 16), (r = null);
                break e;
            }
          (E = 29),
            (l = Error(s(130, n === null ? "null" : typeof n, ""))),
            (r = null);
      }
    return (
      (o = Dt(E, l, o, m)), (o.elementType = n), (o.type = r), (o.lanes = y), o
    );
  }
  function _i(n, o, l, r) {
    return (n = Dt(7, n, r, o)), (n.lanes = l), n;
  }
  function nu(n, o, l) {
    return (n = Dt(6, n, null, o)), (n.lanes = l), n;
  }
  function Ih(n) {
    var o = Dt(18, null, null, 0);
    return (o.stateNode = n), o;
  }
  function iu(n, o, l) {
    return (
      (o = Dt(4, n.children !== null ? n.children : [], n.key, o)),
      (o.lanes = l),
      (o.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      o
    );
  }
  var Uh = new WeakMap();
  function zt(n, o) {
    if (typeof n == "object" && n !== null) {
      var l = Uh.get(n);
      return l !== void 0
        ? l
        : ((o = { value: n, source: o, stack: Id(o) }), Uh.set(n, o), o);
    }
    return { value: n, source: o, stack: Id(o) };
  }
  var io = [],
    oo = 0,
    Ul = null,
    ls = 0,
    qt = [],
    Ot = 0,
    zn = null,
    ln = 1,
    an = "";
  function Tn(n, o) {
    (io[oo++] = ls), (io[oo++] = Ul), (Ul = n), (ls = o);
  }
  function Lh(n, o, l) {
    (qt[Ot++] = ln), (qt[Ot++] = an), (qt[Ot++] = zn), (zn = n);
    var r = ln;
    n = an;
    var m = 32 - Nt(r) - 1;
    (r &= ~(1 << m)), (l += 1);
    var y = 32 - Nt(o) + m;
    if (30 < y) {
      var E = m - (m % 5);
      (y = (r & ((1 << E) - 1)).toString(32)),
        (r >>= E),
        (m -= E),
        (ln = (1 << (32 - Nt(o) + m)) | (l << m) | r),
        (an = y + n);
    } else (ln = (1 << y) | (l << m) | r), (an = n);
  }
  function ou(n) {
    n.return !== null && (Tn(n, 1), Lh(n, 1, 0));
  }
  function su(n) {
    for (; n === Ul; )
      (Ul = io[--oo]), (io[oo] = null), (ls = io[--oo]), (io[oo] = null);
    for (; n === zn; )
      (zn = qt[--Ot]),
        (qt[Ot] = null),
        (an = qt[--Ot]),
        (qt[Ot] = null),
        (ln = qt[--Ot]),
        (qt[Ot] = null);
  }
  function Vh(n, o) {
    (qt[Ot++] = ln),
      (qt[Ot++] = an),
      (qt[Ot++] = zn),
      (ln = o.id),
      (an = o.overflow),
      (zn = n);
  }
  var at = null,
    He = null,
    Te = !1,
    qn = null,
    Ft = !1,
    lu = Error(s(519));
  function On(n) {
    var o = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (as(zt(o, n)), lu);
  }
  function Ph(n) {
    var o = n.stateNode,
      l = n.type,
      r = n.memoizedProps;
    switch (((o[lt] = n), (o[St] = r), l)) {
      case "dialog":
        me("cancel", o), me("close", o);
        break;
      case "iframe":
      case "object":
      case "embed":
        me("load", o);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ns.length; l++) me(Ns[l], o);
        break;
      case "source":
        me("error", o);
        break;
      case "img":
      case "image":
      case "link":
        me("error", o), me("load", o);
        break;
      case "details":
        me("toggle", o);
        break;
      case "input":
        me("invalid", o),
          Qd(
            o,
            r.value,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name,
            !0
          );
        break;
      case "select":
        me("invalid", o);
        break;
      case "textarea":
        me("invalid", o), $d(o, r.value, r.defaultValue, r.children);
    }
    (l = r.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      o.textContent === "" + l ||
      r.suppressHydrationWarning === !0 ||
      jm(o.textContent, l)
        ? (r.popover != null && (me("beforetoggle", o), me("toggle", o)),
          r.onScroll != null && me("scroll", o),
          r.onScrollEnd != null && me("scrollend", o),
          r.onClick != null && (o.onclick = gn),
          (o = !0))
        : (o = !1),
      o || On(n, !0);
  }
  function Hh(n) {
    for (at = n.return; at; )
      switch (at.tag) {
        case 5:
        case 31:
        case 13:
          Ft = !1;
          return;
        case 27:
        case 3:
          Ft = !0;
          return;
        default:
          at = at.return;
      }
  }
  function so(n) {
    if (n !== at) return !1;
    if (!Te) return Hh(n), (Te = !0), !1;
    var o = n.tag,
      l;
    if (
      ((l = o !== 3 && o !== 27) &&
        ((l = o === 5) &&
          ((l = n.type),
          (l =
            !(l !== "form" && l !== "button") || Cc(n.type, n.memoizedProps))),
        (l = !l)),
      l && He && On(n),
      Hh(n),
      o === 13)
    ) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(s(317));
      He = rg(n);
    } else if (o === 31) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(s(317));
      He = rg(n);
    } else
      o === 27
        ? ((o = He), ii(n.type) ? ((n = Nc), (Nc = null), (He = n)) : (He = o))
        : (He = at ? Jt(n.stateNode.nextSibling) : null);
    return !0;
  }
  function Ai() {
    (He = at = null), (Te = !1);
  }
  function au() {
    var n = qn;
    return (
      n !== null &&
        (xt === null ? (xt = n) : xt.push.apply(xt, n), (qn = null)),
      n
    );
  }
  function as(n) {
    qn === null ? (qn = [n]) : qn.push(n);
  }
  var ru = N(null),
    Ci = null,
    Sn = null;
  function Fn(n, o, l) {
    W(ru, o._currentValue), (o._currentValue = l);
  }
  function En(n) {
    (n._currentValue = ru.current), F(ru);
  }
  function uu(n, o, l) {
    for (; n !== null; ) {
      var r = n.alternate;
      if (
        ((n.childLanes & o) !== o
          ? ((n.childLanes |= o), r !== null && (r.childLanes |= o))
          : r !== null && (r.childLanes & o) !== o && (r.childLanes |= o),
        n === l)
      )
        break;
      n = n.return;
    }
  }
  function cu(n, o, l, r) {
    var m = n.child;
    for (m !== null && (m.return = n); m !== null; ) {
      var y = m.dependencies;
      if (y !== null) {
        var E = m.child;
        y = y.firstContext;
        e: for (; y !== null; ) {
          var A = y;
          y = m;
          for (var x = 0; x < o.length; x++)
            if (A.context === o[x]) {
              (y.lanes |= l),
                (A = y.alternate),
                A !== null && (A.lanes |= l),
                uu(y.return, l, n),
                r || (E = null);
              break e;
            }
          y = A.next;
        }
      } else if (m.tag === 18) {
        if (((E = m.return), E === null)) throw Error(s(341));
        (E.lanes |= l),
          (y = E.alternate),
          y !== null && (y.lanes |= l),
          uu(E, l, n),
          (E = null);
      } else E = m.child;
      if (E !== null) E.return = m;
      else
        for (E = m; E !== null; ) {
          if (E === n) {
            E = null;
            break;
          }
          if (((m = E.sibling), m !== null)) {
            (m.return = E.return), (E = m);
            break;
          }
          E = E.return;
        }
      m = E;
    }
  }
  function lo(n, o, l, r) {
    n = null;
    for (var m = o, y = !1; m !== null; ) {
      if (!y) {
        if ((m.flags & 524288) !== 0) y = !0;
        else if ((m.flags & 262144) !== 0) break;
      }
      if (m.tag === 10) {
        var E = m.alternate;
        if (E === null) throw Error(s(387));
        if (((E = E.memoizedProps), E !== null)) {
          var A = m.type;
          bt(m.pendingProps.value, E.value) ||
            (n !== null ? n.push(A) : (n = [A]));
        }
      } else if (m === Ne.current) {
        if (((E = m.alternate), E === null)) throw Error(s(387));
        E.memoizedState.memoizedState !== m.memoizedState.memoizedState &&
          (n !== null ? n.push(Ls) : (n = [Ls]));
      }
      m = m.return;
    }
    n !== null && cu(o, n, l, r), (o.flags |= 262144);
  }
  function Ll(n) {
    for (n = n.firstContext; n !== null; ) {
      if (!bt(n.context._currentValue, n.memoizedValue)) return !0;
      n = n.next;
    }
    return !1;
  }
  function xi(n) {
    (Ci = n),
      (Sn = null),
      (n = n.dependencies),
      n !== null && (n.firstContext = null);
  }
  function rt(n) {
    return Gh(Ci, n);
  }
  function Vl(n, o) {
    return Ci === null && xi(n), Gh(n, o);
  }
  function Gh(n, o) {
    var l = o._currentValue;
    if (((o = { context: o, memoizedValue: l, next: null }), Sn === null)) {
      if (n === null) throw Error(s(308));
      (Sn = o),
        (n.dependencies = { lanes: 0, firstContext: o }),
        (n.flags |= 524288);
    } else Sn = Sn.next = o;
    return l;
  }
  var b_ =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var n = [],
              o = (this.signal = {
                aborted: !1,
                addEventListener: function (l, r) {
                  n.push(r);
                },
              });
            this.abort = function () {
              (o.aborted = !0),
                n.forEach(function (l) {
                  return l();
                });
            };
          },
    D_ = t.unstable_scheduleCallback,
    I_ = t.unstable_NormalPriority,
    Qe = {
      $$typeof: P,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function fu() {
    return { controller: new b_(), data: new Map(), refCount: 0 };
  }
  function rs(n) {
    n.refCount--,
      n.refCount === 0 &&
        D_(I_, function () {
          n.controller.abort();
        });
  }
  var us = null,
    du = 0,
    ao = 0,
    ro = null;
  function U_(n, o) {
    if (us === null) {
      var l = (us = []);
      (du = 0),
        (ao = mc()),
        (ro = {
          status: "pending",
          value: void 0,
          then: function (r) {
            l.push(r);
          },
        });
    }
    return du++, o.then(kh, kh), o;
  }
  function kh() {
    if (--du === 0 && us !== null) {
      ro !== null && (ro.status = "fulfilled");
      var n = us;
      (us = null), (ao = 0), (ro = null);
      for (var o = 0; o < n.length; o++) (0, n[o])();
    }
  }
  function L_(n, o) {
    var l = [],
      r = {
        status: "pending",
        value: null,
        reason: null,
        then: function (m) {
          l.push(m);
        },
      };
    return (
      n.then(
        function () {
          (r.status = "fulfilled"), (r.value = o);
          for (var m = 0; m < l.length; m++) (0, l[m])(o);
        },
        function (m) {
          for (r.status = "rejected", r.reason = m, m = 0; m < l.length; m++)
            (0, l[m])(void 0);
        }
      ),
      r
    );
  }
  var Bh = G.S;
  G.S = function (n, o) {
    (Am = Rt()),
      typeof o == "object" &&
        o !== null &&
        typeof o.then == "function" &&
        U_(n, o),
      Bh !== null && Bh(n, o);
  };
  var Mi = N(null);
  function hu() {
    var n = Mi.current;
    return n !== null ? n : Ve.pooledCache;
  }
  function Pl(n, o) {
    o === null ? W(Mi, Mi.current) : W(Mi, o.pool);
  }
  function zh() {
    var n = hu();
    return n === null ? null : { parent: Qe._currentValue, pool: n };
  }
  var uo = Error(s(460)),
    pu = Error(s(474)),
    Hl = Error(s(542)),
    Gl = { then: function () {} };
  function qh(n) {
    return (n = n.status), n === "fulfilled" || n === "rejected";
  }
  function Oh(n, o, l) {
    switch (
      ((l = n[l]),
      l === void 0 ? n.push(o) : l !== o && (o.then(gn, gn), (o = l)),
      o.status)
    ) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw ((n = o.reason), Yh(n), n);
      default:
        if (typeof o.status == "string") o.then(gn, gn);
        else {
          if (((n = Ve), n !== null && 100 < n.shellSuspendCounter))
            throw Error(s(482));
          (n = o),
            (n.status = "pending"),
            n.then(
              function (r) {
                if (o.status === "pending") {
                  var m = o;
                  (m.status = "fulfilled"), (m.value = r);
                }
              },
              function (r) {
                if (o.status === "pending") {
                  var m = o;
                  (m.status = "rejected"), (m.reason = r);
                }
              }
            );
        }
        switch (o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw ((n = o.reason), Yh(n), n);
        }
        throw ((wi = o), uo);
    }
  }
  function Ri(n) {
    try {
      var o = n._init;
      return o(n._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((wi = l), uo)
        : l;
    }
  }
  var wi = null;
  function Fh() {
    if (wi === null) throw Error(s(459));
    var n = wi;
    return (wi = null), n;
  }
  function Yh(n) {
    if (n === uo || n === Hl) throw Error(s(483));
  }
  var co = null,
    cs = 0;
  function kl(n) {
    var o = cs;
    return (cs += 1), co === null && (co = []), Oh(co, n, o);
  }
  function fs(n, o) {
    (o = o.props.ref), (n.ref = o !== void 0 ? o : null);
  }
  function Bl(n, o) {
    throw o.$$typeof === S
      ? Error(s(525))
      : ((n = Object.prototype.toString.call(o)),
        Error(
          s(
            31,
            n === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : n
          )
        ));
  }
  function Jh(n) {
    function o(D, w) {
      if (n) {
        var U = D.deletions;
        U === null ? ((D.deletions = [w]), (D.flags |= 16)) : U.push(w);
      }
    }
    function l(D, w) {
      if (!n) return null;
      for (; w !== null; ) o(D, w), (w = w.sibling);
      return null;
    }
    function r(D) {
      for (var w = new Map(); D !== null; )
        D.key !== null ? w.set(D.key, D) : w.set(D.index, D), (D = D.sibling);
      return w;
    }
    function m(D, w) {
      return (D = vn(D, w)), (D.index = 0), (D.sibling = null), D;
    }
    function y(D, w, U) {
      return (
        (D.index = U),
        n
          ? ((U = D.alternate),
            U !== null
              ? ((U = U.index), U < w ? ((D.flags |= 67108866), w) : U)
              : ((D.flags |= 67108866), w))
          : ((D.flags |= 1048576), w)
      );
    }
    function E(D) {
      return n && D.alternate === null && (D.flags |= 67108866), D;
    }
    function A(D, w, U, z) {
      return w === null || w.tag !== 6
        ? ((w = nu(U, D.mode, z)), (w.return = D), w)
        : ((w = m(w, U)), (w.return = D), w);
    }
    function x(D, w, U, z) {
      var oe = U.type;
      return oe === R
        ? B(D, w, U.props.children, z, U.key)
        : w !== null &&
          (w.elementType === oe ||
            (typeof oe == "object" &&
              oe !== null &&
              oe.$$typeof === Z &&
              Ri(oe) === w.type))
        ? ((w = m(w, U.props)), fs(w, U), (w.return = D), w)
        : ((w = Il(U.type, U.key, U.props, null, D.mode, z)),
          fs(w, U),
          (w.return = D),
          w);
    }
    function L(D, w, U, z) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== U.containerInfo ||
        w.stateNode.implementation !== U.implementation
        ? ((w = iu(U, D.mode, z)), (w.return = D), w)
        : ((w = m(w, U.children || [])), (w.return = D), w);
    }
    function B(D, w, U, z, oe) {
      return w === null || w.tag !== 7
        ? ((w = _i(U, D.mode, z, oe)), (w.return = D), w)
        : ((w = m(w, U)), (w.return = D), w);
    }
    function O(D, w, U) {
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return (w = nu("" + w, D.mode, U)), (w.return = D), w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _:
            return (
              (U = Il(w.type, w.key, w.props, null, D.mode, U)),
              fs(U, w),
              (U.return = D),
              U
            );
          case C:
            return (w = iu(w, D.mode, U)), (w.return = D), w;
          case Z:
            return (w = Ri(w)), O(D, w, U);
        }
        if (pt(w) || Pe(w))
          return (w = _i(w, D.mode, U, null)), (w.return = D), w;
        if (typeof w.then == "function") return O(D, kl(w), U);
        if (w.$$typeof === P) return O(D, Vl(D, w), U);
        Bl(D, w);
      }
      return null;
    }
    function V(D, w, U, z) {
      var oe = w !== null ? w.key : null;
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return oe !== null ? null : A(D, w, "" + U, z);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case _:
            return U.key === oe ? x(D, w, U, z) : null;
          case C:
            return U.key === oe ? L(D, w, U, z) : null;
          case Z:
            return (U = Ri(U)), V(D, w, U, z);
        }
        if (pt(U) || Pe(U)) return oe !== null ? null : B(D, w, U, z, null);
        if (typeof U.then == "function") return V(D, w, kl(U), z);
        if (U.$$typeof === P) return V(D, w, Vl(D, U), z);
        Bl(D, U);
      }
      return null;
    }
    function H(D, w, U, z, oe) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return (D = D.get(U) || null), A(w, D, "" + z, oe);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case _:
            return (
              (D = D.get(z.key === null ? U : z.key) || null), x(w, D, z, oe)
            );
          case C:
            return (
              (D = D.get(z.key === null ? U : z.key) || null), L(w, D, z, oe)
            );
          case Z:
            return (z = Ri(z)), H(D, w, U, z, oe);
        }
        if (pt(z) || Pe(z)) return (D = D.get(U) || null), B(w, D, z, oe, null);
        if (typeof z.then == "function") return H(D, w, U, kl(z), oe);
        if (z.$$typeof === P) return H(D, w, U, Vl(w, z), oe);
        Bl(w, z);
      }
      return null;
    }
    function ee(D, w, U, z) {
      for (
        var oe = null, Ae = null, ne = w, de = (w = 0), ve = null;
        ne !== null && de < U.length;
        de++
      ) {
        ne.index > de ? ((ve = ne), (ne = null)) : (ve = ne.sibling);
        var Ce = V(D, ne, U[de], z);
        if (Ce === null) {
          ne === null && (ne = ve);
          break;
        }
        n && ne && Ce.alternate === null && o(D, ne),
          (w = y(Ce, w, de)),
          Ae === null ? (oe = Ce) : (Ae.sibling = Ce),
          (Ae = Ce),
          (ne = ve);
      }
      if (de === U.length) return l(D, ne), Te && Tn(D, de), oe;
      if (ne === null) {
        for (; de < U.length; de++)
          (ne = O(D, U[de], z)),
            ne !== null &&
              ((w = y(ne, w, de)),
              Ae === null ? (oe = ne) : (Ae.sibling = ne),
              (Ae = ne));
        return Te && Tn(D, de), oe;
      }
      for (ne = r(ne); de < U.length; de++)
        (ve = H(ne, D, de, U[de], z)),
          ve !== null &&
            (n &&
              ve.alternate !== null &&
              ne.delete(ve.key === null ? de : ve.key),
            (w = y(ve, w, de)),
            Ae === null ? (oe = ve) : (Ae.sibling = ve),
            (Ae = ve));
      return (
        n &&
          ne.forEach(function (ri) {
            return o(D, ri);
          }),
        Te && Tn(D, de),
        oe
      );
    }
    function se(D, w, U, z) {
      if (U == null) throw Error(s(151));
      for (
        var oe = null,
          Ae = null,
          ne = w,
          de = (w = 0),
          ve = null,
          Ce = U.next();
        ne !== null && !Ce.done;
        de++, Ce = U.next()
      ) {
        ne.index > de ? ((ve = ne), (ne = null)) : (ve = ne.sibling);
        var ri = V(D, ne, Ce.value, z);
        if (ri === null) {
          ne === null && (ne = ve);
          break;
        }
        n && ne && ri.alternate === null && o(D, ne),
          (w = y(ri, w, de)),
          Ae === null ? (oe = ri) : (Ae.sibling = ri),
          (Ae = ri),
          (ne = ve);
      }
      if (Ce.done) return l(D, ne), Te && Tn(D, de), oe;
      if (ne === null) {
        for (; !Ce.done; de++, Ce = U.next())
          (Ce = O(D, Ce.value, z)),
            Ce !== null &&
              ((w = y(Ce, w, de)),
              Ae === null ? (oe = Ce) : (Ae.sibling = Ce),
              (Ae = Ce));
        return Te && Tn(D, de), oe;
      }
      for (ne = r(ne); !Ce.done; de++, Ce = U.next())
        (Ce = H(ne, D, de, Ce.value, z)),
          Ce !== null &&
            (n &&
              Ce.alternate !== null &&
              ne.delete(Ce.key === null ? de : Ce.key),
            (w = y(Ce, w, de)),
            Ae === null ? (oe = Ce) : (Ae.sibling = Ce),
            (Ae = Ce));
      return (
        n &&
          ne.forEach(function (YA) {
            return o(D, YA);
          }),
        Te && Tn(D, de),
        oe
      );
    }
    function Le(D, w, U, z) {
      if (
        (typeof U == "object" &&
          U !== null &&
          U.type === R &&
          U.key === null &&
          (U = U.props.children),
        typeof U == "object" && U !== null)
      ) {
        switch (U.$$typeof) {
          case _:
            e: {
              for (var oe = U.key; w !== null; ) {
                if (w.key === oe) {
                  if (((oe = U.type), oe === R)) {
                    if (w.tag === 7) {
                      l(D, w.sibling),
                        (z = m(w, U.props.children)),
                        (z.return = D),
                        (D = z);
                      break e;
                    }
                  } else if (
                    w.elementType === oe ||
                    (typeof oe == "object" &&
                      oe !== null &&
                      oe.$$typeof === Z &&
                      Ri(oe) === w.type)
                  ) {
                    l(D, w.sibling),
                      (z = m(w, U.props)),
                      fs(z, U),
                      (z.return = D),
                      (D = z);
                    break e;
                  }
                  l(D, w);
                  break;
                } else o(D, w);
                w = w.sibling;
              }
              U.type === R
                ? ((z = _i(U.props.children, D.mode, z, U.key)),
                  (z.return = D),
                  (D = z))
                : ((z = Il(U.type, U.key, U.props, null, D.mode, z)),
                  fs(z, U),
                  (z.return = D),
                  (D = z));
            }
            return E(D);
          case C:
            e: {
              for (oe = U.key; w !== null; ) {
                if (w.key === oe)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === U.containerInfo &&
                    w.stateNode.implementation === U.implementation
                  ) {
                    l(D, w.sibling),
                      (z = m(w, U.children || [])),
                      (z.return = D),
                      (D = z);
                    break e;
                  } else {
                    l(D, w);
                    break;
                  }
                else o(D, w);
                w = w.sibling;
              }
              (z = iu(U, D.mode, z)), (z.return = D), (D = z);
            }
            return E(D);
          case Z:
            return (U = Ri(U)), Le(D, w, U, z);
        }
        if (pt(U)) return ee(D, w, U, z);
        if (Pe(U)) {
          if (((oe = Pe(U)), typeof oe != "function")) throw Error(s(150));
          return (U = oe.call(U)), se(D, w, U, z);
        }
        if (typeof U.then == "function") return Le(D, w, kl(U), z);
        if (U.$$typeof === P) return Le(D, w, Vl(D, U), z);
        Bl(D, U);
      }
      return (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
        ? ((U = "" + U),
          w !== null && w.tag === 6
            ? (l(D, w.sibling), (z = m(w, U)), (z.return = D), (D = z))
            : (l(D, w), (z = nu(U, D.mode, z)), (z.return = D), (D = z)),
          E(D))
        : l(D, w);
    }
    return function (D, w, U, z) {
      try {
        cs = 0;
        var oe = Le(D, w, U, z);
        return (co = null), oe;
      } catch (ne) {
        if (ne === uo || ne === Hl) throw ne;
        var Ae = Dt(29, ne, null, D.mode);
        return (Ae.lanes = z), (Ae.return = D), Ae;
      } finally {
      }
    };
  }
  var Ni = Jh(!0),
    Kh = Jh(!1),
    Yn = !1;
  function mu(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function gu(n, o) {
    (n = n.updateQueue),
      o.updateQueue === n &&
        (o.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          callbacks: null,
        });
  }
  function Jn(n) {
    return { lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Kn(n, o, l) {
    var r = n.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Re & 2) !== 0)) {
      var m = r.pending;
      return (
        m === null ? (o.next = o) : ((o.next = m.next), (m.next = o)),
        (r.pending = o),
        (o = Dl(n)),
        bh(n, null, l),
        o
      );
    }
    return bl(n, r, o, l), Dl(n);
  }
  function ds(n, o, l) {
    if (
      ((o = o.updateQueue), o !== null && ((o = o.shared), (l & 4194048) !== 0))
    ) {
      var r = o.lanes;
      (r &= n.pendingLanes), (l |= r), (o.lanes = l), Gd(n, l);
    }
  }
  function yu(n, o) {
    var l = n.updateQueue,
      r = n.alternate;
    if (r !== null && ((r = r.updateQueue), l === r)) {
      var m = null,
        y = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var E = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          y === null ? (m = y = E) : (y = y.next = E), (l = l.next);
        } while (l !== null);
        y === null ? (m = y = o) : (y = y.next = o);
      } else m = y = o;
      (l = {
        baseState: r.baseState,
        firstBaseUpdate: m,
        lastBaseUpdate: y,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (n.updateQueue = l);
      return;
    }
    (n = l.lastBaseUpdate),
      n === null ? (l.firstBaseUpdate = o) : (n.next = o),
      (l.lastBaseUpdate = o);
  }
  var vu = !1;
  function hs() {
    if (vu) {
      var n = ro;
      if (n !== null) throw n;
    }
  }
  function ps(n, o, l, r) {
    vu = !1;
    var m = n.updateQueue;
    Yn = !1;
    var y = m.firstBaseUpdate,
      E = m.lastBaseUpdate,
      A = m.shared.pending;
    if (A !== null) {
      m.shared.pending = null;
      var x = A,
        L = x.next;
      (x.next = null), E === null ? (y = L) : (E.next = L), (E = x);
      var B = n.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (A = B.lastBaseUpdate),
        A !== E &&
          (A === null ? (B.firstBaseUpdate = L) : (A.next = L),
          (B.lastBaseUpdate = x)));
    }
    if (y !== null) {
      var O = m.baseState;
      (E = 0), (B = L = x = null), (A = y);
      do {
        var V = A.lane & -536870913,
          H = V !== A.lane;
        if (H ? (ye & V) === V : (r & V) === V) {
          V !== 0 && V === ao && (vu = !0),
            B !== null &&
              (B = B.next =
                {
                  lane: 0,
                  tag: A.tag,
                  payload: A.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ee = n,
              se = A;
            V = o;
            var Le = l;
            switch (se.tag) {
              case 1:
                if (((ee = se.payload), typeof ee == "function")) {
                  O = ee.call(Le, O, V);
                  break e;
                }
                O = ee;
                break e;
              case 3:
                ee.flags = (ee.flags & -65537) | 128;
              case 0:
                if (
                  ((ee = se.payload),
                  (V = typeof ee == "function" ? ee.call(Le, O, V) : ee),
                  V == null)
                )
                  break e;
                O = T({}, O, V);
                break e;
              case 2:
                Yn = !0;
            }
          }
          (V = A.callback),
            V !== null &&
              ((n.flags |= 64),
              H && (n.flags |= 8192),
              (H = m.callbacks),
              H === null ? (m.callbacks = [V]) : H.push(V));
        } else
          (H = {
            lane: V,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null,
          }),
            B === null ? ((L = B = H), (x = O)) : (B = B.next = H),
            (E |= V);
        if (((A = A.next), A === null)) {
          if (((A = m.shared.pending), A === null)) break;
          (H = A),
            (A = H.next),
            (H.next = null),
            (m.lastBaseUpdate = H),
            (m.shared.pending = null);
        }
      } while (!0);
      B === null && (x = O),
        (m.baseState = x),
        (m.firstBaseUpdate = L),
        (m.lastBaseUpdate = B),
        y === null && (m.shared.lanes = 0),
        (Wn |= E),
        (n.lanes = E),
        (n.memoizedState = O);
    }
  }
  function Xh(n, o) {
    if (typeof n != "function") throw Error(s(191, n));
    n.call(o);
  }
  function Qh(n, o) {
    var l = n.callbacks;
    if (l !== null)
      for (n.callbacks = null, n = 0; n < l.length; n++) Xh(l[n], o);
  }
  var fo = N(null),
    zl = N(0);
  function Zh(n, o) {
    (n = bn), W(zl, n), W(fo, o), (bn = n | o.baseLanes);
  }
  function Tu() {
    W(zl, bn), W(fo, fo.current);
  }
  function Su() {
    (bn = zl.current), F(fo), F(zl);
  }
  var It = N(null),
    Yt = null;
  function Xn(n) {
    var o = n.alternate;
    W(Je, Je.current & 1),
      W(It, n),
      Yt === null &&
        (o === null || fo.current !== null || o.memoizedState !== null) &&
        (Yt = n);
  }
  function Eu(n) {
    W(Je, Je.current), W(It, n), Yt === null && (Yt = n);
  }
  function $h(n) {
    n.tag === 22
      ? (W(Je, Je.current), W(It, n), Yt === null && (Yt = n))
      : Qn();
  }
  function Qn() {
    W(Je, Je.current), W(It, It.current);
  }
  function Ut(n) {
    F(It), Yt === n && (Yt = null), F(Je);
  }
  var Je = N(0);
  function ql(n) {
    for (var o = n; o !== null; ) {
      if (o.tag === 13) {
        var l = o.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Rc(l) || wc(l)))
          return o;
      } else if (
        o.tag === 19 &&
        (o.memoizedProps.revealOrder === "forwards" ||
          o.memoizedProps.revealOrder === "backwards" ||
          o.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          o.memoizedProps.revealOrder === "together")
      ) {
        if ((o.flags & 128) !== 0) return o;
      } else if (o.child !== null) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === n) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === n) return null;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
    return null;
  }
  var _n = 0,
    fe = null,
    Ie = null,
    Ze = null,
    Ol = !1,
    ho = !1,
    bi = !1,
    Fl = 0,
    ms = 0,
    po = null,
    V_ = 0;
  function qe() {
    throw Error(s(321));
  }
  function _u(n, o) {
    if (o === null) return !1;
    for (var l = 0; l < o.length && l < n.length; l++)
      if (!bt(n[l], o[l])) return !1;
    return !0;
  }
  function Au(n, o, l, r, m, y) {
    return (
      (_n = y),
      (fe = o),
      (o.memoizedState = null),
      (o.updateQueue = null),
      (o.lanes = 0),
      (G.H = n === null || n.memoizedState === null ? Lp : Gu),
      (bi = !1),
      (y = l(r, m)),
      (bi = !1),
      ho && (y = jh(o, l, r, m)),
      Wh(n),
      y
    );
  }
  function Wh(n) {
    G.H = vs;
    var o = Ie !== null && Ie.next !== null;
    if (((_n = 0), (Ze = Ie = fe = null), (Ol = !1), (ms = 0), (po = null), o))
      throw Error(s(300));
    n === null ||
      $e ||
      ((n = n.dependencies), n !== null && Ll(n) && ($e = !0));
  }
  function jh(n, o, l, r) {
    fe = n;
    var m = 0;
    do {
      if ((ho && (po = null), (ms = 0), (ho = !1), 25 <= m))
        throw Error(s(301));
      if (((m += 1), (Ze = Ie = null), n.updateQueue != null)) {
        var y = n.updateQueue;
        (y.lastEffect = null),
          (y.events = null),
          (y.stores = null),
          y.memoCache != null && (y.memoCache.index = 0);
      }
      (G.H = Vp), (y = o(l, r));
    } while (ho);
    return y;
  }
  function P_() {
    var n = G.H,
      o = n.useState()[0];
    return (
      (o = typeof o.then == "function" ? gs(o) : o),
      (n = n.useState()[0]),
      (Ie !== null ? Ie.memoizedState : null) !== n && (fe.flags |= 1024),
      o
    );
  }
  function Cu() {
    var n = Fl !== 0;
    return (Fl = 0), n;
  }
  function xu(n, o, l) {
    (o.updateQueue = n.updateQueue), (o.flags &= -2053), (n.lanes &= ~l);
  }
  function Mu(n) {
    if (Ol) {
      for (n = n.memoizedState; n !== null; ) {
        var o = n.queue;
        o !== null && (o.pending = null), (n = n.next);
      }
      Ol = !1;
    }
    (_n = 0), (Ze = Ie = fe = null), (ho = !1), (ms = Fl = 0), (po = null);
  }
  function gt() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ze === null ? (fe.memoizedState = Ze = n) : (Ze = Ze.next = n), Ze;
  }
  function Ke() {
    if (Ie === null) {
      var n = fe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ie.next;
    var o = Ze === null ? fe.memoizedState : Ze.next;
    if (o !== null) (Ze = o), (Ie = n);
    else {
      if (n === null)
        throw fe.alternate === null ? Error(s(467)) : Error(s(310));
      (Ie = n),
        (n = {
          memoizedState: Ie.memoizedState,
          baseState: Ie.baseState,
          baseQueue: Ie.baseQueue,
          queue: Ie.queue,
          next: null,
        }),
        Ze === null ? (fe.memoizedState = Ze = n) : (Ze = Ze.next = n);
    }
    return Ze;
  }
  function Yl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function gs(n) {
    var o = ms;
    return (
      (ms += 1),
      po === null && (po = []),
      (n = Oh(po, n, o)),
      (o = fe),
      (Ze === null ? o.memoizedState : Ze.next) === null &&
        ((o = o.alternate),
        (G.H = o === null || o.memoizedState === null ? Lp : Gu)),
      n
    );
  }
  function Jl(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return gs(n);
      if (n.$$typeof === P) return rt(n);
    }
    throw Error(s(438, String(n)));
  }
  function Ru(n) {
    var o = null,
      l = fe.updateQueue;
    if ((l !== null && (o = l.memoCache), o == null)) {
      var r = fe.alternate;
      r !== null &&
        ((r = r.updateQueue),
        r !== null &&
          ((r = r.memoCache),
          r != null &&
            (o = {
              data: r.data.map(function (m) {
                return m.slice();
              }),
              index: 0,
            })));
    }
    if (
      (o == null && (o = { data: [], index: 0 }),
      l === null && ((l = Yl()), (fe.updateQueue = l)),
      (l.memoCache = o),
      (l = o.data[o.index]),
      l === void 0)
    )
      for (l = o.data[o.index] = Array(n), r = 0; r < n; r++) l[r] = ae;
    return o.index++, l;
  }
  function An(n, o) {
    return typeof o == "function" ? o(n) : o;
  }
  function Kl(n) {
    var o = Ke();
    return wu(o, Ie, n);
  }
  function wu(n, o, l) {
    var r = n.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = l;
    var m = n.baseQueue,
      y = r.pending;
    if (y !== null) {
      if (m !== null) {
        var E = m.next;
        (m.next = y.next), (y.next = E);
      }
      (o.baseQueue = m = y), (r.pending = null);
    }
    if (((y = n.baseState), m === null)) n.memoizedState = y;
    else {
      o = m.next;
      var A = (E = null),
        x = null,
        L = o,
        B = !1;
      do {
        var O = L.lane & -536870913;
        if (O !== L.lane ? (ye & O) === O : (_n & O) === O) {
          var V = L.revertLane;
          if (V === 0)
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: L.action,
                  hasEagerState: L.hasEagerState,
                  eagerState: L.eagerState,
                  next: null,
                }),
              O === ao && (B = !0);
          else if ((_n & V) === V) {
            (L = L.next), V === ao && (B = !0);
            continue;
          } else
            (O = {
              lane: 0,
              revertLane: L.revertLane,
              gesture: null,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null,
            }),
              x === null ? ((A = x = O), (E = y)) : (x = x.next = O),
              (fe.lanes |= V),
              (Wn |= V);
          (O = L.action),
            bi && l(y, O),
            (y = L.hasEagerState ? L.eagerState : l(y, O));
        } else
          (V = {
            lane: O,
            revertLane: L.revertLane,
            gesture: L.gesture,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          }),
            x === null ? ((A = x = V), (E = y)) : (x = x.next = V),
            (fe.lanes |= O),
            (Wn |= O);
        L = L.next;
      } while (L !== null && L !== o);
      if (
        (x === null ? (E = y) : (x.next = A),
        !bt(y, n.memoizedState) && (($e = !0), B && ((l = ro), l !== null)))
      )
        throw l;
      (n.memoizedState = y),
        (n.baseState = E),
        (n.baseQueue = x),
        (r.lastRenderedState = y);
    }
    return m === null && (r.lanes = 0), [n.memoizedState, r.dispatch];
  }
  function Nu(n) {
    var o = Ke(),
      l = o.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = n;
    var r = l.dispatch,
      m = l.pending,
      y = o.memoizedState;
    if (m !== null) {
      l.pending = null;
      var E = (m = m.next);
      do (y = n(y, E.action)), (E = E.next);
      while (E !== m);
      bt(y, o.memoizedState) || ($e = !0),
        (o.memoizedState = y),
        o.baseQueue === null && (o.baseState = y),
        (l.lastRenderedState = y);
    }
    return [y, r];
  }
  function ep(n, o, l) {
    var r = fe,
      m = Ke(),
      y = Te;
    if (y) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = o();
    var E = !bt((Ie || m).memoizedState, l);
    if (
      (E && ((m.memoizedState = l), ($e = !0)),
      (m = m.queue),
      Iu(ip.bind(null, r, m, n), [n]),
      m.getSnapshot !== o || E || (Ze !== null && Ze.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        mo(9, { destroy: void 0 }, np.bind(null, r, m, l, o), null),
        Ve === null)
      )
        throw Error(s(349));
      y || (_n & 127) !== 0 || tp(r, o, l);
    }
    return l;
  }
  function tp(n, o, l) {
    (n.flags |= 16384),
      (n = { getSnapshot: o, value: l }),
      (o = fe.updateQueue),
      o === null
        ? ((o = Yl()), (fe.updateQueue = o), (o.stores = [n]))
        : ((l = o.stores), l === null ? (o.stores = [n]) : l.push(n));
  }
  function np(n, o, l, r) {
    (o.value = l), (o.getSnapshot = r), op(o) && sp(n);
  }
  function ip(n, o, l) {
    return l(function () {
      op(o) && sp(n);
    });
  }
  function op(n) {
    var o = n.getSnapshot;
    n = n.value;
    try {
      var l = o();
      return !bt(n, l);
    } catch {
      return !0;
    }
  }
  function sp(n) {
    var o = Ei(n, 2);
    o !== null && Mt(o, n, 2);
  }
  function bu(n) {
    var o = gt();
    if (typeof n == "function") {
      var l = n;
      if (((n = l()), bi)) {
        Gn(!0);
        try {
          l();
        } finally {
          Gn(!1);
        }
      }
    }
    return (
      (o.memoizedState = o.baseState = n),
      (o.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: An,
        lastRenderedState: n,
      }),
      o
    );
  }
  function lp(n, o, l, r) {
    return (n.baseState = l), wu(n, Ie, typeof r == "function" ? r : An);
  }
  function H_(n, o, l, r, m) {
    if (Zl(n)) throw Error(s(485));
    if (((n = o.action), n !== null)) {
      var y = {
        payload: m,
        action: n,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (E) {
          y.listeners.push(E);
        },
      };
      G.T !== null ? l(!0) : (y.isTransition = !1),
        r(y),
        (l = o.pending),
        l === null
          ? ((y.next = o.pending = y), ap(o, y))
          : ((y.next = l.next), (o.pending = l.next = y));
    }
  }
  function ap(n, o) {
    var l = o.action,
      r = o.payload,
      m = n.state;
    if (o.isTransition) {
      var y = G.T,
        E = {};
      G.T = E;
      try {
        var A = l(m, r),
          x = G.S;
        x !== null && x(E, A), rp(n, o, A);
      } catch (L) {
        Du(n, o, L);
      } finally {
        y !== null && E.types !== null && (y.types = E.types), (G.T = y);
      }
    } else
      try {
        (y = l(m, r)), rp(n, o, y);
      } catch (L) {
        Du(n, o, L);
      }
  }
  function rp(n, o, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (r) {
            up(n, o, r);
          },
          function (r) {
            return Du(n, o, r);
          }
        )
      : up(n, o, l);
  }
  function up(n, o, l) {
    (o.status = "fulfilled"),
      (o.value = l),
      cp(o),
      (n.state = l),
      (o = n.pending),
      o !== null &&
        ((l = o.next),
        l === o ? (n.pending = null) : ((l = l.next), (o.next = l), ap(n, l)));
  }
  function Du(n, o, l) {
    var r = n.pending;
    if (((n.pending = null), r !== null)) {
      r = r.next;
      do (o.status = "rejected"), (o.reason = l), cp(o), (o = o.next);
      while (o !== r);
    }
    n.action = null;
  }
  function cp(n) {
    n = n.listeners;
    for (var o = 0; o < n.length; o++) (0, n[o])();
  }
  function fp(n, o) {
    return o;
  }
  function dp(n, o) {
    if (Te) {
      var l = Ve.formState;
      if (l !== null) {
        e: {
          var r = fe;
          if (Te) {
            if (He) {
              t: {
                for (var m = He, y = Ft; m.nodeType !== 8; ) {
                  if (!y) {
                    m = null;
                    break t;
                  }
                  if (((m = Jt(m.nextSibling)), m === null)) {
                    m = null;
                    break t;
                  }
                }
                (y = m.data), (m = y === "F!" || y === "F" ? m : null);
              }
              if (m) {
                (He = Jt(m.nextSibling)), (r = m.data === "F!");
                break e;
              }
            }
            On(r);
          }
          r = !1;
        }
        r && (o = l[0]);
      }
    }
    return (
      (l = gt()),
      (l.memoizedState = l.baseState = o),
      (r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fp,
        lastRenderedState: o,
      }),
      (l.queue = r),
      (l = Dp.bind(null, fe, r)),
      (r.dispatch = l),
      (r = bu(!1)),
      (y = Hu.bind(null, fe, !1, r.queue)),
      (r = gt()),
      (m = { state: o, dispatch: null, action: n, pending: null }),
      (r.queue = m),
      (l = H_.bind(null, fe, m, y, l)),
      (m.dispatch = l),
      (r.memoizedState = n),
      [o, l, !1]
    );
  }
  function hp(n) {
    var o = Ke();
    return pp(o, Ie, n);
  }
  function pp(n, o, l) {
    if (
      ((o = wu(n, o, fp)[0]),
      (n = Kl(An)[0]),
      typeof o == "object" && o !== null && typeof o.then == "function")
    )
      try {
        var r = gs(o);
      } catch (E) {
        throw E === uo ? Hl : E;
      }
    else r = o;
    o = Ke();
    var m = o.queue,
      y = m.dispatch;
    return (
      l !== o.memoizedState &&
        ((fe.flags |= 2048),
        mo(9, { destroy: void 0 }, G_.bind(null, m, l), null)),
      [r, y, n]
    );
  }
  function G_(n, o) {
    n.action = o;
  }
  function mp(n) {
    var o = Ke(),
      l = Ie;
    if (l !== null) return pp(o, l, n);
    Ke(), (o = o.memoizedState), (l = Ke());
    var r = l.queue.dispatch;
    return (l.memoizedState = n), [o, r, !1];
  }
  function mo(n, o, l, r) {
    return (
      (n = { tag: n, create: l, deps: r, inst: o, next: null }),
      (o = fe.updateQueue),
      o === null && ((o = Yl()), (fe.updateQueue = o)),
      (l = o.lastEffect),
      l === null
        ? (o.lastEffect = n.next = n)
        : ((r = l.next), (l.next = n), (n.next = r), (o.lastEffect = n)),
      n
    );
  }
  function gp() {
    return Ke().memoizedState;
  }
  function Xl(n, o, l, r) {
    var m = gt();
    (fe.flags |= n),
      (m.memoizedState = mo(
        1 | o,
        { destroy: void 0 },
        l,
        r === void 0 ? null : r
      ));
  }
  function Ql(n, o, l, r) {
    var m = Ke();
    r = r === void 0 ? null : r;
    var y = m.memoizedState.inst;
    Ie !== null && r !== null && _u(r, Ie.memoizedState.deps)
      ? (m.memoizedState = mo(o, y, l, r))
      : ((fe.flags |= n), (m.memoizedState = mo(1 | o, y, l, r)));
  }
  function yp(n, o) {
    Xl(8390656, 8, n, o);
  }
  function Iu(n, o) {
    Ql(2048, 8, n, o);
  }
  function k_(n) {
    fe.flags |= 4;
    var o = fe.updateQueue;
    if (o === null) (o = Yl()), (fe.updateQueue = o), (o.events = [n]);
    else {
      var l = o.events;
      l === null ? (o.events = [n]) : l.push(n);
    }
  }
  function vp(n) {
    var o = Ke().memoizedState;
    return (
      k_({ ref: o, nextImpl: n }),
      function () {
        if ((Re & 2) !== 0) throw Error(s(440));
        return o.impl.apply(void 0, arguments);
      }
    );
  }
  function Tp(n, o) {
    return Ql(4, 2, n, o);
  }
  function Sp(n, o) {
    return Ql(4, 4, n, o);
  }
  function Ep(n, o) {
    if (typeof o == "function") {
      n = n();
      var l = o(n);
      return function () {
        typeof l == "function" ? l() : o(null);
      };
    }
    if (o != null)
      return (
        (n = n()),
        (o.current = n),
        function () {
          o.current = null;
        }
      );
  }
  function _p(n, o, l) {
    (l = l != null ? l.concat([n]) : null), Ql(4, 4, Ep.bind(null, o, n), l);
  }
  function Uu() {}
  function Ap(n, o) {
    var l = Ke();
    o = o === void 0 ? null : o;
    var r = l.memoizedState;
    return o !== null && _u(o, r[1]) ? r[0] : ((l.memoizedState = [n, o]), n);
  }
  function Cp(n, o) {
    var l = Ke();
    o = o === void 0 ? null : o;
    var r = l.memoizedState;
    if (o !== null && _u(o, r[1])) return r[0];
    if (((r = n()), bi)) {
      Gn(!0);
      try {
        n();
      } finally {
        Gn(!1);
      }
    }
    return (l.memoizedState = [r, o]), r;
  }
  function Lu(n, o, l) {
    return l === void 0 || ((_n & 1073741824) !== 0 && (ye & 261930) === 0)
      ? (n.memoizedState = o)
      : ((n.memoizedState = l), (n = xm()), (fe.lanes |= n), (Wn |= n), l);
  }
  function xp(n, o, l, r) {
    return bt(l, o)
      ? l
      : fo.current !== null
      ? ((n = Lu(n, l, r)), bt(n, o) || ($e = !0), n)
      : (_n & 42) === 0 || ((_n & 1073741824) !== 0 && (ye & 261930) === 0)
      ? (($e = !0), (n.memoizedState = l))
      : ((n = xm()), (fe.lanes |= n), (Wn |= n), o);
  }
  function Mp(n, o, l, r, m) {
    var y = K.p;
    K.p = y !== 0 && 8 > y ? y : 8;
    var E = G.T,
      A = {};
    (G.T = A), Hu(n, !1, o, l);
    try {
      var x = m(),
        L = G.S;
      if (
        (L !== null && L(A, x),
        x !== null && typeof x == "object" && typeof x.then == "function")
      ) {
        var B = L_(x, r);
        ys(n, o, B, Pt(n));
      } else ys(n, o, r, Pt(n));
    } catch (O) {
      ys(n, o, { then: function () {}, status: "rejected", reason: O }, Pt());
    } finally {
      (K.p = y),
        E !== null && A.types !== null && (E.types = A.types),
        (G.T = E);
    }
  }
  function B_() {}
  function Vu(n, o, l, r) {
    if (n.tag !== 5) throw Error(s(476));
    var m = Rp(n).queue;
    Mp(
      n,
      m,
      o,
      ie,
      l === null
        ? B_
        : function () {
            return wp(n), l(r);
          }
    );
  }
  function Rp(n) {
    var o = n.memoizedState;
    if (o !== null) return o;
    o = {
      memoizedState: ie,
      baseState: ie,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: An,
        lastRenderedState: ie,
      },
      next: null,
    };
    var l = {};
    return (
      (o.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: An,
          lastRenderedState: l,
        },
        next: null,
      }),
      (n.memoizedState = o),
      (n = n.alternate),
      n !== null && (n.memoizedState = o),
      o
    );
  }
  function wp(n) {
    var o = Rp(n);
    o.next === null && (o = n.alternate.memoizedState),
      ys(n, o.next.queue, {}, Pt());
  }
  function Pu() {
    return rt(Ls);
  }
  function Np() {
    return Ke().memoizedState;
  }
  function bp() {
    return Ke().memoizedState;
  }
  function z_(n) {
    for (var o = n.return; o !== null; ) {
      switch (o.tag) {
        case 24:
        case 3:
          var l = Pt();
          n = Jn(l);
          var r = Kn(o, n, l);
          r !== null && (Mt(r, o, l), ds(r, o, l)),
            (o = { cache: fu() }),
            (n.payload = o);
          return;
      }
      o = o.return;
    }
  }
  function q_(n, o, l) {
    var r = Pt();
    (l = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Zl(n)
        ? Ip(o, l)
        : ((l = eu(n, o, l, r)), l !== null && (Mt(l, n, r), Up(l, o, r)));
  }
  function Dp(n, o, l) {
    var r = Pt();
    ys(n, o, l, r);
  }
  function ys(n, o, l, r) {
    var m = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Zl(n)) Ip(o, m);
    else {
      var y = n.alternate;
      if (
        n.lanes === 0 &&
        (y === null || y.lanes === 0) &&
        ((y = o.lastRenderedReducer), y !== null)
      )
        try {
          var E = o.lastRenderedState,
            A = y(E, l);
          if (((m.hasEagerState = !0), (m.eagerState = A), bt(A, E)))
            return bl(n, o, m, 0), Ve === null && Nl(), !1;
        } catch {
        } finally {
        }
      if (((l = eu(n, o, m, r)), l !== null))
        return Mt(l, n, r), Up(l, o, r), !0;
    }
    return !1;
  }
  function Hu(n, o, l, r) {
    if (
      ((r = {
        lane: 2,
        revertLane: mc(),
        gesture: null,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Zl(n))
    ) {
      if (o) throw Error(s(479));
    } else (o = eu(n, l, r, 2)), o !== null && Mt(o, n, 2);
  }
  function Zl(n) {
    var o = n.alternate;
    return n === fe || (o !== null && o === fe);
  }
  function Ip(n, o) {
    ho = Ol = !0;
    var l = n.pending;
    l === null ? (o.next = o) : ((o.next = l.next), (l.next = o)),
      (n.pending = o);
  }
  function Up(n, o, l) {
    if ((l & 4194048) !== 0) {
      var r = o.lanes;
      (r &= n.pendingLanes), (l |= r), (o.lanes = l), Gd(n, l);
    }
  }
  var vs = {
    readContext: rt,
    use: Jl,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useLayoutEffect: qe,
    useInsertionEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useSyncExternalStore: qe,
    useId: qe,
    useHostTransitionStatus: qe,
    useFormState: qe,
    useActionState: qe,
    useOptimistic: qe,
    useMemoCache: qe,
    useCacheRefresh: qe,
  };
  vs.useEffectEvent = qe;
  var Lp = {
      readContext: rt,
      use: Jl,
      useCallback: function (n, o) {
        return (gt().memoizedState = [n, o === void 0 ? null : o]), n;
      },
      useContext: rt,
      useEffect: yp,
      useImperativeHandle: function (n, o, l) {
        (l = l != null ? l.concat([n]) : null),
          Xl(4194308, 4, Ep.bind(null, o, n), l);
      },
      useLayoutEffect: function (n, o) {
        return Xl(4194308, 4, n, o);
      },
      useInsertionEffect: function (n, o) {
        Xl(4, 2, n, o);
      },
      useMemo: function (n, o) {
        var l = gt();
        o = o === void 0 ? null : o;
        var r = n();
        if (bi) {
          Gn(!0);
          try {
            n();
          } finally {
            Gn(!1);
          }
        }
        return (l.memoizedState = [r, o]), r;
      },
      useReducer: function (n, o, l) {
        var r = gt();
        if (l !== void 0) {
          var m = l(o);
          if (bi) {
            Gn(!0);
            try {
              l(o);
            } finally {
              Gn(!1);
            }
          }
        } else m = o;
        return (
          (r.memoizedState = r.baseState = m),
          (n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: m,
          }),
          (r.queue = n),
          (n = n.dispatch = q_.bind(null, fe, n)),
          [r.memoizedState, n]
        );
      },
      useRef: function (n) {
        var o = gt();
        return (n = { current: n }), (o.memoizedState = n);
      },
      useState: function (n) {
        n = bu(n);
        var o = n.queue,
          l = Dp.bind(null, fe, o);
        return (o.dispatch = l), [n.memoizedState, l];
      },
      useDebugValue: Uu,
      useDeferredValue: function (n, o) {
        var l = gt();
        return Lu(l, n, o);
      },
      useTransition: function () {
        var n = bu(!1);
        return (
          (n = Mp.bind(null, fe, n.queue, !0, !1)),
          (gt().memoizedState = n),
          [!1, n]
        );
      },
      useSyncExternalStore: function (n, o, l) {
        var r = fe,
          m = gt();
        if (Te) {
          if (l === void 0) throw Error(s(407));
          l = l();
        } else {
          if (((l = o()), Ve === null)) throw Error(s(349));
          (ye & 127) !== 0 || tp(r, o, l);
        }
        m.memoizedState = l;
        var y = { value: l, getSnapshot: o };
        return (
          (m.queue = y),
          yp(ip.bind(null, r, y, n), [n]),
          (r.flags |= 2048),
          mo(9, { destroy: void 0 }, np.bind(null, r, y, l, o), null),
          l
        );
      },
      useId: function () {
        var n = gt(),
          o = Ve.identifierPrefix;
        if (Te) {
          var l = an,
            r = ln;
          (l = (r & ~(1 << (32 - Nt(r) - 1))).toString(32) + l),
            (o = "_" + o + "R_" + l),
            (l = Fl++),
            0 < l && (o += "H" + l.toString(32)),
            (o += "_");
        } else (l = V_++), (o = "_" + o + "r_" + l.toString(32) + "_");
        return (n.memoizedState = o);
      },
      useHostTransitionStatus: Pu,
      useFormState: dp,
      useActionState: dp,
      useOptimistic: function (n) {
        var o = gt();
        o.memoizedState = o.baseState = n;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (o.queue = l),
          (o = Hu.bind(null, fe, !0, l)),
          (l.dispatch = o),
          [n, o]
        );
      },
      useMemoCache: Ru,
      useCacheRefresh: function () {
        return (gt().memoizedState = z_.bind(null, fe));
      },
      useEffectEvent: function (n) {
        var o = gt(),
          l = { impl: n };
        return (
          (o.memoizedState = l),
          function () {
            if ((Re & 2) !== 0) throw Error(s(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Gu = {
      readContext: rt,
      use: Jl,
      useCallback: Ap,
      useContext: rt,
      useEffect: Iu,
      useImperativeHandle: _p,
      useInsertionEffect: Tp,
      useLayoutEffect: Sp,
      useMemo: Cp,
      useReducer: Kl,
      useRef: gp,
      useState: function () {
        return Kl(An);
      },
      useDebugValue: Uu,
      useDeferredValue: function (n, o) {
        var l = Ke();
        return xp(l, Ie.memoizedState, n, o);
      },
      useTransition: function () {
        var n = Kl(An)[0],
          o = Ke().memoizedState;
        return [typeof n == "boolean" ? n : gs(n), o];
      },
      useSyncExternalStore: ep,
      useId: Np,
      useHostTransitionStatus: Pu,
      useFormState: hp,
      useActionState: hp,
      useOptimistic: function (n, o) {
        var l = Ke();
        return lp(l, Ie, n, o);
      },
      useMemoCache: Ru,
      useCacheRefresh: bp,
    };
  Gu.useEffectEvent = vp;
  var Vp = {
    readContext: rt,
    use: Jl,
    useCallback: Ap,
    useContext: rt,
    useEffect: Iu,
    useImperativeHandle: _p,
    useInsertionEffect: Tp,
    useLayoutEffect: Sp,
    useMemo: Cp,
    useReducer: Nu,
    useRef: gp,
    useState: function () {
      return Nu(An);
    },
    useDebugValue: Uu,
    useDeferredValue: function (n, o) {
      var l = Ke();
      return Ie === null ? Lu(l, n, o) : xp(l, Ie.memoizedState, n, o);
    },
    useTransition: function () {
      var n = Nu(An)[0],
        o = Ke().memoizedState;
      return [typeof n == "boolean" ? n : gs(n), o];
    },
    useSyncExternalStore: ep,
    useId: Np,
    useHostTransitionStatus: Pu,
    useFormState: mp,
    useActionState: mp,
    useOptimistic: function (n, o) {
      var l = Ke();
      return Ie !== null
        ? lp(l, Ie, n, o)
        : ((l.baseState = n), [n, l.queue.dispatch]);
    },
    useMemoCache: Ru,
    useCacheRefresh: bp,
  };
  Vp.useEffectEvent = vp;
  function ku(n, o, l, r) {
    (o = n.memoizedState),
      (l = l(r, o)),
      (l = l == null ? o : T({}, o, l)),
      (n.memoizedState = l),
      n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Bu = {
    enqueueSetState: function (n, o, l) {
      n = n._reactInternals;
      var r = Pt(),
        m = Jn(r);
      (m.payload = o),
        l != null && (m.callback = l),
        (o = Kn(n, m, r)),
        o !== null && (Mt(o, n, r), ds(o, n, r));
    },
    enqueueReplaceState: function (n, o, l) {
      n = n._reactInternals;
      var r = Pt(),
        m = Jn(r);
      (m.tag = 1),
        (m.payload = o),
        l != null && (m.callback = l),
        (o = Kn(n, m, r)),
        o !== null && (Mt(o, n, r), ds(o, n, r));
    },
    enqueueForceUpdate: function (n, o) {
      n = n._reactInternals;
      var l = Pt(),
        r = Jn(l);
      (r.tag = 2),
        o != null && (r.callback = o),
        (o = Kn(n, r, l)),
        o !== null && (Mt(o, n, l), ds(o, n, l));
    },
  };
  function Pp(n, o, l, r, m, y, E) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(r, y, E)
        : o.prototype && o.prototype.isPureReactComponent
        ? !os(l, r) || !os(m, y)
        : !0
    );
  }
  function Hp(n, o, l, r) {
    (n = o.state),
      typeof o.componentWillReceiveProps == "function" &&
        o.componentWillReceiveProps(l, r),
      typeof o.UNSAFE_componentWillReceiveProps == "function" &&
        o.UNSAFE_componentWillReceiveProps(l, r),
      o.state !== n && Bu.enqueueReplaceState(o, o.state, null);
  }
  function Di(n, o) {
    var l = o;
    if ("ref" in o) {
      l = {};
      for (var r in o) r !== "ref" && (l[r] = o[r]);
    }
    if ((n = n.defaultProps)) {
      l === o && (l = T({}, l));
      for (var m in n) l[m] === void 0 && (l[m] = n[m]);
    }
    return l;
  }
  function Gp(n) {
    wl(n);
  }
  function kp(n) {
    console.error(n);
  }
  function Bp(n) {
    wl(n);
  }
  function $l(n, o) {
    try {
      var l = n.onUncaughtError;
      l(o.value, { componentStack: o.stack });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function zp(n, o, l) {
    try {
      var r = n.onCaughtError;
      r(l.value, {
        componentStack: l.stack,
        errorBoundary: o.tag === 1 ? o.stateNode : null,
      });
    } catch (m) {
      setTimeout(function () {
        throw m;
      });
    }
  }
  function zu(n, o, l) {
    return (
      (l = Jn(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        $l(n, o);
      }),
      l
    );
  }
  function qp(n) {
    return (n = Jn(n)), (n.tag = 3), n;
  }
  function Op(n, o, l, r) {
    var m = l.type.getDerivedStateFromError;
    if (typeof m == "function") {
      var y = r.value;
      (n.payload = function () {
        return m(y);
      }),
        (n.callback = function () {
          zp(o, l, r);
        });
    }
    var E = l.stateNode;
    E !== null &&
      typeof E.componentDidCatch == "function" &&
      (n.callback = function () {
        zp(o, l, r),
          typeof m != "function" &&
            (jn === null ? (jn = new Set([this])) : jn.add(this));
        var A = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: A !== null ? A : "",
        });
      });
  }
  function O_(n, o, l, r, m) {
    if (
      ((l.flags |= 32768),
      r !== null && typeof r == "object" && typeof r.then == "function")
    ) {
      if (
        ((o = l.alternate),
        o !== null && lo(o, l, m, !0),
        (l = It.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Yt === null ? ua() : l.alternate === null && Oe === 0 && (Oe = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = m),
              r === Gl
                ? (l.flags |= 16384)
                : ((o = l.updateQueue),
                  o === null ? (l.updateQueue = new Set([r])) : o.add(r),
                  dc(n, r, m)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              r === Gl
                ? (l.flags |= 16384)
                : ((o = l.updateQueue),
                  o === null
                    ? ((o = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r]),
                      }),
                      (l.updateQueue = o))
                    : ((l = o.retryQueue),
                      l === null ? (o.retryQueue = new Set([r])) : l.add(r)),
                  dc(n, r, m)),
              !1
            );
        }
        throw Error(s(435, l.tag));
      }
      return dc(n, r, m), ua(), !1;
    }
    if (Te)
      return (
        (o = It.current),
        o !== null
          ? ((o.flags & 65536) === 0 && (o.flags |= 256),
            (o.flags |= 65536),
            (o.lanes = m),
            r !== lu && ((n = Error(s(422), { cause: r })), as(zt(n, l))))
          : (r !== lu && ((o = Error(s(423), { cause: r })), as(zt(o, l))),
            (n = n.current.alternate),
            (n.flags |= 65536),
            (m &= -m),
            (n.lanes |= m),
            (r = zt(r, l)),
            (m = zu(n.stateNode, r, m)),
            yu(n, m),
            Oe !== 4 && (Oe = 2)),
        !1
      );
    var y = Error(s(520), { cause: r });
    if (
      ((y = zt(y, l)),
      Ms === null ? (Ms = [y]) : Ms.push(y),
      Oe !== 4 && (Oe = 2),
      o === null)
    )
      return !0;
    (r = zt(r, l)), (l = o);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (n = m & -m),
            (l.lanes |= n),
            (n = zu(l.stateNode, r, n)),
            yu(l, n),
            !1
          );
        case 1:
          if (
            ((o = l.type),
            (y = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof o.getDerivedStateFromError == "function" ||
                (y !== null &&
                  typeof y.componentDidCatch == "function" &&
                  (jn === null || !jn.has(y)))))
          )
            return (
              (l.flags |= 65536),
              (m &= -m),
              (l.lanes |= m),
              (m = qp(m)),
              Op(m, n, l, r),
              yu(l, m),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var qu = Error(s(461)),
    $e = !1;
  function ut(n, o, l, r) {
    o.child = n === null ? Kh(o, null, l, r) : Ni(o, n.child, l, r);
  }
  function Fp(n, o, l, r, m) {
    l = l.render;
    var y = o.ref;
    if ("ref" in r) {
      var E = {};
      for (var A in r) A !== "ref" && (E[A] = r[A]);
    } else E = r;
    return (
      xi(o),
      (r = Au(n, o, l, E, y, m)),
      (A = Cu()),
      n !== null && !$e
        ? (xu(n, o, m), Cn(n, o, m))
        : (Te && A && ou(o), (o.flags |= 1), ut(n, o, r, m), o.child)
    );
  }
  function Yp(n, o, l, r, m) {
    if (n === null) {
      var y = l.type;
      return typeof y == "function" &&
        !tu(y) &&
        y.defaultProps === void 0 &&
        l.compare === null
        ? ((o.tag = 15), (o.type = y), Jp(n, o, y, r, m))
        : ((n = Il(l.type, null, r, o, o.mode, m)),
          (n.ref = o.ref),
          (n.return = o),
          (o.child = n));
    }
    if (((y = n.child), !Zu(n, m))) {
      var E = y.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : os), l(E, r) && n.ref === o.ref)
      )
        return Cn(n, o, m);
    }
    return (
      (o.flags |= 1),
      (n = vn(y, r)),
      (n.ref = o.ref),
      (n.return = o),
      (o.child = n)
    );
  }
  function Jp(n, o, l, r, m) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (os(y, r) && n.ref === o.ref)
        if ((($e = !1), (o.pendingProps = r = y), Zu(n, m)))
          (n.flags & 131072) !== 0 && ($e = !0);
        else return (o.lanes = n.lanes), Cn(n, o, m);
    }
    return Ou(n, o, l, r, m);
  }
  function Kp(n, o, l, r) {
    var m = r.children,
      y = n !== null ? n.memoizedState : null;
    if (
      (n === null &&
        o.stateNode === null &&
        (o.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      r.mode === "hidden")
    ) {
      if ((o.flags & 128) !== 0) {
        if (((y = y !== null ? y.baseLanes | l : l), n !== null)) {
          for (r = o.child = n.child, m = 0; r !== null; )
            (m = m | r.lanes | r.childLanes), (r = r.sibling);
          r = m & ~y;
        } else (r = 0), (o.child = null);
        return Xp(n, o, y, l, r);
      }
      if ((l & 536870912) !== 0)
        (o.memoizedState = { baseLanes: 0, cachePool: null }),
          n !== null && Pl(o, y !== null ? y.cachePool : null),
          y !== null ? Zh(o, y) : Tu(),
          $h(o);
      else
        return (
          (r = o.lanes = 536870912),
          Xp(n, o, y !== null ? y.baseLanes | l : l, l, r)
        );
    } else
      y !== null
        ? (Pl(o, y.cachePool), Zh(o, y), Qn(), (o.memoizedState = null))
        : (n !== null && Pl(o, null), Tu(), Qn());
    return ut(n, o, m, l), o.child;
  }
  function Ts(n, o) {
    return (
      (n !== null && n.tag === 22) ||
        o.stateNode !== null ||
        (o.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      o.sibling
    );
  }
  function Xp(n, o, l, r, m) {
    var y = hu();
    return (
      (y = y === null ? null : { parent: Qe._currentValue, pool: y }),
      (o.memoizedState = { baseLanes: l, cachePool: y }),
      n !== null && Pl(o, null),
      Tu(),
      $h(o),
      n !== null && lo(n, o, r, !0),
      (o.childLanes = m),
      null
    );
  }
  function Wl(n, o) {
    return (
      (o = ea({ mode: o.mode, children: o.children }, n.mode)),
      (o.ref = n.ref),
      (n.child = o),
      (o.return = n),
      o
    );
  }
  function Qp(n, o, l) {
    return (
      Ni(o, n.child, null, l),
      (n = Wl(o, o.pendingProps)),
      (n.flags |= 2),
      Ut(o),
      (o.memoizedState = null),
      n
    );
  }
  function F_(n, o, l) {
    var r = o.pendingProps,
      m = (o.flags & 128) !== 0;
    if (((o.flags &= -129), n === null)) {
      if (Te) {
        if (r.mode === "hidden")
          return (n = Wl(o, r)), (o.lanes = 536870912), Ts(null, n);
        if (
          (Eu(o),
          (n = He)
            ? ((n = ag(n, Ft)),
              (n = n !== null && n.data === "&" ? n : null),
              n !== null &&
                ((o.memoizedState = {
                  dehydrated: n,
                  treeContext: zn !== null ? { id: ln, overflow: an } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Ih(n)),
                (l.return = o),
                (o.child = l),
                (at = o),
                (He = null)))
            : (n = null),
          n === null)
        )
          throw On(o);
        return (o.lanes = 536870912), null;
      }
      return Wl(o, r);
    }
    var y = n.memoizedState;
    if (y !== null) {
      var E = y.dehydrated;
      if ((Eu(o), m))
        if (o.flags & 256) (o.flags &= -257), (o = Qp(n, o, l));
        else if (o.memoizedState !== null)
          (o.child = n.child), (o.flags |= 128), (o = null);
        else throw Error(s(558));
      else if (
        ($e || lo(n, o, l, !1), (m = (l & n.childLanes) !== 0), $e || m)
      ) {
        if (
          ((r = Ve),
          r !== null && ((E = kd(r, l)), E !== 0 && E !== y.retryLane))
        )
          throw ((y.retryLane = E), Ei(n, E), Mt(r, n, E), qu);
        ua(), (o = Qp(n, o, l));
      } else
        (n = y.treeContext),
          (He = Jt(E.nextSibling)),
          (at = o),
          (Te = !0),
          (qn = null),
          (Ft = !1),
          n !== null && Vh(o, n),
          (o = Wl(o, r)),
          (o.flags |= 4096);
      return o;
    }
    return (
      (n = vn(n.child, { mode: r.mode, children: r.children })),
      (n.ref = o.ref),
      (o.child = n),
      (n.return = o),
      n
    );
  }
  function jl(n, o) {
    var l = o.ref;
    if (l === null) n !== null && n.ref !== null && (o.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(s(284));
      (n === null || n.ref !== l) && (o.flags |= 4194816);
    }
  }
  function Ou(n, o, l, r, m) {
    return (
      xi(o),
      (l = Au(n, o, l, r, void 0, m)),
      (r = Cu()),
      n !== null && !$e
        ? (xu(n, o, m), Cn(n, o, m))
        : (Te && r && ou(o), (o.flags |= 1), ut(n, o, l, m), o.child)
    );
  }
  function Zp(n, o, l, r, m, y) {
    return (
      xi(o),
      (o.updateQueue = null),
      (l = jh(o, r, l, m)),
      Wh(n),
      (r = Cu()),
      n !== null && !$e
        ? (xu(n, o, y), Cn(n, o, y))
        : (Te && r && ou(o), (o.flags |= 1), ut(n, o, l, y), o.child)
    );
  }
  function $p(n, o, l, r, m) {
    if ((xi(o), o.stateNode === null)) {
      var y = no,
        E = l.contextType;
      typeof E == "object" && E !== null && (y = rt(E)),
        (y = new l(r, y)),
        (o.memoizedState =
          y.state !== null && y.state !== void 0 ? y.state : null),
        (y.updater = Bu),
        (o.stateNode = y),
        (y._reactInternals = o),
        (y = o.stateNode),
        (y.props = r),
        (y.state = o.memoizedState),
        (y.refs = {}),
        mu(o),
        (E = l.contextType),
        (y.context = typeof E == "object" && E !== null ? rt(E) : no),
        (y.state = o.memoizedState),
        (E = l.getDerivedStateFromProps),
        typeof E == "function" && (ku(o, l, E, r), (y.state = o.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof y.getSnapshotBeforeUpdate == "function" ||
          (typeof y.UNSAFE_componentWillMount != "function" &&
            typeof y.componentWillMount != "function") ||
          ((E = y.state),
          typeof y.componentWillMount == "function" && y.componentWillMount(),
          typeof y.UNSAFE_componentWillMount == "function" &&
            y.UNSAFE_componentWillMount(),
          E !== y.state && Bu.enqueueReplaceState(y, y.state, null),
          ps(o, r, y, m),
          hs(),
          (y.state = o.memoizedState)),
        typeof y.componentDidMount == "function" && (o.flags |= 4194308),
        (r = !0);
    } else if (n === null) {
      y = o.stateNode;
      var A = o.memoizedProps,
        x = Di(l, A);
      y.props = x;
      var L = y.context,
        B = l.contextType;
      (E = no), typeof B == "object" && B !== null && (E = rt(B));
      var O = l.getDerivedStateFromProps;
      (B =
        typeof O == "function" ||
        typeof y.getSnapshotBeforeUpdate == "function"),
        (A = o.pendingProps !== A),
        B ||
          (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
            typeof y.componentWillReceiveProps != "function") ||
          ((A || L !== E) && Hp(o, y, r, E)),
        (Yn = !1);
      var V = o.memoizedState;
      (y.state = V),
        ps(o, r, y, m),
        hs(),
        (L = o.memoizedState),
        A || V !== L || Yn
          ? (typeof O == "function" && (ku(o, l, O, r), (L = o.memoizedState)),
            (x = Yn || Pp(o, l, x, r, V, L, E))
              ? (B ||
                  (typeof y.UNSAFE_componentWillMount != "function" &&
                    typeof y.componentWillMount != "function") ||
                  (typeof y.componentWillMount == "function" &&
                    y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == "function" &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == "function" &&
                  (o.flags |= 4194308))
              : (typeof y.componentDidMount == "function" &&
                  (o.flags |= 4194308),
                (o.memoizedProps = r),
                (o.memoizedState = L)),
            (y.props = r),
            (y.state = L),
            (y.context = E),
            (r = x))
          : (typeof y.componentDidMount == "function" && (o.flags |= 4194308),
            (r = !1));
    } else {
      (y = o.stateNode),
        gu(n, o),
        (E = o.memoizedProps),
        (B = Di(l, E)),
        (y.props = B),
        (O = o.pendingProps),
        (V = y.context),
        (L = l.contextType),
        (x = no),
        typeof L == "object" && L !== null && (x = rt(L)),
        (A = l.getDerivedStateFromProps),
        (L =
          typeof A == "function" ||
          typeof y.getSnapshotBeforeUpdate == "function") ||
          (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
            typeof y.componentWillReceiveProps != "function") ||
          ((E !== O || V !== x) && Hp(o, y, r, x)),
        (Yn = !1),
        (V = o.memoizedState),
        (y.state = V),
        ps(o, r, y, m),
        hs();
      var H = o.memoizedState;
      E !== O ||
      V !== H ||
      Yn ||
      (n !== null && n.dependencies !== null && Ll(n.dependencies))
        ? (typeof A == "function" && (ku(o, l, A, r), (H = o.memoizedState)),
          (B =
            Yn ||
            Pp(o, l, B, r, V, H, x) ||
            (n !== null && n.dependencies !== null && Ll(n.dependencies)))
            ? (L ||
                (typeof y.UNSAFE_componentWillUpdate != "function" &&
                  typeof y.componentWillUpdate != "function") ||
                (typeof y.componentWillUpdate == "function" &&
                  y.componentWillUpdate(r, H, x),
                typeof y.UNSAFE_componentWillUpdate == "function" &&
                  y.UNSAFE_componentWillUpdate(r, H, x)),
              typeof y.componentDidUpdate == "function" && (o.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == "function" &&
                (o.flags |= 1024))
            : (typeof y.componentDidUpdate != "function" ||
                (E === n.memoizedProps && V === n.memoizedState) ||
                (o.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != "function" ||
                (E === n.memoizedProps && V === n.memoizedState) ||
                (o.flags |= 1024),
              (o.memoizedProps = r),
              (o.memoizedState = H)),
          (y.props = r),
          (y.state = H),
          (y.context = x),
          (r = B))
        : (typeof y.componentDidUpdate != "function" ||
            (E === n.memoizedProps && V === n.memoizedState) ||
            (o.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != "function" ||
            (E === n.memoizedProps && V === n.memoizedState) ||
            (o.flags |= 1024),
          (r = !1));
    }
    return (
      (y = r),
      jl(n, o),
      (r = (o.flags & 128) !== 0),
      y || r
        ? ((y = o.stateNode),
          (l =
            r && typeof l.getDerivedStateFromError != "function"
              ? null
              : y.render()),
          (o.flags |= 1),
          n !== null && r
            ? ((o.child = Ni(o, n.child, null, m)),
              (o.child = Ni(o, null, l, m)))
            : ut(n, o, l, m),
          (o.memoizedState = y.state),
          (n = o.child))
        : (n = Cn(n, o, m)),
      n
    );
  }
  function Wp(n, o, l, r) {
    return Ai(), (o.flags |= 256), ut(n, o, l, r), o.child;
  }
  var Fu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Yu(n) {
    return { baseLanes: n, cachePool: zh() };
  }
  function Ju(n, o, l) {
    return (n = n !== null ? n.childLanes & ~l : 0), o && (n |= Vt), n;
  }
  function jp(n, o, l) {
    var r = o.pendingProps,
      m = !1,
      y = (o.flags & 128) !== 0,
      E;
    if (
      ((E = y) ||
        (E =
          n !== null && n.memoizedState === null ? !1 : (Je.current & 2) !== 0),
      E && ((m = !0), (o.flags &= -129)),
      (E = (o.flags & 32) !== 0),
      (o.flags &= -33),
      n === null)
    ) {
      if (Te) {
        if (
          (m ? Xn(o) : Qn(),
          (n = He)
            ? ((n = ag(n, Ft)),
              (n = n !== null && n.data !== "&" ? n : null),
              n !== null &&
                ((o.memoizedState = {
                  dehydrated: n,
                  treeContext: zn !== null ? { id: ln, overflow: an } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Ih(n)),
                (l.return = o),
                (o.child = l),
                (at = o),
                (He = null)))
            : (n = null),
          n === null)
        )
          throw On(o);
        return wc(n) ? (o.lanes = 32) : (o.lanes = 536870912), null;
      }
      var A = r.children;
      return (
        (r = r.fallback),
        m
          ? (Qn(),
            (m = o.mode),
            (A = ea({ mode: "hidden", children: A }, m)),
            (r = _i(r, m, l, null)),
            (A.return = o),
            (r.return = o),
            (A.sibling = r),
            (o.child = A),
            (r = o.child),
            (r.memoizedState = Yu(l)),
            (r.childLanes = Ju(n, E, l)),
            (o.memoizedState = Fu),
            Ts(null, r))
          : (Xn(o), Ku(o, A))
      );
    }
    var x = n.memoizedState;
    if (x !== null && ((A = x.dehydrated), A !== null)) {
      if (y)
        o.flags & 256
          ? (Xn(o), (o.flags &= -257), (o = Xu(n, o, l)))
          : o.memoizedState !== null
          ? (Qn(), (o.child = n.child), (o.flags |= 128), (o = null))
          : (Qn(),
            (A = r.fallback),
            (m = o.mode),
            (r = ea({ mode: "visible", children: r.children }, m)),
            (A = _i(A, m, l, null)),
            (A.flags |= 2),
            (r.return = o),
            (A.return = o),
            (r.sibling = A),
            (o.child = r),
            Ni(o, n.child, null, l),
            (r = o.child),
            (r.memoizedState = Yu(l)),
            (r.childLanes = Ju(n, E, l)),
            (o.memoizedState = Fu),
            (o = Ts(null, r)));
      else if ((Xn(o), wc(A))) {
        if (((E = A.nextSibling && A.nextSibling.dataset), E)) var L = E.dgst;
        (E = L),
          (r = Error(s(419))),
          (r.stack = ""),
          (r.digest = E),
          as({ value: r, source: null, stack: null }),
          (o = Xu(n, o, l));
      } else if (
        ($e || lo(n, o, l, !1), (E = (l & n.childLanes) !== 0), $e || E)
      ) {
        if (
          ((E = Ve),
          E !== null && ((r = kd(E, l)), r !== 0 && r !== x.retryLane))
        )
          throw ((x.retryLane = r), Ei(n, r), Mt(E, n, r), qu);
        Rc(A) || ua(), (o = Xu(n, o, l));
      } else
        Rc(A)
          ? ((o.flags |= 192), (o.child = n.child), (o = null))
          : ((n = x.treeContext),
            (He = Jt(A.nextSibling)),
            (at = o),
            (Te = !0),
            (qn = null),
            (Ft = !1),
            n !== null && Vh(o, n),
            (o = Ku(o, r.children)),
            (o.flags |= 4096));
      return o;
    }
    return m
      ? (Qn(),
        (A = r.fallback),
        (m = o.mode),
        (x = n.child),
        (L = x.sibling),
        (r = vn(x, { mode: "hidden", children: r.children })),
        (r.subtreeFlags = x.subtreeFlags & 65011712),
        L !== null ? (A = vn(L, A)) : ((A = _i(A, m, l, null)), (A.flags |= 2)),
        (A.return = o),
        (r.return = o),
        (r.sibling = A),
        (o.child = r),
        Ts(null, r),
        (r = o.child),
        (A = n.child.memoizedState),
        A === null
          ? (A = Yu(l))
          : ((m = A.cachePool),
            m !== null
              ? ((x = Qe._currentValue),
                (m = m.parent !== x ? { parent: x, pool: x } : m))
              : (m = zh()),
            (A = { baseLanes: A.baseLanes | l, cachePool: m })),
        (r.memoizedState = A),
        (r.childLanes = Ju(n, E, l)),
        (o.memoizedState = Fu),
        Ts(n.child, r))
      : (Xn(o),
        (l = n.child),
        (n = l.sibling),
        (l = vn(l, { mode: "visible", children: r.children })),
        (l.return = o),
        (l.sibling = null),
        n !== null &&
          ((E = o.deletions),
          E === null ? ((o.deletions = [n]), (o.flags |= 16)) : E.push(n)),
        (o.child = l),
        (o.memoizedState = null),
        l);
  }
  function Ku(n, o) {
    return (
      (o = ea({ mode: "visible", children: o }, n.mode)),
      (o.return = n),
      (n.child = o)
    );
  }
  function ea(n, o) {
    return (n = Dt(22, n, null, o)), (n.lanes = 0), n;
  }
  function Xu(n, o, l) {
    return (
      Ni(o, n.child, null, l),
      (n = Ku(o, o.pendingProps.children)),
      (n.flags |= 2),
      (o.memoizedState = null),
      n
    );
  }
  function em(n, o, l) {
    n.lanes |= o;
    var r = n.alternate;
    r !== null && (r.lanes |= o), uu(n.return, o, l);
  }
  function Qu(n, o, l, r, m, y) {
    var E = n.memoizedState;
    E === null
      ? (n.memoizedState = {
          isBackwards: o,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: l,
          tailMode: m,
          treeForkCount: y,
        })
      : ((E.isBackwards = o),
        (E.rendering = null),
        (E.renderingStartTime = 0),
        (E.last = r),
        (E.tail = l),
        (E.tailMode = m),
        (E.treeForkCount = y));
  }
  function tm(n, o, l) {
    var r = o.pendingProps,
      m = r.revealOrder,
      y = r.tail;
    r = r.children;
    var E = Je.current,
      A = (E & 2) !== 0;
    if (
      (A ? ((E = (E & 1) | 2), (o.flags |= 128)) : (E &= 1),
      W(Je, E),
      ut(n, o, r, l),
      (r = Te ? ls : 0),
      !A && n !== null && (n.flags & 128) !== 0)
    )
      e: for (n = o.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && em(n, l, o);
        else if (n.tag === 19) em(n, l, o);
        else if (n.child !== null) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === o) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === o) break e;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    switch (m) {
      case "forwards":
        for (l = o.child, m = null; l !== null; )
          (n = l.alternate),
            n !== null && ql(n) === null && (m = l),
            (l = l.sibling);
        (l = m),
          l === null
            ? ((m = o.child), (o.child = null))
            : ((m = l.sibling), (l.sibling = null)),
          Qu(o, !1, m, l, y, r);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, m = o.child, o.child = null; m !== null; ) {
          if (((n = m.alternate), n !== null && ql(n) === null)) {
            o.child = m;
            break;
          }
          (n = m.sibling), (m.sibling = l), (l = m), (m = n);
        }
        Qu(o, !0, l, null, y, r);
        break;
      case "together":
        Qu(o, !1, null, null, void 0, r);
        break;
      default:
        o.memoizedState = null;
    }
    return o.child;
  }
  function Cn(n, o, l) {
    if (
      (n !== null && (o.dependencies = n.dependencies),
      (Wn |= o.lanes),
      (l & o.childLanes) === 0)
    )
      if (n !== null) {
        if ((lo(n, o, l, !1), (l & o.childLanes) === 0)) return null;
      } else return null;
    if (n !== null && o.child !== n.child) throw Error(s(153));
    if (o.child !== null) {
      for (
        n = o.child, l = vn(n, n.pendingProps), o.child = l, l.return = o;
        n.sibling !== null;

      )
        (n = n.sibling),
          (l = l.sibling = vn(n, n.pendingProps)),
          (l.return = o);
      l.sibling = null;
    }
    return o.child;
  }
  function Zu(n, o) {
    return (n.lanes & o) !== 0
      ? !0
      : ((n = n.dependencies), !!(n !== null && Ll(n)));
  }
  function Y_(n, o, l) {
    switch (o.tag) {
      case 3:
        mt(o, o.stateNode.containerInfo),
          Fn(o, Qe, n.memoizedState.cache),
          Ai();
        break;
      case 27:
      case 5:
        Yo(o);
        break;
      case 4:
        mt(o, o.stateNode.containerInfo);
        break;
      case 10:
        Fn(o, o.type, o.memoizedProps.value);
        break;
      case 31:
        if (o.memoizedState !== null) return (o.flags |= 128), Eu(o), null;
        break;
      case 13:
        var r = o.memoizedState;
        if (r !== null)
          return r.dehydrated !== null
            ? (Xn(o), (o.flags |= 128), null)
            : (l & o.child.childLanes) !== 0
            ? jp(n, o, l)
            : (Xn(o), (n = Cn(n, o, l)), n !== null ? n.sibling : null);
        Xn(o);
        break;
      case 19:
        var m = (n.flags & 128) !== 0;
        if (
          ((r = (l & o.childLanes) !== 0),
          r || (lo(n, o, l, !1), (r = (l & o.childLanes) !== 0)),
          m)
        ) {
          if (r) return tm(n, o, l);
          o.flags |= 128;
        }
        if (
          ((m = o.memoizedState),
          m !== null &&
            ((m.rendering = null), (m.tail = null), (m.lastEffect = null)),
          W(Je, Je.current),
          r)
        )
          break;
        return null;
      case 22:
        return (o.lanes = 0), Kp(n, o, l, o.pendingProps);
      case 24:
        Fn(o, Qe, n.memoizedState.cache);
    }
    return Cn(n, o, l);
  }
  function nm(n, o, l) {
    if (n !== null)
      if (n.memoizedProps !== o.pendingProps) $e = !0;
      else {
        if (!Zu(n, l) && (o.flags & 128) === 0) return ($e = !1), Y_(n, o, l);
        $e = (n.flags & 131072) !== 0;
      }
    else ($e = !1), Te && (o.flags & 1048576) !== 0 && Lh(o, ls, o.index);
    switch (((o.lanes = 0), o.tag)) {
      case 16:
        e: {
          var r = o.pendingProps;
          if (((n = Ri(o.elementType)), (o.type = n), typeof n == "function"))
            tu(n)
              ? ((r = Di(n, r)), (o.tag = 1), (o = $p(null, o, n, r, l)))
              : ((o.tag = 0), (o = Ou(null, o, n, r, l)));
          else {
            if (n != null) {
              var m = n.$$typeof;
              if (m === Y) {
                (o.tag = 11), (o = Fp(null, o, n, r, l));
                break e;
              } else if (m === J) {
                (o.tag = 14), (o = Yp(null, o, n, r, l));
                break e;
              }
            }
            throw ((o = Be(n) || n), Error(s(306, o, "")));
          }
        }
        return o;
      case 0:
        return Ou(n, o, o.type, o.pendingProps, l);
      case 1:
        return (r = o.type), (m = Di(r, o.pendingProps)), $p(n, o, r, m, l);
      case 3:
        e: {
          if ((mt(o, o.stateNode.containerInfo), n === null))
            throw Error(s(387));
          r = o.pendingProps;
          var y = o.memoizedState;
          (m = y.element), gu(n, o), ps(o, r, null, l);
          var E = o.memoizedState;
          if (
            ((r = E.cache),
            Fn(o, Qe, r),
            r !== y.cache && cu(o, [Qe], l, !0),
            hs(),
            (r = E.element),
            y.isDehydrated)
          )
            if (
              ((y = { element: r, isDehydrated: !1, cache: E.cache }),
              (o.updateQueue.baseState = y),
              (o.memoizedState = y),
              o.flags & 256)
            ) {
              o = Wp(n, o, r, l);
              break e;
            } else if (r !== m) {
              (m = zt(Error(s(424)), o)), as(m), (o = Wp(n, o, r, l));
              break e;
            } else {
              switch (((n = o.stateNode.containerInfo), n.nodeType)) {
                case 9:
                  n = n.body;
                  break;
                default:
                  n = n.nodeName === "HTML" ? n.ownerDocument.body : n;
              }
              for (
                He = Jt(n.firstChild),
                  at = o,
                  Te = !0,
                  qn = null,
                  Ft = !0,
                  l = Kh(o, null, r, l),
                  o.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Ai(), r === m)) {
              o = Cn(n, o, l);
              break e;
            }
            ut(n, o, r, l);
          }
          o = o.child;
        }
        return o;
      case 26:
        return (
          jl(n, o),
          n === null
            ? (l = hg(o.type, null, o.pendingProps, null))
              ? (o.memoizedState = l)
              : Te ||
                ((l = o.type),
                (n = o.pendingProps),
                (r = ga(he.current).createElement(l)),
                (r[lt] = o),
                (r[St] = n),
                ct(r, l, n),
                tt(r),
                (o.stateNode = r))
            : (o.memoizedState = hg(
                o.type,
                n.memoizedProps,
                o.pendingProps,
                n.memoizedState
              )),
          null
        );
      case 27:
        return (
          Yo(o),
          n === null &&
            Te &&
            ((r = o.stateNode = cg(o.type, o.pendingProps, he.current)),
            (at = o),
            (Ft = !0),
            (m = He),
            ii(o.type) ? ((Nc = m), (He = Jt(r.firstChild))) : (He = m)),
          ut(n, o, o.pendingProps.children, l),
          jl(n, o),
          n === null && (o.flags |= 4194304),
          o.child
        );
      case 5:
        return (
          n === null &&
            Te &&
            ((m = r = He) &&
              ((r = EA(r, o.type, o.pendingProps, Ft)),
              r !== null
                ? ((o.stateNode = r),
                  (at = o),
                  (He = Jt(r.firstChild)),
                  (Ft = !1),
                  (m = !0))
                : (m = !1)),
            m || On(o)),
          Yo(o),
          (m = o.type),
          (y = o.pendingProps),
          (E = n !== null ? n.memoizedProps : null),
          (r = y.children),
          Cc(m, y) ? (r = null) : E !== null && Cc(m, E) && (o.flags |= 32),
          o.memoizedState !== null &&
            ((m = Au(n, o, P_, null, null, l)), (Ls._currentValue = m)),
          jl(n, o),
          ut(n, o, r, l),
          o.child
        );
      case 6:
        return (
          n === null &&
            Te &&
            ((n = l = He) &&
              ((l = _A(l, o.pendingProps, Ft)),
              l !== null
                ? ((o.stateNode = l), (at = o), (He = null), (n = !0))
                : (n = !1)),
            n || On(o)),
          null
        );
      case 13:
        return jp(n, o, l);
      case 4:
        return (
          mt(o, o.stateNode.containerInfo),
          (r = o.pendingProps),
          n === null ? (o.child = Ni(o, null, r, l)) : ut(n, o, r, l),
          o.child
        );
      case 11:
        return Fp(n, o, o.type, o.pendingProps, l);
      case 7:
        return ut(n, o, o.pendingProps, l), o.child;
      case 8:
        return ut(n, o, o.pendingProps.children, l), o.child;
      case 12:
        return ut(n, o, o.pendingProps.children, l), o.child;
      case 10:
        return (
          (r = o.pendingProps),
          Fn(o, o.type, r.value),
          ut(n, o, r.children, l),
          o.child
        );
      case 9:
        return (
          (m = o.type._context),
          (r = o.pendingProps.children),
          xi(o),
          (m = rt(m)),
          (r = r(m)),
          (o.flags |= 1),
          ut(n, o, r, l),
          o.child
        );
      case 14:
        return Yp(n, o, o.type, o.pendingProps, l);
      case 15:
        return Jp(n, o, o.type, o.pendingProps, l);
      case 19:
        return tm(n, o, l);
      case 31:
        return F_(n, o, l);
      case 22:
        return Kp(n, o, l, o.pendingProps);
      case 24:
        return (
          xi(o),
          (r = rt(Qe)),
          n === null
            ? ((m = hu()),
              m === null &&
                ((m = Ve),
                (y = fu()),
                (m.pooledCache = y),
                y.refCount++,
                y !== null && (m.pooledCacheLanes |= l),
                (m = y)),
              (o.memoizedState = { parent: r, cache: m }),
              mu(o),
              Fn(o, Qe, m))
            : ((n.lanes & l) !== 0 && (gu(n, o), ps(o, null, null, l), hs()),
              (m = n.memoizedState),
              (y = o.memoizedState),
              m.parent !== r
                ? ((m = { parent: r, cache: r }),
                  (o.memoizedState = m),
                  o.lanes === 0 &&
                    (o.memoizedState = o.updateQueue.baseState = m),
                  Fn(o, Qe, r))
                : ((r = y.cache),
                  Fn(o, Qe, r),
                  r !== m.cache && cu(o, [Qe], l, !0))),
          ut(n, o, o.pendingProps.children, l),
          o.child
        );
      case 29:
        throw o.pendingProps;
    }
    throw Error(s(156, o.tag));
  }
  function xn(n) {
    n.flags |= 4;
  }
  function $u(n, o, l, r, m) {
    if (((o = (n.mode & 32) !== 0) && (o = !1), o)) {
      if (((n.flags |= 16777216), (m & 335544128) === m))
        if (n.stateNode.complete) n.flags |= 8192;
        else if (Nm()) n.flags |= 8192;
        else throw ((wi = Gl), pu);
    } else n.flags &= -16777217;
  }
  function im(n, o) {
    if (o.type !== "stylesheet" || (o.state.loading & 4) !== 0)
      n.flags &= -16777217;
    else if (((n.flags |= 16777216), !vg(o)))
      if (Nm()) n.flags |= 8192;
      else throw ((wi = Gl), pu);
  }
  function ta(n, o) {
    o !== null && (n.flags |= 4),
      n.flags & 16384 &&
        ((o = n.tag !== 22 ? Pd() : 536870912), (n.lanes |= o), (To |= o));
  }
  function Ss(n, o) {
    if (!Te)
      switch (n.tailMode) {
        case "hidden":
          o = n.tail;
          for (var l = null; o !== null; )
            o.alternate !== null && (l = o), (o = o.sibling);
          l === null ? (n.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = n.tail;
          for (var r = null; l !== null; )
            l.alternate !== null && (r = l), (l = l.sibling);
          r === null
            ? o || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ge(n) {
    var o = n.alternate !== null && n.alternate.child === n.child,
      l = 0,
      r = 0;
    if (o)
      for (var m = n.child; m !== null; )
        (l |= m.lanes | m.childLanes),
          (r |= m.subtreeFlags & 65011712),
          (r |= m.flags & 65011712),
          (m.return = n),
          (m = m.sibling);
    else
      for (m = n.child; m !== null; )
        (l |= m.lanes | m.childLanes),
          (r |= m.subtreeFlags),
          (r |= m.flags),
          (m.return = n),
          (m = m.sibling);
    return (n.subtreeFlags |= r), (n.childLanes = l), o;
  }
  function J_(n, o, l) {
    var r = o.pendingProps;
    switch ((su(o), o.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ge(o), null;
      case 1:
        return Ge(o), null;
      case 3:
        return (
          (l = o.stateNode),
          (r = null),
          n !== null && (r = n.memoizedState.cache),
          o.memoizedState.cache !== r && (o.flags |= 2048),
          En(Qe),
          Ye(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (n === null || n.child === null) &&
            (so(o)
              ? xn(o)
              : n === null ||
                (n.memoizedState.isDehydrated && (o.flags & 256) === 0) ||
                ((o.flags |= 1024), au())),
          Ge(o),
          null
        );
      case 26:
        var m = o.type,
          y = o.memoizedState;
        return (
          n === null
            ? (xn(o),
              y !== null ? (Ge(o), im(o, y)) : (Ge(o), $u(o, m, null, r, l)))
            : y
            ? y !== n.memoizedState
              ? (xn(o), Ge(o), im(o, y))
              : (Ge(o), (o.flags &= -16777217))
            : ((n = n.memoizedProps),
              n !== r && xn(o),
              Ge(o),
              $u(o, m, n, r, l)),
          null
        );
      case 27:
        if (
          (dl(o),
          (l = he.current),
          (m = o.type),
          n !== null && o.stateNode != null)
        )
          n.memoizedProps !== r && xn(o);
        else {
          if (!r) {
            if (o.stateNode === null) throw Error(s(166));
            return Ge(o), null;
          }
          (n = te.current),
            so(o) ? Ph(o) : ((n = cg(m, r, l)), (o.stateNode = n), xn(o));
        }
        return Ge(o), null;
      case 5:
        if ((dl(o), (m = o.type), n !== null && o.stateNode != null))
          n.memoizedProps !== r && xn(o);
        else {
          if (!r) {
            if (o.stateNode === null) throw Error(s(166));
            return Ge(o), null;
          }
          if (((y = te.current), so(o))) Ph(o);
          else {
            var E = ga(he.current);
            switch (y) {
              case 1:
                y = E.createElementNS("http://www.w3.org/2000/svg", m);
                break;
              case 2:
                y = E.createElementNS("http://www.w3.org/1998/Math/MathML", m);
                break;
              default:
                switch (m) {
                  case "svg":
                    y = E.createElementNS("http://www.w3.org/2000/svg", m);
                    break;
                  case "math":
                    y = E.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      m
                    );
                    break;
                  case "script":
                    (y = E.createElement("div")),
                      (y.innerHTML = "<script></script>"),
                      (y = y.removeChild(y.firstChild));
                    break;
                  case "select":
                    (y =
                      typeof r.is == "string"
                        ? E.createElement("select", { is: r.is })
                        : E.createElement("select")),
                      r.multiple
                        ? (y.multiple = !0)
                        : r.size && (y.size = r.size);
                    break;
                  default:
                    y =
                      typeof r.is == "string"
                        ? E.createElement(m, { is: r.is })
                        : E.createElement(m);
                }
            }
            (y[lt] = o), (y[St] = r);
            e: for (E = o.child; E !== null; ) {
              if (E.tag === 5 || E.tag === 6) y.appendChild(E.stateNode);
              else if (E.tag !== 4 && E.tag !== 27 && E.child !== null) {
                (E.child.return = E), (E = E.child);
                continue;
              }
              if (E === o) break e;
              for (; E.sibling === null; ) {
                if (E.return === null || E.return === o) break e;
                E = E.return;
              }
              (E.sibling.return = E.return), (E = E.sibling);
            }
            o.stateNode = y;
            e: switch ((ct(y, m, r), m)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
            r && xn(o);
          }
        }
        return (
          Ge(o),
          $u(o, o.type, n === null ? null : n.memoizedProps, o.pendingProps, l),
          null
        );
      case 6:
        if (n && o.stateNode != null) n.memoizedProps !== r && xn(o);
        else {
          if (typeof r != "string" && o.stateNode === null) throw Error(s(166));
          if (((n = he.current), so(o))) {
            if (
              ((n = o.stateNode),
              (l = o.memoizedProps),
              (r = null),
              (m = at),
              m !== null)
            )
              switch (m.tag) {
                case 27:
                case 5:
                  r = m.memoizedProps;
              }
            (n[lt] = o),
              (n = !!(
                n.nodeValue === l ||
                (r !== null && r.suppressHydrationWarning === !0) ||
                jm(n.nodeValue, l)
              )),
              n || On(o, !0);
          } else (n = ga(n).createTextNode(r)), (n[lt] = o), (o.stateNode = n);
        }
        return Ge(o), null;
      case 31:
        if (((l = o.memoizedState), n === null || n.memoizedState !== null)) {
          if (((r = so(o)), l !== null)) {
            if (n === null) {
              if (!r) throw Error(s(318));
              if (
                ((n = o.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(s(557));
              n[lt] = o;
            } else
              Ai(),
                (o.flags & 128) === 0 && (o.memoizedState = null),
                (o.flags |= 4);
            Ge(o), (n = !1);
          } else
            (l = au()),
              n !== null &&
                n.memoizedState !== null &&
                (n.memoizedState.hydrationErrors = l),
              (n = !0);
          if (!n) return o.flags & 256 ? (Ut(o), o) : (Ut(o), null);
          if ((o.flags & 128) !== 0) throw Error(s(558));
        }
        return Ge(o), null;
      case 13:
        if (
          ((r = o.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (((m = so(o)), r !== null && r.dehydrated !== null)) {
            if (n === null) {
              if (!m) throw Error(s(318));
              if (
                ((m = o.memoizedState),
                (m = m !== null ? m.dehydrated : null),
                !m)
              )
                throw Error(s(317));
              m[lt] = o;
            } else
              Ai(),
                (o.flags & 128) === 0 && (o.memoizedState = null),
                (o.flags |= 4);
            Ge(o), (m = !1);
          } else
            (m = au()),
              n !== null &&
                n.memoizedState !== null &&
                (n.memoizedState.hydrationErrors = m),
              (m = !0);
          if (!m) return o.flags & 256 ? (Ut(o), o) : (Ut(o), null);
        }
        return (
          Ut(o),
          (o.flags & 128) !== 0
            ? ((o.lanes = l), o)
            : ((l = r !== null),
              (n = n !== null && n.memoizedState !== null),
              l &&
                ((r = o.child),
                (m = null),
                r.alternate !== null &&
                  r.alternate.memoizedState !== null &&
                  r.alternate.memoizedState.cachePool !== null &&
                  (m = r.alternate.memoizedState.cachePool.pool),
                (y = null),
                r.memoizedState !== null &&
                  r.memoizedState.cachePool !== null &&
                  (y = r.memoizedState.cachePool.pool),
                y !== m && (r.flags |= 2048)),
              l !== n && l && (o.child.flags |= 8192),
              ta(o, o.updateQueue),
              Ge(o),
              null)
        );
      case 4:
        return Ye(), n === null && Tc(o.stateNode.containerInfo), Ge(o), null;
      case 10:
        return En(o.type), Ge(o), null;
      case 19:
        if ((F(Je), (r = o.memoizedState), r === null)) return Ge(o), null;
        if (((m = (o.flags & 128) !== 0), (y = r.rendering), y === null))
          if (m) Ss(r, !1);
          else {
            if (Oe !== 0 || (n !== null && (n.flags & 128) !== 0))
              for (n = o.child; n !== null; ) {
                if (((y = ql(n)), y !== null)) {
                  for (
                    o.flags |= 128,
                      Ss(r, !1),
                      n = y.updateQueue,
                      o.updateQueue = n,
                      ta(o, n),
                      o.subtreeFlags = 0,
                      n = l,
                      l = o.child;
                    l !== null;

                  )
                    Dh(l, n), (l = l.sibling);
                  return (
                    W(Je, (Je.current & 1) | 2),
                    Te && Tn(o, r.treeForkCount),
                    o.child
                  );
                }
                n = n.sibling;
              }
            r.tail !== null &&
              Rt() > la &&
              ((o.flags |= 128), (m = !0), Ss(r, !1), (o.lanes = 4194304));
          }
        else {
          if (!m)
            if (((n = ql(y)), n !== null)) {
              if (
                ((o.flags |= 128),
                (m = !0),
                (n = n.updateQueue),
                (o.updateQueue = n),
                ta(o, n),
                Ss(r, !0),
                r.tail === null &&
                  r.tailMode === "hidden" &&
                  !y.alternate &&
                  !Te)
              )
                return Ge(o), null;
            } else
              2 * Rt() - r.renderingStartTime > la &&
                l !== 536870912 &&
                ((o.flags |= 128), (m = !0), Ss(r, !1), (o.lanes = 4194304));
          r.isBackwards
            ? ((y.sibling = o.child), (o.child = y))
            : ((n = r.last),
              n !== null ? (n.sibling = y) : (o.child = y),
              (r.last = y));
        }
        return r.tail !== null
          ? ((n = r.tail),
            (r.rendering = n),
            (r.tail = n.sibling),
            (r.renderingStartTime = Rt()),
            (n.sibling = null),
            (l = Je.current),
            W(Je, m ? (l & 1) | 2 : l & 1),
            Te && Tn(o, r.treeForkCount),
            n)
          : (Ge(o), null);
      case 22:
      case 23:
        return (
          Ut(o),
          Su(),
          (r = o.memoizedState !== null),
          n !== null
            ? (n.memoizedState !== null) !== r && (o.flags |= 8192)
            : r && (o.flags |= 8192),
          r
            ? (l & 536870912) !== 0 &&
              (o.flags & 128) === 0 &&
              (Ge(o), o.subtreeFlags & 6 && (o.flags |= 8192))
            : Ge(o),
          (l = o.updateQueue),
          l !== null && ta(o, l.retryQueue),
          (l = null),
          n !== null &&
            n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (l = n.memoizedState.cachePool.pool),
          (r = null),
          o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (r = o.memoizedState.cachePool.pool),
          r !== l && (o.flags |= 2048),
          n !== null && F(Mi),
          null
        );
      case 24:
        return (
          (l = null),
          n !== null && (l = n.memoizedState.cache),
          o.memoizedState.cache !== l && (o.flags |= 2048),
          En(Qe),
          Ge(o),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, o.tag));
  }
  function K_(n, o) {
    switch ((su(o), o.tag)) {
      case 1:
        return (
          (n = o.flags), n & 65536 ? ((o.flags = (n & -65537) | 128), o) : null
        );
      case 3:
        return (
          En(Qe),
          Ye(),
          (n = o.flags),
          (n & 65536) !== 0 && (n & 128) === 0
            ? ((o.flags = (n & -65537) | 128), o)
            : null
        );
      case 26:
      case 27:
      case 5:
        return dl(o), null;
      case 31:
        if (o.memoizedState !== null) {
          if ((Ut(o), o.alternate === null)) throw Error(s(340));
          Ai();
        }
        return (
          (n = o.flags), n & 65536 ? ((o.flags = (n & -65537) | 128), o) : null
        );
      case 13:
        if (
          (Ut(o), (n = o.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (o.alternate === null) throw Error(s(340));
          Ai();
        }
        return (
          (n = o.flags), n & 65536 ? ((o.flags = (n & -65537) | 128), o) : null
        );
      case 19:
        return F(Je), null;
      case 4:
        return Ye(), null;
      case 10:
        return En(o.type), null;
      case 22:
      case 23:
        return (
          Ut(o),
          Su(),
          n !== null && F(Mi),
          (n = o.flags),
          n & 65536 ? ((o.flags = (n & -65537) | 128), o) : null
        );
      case 24:
        return En(Qe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function om(n, o) {
    switch ((su(o), o.tag)) {
      case 3:
        En(Qe), Ye();
        break;
      case 26:
      case 27:
      case 5:
        dl(o);
        break;
      case 4:
        Ye();
        break;
      case 31:
        o.memoizedState !== null && Ut(o);
        break;
      case 13:
        Ut(o);
        break;
      case 19:
        F(Je);
        break;
      case 10:
        En(o.type);
        break;
      case 22:
      case 23:
        Ut(o), Su(), n !== null && F(Mi);
        break;
      case 24:
        En(Qe);
    }
  }
  function Es(n, o) {
    try {
      var l = o.updateQueue,
        r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var m = r.next;
        l = m;
        do {
          if ((l.tag & n) === n) {
            r = void 0;
            var y = l.create,
              E = l.inst;
            (r = y()), (E.destroy = r);
          }
          l = l.next;
        } while (l !== m);
      }
    } catch (A) {
      De(o, o.return, A);
    }
  }
  function Zn(n, o, l) {
    try {
      var r = o.updateQueue,
        m = r !== null ? r.lastEffect : null;
      if (m !== null) {
        var y = m.next;
        r = y;
        do {
          if ((r.tag & n) === n) {
            var E = r.inst,
              A = E.destroy;
            if (A !== void 0) {
              (E.destroy = void 0), (m = o);
              var x = l,
                L = A;
              try {
                L();
              } catch (B) {
                De(m, x, B);
              }
            }
          }
          r = r.next;
        } while (r !== y);
      }
    } catch (B) {
      De(o, o.return, B);
    }
  }
  function sm(n) {
    var o = n.updateQueue;
    if (o !== null) {
      var l = n.stateNode;
      try {
        Qh(o, l);
      } catch (r) {
        De(n, n.return, r);
      }
    }
  }
  function lm(n, o, l) {
    (l.props = Di(n.type, n.memoizedProps)), (l.state = n.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (r) {
      De(n, o, r);
    }
  }
  function _s(n, o) {
    try {
      var l = n.ref;
      if (l !== null) {
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            var r = n.stateNode;
            break;
          case 30:
            r = n.stateNode;
            break;
          default:
            r = n.stateNode;
        }
        typeof l == "function" ? (n.refCleanup = l(r)) : (l.current = r);
      }
    } catch (m) {
      De(n, o, m);
    }
  }
  function rn(n, o) {
    var l = n.ref,
      r = n.refCleanup;
    if (l !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (m) {
          De(n, o, m);
        } finally {
          (n.refCleanup = null),
            (n = n.alternate),
            n != null && (n.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (m) {
          De(n, o, m);
        }
      else l.current = null;
  }
  function am(n) {
    var o = n.type,
      l = n.memoizedProps,
      r = n.stateNode;
    try {
      e: switch (o) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && r.focus();
          break e;
        case "img":
          l.src ? (r.src = l.src) : l.srcSet && (r.srcset = l.srcSet);
      }
    } catch (m) {
      De(n, n.return, m);
    }
  }
  function Wu(n, o, l) {
    try {
      var r = n.stateNode;
      mA(r, n.type, l, o), (r[St] = o);
    } catch (m) {
      De(n, n.return, m);
    }
  }
  function rm(n) {
    return (
      n.tag === 5 ||
      n.tag === 3 ||
      n.tag === 26 ||
      (n.tag === 27 && ii(n.type)) ||
      n.tag === 4
    );
  }
  function ju(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || rm(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

      ) {
        if (
          (n.tag === 27 && ii(n.type)) ||
          n.flags & 2 ||
          n.child === null ||
          n.tag === 4
        )
          continue e;
        (n.child.return = n), (n = n.child);
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ec(n, o, l) {
    var r = n.tag;
    if (r === 5 || r === 6)
      (n = n.stateNode),
        o
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(n, o)
          : ((o =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            o.appendChild(n),
            (l = l._reactRootContainer),
            l != null || o.onclick !== null || (o.onclick = gn));
    else if (
      r !== 4 &&
      (r === 27 && ii(n.type) && ((l = n.stateNode), (o = null)),
      (n = n.child),
      n !== null)
    )
      for (ec(n, o, l), n = n.sibling; n !== null; )
        ec(n, o, l), (n = n.sibling);
  }
  function na(n, o, l) {
    var r = n.tag;
    if (r === 5 || r === 6)
      (n = n.stateNode), o ? l.insertBefore(n, o) : l.appendChild(n);
    else if (
      r !== 4 &&
      (r === 27 && ii(n.type) && (l = n.stateNode), (n = n.child), n !== null)
    )
      for (na(n, o, l), n = n.sibling; n !== null; )
        na(n, o, l), (n = n.sibling);
  }
  function um(n) {
    var o = n.stateNode,
      l = n.memoizedProps;
    try {
      for (var r = n.type, m = o.attributes; m.length; )
        o.removeAttributeNode(m[0]);
      ct(o, r, l), (o[lt] = n), (o[St] = l);
    } catch (y) {
      De(n, n.return, y);
    }
  }
  var Mn = !1,
    We = !1,
    tc = !1,
    cm = typeof WeakSet == "function" ? WeakSet : Set,
    nt = null;
  function X_(n, o) {
    if (((n = n.containerInfo), (_c = Aa), (n = _h(n)), Xr(n))) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = ((l = n.ownerDocument) && l.defaultView) || window;
          var r = l.getSelection && l.getSelection();
          if (r && r.rangeCount !== 0) {
            l = r.anchorNode;
            var m = r.anchorOffset,
              y = r.focusNode;
            r = r.focusOffset;
            try {
              l.nodeType, y.nodeType;
            } catch {
              l = null;
              break e;
            }
            var E = 0,
              A = -1,
              x = -1,
              L = 0,
              B = 0,
              O = n,
              V = null;
            t: for (;;) {
              for (
                var H;
                O !== l || (m !== 0 && O.nodeType !== 3) || (A = E + m),
                  O !== y || (r !== 0 && O.nodeType !== 3) || (x = E + r),
                  O.nodeType === 3 && (E += O.nodeValue.length),
                  (H = O.firstChild) !== null;

              )
                (V = O), (O = H);
              for (;;) {
                if (O === n) break t;
                if (
                  (V === l && ++L === m && (A = E),
                  V === y && ++B === r && (x = E),
                  (H = O.nextSibling) !== null)
                )
                  break;
                (O = V), (V = O.parentNode);
              }
              O = H;
            }
            l = A === -1 || x === -1 ? null : { start: A, end: x };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Ac = { focusedElem: n, selectionRange: l }, Aa = !1, nt = o;
      nt !== null;

    )
      if (
        ((o = nt), (n = o.child), (o.subtreeFlags & 1028) !== 0 && n !== null)
      )
        (n.return = o), (nt = n);
      else
        for (; nt !== null; ) {
          switch (((o = nt), (y = o.alternate), (n = o.flags), o.tag)) {
            case 0:
              if (
                (n & 4) !== 0 &&
                ((n = o.updateQueue),
                (n = n !== null ? n.events : null),
                n !== null)
              )
                for (l = 0; l < n.length; l++)
                  (m = n[l]), (m.ref.impl = m.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((n & 1024) !== 0 && y !== null) {
                (n = void 0),
                  (l = o),
                  (m = y.memoizedProps),
                  (y = y.memoizedState),
                  (r = l.stateNode);
                try {
                  var ee = Di(l.type, m);
                  (n = r.getSnapshotBeforeUpdate(ee, y)),
                    (r.__reactInternalSnapshotBeforeUpdate = n);
                } catch (se) {
                  De(l, l.return, se);
                }
              }
              break;
            case 3:
              if ((n & 1024) !== 0) {
                if (
                  ((n = o.stateNode.containerInfo), (l = n.nodeType), l === 9)
                )
                  Mc(n);
                else if (l === 1)
                  switch (n.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Mc(n);
                      break;
                    default:
                      n.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((n & 1024) !== 0) throw Error(s(163));
          }
          if (((n = o.sibling), n !== null)) {
            (n.return = o.return), (nt = n);
            break;
          }
          nt = o.return;
        }
  }
  function fm(n, o, l) {
    var r = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        wn(n, l), r & 4 && Es(5, l);
        break;
      case 1:
        if ((wn(n, l), r & 4))
          if (((n = l.stateNode), o === null))
            try {
              n.componentDidMount();
            } catch (E) {
              De(l, l.return, E);
            }
          else {
            var m = Di(l.type, o.memoizedProps);
            o = o.memoizedState;
            try {
              n.componentDidUpdate(m, o, n.__reactInternalSnapshotBeforeUpdate);
            } catch (E) {
              De(l, l.return, E);
            }
          }
        r & 64 && sm(l), r & 512 && _s(l, l.return);
        break;
      case 3:
        if ((wn(n, l), r & 64 && ((n = l.updateQueue), n !== null))) {
          if (((o = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                o = l.child.stateNode;
                break;
              case 1:
                o = l.child.stateNode;
            }
          try {
            Qh(n, o);
          } catch (E) {
            De(l, l.return, E);
          }
        }
        break;
      case 27:
        o === null && r & 4 && um(l);
      case 26:
      case 5:
        wn(n, l), o === null && r & 4 && am(l), r & 512 && _s(l, l.return);
        break;
      case 12:
        wn(n, l);
        break;
      case 31:
        wn(n, l), r & 4 && pm(n, l);
        break;
      case 13:
        wn(n, l),
          r & 4 && mm(n, l),
          r & 64 &&
            ((n = l.memoizedState),
            n !== null &&
              ((n = n.dehydrated),
              n !== null && ((l = iA.bind(null, l)), AA(n, l))));
        break;
      case 22:
        if (((r = l.memoizedState !== null || Mn), !r)) {
          (o = (o !== null && o.memoizedState !== null) || We), (m = Mn);
          var y = We;
          (Mn = r),
            (We = o) && !y ? Nn(n, l, (l.subtreeFlags & 8772) !== 0) : wn(n, l),
            (Mn = m),
            (We = y);
        }
        break;
      case 30:
        break;
      default:
        wn(n, l);
    }
  }
  function dm(n) {
    var o = n.alternate;
    o !== null && ((n.alternate = null), dm(o)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 && ((o = n.stateNode), o !== null && Dr(o)),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null);
  }
  var ke = null,
    _t = !1;
  function Rn(n, o, l) {
    for (l = l.child; l !== null; ) hm(n, o, l), (l = l.sibling);
  }
  function hm(n, o, l) {
    if (wt && typeof wt.onCommitFiberUnmount == "function")
      try {
        wt.onCommitFiberUnmount(Jo, l);
      } catch {}
    switch (l.tag) {
      case 26:
        We || rn(l, o),
          Rn(n, o, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        We || rn(l, o);
        var r = ke,
          m = _t;
        ii(l.type) && ((ke = l.stateNode), (_t = !1)),
          Rn(n, o, l),
          Ds(l.stateNode),
          (ke = r),
          (_t = m);
        break;
      case 5:
        We || rn(l, o);
      case 6:
        if (
          ((r = ke),
          (m = _t),
          (ke = null),
          Rn(n, o, l),
          (ke = r),
          (_t = m),
          ke !== null)
        )
          if (_t)
            try {
              (ke.nodeType === 9
                ? ke.body
                : ke.nodeName === "HTML"
                ? ke.ownerDocument.body
                : ke
              ).removeChild(l.stateNode);
            } catch (y) {
              De(l, o, y);
            }
          else
            try {
              ke.removeChild(l.stateNode);
            } catch (y) {
              De(l, o, y);
            }
        break;
      case 18:
        ke !== null &&
          (_t
            ? ((n = ke),
              sg(
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n,
                l.stateNode
              ),
              Ro(n))
            : sg(ke, l.stateNode));
        break;
      case 4:
        (r = ke),
          (m = _t),
          (ke = l.stateNode.containerInfo),
          (_t = !0),
          Rn(n, o, l),
          (ke = r),
          (_t = m);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Zn(2, l, o), We || Zn(4, l, o), Rn(n, o, l);
        break;
      case 1:
        We ||
          (rn(l, o),
          (r = l.stateNode),
          typeof r.componentWillUnmount == "function" && lm(l, o, r)),
          Rn(n, o, l);
        break;
      case 21:
        Rn(n, o, l);
        break;
      case 22:
        (We = (r = We) || l.memoizedState !== null), Rn(n, o, l), (We = r);
        break;
      default:
        Rn(n, o, l);
    }
  }
  function pm(n, o) {
    if (
      o.memoizedState === null &&
      ((n = o.alternate), n !== null && ((n = n.memoizedState), n !== null))
    ) {
      n = n.dehydrated;
      try {
        Ro(n);
      } catch (l) {
        De(o, o.return, l);
      }
    }
  }
  function mm(n, o) {
    if (
      o.memoizedState === null &&
      ((n = o.alternate),
      n !== null &&
        ((n = n.memoizedState), n !== null && ((n = n.dehydrated), n !== null)))
    )
      try {
        Ro(n);
      } catch (l) {
        De(o, o.return, l);
      }
  }
  function Q_(n) {
    switch (n.tag) {
      case 31:
      case 13:
      case 19:
        var o = n.stateNode;
        return o === null && (o = n.stateNode = new cm()), o;
      case 22:
        return (
          (n = n.stateNode),
          (o = n._retryCache),
          o === null && (o = n._retryCache = new cm()),
          o
        );
      default:
        throw Error(s(435, n.tag));
    }
  }
  function ia(n, o) {
    var l = Q_(n);
    o.forEach(function (r) {
      if (!l.has(r)) {
        l.add(r);
        var m = oA.bind(null, n, r);
        r.then(m, m);
      }
    });
  }
  function At(n, o) {
    var l = o.deletions;
    if (l !== null)
      for (var r = 0; r < l.length; r++) {
        var m = l[r],
          y = n,
          E = o,
          A = E;
        e: for (; A !== null; ) {
          switch (A.tag) {
            case 27:
              if (ii(A.type)) {
                (ke = A.stateNode), (_t = !1);
                break e;
              }
              break;
            case 5:
              (ke = A.stateNode), (_t = !1);
              break e;
            case 3:
            case 4:
              (ke = A.stateNode.containerInfo), (_t = !0);
              break e;
          }
          A = A.return;
        }
        if (ke === null) throw Error(s(160));
        hm(y, E, m),
          (ke = null),
          (_t = !1),
          (y = m.alternate),
          y !== null && (y.return = null),
          (m.return = null);
      }
    if (o.subtreeFlags & 13886)
      for (o = o.child; o !== null; ) gm(o, n), (o = o.sibling);
  }
  var jt = null;
  function gm(n, o) {
    var l = n.alternate,
      r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        At(o, n),
          Ct(n),
          r & 4 && (Zn(3, n, n.return), Es(3, n), Zn(5, n, n.return));
        break;
      case 1:
        At(o, n),
          Ct(n),
          r & 512 && (We || l === null || rn(l, l.return)),
          r & 64 &&
            Mn &&
            ((n = n.updateQueue),
            n !== null &&
              ((r = n.callbacks),
              r !== null &&
                ((l = n.shared.hiddenCallbacks),
                (n.shared.hiddenCallbacks = l === null ? r : l.concat(r)))));
        break;
      case 26:
        var m = jt;
        if (
          (At(o, n),
          Ct(n),
          r & 512 && (We || l === null || rn(l, l.return)),
          r & 4)
        ) {
          var y = l !== null ? l.memoizedState : null;
          if (((r = n.memoizedState), l === null))
            if (r === null)
              if (n.stateNode === null) {
                e: {
                  (r = n.type),
                    (l = n.memoizedProps),
                    (m = m.ownerDocument || m);
                  t: switch (r) {
                    case "title":
                      (y = m.getElementsByTagName("title")[0]),
                        (!y ||
                          y[Qo] ||
                          y[lt] ||
                          y.namespaceURI === "http://www.w3.org/2000/svg" ||
                          y.hasAttribute("itemprop")) &&
                          ((y = m.createElement(r)),
                          m.head.insertBefore(
                            y,
                            m.querySelector("head > title")
                          )),
                        ct(y, r, l),
                        (y[lt] = n),
                        tt(y),
                        (r = y);
                      break e;
                    case "link":
                      var E = gg("link", "href", m).get(r + (l.href || ""));
                      if (E) {
                        for (var A = 0; A < E.length; A++)
                          if (
                            ((y = E[A]),
                            y.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              y.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              y.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              y.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            E.splice(A, 1);
                            break t;
                          }
                      }
                      (y = m.createElement(r)),
                        ct(y, r, l),
                        m.head.appendChild(y);
                      break;
                    case "meta":
                      if (
                        (E = gg("meta", "content", m).get(
                          r + (l.content || "")
                        ))
                      ) {
                        for (A = 0; A < E.length; A++)
                          if (
                            ((y = E[A]),
                            y.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              y.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              y.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              y.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              y.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            E.splice(A, 1);
                            break t;
                          }
                      }
                      (y = m.createElement(r)),
                        ct(y, r, l),
                        m.head.appendChild(y);
                      break;
                    default:
                      throw Error(s(468, r));
                  }
                  (y[lt] = n), tt(y), (r = y);
                }
                n.stateNode = r;
              } else yg(m, n.type, n.stateNode);
            else n.stateNode = mg(m, r, n.memoizedProps);
          else
            y !== r
              ? (y === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : y.count--,
                r === null
                  ? yg(m, n.type, n.stateNode)
                  : mg(m, r, n.memoizedProps))
              : r === null &&
                n.stateNode !== null &&
                Wu(n, n.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        At(o, n),
          Ct(n),
          r & 512 && (We || l === null || rn(l, l.return)),
          l !== null && r & 4 && Wu(n, n.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (At(o, n),
          Ct(n),
          r & 512 && (We || l === null || rn(l, l.return)),
          n.flags & 32)
        ) {
          m = n.stateNode;
          try {
            Qi(m, "");
          } catch (ee) {
            De(n, n.return, ee);
          }
        }
        r & 4 &&
          n.stateNode != null &&
          ((m = n.memoizedProps), Wu(n, m, l !== null ? l.memoizedProps : m)),
          r & 1024 && (tc = !0);
        break;
      case 6:
        if ((At(o, n), Ct(n), r & 4)) {
          if (n.stateNode === null) throw Error(s(162));
          (r = n.memoizedProps), (l = n.stateNode);
          try {
            l.nodeValue = r;
          } catch (ee) {
            De(n, n.return, ee);
          }
        }
        break;
      case 3:
        if (
          ((Ta = null),
          (m = jt),
          (jt = ya(o.containerInfo)),
          At(o, n),
          (jt = m),
          Ct(n),
          r & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ro(o.containerInfo);
          } catch (ee) {
            De(n, n.return, ee);
          }
        tc && ((tc = !1), ym(n));
        break;
      case 4:
        (r = jt),
          (jt = ya(n.stateNode.containerInfo)),
          At(o, n),
          Ct(n),
          (jt = r);
        break;
      case 12:
        At(o, n), Ct(n);
        break;
      case 31:
        At(o, n),
          Ct(n),
          r & 4 &&
            ((r = n.updateQueue),
            r !== null && ((n.updateQueue = null), ia(n, r)));
        break;
      case 13:
        At(o, n),
          Ct(n),
          n.child.flags & 8192 &&
            (n.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (sa = Rt()),
          r & 4 &&
            ((r = n.updateQueue),
            r !== null && ((n.updateQueue = null), ia(n, r)));
        break;
      case 22:
        m = n.memoizedState !== null;
        var x = l !== null && l.memoizedState !== null,
          L = Mn,
          B = We;
        if (
          ((Mn = L || m),
          (We = B || x),
          At(o, n),
          (We = B),
          (Mn = L),
          Ct(n),
          r & 8192)
        )
          e: for (
            o = n.stateNode,
              o._visibility = m ? o._visibility & -2 : o._visibility | 1,
              m && (l === null || x || Mn || We || Ii(n)),
              l = null,
              o = n;
            ;

          ) {
            if (o.tag === 5 || o.tag === 26) {
              if (l === null) {
                x = l = o;
                try {
                  if (((y = x.stateNode), m))
                    (E = y.style),
                      typeof E.setProperty == "function"
                        ? E.setProperty("display", "none", "important")
                        : (E.display = "none");
                  else {
                    A = x.stateNode;
                    var O = x.memoizedProps.style,
                      V =
                        O != null && O.hasOwnProperty("display")
                          ? O.display
                          : null;
                    A.style.display =
                      V == null || typeof V == "boolean" ? "" : ("" + V).trim();
                  }
                } catch (ee) {
                  De(x, x.return, ee);
                }
              }
            } else if (o.tag === 6) {
              if (l === null) {
                x = o;
                try {
                  x.stateNode.nodeValue = m ? "" : x.memoizedProps;
                } catch (ee) {
                  De(x, x.return, ee);
                }
              }
            } else if (o.tag === 18) {
              if (l === null) {
                x = o;
                try {
                  var H = x.stateNode;
                  m ? lg(H, !0) : lg(x.stateNode, !1);
                } catch (ee) {
                  De(x, x.return, ee);
                }
              }
            } else if (
              ((o.tag !== 22 && o.tag !== 23) ||
                o.memoizedState === null ||
                o === n) &&
              o.child !== null
            ) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === n) break e;
            for (; o.sibling === null; ) {
              if (o.return === null || o.return === n) break e;
              l === o && (l = null), (o = o.return);
            }
            l === o && (l = null),
              (o.sibling.return = o.return),
              (o = o.sibling);
          }
        r & 4 &&
          ((r = n.updateQueue),
          r !== null &&
            ((l = r.retryQueue),
            l !== null && ((r.retryQueue = null), ia(n, l))));
        break;
      case 19:
        At(o, n),
          Ct(n),
          r & 4 &&
            ((r = n.updateQueue),
            r !== null && ((n.updateQueue = null), ia(n, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        At(o, n), Ct(n);
    }
  }
  function Ct(n) {
    var o = n.flags;
    if (o & 2) {
      try {
        for (var l, r = n.return; r !== null; ) {
          if (rm(r)) {
            l = r;
            break;
          }
          r = r.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var m = l.stateNode,
              y = ju(n);
            na(n, y, m);
            break;
          case 5:
            var E = l.stateNode;
            l.flags & 32 && (Qi(E, ""), (l.flags &= -33));
            var A = ju(n);
            na(n, A, E);
            break;
          case 3:
          case 4:
            var x = l.stateNode.containerInfo,
              L = ju(n);
            ec(n, L, x);
            break;
          default:
            throw Error(s(161));
        }
      } catch (B) {
        De(n, n.return, B);
      }
      n.flags &= -3;
    }
    o & 4096 && (n.flags &= -4097);
  }
  function ym(n) {
    if (n.subtreeFlags & 1024)
      for (n = n.child; n !== null; ) {
        var o = n;
        ym(o),
          o.tag === 5 && o.flags & 1024 && o.stateNode.reset(),
          (n = n.sibling);
      }
  }
  function wn(n, o) {
    if (o.subtreeFlags & 8772)
      for (o = o.child; o !== null; ) fm(n, o.alternate, o), (o = o.sibling);
  }
  function Ii(n) {
    for (n = n.child; n !== null; ) {
      var o = n;
      switch (o.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zn(4, o, o.return), Ii(o);
          break;
        case 1:
          rn(o, o.return);
          var l = o.stateNode;
          typeof l.componentWillUnmount == "function" && lm(o, o.return, l),
            Ii(o);
          break;
        case 27:
          Ds(o.stateNode);
        case 26:
        case 5:
          rn(o, o.return), Ii(o);
          break;
        case 22:
          o.memoizedState === null && Ii(o);
          break;
        case 30:
          Ii(o);
          break;
        default:
          Ii(o);
      }
      n = n.sibling;
    }
  }
  function Nn(n, o, l) {
    for (l = l && (o.subtreeFlags & 8772) !== 0, o = o.child; o !== null; ) {
      var r = o.alternate,
        m = n,
        y = o,
        E = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Nn(m, y, l), Es(4, y);
          break;
        case 1:
          if (
            (Nn(m, y, l),
            (r = y),
            (m = r.stateNode),
            typeof m.componentDidMount == "function")
          )
            try {
              m.componentDidMount();
            } catch (L) {
              De(r, r.return, L);
            }
          if (((r = y), (m = r.updateQueue), m !== null)) {
            var A = r.stateNode;
            try {
              var x = m.shared.hiddenCallbacks;
              if (x !== null)
                for (m.shared.hiddenCallbacks = null, m = 0; m < x.length; m++)
                  Xh(x[m], A);
            } catch (L) {
              De(r, r.return, L);
            }
          }
          l && E & 64 && sm(y), _s(y, y.return);
          break;
        case 27:
          um(y);
        case 26:
        case 5:
          Nn(m, y, l), l && r === null && E & 4 && am(y), _s(y, y.return);
          break;
        case 12:
          Nn(m, y, l);
          break;
        case 31:
          Nn(m, y, l), l && E & 4 && pm(m, y);
          break;
        case 13:
          Nn(m, y, l), l && E & 4 && mm(m, y);
          break;
        case 22:
          y.memoizedState === null && Nn(m, y, l), _s(y, y.return);
          break;
        case 30:
          break;
        default:
          Nn(m, y, l);
      }
      o = o.sibling;
    }
  }
  function nc(n, o) {
    var l = null;
    n !== null &&
      n.memoizedState !== null &&
      n.memoizedState.cachePool !== null &&
      (l = n.memoizedState.cachePool.pool),
      (n = null),
      o.memoizedState !== null &&
        o.memoizedState.cachePool !== null &&
        (n = o.memoizedState.cachePool.pool),
      n !== l && (n != null && n.refCount++, l != null && rs(l));
  }
  function ic(n, o) {
    (n = null),
      o.alternate !== null && (n = o.alternate.memoizedState.cache),
      (o = o.memoizedState.cache),
      o !== n && (o.refCount++, n != null && rs(n));
  }
  function en(n, o, l, r) {
    if (o.subtreeFlags & 10256)
      for (o = o.child; o !== null; ) vm(n, o, l, r), (o = o.sibling);
  }
  function vm(n, o, l, r) {
    var m = o.flags;
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        en(n, o, l, r), m & 2048 && Es(9, o);
        break;
      case 1:
        en(n, o, l, r);
        break;
      case 3:
        en(n, o, l, r),
          m & 2048 &&
            ((n = null),
            o.alternate !== null && (n = o.alternate.memoizedState.cache),
            (o = o.memoizedState.cache),
            o !== n && (o.refCount++, n != null && rs(n)));
        break;
      case 12:
        if (m & 2048) {
          en(n, o, l, r), (n = o.stateNode);
          try {
            var y = o.memoizedProps,
              E = y.id,
              A = y.onPostCommit;
            typeof A == "function" &&
              A(
                E,
                o.alternate === null ? "mount" : "update",
                n.passiveEffectDuration,
                -0
              );
          } catch (x) {
            De(o, o.return, x);
          }
        } else en(n, o, l, r);
        break;
      case 31:
        en(n, o, l, r);
        break;
      case 13:
        en(n, o, l, r);
        break;
      case 23:
        break;
      case 22:
        (y = o.stateNode),
          (E = o.alternate),
          o.memoizedState !== null
            ? y._visibility & 2
              ? en(n, o, l, r)
              : As(n, o)
            : y._visibility & 2
            ? en(n, o, l, r)
            : ((y._visibility |= 2),
              go(n, o, l, r, (o.subtreeFlags & 10256) !== 0 || !1)),
          m & 2048 && nc(E, o);
        break;
      case 24:
        en(n, o, l, r), m & 2048 && ic(o.alternate, o);
        break;
      default:
        en(n, o, l, r);
    }
  }
  function go(n, o, l, r, m) {
    for (
      m = m && ((o.subtreeFlags & 10256) !== 0 || !1), o = o.child;
      o !== null;

    ) {
      var y = n,
        E = o,
        A = l,
        x = r,
        L = E.flags;
      switch (E.tag) {
        case 0:
        case 11:
        case 15:
          go(y, E, A, x, m), Es(8, E);
          break;
        case 23:
          break;
        case 22:
          var B = E.stateNode;
          E.memoizedState !== null
            ? B._visibility & 2
              ? go(y, E, A, x, m)
              : As(y, E)
            : ((B._visibility |= 2), go(y, E, A, x, m)),
            m && L & 2048 && nc(E.alternate, E);
          break;
        case 24:
          go(y, E, A, x, m), m && L & 2048 && ic(E.alternate, E);
          break;
        default:
          go(y, E, A, x, m);
      }
      o = o.sibling;
    }
  }
  function As(n, o) {
    if (o.subtreeFlags & 10256)
      for (o = o.child; o !== null; ) {
        var l = n,
          r = o,
          m = r.flags;
        switch (r.tag) {
          case 22:
            As(l, r), m & 2048 && nc(r.alternate, r);
            break;
          case 24:
            As(l, r), m & 2048 && ic(r.alternate, r);
            break;
          default:
            As(l, r);
        }
        o = o.sibling;
      }
  }
  var Cs = 8192;
  function yo(n, o, l) {
    if (n.subtreeFlags & Cs)
      for (n = n.child; n !== null; ) Tm(n, o, l), (n = n.sibling);
  }
  function Tm(n, o, l) {
    switch (n.tag) {
      case 26:
        yo(n, o, l),
          n.flags & Cs &&
            n.memoizedState !== null &&
            VA(l, jt, n.memoizedState, n.memoizedProps);
        break;
      case 5:
        yo(n, o, l);
        break;
      case 3:
      case 4:
        var r = jt;
        (jt = ya(n.stateNode.containerInfo)), yo(n, o, l), (jt = r);
        break;
      case 22:
        n.memoizedState === null &&
          ((r = n.alternate),
          r !== null && r.memoizedState !== null
            ? ((r = Cs), (Cs = 16777216), yo(n, o, l), (Cs = r))
            : yo(n, o, l));
        break;
      default:
        yo(n, o, l);
    }
  }
  function Sm(n) {
    var o = n.alternate;
    if (o !== null && ((n = o.child), n !== null)) {
      o.child = null;
      do (o = n.sibling), (n.sibling = null), (n = o);
      while (n !== null);
    }
  }
  function xs(n) {
    var o = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (o !== null)
        for (var l = 0; l < o.length; l++) {
          var r = o[l];
          (nt = r), _m(r, n);
        }
      Sm(n);
    }
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) Em(n), (n = n.sibling);
  }
  function Em(n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        xs(n), n.flags & 2048 && Zn(9, n, n.return);
        break;
      case 3:
        xs(n);
        break;
      case 12:
        xs(n);
        break;
      case 22:
        var o = n.stateNode;
        n.memoizedState !== null &&
        o._visibility & 2 &&
        (n.return === null || n.return.tag !== 13)
          ? ((o._visibility &= -3), oa(n))
          : xs(n);
        break;
      default:
        xs(n);
    }
  }
  function oa(n) {
    var o = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (o !== null)
        for (var l = 0; l < o.length; l++) {
          var r = o[l];
          (nt = r), _m(r, n);
        }
      Sm(n);
    }
    for (n = n.child; n !== null; ) {
      switch (((o = n), o.tag)) {
        case 0:
        case 11:
        case 15:
          Zn(8, o, o.return), oa(o);
          break;
        case 22:
          (l = o.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), oa(o));
          break;
        default:
          oa(o);
      }
      n = n.sibling;
    }
  }
  function _m(n, o) {
    for (; nt !== null; ) {
      var l = nt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Zn(8, l, o);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var r = l.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          rs(l.memoizedState.cache);
      }
      if (((r = l.child), r !== null)) (r.return = l), (nt = r);
      else
        e: for (l = n; nt !== null; ) {
          r = nt;
          var m = r.sibling,
            y = r.return;
          if ((dm(r), r === l)) {
            nt = null;
            break e;
          }
          if (m !== null) {
            (m.return = y), (nt = m);
            break e;
          }
          nt = y;
        }
    }
  }
  var Z_ = {
      getCacheForType: function (n) {
        var o = rt(Qe),
          l = o.data.get(n);
        return l === void 0 && ((l = n()), o.data.set(n, l)), l;
      },
      cacheSignal: function () {
        return rt(Qe).controller.signal;
      },
    },
    $_ = typeof WeakMap == "function" ? WeakMap : Map,
    Re = 0,
    Ve = null,
    pe = null,
    ye = 0,
    be = 0,
    Lt = null,
    $n = !1,
    vo = !1,
    oc = !1,
    bn = 0,
    Oe = 0,
    Wn = 0,
    Ui = 0,
    sc = 0,
    Vt = 0,
    To = 0,
    Ms = null,
    xt = null,
    lc = !1,
    sa = 0,
    Am = 0,
    la = 1 / 0,
    aa = null,
    jn = null,
    je = 0,
    ei = null,
    So = null,
    Dn = 0,
    ac = 0,
    rc = null,
    Cm = null,
    Rs = 0,
    uc = null;
  function Pt() {
    return (Re & 2) !== 0 && ye !== 0 ? ye & -ye : G.T !== null ? mc() : Bd();
  }
  function xm() {
    if (Vt === 0)
      if ((ye & 536870912) === 0 || Te) {
        var n = ml;
        (ml <<= 1), (ml & 3932160) === 0 && (ml = 262144), (Vt = n);
      } else Vt = 536870912;
    return (n = It.current), n !== null && (n.flags |= 32), Vt;
  }
  function Mt(n, o, l) {
    ((n === Ve && (be === 2 || be === 9)) || n.cancelPendingCommit !== null) &&
      (Eo(n, 0), ti(n, ye, Vt, !1)),
      Xo(n, l),
      ((Re & 2) === 0 || n !== Ve) &&
        (n === Ve &&
          ((Re & 2) === 0 && (Ui |= l), Oe === 4 && ti(n, ye, Vt, !1)),
        un(n));
  }
  function Mm(n, o, l) {
    if ((Re & 6) !== 0) throw Error(s(327));
    var r = (!l && (o & 127) === 0 && (o & n.expiredLanes) === 0) || Ko(n, o),
      m = r ? eA(n, o) : fc(n, o, !0),
      y = r;
    do {
      if (m === 0) {
        vo && !r && ti(n, o, 0, !1);
        break;
      } else {
        if (((l = n.current.alternate), y && !W_(l))) {
          (m = fc(n, o, !1)), (y = !1);
          continue;
        }
        if (m === 2) {
          if (((y = o), n.errorRecoveryDisabledLanes & y)) var E = 0;
          else
            (E = n.pendingLanes & -536870913),
              (E = E !== 0 ? E : E & 536870912 ? 536870912 : 0);
          if (E !== 0) {
            o = E;
            e: {
              var A = n;
              m = Ms;
              var x = A.current.memoizedState.isDehydrated;
              if ((x && (Eo(A, E).flags |= 256), (E = fc(A, E, !1)), E !== 2)) {
                if (oc && !x) {
                  (A.errorRecoveryDisabledLanes |= y), (Ui |= y), (m = 4);
                  break e;
                }
                (y = xt),
                  (xt = m),
                  y !== null && (xt === null ? (xt = y) : xt.push.apply(xt, y));
              }
              m = E;
            }
            if (((y = !1), m !== 2)) continue;
          }
        }
        if (m === 1) {
          Eo(n, 0), ti(n, o, 0, !0);
          break;
        }
        e: {
          switch (((r = n), (y = m), y)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((o & 4194048) !== o) break;
            case 6:
              ti(r, o, Vt, !$n);
              break e;
            case 2:
              xt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((o & 62914560) === o && ((m = sa + 300 - Rt()), 10 < m)) {
            if ((ti(r, o, Vt, !$n), yl(r, 0, !0) !== 0)) break e;
            (Dn = o),
              (r.timeoutHandle = ig(
                Rm.bind(
                  null,
                  r,
                  l,
                  xt,
                  aa,
                  lc,
                  o,
                  Vt,
                  Ui,
                  To,
                  $n,
                  y,
                  "Throttled",
                  -0,
                  0
                ),
                m
              ));
            break e;
          }
          Rm(r, l, xt, aa, lc, o, Vt, Ui, To, $n, y, null, -0, 0);
        }
      }
      break;
    } while (!0);
    un(n);
  }
  function Rm(n, o, l, r, m, y, E, A, x, L, B, O, V, H) {
    if (
      ((n.timeoutHandle = -1),
      (O = o.subtreeFlags),
      O & 8192 || (O & 16785408) === 16785408)
    ) {
      (O = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: gn,
      }),
        Tm(o, y, O);
      var ee =
        (y & 62914560) === y ? sa - Rt() : (y & 4194048) === y ? Am - Rt() : 0;
      if (((ee = PA(O, ee)), ee !== null)) {
        (Dn = y),
          (n.cancelPendingCommit = ee(
            Vm.bind(null, n, o, y, l, r, m, E, A, x, B, O, null, V, H)
          )),
          ti(n, y, E, !L);
        return;
      }
    }
    Vm(n, o, y, l, r, m, E, A, x);
  }
  function W_(n) {
    for (var o = n; ; ) {
      var l = o.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        o.flags & 16384 &&
        ((l = o.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var r = 0; r < l.length; r++) {
          var m = l[r],
            y = m.getSnapshot;
          m = m.value;
          try {
            if (!bt(y(), m)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = o.child), o.subtreeFlags & 16384 && l !== null))
        (l.return = o), (o = l);
      else {
        if (o === n) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === n) return !0;
          o = o.return;
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
    }
    return !0;
  }
  function ti(n, o, l, r) {
    (o &= ~sc),
      (o &= ~Ui),
      (n.suspendedLanes |= o),
      (n.pingedLanes &= ~o),
      r && (n.warmLanes |= o),
      (r = n.expirationTimes);
    for (var m = o; 0 < m; ) {
      var y = 31 - Nt(m),
        E = 1 << y;
      (r[y] = -1), (m &= ~E);
    }
    l !== 0 && Hd(n, l, o);
  }
  function ra() {
    return (Re & 6) === 0 ? (ws(0), !1) : !0;
  }
  function cc() {
    if (pe !== null) {
      if (be === 0) var n = pe.return;
      else (n = pe), (Sn = Ci = null), Mu(n), (co = null), (cs = 0), (n = pe);
      for (; n !== null; ) om(n.alternate, n), (n = n.return);
      pe = null;
    }
  }
  function Eo(n, o) {
    var l = n.timeoutHandle;
    l !== -1 && ((n.timeoutHandle = -1), vA(l)),
      (l = n.cancelPendingCommit),
      l !== null && ((n.cancelPendingCommit = null), l()),
      (Dn = 0),
      cc(),
      (Ve = n),
      (pe = l = vn(n.current, null)),
      (ye = o),
      (be = 0),
      (Lt = null),
      ($n = !1),
      (vo = Ko(n, o)),
      (oc = !1),
      (To = Vt = sc = Ui = Wn = Oe = 0),
      (xt = Ms = null),
      (lc = !1),
      (o & 8) !== 0 && (o |= o & 32);
    var r = n.entangledLanes;
    if (r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; ) {
        var m = 31 - Nt(r),
          y = 1 << m;
        (o |= n[m]), (r &= ~y);
      }
    return (bn = o), Nl(), l;
  }
  function wm(n, o) {
    (fe = null),
      (G.H = vs),
      o === uo || o === Hl
        ? ((o = Fh()), (be = 3))
        : o === pu
        ? ((o = Fh()), (be = 4))
        : (be =
            o === qu
              ? 8
              : o !== null &&
                typeof o == "object" &&
                typeof o.then == "function"
              ? 6
              : 1),
      (Lt = o),
      pe === null && ((Oe = 1), $l(n, zt(o, n.current)));
  }
  function Nm() {
    var n = It.current;
    return n === null
      ? !0
      : (ye & 4194048) === ye
      ? Yt === null
      : (ye & 62914560) === ye || (ye & 536870912) !== 0
      ? n === Yt
      : !1;
  }
  function bm() {
    var n = G.H;
    return (G.H = vs), n === null ? vs : n;
  }
  function Dm() {
    var n = G.A;
    return (G.A = Z_), n;
  }
  function ua() {
    (Oe = 4),
      $n || ((ye & 4194048) !== ye && It.current !== null) || (vo = !0),
      ((Wn & 134217727) === 0 && (Ui & 134217727) === 0) ||
        Ve === null ||
        ti(Ve, ye, Vt, !1);
  }
  function fc(n, o, l) {
    var r = Re;
    Re |= 2;
    var m = bm(),
      y = Dm();
    (Ve !== n || ye !== o) && ((aa = null), Eo(n, o)), (o = !1);
    var E = Oe;
    e: do
      try {
        if (be !== 0 && pe !== null) {
          var A = pe,
            x = Lt;
          switch (be) {
            case 8:
              cc(), (E = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              It.current === null && (o = !0);
              var L = be;
              if (((be = 0), (Lt = null), _o(n, A, x, L), l && vo)) {
                E = 0;
                break e;
              }
              break;
            default:
              (L = be), (be = 0), (Lt = null), _o(n, A, x, L);
          }
        }
        j_(), (E = Oe);
        break;
      } catch (B) {
        wm(n, B);
      }
    while (!0);
    return (
      o && n.shellSuspendCounter++,
      (Sn = Ci = null),
      (Re = r),
      (G.H = m),
      (G.A = y),
      pe === null && ((Ve = null), (ye = 0), Nl()),
      E
    );
  }
  function j_() {
    for (; pe !== null; ) Im(pe);
  }
  function eA(n, o) {
    var l = Re;
    Re |= 2;
    var r = bm(),
      m = Dm();
    Ve !== n || ye !== o
      ? ((aa = null), (la = Rt() + 500), Eo(n, o))
      : (vo = Ko(n, o));
    e: do
      try {
        if (be !== 0 && pe !== null) {
          o = pe;
          var y = Lt;
          t: switch (be) {
            case 1:
              (be = 0), (Lt = null), _o(n, o, y, 1);
              break;
            case 2:
            case 9:
              if (qh(y)) {
                (be = 0), (Lt = null), Um(o);
                break;
              }
              (o = function () {
                (be !== 2 && be !== 9) || Ve !== n || (be = 7), un(n);
              }),
                y.then(o, o);
              break e;
            case 3:
              be = 7;
              break e;
            case 4:
              be = 5;
              break e;
            case 7:
              qh(y)
                ? ((be = 0), (Lt = null), Um(o))
                : ((be = 0), (Lt = null), _o(n, o, y, 7));
              break;
            case 5:
              var E = null;
              switch (pe.tag) {
                case 26:
                  E = pe.memoizedState;
                case 5:
                case 27:
                  var A = pe;
                  if (E ? vg(E) : A.stateNode.complete) {
                    (be = 0), (Lt = null);
                    var x = A.sibling;
                    if (x !== null) pe = x;
                    else {
                      var L = A.return;
                      L !== null ? ((pe = L), ca(L)) : (pe = null);
                    }
                    break t;
                  }
              }
              (be = 0), (Lt = null), _o(n, o, y, 5);
              break;
            case 6:
              (be = 0), (Lt = null), _o(n, o, y, 6);
              break;
            case 8:
              cc(), (Oe = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        tA();
        break;
      } catch (B) {
        wm(n, B);
      }
    while (!0);
    return (
      (Sn = Ci = null),
      (G.H = r),
      (G.A = m),
      (Re = l),
      pe !== null ? 0 : ((Ve = null), (ye = 0), Nl(), Oe)
    );
  }
  function tA() {
    for (; pe !== null && !CE(); ) Im(pe);
  }
  function Im(n) {
    var o = nm(n.alternate, n, bn);
    (n.memoizedProps = n.pendingProps), o === null ? ca(n) : (pe = o);
  }
  function Um(n) {
    var o = n,
      l = o.alternate;
    switch (o.tag) {
      case 15:
      case 0:
        o = Zp(l, o, o.pendingProps, o.type, void 0, ye);
        break;
      case 11:
        o = Zp(l, o, o.pendingProps, o.type.render, o.ref, ye);
        break;
      case 5:
        Mu(o);
      default:
        om(l, o), (o = pe = Dh(o, bn)), (o = nm(l, o, bn));
    }
    (n.memoizedProps = n.pendingProps), o === null ? ca(n) : (pe = o);
  }
  function _o(n, o, l, r) {
    (Sn = Ci = null), Mu(o), (co = null), (cs = 0);
    var m = o.return;
    try {
      if (O_(n, m, o, l, ye)) {
        (Oe = 1), $l(n, zt(l, n.current)), (pe = null);
        return;
      }
    } catch (y) {
      if (m !== null) throw ((pe = m), y);
      (Oe = 1), $l(n, zt(l, n.current)), (pe = null);
      return;
    }
    o.flags & 32768
      ? (Te || r === 1
          ? (n = !0)
          : vo || (ye & 536870912) !== 0
          ? (n = !1)
          : (($n = n = !0),
            (r === 2 || r === 9 || r === 3 || r === 6) &&
              ((r = It.current),
              r !== null && r.tag === 13 && (r.flags |= 16384))),
        Lm(o, n))
      : ca(o);
  }
  function ca(n) {
    var o = n;
    do {
      if ((o.flags & 32768) !== 0) {
        Lm(o, $n);
        return;
      }
      n = o.return;
      var l = J_(o.alternate, o, bn);
      if (l !== null) {
        pe = l;
        return;
      }
      if (((o = o.sibling), o !== null)) {
        pe = o;
        return;
      }
      pe = o = n;
    } while (o !== null);
    Oe === 0 && (Oe = 5);
  }
  function Lm(n, o) {
    do {
      var l = K_(n.alternate, n);
      if (l !== null) {
        (l.flags &= 32767), (pe = l);
        return;
      }
      if (
        ((l = n.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !o && ((n = n.sibling), n !== null))
      ) {
        pe = n;
        return;
      }
      pe = n = l;
    } while (n !== null);
    (Oe = 6), (pe = null);
  }
  function Vm(n, o, l, r, m, y, E, A, x) {
    n.cancelPendingCommit = null;
    do fa();
    while (je !== 0);
    if ((Re & 6) !== 0) throw Error(s(327));
    if (o !== null) {
      if (o === n.current) throw Error(s(177));
      if (
        ((y = o.lanes | o.childLanes),
        (y |= jr),
        LE(n, l, y, E, A, x),
        n === Ve && ((pe = Ve = null), (ye = 0)),
        (So = o),
        (ei = n),
        (Dn = l),
        (ac = y),
        (rc = m),
        (Cm = r),
        (o.subtreeFlags & 10256) !== 0 || (o.flags & 10256) !== 0
          ? ((n.callbackNode = null),
            (n.callbackPriority = 0),
            sA(hl, function () {
              return Bm(), null;
            }))
          : ((n.callbackNode = null), (n.callbackPriority = 0)),
        (r = (o.flags & 13878) !== 0),
        (o.subtreeFlags & 13878) !== 0 || r)
      ) {
        (r = G.T), (G.T = null), (m = K.p), (K.p = 2), (E = Re), (Re |= 4);
        try {
          X_(n, o, l);
        } finally {
          (Re = E), (K.p = m), (G.T = r);
        }
      }
      (je = 1), Pm(), Hm(), Gm();
    }
  }
  function Pm() {
    if (je === 1) {
      je = 0;
      var n = ei,
        o = So,
        l = (o.flags & 13878) !== 0;
      if ((o.subtreeFlags & 13878) !== 0 || l) {
        (l = G.T), (G.T = null);
        var r = K.p;
        K.p = 2;
        var m = Re;
        Re |= 4;
        try {
          gm(o, n);
          var y = Ac,
            E = _h(n.containerInfo),
            A = y.focusedElem,
            x = y.selectionRange;
          if (
            E !== A &&
            A &&
            A.ownerDocument &&
            Eh(A.ownerDocument.documentElement, A)
          ) {
            if (x !== null && Xr(A)) {
              var L = x.start,
                B = x.end;
              if ((B === void 0 && (B = L), "selectionStart" in A))
                (A.selectionStart = L),
                  (A.selectionEnd = Math.min(B, A.value.length));
              else {
                var O = A.ownerDocument || document,
                  V = (O && O.defaultView) || window;
                if (V.getSelection) {
                  var H = V.getSelection(),
                    ee = A.textContent.length,
                    se = Math.min(x.start, ee),
                    Le = x.end === void 0 ? se : Math.min(x.end, ee);
                  !H.extend && se > Le && ((E = Le), (Le = se), (se = E));
                  var D = Sh(A, se),
                    w = Sh(A, Le);
                  if (
                    D &&
                    w &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== D.node ||
                      H.anchorOffset !== D.offset ||
                      H.focusNode !== w.node ||
                      H.focusOffset !== w.offset)
                  ) {
                    var U = O.createRange();
                    U.setStart(D.node, D.offset),
                      H.removeAllRanges(),
                      se > Le
                        ? (H.addRange(U), H.extend(w.node, w.offset))
                        : (U.setEnd(w.node, w.offset), H.addRange(U));
                  }
                }
              }
            }
            for (O = [], H = A; (H = H.parentNode); )
              H.nodeType === 1 &&
                O.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (
              typeof A.focus == "function" && A.focus(), A = 0;
              A < O.length;
              A++
            ) {
              var z = O[A];
              (z.element.scrollLeft = z.left), (z.element.scrollTop = z.top);
            }
          }
          (Aa = !!_c), (Ac = _c = null);
        } finally {
          (Re = m), (K.p = r), (G.T = l);
        }
      }
      (n.current = o), (je = 2);
    }
  }
  function Hm() {
    if (je === 2) {
      je = 0;
      var n = ei,
        o = So,
        l = (o.flags & 8772) !== 0;
      if ((o.subtreeFlags & 8772) !== 0 || l) {
        (l = G.T), (G.T = null);
        var r = K.p;
        K.p = 2;
        var m = Re;
        Re |= 4;
        try {
          fm(n, o.alternate, o);
        } finally {
          (Re = m), (K.p = r), (G.T = l);
        }
      }
      je = 3;
    }
  }
  function Gm() {
    if (je === 4 || je === 3) {
      (je = 0), xE();
      var n = ei,
        o = So,
        l = Dn,
        r = Cm;
      (o.subtreeFlags & 10256) !== 0 || (o.flags & 10256) !== 0
        ? (je = 5)
        : ((je = 0), (So = ei = null), km(n, n.pendingLanes));
      var m = n.pendingLanes;
      if (
        (m === 0 && (jn = null),
        Nr(l),
        (o = o.stateNode),
        wt && typeof wt.onCommitFiberRoot == "function")
      )
        try {
          wt.onCommitFiberRoot(Jo, o, void 0, (o.current.flags & 128) === 128);
        } catch {}
      if (r !== null) {
        (o = G.T), (m = K.p), (K.p = 2), (G.T = null);
        try {
          for (var y = n.onRecoverableError, E = 0; E < r.length; E++) {
            var A = r[E];
            y(A.value, { componentStack: A.stack });
          }
        } finally {
          (G.T = o), (K.p = m);
        }
      }
      (Dn & 3) !== 0 && fa(),
        un(n),
        (m = n.pendingLanes),
        (l & 261930) !== 0 && (m & 42) !== 0
          ? n === uc
            ? Rs++
            : ((Rs = 0), (uc = n))
          : (Rs = 0),
        ws(0);
    }
  }
  function km(n, o) {
    (n.pooledCacheLanes &= o) === 0 &&
      ((o = n.pooledCache), o != null && ((n.pooledCache = null), rs(o)));
  }
  function fa() {
    return Pm(), Hm(), Gm(), Bm();
  }
  function Bm() {
    if (je !== 5) return !1;
    var n = ei,
      o = ac;
    ac = 0;
    var l = Nr(Dn),
      r = G.T,
      m = K.p;
    try {
      (K.p = 32 > l ? 32 : l), (G.T = null), (l = rc), (rc = null);
      var y = ei,
        E = Dn;
      if (((je = 0), (So = ei = null), (Dn = 0), (Re & 6) !== 0))
        throw Error(s(331));
      var A = Re;
      if (
        ((Re |= 4),
        Em(y.current),
        vm(y, y.current, E, l),
        (Re = A),
        ws(0, !1),
        wt && typeof wt.onPostCommitFiberRoot == "function")
      )
        try {
          wt.onPostCommitFiberRoot(Jo, y);
        } catch {}
      return !0;
    } finally {
      (K.p = m), (G.T = r), km(n, o);
    }
  }
  function zm(n, o, l) {
    (o = zt(l, o)),
      (o = zu(n.stateNode, o, 2)),
      (n = Kn(n, o, 2)),
      n !== null && (Xo(n, 2), un(n));
  }
  function De(n, o, l) {
    if (n.tag === 3) zm(n, n, l);
    else
      for (; o !== null; ) {
        if (o.tag === 3) {
          zm(o, n, l);
          break;
        } else if (o.tag === 1) {
          var r = o.stateNode;
          if (
            typeof o.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (jn === null || !jn.has(r)))
          ) {
            (n = zt(l, n)),
              (l = qp(2)),
              (r = Kn(o, l, 2)),
              r !== null && (Op(l, r, o, n), Xo(r, 2), un(r));
            break;
          }
        }
        o = o.return;
      }
  }
  function dc(n, o, l) {
    var r = n.pingCache;
    if (r === null) {
      r = n.pingCache = new $_();
      var m = new Set();
      r.set(o, m);
    } else (m = r.get(o)), m === void 0 && ((m = new Set()), r.set(o, m));
    m.has(l) ||
      ((oc = !0), m.add(l), (n = nA.bind(null, n, o, l)), o.then(n, n));
  }
  function nA(n, o, l) {
    var r = n.pingCache;
    r !== null && r.delete(o),
      (n.pingedLanes |= n.suspendedLanes & l),
      (n.warmLanes &= ~l),
      Ve === n &&
        (ye & l) === l &&
        (Oe === 4 || (Oe === 3 && (ye & 62914560) === ye && 300 > Rt() - sa)
          ? (Re & 2) === 0 && Eo(n, 0)
          : (sc |= l),
        To === ye && (To = 0)),
      un(n);
  }
  function qm(n, o) {
    o === 0 && (o = Pd()), (n = Ei(n, o)), n !== null && (Xo(n, o), un(n));
  }
  function iA(n) {
    var o = n.memoizedState,
      l = 0;
    o !== null && (l = o.retryLane), qm(n, l);
  }
  function oA(n, o) {
    var l = 0;
    switch (n.tag) {
      case 31:
      case 13:
        var r = n.stateNode,
          m = n.memoizedState;
        m !== null && (l = m.retryLane);
        break;
      case 19:
        r = n.stateNode;
        break;
      case 22:
        r = n.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(o), qm(n, l);
  }
  function sA(n, o) {
    return xr(n, o);
  }
  var da = null,
    Ao = null,
    hc = !1,
    ha = !1,
    pc = !1,
    ni = 0;
  function un(n) {
    n !== Ao &&
      n.next === null &&
      (Ao === null ? (da = Ao = n) : (Ao = Ao.next = n)),
      (ha = !0),
      hc || ((hc = !0), aA());
  }
  function ws(n, o) {
    if (!pc && ha) {
      pc = !0;
      do
        for (var l = !1, r = da; r !== null; ) {
          if (n !== 0) {
            var m = r.pendingLanes;
            if (m === 0) var y = 0;
            else {
              var E = r.suspendedLanes,
                A = r.pingedLanes;
              (y = (1 << (31 - Nt(42 | n) + 1)) - 1),
                (y &= m & ~(E & ~A)),
                (y = y & 201326741 ? (y & 201326741) | 1 : y ? y | 2 : 0);
            }
            y !== 0 && ((l = !0), Jm(r, y));
          } else
            (y = ye),
              (y = yl(
                r,
                r === Ve ? y : 0,
                r.cancelPendingCommit !== null || r.timeoutHandle !== -1
              )),
              (y & 3) === 0 || Ko(r, y) || ((l = !0), Jm(r, y));
          r = r.next;
        }
      while (l);
      pc = !1;
    }
  }
  function lA() {
    Om();
  }
  function Om() {
    ha = hc = !1;
    var n = 0;
    ni !== 0 && yA() && (n = ni);
    for (var o = Rt(), l = null, r = da; r !== null; ) {
      var m = r.next,
        y = Fm(r, o);
      y === 0
        ? ((r.next = null),
          l === null ? (da = m) : (l.next = m),
          m === null && (Ao = l))
        : ((l = r), (n !== 0 || (y & 3) !== 0) && (ha = !0)),
        (r = m);
    }
    (je !== 0 && je !== 5) || ws(n), ni !== 0 && (ni = 0);
  }
  function Fm(n, o) {
    for (
      var l = n.suspendedLanes,
        r = n.pingedLanes,
        m = n.expirationTimes,
        y = n.pendingLanes & -62914561;
      0 < y;

    ) {
      var E = 31 - Nt(y),
        A = 1 << E,
        x = m[E];
      x === -1
        ? ((A & l) === 0 || (A & r) !== 0) && (m[E] = UE(A, o))
        : x <= o && (n.expiredLanes |= A),
        (y &= ~A);
    }
    if (
      ((o = Ve),
      (l = ye),
      (l = yl(
        n,
        n === o ? l : 0,
        n.cancelPendingCommit !== null || n.timeoutHandle !== -1
      )),
      (r = n.callbackNode),
      l === 0 ||
        (n === o && (be === 2 || be === 9)) ||
        n.cancelPendingCommit !== null)
    )
      return (
        r !== null && r !== null && Mr(r),
        (n.callbackNode = null),
        (n.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ko(n, l)) {
      if (((o = l & -l), o === n.callbackPriority)) return o;
      switch ((r !== null && Mr(r), Nr(l))) {
        case 2:
        case 8:
          l = Ld;
          break;
        case 32:
          l = hl;
          break;
        case 268435456:
          l = Vd;
          break;
        default:
          l = hl;
      }
      return (
        (r = Ym.bind(null, n)),
        (l = xr(l, r)),
        (n.callbackPriority = o),
        (n.callbackNode = l),
        o
      );
    }
    return (
      r !== null && r !== null && Mr(r),
      (n.callbackPriority = 2),
      (n.callbackNode = null),
      2
    );
  }
  function Ym(n, o) {
    if (je !== 0 && je !== 5)
      return (n.callbackNode = null), (n.callbackPriority = 0), null;
    var l = n.callbackNode;
    if (fa() && n.callbackNode !== l) return null;
    var r = ye;
    return (
      (r = yl(
        n,
        n === Ve ? r : 0,
        n.cancelPendingCommit !== null || n.timeoutHandle !== -1
      )),
      r === 0
        ? null
        : (Mm(n, r, o),
          Fm(n, Rt()),
          n.callbackNode != null && n.callbackNode === l
            ? Ym.bind(null, n)
            : null)
    );
  }
  function Jm(n, o) {
    if (fa()) return null;
    Mm(n, o, !0);
  }
  function aA() {
    TA(function () {
      (Re & 6) !== 0 ? xr(Ud, lA) : Om();
    });
  }
  function mc() {
    if (ni === 0) {
      var n = ao;
      n === 0 && ((n = pl), (pl <<= 1), (pl & 261888) === 0 && (pl = 256)),
        (ni = n);
    }
    return ni;
  }
  function Km(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean"
      ? null
      : typeof n == "function"
      ? n
      : El("" + n);
  }
  function Xm(n, o) {
    var l = o.ownerDocument.createElement("input");
    return (
      (l.name = o.name),
      (l.value = o.value),
      n.id && l.setAttribute("form", n.id),
      o.parentNode.insertBefore(l, o),
      (n = new FormData(n)),
      l.parentNode.removeChild(l),
      n
    );
  }
  function rA(n, o, l, r, m) {
    if (o === "submit" && l && l.stateNode === m) {
      var y = Km((m[St] || null).action),
        E = r.submitter;
      E &&
        ((o = (o = E[St] || null)
          ? Km(o.formAction)
          : E.getAttribute("formAction")),
        o !== null && ((y = o), (E = null)));
      var A = new xl("action", "action", null, r, m);
      n.push({
        event: A,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (ni !== 0) {
                  var x = E ? Xm(m, E) : new FormData(m);
                  Vu(
                    l,
                    { pending: !0, data: x, method: m.method, action: y },
                    null,
                    x
                  );
                }
              } else
                typeof y == "function" &&
                  (A.preventDefault(),
                  (x = E ? Xm(m, E) : new FormData(m)),
                  Vu(
                    l,
                    { pending: !0, data: x, method: m.method, action: y },
                    y,
                    x
                  ));
            },
            currentTarget: m,
          },
        ],
      });
    }
  }
  for (var gc = 0; gc < Wr.length; gc++) {
    var yc = Wr[gc],
      uA = yc.toLowerCase(),
      cA = yc[0].toUpperCase() + yc.slice(1);
    Wt(uA, "on" + cA);
  }
  Wt(xh, "onAnimationEnd"),
    Wt(Mh, "onAnimationIteration"),
    Wt(Rh, "onAnimationStart"),
    Wt("dblclick", "onDoubleClick"),
    Wt("focusin", "onFocus"),
    Wt("focusout", "onBlur"),
    Wt(M_, "onTransitionRun"),
    Wt(R_, "onTransitionStart"),
    Wt(w_, "onTransitionCancel"),
    Wt(wh, "onTransitionEnd"),
    Ki("onMouseEnter", ["mouseout", "mouseover"]),
    Ki("onMouseLeave", ["mouseout", "mouseover"]),
    Ki("onPointerEnter", ["pointerout", "pointerover"]),
    Ki("onPointerLeave", ["pointerout", "pointerover"]),
    yi(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    yi(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    yi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    yi(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    yi(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    yi(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ns =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    fA = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ns)
    );
  function Qm(n, o) {
    o = (o & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var r = n[l],
        m = r.event;
      r = r.listeners;
      e: {
        var y = void 0;
        if (o)
          for (var E = r.length - 1; 0 <= E; E--) {
            var A = r[E],
              x = A.instance,
              L = A.currentTarget;
            if (((A = A.listener), x !== y && m.isPropagationStopped()))
              break e;
            (y = A), (m.currentTarget = L);
            try {
              y(m);
            } catch (B) {
              wl(B);
            }
            (m.currentTarget = null), (y = x);
          }
        else
          for (E = 0; E < r.length; E++) {
            if (
              ((A = r[E]),
              (x = A.instance),
              (L = A.currentTarget),
              (A = A.listener),
              x !== y && m.isPropagationStopped())
            )
              break e;
            (y = A), (m.currentTarget = L);
            try {
              y(m);
            } catch (B) {
              wl(B);
            }
            (m.currentTarget = null), (y = x);
          }
      }
    }
  }
  function me(n, o) {
    var l = o[br];
    l === void 0 && (l = o[br] = new Set());
    var r = n + "__bubble";
    l.has(r) || (Zm(o, n, 2, !1), l.add(r));
  }
  function vc(n, o, l) {
    var r = 0;
    o && (r |= 4), Zm(l, n, r, o);
  }
  var pa = "_reactListening" + Math.random().toString(36).slice(2);
  function Tc(n) {
    if (!n[pa]) {
      (n[pa] = !0),
        Od.forEach(function (l) {
          l !== "selectionchange" && (fA.has(l) || vc(l, !1, n), vc(l, !0, n));
        });
      var o = n.nodeType === 9 ? n : n.ownerDocument;
      o === null || o[pa] || ((o[pa] = !0), vc("selectionchange", !1, o));
    }
  }
  function Zm(n, o, l, r) {
    switch (xg(o)) {
      case 2:
        var m = kA;
        break;
      case 8:
        m = BA;
        break;
      default:
        m = Lc;
    }
    (l = m.bind(null, o, l, n)),
      (m = void 0),
      !kr ||
        (o !== "touchstart" && o !== "touchmove" && o !== "wheel") ||
        (m = !0),
      r
        ? m !== void 0
          ? n.addEventListener(o, l, { capture: !0, passive: m })
          : n.addEventListener(o, l, !0)
        : m !== void 0
        ? n.addEventListener(o, l, { passive: m })
        : n.addEventListener(o, l, !1);
  }
  function Sc(n, o, l, r, m) {
    var y = r;
    if ((o & 1) === 0 && (o & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var E = r.tag;
        if (E === 3 || E === 4) {
          var A = r.stateNode.containerInfo;
          if (A === m) break;
          if (E === 4)
            for (E = r.return; E !== null; ) {
              var x = E.tag;
              if ((x === 3 || x === 4) && E.stateNode.containerInfo === m)
                return;
              E = E.return;
            }
          for (; A !== null; ) {
            if (((E = Fi(A)), E === null)) return;
            if (((x = E.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              r = y = E;
              continue e;
            }
            A = A.parentNode;
          }
        }
        r = r.return;
      }
    th(function () {
      var L = y,
        B = Hr(l),
        O = [];
      e: {
        var V = Nh.get(n);
        if (V !== void 0) {
          var H = xl,
            ee = n;
          switch (n) {
            case "keypress":
              if (Al(l) === 0) break e;
            case "keydown":
            case "keyup":
              H = o_;
              break;
            case "focusin":
              (ee = "focus"), (H = Or);
              break;
            case "focusout":
              (ee = "blur"), (H = Or);
              break;
            case "beforeblur":
            case "afterblur":
              H = Or;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = oh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = JE;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = a_;
              break;
            case xh:
            case Mh:
            case Rh:
              H = QE;
              break;
            case wh:
              H = u_;
              break;
            case "scroll":
            case "scrollend":
              H = FE;
              break;
            case "wheel":
              H = f_;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = $E;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = lh;
              break;
            case "toggle":
            case "beforetoggle":
              H = h_;
          }
          var se = (o & 4) !== 0,
            Le = !se && (n === "scroll" || n === "scrollend"),
            D = se ? (V !== null ? V + "Capture" : null) : V;
          se = [];
          for (var w = L, U; w !== null; ) {
            var z = w;
            if (
              ((U = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                U === null ||
                D === null ||
                ((z = $o(w, D)), z != null && se.push(bs(w, z, U))),
              Le)
            )
              break;
            w = w.return;
          }
          0 < se.length &&
            ((V = new H(V, ee, null, l, B)),
            O.push({ event: V, listeners: se }));
        }
      }
      if ((o & 7) === 0) {
        e: {
          if (
            ((V = n === "mouseover" || n === "pointerover"),
            (H = n === "mouseout" || n === "pointerout"),
            V &&
              l !== Pr &&
              (ee = l.relatedTarget || l.fromElement) &&
              (Fi(ee) || ee[Oi]))
          )
            break e;
          if (
            (H || V) &&
            ((V =
              B.window === B
                ? B
                : (V = B.ownerDocument)
                ? V.defaultView || V.parentWindow
                : window),
            H
              ? ((ee = l.relatedTarget || l.toElement),
                (H = L),
                (ee = ee ? Fi(ee) : null),
                ee !== null &&
                  ((Le = u(ee)),
                  (se = ee.tag),
                  ee !== Le || (se !== 5 && se !== 27 && se !== 6)) &&
                  (ee = null))
              : ((H = null), (ee = L)),
            H !== ee)
          ) {
            if (
              ((se = oh),
              (z = "onMouseLeave"),
              (D = "onMouseEnter"),
              (w = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((se = lh),
                (z = "onPointerLeave"),
                (D = "onPointerEnter"),
                (w = "pointer")),
              (Le = H == null ? V : Zo(H)),
              (U = ee == null ? V : Zo(ee)),
              (V = new se(z, w + "leave", H, l, B)),
              (V.target = Le),
              (V.relatedTarget = U),
              (z = null),
              Fi(B) === L &&
                ((se = new se(D, w + "enter", ee, l, B)),
                (se.target = U),
                (se.relatedTarget = Le),
                (z = se)),
              (Le = z),
              H && ee)
            )
              t: {
                for (se = dA, D = H, w = ee, U = 0, z = D; z; z = se(z)) U++;
                z = 0;
                for (var oe = w; oe; oe = se(oe)) z++;
                for (; 0 < U - z; ) (D = se(D)), U--;
                for (; 0 < z - U; ) (w = se(w)), z--;
                for (; U--; ) {
                  if (D === w || (w !== null && D === w.alternate)) {
                    se = D;
                    break t;
                  }
                  (D = se(D)), (w = se(w));
                }
                se = null;
              }
            else se = null;
            H !== null && $m(O, V, H, se, !1),
              ee !== null && Le !== null && $m(O, Le, ee, se, !0);
          }
        }
        e: {
          if (
            ((V = L ? Zo(L) : window),
            (H = V.nodeName && V.nodeName.toLowerCase()),
            H === "select" || (H === "input" && V.type === "file"))
          )
            var Ae = ph;
          else if (dh(V))
            if (mh) Ae = A_;
            else {
              Ae = E_;
              var ne = S_;
            }
          else
            (H = V.nodeName),
              !H ||
              H.toLowerCase() !== "input" ||
              (V.type !== "checkbox" && V.type !== "radio")
                ? L && Vr(L.elementType) && (Ae = ph)
                : (Ae = __);
          if (Ae && (Ae = Ae(n, L))) {
            hh(O, Ae, l, B);
            break e;
          }
          ne && ne(n, V, L),
            n === "focusout" &&
              L &&
              V.type === "number" &&
              L.memoizedProps.value != null &&
              Lr(V, "number", V.value);
        }
        switch (((ne = L ? Zo(L) : window), n)) {
          case "focusin":
            (dh(ne) || ne.contentEditable === "true") &&
              ((ji = ne), (Qr = L), (ss = null));
            break;
          case "focusout":
            ss = Qr = ji = null;
            break;
          case "mousedown":
            Zr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Zr = !1), Ah(O, l, B);
            break;
          case "selectionchange":
            if (x_) break;
          case "keydown":
          case "keyup":
            Ah(O, l, B);
        }
        var de;
        if (Yr)
          e: {
            switch (n) {
              case "compositionstart":
                var ve = "onCompositionStart";
                break e;
              case "compositionend":
                ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ve = "onCompositionUpdate";
                break e;
            }
            ve = void 0;
          }
        else
          Wi
            ? ch(n, l) && (ve = "onCompositionEnd")
            : n === "keydown" &&
              l.keyCode === 229 &&
              (ve = "onCompositionStart");
        ve &&
          (ah &&
            l.locale !== "ko" &&
            (Wi || ve !== "onCompositionStart"
              ? ve === "onCompositionEnd" && Wi && (de = nh())
              : ((Bn = B),
                (Br = "value" in Bn ? Bn.value : Bn.textContent),
                (Wi = !0))),
          (ne = ma(L, ve)),
          0 < ne.length &&
            ((ve = new sh(ve, n, null, l, B)),
            O.push({ event: ve, listeners: ne }),
            de
              ? (ve.data = de)
              : ((de = fh(l)), de !== null && (ve.data = de)))),
          (de = m_ ? g_(n, l) : y_(n, l)) &&
            ((ve = ma(L, "onBeforeInput")),
            0 < ve.length &&
              ((ne = new sh("onBeforeInput", "beforeinput", null, l, B)),
              O.push({ event: ne, listeners: ve }),
              (ne.data = de))),
          rA(O, n, L, l, B);
      }
      Qm(O, o);
    });
  }
  function bs(n, o, l) {
    return { instance: n, listener: o, currentTarget: l };
  }
  function ma(n, o) {
    for (var l = o + "Capture", r = []; n !== null; ) {
      var m = n,
        y = m.stateNode;
      if (
        ((m = m.tag),
        (m !== 5 && m !== 26 && m !== 27) ||
          y === null ||
          ((m = $o(n, l)),
          m != null && r.unshift(bs(n, m, y)),
          (m = $o(n, o)),
          m != null && r.push(bs(n, m, y))),
        n.tag === 3)
      )
        return r;
      n = n.return;
    }
    return [];
  }
  function dA(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5 && n.tag !== 27);
    return n || null;
  }
  function $m(n, o, l, r, m) {
    for (var y = o._reactName, E = []; l !== null && l !== r; ) {
      var A = l,
        x = A.alternate,
        L = A.stateNode;
      if (((A = A.tag), x !== null && x === r)) break;
      (A !== 5 && A !== 26 && A !== 27) ||
        L === null ||
        ((x = L),
        m
          ? ((L = $o(l, y)), L != null && E.unshift(bs(l, L, x)))
          : m || ((L = $o(l, y)), L != null && E.push(bs(l, L, x)))),
        (l = l.return);
    }
    E.length !== 0 && n.push({ event: o, listeners: E });
  }
  var hA = /\r\n?/g,
    pA = /\u0000|\uFFFD/g;
  function Wm(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        hA,
        `
`
      )
      .replace(pA, "");
  }
  function jm(n, o) {
    return (o = Wm(o)), Wm(n) === o;
  }
  function Ue(n, o, l, r, m, y) {
    switch (l) {
      case "children":
        typeof r == "string"
          ? o === "body" || (o === "textarea" && r === "") || Qi(n, r)
          : (typeof r == "number" || typeof r == "bigint") &&
            o !== "body" &&
            Qi(n, "" + r);
        break;
      case "className":
        Tl(n, "class", r);
        break;
      case "tabIndex":
        Tl(n, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Tl(n, l, r);
        break;
      case "style":
        jd(n, r, y);
        break;
      case "data":
        if (o !== "object") {
          Tl(n, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (o !== "a" || l !== "href")) {
          n.removeAttribute(l);
          break;
        }
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "symbol" ||
          typeof r == "boolean"
        ) {
          n.removeAttribute(l);
          break;
        }
        (r = El("" + r)), n.setAttribute(l, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          n.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof y == "function" &&
            (l === "formAction"
              ? (o !== "input" && Ue(n, o, "name", m.name, m, null),
                Ue(n, o, "formEncType", m.formEncType, m, null),
                Ue(n, o, "formMethod", m.formMethod, m, null),
                Ue(n, o, "formTarget", m.formTarget, m, null))
              : (Ue(n, o, "encType", m.encType, m, null),
                Ue(n, o, "method", m.method, m, null),
                Ue(n, o, "target", m.target, m, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          n.removeAttribute(l);
          break;
        }
        (r = El("" + r)), n.setAttribute(l, r);
        break;
      case "onClick":
        r != null && (n.onclick = gn);
        break;
      case "onScroll":
        r != null && me("scroll", n);
        break;
      case "onScrollEnd":
        r != null && me("scrollend", n);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(s(61));
          if (((l = r.__html), l != null)) {
            if (m.children != null) throw Error(s(60));
            n.innerHTML = l;
          }
        }
        break;
      case "multiple":
        n.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        n.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "boolean" ||
          typeof r == "symbol"
        ) {
          n.removeAttribute("xlink:href");
          break;
        }
        (l = El("" + r)),
          n.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol"
          ? n.setAttribute(l, "" + r)
          : n.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol"
          ? n.setAttribute(l, "")
          : n.removeAttribute(l);
        break;
      case "capture":
      case "download":
        r === !0
          ? n.setAttribute(l, "")
          : r !== !1 &&
            r != null &&
            typeof r != "function" &&
            typeof r != "symbol"
          ? n.setAttribute(l, r)
          : n.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        !isNaN(r) &&
        1 <= r
          ? n.setAttribute(l, r)
          : n.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r)
          ? n.removeAttribute(l)
          : n.setAttribute(l, r);
        break;
      case "popover":
        me("beforetoggle", n), me("toggle", n), vl(n, "popover", r);
        break;
      case "xlinkActuate":
        mn(n, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        mn(n, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        mn(n, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        mn(n, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        mn(n, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        mn(n, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        mn(n, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        mn(n, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        mn(n, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        vl(n, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = qE.get(l) || l), vl(n, l, r));
    }
  }
  function Ec(n, o, l, r, m, y) {
    switch (l) {
      case "style":
        jd(n, r, y);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(s(61));
          if (((l = r.__html), l != null)) {
            if (m.children != null) throw Error(s(60));
            n.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof r == "string"
          ? Qi(n, r)
          : (typeof r == "number" || typeof r == "bigint") && Qi(n, "" + r);
        break;
      case "onScroll":
        r != null && me("scroll", n);
        break;
      case "onScrollEnd":
        r != null && me("scrollend", n);
        break;
      case "onClick":
        r != null && (n.onclick = gn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Fd.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((m = l.endsWith("Capture")),
              (o = l.slice(2, m ? l.length - 7 : void 0)),
              (y = n[St] || null),
              (y = y != null ? y[l] : null),
              typeof y == "function" && n.removeEventListener(o, y, m),
              typeof r == "function")
            ) {
              typeof y != "function" &&
                y !== null &&
                (l in n
                  ? (n[l] = null)
                  : n.hasAttribute(l) && n.removeAttribute(l)),
                n.addEventListener(o, r, m);
              break e;
            }
            l in n
              ? (n[l] = r)
              : r === !0
              ? n.setAttribute(l, "")
              : vl(n, l, r);
          }
    }
  }
  function ct(n, o, l) {
    switch (o) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        me("error", n), me("load", n);
        var r = !1,
          m = !1,
          y;
        for (y in l)
          if (l.hasOwnProperty(y)) {
            var E = l[y];
            if (E != null)
              switch (y) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  m = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, o));
                default:
                  Ue(n, o, y, E, l, null);
              }
          }
        m && Ue(n, o, "srcSet", l.srcSet, l, null),
          r && Ue(n, o, "src", l.src, l, null);
        return;
      case "input":
        me("invalid", n);
        var A = (y = E = m = null),
          x = null,
          L = null;
        for (r in l)
          if (l.hasOwnProperty(r)) {
            var B = l[r];
            if (B != null)
              switch (r) {
                case "name":
                  m = B;
                  break;
                case "type":
                  E = B;
                  break;
                case "checked":
                  x = B;
                  break;
                case "defaultChecked":
                  L = B;
                  break;
                case "value":
                  y = B;
                  break;
                case "defaultValue":
                  A = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null) throw Error(s(137, o));
                  break;
                default:
                  Ue(n, o, r, B, l, null);
              }
          }
        Qd(n, y, A, x, L, E, m, !1);
        return;
      case "select":
        me("invalid", n), (r = E = y = null);
        for (m in l)
          if (l.hasOwnProperty(m) && ((A = l[m]), A != null))
            switch (m) {
              case "value":
                y = A;
                break;
              case "defaultValue":
                E = A;
                break;
              case "multiple":
                r = A;
              default:
                Ue(n, o, m, A, l, null);
            }
        (o = y),
          (l = E),
          (n.multiple = !!r),
          o != null ? Xi(n, !!r, o, !1) : l != null && Xi(n, !!r, l, !0);
        return;
      case "textarea":
        me("invalid", n), (y = m = r = null);
        for (E in l)
          if (l.hasOwnProperty(E) && ((A = l[E]), A != null))
            switch (E) {
              case "value":
                r = A;
                break;
              case "defaultValue":
                m = A;
                break;
              case "children":
                y = A;
                break;
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(s(91));
                break;
              default:
                Ue(n, o, E, A, l, null);
            }
        $d(n, r, m, y);
        return;
      case "option":
        for (x in l)
          if (l.hasOwnProperty(x) && ((r = l[x]), r != null))
            switch (x) {
              case "selected":
                n.selected =
                  r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                Ue(n, o, x, r, l, null);
            }
        return;
      case "dialog":
        me("beforetoggle", n), me("toggle", n), me("cancel", n), me("close", n);
        break;
      case "iframe":
      case "object":
        me("load", n);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Ns.length; r++) me(Ns[r], n);
        break;
      case "image":
        me("error", n), me("load", n);
        break;
      case "details":
        me("toggle", n);
        break;
      case "embed":
      case "source":
      case "link":
        me("error", n), me("load", n);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (L in l)
          if (l.hasOwnProperty(L) && ((r = l[L]), r != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, o));
              default:
                Ue(n, o, L, r, l, null);
            }
        return;
      default:
        if (Vr(o)) {
          for (B in l)
            l.hasOwnProperty(B) &&
              ((r = l[B]), r !== void 0 && Ec(n, o, B, r, l, void 0));
          return;
        }
    }
    for (A in l)
      l.hasOwnProperty(A) && ((r = l[A]), r != null && Ue(n, o, A, r, l, null));
  }
  function mA(n, o, l, r) {
    switch (o) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var m = null,
          y = null,
          E = null,
          A = null,
          x = null,
          L = null,
          B = null;
        for (H in l) {
          var O = l[H];
          if (l.hasOwnProperty(H) && O != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = O;
              default:
                r.hasOwnProperty(H) || Ue(n, o, H, null, r, O);
            }
        }
        for (var V in r) {
          var H = r[V];
          if (((O = l[V]), r.hasOwnProperty(V) && (H != null || O != null)))
            switch (V) {
              case "type":
                y = H;
                break;
              case "name":
                m = H;
                break;
              case "checked":
                L = H;
                break;
              case "defaultChecked":
                B = H;
                break;
              case "value":
                E = H;
                break;
              case "defaultValue":
                A = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(s(137, o));
                break;
              default:
                H !== O && Ue(n, o, V, H, r, O);
            }
        }
        Ur(n, E, A, x, L, B, y, m);
        return;
      case "select":
        H = E = A = V = null;
        for (y in l)
          if (((x = l[y]), l.hasOwnProperty(y) && x != null))
            switch (y) {
              case "value":
                break;
              case "multiple":
                H = x;
              default:
                r.hasOwnProperty(y) || Ue(n, o, y, null, r, x);
            }
        for (m in r)
          if (
            ((y = r[m]),
            (x = l[m]),
            r.hasOwnProperty(m) && (y != null || x != null))
          )
            switch (m) {
              case "value":
                V = y;
                break;
              case "defaultValue":
                A = y;
                break;
              case "multiple":
                E = y;
              default:
                y !== x && Ue(n, o, m, y, r, x);
            }
        (o = A),
          (l = E),
          (r = H),
          V != null
            ? Xi(n, !!l, V, !1)
            : !!r != !!l &&
              (o != null ? Xi(n, !!l, o, !0) : Xi(n, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        H = V = null;
        for (A in l)
          if (
            ((m = l[A]),
            l.hasOwnProperty(A) && m != null && !r.hasOwnProperty(A))
          )
            switch (A) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ue(n, o, A, null, r, m);
            }
        for (E in r)
          if (
            ((m = r[E]),
            (y = l[E]),
            r.hasOwnProperty(E) && (m != null || y != null))
          )
            switch (E) {
              case "value":
                V = m;
                break;
              case "defaultValue":
                H = m;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(s(91));
                break;
              default:
                m !== y && Ue(n, o, E, m, r, y);
            }
        Zd(n, V, H);
        return;
      case "option":
        for (var ee in l)
          if (
            ((V = l[ee]),
            l.hasOwnProperty(ee) && V != null && !r.hasOwnProperty(ee))
          )
            switch (ee) {
              case "selected":
                n.selected = !1;
                break;
              default:
                Ue(n, o, ee, null, r, V);
            }
        for (x in r)
          if (
            ((V = r[x]),
            (H = l[x]),
            r.hasOwnProperty(x) && V !== H && (V != null || H != null))
          )
            switch (x) {
              case "selected":
                n.selected =
                  V && typeof V != "function" && typeof V != "symbol";
                break;
              default:
                Ue(n, o, x, V, r, H);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var se in l)
          (V = l[se]),
            l.hasOwnProperty(se) &&
              V != null &&
              !r.hasOwnProperty(se) &&
              Ue(n, o, se, null, r, V);
        for (L in r)
          if (
            ((V = r[L]),
            (H = l[L]),
            r.hasOwnProperty(L) && V !== H && (V != null || H != null))
          )
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(s(137, o));
                break;
              default:
                Ue(n, o, L, V, r, H);
            }
        return;
      default:
        if (Vr(o)) {
          for (var Le in l)
            (V = l[Le]),
              l.hasOwnProperty(Le) &&
                V !== void 0 &&
                !r.hasOwnProperty(Le) &&
                Ec(n, o, Le, void 0, r, V);
          for (B in r)
            (V = r[B]),
              (H = l[B]),
              !r.hasOwnProperty(B) ||
                V === H ||
                (V === void 0 && H === void 0) ||
                Ec(n, o, B, V, r, H);
          return;
        }
    }
    for (var D in l)
      (V = l[D]),
        l.hasOwnProperty(D) &&
          V != null &&
          !r.hasOwnProperty(D) &&
          Ue(n, o, D, null, r, V);
    for (O in r)
      (V = r[O]),
        (H = l[O]),
        !r.hasOwnProperty(O) ||
          V === H ||
          (V == null && H == null) ||
          Ue(n, o, O, V, r, H);
  }
  function eg(n) {
    switch (n) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function gA() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var n = 0, o = 0, l = performance.getEntriesByType("resource"), r = 0;
        r < l.length;
        r++
      ) {
        var m = l[r],
          y = m.transferSize,
          E = m.initiatorType,
          A = m.duration;
        if (y && A && eg(E)) {
          for (E = 0, A = m.responseEnd, r += 1; r < l.length; r++) {
            var x = l[r],
              L = x.startTime;
            if (L > A) break;
            var B = x.transferSize,
              O = x.initiatorType;
            B &&
              eg(O) &&
              ((x = x.responseEnd), (E += B * (x < A ? 1 : (A - L) / (x - L))));
          }
          if ((--r, (o += (8 * (y + E)) / (m.duration / 1e3)), n++, 10 < n))
            break;
        }
      }
      if (0 < n) return o / n / 1e6;
    }
    return navigator.connection &&
      ((n = navigator.connection.downlink), typeof n == "number")
      ? n
      : 5;
  }
  var _c = null,
    Ac = null;
  function ga(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function tg(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ng(n, o) {
    if (n === 0)
      switch (o) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return n === 1 && o === "foreignObject" ? 0 : n;
  }
  function Cc(n, o) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof o.children == "string" ||
      typeof o.children == "number" ||
      typeof o.children == "bigint" ||
      (typeof o.dangerouslySetInnerHTML == "object" &&
        o.dangerouslySetInnerHTML !== null &&
        o.dangerouslySetInnerHTML.__html != null)
    );
  }
  var xc = null;
  function yA() {
    var n = window.event;
    return n && n.type === "popstate"
      ? n === xc
        ? !1
        : ((xc = n), !0)
      : ((xc = null), !1);
  }
  var ig = typeof setTimeout == "function" ? setTimeout : void 0,
    vA = typeof clearTimeout == "function" ? clearTimeout : void 0,
    og = typeof Promise == "function" ? Promise : void 0,
    TA =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof og < "u"
        ? function (n) {
            return og.resolve(null).then(n).catch(SA);
          }
        : ig;
  function SA(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function ii(n) {
    return n === "head";
  }
  function sg(n, o) {
    var l = o,
      r = 0;
    do {
      var m = l.nextSibling;
      if ((n.removeChild(l), m && m.nodeType === 8))
        if (((l = m.data), l === "/$" || l === "/&")) {
          if (r === 0) {
            n.removeChild(m), Ro(o);
            return;
          }
          r--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          r++;
        else if (l === "html") Ds(n.ownerDocument.documentElement);
        else if (l === "head") {
          (l = n.ownerDocument.head), Ds(l);
          for (var y = l.firstChild; y; ) {
            var E = y.nextSibling,
              A = y.nodeName;
            y[Qo] ||
              A === "SCRIPT" ||
              A === "STYLE" ||
              (A === "LINK" && y.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(y),
              (y = E);
          }
        } else l === "body" && Ds(n.ownerDocument.body);
      l = m;
    } while (l);
    Ro(o);
  }
  function lg(n, o) {
    var l = n;
    n = 0;
    do {
      var r = l.nextSibling;
      if (
        (l.nodeType === 1
          ? o
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (o
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        r && r.nodeType === 8)
      )
        if (((l = r.data), l === "/$")) {
          if (n === 0) break;
          n--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || n++;
      l = r;
    } while (l);
  }
  function Mc(n) {
    var o = n.firstChild;
    for (o && o.nodeType === 10 && (o = o.nextSibling); o; ) {
      var l = o;
      switch (((o = o.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Mc(l), Dr(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      n.removeChild(l);
    }
  }
  function EA(n, o, l, r) {
    for (; n.nodeType === 1; ) {
      var m = l;
      if (n.nodeName.toLowerCase() !== o.toLowerCase()) {
        if (!r && (n.nodeName !== "INPUT" || n.type !== "hidden")) break;
      } else if (r) {
        if (!n[Qo])
          switch (o) {
            case "meta":
              if (!n.hasAttribute("itemprop")) break;
              return n;
            case "link":
              if (
                ((y = n.getAttribute("rel")),
                y === "stylesheet" && n.hasAttribute("data-precedence"))
              )
                break;
              if (
                y !== m.rel ||
                n.getAttribute("href") !==
                  (m.href == null || m.href === "" ? null : m.href) ||
                n.getAttribute("crossorigin") !==
                  (m.crossOrigin == null ? null : m.crossOrigin) ||
                n.getAttribute("title") !== (m.title == null ? null : m.title)
              )
                break;
              return n;
            case "style":
              if (n.hasAttribute("data-precedence")) break;
              return n;
            case "script":
              if (
                ((y = n.getAttribute("src")),
                (y !== (m.src == null ? null : m.src) ||
                  n.getAttribute("type") !== (m.type == null ? null : m.type) ||
                  n.getAttribute("crossorigin") !==
                    (m.crossOrigin == null ? null : m.crossOrigin)) &&
                  y &&
                  n.hasAttribute("async") &&
                  !n.hasAttribute("itemprop"))
              )
                break;
              return n;
            default:
              return n;
          }
      } else if (o === "input" && n.type === "hidden") {
        var y = m.name == null ? null : "" + m.name;
        if (m.type === "hidden" && n.getAttribute("name") === y) return n;
      } else return n;
      if (((n = Jt(n.nextSibling)), n === null)) break;
    }
    return null;
  }
  function _A(n, o, l) {
    if (o === "") return null;
    for (; n.nodeType !== 3; )
      if (
        ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") &&
          !l) ||
        ((n = Jt(n.nextSibling)), n === null)
      )
        return null;
    return n;
  }
  function ag(n, o) {
    for (; n.nodeType !== 8; )
      if (
        ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") &&
          !o) ||
        ((n = Jt(n.nextSibling)), n === null)
      )
        return null;
    return n;
  }
  function Rc(n) {
    return n.data === "$?" || n.data === "$~";
  }
  function wc(n) {
    return (
      n.data === "$!" ||
      (n.data === "$?" && n.ownerDocument.readyState !== "loading")
    );
  }
  function AA(n, o) {
    var l = n.ownerDocument;
    if (n.data === "$~") n._reactRetry = o;
    else if (n.data !== "$?" || l.readyState !== "loading") o();
    else {
      var r = function () {
        o(), l.removeEventListener("DOMContentLoaded", r);
      };
      l.addEventListener("DOMContentLoaded", r), (n._reactRetry = r);
    }
  }
  function Jt(n) {
    for (; n != null; n = n.nextSibling) {
      var o = n.nodeType;
      if (o === 1 || o === 3) break;
      if (o === 8) {
        if (
          ((o = n.data),
          o === "$" ||
            o === "$!" ||
            o === "$?" ||
            o === "$~" ||
            o === "&" ||
            o === "F!" ||
            o === "F")
        )
          break;
        if (o === "/$" || o === "/&") return null;
      }
    }
    return n;
  }
  var Nc = null;
  function rg(n) {
    n = n.nextSibling;
    for (var o = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "/$" || l === "/&") {
          if (o === 0) return Jt(n.nextSibling);
          o--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            o++;
      }
      n = n.nextSibling;
    }
    return null;
  }
  function ug(n) {
    n = n.previousSibling;
    for (var o = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (o === 0) return n;
          o--;
        } else (l !== "/$" && l !== "/&") || o++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function cg(n, o, l) {
    switch (((o = ga(l)), n)) {
      case "html":
        if (((n = o.documentElement), !n)) throw Error(s(452));
        return n;
      case "head":
        if (((n = o.head), !n)) throw Error(s(453));
        return n;
      case "body":
        if (((n = o.body), !n)) throw Error(s(454));
        return n;
      default:
        throw Error(s(451));
    }
  }
  function Ds(n) {
    for (var o = n.attributes; o.length; ) n.removeAttributeNode(o[0]);
    Dr(n);
  }
  var Kt = new Map(),
    fg = new Set();
  function ya(n) {
    return typeof n.getRootNode == "function"
      ? n.getRootNode()
      : n.nodeType === 9
      ? n
      : n.ownerDocument;
  }
  var In = K.d;
  K.d = { f: CA, r: xA, D: MA, C: RA, L: wA, m: NA, X: DA, S: bA, M: IA };
  function CA() {
    var n = In.f(),
      o = ra();
    return n || o;
  }
  function xA(n) {
    var o = Yi(n);
    o !== null && o.tag === 5 && o.type === "form" ? wp(o) : In.r(n);
  }
  var Co = typeof document > "u" ? null : document;
  function dg(n, o, l) {
    var r = Co;
    if (r && typeof o == "string" && o) {
      var m = kt(o);
      (m = 'link[rel="' + n + '"][href="' + m + '"]'),
        typeof l == "string" && (m += '[crossorigin="' + l + '"]'),
        fg.has(m) ||
          (fg.add(m),
          (n = { rel: n, crossOrigin: l, href: o }),
          r.querySelector(m) === null &&
            ((o = r.createElement("link")),
            ct(o, "link", n),
            tt(o),
            r.head.appendChild(o)));
    }
  }
  function MA(n) {
    In.D(n), dg("dns-prefetch", n, null);
  }
  function RA(n, o) {
    In.C(n, o), dg("preconnect", n, o);
  }
  function wA(n, o, l) {
    In.L(n, o, l);
    var r = Co;
    if (r && n && o) {
      var m = 'link[rel="preload"][as="' + kt(o) + '"]';
      o === "image" && l && l.imageSrcSet
        ? ((m += '[imagesrcset="' + kt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (m += '[imagesizes="' + kt(l.imageSizes) + '"]'))
        : (m += '[href="' + kt(n) + '"]');
      var y = m;
      switch (o) {
        case "style":
          y = xo(n);
          break;
        case "script":
          y = Mo(n);
      }
      Kt.has(y) ||
        ((n = T(
          {
            rel: "preload",
            href: o === "image" && l && l.imageSrcSet ? void 0 : n,
            as: o,
          },
          l
        )),
        Kt.set(y, n),
        r.querySelector(m) !== null ||
          (o === "style" && r.querySelector(Is(y))) ||
          (o === "script" && r.querySelector(Us(y))) ||
          ((o = r.createElement("link")),
          ct(o, "link", n),
          tt(o),
          r.head.appendChild(o)));
    }
  }
  function NA(n, o) {
    In.m(n, o);
    var l = Co;
    if (l && n) {
      var r = o && typeof o.as == "string" ? o.as : "script",
        m =
          'link[rel="modulepreload"][as="' + kt(r) + '"][href="' + kt(n) + '"]',
        y = m;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          y = Mo(n);
      }
      if (
        !Kt.has(y) &&
        ((n = T({ rel: "modulepreload", href: n }, o)),
        Kt.set(y, n),
        l.querySelector(m) === null)
      ) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Us(y))) return;
        }
        (r = l.createElement("link")),
          ct(r, "link", n),
          tt(r),
          l.head.appendChild(r);
      }
    }
  }
  function bA(n, o, l) {
    In.S(n, o, l);
    var r = Co;
    if (r && n) {
      var m = Ji(r).hoistableStyles,
        y = xo(n);
      o = o || "default";
      var E = m.get(y);
      if (!E) {
        var A = { loading: 0, preload: null };
        if ((E = r.querySelector(Is(y)))) A.loading = 5;
        else {
          (n = T({ rel: "stylesheet", href: n, "data-precedence": o }, l)),
            (l = Kt.get(y)) && bc(n, l);
          var x = (E = r.createElement("link"));
          tt(x),
            ct(x, "link", n),
            (x._p = new Promise(function (L, B) {
              (x.onload = L), (x.onerror = B);
            })),
            x.addEventListener("load", function () {
              A.loading |= 1;
            }),
            x.addEventListener("error", function () {
              A.loading |= 2;
            }),
            (A.loading |= 4),
            va(E, o, r);
        }
        (E = { type: "stylesheet", instance: E, count: 1, state: A }),
          m.set(y, E);
      }
    }
  }
  function DA(n, o) {
    In.X(n, o);
    var l = Co;
    if (l && n) {
      var r = Ji(l).hoistableScripts,
        m = Mo(n),
        y = r.get(m);
      y ||
        ((y = l.querySelector(Us(m))),
        y ||
          ((n = T({ src: n, async: !0 }, o)),
          (o = Kt.get(m)) && Dc(n, o),
          (y = l.createElement("script")),
          tt(y),
          ct(y, "link", n),
          l.head.appendChild(y)),
        (y = { type: "script", instance: y, count: 1, state: null }),
        r.set(m, y));
    }
  }
  function IA(n, o) {
    In.M(n, o);
    var l = Co;
    if (l && n) {
      var r = Ji(l).hoistableScripts,
        m = Mo(n),
        y = r.get(m);
      y ||
        ((y = l.querySelector(Us(m))),
        y ||
          ((n = T({ src: n, async: !0, type: "module" }, o)),
          (o = Kt.get(m)) && Dc(n, o),
          (y = l.createElement("script")),
          tt(y),
          ct(y, "link", n),
          l.head.appendChild(y)),
        (y = { type: "script", instance: y, count: 1, state: null }),
        r.set(m, y));
    }
  }
  function hg(n, o, l, r) {
    var m = (m = he.current) ? ya(m) : null;
    if (!m) throw Error(s(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((o = xo(l.href)),
            (l = Ji(m).hoistableStyles),
            (r = l.get(o)),
            r ||
              ((r = { type: "style", instance: null, count: 0, state: null }),
              l.set(o, r)),
            r)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          n = xo(l.href);
          var y = Ji(m).hoistableStyles,
            E = y.get(n);
          if (
            (E ||
              ((m = m.ownerDocument || m),
              (E = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              y.set(n, E),
              (y = m.querySelector(Is(n))) &&
                !y._p &&
                ((E.instance = y), (E.state.loading = 5)),
              Kt.has(n) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Kt.set(n, l),
                y || UA(m, n, l, E.state))),
            o && r === null)
          )
            throw Error(s(528, ""));
          return E;
        }
        if (o && r !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (o = l.async),
          (l = l.src),
          typeof l == "string" &&
          o &&
          typeof o != "function" &&
          typeof o != "symbol"
            ? ((o = Mo(l)),
              (l = Ji(m).hoistableScripts),
              (r = l.get(o)),
              r ||
                ((r = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(o, r)),
              r)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, n));
    }
  }
  function xo(n) {
    return 'href="' + kt(n) + '"';
  }
  function Is(n) {
    return 'link[rel="stylesheet"][' + n + "]";
  }
  function pg(n) {
    return T({}, n, { "data-precedence": n.precedence, precedence: null });
  }
  function UA(n, o, l, r) {
    n.querySelector('link[rel="preload"][as="style"][' + o + "]")
      ? (r.loading = 1)
      : ((o = n.createElement("link")),
        (r.preload = o),
        o.addEventListener("load", function () {
          return (r.loading |= 1);
        }),
        o.addEventListener("error", function () {
          return (r.loading |= 2);
        }),
        ct(o, "link", l),
        tt(o),
        n.head.appendChild(o));
  }
  function Mo(n) {
    return '[src="' + kt(n) + '"]';
  }
  function Us(n) {
    return "script[async]" + n;
  }
  function mg(n, o, l) {
    if ((o.count++, o.instance === null))
      switch (o.type) {
        case "style":
          var r = n.querySelector('style[data-href~="' + kt(l.href) + '"]');
          if (r) return (o.instance = r), tt(r), r;
          var m = T({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (r = (n.ownerDocument || n).createElement("style")),
            tt(r),
            ct(r, "style", m),
            va(r, l.precedence, n),
            (o.instance = r)
          );
        case "stylesheet":
          m = xo(l.href);
          var y = n.querySelector(Is(m));
          if (y) return (o.state.loading |= 4), (o.instance = y), tt(y), y;
          (r = pg(l)),
            (m = Kt.get(m)) && bc(r, m),
            (y = (n.ownerDocument || n).createElement("link")),
            tt(y);
          var E = y;
          return (
            (E._p = new Promise(function (A, x) {
              (E.onload = A), (E.onerror = x);
            })),
            ct(y, "link", r),
            (o.state.loading |= 4),
            va(y, l.precedence, n),
            (o.instance = y)
          );
        case "script":
          return (
            (y = Mo(l.src)),
            (m = n.querySelector(Us(y)))
              ? ((o.instance = m), tt(m), m)
              : ((r = l),
                (m = Kt.get(y)) && ((r = T({}, l)), Dc(r, m)),
                (n = n.ownerDocument || n),
                (m = n.createElement("script")),
                tt(m),
                ct(m, "link", r),
                n.head.appendChild(m),
                (o.instance = m))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, o.type));
      }
    else
      o.type === "stylesheet" &&
        (o.state.loading & 4) === 0 &&
        ((r = o.instance), (o.state.loading |= 4), va(r, l.precedence, n));
    return o.instance;
  }
  function va(n, o, l) {
    for (
      var r = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        m = r.length ? r[r.length - 1] : null,
        y = m,
        E = 0;
      E < r.length;
      E++
    ) {
      var A = r[E];
      if (A.dataset.precedence === o) y = A;
      else if (y !== m) break;
    }
    y
      ? y.parentNode.insertBefore(n, y.nextSibling)
      : ((o = l.nodeType === 9 ? l.head : l), o.insertBefore(n, o.firstChild));
  }
  function bc(n, o) {
    n.crossOrigin == null && (n.crossOrigin = o.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = o.referrerPolicy),
      n.title == null && (n.title = o.title);
  }
  function Dc(n, o) {
    n.crossOrigin == null && (n.crossOrigin = o.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = o.referrerPolicy),
      n.integrity == null && (n.integrity = o.integrity);
  }
  var Ta = null;
  function gg(n, o, l) {
    if (Ta === null) {
      var r = new Map(),
        m = (Ta = new Map());
      m.set(l, r);
    } else (m = Ta), (r = m.get(l)), r || ((r = new Map()), m.set(l, r));
    if (r.has(n)) return r;
    for (
      r.set(n, null), l = l.getElementsByTagName(n), m = 0;
      m < l.length;
      m++
    ) {
      var y = l[m];
      if (
        !(
          y[Qo] ||
          y[lt] ||
          (n === "link" && y.getAttribute("rel") === "stylesheet")
        ) &&
        y.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var E = y.getAttribute(o) || "";
        E = n + E;
        var A = r.get(E);
        A ? A.push(y) : r.set(E, [y]);
      }
    }
    return r;
  }
  function yg(n, o, l) {
    (n = n.ownerDocument || n),
      n.head.insertBefore(
        l,
        o === "title" ? n.querySelector("head > title") : null
      );
  }
  function LA(n, o, l) {
    if (l === 1 || o.itemProp != null) return !1;
    switch (n) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof o.precedence != "string" ||
          typeof o.href != "string" ||
          o.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof o.rel != "string" ||
          typeof o.href != "string" ||
          o.href === "" ||
          o.onLoad ||
          o.onError
        )
          break;
        switch (o.rel) {
          case "stylesheet":
            return (
              (n = o.disabled), typeof o.precedence == "string" && n == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          o.async &&
          typeof o.async != "function" &&
          typeof o.async != "symbol" &&
          !o.onLoad &&
          !o.onError &&
          o.src &&
          typeof o.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function vg(n) {
    return !(n.type === "stylesheet" && (n.state.loading & 3) === 0);
  }
  function VA(n, o, l, r) {
    if (
      l.type === "stylesheet" &&
      (typeof r.media != "string" || matchMedia(r.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var m = xo(r.href),
          y = o.querySelector(Is(m));
        if (y) {
          (o = y._p),
            o !== null &&
              typeof o == "object" &&
              typeof o.then == "function" &&
              (n.count++, (n = Sa.bind(n)), o.then(n, n)),
            (l.state.loading |= 4),
            (l.instance = y),
            tt(y);
          return;
        }
        (y = o.ownerDocument || o),
          (r = pg(r)),
          (m = Kt.get(m)) && bc(r, m),
          (y = y.createElement("link")),
          tt(y);
        var E = y;
        (E._p = new Promise(function (A, x) {
          (E.onload = A), (E.onerror = x);
        })),
          ct(y, "link", r),
          (l.instance = y);
      }
      n.stylesheets === null && (n.stylesheets = new Map()),
        n.stylesheets.set(l, o),
        (o = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (n.count++,
          (l = Sa.bind(n)),
          o.addEventListener("load", l),
          o.addEventListener("error", l));
    }
  }
  var Ic = 0;
  function PA(n, o) {
    return (
      n.stylesheets && n.count === 0 && _a(n, n.stylesheets),
      0 < n.count || 0 < n.imgCount
        ? function (l) {
            var r = setTimeout(function () {
              if ((n.stylesheets && _a(n, n.stylesheets), n.unsuspend)) {
                var y = n.unsuspend;
                (n.unsuspend = null), y();
              }
            }, 6e4 + o);
            0 < n.imgBytes && Ic === 0 && (Ic = 62500 * gA());
            var m = setTimeout(function () {
              if (
                ((n.waitingForImages = !1),
                n.count === 0 &&
                  (n.stylesheets && _a(n, n.stylesheets), n.unsuspend))
              ) {
                var y = n.unsuspend;
                (n.unsuspend = null), y();
              }
            }, (n.imgBytes > Ic ? 50 : 800) + o);
            return (
              (n.unsuspend = l),
              function () {
                (n.unsuspend = null), clearTimeout(r), clearTimeout(m);
              }
            );
          }
        : null
    );
  }
  function Sa() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) _a(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        (this.unsuspend = null), n();
      }
    }
  }
  var Ea = null;
  function _a(n, o) {
    (n.stylesheets = null),
      n.unsuspend !== null &&
        (n.count++,
        (Ea = new Map()),
        o.forEach(HA, n),
        (Ea = null),
        Sa.call(n));
  }
  function HA(n, o) {
    if (!(o.state.loading & 4)) {
      var l = Ea.get(n);
      if (l) var r = l.get(null);
      else {
        (l = new Map()), Ea.set(n, l);
        for (
          var m = n.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            y = 0;
          y < m.length;
          y++
        ) {
          var E = m[y];
          (E.nodeName === "LINK" || E.getAttribute("media") !== "not all") &&
            (l.set(E.dataset.precedence, E), (r = E));
        }
        r && l.set(null, r);
      }
      (m = o.instance),
        (E = m.getAttribute("data-precedence")),
        (y = l.get(E) || r),
        y === r && l.set(null, m),
        l.set(E, m),
        this.count++,
        (r = Sa.bind(this)),
        m.addEventListener("load", r),
        m.addEventListener("error", r),
        y
          ? y.parentNode.insertBefore(m, y.nextSibling)
          : ((n = n.nodeType === 9 ? n.head : n),
            n.insertBefore(m, n.firstChild)),
        (o.state.loading |= 4);
    }
  }
  var Ls = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: ie,
    _currentValue2: ie,
    _threadCount: 0,
  };
  function GA(n, o, l, r, m, y, E, A, x) {
    (this.tag = 1),
      (this.containerInfo = n),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Rr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Rr(0)),
      (this.hiddenUpdates = Rr(null)),
      (this.identifierPrefix = r),
      (this.onUncaughtError = m),
      (this.onCaughtError = y),
      (this.onRecoverableError = E),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = x),
      (this.incompleteTransitions = new Map());
  }
  function Tg(n, o, l, r, m, y, E, A, x, L, B, O) {
    return (
      (n = new GA(n, o, l, E, x, L, B, O, A)),
      (o = 1),
      y === !0 && (o |= 24),
      (y = Dt(3, null, null, o)),
      (n.current = y),
      (y.stateNode = n),
      (o = fu()),
      o.refCount++,
      (n.pooledCache = o),
      o.refCount++,
      (y.memoizedState = { element: r, isDehydrated: l, cache: o }),
      mu(y),
      n
    );
  }
  function Sg(n) {
    return n ? ((n = no), n) : no;
  }
  function Eg(n, o, l, r, m, y) {
    (m = Sg(m)),
      r.context === null ? (r.context = m) : (r.pendingContext = m),
      (r = Jn(o)),
      (r.payload = { element: l }),
      (y = y === void 0 ? null : y),
      y !== null && (r.callback = y),
      (l = Kn(n, r, o)),
      l !== null && (Mt(l, n, o), ds(l, n, o));
  }
  function _g(n, o) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < o ? l : o;
    }
  }
  function Uc(n, o) {
    _g(n, o), (n = n.alternate) && _g(n, o);
  }
  function Ag(n) {
    if (n.tag === 13 || n.tag === 31) {
      var o = Ei(n, 67108864);
      o !== null && Mt(o, n, 67108864), Uc(n, 67108864);
    }
  }
  function Cg(n) {
    if (n.tag === 13 || n.tag === 31) {
      var o = Pt();
      o = wr(o);
      var l = Ei(n, o);
      l !== null && Mt(l, n, o), Uc(n, o);
    }
  }
  var Aa = !0;
  function kA(n, o, l, r) {
    var m = G.T;
    G.T = null;
    var y = K.p;
    try {
      (K.p = 2), Lc(n, o, l, r);
    } finally {
      (K.p = y), (G.T = m);
    }
  }
  function BA(n, o, l, r) {
    var m = G.T;
    G.T = null;
    var y = K.p;
    try {
      (K.p = 8), Lc(n, o, l, r);
    } finally {
      (K.p = y), (G.T = m);
    }
  }
  function Lc(n, o, l, r) {
    if (Aa) {
      var m = Vc(r);
      if (m === null) Sc(n, o, r, Ca, l), Mg(n, r);
      else if (qA(m, n, o, l, r)) r.stopPropagation();
      else if ((Mg(n, r), o & 4 && -1 < zA.indexOf(n))) {
        for (; m !== null; ) {
          var y = Yi(m);
          if (y !== null)
            switch (y.tag) {
              case 3:
                if (((y = y.stateNode), y.current.memoizedState.isDehydrated)) {
                  var E = gi(y.pendingLanes);
                  if (E !== 0) {
                    var A = y;
                    for (A.pendingLanes |= 2, A.entangledLanes |= 2; E; ) {
                      var x = 1 << (31 - Nt(E));
                      (A.entanglements[1] |= x), (E &= ~x);
                    }
                    un(y), (Re & 6) === 0 && ((la = Rt() + 500), ws(0));
                  }
                }
                break;
              case 31:
              case 13:
                (A = Ei(y, 2)), A !== null && Mt(A, y, 2), ra(), Uc(y, 2);
            }
          if (((y = Vc(r)), y === null && Sc(n, o, r, Ca, l), y === m)) break;
          m = y;
        }
        m !== null && r.stopPropagation();
      } else Sc(n, o, r, null, l);
    }
  }
  function Vc(n) {
    return (n = Hr(n)), Pc(n);
  }
  var Ca = null;
  function Pc(n) {
    if (((Ca = null), (n = Fi(n)), n !== null)) {
      var o = u(n);
      if (o === null) n = null;
      else {
        var l = o.tag;
        if (l === 13) {
          if (((n = c(o)), n !== null)) return n;
          n = null;
        } else if (l === 31) {
          if (((n = h(o)), n !== null)) return n;
          n = null;
        } else if (l === 3) {
          if (o.stateNode.current.memoizedState.isDehydrated)
            return o.tag === 3 ? o.stateNode.containerInfo : null;
          n = null;
        } else o !== n && (n = null);
      }
    }
    return (Ca = n), null;
  }
  function xg(n) {
    switch (n) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ME()) {
          case Ud:
            return 2;
          case Ld:
            return 8;
          case hl:
          case RE:
            return 32;
          case Vd:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Hc = !1,
    oi = null,
    si = null,
    li = null,
    Vs = new Map(),
    Ps = new Map(),
    ai = [],
    zA =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Mg(n, o) {
    switch (n) {
      case "focusin":
      case "focusout":
        oi = null;
        break;
      case "dragenter":
      case "dragleave":
        si = null;
        break;
      case "mouseover":
      case "mouseout":
        li = null;
        break;
      case "pointerover":
      case "pointerout":
        Vs.delete(o.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ps.delete(o.pointerId);
    }
  }
  function Hs(n, o, l, r, m, y) {
    return n === null || n.nativeEvent !== y
      ? ((n = {
          blockedOn: o,
          domEventName: l,
          eventSystemFlags: r,
          nativeEvent: y,
          targetContainers: [m],
        }),
        o !== null && ((o = Yi(o)), o !== null && Ag(o)),
        n)
      : ((n.eventSystemFlags |= r),
        (o = n.targetContainers),
        m !== null && o.indexOf(m) === -1 && o.push(m),
        n);
  }
  function qA(n, o, l, r, m) {
    switch (o) {
      case "focusin":
        return (oi = Hs(oi, n, o, l, r, m)), !0;
      case "dragenter":
        return (si = Hs(si, n, o, l, r, m)), !0;
      case "mouseover":
        return (li = Hs(li, n, o, l, r, m)), !0;
      case "pointerover":
        var y = m.pointerId;
        return Vs.set(y, Hs(Vs.get(y) || null, n, o, l, r, m)), !0;
      case "gotpointercapture":
        return (
          (y = m.pointerId), Ps.set(y, Hs(Ps.get(y) || null, n, o, l, r, m)), !0
        );
    }
    return !1;
  }
  function Rg(n) {
    var o = Fi(n.target);
    if (o !== null) {
      var l = u(o);
      if (l !== null) {
        if (((o = l.tag), o === 13)) {
          if (((o = c(l)), o !== null)) {
            (n.blockedOn = o),
              zd(n.priority, function () {
                Cg(l);
              });
            return;
          }
        } else if (o === 31) {
          if (((o = h(l)), o !== null)) {
            (n.blockedOn = o),
              zd(n.priority, function () {
                Cg(l);
              });
            return;
          }
        } else if (o === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function xa(n) {
    if (n.blockedOn !== null) return !1;
    for (var o = n.targetContainers; 0 < o.length; ) {
      var l = Vc(n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var r = new l.constructor(l.type, l);
        (Pr = r), l.target.dispatchEvent(r), (Pr = null);
      } else return (o = Yi(l)), o !== null && Ag(o), (n.blockedOn = l), !1;
      o.shift();
    }
    return !0;
  }
  function wg(n, o, l) {
    xa(n) && l.delete(o);
  }
  function OA() {
    (Hc = !1),
      oi !== null && xa(oi) && (oi = null),
      si !== null && xa(si) && (si = null),
      li !== null && xa(li) && (li = null),
      Vs.forEach(wg),
      Ps.forEach(wg);
  }
  function Ma(n, o) {
    n.blockedOn === o &&
      ((n.blockedOn = null),
      Hc ||
        ((Hc = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, OA)));
  }
  var Ra = null;
  function Ng(n) {
    Ra !== n &&
      ((Ra = n),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        Ra === n && (Ra = null);
        for (var o = 0; o < n.length; o += 3) {
          var l = n[o],
            r = n[o + 1],
            m = n[o + 2];
          if (typeof r != "function") {
            if (Pc(r || l) === null) continue;
            break;
          }
          var y = Yi(l);
          y !== null &&
            (n.splice(o, 3),
            (o -= 3),
            Vu(y, { pending: !0, data: m, method: l.method, action: r }, r, m));
        }
      }));
  }
  function Ro(n) {
    function o(x) {
      return Ma(x, n);
    }
    oi !== null && Ma(oi, n),
      si !== null && Ma(si, n),
      li !== null && Ma(li, n),
      Vs.forEach(o),
      Ps.forEach(o);
    for (var l = 0; l < ai.length; l++) {
      var r = ai[l];
      r.blockedOn === n && (r.blockedOn = null);
    }
    for (; 0 < ai.length && ((l = ai[0]), l.blockedOn === null); )
      Rg(l), l.blockedOn === null && ai.shift();
    if (((l = (n.ownerDocument || n).$$reactFormReplay), l != null))
      for (r = 0; r < l.length; r += 3) {
        var m = l[r],
          y = l[r + 1],
          E = m[St] || null;
        if (typeof y == "function") E || Ng(l);
        else if (E) {
          var A = null;
          if (y && y.hasAttribute("formAction")) {
            if (((m = y), (E = y[St] || null))) A = E.formAction;
            else if (Pc(m) !== null) continue;
          } else A = E.action;
          typeof A == "function" ? (l[r + 1] = A) : (l.splice(r, 3), (r -= 3)),
            Ng(l);
        }
      }
  }
  function bg() {
    function n(y) {
      y.canIntercept &&
        y.info === "react-transition" &&
        y.intercept({
          handler: function () {
            return new Promise(function (E) {
              return (m = E);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function o() {
      m !== null && (m(), (m = null)), r || setTimeout(l, 20);
    }
    function l() {
      if (!r && !navigation.transition) {
        var y = navigation.currentEntry;
        y &&
          y.url != null &&
          navigation.navigate(y.url, {
            state: y.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var r = !1,
        m = null;
      return (
        navigation.addEventListener("navigate", n),
        navigation.addEventListener("navigatesuccess", o),
        navigation.addEventListener("navigateerror", o),
        setTimeout(l, 100),
        function () {
          (r = !0),
            navigation.removeEventListener("navigate", n),
            navigation.removeEventListener("navigatesuccess", o),
            navigation.removeEventListener("navigateerror", o),
            m !== null && (m(), (m = null));
        }
      );
    }
  }
  function Gc(n) {
    this._internalRoot = n;
  }
  (wa.prototype.render = Gc.prototype.render =
    function (n) {
      var o = this._internalRoot;
      if (o === null) throw Error(s(409));
      var l = o.current,
        r = Pt();
      Eg(l, r, n, o, null, null);
    }),
    (wa.prototype.unmount = Gc.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var o = n.containerInfo;
          Eg(n.current, 2, null, n, null, null), ra(), (o[Oi] = null);
        }
      });
  function wa(n) {
    this._internalRoot = n;
  }
  wa.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var o = Bd();
      n = { blockedOn: null, target: n, priority: o };
      for (var l = 0; l < ai.length && o !== 0 && o < ai[l].priority; l++);
      ai.splice(l, 0, n), l === 0 && Rg(n);
    }
  };
  var Dg = e.version;
  if (Dg !== "19.2.3") throw Error(s(527, Dg, "19.2.3"));
  K.findDOMNode = function (n) {
    var o = n._reactInternals;
    if (o === void 0)
      throw typeof n.render == "function"
        ? Error(s(188))
        : ((n = Object.keys(n).join(",")), Error(s(268, n)));
    return (
      (n = p(o)),
      (n = n !== null ? v(n) : null),
      (n = n === null ? null : n.stateNode),
      n
    );
  };
  var FA = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Na.isDisabled && Na.supportsFiber)
      try {
        (Jo = Na.inject(FA)), (wt = Na);
      } catch {}
  }
  return (
    (ks.createRoot = function (n, o) {
      if (!a(n)) throw Error(s(299));
      var l = !1,
        r = "",
        m = Gp,
        y = kp,
        E = Bp;
      return (
        o != null &&
          (o.unstable_strictMode === !0 && (l = !0),
          o.identifierPrefix !== void 0 && (r = o.identifierPrefix),
          o.onUncaughtError !== void 0 && (m = o.onUncaughtError),
          o.onCaughtError !== void 0 && (y = o.onCaughtError),
          o.onRecoverableError !== void 0 && (E = o.onRecoverableError)),
        (o = Tg(n, 1, !1, null, null, l, r, null, m, y, E, bg)),
        (n[Oi] = o.current),
        Tc(n),
        new Gc(o)
      );
    }),
    (ks.hydrateRoot = function (n, o, l) {
      if (!a(n)) throw Error(s(299));
      var r = !1,
        m = "",
        y = Gp,
        E = kp,
        A = Bp,
        x = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (r = !0),
          l.identifierPrefix !== void 0 && (m = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (y = l.onUncaughtError),
          l.onCaughtError !== void 0 && (E = l.onCaughtError),
          l.onRecoverableError !== void 0 && (A = l.onRecoverableError),
          l.formState !== void 0 && (x = l.formState)),
        (o = Tg(n, 1, !0, o, l ?? null, r, m, x, y, E, A, bg)),
        (o.context = Sg(null)),
        (l = o.current),
        (r = Pt()),
        (r = wr(r)),
        (m = Jn(r)),
        (m.callback = null),
        Kn(l, m, r),
        (l = r),
        (o.current.lanes = l),
        Xo(o, l),
        un(o),
        (n[Oi] = o.current),
        Tc(n),
        new wa(o)
      );
    }),
    (ks.version = "19.2.3"),
    ks
  );
}
var zg;
function tC() {
  if (zg) return zc.exports;
  zg = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (e) {
        console.error(e);
      }
  }
  return t(), (zc.exports = eC()), zc.exports;
}
var nC = tC();
const iC = F0(nC);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Y0 = (...t) =>
    t
      .filter((e, i, s) => !!e && e.trim() !== "" && s.indexOf(e) === i)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var sC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lC = X.forwardRef(
  (
    {
      color: t = "currentColor",
      size: e = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: s,
      className: a = "",
      children: u,
      iconNode: c,
      ...h
    },
    g
  ) =>
    X.createElement(
      "svg",
      {
        ref: g,
        ...sC,
        width: e,
        height: e,
        stroke: t,
        strokeWidth: s ? (Number(i) * 24) / Number(e) : i,
        className: Y0("lucide", a),
        ...h,
      },
      [
        ...c.map(([p, v]) => X.createElement(p, v)),
        ...(Array.isArray(u) ? u : [u]),
      ]
    )
);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ot = (t, e) => {
  const i = X.forwardRef(({ className: s, ...a }, u) =>
    X.createElement(lC, {
      ref: u,
      iconNode: e,
      className: Y0(`lucide-${oC(t)}`, s),
      ...a,
    })
  );
  return (i.displayName = `${t}`), i;
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aC = ot("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rC = ot("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uC = ot("Coins", [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cC = ot("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J0 = ot("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fC = ot("Eraser", [
  [
    "path",
    {
      d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      key: "182aya",
    },
  ],
  ["path", { d: "M22 21H7", key: "t4ddhn" }],
  ["path", { d: "m5 11 9 9", key: "1mo9qw" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dC = ot("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hC = ot("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pC = ot("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mC = ot("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu",
    },
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gC = ot("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yC = ot("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vC = ot("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506",
    },
  ],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const TC = ot("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SC = ot("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const EC = ot("Wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6",
    },
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _C = ot("WandSparkles", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6",
    },
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AC = ot("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var CC = {};
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let xC, MC;
function RC() {
  return { geminiUrl: xC, vertexUrl: MC };
}
function wC(t, e, i, s) {
  var a, u;
  if (!(t != null && t.baseUrl)) {
    const c = RC();
    return e
      ? (a = c.vertexUrl) !== null && a !== void 0
        ? a
        : i
      : (u = c.geminiUrl) !== null && u !== void 0
      ? u
      : s;
  }
  return t.baseUrl;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Pn {}
function j(t, e) {
  const i = /\{([^}]+)\}/g;
  return t.replace(i, (s, a) => {
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      const u = e[a];
      return u != null ? String(u) : "";
    } else throw new Error(`Key '${a}' not found in valueMap.`);
  });
}
function d(t, e, i) {
  for (let u = 0; u < e.length - 1; u++) {
    const c = e[u];
    if (c.endsWith("[]")) {
      const h = c.slice(0, -2);
      if (!(h in t))
        if (Array.isArray(i))
          t[h] = Array.from({ length: i.length }, () => ({}));
        else throw new Error(`Value must be a list given an array path ${c}`);
      if (Array.isArray(t[h])) {
        const g = t[h];
        if (Array.isArray(i))
          for (let p = 0; p < g.length; p++) {
            const v = g[p];
            d(v, e.slice(u + 1), i[p]);
          }
        else for (const p of g) d(p, e.slice(u + 1), i);
      }
      return;
    } else if (c.endsWith("[0]")) {
      const h = c.slice(0, -3);
      h in t || (t[h] = [{}]);
      const g = t[h];
      d(g[0], e.slice(u + 1), i);
      return;
    }
    (!t[c] || typeof t[c] != "object") && (t[c] = {}), (t = t[c]);
  }
  const s = e[e.length - 1],
    a = t[s];
  if (a !== void 0) {
    if (!i || (typeof i == "object" && Object.keys(i).length === 0) || i === a)
      return;
    if (
      typeof a == "object" &&
      typeof i == "object" &&
      a !== null &&
      i !== null
    )
      Object.assign(a, i);
    else throw new Error(`Cannot set value for an existing key. Key: ${s}`);
  } else
    s === "_self" && typeof i == "object" && i !== null && !Array.isArray(i)
      ? Object.assign(t, i)
      : (t[s] = i);
}
function f(t, e, i = void 0) {
  try {
    if (e.length === 1 && e[0] === "_self") return t;
    for (let s = 0; s < e.length; s++) {
      if (typeof t != "object" || t === null) return i;
      const a = e[s];
      if (a.endsWith("[]")) {
        const u = a.slice(0, -2);
        if (u in t) {
          const c = t[u];
          return Array.isArray(c) ? c.map((h) => f(h, e.slice(s + 1), i)) : i;
        } else return i;
      } else t = t[a];
    }
    return t;
  } catch (s) {
    if (s instanceof TypeError) return i;
    throw s;
  }
}
function NC(t, e) {
  for (const [i, s] of Object.entries(e)) {
    const a = i.split("."),
      u = s.split("."),
      c = new Set();
    let h = -1;
    for (let g = 0; g < a.length; g++)
      if (a[g] === "*") {
        h = g;
        break;
      }
    if (h !== -1 && u.length > h)
      for (let g = h; g < u.length; g++) {
        const p = u[g];
        p !== "*" && !p.endsWith("[]") && !p.endsWith("[0]") && c.add(p);
      }
    uf(t, a, u, 0, c);
  }
}
function uf(t, e, i, s, a) {
  if (s >= e.length || typeof t != "object" || t === null) return;
  const u = e[s];
  if (u.endsWith("[]")) {
    const c = u.slice(0, -2),
      h = t;
    if (c in h && Array.isArray(h[c]))
      for (const g of h[c]) uf(g, e, i, s + 1, a);
  } else if (u === "*") {
    if (typeof t == "object" && t !== null && !Array.isArray(t)) {
      const c = t,
        h = Object.keys(c).filter((p) => !p.startsWith("_") && !a.has(p)),
        g = {};
      for (const p of h) g[p] = c[p];
      for (const [p, v] of Object.entries(g)) {
        const T = [];
        for (const S of i.slice(s)) S === "*" ? T.push(p) : T.push(S);
        d(c, T, v);
      }
      for (const p of h) delete c[p];
    }
  } else {
    const c = t;
    u in c && uf(c[u], e, i, s + 1, a);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function qf(t) {
  if (typeof t != "string") throw new Error("fromImageBytes must be a string");
  return t;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function bC(t) {
  const e = {},
    i = f(t, ["operationName"]);
  i != null && d(e, ["operationName"], i);
  const s = f(t, ["resourceName"]);
  return s != null && d(e, ["_url", "resourceName"], s), e;
}
function DC(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["name"], i);
  const s = f(t, ["metadata"]);
  s != null && d(e, ["metadata"], s);
  const a = f(t, ["done"]);
  a != null && d(e, ["done"], a);
  const u = f(t, ["error"]);
  u != null && d(e, ["error"], u);
  const c = f(t, ["response", "generateVideoResponse"]);
  return c != null && d(e, ["response"], UC(c)), e;
}
function IC(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["name"], i);
  const s = f(t, ["metadata"]);
  s != null && d(e, ["metadata"], s);
  const a = f(t, ["done"]);
  a != null && d(e, ["done"], a);
  const u = f(t, ["error"]);
  u != null && d(e, ["error"], u);
  const c = f(t, ["response"]);
  return c != null && d(e, ["response"], LC(c)), e;
}
function UC(t) {
  const e = {},
    i = f(t, ["generatedSamples"]);
  if (i != null) {
    let u = i;
    Array.isArray(u) && (u = u.map((c) => VC(c))), d(e, ["generatedVideos"], u);
  }
  const s = f(t, ["raiMediaFilteredCount"]);
  s != null && d(e, ["raiMediaFilteredCount"], s);
  const a = f(t, ["raiMediaFilteredReasons"]);
  return a != null && d(e, ["raiMediaFilteredReasons"], a), e;
}
function LC(t) {
  const e = {},
    i = f(t, ["videos"]);
  if (i != null) {
    let u = i;
    Array.isArray(u) && (u = u.map((c) => PC(c))), d(e, ["generatedVideos"], u);
  }
  const s = f(t, ["raiMediaFilteredCount"]);
  s != null && d(e, ["raiMediaFilteredCount"], s);
  const a = f(t, ["raiMediaFilteredReasons"]);
  return a != null && d(e, ["raiMediaFilteredReasons"], a), e;
}
function VC(t) {
  const e = {},
    i = f(t, ["video"]);
  return i != null && d(e, ["video"], qC(i)), e;
}
function PC(t) {
  const e = {},
    i = f(t, ["_self"]);
  return i != null && d(e, ["video"], OC(i)), e;
}
function HC(t) {
  const e = {},
    i = f(t, ["operationName"]);
  return i != null && d(e, ["_url", "operationName"], i), e;
}
function GC(t) {
  const e = {},
    i = f(t, ["operationName"]);
  return i != null && d(e, ["_url", "operationName"], i), e;
}
function kC(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["name"], i);
  const s = f(t, ["metadata"]);
  s != null && d(e, ["metadata"], s);
  const a = f(t, ["done"]);
  a != null && d(e, ["done"], a);
  const u = f(t, ["error"]);
  u != null && d(e, ["error"], u);
  const c = f(t, ["response"]);
  return c != null && d(e, ["response"], BC(c)), e;
}
function BC(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["parent"]);
  s != null && d(e, ["parent"], s);
  const a = f(t, ["documentName"]);
  return a != null && d(e, ["documentName"], a), e;
}
function K0(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["name"], i);
  const s = f(t, ["metadata"]);
  s != null && d(e, ["metadata"], s);
  const a = f(t, ["done"]);
  a != null && d(e, ["done"], a);
  const u = f(t, ["error"]);
  u != null && d(e, ["error"], u);
  const c = f(t, ["response"]);
  return c != null && d(e, ["response"], zC(c)), e;
}
function zC(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["parent"]);
  s != null && d(e, ["parent"], s);
  const a = f(t, ["documentName"]);
  return a != null && d(e, ["documentName"], a), e;
}
function qC(t) {
  const e = {},
    i = f(t, ["uri"]);
  i != null && d(e, ["uri"], i);
  const s = f(t, ["encodedVideo"]);
  s != null && d(e, ["videoBytes"], qf(s));
  const a = f(t, ["encoding"]);
  return a != null && d(e, ["mimeType"], a), e;
}
function OC(t) {
  const e = {},
    i = f(t, ["gcsUri"]);
  i != null && d(e, ["uri"], i);
  const s = f(t, ["bytesBase64Encoded"]);
  s != null && d(e, ["videoBytes"], qf(s));
  const a = f(t, ["mimeType"]);
  return a != null && d(e, ["mimeType"], a), e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ var qg;
(function (t) {
  (t.OUTCOME_UNSPECIFIED = "OUTCOME_UNSPECIFIED"),
    (t.OUTCOME_OK = "OUTCOME_OK"),
    (t.OUTCOME_FAILED = "OUTCOME_FAILED"),
    (t.OUTCOME_DEADLINE_EXCEEDED = "OUTCOME_DEADLINE_EXCEEDED");
})(qg || (qg = {}));
var Og;
(function (t) {
  (t.LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED"), (t.PYTHON = "PYTHON");
})(Og || (Og = {}));
var Fg;
(function (t) {
  (t.SCHEDULING_UNSPECIFIED = "SCHEDULING_UNSPECIFIED"),
    (t.SILENT = "SILENT"),
    (t.WHEN_IDLE = "WHEN_IDLE"),
    (t.INTERRUPT = "INTERRUPT");
})(Fg || (Fg = {}));
var fi;
(function (t) {
  (t.TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"),
    (t.STRING = "STRING"),
    (t.NUMBER = "NUMBER"),
    (t.INTEGER = "INTEGER"),
    (t.BOOLEAN = "BOOLEAN"),
    (t.ARRAY = "ARRAY"),
    (t.OBJECT = "OBJECT"),
    (t.NULL = "NULL");
})(fi || (fi = {}));
var Yg;
(function (t) {
  (t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED"), (t.MODE_DYNAMIC = "MODE_DYNAMIC");
})(Yg || (Yg = {}));
var Jg;
(function (t) {
  (t.API_SPEC_UNSPECIFIED = "API_SPEC_UNSPECIFIED"),
    (t.SIMPLE_SEARCH = "SIMPLE_SEARCH"),
    (t.ELASTIC_SEARCH = "ELASTIC_SEARCH");
})(Jg || (Jg = {}));
var Kg;
(function (t) {
  (t.AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED"),
    (t.NO_AUTH = "NO_AUTH"),
    (t.API_KEY_AUTH = "API_KEY_AUTH"),
    (t.HTTP_BASIC_AUTH = "HTTP_BASIC_AUTH"),
    (t.GOOGLE_SERVICE_ACCOUNT_AUTH = "GOOGLE_SERVICE_ACCOUNT_AUTH"),
    (t.OAUTH = "OAUTH"),
    (t.OIDC_AUTH = "OIDC_AUTH");
})(Kg || (Kg = {}));
var Xg;
(function (t) {
  (t.HTTP_IN_UNSPECIFIED = "HTTP_IN_UNSPECIFIED"),
    (t.HTTP_IN_QUERY = "HTTP_IN_QUERY"),
    (t.HTTP_IN_HEADER = "HTTP_IN_HEADER"),
    (t.HTTP_IN_PATH = "HTTP_IN_PATH"),
    (t.HTTP_IN_BODY = "HTTP_IN_BODY"),
    (t.HTTP_IN_COOKIE = "HTTP_IN_COOKIE");
})(Xg || (Xg = {}));
var Qg;
(function (t) {
  (t.PHISH_BLOCK_THRESHOLD_UNSPECIFIED = "PHISH_BLOCK_THRESHOLD_UNSPECIFIED"),
    (t.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE"),
    (t.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE"),
    (t.BLOCK_HIGH_AND_ABOVE = "BLOCK_HIGH_AND_ABOVE"),
    (t.BLOCK_HIGHER_AND_ABOVE = "BLOCK_HIGHER_AND_ABOVE"),
    (t.BLOCK_VERY_HIGH_AND_ABOVE = "BLOCK_VERY_HIGH_AND_ABOVE"),
    (t.BLOCK_ONLY_EXTREMELY_HIGH = "BLOCK_ONLY_EXTREMELY_HIGH");
})(Qg || (Qg = {}));
var Zg;
(function (t) {
  (t.THINKING_LEVEL_UNSPECIFIED = "THINKING_LEVEL_UNSPECIFIED"),
    (t.LOW = "LOW"),
    (t.MEDIUM = "MEDIUM"),
    (t.HIGH = "HIGH"),
    (t.MINIMAL = "MINIMAL");
})(Zg || (Zg = {}));
var $g;
(function (t) {
  (t.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED"),
    (t.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT"),
    (t.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH"),
    (t.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT"),
    (t.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT"),
    (t.HARM_CATEGORY_CIVIC_INTEGRITY = "HARM_CATEGORY_CIVIC_INTEGRITY"),
    (t.HARM_CATEGORY_IMAGE_HATE = "HARM_CATEGORY_IMAGE_HATE"),
    (t.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT =
      "HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT"),
    (t.HARM_CATEGORY_IMAGE_HARASSMENT = "HARM_CATEGORY_IMAGE_HARASSMENT"),
    (t.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT =
      "HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT"),
    (t.HARM_CATEGORY_JAILBREAK = "HARM_CATEGORY_JAILBREAK");
})($g || ($g = {}));
var Wg;
(function (t) {
  (t.HARM_BLOCK_METHOD_UNSPECIFIED = "HARM_BLOCK_METHOD_UNSPECIFIED"),
    (t.SEVERITY = "SEVERITY"),
    (t.PROBABILITY = "PROBABILITY");
})(Wg || (Wg = {}));
var jg;
(function (t) {
  (t.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED"),
    (t.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE"),
    (t.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE"),
    (t.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH"),
    (t.BLOCK_NONE = "BLOCK_NONE"),
    (t.OFF = "OFF");
})(jg || (jg = {}));
var ey;
(function (t) {
  (t.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED"),
    (t.STOP = "STOP"),
    (t.MAX_TOKENS = "MAX_TOKENS"),
    (t.SAFETY = "SAFETY"),
    (t.RECITATION = "RECITATION"),
    (t.LANGUAGE = "LANGUAGE"),
    (t.OTHER = "OTHER"),
    (t.BLOCKLIST = "BLOCKLIST"),
    (t.PROHIBITED_CONTENT = "PROHIBITED_CONTENT"),
    (t.SPII = "SPII"),
    (t.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL"),
    (t.IMAGE_SAFETY = "IMAGE_SAFETY"),
    (t.UNEXPECTED_TOOL_CALL = "UNEXPECTED_TOOL_CALL"),
    (t.IMAGE_PROHIBITED_CONTENT = "IMAGE_PROHIBITED_CONTENT"),
    (t.NO_IMAGE = "NO_IMAGE"),
    (t.IMAGE_RECITATION = "IMAGE_RECITATION"),
    (t.IMAGE_OTHER = "IMAGE_OTHER");
})(ey || (ey = {}));
var ty;
(function (t) {
  (t.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED"),
    (t.NEGLIGIBLE = "NEGLIGIBLE"),
    (t.LOW = "LOW"),
    (t.MEDIUM = "MEDIUM"),
    (t.HIGH = "HIGH");
})(ty || (ty = {}));
var ny;
(function (t) {
  (t.HARM_SEVERITY_UNSPECIFIED = "HARM_SEVERITY_UNSPECIFIED"),
    (t.HARM_SEVERITY_NEGLIGIBLE = "HARM_SEVERITY_NEGLIGIBLE"),
    (t.HARM_SEVERITY_LOW = "HARM_SEVERITY_LOW"),
    (t.HARM_SEVERITY_MEDIUM = "HARM_SEVERITY_MEDIUM"),
    (t.HARM_SEVERITY_HIGH = "HARM_SEVERITY_HIGH");
})(ny || (ny = {}));
var iy;
(function (t) {
  (t.URL_RETRIEVAL_STATUS_UNSPECIFIED = "URL_RETRIEVAL_STATUS_UNSPECIFIED"),
    (t.URL_RETRIEVAL_STATUS_SUCCESS = "URL_RETRIEVAL_STATUS_SUCCESS"),
    (t.URL_RETRIEVAL_STATUS_ERROR = "URL_RETRIEVAL_STATUS_ERROR"),
    (t.URL_RETRIEVAL_STATUS_PAYWALL = "URL_RETRIEVAL_STATUS_PAYWALL"),
    (t.URL_RETRIEVAL_STATUS_UNSAFE = "URL_RETRIEVAL_STATUS_UNSAFE");
})(iy || (iy = {}));
var oy;
(function (t) {
  (t.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED"),
    (t.SAFETY = "SAFETY"),
    (t.OTHER = "OTHER"),
    (t.BLOCKLIST = "BLOCKLIST"),
    (t.PROHIBITED_CONTENT = "PROHIBITED_CONTENT"),
    (t.IMAGE_SAFETY = "IMAGE_SAFETY"),
    (t.MODEL_ARMOR = "MODEL_ARMOR"),
    (t.JAILBREAK = "JAILBREAK");
})(oy || (oy = {}));
var sy;
(function (t) {
  (t.TRAFFIC_TYPE_UNSPECIFIED = "TRAFFIC_TYPE_UNSPECIFIED"),
    (t.ON_DEMAND = "ON_DEMAND"),
    (t.PROVISIONED_THROUGHPUT = "PROVISIONED_THROUGHPUT");
})(sy || (sy = {}));
var Ja;
(function (t) {
  (t.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED"),
    (t.TEXT = "TEXT"),
    (t.IMAGE = "IMAGE"),
    (t.AUDIO = "AUDIO");
})(Ja || (Ja = {}));
var ly;
(function (t) {
  (t.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED"),
    (t.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW"),
    (t.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM"),
    (t.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH");
})(ly || (ly = {}));
var ay;
(function (t) {
  (t.TUNING_MODE_UNSPECIFIED = "TUNING_MODE_UNSPECIFIED"),
    (t.TUNING_MODE_FULL = "TUNING_MODE_FULL"),
    (t.TUNING_MODE_PEFT_ADAPTER = "TUNING_MODE_PEFT_ADAPTER");
})(ay || (ay = {}));
var ry;
(function (t) {
  (t.ADAPTER_SIZE_UNSPECIFIED = "ADAPTER_SIZE_UNSPECIFIED"),
    (t.ADAPTER_SIZE_ONE = "ADAPTER_SIZE_ONE"),
    (t.ADAPTER_SIZE_TWO = "ADAPTER_SIZE_TWO"),
    (t.ADAPTER_SIZE_FOUR = "ADAPTER_SIZE_FOUR"),
    (t.ADAPTER_SIZE_EIGHT = "ADAPTER_SIZE_EIGHT"),
    (t.ADAPTER_SIZE_SIXTEEN = "ADAPTER_SIZE_SIXTEEN"),
    (t.ADAPTER_SIZE_THIRTY_TWO = "ADAPTER_SIZE_THIRTY_TWO");
})(ry || (ry = {}));
var cf;
(function (t) {
  (t.JOB_STATE_UNSPECIFIED = "JOB_STATE_UNSPECIFIED"),
    (t.JOB_STATE_QUEUED = "JOB_STATE_QUEUED"),
    (t.JOB_STATE_PENDING = "JOB_STATE_PENDING"),
    (t.JOB_STATE_RUNNING = "JOB_STATE_RUNNING"),
    (t.JOB_STATE_SUCCEEDED = "JOB_STATE_SUCCEEDED"),
    (t.JOB_STATE_FAILED = "JOB_STATE_FAILED"),
    (t.JOB_STATE_CANCELLING = "JOB_STATE_CANCELLING"),
    (t.JOB_STATE_CANCELLED = "JOB_STATE_CANCELLED"),
    (t.JOB_STATE_PAUSED = "JOB_STATE_PAUSED"),
    (t.JOB_STATE_EXPIRED = "JOB_STATE_EXPIRED"),
    (t.JOB_STATE_UPDATING = "JOB_STATE_UPDATING"),
    (t.JOB_STATE_PARTIALLY_SUCCEEDED = "JOB_STATE_PARTIALLY_SUCCEEDED");
})(cf || (cf = {}));
var uy;
(function (t) {
  (t.TUNING_TASK_UNSPECIFIED = "TUNING_TASK_UNSPECIFIED"),
    (t.TUNING_TASK_I2V = "TUNING_TASK_I2V"),
    (t.TUNING_TASK_T2V = "TUNING_TASK_T2V"),
    (t.TUNING_TASK_R2V = "TUNING_TASK_R2V");
})(uy || (uy = {}));
var cy;
(function (t) {
  (t.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED"),
    (t.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW"),
    (t.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM"),
    (t.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH"),
    (t.MEDIA_RESOLUTION_ULTRA_HIGH = "MEDIA_RESOLUTION_ULTRA_HIGH");
})(cy || (cy = {}));
var fy;
(function (t) {
  (t.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED =
    "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED"),
    (t.PRIORITIZE_QUALITY = "PRIORITIZE_QUALITY"),
    (t.BALANCED = "BALANCED"),
    (t.PRIORITIZE_COST = "PRIORITIZE_COST");
})(fy || (fy = {}));
var dy;
(function (t) {
  (t.UNSPECIFIED = "UNSPECIFIED"),
    (t.BLOCKING = "BLOCKING"),
    (t.NON_BLOCKING = "NON_BLOCKING");
})(dy || (dy = {}));
var hy;
(function (t) {
  (t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED"), (t.MODE_DYNAMIC = "MODE_DYNAMIC");
})(hy || (hy = {}));
var py;
(function (t) {
  (t.ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED"),
    (t.ENVIRONMENT_BROWSER = "ENVIRONMENT_BROWSER");
})(py || (py = {}));
var my;
(function (t) {
  (t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED"),
    (t.AUTO = "AUTO"),
    (t.ANY = "ANY"),
    (t.NONE = "NONE"),
    (t.VALIDATED = "VALIDATED");
})(my || (my = {}));
var gy;
(function (t) {
  (t.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE"),
    (t.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE"),
    (t.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH"),
    (t.BLOCK_NONE = "BLOCK_NONE");
})(gy || (gy = {}));
var yy;
(function (t) {
  (t.DONT_ALLOW = "DONT_ALLOW"),
    (t.ALLOW_ADULT = "ALLOW_ADULT"),
    (t.ALLOW_ALL = "ALLOW_ALL");
})(yy || (yy = {}));
var vy;
(function (t) {
  (t.auto = "auto"),
    (t.en = "en"),
    (t.ja = "ja"),
    (t.ko = "ko"),
    (t.hi = "hi"),
    (t.zh = "zh"),
    (t.pt = "pt"),
    (t.es = "es");
})(vy || (vy = {}));
var Ty;
(function (t) {
  (t.MASK_MODE_DEFAULT = "MASK_MODE_DEFAULT"),
    (t.MASK_MODE_USER_PROVIDED = "MASK_MODE_USER_PROVIDED"),
    (t.MASK_MODE_BACKGROUND = "MASK_MODE_BACKGROUND"),
    (t.MASK_MODE_FOREGROUND = "MASK_MODE_FOREGROUND"),
    (t.MASK_MODE_SEMANTIC = "MASK_MODE_SEMANTIC");
})(Ty || (Ty = {}));
var Sy;
(function (t) {
  (t.CONTROL_TYPE_DEFAULT = "CONTROL_TYPE_DEFAULT"),
    (t.CONTROL_TYPE_CANNY = "CONTROL_TYPE_CANNY"),
    (t.CONTROL_TYPE_SCRIBBLE = "CONTROL_TYPE_SCRIBBLE"),
    (t.CONTROL_TYPE_FACE_MESH = "CONTROL_TYPE_FACE_MESH");
})(Sy || (Sy = {}));
var Ey;
(function (t) {
  (t.SUBJECT_TYPE_DEFAULT = "SUBJECT_TYPE_DEFAULT"),
    (t.SUBJECT_TYPE_PERSON = "SUBJECT_TYPE_PERSON"),
    (t.SUBJECT_TYPE_ANIMAL = "SUBJECT_TYPE_ANIMAL"),
    (t.SUBJECT_TYPE_PRODUCT = "SUBJECT_TYPE_PRODUCT");
})(Ey || (Ey = {}));
var _y;
(function (t) {
  (t.EDIT_MODE_DEFAULT = "EDIT_MODE_DEFAULT"),
    (t.EDIT_MODE_INPAINT_REMOVAL = "EDIT_MODE_INPAINT_REMOVAL"),
    (t.EDIT_MODE_INPAINT_INSERTION = "EDIT_MODE_INPAINT_INSERTION"),
    (t.EDIT_MODE_OUTPAINT = "EDIT_MODE_OUTPAINT"),
    (t.EDIT_MODE_CONTROLLED_EDITING = "EDIT_MODE_CONTROLLED_EDITING"),
    (t.EDIT_MODE_STYLE = "EDIT_MODE_STYLE"),
    (t.EDIT_MODE_BGSWAP = "EDIT_MODE_BGSWAP"),
    (t.EDIT_MODE_PRODUCT_IMAGE = "EDIT_MODE_PRODUCT_IMAGE");
})(_y || (_y = {}));
var Ay;
(function (t) {
  (t.FOREGROUND = "FOREGROUND"),
    (t.BACKGROUND = "BACKGROUND"),
    (t.PROMPT = "PROMPT"),
    (t.SEMANTIC = "SEMANTIC"),
    (t.INTERACTIVE = "INTERACTIVE");
})(Ay || (Ay = {}));
var Cy;
(function (t) {
  (t.ASSET = "ASSET"), (t.STYLE = "STYLE");
})(Cy || (Cy = {}));
var xy;
(function (t) {
  (t.INSERT = "INSERT"),
    (t.REMOVE = "REMOVE"),
    (t.REMOVE_STATIC = "REMOVE_STATIC"),
    (t.OUTPAINT = "OUTPAINT");
})(xy || (xy = {}));
var My;
(function (t) {
  (t.OPTIMIZED = "OPTIMIZED"), (t.LOSSLESS = "LOSSLESS");
})(My || (My = {}));
var Ry;
(function (t) {
  (t.SUPERVISED_FINE_TUNING = "SUPERVISED_FINE_TUNING"),
    (t.PREFERENCE_TUNING = "PREFERENCE_TUNING");
})(Ry || (Ry = {}));
var wy;
(function (t) {
  (t.STATE_UNSPECIFIED = "STATE_UNSPECIFIED"),
    (t.STATE_PENDING = "STATE_PENDING"),
    (t.STATE_ACTIVE = "STATE_ACTIVE"),
    (t.STATE_FAILED = "STATE_FAILED");
})(wy || (wy = {}));
var Ny;
(function (t) {
  (t.STATE_UNSPECIFIED = "STATE_UNSPECIFIED"),
    (t.PROCESSING = "PROCESSING"),
    (t.ACTIVE = "ACTIVE"),
    (t.FAILED = "FAILED");
})(Ny || (Ny = {}));
var by;
(function (t) {
  (t.SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED"),
    (t.UPLOADED = "UPLOADED"),
    (t.GENERATED = "GENERATED");
})(by || (by = {}));
var Dy;
(function (t) {
  (t.TURN_COMPLETE_REASON_UNSPECIFIED = "TURN_COMPLETE_REASON_UNSPECIFIED"),
    (t.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL"),
    (t.RESPONSE_REJECTED = "RESPONSE_REJECTED"),
    (t.NEED_MORE_INPUT = "NEED_MORE_INPUT");
})(Dy || (Dy = {}));
var Iy;
(function (t) {
  (t.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED"),
    (t.TEXT = "TEXT"),
    (t.IMAGE = "IMAGE"),
    (t.VIDEO = "VIDEO"),
    (t.AUDIO = "AUDIO"),
    (t.DOCUMENT = "DOCUMENT");
})(Iy || (Iy = {}));
var Uy;
(function (t) {
  (t.VAD_SIGNAL_TYPE_UNSPECIFIED = "VAD_SIGNAL_TYPE_UNSPECIFIED"),
    (t.VAD_SIGNAL_TYPE_SOS = "VAD_SIGNAL_TYPE_SOS"),
    (t.VAD_SIGNAL_TYPE_EOS = "VAD_SIGNAL_TYPE_EOS");
})(Uy || (Uy = {}));
var Ly;
(function (t) {
  (t.START_SENSITIVITY_UNSPECIFIED = "START_SENSITIVITY_UNSPECIFIED"),
    (t.START_SENSITIVITY_HIGH = "START_SENSITIVITY_HIGH"),
    (t.START_SENSITIVITY_LOW = "START_SENSITIVITY_LOW");
})(Ly || (Ly = {}));
var Vy;
(function (t) {
  (t.END_SENSITIVITY_UNSPECIFIED = "END_SENSITIVITY_UNSPECIFIED"),
    (t.END_SENSITIVITY_HIGH = "END_SENSITIVITY_HIGH"),
    (t.END_SENSITIVITY_LOW = "END_SENSITIVITY_LOW");
})(Vy || (Vy = {}));
var Py;
(function (t) {
  (t.ACTIVITY_HANDLING_UNSPECIFIED = "ACTIVITY_HANDLING_UNSPECIFIED"),
    (t.START_OF_ACTIVITY_INTERRUPTS = "START_OF_ACTIVITY_INTERRUPTS"),
    (t.NO_INTERRUPTION = "NO_INTERRUPTION");
})(Py || (Py = {}));
var Hy;
(function (t) {
  (t.TURN_COVERAGE_UNSPECIFIED = "TURN_COVERAGE_UNSPECIFIED"),
    (t.TURN_INCLUDES_ONLY_ACTIVITY = "TURN_INCLUDES_ONLY_ACTIVITY"),
    (t.TURN_INCLUDES_ALL_INPUT = "TURN_INCLUDES_ALL_INPUT");
})(Hy || (Hy = {}));
var Gy;
(function (t) {
  (t.SCALE_UNSPECIFIED = "SCALE_UNSPECIFIED"),
    (t.C_MAJOR_A_MINOR = "C_MAJOR_A_MINOR"),
    (t.D_FLAT_MAJOR_B_FLAT_MINOR = "D_FLAT_MAJOR_B_FLAT_MINOR"),
    (t.D_MAJOR_B_MINOR = "D_MAJOR_B_MINOR"),
    (t.E_FLAT_MAJOR_C_MINOR = "E_FLAT_MAJOR_C_MINOR"),
    (t.E_MAJOR_D_FLAT_MINOR = "E_MAJOR_D_FLAT_MINOR"),
    (t.F_MAJOR_D_MINOR = "F_MAJOR_D_MINOR"),
    (t.G_FLAT_MAJOR_E_FLAT_MINOR = "G_FLAT_MAJOR_E_FLAT_MINOR"),
    (t.G_MAJOR_E_MINOR = "G_MAJOR_E_MINOR"),
    (t.A_FLAT_MAJOR_F_MINOR = "A_FLAT_MAJOR_F_MINOR"),
    (t.A_MAJOR_G_FLAT_MINOR = "A_MAJOR_G_FLAT_MINOR"),
    (t.B_FLAT_MAJOR_G_MINOR = "B_FLAT_MAJOR_G_MINOR"),
    (t.B_MAJOR_A_FLAT_MINOR = "B_MAJOR_A_FLAT_MINOR");
})(Gy || (Gy = {}));
var ky;
(function (t) {
  (t.MUSIC_GENERATION_MODE_UNSPECIFIED = "MUSIC_GENERATION_MODE_UNSPECIFIED"),
    (t.QUALITY = "QUALITY"),
    (t.DIVERSITY = "DIVERSITY"),
    (t.VOCALIZATION = "VOCALIZATION");
})(ky || (ky = {}));
var No;
(function (t) {
  (t.PLAYBACK_CONTROL_UNSPECIFIED = "PLAYBACK_CONTROL_UNSPECIFIED"),
    (t.PLAY = "PLAY"),
    (t.PAUSE = "PAUSE"),
    (t.STOP = "STOP"),
    (t.RESET_CONTEXT = "RESET_CONTEXT");
})(No || (No = {}));
class ff {
  constructor(e) {
    const i = {};
    for (const s of e.headers.entries()) i[s[0]] = s[1];
    (this.headers = i), (this.responseInternal = e);
  }
  json() {
    return this.responseInternal.json();
  }
}
class Bs {
  get text() {
    var e, i, s, a, u, c, h, g;
    if (
      ((a =
        (s =
          (i =
            (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) ===
            null || i === void 0
            ? void 0
            : i.content) === null || s === void 0
          ? void 0
          : s.parts) === null || a === void 0
        ? void 0
        : a.length) === 0
    )
      return;
    this.candidates &&
      this.candidates.length > 1 &&
      console.warn(
        "there are multiple candidates in the response, returning text from the first one."
      );
    let p = "",
      v = !1;
    const T = [];
    for (const S of (g =
      (h =
        (c = (u = this.candidates) === null || u === void 0 ? void 0 : u[0]) ===
          null || c === void 0
          ? void 0
          : c.content) === null || h === void 0
        ? void 0
        : h.parts) !== null && g !== void 0
      ? g
      : []) {
      for (const [_, C] of Object.entries(S))
        _ !== "text" &&
          _ !== "thought" &&
          _ !== "thoughtSignature" &&
          (C !== null || C !== void 0) &&
          T.push(_);
      if (typeof S.text == "string") {
        if (typeof S.thought == "boolean" && S.thought) continue;
        (v = !0), (p += S.text);
      }
    }
    return (
      T.length > 0 &&
        console.warn(
          `there are non-text parts ${T} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`
        ),
      v ? p : void 0
    );
  }
  get data() {
    var e, i, s, a, u, c, h, g;
    if (
      ((a =
        (s =
          (i =
            (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) ===
            null || i === void 0
            ? void 0
            : i.content) === null || s === void 0
          ? void 0
          : s.parts) === null || a === void 0
        ? void 0
        : a.length) === 0
    )
      return;
    this.candidates &&
      this.candidates.length > 1 &&
      console.warn(
        "there are multiple candidates in the response, returning data from the first one."
      );
    let p = "";
    const v = [];
    for (const T of (g =
      (h =
        (c = (u = this.candidates) === null || u === void 0 ? void 0 : u[0]) ===
          null || c === void 0
          ? void 0
          : c.content) === null || h === void 0
        ? void 0
        : h.parts) !== null && g !== void 0
      ? g
      : []) {
      for (const [S, _] of Object.entries(T))
        S !== "inlineData" && (_ !== null || _ !== void 0) && v.push(S);
      T.inlineData &&
        typeof T.inlineData.data == "string" &&
        (p += atob(T.inlineData.data));
    }
    return (
      v.length > 0 &&
        console.warn(
          `there are non-data parts ${v} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`
        ),
      p.length > 0 ? btoa(p) : void 0
    );
  }
  get functionCalls() {
    var e, i, s, a, u, c, h, g;
    if (
      ((a =
        (s =
          (i =
            (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) ===
            null || i === void 0
            ? void 0
            : i.content) === null || s === void 0
          ? void 0
          : s.parts) === null || a === void 0
        ? void 0
        : a.length) === 0
    )
      return;
    this.candidates &&
      this.candidates.length > 1 &&
      console.warn(
        "there are multiple candidates in the response, returning function calls from the first one."
      );
    const p =
      (g =
        (h =
          (c =
            (u = this.candidates) === null || u === void 0 ? void 0 : u[0]) ===
            null || c === void 0
            ? void 0
            : c.content) === null || h === void 0
          ? void 0
          : h.parts) === null || g === void 0
        ? void 0
        : g
            .filter((v) => v.functionCall)
            .map((v) => v.functionCall)
            .filter((v) => v !== void 0);
    if ((p == null ? void 0 : p.length) !== 0) return p;
  }
  get executableCode() {
    var e, i, s, a, u, c, h, g, p;
    if (
      ((a =
        (s =
          (i =
            (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) ===
            null || i === void 0
            ? void 0
            : i.content) === null || s === void 0
          ? void 0
          : s.parts) === null || a === void 0
        ? void 0
        : a.length) === 0
    )
      return;
    this.candidates &&
      this.candidates.length > 1 &&
      console.warn(
        "there are multiple candidates in the response, returning executable code from the first one."
      );
    const v =
      (g =
        (h =
          (c =
            (u = this.candidates) === null || u === void 0 ? void 0 : u[0]) ===
            null || c === void 0
            ? void 0
            : c.content) === null || h === void 0
          ? void 0
          : h.parts) === null || g === void 0
        ? void 0
        : g
            .filter((T) => T.executableCode)
            .map((T) => T.executableCode)
            .filter((T) => T !== void 0);
    if ((v == null ? void 0 : v.length) !== 0)
      return (p = v == null ? void 0 : v[0]) === null || p === void 0
        ? void 0
        : p.code;
  }
  get codeExecutionResult() {
    var e, i, s, a, u, c, h, g, p;
    if (
      ((a =
        (s =
          (i =
            (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) ===
            null || i === void 0
            ? void 0
            : i.content) === null || s === void 0
          ? void 0
          : s.parts) === null || a === void 0
        ? void 0
        : a.length) === 0
    )
      return;
    this.candidates &&
      this.candidates.length > 1 &&
      console.warn(
        "there are multiple candidates in the response, returning code execution result from the first one."
      );
    const v =
      (g =
        (h =
          (c =
            (u = this.candidates) === null || u === void 0 ? void 0 : u[0]) ===
            null || c === void 0
            ? void 0
            : c.content) === null || h === void 0
          ? void 0
          : h.parts) === null || g === void 0
        ? void 0
        : g
            .filter((T) => T.codeExecutionResult)
            .map((T) => T.codeExecutionResult)
            .filter((T) => T !== void 0);
    if ((v == null ? void 0 : v.length) !== 0)
      return (p = v == null ? void 0 : v[0]) === null || p === void 0
        ? void 0
        : p.output;
  }
}
class By {}
class zy {}
class FC {}
class YC {}
class JC {}
class KC {}
class qy {}
class Oy {}
class Fy {}
class XC {}
class Ka {
  _fromAPIResponse({ apiResponse: e, _isVertexAI: i }) {
    const s = new Ka();
    let a;
    const u = e;
    return i ? (a = IC(u)) : (a = DC(u)), Object.assign(s, a), s;
  }
}
class Yy {}
class Jy {}
class Ky {}
class Xy {}
class QC {}
class ZC {}
class $C {}
class Of {
  _fromAPIResponse({ apiResponse: e, _isVertexAI: i }) {
    const s = new Of(),
      u = kC(e);
    return Object.assign(s, u), s;
  }
}
class WC {}
class jC {}
class ex {}
class Qy {}
class tx {
  get text() {
    var e, i, s;
    let a = "",
      u = !1;
    const c = [];
    for (const h of (s =
      (i =
        (e = this.serverContent) === null || e === void 0
          ? void 0
          : e.modelTurn) === null || i === void 0
        ? void 0
        : i.parts) !== null && s !== void 0
      ? s
      : []) {
      for (const [g, p] of Object.entries(h))
        g !== "text" && g !== "thought" && p !== null && c.push(g);
      if (typeof h.text == "string") {
        if (typeof h.thought == "boolean" && h.thought) continue;
        (u = !0), (a += h.text);
      }
    }
    return (
      c.length > 0 &&
        console.warn(
          `there are non-text parts ${c} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`
        ),
      u ? a : void 0
    );
  }
  get data() {
    var e, i, s;
    let a = "";
    const u = [];
    for (const c of (s =
      (i =
        (e = this.serverContent) === null || e === void 0
          ? void 0
          : e.modelTurn) === null || i === void 0
        ? void 0
        : i.parts) !== null && s !== void 0
      ? s
      : []) {
      for (const [h, g] of Object.entries(c))
        h !== "inlineData" && g !== null && u.push(h);
      c.inlineData &&
        typeof c.inlineData.data == "string" &&
        (a += atob(c.inlineData.data));
    }
    return (
      u.length > 0 &&
        console.warn(
          `there are non-data parts ${u} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`
        ),
      a.length > 0 ? btoa(a) : void 0
    );
  }
}
class nx {
  get audioChunk() {
    if (
      this.serverContent &&
      this.serverContent.audioChunks &&
      this.serverContent.audioChunks.length > 0
    )
      return this.serverContent.audioChunks[0];
  }
}
class Ff {
  _fromAPIResponse({ apiResponse: e, _isVertexAI: i }) {
    const s = new Ff(),
      u = K0(e);
    return Object.assign(s, u), s;
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function xe(t, e) {
  if (!e || typeof e != "string")
    throw new Error("model is required and must be a string");
  if (e.includes("..") || e.includes("?") || e.includes("&"))
    throw new Error("invalid model parameter");
  if (t.isVertexAI()) {
    if (
      e.startsWith("publishers/") ||
      e.startsWith("projects/") ||
      e.startsWith("models/")
    )
      return e;
    if (e.indexOf("/") >= 0) {
      const i = e.split("/", 2);
      return `publishers/${i[0]}/models/${i[1]}`;
    } else return `publishers/google/models/${e}`;
  } else
    return e.startsWith("models/") || e.startsWith("tunedModels/")
      ? e
      : `models/${e}`;
}
function X0(t, e) {
  const i = xe(t, e);
  return i
    ? i.startsWith("publishers/") && t.isVertexAI()
      ? `projects/${t.getProject()}/locations/${t.getLocation()}/${i}`
      : i.startsWith("models/") && t.isVertexAI()
      ? `projects/${t.getProject()}/locations/${t.getLocation()}/publishers/google/${i}`
      : i
    : "";
}
function Q0(t) {
  return Array.isArray(t) ? t.map((e) => Xa(e)) : [Xa(t)];
}
function Xa(t) {
  if (typeof t == "object" && t !== null) return t;
  throw new Error(
    `Could not parse input as Blob. Unsupported blob type: ${typeof t}`
  );
}
function Z0(t) {
  const e = Xa(t);
  if (e.mimeType && e.mimeType.startsWith("image/")) return e;
  throw new Error(`Unsupported mime type: ${e.mimeType}`);
}
function $0(t) {
  const e = Xa(t);
  if (e.mimeType && e.mimeType.startsWith("audio/")) return e;
  throw new Error(`Unsupported mime type: ${e.mimeType}`);
}
function Zy(t) {
  if (t == null) throw new Error("PartUnion is required");
  if (typeof t == "object") return t;
  if (typeof t == "string") return { text: t };
  throw new Error(`Unsupported part type: ${typeof t}`);
}
function W0(t) {
  if (t == null || (Array.isArray(t) && t.length === 0))
    throw new Error("PartListUnion is required");
  return Array.isArray(t) ? t.map((e) => Zy(e)) : [Zy(t)];
}
function df(t) {
  return (
    t != null && typeof t == "object" && "parts" in t && Array.isArray(t.parts)
  );
}
function $y(t) {
  return t != null && typeof t == "object" && "functionCall" in t;
}
function Wy(t) {
  return t != null && typeof t == "object" && "functionResponse" in t;
}
function ht(t) {
  if (t == null) throw new Error("ContentUnion is required");
  return df(t) ? t : { role: "user", parts: W0(t) };
}
function Yf(t, e) {
  if (!e) return [];
  if (t.isVertexAI() && Array.isArray(e))
    return e.flatMap((i) => {
      const s = ht(i);
      return s.parts && s.parts.length > 0 && s.parts[0].text !== void 0
        ? [s.parts[0].text]
        : [];
    });
  if (t.isVertexAI()) {
    const i = ht(e);
    return i.parts && i.parts.length > 0 && i.parts[0].text !== void 0
      ? [i.parts[0].text]
      : [];
  }
  return Array.isArray(e) ? e.map((i) => ht(i)) : [ht(e)];
}
function Zt(t) {
  if (t == null || (Array.isArray(t) && t.length === 0))
    throw new Error("contents are required");
  if (!Array.isArray(t)) {
    if ($y(t) || Wy(t))
      throw new Error(
        "To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them"
      );
    return [ht(t)];
  }
  const e = [],
    i = [],
    s = df(t[0]);
  for (const a of t) {
    const u = df(a);
    if (u != s)
      throw new Error(
        "Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them"
      );
    if (u) e.push(a);
    else {
      if ($y(a) || Wy(a))
        throw new Error(
          "To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them"
        );
      i.push(a);
    }
  }
  return s || e.push({ role: "user", parts: W0(i) }), e;
}
function ix(t, e) {
  t.includes("null") && (e.nullable = !0);
  const i = t.filter((s) => s !== "null");
  if (i.length === 1)
    e.type = Object.values(fi).includes(i[0].toUpperCase())
      ? i[0].toUpperCase()
      : fi.TYPE_UNSPECIFIED;
  else {
    e.anyOf = [];
    for (const s of i)
      e.anyOf.push({
        type: Object.values(fi).includes(s.toUpperCase())
          ? s.toUpperCase()
          : fi.TYPE_UNSPECIFIED,
      });
  }
}
function Po(t) {
  const e = {},
    i = ["items"],
    s = ["anyOf"],
    a = ["properties"];
  if (t.type && t.anyOf)
    throw new Error("type and anyOf cannot be both populated.");
  const u = t.anyOf;
  u != null &&
    u.length == 2 &&
    (u[0].type === "null"
      ? ((e.nullable = !0), (t = u[1]))
      : u[1].type === "null" && ((e.nullable = !0), (t = u[0]))),
    t.type instanceof Array && ix(t.type, e);
  for (const [c, h] of Object.entries(t))
    if (h != null)
      if (c == "type") {
        if (h === "null")
          throw new Error(
            "type: null can not be the only possible type for the field."
          );
        if (h instanceof Array) continue;
        e.type = Object.values(fi).includes(h.toUpperCase())
          ? h.toUpperCase()
          : fi.TYPE_UNSPECIFIED;
      } else if (i.includes(c)) e[c] = Po(h);
      else if (s.includes(c)) {
        const g = [];
        for (const p of h) {
          if (p.type == "null") {
            e.nullable = !0;
            continue;
          }
          g.push(Po(p));
        }
        e[c] = g;
      } else if (a.includes(c)) {
        const g = {};
        for (const [p, v] of Object.entries(h)) g[p] = Po(v);
        e[c] = g;
      } else {
        if (c === "additionalProperties") continue;
        e[c] = h;
      }
  return e;
}
function Jf(t) {
  return Po(t);
}
function Kf(t) {
  if (typeof t == "object") return t;
  if (typeof t == "string")
    return { voiceConfig: { prebuiltVoiceConfig: { voiceName: t } } };
  throw new Error(`Unsupported speechConfig type: ${typeof t}`);
}
function Xf(t) {
  if ("multiSpeakerVoiceConfig" in t)
    throw new Error(
      "multiSpeakerVoiceConfig is not supported in the live API."
    );
  return t;
}
function Bo(t) {
  if (t.functionDeclarations)
    for (const e of t.functionDeclarations)
      e.parameters &&
        (Object.keys(e.parameters).includes("$schema")
          ? e.parametersJsonSchema ||
            ((e.parametersJsonSchema = e.parameters), delete e.parameters)
          : (e.parameters = Po(e.parameters))),
        e.response &&
          (Object.keys(e.response).includes("$schema")
            ? e.responseJsonSchema ||
              ((e.responseJsonSchema = e.response), delete e.response)
            : (e.response = Po(e.response)));
  return t;
}
function zo(t) {
  if (t == null) throw new Error("tools is required");
  if (!Array.isArray(t))
    throw new Error("tools is required and must be an array of Tools");
  const e = [];
  for (const i of t) e.push(i);
  return e;
}
function ox(t, e, i, s = 1) {
  const a = !e.startsWith(`${i}/`) && e.split("/").length === s;
  return t.isVertexAI()
    ? e.startsWith("projects/")
      ? e
      : e.startsWith("locations/")
      ? `projects/${t.getProject()}/${e}`
      : e.startsWith(`${i}/`)
      ? `projects/${t.getProject()}/locations/${t.getLocation()}/${e}`
      : a
      ? `projects/${t.getProject()}/locations/${t.getLocation()}/${i}/${e}`
      : e
    : a
    ? `${i}/${e}`
    : e;
}
function Hn(t, e) {
  if (typeof e != "string") throw new Error("name must be a string");
  return ox(t, e, "cachedContents");
}
function j0(t) {
  switch (t) {
    case "STATE_UNSPECIFIED":
      return "JOB_STATE_UNSPECIFIED";
    case "CREATING":
      return "JOB_STATE_RUNNING";
    case "ACTIVE":
      return "JOB_STATE_SUCCEEDED";
    case "FAILED":
      return "JOB_STATE_FAILED";
    default:
      return t;
  }
}
function hi(t) {
  return qf(t);
}
function sx(t) {
  return t != null && typeof t == "object" && "name" in t;
}
function lx(t) {
  return t != null && typeof t == "object" && "video" in t;
}
function ax(t) {
  return t != null && typeof t == "object" && "uri" in t;
}
function eT(t) {
  var e;
  let i;
  if (
    (sx(t) && (i = t.name),
    !(ax(t) && ((i = t.uri), i === void 0)) &&
      !(
        lx(t) &&
        ((i = (e = t.video) === null || e === void 0 ? void 0 : e.uri),
        i === void 0)
      ))
  ) {
    if ((typeof t == "string" && (i = t), i === void 0))
      throw new Error("Could not extract file name from the provided input.");
    if (i.startsWith("https://")) {
      const a = i.split("files/")[1].match(/[a-z0-9]+/);
      if (a === null)
        throw new Error(`Could not extract file name from URI ${i}`);
      i = a[0];
    } else i.startsWith("files/") && (i = i.split("files/")[1]);
    return i;
  }
}
function tT(t, e) {
  let i;
  return (
    t.isVertexAI()
      ? (i = e ? "publishers/google/models" : "models")
      : (i = e ? "models" : "tunedModels"),
    i
  );
}
function nT(t) {
  for (const e of ["models", "tunedModels", "publisherModels"])
    if (rx(t, e)) return t[e];
  return [];
}
function rx(t, e) {
  return t !== null && typeof t == "object" && e in t;
}
function ux(t, e = {}) {
  const i = t,
    s = {
      name: i.name,
      description: i.description,
      parametersJsonSchema: i.inputSchema,
    };
  return (
    i.outputSchema && (s.responseJsonSchema = i.outputSchema),
    e.behavior && (s.behavior = e.behavior),
    { functionDeclarations: [s] }
  );
}
function cx(t, e = {}) {
  const i = [],
    s = new Set();
  for (const a of t) {
    const u = a.name;
    if (s.has(u))
      throw new Error(
        `Duplicate function name ${u} found in MCP tools. Please ensure function names are unique.`
      );
    s.add(u);
    const c = ux(a, e);
    c.functionDeclarations && i.push(...c.functionDeclarations);
  }
  return { functionDeclarations: i };
}
function iT(t, e) {
  let i;
  if (typeof e == "string")
    if (t.isVertexAI())
      if (e.startsWith("gs://")) i = { format: "jsonl", gcsUri: [e] };
      else if (e.startsWith("bq://"))
        i = { format: "bigquery", bigqueryUri: e };
      else throw new Error(`Unsupported string source for Vertex AI: ${e}`);
    else if (e.startsWith("files/")) i = { fileName: e };
    else throw new Error(`Unsupported string source for Gemini API: ${e}`);
  else if (Array.isArray(e)) {
    if (t.isVertexAI())
      throw new Error("InlinedRequest[] is not supported in Vertex AI.");
    i = { inlinedRequests: e };
  } else i = e;
  const s = [i.gcsUri, i.bigqueryUri].filter(Boolean).length,
    a = [i.inlinedRequests, i.fileName].filter(Boolean).length;
  if (t.isVertexAI()) {
    if (a > 0 || s !== 1)
      throw new Error(
        "Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI."
      );
  } else if (s > 0 || a !== 1)
    throw new Error(
      "Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API."
    );
  return i;
}
function fx(t) {
  if (typeof t != "string") return t;
  const e = t;
  if (e.startsWith("gs://")) return { format: "jsonl", gcsUri: e };
  if (e.startsWith("bq://")) return { format: "bigquery", bigqueryUri: e };
  throw new Error(`Unsupported destination: ${e}`);
}
function oT(t) {
  if (typeof t != "object" || t === null) return {};
  const e = t,
    i = e.inlinedResponses;
  if (typeof i != "object" || i === null) return t;
  const a = i.inlinedResponses;
  if (!Array.isArray(a) || a.length === 0) return t;
  let u = !1;
  for (const c of a) {
    if (typeof c != "object" || c === null) continue;
    const g = c.response;
    if (typeof g != "object" || g === null) continue;
    if (g.embedding !== void 0) {
      u = !0;
      break;
    }
  }
  return (
    u &&
      ((e.inlinedEmbedContentResponses = e.inlinedResponses),
      delete e.inlinedResponses),
    t
  );
}
function qo(t, e) {
  const i = e;
  if (!t.isVertexAI()) {
    if (/batches\/[^/]+$/.test(i)) return i.split("/").pop();
    throw new Error(`Invalid batch job name: ${i}.`);
  }
  if (/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(i))
    return i.split("/").pop();
  if (/^\d+$/.test(i)) return i;
  throw new Error(`Invalid batch job name: ${i}.`);
}
function sT(t) {
  const e = t;
  return e === "BATCH_STATE_UNSPECIFIED"
    ? "JOB_STATE_UNSPECIFIED"
    : e === "BATCH_STATE_PENDING"
    ? "JOB_STATE_PENDING"
    : e === "BATCH_STATE_RUNNING"
    ? "JOB_STATE_RUNNING"
    : e === "BATCH_STATE_SUCCEEDED"
    ? "JOB_STATE_SUCCEEDED"
    : e === "BATCH_STATE_FAILED"
    ? "JOB_STATE_FAILED"
    : e === "BATCH_STATE_CANCELLED"
    ? "JOB_STATE_CANCELLED"
    : e === "BATCH_STATE_EXPIRED"
    ? "JOB_STATE_EXPIRED"
    : e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function dx(t) {
  const e = {},
    i = f(t, ["responsesFile"]);
  i != null && d(e, ["fileName"], i);
  const s = f(t, ["inlinedResponses", "inlinedResponses"]);
  if (s != null) {
    let u = s;
    Array.isArray(u) && (u = u.map((c) => Jx(c))),
      d(e, ["inlinedResponses"], u);
  }
  const a = f(t, ["inlinedEmbedContentResponses", "inlinedResponses"]);
  if (a != null) {
    let u = a;
    Array.isArray(u) && (u = u.map((c) => c)),
      d(e, ["inlinedEmbedContentResponses"], u);
  }
  return e;
}
function hx(t) {
  const e = {},
    i = f(t, ["predictionsFormat"]);
  i != null && d(e, ["format"], i);
  const s = f(t, ["gcsDestination", "outputUriPrefix"]);
  s != null && d(e, ["gcsUri"], s);
  const a = f(t, ["bigqueryDestination", "outputUri"]);
  return a != null && d(e, ["bigqueryUri"], a), e;
}
function px(t) {
  const e = {},
    i = f(t, ["format"]);
  i != null && d(e, ["predictionsFormat"], i);
  const s = f(t, ["gcsUri"]);
  s != null && d(e, ["gcsDestination", "outputUriPrefix"], s);
  const a = f(t, ["bigqueryUri"]);
  if (
    (a != null && d(e, ["bigqueryDestination", "outputUri"], a),
    f(t, ["fileName"]) !== void 0)
  )
    throw new Error("fileName parameter is not supported in Vertex AI.");
  if (f(t, ["inlinedResponses"]) !== void 0)
    throw new Error(
      "inlinedResponses parameter is not supported in Vertex AI."
    );
  if (f(t, ["inlinedEmbedContentResponses"]) !== void 0)
    throw new Error(
      "inlinedEmbedContentResponses parameter is not supported in Vertex AI."
    );
  return e;
}
function ka(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["name"], i);
  const s = f(t, ["metadata", "displayName"]);
  s != null && d(e, ["displayName"], s);
  const a = f(t, ["metadata", "state"]);
  a != null && d(e, ["state"], sT(a));
  const u = f(t, ["metadata", "createTime"]);
  u != null && d(e, ["createTime"], u);
  const c = f(t, ["metadata", "endTime"]);
  c != null && d(e, ["endTime"], c);
  const h = f(t, ["metadata", "updateTime"]);
  h != null && d(e, ["updateTime"], h);
  const g = f(t, ["metadata", "model"]);
  g != null && d(e, ["model"], g);
  const p = f(t, ["metadata", "output"]);
  return p != null && d(e, ["dest"], dx(oT(p))), e;
}
function hf(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["name"], i);
  const s = f(t, ["displayName"]);
  s != null && d(e, ["displayName"], s);
  const a = f(t, ["state"]);
  a != null && d(e, ["state"], sT(a));
  const u = f(t, ["error"]);
  u != null && d(e, ["error"], u);
  const c = f(t, ["createTime"]);
  c != null && d(e, ["createTime"], c);
  const h = f(t, ["startTime"]);
  h != null && d(e, ["startTime"], h);
  const g = f(t, ["endTime"]);
  g != null && d(e, ["endTime"], g);
  const p = f(t, ["updateTime"]);
  p != null && d(e, ["updateTime"], p);
  const v = f(t, ["model"]);
  v != null && d(e, ["model"], v);
  const T = f(t, ["inputConfig"]);
  T != null && d(e, ["src"], mx(T));
  const S = f(t, ["outputConfig"]);
  S != null && d(e, ["dest"], hx(oT(S)));
  const _ = f(t, ["completionStats"]);
  return _ != null && d(e, ["completionStats"], _), e;
}
function mx(t) {
  const e = {},
    i = f(t, ["instancesFormat"]);
  i != null && d(e, ["format"], i);
  const s = f(t, ["gcsSource", "uris"]);
  s != null && d(e, ["gcsUri"], s);
  const a = f(t, ["bigquerySource", "inputUri"]);
  return a != null && d(e, ["bigqueryUri"], a), e;
}
function gx(t, e) {
  const i = {};
  if (f(e, ["format"]) !== void 0)
    throw new Error("format parameter is not supported in Gemini API.");
  if (f(e, ["gcsUri"]) !== void 0)
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  if (f(e, ["bigqueryUri"]) !== void 0)
    throw new Error("bigqueryUri parameter is not supported in Gemini API.");
  const s = f(e, ["fileName"]);
  s != null && d(i, ["fileName"], s);
  const a = f(e, ["inlinedRequests"]);
  if (a != null) {
    let u = a;
    Array.isArray(u) && (u = u.map((c) => Yx(t, c))),
      d(i, ["requests", "requests"], u);
  }
  return i;
}
function yx(t) {
  const e = {},
    i = f(t, ["format"]);
  i != null && d(e, ["instancesFormat"], i);
  const s = f(t, ["gcsUri"]);
  s != null && d(e, ["gcsSource", "uris"], s);
  const a = f(t, ["bigqueryUri"]);
  if (
    (a != null && d(e, ["bigquerySource", "inputUri"], a),
    f(t, ["fileName"]) !== void 0)
  )
    throw new Error("fileName parameter is not supported in Vertex AI.");
  if (f(t, ["inlinedRequests"]) !== void 0)
    throw new Error("inlinedRequests parameter is not supported in Vertex AI.");
  return e;
}
function vx(t) {
  const e = {},
    i = f(t, ["data"]);
  if ((i != null && d(e, ["data"], i), f(t, ["displayName"]) !== void 0))
    throw new Error("displayName parameter is not supported in Gemini API.");
  const s = f(t, ["mimeType"]);
  return s != null && d(e, ["mimeType"], s), e;
}
function Tx(t, e) {
  const i = {},
    s = f(e, ["name"]);
  return s != null && d(i, ["_url", "name"], qo(t, s)), i;
}
function Sx(t, e) {
  const i = {},
    s = f(e, ["name"]);
  return s != null && d(i, ["_url", "name"], qo(t, s)), i;
}
function Ex(t) {
  const e = {},
    i = f(t, ["content"]);
  i != null && d(e, ["content"], i);
  const s = f(t, ["citationMetadata"]);
  s != null && d(e, ["citationMetadata"], _x(s));
  const a = f(t, ["tokenCount"]);
  a != null && d(e, ["tokenCount"], a);
  const u = f(t, ["finishReason"]);
  u != null && d(e, ["finishReason"], u);
  const c = f(t, ["avgLogprobs"]);
  c != null && d(e, ["avgLogprobs"], c);
  const h = f(t, ["groundingMetadata"]);
  h != null && d(e, ["groundingMetadata"], h);
  const g = f(t, ["index"]);
  g != null && d(e, ["index"], g);
  const p = f(t, ["logprobsResult"]);
  p != null && d(e, ["logprobsResult"], p);
  const v = f(t, ["safetyRatings"]);
  if (v != null) {
    let S = v;
    Array.isArray(S) && (S = S.map((_) => _)), d(e, ["safetyRatings"], S);
  }
  const T = f(t, ["urlContextMetadata"]);
  return T != null && d(e, ["urlContextMetadata"], T), e;
}
function _x(t) {
  const e = {},
    i = f(t, ["citationSources"]);
  if (i != null) {
    let s = i;
    Array.isArray(s) && (s = s.map((a) => a)), d(e, ["citations"], s);
  }
  return e;
}
function lT(t) {
  const e = {},
    i = f(t, ["parts"]);
  if (i != null) {
    let a = i;
    Array.isArray(a) && (a = a.map((u) => jx(u))), d(e, ["parts"], a);
  }
  const s = f(t, ["role"]);
  return s != null && d(e, ["role"], s), e;
}
function Ax(t, e) {
  const i = {},
    s = f(t, ["displayName"]);
  if (
    (e !== void 0 && s != null && d(e, ["batch", "displayName"], s),
    f(t, ["dest"]) !== void 0)
  )
    throw new Error("dest parameter is not supported in Gemini API.");
  return i;
}
function Cx(t, e) {
  const i = {},
    s = f(t, ["displayName"]);
  e !== void 0 && s != null && d(e, ["displayName"], s);
  const a = f(t, ["dest"]);
  return e !== void 0 && a != null && d(e, ["outputConfig"], px(fx(a))), i;
}
function jy(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["src"]);
  a != null && d(i, ["batch", "inputConfig"], gx(t, iT(t, a)));
  const u = f(e, ["config"]);
  return u != null && Ax(u, i), i;
}
function xx(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["model"], xe(t, s));
  const a = f(e, ["src"]);
  a != null && d(i, ["inputConfig"], yx(iT(t, a)));
  const u = f(e, ["config"]);
  return u != null && Cx(u, i), i;
}
function Mx(t, e) {
  const i = {},
    s = f(t, ["displayName"]);
  return e !== void 0 && s != null && d(e, ["batch", "displayName"], s), i;
}
function Rx(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["src"]);
  a != null && d(i, ["batch", "inputConfig"], Lx(t, a));
  const u = f(e, ["config"]);
  return u != null && Mx(u, i), i;
}
function wx(t, e) {
  const i = {},
    s = f(e, ["name"]);
  return s != null && d(i, ["_url", "name"], qo(t, s)), i;
}
function Nx(t, e) {
  const i = {},
    s = f(e, ["name"]);
  return s != null && d(i, ["_url", "name"], qo(t, s)), i;
}
function bx(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["name"]);
  s != null && d(e, ["name"], s);
  const a = f(t, ["done"]);
  a != null && d(e, ["done"], a);
  const u = f(t, ["error"]);
  return u != null && d(e, ["error"], u), e;
}
function Dx(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["name"]);
  s != null && d(e, ["name"], s);
  const a = f(t, ["done"]);
  a != null && d(e, ["done"], a);
  const u = f(t, ["error"]);
  return u != null && d(e, ["error"], u), e;
}
function Ix(t, e) {
  const i = {},
    s = f(e, ["contents"]);
  if (s != null) {
    let u = Yf(t, s);
    Array.isArray(u) && (u = u.map((c) => c)),
      d(i, ["requests[]", "request", "content"], u);
  }
  const a = f(e, ["config"]);
  return (
    a != null &&
      (d(i, ["_self"], Ux(a, i)),
      NC(i, { "requests[].*": "requests[].request.*" })),
    i
  );
}
function Ux(t, e) {
  const i = {},
    s = f(t, ["taskType"]);
  e !== void 0 && s != null && d(e, ["requests[]", "taskType"], s);
  const a = f(t, ["title"]);
  e !== void 0 && a != null && d(e, ["requests[]", "title"], a);
  const u = f(t, ["outputDimensionality"]);
  if (
    (e !== void 0 &&
      u != null &&
      d(e, ["requests[]", "outputDimensionality"], u),
    f(t, ["mimeType"]) !== void 0)
  )
    throw new Error("mimeType parameter is not supported in Gemini API.");
  if (f(t, ["autoTruncate"]) !== void 0)
    throw new Error("autoTruncate parameter is not supported in Gemini API.");
  return i;
}
function Lx(t, e) {
  const i = {},
    s = f(e, ["fileName"]);
  s != null && d(i, ["file_name"], s);
  const a = f(e, ["inlinedRequests"]);
  return a != null && d(i, ["requests"], Ix(t, a)), i;
}
function Vx(t) {
  const e = {};
  if (f(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const i = f(t, ["fileUri"]);
  i != null && d(e, ["fileUri"], i);
  const s = f(t, ["mimeType"]);
  return s != null && d(e, ["mimeType"], s), e;
}
function Px(t) {
  const e = {},
    i = f(t, ["id"]);
  i != null && d(e, ["id"], i);
  const s = f(t, ["args"]);
  s != null && d(e, ["args"], s);
  const a = f(t, ["name"]);
  if ((a != null && d(e, ["name"], a), f(t, ["partialArgs"]) !== void 0))
    throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (f(t, ["willContinue"]) !== void 0)
    throw new Error("willContinue parameter is not supported in Gemini API.");
  return e;
}
function Hx(t) {
  const e = {},
    i = f(t, ["mode"]);
  i != null && d(e, ["mode"], i);
  const s = f(t, ["allowedFunctionNames"]);
  if (
    (s != null && d(e, ["allowedFunctionNames"], s),
    f(t, ["streamFunctionCallArguments"]) !== void 0)
  )
    throw new Error(
      "streamFunctionCallArguments parameter is not supported in Gemini API."
    );
  return e;
}
function Gx(t, e, i) {
  const s = {},
    a = f(e, ["systemInstruction"]);
  i !== void 0 && a != null && d(i, ["systemInstruction"], lT(ht(a)));
  const u = f(e, ["temperature"]);
  u != null && d(s, ["temperature"], u);
  const c = f(e, ["topP"]);
  c != null && d(s, ["topP"], c);
  const h = f(e, ["topK"]);
  h != null && d(s, ["topK"], h);
  const g = f(e, ["candidateCount"]);
  g != null && d(s, ["candidateCount"], g);
  const p = f(e, ["maxOutputTokens"]);
  p != null && d(s, ["maxOutputTokens"], p);
  const v = f(e, ["stopSequences"]);
  v != null && d(s, ["stopSequences"], v);
  const T = f(e, ["responseLogprobs"]);
  T != null && d(s, ["responseLogprobs"], T);
  const S = f(e, ["logprobs"]);
  S != null && d(s, ["logprobs"], S);
  const _ = f(e, ["presencePenalty"]);
  _ != null && d(s, ["presencePenalty"], _);
  const C = f(e, ["frequencyPenalty"]);
  C != null && d(s, ["frequencyPenalty"], C);
  const R = f(e, ["seed"]);
  R != null && d(s, ["seed"], R);
  const M = f(e, ["responseMimeType"]);
  M != null && d(s, ["responseMimeType"], M);
  const b = f(e, ["responseSchema"]);
  b != null && d(s, ["responseSchema"], Jf(b));
  const k = f(e, ["responseJsonSchema"]);
  if (
    (k != null && d(s, ["responseJsonSchema"], k),
    f(e, ["routingConfig"]) !== void 0)
  )
    throw new Error("routingConfig parameter is not supported in Gemini API.");
  if (f(e, ["modelSelectionConfig"]) !== void 0)
    throw new Error(
      "modelSelectionConfig parameter is not supported in Gemini API."
    );
  const P = f(e, ["safetySettings"]);
  if (i !== void 0 && P != null) {
    let Ee = P;
    Array.isArray(Ee) && (Ee = Ee.map((Be) => eM(Be))),
      d(i, ["safetySettings"], Ee);
  }
  const Y = f(e, ["tools"]);
  if (i !== void 0 && Y != null) {
    let Ee = zo(Y);
    Array.isArray(Ee) && (Ee = Ee.map((Be) => nM(Bo(Be)))), d(i, ["tools"], Ee);
  }
  const q = f(e, ["toolConfig"]);
  if (
    (i !== void 0 && q != null && d(i, ["toolConfig"], tM(q)),
    f(e, ["labels"]) !== void 0)
  )
    throw new Error("labels parameter is not supported in Gemini API.");
  const Q = f(e, ["cachedContent"]);
  i !== void 0 && Q != null && d(i, ["cachedContent"], Hn(t, Q));
  const J = f(e, ["responseModalities"]);
  J != null && d(s, ["responseModalities"], J);
  const Z = f(e, ["mediaResolution"]);
  Z != null && d(s, ["mediaResolution"], Z);
  const $ = f(e, ["speechConfig"]);
  if (
    ($ != null && d(s, ["speechConfig"], Kf($)),
    f(e, ["audioTimestamp"]) !== void 0)
  )
    throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  const ae = f(e, ["thinkingConfig"]);
  ae != null && d(s, ["thinkingConfig"], ae);
  const ge = f(e, ["imageConfig"]);
  ge != null && d(s, ["imageConfig"], Fx(ge));
  const Pe = f(e, ["enableEnhancedCivicAnswers"]);
  return Pe != null && d(s, ["enableEnhancedCivicAnswers"], Pe), s;
}
function kx(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["candidates"]);
  if (s != null) {
    let g = s;
    Array.isArray(g) && (g = g.map((p) => Ex(p))), d(e, ["candidates"], g);
  }
  const a = f(t, ["modelVersion"]);
  a != null && d(e, ["modelVersion"], a);
  const u = f(t, ["promptFeedback"]);
  u != null && d(e, ["promptFeedback"], u);
  const c = f(t, ["responseId"]);
  c != null && d(e, ["responseId"], c);
  const h = f(t, ["usageMetadata"]);
  return h != null && d(e, ["usageMetadata"], h), e;
}
function Bx(t, e) {
  const i = {},
    s = f(e, ["name"]);
  return s != null && d(i, ["_url", "name"], qo(t, s)), i;
}
function zx(t, e) {
  const i = {},
    s = f(e, ["name"]);
  return s != null && d(i, ["_url", "name"], qo(t, s)), i;
}
function qx(t) {
  const e = {};
  if (f(t, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const i = f(t, ["enableWidget"]);
  return i != null && d(e, ["enableWidget"], i), e;
}
function Ox(t) {
  const e = {};
  if (f(t, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  if (f(t, ["blockingConfidence"]) !== void 0)
    throw new Error(
      "blockingConfidence parameter is not supported in Gemini API."
    );
  const i = f(t, ["timeRangeFilter"]);
  return i != null && d(e, ["timeRangeFilter"], i), e;
}
function Fx(t) {
  const e = {},
    i = f(t, ["aspectRatio"]);
  i != null && d(e, ["aspectRatio"], i);
  const s = f(t, ["imageSize"]);
  if (
    (s != null && d(e, ["imageSize"], s), f(t, ["outputMimeType"]) !== void 0)
  )
    throw new Error("outputMimeType parameter is not supported in Gemini API.");
  if (f(t, ["outputCompressionQuality"]) !== void 0)
    throw new Error(
      "outputCompressionQuality parameter is not supported in Gemini API."
    );
  return e;
}
function Yx(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["request", "model"], xe(t, s));
  const a = f(e, ["contents"]);
  if (a != null) {
    let h = Zt(a);
    Array.isArray(h) && (h = h.map((g) => lT(g))),
      d(i, ["request", "contents"], h);
  }
  const u = f(e, ["metadata"]);
  u != null && d(i, ["metadata"], u);
  const c = f(e, ["config"]);
  return (
    c != null &&
      d(i, ["request", "generationConfig"], Gx(t, c, f(i, ["request"], {}))),
    i
  );
}
function Jx(t) {
  const e = {},
    i = f(t, ["response"]);
  i != null && d(e, ["response"], kx(i));
  const s = f(t, ["error"]);
  return s != null && d(e, ["error"], s), e;
}
function Kx(t, e) {
  const i = {},
    s = f(t, ["pageSize"]);
  e !== void 0 && s != null && d(e, ["_query", "pageSize"], s);
  const a = f(t, ["pageToken"]);
  if (
    (e !== void 0 && a != null && d(e, ["_query", "pageToken"], a),
    f(t, ["filter"]) !== void 0)
  )
    throw new Error("filter parameter is not supported in Gemini API.");
  return i;
}
function Xx(t, e) {
  const i = {},
    s = f(t, ["pageSize"]);
  e !== void 0 && s != null && d(e, ["_query", "pageSize"], s);
  const a = f(t, ["pageToken"]);
  e !== void 0 && a != null && d(e, ["_query", "pageToken"], a);
  const u = f(t, ["filter"]);
  return e !== void 0 && u != null && d(e, ["_query", "filter"], u), i;
}
function Qx(t) {
  const e = {},
    i = f(t, ["config"]);
  return i != null && Kx(i, e), e;
}
function Zx(t) {
  const e = {},
    i = f(t, ["config"]);
  return i != null && Xx(i, e), e;
}
function $x(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["nextPageToken"]);
  s != null && d(e, ["nextPageToken"], s);
  const a = f(t, ["operations"]);
  if (a != null) {
    let u = a;
    Array.isArray(u) && (u = u.map((c) => ka(c))), d(e, ["batchJobs"], u);
  }
  return e;
}
function Wx(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["nextPageToken"]);
  s != null && d(e, ["nextPageToken"], s);
  const a = f(t, ["batchPredictionJobs"]);
  if (a != null) {
    let u = a;
    Array.isArray(u) && (u = u.map((c) => hf(c))), d(e, ["batchJobs"], u);
  }
  return e;
}
function jx(t) {
  const e = {},
    i = f(t, ["mediaResolution"]);
  i != null && d(e, ["mediaResolution"], i);
  const s = f(t, ["codeExecutionResult"]);
  s != null && d(e, ["codeExecutionResult"], s);
  const a = f(t, ["executableCode"]);
  a != null && d(e, ["executableCode"], a);
  const u = f(t, ["fileData"]);
  u != null && d(e, ["fileData"], Vx(u));
  const c = f(t, ["functionCall"]);
  c != null && d(e, ["functionCall"], Px(c));
  const h = f(t, ["functionResponse"]);
  h != null && d(e, ["functionResponse"], h);
  const g = f(t, ["inlineData"]);
  g != null && d(e, ["inlineData"], vx(g));
  const p = f(t, ["text"]);
  p != null && d(e, ["text"], p);
  const v = f(t, ["thought"]);
  v != null && d(e, ["thought"], v);
  const T = f(t, ["thoughtSignature"]);
  T != null && d(e, ["thoughtSignature"], T);
  const S = f(t, ["videoMetadata"]);
  return S != null && d(e, ["videoMetadata"], S), e;
}
function eM(t) {
  const e = {},
    i = f(t, ["category"]);
  if ((i != null && d(e, ["category"], i), f(t, ["method"]) !== void 0))
    throw new Error("method parameter is not supported in Gemini API.");
  const s = f(t, ["threshold"]);
  return s != null && d(e, ["threshold"], s), e;
}
function tM(t) {
  const e = {},
    i = f(t, ["functionCallingConfig"]);
  i != null && d(e, ["functionCallingConfig"], Hx(i));
  const s = f(t, ["retrievalConfig"]);
  return s != null && d(e, ["retrievalConfig"], s), e;
}
function nM(t) {
  const e = {},
    i = f(t, ["functionDeclarations"]);
  if (i != null) {
    let v = i;
    Array.isArray(v) && (v = v.map((T) => T)),
      d(e, ["functionDeclarations"], v);
  }
  if (f(t, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const s = f(t, ["googleSearchRetrieval"]);
  s != null && d(e, ["googleSearchRetrieval"], s);
  const a = f(t, ["computerUse"]);
  a != null && d(e, ["computerUse"], a);
  const u = f(t, ["fileSearch"]);
  u != null && d(e, ["fileSearch"], u);
  const c = f(t, ["codeExecution"]);
  if (
    (c != null && d(e, ["codeExecution"], c),
    f(t, ["enterpriseWebSearch"]) !== void 0)
  )
    throw new Error(
      "enterpriseWebSearch parameter is not supported in Gemini API."
    );
  const h = f(t, ["googleMaps"]);
  h != null && d(e, ["googleMaps"], qx(h));
  const g = f(t, ["googleSearch"]);
  g != null && d(e, ["googleSearch"], Ox(g));
  const p = f(t, ["urlContext"]);
  return p != null && d(e, ["urlContext"], p), e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ var Vn;
(function (t) {
  (t.PAGED_ITEM_BATCH_JOBS = "batchJobs"),
    (t.PAGED_ITEM_MODELS = "models"),
    (t.PAGED_ITEM_TUNING_JOBS = "tuningJobs"),
    (t.PAGED_ITEM_FILES = "files"),
    (t.PAGED_ITEM_CACHED_CONTENTS = "cachedContents"),
    (t.PAGED_ITEM_FILE_SEARCH_STORES = "fileSearchStores"),
    (t.PAGED_ITEM_DOCUMENTS = "documents");
})(Vn || (Vn = {}));
class zi {
  constructor(e, i, s, a) {
    (this.pageInternal = []),
      (this.paramsInternal = {}),
      (this.requestInternal = i),
      this.init(e, s, a);
  }
  init(e, i, s) {
    var a, u;
    (this.nameInternal = e),
      (this.pageInternal = i[this.nameInternal] || []),
      (this.sdkHttpResponseInternal = i == null ? void 0 : i.sdkHttpResponse),
      (this.idxInternal = 0);
    let c = { config: {} };
    !s || Object.keys(s).length === 0
      ? (c = { config: {} })
      : typeof s == "object"
      ? (c = Object.assign({}, s))
      : (c = s),
      c.config && (c.config.pageToken = i.nextPageToken),
      (this.paramsInternal = c),
      (this.pageInternalSize =
        (u = (a = c.config) === null || a === void 0 ? void 0 : a.pageSize) !==
          null && u !== void 0
          ? u
          : this.pageInternal.length);
  }
  initNextPage(e) {
    this.init(this.nameInternal, e, this.paramsInternal);
  }
  get page() {
    return this.pageInternal;
  }
  get name() {
    return this.nameInternal;
  }
  get pageSize() {
    return this.pageInternalSize;
  }
  get sdkHttpResponse() {
    return this.sdkHttpResponseInternal;
  }
  get params() {
    return this.paramsInternal;
  }
  get pageLength() {
    return this.pageInternal.length;
  }
  getItem(e) {
    return this.pageInternal[e];
  }
  [Symbol.asyncIterator]() {
    return {
      next: async () => {
        if (this.idxInternal >= this.pageLength)
          if (this.hasNextPage()) await this.nextPage();
          else return { value: void 0, done: !0 };
        const e = this.getItem(this.idxInternal);
        return (this.idxInternal += 1), { value: e, done: !1 };
      },
      return: async () => ({ value: void 0, done: !0 }),
    };
  }
  async nextPage() {
    if (!this.hasNextPage()) throw new Error("No more pages to fetch.");
    const e = await this.requestInternal(this.params);
    return this.initNextPage(e), this.page;
  }
  hasNextPage() {
    var e;
    return (
      ((e = this.params.config) === null || e === void 0
        ? void 0
        : e.pageToken) !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class iM extends Pn {
  constructor(e) {
    super(),
      (this.apiClient = e),
      (this.list = async (i = {}) =>
        new zi(
          Vn.PAGED_ITEM_BATCH_JOBS,
          (s) => this.listInternal(s),
          await this.listInternal(i),
          i
        )),
      (this.create = async (i) => (
        this.apiClient.isVertexAI() &&
          (i.config = this.formatDestination(i.src, i.config)),
        this.createInternal(i)
      )),
      (this.createEmbeddings = async (i) => {
        if (
          (console.warn(
            "batches.createEmbeddings() is experimental and may change without notice."
          ),
          this.apiClient.isVertexAI())
        )
          throw new Error(
            "Vertex AI does not support batches.createEmbeddings."
          );
        return this.createEmbeddingsInternal(i);
      });
  }
  createInlinedGenerateContentRequest(e) {
    const i = jy(this.apiClient, e),
      s = i._url,
      a = j("{model}:batchGenerateContent", s),
      h = i.batch.inputConfig.requests,
      g = h.requests,
      p = [];
    for (const v of g) {
      const T = Object.assign({}, v);
      if (T.systemInstruction) {
        const S = T.systemInstruction;
        delete T.systemInstruction;
        const _ = T.request;
        (_.systemInstruction = S), (T.request = _);
      }
      p.push(T);
    }
    return (
      (h.requests = p),
      delete i.config,
      delete i._url,
      delete i._query,
      { path: a, body: i }
    );
  }
  getGcsUri(e) {
    if (typeof e == "string") return e.startsWith("gs://") ? e : void 0;
    if (!Array.isArray(e) && e.gcsUri && e.gcsUri.length > 0)
      return e.gcsUri[0];
  }
  getBigqueryUri(e) {
    if (typeof e == "string") return e.startsWith("bq://") ? e : void 0;
    if (!Array.isArray(e)) return e.bigqueryUri;
  }
  formatDestination(e, i) {
    const s = i ? Object.assign({}, i) : {},
      a = Date.now().toString();
    if (
      (s.displayName || (s.displayName = `genaiBatchJob_${a}`),
      s.dest === void 0)
    ) {
      const u = this.getGcsUri(e),
        c = this.getBigqueryUri(e);
      if (u)
        u.endsWith(".jsonl")
          ? (s.dest = `${u.slice(0, -6)}/dest`)
          : (s.dest = `${u}_dest_${a}`);
      else if (c) s.dest = `${c}_dest_${a}`;
      else
        throw new Error(
          "Unsupported source for Vertex AI: No GCS or BigQuery URI found."
        );
    }
    return s;
  }
  async createInternal(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = xx(this.apiClient, e);
      return (
        (h = j("batchPredictionJobs", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => hf(v))
      );
    } else {
      const p = jy(this.apiClient, e);
      return (
        (h = j("{model}:batchGenerateContent", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => ka(v))
      );
    }
  }
  async createEmbeddingsInternal(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = Rx(this.apiClient, e);
      return (
        (u = j("{model}:asyncBatchEmbedContent", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a.then((g) => ka(g))
      );
    }
  }
  async get(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = zx(this.apiClient, e);
      return (
        (h = j("batchPredictionJobs/{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => hf(v))
      );
    } else {
      const p = Bx(this.apiClient, e);
      return (
        (h = j("batches/{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => ka(v))
      );
    }
  }
  async cancel(e) {
    var i, s, a, u;
    let c = "",
      h = {};
    if (this.apiClient.isVertexAI()) {
      const g = Sx(this.apiClient, e);
      (c = j("batchPredictionJobs/{name}:cancel", g._url)),
        (h = g._query),
        delete g._url,
        delete g._query,
        await this.apiClient.request({
          path: c,
          queryParams: h,
          body: JSON.stringify(g),
          httpMethod: "POST",
          httpOptions:
            (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
          abortSignal:
            (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
        });
    } else {
      const g = Tx(this.apiClient, e);
      (c = j("batches/{name}:cancel", g._url)),
        (h = g._query),
        delete g._url,
        delete g._query,
        await this.apiClient.request({
          path: c,
          queryParams: h,
          body: JSON.stringify(g),
          httpMethod: "POST",
          httpOptions:
            (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
          abortSignal:
            (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
        });
    }
  }
  async listInternal(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = Zx(e);
      return (
        (h = j("batchPredictionJobs", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = Wx(v),
            S = new Qy();
          return Object.assign(S, T), S;
        })
      );
    } else {
      const p = Qx(e);
      return (
        (h = j("batches", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = $x(v),
            S = new Qy();
          return Object.assign(S, T), S;
        })
      );
    }
  }
  async delete(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = Nx(this.apiClient, e);
      return (
        (h = j("batchPredictionJobs/{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "DELETE",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => Dx(v))
      );
    } else {
      const p = wx(this.apiClient, e);
      return (
        (h = j("batches/{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "DELETE",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => bx(v))
      );
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function oM(t) {
  const e = {},
    i = f(t, ["data"]);
  if ((i != null && d(e, ["data"], i), f(t, ["displayName"]) !== void 0))
    throw new Error("displayName parameter is not supported in Gemini API.");
  const s = f(t, ["mimeType"]);
  return s != null && d(e, ["mimeType"], s), e;
}
function ev(t) {
  const e = {},
    i = f(t, ["parts"]);
  if (i != null) {
    let a = i;
    Array.isArray(a) && (a = a.map((u) => RM(u))), d(e, ["parts"], a);
  }
  const s = f(t, ["role"]);
  return s != null && d(e, ["role"], s), e;
}
function sM(t, e) {
  const i = {},
    s = f(t, ["ttl"]);
  e !== void 0 && s != null && d(e, ["ttl"], s);
  const a = f(t, ["expireTime"]);
  e !== void 0 && a != null && d(e, ["expireTime"], a);
  const u = f(t, ["displayName"]);
  e !== void 0 && u != null && d(e, ["displayName"], u);
  const c = f(t, ["contents"]);
  if (e !== void 0 && c != null) {
    let v = Zt(c);
    Array.isArray(v) && (v = v.map((T) => ev(T))), d(e, ["contents"], v);
  }
  const h = f(t, ["systemInstruction"]);
  e !== void 0 && h != null && d(e, ["systemInstruction"], ev(ht(h)));
  const g = f(t, ["tools"]);
  if (e !== void 0 && g != null) {
    let v = g;
    Array.isArray(v) && (v = v.map((T) => NM(T))), d(e, ["tools"], v);
  }
  const p = f(t, ["toolConfig"]);
  if (
    (e !== void 0 && p != null && d(e, ["toolConfig"], wM(p)),
    f(t, ["kmsKeyName"]) !== void 0)
  )
    throw new Error("kmsKeyName parameter is not supported in Gemini API.");
  return i;
}
function lM(t, e) {
  const i = {},
    s = f(t, ["ttl"]);
  e !== void 0 && s != null && d(e, ["ttl"], s);
  const a = f(t, ["expireTime"]);
  e !== void 0 && a != null && d(e, ["expireTime"], a);
  const u = f(t, ["displayName"]);
  e !== void 0 && u != null && d(e, ["displayName"], u);
  const c = f(t, ["contents"]);
  if (e !== void 0 && c != null) {
    let T = Zt(c);
    Array.isArray(T) && (T = T.map((S) => S)), d(e, ["contents"], T);
  }
  const h = f(t, ["systemInstruction"]);
  e !== void 0 && h != null && d(e, ["systemInstruction"], ht(h));
  const g = f(t, ["tools"]);
  if (e !== void 0 && g != null) {
    let T = g;
    Array.isArray(T) && (T = T.map((S) => bM(S))), d(e, ["tools"], T);
  }
  const p = f(t, ["toolConfig"]);
  e !== void 0 && p != null && d(e, ["toolConfig"], p);
  const v = f(t, ["kmsKeyName"]);
  return (
    e !== void 0 && v != null && d(e, ["encryption_spec", "kmsKeyName"], v), i
  );
}
function aM(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["model"], X0(t, s));
  const a = f(e, ["config"]);
  return a != null && sM(a, i), i;
}
function rM(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["model"], X0(t, s));
  const a = f(e, ["config"]);
  return a != null && lM(a, i), i;
}
function uM(t, e) {
  const i = {},
    s = f(e, ["name"]);
  return s != null && d(i, ["_url", "name"], Hn(t, s)), i;
}
function cM(t, e) {
  const i = {},
    s = f(e, ["name"]);
  return s != null && d(i, ["_url", "name"], Hn(t, s)), i;
}
function fM(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  return i != null && d(e, ["sdkHttpResponse"], i), e;
}
function dM(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  return i != null && d(e, ["sdkHttpResponse"], i), e;
}
function hM(t) {
  const e = {};
  if (f(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const i = f(t, ["fileUri"]);
  i != null && d(e, ["fileUri"], i);
  const s = f(t, ["mimeType"]);
  return s != null && d(e, ["mimeType"], s), e;
}
function pM(t) {
  const e = {},
    i = f(t, ["id"]);
  i != null && d(e, ["id"], i);
  const s = f(t, ["args"]);
  s != null && d(e, ["args"], s);
  const a = f(t, ["name"]);
  if ((a != null && d(e, ["name"], a), f(t, ["partialArgs"]) !== void 0))
    throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (f(t, ["willContinue"]) !== void 0)
    throw new Error("willContinue parameter is not supported in Gemini API.");
  return e;
}
function mM(t) {
  const e = {},
    i = f(t, ["mode"]);
  i != null && d(e, ["mode"], i);
  const s = f(t, ["allowedFunctionNames"]);
  if (
    (s != null && d(e, ["allowedFunctionNames"], s),
    f(t, ["streamFunctionCallArguments"]) !== void 0)
  )
    throw new Error(
      "streamFunctionCallArguments parameter is not supported in Gemini API."
    );
  return e;
}
function gM(t) {
  const e = {};
  if (f(t, ["behavior"]) !== void 0)
    throw new Error("behavior parameter is not supported in Vertex AI.");
  const i = f(t, ["description"]);
  i != null && d(e, ["description"], i);
  const s = f(t, ["name"]);
  s != null && d(e, ["name"], s);
  const a = f(t, ["parameters"]);
  a != null && d(e, ["parameters"], a);
  const u = f(t, ["parametersJsonSchema"]);
  u != null && d(e, ["parametersJsonSchema"], u);
  const c = f(t, ["response"]);
  c != null && d(e, ["response"], c);
  const h = f(t, ["responseJsonSchema"]);
  return h != null && d(e, ["responseJsonSchema"], h), e;
}
function yM(t, e) {
  const i = {},
    s = f(e, ["name"]);
  return s != null && d(i, ["_url", "name"], Hn(t, s)), i;
}
function vM(t, e) {
  const i = {},
    s = f(e, ["name"]);
  return s != null && d(i, ["_url", "name"], Hn(t, s)), i;
}
function TM(t) {
  const e = {};
  if (f(t, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const i = f(t, ["enableWidget"]);
  return i != null && d(e, ["enableWidget"], i), e;
}
function SM(t) {
  const e = {};
  if (f(t, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  if (f(t, ["blockingConfidence"]) !== void 0)
    throw new Error(
      "blockingConfidence parameter is not supported in Gemini API."
    );
  const i = f(t, ["timeRangeFilter"]);
  return i != null && d(e, ["timeRangeFilter"], i), e;
}
function EM(t, e) {
  const i = {},
    s = f(t, ["pageSize"]);
  e !== void 0 && s != null && d(e, ["_query", "pageSize"], s);
  const a = f(t, ["pageToken"]);
  return e !== void 0 && a != null && d(e, ["_query", "pageToken"], a), i;
}
function _M(t, e) {
  const i = {},
    s = f(t, ["pageSize"]);
  e !== void 0 && s != null && d(e, ["_query", "pageSize"], s);
  const a = f(t, ["pageToken"]);
  return e !== void 0 && a != null && d(e, ["_query", "pageToken"], a), i;
}
function AM(t) {
  const e = {},
    i = f(t, ["config"]);
  return i != null && EM(i, e), e;
}
function CM(t) {
  const e = {},
    i = f(t, ["config"]);
  return i != null && _M(i, e), e;
}
function xM(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["nextPageToken"]);
  s != null && d(e, ["nextPageToken"], s);
  const a = f(t, ["cachedContents"]);
  if (a != null) {
    let u = a;
    Array.isArray(u) && (u = u.map((c) => c)), d(e, ["cachedContents"], u);
  }
  return e;
}
function MM(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["nextPageToken"]);
  s != null && d(e, ["nextPageToken"], s);
  const a = f(t, ["cachedContents"]);
  if (a != null) {
    let u = a;
    Array.isArray(u) && (u = u.map((c) => c)), d(e, ["cachedContents"], u);
  }
  return e;
}
function RM(t) {
  const e = {},
    i = f(t, ["mediaResolution"]);
  i != null && d(e, ["mediaResolution"], i);
  const s = f(t, ["codeExecutionResult"]);
  s != null && d(e, ["codeExecutionResult"], s);
  const a = f(t, ["executableCode"]);
  a != null && d(e, ["executableCode"], a);
  const u = f(t, ["fileData"]);
  u != null && d(e, ["fileData"], hM(u));
  const c = f(t, ["functionCall"]);
  c != null && d(e, ["functionCall"], pM(c));
  const h = f(t, ["functionResponse"]);
  h != null && d(e, ["functionResponse"], h);
  const g = f(t, ["inlineData"]);
  g != null && d(e, ["inlineData"], oM(g));
  const p = f(t, ["text"]);
  p != null && d(e, ["text"], p);
  const v = f(t, ["thought"]);
  v != null && d(e, ["thought"], v);
  const T = f(t, ["thoughtSignature"]);
  T != null && d(e, ["thoughtSignature"], T);
  const S = f(t, ["videoMetadata"]);
  return S != null && d(e, ["videoMetadata"], S), e;
}
function wM(t) {
  const e = {},
    i = f(t, ["functionCallingConfig"]);
  i != null && d(e, ["functionCallingConfig"], mM(i));
  const s = f(t, ["retrievalConfig"]);
  return s != null && d(e, ["retrievalConfig"], s), e;
}
function NM(t) {
  const e = {},
    i = f(t, ["functionDeclarations"]);
  if (i != null) {
    let v = i;
    Array.isArray(v) && (v = v.map((T) => T)),
      d(e, ["functionDeclarations"], v);
  }
  if (f(t, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const s = f(t, ["googleSearchRetrieval"]);
  s != null && d(e, ["googleSearchRetrieval"], s);
  const a = f(t, ["computerUse"]);
  a != null && d(e, ["computerUse"], a);
  const u = f(t, ["fileSearch"]);
  u != null && d(e, ["fileSearch"], u);
  const c = f(t, ["codeExecution"]);
  if (
    (c != null && d(e, ["codeExecution"], c),
    f(t, ["enterpriseWebSearch"]) !== void 0)
  )
    throw new Error(
      "enterpriseWebSearch parameter is not supported in Gemini API."
    );
  const h = f(t, ["googleMaps"]);
  h != null && d(e, ["googleMaps"], TM(h));
  const g = f(t, ["googleSearch"]);
  g != null && d(e, ["googleSearch"], SM(g));
  const p = f(t, ["urlContext"]);
  return p != null && d(e, ["urlContext"], p), e;
}
function bM(t) {
  const e = {},
    i = f(t, ["functionDeclarations"]);
  if (i != null) {
    let T = i;
    Array.isArray(T) && (T = T.map((S) => gM(S))),
      d(e, ["functionDeclarations"], T);
  }
  const s = f(t, ["retrieval"]);
  s != null && d(e, ["retrieval"], s);
  const a = f(t, ["googleSearchRetrieval"]);
  a != null && d(e, ["googleSearchRetrieval"], a);
  const u = f(t, ["computerUse"]);
  if ((u != null && d(e, ["computerUse"], u), f(t, ["fileSearch"]) !== void 0))
    throw new Error("fileSearch parameter is not supported in Vertex AI.");
  const c = f(t, ["codeExecution"]);
  c != null && d(e, ["codeExecution"], c);
  const h = f(t, ["enterpriseWebSearch"]);
  h != null && d(e, ["enterpriseWebSearch"], h);
  const g = f(t, ["googleMaps"]);
  g != null && d(e, ["googleMaps"], g);
  const p = f(t, ["googleSearch"]);
  p != null && d(e, ["googleSearch"], p);
  const v = f(t, ["urlContext"]);
  return v != null && d(e, ["urlContext"], v), e;
}
function DM(t, e) {
  const i = {},
    s = f(t, ["ttl"]);
  e !== void 0 && s != null && d(e, ["ttl"], s);
  const a = f(t, ["expireTime"]);
  return e !== void 0 && a != null && d(e, ["expireTime"], a), i;
}
function IM(t, e) {
  const i = {},
    s = f(t, ["ttl"]);
  e !== void 0 && s != null && d(e, ["ttl"], s);
  const a = f(t, ["expireTime"]);
  return e !== void 0 && a != null && d(e, ["expireTime"], a), i;
}
function UM(t, e) {
  const i = {},
    s = f(e, ["name"]);
  s != null && d(i, ["_url", "name"], Hn(t, s));
  const a = f(e, ["config"]);
  return a != null && DM(a, i), i;
}
function LM(t, e) {
  const i = {},
    s = f(e, ["name"]);
  s != null && d(i, ["_url", "name"], Hn(t, s));
  const a = f(e, ["config"]);
  return a != null && IM(a, i), i;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class VM extends Pn {
  constructor(e) {
    super(),
      (this.apiClient = e),
      (this.list = async (i = {}) =>
        new zi(
          Vn.PAGED_ITEM_CACHED_CONTENTS,
          (s) => this.listInternal(s),
          await this.listInternal(i),
          i
        ));
  }
  async create(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = rM(this.apiClient, e);
      return (
        (h = j("cachedContents", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => v)
      );
    } else {
      const p = aM(this.apiClient, e);
      return (
        (h = j("cachedContents", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => v)
      );
    }
  }
  async get(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = vM(this.apiClient, e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => v)
      );
    } else {
      const p = yM(this.apiClient, e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => v)
      );
    }
  }
  async delete(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = cM(this.apiClient, e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "DELETE",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = dM(v),
            S = new Ky();
          return Object.assign(S, T), S;
        })
      );
    } else {
      const p = uM(this.apiClient, e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "DELETE",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = fM(v),
            S = new Ky();
          return Object.assign(S, T), S;
        })
      );
    }
  }
  async update(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = LM(this.apiClient, e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "PATCH",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => v)
      );
    } else {
      const p = UM(this.apiClient, e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "PATCH",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => v)
      );
    }
  }
  async listInternal(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = CM(e);
      return (
        (h = j("cachedContents", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = MM(v),
            S = new Xy();
          return Object.assign(S, T), S;
        })
      );
    } else {
      const p = AM(e);
      return (
        (h = j("cachedContents", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = xM(v),
            S = new Xy();
          return Object.assign(S, T), S;
        })
      );
    }
  }
}
function Qa(t, e) {
  var i = {};
  for (var s in t)
    Object.prototype.hasOwnProperty.call(t, s) &&
      e.indexOf(s) < 0 &&
      (i[s] = t[s]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, s = Object.getOwnPropertySymbols(t); a < s.length; a++)
      e.indexOf(s[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, s[a]) &&
        (i[s[a]] = t[s[a]]);
  return i;
}
function tv(t) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    i = e && t[e],
    s = 0;
  if (i) return i.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (
          t && s >= t.length && (t = void 0), { value: t && t[s++], done: !t }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function re(t) {
  return this instanceof re ? ((this.v = t), this) : new re(t);
}
function nn(t, e, i) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = i.apply(t, e || []),
    a,
    u = [];
  return (
    (a = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype
    )),
    h("next"),
    h("throw"),
    h("return", c),
    (a[Symbol.asyncIterator] = function () {
      return this;
    }),
    a
  );
  function c(_) {
    return function (C) {
      return Promise.resolve(C).then(_, T);
    };
  }
  function h(_, C) {
    s[_] &&
      ((a[_] = function (R) {
        return new Promise(function (M, b) {
          u.push([_, R, M, b]) > 1 || g(_, R);
        });
      }),
      C && (a[_] = C(a[_])));
  }
  function g(_, C) {
    try {
      p(s[_](C));
    } catch (R) {
      S(u[0][3], R);
    }
  }
  function p(_) {
    _.value instanceof re
      ? Promise.resolve(_.value.v).then(v, T)
      : S(u[0][2], _);
  }
  function v(_) {
    g("next", _);
  }
  function T(_) {
    g("throw", _);
  }
  function S(_, C) {
    _(C), u.shift(), u.length && g(u[0][0], u[0][1]);
  }
}
function on(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator],
    i;
  return e
    ? e.call(t)
    : ((t = typeof tv == "function" ? tv(t) : t[Symbol.iterator]()),
      (i = {}),
      s("next"),
      s("throw"),
      s("return"),
      (i[Symbol.asyncIterator] = function () {
        return this;
      }),
      i);
  function s(u) {
    i[u] =
      t[u] &&
      function (c) {
        return new Promise(function (h, g) {
          (c = t[u](c)), a(h, g, c.done, c.value);
        });
      };
  }
  function a(u, c, h, g) {
    Promise.resolve(g).then(function (p) {
      u({ value: p, done: h });
    }, c);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function PM(t) {
  var e;
  if (t.candidates == null || t.candidates.length === 0) return !1;
  const i = (e = t.candidates[0]) === null || e === void 0 ? void 0 : e.content;
  return i === void 0 ? !1 : aT(i);
}
function aT(t) {
  if (t.parts === void 0 || t.parts.length === 0) return !1;
  for (const e of t.parts)
    if (e === void 0 || Object.keys(e).length === 0) return !1;
  return !0;
}
function HM(t) {
  if (t.length !== 0) {
    for (const e of t)
      if (e.role !== "user" && e.role !== "model")
        throw new Error(`Role must be user or model, but got ${e.role}.`);
  }
}
function nv(t) {
  if (t === void 0 || t.length === 0) return [];
  const e = [],
    i = t.length;
  let s = 0;
  for (; s < i; )
    if (t[s].role === "user") e.push(t[s]), s++;
    else {
      const a = [];
      let u = !0;
      for (; s < i && t[s].role === "model"; )
        a.push(t[s]), u && !aT(t[s]) && (u = !1), s++;
      u ? e.push(...a) : e.pop();
    }
  return e;
}
class GM {
  constructor(e, i) {
    (this.modelsModule = e), (this.apiClient = i);
  }
  create(e) {
    return new kM(
      this.apiClient,
      this.modelsModule,
      e.model,
      e.config,
      structuredClone(e.history)
    );
  }
}
class kM {
  constructor(e, i, s, a = {}, u = []) {
    (this.apiClient = e),
      (this.modelsModule = i),
      (this.model = s),
      (this.config = a),
      (this.history = u),
      (this.sendPromise = Promise.resolve()),
      HM(u);
  }
  async sendMessage(e) {
    var i;
    await this.sendPromise;
    const s = ht(e.message),
      a = this.modelsModule.generateContent({
        model: this.model,
        contents: this.getHistory(!0).concat(s),
        config: (i = e.config) !== null && i !== void 0 ? i : this.config,
      });
    return (
      (this.sendPromise = (async () => {
        var u, c, h;
        const g = await a,
          p =
            (c =
              (u = g.candidates) === null || u === void 0 ? void 0 : u[0]) ===
              null || c === void 0
              ? void 0
              : c.content,
          v = g.automaticFunctionCallingHistory,
          T = this.getHistory(!0).length;
        let S = [];
        v != null && (S = (h = v.slice(T)) !== null && h !== void 0 ? h : []);
        const _ = p ? [p] : [];
        this.recordHistory(s, _, S);
      })()),
      await this.sendPromise.catch(() => {
        this.sendPromise = Promise.resolve();
      }),
      a
    );
  }
  async sendMessageStream(e) {
    var i;
    await this.sendPromise;
    const s = ht(e.message),
      a = this.modelsModule.generateContentStream({
        model: this.model,
        contents: this.getHistory(!0).concat(s),
        config: (i = e.config) !== null && i !== void 0 ? i : this.config,
      });
    this.sendPromise = a.then(() => {}).catch(() => {});
    const u = await a;
    return this.processStreamResponse(u, s);
  }
  getHistory(e = !1) {
    const i = e ? nv(this.history) : this.history;
    return structuredClone(i);
  }
  processStreamResponse(e, i) {
    return nn(this, arguments, function* () {
      var a, u, c, h, g, p;
      const v = [];
      try {
        for (
          var T = !0, S = on(e), _;
          (_ = yield re(S.next())), (a = _.done), !a;
          T = !0
        ) {
          (h = _.value), (T = !1);
          const C = h;
          if (PM(C)) {
            const R =
              (p =
                (g = C.candidates) === null || g === void 0 ? void 0 : g[0]) ===
                null || p === void 0
                ? void 0
                : p.content;
            R !== void 0 && v.push(R);
          }
          yield yield re(C);
        }
      } catch (C) {
        u = { error: C };
      } finally {
        try {
          !T && !a && (c = S.return) && (yield re(c.call(S)));
        } finally {
          if (u) throw u.error;
        }
      }
      this.recordHistory(i, v);
    });
  }
  recordHistory(e, i, s) {
    let a = [];
    i.length > 0 && i.every((u) => u.role !== void 0)
      ? (a = i)
      : a.push({ role: "model", parts: [] }),
      s && s.length > 0 ? this.history.push(...nv(s)) : this.history.push(e),
      this.history.push(...a);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class lr extends Error {
  constructor(e) {
    super(e.message),
      (this.name = "ApiError"),
      (this.status = e.status),
      Object.setPrototypeOf(this, lr.prototype);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function BM(t) {
  const e = {},
    i = f(t, ["file"]);
  return i != null && d(e, ["file"], i), e;
}
function zM(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  return i != null && d(e, ["sdkHttpResponse"], i), e;
}
function qM(t) {
  const e = {},
    i = f(t, ["name"]);
  return i != null && d(e, ["_url", "file"], eT(i)), e;
}
function OM(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  return i != null && d(e, ["sdkHttpResponse"], i), e;
}
function FM(t) {
  const e = {},
    i = f(t, ["name"]);
  return i != null && d(e, ["_url", "file"], eT(i)), e;
}
function YM(t, e) {
  const i = {},
    s = f(t, ["pageSize"]);
  e !== void 0 && s != null && d(e, ["_query", "pageSize"], s);
  const a = f(t, ["pageToken"]);
  return e !== void 0 && a != null && d(e, ["_query", "pageToken"], a), i;
}
function JM(t) {
  const e = {},
    i = f(t, ["config"]);
  return i != null && YM(i, e), e;
}
function KM(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["nextPageToken"]);
  s != null && d(e, ["nextPageToken"], s);
  const a = f(t, ["files"]);
  if (a != null) {
    let u = a;
    Array.isArray(u) && (u = u.map((c) => c)), d(e, ["files"], u);
  }
  return e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class XM extends Pn {
  constructor(e) {
    super(),
      (this.apiClient = e),
      (this.list = async (i = {}) =>
        new zi(
          Vn.PAGED_ITEM_FILES,
          (s) => this.listInternal(s),
          await this.listInternal(i),
          i
        ));
  }
  async upload(e) {
    if (this.apiClient.isVertexAI())
      throw new Error(
        "Vertex AI does not support uploading files. You can share files through a GCS bucket."
      );
    return this.apiClient.uploadFile(e.file, e.config).then((i) => i);
  }
  async download(e) {
    await this.apiClient.downloadFile(e);
  }
  async listInternal(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = JM(e);
      return (
        (u = j("files", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) =>
            g.json().then((p) => {
              const v = p;
              return (v.sdkHttpResponse = { headers: g.headers }), v;
            })
          )),
        a.then((g) => {
          const p = KM(g),
            v = new WC();
          return Object.assign(v, p), v;
        })
      );
    }
  }
  async createInternal(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = BM(e);
      return (
        (u = j("upload/v1beta/files", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a.then((g) => {
          const p = zM(g),
            v = new jC();
          return Object.assign(v, p), v;
        })
      );
    }
  }
  async get(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = FM(e);
      return (
        (u = j("files/{file}", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a.then((g) => g)
      );
    }
  }
  async delete(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = qM(e);
      return (
        (u = j("files/{file}", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "DELETE",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) =>
            g.json().then((p) => {
              const v = p;
              return (v.sdkHttpResponse = { headers: g.headers }), v;
            })
          )),
        a.then((g) => {
          const p = OM(g),
            v = new ex();
          return Object.assign(v, p), v;
        })
      );
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function Ba(t) {
  const e = {},
    i = f(t, ["data"]);
  if ((i != null && d(e, ["data"], i), f(t, ["displayName"]) !== void 0))
    throw new Error("displayName parameter is not supported in Gemini API.");
  const s = f(t, ["mimeType"]);
  return s != null && d(e, ["mimeType"], s), e;
}
function QM(t) {
  const e = {},
    i = f(t, ["parts"]);
  if (i != null) {
    let a = i;
    Array.isArray(a) && (a = a.map((u) => fR(u))), d(e, ["parts"], a);
  }
  const s = f(t, ["role"]);
  return s != null && d(e, ["role"], s), e;
}
function ZM(t) {
  const e = {};
  if (f(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const i = f(t, ["fileUri"]);
  i != null && d(e, ["fileUri"], i);
  const s = f(t, ["mimeType"]);
  return s != null && d(e, ["mimeType"], s), e;
}
function $M(t) {
  const e = {},
    i = f(t, ["id"]);
  i != null && d(e, ["id"], i);
  const s = f(t, ["args"]);
  s != null && d(e, ["args"], s);
  const a = f(t, ["name"]);
  if ((a != null && d(e, ["name"], a), f(t, ["partialArgs"]) !== void 0))
    throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (f(t, ["willContinue"]) !== void 0)
    throw new Error("willContinue parameter is not supported in Gemini API.");
  return e;
}
function WM(t) {
  const e = {};
  if (f(t, ["behavior"]) !== void 0)
    throw new Error("behavior parameter is not supported in Vertex AI.");
  const i = f(t, ["description"]);
  i != null && d(e, ["description"], i);
  const s = f(t, ["name"]);
  s != null && d(e, ["name"], s);
  const a = f(t, ["parameters"]);
  a != null && d(e, ["parameters"], a);
  const u = f(t, ["parametersJsonSchema"]);
  u != null && d(e, ["parametersJsonSchema"], u);
  const c = f(t, ["response"]);
  c != null && d(e, ["response"], c);
  const h = f(t, ["responseJsonSchema"]);
  return h != null && d(e, ["responseJsonSchema"], h), e;
}
function jM(t) {
  const e = {},
    i = f(t, ["modelSelectionConfig"]);
  i != null && d(e, ["modelConfig"], i);
  const s = f(t, ["responseJsonSchema"]);
  s != null && d(e, ["responseJsonSchema"], s);
  const a = f(t, ["audioTimestamp"]);
  a != null && d(e, ["audioTimestamp"], a);
  const u = f(t, ["candidateCount"]);
  u != null && d(e, ["candidateCount"], u);
  const c = f(t, ["enableAffectiveDialog"]);
  c != null && d(e, ["enableAffectiveDialog"], c);
  const h = f(t, ["frequencyPenalty"]);
  h != null && d(e, ["frequencyPenalty"], h);
  const g = f(t, ["logprobs"]);
  g != null && d(e, ["logprobs"], g);
  const p = f(t, ["maxOutputTokens"]);
  p != null && d(e, ["maxOutputTokens"], p);
  const v = f(t, ["mediaResolution"]);
  v != null && d(e, ["mediaResolution"], v);
  const T = f(t, ["presencePenalty"]);
  T != null && d(e, ["presencePenalty"], T);
  const S = f(t, ["responseLogprobs"]);
  S != null && d(e, ["responseLogprobs"], S);
  const _ = f(t, ["responseMimeType"]);
  _ != null && d(e, ["responseMimeType"], _);
  const C = f(t, ["responseModalities"]);
  C != null && d(e, ["responseModalities"], C);
  const R = f(t, ["responseSchema"]);
  R != null && d(e, ["responseSchema"], R);
  const M = f(t, ["routingConfig"]);
  M != null && d(e, ["routingConfig"], M);
  const b = f(t, ["seed"]);
  b != null && d(e, ["seed"], b);
  const k = f(t, ["speechConfig"]);
  k != null && d(e, ["speechConfig"], k);
  const P = f(t, ["stopSequences"]);
  P != null && d(e, ["stopSequences"], P);
  const Y = f(t, ["temperature"]);
  Y != null && d(e, ["temperature"], Y);
  const q = f(t, ["thinkingConfig"]);
  q != null && d(e, ["thinkingConfig"], q);
  const Q = f(t, ["topK"]);
  Q != null && d(e, ["topK"], Q);
  const J = f(t, ["topP"]);
  if (
    (J != null && d(e, ["topP"], J),
    f(t, ["enableEnhancedCivicAnswers"]) !== void 0)
  )
    throw new Error(
      "enableEnhancedCivicAnswers parameter is not supported in Vertex AI."
    );
  return e;
}
function eR(t) {
  const e = {};
  if (f(t, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const i = f(t, ["enableWidget"]);
  return i != null && d(e, ["enableWidget"], i), e;
}
function tR(t) {
  const e = {};
  if (f(t, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  if (f(t, ["blockingConfidence"]) !== void 0)
    throw new Error(
      "blockingConfidence parameter is not supported in Gemini API."
    );
  const i = f(t, ["timeRangeFilter"]);
  return i != null && d(e, ["timeRangeFilter"], i), e;
}
function nR(t, e) {
  const i = {},
    s = f(t, ["generationConfig"]);
  e !== void 0 && s != null && d(e, ["setup", "generationConfig"], s);
  const a = f(t, ["responseModalities"]);
  e !== void 0 &&
    a != null &&
    d(e, ["setup", "generationConfig", "responseModalities"], a);
  const u = f(t, ["temperature"]);
  e !== void 0 &&
    u != null &&
    d(e, ["setup", "generationConfig", "temperature"], u);
  const c = f(t, ["topP"]);
  e !== void 0 && c != null && d(e, ["setup", "generationConfig", "topP"], c);
  const h = f(t, ["topK"]);
  e !== void 0 && h != null && d(e, ["setup", "generationConfig", "topK"], h);
  const g = f(t, ["maxOutputTokens"]);
  e !== void 0 &&
    g != null &&
    d(e, ["setup", "generationConfig", "maxOutputTokens"], g);
  const p = f(t, ["mediaResolution"]);
  e !== void 0 &&
    p != null &&
    d(e, ["setup", "generationConfig", "mediaResolution"], p);
  const v = f(t, ["seed"]);
  e !== void 0 && v != null && d(e, ["setup", "generationConfig", "seed"], v);
  const T = f(t, ["speechConfig"]);
  e !== void 0 &&
    T != null &&
    d(e, ["setup", "generationConfig", "speechConfig"], Xf(T));
  const S = f(t, ["thinkingConfig"]);
  e !== void 0 &&
    S != null &&
    d(e, ["setup", "generationConfig", "thinkingConfig"], S);
  const _ = f(t, ["enableAffectiveDialog"]);
  e !== void 0 &&
    _ != null &&
    d(e, ["setup", "generationConfig", "enableAffectiveDialog"], _);
  const C = f(t, ["systemInstruction"]);
  e !== void 0 && C != null && d(e, ["setup", "systemInstruction"], QM(ht(C)));
  const R = f(t, ["tools"]);
  if (e !== void 0 && R != null) {
    let Q = zo(R);
    Array.isArray(Q) && (Q = Q.map((J) => hR(Bo(J)))),
      d(e, ["setup", "tools"], Q);
  }
  const M = f(t, ["sessionResumption"]);
  e !== void 0 && M != null && d(e, ["setup", "sessionResumption"], dR(M));
  const b = f(t, ["inputAudioTranscription"]);
  e !== void 0 && b != null && d(e, ["setup", "inputAudioTranscription"], b);
  const k = f(t, ["outputAudioTranscription"]);
  e !== void 0 && k != null && d(e, ["setup", "outputAudioTranscription"], k);
  const P = f(t, ["realtimeInputConfig"]);
  e !== void 0 && P != null && d(e, ["setup", "realtimeInputConfig"], P);
  const Y = f(t, ["contextWindowCompression"]);
  e !== void 0 && Y != null && d(e, ["setup", "contextWindowCompression"], Y);
  const q = f(t, ["proactivity"]);
  if (
    (e !== void 0 && q != null && d(e, ["setup", "proactivity"], q),
    f(t, ["explicitVadSignal"]) !== void 0)
  )
    throw new Error(
      "explicitVadSignal parameter is not supported in Gemini API."
    );
  return i;
}
function iR(t, e) {
  const i = {},
    s = f(t, ["generationConfig"]);
  e !== void 0 && s != null && d(e, ["setup", "generationConfig"], jM(s));
  const a = f(t, ["responseModalities"]);
  e !== void 0 &&
    a != null &&
    d(e, ["setup", "generationConfig", "responseModalities"], a);
  const u = f(t, ["temperature"]);
  e !== void 0 &&
    u != null &&
    d(e, ["setup", "generationConfig", "temperature"], u);
  const c = f(t, ["topP"]);
  e !== void 0 && c != null && d(e, ["setup", "generationConfig", "topP"], c);
  const h = f(t, ["topK"]);
  e !== void 0 && h != null && d(e, ["setup", "generationConfig", "topK"], h);
  const g = f(t, ["maxOutputTokens"]);
  e !== void 0 &&
    g != null &&
    d(e, ["setup", "generationConfig", "maxOutputTokens"], g);
  const p = f(t, ["mediaResolution"]);
  e !== void 0 &&
    p != null &&
    d(e, ["setup", "generationConfig", "mediaResolution"], p);
  const v = f(t, ["seed"]);
  e !== void 0 && v != null && d(e, ["setup", "generationConfig", "seed"], v);
  const T = f(t, ["speechConfig"]);
  e !== void 0 &&
    T != null &&
    d(e, ["setup", "generationConfig", "speechConfig"], Xf(T));
  const S = f(t, ["thinkingConfig"]);
  e !== void 0 &&
    S != null &&
    d(e, ["setup", "generationConfig", "thinkingConfig"], S);
  const _ = f(t, ["enableAffectiveDialog"]);
  e !== void 0 &&
    _ != null &&
    d(e, ["setup", "generationConfig", "enableAffectiveDialog"], _);
  const C = f(t, ["systemInstruction"]);
  e !== void 0 && C != null && d(e, ["setup", "systemInstruction"], ht(C));
  const R = f(t, ["tools"]);
  if (e !== void 0 && R != null) {
    let J = zo(R);
    Array.isArray(J) && (J = J.map((Z) => pR(Bo(Z)))),
      d(e, ["setup", "tools"], J);
  }
  const M = f(t, ["sessionResumption"]);
  e !== void 0 && M != null && d(e, ["setup", "sessionResumption"], M);
  const b = f(t, ["inputAudioTranscription"]);
  e !== void 0 && b != null && d(e, ["setup", "inputAudioTranscription"], b);
  const k = f(t, ["outputAudioTranscription"]);
  e !== void 0 && k != null && d(e, ["setup", "outputAudioTranscription"], k);
  const P = f(t, ["realtimeInputConfig"]);
  e !== void 0 && P != null && d(e, ["setup", "realtimeInputConfig"], P);
  const Y = f(t, ["contextWindowCompression"]);
  e !== void 0 && Y != null && d(e, ["setup", "contextWindowCompression"], Y);
  const q = f(t, ["proactivity"]);
  e !== void 0 && q != null && d(e, ["setup", "proactivity"], q);
  const Q = f(t, ["explicitVadSignal"]);
  return (
    e !== void 0 && Q != null && d(e, ["setup", "explicitVadSignal"], Q), i
  );
}
function oR(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["setup", "model"], xe(t, s));
  const a = f(e, ["config"]);
  return a != null && d(i, ["config"], nR(a, i)), i;
}
function sR(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["setup", "model"], xe(t, s));
  const a = f(e, ["config"]);
  return a != null && d(i, ["config"], iR(a, i)), i;
}
function lR(t) {
  const e = {},
    i = f(t, ["musicGenerationConfig"]);
  return i != null && d(e, ["musicGenerationConfig"], i), e;
}
function aR(t) {
  const e = {},
    i = f(t, ["weightedPrompts"]);
  if (i != null) {
    let s = i;
    Array.isArray(s) && (s = s.map((a) => a)), d(e, ["weightedPrompts"], s);
  }
  return e;
}
function rR(t) {
  const e = {},
    i = f(t, ["media"]);
  if (i != null) {
    let p = Q0(i);
    Array.isArray(p) && (p = p.map((v) => Ba(v))), d(e, ["mediaChunks"], p);
  }
  const s = f(t, ["audio"]);
  s != null && d(e, ["audio"], Ba($0(s)));
  const a = f(t, ["audioStreamEnd"]);
  a != null && d(e, ["audioStreamEnd"], a);
  const u = f(t, ["video"]);
  u != null && d(e, ["video"], Ba(Z0(u)));
  const c = f(t, ["text"]);
  c != null && d(e, ["text"], c);
  const h = f(t, ["activityStart"]);
  h != null && d(e, ["activityStart"], h);
  const g = f(t, ["activityEnd"]);
  return g != null && d(e, ["activityEnd"], g), e;
}
function uR(t) {
  const e = {},
    i = f(t, ["media"]);
  if (i != null) {
    let p = Q0(i);
    Array.isArray(p) && (p = p.map((v) => v)), d(e, ["mediaChunks"], p);
  }
  const s = f(t, ["audio"]);
  s != null && d(e, ["audio"], $0(s));
  const a = f(t, ["audioStreamEnd"]);
  a != null && d(e, ["audioStreamEnd"], a);
  const u = f(t, ["video"]);
  u != null && d(e, ["video"], Z0(u));
  const c = f(t, ["text"]);
  c != null && d(e, ["text"], c);
  const h = f(t, ["activityStart"]);
  h != null && d(e, ["activityStart"], h);
  const g = f(t, ["activityEnd"]);
  return g != null && d(e, ["activityEnd"], g), e;
}
function cR(t) {
  const e = {},
    i = f(t, ["setupComplete"]);
  i != null && d(e, ["setupComplete"], i);
  const s = f(t, ["serverContent"]);
  s != null && d(e, ["serverContent"], s);
  const a = f(t, ["toolCall"]);
  a != null && d(e, ["toolCall"], a);
  const u = f(t, ["toolCallCancellation"]);
  u != null && d(e, ["toolCallCancellation"], u);
  const c = f(t, ["usageMetadata"]);
  c != null && d(e, ["usageMetadata"], mR(c));
  const h = f(t, ["goAway"]);
  h != null && d(e, ["goAway"], h);
  const g = f(t, ["sessionResumptionUpdate"]);
  g != null && d(e, ["sessionResumptionUpdate"], g);
  const p = f(t, ["voiceActivityDetectionSignal"]);
  return p != null && d(e, ["voiceActivityDetectionSignal"], p), e;
}
function fR(t) {
  const e = {},
    i = f(t, ["mediaResolution"]);
  i != null && d(e, ["mediaResolution"], i);
  const s = f(t, ["codeExecutionResult"]);
  s != null && d(e, ["codeExecutionResult"], s);
  const a = f(t, ["executableCode"]);
  a != null && d(e, ["executableCode"], a);
  const u = f(t, ["fileData"]);
  u != null && d(e, ["fileData"], ZM(u));
  const c = f(t, ["functionCall"]);
  c != null && d(e, ["functionCall"], $M(c));
  const h = f(t, ["functionResponse"]);
  h != null && d(e, ["functionResponse"], h);
  const g = f(t, ["inlineData"]);
  g != null && d(e, ["inlineData"], Ba(g));
  const p = f(t, ["text"]);
  p != null && d(e, ["text"], p);
  const v = f(t, ["thought"]);
  v != null && d(e, ["thought"], v);
  const T = f(t, ["thoughtSignature"]);
  T != null && d(e, ["thoughtSignature"], T);
  const S = f(t, ["videoMetadata"]);
  return S != null && d(e, ["videoMetadata"], S), e;
}
function dR(t) {
  const e = {},
    i = f(t, ["handle"]);
  if ((i != null && d(e, ["handle"], i), f(t, ["transparent"]) !== void 0))
    throw new Error("transparent parameter is not supported in Gemini API.");
  return e;
}
function hR(t) {
  const e = {},
    i = f(t, ["functionDeclarations"]);
  if (i != null) {
    let v = i;
    Array.isArray(v) && (v = v.map((T) => T)),
      d(e, ["functionDeclarations"], v);
  }
  if (f(t, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const s = f(t, ["googleSearchRetrieval"]);
  s != null && d(e, ["googleSearchRetrieval"], s);
  const a = f(t, ["computerUse"]);
  a != null && d(e, ["computerUse"], a);
  const u = f(t, ["fileSearch"]);
  u != null && d(e, ["fileSearch"], u);
  const c = f(t, ["codeExecution"]);
  if (
    (c != null && d(e, ["codeExecution"], c),
    f(t, ["enterpriseWebSearch"]) !== void 0)
  )
    throw new Error(
      "enterpriseWebSearch parameter is not supported in Gemini API."
    );
  const h = f(t, ["googleMaps"]);
  h != null && d(e, ["googleMaps"], eR(h));
  const g = f(t, ["googleSearch"]);
  g != null && d(e, ["googleSearch"], tR(g));
  const p = f(t, ["urlContext"]);
  return p != null && d(e, ["urlContext"], p), e;
}
function pR(t) {
  const e = {},
    i = f(t, ["functionDeclarations"]);
  if (i != null) {
    let T = i;
    Array.isArray(T) && (T = T.map((S) => WM(S))),
      d(e, ["functionDeclarations"], T);
  }
  const s = f(t, ["retrieval"]);
  s != null && d(e, ["retrieval"], s);
  const a = f(t, ["googleSearchRetrieval"]);
  a != null && d(e, ["googleSearchRetrieval"], a);
  const u = f(t, ["computerUse"]);
  if ((u != null && d(e, ["computerUse"], u), f(t, ["fileSearch"]) !== void 0))
    throw new Error("fileSearch parameter is not supported in Vertex AI.");
  const c = f(t, ["codeExecution"]);
  c != null && d(e, ["codeExecution"], c);
  const h = f(t, ["enterpriseWebSearch"]);
  h != null && d(e, ["enterpriseWebSearch"], h);
  const g = f(t, ["googleMaps"]);
  g != null && d(e, ["googleMaps"], g);
  const p = f(t, ["googleSearch"]);
  p != null && d(e, ["googleSearch"], p);
  const v = f(t, ["urlContext"]);
  return v != null && d(e, ["urlContext"], v), e;
}
function mR(t) {
  const e = {},
    i = f(t, ["promptTokenCount"]);
  i != null && d(e, ["promptTokenCount"], i);
  const s = f(t, ["cachedContentTokenCount"]);
  s != null && d(e, ["cachedContentTokenCount"], s);
  const a = f(t, ["candidatesTokenCount"]);
  a != null && d(e, ["responseTokenCount"], a);
  const u = f(t, ["toolUsePromptTokenCount"]);
  u != null && d(e, ["toolUsePromptTokenCount"], u);
  const c = f(t, ["thoughtsTokenCount"]);
  c != null && d(e, ["thoughtsTokenCount"], c);
  const h = f(t, ["totalTokenCount"]);
  h != null && d(e, ["totalTokenCount"], h);
  const g = f(t, ["promptTokensDetails"]);
  if (g != null) {
    let _ = g;
    Array.isArray(_) && (_ = _.map((C) => C)), d(e, ["promptTokensDetails"], _);
  }
  const p = f(t, ["cacheTokensDetails"]);
  if (p != null) {
    let _ = p;
    Array.isArray(_) && (_ = _.map((C) => C)), d(e, ["cacheTokensDetails"], _);
  }
  const v = f(t, ["candidatesTokensDetails"]);
  if (v != null) {
    let _ = v;
    Array.isArray(_) && (_ = _.map((C) => C)),
      d(e, ["responseTokensDetails"], _);
  }
  const T = f(t, ["toolUsePromptTokensDetails"]);
  if (T != null) {
    let _ = T;
    Array.isArray(_) && (_ = _.map((C) => C)),
      d(e, ["toolUsePromptTokensDetails"], _);
  }
  const S = f(t, ["trafficType"]);
  return S != null && d(e, ["trafficType"], S), e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function gR(t) {
  const e = {},
    i = f(t, ["data"]);
  if ((i != null && d(e, ["data"], i), f(t, ["displayName"]) !== void 0))
    throw new Error("displayName parameter is not supported in Gemini API.");
  const s = f(t, ["mimeType"]);
  return s != null && d(e, ["mimeType"], s), e;
}
function yR(t) {
  const e = {},
    i = f(t, ["content"]);
  i != null && d(e, ["content"], i);
  const s = f(t, ["citationMetadata"]);
  s != null && d(e, ["citationMetadata"], vR(s));
  const a = f(t, ["tokenCount"]);
  a != null && d(e, ["tokenCount"], a);
  const u = f(t, ["finishReason"]);
  u != null && d(e, ["finishReason"], u);
  const c = f(t, ["avgLogprobs"]);
  c != null && d(e, ["avgLogprobs"], c);
  const h = f(t, ["groundingMetadata"]);
  h != null && d(e, ["groundingMetadata"], h);
  const g = f(t, ["index"]);
  g != null && d(e, ["index"], g);
  const p = f(t, ["logprobsResult"]);
  p != null && d(e, ["logprobsResult"], p);
  const v = f(t, ["safetyRatings"]);
  if (v != null) {
    let S = v;
    Array.isArray(S) && (S = S.map((_) => _)), d(e, ["safetyRatings"], S);
  }
  const T = f(t, ["urlContextMetadata"]);
  return T != null && d(e, ["urlContextMetadata"], T), e;
}
function vR(t) {
  const e = {},
    i = f(t, ["citationSources"]);
  if (i != null) {
    let s = i;
    Array.isArray(s) && (s = s.map((a) => a)), d(e, ["citations"], s);
  }
  return e;
}
function TR(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["contents"]);
  if (a != null) {
    let u = Zt(a);
    Array.isArray(u) && (u = u.map((c) => c)), d(i, ["contents"], u);
  }
  return i;
}
function SR(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["tokensInfo"]);
  if (s != null) {
    let a = s;
    Array.isArray(a) && (a = a.map((u) => u)), d(e, ["tokensInfo"], a);
  }
  return e;
}
function ER(t) {
  const e = {},
    i = f(t, ["values"]);
  i != null && d(e, ["values"], i);
  const s = f(t, ["statistics"]);
  return s != null && d(e, ["statistics"], _R(s)), e;
}
function _R(t) {
  const e = {},
    i = f(t, ["truncated"]);
  i != null && d(e, ["truncated"], i);
  const s = f(t, ["token_count"]);
  return s != null && d(e, ["tokenCount"], s), e;
}
function ar(t) {
  const e = {},
    i = f(t, ["parts"]);
  if (i != null) {
    let a = i;
    Array.isArray(a) && (a = a.map((u) => D1(u))), d(e, ["parts"], a);
  }
  const s = f(t, ["role"]);
  return s != null && d(e, ["role"], s), e;
}
function AR(t) {
  const e = {},
    i = f(t, ["controlType"]);
  i != null && d(e, ["controlType"], i);
  const s = f(t, ["enableControlImageComputation"]);
  return s != null && d(e, ["computeControl"], s), e;
}
function CR(t) {
  const e = {};
  if (f(t, ["systemInstruction"]) !== void 0)
    throw new Error(
      "systemInstruction parameter is not supported in Gemini API."
    );
  if (f(t, ["tools"]) !== void 0)
    throw new Error("tools parameter is not supported in Gemini API.");
  if (f(t, ["generationConfig"]) !== void 0)
    throw new Error(
      "generationConfig parameter is not supported in Gemini API."
    );
  return e;
}
function xR(t, e) {
  const i = {},
    s = f(t, ["systemInstruction"]);
  e !== void 0 && s != null && d(e, ["systemInstruction"], ht(s));
  const a = f(t, ["tools"]);
  if (e !== void 0 && a != null) {
    let c = a;
    Array.isArray(c) && (c = c.map((h) => fT(h))), d(e, ["tools"], c);
  }
  const u = f(t, ["generationConfig"]);
  return e !== void 0 && u != null && d(e, ["generationConfig"], g1(u)), i;
}
function MR(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["contents"]);
  if (a != null) {
    let c = Zt(a);
    Array.isArray(c) && (c = c.map((h) => ar(h))), d(i, ["contents"], c);
  }
  const u = f(e, ["config"]);
  return u != null && CR(u), i;
}
function RR(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["contents"]);
  if (a != null) {
    let c = Zt(a);
    Array.isArray(c) && (c = c.map((h) => h)), d(i, ["contents"], c);
  }
  const u = f(e, ["config"]);
  return u != null && xR(u, i), i;
}
function wR(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["totalTokens"]);
  s != null && d(e, ["totalTokens"], s);
  const a = f(t, ["cachedContentTokenCount"]);
  return a != null && d(e, ["cachedContentTokenCount"], a), e;
}
function NR(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["totalTokens"]);
  return s != null && d(e, ["totalTokens"], s), e;
}
function bR(t, e) {
  const i = {},
    s = f(e, ["model"]);
  return s != null && d(i, ["_url", "name"], xe(t, s)), i;
}
function DR(t, e) {
  const i = {},
    s = f(e, ["model"]);
  return s != null && d(i, ["_url", "name"], xe(t, s)), i;
}
function IR(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  return i != null && d(e, ["sdkHttpResponse"], i), e;
}
function UR(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  return i != null && d(e, ["sdkHttpResponse"], i), e;
}
function LR(t, e) {
  const i = {},
    s = f(t, ["outputGcsUri"]);
  e !== void 0 && s != null && d(e, ["parameters", "storageUri"], s);
  const a = f(t, ["negativePrompt"]);
  e !== void 0 && a != null && d(e, ["parameters", "negativePrompt"], a);
  const u = f(t, ["numberOfImages"]);
  e !== void 0 && u != null && d(e, ["parameters", "sampleCount"], u);
  const c = f(t, ["aspectRatio"]);
  e !== void 0 && c != null && d(e, ["parameters", "aspectRatio"], c);
  const h = f(t, ["guidanceScale"]);
  e !== void 0 && h != null && d(e, ["parameters", "guidanceScale"], h);
  const g = f(t, ["seed"]);
  e !== void 0 && g != null && d(e, ["parameters", "seed"], g);
  const p = f(t, ["safetyFilterLevel"]);
  e !== void 0 && p != null && d(e, ["parameters", "safetySetting"], p);
  const v = f(t, ["personGeneration"]);
  e !== void 0 && v != null && d(e, ["parameters", "personGeneration"], v);
  const T = f(t, ["includeSafetyAttributes"]);
  e !== void 0 &&
    T != null &&
    d(e, ["parameters", "includeSafetyAttributes"], T);
  const S = f(t, ["includeRaiReason"]);
  e !== void 0 && S != null && d(e, ["parameters", "includeRaiReason"], S);
  const _ = f(t, ["language"]);
  e !== void 0 && _ != null && d(e, ["parameters", "language"], _);
  const C = f(t, ["outputMimeType"]);
  e !== void 0 &&
    C != null &&
    d(e, ["parameters", "outputOptions", "mimeType"], C);
  const R = f(t, ["outputCompressionQuality"]);
  e !== void 0 &&
    R != null &&
    d(e, ["parameters", "outputOptions", "compressionQuality"], R);
  const M = f(t, ["addWatermark"]);
  e !== void 0 && M != null && d(e, ["parameters", "addWatermark"], M);
  const b = f(t, ["labels"]);
  e !== void 0 && b != null && d(e, ["labels"], b);
  const k = f(t, ["editMode"]);
  e !== void 0 && k != null && d(e, ["parameters", "editMode"], k);
  const P = f(t, ["baseSteps"]);
  return (
    e !== void 0 &&
      P != null &&
      d(e, ["parameters", "editConfig", "baseSteps"], P),
    i
  );
}
function VR(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["prompt"]);
  a != null && d(i, ["instances[0]", "prompt"], a);
  const u = f(e, ["referenceImages"]);
  if (u != null) {
    let h = u;
    Array.isArray(h) && (h = h.map((g) => H1(g))),
      d(i, ["instances[0]", "referenceImages"], h);
  }
  const c = f(e, ["config"]);
  return c != null && LR(c, i), i;
}
function PR(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["predictions"]);
  if (s != null) {
    let a = s;
    Array.isArray(a) && (a = a.map((u) => rr(u))), d(e, ["generatedImages"], a);
  }
  return e;
}
function HR(t, e) {
  const i = {},
    s = f(t, ["taskType"]);
  e !== void 0 && s != null && d(e, ["requests[]", "taskType"], s);
  const a = f(t, ["title"]);
  e !== void 0 && a != null && d(e, ["requests[]", "title"], a);
  const u = f(t, ["outputDimensionality"]);
  if (
    (e !== void 0 &&
      u != null &&
      d(e, ["requests[]", "outputDimensionality"], u),
    f(t, ["mimeType"]) !== void 0)
  )
    throw new Error("mimeType parameter is not supported in Gemini API.");
  if (f(t, ["autoTruncate"]) !== void 0)
    throw new Error("autoTruncate parameter is not supported in Gemini API.");
  return i;
}
function GR(t, e) {
  const i = {},
    s = f(t, ["taskType"]);
  e !== void 0 && s != null && d(e, ["instances[]", "task_type"], s);
  const a = f(t, ["title"]);
  e !== void 0 && a != null && d(e, ["instances[]", "title"], a);
  const u = f(t, ["outputDimensionality"]);
  e !== void 0 && u != null && d(e, ["parameters", "outputDimensionality"], u);
  const c = f(t, ["mimeType"]);
  e !== void 0 && c != null && d(e, ["instances[]", "mimeType"], c);
  const h = f(t, ["autoTruncate"]);
  return (
    e !== void 0 && h != null && d(e, ["parameters", "autoTruncate"], h), i
  );
}
function kR(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["contents"]);
  if (a != null) {
    let h = Yf(t, a);
    Array.isArray(h) && (h = h.map((g) => g)),
      d(i, ["requests[]", "content"], h);
  }
  const u = f(e, ["config"]);
  u != null && HR(u, i);
  const c = f(e, ["model"]);
  return c !== void 0 && d(i, ["requests[]", "model"], xe(t, c)), i;
}
function BR(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["contents"]);
  if (a != null) {
    let c = Yf(t, a);
    Array.isArray(c) && (c = c.map((h) => h)),
      d(i, ["instances[]", "content"], c);
  }
  const u = f(e, ["config"]);
  return u != null && GR(u, i), i;
}
function zR(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["embeddings"]);
  if (s != null) {
    let u = s;
    Array.isArray(u) && (u = u.map((c) => c)), d(e, ["embeddings"], u);
  }
  const a = f(t, ["metadata"]);
  return a != null && d(e, ["metadata"], a), e;
}
function qR(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["predictions[]", "embeddings"]);
  if (s != null) {
    let u = s;
    Array.isArray(u) && (u = u.map((c) => ER(c))), d(e, ["embeddings"], u);
  }
  const a = f(t, ["metadata"]);
  return a != null && d(e, ["metadata"], a), e;
}
function OR(t) {
  const e = {},
    i = f(t, ["endpoint"]);
  i != null && d(e, ["name"], i);
  const s = f(t, ["deployedModelId"]);
  return s != null && d(e, ["deployedModelId"], s), e;
}
function FR(t) {
  const e = {};
  if (f(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const i = f(t, ["fileUri"]);
  i != null && d(e, ["fileUri"], i);
  const s = f(t, ["mimeType"]);
  return s != null && d(e, ["mimeType"], s), e;
}
function YR(t) {
  const e = {},
    i = f(t, ["id"]);
  i != null && d(e, ["id"], i);
  const s = f(t, ["args"]);
  s != null && d(e, ["args"], s);
  const a = f(t, ["name"]);
  if ((a != null && d(e, ["name"], a), f(t, ["partialArgs"]) !== void 0))
    throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (f(t, ["willContinue"]) !== void 0)
    throw new Error("willContinue parameter is not supported in Gemini API.");
  return e;
}
function JR(t) {
  const e = {},
    i = f(t, ["mode"]);
  i != null && d(e, ["mode"], i);
  const s = f(t, ["allowedFunctionNames"]);
  if (
    (s != null && d(e, ["allowedFunctionNames"], s),
    f(t, ["streamFunctionCallArguments"]) !== void 0)
  )
    throw new Error(
      "streamFunctionCallArguments parameter is not supported in Gemini API."
    );
  return e;
}
function KR(t) {
  const e = {};
  if (f(t, ["behavior"]) !== void 0)
    throw new Error("behavior parameter is not supported in Vertex AI.");
  const i = f(t, ["description"]);
  i != null && d(e, ["description"], i);
  const s = f(t, ["name"]);
  s != null && d(e, ["name"], s);
  const a = f(t, ["parameters"]);
  a != null && d(e, ["parameters"], a);
  const u = f(t, ["parametersJsonSchema"]);
  u != null && d(e, ["parametersJsonSchema"], u);
  const c = f(t, ["response"]);
  c != null && d(e, ["response"], c);
  const h = f(t, ["responseJsonSchema"]);
  return h != null && d(e, ["responseJsonSchema"], h), e;
}
function XR(t, e, i) {
  const s = {},
    a = f(e, ["systemInstruction"]);
  i !== void 0 && a != null && d(i, ["systemInstruction"], ar(ht(a)));
  const u = f(e, ["temperature"]);
  u != null && d(s, ["temperature"], u);
  const c = f(e, ["topP"]);
  c != null && d(s, ["topP"], c);
  const h = f(e, ["topK"]);
  h != null && d(s, ["topK"], h);
  const g = f(e, ["candidateCount"]);
  g != null && d(s, ["candidateCount"], g);
  const p = f(e, ["maxOutputTokens"]);
  p != null && d(s, ["maxOutputTokens"], p);
  const v = f(e, ["stopSequences"]);
  v != null && d(s, ["stopSequences"], v);
  const T = f(e, ["responseLogprobs"]);
  T != null && d(s, ["responseLogprobs"], T);
  const S = f(e, ["logprobs"]);
  S != null && d(s, ["logprobs"], S);
  const _ = f(e, ["presencePenalty"]);
  _ != null && d(s, ["presencePenalty"], _);
  const C = f(e, ["frequencyPenalty"]);
  C != null && d(s, ["frequencyPenalty"], C);
  const R = f(e, ["seed"]);
  R != null && d(s, ["seed"], R);
  const M = f(e, ["responseMimeType"]);
  M != null && d(s, ["responseMimeType"], M);
  const b = f(e, ["responseSchema"]);
  b != null && d(s, ["responseSchema"], Jf(b));
  const k = f(e, ["responseJsonSchema"]);
  if (
    (k != null && d(s, ["responseJsonSchema"], k),
    f(e, ["routingConfig"]) !== void 0)
  )
    throw new Error("routingConfig parameter is not supported in Gemini API.");
  if (f(e, ["modelSelectionConfig"]) !== void 0)
    throw new Error(
      "modelSelectionConfig parameter is not supported in Gemini API."
    );
  const P = f(e, ["safetySettings"]);
  if (i !== void 0 && P != null) {
    let Ee = P;
    Array.isArray(Ee) && (Ee = Ee.map((Be) => G1(Be))),
      d(i, ["safetySettings"], Ee);
  }
  const Y = f(e, ["tools"]);
  if (i !== void 0 && Y != null) {
    let Ee = zo(Y);
    Array.isArray(Ee) && (Ee = Ee.map((Be) => Y1(Bo(Be)))), d(i, ["tools"], Ee);
  }
  const q = f(e, ["toolConfig"]);
  if (
    (i !== void 0 && q != null && d(i, ["toolConfig"], F1(q)),
    f(e, ["labels"]) !== void 0)
  )
    throw new Error("labels parameter is not supported in Gemini API.");
  const Q = f(e, ["cachedContent"]);
  i !== void 0 && Q != null && d(i, ["cachedContent"], Hn(t, Q));
  const J = f(e, ["responseModalities"]);
  J != null && d(s, ["responseModalities"], J);
  const Z = f(e, ["mediaResolution"]);
  Z != null && d(s, ["mediaResolution"], Z);
  const $ = f(e, ["speechConfig"]);
  if (
    ($ != null && d(s, ["speechConfig"], Kf($)),
    f(e, ["audioTimestamp"]) !== void 0)
  )
    throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  const ae = f(e, ["thinkingConfig"]);
  ae != null && d(s, ["thinkingConfig"], ae);
  const ge = f(e, ["imageConfig"]);
  ge != null && d(s, ["imageConfig"], E1(ge));
  const Pe = f(e, ["enableEnhancedCivicAnswers"]);
  return Pe != null && d(s, ["enableEnhancedCivicAnswers"], Pe), s;
}
function QR(t, e, i) {
  const s = {},
    a = f(e, ["systemInstruction"]);
  i !== void 0 && a != null && d(i, ["systemInstruction"], ht(a));
  const u = f(e, ["temperature"]);
  u != null && d(s, ["temperature"], u);
  const c = f(e, ["topP"]);
  c != null && d(s, ["topP"], c);
  const h = f(e, ["topK"]);
  h != null && d(s, ["topK"], h);
  const g = f(e, ["candidateCount"]);
  g != null && d(s, ["candidateCount"], g);
  const p = f(e, ["maxOutputTokens"]);
  p != null && d(s, ["maxOutputTokens"], p);
  const v = f(e, ["stopSequences"]);
  v != null && d(s, ["stopSequences"], v);
  const T = f(e, ["responseLogprobs"]);
  T != null && d(s, ["responseLogprobs"], T);
  const S = f(e, ["logprobs"]);
  S != null && d(s, ["logprobs"], S);
  const _ = f(e, ["presencePenalty"]);
  _ != null && d(s, ["presencePenalty"], _);
  const C = f(e, ["frequencyPenalty"]);
  C != null && d(s, ["frequencyPenalty"], C);
  const R = f(e, ["seed"]);
  R != null && d(s, ["seed"], R);
  const M = f(e, ["responseMimeType"]);
  M != null && d(s, ["responseMimeType"], M);
  const b = f(e, ["responseSchema"]);
  b != null && d(s, ["responseSchema"], Jf(b));
  const k = f(e, ["responseJsonSchema"]);
  k != null && d(s, ["responseJsonSchema"], k);
  const P = f(e, ["routingConfig"]);
  P != null && d(s, ["routingConfig"], P);
  const Y = f(e, ["modelSelectionConfig"]);
  Y != null && d(s, ["modelConfig"], Y);
  const q = f(e, ["safetySettings"]);
  if (i !== void 0 && q != null) {
    let G = q;
    Array.isArray(G) && (G = G.map((K) => K)), d(i, ["safetySettings"], G);
  }
  const Q = f(e, ["tools"]);
  if (i !== void 0 && Q != null) {
    let G = zo(Q);
    Array.isArray(G) && (G = G.map((K) => fT(Bo(K)))), d(i, ["tools"], G);
  }
  const J = f(e, ["toolConfig"]);
  i !== void 0 && J != null && d(i, ["toolConfig"], J);
  const Z = f(e, ["labels"]);
  i !== void 0 && Z != null && d(i, ["labels"], Z);
  const $ = f(e, ["cachedContent"]);
  i !== void 0 && $ != null && d(i, ["cachedContent"], Hn(t, $));
  const ae = f(e, ["responseModalities"]);
  ae != null && d(s, ["responseModalities"], ae);
  const ge = f(e, ["mediaResolution"]);
  ge != null && d(s, ["mediaResolution"], ge);
  const Pe = f(e, ["speechConfig"]);
  Pe != null && d(s, ["speechConfig"], Kf(Pe));
  const Ee = f(e, ["audioTimestamp"]);
  Ee != null && d(s, ["audioTimestamp"], Ee);
  const Be = f(e, ["thinkingConfig"]);
  Be != null && d(s, ["thinkingConfig"], Be);
  const pt = f(e, ["imageConfig"]);
  if (
    (pt != null && d(s, ["imageConfig"], _1(pt)),
    f(e, ["enableEnhancedCivicAnswers"]) !== void 0)
  )
    throw new Error(
      "enableEnhancedCivicAnswers parameter is not supported in Vertex AI."
    );
  return s;
}
function iv(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["contents"]);
  if (a != null) {
    let c = Zt(a);
    Array.isArray(c) && (c = c.map((h) => ar(h))), d(i, ["contents"], c);
  }
  const u = f(e, ["config"]);
  return u != null && d(i, ["generationConfig"], XR(t, u, i)), i;
}
function ov(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["contents"]);
  if (a != null) {
    let c = Zt(a);
    Array.isArray(c) && (c = c.map((h) => h)), d(i, ["contents"], c);
  }
  const u = f(e, ["config"]);
  return u != null && d(i, ["generationConfig"], QR(t, u, i)), i;
}
function sv(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["candidates"]);
  if (s != null) {
    let g = s;
    Array.isArray(g) && (g = g.map((p) => yR(p))), d(e, ["candidates"], g);
  }
  const a = f(t, ["modelVersion"]);
  a != null && d(e, ["modelVersion"], a);
  const u = f(t, ["promptFeedback"]);
  u != null && d(e, ["promptFeedback"], u);
  const c = f(t, ["responseId"]);
  c != null && d(e, ["responseId"], c);
  const h = f(t, ["usageMetadata"]);
  return h != null && d(e, ["usageMetadata"], h), e;
}
function lv(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["candidates"]);
  if (s != null) {
    let p = s;
    Array.isArray(p) && (p = p.map((v) => v)), d(e, ["candidates"], p);
  }
  const a = f(t, ["createTime"]);
  a != null && d(e, ["createTime"], a);
  const u = f(t, ["modelVersion"]);
  u != null && d(e, ["modelVersion"], u);
  const c = f(t, ["promptFeedback"]);
  c != null && d(e, ["promptFeedback"], c);
  const h = f(t, ["responseId"]);
  h != null && d(e, ["responseId"], h);
  const g = f(t, ["usageMetadata"]);
  return g != null && d(e, ["usageMetadata"], g), e;
}
function ZR(t, e) {
  const i = {};
  if (f(t, ["outputGcsUri"]) !== void 0)
    throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  if (f(t, ["negativePrompt"]) !== void 0)
    throw new Error("negativePrompt parameter is not supported in Gemini API.");
  const s = f(t, ["numberOfImages"]);
  e !== void 0 && s != null && d(e, ["parameters", "sampleCount"], s);
  const a = f(t, ["aspectRatio"]);
  e !== void 0 && a != null && d(e, ["parameters", "aspectRatio"], a);
  const u = f(t, ["guidanceScale"]);
  if (
    (e !== void 0 && u != null && d(e, ["parameters", "guidanceScale"], u),
    f(t, ["seed"]) !== void 0)
  )
    throw new Error("seed parameter is not supported in Gemini API.");
  const c = f(t, ["safetyFilterLevel"]);
  e !== void 0 && c != null && d(e, ["parameters", "safetySetting"], c);
  const h = f(t, ["personGeneration"]);
  e !== void 0 && h != null && d(e, ["parameters", "personGeneration"], h);
  const g = f(t, ["includeSafetyAttributes"]);
  e !== void 0 &&
    g != null &&
    d(e, ["parameters", "includeSafetyAttributes"], g);
  const p = f(t, ["includeRaiReason"]);
  e !== void 0 && p != null && d(e, ["parameters", "includeRaiReason"], p);
  const v = f(t, ["language"]);
  e !== void 0 && v != null && d(e, ["parameters", "language"], v);
  const T = f(t, ["outputMimeType"]);
  e !== void 0 &&
    T != null &&
    d(e, ["parameters", "outputOptions", "mimeType"], T);
  const S = f(t, ["outputCompressionQuality"]);
  if (
    (e !== void 0 &&
      S != null &&
      d(e, ["parameters", "outputOptions", "compressionQuality"], S),
    f(t, ["addWatermark"]) !== void 0)
  )
    throw new Error("addWatermark parameter is not supported in Gemini API.");
  if (f(t, ["labels"]) !== void 0)
    throw new Error("labels parameter is not supported in Gemini API.");
  const _ = f(t, ["imageSize"]);
  if (
    (e !== void 0 && _ != null && d(e, ["parameters", "sampleImageSize"], _),
    f(t, ["enhancePrompt"]) !== void 0)
  )
    throw new Error("enhancePrompt parameter is not supported in Gemini API.");
  return i;
}
function $R(t, e) {
  const i = {},
    s = f(t, ["outputGcsUri"]);
  e !== void 0 && s != null && d(e, ["parameters", "storageUri"], s);
  const a = f(t, ["negativePrompt"]);
  e !== void 0 && a != null && d(e, ["parameters", "negativePrompt"], a);
  const u = f(t, ["numberOfImages"]);
  e !== void 0 && u != null && d(e, ["parameters", "sampleCount"], u);
  const c = f(t, ["aspectRatio"]);
  e !== void 0 && c != null && d(e, ["parameters", "aspectRatio"], c);
  const h = f(t, ["guidanceScale"]);
  e !== void 0 && h != null && d(e, ["parameters", "guidanceScale"], h);
  const g = f(t, ["seed"]);
  e !== void 0 && g != null && d(e, ["parameters", "seed"], g);
  const p = f(t, ["safetyFilterLevel"]);
  e !== void 0 && p != null && d(e, ["parameters", "safetySetting"], p);
  const v = f(t, ["personGeneration"]);
  e !== void 0 && v != null && d(e, ["parameters", "personGeneration"], v);
  const T = f(t, ["includeSafetyAttributes"]);
  e !== void 0 &&
    T != null &&
    d(e, ["parameters", "includeSafetyAttributes"], T);
  const S = f(t, ["includeRaiReason"]);
  e !== void 0 && S != null && d(e, ["parameters", "includeRaiReason"], S);
  const _ = f(t, ["language"]);
  e !== void 0 && _ != null && d(e, ["parameters", "language"], _);
  const C = f(t, ["outputMimeType"]);
  e !== void 0 &&
    C != null &&
    d(e, ["parameters", "outputOptions", "mimeType"], C);
  const R = f(t, ["outputCompressionQuality"]);
  e !== void 0 &&
    R != null &&
    d(e, ["parameters", "outputOptions", "compressionQuality"], R);
  const M = f(t, ["addWatermark"]);
  e !== void 0 && M != null && d(e, ["parameters", "addWatermark"], M);
  const b = f(t, ["labels"]);
  e !== void 0 && b != null && d(e, ["labels"], b);
  const k = f(t, ["imageSize"]);
  e !== void 0 && k != null && d(e, ["parameters", "sampleImageSize"], k);
  const P = f(t, ["enhancePrompt"]);
  return (
    e !== void 0 && P != null && d(e, ["parameters", "enhancePrompt"], P), i
  );
}
function WR(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["prompt"]);
  a != null && d(i, ["instances[0]", "prompt"], a);
  const u = f(e, ["config"]);
  return u != null && ZR(u, i), i;
}
function jR(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["prompt"]);
  a != null && d(i, ["instances[0]", "prompt"], a);
  const u = f(e, ["config"]);
  return u != null && $R(u, i), i;
}
function e1(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["predictions"]);
  if (s != null) {
    let u = s;
    Array.isArray(u) && (u = u.map((c) => d1(c))), d(e, ["generatedImages"], u);
  }
  const a = f(t, ["positivePromptSafetyAttributes"]);
  return a != null && d(e, ["positivePromptSafetyAttributes"], uT(a)), e;
}
function t1(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["predictions"]);
  if (s != null) {
    let u = s;
    Array.isArray(u) && (u = u.map((c) => rr(c))), d(e, ["generatedImages"], u);
  }
  const a = f(t, ["positivePromptSafetyAttributes"]);
  return a != null && d(e, ["positivePromptSafetyAttributes"], cT(a)), e;
}
function n1(t, e) {
  const i = {},
    s = f(t, ["numberOfVideos"]);
  if (
    (e !== void 0 && s != null && d(e, ["parameters", "sampleCount"], s),
    f(t, ["outputGcsUri"]) !== void 0)
  )
    throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  if (f(t, ["fps"]) !== void 0)
    throw new Error("fps parameter is not supported in Gemini API.");
  const a = f(t, ["durationSeconds"]);
  if (
    (e !== void 0 && a != null && d(e, ["parameters", "durationSeconds"], a),
    f(t, ["seed"]) !== void 0)
  )
    throw new Error("seed parameter is not supported in Gemini API.");
  const u = f(t, ["aspectRatio"]);
  e !== void 0 && u != null && d(e, ["parameters", "aspectRatio"], u);
  const c = f(t, ["resolution"]);
  e !== void 0 && c != null && d(e, ["parameters", "resolution"], c);
  const h = f(t, ["personGeneration"]);
  if (
    (e !== void 0 && h != null && d(e, ["parameters", "personGeneration"], h),
    f(t, ["pubsubTopic"]) !== void 0)
  )
    throw new Error("pubsubTopic parameter is not supported in Gemini API.");
  const g = f(t, ["negativePrompt"]);
  e !== void 0 && g != null && d(e, ["parameters", "negativePrompt"], g);
  const p = f(t, ["enhancePrompt"]);
  if (
    (e !== void 0 && p != null && d(e, ["parameters", "enhancePrompt"], p),
    f(t, ["generateAudio"]) !== void 0)
  )
    throw new Error("generateAudio parameter is not supported in Gemini API.");
  const v = f(t, ["lastFrame"]);
  e !== void 0 && v != null && d(e, ["instances[0]", "lastFrame"], ur(v));
  const T = f(t, ["referenceImages"]);
  if (e !== void 0 && T != null) {
    let S = T;
    Array.isArray(S) && (S = S.map((_) => ow(_))),
      d(e, ["instances[0]", "referenceImages"], S);
  }
  if (f(t, ["mask"]) !== void 0)
    throw new Error("mask parameter is not supported in Gemini API.");
  if (f(t, ["compressionQuality"]) !== void 0)
    throw new Error(
      "compressionQuality parameter is not supported in Gemini API."
    );
  return i;
}
function i1(t, e) {
  const i = {},
    s = f(t, ["numberOfVideos"]);
  e !== void 0 && s != null && d(e, ["parameters", "sampleCount"], s);
  const a = f(t, ["outputGcsUri"]);
  e !== void 0 && a != null && d(e, ["parameters", "storageUri"], a);
  const u = f(t, ["fps"]);
  e !== void 0 && u != null && d(e, ["parameters", "fps"], u);
  const c = f(t, ["durationSeconds"]);
  e !== void 0 && c != null && d(e, ["parameters", "durationSeconds"], c);
  const h = f(t, ["seed"]);
  e !== void 0 && h != null && d(e, ["parameters", "seed"], h);
  const g = f(t, ["aspectRatio"]);
  e !== void 0 && g != null && d(e, ["parameters", "aspectRatio"], g);
  const p = f(t, ["resolution"]);
  e !== void 0 && p != null && d(e, ["parameters", "resolution"], p);
  const v = f(t, ["personGeneration"]);
  e !== void 0 && v != null && d(e, ["parameters", "personGeneration"], v);
  const T = f(t, ["pubsubTopic"]);
  e !== void 0 && T != null && d(e, ["parameters", "pubsubTopic"], T);
  const S = f(t, ["negativePrompt"]);
  e !== void 0 && S != null && d(e, ["parameters", "negativePrompt"], S);
  const _ = f(t, ["enhancePrompt"]);
  e !== void 0 && _ != null && d(e, ["parameters", "enhancePrompt"], _);
  const C = f(t, ["generateAudio"]);
  e !== void 0 && C != null && d(e, ["parameters", "generateAudio"], C);
  const R = f(t, ["lastFrame"]);
  e !== void 0 && R != null && d(e, ["instances[0]", "lastFrame"], sn(R));
  const M = f(t, ["referenceImages"]);
  if (e !== void 0 && M != null) {
    let P = M;
    Array.isArray(P) && (P = P.map((Y) => sw(Y))),
      d(e, ["instances[0]", "referenceImages"], P);
  }
  const b = f(t, ["mask"]);
  e !== void 0 && b != null && d(e, ["instances[0]", "mask"], iw(b));
  const k = f(t, ["compressionQuality"]);
  return (
    e !== void 0 && k != null && d(e, ["parameters", "compressionQuality"], k),
    i
  );
}
function o1(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["name"], i);
  const s = f(t, ["metadata"]);
  s != null && d(e, ["metadata"], s);
  const a = f(t, ["done"]);
  a != null && d(e, ["done"], a);
  const u = f(t, ["error"]);
  u != null && d(e, ["error"], u);
  const c = f(t, ["response", "generateVideoResponse"]);
  return c != null && d(e, ["response"], r1(c)), e;
}
function s1(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["name"], i);
  const s = f(t, ["metadata"]);
  s != null && d(e, ["metadata"], s);
  const a = f(t, ["done"]);
  a != null && d(e, ["done"], a);
  const u = f(t, ["error"]);
  u != null && d(e, ["error"], u);
  const c = f(t, ["response"]);
  return c != null && d(e, ["response"], u1(c)), e;
}
function l1(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["prompt"]);
  a != null && d(i, ["instances[0]", "prompt"], a);
  const u = f(e, ["image"]);
  u != null && d(i, ["instances[0]", "image"], ur(u));
  const c = f(e, ["video"]);
  c != null && d(i, ["instances[0]", "video"], dT(c));
  const h = f(e, ["source"]);
  h != null && c1(h, i);
  const g = f(e, ["config"]);
  return g != null && n1(g, i), i;
}
function a1(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["prompt"]);
  a != null && d(i, ["instances[0]", "prompt"], a);
  const u = f(e, ["image"]);
  u != null && d(i, ["instances[0]", "image"], sn(u));
  const c = f(e, ["video"]);
  c != null && d(i, ["instances[0]", "video"], hT(c));
  const h = f(e, ["source"]);
  h != null && f1(h, i);
  const g = f(e, ["config"]);
  return g != null && i1(g, i), i;
}
function r1(t) {
  const e = {},
    i = f(t, ["generatedSamples"]);
  if (i != null) {
    let u = i;
    Array.isArray(u) && (u = u.map((c) => p1(c))), d(e, ["generatedVideos"], u);
  }
  const s = f(t, ["raiMediaFilteredCount"]);
  s != null && d(e, ["raiMediaFilteredCount"], s);
  const a = f(t, ["raiMediaFilteredReasons"]);
  return a != null && d(e, ["raiMediaFilteredReasons"], a), e;
}
function u1(t) {
  const e = {},
    i = f(t, ["videos"]);
  if (i != null) {
    let u = i;
    Array.isArray(u) && (u = u.map((c) => m1(c))), d(e, ["generatedVideos"], u);
  }
  const s = f(t, ["raiMediaFilteredCount"]);
  s != null && d(e, ["raiMediaFilteredCount"], s);
  const a = f(t, ["raiMediaFilteredReasons"]);
  return a != null && d(e, ["raiMediaFilteredReasons"], a), e;
}
function c1(t, e) {
  const i = {},
    s = f(t, ["prompt"]);
  e !== void 0 && s != null && d(e, ["instances[0]", "prompt"], s);
  const a = f(t, ["image"]);
  e !== void 0 && a != null && d(e, ["instances[0]", "image"], ur(a));
  const u = f(t, ["video"]);
  return e !== void 0 && u != null && d(e, ["instances[0]", "video"], dT(u)), i;
}
function f1(t, e) {
  const i = {},
    s = f(t, ["prompt"]);
  e !== void 0 && s != null && d(e, ["instances[0]", "prompt"], s);
  const a = f(t, ["image"]);
  e !== void 0 && a != null && d(e, ["instances[0]", "image"], sn(a));
  const u = f(t, ["video"]);
  return e !== void 0 && u != null && d(e, ["instances[0]", "video"], hT(u)), i;
}
function d1(t) {
  const e = {},
    i = f(t, ["_self"]);
  i != null && d(e, ["image"], A1(i));
  const s = f(t, ["raiFilteredReason"]);
  s != null && d(e, ["raiFilteredReason"], s);
  const a = f(t, ["_self"]);
  return a != null && d(e, ["safetyAttributes"], uT(a)), e;
}
function rr(t) {
  const e = {},
    i = f(t, ["_self"]);
  i != null && d(e, ["image"], rT(i));
  const s = f(t, ["raiFilteredReason"]);
  s != null && d(e, ["raiFilteredReason"], s);
  const a = f(t, ["_self"]);
  a != null && d(e, ["safetyAttributes"], cT(a));
  const u = f(t, ["prompt"]);
  return u != null && d(e, ["enhancedPrompt"], u), e;
}
function h1(t) {
  const e = {},
    i = f(t, ["_self"]);
  i != null && d(e, ["mask"], rT(i));
  const s = f(t, ["labels"]);
  if (s != null) {
    let a = s;
    Array.isArray(a) && (a = a.map((u) => u)), d(e, ["labels"], a);
  }
  return e;
}
function p1(t) {
  const e = {},
    i = f(t, ["video"]);
  return i != null && d(e, ["video"], tw(i)), e;
}
function m1(t) {
  const e = {},
    i = f(t, ["_self"]);
  return i != null && d(e, ["video"], nw(i)), e;
}
function g1(t) {
  const e = {},
    i = f(t, ["modelSelectionConfig"]);
  i != null && d(e, ["modelConfig"], i);
  const s = f(t, ["responseJsonSchema"]);
  s != null && d(e, ["responseJsonSchema"], s);
  const a = f(t, ["audioTimestamp"]);
  a != null && d(e, ["audioTimestamp"], a);
  const u = f(t, ["candidateCount"]);
  u != null && d(e, ["candidateCount"], u);
  const c = f(t, ["enableAffectiveDialog"]);
  c != null && d(e, ["enableAffectiveDialog"], c);
  const h = f(t, ["frequencyPenalty"]);
  h != null && d(e, ["frequencyPenalty"], h);
  const g = f(t, ["logprobs"]);
  g != null && d(e, ["logprobs"], g);
  const p = f(t, ["maxOutputTokens"]);
  p != null && d(e, ["maxOutputTokens"], p);
  const v = f(t, ["mediaResolution"]);
  v != null && d(e, ["mediaResolution"], v);
  const T = f(t, ["presencePenalty"]);
  T != null && d(e, ["presencePenalty"], T);
  const S = f(t, ["responseLogprobs"]);
  S != null && d(e, ["responseLogprobs"], S);
  const _ = f(t, ["responseMimeType"]);
  _ != null && d(e, ["responseMimeType"], _);
  const C = f(t, ["responseModalities"]);
  C != null && d(e, ["responseModalities"], C);
  const R = f(t, ["responseSchema"]);
  R != null && d(e, ["responseSchema"], R);
  const M = f(t, ["routingConfig"]);
  M != null && d(e, ["routingConfig"], M);
  const b = f(t, ["seed"]);
  b != null && d(e, ["seed"], b);
  const k = f(t, ["speechConfig"]);
  k != null && d(e, ["speechConfig"], k);
  const P = f(t, ["stopSequences"]);
  P != null && d(e, ["stopSequences"], P);
  const Y = f(t, ["temperature"]);
  Y != null && d(e, ["temperature"], Y);
  const q = f(t, ["thinkingConfig"]);
  q != null && d(e, ["thinkingConfig"], q);
  const Q = f(t, ["topK"]);
  Q != null && d(e, ["topK"], Q);
  const J = f(t, ["topP"]);
  if (
    (J != null && d(e, ["topP"], J),
    f(t, ["enableEnhancedCivicAnswers"]) !== void 0)
  )
    throw new Error(
      "enableEnhancedCivicAnswers parameter is not supported in Vertex AI."
    );
  return e;
}
function y1(t, e) {
  const i = {},
    s = f(e, ["model"]);
  return s != null && d(i, ["_url", "name"], xe(t, s)), i;
}
function v1(t, e) {
  const i = {},
    s = f(e, ["model"]);
  return s != null && d(i, ["_url", "name"], xe(t, s)), i;
}
function T1(t) {
  const e = {};
  if (f(t, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const i = f(t, ["enableWidget"]);
  return i != null && d(e, ["enableWidget"], i), e;
}
function S1(t) {
  const e = {};
  if (f(t, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  if (f(t, ["blockingConfidence"]) !== void 0)
    throw new Error(
      "blockingConfidence parameter is not supported in Gemini API."
    );
  const i = f(t, ["timeRangeFilter"]);
  return i != null && d(e, ["timeRangeFilter"], i), e;
}
function E1(t) {
  const e = {},
    i = f(t, ["aspectRatio"]);
  i != null && d(e, ["aspectRatio"], i);
  const s = f(t, ["imageSize"]);
  if (
    (s != null && d(e, ["imageSize"], s), f(t, ["outputMimeType"]) !== void 0)
  )
    throw new Error("outputMimeType parameter is not supported in Gemini API.");
  if (f(t, ["outputCompressionQuality"]) !== void 0)
    throw new Error(
      "outputCompressionQuality parameter is not supported in Gemini API."
    );
  return e;
}
function _1(t) {
  const e = {},
    i = f(t, ["aspectRatio"]);
  i != null && d(e, ["aspectRatio"], i);
  const s = f(t, ["imageSize"]);
  s != null && d(e, ["imageSize"], s);
  const a = f(t, ["outputMimeType"]);
  a != null && d(e, ["imageOutputOptions", "mimeType"], a);
  const u = f(t, ["outputCompressionQuality"]);
  return u != null && d(e, ["imageOutputOptions", "compressionQuality"], u), e;
}
function A1(t) {
  const e = {},
    i = f(t, ["bytesBase64Encoded"]);
  i != null && d(e, ["imageBytes"], hi(i));
  const s = f(t, ["mimeType"]);
  return s != null && d(e, ["mimeType"], s), e;
}
function rT(t) {
  const e = {},
    i = f(t, ["gcsUri"]);
  i != null && d(e, ["gcsUri"], i);
  const s = f(t, ["bytesBase64Encoded"]);
  s != null && d(e, ["imageBytes"], hi(s));
  const a = f(t, ["mimeType"]);
  return a != null && d(e, ["mimeType"], a), e;
}
function ur(t) {
  const e = {};
  if (f(t, ["gcsUri"]) !== void 0)
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  const i = f(t, ["imageBytes"]);
  i != null && d(e, ["bytesBase64Encoded"], hi(i));
  const s = f(t, ["mimeType"]);
  return s != null && d(e, ["mimeType"], s), e;
}
function sn(t) {
  const e = {},
    i = f(t, ["gcsUri"]);
  i != null && d(e, ["gcsUri"], i);
  const s = f(t, ["imageBytes"]);
  s != null && d(e, ["bytesBase64Encoded"], hi(s));
  const a = f(t, ["mimeType"]);
  return a != null && d(e, ["mimeType"], a), e;
}
function C1(t, e, i) {
  const s = {},
    a = f(e, ["pageSize"]);
  i !== void 0 && a != null && d(i, ["_query", "pageSize"], a);
  const u = f(e, ["pageToken"]);
  i !== void 0 && u != null && d(i, ["_query", "pageToken"], u);
  const c = f(e, ["filter"]);
  i !== void 0 && c != null && d(i, ["_query", "filter"], c);
  const h = f(e, ["queryBase"]);
  return i !== void 0 && h != null && d(i, ["_url", "models_url"], tT(t, h)), s;
}
function x1(t, e, i) {
  const s = {},
    a = f(e, ["pageSize"]);
  i !== void 0 && a != null && d(i, ["_query", "pageSize"], a);
  const u = f(e, ["pageToken"]);
  i !== void 0 && u != null && d(i, ["_query", "pageToken"], u);
  const c = f(e, ["filter"]);
  i !== void 0 && c != null && d(i, ["_query", "filter"], c);
  const h = f(e, ["queryBase"]);
  return i !== void 0 && h != null && d(i, ["_url", "models_url"], tT(t, h)), s;
}
function M1(t, e) {
  const i = {},
    s = f(e, ["config"]);
  return s != null && C1(t, s, i), i;
}
function R1(t, e) {
  const i = {},
    s = f(e, ["config"]);
  return s != null && x1(t, s, i), i;
}
function w1(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["nextPageToken"]);
  s != null && d(e, ["nextPageToken"], s);
  const a = f(t, ["_self"]);
  if (a != null) {
    let u = nT(a);
    Array.isArray(u) && (u = u.map((c) => pf(c))), d(e, ["models"], u);
  }
  return e;
}
function N1(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["nextPageToken"]);
  s != null && d(e, ["nextPageToken"], s);
  const a = f(t, ["_self"]);
  if (a != null) {
    let u = nT(a);
    Array.isArray(u) && (u = u.map((c) => mf(c))), d(e, ["models"], u);
  }
  return e;
}
function b1(t) {
  const e = {},
    i = f(t, ["maskMode"]);
  i != null && d(e, ["maskMode"], i);
  const s = f(t, ["segmentationClasses"]);
  s != null && d(e, ["maskClasses"], s);
  const a = f(t, ["maskDilation"]);
  return a != null && d(e, ["dilation"], a), e;
}
function pf(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["name"], i);
  const s = f(t, ["displayName"]);
  s != null && d(e, ["displayName"], s);
  const a = f(t, ["description"]);
  a != null && d(e, ["description"], a);
  const u = f(t, ["version"]);
  u != null && d(e, ["version"], u);
  const c = f(t, ["_self"]);
  c != null && d(e, ["tunedModelInfo"], J1(c));
  const h = f(t, ["inputTokenLimit"]);
  h != null && d(e, ["inputTokenLimit"], h);
  const g = f(t, ["outputTokenLimit"]);
  g != null && d(e, ["outputTokenLimit"], g);
  const p = f(t, ["supportedGenerationMethods"]);
  p != null && d(e, ["supportedActions"], p);
  const v = f(t, ["temperature"]);
  v != null && d(e, ["temperature"], v);
  const T = f(t, ["maxTemperature"]);
  T != null && d(e, ["maxTemperature"], T);
  const S = f(t, ["topP"]);
  S != null && d(e, ["topP"], S);
  const _ = f(t, ["topK"]);
  _ != null && d(e, ["topK"], _);
  const C = f(t, ["thinking"]);
  return C != null && d(e, ["thinking"], C), e;
}
function mf(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["name"], i);
  const s = f(t, ["displayName"]);
  s != null && d(e, ["displayName"], s);
  const a = f(t, ["description"]);
  a != null && d(e, ["description"], a);
  const u = f(t, ["versionId"]);
  u != null && d(e, ["version"], u);
  const c = f(t, ["deployedModels"]);
  if (c != null) {
    let T = c;
    Array.isArray(T) && (T = T.map((S) => OR(S))), d(e, ["endpoints"], T);
  }
  const h = f(t, ["labels"]);
  h != null && d(e, ["labels"], h);
  const g = f(t, ["_self"]);
  g != null && d(e, ["tunedModelInfo"], K1(g));
  const p = f(t, ["defaultCheckpointId"]);
  p != null && d(e, ["defaultCheckpointId"], p);
  const v = f(t, ["checkpoints"]);
  if (v != null) {
    let T = v;
    Array.isArray(T) && (T = T.map((S) => S)), d(e, ["checkpoints"], T);
  }
  return e;
}
function D1(t) {
  const e = {},
    i = f(t, ["mediaResolution"]);
  i != null && d(e, ["mediaResolution"], i);
  const s = f(t, ["codeExecutionResult"]);
  s != null && d(e, ["codeExecutionResult"], s);
  const a = f(t, ["executableCode"]);
  a != null && d(e, ["executableCode"], a);
  const u = f(t, ["fileData"]);
  u != null && d(e, ["fileData"], FR(u));
  const c = f(t, ["functionCall"]);
  c != null && d(e, ["functionCall"], YR(c));
  const h = f(t, ["functionResponse"]);
  h != null && d(e, ["functionResponse"], h);
  const g = f(t, ["inlineData"]);
  g != null && d(e, ["inlineData"], gR(g));
  const p = f(t, ["text"]);
  p != null && d(e, ["text"], p);
  const v = f(t, ["thought"]);
  v != null && d(e, ["thought"], v);
  const T = f(t, ["thoughtSignature"]);
  T != null && d(e, ["thoughtSignature"], T);
  const S = f(t, ["videoMetadata"]);
  return S != null && d(e, ["videoMetadata"], S), e;
}
function I1(t) {
  const e = {},
    i = f(t, ["productImage"]);
  return i != null && d(e, ["image"], sn(i)), e;
}
function U1(t, e) {
  const i = {},
    s = f(t, ["numberOfImages"]);
  e !== void 0 && s != null && d(e, ["parameters", "sampleCount"], s);
  const a = f(t, ["baseSteps"]);
  e !== void 0 && a != null && d(e, ["parameters", "baseSteps"], a);
  const u = f(t, ["outputGcsUri"]);
  e !== void 0 && u != null && d(e, ["parameters", "storageUri"], u);
  const c = f(t, ["seed"]);
  e !== void 0 && c != null && d(e, ["parameters", "seed"], c);
  const h = f(t, ["safetyFilterLevel"]);
  e !== void 0 && h != null && d(e, ["parameters", "safetySetting"], h);
  const g = f(t, ["personGeneration"]);
  e !== void 0 && g != null && d(e, ["parameters", "personGeneration"], g);
  const p = f(t, ["addWatermark"]);
  e !== void 0 && p != null && d(e, ["parameters", "addWatermark"], p);
  const v = f(t, ["outputMimeType"]);
  e !== void 0 &&
    v != null &&
    d(e, ["parameters", "outputOptions", "mimeType"], v);
  const T = f(t, ["outputCompressionQuality"]);
  e !== void 0 &&
    T != null &&
    d(e, ["parameters", "outputOptions", "compressionQuality"], T);
  const S = f(t, ["enhancePrompt"]);
  e !== void 0 && S != null && d(e, ["parameters", "enhancePrompt"], S);
  const _ = f(t, ["labels"]);
  return e !== void 0 && _ != null && d(e, ["labels"], _), i;
}
function L1(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["source"]);
  a != null && P1(a, i);
  const u = f(e, ["config"]);
  return u != null && U1(u, i), i;
}
function V1(t) {
  const e = {},
    i = f(t, ["predictions"]);
  if (i != null) {
    let s = i;
    Array.isArray(s) && (s = s.map((a) => rr(a))), d(e, ["generatedImages"], s);
  }
  return e;
}
function P1(t, e) {
  const i = {},
    s = f(t, ["prompt"]);
  e !== void 0 && s != null && d(e, ["instances[0]", "prompt"], s);
  const a = f(t, ["personImage"]);
  e !== void 0 &&
    a != null &&
    d(e, ["instances[0]", "personImage", "image"], sn(a));
  const u = f(t, ["productImages"]);
  if (e !== void 0 && u != null) {
    let c = u;
    Array.isArray(c) && (c = c.map((h) => I1(h))),
      d(e, ["instances[0]", "productImages"], c);
  }
  return i;
}
function H1(t) {
  const e = {},
    i = f(t, ["referenceImage"]);
  i != null && d(e, ["referenceImage"], sn(i));
  const s = f(t, ["referenceId"]);
  s != null && d(e, ["referenceId"], s);
  const a = f(t, ["referenceType"]);
  a != null && d(e, ["referenceType"], a);
  const u = f(t, ["maskImageConfig"]);
  u != null && d(e, ["maskImageConfig"], b1(u));
  const c = f(t, ["controlImageConfig"]);
  c != null && d(e, ["controlImageConfig"], AR(c));
  const h = f(t, ["styleImageConfig"]);
  h != null && d(e, ["styleImageConfig"], h);
  const g = f(t, ["subjectImageConfig"]);
  return g != null && d(e, ["subjectImageConfig"], g), e;
}
function uT(t) {
  const e = {},
    i = f(t, ["safetyAttributes", "categories"]);
  i != null && d(e, ["categories"], i);
  const s = f(t, ["safetyAttributes", "scores"]);
  s != null && d(e, ["scores"], s);
  const a = f(t, ["contentType"]);
  return a != null && d(e, ["contentType"], a), e;
}
function cT(t) {
  const e = {},
    i = f(t, ["safetyAttributes", "categories"]);
  i != null && d(e, ["categories"], i);
  const s = f(t, ["safetyAttributes", "scores"]);
  s != null && d(e, ["scores"], s);
  const a = f(t, ["contentType"]);
  return a != null && d(e, ["contentType"], a), e;
}
function G1(t) {
  const e = {},
    i = f(t, ["category"]);
  if ((i != null && d(e, ["category"], i), f(t, ["method"]) !== void 0))
    throw new Error("method parameter is not supported in Gemini API.");
  const s = f(t, ["threshold"]);
  return s != null && d(e, ["threshold"], s), e;
}
function k1(t) {
  const e = {},
    i = f(t, ["image"]);
  return i != null && d(e, ["image"], sn(i)), e;
}
function B1(t, e) {
  const i = {},
    s = f(t, ["mode"]);
  e !== void 0 && s != null && d(e, ["parameters", "mode"], s);
  const a = f(t, ["maxPredictions"]);
  e !== void 0 && a != null && d(e, ["parameters", "maxPredictions"], a);
  const u = f(t, ["confidenceThreshold"]);
  e !== void 0 && u != null && d(e, ["parameters", "confidenceThreshold"], u);
  const c = f(t, ["maskDilation"]);
  e !== void 0 && c != null && d(e, ["parameters", "maskDilation"], c);
  const h = f(t, ["binaryColorThreshold"]);
  e !== void 0 && h != null && d(e, ["parameters", "binaryColorThreshold"], h);
  const g = f(t, ["labels"]);
  return e !== void 0 && g != null && d(e, ["labels"], g), i;
}
function z1(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["source"]);
  a != null && O1(a, i);
  const u = f(e, ["config"]);
  return u != null && B1(u, i), i;
}
function q1(t) {
  const e = {},
    i = f(t, ["predictions"]);
  if (i != null) {
    let s = i;
    Array.isArray(s) && (s = s.map((a) => h1(a))), d(e, ["generatedMasks"], s);
  }
  return e;
}
function O1(t, e) {
  const i = {},
    s = f(t, ["prompt"]);
  e !== void 0 && s != null && d(e, ["instances[0]", "prompt"], s);
  const a = f(t, ["image"]);
  e !== void 0 && a != null && d(e, ["instances[0]", "image"], sn(a));
  const u = f(t, ["scribbleImage"]);
  return (
    e !== void 0 && u != null && d(e, ["instances[0]", "scribble"], k1(u)), i
  );
}
function F1(t) {
  const e = {},
    i = f(t, ["functionCallingConfig"]);
  i != null && d(e, ["functionCallingConfig"], JR(i));
  const s = f(t, ["retrievalConfig"]);
  return s != null && d(e, ["retrievalConfig"], s), e;
}
function Y1(t) {
  const e = {},
    i = f(t, ["functionDeclarations"]);
  if (i != null) {
    let v = i;
    Array.isArray(v) && (v = v.map((T) => T)),
      d(e, ["functionDeclarations"], v);
  }
  if (f(t, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const s = f(t, ["googleSearchRetrieval"]);
  s != null && d(e, ["googleSearchRetrieval"], s);
  const a = f(t, ["computerUse"]);
  a != null && d(e, ["computerUse"], a);
  const u = f(t, ["fileSearch"]);
  u != null && d(e, ["fileSearch"], u);
  const c = f(t, ["codeExecution"]);
  if (
    (c != null && d(e, ["codeExecution"], c),
    f(t, ["enterpriseWebSearch"]) !== void 0)
  )
    throw new Error(
      "enterpriseWebSearch parameter is not supported in Gemini API."
    );
  const h = f(t, ["googleMaps"]);
  h != null && d(e, ["googleMaps"], T1(h));
  const g = f(t, ["googleSearch"]);
  g != null && d(e, ["googleSearch"], S1(g));
  const p = f(t, ["urlContext"]);
  return p != null && d(e, ["urlContext"], p), e;
}
function fT(t) {
  const e = {},
    i = f(t, ["functionDeclarations"]);
  if (i != null) {
    let T = i;
    Array.isArray(T) && (T = T.map((S) => KR(S))),
      d(e, ["functionDeclarations"], T);
  }
  const s = f(t, ["retrieval"]);
  s != null && d(e, ["retrieval"], s);
  const a = f(t, ["googleSearchRetrieval"]);
  a != null && d(e, ["googleSearchRetrieval"], a);
  const u = f(t, ["computerUse"]);
  if ((u != null && d(e, ["computerUse"], u), f(t, ["fileSearch"]) !== void 0))
    throw new Error("fileSearch parameter is not supported in Vertex AI.");
  const c = f(t, ["codeExecution"]);
  c != null && d(e, ["codeExecution"], c);
  const h = f(t, ["enterpriseWebSearch"]);
  h != null && d(e, ["enterpriseWebSearch"], h);
  const g = f(t, ["googleMaps"]);
  g != null && d(e, ["googleMaps"], g);
  const p = f(t, ["googleSearch"]);
  p != null && d(e, ["googleSearch"], p);
  const v = f(t, ["urlContext"]);
  return v != null && d(e, ["urlContext"], v), e;
}
function J1(t) {
  const e = {},
    i = f(t, ["baseModel"]);
  i != null && d(e, ["baseModel"], i);
  const s = f(t, ["createTime"]);
  s != null && d(e, ["createTime"], s);
  const a = f(t, ["updateTime"]);
  return a != null && d(e, ["updateTime"], a), e;
}
function K1(t) {
  const e = {},
    i = f(t, ["labels", "google-vertex-llm-tuning-base-model-id"]);
  i != null && d(e, ["baseModel"], i);
  const s = f(t, ["createTime"]);
  s != null && d(e, ["createTime"], s);
  const a = f(t, ["updateTime"]);
  return a != null && d(e, ["updateTime"], a), e;
}
function X1(t, e) {
  const i = {},
    s = f(t, ["displayName"]);
  e !== void 0 && s != null && d(e, ["displayName"], s);
  const a = f(t, ["description"]);
  e !== void 0 && a != null && d(e, ["description"], a);
  const u = f(t, ["defaultCheckpointId"]);
  return e !== void 0 && u != null && d(e, ["defaultCheckpointId"], u), i;
}
function Q1(t, e) {
  const i = {},
    s = f(t, ["displayName"]);
  e !== void 0 && s != null && d(e, ["displayName"], s);
  const a = f(t, ["description"]);
  e !== void 0 && a != null && d(e, ["description"], a);
  const u = f(t, ["defaultCheckpointId"]);
  return e !== void 0 && u != null && d(e, ["defaultCheckpointId"], u), i;
}
function Z1(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "name"], xe(t, s));
  const a = f(e, ["config"]);
  return a != null && X1(a, i), i;
}
function $1(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["config"]);
  return a != null && Q1(a, i), i;
}
function W1(t, e) {
  const i = {},
    s = f(t, ["outputGcsUri"]);
  e !== void 0 && s != null && d(e, ["parameters", "storageUri"], s);
  const a = f(t, ["safetyFilterLevel"]);
  e !== void 0 && a != null && d(e, ["parameters", "safetySetting"], a);
  const u = f(t, ["personGeneration"]);
  e !== void 0 && u != null && d(e, ["parameters", "personGeneration"], u);
  const c = f(t, ["includeRaiReason"]);
  e !== void 0 && c != null && d(e, ["parameters", "includeRaiReason"], c);
  const h = f(t, ["outputMimeType"]);
  e !== void 0 &&
    h != null &&
    d(e, ["parameters", "outputOptions", "mimeType"], h);
  const g = f(t, ["outputCompressionQuality"]);
  e !== void 0 &&
    g != null &&
    d(e, ["parameters", "outputOptions", "compressionQuality"], g);
  const p = f(t, ["enhanceInputImage"]);
  e !== void 0 &&
    p != null &&
    d(e, ["parameters", "upscaleConfig", "enhanceInputImage"], p);
  const v = f(t, ["imagePreservationFactor"]);
  e !== void 0 &&
    v != null &&
    d(e, ["parameters", "upscaleConfig", "imagePreservationFactor"], v);
  const T = f(t, ["labels"]);
  e !== void 0 && T != null && d(e, ["labels"], T);
  const S = f(t, ["numberOfImages"]);
  e !== void 0 && S != null && d(e, ["parameters", "sampleCount"], S);
  const _ = f(t, ["mode"]);
  return e !== void 0 && _ != null && d(e, ["parameters", "mode"], _), i;
}
function j1(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["_url", "model"], xe(t, s));
  const a = f(e, ["image"]);
  a != null && d(i, ["instances[0]", "image"], sn(a));
  const u = f(e, ["upscaleFactor"]);
  u != null && d(i, ["parameters", "upscaleConfig", "upscaleFactor"], u);
  const c = f(e, ["config"]);
  return c != null && W1(c, i), i;
}
function ew(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["predictions"]);
  if (s != null) {
    let a = s;
    Array.isArray(a) && (a = a.map((u) => rr(u))), d(e, ["generatedImages"], a);
  }
  return e;
}
function tw(t) {
  const e = {},
    i = f(t, ["uri"]);
  i != null && d(e, ["uri"], i);
  const s = f(t, ["encodedVideo"]);
  s != null && d(e, ["videoBytes"], hi(s));
  const a = f(t, ["encoding"]);
  return a != null && d(e, ["mimeType"], a), e;
}
function nw(t) {
  const e = {},
    i = f(t, ["gcsUri"]);
  i != null && d(e, ["uri"], i);
  const s = f(t, ["bytesBase64Encoded"]);
  s != null && d(e, ["videoBytes"], hi(s));
  const a = f(t, ["mimeType"]);
  return a != null && d(e, ["mimeType"], a), e;
}
function iw(t) {
  const e = {},
    i = f(t, ["image"]);
  i != null && d(e, ["_self"], sn(i));
  const s = f(t, ["maskMode"]);
  return s != null && d(e, ["maskMode"], s), e;
}
function ow(t) {
  const e = {},
    i = f(t, ["image"]);
  i != null && d(e, ["image"], ur(i));
  const s = f(t, ["referenceType"]);
  return s != null && d(e, ["referenceType"], s), e;
}
function sw(t) {
  const e = {},
    i = f(t, ["image"]);
  i != null && d(e, ["image"], sn(i));
  const s = f(t, ["referenceType"]);
  return s != null && d(e, ["referenceType"], s), e;
}
function dT(t) {
  const e = {},
    i = f(t, ["uri"]);
  i != null && d(e, ["uri"], i);
  const s = f(t, ["videoBytes"]);
  s != null && d(e, ["encodedVideo"], hi(s));
  const a = f(t, ["mimeType"]);
  return a != null && d(e, ["encoding"], a), e;
}
function hT(t) {
  const e = {},
    i = f(t, ["uri"]);
  i != null && d(e, ["gcsUri"], i);
  const s = f(t, ["videoBytes"]);
  s != null && d(e, ["bytesBase64Encoded"], hi(s));
  const a = f(t, ["mimeType"]);
  return a != null && d(e, ["mimeType"], a), e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function lw(t, e) {
  const i = {},
    s = f(t, ["displayName"]);
  return e !== void 0 && s != null && d(e, ["displayName"], s), i;
}
function aw(t) {
  const e = {},
    i = f(t, ["config"]);
  return i != null && lw(i, e), e;
}
function rw(t, e) {
  const i = {},
    s = f(t, ["force"]);
  return e !== void 0 && s != null && d(e, ["_query", "force"], s), i;
}
function uw(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["_url", "name"], i);
  const s = f(t, ["config"]);
  return s != null && rw(s, e), e;
}
function cw(t) {
  const e = {},
    i = f(t, ["name"]);
  return i != null && d(e, ["_url", "name"], i), e;
}
function fw(t, e) {
  const i = {},
    s = f(t, ["customMetadata"]);
  if (e !== void 0 && s != null) {
    let u = s;
    Array.isArray(u) && (u = u.map((c) => c)), d(e, ["customMetadata"], u);
  }
  const a = f(t, ["chunkingConfig"]);
  return e !== void 0 && a != null && d(e, ["chunkingConfig"], a), i;
}
function dw(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["name"], i);
  const s = f(t, ["metadata"]);
  s != null && d(e, ["metadata"], s);
  const a = f(t, ["done"]);
  a != null && d(e, ["done"], a);
  const u = f(t, ["error"]);
  u != null && d(e, ["error"], u);
  const c = f(t, ["response"]);
  return c != null && d(e, ["response"], pw(c)), e;
}
function hw(t) {
  const e = {},
    i = f(t, ["fileSearchStoreName"]);
  i != null && d(e, ["_url", "file_search_store_name"], i);
  const s = f(t, ["fileName"]);
  s != null && d(e, ["fileName"], s);
  const a = f(t, ["config"]);
  return a != null && fw(a, e), e;
}
function pw(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["parent"]);
  s != null && d(e, ["parent"], s);
  const a = f(t, ["documentName"]);
  return a != null && d(e, ["documentName"], a), e;
}
function mw(t, e) {
  const i = {},
    s = f(t, ["pageSize"]);
  e !== void 0 && s != null && d(e, ["_query", "pageSize"], s);
  const a = f(t, ["pageToken"]);
  return e !== void 0 && a != null && d(e, ["_query", "pageToken"], a), i;
}
function gw(t) {
  const e = {},
    i = f(t, ["config"]);
  return i != null && mw(i, e), e;
}
function yw(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["nextPageToken"]);
  s != null && d(e, ["nextPageToken"], s);
  const a = f(t, ["fileSearchStores"]);
  if (a != null) {
    let u = a;
    Array.isArray(u) && (u = u.map((c) => c)), d(e, ["fileSearchStores"], u);
  }
  return e;
}
function pT(t, e) {
  const i = {},
    s = f(t, ["mimeType"]);
  e !== void 0 && s != null && d(e, ["mimeType"], s);
  const a = f(t, ["displayName"]);
  e !== void 0 && a != null && d(e, ["displayName"], a);
  const u = f(t, ["customMetadata"]);
  if (e !== void 0 && u != null) {
    let h = u;
    Array.isArray(h) && (h = h.map((g) => g)), d(e, ["customMetadata"], h);
  }
  const c = f(t, ["chunkingConfig"]);
  return e !== void 0 && c != null && d(e, ["chunkingConfig"], c), i;
}
function vw(t) {
  const e = {},
    i = f(t, ["fileSearchStoreName"]);
  i != null && d(e, ["_url", "file_search_store_name"], i);
  const s = f(t, ["config"]);
  return s != null && pT(s, e), e;
}
function Tw(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  return i != null && d(e, ["sdkHttpResponse"], i), e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Sw = "Content-Type",
  Ew = "X-Server-Timeout",
  _w = "User-Agent",
  gf = "x-goog-api-client",
  Aw = "1.34.0",
  Cw = `google-genai-sdk/${Aw}`,
  xw = "v1beta1",
  Mw = "v1beta";
class Rw {
  constructor(e) {
    var i, s;
    this.clientOptions = Object.assign(Object.assign({}, e), {
      project: e.project,
      location: e.location,
      apiKey: e.apiKey,
      vertexai: e.vertexai,
    });
    const a = {};
    this.clientOptions.vertexai
      ? ((a.apiVersion =
          (i = this.clientOptions.apiVersion) !== null && i !== void 0
            ? i
            : xw),
        (a.baseUrl = this.baseUrlFromProjectLocation()),
        this.normalizeAuthParameters())
      : ((a.apiVersion =
          (s = this.clientOptions.apiVersion) !== null && s !== void 0
            ? s
            : Mw),
        (a.baseUrl = "https://generativelanguage.googleapis.com/")),
      (a.headers = this.getDefaultHeaders()),
      (this.clientOptions.httpOptions = a),
      e.httpOptions &&
        (this.clientOptions.httpOptions = this.patchHttpOptions(
          a,
          e.httpOptions
        ));
  }
  baseUrlFromProjectLocation() {
    return this.clientOptions.project &&
      this.clientOptions.location &&
      this.clientOptions.location !== "global"
      ? `https://${this.clientOptions.location}-aiplatform.googleapis.com/`
      : "https://aiplatform.googleapis.com/";
  }
  normalizeAuthParameters() {
    if (this.clientOptions.project && this.clientOptions.location) {
      this.clientOptions.apiKey = void 0;
      return;
    }
    (this.clientOptions.project = void 0),
      (this.clientOptions.location = void 0);
  }
  isVertexAI() {
    var e;
    return (e = this.clientOptions.vertexai) !== null && e !== void 0 ? e : !1;
  }
  getProject() {
    return this.clientOptions.project;
  }
  getLocation() {
    return this.clientOptions.location;
  }
  async getAuthHeaders() {
    const e = new Headers();
    return await this.clientOptions.auth.addAuthHeaders(e), e;
  }
  getApiVersion() {
    if (
      this.clientOptions.httpOptions &&
      this.clientOptions.httpOptions.apiVersion !== void 0
    )
      return this.clientOptions.httpOptions.apiVersion;
    throw new Error("API version is not set.");
  }
  getBaseUrl() {
    if (
      this.clientOptions.httpOptions &&
      this.clientOptions.httpOptions.baseUrl !== void 0
    )
      return this.clientOptions.httpOptions.baseUrl;
    throw new Error("Base URL is not set.");
  }
  getRequestUrl() {
    return this.getRequestUrlInternal(this.clientOptions.httpOptions);
  }
  getHeaders() {
    if (
      this.clientOptions.httpOptions &&
      this.clientOptions.httpOptions.headers !== void 0
    )
      return this.clientOptions.httpOptions.headers;
    throw new Error("Headers are not set.");
  }
  getRequestUrlInternal(e) {
    if (!e || e.baseUrl === void 0 || e.apiVersion === void 0)
      throw new Error("HTTP options are not correctly set.");
    const s = [e.baseUrl.endsWith("/") ? e.baseUrl.slice(0, -1) : e.baseUrl];
    return (
      e.apiVersion && e.apiVersion !== "" && s.push(e.apiVersion), s.join("/")
    );
  }
  getBaseResourcePath() {
    return `projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`;
  }
  getApiKey() {
    return this.clientOptions.apiKey;
  }
  getWebsocketBaseUrl() {
    const e = this.getBaseUrl(),
      i = new URL(e);
    return (i.protocol = i.protocol == "http:" ? "ws" : "wss"), i.toString();
  }
  setBaseUrl(e) {
    if (this.clientOptions.httpOptions)
      this.clientOptions.httpOptions.baseUrl = e;
    else throw new Error("HTTP options are not correctly set.");
  }
  constructUrl(e, i, s) {
    const a = [this.getRequestUrlInternal(i)];
    return (
      s && a.push(this.getBaseResourcePath()),
      e !== "" && a.push(e),
      new URL(`${a.join("/")}`)
    );
  }
  shouldPrependVertexProjectPath(e) {
    return !(
      this.clientOptions.apiKey ||
      !this.clientOptions.vertexai ||
      e.path.startsWith("projects/") ||
      (e.httpMethod === "GET" && e.path.startsWith("publishers/google/models"))
    );
  }
  async request(e) {
    let i = this.clientOptions.httpOptions;
    e.httpOptions &&
      (i = this.patchHttpOptions(
        this.clientOptions.httpOptions,
        e.httpOptions
      ));
    const s = this.shouldPrependVertexProjectPath(e),
      a = this.constructUrl(e.path, i, s);
    if (e.queryParams)
      for (const [c, h] of Object.entries(e.queryParams))
        a.searchParams.append(c, String(h));
    let u = {};
    if (e.httpMethod === "GET") {
      if (e.body && e.body !== "{}")
        throw new Error(
          "Request body should be empty for GET request, but got non empty request body"
        );
    } else u.body = e.body;
    return (
      (u = await this.includeExtraHttpOptionsToRequestInit(
        u,
        i,
        a.toString(),
        e.abortSignal
      )),
      this.unaryApiCall(a, u, e.httpMethod)
    );
  }
  patchHttpOptions(e, i) {
    const s = JSON.parse(JSON.stringify(e));
    for (const [a, u] of Object.entries(i))
      typeof u == "object"
        ? (s[a] = Object.assign(Object.assign({}, s[a]), u))
        : u !== void 0 && (s[a] = u);
    return s;
  }
  async requestStream(e) {
    let i = this.clientOptions.httpOptions;
    e.httpOptions &&
      (i = this.patchHttpOptions(
        this.clientOptions.httpOptions,
        e.httpOptions
      ));
    const s = this.shouldPrependVertexProjectPath(e),
      a = this.constructUrl(e.path, i, s);
    (!a.searchParams.has("alt") || a.searchParams.get("alt") !== "sse") &&
      a.searchParams.set("alt", "sse");
    let u = {};
    return (
      (u.body = e.body),
      (u = await this.includeExtraHttpOptionsToRequestInit(
        u,
        i,
        a.toString(),
        e.abortSignal
      )),
      this.streamApiCall(a, u, e.httpMethod)
    );
  }
  async includeExtraHttpOptionsToRequestInit(e, i, s, a) {
    if ((i && i.timeout) || a) {
      const u = new AbortController(),
        c = u.signal;
      if (i.timeout && (i == null ? void 0 : i.timeout) > 0) {
        const h = setTimeout(() => u.abort(), i.timeout);
        h && typeof h.unref == "function" && h.unref();
      }
      a &&
        a.addEventListener("abort", () => {
          u.abort();
        }),
        (e.signal = c);
    }
    return (
      i && i.extraBody !== null && ww(e, i.extraBody),
      (e.headers = await this.getHeadersInternal(i, s)),
      e
    );
  }
  async unaryApiCall(e, i, s) {
    return this.apiCall(
      e.toString(),
      Object.assign(Object.assign({}, i), { method: s })
    )
      .then(async (a) => (await av(a), new ff(a)))
      .catch((a) => {
        throw a instanceof Error ? a : new Error(JSON.stringify(a));
      });
  }
  async streamApiCall(e, i, s) {
    return this.apiCall(
      e.toString(),
      Object.assign(Object.assign({}, i), { method: s })
    )
      .then(async (a) => (await av(a), this.processStreamResponse(a)))
      .catch((a) => {
        throw a instanceof Error ? a : new Error(JSON.stringify(a));
      });
  }
  processStreamResponse(e) {
    return nn(this, arguments, function* () {
      var s;
      const a =
          (s = e == null ? void 0 : e.body) === null || s === void 0
            ? void 0
            : s.getReader(),
        u = new TextDecoder("utf-8");
      if (!a) throw new Error("Response body is empty");
      try {
        let c = "";
        const h = "data:",
          g = [
            `

`,
            "\r\r",
            `\r
\r
`,
          ];
        for (;;) {
          const { done: p, value: v } = yield re(a.read());
          if (p) {
            if (c.trim().length > 0)
              throw new Error("Incomplete JSON segment at the end");
            break;
          }
          const T = u.decode(v, { stream: !0 });
          try {
            const C = JSON.parse(T);
            if ("error" in C) {
              const R = JSON.parse(JSON.stringify(C.error)),
                M = R.status,
                b = R.code,
                k = `got status: ${M}. ${JSON.stringify(C)}`;
              if (b >= 400 && b < 600) throw new lr({ message: k, status: b });
            }
          } catch (C) {
            if (C.name === "ApiError") throw C;
          }
          c += T;
          let S = -1,
            _ = 0;
          for (;;) {
            (S = -1), (_ = 0);
            for (const M of g) {
              const b = c.indexOf(M);
              b !== -1 && (S === -1 || b < S) && ((S = b), (_ = M.length));
            }
            if (S === -1) break;
            const C = c.substring(0, S);
            c = c.substring(S + _);
            const R = C.trim();
            if (R.startsWith(h)) {
              const M = R.substring(h.length).trim();
              try {
                const b = new Response(M, {
                  headers: e == null ? void 0 : e.headers,
                  status: e == null ? void 0 : e.status,
                  statusText: e == null ? void 0 : e.statusText,
                });
                yield yield re(new ff(b));
              } catch (b) {
                throw new Error(`exception parsing stream chunk ${M}. ${b}`);
              }
            }
          }
        }
      } finally {
        a.releaseLock();
      }
    });
  }
  async apiCall(e, i) {
    return fetch(e, i).catch((s) => {
      throw new Error(`exception ${s} sending request`);
    });
  }
  getDefaultHeaders() {
    const e = {},
      i = Cw + " " + this.clientOptions.userAgentExtra;
    return (e[_w] = i), (e[gf] = i), (e[Sw] = "application/json"), e;
  }
  async getHeadersInternal(e, i) {
    const s = new Headers();
    if (e && e.headers) {
      for (const [a, u] of Object.entries(e.headers)) s.append(a, u);
      e.timeout &&
        e.timeout > 0 &&
        s.append(Ew, String(Math.ceil(e.timeout / 1e3)));
    }
    return await this.clientOptions.auth.addAuthHeaders(s, i), s;
  }
  getFileName(e) {
    var i;
    let s = "";
    return (
      typeof e == "string" &&
        ((s = e.replace(/[/\\]+$/, "")),
        (s = (i = s.split(/[/\\]/).pop()) !== null && i !== void 0 ? i : "")),
      s
    );
  }
  async uploadFile(e, i) {
    var s;
    const a = {};
    i != null &&
      ((a.mimeType = i.mimeType),
      (a.name = i.name),
      (a.displayName = i.displayName)),
      a.name && !a.name.startsWith("files/") && (a.name = `files/${a.name}`);
    const u = this.clientOptions.uploader,
      c = await u.stat(e);
    a.sizeBytes = String(c.size);
    const h =
      (s = i == null ? void 0 : i.mimeType) !== null && s !== void 0
        ? s
        : c.type;
    if (h === void 0 || h === "")
      throw new Error(
        "Can not determine mimeType. Please provide mimeType in the config."
      );
    a.mimeType = h;
    const g = { file: a },
      p = this.getFileName(e),
      v = j("upload/v1beta/files", g._url),
      T = await this.fetchUploadUrl(
        v,
        a.sizeBytes,
        a.mimeType,
        p,
        g,
        i == null ? void 0 : i.httpOptions
      );
    return u.upload(e, T, this);
  }
  async uploadFileToFileSearchStore(e, i, s) {
    var a;
    const u = this.clientOptions.uploader,
      c = await u.stat(i),
      h = String(c.size),
      g =
        (a = s == null ? void 0 : s.mimeType) !== null && a !== void 0
          ? a
          : c.type;
    if (g === void 0 || g === "")
      throw new Error(
        "Can not determine mimeType. Please provide mimeType in the config."
      );
    const p = `upload/v1beta/${e}:uploadToFileSearchStore`,
      v = this.getFileName(i),
      T = {};
    s != null && pT(s, T);
    const S = await this.fetchUploadUrl(
      p,
      h,
      g,
      v,
      T,
      s == null ? void 0 : s.httpOptions
    );
    return u.uploadToFileSearchStore(i, S, this);
  }
  async downloadFile(e) {
    await this.clientOptions.downloader.download(e, this);
  }
  async fetchUploadUrl(e, i, s, a, u, c) {
    var h;
    let g = {};
    c
      ? (g = c)
      : (g = {
          apiVersion: "",
          headers: Object.assign(
            {
              "Content-Type": "application/json",
              "X-Goog-Upload-Protocol": "resumable",
              "X-Goog-Upload-Command": "start",
              "X-Goog-Upload-Header-Content-Length": `${i}`,
              "X-Goog-Upload-Header-Content-Type": `${s}`,
            },
            a ? { "X-Goog-Upload-File-Name": a } : {}
          ),
        });
    const p = await this.request({
      path: e,
      body: JSON.stringify(u),
      httpMethod: "POST",
      httpOptions: g,
    });
    if (!p || !(p != null && p.headers))
      throw new Error(
        "Server did not return an HttpResponse or the returned HttpResponse did not have headers."
      );
    const v =
      (h = p == null ? void 0 : p.headers) === null || h === void 0
        ? void 0
        : h["x-goog-upload-url"];
    if (v === void 0)
      throw new Error(
        "Failed to get upload url. Server did not return the x-google-upload-url in the headers"
      );
    return v;
  }
}
async function av(t) {
  var e;
  if (t === void 0) throw new Error("response is undefined");
  if (!t.ok) {
    const i = t.status;
    let s;
    !((e = t.headers.get("content-type")) === null || e === void 0) &&
    e.includes("application/json")
      ? (s = await t.json())
      : (s = {
          error: {
            message: await t.text(),
            code: t.status,
            status: t.statusText,
          },
        });
    const a = JSON.stringify(s);
    throw i >= 400 && i < 600
      ? new lr({ message: a, status: i })
      : new Error(a);
  }
}
function ww(t, e) {
  if (!e || Object.keys(e).length === 0) return;
  if (t.body instanceof Blob) {
    console.warn(
      "includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies."
    );
    return;
  }
  let i = {};
  if (typeof t.body == "string" && t.body.length > 0)
    try {
      const u = JSON.parse(t.body);
      if (typeof u == "object" && u !== null && !Array.isArray(u)) i = u;
      else {
        console.warn(
          "includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body."
        );
        return;
      }
    } catch {
      console.warn(
        "includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body."
      );
      return;
    }
  function s(u, c) {
    const h = Object.assign({}, u);
    for (const g in c)
      if (Object.prototype.hasOwnProperty.call(c, g)) {
        const p = c[g],
          v = h[g];
        p &&
        typeof p == "object" &&
        !Array.isArray(p) &&
        v &&
        typeof v == "object" &&
        !Array.isArray(v)
          ? (h[g] = s(v, p))
          : (v &&
              p &&
              typeof v != typeof p &&
              console.warn(
                `includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${g}". Original type: ${typeof v}, New type: ${typeof p}. Overwriting.`
              ),
            (h[g] = p));
      }
    return h;
  }
  const a = s(i, e);
  t.body = JSON.stringify(a);
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Nw = "mcp_used/unknown";
let bw = !1;
function mT(t) {
  for (const e of t)
    if (Dw(e) || (typeof e == "object" && "inputSchema" in e)) return !0;
  return bw;
}
function gT(t) {
  var e;
  const i = (e = t[gf]) !== null && e !== void 0 ? e : "";
  t[gf] = (i + ` ${Nw}`).trimStart();
}
function Dw(t) {
  return t !== null && typeof t == "object" && t instanceof Qf;
}
function Iw(t) {
  return nn(this, arguments, function* (i, s = 100) {
    let a,
      u = 0;
    for (; u < s; ) {
      const c = yield re(i.listTools({ cursor: a }));
      for (const h of c.tools) yield yield re(h), u++;
      if (!c.nextCursor) break;
      a = c.nextCursor;
    }
  });
}
class Qf {
  constructor(e = [], i) {
    (this.mcpTools = []),
      (this.functionNameToMcpClient = {}),
      (this.mcpClients = e),
      (this.config = i);
  }
  static create(e, i) {
    return new Qf(e, i);
  }
  async initialize() {
    var e, i, s, a;
    if (this.mcpTools.length > 0) return;
    const u = {},
      c = [];
    for (const v of this.mcpClients)
      try {
        for (
          var h = !0, g = ((i = void 0), on(Iw(v))), p;
          (p = await g.next()), (e = p.done), !e;
          h = !0
        ) {
          (a = p.value), (h = !1);
          const T = a;
          c.push(T);
          const S = T.name;
          if (u[S])
            throw new Error(
              `Duplicate function name ${S} found in MCP tools. Please ensure function names are unique.`
            );
          u[S] = v;
        }
      } catch (T) {
        i = { error: T };
      } finally {
        try {
          !h && !e && (s = g.return) && (await s.call(g));
        } finally {
          if (i) throw i.error;
        }
      }
    (this.mcpTools = c), (this.functionNameToMcpClient = u);
  }
  async tool() {
    return await this.initialize(), cx(this.mcpTools, this.config);
  }
  async callTool(e) {
    await this.initialize();
    const i = [];
    for (const s of e)
      if (s.name in this.functionNameToMcpClient) {
        const a = this.functionNameToMcpClient[s.name];
        let u;
        this.config.timeout && (u = { timeout: this.config.timeout });
        const c = await a.callTool(
          { name: s.name, arguments: s.args },
          void 0,
          u
        );
        i.push({
          functionResponse: {
            name: s.name,
            response: c.isError ? { error: c } : c,
          },
        });
      }
    return i;
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ async function Uw(t, e, i) {
  const s = new nx();
  let a;
  i.data instanceof Blob
    ? (a = JSON.parse(await i.data.text()))
    : (a = JSON.parse(i.data)),
    Object.assign(s, a),
    e(s);
}
class Lw {
  constructor(e, i, s) {
    (this.apiClient = e), (this.auth = i), (this.webSocketFactory = s);
  }
  async connect(e) {
    var i, s;
    if (this.apiClient.isVertexAI())
      throw new Error("Live music is not supported for Vertex AI.");
    console.warn(
      "Live music generation is experimental and may change in future versions."
    );
    const a = this.apiClient.getWebsocketBaseUrl(),
      u = this.apiClient.getApiVersion(),
      c = Hw(this.apiClient.getDefaultHeaders()),
      h = this.apiClient.getApiKey(),
      g = `${a}/ws/google.ai.generativelanguage.${u}.GenerativeService.BidiGenerateMusic?key=${h}`;
    let p = () => {};
    const v = new Promise((P) => {
        p = P;
      }),
      T = e.callbacks,
      S = function () {
        p({});
      },
      _ = this.apiClient,
      C = {
        onopen: S,
        onmessage: (P) => {
          Uw(_, T.onmessage, P);
        },
        onerror:
          (i = T == null ? void 0 : T.onerror) !== null && i !== void 0
            ? i
            : function (P) {},
        onclose:
          (s = T == null ? void 0 : T.onclose) !== null && s !== void 0
            ? s
            : function (P) {},
      },
      R = this.webSocketFactory.create(g, Pw(c), C);
    R.connect(), await v;
    const k = { setup: { model: xe(this.apiClient, e.model) } };
    return R.send(JSON.stringify(k)), new Vw(R, this.apiClient);
  }
}
class Vw {
  constructor(e, i) {
    (this.conn = e), (this.apiClient = i);
  }
  async setWeightedPrompts(e) {
    if (!e.weightedPrompts || Object.keys(e.weightedPrompts).length === 0)
      throw new Error(
        "Weighted prompts must be set and contain at least one entry."
      );
    const i = aR(e);
    this.conn.send(JSON.stringify({ clientContent: i }));
  }
  async setMusicGenerationConfig(e) {
    e.musicGenerationConfig || (e.musicGenerationConfig = {});
    const i = lR(e);
    this.conn.send(JSON.stringify(i));
  }
  sendPlaybackControl(e) {
    const i = { playbackControl: e };
    this.conn.send(JSON.stringify(i));
  }
  play() {
    this.sendPlaybackControl(No.PLAY);
  }
  pause() {
    this.sendPlaybackControl(No.PAUSE);
  }
  stop() {
    this.sendPlaybackControl(No.STOP);
  }
  resetContext() {
    this.sendPlaybackControl(No.RESET_CONTEXT);
  }
  close() {
    this.conn.close();
  }
}
function Pw(t) {
  const e = {};
  return (
    t.forEach((i, s) => {
      e[s] = i;
    }),
    e
  );
}
function Hw(t) {
  const e = new Headers();
  for (const [i, s] of Object.entries(t)) e.append(i, s);
  return e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Gw =
  "FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";
async function kw(t, e, i) {
  const s = new tx();
  let a;
  i.data instanceof Blob
    ? (a = await i.data.text())
    : i.data instanceof ArrayBuffer
    ? (a = new TextDecoder().decode(i.data))
    : (a = i.data);
  const u = JSON.parse(a);
  if (t.isVertexAI()) {
    const c = cR(u);
    Object.assign(s, c);
  } else Object.assign(s, u);
  e(s);
}
class Bw {
  constructor(e, i, s) {
    (this.apiClient = e),
      (this.auth = i),
      (this.webSocketFactory = s),
      (this.music = new Lw(this.apiClient, this.auth, this.webSocketFactory));
  }
  async connect(e) {
    var i, s, a, u, c, h;
    if (e.config && e.config.httpOptions)
      throw new Error(
        "The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead."
      );
    const g = this.apiClient.getWebsocketBaseUrl(),
      p = this.apiClient.getApiVersion();
    let v;
    const T = this.apiClient.getHeaders();
    e.config && e.config.tools && mT(e.config.tools) && gT(T);
    const S = Fw(T);
    if (this.apiClient.isVertexAI())
      (v = `${g}/ws/google.cloud.aiplatform.${p}.LlmBidiService/BidiGenerateContent`),
        await this.auth.addAuthHeaders(S, v);
    else {
      const $ = this.apiClient.getApiKey();
      let ae = "BidiGenerateContent",
        ge = "key";
      $ != null &&
        $.startsWith("auth_tokens/") &&
        (console.warn(
          "Warning: Ephemeral token support is experimental and may change in future versions."
        ),
        p !== "v1alpha" &&
          console.warn(
            "Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."
          ),
        (ae = "BidiGenerateContentConstrained"),
        (ge = "access_token")),
        (v = `${g}/ws/google.ai.generativelanguage.${p}.GenerativeService.${ae}?${ge}=${$}`);
    }
    let _ = () => {};
    const C = new Promise(($) => {
        _ = $;
      }),
      R = e.callbacks,
      M = function () {
        var $;
        ($ = R == null ? void 0 : R.onopen) === null ||
          $ === void 0 ||
          $.call(R),
          _({});
      },
      b = this.apiClient,
      k = {
        onopen: M,
        onmessage: ($) => {
          kw(b, R.onmessage, $);
        },
        onerror:
          (i = R == null ? void 0 : R.onerror) !== null && i !== void 0
            ? i
            : function ($) {},
        onclose:
          (s = R == null ? void 0 : R.onclose) !== null && s !== void 0
            ? s
            : function ($) {},
      },
      P = this.webSocketFactory.create(v, Ow(S), k);
    P.connect(), await C;
    let Y = xe(this.apiClient, e.model);
    if (this.apiClient.isVertexAI() && Y.startsWith("publishers/")) {
      const $ = this.apiClient.getProject(),
        ae = this.apiClient.getLocation();
      Y = `projects/${$}/locations/${ae}/` + Y;
    }
    let q = {};
    this.apiClient.isVertexAI() &&
      ((a = e.config) === null || a === void 0
        ? void 0
        : a.responseModalities) === void 0 &&
      (e.config === void 0
        ? (e.config = { responseModalities: [Ja.AUDIO] })
        : (e.config.responseModalities = [Ja.AUDIO])),
      !((u = e.config) === null || u === void 0) &&
        u.generationConfig &&
        console.warn(
          "Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025)."
        );
    const Q =
        (h = (c = e.config) === null || c === void 0 ? void 0 : c.tools) !==
          null && h !== void 0
          ? h
          : [],
      J = [];
    for (const $ of Q)
      if (this.isCallableTool($)) {
        const ae = $;
        J.push(await ae.tool());
      } else J.push($);
    J.length > 0 && (e.config.tools = J);
    const Z = { model: Y, config: e.config, callbacks: e.callbacks };
    return (
      this.apiClient.isVertexAI()
        ? (q = sR(this.apiClient, Z))
        : (q = oR(this.apiClient, Z)),
      delete q.config,
      P.send(JSON.stringify(q)),
      new qw(P, this.apiClient)
    );
  }
  isCallableTool(e) {
    return "callTool" in e && typeof e.callTool == "function";
  }
}
const zw = { turnComplete: !0 };
class qw {
  constructor(e, i) {
    (this.conn = e), (this.apiClient = i);
  }
  tLiveClientContent(e, i) {
    if (i.turns !== null && i.turns !== void 0) {
      let s = [];
      try {
        (s = Zt(i.turns)), e.isVertexAI() || (s = s.map((a) => ar(a)));
      } catch {
        throw new Error(
          `Failed to parse client content "turns", type: '${typeof i.turns}'`
        );
      }
      return { clientContent: { turns: s, turnComplete: i.turnComplete } };
    }
    return { clientContent: { turnComplete: i.turnComplete } };
  }
  tLiveClienttToolResponse(e, i) {
    let s = [];
    if (i.functionResponses == null)
      throw new Error("functionResponses is required.");
    if (
      (Array.isArray(i.functionResponses)
        ? (s = i.functionResponses)
        : (s = [i.functionResponses]),
      s.length === 0)
    )
      throw new Error("functionResponses is required.");
    for (const u of s) {
      if (
        typeof u != "object" ||
        u === null ||
        !("name" in u) ||
        !("response" in u)
      )
        throw new Error(
          `Could not parse function response, type '${typeof u}'.`
        );
      if (!e.isVertexAI() && !("id" in u)) throw new Error(Gw);
    }
    return { toolResponse: { functionResponses: s } };
  }
  sendClientContent(e) {
    e = Object.assign(Object.assign({}, zw), e);
    const i = this.tLiveClientContent(this.apiClient, e);
    this.conn.send(JSON.stringify(i));
  }
  sendRealtimeInput(e) {
    let i = {};
    this.apiClient.isVertexAI()
      ? (i = { realtimeInput: uR(e) })
      : (i = { realtimeInput: rR(e) }),
      this.conn.send(JSON.stringify(i));
  }
  sendToolResponse(e) {
    if (e.functionResponses == null)
      throw new Error("Tool response parameters are required.");
    const i = this.tLiveClienttToolResponse(this.apiClient, e);
    this.conn.send(JSON.stringify(i));
  }
  close() {
    this.conn.close();
  }
}
function Ow(t) {
  const e = {};
  return (
    t.forEach((i, s) => {
      e[s] = i;
    }),
    e
  );
}
function Fw(t) {
  const e = new Headers();
  for (const [i, s] of Object.entries(t)) e.append(i, s);
  return e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const rv = 10;
function uv(t) {
  var e, i, s;
  if (
    !(
      (e = t == null ? void 0 : t.automaticFunctionCalling) === null ||
      e === void 0
    ) &&
    e.disable
  )
    return !0;
  let a = !1;
  for (const c of (i = t == null ? void 0 : t.tools) !== null && i !== void 0
    ? i
    : [])
    if (Ho(c)) {
      a = !0;
      break;
    }
  if (!a) return !0;
  const u =
    (s = t == null ? void 0 : t.automaticFunctionCalling) === null ||
    s === void 0
      ? void 0
      : s.maximumRemoteCalls;
  return (u && (u < 0 || !Number.isInteger(u))) || u == 0
    ? (console.warn(
        "Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:",
        u
      ),
      !0)
    : !1;
}
function Ho(t) {
  return "callTool" in t && typeof t.callTool == "function";
}
function Yw(t) {
  var e, i, s;
  return (s =
    (i = (e = t.config) === null || e === void 0 ? void 0 : e.tools) === null ||
    i === void 0
      ? void 0
      : i.some((a) => Ho(a))) !== null && s !== void 0
    ? s
    : !1;
}
function cv(t) {
  var e;
  const i = [];
  return (
    !((e = t == null ? void 0 : t.config) === null || e === void 0) &&
      e.tools &&
      t.config.tools.forEach((s, a) => {
        if (Ho(s)) return;
        const u = s;
        u.functionDeclarations &&
          u.functionDeclarations.length > 0 &&
          i.push(a);
      }),
    i
  );
}
function fv(t) {
  var e;
  return !(
    !(
      (e = t == null ? void 0 : t.automaticFunctionCalling) === null ||
      e === void 0
    ) && e.ignoreCallHistory
  );
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Jw extends Pn {
  constructor(e) {
    super(),
      (this.apiClient = e),
      (this.generateContent = async (i) => {
        var s, a, u, c, h;
        const g = await this.processParamsMaybeAddMcpUsage(i);
        if ((this.maybeMoveToResponseJsonSchem(i), !Yw(i) || uv(i.config)))
          return await this.generateContentInternal(g);
        const p = cv(i);
        if (p.length > 0) {
          const R = p.map((M) => `tools[${M}]`).join(", ");
          throw new Error(
            `Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${R}.`
          );
        }
        let v, T;
        const S = Zt(g.contents),
          _ =
            (u =
              (a =
                (s = g.config) === null || s === void 0
                  ? void 0
                  : s.automaticFunctionCalling) === null || a === void 0
                ? void 0
                : a.maximumRemoteCalls) !== null && u !== void 0
              ? u
              : rv;
        let C = 0;
        for (
          ;
          C < _ &&
          ((v = await this.generateContentInternal(g)),
          !(!v.functionCalls || v.functionCalls.length === 0));

        ) {
          const R = v.candidates[0].content,
            M = [];
          for (const b of (h =
            (c = i.config) === null || c === void 0 ? void 0 : c.tools) !==
            null && h !== void 0
            ? h
            : [])
            if (Ho(b)) {
              const P = await b.callTool(v.functionCalls);
              M.push(...P);
            }
          C++,
            (T = { role: "user", parts: M }),
            (g.contents = Zt(g.contents)),
            g.contents.push(R),
            g.contents.push(T),
            fv(g.config) && (S.push(R), S.push(T));
        }
        return fv(g.config) && (v.automaticFunctionCallingHistory = S), v;
      }),
      (this.generateContentStream = async (i) => {
        var s, a, u, c, h;
        if ((this.maybeMoveToResponseJsonSchem(i), uv(i.config))) {
          const T = await this.processParamsMaybeAddMcpUsage(i);
          return await this.generateContentStreamInternal(T);
        }
        const g = cv(i);
        if (g.length > 0) {
          const T = g.map((S) => `tools[${S}]`).join(", ");
          throw new Error(
            `Incompatible tools found at ${T}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`
          );
        }
        const p =
            (u =
              (a =
                (s = i == null ? void 0 : i.config) === null || s === void 0
                  ? void 0
                  : s.toolConfig) === null || a === void 0
                ? void 0
                : a.functionCallingConfig) === null || u === void 0
              ? void 0
              : u.streamFunctionCallArguments,
          v =
            (h =
              (c = i == null ? void 0 : i.config) === null || c === void 0
                ? void 0
                : c.automaticFunctionCalling) === null || h === void 0
              ? void 0
              : h.disable;
        if (p && !v)
          throw new Error(
            "Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature."
          );
        return await this.processAfcStream(i);
      }),
      (this.generateImages = async (i) =>
        await this.generateImagesInternal(i).then((s) => {
          var a;
          let u;
          const c = [];
          if (s != null && s.generatedImages)
            for (const g of s.generatedImages)
              g &&
              g != null &&
              g.safetyAttributes &&
              ((a = g == null ? void 0 : g.safetyAttributes) === null ||
              a === void 0
                ? void 0
                : a.contentType) === "Positive Prompt"
                ? (u = g == null ? void 0 : g.safetyAttributes)
                : c.push(g);
          let h;
          return (
            u
              ? (h = {
                  generatedImages: c,
                  positivePromptSafetyAttributes: u,
                  sdkHttpResponse: s.sdkHttpResponse,
                })
              : (h = {
                  generatedImages: c,
                  sdkHttpResponse: s.sdkHttpResponse,
                }),
            h
          );
        })),
      (this.list = async (i) => {
        var s;
        const c = {
          config: Object.assign(
            Object.assign({}, { queryBase: !0 }),
            i == null ? void 0 : i.config
          ),
        };
        if (this.apiClient.isVertexAI() && !c.config.queryBase) {
          if (!((s = c.config) === null || s === void 0) && s.filter)
            throw new Error(
              "Filtering tuned models list for Vertex AI is not currently supported"
            );
          c.config.filter = "labels.tune-type:*";
        }
        return new zi(
          Vn.PAGED_ITEM_MODELS,
          (h) => this.listInternal(h),
          await this.listInternal(c),
          c
        );
      }),
      (this.editImage = async (i) => {
        const s = {
          model: i.model,
          prompt: i.prompt,
          referenceImages: [],
          config: i.config,
        };
        return (
          i.referenceImages &&
            i.referenceImages &&
            (s.referenceImages = i.referenceImages.map((a) =>
              a.toReferenceImageAPI()
            )),
          await this.editImageInternal(s)
        );
      }),
      (this.upscaleImage = async (i) => {
        let s = { numberOfImages: 1, mode: "upscale" };
        i.config && (s = Object.assign(Object.assign({}, s), i.config));
        const a = {
          model: i.model,
          image: i.image,
          upscaleFactor: i.upscaleFactor,
          config: s,
        };
        return await this.upscaleImageInternal(a);
      }),
      (this.generateVideos = async (i) => {
        var s, a, u, c, h, g;
        if ((i.prompt || i.image || i.video) && i.source)
          throw new Error(
            "Source and prompt/image/video are mutually exclusive. Please only use source."
          );
        return (
          this.apiClient.isVertexAI() ||
            (!((s = i.video) === null || s === void 0) &&
            s.uri &&
            !((a = i.video) === null || a === void 0) &&
            a.videoBytes
              ? (i.video = { uri: i.video.uri, mimeType: i.video.mimeType })
              : !(
                  (c =
                    (u = i.source) === null || u === void 0
                      ? void 0
                      : u.video) === null || c === void 0
                ) &&
                c.uri &&
                !(
                  (g =
                    (h = i.source) === null || h === void 0
                      ? void 0
                      : h.video) === null || g === void 0
                ) &&
                g.videoBytes &&
                (i.source.video = {
                  uri: i.source.video.uri,
                  mimeType: i.source.video.mimeType,
                })),
          await this.generateVideosInternal(i)
        );
      });
  }
  maybeMoveToResponseJsonSchem(e) {
    e.config &&
      e.config.responseSchema &&
      (e.config.responseJsonSchema ||
        (Object.keys(e.config.responseSchema).includes("$schema") &&
          ((e.config.responseJsonSchema = e.config.responseSchema),
          delete e.config.responseSchema)));
  }
  async processParamsMaybeAddMcpUsage(e) {
    var i, s, a;
    const u = (i = e.config) === null || i === void 0 ? void 0 : i.tools;
    if (!u) return e;
    const c = await Promise.all(
        u.map(async (g) => (Ho(g) ? await g.tool() : g))
      ),
      h = {
        model: e.model,
        contents: e.contents,
        config: Object.assign(Object.assign({}, e.config), { tools: c }),
      };
    if (
      ((h.config.tools = c), e.config && e.config.tools && mT(e.config.tools))
    ) {
      const g =
        (a =
          (s = e.config.httpOptions) === null || s === void 0
            ? void 0
            : s.headers) !== null && a !== void 0
          ? a
          : {};
      let p = Object.assign({}, g);
      Object.keys(p).length === 0 && (p = this.apiClient.getDefaultHeaders()),
        gT(p),
        (h.config.httpOptions = Object.assign(
          Object.assign({}, e.config.httpOptions),
          { headers: p }
        ));
    }
    return h;
  }
  async initAfcToolsMap(e) {
    var i, s, a;
    const u = new Map();
    for (const c of (s =
      (i = e.config) === null || i === void 0 ? void 0 : i.tools) !== null &&
    s !== void 0
      ? s
      : [])
      if (Ho(c)) {
        const h = c,
          g = await h.tool();
        for (const p of (a = g.functionDeclarations) !== null && a !== void 0
          ? a
          : []) {
          if (!p.name)
            throw new Error("Function declaration name is required.");
          if (u.has(p.name))
            throw new Error(`Duplicate tool declaration name: ${p.name}`);
          u.set(p.name, h);
        }
      }
    return u;
  }
  async processAfcStream(e) {
    var i, s, a;
    const u =
      (a =
        (s =
          (i = e.config) === null || i === void 0
            ? void 0
            : i.automaticFunctionCalling) === null || s === void 0
          ? void 0
          : s.maximumRemoteCalls) !== null && a !== void 0
        ? a
        : rv;
    let c = !1,
      h = 0;
    const g = await this.initAfcToolsMap(e);
    return (function (p, v, T) {
      return nn(this, arguments, function* () {
        for (var S, _, C, R, M, b; h < u; ) {
          c && (h++, (c = !1));
          const q = yield re(p.processParamsMaybeAddMcpUsage(T)),
            Q = yield re(p.generateContentStreamInternal(q)),
            J = [],
            Z = [];
          try {
            for (
              var k = !0, P = ((_ = void 0), on(Q)), Y;
              (Y = yield re(P.next())), (S = Y.done), !S;
              k = !0
            ) {
              (R = Y.value), (k = !1);
              const $ = R;
              if (
                (yield yield re($),
                $.candidates &&
                  !((M = $.candidates[0]) === null || M === void 0) &&
                  M.content)
              ) {
                Z.push($.candidates[0].content);
                for (const ae of (b = $.candidates[0].content.parts) !== null &&
                b !== void 0
                  ? b
                  : [])
                  if (h < u && ae.functionCall) {
                    if (!ae.functionCall.name)
                      throw new Error(
                        "Function call name was not returned by the model."
                      );
                    if (v.has(ae.functionCall.name)) {
                      const ge = yield re(
                        v.get(ae.functionCall.name).callTool([ae.functionCall])
                      );
                      J.push(...ge);
                    } else
                      throw new Error(
                        `Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${v.keys()}, mising tool: ${
                          ae.functionCall.name
                        }`
                      );
                  }
              }
            }
          } catch ($) {
            _ = { error: $ };
          } finally {
            try {
              !k && !S && (C = P.return) && (yield re(C.call(P)));
            } finally {
              if (_) throw _.error;
            }
          }
          if (J.length > 0) {
            c = !0;
            const $ = new Bs();
            ($.candidates = [{ content: { role: "user", parts: J } }]),
              yield yield re($);
            const ae = [];
            ae.push(...Z), ae.push({ role: "user", parts: J });
            const ge = Zt(T.contents).concat(ae);
            T.contents = ge;
          } else break;
        }
      });
    })(this, g, e);
  }
  async generateContentInternal(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = ov(this.apiClient, e);
      return (
        (h = j("{model}:generateContent", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = lv(v),
            S = new Bs();
          return Object.assign(S, T), S;
        })
      );
    } else {
      const p = iv(this.apiClient, e);
      return (
        (h = j("{model}:generateContent", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = sv(v),
            S = new Bs();
          return Object.assign(S, T), S;
        })
      );
    }
  }
  async generateContentStreamInternal(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = ov(this.apiClient, e);
      return (
        (h = j("{model}:streamGenerateContent?alt=sse", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient.requestStream({
          path: h,
          queryParams: g,
          body: JSON.stringify(p),
          httpMethod: "POST",
          httpOptions:
            (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
          abortSignal:
            (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
        })),
        c.then(function (T) {
          return nn(this, arguments, function* () {
            var S, _, C, R;
            try {
              for (
                var M = !0, b = on(T), k;
                (k = yield re(b.next())), (S = k.done), !S;
                M = !0
              ) {
                (R = k.value), (M = !1);
                const P = R,
                  Y = lv(yield re(P.json()));
                Y.sdkHttpResponse = { headers: P.headers };
                const q = new Bs();
                Object.assign(q, Y), yield yield re(q);
              }
            } catch (P) {
              _ = { error: P };
            } finally {
              try {
                !M && !S && (C = b.return) && (yield re(C.call(b)));
              } finally {
                if (_) throw _.error;
              }
            }
          });
        })
      );
    } else {
      const p = iv(this.apiClient, e);
      return (
        (h = j("{model}:streamGenerateContent?alt=sse", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient.requestStream({
          path: h,
          queryParams: g,
          body: JSON.stringify(p),
          httpMethod: "POST",
          httpOptions:
            (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
          abortSignal:
            (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
        })),
        c.then(function (T) {
          return nn(this, arguments, function* () {
            var S, _, C, R;
            try {
              for (
                var M = !0, b = on(T), k;
                (k = yield re(b.next())), (S = k.done), !S;
                M = !0
              ) {
                (R = k.value), (M = !1);
                const P = R,
                  Y = sv(yield re(P.json()));
                Y.sdkHttpResponse = { headers: P.headers };
                const q = new Bs();
                Object.assign(q, Y), yield yield re(q);
              }
            } catch (P) {
              _ = { error: P };
            } finally {
              try {
                !M && !S && (C = b.return) && (yield re(C.call(b)));
              } finally {
                if (_) throw _.error;
              }
            }
          });
        })
      );
    }
  }
  async embedContent(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = BR(this.apiClient, e);
      return (
        (h = j("{model}:predict", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = qR(v),
            S = new By();
          return Object.assign(S, T), S;
        })
      );
    } else {
      const p = kR(this.apiClient, e);
      return (
        (h = j("{model}:batchEmbedContents", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = zR(v),
            S = new By();
          return Object.assign(S, T), S;
        })
      );
    }
  }
  async generateImagesInternal(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = jR(this.apiClient, e);
      return (
        (h = j("{model}:predict", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = t1(v),
            S = new zy();
          return Object.assign(S, T), S;
        })
      );
    } else {
      const p = WR(this.apiClient, e);
      return (
        (h = j("{model}:predict", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = e1(v),
            S = new zy();
          return Object.assign(S, T), S;
        })
      );
    }
  }
  async editImageInternal(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI()) {
      const h = VR(this.apiClient, e);
      return (
        (u = j("{model}:predict", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) =>
            g.json().then((p) => {
              const v = p;
              return (v.sdkHttpResponse = { headers: g.headers }), v;
            })
          )),
        a.then((g) => {
          const p = PR(g),
            v = new FC();
          return Object.assign(v, p), v;
        })
      );
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async upscaleImageInternal(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI()) {
      const h = j1(this.apiClient, e);
      return (
        (u = j("{model}:predict", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) =>
            g.json().then((p) => {
              const v = p;
              return (v.sdkHttpResponse = { headers: g.headers }), v;
            })
          )),
        a.then((g) => {
          const p = ew(g),
            v = new YC();
          return Object.assign(v, p), v;
        })
      );
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async recontextImage(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI()) {
      const h = L1(this.apiClient, e);
      return (
        (u = j("{model}:predict", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a.then((g) => {
          const p = V1(g),
            v = new JC();
          return Object.assign(v, p), v;
        })
      );
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async segmentImage(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI()) {
      const h = z1(this.apiClient, e);
      return (
        (u = j("{model}:predict", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a.then((g) => {
          const p = q1(g),
            v = new KC();
          return Object.assign(v, p), v;
        })
      );
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async get(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = v1(this.apiClient, e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => mf(v))
      );
    } else {
      const p = y1(this.apiClient, e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => pf(v))
      );
    }
  }
  async listInternal(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = R1(this.apiClient, e);
      return (
        (h = j("{models_url}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = N1(v),
            S = new qy();
          return Object.assign(S, T), S;
        })
      );
    } else {
      const p = M1(this.apiClient, e);
      return (
        (h = j("{models_url}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = w1(v),
            S = new qy();
          return Object.assign(S, T), S;
        })
      );
    }
  }
  async update(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = $1(this.apiClient, e);
      return (
        (h = j("{model}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "PATCH",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => mf(v))
      );
    } else {
      const p = Z1(this.apiClient, e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "PATCH",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => pf(v))
      );
    }
  }
  async delete(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = DR(this.apiClient, e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "DELETE",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = UR(v),
            S = new Oy();
          return Object.assign(S, T), S;
        })
      );
    } else {
      const p = bR(this.apiClient, e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "DELETE",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = IR(v),
            S = new Oy();
          return Object.assign(S, T), S;
        })
      );
    }
  }
  async countTokens(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = RR(this.apiClient, e);
      return (
        (h = j("{model}:countTokens", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = NR(v),
            S = new Fy();
          return Object.assign(S, T), S;
        })
      );
    } else {
      const p = MR(this.apiClient, e);
      return (
        (h = j("{model}:countTokens", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = wR(v),
            S = new Fy();
          return Object.assign(S, T), S;
        })
      );
    }
  }
  async computeTokens(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI()) {
      const h = TR(this.apiClient, e);
      return (
        (u = j("{model}:computeTokens", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) =>
            g.json().then((p) => {
              const v = p;
              return (v.sdkHttpResponse = { headers: g.headers }), v;
            })
          )),
        a.then((g) => {
          const p = SR(g),
            v = new XC();
          return Object.assign(v, p), v;
        })
      );
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async generateVideosInternal(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = a1(this.apiClient, e);
      return (
        (h = j("{model}:predictLongRunning", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => {
          const T = s1(v),
            S = new Ka();
          return Object.assign(S, T), S;
        })
      );
    } else {
      const p = l1(this.apiClient, e);
      return (
        (h = j("{model}:predictLongRunning", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) => v.json())),
        c.then((v) => {
          const T = o1(v),
            S = new Ka();
          return Object.assign(S, T), S;
        })
      );
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Kw extends Pn {
  constructor(e) {
    super(), (this.apiClient = e);
  }
  async getVideosOperation(e) {
    const i = e.operation,
      s = e.config;
    if (i.name === void 0 || i.name === "")
      throw new Error("Operation name is required.");
    if (this.apiClient.isVertexAI()) {
      const a = i.name.split("/operations/")[0];
      let u;
      s && "httpOptions" in s && (u = s.httpOptions);
      const c = await this.fetchPredictVideosOperationInternal({
        operationName: i.name,
        resourceName: a,
        config: { httpOptions: u },
      });
      return i._fromAPIResponse({ apiResponse: c, _isVertexAI: !0 });
    } else {
      const a = await this.getVideosOperationInternal({
        operationName: i.name,
        config: s,
      });
      return i._fromAPIResponse({ apiResponse: a, _isVertexAI: !1 });
    }
  }
  async get(e) {
    const i = e.operation,
      s = e.config;
    if (i.name === void 0 || i.name === "")
      throw new Error("Operation name is required.");
    if (this.apiClient.isVertexAI()) {
      const a = i.name.split("/operations/")[0];
      let u;
      s && "httpOptions" in s && (u = s.httpOptions);
      const c = await this.fetchPredictVideosOperationInternal({
        operationName: i.name,
        resourceName: a,
        config: { httpOptions: u },
      });
      return i._fromAPIResponse({ apiResponse: c, _isVertexAI: !0 });
    } else {
      const a = await this.getVideosOperationInternal({
        operationName: i.name,
        config: s,
      });
      return i._fromAPIResponse({ apiResponse: a, _isVertexAI: !1 });
    }
  }
  async getVideosOperationInternal(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = GC(e);
      return (
        (h = j("{operationName}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) => v.json())),
        c
      );
    } else {
      const p = HC(e);
      return (
        (h = j("{operationName}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) => v.json())),
        c
      );
    }
  }
  async fetchPredictVideosOperationInternal(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI()) {
      const h = bC(e);
      return (
        (u = j("{resourceName}:fetchPredictOperation", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a
      );
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function Xw(t) {
  const e = {},
    i = f(t, ["data"]);
  if ((i != null && d(e, ["data"], i), f(t, ["displayName"]) !== void 0))
    throw new Error("displayName parameter is not supported in Gemini API.");
  const s = f(t, ["mimeType"]);
  return s != null && d(e, ["mimeType"], s), e;
}
function Qw(t) {
  const e = {},
    i = f(t, ["parts"]);
  if (i != null) {
    let a = i;
    Array.isArray(a) && (a = a.map((u) => oN(u))), d(e, ["parts"], a);
  }
  const s = f(t, ["role"]);
  return s != null && d(e, ["role"], s), e;
}
function Zw(t, e, i) {
  const s = {},
    a = f(e, ["expireTime"]);
  i !== void 0 && a != null && d(i, ["expireTime"], a);
  const u = f(e, ["newSessionExpireTime"]);
  i !== void 0 && u != null && d(i, ["newSessionExpireTime"], u);
  const c = f(e, ["uses"]);
  i !== void 0 && c != null && d(i, ["uses"], c);
  const h = f(e, ["liveConnectConstraints"]);
  i !== void 0 && h != null && d(i, ["bidiGenerateContentSetup"], iN(t, h));
  const g = f(e, ["lockAdditionalFields"]);
  return i !== void 0 && g != null && d(i, ["fieldMask"], g), s;
}
function $w(t, e) {
  const i = {},
    s = f(e, ["config"]);
  return s != null && d(i, ["config"], Zw(t, s, i)), i;
}
function Ww(t) {
  const e = {};
  if (f(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const i = f(t, ["fileUri"]);
  i != null && d(e, ["fileUri"], i);
  const s = f(t, ["mimeType"]);
  return s != null && d(e, ["mimeType"], s), e;
}
function jw(t) {
  const e = {},
    i = f(t, ["id"]);
  i != null && d(e, ["id"], i);
  const s = f(t, ["args"]);
  s != null && d(e, ["args"], s);
  const a = f(t, ["name"]);
  if ((a != null && d(e, ["name"], a), f(t, ["partialArgs"]) !== void 0))
    throw new Error("partialArgs parameter is not supported in Gemini API.");
  if (f(t, ["willContinue"]) !== void 0)
    throw new Error("willContinue parameter is not supported in Gemini API.");
  return e;
}
function eN(t) {
  const e = {};
  if (f(t, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const i = f(t, ["enableWidget"]);
  return i != null && d(e, ["enableWidget"], i), e;
}
function tN(t) {
  const e = {};
  if (f(t, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  if (f(t, ["blockingConfidence"]) !== void 0)
    throw new Error(
      "blockingConfidence parameter is not supported in Gemini API."
    );
  const i = f(t, ["timeRangeFilter"]);
  return i != null && d(e, ["timeRangeFilter"], i), e;
}
function nN(t, e) {
  const i = {},
    s = f(t, ["generationConfig"]);
  e !== void 0 && s != null && d(e, ["setup", "generationConfig"], s);
  const a = f(t, ["responseModalities"]);
  e !== void 0 &&
    a != null &&
    d(e, ["setup", "generationConfig", "responseModalities"], a);
  const u = f(t, ["temperature"]);
  e !== void 0 &&
    u != null &&
    d(e, ["setup", "generationConfig", "temperature"], u);
  const c = f(t, ["topP"]);
  e !== void 0 && c != null && d(e, ["setup", "generationConfig", "topP"], c);
  const h = f(t, ["topK"]);
  e !== void 0 && h != null && d(e, ["setup", "generationConfig", "topK"], h);
  const g = f(t, ["maxOutputTokens"]);
  e !== void 0 &&
    g != null &&
    d(e, ["setup", "generationConfig", "maxOutputTokens"], g);
  const p = f(t, ["mediaResolution"]);
  e !== void 0 &&
    p != null &&
    d(e, ["setup", "generationConfig", "mediaResolution"], p);
  const v = f(t, ["seed"]);
  e !== void 0 && v != null && d(e, ["setup", "generationConfig", "seed"], v);
  const T = f(t, ["speechConfig"]);
  e !== void 0 &&
    T != null &&
    d(e, ["setup", "generationConfig", "speechConfig"], Xf(T));
  const S = f(t, ["thinkingConfig"]);
  e !== void 0 &&
    S != null &&
    d(e, ["setup", "generationConfig", "thinkingConfig"], S);
  const _ = f(t, ["enableAffectiveDialog"]);
  e !== void 0 &&
    _ != null &&
    d(e, ["setup", "generationConfig", "enableAffectiveDialog"], _);
  const C = f(t, ["systemInstruction"]);
  e !== void 0 && C != null && d(e, ["setup", "systemInstruction"], Qw(ht(C)));
  const R = f(t, ["tools"]);
  if (e !== void 0 && R != null) {
    let Q = zo(R);
    Array.isArray(Q) && (Q = Q.map((J) => lN(Bo(J)))),
      d(e, ["setup", "tools"], Q);
  }
  const M = f(t, ["sessionResumption"]);
  e !== void 0 && M != null && d(e, ["setup", "sessionResumption"], sN(M));
  const b = f(t, ["inputAudioTranscription"]);
  e !== void 0 && b != null && d(e, ["setup", "inputAudioTranscription"], b);
  const k = f(t, ["outputAudioTranscription"]);
  e !== void 0 && k != null && d(e, ["setup", "outputAudioTranscription"], k);
  const P = f(t, ["realtimeInputConfig"]);
  e !== void 0 && P != null && d(e, ["setup", "realtimeInputConfig"], P);
  const Y = f(t, ["contextWindowCompression"]);
  e !== void 0 && Y != null && d(e, ["setup", "contextWindowCompression"], Y);
  const q = f(t, ["proactivity"]);
  if (
    (e !== void 0 && q != null && d(e, ["setup", "proactivity"], q),
    f(t, ["explicitVadSignal"]) !== void 0)
  )
    throw new Error(
      "explicitVadSignal parameter is not supported in Gemini API."
    );
  return i;
}
function iN(t, e) {
  const i = {},
    s = f(e, ["model"]);
  s != null && d(i, ["setup", "model"], xe(t, s));
  const a = f(e, ["config"]);
  return a != null && d(i, ["config"], nN(a, i)), i;
}
function oN(t) {
  const e = {},
    i = f(t, ["mediaResolution"]);
  i != null && d(e, ["mediaResolution"], i);
  const s = f(t, ["codeExecutionResult"]);
  s != null && d(e, ["codeExecutionResult"], s);
  const a = f(t, ["executableCode"]);
  a != null && d(e, ["executableCode"], a);
  const u = f(t, ["fileData"]);
  u != null && d(e, ["fileData"], Ww(u));
  const c = f(t, ["functionCall"]);
  c != null && d(e, ["functionCall"], jw(c));
  const h = f(t, ["functionResponse"]);
  h != null && d(e, ["functionResponse"], h);
  const g = f(t, ["inlineData"]);
  g != null && d(e, ["inlineData"], Xw(g));
  const p = f(t, ["text"]);
  p != null && d(e, ["text"], p);
  const v = f(t, ["thought"]);
  v != null && d(e, ["thought"], v);
  const T = f(t, ["thoughtSignature"]);
  T != null && d(e, ["thoughtSignature"], T);
  const S = f(t, ["videoMetadata"]);
  return S != null && d(e, ["videoMetadata"], S), e;
}
function sN(t) {
  const e = {},
    i = f(t, ["handle"]);
  if ((i != null && d(e, ["handle"], i), f(t, ["transparent"]) !== void 0))
    throw new Error("transparent parameter is not supported in Gemini API.");
  return e;
}
function lN(t) {
  const e = {},
    i = f(t, ["functionDeclarations"]);
  if (i != null) {
    let v = i;
    Array.isArray(v) && (v = v.map((T) => T)),
      d(e, ["functionDeclarations"], v);
  }
  if (f(t, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const s = f(t, ["googleSearchRetrieval"]);
  s != null && d(e, ["googleSearchRetrieval"], s);
  const a = f(t, ["computerUse"]);
  a != null && d(e, ["computerUse"], a);
  const u = f(t, ["fileSearch"]);
  u != null && d(e, ["fileSearch"], u);
  const c = f(t, ["codeExecution"]);
  if (
    (c != null && d(e, ["codeExecution"], c),
    f(t, ["enterpriseWebSearch"]) !== void 0)
  )
    throw new Error(
      "enterpriseWebSearch parameter is not supported in Gemini API."
    );
  const h = f(t, ["googleMaps"]);
  h != null && d(e, ["googleMaps"], eN(h));
  const g = f(t, ["googleSearch"]);
  g != null && d(e, ["googleSearch"], tN(g));
  const p = f(t, ["urlContext"]);
  return p != null && d(e, ["urlContext"], p), e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function aN(t) {
  const e = [];
  for (const i in t)
    if (Object.prototype.hasOwnProperty.call(t, i)) {
      const s = t[i];
      if (typeof s == "object" && s != null && Object.keys(s).length > 0) {
        const a = Object.keys(s).map((u) => `${i}.${u}`);
        e.push(...a);
      } else e.push(i);
    }
  return e.join(",");
}
function rN(t, e) {
  let i = null;
  const s = t.bidiGenerateContentSetup;
  if (typeof s == "object" && s !== null && "setup" in s) {
    const u = s.setup;
    typeof u == "object" && u !== null
      ? ((t.bidiGenerateContentSetup = u), (i = u))
      : delete t.bidiGenerateContentSetup;
  } else s !== void 0 && delete t.bidiGenerateContentSetup;
  const a = t.fieldMask;
  if (i) {
    const u = aN(i);
    if (
      Array.isArray(e == null ? void 0 : e.lockAdditionalFields) &&
      (e == null ? void 0 : e.lockAdditionalFields.length) === 0
    )
      u ? (t.fieldMask = u) : delete t.fieldMask;
    else if (
      e != null &&
      e.lockAdditionalFields &&
      e.lockAdditionalFields.length > 0 &&
      a !== null &&
      Array.isArray(a) &&
      a.length > 0
    ) {
      const c = [
        "temperature",
        "topK",
        "topP",
        "maxOutputTokens",
        "responseModalities",
        "seed",
        "speechConfig",
      ];
      let h = [];
      a.length > 0 &&
        (h = a.map((p) => (c.includes(p) ? `generationConfig.${p}` : p)));
      const g = [];
      u && g.push(u),
        h.length > 0 && g.push(...h),
        g.length > 0 ? (t.fieldMask = g.join(",")) : delete t.fieldMask;
    } else delete t.fieldMask;
  } else
    a !== null && Array.isArray(a) && a.length > 0
      ? (t.fieldMask = a.join(","))
      : delete t.fieldMask;
  return t;
}
class uN extends Pn {
  constructor(e) {
    super(), (this.apiClient = e);
  }
  async create(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "The client.tokens.create method is only supported by the Gemini Developer API."
      );
    {
      const h = $w(this.apiClient, e);
      (u = j("auth_tokens", h._url)),
        (c = h._query),
        delete h.config,
        delete h._url,
        delete h._query;
      const g = rN(h, e.config);
      return (
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(g),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((p) => p.json())),
        a.then((p) => p)
      );
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function cN(t, e) {
  const i = {},
    s = f(t, ["force"]);
  return e !== void 0 && s != null && d(e, ["_query", "force"], s), i;
}
function fN(t) {
  const e = {},
    i = f(t, ["name"]);
  i != null && d(e, ["_url", "name"], i);
  const s = f(t, ["config"]);
  return s != null && cN(s, e), e;
}
function dN(t) {
  const e = {},
    i = f(t, ["name"]);
  return i != null && d(e, ["_url", "name"], i), e;
}
function hN(t, e) {
  const i = {},
    s = f(t, ["pageSize"]);
  e !== void 0 && s != null && d(e, ["_query", "pageSize"], s);
  const a = f(t, ["pageToken"]);
  return e !== void 0 && a != null && d(e, ["_query", "pageToken"], a), i;
}
function pN(t) {
  const e = {},
    i = f(t, ["parent"]);
  i != null && d(e, ["_url", "parent"], i);
  const s = f(t, ["config"]);
  return s != null && hN(s, e), e;
}
function mN(t) {
  const e = {},
    i = f(t, ["sdkHttpResponse"]);
  i != null && d(e, ["sdkHttpResponse"], i);
  const s = f(t, ["nextPageToken"]);
  s != null && d(e, ["nextPageToken"], s);
  const a = f(t, ["documents"]);
  if (a != null) {
    let u = a;
    Array.isArray(u) && (u = u.map((c) => c)), d(e, ["documents"], u);
  }
  return e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class gN extends Pn {
  constructor(e) {
    super(),
      (this.apiClient = e),
      (this.list = async (i) =>
        new zi(
          Vn.PAGED_ITEM_DOCUMENTS,
          (s) => this.listInternal({ parent: i.parent, config: s.config }),
          await this.listInternal(i),
          i
        ));
  }
  async get(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = dN(e);
      return (
        (u = j("{name}", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a.then((g) => g)
      );
    }
  }
  async delete(e) {
    var i, s;
    let a = "",
      u = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const c = fN(e);
      (a = j("{name}", c._url)),
        (u = c._query),
        delete c._url,
        delete c._query,
        await this.apiClient.request({
          path: a,
          queryParams: u,
          body: JSON.stringify(c),
          httpMethod: "DELETE",
          httpOptions:
            (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
          abortSignal:
            (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
        });
    }
  }
  async listInternal(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = pN(e);
      return (
        (u = j("{parent}/documents", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a.then((g) => {
          const p = mN(g),
            v = new QC();
          return Object.assign(v, p), v;
        })
      );
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class yN extends Pn {
  constructor(e, i = new gN(e)) {
    super(),
      (this.apiClient = e),
      (this.documents = i),
      (this.list = async (s = {}) =>
        new zi(
          Vn.PAGED_ITEM_FILE_SEARCH_STORES,
          (a) => this.listInternal(a),
          await this.listInternal(s),
          s
        ));
  }
  async uploadToFileSearchStore(e) {
    if (this.apiClient.isVertexAI())
      throw new Error(
        "Vertex AI does not support uploading files to a file search store."
      );
    return this.apiClient.uploadFileToFileSearchStore(
      e.fileSearchStoreName,
      e.file,
      e.config
    );
  }
  async create(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = aw(e);
      return (
        (u = j("fileSearchStores", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a.then((g) => g)
      );
    }
  }
  async get(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = cw(e);
      return (
        (u = j("{name}", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a.then((g) => g)
      );
    }
  }
  async delete(e) {
    var i, s;
    let a = "",
      u = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const c = uw(e);
      (a = j("{name}", c._url)),
        (u = c._query),
        delete c._url,
        delete c._query,
        await this.apiClient.request({
          path: a,
          queryParams: u,
          body: JSON.stringify(c),
          httpMethod: "DELETE",
          httpOptions:
            (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
          abortSignal:
            (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
        });
    }
  }
  async listInternal(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = gw(e);
      return (
        (u = j("fileSearchStores", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a.then((g) => {
          const p = yw(g),
            v = new ZC();
          return Object.assign(v, p), v;
        })
      );
    }
  }
  async uploadToFileSearchStoreInternal(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = vw(e);
      return (
        (u = j(
          "upload/v1beta/{file_search_store_name}:uploadToFileSearchStore",
          h._url
        )),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a.then((g) => {
          const p = Tw(g),
            v = new $C();
          return Object.assign(v, p), v;
        })
      );
    }
  }
  async importFile(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = hw(e);
      return (
        (u = j("{file_search_store_name}:importFile", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) => g.json())),
        a.then((g) => {
          const p = dw(g),
            v = new Of();
          return Object.assign(v, p), v;
        })
      );
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let yT = function () {
  const { crypto: t } = globalThis;
  if (t != null && t.randomUUID)
    return (yT = t.randomUUID.bind(t)), t.randomUUID();
  const e = new Uint8Array(1),
    i = t ? () => t.getRandomValues(e)[0] : () => (Math.random() * 255) & 255;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (s) =>
    (+s ^ (i() & (15 >> (+s / 4)))).toString(16)
  );
};
const vN = () => yT();
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function yf(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    (("name" in t && t.name === "AbortError") ||
      ("message" in t &&
        String(t.message).includes("FetchRequestCanceledException")))
  );
}
const vf = (t) => {
  if (t instanceof Error) return t;
  if (typeof t == "object" && t !== null) {
    try {
      if (Object.prototype.toString.call(t) === "[object Error]") {
        const e = new Error(t.message, t.cause ? { cause: t.cause } : {});
        return (
          t.stack && (e.stack = t.stack),
          t.cause && !e.cause && (e.cause = t.cause),
          t.name && (e.name = t.name),
          e
        );
      }
    } catch {}
    try {
      return new Error(JSON.stringify(t));
    } catch {}
  }
  return new Error(t);
};
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class $t extends Error {}
class Tt extends $t {
  constructor(e, i, s, a) {
    super(`${Tt.makeMessage(e, i, s)}`),
      (this.status = e),
      (this.headers = a),
      (this.error = i);
  }
  static makeMessage(e, i, s) {
    const a =
      i != null && i.message
        ? typeof i.message == "string"
          ? i.message
          : JSON.stringify(i.message)
        : i
        ? JSON.stringify(i)
        : s;
    return e && a
      ? `${e} ${a}`
      : e
      ? `${e} status code (no body)`
      : a || "(no status code or body)";
  }
  static generate(e, i, s, a) {
    if (!e || !a) return new cr({ message: s, cause: vf(i) });
    const u = i;
    return e === 400
      ? new TT(e, u, s, a)
      : e === 401
      ? new ST(e, u, s, a)
      : e === 403
      ? new ET(e, u, s, a)
      : e === 404
      ? new _T(e, u, s, a)
      : e === 409
      ? new AT(e, u, s, a)
      : e === 422
      ? new CT(e, u, s, a)
      : e === 429
      ? new xT(e, u, s, a)
      : e >= 500
      ? new MT(e, u, s, a)
      : new Tt(e, u, s, a);
  }
}
class Tf extends Tt {
  constructor({ message: e } = {}) {
    super(void 0, void 0, e || "Request was aborted.", void 0);
  }
}
class cr extends Tt {
  constructor({ message: e, cause: i }) {
    super(void 0, void 0, e || "Connection error.", void 0),
      i && (this.cause = i);
  }
}
class vT extends cr {
  constructor({ message: e } = {}) {
    super({ message: e ?? "Request timed out." });
  }
}
class TT extends Tt {}
class ST extends Tt {}
class ET extends Tt {}
class _T extends Tt {}
class AT extends Tt {}
class CT extends Tt {}
class xT extends Tt {}
class MT extends Tt {}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const TN = /^[a-z][a-z0-9+.-]*:/i,
  SN = (t) => TN.test(t);
let Sf = (t) => ((Sf = Array.isArray), Sf(t));
const EN = Sf;
let _N = EN;
const dv = _N;
function AN(t) {
  if (!t) return !0;
  for (const e in t) return !1;
  return !0;
}
function CN(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
const xN = (t, e) => {
    if (typeof e != "number" || !Number.isInteger(e))
      throw new $t(`${t} must be an integer`);
    if (e < 0) throw new $t(`${t} must be a positive integer`);
    return e;
  },
  MN = (t) => {
    try {
      return JSON.parse(t);
    } catch {
      return;
    }
  };
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const RN = (t) => new Promise((e) => setTimeout(e, t));
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const wo = "0.0.1";
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function wN() {
  return typeof Deno < "u" && Deno.build != null
    ? "deno"
    : typeof EdgeRuntime < "u"
    ? "edge"
    : Object.prototype.toString.call(
        typeof globalThis.process < "u" ? globalThis.process : 0
      ) === "[object process]"
    ? "node"
    : "unknown";
}
const NN = () => {
  var t, e, i, s, a;
  const u = wN();
  if (u === "deno")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": wo,
      "X-Stainless-OS": pv(Deno.build.os),
      "X-Stainless-Arch": hv(Deno.build.arch),
      "X-Stainless-Runtime": "deno",
      "X-Stainless-Runtime-Version":
        typeof Deno.version == "string"
          ? Deno.version
          : (e =
              (t = Deno.version) === null || t === void 0 ? void 0 : t.deno) !==
              null && e !== void 0
          ? e
          : "unknown",
    };
  if (typeof EdgeRuntime < "u")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": wo,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": `other:${EdgeRuntime}`,
      "X-Stainless-Runtime": "edge",
      "X-Stainless-Runtime-Version": globalThis.process.version,
    };
  if (u === "node")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": wo,
      "X-Stainless-OS": pv(
        (i = globalThis.process.platform) !== null && i !== void 0
          ? i
          : "unknown"
      ),
      "X-Stainless-Arch": hv(
        (s = globalThis.process.arch) !== null && s !== void 0 ? s : "unknown"
      ),
      "X-Stainless-Runtime": "node",
      "X-Stainless-Runtime-Version":
        (a = globalThis.process.version) !== null && a !== void 0
          ? a
          : "unknown",
    };
  const c = bN();
  return c
    ? {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": wo,
        "X-Stainless-OS": "Unknown",
        "X-Stainless-Arch": "unknown",
        "X-Stainless-Runtime": `browser:${c.browser}`,
        "X-Stainless-Runtime-Version": c.version,
      }
    : {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": wo,
        "X-Stainless-OS": "Unknown",
        "X-Stainless-Arch": "unknown",
        "X-Stainless-Runtime": "unknown",
        "X-Stainless-Runtime-Version": "unknown",
      };
};
function bN() {
  if (typeof navigator > "u" || !navigator) return null;
  const t = [
    { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    {
      key: "safari",
      pattern:
        /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/,
    },
  ];
  for (const { key: e, pattern: i } of t) {
    const s = i.exec(navigator.userAgent);
    if (s) {
      const a = s[1] || 0,
        u = s[2] || 0,
        c = s[3] || 0;
      return { browser: e, version: `${a}.${u}.${c}` };
    }
  }
  return null;
}
const hv = (t) =>
    t === "x32"
      ? "x32"
      : t === "x86_64" || t === "x64"
      ? "x64"
      : t === "arm"
      ? "arm"
      : t === "aarch64" || t === "arm64"
      ? "arm64"
      : t
      ? `other:${t}`
      : "unknown",
  pv = (t) => (
    (t = t.toLowerCase()),
    t.includes("ios")
      ? "iOS"
      : t === "android"
      ? "Android"
      : t === "darwin"
      ? "MacOS"
      : t === "win32"
      ? "Windows"
      : t === "freebsd"
      ? "FreeBSD"
      : t === "openbsd"
      ? "OpenBSD"
      : t === "linux"
      ? "Linux"
      : t
      ? `Other:${t}`
      : "Unknown"
  );
let ba;
const DN = () => ba ?? (ba = NN());
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function IN() {
  if (typeof fetch < "u") return fetch;
  throw new Error(
    "`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`"
  );
}
function RT(...t) {
  const e = globalThis.ReadableStream;
  if (typeof e > "u")
    throw new Error(
      "`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`"
    );
  return new e(...t);
}
function UN(t) {
  let e =
    Symbol.asyncIterator in t
      ? t[Symbol.asyncIterator]()
      : t[Symbol.iterator]();
  return RT({
    start() {},
    async pull(i) {
      const { done: s, value: a } = await e.next();
      s ? i.close() : i.enqueue(a);
    },
    async cancel() {
      var i;
      await ((i = e.return) === null || i === void 0 ? void 0 : i.call(e));
    },
  });
}
function wT(t) {
  if (t[Symbol.asyncIterator]) return t;
  const e = t.getReader();
  return {
    async next() {
      try {
        const i = await e.read();
        return i != null && i.done && e.releaseLock(), i;
      } catch (i) {
        throw (e.releaseLock(), i);
      }
    },
    async return() {
      const i = e.cancel();
      return e.releaseLock(), await i, { done: !0, value: void 0 };
    },
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}
async function LN(t) {
  var e, i;
  if (t === null || typeof t != "object") return;
  if (t[Symbol.asyncIterator]) {
    await ((i = (e = t[Symbol.asyncIterator]()).return) === null || i === void 0
      ? void 0
      : i.call(e));
    return;
  }
  const s = t.getReader(),
    a = s.cancel();
  s.releaseLock(), await a;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const VN = ({ headers: t, body: e }) => ({
  bodyHeaders: { "content-type": "application/json" },
  body: JSON.stringify(e),
});
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const NT = () => {
  var t;
  if (typeof File > "u") {
    const { process: e } = globalThis,
      i =
        typeof ((t = e == null ? void 0 : e.versions) === null || t === void 0
          ? void 0
          : t.node) == "string" && parseInt(e.versions.node.split(".")) < 20;
    throw new Error(
      "`File` is not defined as a global, which is required for file uploads." +
        (i
          ? " Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`."
          : "")
    );
  }
};
function Yc(t, e, i) {
  return NT(), new File(t, e ?? "unknown_file", i);
}
function PN(t) {
  return (
    (
      (typeof t == "object" &&
        t !== null &&
        (("name" in t && t.name && String(t.name)) ||
          ("url" in t && t.url && String(t.url)) ||
          ("filename" in t && t.filename && String(t.filename)) ||
          ("path" in t && t.path && String(t.path)))) ||
      ""
    )
      .split(/[\\/]/)
      .pop() || void 0
  );
}
const HN = (t) =>
  t != null &&
  typeof t == "object" &&
  typeof t[Symbol.asyncIterator] == "function";
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const bT = (t) =>
    t != null &&
    typeof t == "object" &&
    typeof t.size == "number" &&
    typeof t.type == "string" &&
    typeof t.text == "function" &&
    typeof t.slice == "function" &&
    typeof t.arrayBuffer == "function",
  GN = (t) =>
    t != null &&
    typeof t == "object" &&
    typeof t.name == "string" &&
    typeof t.lastModified == "number" &&
    bT(t),
  kN = (t) =>
    t != null &&
    typeof t == "object" &&
    typeof t.url == "string" &&
    typeof t.blob == "function";
async function BN(t, e, i) {
  if ((NT(), (t = await t), GN(t)))
    return t instanceof File ? t : Yc([await t.arrayBuffer()], t.name);
  if (kN(t)) {
    const a = await t.blob();
    return (
      e || (e = new URL(t.url).pathname.split(/[\\/]/).pop()),
      Yc(await Ef(a), e, i)
    );
  }
  const s = await Ef(t);
  if ((e || (e = PN(t)), !(i != null && i.type))) {
    const a = s.find((u) => typeof u == "object" && "type" in u && u.type);
    typeof a == "string" &&
      (i = Object.assign(Object.assign({}, i), { type: a }));
  }
  return Yc(s, e, i);
}
async function Ef(t) {
  var e, i, s, a, u;
  let c = [];
  if (typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
    c.push(t);
  else if (bT(t)) c.push(t instanceof Blob ? t : await t.arrayBuffer());
  else if (HN(t))
    try {
      for (
        var h = !0, g = on(t), p;
        (p = await g.next()), (e = p.done), !e;
        h = !0
      ) {
        (a = p.value), (h = !1);
        const v = a;
        c.push(...(await Ef(v)));
      }
    } catch (v) {
      i = { error: v };
    } finally {
      try {
        !h && !e && (s = g.return) && (await s.call(g));
      } finally {
        if (i) throw i.error;
      }
    }
  else {
    const v =
      (u = t == null ? void 0 : t.constructor) === null || u === void 0
        ? void 0
        : u.name;
    throw new Error(
      `Unexpected data type: ${typeof t}${v ? `; constructor: ${v}` : ""}${zN(
        t
      )}`
    );
  }
  return c;
}
function zN(t) {
  return typeof t != "object" || t === null
    ? ""
    : `; props: [${Object.getOwnPropertyNames(t)
        .map((i) => `"${i}"`)
        .join(", ")}]`;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class DT {
  constructor(e) {
    this._client = e;
  }
}
DT._key = [];
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function IT(t) {
  return t.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
const mv = Object.freeze(Object.create(null)),
  qN = (t = IT) =>
    function (i, ...s) {
      if (i.length === 1) return i[0];
      let a = !1;
      const u = [],
        c = i.reduce((v, T, S) => {
          var _, C, R;
          /[?#]/.test(T) && (a = !0);
          const M = s[S];
          let b = (a ? encodeURIComponent : t)("" + M);
          return (
            S !== s.length &&
              (M == null ||
                (typeof M == "object" &&
                  M.toString ===
                    ((R = Object.getPrototypeOf(
                      (C = Object.getPrototypeOf(
                        (_ = M.hasOwnProperty) !== null && _ !== void 0 ? _ : mv
                      )) !== null && C !== void 0
                        ? C
                        : mv
                    )) === null || R === void 0
                      ? void 0
                      : R.toString))) &&
              ((b = M + ""),
              u.push({
                start: v.length + T.length,
                length: b.length,
                error: `Value of type ${Object.prototype.toString
                  .call(M)
                  .slice(8, -1)} is not a valid path parameter`,
              })),
            v + T + (S === s.length ? "" : b)
          );
        }, ""),
        h = c.split(/[?#]/, 1)[0],
        g = new RegExp("(?<=^|\\/)(?:\\.|%2e){1,2}(?=\\/|$)", "gi");
      let p;
      for (; (p = g.exec(h)) !== null; )
        u.push({
          start: p.index,
          length: p[0].length,
          error: `Value "${p[0]}" can't be safely passed as a path parameter`,
        });
      if ((u.sort((v, T) => v.start - T.start), u.length > 0)) {
        let v = 0;
        const T = u.reduce((S, _) => {
          const C = " ".repeat(_.start - v),
            R = "^".repeat(_.length);
          return (v = _.start + _.length), S + C + R;
        }, "");
        throw new $t(`Path parameters result in path with invalid segments:
${u.map((S) => S.error).join(`
`)}
${c}
${T}`);
      }
      return c;
    },
  Da = qN(IT);
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class UT extends DT {
  create(e, i) {
    var s;
    const { api_version: a = this._client.apiVersion } = e,
      u = Qa(e, ["api_version"]);
    if ("model" in u && "agent_config" in u)
      throw new $t(
        "Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`."
      );
    if ("agent" in u && "generation_config" in u)
      throw new $t(
        "Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`."
      );
    return this._client.post(
      Da`/${a}/interactions`,
      Object.assign(Object.assign({ body: u }, i), {
        stream: (s = e.stream) !== null && s !== void 0 ? s : !1,
      })
    );
  }
  delete(e, i = {}, s) {
    const { api_version: a = this._client.apiVersion } = i ?? {};
    return this._client.delete(Da`/${a}/interactions/${e}`, s);
  }
  cancel(e, i = {}, s) {
    const { api_version: a = this._client.apiVersion } = i ?? {};
    return this._client.post(Da`/${a}/interactions/${e}/cancel`, s);
  }
  get(e, i = {}, s) {
    var a;
    const u = i ?? {},
      { api_version: c = this._client.apiVersion } = u,
      h = Qa(u, ["api_version"]);
    return this._client.get(
      Da`/${c}/interactions/${e}`,
      Object.assign(Object.assign({ query: h }, s), {
        stream:
          (a = i == null ? void 0 : i.stream) !== null && a !== void 0 ? a : !1,
      })
    );
  }
}
UT._key = Object.freeze(["interactions"]);
class LT extends UT {}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function ON(t) {
  let e = 0;
  for (const a of t) e += a.length;
  const i = new Uint8Array(e);
  let s = 0;
  for (const a of t) i.set(a, s), (s += a.length);
  return i;
}
let Ia;
function Zf(t) {
  let e;
  return (Ia ?? ((e = new globalThis.TextEncoder()), (Ia = e.encode.bind(e))))(
    t
  );
}
let Ua;
function gv(t) {
  let e;
  return (Ua ?? ((e = new globalThis.TextDecoder()), (Ua = e.decode.bind(e))))(
    t
  );
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class fr {
  constructor() {
    (this.buffer = new Uint8Array()), (this.carriageReturnIndex = null);
  }
  decode(e) {
    if (e == null) return [];
    const i =
      e instanceof ArrayBuffer
        ? new Uint8Array(e)
        : typeof e == "string"
        ? Zf(e)
        : e;
    this.buffer = ON([this.buffer, i]);
    const s = [];
    let a;
    for (; (a = FN(this.buffer, this.carriageReturnIndex)) != null; ) {
      if (a.carriage && this.carriageReturnIndex == null) {
        this.carriageReturnIndex = a.index;
        continue;
      }
      if (
        this.carriageReturnIndex != null &&
        (a.index !== this.carriageReturnIndex + 1 || a.carriage)
      ) {
        s.push(gv(this.buffer.subarray(0, this.carriageReturnIndex - 1))),
          (this.buffer = this.buffer.subarray(this.carriageReturnIndex)),
          (this.carriageReturnIndex = null);
        continue;
      }
      const u =
          this.carriageReturnIndex !== null ? a.preceding - 1 : a.preceding,
        c = gv(this.buffer.subarray(0, u));
      s.push(c),
        (this.buffer = this.buffer.subarray(a.index)),
        (this.carriageReturnIndex = null);
    }
    return s;
  }
  flush() {
    return this.buffer.length
      ? this.decode(`
`)
      : [];
  }
}
fr.NEWLINE_CHARS = new Set([
  `
`,
  "\r",
]);
fr.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
function FN(t, e) {
  for (let a = e ?? 0; a < t.length; a++) {
    if (t[a] === 10) return { preceding: a, index: a + 1, carriage: !1 };
    if (t[a] === 13) return { preceding: a, index: a + 1, carriage: !0 };
  }
  return null;
}
function YN(t) {
  for (let s = 0; s < t.length - 1; s++) {
    if ((t[s] === 10 && t[s + 1] === 10) || (t[s] === 13 && t[s + 1] === 13))
      return s + 2;
    if (
      t[s] === 13 &&
      t[s + 1] === 10 &&
      s + 3 < t.length &&
      t[s + 2] === 13 &&
      t[s + 3] === 10
    )
      return s + 4;
  }
  return -1;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Za = { off: 0, error: 200, warn: 300, info: 400, debug: 500 },
  yv = (t, e, i) => {
    if (t) {
      if (CN(Za, t)) return t;
      yt(i).warn(
        `${e} was set to ${JSON.stringify(t)}, expected one of ${JSON.stringify(
          Object.keys(Za)
        )}`
      );
    }
  };
function Fs() {}
function La(t, e, i) {
  return !e || Za[t] > Za[i] ? Fs : e[t].bind(e);
}
const JN = { error: Fs, warn: Fs, info: Fs, debug: Fs };
let vv = new WeakMap();
function yt(t) {
  var e;
  const i = t.logger,
    s = (e = t.logLevel) !== null && e !== void 0 ? e : "off";
  if (!i) return JN;
  const a = vv.get(i);
  if (a && a[0] === s) return a[1];
  const u = {
    error: La("error", i, s),
    warn: La("warn", i, s),
    info: La("info", i, s),
    debug: La("debug", i, s),
  };
  return vv.set(i, [s, u]), u;
}
const Vi = (t) => (
  t.options &&
    ((t.options = Object.assign({}, t.options)), delete t.options.headers),
  t.headers &&
    (t.headers = Object.fromEntries(
      (t.headers instanceof Headers
        ? [...t.headers]
        : Object.entries(t.headers)
      ).map(([e, i]) => [
        e,
        e.toLowerCase() === "x-goog-api-key" ||
        e.toLowerCase() === "authorization" ||
        e.toLowerCase() === "cookie" ||
        e.toLowerCase() === "set-cookie"
          ? "***"
          : i,
      ])
    )),
  "retryOfRequestLogID" in t &&
    (t.retryOfRequestLogID && (t.retryOf = t.retryOfRequestLogID),
    delete t.retryOfRequestLogID),
  t
);
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class bo {
  constructor(e, i, s) {
    (this.iterator = e), (this.controller = i), (this.client = s);
  }
  static fromSSEResponse(e, i, s) {
    let a = !1;
    const u = s ? yt(s) : console;
    function c() {
      return nn(this, arguments, function* () {
        var g, p, v, T;
        if (a)
          throw new $t(
            "Cannot iterate over a consumed stream, use `.tee()` to split the stream."
          );
        a = !0;
        let S = !1;
        try {
          try {
            for (
              var _ = !0, C = on(KN(e, i)), R;
              (R = yield re(C.next())), (g = R.done), !g;
              _ = !0
            ) {
              (T = R.value), (_ = !1);
              const M = T;
              if (!S)
                if (M.data.startsWith("[DONE]")) {
                  S = !0;
                  continue;
                } else
                  try {
                    yield yield re(JSON.parse(M.data));
                  } catch (b) {
                    throw (
                      (u.error("Could not parse message into JSON:", M.data),
                      u.error("From chunk:", M.raw),
                      b)
                    );
                  }
            }
          } catch (M) {
            p = { error: M };
          } finally {
            try {
              !_ && !g && (v = C.return) && (yield re(v.call(C)));
            } finally {
              if (p) throw p.error;
            }
          }
          S = !0;
        } catch (M) {
          if (yf(M)) return yield re(void 0);
          throw M;
        } finally {
          S || i.abort();
        }
      });
    }
    return new bo(c, i, s);
  }
  static fromReadableStream(e, i, s) {
    let a = !1;
    function u() {
      return nn(this, arguments, function* () {
        var g, p, v, T;
        const S = new fr(),
          _ = wT(e);
        try {
          for (
            var C = !0, R = on(_), M;
            (M = yield re(R.next())), (g = M.done), !g;
            C = !0
          ) {
            (T = M.value), (C = !1);
            const b = T;
            for (const k of S.decode(b)) yield yield re(k);
          }
        } catch (b) {
          p = { error: b };
        } finally {
          try {
            !C && !g && (v = R.return) && (yield re(v.call(R)));
          } finally {
            if (p) throw p.error;
          }
        }
        for (const b of S.flush()) yield yield re(b);
      });
    }
    function c() {
      return nn(this, arguments, function* () {
        var g, p, v, T;
        if (a)
          throw new $t(
            "Cannot iterate over a consumed stream, use `.tee()` to split the stream."
          );
        a = !0;
        let S = !1;
        try {
          try {
            for (
              var _ = !0, C = on(u()), R;
              (R = yield re(C.next())), (g = R.done), !g;
              _ = !0
            ) {
              (T = R.value), (_ = !1);
              const M = T;
              S || (M && (yield yield re(JSON.parse(M))));
            }
          } catch (M) {
            p = { error: M };
          } finally {
            try {
              !_ && !g && (v = C.return) && (yield re(v.call(C)));
            } finally {
              if (p) throw p.error;
            }
          }
          S = !0;
        } catch (M) {
          if (yf(M)) return yield re(void 0);
          throw M;
        } finally {
          S || i.abort();
        }
      });
    }
    return new bo(c, i, s);
  }
  [Symbol.asyncIterator]() {
    return this.iterator();
  }
  tee() {
    const e = [],
      i = [],
      s = this.iterator(),
      a = (u) => ({
        next: () => {
          if (u.length === 0) {
            const c = s.next();
            e.push(c), i.push(c);
          }
          return u.shift();
        },
      });
    return [
      new bo(() => a(e), this.controller, this.client),
      new bo(() => a(i), this.controller, this.client),
    ];
  }
  toReadableStream() {
    const e = this;
    let i;
    return RT({
      async start() {
        i = e[Symbol.asyncIterator]();
      },
      async pull(s) {
        try {
          const { value: a, done: u } = await i.next();
          if (u) return s.close();
          const c = Zf(
            JSON.stringify(a) +
              `
`
          );
          s.enqueue(c);
        } catch (a) {
          s.error(a);
        }
      },
      async cancel() {
        var s;
        await ((s = i.return) === null || s === void 0 ? void 0 : s.call(i));
      },
    });
  }
}
function KN(t, e) {
  return nn(this, arguments, function* () {
    var s, a, u, c;
    if (!t.body)
      throw (
        (e.abort(),
        typeof globalThis.navigator < "u" &&
        globalThis.navigator.product === "ReactNative"
          ? new $t(
              "The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"
            )
          : new $t("Attempted to iterate over a response with no body"))
      );
    const h = new QN(),
      g = new fr(),
      p = wT(t.body);
    try {
      for (
        var v = !0, T = on(XN(p)), S;
        (S = yield re(T.next())), (s = S.done), !s;
        v = !0
      ) {
        (c = S.value), (v = !1);
        const _ = c;
        for (const C of g.decode(_)) {
          const R = h.decode(C);
          R && (yield yield re(R));
        }
      }
    } catch (_) {
      a = { error: _ };
    } finally {
      try {
        !v && !s && (u = T.return) && (yield re(u.call(T)));
      } finally {
        if (a) throw a.error;
      }
    }
    for (const _ of g.flush()) {
      const C = h.decode(_);
      C && (yield yield re(C));
    }
  });
}
function XN(t) {
  return nn(this, arguments, function* () {
    var i, s, a, u;
    let c = new Uint8Array();
    try {
      for (
        var h = !0, g = on(t), p;
        (p = yield re(g.next())), (i = p.done), !i;
        h = !0
      ) {
        (u = p.value), (h = !1);
        const v = u;
        if (v == null) continue;
        const T =
          v instanceof ArrayBuffer
            ? new Uint8Array(v)
            : typeof v == "string"
            ? Zf(v)
            : v;
        let S = new Uint8Array(c.length + T.length);
        S.set(c), S.set(T, c.length), (c = S);
        let _;
        for (; (_ = YN(c)) !== -1; )
          yield yield re(c.slice(0, _)), (c = c.slice(_));
      }
    } catch (v) {
      s = { error: v };
    } finally {
      try {
        !h && !i && (a = g.return) && (yield re(a.call(g)));
      } finally {
        if (s) throw s.error;
      }
    }
    c.length > 0 && (yield yield re(c));
  });
}
class QN {
  constructor() {
    (this.event = null), (this.data = []), (this.chunks = []);
  }
  decode(e) {
    if ((e.endsWith("\r") && (e = e.substring(0, e.length - 1)), !e)) {
      if (!this.event && !this.data.length) return null;
      const u = {
        event: this.event,
        data: this.data.join(`
`),
        raw: this.chunks,
      };
      return (this.event = null), (this.data = []), (this.chunks = []), u;
    }
    if ((this.chunks.push(e), e.startsWith(":"))) return null;
    let [i, s, a] = ZN(e, ":");
    return (
      a.startsWith(" ") && (a = a.substring(1)),
      i === "event" ? (this.event = a) : i === "data" && this.data.push(a),
      null
    );
  }
}
function ZN(t, e) {
  const i = t.indexOf(e);
  return i !== -1
    ? [t.substring(0, i), e, t.substring(i + e.length)]
    : [t, "", ""];
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ async function $N(t, e) {
  const {
      response: i,
      requestLogID: s,
      retryOfRequestLogID: a,
      startTime: u,
    } = e,
    c = await (async () => {
      var h;
      if (e.options.stream)
        return (
          yt(t).debug("response", i.status, i.url, i.headers, i.body),
          e.options.__streamClass
            ? e.options.__streamClass.fromSSEResponse(i, e.controller, t)
            : bo.fromSSEResponse(i, e.controller, t)
        );
      if (i.status === 204) return null;
      if (e.options.__binaryResponse) return i;
      const g = i.headers.get("content-type"),
        p =
          (h = g == null ? void 0 : g.split(";")[0]) === null || h === void 0
            ? void 0
            : h.trim();
      return (p == null ? void 0 : p.includes("application/json")) ||
        (p == null ? void 0 : p.endsWith("+json"))
        ? await i.json()
        : await i.text();
    })();
  return (
    yt(t).debug(
      `[${s}] response parsed`,
      Vi({
        retryOfRequestLogID: a,
        url: i.url,
        status: i.status,
        body: c,
        durationMs: Date.now() - u,
      })
    ),
    c
  );
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class $f extends Promise {
  constructor(e, i, s = $N) {
    super((a) => {
      a(null);
    }),
      (this.responsePromise = i),
      (this.parseResponse = s),
      (this.client = e);
  }
  _thenUnwrap(e) {
    return new $f(this.client, this.responsePromise, async (i, s) =>
      e(await this.parseResponse(i, s), s)
    );
  }
  asResponse() {
    return this.responsePromise.then((e) => e.response);
  }
  async withResponse() {
    const [e, i] = await Promise.all([this.parse(), this.asResponse()]);
    return { data: e, response: i };
  }
  parse() {
    return (
      this.parsedPromise ||
        (this.parsedPromise = this.responsePromise.then((e) =>
          this.parseResponse(this.client, e)
        )),
      this.parsedPromise
    );
  }
  then(e, i) {
    return this.parse().then(e, i);
  }
  catch(e) {
    return this.parse().catch(e);
  }
  finally(e) {
    return this.parse().finally(e);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const VT = Symbol("brand.privateNullableHeaders");
function* WN(t) {
  if (!t) return;
  if (VT in t) {
    const { values: s, nulls: a } = t;
    yield* s.entries();
    for (const u of a) yield [u, null];
    return;
  }
  let e = !1,
    i;
  t instanceof Headers
    ? (i = t.entries())
    : dv(t)
    ? (i = t)
    : ((e = !0), (i = Object.entries(t ?? {})));
  for (let s of i) {
    const a = s[0];
    if (typeof a != "string")
      throw new TypeError("expected header name to be a string");
    const u = dv(s[1]) ? s[1] : [s[1]];
    let c = !1;
    for (const h of u)
      h !== void 0 && (e && !c && ((c = !0), yield [a, null]), yield [a, h]);
  }
}
const zs = (t) => {
  const e = new Headers(),
    i = new Set();
  for (const s of t) {
    const a = new Set();
    for (const [u, c] of WN(s)) {
      const h = u.toLowerCase();
      a.has(h) || (e.delete(u), a.add(h)),
        c === null ? (e.delete(u), i.add(h)) : (e.append(u, c), i.delete(h));
    }
  }
  return { [VT]: !0, values: e, nulls: i };
};
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Jc = (t) => {
  var e, i, s, a, u, c;
  if (typeof globalThis.process < "u")
    return (s =
      (i = (e = CC) === null || e === void 0 ? void 0 : e[t]) === null ||
      i === void 0
        ? void 0
        : i.trim()) !== null && s !== void 0
      ? s
      : void 0;
  if (typeof globalThis.Deno < "u")
    return (c =
      (u =
        (a = globalThis.Deno.env) === null || a === void 0 ? void 0 : a.get) ===
        null || u === void 0
        ? void 0
        : u.call(a, t)) === null || c === void 0
      ? void 0
      : c.trim();
};
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ var PT;
class dr {
  constructor(e) {
    var i,
      s,
      a,
      u,
      c,
      h,
      g,
      {
        baseURL: p = Jc("GEMINI_NEXT_GEN_API_BASE_URL"),
        apiKey: v = (i = Jc("GEMINI_API_KEY")) !== null && i !== void 0
          ? i
          : null,
        apiVersion: T = "v1beta",
      } = e,
      S = Qa(e, ["baseURL", "apiKey", "apiVersion"]);
    const _ = Object.assign(Object.assign({ apiKey: v, apiVersion: T }, S), {
      baseURL: p || "https://generativelanguage.googleapis.com",
    });
    (this.baseURL = _.baseURL),
      (this.timeout =
        (s = _.timeout) !== null && s !== void 0 ? s : dr.DEFAULT_TIMEOUT),
      (this.logger = (a = _.logger) !== null && a !== void 0 ? a : console);
    const C = "warn";
    (this.logLevel = C),
      (this.logLevel =
        (c =
          (u = yv(_.logLevel, "ClientOptions.logLevel", this)) !== null &&
          u !== void 0
            ? u
            : yv(
                Jc("GEMINI_NEXT_GEN_API_LOG"),
                "process.env['GEMINI_NEXT_GEN_API_LOG']",
                this
              )) !== null && c !== void 0
          ? c
          : C),
      (this.fetchOptions = _.fetchOptions),
      (this.maxRetries = (h = _.maxRetries) !== null && h !== void 0 ? h : 2),
      (this.fetch = (g = _.fetch) !== null && g !== void 0 ? g : IN()),
      (this.encoder = VN),
      (this._options = _),
      (this.apiKey = v),
      (this.apiVersion = T),
      (this.clientAdapter = _.clientAdapter);
  }
  withOptions(e) {
    return new this.constructor(
      Object.assign(
        Object.assign(Object.assign({}, this._options), {
          baseURL: this.baseURL,
          maxRetries: this.maxRetries,
          timeout: this.timeout,
          logger: this.logger,
          logLevel: this.logLevel,
          fetch: this.fetch,
          fetchOptions: this.fetchOptions,
          apiKey: this.apiKey,
          apiVersion: this.apiVersion,
        }),
        e
      )
    );
  }
  baseURLOverridden() {
    return this.baseURL !== "https://generativelanguage.googleapis.com";
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  validateHeaders({ values: e, nulls: i }) {
    if (
      !(e.has("authorization") || e.has("x-goog-api-key")) &&
      !(this.apiKey && e.get("x-goog-api-key")) &&
      !i.has("x-goog-api-key")
    )
      throw new Error(
        'Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted'
      );
  }
  async authHeaders(e) {
    const i = zs([e.headers]);
    if (!(i.values.has("authorization") || i.values.has("x-goog-api-key"))) {
      if (this.apiKey) return zs([{ "x-goog-api-key": this.apiKey }]);
      if (this.clientAdapter.isVertexAI())
        return zs([await this.clientAdapter.getAuthHeaders()]);
    }
  }
  stringifyQuery(e) {
    return Object.entries(e)
      .filter(([i, s]) => typeof s < "u")
      .map(([i, s]) => {
        if (
          typeof s == "string" ||
          typeof s == "number" ||
          typeof s == "boolean"
        )
          return `${encodeURIComponent(i)}=${encodeURIComponent(s)}`;
        if (s === null) return `${encodeURIComponent(i)}=`;
        throw new $t(
          `Cannot stringify type ${typeof s}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`
        );
      })
      .join("&");
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${wo}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${vN()}`;
  }
  makeStatusError(e, i, s, a) {
    return Tt.generate(e, i, s, a);
  }
  buildURL(e, i, s) {
    const a = (!this.baseURLOverridden() && s) || this.baseURL,
      u = SN(e)
        ? new URL(e)
        : new URL(a + (a.endsWith("/") && e.startsWith("/") ? e.slice(1) : e)),
      c = this.defaultQuery();
    return (
      AN(c) || (i = Object.assign(Object.assign({}, c), i)),
      typeof i == "object" &&
        i &&
        !Array.isArray(i) &&
        (u.search = this.stringifyQuery(i)),
      u.toString()
    );
  }
  async prepareOptions(e) {
    if (
      this.clientAdapter &&
      this.clientAdapter.isVertexAI() &&
      !e.path.startsWith(`/${this.apiVersion}/projects/`)
    ) {
      const i = e.path.slice(this.apiVersion.length + 1);
      e.path = `/${
        this.apiVersion
      }/projects/${this.clientAdapter.getProject()}/locations/${this.clientAdapter.getLocation()}${i}`;
    }
  }
  async prepareRequest(e, { url: i, options: s }) {}
  get(e, i) {
    return this.methodRequest("get", e, i);
  }
  post(e, i) {
    return this.methodRequest("post", e, i);
  }
  patch(e, i) {
    return this.methodRequest("patch", e, i);
  }
  put(e, i) {
    return this.methodRequest("put", e, i);
  }
  delete(e, i) {
    return this.methodRequest("delete", e, i);
  }
  methodRequest(e, i, s) {
    return this.request(
      Promise.resolve(s).then((a) => Object.assign({ method: e, path: i }, a))
    );
  }
  request(e, i = null) {
    return new $f(this, this.makeRequest(e, i, void 0));
  }
  async makeRequest(e, i, s) {
    var a, u, c;
    const h = await e,
      g = (a = h.maxRetries) !== null && a !== void 0 ? a : this.maxRetries;
    i == null && (i = g), await this.prepareOptions(h);
    const {
      req: p,
      url: v,
      timeout: T,
    } = await this.buildRequest(h, { retryCount: g - i });
    await this.prepareRequest(p, { url: v, options: h });
    const S =
        "log_" +
        ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, "0"),
      _ = s === void 0 ? "" : `, retryOf: ${s}`,
      C = Date.now();
    if (
      (yt(this).debug(
        `[${S}] sending request`,
        Vi({
          retryOfRequestLogID: s,
          method: h.method,
          url: v,
          options: h,
          headers: p.headers,
        })
      ),
      !((u = h.signal) === null || u === void 0) && u.aborted)
    )
      throw new Tf();
    const R = new AbortController(),
      M = await this.fetchWithTimeout(v, p, T, R).catch(vf),
      b = Date.now();
    if (M instanceof globalThis.Error) {
      const P = `retrying, ${i} attempts remaining`;
      if (!((c = h.signal) === null || c === void 0) && c.aborted)
        throw new Tf();
      const Y =
        yf(M) ||
        /timed? ?out/i.test(String(M) + ("cause" in M ? String(M.cause) : ""));
      if (i)
        return (
          yt(this).info(
            `[${S}] connection ${Y ? "timed out" : "failed"} - ${P}`
          ),
          yt(this).debug(
            `[${S}] connection ${Y ? "timed out" : "failed"} (${P})`,
            Vi({
              retryOfRequestLogID: s,
              url: v,
              durationMs: b - C,
              message: M.message,
            })
          ),
          this.retryRequest(h, i, s ?? S)
        );
      throw (
        (yt(this).info(
          `[${S}] connection ${
            Y ? "timed out" : "failed"
          } - error; no more retries left`
        ),
        yt(this).debug(
          `[${S}] connection ${
            Y ? "timed out" : "failed"
          } (error; no more retries left)`,
          Vi({
            retryOfRequestLogID: s,
            url: v,
            durationMs: b - C,
            message: M.message,
          })
        ),
        Y ? new vT() : new cr({ cause: M }))
      );
    }
    const k = `[${S}${_}] ${p.method} ${v} ${
      M.ok ? "succeeded" : "failed"
    } with status ${M.status} in ${b - C}ms`;
    if (!M.ok) {
      const P = await this.shouldRetry(M);
      if (i && P) {
        const $ = `retrying, ${i} attempts remaining`;
        return (
          await LN(M.body),
          yt(this).info(`${k} - ${$}`),
          yt(this).debug(
            `[${S}] response error (${$})`,
            Vi({
              retryOfRequestLogID: s,
              url: M.url,
              status: M.status,
              headers: M.headers,
              durationMs: b - C,
            })
          ),
          this.retryRequest(h, i, s ?? S, M.headers)
        );
      }
      const Y = P ? "error; no more retries left" : "error; not retryable";
      yt(this).info(`${k} - ${Y}`);
      const q = await M.text().catch(($) => vf($).message),
        Q = MN(q),
        J = Q ? void 0 : q;
      throw (
        (yt(this).debug(
          `[${S}] response error (${Y})`,
          Vi({
            retryOfRequestLogID: s,
            url: M.url,
            status: M.status,
            headers: M.headers,
            message: J,
            durationMs: Date.now() - C,
          })
        ),
        this.makeStatusError(M.status, Q, J, M.headers))
      );
    }
    return (
      yt(this).info(k),
      yt(this).debug(
        `[${S}] response start`,
        Vi({
          retryOfRequestLogID: s,
          url: M.url,
          status: M.status,
          headers: M.headers,
          durationMs: b - C,
        })
      ),
      {
        response: M,
        options: h,
        controller: R,
        requestLogID: S,
        retryOfRequestLogID: s,
        startTime: C,
      }
    );
  }
  async fetchWithTimeout(e, i, s, a) {
    const u = i || {},
      { signal: c, method: h } = u,
      g = Qa(u, ["signal", "method"]);
    c && c.addEventListener("abort", () => a.abort());
    const p = setTimeout(() => a.abort(), s),
      v =
        (globalThis.ReadableStream &&
          g.body instanceof globalThis.ReadableStream) ||
        (typeof g.body == "object" &&
          g.body !== null &&
          Symbol.asyncIterator in g.body),
      T = Object.assign(
        Object.assign(
          Object.assign({ signal: a.signal }, v ? { duplex: "half" } : {}),
          { method: "GET" }
        ),
        g
      );
    h && (T.method = h.toUpperCase());
    try {
      return await this.fetch.call(void 0, e, T);
    } finally {
      clearTimeout(p);
    }
  }
  async shouldRetry(e) {
    const i = e.headers.get("x-should-retry");
    return i === "true"
      ? !0
      : i === "false"
      ? !1
      : e.status === 408 ||
        e.status === 409 ||
        e.status === 429 ||
        e.status >= 500;
  }
  async retryRequest(e, i, s, a) {
    var u;
    let c;
    const h = a == null ? void 0 : a.get("retry-after-ms");
    if (h) {
      const p = parseFloat(h);
      Number.isNaN(p) || (c = p);
    }
    const g = a == null ? void 0 : a.get("retry-after");
    if (g && !c) {
      const p = parseFloat(g);
      Number.isNaN(p) ? (c = Date.parse(g) - Date.now()) : (c = p * 1e3);
    }
    if (!(c && 0 <= c && c < 60 * 1e3)) {
      const p =
        (u = e.maxRetries) !== null && u !== void 0 ? u : this.maxRetries;
      c = this.calculateDefaultRetryTimeoutMillis(i, p);
    }
    return await RN(c), this.makeRequest(e, i - 1, s);
  }
  calculateDefaultRetryTimeoutMillis(e, i) {
    const u = i - e,
      c = Math.min(0.5 * Math.pow(2, u), 8),
      h = 1 - Math.random() * 0.25;
    return c * h * 1e3;
  }
  async buildRequest(e, { retryCount: i = 0 } = {}) {
    var s, a, u;
    const c = Object.assign({}, e),
      { method: h, path: g, query: p, defaultBaseURL: v } = c,
      T = this.buildURL(g, p, v);
    "timeout" in c && xN("timeout", c.timeout),
      (c.timeout = (s = c.timeout) !== null && s !== void 0 ? s : this.timeout);
    const { bodyHeaders: S, body: _ } = this.buildBody({ options: c }),
      C = await this.buildHeaders({
        options: e,
        method: h,
        bodyHeaders: S,
        retryCount: i,
      });
    return {
      req: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                { method: h, headers: C },
                c.signal && { signal: c.signal }
              ),
              globalThis.ReadableStream &&
                _ instanceof globalThis.ReadableStream && { duplex: "half" }
            ),
            _ && { body: _ }
          ),
          (a = this.fetchOptions) !== null && a !== void 0 ? a : {}
        ),
        (u = c.fetchOptions) !== null && u !== void 0 ? u : {}
      ),
      url: T,
      timeout: c.timeout,
    };
  }
  async buildHeaders({ options: e, method: i, bodyHeaders: s, retryCount: a }) {
    let u = {};
    this.idempotencyHeader &&
      i !== "get" &&
      (e.idempotencyKey || (e.idempotencyKey = this.defaultIdempotencyKey()),
      (u[this.idempotencyHeader] = e.idempotencyKey));
    const c = await this.authHeaders(e);
    let h = zs([
      u,
      Object.assign(
        Object.assign(
          {
            Accept: "application/json",
            "User-Agent": this.getUserAgent(),
            "X-Stainless-Retry-Count": String(a),
          },
          e.timeout
            ? { "X-Stainless-Timeout": String(Math.trunc(e.timeout / 1e3)) }
            : {}
        ),
        DN()
      ),
      this._options.defaultHeaders,
      s,
      e.headers,
      c,
    ]);
    return this.validateHeaders(h), h.values;
  }
  buildBody({ options: { body: e, headers: i } }) {
    if (!e) return { bodyHeaders: void 0, body: void 0 };
    const s = zs([i]);
    return ArrayBuffer.isView(e) ||
      e instanceof ArrayBuffer ||
      e instanceof DataView ||
      (typeof e == "string" && s.values.has("content-type")) ||
      (globalThis.Blob && e instanceof globalThis.Blob) ||
      e instanceof FormData ||
      e instanceof URLSearchParams ||
      (globalThis.ReadableStream && e instanceof globalThis.ReadableStream)
      ? { bodyHeaders: void 0, body: e }
      : typeof e == "object" &&
        (Symbol.asyncIterator in e ||
          (Symbol.iterator in e && "next" in e && typeof e.next == "function"))
      ? { bodyHeaders: void 0, body: UN(e) }
      : this.encoder({ body: e, headers: s });
  }
}
dr.DEFAULT_TIMEOUT = 6e4;
class st extends dr {
  constructor() {
    super(...arguments), (this.interactions = new LT(this));
  }
}
PT = st;
st.GeminiNextGenAPIClient = PT;
st.GeminiNextGenAPIClientError = $t;
st.APIError = Tt;
st.APIConnectionError = cr;
st.APIConnectionTimeoutError = vT;
st.APIUserAbortError = Tf;
st.NotFoundError = _T;
st.ConflictError = AT;
st.RateLimitError = xT;
st.BadRequestError = TT;
st.AuthenticationError = ST;
st.InternalServerError = MT;
st.PermissionDeniedError = ET;
st.UnprocessableEntityError = CT;
st.toFile = BN;
st.Interactions = LT;
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function jN(t, e) {
  const i = {},
    s = f(t, ["name"]);
  return s != null && d(i, ["_url", "name"], s), i;
}
function eb(t, e) {
  const i = {},
    s = f(t, ["name"]);
  return s != null && d(i, ["_url", "name"], s), i;
}
function tb(t, e) {
  const i = {},
    s = f(t, ["sdkHttpResponse"]);
  return s != null && d(i, ["sdkHttpResponse"], s), i;
}
function nb(t, e) {
  const i = {},
    s = f(t, ["sdkHttpResponse"]);
  return s != null && d(i, ["sdkHttpResponse"], s), i;
}
function ib(t, e, i) {
  const s = {};
  if (f(t, ["validationDataset"]) !== void 0)
    throw new Error(
      "validationDataset parameter is not supported in Gemini API."
    );
  const a = f(t, ["tunedModelDisplayName"]);
  if (
    (e !== void 0 && a != null && d(e, ["displayName"], a),
    f(t, ["description"]) !== void 0)
  )
    throw new Error("description parameter is not supported in Gemini API.");
  const u = f(t, ["epochCount"]);
  e !== void 0 &&
    u != null &&
    d(e, ["tuningTask", "hyperparameters", "epochCount"], u);
  const c = f(t, ["learningRateMultiplier"]);
  if (
    (c != null &&
      d(s, ["tuningTask", "hyperparameters", "learningRateMultiplier"], c),
    f(t, ["exportLastCheckpointOnly"]) !== void 0)
  )
    throw new Error(
      "exportLastCheckpointOnly parameter is not supported in Gemini API."
    );
  if (f(t, ["preTunedModelCheckpointId"]) !== void 0)
    throw new Error(
      "preTunedModelCheckpointId parameter is not supported in Gemini API."
    );
  if (f(t, ["adapterSize"]) !== void 0)
    throw new Error("adapterSize parameter is not supported in Gemini API.");
  const h = f(t, ["batchSize"]);
  e !== void 0 &&
    h != null &&
    d(e, ["tuningTask", "hyperparameters", "batchSize"], h);
  const g = f(t, ["learningRate"]);
  if (
    (e !== void 0 &&
      g != null &&
      d(e, ["tuningTask", "hyperparameters", "learningRate"], g),
    f(t, ["labels"]) !== void 0)
  )
    throw new Error("labels parameter is not supported in Gemini API.");
  if (f(t, ["beta"]) !== void 0)
    throw new Error("beta parameter is not supported in Gemini API.");
  return s;
}
function ob(t, e, i) {
  const s = {};
  let a = f(i, ["config", "method"]);
  if (
    (a === void 0 && (a = "SUPERVISED_FINE_TUNING"),
    a === "SUPERVISED_FINE_TUNING")
  ) {
    const _ = f(t, ["validationDataset"]);
    e !== void 0 && _ != null && d(e, ["supervisedTuningSpec"], Tv(_));
  } else if (a === "PREFERENCE_TUNING") {
    const _ = f(t, ["validationDataset"]);
    e !== void 0 && _ != null && d(e, ["preferenceOptimizationSpec"], Tv(_));
  }
  const u = f(t, ["tunedModelDisplayName"]);
  e !== void 0 && u != null && d(e, ["tunedModelDisplayName"], u);
  const c = f(t, ["description"]);
  e !== void 0 && c != null && d(e, ["description"], c);
  let h = f(i, ["config", "method"]);
  if (
    (h === void 0 && (h = "SUPERVISED_FINE_TUNING"),
    h === "SUPERVISED_FINE_TUNING")
  ) {
    const _ = f(t, ["epochCount"]);
    e !== void 0 &&
      _ != null &&
      d(e, ["supervisedTuningSpec", "hyperParameters", "epochCount"], _);
  } else if (h === "PREFERENCE_TUNING") {
    const _ = f(t, ["epochCount"]);
    e !== void 0 &&
      _ != null &&
      d(e, ["preferenceOptimizationSpec", "hyperParameters", "epochCount"], _);
  }
  let g = f(i, ["config", "method"]);
  if (
    (g === void 0 && (g = "SUPERVISED_FINE_TUNING"),
    g === "SUPERVISED_FINE_TUNING")
  ) {
    const _ = f(t, ["learningRateMultiplier"]);
    e !== void 0 &&
      _ != null &&
      d(
        e,
        ["supervisedTuningSpec", "hyperParameters", "learningRateMultiplier"],
        _
      );
  } else if (g === "PREFERENCE_TUNING") {
    const _ = f(t, ["learningRateMultiplier"]);
    e !== void 0 &&
      _ != null &&
      d(
        e,
        [
          "preferenceOptimizationSpec",
          "hyperParameters",
          "learningRateMultiplier",
        ],
        _
      );
  }
  let p = f(i, ["config", "method"]);
  if (
    (p === void 0 && (p = "SUPERVISED_FINE_TUNING"),
    p === "SUPERVISED_FINE_TUNING")
  ) {
    const _ = f(t, ["exportLastCheckpointOnly"]);
    e !== void 0 &&
      _ != null &&
      d(e, ["supervisedTuningSpec", "exportLastCheckpointOnly"], _);
  } else if (p === "PREFERENCE_TUNING") {
    const _ = f(t, ["exportLastCheckpointOnly"]);
    e !== void 0 &&
      _ != null &&
      d(e, ["preferenceOptimizationSpec", "exportLastCheckpointOnly"], _);
  }
  let v = f(i, ["config", "method"]);
  if (
    (v === void 0 && (v = "SUPERVISED_FINE_TUNING"),
    v === "SUPERVISED_FINE_TUNING")
  ) {
    const _ = f(t, ["adapterSize"]);
    e !== void 0 &&
      _ != null &&
      d(e, ["supervisedTuningSpec", "hyperParameters", "adapterSize"], _);
  } else if (v === "PREFERENCE_TUNING") {
    const _ = f(t, ["adapterSize"]);
    e !== void 0 &&
      _ != null &&
      d(e, ["preferenceOptimizationSpec", "hyperParameters", "adapterSize"], _);
  }
  if (f(t, ["batchSize"]) !== void 0)
    throw new Error("batchSize parameter is not supported in Vertex AI.");
  if (f(t, ["learningRate"]) !== void 0)
    throw new Error("learningRate parameter is not supported in Vertex AI.");
  const T = f(t, ["labels"]);
  e !== void 0 && T != null && d(e, ["labels"], T);
  const S = f(t, ["beta"]);
  return (
    e !== void 0 &&
      S != null &&
      d(e, ["preferenceOptimizationSpec", "hyperParameters", "beta"], S),
    s
  );
}
function sb(t, e) {
  const i = {},
    s = f(t, ["baseModel"]);
  s != null && d(i, ["baseModel"], s);
  const a = f(t, ["preTunedModel"]);
  a != null && d(i, ["preTunedModel"], a);
  const u = f(t, ["trainingDataset"]);
  u != null && gb(u);
  const c = f(t, ["config"]);
  return c != null && ib(c, i), i;
}
function lb(t, e) {
  const i = {},
    s = f(t, ["baseModel"]);
  s != null && d(i, ["baseModel"], s);
  const a = f(t, ["preTunedModel"]);
  a != null && d(i, ["preTunedModel"], a);
  const u = f(t, ["trainingDataset"]);
  u != null && yb(u, i, e);
  const c = f(t, ["config"]);
  return c != null && ob(c, i, e), i;
}
function ab(t, e) {
  const i = {},
    s = f(t, ["name"]);
  return s != null && d(i, ["_url", "name"], s), i;
}
function rb(t, e) {
  const i = {},
    s = f(t, ["name"]);
  return s != null && d(i, ["_url", "name"], s), i;
}
function ub(t, e, i) {
  const s = {},
    a = f(t, ["pageSize"]);
  e !== void 0 && a != null && d(e, ["_query", "pageSize"], a);
  const u = f(t, ["pageToken"]);
  e !== void 0 && u != null && d(e, ["_query", "pageToken"], u);
  const c = f(t, ["filter"]);
  return e !== void 0 && c != null && d(e, ["_query", "filter"], c), s;
}
function cb(t, e, i) {
  const s = {},
    a = f(t, ["pageSize"]);
  e !== void 0 && a != null && d(e, ["_query", "pageSize"], a);
  const u = f(t, ["pageToken"]);
  e !== void 0 && u != null && d(e, ["_query", "pageToken"], u);
  const c = f(t, ["filter"]);
  return e !== void 0 && c != null && d(e, ["_query", "filter"], c), s;
}
function fb(t, e) {
  const i = {},
    s = f(t, ["config"]);
  return s != null && ub(s, i), i;
}
function db(t, e) {
  const i = {},
    s = f(t, ["config"]);
  return s != null && cb(s, i), i;
}
function hb(t, e) {
  const i = {},
    s = f(t, ["sdkHttpResponse"]);
  s != null && d(i, ["sdkHttpResponse"], s);
  const a = f(t, ["nextPageToken"]);
  a != null && d(i, ["nextPageToken"], a);
  const u = f(t, ["tunedModels"]);
  if (u != null) {
    let c = u;
    Array.isArray(c) && (c = c.map((h) => HT(h))), d(i, ["tuningJobs"], c);
  }
  return i;
}
function pb(t, e) {
  const i = {},
    s = f(t, ["sdkHttpResponse"]);
  s != null && d(i, ["sdkHttpResponse"], s);
  const a = f(t, ["nextPageToken"]);
  a != null && d(i, ["nextPageToken"], a);
  const u = f(t, ["tuningJobs"]);
  if (u != null) {
    let c = u;
    Array.isArray(c) && (c = c.map((h) => _f(h))), d(i, ["tuningJobs"], c);
  }
  return i;
}
function mb(t, e) {
  const i = {},
    s = f(t, ["name"]);
  s != null && d(i, ["model"], s);
  const a = f(t, ["name"]);
  return a != null && d(i, ["endpoint"], a), i;
}
function gb(t, e) {
  const i = {};
  if (f(t, ["gcsUri"]) !== void 0)
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  if (f(t, ["vertexDatasetResource"]) !== void 0)
    throw new Error(
      "vertexDatasetResource parameter is not supported in Gemini API."
    );
  const s = f(t, ["examples"]);
  if (s != null) {
    let a = s;
    Array.isArray(a) && (a = a.map((u) => u)),
      d(i, ["examples", "examples"], a);
  }
  return i;
}
function yb(t, e, i) {
  const s = {};
  let a = f(i, ["config", "method"]);
  if (
    (a === void 0 && (a = "SUPERVISED_FINE_TUNING"),
    a === "SUPERVISED_FINE_TUNING")
  ) {
    const c = f(t, ["gcsUri"]);
    e !== void 0 &&
      c != null &&
      d(e, ["supervisedTuningSpec", "trainingDatasetUri"], c);
  } else if (a === "PREFERENCE_TUNING") {
    const c = f(t, ["gcsUri"]);
    e !== void 0 &&
      c != null &&
      d(e, ["preferenceOptimizationSpec", "trainingDatasetUri"], c);
  }
  let u = f(i, ["config", "method"]);
  if (
    (u === void 0 && (u = "SUPERVISED_FINE_TUNING"),
    u === "SUPERVISED_FINE_TUNING")
  ) {
    const c = f(t, ["vertexDatasetResource"]);
    e !== void 0 &&
      c != null &&
      d(e, ["supervisedTuningSpec", "trainingDatasetUri"], c);
  } else if (u === "PREFERENCE_TUNING") {
    const c = f(t, ["vertexDatasetResource"]);
    e !== void 0 &&
      c != null &&
      d(e, ["preferenceOptimizationSpec", "trainingDatasetUri"], c);
  }
  if (f(t, ["examples"]) !== void 0)
    throw new Error("examples parameter is not supported in Vertex AI.");
  return s;
}
function HT(t, e) {
  const i = {},
    s = f(t, ["sdkHttpResponse"]);
  s != null && d(i, ["sdkHttpResponse"], s);
  const a = f(t, ["name"]);
  a != null && d(i, ["name"], a);
  const u = f(t, ["state"]);
  u != null && d(i, ["state"], j0(u));
  const c = f(t, ["createTime"]);
  c != null && d(i, ["createTime"], c);
  const h = f(t, ["tuningTask", "startTime"]);
  h != null && d(i, ["startTime"], h);
  const g = f(t, ["tuningTask", "completeTime"]);
  g != null && d(i, ["endTime"], g);
  const p = f(t, ["updateTime"]);
  p != null && d(i, ["updateTime"], p);
  const v = f(t, ["description"]);
  v != null && d(i, ["description"], v);
  const T = f(t, ["baseModel"]);
  T != null && d(i, ["baseModel"], T);
  const S = f(t, ["_self"]);
  return S != null && d(i, ["tunedModel"], mb(S)), i;
}
function _f(t, e) {
  const i = {},
    s = f(t, ["sdkHttpResponse"]);
  s != null && d(i, ["sdkHttpResponse"], s);
  const a = f(t, ["name"]);
  a != null && d(i, ["name"], a);
  const u = f(t, ["state"]);
  u != null && d(i, ["state"], j0(u));
  const c = f(t, ["createTime"]);
  c != null && d(i, ["createTime"], c);
  const h = f(t, ["startTime"]);
  h != null && d(i, ["startTime"], h);
  const g = f(t, ["endTime"]);
  g != null && d(i, ["endTime"], g);
  const p = f(t, ["updateTime"]);
  p != null && d(i, ["updateTime"], p);
  const v = f(t, ["error"]);
  v != null && d(i, ["error"], v);
  const T = f(t, ["description"]);
  T != null && d(i, ["description"], T);
  const S = f(t, ["baseModel"]);
  S != null && d(i, ["baseModel"], S);
  const _ = f(t, ["tunedModel"]);
  _ != null && d(i, ["tunedModel"], _);
  const C = f(t, ["preTunedModel"]);
  C != null && d(i, ["preTunedModel"], C);
  const R = f(t, ["supervisedTuningSpec"]);
  R != null && d(i, ["supervisedTuningSpec"], R);
  const M = f(t, ["preferenceOptimizationSpec"]);
  M != null && d(i, ["preferenceOptimizationSpec"], M);
  const b = f(t, ["tuningDataStats"]);
  b != null && d(i, ["tuningDataStats"], b);
  const k = f(t, ["encryptionSpec"]);
  k != null && d(i, ["encryptionSpec"], k);
  const P = f(t, ["partnerModelTuningSpec"]);
  P != null && d(i, ["partnerModelTuningSpec"], P);
  const Y = f(t, ["customBaseModel"]);
  Y != null && d(i, ["customBaseModel"], Y);
  const q = f(t, ["experiment"]);
  q != null && d(i, ["experiment"], q);
  const Q = f(t, ["labels"]);
  Q != null && d(i, ["labels"], Q);
  const J = f(t, ["outputUri"]);
  J != null && d(i, ["outputUri"], J);
  const Z = f(t, ["pipelineJob"]);
  Z != null && d(i, ["pipelineJob"], Z);
  const $ = f(t, ["serviceAccount"]);
  $ != null && d(i, ["serviceAccount"], $);
  const ae = f(t, ["tunedModelDisplayName"]);
  ae != null && d(i, ["tunedModelDisplayName"], ae);
  const ge = f(t, ["veoTuningSpec"]);
  return ge != null && d(i, ["veoTuningSpec"], ge), i;
}
function vb(t, e) {
  const i = {},
    s = f(t, ["sdkHttpResponse"]);
  s != null && d(i, ["sdkHttpResponse"], s);
  const a = f(t, ["name"]);
  a != null && d(i, ["name"], a);
  const u = f(t, ["metadata"]);
  u != null && d(i, ["metadata"], u);
  const c = f(t, ["done"]);
  c != null && d(i, ["done"], c);
  const h = f(t, ["error"]);
  return h != null && d(i, ["error"], h), i;
}
function Tv(t, e) {
  const i = {},
    s = f(t, ["gcsUri"]);
  s != null && d(i, ["validationDatasetUri"], s);
  const a = f(t, ["vertexDatasetResource"]);
  return a != null && d(i, ["validationDatasetUri"], a), i;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Tb extends Pn {
  constructor(e) {
    super(),
      (this.apiClient = e),
      (this.list = async (i = {}) =>
        new zi(
          Vn.PAGED_ITEM_TUNING_JOBS,
          (s) => this.listInternal(s),
          await this.listInternal(i),
          i
        )),
      (this.get = async (i) => await this.getInternal(i)),
      (this.tune = async (i) => {
        var s;
        if (this.apiClient.isVertexAI())
          if (i.baseModel.startsWith("projects/")) {
            const a = { tunedModelName: i.baseModel };
            !((s = i.config) === null || s === void 0) &&
              s.preTunedModelCheckpointId &&
              (a.checkpointId = i.config.preTunedModelCheckpointId);
            const u = Object.assign(Object.assign({}, i), { preTunedModel: a });
            return (u.baseModel = void 0), await this.tuneInternal(u);
          } else {
            const a = Object.assign({}, i);
            return await this.tuneInternal(a);
          }
        else {
          const a = Object.assign({}, i),
            u = await this.tuneMldevInternal(a);
          let c = "";
          return (
            u.metadata !== void 0 && u.metadata.tunedModel !== void 0
              ? (c = u.metadata.tunedModel)
              : u.name !== void 0 &&
                u.name.includes("/operations/") &&
                (c = u.name.split("/operations/")[0]),
            { name: c, state: cf.JOB_STATE_QUEUED }
          );
        }
      });
  }
  async getInternal(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = rb(e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => _f(v))
      );
    } else {
      const p = ab(e);
      return (
        (h = j("{name}", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => HT(v))
      );
    }
  }
  async listInternal(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = db(e);
      return (
        (h = j("tuningJobs", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = pb(v),
            S = new Yy();
          return Object.assign(S, T), S;
        })
      );
    } else {
      const p = fb(e);
      return (
        (h = j("tunedModels", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "GET",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = hb(v),
            S = new Yy();
          return Object.assign(S, T), S;
        })
      );
    }
  }
  async cancel(e) {
    var i, s, a, u;
    let c,
      h = "",
      g = {};
    if (this.apiClient.isVertexAI()) {
      const p = eb(e);
      return (
        (h = j("{name}:cancel", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = nb(v),
            S = new Jy();
          return Object.assign(S, T), S;
        })
      );
    } else {
      const p = jN(e);
      return (
        (h = j("{name}:cancel", p._url)),
        (g = p._query),
        delete p._url,
        delete p._query,
        (c = this.apiClient
          .request({
            path: h,
            queryParams: g,
            body: JSON.stringify(p),
            httpMethod: "POST",
            httpOptions:
              (a = e.config) === null || a === void 0 ? void 0 : a.httpOptions,
            abortSignal:
              (u = e.config) === null || u === void 0 ? void 0 : u.abortSignal,
          })
          .then((v) =>
            v.json().then((T) => {
              const S = T;
              return (S.sdkHttpResponse = { headers: v.headers }), S;
            })
          )),
        c.then((v) => {
          const T = tb(v),
            S = new Jy();
          return Object.assign(S, T), S;
        })
      );
    }
  }
  async tuneInternal(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI()) {
      const h = lb(e, e);
      return (
        (u = j("tuningJobs", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) =>
            g.json().then((p) => {
              const v = p;
              return (v.sdkHttpResponse = { headers: g.headers }), v;
            })
          )),
        a.then((g) => _f(g))
      );
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async tuneMldevInternal(e) {
    var i, s;
    let a,
      u = "",
      c = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API."
      );
    {
      const h = sb(e);
      return (
        (u = j("tunedModels", h._url)),
        (c = h._query),
        delete h._url,
        delete h._query,
        (a = this.apiClient
          .request({
            path: u,
            queryParams: c,
            body: JSON.stringify(h),
            httpMethod: "POST",
            httpOptions:
              (i = e.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (s = e.config) === null || s === void 0 ? void 0 : s.abortSignal,
          })
          .then((g) =>
            g.json().then((p) => {
              const v = p;
              return (v.sdkHttpResponse = { headers: g.headers }), v;
            })
          )),
        a.then((g) => vb(g))
      );
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Sb {
  async download(e, i) {
    throw new Error(
      "Download to file is not supported in the browser, please use a browser compliant download like an <a> tag."
    );
  }
}
const Eb = 1024 * 1024 * 8,
  _b = 3,
  Ab = 1e3,
  Cb = 2,
  $a = "x-goog-upload-status";
async function xb(t, e, i) {
  var s;
  const a = await GT(t, e, i),
    u = await (a == null ? void 0 : a.json());
  if (
    ((s = a == null ? void 0 : a.headers) === null || s === void 0
      ? void 0
      : s[$a]) !== "final"
  )
    throw new Error("Failed to upload file: Upload status is not finalized.");
  return u.file;
}
async function Mb(t, e, i) {
  var s;
  const a = await GT(t, e, i),
    u = await (a == null ? void 0 : a.json());
  if (
    ((s = a == null ? void 0 : a.headers) === null || s === void 0
      ? void 0
      : s[$a]) !== "final"
  )
    throw new Error("Failed to upload file: Upload status is not finalized.");
  const c = K0(u),
    h = new Ff();
  return Object.assign(h, c), h;
}
async function GT(t, e, i) {
  var s, a;
  let u = 0,
    c = 0,
    h = new ff(new Response()),
    g = "upload";
  for (u = t.size; c < u; ) {
    const p = Math.min(Eb, u - c),
      v = t.slice(c, c + p);
    c + p >= u && (g += ", finalize");
    let T = 0,
      S = Ab;
    for (
      ;
      T < _b &&
      ((h = await i.request({
        path: "",
        body: v,
        httpMethod: "POST",
        httpOptions: {
          apiVersion: "",
          baseUrl: e,
          headers: {
            "X-Goog-Upload-Command": g,
            "X-Goog-Upload-Offset": String(c),
            "Content-Length": String(p),
          },
        },
      })),
      !(
        !((s = h == null ? void 0 : h.headers) === null || s === void 0) &&
        s[$a]
      ));

    )
      T++, await wb(S), (S = S * Cb);
    if (
      ((c += p),
      ((a = h == null ? void 0 : h.headers) === null || a === void 0
        ? void 0
        : a[$a]) !== "active")
    )
      break;
    if (u <= c)
      throw new Error(
        "All content has been uploaded, but the upload status is not finalized."
      );
  }
  return h;
}
async function Rb(t) {
  return { size: t.size, type: t.type };
}
function wb(t) {
  return new Promise((e) => setTimeout(e, t));
}
class Nb {
  async upload(e, i, s) {
    if (typeof e == "string")
      throw new Error("File path is not supported in browser uploader.");
    return await xb(e, i, s);
  }
  async uploadToFileSearchStore(e, i, s) {
    if (typeof e == "string")
      throw new Error("File path is not supported in browser uploader.");
    return await Mb(e, i, s);
  }
  async stat(e) {
    if (typeof e == "string")
      throw new Error("File path is not supported in browser uploader.");
    return await Rb(e);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class bb {
  create(e, i, s) {
    return new Db(e, i, s);
  }
}
class Db {
  constructor(e, i, s) {
    (this.url = e), (this.headers = i), (this.callbacks = s);
  }
  connect() {
    (this.ws = new WebSocket(this.url)),
      (this.ws.onopen = this.callbacks.onopen),
      (this.ws.onerror = this.callbacks.onerror),
      (this.ws.onclose = this.callbacks.onclose),
      (this.ws.onmessage = this.callbacks.onmessage);
  }
  send(e) {
    if (this.ws === void 0) throw new Error("WebSocket is not connected");
    this.ws.send(e);
  }
  close() {
    if (this.ws === void 0) throw new Error("WebSocket is not connected");
    this.ws.close();
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Sv = "x-goog-api-key";
class Ib {
  constructor(e) {
    this.apiKey = e;
  }
  async addAuthHeaders(e, i) {
    if (e.get(Sv) === null) {
      if (this.apiKey.startsWith("auth_tokens/"))
        throw new Error("Ephemeral tokens are only supported by the live API.");
      if (!this.apiKey)
        throw new Error("API key is missing. Please provide a valid API key.");
      e.append(Sv, this.apiKey);
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Ub = "gl-node/";
class Lb {
  get interactions() {
    if (this._interactions !== void 0) return this._interactions;
    console.warn(
      "GoogleGenAI.interactions: Interactions usage is experimental and may change in future versions."
    );
    const e = this.httpOptions;
    e != null &&
      e.extraBody &&
      console.warn(
        "GoogleGenAI.interactions: Client level httpOptions.extraBody is not supported by the interactions client and will be ignored."
      );
    const i = new st({
      baseURL: this.apiClient.getBaseUrl(),
      apiKey: this.apiKey,
      apiVersion: this.apiClient.getApiVersion(),
      clientAdapter: this.apiClient,
      defaultHeaders: this.apiClient.getDefaultHeaders(),
      timeout: e == null ? void 0 : e.timeout,
    });
    return (this._interactions = i.interactions), this._interactions;
  }
  constructor(e) {
    var i;
    if (e.apiKey == null)
      throw new Error("An API Key must be set when running in a browser");
    if (e.project || e.location)
      throw new Error(
        "Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location."
      );
    (this.vertexai = (i = e.vertexai) !== null && i !== void 0 ? i : !1),
      (this.apiKey = e.apiKey);
    const s = wC(e.httpOptions, e.vertexai, void 0, void 0);
    s &&
      (e.httpOptions
        ? (e.httpOptions.baseUrl = s)
        : (e.httpOptions = { baseUrl: s })),
      (this.apiVersion = e.apiVersion),
      (this.httpOptions = e.httpOptions);
    const a = new Ib(this.apiKey);
    (this.apiClient = new Rw({
      auth: a,
      apiVersion: this.apiVersion,
      apiKey: this.apiKey,
      vertexai: this.vertexai,
      httpOptions: this.httpOptions,
      userAgentExtra: Ub + "web",
      uploader: new Nb(),
      downloader: new Sb(),
    })),
      (this.models = new Jw(this.apiClient)),
      (this.live = new Bw(this.apiClient, a, new bb())),
      (this.batches = new iM(this.apiClient)),
      (this.chats = new GM(this.models, this.apiClient)),
      (this.caches = new VM(this.apiClient)),
      (this.files = new XM(this.apiClient)),
      (this.operations = new Kw(this.apiClient)),
      (this.authTokens = new uN(this.apiClient)),
      (this.tunings = new Tb(this.apiClient)),
      (this.fileSearchStores = new yN(this.apiClient));
  }
}
const Wf = X.createContext({});
function ol(t) {
  const e = X.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const hr = X.createContext(null),
  sl = X.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  });
class Vb extends X.Component {
  getSnapshotBeforeUpdate(e) {
    const i = this.props.childRef.current;
    if (i && e.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current;
      (s.height = i.offsetHeight || 0),
        (s.width = i.offsetWidth || 0),
        (s.top = i.offsetTop),
        (s.left = i.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Pb({ children: t, isPresent: e }) {
  const i = X.useId(),
    s = X.useRef(null),
    a = X.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: u } = X.useContext(sl);
  return (
    X.useInsertionEffect(() => {
      const { width: c, height: h, top: g, left: p } = a.current;
      if (e || !s.current || !c || !h) return;
      s.current.dataset.motionPopId = i;
      const v = document.createElement("style");
      return (
        u && (v.nonce = u),
        document.head.appendChild(v),
        v.sheet &&
          v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${h}px !important;
            top: ${g}px !important;
            left: ${p}px !important;
          }
        `),
        () => {
          document.head.removeChild(v);
        }
      );
    }, [e]),
    I.jsx(Vb, {
      isPresent: e,
      childRef: s,
      sizeRef: a,
      children: X.cloneElement(t, { ref: s }),
    })
  );
}
const Hb = ({
  children: t,
  initial: e,
  isPresent: i,
  onExitComplete: s,
  custom: a,
  presenceAffectsLayout: u,
  mode: c,
}) => {
  const h = ol(Gb),
    g = X.useId(),
    p = X.useCallback(
      (T) => {
        h.set(T, !0);
        for (const S of h.values()) if (!S) return;
        s && s();
      },
      [h, s]
    ),
    v = X.useMemo(
      () => ({
        id: g,
        initial: e,
        isPresent: i,
        custom: a,
        onExitComplete: p,
        register: (T) => (h.set(T, !1), () => h.delete(T)),
      }),
      u ? [Math.random(), p] : [i, p]
    );
  return (
    X.useMemo(() => {
      h.forEach((T, S) => h.set(S, !1));
    }, [i]),
    X.useEffect(() => {
      !i && !h.size && s && s();
    }, [i]),
    c === "popLayout" && (t = I.jsx(Pb, { isPresent: i, children: t })),
    I.jsx(hr.Provider, { value: v, children: t })
  );
};
function Gb() {
  return new Map();
}
function kT(t = !0) {
  const e = X.useContext(hr);
  if (e === null) return [!0, null];
  const { isPresent: i, onExitComplete: s, register: a } = e,
    u = X.useId();
  X.useEffect(() => {
    t && a(u);
  }, [t]);
  const c = X.useCallback(() => t && s && s(u), [u, s, t]);
  return !i && s ? [!1, c] : [!0];
}
const Va = (t) => t.key || "";
function Ev(t) {
  const e = [];
  return (
    X.Children.forEach(t, (i) => {
      X.isValidElement(i) && e.push(i);
    }),
    e
  );
}
const jf = typeof window < "u",
  pr = jf ? X.useLayoutEffect : X.useEffect,
  BT = ({
    children: t,
    custom: e,
    initial: i = !0,
    onExitComplete: s,
    presenceAffectsLayout: a = !0,
    mode: u = "sync",
    propagate: c = !1,
  }) => {
    const [h, g] = kT(c),
      p = X.useMemo(() => Ev(t), [t]),
      v = c && !h ? [] : p.map(Va),
      T = X.useRef(!0),
      S = X.useRef(p),
      _ = ol(() => new Map()),
      [C, R] = X.useState(p),
      [M, b] = X.useState(p);
    pr(() => {
      (T.current = !1), (S.current = p);
      for (let Y = 0; Y < M.length; Y++) {
        const q = Va(M[Y]);
        v.includes(q) ? _.delete(q) : _.get(q) !== !0 && _.set(q, !1);
      }
    }, [M, v.length, v.join("-")]);
    const k = [];
    if (p !== C) {
      let Y = [...p];
      for (let q = 0; q < M.length; q++) {
        const Q = M[q],
          J = Va(Q);
        v.includes(J) || (Y.splice(q, 0, Q), k.push(Q));
      }
      u === "wait" && k.length && (Y = k), b(Ev(Y)), R(p);
      return;
    }
    const { forceRender: P } = X.useContext(Wf);
    return I.jsx(I.Fragment, {
      children: M.map((Y) => {
        const q = Va(Y),
          Q = c && !h ? !1 : p === M || v.includes(q),
          J = () => {
            if (_.has(q)) _.set(q, !0);
            else return;
            let Z = !0;
            _.forEach(($) => {
              $ || (Z = !1);
            }),
              Z &&
                (P == null || P(),
                b(S.current),
                c && (g == null || g()),
                s && s());
          };
        return I.jsx(
          Hb,
          {
            isPresent: Q,
            initial: !T.current || i ? void 0 : !1,
            custom: Q ? void 0 : e,
            presenceAffectsLayout: a,
            mode: u,
            onExitComplete: Q ? void 0 : J,
            children: Y,
          },
          q
        );
      }),
    });
  },
  vt = (t) => t;
let kb = vt,
  zT = vt;
function ed(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Bi = (t, e, i) => {
    const s = e - t;
    return s === 0 ? 1 : (i - t) / s;
  },
  Un = (t) => t * 1e3,
  Ln = (t) => t / 1e3,
  Bb = { useManualTiming: !1 };
function zb(t) {
  let e = new Set(),
    i = new Set(),
    s = !1,
    a = !1;
  const u = new WeakSet();
  let c = { delta: 0, timestamp: 0, isProcessing: !1 };
  function h(p) {
    u.has(p) && (g.schedule(p), t()), p(c);
  }
  const g = {
    schedule: (p, v = !1, T = !1) => {
      const _ = T && s ? e : i;
      return v && u.add(p), _.has(p) || _.add(p), p;
    },
    cancel: (p) => {
      i.delete(p), u.delete(p);
    },
    process: (p) => {
      if (((c = p), s)) {
        a = !0;
        return;
      }
      (s = !0),
        ([e, i] = [i, e]),
        e.forEach(h),
        e.clear(),
        (s = !1),
        a && ((a = !1), g.process(p));
    },
  };
  return g;
}
const Pa = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  qb = 40;
function qT(t, e) {
  let i = !1,
    s = !0;
  const a = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = () => (i = !0),
    c = Pa.reduce((b, k) => ((b[k] = zb(u)), b), {}),
    {
      read: h,
      resolveKeyframes: g,
      update: p,
      preRender: v,
      render: T,
      postRender: S,
    } = c,
    _ = () => {
      const b = performance.now();
      (i = !1),
        (a.delta = s ? 1e3 / 60 : Math.max(Math.min(b - a.timestamp, qb), 1)),
        (a.timestamp = b),
        (a.isProcessing = !0),
        h.process(a),
        g.process(a),
        p.process(a),
        v.process(a),
        T.process(a),
        S.process(a),
        (a.isProcessing = !1),
        i && e && ((s = !1), t(_));
    },
    C = () => {
      (i = !0), (s = !0), a.isProcessing || t(_);
    };
  return {
    schedule: Pa.reduce((b, k) => {
      const P = c[k];
      return (b[k] = (Y, q = !1, Q = !1) => (i || C(), P.schedule(Y, q, Q))), b;
    }, {}),
    cancel: (b) => {
      for (let k = 0; k < Pa.length; k++) c[Pa[k]].cancel(b);
    },
    state: a,
    steps: c,
  };
}
const {
    schedule: we,
    cancel: hn,
    state: et,
    steps: Kc,
  } = qT(typeof requestAnimationFrame < "u" ? requestAnimationFrame : vt, !0),
  OT = X.createContext({ strict: !1 }),
  _v = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Go = {};
for (const t in _v) Go[t] = { isEnabled: (e) => _v[t].some((i) => !!e[i]) };
function Ob(t) {
  for (const e in t) Go[e] = { ...Go[e], ...t[e] };
}
const Fb = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Wa(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    Fb.has(t)
  );
}
let FT = (t) => !Wa(t);
function Yb(t) {
  t && (FT = (e) => (e.startsWith("on") ? !Wa(e) : t(e)));
}
try {
  Yb(require("@emotion/is-prop-valid").default);
} catch {}
function Jb(t, e, i) {
  const s = {};
  for (const a in t)
    (a === "values" && typeof t.values == "object") ||
      ((FT(a) ||
        (i === !0 && Wa(a)) ||
        (!e && !Wa(a)) ||
        (t.draggable && a.startsWith("onDrag"))) &&
        (s[a] = t[a]));
  return s;
}
function Kb(t) {
  if (typeof Proxy > "u") return t;
  const e = new Map(),
    i = (...s) => t(...s);
  return new Proxy(i, {
    get: (s, a) =>
      a === "create" ? t : (e.has(a) || e.set(a, t(a)), e.get(a)),
  });
}
const mr = X.createContext({});
function js(t) {
  return typeof t == "string" || Array.isArray(t);
}
function gr(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const td = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  nd = ["initial", ...td];
function yr(t) {
  return gr(t.animate) || nd.some((e) => js(t[e]));
}
function YT(t) {
  return !!(yr(t) || t.variants);
}
function Xb(t, e) {
  if (yr(t)) {
    const { initial: i, animate: s } = t;
    return {
      initial: i === !1 || js(i) ? i : void 0,
      animate: js(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Qb(t) {
  const { initial: e, animate: i } = Xb(t, X.useContext(mr));
  return X.useMemo(() => ({ initial: e, animate: i }), [Av(e), Av(i)]);
}
function Av(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Zb = Symbol.for("motionComponentSymbol");
function Do(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function $b(t, e, i) {
  return X.useCallback(
    (s) => {
      s && t.onMount && t.onMount(s),
        e && (s ? e.mount(s) : e.unmount()),
        i && (typeof i == "function" ? i(s) : Do(i) && (i.current = s));
    },
    [e]
  );
}
const id = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Wb = "framerAppearId",
  JT = "data-" + id(Wb),
  { schedule: od } = qT(queueMicrotask, !1),
  KT = X.createContext({});
function jb(t, e, i, s, a) {
  var u, c;
  const { visualElement: h } = X.useContext(mr),
    g = X.useContext(OT),
    p = X.useContext(hr),
    v = X.useContext(sl).reducedMotion,
    T = X.useRef(null);
  (s = s || g.renderer),
    !T.current &&
      s &&
      (T.current = s(t, {
        visualState: e,
        parent: h,
        props: i,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: v,
      }));
  const S = T.current,
    _ = X.useContext(KT);
  S &&
    !S.projection &&
    a &&
    (S.type === "html" || S.type === "svg") &&
    eD(T.current, i, a, _);
  const C = X.useRef(!1);
  X.useInsertionEffect(() => {
    S && C.current && S.update(i, p);
  });
  const R = i[JT],
    M = X.useRef(
      !!R &&
        !(
          !((u = window.MotionHandoffIsComplete) === null || u === void 0) &&
          u.call(window, R)
        ) &&
        ((c = window.MotionHasOptimisedAnimation) === null || c === void 0
          ? void 0
          : c.call(window, R))
    );
  return (
    pr(() => {
      S &&
        ((C.current = !0),
        (window.MotionIsMounted = !0),
        S.updateFeatures(),
        od.render(S.render),
        M.current && S.animationState && S.animationState.animateChanges());
    }),
    X.useEffect(() => {
      S &&
        (!M.current && S.animationState && S.animationState.animateChanges(),
        M.current &&
          (queueMicrotask(() => {
            var b;
            (b = window.MotionHandoffMarkAsComplete) === null ||
              b === void 0 ||
              b.call(window, R);
          }),
          (M.current = !1)));
    }),
    S
  );
}
function eD(t, e, i, s) {
  const {
    layoutId: a,
    layout: u,
    drag: c,
    dragConstraints: h,
    layoutScroll: g,
    layoutRoot: p,
  } = e;
  (t.projection = new i(
    t.latestValues,
    e["data-framer-portal-id"] ? void 0 : XT(t.parent)
  )),
    t.projection.setOptions({
      layoutId: a,
      layout: u,
      alwaysMeasureLayout: !!c || (h && Do(h)),
      visualElement: t,
      animationType: typeof u == "string" ? u : "both",
      initialPromotionConfig: s,
      layoutScroll: g,
      layoutRoot: p,
    });
}
function XT(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : XT(t.parent);
}
function tD({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: i,
  useVisualState: s,
  Component: a,
}) {
  var u, c;
  t && Ob(t);
  function h(p, v) {
    let T;
    const S = { ...X.useContext(sl), ...p, layoutId: nD(p) },
      { isStatic: _ } = S,
      C = Qb(p),
      R = s(p, _);
    if (!_ && jf) {
      iD();
      const M = oD(S);
      (T = M.MeasureLayout),
        (C.visualElement = jb(a, R, S, e, M.ProjectionNode));
    }
    return I.jsxs(mr.Provider, {
      value: C,
      children: [
        T && C.visualElement
          ? I.jsx(T, { visualElement: C.visualElement, ...S })
          : null,
        i(a, p, $b(R, C.visualElement, v), R, _, C.visualElement),
      ],
    });
  }
  h.displayName = `motion.${
    typeof a == "string"
      ? a
      : `create(${
          (c = (u = a.displayName) !== null && u !== void 0 ? u : a.name) !==
            null && c !== void 0
            ? c
            : ""
        })`
  }`;
  const g = X.forwardRef(h);
  return (g[Zb] = a), g;
}
function nD({ layoutId: t }) {
  const e = X.useContext(Wf).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function iD(t, e) {
  X.useContext(OT).strict;
}
function oD(t) {
  const { drag: e, layout: i } = Go;
  if (!e && !i) return {};
  const s = { ...e, ...i };
  return {
    MeasureLayout:
      (e != null && e.isEnabled(t)) || (i != null && i.isEnabled(t))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
const sD = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function sd(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(sD.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function Cv(t) {
  const e = [{}, {}];
  return (
    t == null ||
      t.values.forEach((i, s) => {
        (e[0][s] = i.get()), (e[1][s] = i.getVelocity());
      }),
    e
  );
}
function ld(t, e, i, s) {
  if (typeof e == "function") {
    const [a, u] = Cv(s);
    e = e(i !== void 0 ? i : t.custom, a, u);
  }
  if (
    (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function")
  ) {
    const [a, u] = Cv(s);
    e = e(i !== void 0 ? i : t.custom, a, u);
  }
  return e;
}
const Af = (t) => Array.isArray(t),
  lD = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
  aD = (t) => (Af(t) ? t[t.length - 1] || 0 : t),
  it = (t) => !!(t && t.getVelocity);
function za(t) {
  const e = it(t) ? t.get() : t;
  return lD(e) ? e.toValue() : e;
}
function rD(
  { scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: i },
  s,
  a,
  u
) {
  const c = { latestValues: uD(s, a, u, t), renderState: e() };
  return (
    i &&
      ((c.onMount = (h) => i({ props: s, current: h, ...c })),
      (c.onUpdate = (h) => i(h))),
    c
  );
}
const QT = (t) => (e, i) => {
  const s = X.useContext(mr),
    a = X.useContext(hr),
    u = () => rD(t, e, s, a);
  return i ? u() : ol(u);
};
function uD(t, e, i, s) {
  const a = {},
    u = s(t, {});
  for (const S in u) a[S] = za(u[S]);
  let { initial: c, animate: h } = t;
  const g = yr(t),
    p = YT(t);
  e &&
    p &&
    !g &&
    t.inherit !== !1 &&
    (c === void 0 && (c = e.initial), h === void 0 && (h = e.animate));
  let v = i ? i.initial === !1 : !1;
  v = v || c === !1;
  const T = v ? h : c;
  if (T && typeof T != "boolean" && !gr(T)) {
    const S = Array.isArray(T) ? T : [T];
    for (let _ = 0; _ < S.length; _++) {
      const C = ld(t, S[_]);
      if (C) {
        const { transitionEnd: R, transition: M, ...b } = C;
        for (const k in b) {
          let P = b[k];
          if (Array.isArray(P)) {
            const Y = v ? P.length - 1 : 0;
            P = P[Y];
          }
          P !== null && (a[k] = P);
        }
        for (const k in R) a[k] = R[k];
      }
    }
  }
  return a;
}
const Oo = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  qi = new Set(Oo),
  ZT = (t) => (e) => typeof e == "string" && e.startsWith(t),
  $T = ZT("--"),
  cD = ZT("var(--"),
  ad = (t) => (cD(t) ? fD.test(t.split("/*")[0].trim()) : !1),
  fD =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  WT = (t, e) => (e && typeof t == "number" ? e.transform(t) : t),
  pn = (t, e, i) => (i > e ? e : i < t ? t : i),
  Fo = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  el = { ...Fo, transform: (t) => pn(0, 1, t) },
  Ha = { ...Fo, default: 1 },
  ll = (t) => ({
    test: (e) =>
      typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  ui = ll("deg"),
  fn = ll("%"),
  le = ll("px"),
  dD = ll("vh"),
  hD = ll("vw"),
  xv = {
    ...fn,
    parse: (t) => fn.parse(t) / 100,
    transform: (t) => fn.transform(t * 100),
  },
  pD = {
    borderWidth: le,
    borderTopWidth: le,
    borderRightWidth: le,
    borderBottomWidth: le,
    borderLeftWidth: le,
    borderRadius: le,
    radius: le,
    borderTopLeftRadius: le,
    borderTopRightRadius: le,
    borderBottomRightRadius: le,
    borderBottomLeftRadius: le,
    width: le,
    maxWidth: le,
    height: le,
    maxHeight: le,
    top: le,
    right: le,
    bottom: le,
    left: le,
    padding: le,
    paddingTop: le,
    paddingRight: le,
    paddingBottom: le,
    paddingLeft: le,
    margin: le,
    marginTop: le,
    marginRight: le,
    marginBottom: le,
    marginLeft: le,
    backgroundPositionX: le,
    backgroundPositionY: le,
  },
  mD = {
    rotate: ui,
    rotateX: ui,
    rotateY: ui,
    rotateZ: ui,
    scale: Ha,
    scaleX: Ha,
    scaleY: Ha,
    scaleZ: Ha,
    skew: ui,
    skewX: ui,
    skewY: ui,
    distance: le,
    translateX: le,
    translateY: le,
    translateZ: le,
    x: le,
    y: le,
    z: le,
    perspective: le,
    transformPerspective: le,
    opacity: el,
    originX: xv,
    originY: xv,
    originZ: le,
  },
  Mv = { ...Fo, transform: Math.round },
  rd = {
    ...pD,
    ...mD,
    zIndex: Mv,
    size: le,
    fillOpacity: el,
    strokeOpacity: el,
    numOctaves: Mv,
  },
  gD = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  yD = Oo.length;
function vD(t, e, i) {
  let s = "",
    a = !0;
  for (let u = 0; u < yD; u++) {
    const c = Oo[u],
      h = t[c];
    if (h === void 0) continue;
    let g = !0;
    if (
      (typeof h == "number"
        ? (g = h === (c.startsWith("scale") ? 1 : 0))
        : (g = parseFloat(h) === 0),
      !g || i)
    ) {
      const p = WT(h, rd[c]);
      if (!g) {
        a = !1;
        const v = gD[c] || c;
        s += `${v}(${p}) `;
      }
      i && (e[c] = p);
    }
  }
  return (s = s.trim()), i ? (s = i(e, a ? "" : s)) : a && (s = "none"), s;
}
function ud(t, e, i) {
  const { style: s, vars: a, transformOrigin: u } = t;
  let c = !1,
    h = !1;
  for (const g in e) {
    const p = e[g];
    if (qi.has(g)) {
      c = !0;
      continue;
    } else if ($T(g)) {
      a[g] = p;
      continue;
    } else {
      const v = WT(p, rd[g]);
      g.startsWith("origin") ? ((h = !0), (u[g] = v)) : (s[g] = v);
    }
  }
  if (
    (e.transform ||
      (c || i
        ? (s.transform = vD(e, t.transform, i))
        : s.transform && (s.transform = "none")),
    h)
  ) {
    const { originX: g = "50%", originY: p = "50%", originZ: v = 0 } = u;
    s.transformOrigin = `${g} ${p} ${v}`;
  }
}
const TD = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  SD = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ED(t, e, i = 1, s = 0, a = !0) {
  t.pathLength = 1;
  const u = a ? TD : SD;
  t[u.offset] = le.transform(-s);
  const c = le.transform(e),
    h = le.transform(i);
  t[u.array] = `${c} ${h}`;
}
function Rv(t, e, i) {
  return typeof t == "string" ? t : le.transform(e + i * t);
}
function _D(t, e, i) {
  const s = Rv(e, t.x, t.width),
    a = Rv(i, t.y, t.height);
  return `${s} ${a}`;
}
function cd(
  t,
  {
    attrX: e,
    attrY: i,
    attrScale: s,
    originX: a,
    originY: u,
    pathLength: c,
    pathSpacing: h = 1,
    pathOffset: g = 0,
    ...p
  },
  v,
  T
) {
  if ((ud(t, p, T), v)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: S, style: _, dimensions: C } = t;
  S.transform && (C && (_.transform = S.transform), delete S.transform),
    C &&
      (a !== void 0 || u !== void 0 || _.transform) &&
      (_.transformOrigin = _D(
        C,
        a !== void 0 ? a : 0.5,
        u !== void 0 ? u : 0.5
      )),
    e !== void 0 && (S.x = e),
    i !== void 0 && (S.y = i),
    s !== void 0 && (S.scale = s),
    c !== void 0 && ED(S, c, h, g, !1);
}
const fd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  jT = () => ({ ...fd(), attrs: {} }),
  dd = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function eS(t, { style: e, vars: i }, s, a) {
  Object.assign(t.style, e, a && a.getProjectionStyles(s));
  for (const u in i) t.style.setProperty(u, i[u]);
}
const tS = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function nS(t, e, i, s) {
  eS(t, e, void 0, s);
  for (const a in e.attrs) t.setAttribute(tS.has(a) ? a : id(a), e.attrs[a]);
}
const ja = {};
function AD(t) {
  Object.assign(ja, t);
}
function iS(t, { layout: e, layoutId: i }) {
  return (
    qi.has(t) ||
    t.startsWith("origin") ||
    ((e || i !== void 0) && (!!ja[t] || t === "opacity"))
  );
}
function hd(t, e, i) {
  var s;
  const { style: a } = t,
    u = {};
  for (const c in a)
    (it(a[c]) ||
      (e.style && it(e.style[c])) ||
      iS(c, t) ||
      ((s = i == null ? void 0 : i.getValue(c)) === null || s === void 0
        ? void 0
        : s.liveStyle) !== void 0) &&
      (u[c] = a[c]);
  return u;
}
function oS(t, e, i) {
  const s = hd(t, e, i);
  for (const a in t)
    if (it(t[a]) || it(e[a])) {
      const u =
        Oo.indexOf(a) !== -1
          ? "attr" + a.charAt(0).toUpperCase() + a.substring(1)
          : a;
      s[u] = t[a];
    }
  return s;
}
function CD(t, e) {
  try {
    e.dimensions =
      typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
  } catch {
    e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const wv = ["x", "y", "width", "height", "cx", "cy", "r"],
  xD = {
    useVisualState: QT({
      scrapeMotionValuesFromProps: oS,
      createRenderState: jT,
      onUpdate: ({
        props: t,
        prevProps: e,
        current: i,
        renderState: s,
        latestValues: a,
      }) => {
        if (!i) return;
        let u = !!t.drag;
        if (!u) {
          for (const h in a)
            if (qi.has(h)) {
              u = !0;
              break;
            }
        }
        if (!u) return;
        let c = !e;
        if (e)
          for (let h = 0; h < wv.length; h++) {
            const g = wv[h];
            t[g] !== e[g] && (c = !0);
          }
        c &&
          we.read(() => {
            CD(i, s),
              we.render(() => {
                cd(s, a, dd(i.tagName), t.transformTemplate), nS(i, s);
              });
          });
      },
    }),
  },
  MD = {
    useVisualState: QT({
      scrapeMotionValuesFromProps: hd,
      createRenderState: fd,
    }),
  };
function sS(t, e, i) {
  for (const s in e) !it(e[s]) && !iS(s, i) && (t[s] = e[s]);
}
function RD({ transformTemplate: t }, e) {
  return X.useMemo(() => {
    const i = fd();
    return ud(i, e, t), Object.assign({}, i.vars, i.style);
  }, [e]);
}
function wD(t, e) {
  const i = t.style || {},
    s = {};
  return sS(s, i, t), Object.assign(s, RD(t, e)), s;
}
function ND(t, e) {
  const i = {},
    s = wD(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((i.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (i.tabIndex = 0),
    (i.style = s),
    i
  );
}
function bD(t, e, i, s) {
  const a = X.useMemo(() => {
    const u = jT();
    return (
      cd(u, e, dd(s), t.transformTemplate),
      { ...u.attrs, style: { ...u.style } }
    );
  }, [e]);
  if (t.style) {
    const u = {};
    sS(u, t.style, t), (a.style = { ...u, ...a.style });
  }
  return a;
}
function DD(t = !1) {
  return (i, s, a, { latestValues: u }, c) => {
    const g = (sd(i) ? bD : ND)(s, u, c, i),
      p = Jb(s, typeof i == "string", t),
      v = i !== X.Fragment ? { ...p, ...g, ref: a } : {},
      { children: T } = s,
      S = X.useMemo(() => (it(T) ? T.get() : T), [T]);
    return X.createElement(i, { ...v, children: S });
  };
}
function ID(t, e) {
  return function (s, { forwardMotionProps: a } = { forwardMotionProps: !1 }) {
    const c = {
      ...(sd(s) ? xD : MD),
      preloadedFeatures: t,
      useRender: DD(a),
      createVisualElement: e,
      Component: s,
    };
    return tD(c);
  };
}
function lS(t, e) {
  if (!Array.isArray(e)) return !1;
  const i = e.length;
  if (i !== t.length) return !1;
  for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
function vr(t, e, i) {
  const s = t.getProps();
  return ld(s, e, i !== void 0 ? i : s.custom, t);
}
const aS = ed(() => window.ScrollTimeline !== void 0);
class UD {
  constructor(e) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = e.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((e) => ("finished" in e ? e.finished : e))
    );
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, i) {
    for (let s = 0; s < this.animations.length; s++) this.animations[s][e] = i;
  }
  attachTimeline(e, i) {
    const s = this.animations.map((a) => {
      if (aS() && a.attachTimeline) return a.attachTimeline(e);
      if (typeof i == "function") return i(a);
    });
    return () => {
      s.forEach((a, u) => {
        a && a(), this.animations[u].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let e = 0;
    for (let i = 0; i < this.animations.length; i++)
      e = Math.max(e, this.animations[i].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((i) => i[e]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class LD extends UD {
  then(e, i) {
    return Promise.all(this.animations).then(e).catch(i);
  }
}
function pd(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const Cf = 2e4;
function rS(t) {
  let e = 0;
  const i = 50;
  let s = t.next(e);
  for (; !s.done && e < Cf; ) (e += i), (s = t.next(e));
  return e >= Cf ? 1 / 0 : e;
}
function md(t) {
  return typeof t == "function";
}
function Nv(t, e) {
  (t.timeline = e), (t.onfinish = null);
}
const gd = (t) => Array.isArray(t) && typeof t[0] == "number",
  VD = { linearEasing: void 0 };
function PD(t, e) {
  const i = ed(t);
  return () => {
    var s;
    return (s = VD[e]) !== null && s !== void 0 ? s : i();
  };
}
const er = PD(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  uS = (t, e, i = 10) => {
    let s = "";
    const a = Math.max(Math.round(e / i), 2);
    for (let u = 0; u < a; u++) s += t(Bi(0, a - 1, u)) + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  };
function cS(t) {
  return !!(
    (typeof t == "function" && er()) ||
    !t ||
    (typeof t == "string" && (t in xf || er())) ||
    gd(t) ||
    (Array.isArray(t) && t.every(cS))
  );
}
const Ys = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
  xf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ys([0, 0.65, 0.55, 1]),
    circOut: Ys([0.55, 0, 1, 0.45]),
    backIn: Ys([0.31, 0.01, 0.66, -0.59]),
    backOut: Ys([0.33, 1.53, 0.69, 0.99]),
  };
function fS(t, e) {
  if (t)
    return typeof t == "function" && er()
      ? uS(t, e)
      : gd(t)
      ? Ys(t)
      : Array.isArray(t)
      ? t.map((i) => fS(i, e) || xf.easeOut)
      : xf[t];
}
const tn = { x: !1, y: !1 };
function dS() {
  return tn.x || tn.y;
}
function hS(t, e, i) {
  var s;
  if (t instanceof Element) return [t];
  if (typeof t == "string") {
    let a = document;
    const u = (s = void 0) !== null && s !== void 0 ? s : a.querySelectorAll(t);
    return u ? Array.from(u) : [];
  }
  return Array.from(t);
}
function pS(t, e) {
  const i = hS(t),
    s = new AbortController(),
    a = { passive: !0, ...e, signal: s.signal };
  return [i, a, () => s.abort()];
}
function bv(t) {
  return (e) => {
    e.pointerType === "touch" || dS() || t(e);
  };
}
function HD(t, e, i = {}) {
  const [s, a, u] = pS(t, i),
    c = bv((h) => {
      const { target: g } = h,
        p = e(h);
      if (typeof p != "function" || !g) return;
      const v = bv((T) => {
        p(T), g.removeEventListener("pointerleave", v);
      });
      g.addEventListener("pointerleave", v, a);
    });
  return (
    s.forEach((h) => {
      h.addEventListener("pointerenter", c, a);
    }),
    u
  );
}
const mS = (t, e) => (e ? (t === e ? !0 : mS(t, e.parentElement)) : !1),
  yd = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1,
  GD = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function kD(t) {
  return GD.has(t.tagName) || t.tabIndex !== -1;
}
const Js = new WeakSet();
function Dv(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Xc(t, e) {
  t.dispatchEvent(
    new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
  );
}
const BD = (t, e) => {
  const i = t.currentTarget;
  if (!i) return;
  const s = Dv(() => {
    if (Js.has(i)) return;
    Xc(i, "down");
    const a = Dv(() => {
        Xc(i, "up");
      }),
      u = () => Xc(i, "cancel");
    i.addEventListener("keyup", a, e), i.addEventListener("blur", u, e);
  });
  i.addEventListener("keydown", s, e),
    i.addEventListener("blur", () => i.removeEventListener("keydown", s), e);
};
function Iv(t) {
  return yd(t) && !dS();
}
function zD(t, e, i = {}) {
  const [s, a, u] = pS(t, i),
    c = (h) => {
      const g = h.currentTarget;
      if (!Iv(h) || Js.has(g)) return;
      Js.add(g);
      const p = e(h),
        v = (_, C) => {
          window.removeEventListener("pointerup", T),
            window.removeEventListener("pointercancel", S),
            !(!Iv(_) || !Js.has(g)) &&
              (Js.delete(g), typeof p == "function" && p(_, { success: C }));
        },
        T = (_) => {
          v(_, i.useGlobalTarget || mS(g, _.target));
        },
        S = (_) => {
          v(_, !1);
        };
      window.addEventListener("pointerup", T, a),
        window.addEventListener("pointercancel", S, a);
    };
  return (
    s.forEach((h) => {
      !kD(h) && h.getAttribute("tabindex") === null && (h.tabIndex = 0),
        (i.useGlobalTarget ? window : h).addEventListener("pointerdown", c, a),
        h.addEventListener("focus", (p) => BD(p, a), a);
    }),
    u
  );
}
function qD(t) {
  return t === "x" || t === "y"
    ? tn[t]
      ? null
      : ((tn[t] = !0),
        () => {
          tn[t] = !1;
        })
    : tn.x || tn.y
    ? null
    : ((tn.x = tn.y = !0),
      () => {
        tn.x = tn.y = !1;
      });
}
const gS = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Oo,
]);
let qa;
function OD() {
  qa = void 0;
}
const dn = {
  now: () => (
    qa === void 0 &&
      dn.set(
        et.isProcessing || Bb.useManualTiming ? et.timestamp : performance.now()
      ),
    qa
  ),
  set: (t) => {
    (qa = t), queueMicrotask(OD);
  },
};
function vd(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Td(t, e) {
  const i = t.indexOf(e);
  i > -1 && t.splice(i, 1);
}
class Sd {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return vd(this.subscriptions, e), () => Td(this.subscriptions, e);
  }
  notify(e, i, s) {
    const a = this.subscriptions.length;
    if (a)
      if (a === 1) this.subscriptions[0](e, i, s);
      else
        for (let u = 0; u < a; u++) {
          const c = this.subscriptions[u];
          c && c(e, i, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Ed(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Uv = 30,
  FD = (t) => !isNaN(parseFloat(t));
class YD {
  constructor(e, i = {}) {
    (this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s, a = !0) => {
        const u = dn.now();
        this.updatedAt !== u && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          a &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = i.owner);
  }
  setCurrent(e) {
    (this.current = e),
      (this.updatedAt = dn.now()),
      this.canTrackVelocity === null &&
        e !== void 0 &&
        (this.canTrackVelocity = FD(this.current));
  }
  setPrevFrameValue(e = this.current) {
    (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, i) {
    this.events[e] || (this.events[e] = new Sd());
    const s = this.events[e].add(i);
    return e === "change"
      ? () => {
          s(),
            we.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, i) {
    (this.passiveEffect = e), (this.stopPassiveEffect = i);
  }
  set(e, i = !0) {
    !i || !this.passiveEffect
      ? this.updateAndNotify(e, i)
      : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, i, s) {
    this.set(i),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(e, i = !0) {
    this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      i && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = dn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      e - this.updatedAt > Uv
    )
      return 0;
    const i = Math.min(this.updatedAt - this.prevUpdatedAt, Uv);
    return Ed(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
  }
  start(e) {
    return (
      this.stop(),
      new Promise((i) => {
        (this.hasAnimated = !0),
          (this.animation = e(i)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function cn(t, e) {
  return new YD(t, e);
}
function JD(t, e, i) {
  t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, cn(i));
}
function KD(t, e) {
  const i = vr(t, e);
  let { transitionEnd: s = {}, transition: a = {}, ...u } = i || {};
  u = { ...u, ...s };
  for (const c in u) {
    const h = aD(u[c]);
    JD(t, c, h);
  }
}
function XD(t) {
  return !!(it(t) && t.add);
}
function Mf(t, e) {
  const i = t.getValue("willChange");
  if (XD(i)) return i.add(e);
}
function yS(t) {
  return t.props[JT];
}
const vS = (t, e, i) =>
    (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t,
  QD = 1e-7,
  ZD = 12;
function $D(t, e, i, s, a) {
  let u,
    c,
    h = 0;
  do (c = e + (i - e) / 2), (u = vS(c, s, a) - t), u > 0 ? (i = c) : (e = c);
  while (Math.abs(u) > QD && ++h < ZD);
  return c;
}
function al(t, e, i, s) {
  if (t === e && i === s) return vt;
  const a = (u) => $D(u, 0, 1, t, i);
  return (u) => (u === 0 || u === 1 ? u : vS(a(u), e, s));
}
const TS = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
  SS = (t) => (e) => 1 - t(1 - e),
  ES = al(0.33, 1.53, 0.69, 0.99),
  _d = SS(ES),
  _S = TS(_d),
  AS = (t) =>
    (t *= 2) < 1 ? 0.5 * _d(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  Ad = (t) => 1 - Math.sin(Math.acos(t)),
  CS = SS(Ad),
  xS = TS(Ad),
  MS = (t) => /^0[^.\s]+$/u.test(t);
function WD(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
    ? t === "none" || t === "0" || MS(t)
    : !0;
}
const Xs = (t) => Math.round(t * 1e5) / 1e5,
  Cd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function jD(t) {
  return t == null;
}
const eI =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  xd = (t, e) => (i) =>
    !!(
      (typeof i == "string" && eI.test(i) && i.startsWith(t)) ||
      (e && !jD(i) && Object.prototype.hasOwnProperty.call(i, e))
    ),
  RS = (t, e, i) => (s) => {
    if (typeof s != "string") return s;
    const [a, u, c, h] = s.match(Cd);
    return {
      [t]: parseFloat(a),
      [e]: parseFloat(u),
      [i]: parseFloat(c),
      alpha: h !== void 0 ? parseFloat(h) : 1,
    };
  },
  tI = (t) => pn(0, 255, t),
  Qc = { ...Fo, transform: (t) => Math.round(tI(t)) },
  Gi = {
    test: xd("rgb", "red"),
    parse: RS("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
      "rgba(" +
      Qc.transform(t) +
      ", " +
      Qc.transform(e) +
      ", " +
      Qc.transform(i) +
      ", " +
      Xs(el.transform(s)) +
      ")",
  };
function nI(t) {
  let e = "",
    i = "",
    s = "",
    a = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (i = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (a = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (i = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (a = t.substring(4, 5)),
        (e += e),
        (i += i),
        (s += s),
        (a += a)),
    {
      red: parseInt(e, 16),
      green: parseInt(i, 16),
      blue: parseInt(s, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1,
    }
  );
}
const Rf = { test: xd("#"), parse: nI, transform: Gi.transform },
  Io = {
    test: xd("hsl", "hue"),
    parse: RS("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: i, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      fn.transform(Xs(e)) +
      ", " +
      fn.transform(Xs(i)) +
      ", " +
      Xs(el.transform(s)) +
      ")",
  },
  dt = {
    test: (t) => Gi.test(t) || Rf.test(t) || Io.test(t),
    parse: (t) =>
      Gi.test(t) ? Gi.parse(t) : Io.test(t) ? Io.parse(t) : Rf.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
        ? Gi.transform(t)
        : Io.transform(t),
  },
  iI =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function oI(t) {
  var e, i;
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (((e = t.match(Cd)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((i = t.match(iI)) === null || i === void 0 ? void 0 : i.length) || 0) >
      0
  );
}
const wS = "number",
  NS = "color",
  sI = "var",
  lI = "var(",
  Lv = "${}",
  aI =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function tl(t) {
  const e = t.toString(),
    i = [],
    s = { color: [], number: [], var: [] },
    a = [];
  let u = 0;
  const h = e
    .replace(
      aI,
      (g) => (
        dt.test(g)
          ? (s.color.push(u), a.push(NS), i.push(dt.parse(g)))
          : g.startsWith(lI)
          ? (s.var.push(u), a.push(sI), i.push(g))
          : (s.number.push(u), a.push(wS), i.push(parseFloat(g))),
        ++u,
        Lv
      )
    )
    .split(Lv);
  return { values: i, split: h, indexes: s, types: a };
}
function bS(t) {
  return tl(t).values;
}
function DS(t) {
  const { split: e, types: i } = tl(t),
    s = e.length;
  return (a) => {
    let u = "";
    for (let c = 0; c < s; c++)
      if (((u += e[c]), a[c] !== void 0)) {
        const h = i[c];
        h === wS
          ? (u += Xs(a[c]))
          : h === NS
          ? (u += dt.transform(a[c]))
          : (u += a[c]);
      }
    return u;
  };
}
const rI = (t) => (typeof t == "number" ? 0 : t);
function uI(t) {
  const e = bS(t);
  return DS(t)(e.map(rI));
}
const di = {
    test: oI,
    parse: bS,
    createTransformer: DS,
    getAnimatableNone: uI,
  },
  cI = new Set(["brightness", "contrast", "saturate", "opacity"]);
function fI(t) {
  const [e, i] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [s] = i.match(Cd) || [];
  if (!s) return t;
  const a = i.replace(s, "");
  let u = cI.has(e) ? 1 : 0;
  return s !== i && (u *= 100), e + "(" + u + a + ")";
}
const dI = /\b([a-z-]*)\(.*?\)/gu,
  wf = {
    ...di,
    getAnimatableNone: (t) => {
      const e = t.match(dI);
      return e ? e.map(fI).join(" ") : t;
    },
  },
  hI = {
    ...rd,
    color: dt,
    backgroundColor: dt,
    outlineColor: dt,
    fill: dt,
    stroke: dt,
    borderColor: dt,
    borderTopColor: dt,
    borderRightColor: dt,
    borderBottomColor: dt,
    borderLeftColor: dt,
    filter: wf,
    WebkitFilter: wf,
  },
  Md = (t) => hI[t];
function IS(t, e) {
  let i = Md(t);
  return (
    i !== wf && (i = di), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
  );
}
const pI = new Set(["auto", "none", "0"]);
function mI(t, e, i) {
  let s = 0,
    a;
  for (; s < t.length && !a; ) {
    const u = t[s];
    typeof u == "string" && !pI.has(u) && tl(u).values.length && (a = t[s]),
      s++;
  }
  if (a && i) for (const u of e) t[u] = IS(i, a);
}
const Vv = (t) => t === Fo || t === le,
  Pv = (t, e) => parseFloat(t.split(", ")[e]),
  Hv =
    (t, e) =>
    (i, { transform: s }) => {
      if (s === "none" || !s) return 0;
      const a = s.match(/^matrix3d\((.+)\)$/u);
      if (a) return Pv(a[1], e);
      {
        const u = s.match(/^matrix\((.+)\)$/u);
        return u ? Pv(u[1], t) : 0;
      }
    },
  gI = new Set(["x", "y", "z"]),
  yI = Oo.filter((t) => !gI.has(t));
function vI(t) {
  const e = [];
  return (
    yI.forEach((i) => {
      const s = t.getValue(i);
      s !== void 0 &&
        (e.push([i, s.get()]), s.set(i.startsWith("scale") ? 1 : 0));
    }),
    e
  );
}
const ko = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(i),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(i),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: Hv(4, 13),
  y: Hv(5, 14),
};
ko.translateX = ko.x;
ko.translateY = ko.y;
const ki = new Set();
let Nf = !1,
  bf = !1;
function US() {
  if (bf) {
    const t = Array.from(ki).filter((s) => s.needsMeasurement),
      e = new Set(t.map((s) => s.element)),
      i = new Map();
    e.forEach((s) => {
      const a = vI(s);
      a.length && (i.set(s, a), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      e.forEach((s) => {
        s.render();
        const a = i.get(s);
        a &&
          a.forEach(([u, c]) => {
            var h;
            (h = s.getValue(u)) === null || h === void 0 || h.set(c);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (bf = !1), (Nf = !1), ki.forEach((t) => t.complete()), ki.clear();
}
function LS() {
  ki.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (bf = !0);
  });
}
function TI() {
  LS(), US();
}
class Rd {
  constructor(e, i, s, a, u, c = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = i),
      (this.name = s),
      (this.motionValue = a),
      (this.element = u),
      (this.isAsync = c);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (ki.add(this),
          Nf || ((Nf = !0), we.read(LS), we.resolveKeyframes(US)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: i,
      element: s,
      motionValue: a,
    } = this;
    for (let u = 0; u < e.length; u++)
      if (e[u] === null)
        if (u === 0) {
          const c = a == null ? void 0 : a.get(),
            h = e[e.length - 1];
          if (c !== void 0) e[0] = c;
          else if (s && i) {
            const g = s.readValue(i, h);
            g != null && (e[0] = g);
          }
          e[0] === void 0 && (e[0] = h), a && c === void 0 && a.set(e[0]);
        } else e[u] = e[u - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      ki.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), ki.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const VS = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  SI = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function EI(t) {
  const e = SI.exec(t);
  if (!e) return [,];
  const [, i, s, a] = e;
  return [`--${i ?? s}`, a];
}
function PS(t, e, i = 1) {
  const [s, a] = EI(t);
  if (!s) return;
  const u = window.getComputedStyle(e).getPropertyValue(s);
  if (u) {
    const c = u.trim();
    return VS(c) ? parseFloat(c) : c;
  }
  return ad(a) ? PS(a, e, i + 1) : a;
}
const HS = (t) => (e) => e.test(t),
  _I = { test: (t) => t === "auto", parse: (t) => t },
  GS = [Fo, le, fn, ui, hD, dD, _I],
  Gv = (t) => GS.find(HS(t));
class kS extends Rd {
  constructor(e, i, s, a, u) {
    super(e, i, s, a, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: i, name: s } = this;
    if (!i || !i.current) return;
    super.readKeyframes();
    for (let g = 0; g < e.length; g++) {
      let p = e[g];
      if (typeof p == "string" && ((p = p.trim()), ad(p))) {
        const v = PS(p, i.current);
        v !== void 0 && (e[g] = v),
          g === e.length - 1 && (this.finalKeyframe = p);
      }
    }
    if ((this.resolveNoneKeyframes(), !gS.has(s) || e.length !== 2)) return;
    const [a, u] = e,
      c = Gv(a),
      h = Gv(u);
    if (c !== h)
      if (Vv(c) && Vv(h))
        for (let g = 0; g < e.length; g++) {
          const p = e[g];
          typeof p == "string" && (e[g] = parseFloat(p));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: i } = this,
      s = [];
    for (let a = 0; a < e.length; a++) WD(e[a]) && s.push(a);
    s.length && mI(e, s, i);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: i, name: s } = this;
    if (!e || !e.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ko[s](
        e.measureViewportBox(),
        window.getComputedStyle(e.current)
      )),
      (i[0] = this.measuredOrigin);
    const a = i[i.length - 1];
    a !== void 0 && e.getValue(s, a).jump(a, !1);
  }
  measureEndState() {
    var e;
    const { element: i, name: s, unresolvedKeyframes: a } = this;
    if (!i || !i.current) return;
    const u = i.getValue(s);
    u && u.jump(this.measuredOrigin, !1);
    const c = a.length - 1,
      h = a[c];
    (a[c] = ko[s](i.measureViewportBox(), window.getComputedStyle(i.current))),
      h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
      !((e = this.removedTransforms) === null || e === void 0) &&
        e.length &&
        this.removedTransforms.forEach(([g, p]) => {
          i.getValue(g).set(p);
        }),
      this.resolveNoneKeyframes();
  }
}
const kv = (t, e) =>
  e === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" &&
          (di.test(t) || t === "0") &&
          !t.startsWith("url("))
      );
function AI(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0;
}
function CI(t, e, i, s) {
  const a = t[0];
  if (a === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const u = t[t.length - 1],
    c = kv(a, e),
    h = kv(u, e);
  return !c || !h ? !1 : AI(t) || ((i === "spring" || md(i)) && s);
}
const xI = (t) => t !== null;
function Tr(t, { repeat: e, repeatType: i = "loop" }, s) {
  const a = t.filter(xI),
    u = e && i !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
  return !u || s === void 0 ? a[u] : s;
}
const MI = 40;
class BS {
  constructor({
    autoplay: e = !0,
    delay: i = 0,
    type: s = "keyframes",
    repeat: a = 0,
    repeatDelay: u = 0,
    repeatType: c = "loop",
    ...h
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = dn.now()),
      (this.options = {
        autoplay: e,
        delay: i,
        type: s,
        repeat: a,
        repeatDelay: u,
        repeatType: c,
        ...h,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > MI
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && TI(), this._resolved;
  }
  onKeyframesResolved(e, i) {
    (this.resolvedAt = dn.now()), (this.hasAttemptedResolve = !0);
    const {
      name: s,
      type: a,
      velocity: u,
      delay: c,
      onComplete: h,
      onUpdate: g,
      isGenerator: p,
    } = this.options;
    if (!p && !CI(e, s, a, u))
      if (c) this.options.duration = 0;
      else {
        g && g(Tr(e, this.options, i)), h && h(), this.resolveFinishedPromise();
        return;
      }
    const v = this.initPlayback(e, i);
    v !== !1 &&
      ((this._resolved = { keyframes: e, finalKeyframe: i, ...v }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(e, i) {
    return this.currentFinishedPromise.then(e, i);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e;
    });
  }
}
const ze = (t, e, i) => t + (e - t) * i;
function Zc(t, e, i) {
  return (
    i < 0 && (i += 1),
    i > 1 && (i -= 1),
    i < 1 / 6
      ? t + (e - t) * 6 * i
      : i < 1 / 2
      ? e
      : i < 2 / 3
      ? t + (e - t) * (2 / 3 - i) * 6
      : t
  );
}
function RI({ hue: t, saturation: e, lightness: i, alpha: s }) {
  (t /= 360), (e /= 100), (i /= 100);
  let a = 0,
    u = 0,
    c = 0;
  if (!e) a = u = c = i;
  else {
    const h = i < 0.5 ? i * (1 + e) : i + e - i * e,
      g = 2 * i - h;
    (a = Zc(g, h, t + 1 / 3)), (u = Zc(g, h, t)), (c = Zc(g, h, t - 1 / 3));
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(u * 255),
    blue: Math.round(c * 255),
    alpha: s,
  };
}
function tr(t, e) {
  return (i) => (i > 0 ? e : t);
}
const $c = (t, e, i) => {
    const s = t * t,
      a = i * (e * e - s) + s;
    return a < 0 ? 0 : Math.sqrt(a);
  },
  wI = [Rf, Gi, Io],
  NI = (t) => wI.find((e) => e.test(t));
function Bv(t) {
  const e = NI(t);
  if (!e) return !1;
  let i = e.parse(t);
  return e === Io && (i = RI(i)), i;
}
const zv = (t, e) => {
    const i = Bv(t),
      s = Bv(e);
    if (!i || !s) return tr(t, e);
    const a = { ...i };
    return (u) => (
      (a.red = $c(i.red, s.red, u)),
      (a.green = $c(i.green, s.green, u)),
      (a.blue = $c(i.blue, s.blue, u)),
      (a.alpha = ze(i.alpha, s.alpha, u)),
      Gi.transform(a)
    );
  },
  bI = (t, e) => (i) => e(t(i)),
  rl = (...t) => t.reduce(bI),
  Df = new Set(["none", "hidden"]);
function DI(t, e) {
  return Df.has(t) ? (i) => (i <= 0 ? t : e) : (i) => (i >= 1 ? e : t);
}
function II(t, e) {
  return (i) => ze(t, e, i);
}
function wd(t) {
  return typeof t == "number"
    ? II
    : typeof t == "string"
    ? ad(t)
      ? tr
      : dt.test(t)
      ? zv
      : VI
    : Array.isArray(t)
    ? zS
    : typeof t == "object"
    ? dt.test(t)
      ? zv
      : UI
    : tr;
}
function zS(t, e) {
  const i = [...t],
    s = i.length,
    a = t.map((u, c) => wd(u)(u, e[c]));
  return (u) => {
    for (let c = 0; c < s; c++) i[c] = a[c](u);
    return i;
  };
}
function UI(t, e) {
  const i = { ...t, ...e },
    s = {};
  for (const a in i)
    t[a] !== void 0 && e[a] !== void 0 && (s[a] = wd(t[a])(t[a], e[a]));
  return (a) => {
    for (const u in s) i[u] = s[u](a);
    return i;
  };
}
function LI(t, e) {
  var i;
  const s = [],
    a = { color: 0, var: 0, number: 0 };
  for (let u = 0; u < e.values.length; u++) {
    const c = e.types[u],
      h = t.indexes[c][a[c]],
      g = (i = t.values[h]) !== null && i !== void 0 ? i : 0;
    (s[u] = g), a[c]++;
  }
  return s;
}
const VI = (t, e) => {
  const i = di.createTransformer(e),
    s = tl(t),
    a = tl(e);
  return s.indexes.var.length === a.indexes.var.length &&
    s.indexes.color.length === a.indexes.color.length &&
    s.indexes.number.length >= a.indexes.number.length
    ? (Df.has(t) && !a.values.length) || (Df.has(e) && !s.values.length)
      ? DI(t, e)
      : rl(zS(LI(s, a), a.values), i)
    : tr(t, e);
};
function qS(t, e, i) {
  return typeof t == "number" && typeof e == "number" && typeof i == "number"
    ? ze(t, e, i)
    : wd(t)(t, e);
}
const PI = 5;
function OS(t, e, i) {
  const s = Math.max(e - PI, 0);
  return Ed(i - t(s), e - s);
}
const Fe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Wc = 0.001;
function HI({
  duration: t = Fe.duration,
  bounce: e = Fe.bounce,
  velocity: i = Fe.velocity,
  mass: s = Fe.mass,
}) {
  let a,
    u,
    c = 1 - e;
  (c = pn(Fe.minDamping, Fe.maxDamping, c)),
    (t = pn(Fe.minDuration, Fe.maxDuration, Ln(t))),
    c < 1
      ? ((a = (p) => {
          const v = p * c,
            T = v * t,
            S = v - i,
            _ = If(p, c),
            C = Math.exp(-T);
          return Wc - (S / _) * C;
        }),
        (u = (p) => {
          const T = p * c * t,
            S = T * i + i,
            _ = Math.pow(c, 2) * Math.pow(p, 2) * t,
            C = Math.exp(-T),
            R = If(Math.pow(p, 2), c);
          return ((-a(p) + Wc > 0 ? -1 : 1) * ((S - _) * C)) / R;
        }))
      : ((a = (p) => {
          const v = Math.exp(-p * t),
            T = (p - i) * t + 1;
          return -Wc + v * T;
        }),
        (u = (p) => {
          const v = Math.exp(-p * t),
            T = (i - p) * (t * t);
          return v * T;
        }));
  const h = 5 / t,
    g = kI(a, u, h);
  if (((t = Un(t)), isNaN(g)))
    return { stiffness: Fe.stiffness, damping: Fe.damping, duration: t };
  {
    const p = Math.pow(g, 2) * s;
    return { stiffness: p, damping: c * 2 * Math.sqrt(s * p), duration: t };
  }
}
const GI = 12;
function kI(t, e, i) {
  let s = i;
  for (let a = 1; a < GI; a++) s = s - t(s) / e(s);
  return s;
}
function If(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const BI = ["duration", "bounce"],
  zI = ["stiffness", "damping", "mass"];
function qv(t, e) {
  return e.some((i) => t[i] !== void 0);
}
function qI(t) {
  let e = {
    velocity: Fe.velocity,
    stiffness: Fe.stiffness,
    damping: Fe.damping,
    mass: Fe.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!qv(t, zI) && qv(t, BI))
    if (t.visualDuration) {
      const i = t.visualDuration,
        s = (2 * Math.PI) / (i * 1.2),
        a = s * s,
        u = 2 * pn(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
      e = { ...e, mass: Fe.mass, stiffness: a, damping: u };
    } else {
      const i = HI(t);
      (e = { ...e, ...i, mass: Fe.mass }), (e.isResolvedFromDuration = !0);
    }
  return e;
}
function FS(t = Fe.visualDuration, e = Fe.bounce) {
  const i =
    typeof t != "object"
      ? { visualDuration: t, keyframes: [0, 1], bounce: e }
      : t;
  let { restSpeed: s, restDelta: a } = i;
  const u = i.keyframes[0],
    c = i.keyframes[i.keyframes.length - 1],
    h = { done: !1, value: u },
    {
      stiffness: g,
      damping: p,
      mass: v,
      duration: T,
      velocity: S,
      isResolvedFromDuration: _,
    } = qI({ ...i, velocity: -Ln(i.velocity || 0) }),
    C = S || 0,
    R = p / (2 * Math.sqrt(g * v)),
    M = c - u,
    b = Ln(Math.sqrt(g / v)),
    k = Math.abs(M) < 5;
  s || (s = k ? Fe.restSpeed.granular : Fe.restSpeed.default),
    a || (a = k ? Fe.restDelta.granular : Fe.restDelta.default);
  let P;
  if (R < 1) {
    const q = If(b, R);
    P = (Q) => {
      const J = Math.exp(-R * b * Q);
      return (
        c - J * (((C + R * b * M) / q) * Math.sin(q * Q) + M * Math.cos(q * Q))
      );
    };
  } else if (R === 1) P = (q) => c - Math.exp(-b * q) * (M + (C + b * M) * q);
  else {
    const q = b * Math.sqrt(R * R - 1);
    P = (Q) => {
      const J = Math.exp(-R * b * Q),
        Z = Math.min(q * Q, 300);
      return (
        c - (J * ((C + R * b * M) * Math.sinh(Z) + q * M * Math.cosh(Z))) / q
      );
    };
  }
  const Y = {
    calculatedDuration: (_ && T) || null,
    next: (q) => {
      const Q = P(q);
      if (_) h.done = q >= T;
      else {
        let J = 0;
        R < 1 && (J = q === 0 ? Un(C) : OS(P, q, Q));
        const Z = Math.abs(J) <= s,
          $ = Math.abs(c - Q) <= a;
        h.done = Z && $;
      }
      return (h.value = h.done ? c : Q), h;
    },
    toString: () => {
      const q = Math.min(rS(Y), Cf),
        Q = uS((J) => Y.next(q * J).value, q, 30);
      return q + "ms " + Q;
    },
  };
  return Y;
}
function Ov({
  keyframes: t,
  velocity: e = 0,
  power: i = 0.8,
  timeConstant: s = 325,
  bounceDamping: a = 10,
  bounceStiffness: u = 500,
  modifyTarget: c,
  min: h,
  max: g,
  restDelta: p = 0.5,
  restSpeed: v,
}) {
  const T = t[0],
    S = { done: !1, value: T },
    _ = (Z) => (h !== void 0 && Z < h) || (g !== void 0 && Z > g),
    C = (Z) =>
      h === void 0
        ? g
        : g === void 0 || Math.abs(h - Z) < Math.abs(g - Z)
        ? h
        : g;
  let R = i * e;
  const M = T + R,
    b = c === void 0 ? M : c(M);
  b !== M && (R = b - T);
  const k = (Z) => -R * Math.exp(-Z / s),
    P = (Z) => b + k(Z),
    Y = (Z) => {
      const $ = k(Z),
        ae = P(Z);
      (S.done = Math.abs($) <= p), (S.value = S.done ? b : ae);
    };
  let q, Q;
  const J = (Z) => {
    _(S.value) &&
      ((q = Z),
      (Q = FS({
        keyframes: [S.value, C(S.value)],
        velocity: OS(P, Z, S.value),
        damping: a,
        stiffness: u,
        restDelta: p,
        restSpeed: v,
      })));
  };
  return (
    J(0),
    {
      calculatedDuration: null,
      next: (Z) => {
        let $ = !1;
        return (
          !Q && q === void 0 && (($ = !0), Y(Z), J(Z)),
          q !== void 0 && Z >= q ? Q.next(Z - q) : (!$ && Y(Z), S)
        );
      },
    }
  );
}
const OI = al(0.42, 0, 1, 1),
  FI = al(0, 0, 0.58, 1),
  YS = al(0.42, 0, 0.58, 1),
  YI = (t) => Array.isArray(t) && typeof t[0] != "number",
  JI = {
    linear: vt,
    easeIn: OI,
    easeInOut: YS,
    easeOut: FI,
    circIn: Ad,
    circInOut: xS,
    circOut: CS,
    backIn: _d,
    backInOut: _S,
    backOut: ES,
    anticipate: AS,
  },
  Fv = (t) => {
    if (gd(t)) {
      zT(t.length === 4);
      const [e, i, s, a] = t;
      return al(e, i, s, a);
    } else if (typeof t == "string") return JI[t];
    return t;
  };
function KI(t, e, i) {
  const s = [],
    a = i || qS,
    u = t.length - 1;
  for (let c = 0; c < u; c++) {
    let h = a(t[c], t[c + 1]);
    if (e) {
      const g = Array.isArray(e) ? e[c] || vt : e;
      h = rl(g, h);
    }
    s.push(h);
  }
  return s;
}
function JS(t, e, { clamp: i = !0, ease: s, mixer: a } = {}) {
  const u = t.length;
  if ((zT(u === e.length), u === 1)) return () => e[0];
  if (u === 2 && e[0] === e[1]) return () => e[1];
  const c = t[0] === t[1];
  t[0] > t[u - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const h = KI(e, s, a),
    g = h.length,
    p = (v) => {
      if (c && v < t[0]) return e[0];
      let T = 0;
      if (g > 1) for (; T < t.length - 2 && !(v < t[T + 1]); T++);
      const S = Bi(t[T], t[T + 1], v);
      return h[T](S);
    };
  return i ? (v) => p(pn(t[0], t[u - 1], v)) : p;
}
function XI(t, e) {
  const i = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const a = Bi(0, e, s);
    t.push(ze(i, 1, a));
  }
}
function KS(t) {
  const e = [0];
  return XI(e, t.length - 1), e;
}
function QI(t, e) {
  return t.map((i) => i * e);
}
function ZI(t, e) {
  return t.map(() => e || YS).splice(0, t.length - 1);
}
function nr({
  duration: t = 300,
  keyframes: e,
  times: i,
  ease: s = "easeInOut",
}) {
  const a = YI(s) ? s.map(Fv) : Fv(s),
    u = { done: !1, value: e[0] },
    c = QI(i && i.length === e.length ? i : KS(e), t),
    h = JS(c, e, { ease: Array.isArray(a) ? a : ZI(e, a) });
  return {
    calculatedDuration: t,
    next: (g) => ((u.value = h(g)), (u.done = g >= t), u),
  };
}
const $I = (t) => {
    const e = ({ timestamp: i }) => t(i);
    return {
      start: () => we.update(e, !0),
      stop: () => hn(e),
      now: () => (et.isProcessing ? et.timestamp : dn.now()),
    };
  },
  WI = { decay: Ov, inertia: Ov, tween: nr, keyframes: nr, spring: FS },
  jI = (t) => t / 100;
class Sr extends BS {
  constructor(e) {
    super(e),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: g } = this.options;
        g && g();
      });
    const { name: i, motionValue: s, element: a, keyframes: u } = this.options,
      c = (a == null ? void 0 : a.KeyframeResolver) || Rd,
      h = (g, p) => this.onKeyframesResolved(g, p);
    (this.resolver = new c(u, h, i, s, a)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(e) {
    const {
        type: i = "keyframes",
        repeat: s = 0,
        repeatDelay: a = 0,
        repeatType: u,
        velocity: c = 0,
      } = this.options,
      h = md(i) ? i : WI[i] || nr;
    let g, p;
    h !== nr &&
      typeof e[0] != "number" &&
      ((g = rl(jI, qS(e[0], e[1]))), (e = [0, 100]));
    const v = h({ ...this.options, keyframes: e });
    u === "mirror" &&
      (p = h({ ...this.options, keyframes: [...e].reverse(), velocity: -c })),
      v.calculatedDuration === null && (v.calculatedDuration = rS(v));
    const { calculatedDuration: T } = v,
      S = T + a,
      _ = S * (s + 1) - a;
    return {
      generator: v,
      mirroredGenerator: p,
      mapPercentToKeyframes: g,
      calculatedDuration: T,
      resolvedDuration: S,
      totalDuration: _,
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !e
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(e, i = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: Z } = this.options;
      return { done: !0, value: Z[Z.length - 1] };
    }
    const {
      finalKeyframe: a,
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: h,
      keyframes: g,
      calculatedDuration: p,
      totalDuration: v,
      resolvedDuration: T,
    } = s;
    if (this.startTime === null) return u.next(0);
    const {
      delay: S,
      repeat: _,
      repeatType: C,
      repeatDelay: R,
      onUpdate: M,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 &&
        (this.startTime = Math.min(e - v / this.speed, this.startTime)),
      i
        ? (this.currentTime = e)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(e - this.startTime) * this.speed);
    const b = this.currentTime - S * (this.speed >= 0 ? 1 : -1),
      k = this.speed >= 0 ? b < 0 : b > v;
    (this.currentTime = Math.max(b, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = v);
    let P = this.currentTime,
      Y = u;
    if (_) {
      const Z = Math.min(this.currentTime, v) / T;
      let $ = Math.floor(Z),
        ae = Z % 1;
      !ae && Z >= 1 && (ae = 1),
        ae === 1 && $--,
        ($ = Math.min($, _ + 1)),
        !!($ % 2) &&
          (C === "reverse"
            ? ((ae = 1 - ae), R && (ae -= R / T))
            : C === "mirror" && (Y = c)),
        (P = pn(0, 1, ae) * T);
    }
    const q = k ? { done: !1, value: g[0] } : Y.next(P);
    h && (q.value = h(q.value));
    let { done: Q } = q;
    !k &&
      p !== null &&
      (Q = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0);
    const J =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && Q));
    return (
      J && a !== void 0 && (q.value = Tr(g, this.options, a)),
      M && M(q.value),
      J && this.finish(),
      q
    );
  }
  get duration() {
    const { resolved: e } = this;
    return e ? Ln(e.calculatedDuration) : 0;
  }
  get time() {
    return Ln(this.currentTime);
  }
  set time(e) {
    (e = Un(e)),
      (this.currentTime = e),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = e)
        : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const i = this.playbackSpeed !== e;
    (this.playbackSpeed = e), i && (this.time = Ln(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: e = $I, onPlay: i, startTime: s } = this.options;
    this.driver || (this.driver = e((u) => this.tick(u))), i && i();
    const a = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = a - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = a)
      : (this.startTime = s ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: e } = this.options;
    e && e();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return (this.startTime = 0), this.tick(e, !0);
  }
}
function eU(t) {
  return new Sr(t);
}
const tU = new Set(["opacity", "clipPath", "filter", "transform"]);
function nU(
  t,
  e,
  i,
  {
    delay: s = 0,
    duration: a = 300,
    repeat: u = 0,
    repeatType: c = "loop",
    ease: h = "easeInOut",
    times: g,
  } = {}
) {
  const p = { [e]: i };
  g && (p.offset = g);
  const v = fS(h, a);
  return (
    Array.isArray(v) && (p.easing = v),
    t.animate(p, {
      delay: s,
      duration: a,
      easing: Array.isArray(v) ? "linear" : v,
      fill: "both",
      iterations: u + 1,
      direction: c === "reverse" ? "alternate" : "normal",
    })
  );
}
const iU = ed(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ir = 10,
  oU = 2e4;
function sU(t) {
  return md(t.type) || t.type === "spring" || !cS(t.ease);
}
function lU(t, e) {
  const i = new Sr({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let s = { done: !1, value: t[0] };
  const a = [];
  let u = 0;
  for (; !s.done && u < oU; ) (s = i.sample(u)), a.push(s.value), (u += ir);
  return { times: void 0, keyframes: a, duration: u - ir, ease: "linear" };
}
const XS = { anticipate: AS, backInOut: _S, circInOut: xS };
function aU(t) {
  return t in XS;
}
class Yv extends BS {
  constructor(e) {
    super(e);
    const { name: i, motionValue: s, element: a, keyframes: u } = this.options;
    (this.resolver = new kS(
      u,
      (c, h) => this.onKeyframesResolved(c, h),
      i,
      s,
      a
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(e, i) {
    let {
      duration: s = 300,
      times: a,
      ease: u,
      type: c,
      motionValue: h,
      name: g,
      startTime: p,
    } = this.options;
    if (!h.owner || !h.owner.current) return !1;
    if (
      (typeof u == "string" && er() && aU(u) && (u = XS[u]), sU(this.options))
    ) {
      const {
          onComplete: T,
          onUpdate: S,
          motionValue: _,
          element: C,
          ...R
        } = this.options,
        M = lU(e, R);
      (e = M.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (s = M.duration),
        (a = M.times),
        (u = M.ease),
        (c = "keyframes");
    }
    const v = nU(h.owner.current, g, e, {
      ...this.options,
      duration: s,
      times: a,
      ease: u,
    });
    return (
      (v.startTime = p ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Nv(v, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (v.onfinish = () => {
            const { onComplete: T } = this.options;
            h.set(Tr(e, this.options, i)),
              T && T(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: v, duration: s, times: a, type: c, ease: u, keyframes: e }
    );
  }
  get duration() {
    const { resolved: e } = this;
    if (!e) return 0;
    const { duration: i } = e;
    return Ln(i);
  }
  get time() {
    const { resolved: e } = this;
    if (!e) return 0;
    const { animation: i } = e;
    return Ln(i.currentTime || 0);
  }
  set time(e) {
    const { resolved: i } = this;
    if (!i) return;
    const { animation: s } = i;
    s.currentTime = Un(e);
  }
  get speed() {
    const { resolved: e } = this;
    if (!e) return 1;
    const { animation: i } = e;
    return i.playbackRate;
  }
  set speed(e) {
    const { resolved: i } = this;
    if (!i) return;
    const { animation: s } = i;
    s.playbackRate = e;
  }
  get state() {
    const { resolved: e } = this;
    if (!e) return "idle";
    const { animation: i } = e;
    return i.playState;
  }
  get startTime() {
    const { resolved: e } = this;
    if (!e) return null;
    const { animation: i } = e;
    return i.startTime;
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      const { resolved: i } = this;
      if (!i) return vt;
      const { animation: s } = i;
      Nv(s, e);
    }
    return vt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: e } = this;
    if (!e) return;
    const { animation: i } = e;
    i.playState === "finished" && this.updateFinishedPromise(), i.play();
  }
  pause() {
    const { resolved: e } = this;
    if (!e) return;
    const { animation: i } = e;
    i.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: e } = this;
    if (!e) return;
    const {
      animation: i,
      keyframes: s,
      duration: a,
      type: u,
      ease: c,
      times: h,
    } = e;
    if (i.playState === "idle" || i.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: p,
          onUpdate: v,
          onComplete: T,
          element: S,
          ..._
        } = this.options,
        C = new Sr({
          ..._,
          keyframes: s,
          duration: a,
          type: u,
          ease: c,
          times: h,
          isGenerator: !0,
        }),
        R = Un(this.time);
      p.setWithVelocity(C.sample(R - ir).value, C.sample(R).value, ir);
    }
    const { onStop: g } = this.options;
    g && g(), this.cancel();
  }
  complete() {
    const { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    const { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    const {
      motionValue: i,
      name: s,
      repeatDelay: a,
      repeatType: u,
      damping: c,
      type: h,
    } = e;
    if (!i || !i.owner || !(i.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: g, transformTemplate: p } = i.owner.getProps();
    return (
      iU() &&
      s &&
      tU.has(s) &&
      !g &&
      !p &&
      !a &&
      u !== "mirror" &&
      c !== 0 &&
      h !== "inertia"
    );
  }
}
const rU = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  uU = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  cU = { type: "keyframes", duration: 0.8 },
  fU = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  dU = (t, { keyframes: e }) =>
    e.length > 2
      ? cU
      : qi.has(t)
      ? t.startsWith("scale")
        ? uU(e[1])
        : rU
      : fU;
function hU({
  when: t,
  delay: e,
  delayChildren: i,
  staggerChildren: s,
  staggerDirection: a,
  repeat: u,
  repeatType: c,
  repeatDelay: h,
  from: g,
  elapsed: p,
  ...v
}) {
  return !!Object.keys(v).length;
}
const Nd =
  (t, e, i, s = {}, a, u) =>
  (c) => {
    const h = pd(s, t) || {},
      g = h.delay || s.delay || 0;
    let { elapsed: p = 0 } = s;
    p = p - Un(g);
    let v = {
      keyframes: Array.isArray(i) ? i : [null, i],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...h,
      delay: -p,
      onUpdate: (S) => {
        e.set(S), h.onUpdate && h.onUpdate(S);
      },
      onComplete: () => {
        c(), h.onComplete && h.onComplete();
      },
      name: t,
      motionValue: e,
      element: u ? void 0 : a,
    };
    hU(h) || (v = { ...v, ...dU(t, v) }),
      v.duration && (v.duration = Un(v.duration)),
      v.repeatDelay && (v.repeatDelay = Un(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let T = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ((v.duration = 0), v.delay === 0 && (T = !0)),
      T && !u && e.get() !== void 0)
    ) {
      const S = Tr(v.keyframes, h);
      if (S !== void 0)
        return (
          we.update(() => {
            v.onUpdate(S), v.onComplete();
          }),
          new LD([])
        );
    }
    return !u && Yv.supports(v) ? new Yv(v) : new Sr(v);
  };
function pU({ protectedKeys: t, needsAnimating: e }, i) {
  const s = t.hasOwnProperty(i) && e[i] !== !0;
  return (e[i] = !1), s;
}
function QS(t, e, { delay: i = 0, transitionOverride: s, type: a } = {}) {
  var u;
  let { transition: c = t.getDefaultTransition(), transitionEnd: h, ...g } = e;
  s && (c = s);
  const p = [],
    v = a && t.animationState && t.animationState.getState()[a];
  for (const T in g) {
    const S = t.getValue(
        T,
        (u = t.latestValues[T]) !== null && u !== void 0 ? u : null
      ),
      _ = g[T];
    if (_ === void 0 || (v && pU(v, T))) continue;
    const C = { delay: i, ...pd(c || {}, T) };
    let R = !1;
    if (window.MotionHandoffAnimation) {
      const b = yS(t);
      if (b) {
        const k = window.MotionHandoffAnimation(b, T, we);
        k !== null && ((C.startTime = k), (R = !0));
      }
    }
    Mf(t, T),
      S.start(
        Nd(T, S, _, t.shouldReduceMotion && gS.has(T) ? { type: !1 } : C, t, R)
      );
    const M = S.animation;
    M && p.push(M);
  }
  return (
    h &&
      Promise.all(p).then(() => {
        we.update(() => {
          h && KD(t, h);
        });
      }),
    p
  );
}
function Uf(t, e, i = {}) {
  var s;
  const a = vr(
    t,
    e,
    i.type === "exit"
      ? (s = t.presenceContext) === null || s === void 0
        ? void 0
        : s.custom
      : void 0
  );
  let { transition: u = t.getDefaultTransition() || {} } = a || {};
  i.transitionOverride && (u = i.transitionOverride);
  const c = a ? () => Promise.all(QS(t, a, i)) : () => Promise.resolve(),
    h =
      t.variantChildren && t.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: T,
              staggerDirection: S,
            } = u;
            return mU(t, e, v + p, T, S, i);
          }
        : () => Promise.resolve(),
    { when: g } = u;
  if (g) {
    const [p, v] = g === "beforeChildren" ? [c, h] : [h, c];
    return p().then(() => v());
  } else return Promise.all([c(), h(i.delay)]);
}
function mU(t, e, i = 0, s = 0, a = 1, u) {
  const c = [],
    h = (t.variantChildren.size - 1) * s,
    g = a === 1 ? (p = 0) => p * s : (p = 0) => h - p * s;
  return (
    Array.from(t.variantChildren)
      .sort(gU)
      .forEach((p, v) => {
        p.notify("AnimationStart", e),
          c.push(
            Uf(p, e, { ...u, delay: i + g(v) }).then(() =>
              p.notify("AnimationComplete", e)
            )
          );
      }),
    Promise.all(c)
  );
}
function gU(t, e) {
  return t.sortNodePosition(e);
}
function yU(t, e, i = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const a = e.map((u) => Uf(t, u, i));
    s = Promise.all(a);
  } else if (typeof e == "string") s = Uf(t, e, i);
  else {
    const a = typeof e == "function" ? vr(t, e, i.custom) : e;
    s = Promise.all(QS(t, a, i));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const vU = nd.length;
function ZS(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const i = t.parent ? ZS(t.parent) || {} : {};
    return t.props.initial !== void 0 && (i.initial = t.props.initial), i;
  }
  const e = {};
  for (let i = 0; i < vU; i++) {
    const s = nd[i],
      a = t.props[s];
    (js(a) || a === !1) && (e[s] = a);
  }
  return e;
}
const TU = [...td].reverse(),
  SU = td.length;
function EU(t) {
  return (e) =>
    Promise.all(e.map(({ animation: i, options: s }) => yU(t, i, s)));
}
function _U(t) {
  let e = EU(t),
    i = Jv(),
    s = !0;
  const a = (g) => (p, v) => {
    var T;
    const S = vr(
      t,
      v,
      g === "exit"
        ? (T = t.presenceContext) === null || T === void 0
          ? void 0
          : T.custom
        : void 0
    );
    if (S) {
      const { transition: _, transitionEnd: C, ...R } = S;
      p = { ...p, ...R, ...C };
    }
    return p;
  };
  function u(g) {
    e = g(t);
  }
  function c(g) {
    const { props: p } = t,
      v = ZS(t.parent) || {},
      T = [],
      S = new Set();
    let _ = {},
      C = 1 / 0;
    for (let M = 0; M < SU; M++) {
      const b = TU[M],
        k = i[b],
        P = p[b] !== void 0 ? p[b] : v[b],
        Y = js(P),
        q = b === g ? k.isActive : null;
      q === !1 && (C = M);
      let Q = P === v[b] && P !== p[b] && Y;
      if (
        (Q && s && t.manuallyAnimateOnMount && (Q = !1),
        (k.protectedKeys = { ..._ }),
        (!k.isActive && q === null) ||
          (!P && !k.prevProp) ||
          gr(P) ||
          typeof P == "boolean")
      )
        continue;
      const J = AU(k.prevProp, P);
      let Z = J || (b === g && k.isActive && !Q && Y) || (M > C && Y),
        $ = !1;
      const ae = Array.isArray(P) ? P : [P];
      let ge = ae.reduce(a(b), {});
      q === !1 && (ge = {});
      const { prevResolvedValues: Pe = {} } = k,
        Ee = { ...Pe, ...ge },
        Be = (K) => {
          (Z = !0),
            S.has(K) && (($ = !0), S.delete(K)),
            (k.needsAnimating[K] = !0);
          const ie = t.getValue(K);
          ie && (ie.liveStyle = !1);
        };
      for (const K in Ee) {
        const ie = ge[K],
          _e = Pe[K];
        if (_.hasOwnProperty(K)) continue;
        let Me = !1;
        Af(ie) && Af(_e) ? (Me = !lS(ie, _e)) : (Me = ie !== _e),
          Me
            ? ie != null
              ? Be(K)
              : S.add(K)
            : ie !== void 0 && S.has(K)
            ? Be(K)
            : (k.protectedKeys[K] = !0);
      }
      (k.prevProp = P),
        (k.prevResolvedValues = ge),
        k.isActive && (_ = { ..._, ...ge }),
        s && t.blockInitialAnimation && (Z = !1),
        Z &&
          (!(Q && J) || $) &&
          T.push(...ae.map((K) => ({ animation: K, options: { type: b } })));
    }
    if (S.size) {
      const M = {};
      S.forEach((b) => {
        const k = t.getBaseTarget(b),
          P = t.getValue(b);
        P && (P.liveStyle = !0), (M[b] = k ?? null);
      }),
        T.push({ animation: M });
    }
    let R = !!T.length;
    return (
      s &&
        (p.initial === !1 || p.initial === p.animate) &&
        !t.manuallyAnimateOnMount &&
        (R = !1),
      (s = !1),
      R ? e(T) : Promise.resolve()
    );
  }
  function h(g, p) {
    var v;
    if (i[g].isActive === p) return Promise.resolve();
    (v = t.variantChildren) === null ||
      v === void 0 ||
      v.forEach((S) => {
        var _;
        return (_ = S.animationState) === null || _ === void 0
          ? void 0
          : _.setActive(g, p);
      }),
      (i[g].isActive = p);
    const T = c(g);
    for (const S in i) i[S].protectedKeys = {};
    return T;
  }
  return {
    animateChanges: c,
    setActive: h,
    setAnimateFunction: u,
    getState: () => i,
    reset: () => {
      (i = Jv()), (s = !0);
    },
  };
}
function AU(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !lS(e, t) : !1;
}
function Li(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Jv() {
  return {
    animate: Li(!0),
    whileInView: Li(),
    whileHover: Li(),
    whileTap: Li(),
    whileDrag: Li(),
    whileFocus: Li(),
    exit: Li(),
  };
}
class pi {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
class CU extends pi {
  constructor(e) {
    super(e), e.animationState || (e.animationState = _U(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    gr(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: i } = this.node.prevProps || {};
    e !== i && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(),
      (e = this.unmountControls) === null || e === void 0 || e.call(this);
  }
}
let xU = 0;
class MU extends pi {
  constructor() {
    super(...arguments), (this.id = xU++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: i } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    const a = this.node.animationState.setActive("exit", !e);
    i && !e && a.then(() => i(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const RU = { animation: { Feature: CU }, exit: { Feature: MU } };
function nl(t, e, i, s = { passive: !0 }) {
  return t.addEventListener(e, i, s), () => t.removeEventListener(e, i);
}
function ul(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const wU = (t) => (e) => yd(e) && t(e, ul(e));
function Qs(t, e, i, s) {
  return nl(t, e, wU(i), s);
}
const Kv = (t, e) => Math.abs(t - e);
function NU(t, e) {
  const i = Kv(t.x, e.x),
    s = Kv(t.y, e.y);
  return Math.sqrt(i ** 2 + s ** 2);
}
class $S {
  constructor(
    e,
    i,
    { transformPagePoint: s, contextWindow: a, dragSnapToOrigin: u = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const T = ef(this.lastMoveEventInfo, this.history),
          S = this.startEvent !== null,
          _ = NU(T.offset, { x: 0, y: 0 }) >= 3;
        if (!S && !_) return;
        const { point: C } = T,
          { timestamp: R } = et;
        this.history.push({ ...C, timestamp: R });
        const { onStart: M, onMove: b } = this.handlers;
        S ||
          (M && M(this.lastMoveEvent, T),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, T);
      }),
      (this.handlePointerMove = (T, S) => {
        (this.lastMoveEvent = T),
          (this.lastMoveEventInfo = jc(S, this.transformPagePoint)),
          we.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (T, S) => {
        this.end();
        const { onEnd: _, onSessionEnd: C, resumeAnimation: R } = this.handlers;
        if (
          (this.dragSnapToOrigin && R && R(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const M = ef(
          T.type === "pointercancel"
            ? this.lastMoveEventInfo
            : jc(S, this.transformPagePoint),
          this.history
        );
        this.startEvent && _ && _(T, M), C && C(T, M);
      }),
      !yd(e))
    )
      return;
    (this.dragSnapToOrigin = u),
      (this.handlers = i),
      (this.transformPagePoint = s),
      (this.contextWindow = a || window);
    const c = ul(e),
      h = jc(c, this.transformPagePoint),
      { point: g } = h,
      { timestamp: p } = et;
    this.history = [{ ...g, timestamp: p }];
    const { onSessionStart: v } = i;
    v && v(e, ef(h, this.history)),
      (this.removeListeners = rl(
        Qs(this.contextWindow, "pointermove", this.handlePointerMove),
        Qs(this.contextWindow, "pointerup", this.handlePointerUp),
        Qs(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), hn(this.updatePoint);
  }
}
function jc(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Xv(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function ef({ point: t }, e) {
  return {
    point: t,
    delta: Xv(t, WS(e)),
    offset: Xv(t, bU(e)),
    velocity: DU(e, 0.1),
  };
}
function bU(t) {
  return t[0];
}
function WS(t) {
  return t[t.length - 1];
}
function DU(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let i = t.length - 1,
    s = null;
  const a = WS(t);
  for (; i >= 0 && ((s = t[i]), !(a.timestamp - s.timestamp > Un(e))); ) i--;
  if (!s) return { x: 0, y: 0 };
  const u = Ln(a.timestamp - s.timestamp);
  if (u === 0) return { x: 0, y: 0 };
  const c = { x: (a.x - s.x) / u, y: (a.y - s.y) / u };
  return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c;
}
const jS = 1e-4,
  IU = 1 - jS,
  UU = 1 + jS,
  eE = 0.01,
  LU = 0 - eE,
  VU = 0 + eE;
function Ht(t) {
  return t.max - t.min;
}
function PU(t, e, i) {
  return Math.abs(t - e) <= i;
}
function Qv(t, e, i, s = 0.5) {
  (t.origin = s),
    (t.originPoint = ze(e.min, e.max, t.origin)),
    (t.scale = Ht(i) / Ht(e)),
    (t.translate = ze(i.min, i.max, t.origin) - t.originPoint),
    ((t.scale >= IU && t.scale <= UU) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= LU && t.translate <= VU) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function Zs(t, e, i, s) {
  Qv(t.x, e.x, i.x, s ? s.originX : void 0),
    Qv(t.y, e.y, i.y, s ? s.originY : void 0);
}
function Zv(t, e, i) {
  (t.min = i.min + e.min), (t.max = t.min + Ht(e));
}
function HU(t, e, i) {
  Zv(t.x, e.x, i.x), Zv(t.y, e.y, i.y);
}
function $v(t, e, i) {
  (t.min = e.min - i.min), (t.max = t.min + Ht(e));
}
function $s(t, e, i) {
  $v(t.x, e.x, i.x), $v(t.y, e.y, i.y);
}
function GU(t, { min: e, max: i }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? ze(e, t, s.min) : Math.max(t, e))
      : i !== void 0 && t > i && (t = s ? ze(i, t, s.max) : Math.min(t, i)),
    t
  );
}
function Wv(t, e, i) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: i !== void 0 ? t.max + i - (t.max - t.min) : void 0,
  };
}
function kU(t, { top: e, left: i, bottom: s, right: a }) {
  return { x: Wv(t.x, i, a), y: Wv(t.y, e, s) };
}
function jv(t, e) {
  let i = e.min - t.min,
    s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s };
}
function BU(t, e) {
  return { x: jv(t.x, e.x), y: jv(t.y, e.y) };
}
function zU(t, e) {
  let i = 0.5;
  const s = Ht(t),
    a = Ht(e);
  return (
    a > s
      ? (i = Bi(e.min, e.max - s, t.min))
      : s > a && (i = Bi(t.min, t.max - a, e.min)),
    pn(0, 1, i)
  );
}
function qU(t, e) {
  const i = {};
  return (
    e.min !== void 0 && (i.min = e.min - t.min),
    e.max !== void 0 && (i.max = e.max - t.min),
    i
  );
}
const Lf = 0.35;
function OU(t = Lf) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Lf),
    { x: e0(t, "left", "right"), y: e0(t, "top", "bottom") }
  );
}
function e0(t, e, i) {
  return { min: t0(t, e), max: t0(t, i) };
}
function t0(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const n0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Uo = () => ({ x: n0(), y: n0() }),
  i0 = () => ({ min: 0, max: 0 }),
  Xe = () => ({ x: i0(), y: i0() });
function Qt(t) {
  return [t("x"), t("y")];
}
function tE({ top: t, left: e, right: i, bottom: s }) {
  return { x: { min: e, max: i }, y: { min: t, max: s } };
}
function FU({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function YU(t, e) {
  if (!e) return t;
  const i = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return { top: i.y, left: i.x, bottom: s.y, right: s.x };
}
function tf(t) {
  return t === void 0 || t === 1;
}
function Vf({ scale: t, scaleX: e, scaleY: i }) {
  return !tf(t) || !tf(e) || !tf(i);
}
function Pi(t) {
  return (
    Vf(t) ||
    nE(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function nE(t) {
  return o0(t.x) || o0(t.y);
}
function o0(t) {
  return t && t !== "0%";
}
function or(t, e, i) {
  const s = t - i,
    a = e * s;
  return i + a;
}
function s0(t, e, i, s, a) {
  return a !== void 0 && (t = or(t, a, s)), or(t, i, s) + e;
}
function Pf(t, e = 0, i = 1, s, a) {
  (t.min = s0(t.min, e, i, s, a)), (t.max = s0(t.max, e, i, s, a));
}
function iE(t, { x: e, y: i }) {
  Pf(t.x, e.translate, e.scale, e.originPoint),
    Pf(t.y, i.translate, i.scale, i.originPoint);
}
const l0 = 0.999999999999,
  a0 = 1.0000000000001;
function JU(t, e, i, s = !1) {
  const a = i.length;
  if (!a) return;
  e.x = e.y = 1;
  let u, c;
  for (let h = 0; h < a; h++) {
    (u = i[h]), (c = u.projectionDelta);
    const { visualElement: g } = u.options;
    (g && g.props.style && g.props.style.display === "contents") ||
      (s &&
        u.options.layoutScroll &&
        u.scroll &&
        u !== u.root &&
        Vo(t, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
      c && ((e.x *= c.x.scale), (e.y *= c.y.scale), iE(t, c)),
      s && Pi(u.latestValues) && Vo(t, u.latestValues));
  }
  e.x < a0 && e.x > l0 && (e.x = 1), e.y < a0 && e.y > l0 && (e.y = 1);
}
function Lo(t, e) {
  (t.min = t.min + e), (t.max = t.max + e);
}
function r0(t, e, i, s, a = 0.5) {
  const u = ze(t.min, t.max, a);
  Pf(t, e, i, u, s);
}
function Vo(t, e) {
  r0(t.x, e.x, e.scaleX, e.scale, e.originX),
    r0(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function oE(t, e) {
  return tE(YU(t.getBoundingClientRect(), e));
}
function KU(t, e, i) {
  const s = oE(t, i),
    { scroll: a } = e;
  return a && (Lo(s.x, a.offset.x), Lo(s.y, a.offset.y)), s;
}
const sE = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  XU = new WeakMap();
class QU {
  constructor(e) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Xe()),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: i = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const a = (v) => {
        const { dragSnapToOrigin: T } = this.getProps();
        T ? this.pauseAnimation() : this.stopAnimation(),
          i && this.snapToCursor(ul(v).point);
      },
      u = (v, T) => {
        const { drag: S, dragPropagation: _, onDragStart: C } = this.getProps();
        if (
          S &&
          !_ &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = qD(S)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Qt((M) => {
            let b = this.getAxisMotionValue(M).get() || 0;
            if (fn.test(b)) {
              const { projection: k } = this.visualElement;
              if (k && k.layout) {
                const P = k.layout.layoutBox[M];
                P && (b = Ht(P) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[M] = b;
          }),
          C && we.postRender(() => C(v, T)),
          Mf(this.visualElement, "transform");
        const { animationState: R } = this.visualElement;
        R && R.setActive("whileDrag", !0);
      },
      c = (v, T) => {
        const {
          dragPropagation: S,
          dragDirectionLock: _,
          onDirectionLock: C,
          onDrag: R,
        } = this.getProps();
        if (!S && !this.openDragLock) return;
        const { offset: M } = T;
        if (_ && this.currentDirection === null) {
          (this.currentDirection = ZU(M)),
            this.currentDirection !== null && C && C(this.currentDirection);
          return;
        }
        this.updateAxis("x", T.point, M),
          this.updateAxis("y", T.point, M),
          this.visualElement.render(),
          R && R(v, T);
      },
      h = (v, T) => this.stop(v, T),
      g = () =>
        Qt((v) => {
          var T;
          return (
            this.getAnimationState(v) === "paused" &&
            ((T = this.getAxisMotionValue(v).animation) === null || T === void 0
              ? void 0
              : T.play())
          );
        }),
      { dragSnapToOrigin: p } = this.getProps();
    this.panSession = new $S(
      e,
      {
        onSessionStart: a,
        onStart: u,
        onMove: c,
        onSessionEnd: h,
        resumeAnimation: g,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: p,
        contextWindow: sE(this.visualElement),
      }
    );
  }
  stop(e, i) {
    const s = this.isDragging;
    if ((this.cancel(), !s)) return;
    const { velocity: a } = i;
    this.startAnimation(a);
    const { onDragEnd: u } = this.getProps();
    u && we.postRender(() => u(e, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: i } = this.visualElement;
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      i && i.setActive("whileDrag", !1);
  }
  updateAxis(e, i, s) {
    const { drag: a } = this.getProps();
    if (!s || !Ga(e, a, this.currentDirection)) return;
    const u = this.getAxisMotionValue(e);
    let c = this.originPoint[e] + s[e];
    this.constraints &&
      this.constraints[e] &&
      (c = GU(c, this.constraints[e], this.elastic[e])),
      u.set(c);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: i, dragElastic: s } = this.getProps(),
      a =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (e = this.visualElement.projection) === null || e === void 0
          ? void 0
          : e.layout,
      u = this.constraints;
    i && Do(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && a
      ? (this.constraints = kU(a.layoutBox, i))
      : (this.constraints = !1),
      (this.elastic = OU(s)),
      u !== this.constraints &&
        a &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Qt((c) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(c) &&
            (this.constraints[c] = qU(a.layoutBox[c], this.constraints[c]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: i } = this.getProps();
    if (!e || !Do(e)) return !1;
    const s = e.current,
      { projection: a } = this.visualElement;
    if (!a || !a.layout) return !1;
    const u = KU(s, a.root, this.visualElement.getTransformPagePoint());
    let c = BU(a.layout.layoutBox, u);
    if (i) {
      const h = i(FU(c));
      (this.hasMutatedConstraints = !!h), h && (c = tE(h));
    }
    return c;
  }
  startAnimation(e) {
    const {
        drag: i,
        dragMomentum: s,
        dragElastic: a,
        dragTransition: u,
        dragSnapToOrigin: c,
        onDragTransitionEnd: h,
      } = this.getProps(),
      g = this.constraints || {},
      p = Qt((v) => {
        if (!Ga(v, i, this.currentDirection)) return;
        let T = (g && g[v]) || {};
        c && (T = { min: 0, max: 0 });
        const S = a ? 200 : 1e6,
          _ = a ? 40 : 1e7,
          C = {
            type: "inertia",
            velocity: s ? e[v] : 0,
            bounceStiffness: S,
            bounceDamping: _,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...u,
            ...T,
          };
        return this.startAxisValueAnimation(v, C);
      });
    return Promise.all(p).then(h);
  }
  startAxisValueAnimation(e, i) {
    const s = this.getAxisMotionValue(e);
    return (
      Mf(this.visualElement, e), s.start(Nd(e, s, 0, i, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Qt((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    Qt((e) => {
      var i;
      return (i = this.getAxisMotionValue(e).animation) === null || i === void 0
        ? void 0
        : i.pause();
    });
  }
  getAnimationState(e) {
    var i;
    return (i = this.getAxisMotionValue(e).animation) === null || i === void 0
      ? void 0
      : i.state;
  }
  getAxisMotionValue(e) {
    const i = `_drag${e.toUpperCase()}`,
      s = this.visualElement.getProps(),
      a = s[i];
    return (
      a ||
      this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    Qt((i) => {
      const { drag: s } = this.getProps();
      if (!Ga(i, s, this.currentDirection)) return;
      const { projection: a } = this.visualElement,
        u = this.getAxisMotionValue(i);
      if (a && a.layout) {
        const { min: c, max: h } = a.layout.layoutBox[i];
        u.set(e[i] - ze(c, h, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: i } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!Do(i) || !s || !this.constraints) return;
    this.stopAnimation();
    const a = { x: 0, y: 0 };
    Qt((c) => {
      const h = this.getAxisMotionValue(c);
      if (h && this.constraints !== !1) {
        const g = h.get();
        a[c] = zU({ min: g, max: g }, this.constraints[c]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = u ? u({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      Qt((c) => {
        if (!Ga(c, e, null)) return;
        const h = this.getAxisMotionValue(c),
          { min: g, max: p } = this.constraints[c];
        h.set(ze(g, p, a[c]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    XU.set(this.visualElement, this);
    const e = this.visualElement.current,
      i = Qs(e, "pointerdown", (g) => {
        const { drag: p, dragListener: v = !0 } = this.getProps();
        p && v && this.start(g);
      }),
      s = () => {
        const { dragConstraints: g } = this.getProps();
        Do(g) && g.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: a } = this.visualElement,
      u = a.addEventListener("measure", s);
    a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()),
      we.read(s);
    const c = nl(window, "resize", () => this.scalePositionWithinConstraints()),
      h = a.addEventListener(
        "didUpdate",
        ({ delta: g, hasLayoutChanged: p }) => {
          this.isDragging &&
            p &&
            (Qt((v) => {
              const T = this.getAxisMotionValue(v);
              T &&
                ((this.originPoint[v] += g[v].translate),
                T.set(T.get() + g[v].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      c(), i(), u(), h && h();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: i = !1,
        dragDirectionLock: s = !1,
        dragPropagation: a = !1,
        dragConstraints: u = !1,
        dragElastic: c = Lf,
        dragMomentum: h = !0,
      } = e;
    return {
      ...e,
      drag: i,
      dragDirectionLock: s,
      dragPropagation: a,
      dragConstraints: u,
      dragElastic: c,
      dragMomentum: h,
    };
  }
}
function Ga(t, e, i) {
  return (e === !0 || e === t) && (i === null || i === t);
}
function ZU(t, e = 10) {
  let i = null;
  return Math.abs(t.y) > e ? (i = "y") : Math.abs(t.x) > e && (i = "x"), i;
}
class $U extends pi {
  constructor(e) {
    super(e),
      (this.removeGroupControls = vt),
      (this.removeListeners = vt),
      (this.controls = new QU(e));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || vt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const u0 = (t) => (e, i) => {
  t && we.postRender(() => t(e, i));
};
class WU extends pi {
  constructor() {
    super(...arguments), (this.removePointerDownListener = vt);
  }
  onPointerDown(e) {
    this.session = new $S(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: sE(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: i,
      onPan: s,
      onPanEnd: a,
    } = this.node.getProps();
    return {
      onSessionStart: u0(e),
      onStart: u0(i),
      onMove: s,
      onEnd: (u, c) => {
        delete this.session, a && we.postRender(() => a(u, c));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Qs(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Oa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function c0(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const qs = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (le.test(t)) t = parseFloat(t);
        else return t;
      const i = c0(t, e.target.x),
        s = c0(t, e.target.y);
      return `${i}% ${s}%`;
    },
  },
  jU = {
    correct: (t, { treeScale: e, projectionDelta: i }) => {
      const s = t,
        a = di.parse(t);
      if (a.length > 5) return s;
      const u = di.createTransformer(t),
        c = typeof a[0] != "number" ? 1 : 0,
        h = i.x.scale * e.x,
        g = i.y.scale * e.y;
      (a[0 + c] /= h), (a[1 + c] /= g);
      const p = ze(h, g, 0.5);
      return (
        typeof a[2 + c] == "number" && (a[2 + c] /= p),
        typeof a[3 + c] == "number" && (a[3 + c] /= p),
        u(a)
      );
    },
  };
class e2 extends X.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: i,
        switchLayoutGroup: s,
        layoutId: a,
      } = this.props,
      { projection: u } = e;
    AD(t2),
      u &&
        (i.group && i.group.add(u),
        s && s.register && a && s.register(u),
        u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        u.setOptions({
          ...u.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Oa.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: i,
        visualElement: s,
        drag: a,
        isPresent: u,
      } = this.props,
      c = s.projection;
    return (
      c &&
        ((c.isPresent = u),
        a || e.layoutDependency !== i || i === void 0
          ? c.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== u &&
          (u
            ? c.promote()
            : c.relegate() ||
              we.postRender(() => {
                const h = c.getStack();
                (!h || !h.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      od.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: i,
        switchLayoutGroup: s,
      } = this.props,
      { projection: a } = e;
    a &&
      (a.scheduleCheckAfterUnmount(),
      i && i.group && i.group.remove(a),
      s && s.deregister && s.deregister(a));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function lE(t) {
  const [e, i] = kT(),
    s = X.useContext(Wf);
  return I.jsx(e2, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: X.useContext(KT),
    isPresent: e,
    safeToRemove: i,
  });
}
const t2 = {
  borderRadius: {
    ...qs,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: qs,
  borderTopRightRadius: qs,
  borderBottomLeftRadius: qs,
  borderBottomRightRadius: qs,
  boxShadow: jU,
};
function n2(t, e, i) {
  const s = it(t) ? t : cn(t);
  return s.start(Nd("", s, e, i)), s.animation;
}
function i2(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const o2 = (t, e) => t.depth - e.depth;
class s2 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    vd(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    Td(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(o2),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
function l2(t, e) {
  const i = dn.now(),
    s = ({ timestamp: a }) => {
      const u = a - i;
      u >= e && (hn(s), t(u - e));
    };
  return we.read(s, !0), () => hn(s);
}
const aE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  a2 = aE.length,
  f0 = (t) => (typeof t == "string" ? parseFloat(t) : t),
  d0 = (t) => typeof t == "number" || le.test(t);
function r2(t, e, i, s, a, u) {
  a
    ? ((t.opacity = ze(0, i.opacity !== void 0 ? i.opacity : 1, u2(s))),
      (t.opacityExit = ze(e.opacity !== void 0 ? e.opacity : 1, 0, c2(s))))
    : u &&
      (t.opacity = ze(
        e.opacity !== void 0 ? e.opacity : 1,
        i.opacity !== void 0 ? i.opacity : 1,
        s
      ));
  for (let c = 0; c < a2; c++) {
    const h = `border${aE[c]}Radius`;
    let g = h0(e, h),
      p = h0(i, h);
    if (g === void 0 && p === void 0) continue;
    g || (g = 0),
      p || (p = 0),
      g === 0 || p === 0 || d0(g) === d0(p)
        ? ((t[h] = Math.max(ze(f0(g), f0(p), s), 0)),
          (fn.test(p) || fn.test(g)) && (t[h] += "%"))
        : (t[h] = p);
  }
  (e.rotate || i.rotate) && (t.rotate = ze(e.rotate || 0, i.rotate || 0, s));
}
function h0(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const u2 = rE(0, 0.5, CS),
  c2 = rE(0.5, 0.95, vt);
function rE(t, e, i) {
  return (s) => (s < t ? 0 : s > e ? 1 : i(Bi(t, e, s)));
}
function p0(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function Xt(t, e) {
  p0(t.x, e.x), p0(t.y, e.y);
}
function m0(t, e) {
  (t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin);
}
function g0(t, e, i, s, a) {
  return (
    (t -= e), (t = or(t, 1 / i, s)), a !== void 0 && (t = or(t, 1 / a, s)), t
  );
}
function f2(t, e = 0, i = 1, s = 0.5, a, u = t, c = t) {
  if (
    (fn.test(e) &&
      ((e = parseFloat(e)), (e = ze(c.min, c.max, e / 100) - c.min)),
    typeof e != "number")
  )
    return;
  let h = ze(u.min, u.max, s);
  t === u && (h -= e),
    (t.min = g0(t.min, e, i, h, a)),
    (t.max = g0(t.max, e, i, h, a));
}
function y0(t, e, [i, s, a], u, c) {
  f2(t, e[i], e[s], e[a], e.scale, u, c);
}
const d2 = ["x", "scaleX", "originX"],
  h2 = ["y", "scaleY", "originY"];
function v0(t, e, i, s) {
  y0(t.x, e, d2, i ? i.x : void 0, s ? s.x : void 0),
    y0(t.y, e, h2, i ? i.y : void 0, s ? s.y : void 0);
}
function T0(t) {
  return t.translate === 0 && t.scale === 1;
}
function uE(t) {
  return T0(t.x) && T0(t.y);
}
function S0(t, e) {
  return t.min === e.min && t.max === e.max;
}
function p2(t, e) {
  return S0(t.x, e.x) && S0(t.y, e.y);
}
function E0(t, e) {
  return (
    Math.round(t.min) === Math.round(e.min) &&
    Math.round(t.max) === Math.round(e.max)
  );
}
function cE(t, e) {
  return E0(t.x, e.x) && E0(t.y, e.y);
}
function _0(t) {
  return Ht(t.x) / Ht(t.y);
}
function A0(t, e) {
  return (
    t.translate === e.translate &&
    t.scale === e.scale &&
    t.originPoint === e.originPoint
  );
}
class m2 {
  constructor() {
    this.members = [];
  }
  add(e) {
    vd(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (Td(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const i = this.members[this.members.length - 1];
      i && this.promote(i);
    }
  }
  relegate(e) {
    const i = this.members.findIndex((a) => e === a);
    if (i === 0) return !1;
    let s;
    for (let a = i; a >= 0; a--) {
      const u = this.members[a];
      if (u.isPresent !== !1) {
        s = u;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, i) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      s.instance && s.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = s),
        i && (e.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: a } = e.options;
      a === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: i, resumingFrom: s } = e;
      i.onExitComplete && i.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function g2(t, e, i) {
  let s = "";
  const a = t.x.translate / e.x,
    u = t.y.translate / e.y,
    c = (i == null ? void 0 : i.z) || 0;
  if (
    ((a || u || c) && (s = `translate3d(${a}px, ${u}px, ${c}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    i)
  ) {
    const {
      transformPerspective: p,
      rotate: v,
      rotateX: T,
      rotateY: S,
      skewX: _,
      skewY: C,
    } = i;
    p && (s = `perspective(${p}px) ${s}`),
      v && (s += `rotate(${v}deg) `),
      T && (s += `rotateX(${T}deg) `),
      S && (s += `rotateY(${S}deg) `),
      _ && (s += `skewX(${_}deg) `),
      C && (s += `skewY(${C}deg) `);
  }
  const h = t.x.scale * e.x,
    g = t.y.scale * e.y;
  return (h !== 1 || g !== 1) && (s += `scale(${h}, ${g})`), s || "none";
}
const Hi = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Ks = typeof window < "u" && window.MotionDebug !== void 0,
  nf = ["", "X", "Y", "Z"],
  y2 = { visibility: "hidden" },
  C0 = 1e3;
let v2 = 0;
function of(t, e, i, s) {
  const { latestValues: a } = e;
  a[t] && ((i[t] = a[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
}
function fE(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const i = yS(e);
  if (window.MotionHasOptimisedAnimation(i, "transform")) {
    const { layout: a, layoutId: u } = t.options;
    window.MotionCancelOptimisedAnimation(i, "transform", we, !(a || u));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && fE(s);
}
function dE({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: i,
  checkIsScrollRoot: s,
  resetTransform: a,
}) {
  return class {
    constructor(c = {}, h = e == null ? void 0 : e()) {
      (this.id = v2++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Ks &&
              (Hi.totalNodes =
                Hi.resolvedTargetDeltas =
                Hi.recalculatedProjection =
                  0),
            this.nodes.forEach(E2),
            this.nodes.forEach(M2),
            this.nodes.forEach(R2),
            this.nodes.forEach(_2),
            Ks && window.MotionDebug.record(Hi);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = c),
        (this.root = h ? h.root || h : this),
        (this.path = h ? [...h.path, h] : []),
        (this.parent = h),
        (this.depth = h ? h.depth + 1 : 0);
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new s2());
    }
    addEventListener(c, h) {
      return (
        this.eventHandlers.has(c) || this.eventHandlers.set(c, new Sd()),
        this.eventHandlers.get(c).add(h)
      );
    }
    notifyListeners(c, ...h) {
      const g = this.eventHandlers.get(c);
      g && g.notify(...h);
    }
    hasListeners(c) {
      return this.eventHandlers.has(c);
    }
    mount(c, h = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = i2(c)), (this.instance = c);
      const { layoutId: g, layout: p, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(c),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        h && (p || g) && (this.isLayoutDirty = !0),
        t)
      ) {
        let T;
        const S = () => (this.root.updateBlockedByResize = !1);
        t(c, () => {
          (this.root.updateBlockedByResize = !0),
            T && T(),
            (T = l2(S, 250)),
            Oa.hasAnimatedSinceResize &&
              ((Oa.hasAnimatedSinceResize = !1), this.nodes.forEach(M0));
        });
      }
      g && this.root.registerSharedNode(g, this),
        this.options.animate !== !1 &&
          v &&
          (g || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: T,
              hasLayoutChanged: S,
              hasRelativeTargetChanged: _,
              layout: C,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const R =
                  this.options.transition || v.getDefaultTransition() || I2,
                { onLayoutAnimationStart: M, onLayoutAnimationComplete: b } =
                  v.getProps(),
                k = !this.targetLayout || !cE(this.targetLayout, C) || _,
                P = !S && _;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                P ||
                (S && (k || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(T, P);
                const Y = { ...pd(R, "layout"), onPlay: M, onComplete: b };
                (v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((Y.delay = 0), (Y.type = !1)),
                  this.startAnimation(Y);
              } else
                S || M0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = C;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const c = this.getStack();
      c && c.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        hn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(w2),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: c } = this.options;
      return c && c.getProps().transformTemplate;
    }
    willUpdate(c = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          fE(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const T = this.path[v];
        (T.shouldResetTransform = !0),
          T.updateScroll("snapshot"),
          T.options.layoutRoot && T.willUpdate(!1);
      }
      const { layoutId: h, layout: g } = this.options;
      if (h === void 0 && !g) return;
      const p = this.getTransformTemplate();
      (this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        c && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(x0);
        return;
      }
      this.isUpdating || this.nodes.forEach(C2),
        (this.isUpdating = !1),
        this.nodes.forEach(x2),
        this.nodes.forEach(T2),
        this.nodes.forEach(S2),
        this.clearAllSnapshots();
      const h = dn.now();
      (et.delta = pn(0, 1e3 / 60, h - et.timestamp)),
        (et.timestamp = h),
        (et.isProcessing = !0),
        Kc.update.process(et),
        Kc.preRender.process(et),
        Kc.render.process(et),
        (et.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), od.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(A2), this.sharedNodes.forEach(N2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        we.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      we.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
      const c = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Xe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h &&
        h.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          c ? c.layoutBox : void 0
        );
    }
    updateScroll(c = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === c &&
          (h = !1),
        h)
      ) {
        const g = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: c,
          isRoot: g,
          offset: i(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g,
        };
      }
    }
    resetTransform() {
      if (!a) return;
      const c =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !uE(this.projectionDelta),
        g = this.getTransformTemplate(),
        p = g ? g(this.latestValues, "") : void 0,
        v = p !== this.prevTransformTemplateValue;
      c &&
        (h || Pi(this.latestValues) || v) &&
        (a(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(c = !0) {
      const h = this.measurePageBox();
      let g = this.removeElementScroll(h);
      return (
        c && (g = this.removeTransform(g)),
        U2(g),
        {
          animationId: this.root.animationId,
          measuredBox: h,
          layoutBox: g,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: h } = this.options;
      if (!h) return Xe();
      const g = h.measureViewportBox();
      if (
        !(
          ((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) ||
          this.path.some(L2)
        )
      ) {
        const { scroll: v } = this.root;
        v && (Lo(g.x, v.offset.x), Lo(g.y, v.offset.y));
      }
      return g;
    }
    removeElementScroll(c) {
      var h;
      const g = Xe();
      if (
        (Xt(g, c), !((h = this.scroll) === null || h === void 0) && h.wasRoot)
      )
        return g;
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p],
          { scroll: T, options: S } = v;
        v !== this.root &&
          T &&
          S.layoutScroll &&
          (T.wasRoot && Xt(g, c), Lo(g.x, T.offset.x), Lo(g.y, T.offset.y));
      }
      return g;
    }
    applyTransform(c, h = !1) {
      const g = Xe();
      Xt(g, c);
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p];
        !h &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          Vo(g, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          Pi(v.latestValues) && Vo(g, v.latestValues);
      }
      return Pi(this.latestValues) && Vo(g, this.latestValues), g;
    }
    removeTransform(c) {
      const h = Xe();
      Xt(h, c);
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        if (!p.instance || !Pi(p.latestValues)) continue;
        Vf(p.latestValues) && p.updateSnapshot();
        const v = Xe(),
          T = p.measurePageBox();
        Xt(v, T),
          v0(h, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, v);
      }
      return Pi(this.latestValues) && v0(h, this.latestValues), h;
    }
    setTargetDelta(c) {
      (this.targetDelta = c),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(c) {
      this.options = {
        ...this.options,
        ...c,
        crossfade: c.crossfade !== void 0 ? c.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== et.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(c = !1) {
      var h;
      const g = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = g.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = g.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = g.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== g;
      if (
        !(
          c ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((h = this.parent) === null || h === void 0) &&
            h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: T, layoutId: S } = this.options;
      if (!(!this.layout || !(T || S))) {
        if (
          ((this.resolvedRelativeTargetAt = et.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const _ = this.getClosestProjectingParent();
          _ && _.layout && this.animationProgress !== 1
            ? ((this.relativeParent = _),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Xe()),
              (this.relativeTargetOrigin = Xe()),
              $s(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                _.layout.layoutBox
              ),
              Xt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Xe()), (this.targetWithTransforms = Xe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                HU(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Xt(this.target, this.layout.layoutBox),
                iE(this.target, this.targetDelta))
              : Xt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const _ = this.getClosestProjectingParent();
            _ &&
            !!_.resumingFrom == !!this.resumingFrom &&
            !_.options.layoutScroll &&
            _.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = _),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Xe()),
                (this.relativeTargetOrigin = Xe()),
                $s(this.relativeTargetOrigin, this.target, _.target),
                Xt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ks && Hi.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Vf(this.parent.latestValues) ||
          nE(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var c;
      const h = this.getLead(),
        g = !!this.resumingFrom || this !== h;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          (!((c = this.parent) === null || c === void 0) &&
            c.isProjectionDirty)) &&
          (p = !1),
        g &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === et.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: v, layoutId: T } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(v || T))
      )
        return;
      Xt(this.layoutCorrected, this.layout.layoutBox);
      const S = this.treeScale.x,
        _ = this.treeScale.y;
      JU(this.layoutCorrected, this.treeScale, this.path, g),
        h.layout &&
          !h.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((h.target = h.layout.layoutBox), (h.targetWithTransforms = Xe()));
      const { target: C } = h;
      if (!C) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (m0(this.prevProjectionDelta.x, this.projectionDelta.x),
          m0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Zs(this.projectionDelta, this.layoutCorrected, C, this.latestValues),
        (this.treeScale.x !== S ||
          this.treeScale.y !== _ ||
          !A0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !A0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", C)),
        Ks && Hi.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(c = !0) {
      var h;
      if (
        ((h = this.options.visualElement) === null ||
          h === void 0 ||
          h.scheduleRender(),
        c)
      ) {
        const g = this.getStack();
        g && g.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Uo()),
        (this.projectionDelta = Uo()),
        (this.projectionDeltaWithTransform = Uo());
    }
    setAnimationOrigin(c, h = !1) {
      const g = this.snapshot,
        p = g ? g.latestValues : {},
        v = { ...this.latestValues },
        T = Uo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !h);
      const S = Xe(),
        _ = g ? g.source : void 0,
        C = this.layout ? this.layout.source : void 0,
        R = _ !== C,
        M = this.getStack(),
        b = !M || M.members.length <= 1,
        k = !!(R && !b && this.options.crossfade === !0 && !this.path.some(D2));
      this.animationProgress = 0;
      let P;
      (this.mixTargetDelta = (Y) => {
        const q = Y / 1e3;
        R0(T.x, c.x, q),
          R0(T.y, c.y, q),
          this.setTargetDelta(T),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            ($s(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            b2(this.relativeTarget, this.relativeTargetOrigin, S, q),
            P && p2(this.relativeTarget, P) && (this.isProjectionDirty = !1),
            P || (P = Xe()),
            Xt(P, this.relativeTarget)),
          R &&
            ((this.animationValues = v), r2(v, p, this.latestValues, q, k, b)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = q);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(c) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (hn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = we.update(() => {
          (Oa.hasAnimatedSinceResize = !0),
            (this.currentAnimation = n2(0, C0, {
              ...c,
              onUpdate: (h) => {
                this.mixTargetDelta(h), c.onUpdate && c.onUpdate(h);
              },
              onComplete: () => {
                c.onComplete && c.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const c = this.getStack();
      c && c.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(C0),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const c = this.getLead();
      let {
        targetWithTransforms: h,
        target: g,
        layout: p,
        latestValues: v,
      } = c;
      if (!(!h || !g || !p)) {
        if (
          this !== c &&
          this.layout &&
          p &&
          hE(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          g = this.target || Xe();
          const T = Ht(this.layout.layoutBox.x);
          (g.x.min = c.target.x.min), (g.x.max = g.x.min + T);
          const S = Ht(this.layout.layoutBox.y);
          (g.y.min = c.target.y.min), (g.y.max = g.y.min + S);
        }
        Xt(h, g),
          Vo(h, v),
          Zs(this.projectionDeltaWithTransform, this.layoutCorrected, h, v);
      }
    }
    registerSharedNode(c, h) {
      this.sharedNodes.has(c) || this.sharedNodes.set(c, new m2()),
        this.sharedNodes.get(c).add(h);
      const p = h.options.initialPromotionConfig;
      h.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(h)
            : void 0,
      });
    }
    isLead() {
      const c = this.getStack();
      return c ? c.lead === this : !0;
    }
    getLead() {
      var c;
      const { layoutId: h } = this.options;
      return h
        ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var c;
      const { layoutId: h } = this.options;
      return h
        ? (c = this.getStack()) === null || c === void 0
          ? void 0
          : c.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: c } = this.options;
      if (c) return this.root.sharedNodes.get(c);
    }
    promote({ needsReset: c, transition: h, preserveFollowOpacity: g } = {}) {
      const p = this.getStack();
      p && p.promote(this, g),
        c && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        h && this.setOptions({ transition: h });
    }
    relegate() {
      const c = this.getStack();
      return c ? c.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: c } = this.options;
      if (!c) return;
      let h = !1;
      const { latestValues: g } = c;
      if (
        ((g.z ||
          g.rotate ||
          g.rotateX ||
          g.rotateY ||
          g.rotateZ ||
          g.skewX ||
          g.skewY) &&
          (h = !0),
        !h)
      )
        return;
      const p = {};
      g.z && of("z", c, p, this.animationValues);
      for (let v = 0; v < nf.length; v++)
        of(`rotate${nf[v]}`, c, p, this.animationValues),
          of(`skew${nf[v]}`, c, p, this.animationValues);
      c.render();
      for (const v in p)
        c.setStaticValue(v, p[v]),
          this.animationValues && (this.animationValues[v] = p[v]);
      c.scheduleRender();
    }
    getProjectionStyles(c) {
      var h, g;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return y2;
      const p = { visibility: "" },
        v = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (p.opacity = ""),
          (p.pointerEvents = za(c == null ? void 0 : c.pointerEvents) || ""),
          (p.transform = v ? v(this.latestValues, "") : "none"),
          p
        );
      const T = this.getLead();
      if (!this.projectionDelta || !this.layout || !T.target) {
        const R = {};
        return (
          this.options.layoutId &&
            ((R.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (R.pointerEvents = za(c == null ? void 0 : c.pointerEvents) || "")),
          this.hasProjected &&
            !Pi(this.latestValues) &&
            ((R.transform = v ? v({}, "") : "none"), (this.hasProjected = !1)),
          R
        );
      }
      const S = T.animationValues || T.latestValues;
      this.applyTransformsToTarget(),
        (p.transform = g2(
          this.projectionDeltaWithTransform,
          this.treeScale,
          S
        )),
        v && (p.transform = v(S, p.transform));
      const { x: _, y: C } = this.projectionDelta;
      (p.transformOrigin = `${_.origin * 100}% ${C.origin * 100}% 0`),
        T.animationValues
          ? (p.opacity =
              T === this
                ? (g =
                    (h = S.opacity) !== null && h !== void 0
                      ? h
                      : this.latestValues.opacity) !== null && g !== void 0
                  ? g
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : S.opacityExit)
          : (p.opacity =
              T === this
                ? S.opacity !== void 0
                  ? S.opacity
                  : ""
                : S.opacityExit !== void 0
                ? S.opacityExit
                : 0);
      for (const R in ja) {
        if (S[R] === void 0) continue;
        const { correct: M, applyTo: b } = ja[R],
          k = p.transform === "none" ? S[R] : M(S[R], T);
        if (b) {
          const P = b.length;
          for (let Y = 0; Y < P; Y++) p[b[Y]] = k;
        } else p[R] = k;
      }
      return (
        this.options.layoutId &&
          (p.pointerEvents =
            T === this
              ? za(c == null ? void 0 : c.pointerEvents) || ""
              : "none"),
        p
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((c) => {
        var h;
        return (h = c.currentAnimation) === null || h === void 0
          ? void 0
          : h.stop();
      }),
        this.root.nodes.forEach(x0),
        this.root.sharedNodes.clear();
    }
  };
}
function T2(t) {
  t.updateLayout();
}
function S2(t) {
  var e;
  const i =
    ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: a } = t.layout,
      { animationType: u } = t.options,
      c = i.source !== t.layout.source;
    u === "size"
      ? Qt((T) => {
          const S = c ? i.measuredBox[T] : i.layoutBox[T],
            _ = Ht(S);
          (S.min = s[T].min), (S.max = S.min + _);
        })
      : hE(u, i.layoutBox, s) &&
        Qt((T) => {
          const S = c ? i.measuredBox[T] : i.layoutBox[T],
            _ = Ht(s[T]);
          (S.max = S.min + _),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[T].max = t.relativeTarget[T].min + _));
        });
    const h = Uo();
    Zs(h, s, i.layoutBox);
    const g = Uo();
    c ? Zs(g, t.applyTransform(a, !0), i.measuredBox) : Zs(g, s, i.layoutBox);
    const p = !uE(h);
    let v = !1;
    if (!t.resumeFrom) {
      const T = t.getClosestProjectingParent();
      if (T && !T.resumeFrom) {
        const { snapshot: S, layout: _ } = T;
        if (S && _) {
          const C = Xe();
          $s(C, i.layoutBox, S.layoutBox);
          const R = Xe();
          $s(R, s, _.layoutBox),
            cE(C, R) || (v = !0),
            T.options.layoutRoot &&
              ((t.relativeTarget = R),
              (t.relativeTargetOrigin = C),
              (t.relativeParent = T));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: i,
      delta: g,
      layoutDelta: h,
      hasLayoutChanged: p,
      hasRelativeTargetChanged: v,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function E2(t) {
  Ks && Hi.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function _2(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function A2(t) {
  t.clearSnapshot();
}
function x0(t) {
  t.clearMeasurements();
}
function C2(t) {
  t.isLayoutDirty = !1;
}
function x2(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function M0(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function M2(t) {
  t.resolveTargetDelta();
}
function R2(t) {
  t.calcProjection();
}
function w2(t) {
  t.resetSkewAndRotation();
}
function N2(t) {
  t.removeLeadSnapshot();
}
function R0(t, e, i) {
  (t.translate = ze(e.translate, 0, i)),
    (t.scale = ze(e.scale, 1, i)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function w0(t, e, i, s) {
  (t.min = ze(e.min, i.min, s)), (t.max = ze(e.max, i.max, s));
}
function b2(t, e, i, s) {
  w0(t.x, e.x, i.x, s), w0(t.y, e.y, i.y, s);
}
function D2(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const I2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  N0 = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  b0 = N0("applewebkit/") && !N0("chrome/") ? Math.round : vt;
function D0(t) {
  (t.min = b0(t.min)), (t.max = b0(t.max));
}
function U2(t) {
  D0(t.x), D0(t.y);
}
function hE(t, e, i) {
  return (
    t === "position" || (t === "preserve-aspect" && !PU(_0(e), _0(i), 0.2))
  );
}
function L2(t) {
  var e;
  return (
    t !== t.root &&
    ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
  );
}
const V2 = dE({
    attachResizeListener: (t, e) => nl(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  sf = { current: void 0 },
  pE = dE({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!sf.current) {
        const t = new V2({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (sf.current = t);
      }
      return sf.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  P2 = {
    pan: { Feature: WU },
    drag: { Feature: $U, ProjectionNode: pE, MeasureLayout: lE },
  };
function I0(t, e, i) {
  const { props: s } = t;
  t.animationState &&
    s.whileHover &&
    t.animationState.setActive("whileHover", i === "Start");
  const a = "onHover" + i,
    u = s[a];
  u && we.postRender(() => u(e, ul(e)));
}
class H2 extends pi {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = HD(
        e,
        (i) => (I0(this.node, i, "Start"), (s) => I0(this.node, s, "End"))
      ));
  }
  unmount() {}
}
class G2 extends pi {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = rl(
      nl(this.node.current, "focus", () => this.onFocus()),
      nl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function U0(t, e, i) {
  const { props: s } = t;
  t.animationState &&
    s.whileTap &&
    t.animationState.setActive("whileTap", i === "Start");
  const a = "onTap" + (i === "End" ? "" : i),
    u = s[a];
  u && we.postRender(() => u(e, ul(e)));
}
class k2 extends pi {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = zD(
        e,
        (i) => (
          U0(this.node, i, "Start"),
          (s, { success: a }) => U0(this.node, s, a ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Hf = new WeakMap(),
  lf = new WeakMap(),
  B2 = (t) => {
    const e = Hf.get(t.target);
    e && e(t);
  },
  z2 = (t) => {
    t.forEach(B2);
  };
function q2({ root: t, ...e }) {
  const i = t || document;
  lf.has(i) || lf.set(i, {});
  const s = lf.get(i),
    a = JSON.stringify(e);
  return s[a] || (s[a] = new IntersectionObserver(z2, { root: t, ...e })), s[a];
}
function O2(t, e, i) {
  const s = q2(e);
  return (
    Hf.set(t, i),
    s.observe(t),
    () => {
      Hf.delete(t), s.unobserve(t);
    }
  );
}
const F2 = { some: 0, all: 1 };
class Y2 extends pi {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: i, margin: s, amount: a = "some", once: u } = e,
      c = {
        root: i ? i.current : void 0,
        rootMargin: s,
        threshold: typeof a == "number" ? a : F2[a],
      },
      h = (g) => {
        const { isIntersecting: p } = g;
        if (
          this.isInView === p ||
          ((this.isInView = p), u && !p && this.hasEnteredView)
        )
          return;
        p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", p);
        const { onViewportEnter: v, onViewportLeave: T } = this.node.getProps(),
          S = p ? v : T;
        S && S(g);
      };
    return O2(this.node.current, c, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: i } = this.node;
    ["amount", "margin", "root"].some(J2(e, i)) && this.startObserver();
  }
  unmount() {}
}
function J2({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (i) => t[i] !== e[i];
}
const K2 = {
    inView: { Feature: Y2 },
    tap: { Feature: k2 },
    focus: { Feature: G2 },
    hover: { Feature: H2 },
  },
  X2 = { layout: { ProjectionNode: pE, MeasureLayout: lE } },
  Gf = { current: null },
  mE = { current: !1 };
function Q2() {
  if (((mE.current = !0), !!jf))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (Gf.current = t.matches);
      t.addListener(e), e();
    } else Gf.current = !1;
}
const Z2 = [...GS, dt, di],
  $2 = (t) => Z2.find(HS(t)),
  L0 = new WeakMap();
function W2(t, e, i) {
  for (const s in e) {
    const a = e[s],
      u = i[s];
    if (it(a)) t.addValue(s, a);
    else if (it(u)) t.addValue(s, cn(a, { owner: t }));
    else if (u !== a)
      if (t.hasValue(s)) {
        const c = t.getValue(s);
        c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a);
      } else {
        const c = t.getStaticValue(s);
        t.addValue(s, cn(c !== void 0 ? c : a, { owner: t }));
      }
  }
  for (const s in i) e[s] === void 0 && t.removeValue(s);
  return e;
}
const V0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class j2 {
  scrapeMotionValuesFromProps(e, i, s) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: i,
      presenceContext: s,
      reducedMotionConfig: a,
      blockInitialAnimation: u,
      visualState: c,
    },
    h = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Rd),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const _ = dn.now();
        this.renderScheduledAt < _ &&
          ((this.renderScheduledAt = _), we.render(this.render, !1, !0));
      });
    const { latestValues: g, renderState: p, onUpdate: v } = c;
    (this.onUpdate = v),
      (this.latestValues = g),
      (this.baseTarget = { ...g }),
      (this.initialValues = i.initial ? { ...g } : {}),
      (this.renderState = p),
      (this.parent = e),
      (this.props = i),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = a),
      (this.options = h),
      (this.blockInitialAnimation = !!u),
      (this.isControllingVariants = yr(i)),
      (this.isVariantNode = YT(i)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    const { willChange: T, ...S } = this.scrapeMotionValuesFromProps(
      i,
      {},
      this
    );
    for (const _ in S) {
      const C = S[_];
      g[_] !== void 0 && it(C) && C.set(g[_], !1);
    }
  }
  mount(e) {
    (this.current = e),
      L0.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((i, s) => this.bindToMotionValue(s, i)),
      mE.current || Q2(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Gf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    L0.delete(this.current),
      this.projection && this.projection.unmount(),
      hn(this.notifyUpdate),
      hn(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const i = this.features[e];
      i && (i.unmount(), (i.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(e, i) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = qi.has(e),
      a = i.on("change", (h) => {
        (this.latestValues[e] = h),
          this.props.onUpdate && we.preRender(this.notifyUpdate),
          s && this.projection && (this.projection.isTransformDirty = !0);
      }),
      u = i.on("renderRequest", this.scheduleRender);
    let c;
    window.MotionCheckAppearSync &&
      (c = window.MotionCheckAppearSync(this, e, i)),
      this.valueSubscriptions.set(e, () => {
        a(), u(), c && c(), i.owner && i.stop();
      });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Go) {
      const i = Go[e];
      if (!i) continue;
      const { isEnabled: s, Feature: a } = i;
      if (
        (!this.features[e] &&
          a &&
          s(this.props) &&
          (this.features[e] = new a(this)),
        this.features[e])
      ) {
        const u = this.features[e];
        u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Xe();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, i) {
    this.latestValues[e] = i;
  }
  update(e, i) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = i);
    for (let s = 0; s < V0.length; s++) {
      const a = V0[s];
      this.propEventSubscriptions[a] &&
        (this.propEventSubscriptions[a](),
        delete this.propEventSubscriptions[a]);
      const u = "on" + a,
        c = e[u];
      c && (this.propEventSubscriptions[a] = this.on(a, c));
    }
    (this.prevMotionValues = W2(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(e) {
    const i = this.getClosestVariantNode();
    if (i)
      return (
        i.variantChildren && i.variantChildren.add(e),
        () => i.variantChildren.delete(e)
      );
  }
  addValue(e, i) {
    const s = this.values.get(e);
    i !== s &&
      (s && this.removeValue(e),
      this.bindToMotionValue(e, i),
      this.values.set(e, i),
      (this.latestValues[e] = i.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const i = this.valueSubscriptions.get(e);
    i && (i(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, i) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
        i !== void 0 &&
        ((s = cn(i === null ? void 0 : i, { owner: this })),
        this.addValue(e, s)),
      s
    );
  }
  readValue(e, i) {
    var s;
    let a =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (s = this.getBaseTargetFromProps(this.props, e)) !== null &&
          s !== void 0
        ? s
        : this.readValueFromInstance(this.current, e, this.options);
    return (
      a != null &&
        (typeof a == "string" && (VS(a) || MS(a))
          ? (a = parseFloat(a))
          : !$2(a) && di.test(i) && (a = IS(e, i)),
        this.setBaseTarget(e, it(a) ? a.get() : a)),
      it(a) ? a.get() : a
    );
  }
  setBaseTarget(e, i) {
    this.baseTarget[e] = i;
  }
  getBaseTarget(e) {
    var i;
    const { initial: s } = this.props;
    let a;
    if (typeof s == "string" || typeof s == "object") {
      const c = ld(
        this.props,
        s,
        (i = this.presenceContext) === null || i === void 0 ? void 0 : i.custom
      );
      c && (a = c[e]);
    }
    if (s && a !== void 0) return a;
    const u = this.getBaseTargetFromProps(this.props, e);
    return u !== void 0 && !it(u)
      ? u
      : this.initialValues[e] !== void 0 && a === void 0
      ? void 0
      : this.baseTarget[e];
  }
  on(e, i) {
    return this.events[e] || (this.events[e] = new Sd()), this.events[e].add(i);
  }
  notify(e, ...i) {
    this.events[e] && this.events[e].notify(...i);
  }
}
class gE extends j2 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = kS);
  }
  sortInstanceNodePosition(e, i) {
    return e.compareDocumentPosition(i) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, i) {
    return e.style ? e.style[i] : void 0;
  }
  removeValueFromRenderState(e, { vars: i, style: s }) {
    delete i[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    it(e) &&
      (this.childSubscription = e.on("change", (i) => {
        this.current && (this.current.textContent = `${i}`);
      }));
  }
}
function eL(t) {
  return window.getComputedStyle(t);
}
class tL extends gE {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = eS);
  }
  readValueFromInstance(e, i) {
    if (qi.has(i)) {
      const s = Md(i);
      return (s && s.default) || 0;
    } else {
      const s = eL(e),
        a = ($T(i) ? s.getPropertyValue(i) : s[i]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: i }) {
    return oE(e, i);
  }
  build(e, i, s) {
    ud(e, i, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, i, s) {
    return hd(e, i, s);
  }
}
class nL extends gE {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Xe);
  }
  getBaseTargetFromProps(e, i) {
    return e[i];
  }
  readValueFromInstance(e, i) {
    if (qi.has(i)) {
      const s = Md(i);
      return (s && s.default) || 0;
    }
    return (i = tS.has(i) ? i : id(i)), e.getAttribute(i);
  }
  scrapeMotionValuesFromProps(e, i, s) {
    return oS(e, i, s);
  }
  build(e, i, s) {
    cd(e, i, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(e, i, s, a) {
    nS(e, i, s, a);
  }
  mount(e) {
    (this.isSVGTag = dd(e.tagName)), super.mount(e);
  }
}
const iL = (t, e) =>
    sd(t) ? new nL(e) : new tL(e, { allowProjection: t !== X.Fragment }),
  oL = ID({ ...RU, ...K2, ...P2, ...X2 }, iL),
  Se = Kb(oL);
function yE(t, e) {
  let i;
  const s = () => {
    const { currentTime: a } = e,
      c = (a === null ? 0 : a.value) / 100;
    i !== c && t(c), (i = c);
  };
  return we.update(s, !0), () => hn(s);
}
const Fa = new WeakMap();
let ci;
function sL(t, e) {
  if (e) {
    const { inlineSize: i, blockSize: s } = e[0];
    return { width: i, height: s };
  } else
    return t instanceof SVGElement && "getBBox" in t
      ? t.getBBox()
      : { width: t.offsetWidth, height: t.offsetHeight };
}
function lL({ target: t, contentRect: e, borderBoxSize: i }) {
  var s;
  (s = Fa.get(t)) === null ||
    s === void 0 ||
    s.forEach((a) => {
      a({
        target: t,
        contentSize: e,
        get size() {
          return sL(t, i);
        },
      });
    });
}
function aL(t) {
  t.forEach(lL);
}
function rL() {
  typeof ResizeObserver > "u" || (ci = new ResizeObserver(aL));
}
function uL(t, e) {
  ci || rL();
  const i = hS(t);
  return (
    i.forEach((s) => {
      let a = Fa.get(s);
      a || ((a = new Set()), Fa.set(s, a)),
        a.add(e),
        ci == null || ci.observe(s);
    }),
    () => {
      i.forEach((s) => {
        const a = Fa.get(s);
        a == null || a.delete(e),
          (a != null && a.size) || ci == null || ci.unobserve(s);
      });
    }
  );
}
const Ya = new Set();
let Ws;
function cL() {
  (Ws = () => {
    const t = { width: window.innerWidth, height: window.innerHeight },
      e = { target: window, size: t, contentSize: t };
    Ya.forEach((i) => i(e));
  }),
    window.addEventListener("resize", Ws);
}
function fL(t) {
  return (
    Ya.add(t),
    Ws || cL(),
    () => {
      Ya.delete(t), !Ya.size && Ws && (Ws = void 0);
    }
  );
}
function dL(t, e) {
  return typeof t == "function" ? fL(t) : uL(t, e);
}
const hL = 50,
  P0 = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  pL = () => ({ time: 0, x: P0(), y: P0() }),
  mL = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function H0(t, e, i, s) {
  const a = i[e],
    { length: u, position: c } = mL[e],
    h = a.current,
    g = i.time;
  (a.current = t[`scroll${c}`]),
    (a.scrollLength = t[`scroll${u}`] - t[`client${u}`]),
    (a.offset.length = 0),
    (a.offset[0] = 0),
    (a.offset[1] = a.scrollLength),
    (a.progress = Bi(0, a.scrollLength, a.current));
  const p = s - g;
  a.velocity = p > hL ? 0 : Ed(a.current - h, p);
}
function gL(t, e, i) {
  H0(t, "x", e, i), H0(t, "y", e, i), (e.time = i);
}
function yL(t, e) {
  const i = { x: 0, y: 0 };
  let s = t;
  for (; s && s !== e; )
    if (s instanceof HTMLElement)
      (i.x += s.offsetLeft), (i.y += s.offsetTop), (s = s.offsetParent);
    else if (s.tagName === "svg") {
      const a = s.getBoundingClientRect();
      s = s.parentElement;
      const u = s.getBoundingClientRect();
      (i.x += a.left - u.left), (i.y += a.top - u.top);
    } else if (s instanceof SVGGraphicsElement) {
      const { x: a, y: u } = s.getBBox();
      (i.x += a), (i.y += u);
      let c = null,
        h = s.parentNode;
      for (; !c; ) h.tagName === "svg" && (c = h), (h = s.parentNode);
      s = c;
    } else break;
  return i;
}
const kf = { start: 0, center: 0.5, end: 1 };
function G0(t, e, i = 0) {
  let s = 0;
  if ((t in kf && (t = kf[t]), typeof t == "string")) {
    const a = parseFloat(t);
    t.endsWith("px")
      ? (s = a)
      : t.endsWith("%")
      ? (t = a / 100)
      : t.endsWith("vw")
      ? (s = (a / 100) * document.documentElement.clientWidth)
      : t.endsWith("vh")
      ? (s = (a / 100) * document.documentElement.clientHeight)
      : (t = a);
  }
  return typeof t == "number" && (s = e * t), i + s;
}
const vL = [0, 0];
function TL(t, e, i, s) {
  let a = Array.isArray(t) ? t : vL,
    u = 0,
    c = 0;
  return (
    typeof t == "number"
      ? (a = [t, t])
      : typeof t == "string" &&
        ((t = t.trim()),
        t.includes(" ") ? (a = t.split(" ")) : (a = [t, kf[t] ? t : "0"])),
    (u = G0(a[0], i, s)),
    (c = G0(a[1], e)),
    u - c
  );
}
const SL = {
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  EL = { x: 0, y: 0 };
function _L(t) {
  return "getBBox" in t && t.tagName !== "svg"
    ? t.getBBox()
    : { width: t.clientWidth, height: t.clientHeight };
}
function AL(t, e, i) {
  const { offset: s = SL.All } = i,
    { target: a = t, axis: u = "y" } = i,
    c = u === "y" ? "height" : "width",
    h = a !== t ? yL(a, t) : EL,
    g = a === t ? { width: t.scrollWidth, height: t.scrollHeight } : _L(a),
    p = { width: t.clientWidth, height: t.clientHeight };
  e[u].offset.length = 0;
  let v = !e[u].interpolate;
  const T = s.length;
  for (let S = 0; S < T; S++) {
    const _ = TL(s[S], p[c], g[c], h[u]);
    !v && _ !== e[u].interpolatorOffsets[S] && (v = !0), (e[u].offset[S] = _);
  }
  v &&
    ((e[u].interpolate = JS(e[u].offset, KS(s), { clamp: !1 })),
    (e[u].interpolatorOffsets = [...e[u].offset])),
    (e[u].progress = pn(0, 1, e[u].interpolate(e[u].current)));
}
function CL(t, e = t, i) {
  if (((i.x.targetOffset = 0), (i.y.targetOffset = 0), e !== t)) {
    let s = e;
    for (; s && s !== t; )
      (i.x.targetOffset += s.offsetLeft),
        (i.y.targetOffset += s.offsetTop),
        (s = s.offsetParent);
  }
  (i.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
    (i.y.targetLength = e === t ? e.scrollHeight : e.clientHeight),
    (i.x.containerLength = t.clientWidth),
    (i.y.containerLength = t.clientHeight);
}
function xL(t, e, i, s = {}) {
  return {
    measure: () => CL(t, s.target, i),
    update: (a) => {
      gL(t, i, a), (s.offset || s.target) && AL(t, i, s);
    },
    notify: () => e(i),
  };
}
const Os = new WeakMap(),
  k0 = new WeakMap(),
  af = new WeakMap(),
  B0 = (t) => (t === document.documentElement ? window : t);
function bd(t, { container: e = document.documentElement, ...i } = {}) {
  let s = af.get(e);
  s || ((s = new Set()), af.set(e, s));
  const a = pL(),
    u = xL(e, t, a, i);
  if ((s.add(u), !Os.has(e))) {
    const h = () => {
        for (const S of s) S.measure();
      },
      g = () => {
        for (const S of s) S.update(et.timestamp);
      },
      p = () => {
        for (const S of s) S.notify();
      },
      v = () => {
        we.read(h, !1, !0), we.read(g, !1, !0), we.update(p, !1, !0);
      };
    Os.set(e, v);
    const T = B0(e);
    window.addEventListener("resize", v, { passive: !0 }),
      e !== document.documentElement && k0.set(e, dL(e, v)),
      T.addEventListener("scroll", v, { passive: !0 });
  }
  const c = Os.get(e);
  return (
    we.read(c, !1, !0),
    () => {
      var h;
      hn(c);
      const g = af.get(e);
      if (!g || (g.delete(u), g.size)) return;
      const p = Os.get(e);
      Os.delete(e),
        p &&
          (B0(e).removeEventListener("scroll", p),
          (h = k0.get(e)) === null || h === void 0 || h(),
          window.removeEventListener("resize", p));
    }
  );
}
function ML({ source: t, container: e, axis: i = "y" }) {
  t && (e = t);
  const s = { value: 0 },
    a = bd(
      (u) => {
        s.value = u[i].progress * 100;
      },
      { container: e, axis: i }
    );
  return { currentTime: s, cancel: a };
}
const rf = new Map();
function vE({
  source: t,
  container: e = document.documentElement,
  axis: i = "y",
} = {}) {
  t && (e = t), rf.has(e) || rf.set(e, {});
  const s = rf.get(e);
  return (
    s[i] ||
      (s[i] = aS()
        ? new ScrollTimeline({ source: e, axis: i })
        : ML({ source: e, axis: i })),
    s[i]
  );
}
function RL(t) {
  return t.length === 2;
}
function TE(t) {
  return t && (t.target || t.offset);
}
function wL(t, e) {
  return RL(t) || TE(e)
    ? bd((i) => {
        t(i[e.axis].progress, i);
      }, e)
    : yE(t, vE(e));
}
function NL(t, e) {
  if ((t.flatten(), TE(e)))
    return (
      t.pause(),
      bd((i) => {
        t.time = t.duration * i[e.axis].progress;
      }, e)
    );
  {
    const i = vE(e);
    return t.attachTimeline
      ? t.attachTimeline(
          i,
          (s) => (
            s.pause(),
            yE((a) => {
              s.time = s.duration * a;
            }, i)
          )
        )
      : vt;
  }
}
function bL(t, { axis: e = "y", ...i } = {}) {
  const s = { axis: e, ...i };
  return typeof t == "function" ? wL(t, s) : NL(t, s);
}
function z0(t, e) {
  kb(!!(!e || e.current));
}
const DL = () => ({
  scrollX: cn(0),
  scrollY: cn(0),
  scrollXProgress: cn(0),
  scrollYProgress: cn(0),
});
function IL({ container: t, target: e, layoutEffect: i = !0, ...s } = {}) {
  const a = ol(DL);
  return (
    (i ? pr : X.useEffect)(
      () => (
        z0("target", e),
        z0("container", t),
        bL(
          (c, { x: h, y: g }) => {
            a.scrollX.set(h.current),
              a.scrollXProgress.set(h.progress),
              a.scrollY.set(g.current),
              a.scrollYProgress.set(g.progress);
          },
          {
            ...s,
            container: (t == null ? void 0 : t.current) || void 0,
            target: (e == null ? void 0 : e.current) || void 0,
          }
        )
      ),
      [t, e, JSON.stringify(s.offset)]
    ),
    a
  );
}
function UL(t) {
  const e = ol(() => cn(t)),
    { isStatic: i } = X.useContext(sl);
  if (i) {
    const [, s] = X.useState(t);
    X.useEffect(() => e.on("change", s), []);
  }
  return e;
}
function q0(t) {
  return typeof t == "number" ? t : parseFloat(t);
}
function LL(t, e = {}) {
  const { isStatic: i } = X.useContext(sl),
    s = X.useRef(null),
    a = UL(it(t) ? q0(t.get()) : t),
    u = X.useRef(a.get()),
    c = X.useRef(() => {}),
    h = () => {
      const p = s.current;
      p && p.time === 0 && p.sample(et.delta),
        g(),
        (s.current = eU({
          keyframes: [a.get(), u.current],
          velocity: a.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...e,
          onUpdate: c.current,
        }));
    },
    g = () => {
      s.current && s.current.stop();
    };
  return (
    X.useInsertionEffect(
      () =>
        a.attach(
          (p, v) =>
            i
              ? v(p)
              : ((u.current = p), (c.current = v), we.update(h), a.get()),
          g
        ),
      [JSON.stringify(e)]
    ),
    pr(() => {
      if (it(t)) return t.on("change", (p) => a.set(q0(p)));
    }, [a]),
    a
  );
}
const sr = "0xComingSoon",
  Bf = "https://x.com/testicleEth",
  SE = "https://x.com/tisgambino",
  cl = "./logo.jpg",
  il = `https://pancakeswap.finance/swap?chain=bsc&chainOut=bsc&inputCurrency=BNB&outputCurrency=${sr}&exactAmount=&exactField=INPUT`,
  O0 = "#fbbf24",
  EE = ({ size: t = 24, className: e = "" }) =>
    I.jsx("svg", {
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: e,
      children: I.jsx("path", {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z",
      }),
    }),
  fl = ({ children: t, className: e, id: i }) =>
    I.jsx(Se.section, {
      id: i,
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0, margin: "-100px" },
      transition: { duration: 0.8, ease: "easeOut" },
      className: e,
      children: t,
    }),
  VL = () =>
    I.jsx("div", {
      className:
        "fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10",
      children: [...Array(6)].map((t, e) =>
        I.jsx(
          Se.img,
          {
            src: cl,
            className: "absolute w-32 h-32 md:w-64 md:h-64",
            initial: {
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              rotate: Math.random() * 360,
            },
            animate: {
              x: [null, Math.random() * 100 + "%"],
              y: [null, Math.random() * 100 + "%"],
              rotate: [null, Math.random() * 360],
            },
            transition: {
              duration: Math.random() * 20 + 20,
              repeat: 1 / 0,
              repeatType: "reverse",
              ease: "linear",
            },
          },
          e
        )
      ),
    }),
  PL = () => {
    const t = X.useMemo(
      () =>
        Array.from({ length: 60 }).map((e, i) => ({
          id: i,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 8 + 4}s`,
          animationDelay: `${Math.random() * 10}s`,
          opacity: Math.random() * 0.7 + 0.3,
          size: `${Math.random() * 10 + 5}px`,
        })),
      []
    );
    return I.jsx("div", {
      className: "fixed inset-0 pointer-events-none z-[60] overflow-hidden",
      children: t.map((e) =>
        I.jsx(
          "div",
          {
            className: "absolute text-yellow-400 animate-fall",
            style: {
              left: e.left,
              top: "-20px",
              opacity: e.opacity,
              fontSize: e.size,
              animationDuration: e.animationDuration,
              animationDelay: e.animationDelay,
            },
            children: "●",
          },
          e.id
        )
      ),
    });
  },
  HL = () => {
    const t = X.useRef(null),
      e = X.useRef(null),
      [i, s] = X.useState(!1),
      [a, u] = X.useState("pen");
    X.useEffect(() => {
      const T = t.current;
      if (!T) return;
      const S = T.getBoundingClientRect();
      (T.width = S.width * 2),
        (T.height = S.height * 2),
        (T.style.width = `${S.width}px`),
        (T.style.height = `${S.height}px`);
      const _ = T.getContext("2d");
      _ &&
        (_.scale(2, 2),
        (_.lineCap = "round"),
        (_.strokeStyle = O0),
        (_.lineWidth = 5),
        (_.fillStyle = "black"),
        _.fillRect(0, 0, T.width, T.height),
        (e.current = _));
    }, []);
    const c = (T) => {
        const S = t.current;
        if (!S || !e.current) return;
        const _ = S.getBoundingClientRect();
        let C, R;
        "touches" in T
          ? ((C = T.touches[0].clientX - _.left),
            (R = T.touches[0].clientY - _.top))
          : ((C = T.nativeEvent.offsetX), (R = T.nativeEvent.offsetY)),
          e.current.beginPath(),
          e.current.moveTo(C, R),
          s(!0);
      },
      h = (T) => {
        if (!i || !e.current || !t.current) return;
        const S = t.current.getBoundingClientRect();
        let _, C;
        "touches" in T
          ? ((_ = T.touches[0].clientX - S.left),
            (C = T.touches[0].clientY - S.top),
            T.cancelable && T.preventDefault())
          : ((_ = T.nativeEvent.offsetX), (C = T.nativeEvent.offsetY)),
          (e.current.strokeStyle = a === "pen" ? O0 : "black"),
          (e.current.lineWidth = a === "pen" ? 5 : 20),
          e.current.lineTo(_, C),
          e.current.stroke();
      },
      g = () => {
        e.current && e.current.closePath(), s(!1);
      },
      p = () => {
        const T = t.current,
          S = e.current;
        !T ||
          !S ||
          ((S.fillStyle = "black"), S.fillRect(0, 0, T.width, T.height));
      },
      v = () => {
        const T = t.current;
        if (!T) return;
        const S = document.createElement("a");
        (S.download = "my-QQ-character.png"),
          (S.href = T.toDataURL()),
          S.click();
      };
    return I.jsx(fl, {
      id: "draw",
      className: "py-24 px-6 bg-black relative",
      children: I.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [
          I.jsx("h2", {
            className:
              "text-5xl md:text-6xl text-yellow-400 mb-4 text-center yellow-glow uppercase",
            children: "Draw your own QQ character",
          }),
          I.jsx("p", {
            className:
              "text-center text-xl mb-12 opacity-80 uppercase tracking-widest italic",
            children: "Channel your inner Dev",
          }),
          I.jsx("div", {
            className:
              "bg-yellow-900/10 border-4 border-yellow-400 rounded-3xl p-4 md:p-8 shadow-[10px_10px_0px_rgba(251,191,36,0.1)]",
            children: I.jsxs("div", {
              className: "flex flex-col gap-6",
              children: [
                I.jsxs("div", {
                  className: "flex justify-center gap-4",
                  children: [
                    I.jsx(Se.button, {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: () => u("pen"),
                      className: `p-4 rounded-xl border-2 transition-all ${
                        a === "pen"
                          ? "bg-yellow-400 text-black border-black"
                          : "bg-black text-yellow-400 border-yellow-400"
                      }`,
                      children: I.jsx(mC, { size: 24 }),
                    }),
                    I.jsx(Se.button, {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: () => u("eraser"),
                      className: `p-4 rounded-xl border-2 transition-all ${
                        a === "eraser"
                          ? "bg-yellow-400 text-black border-black"
                          : "bg-black text-yellow-400 border-yellow-400"
                      }`,
                      children: I.jsx(fC, { size: 24 }),
                    }),
                    I.jsx(Se.button, {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: p,
                      className:
                        "p-4 rounded-xl border-2 bg-black text-red-500 border-red-500 hover:bg-red-500 hover:text-black transition-all",
                      children: I.jsx(SC, { size: 24 }),
                    }),
                    I.jsx(Se.button, {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: v,
                      className:
                        "p-4 rounded-xl border-2 bg-black text-green-500 border-green-500 hover:bg-green-500 hover:text-black transition-all",
                      children: I.jsx(J0, { size: 24 }),
                    }),
                  ],
                }),
                I.jsx("div", {
                  className:
                    "relative bg-black rounded-2xl overflow-hidden border-2 border-yellow-400/30 cursor-crosshair touch-none",
                  children: I.jsx("canvas", {
                    ref: t,
                    onMouseDown: c,
                    onMouseMove: h,
                    onMouseUp: g,
                    onMouseLeave: g,
                    onTouchStart: c,
                    onTouchMove: h,
                    onTouchEnd: g,
                    className: "w-full h-[400px] md:h-[500px]",
                  }),
                }),
                I.jsx("p", {
                  className:
                    "text-center text-yellow-400/40 text-sm uppercase tracking-widest font-bold",
                  children: "Tip: Draw a circle with two dots and a stick body",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  GL = () => {
    const [t, e] = X.useState(""),
      [i, s] = X.useState(!1),
      [a, u] = X.useState(null),
      [c, h] = X.useState(null),
      [g, p] = X.useState(null);
    X.useEffect(() => {
      (async () => {
        try {
          const R = await (await fetch(cl)).blob(),
            M = new FileReader();
          (M.onloadend = () => {
            const b = M.result.split(",")[1];
            p(b);
          }),
            M.readAsDataURL(R);
        } catch (C) {
          console.error("Failed to load logo for generator", C);
        }
      })();
    }, []);
    const v = [
        "QQ skiing down a mountain of yellow snow",
        "QQ stuck inside a giant yellow snowball",
        "QQ ice fishing and catching a golden coin",
        "QQ building a snowman that looks exactly like him",
        "QQ sledding on a golden coin through a blizzard",
        "QQ wearing a tiny yellow winter hat and scarf",
        "QQ eating a yellow popsicle in a snowstorm",
        "QQ ice skating on a vertical trading chart",
        "QQ fighting a blizzard with a tiny yellow stick",
        "QQ waiting for the bus in a heavy yellow snowfall",
      ],
      T = async (_) => {
        var R, M, b;
        const C = _ || t;
        if (C.trim()) {
          s(!0), h(null);
          try {
            const k = new Lb({
                apiKey: "AIzaSyDCs8Zws_rtMikc5Ajzo989KBao5vBQCSA",
              }),
              P = {
                parts: [
                  ...(g
                    ? [{ inlineData: { data: g, mimeType: "image/jpeg" } }]
                    : []),
                  {
                    text: `Generate a funny 2D meme image. 
            STRICT VISUAL RULES:
            1. BACKGROUND: Pure solid pitch black (#000000).
            2. CHARACTER (Named "QQ"):
               - HEAD: A thick yellow hand-drawn circular outline. The interior of the head MUST be pitch black.
               - EYES: Two small solid yellow dots inside the black head (exactly like the provided logo).
               - BODY: A simple hand-drawn yellow stick-figure body (thin yellow lines for torso, arms, and legs).
            3. STYLE: Hand-drawn, minimalist, simple 2D scribble/meme aesthetic.
            4. SCENE: ${C}.
            5. COLOR PALETTE: ONLY Black (#000000) and Yellow (#fbbf24). No other colors unless absolutely necessary for the joke (and even then, prefer yellow).
            Make the drawing look like a fast digital sketch.`,
                  },
                ],
              },
              Y = await k.models.generateContent({
                model: "gemini-2.5-flash-image",
                contents: P,
              });
            let q = !1;
            const Q =
              ((b =
                (M = (R = Y.candidates) == null ? void 0 : R[0]) == null
                  ? void 0
                  : M.content) == null
                ? void 0
                : b.parts) || [];
            for (const J of Q)
              if (J.inlineData) {
                u(`data:image/png;base64,${J.inlineData.data}`), (q = !0);
                break;
              }
            q || h("The lab exploded! Try again.");
          } catch (k) {
            console.error(k), h("Failed to cook the meme. Try again!");
          } finally {
            s(!1);
          }
        }
      },
      S = () => {
        const _ = v[Math.floor(Math.random() * v.length)];
        e(_), T(_);
      };
    return I.jsx(fl, {
      id: "meme-lab",
      className: "py-24 px-6 bg-black relative",
      children: I.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [
          I.jsx("h2", {
            className:
              "text-5xl md:text-6xl text-yellow-400 mb-4 text-center yellow-glow uppercase",
            children: "Meme Lab",
          }),
          I.jsx("p", {
            className:
              "text-center text-xl mb-12 opacity-80 uppercase tracking-widest",
            children: "Black Face • Yellow Outline • Yellow Body",
          }),
          I.jsx("div", {
            className:
              "bg-yellow-900/10 border-4 border-yellow-400 rounded-3xl p-6 md:p-10 shadow-[10px_10px_0px_rgba(251,191,36,0.2)]",
            children: I.jsxs("div", {
              className: "flex flex-col gap-6",
              children: [
                I.jsxs("div", {
                  className: "relative",
                  children: [
                    I.jsx("textarea", {
                      value: t,
                      onChange: (_) => e(_.target.value),
                      placeholder:
                        "Describe your meme idea (e.g. QQ in a blizzard...)",
                      className:
                        "w-full bg-black border-2 border-yellow-400/50 rounded-xl p-6 text-xl text-yellow-100 placeholder:text-yellow-400/30 focus:border-yellow-400 outline-none transition-all resize-none h-32",
                    }),
                    I.jsx(Se.button, {
                      whileHover: { scale: 1.1, rotate: 180 },
                      whileTap: { scale: 0.9 },
                      onClick: () => e(v[Math.floor(Math.random() * v.length)]),
                      className:
                        "absolute right-4 bottom-4 text-yellow-400 hover:text-white transition-colors p-2",
                      title: "Shuffle Prompt",
                      children: I.jsx(gC, { size: 24 }),
                    }),
                  ],
                }),
                I.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [
                    I.jsxs(Se.button, {
                      whileHover: { scale: 1.02, backgroundColor: "#fef08a" },
                      whileTap: { scale: 0.98 },
                      onClick: () => T(),
                      disabled: i || !t.trim(),
                      className:
                        "bg-yellow-400 text-black font-black text-2xl py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[6px_6px_0px_#78350f]",
                      children: [
                        i
                          ? I.jsx(hC, { className: "animate-spin", size: 28 })
                          : I.jsx(_C, { size: 28 }),
                        "COOK THE MEME",
                      ],
                    }),
                    I.jsxs(Se.button, {
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      onClick: S,
                      disabled: i,
                      className:
                        "bg-black text-yellow-400 border-4 border-yellow-400 font-black text-2xl py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 hover:text-black transition-all disabled:opacity-50 shadow-[6px_6px_0px_rgba(251,191,36,0.2)]",
                      children: [I.jsx(TC, { size: 28 }), "RANDOM MEME"],
                    }),
                  ],
                }),
                c &&
                  I.jsx("p", {
                    className:
                      "text-red-500 text-center font-bold text-lg uppercase",
                    children: c,
                  }),
                I.jsx(BT, {
                  children:
                    a &&
                    I.jsxs(Se.div, {
                      initial: { opacity: 0, scale: 0.8, rotate: -5 },
                      animate: { opacity: 1, scale: 1, rotate: 0 },
                      exit: { opacity: 0, scale: 0.8 },
                      className: "mt-8",
                      children: [
                        I.jsxs("div", {
                          className:
                            "relative group rounded-2xl overflow-hidden border-4 border-yellow-400 bg-black aspect-square max-w-md mx-auto shadow-[15px_15px_0px_rgba(251,191,36,0.1)]",
                          children: [
                            I.jsx("img", {
                              src: a,
                              alt: "Generated Meme",
                              className: "w-full h-full object-cover",
                            }),
                            I.jsx(Se.a, {
                              whileHover: { scale: 1.1 },
                              whileTap: { scale: 0.9 },
                              href: a,
                              download: "QQ-meme.png",
                              className:
                                "absolute top-4 right-4 bg-yellow-400 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                              children: I.jsx(J0, { size: 24 }),
                            }),
                          ],
                        }),
                        I.jsx("p", {
                          className:
                            "text-center text-yellow-400/60 mt-4 text-lg uppercase tracking-tighter italic",
                          children: "Hand-drawn Stick Masterpiece",
                        }),
                      ],
                    }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  kL = () => {
    const [t, e] = X.useState(!1),
      { scrollYProgress: i } = IL(),
      s = LL(i, { stiffness: 100, damping: 30, restDelta: 0.001 });
    return I.jsxs("nav", {
      className:
        "fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-2 border-yellow-500/30 py-4 px-6",
      children: [
        I.jsx(Se.div, {
          className:
            "absolute bottom-[-2px] left-0 right-0 h-1 bg-yellow-400 origin-left",
          style: { scaleX: s },
        }),
        I.jsxs("div", {
          className: "max-w-7xl mx-auto flex justify-between items-center",
          children: [
            I.jsxs(Se.div, {
              className: "flex items-center gap-4 cursor-pointer",
              whileHover: { scale: 1.05 },
              onClick: () => window.scrollTo(0, 0),
              children: [
                I.jsx("img", {
                  src: cl,
                  alt: "logo",
                  className: "w-14 h-14 object-contain",
                }),
                I.jsx("span", {
                  className:
                    "text-3xl tracking-tighter text-yellow-400 yellow-glow uppercase",
                  children: "QQ",
                }),
              ],
            }),
            I.jsxs("div", {
              className:
                "hidden md:flex items-center gap-10 font-bold uppercase text-lg",
              children: [
                ["About", "Meme-Lab", "Draw", "How-to-Buy", "Chart"].map((a) =>
                  I.jsxs(
                    Se.a,
                    {
                      href: `#${a.toLowerCase()}`,
                      className:
                        "hover:text-white transition-colors relative group",
                      whileHover: { y: -2 },
                      children: [
                        a.replace("-", " "),
                        I.jsx("span", {
                          className:
                            "absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full",
                        }),
                      ],
                    },
                    a
                  )
                ),
                I.jsxs("a", {
                  href: Bf,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "hover:text-white transition-colors flex items-center gap-2",
                  children: ["Community ", I.jsx(EE, { size: 18 })],
                }),
                I.jsx(Se.a, {
                  whileHover: { scale: 1.05, rotate: 2 },
                  whileTap: { scale: 0.95 },
                  href: il,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition-all shadow-[4px_4px_0px_#78350f]",
                  children: "BUY NOW",
                }),
              ],
            }),
            I.jsx("button", {
              className: "md:hidden text-yellow-400",
              onClick: () => e(!t),
              children: t ? I.jsx(AC, { size: 32 }) : I.jsx(pC, { size: 32 }),
            }),
          ],
        }),
        I.jsx(BT, {
          children:
            t &&
            I.jsxs(Se.div, {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              className:
                "md:hidden absolute top-full left-0 right-0 bg-black border-b-2 border-yellow-500/30 p-8 flex flex-col gap-8 text-2xl text-center overflow-hidden",
              children: [
                ["About", "Meme-Lab", "Draw", "How-to-Buy", "Chart"].map((a) =>
                  I.jsx(
                    "a",
                    {
                      href: `#${a.toLowerCase()}`,
                      onClick: () => e(!1),
                      children: a.replace("-", " "),
                    },
                    a
                  )
                ),
                I.jsx("a", {
                  href: Bf,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Community",
                }),
                I.jsx("a", {
                  href: il,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "bg-yellow-400 text-black py-4 rounded-lg shadow-[4px_4px_0px_#78350f]",
                  children: "BUY NOW",
                }),
              ],
            }),
        }),
      ],
    });
  },
  BL = () => {
    const [t, e] = X.useState(!1),
      i = () => {
        navigator.clipboard.writeText(sr), e(!0), setTimeout(() => e(!1), 2e3);
      };
    return I.jsxs("section", {
      className:
        "pt-40 pb-24 px-6 relative overflow-hidden bg-black flex flex-col items-center",
      children: [
        I.jsxs("div", {
          className: "max-w-4xl mx-auto text-center z-10",
          children: [
            I.jsxs(Se.div, {
              className: "mb-10 inline-block relative",
              initial: { scale: 0.5, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { type: "spring", stiffness: 100, damping: 20 },
              children: [
                I.jsx(Se.img, {
                  animate: { y: [0, -20, 0], rotate: [0, 5, 0, -5, 0] },
                  transition: { duration: 6, repeat: 1 / 0, ease: "easeInOut" },
                  src: cl,
                  alt: "QQ Hero",
                  className: "w-56 h-56 md:w-80 md:h-80 object-contain mx-auto",
                }),
                I.jsx(Se.div, {
                  initial: { rotate: 12, scale: 0 },
                  animate: { scale: 1 },
                  transition: { delay: 0.5 },
                  className:
                    "absolute -bottom-4 -right-4 bg-black border-2 border-yellow-400 text-yellow-400 px-4 py-2 rotate-12 text-xl font-bold animate-pulse uppercase",
                  children: "$QQ",
                }),
              ],
            }),
            I.jsx(Se.h1, {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.2 },
              className:
                "text-7xl md:text-[10rem] mb-2 text-yellow-400 tracking-tighter yellow-glow uppercase leading-none",
              children: "QQ",
            }),
            I.jsx(Se.p, {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.4 },
              className:
                "text-3xl md:text-5xl font-bold mb-12 tracking-widest uppercase opacity-90",
              children: "$QQ",
            }),
            I.jsxs(Se.div, {
              initial: { scale: 0.9, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { delay: 0.6 },
              className: "flex flex-col items-center gap-8",
              children: [
                I.jsxs("div", {
                  className:
                    "bg-yellow-400 text-black border-4 border-black rounded-xl p-4 w-full max-w-xl flex items-center justify-between gap-4 shadow-[6px_6px_0px_rgba(251,191,36,0.4)]",
                  children: [
                    I.jsx("code", {
                      className:
                        "text-sm md:text-xl font-bold break-all leading-tight",
                      children: sr,
                    }),
                    I.jsx(Se.button, {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: i,
                      className:
                        "bg-black text-yellow-400 p-3 rounded-lg shrink-0",
                      children: t
                        ? I.jsx(aC, { size: 24 })
                        : I.jsx(cC, { size: 24 }),
                    }),
                  ],
                }),
                I.jsx("div", {
                  className: "flex flex-wrap justify-center gap-6",
                  children: I.jsx(Se.a, {
                    whileHover: { scale: 1.05, y: -5 },
                    whileTap: { scale: 0.95 },
                    href: il,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "flex items-center gap-3 bg-black border-4 border-yellow-400 px-10 py-5 rounded-xl text-2xl hover:bg-yellow-400 hover:text-black transition-all shadow-[6px_6px_0px_rgba(251,191,36,0.3)]",
                    children: "🥞 BUY ON PANCAKESWAP",
                  }),
                }),
              ],
            }),
          ],
        }),
        I.jsx(Se.div, {
          animate: { y: [0, 10, 0] },
          transition: { repeat: 1 / 0, duration: 2 },
          className: "mt-20 text-yellow-400/30",
          children: I.jsx(rC, { size: 48 }),
        }),
      ],
    });
  },
  zL = () =>
    I.jsx(fl, {
      id: "about",
      className: "py-24 px-6 bg-yellow-400/5 relative",
      children: I.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [
          I.jsx("h2", {
            className:
              "text-5xl md:text-6xl text-yellow-400 mb-12 text-center yellow-glow uppercase",
            children: "About $QQ",
          }),
          I.jsxs(Se.div, {
            whileHover: { rotate: 1, scale: 1.01 },
            className:
              "bg-black border-4 border-yellow-400 p-10 md:p-16 rounded-3xl shadow-[10px_10px_0px_#451a03] relative overflow-hidden group",
            children: [
              I.jsxs("div", {
                className: "space-y-8 text-2xl md:text-3xl leading-snug",
                children: [
                  I.jsxs("p", {
                    children: [
                      I.jsx("span", {
                        className: "text-yellow-400 font-black",
                        children: "QQ",
                      }),
                      ' has become slang for "balls" on the internet.',
                    ],
                  }),
                  I.jsx("p", {
                    children:
                      'Lots of people in the comment section use "uninstall QQ" to play memes.',
                  }),
                  I.jsxs("p", {
                    children: [
                      'Equivalent to "Fu," guys have ',
                      I.jsx("span", {
                        className: "text-yellow-400 font-black",
                        children: "QQ",
                      }),
                      ", girls have Fu.",
                    ],
                  }),
                  I.jsx(Se.p, {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { delay: 0.5 },
                    className:
                      "text-yellow-400 text-3xl md:text-4xl pt-6 italic border-t-2 border-yellow-400/20",
                    children:
                      "QQ was made specifically for the QQQ bottom pool.",
                  }),
                ],
              }),
              I.jsx(Se.div, {
                className:
                  "absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-yellow-400/5 to-transparent pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity",
              }),
            ],
          }),
        ],
      }),
    }),
  qL = () => {
    const t = [
      {
        title: "CREATE WALLET",
        desc: "Download Metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io. Then switch your network to BNB Smart Chain.",
        icon: I.jsx(EC, { size: 32 }),
      },
      {
        title: "GET SOME BNB",
        desc: "Have BNB in your wallet to swap for $QQ. If you don’t have any BNB, you can transfer from another wallet, or buy on another exchange and send it to your wallet on BNB Smart Chain.",
        icon: I.jsx(uC, { size: 32 }),
      },
      {
        title: "GO TO PANCAKESWAP",
        desc: "Go to pancakeswap.finance and search for the contract address or click the button on this site to go directly to the $QQ swap page.",
        icon: I.jsx(yC, { size: 32 }),
      },
      {
        title: "SWAP BNB FOR $QQ",
        desc: "Paste the CA into PancakeSwap and confirm the swap. We have zero taxes so you don’t need to worry about buying with a specific slippage, although you may need to increase during times of volatility.",
        icon: I.jsx(vC, { size: 32 }),
      },
    ];
    return I.jsx(fl, {
      id: "how-to-buy",
      className: "py-24 px-6 bg-black relative",
      children: I.jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [
          I.jsx("h2", {
            className:
              "text-5xl md:text-7xl text-yellow-400 mb-16 text-center yellow-glow uppercase",
            children: "How to Buy",
          }),
          I.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
            children: t.map((e, i) =>
              I.jsxs(
                Se.div,
                {
                  initial: { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  whileHover: {
                    y: -10,
                    boxShadow: "0px 20px 40px rgba(251, 191, 36, 0.1)",
                  },
                  transition: { delay: i * 0.1, duration: 0.5 },
                  className:
                    "bg-black border-4 border-yellow-400 p-8 rounded-3xl shadow-[8px_8px_0px_#451a03] flex flex-col items-start gap-4 h-full",
                  children: [
                    I.jsx("div", {
                      className:
                        "bg-yellow-400 text-black p-4 rounded-xl flex items-center justify-center mb-2",
                      children: e.icon,
                    }),
                    I.jsxs("h3", {
                      className:
                        "text-3xl font-black text-yellow-400 leading-tight",
                      children: ["STEP ", i + 1, ": ", e.title],
                    }),
                    I.jsx("p", {
                      className: "text-xl opacity-80 font-bold leading-relaxed",
                      children: e.desc,
                    }),
                  ],
                },
                i
              )
            ),
          }),
          I.jsx("div", {
            className: "mt-16 text-center",
            children: I.jsx(Se.a, {
              whileHover: { scale: 1.1, rotate: -2 },
              whileTap: { scale: 0.9 },
              href: il,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "inline-block bg-yellow-400 text-black font-black text-3xl px-12 py-6 rounded-2xl shadow-[10px_10px_0px_#451a03]",
              children: "BUY $QQ ON PANCAKESWAP",
            }),
          }),
        ],
      }),
    });
  },
  OL = () =>
    I.jsx(fl, {
      id: "chart",
      className: "py-24 px-6 relative",
      children: I.jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [
          I.jsx("h2", {
            className:
              "text-5xl md:text-6xl text-yellow-400 mb-12 text-center yellow-glow uppercase",
            children: "$QQ Live Chart",
          }),
          I.jsx(Se.div, {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            className:
              "w-full bg-black border-4 border-yellow-400 rounded-3xl overflow-hidden shadow-[10px_10px_0px_#451a03]",
            children: I.jsx("iframe", {
              src: `https://dexscreener.com/bsc/${sr}?embed=1&theme=dark&trades=0&info=0`,
              style: { width: "100%", height: "600px", border: "none" },
              title: "Dexscreener Chart",
            }),
          }),
        ],
      }),
    }),
  FL = () =>
    I.jsxs("footer", {
      className:
        "py-20 border-t-4 border-yellow-500/20 px-6 bg-black z-10 relative",
      children: [
        I.jsxs("div", {
          className:
            "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12",
          children: [
            I.jsxs("div", {
              className: "flex items-center gap-6",
              children: [
                I.jsx(Se.img, {
                  whileHover: { rotate: 360 },
                  transition: { duration: 1 },
                  src: cl,
                  alt: "logo",
                  className: "w-16 h-16 object-contain",
                }),
                I.jsxs("div", {
                  className: "text-left",
                  children: [
                    I.jsx("h3", {
                      className:
                        "text-4xl text-yellow-400 leading-none uppercase",
                      children: "QQ",
                    }),
                    I.jsx("p", {
                      className:
                        "text-lg font-bold opacity-60 uppercase tracking-tighter",
                      children: "by $snowball dev",
                    }),
                  ],
                }),
              ],
            }),
            I.jsxs("div", {
              className: "text-center md:text-right",
              children: [
                I.jsxs("div", {
                  className: "flex justify-center md:justify-end gap-10",
                  children: [
                    I.jsx(Se.a, {
                      whileHover: { y: -5 },
                      href: Bf,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-yellow-400",
                      children: I.jsx(EE, { size: 40 }),
                    }),
                    I.jsx(Se.a, {
                      whileHover: { y: -5 },
                      href: il,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-yellow-400",
                      children: I.jsx(dC, { size: 40 }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        I.jsx("div", {
          className:
            "mt-16 text-center text-lg opacity-40 italic uppercase tracking-widest",
          children: "© 2025 $QQ. JUST QQ. NO FINANCIAL ADVICE.",
        }),
      ],
    }),
  YL = () =>
    I.jsxs("div", {
      className:
        "min-h-screen selection:bg-yellow-400 selection:text-black bg-black",
      children: [
        I.jsx(VL, {}),
        I.jsx(PL, {}),
        I.jsx(kL, {}),
        I.jsxs("main", {
          children: [
            I.jsx(BL, {}),
            I.jsx(zL, {}),
            I.jsx(GL, {}),
            I.jsx(HL, {}),
            I.jsx(qL, {}),
            I.jsx(OL, {}),
          ],
        }),
        I.jsx("div", {
          className:
            "py-12 bg-yellow-400 text-black flex overflow-hidden whitespace-nowrap font-black text-5xl uppercase select-none border-y-4 border-black relative z-10",
          children: I.jsx("div", {
            className: "flex animate-marquee gap-12",
            children: [...Array(10)].map((t, e) =>
              I.jsx(
                "span",
                {
                  children:
                    "$QQ ON BNB • PANCAKESWAP • MILLIONS SOON • ",
                },
                e
              )
            ),
          }),
        }),
        I.jsx(FL, {}),
        I.jsx("style", {
          children: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); }
          100% { transform: translateY(110vh) rotate(360deg); }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `,
        }),
      ],
    }),
  _E = document.getElementById("root");
if (!_E) throw new Error("Could not find root element to mount to");
const JL = iC.createRoot(_E);
JL.render(I.jsx(QA.StrictMode, { children: I.jsx(YL, {}) }));
