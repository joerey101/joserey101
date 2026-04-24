import { jsxs as n, jsx as t, Fragment as D } from "react/jsx-runtime";
import { useState as r } from "react";
const N = {
  pixel7pro: { name: "Pixel 7 Pro", width: 412, height: 915, dpr: 3 },
  pixel7: { name: "Pixel 7", width: 412, height: 915, dpr: 2.625 },
  iphone15: { name: "iPhone 15", width: 393, height: 852, dpr: 3 },
  iphone15pm: { name: "iPhone 15 Pro Max", width: 430, height: 932, dpr: 3 },
  iphoneSE: { name: "iPhone SE", width: 375, height: 667, dpr: 2 },
  ipadMini: { name: "iPad Mini", width: 744, height: 1133, dpr: 2 },
  ipadPro: { name: "iPad Pro 11", width: 834, height: 1194, dpr: 2 },
  desktop: { name: "Desktop", width: 1440, height: 900, dpr: 1 }
}, g = ({
  deviceId: l,
  url: o,
  landscape: c = !1,
  showDimensions: h = !0
}) => {
  const a = N[l], i = c ? a.height : a.width, d = c ? a.width : a.height;
  return /* @__PURE__ */ n("div", { className: "dv-frame-wrapper", children: [
    /* @__PURE__ */ n("div", { className: "dv-frame-header", children: [
      /* @__PURE__ */ t("span", { children: a.name }),
      /* @__PURE__ */ n("span", { children: [
        i,
        "×",
        d
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "dv-frame", style: { width: i, height: d }, children: /* @__PURE__ */ t(
      "iframe",
      {
        src: o,
        className: "dv-iframe",
        width: i,
        height: d,
        title: a.name
      }
    ) }),
    h && /* @__PURE__ */ n("div", { className: "dv-frame-footer", children: [
      "DPR: ",
      a.dpr,
      "x"
    ] })
  ] });
}, R = ({
  url: l = "/",
  devices: o = ["pixel7pro", "iphone15", "ipadMini"],
  layout: c = "grid",
  defaultDevice: h = "pixel7pro",
  showDimensions: a = !0
}) => {
  const [i, d] = r(l), [p, b] = r(l), [s, f] = r(c), [v, w] = r(h), [m, P] = r(!1), [x, y] = r(0), u = () => {
    y((e) => e + 1);
  }, S = (e) => {
    e.preventDefault(), b(i), u();
  }, C = () => {
    P(!m);
  };
  return /* @__PURE__ */ n("div", { className: "dv-container", children: [
    /* @__PURE__ */ n("header", { className: "dv-toolbar", children: [
      /* @__PURE__ */ n("form", { onSubmit: S, className: "dv-toolbar-section", children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            className: "dv-input",
            value: i,
            onChange: (e) => d(e.target.value),
            placeholder: "Enter URL..."
          }
        ),
        /* @__PURE__ */ t("button", { type: "submit", className: "dv-button", children: "Go" })
      ] }),
      /* @__PURE__ */ t("div", { className: "dv-toolbar-section", children: /* @__PURE__ */ t("button", { onClick: u, className: "dv-button dv-button-secondary", children: "Reload All" }) }),
      /* @__PURE__ */ n("div", { className: "dv-toolbar-section", style: { marginLeft: "auto" }, children: [
        /* @__PURE__ */ n(
          "select",
          {
            className: "dv-select",
            value: s,
            onChange: (e) => f(e.target.value),
            children: [
              /* @__PURE__ */ t("option", { value: "grid", children: "Grid Layout" }),
              /* @__PURE__ */ t("option", { value: "single", children: "Single View" })
            ]
          }
        ),
        s === "single" && /* @__PURE__ */ n(D, { children: [
          /* @__PURE__ */ t(
            "select",
            {
              className: "dv-select",
              value: v,
              onChange: (e) => w(e.target.value),
              children: o.map((e) => /* @__PURE__ */ t("option", { value: e, children: N[e].name }, e))
            }
          ),
          /* @__PURE__ */ t("button", { onClick: C, className: "dv-button dv-button-secondary", children: m ? "Portrait" : "Landscape" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("main", { className: `dv-content dv-content-${s}`, children: s === "grid" ? o.map((e) => /* @__PURE__ */ t(
      g,
      {
        deviceId: e,
        url: p,
        showDimensions: a
      },
      e
    )) : /* @__PURE__ */ t(
      g,
      {
        deviceId: v,
        url: p,
        landscape: m,
        showDimensions: a
      }
    ) }, x)
  ] });
};
export {
  N as DEVICES,
  g as DeviceFrame,
  R as DeviceViewer
};
