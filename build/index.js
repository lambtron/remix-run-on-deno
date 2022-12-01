var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3, handleRequest = (request, responseStatusCode, responseHeaders, remixContext) => (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) : handleBrowserRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
), entry_server_default = handleRequest, handleBotRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }),
    {
      onAllReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
}), handleBrowserRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }),
    {
      onShellReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
});

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), React = __toESM(require("react"));

// app/styles/demos/remix.css
var remix_default = "/build/_assets/remix-FLOSM2JR.css";

// app/styles/global.css
var global_default = "/build/_assets/global-YF33H754.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-23TONZJQ.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: global_default },
  {
    rel: "stylesheet",
    href: dark_default,
    media: "(prefers-color-scheme: dark)"
  },
  { rel: "stylesheet", href: remix_default }
], meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {})
    })
  });
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", {
        children: [
          title ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("title", {
            children: title
          }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RouteChangeAnnouncement, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
        ]
      })
    ]
  });
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
    className: "remix-app",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("header", {
        className: "remix-app__header",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
          className: "container remix-app__header-content",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, {
              to: "/",
              title: "Remix",
              className: "remix-app__header-home-link",
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RemixLogo, {})
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", {
              "aria-label": "Main navigation",
              className: "remix-app__header-nav",
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, {
                      to: "/",
                      children: "Home"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
                      href: "https://remix.run/docs",
                      children: "Remix Docs"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
                      href: "https://github.com/remix-run/remix",
                      children: "GitHub"
                    })
                  })
                ]
              })
            })
          ]
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
        className: "remix-app__main",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
          className: "container remix-app__main-content",
          children
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("footer", {
        className: "remix-app__footer",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
          className: "container remix-app__footer-content",
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", {
            children: "\xA9 You!"
          })
        })
      })
    ]
  });
}
function CatchBoundary() {
  let caught = (0, import_react2.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", {
        children: "Oops! Looks like you tried to visit a page that you do not have access to."
      });
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", {
        children: "Oops! Looks like you tried to visit a page that does not exist."
      });
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Document, {
    title: `${caught.status} ${caught.statusText}`,
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Layout, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h1", {
          children: [
            caught.status,
            ": ",
            caught.statusText
          ]
        }),
        message
      ]
    })
  });
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Document, {
    title: "Error!",
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", {
            children: "There was an error"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", {
            children: error.message
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("hr", {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", {
            children: "Hey, developer, you should replace this with what you want your users to see."
          })
        ]
      })
    })
  });
}
function RemixLogo(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", {
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("title", {
        id: "remix-run-logo-title",
        children: "Remix Logo"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
        d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
        d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
        d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
        d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
        d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
      })
    ]
  });
}
var RouteChangeAnnouncement = React.memo(() => {
  let [hydrated, setHydrated] = React.useState(!1), [innerHtml, setInnerHtml] = React.useState(""), location = (0, import_react2.useLocation)();
  React.useEffect(() => {
    setHydrated(!0);
  }, []);
  let firstRenderRef = React.useRef(!0);
  return React.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = !1;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Remix demo home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]), hydrated ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
    "aria-live": "assertive",
    "aria-atomic": !0,
    id: "route-change-region",
    style: {
      border: "0",
      clipPath: "inset(100%)",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    },
    children: innerHtml
  }) : null;
});
RouteChangeAnnouncement.displayName = "RouteChangeAnnouncement";

// app/routes/demos/actions.tsx
var actions_exports = {};
__export(actions_exports, {
  action: () => action,
  default: () => ActionsDemo,
  meta: () => meta2
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_react4 = require("react"), import_jsx_runtime3 = require("react/jsx-runtime"), meta2 = () => ({
  title: "Actions Demo"
}), action = async ({ request }) => {
  let answer = (await request.formData()).get("answer");
  return !answer || typeof answer != "string" ? (0, import_node2.json)("Come on, at least try!", { status: 400 }) : answer !== "egg" ? (0, import_node2.json)(`Sorry, ${answer} is not right.`, { status: 400 }) : (0, import_node2.redirect)("/demos/correct");
};
function ActionsDemo() {
  let actionMessage = (0, import_react3.useActionData)(), answerRef = (0, import_react4.useRef)(null);
  return (0, import_react4.useEffect)(() => {
    actionMessage && answerRef.current && answerRef.current.select();
  }, [actionMessage]), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
    className: "remix__page",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", {
            children: "Actions!"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
            children: "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react3.Form, {
            method: "post",
            className: "remix__form",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", {
                children: "Post an Action"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", {
                  children: "What is more useful when it is broken?"
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
                    children: "Answer:"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", {
                    ref: answerRef,
                    name: "answer",
                    type: "text"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", {
                  children: "Answer!"
                })
              }),
              actionMessage ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("b", {
                  children: actionMessage
                })
              }) : null
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("aside", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", {
            children: "Additional Resources"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", {
                children: [
                  "Guide:",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
                    href: "https://remix.run/guides/data-writes",
                    children: "Data Writes"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", {
                children: [
                  "API:",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
                    href: "https://remix.run/api/conventions#action",
                    children: "Route Action Export"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", {
                children: [
                  "API:",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
                    href: "https://remix.run/api/remix#useactiondata",
                    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("code", {
                      children: "useActionData"
                    })
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

// app/routes/demos/correct.tsx
var correct_exports = {};
__export(correct_exports, {
  default: () => NiceWork
});
var import_jsx_runtime4 = require("react/jsx-runtime");
function NiceWork() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", {
    children: "You got it right!"
  });
}

// app/routes/demos/params.tsx
var params_exports = {};
__export(params_exports, {
  default: () => Boundaries,
  meta: () => meta3
});
var import_react5 = require("@remix-run/react"), import_jsx_runtime5 = require("react/jsx-runtime"), meta3 = () => ({
  title: "Boundaries Demo"
});
function Boundaries() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
    className: "remix__page",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("main", {
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Outlet, {})
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("aside", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", {
            children: "Click these Links"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Link, {
                  to: ".",
                  children: "Start over"
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react5.Link, {
                  to: "one",
                  children: [
                    "Param: ",
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("i", {
                      children: "one"
                    })
                  ]
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react5.Link, {
                  to: "two",
                  children: [
                    "Param: ",
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("i", {
                      children: "two"
                    })
                  ]
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Link, {
                  to: "this-record-does-not-exist",
                  children: "This will be a 404"
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Link, {
                  to: "shh-its-a-secret",
                  children: "And this will be 401 Unauthorized"
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Link, {
                  to: "kaboom",
                  children: "This one will throw an error"
                })
              })
            ]
          })
        ]
      })
    ]
  });
}

// app/routes/demos/params/index.tsx
var params_exports2 = {};
__export(params_exports2, {
  default: () => Boundaries2
});
var import_jsx_runtime6 = require("react/jsx-runtime");
function Boundaries2() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", {
        children: "Params"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", {
        children: [
          "When you name a route segment with $ like",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("code", {
            children: "routes/users/$userId.js"
          }),
          ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", {
        children: "Errors"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", {
        children: "When a route throws an error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", {
        children: "So be as granular as you want with your error handling."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", {
        children: "Not Found"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", {
        children: [
          "(and other",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses",
            children: "client errors"
          }),
          ")"
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", {
        children: [
          "Loaders and Actions can throw a ",
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("code", {
            children: "Response"
          }),
          " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."
        ]
      })
    ]
  });
}

// app/routes/demos/params/$id.tsx
var id_exports = {};
__export(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => ParamDemo,
  loader: () => loader,
  meta: () => meta4
});
var import_node3 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime"), loader = async ({ params }) => {
  if (params.id === "this-record-does-not-exist")
    throw new Response("Not Found", { status: 404 });
  if (params.id === "shh-its-a-secret")
    throw (0, import_node3.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  return params.id === "kaboom" && lol(), (0, import_node3.json)({ param: params.id });
};
function ParamDemo() {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("h1", {
    children: [
      "The param is ",
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", {
        style: { color: "red" },
        children: data.param
      })
    ]
  });
}
function CatchBoundary2() {
  let caught = (0, import_react6.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", {
        children: [
          "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (",
          caught.data.webmasterEmail,
          ") for access."
        ]
      });
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", {
        children: "Looks like you tried to visit a page that does not exist."
      });
      break;
    default:
      message = /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", {
        children: [
          "There was a problem with your request!",
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("br", {}),
          caught.status,
          " ",
          caught.statusText
        ]
      });
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", {
        children: "Oops!"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", {
        children: message
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", {
        children: "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"
      })
    ]
  });
}
function ErrorBoundary2({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", {
        children: "Error!"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", {
        children: error.message
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", {
        children: "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"
      })
    ]
  });
}
var meta4 = ({ data }) => ({
  title: data ? `Param: ${data.param}` : "Oops..."
});

// app/routes/demos/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta5
});
var import_react7 = require("@remix-run/react");

// app/styles/demos/about.css
var about_default = "/build/_assets/about-5MMBBRP5.css";

// app/routes/demos/about.tsx
var import_jsx_runtime8 = require("react/jsx-runtime"), meta5 = () => ({
  title: "About Remix"
}), links2 = () => [{ rel: "stylesheet", href: about_default }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
    className: "about",
    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
      className: "about__intro",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", {
          children: "About Us"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", {
          children: [
            "Ok, so this page isn't really ",
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("em", {
              children: "about us"
            }),
            ", but we did want to show you a few more things Remix can do."
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", {
          children: [
            "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", {
              children: "links"
            }),
            " export is only included on this route and its children."
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", {
          children: [
            "Wait a sec...",
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("em", {
              children: "its children"
            }),
            "? To understand what we mean by this,",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", {
              href: "https://remix.run/tutorial/4-nested-routes-params",
              children: "read all about nested routes in the docs"
            }),
            "."
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("hr", {}),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react7.Outlet, {})
      ]
    })
  });
}

// app/routes/demos/about/index.tsx
var about_exports2 = {};
__export(about_exports2, {
  default: () => AboutIndex
});
var import_react8 = require("@remix-run/react"), import_jsx_runtime9 = require("react/jsx-runtime");
function AboutIndex() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", {
        children: [
          "You are looking at the index route for the ",
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("code", {
            children: "/about"
          }),
          " URL segment, but there are nested routes as well!"
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", {
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("strong", {
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react8.Link, {
            to: "whoa",
            children: "Check out one of them here."
          })
        })
      })
    ]
  });
}

// app/routes/demos/about/whoa.tsx
var whoa_exports = {};
__export(whoa_exports, {
  default: () => Whoa
});
var import_react9 = require("@remix-run/react"), import_jsx_runtime10 = require("react/jsx-runtime");
function Whoa() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", {
        children: [
          "Whoa, this is a nested route! We render the ",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("code", {
            children: "/about"
          }),
          " layout route component, and its ",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("code", {
            children: "Outlet"
          }),
          " renders our route component. \u{1F92F}"
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", {
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react9.Link, {
            to: "..",
            children: [
              "Go back to the ",
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("code", {
                children: "/about"
              }),
              " index."
            ]
          })
        })
      })
    ]
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader2,
  meta: () => meta6
});
var import_node4 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_jsx_runtime11 = require("react/jsx-runtime"), loader2 = async () => (0, import_node4.json)({
  resources: [
    {
      name: "Remix Docs",
      url: "https://remix.run/docs"
    },
    {
      name: "React Router Docs",
      url: "https://reactrouter.com/docs"
    },
    {
      name: "Remix Discord",
      url: "https://discord.gg/VBePs6d"
    }
  ],
  demos: [
    {
      to: "demos/actions",
      name: "Actions"
    },
    {
      to: "demos/about",
      name: "Nested Routes, CSS loading/unloading"
    },
    {
      to: "demos/params",
      name: "URL Params and Error Boundaries"
    }
  ]
}), meta6 = () => ({
  title: "Remix Starter",
  description: "Welcome to remix!"
});
function Index2() {
  let data = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
    className: "remix__page",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("main", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", {
            children: "Welcome to Remix!"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", {
            children: "We're stoked that you're here. \u{1F973}"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", {
            children: "Feel free to take a look around the code to see how Remix does things, it might be a bit different than what you\u2019re used to. When you're ready to dive deeper, we've got plenty of resources to get you up-and-running quickly."
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", {
            children: [
              "Check out all the demos in this starter, and then just delete the",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("code", {
                children: "app/routes/demos"
              }),
              " and ",
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("code", {
                children: "app/styles/demos"
              }),
              " ",
              "folders when you're ready to turn this into your next project."
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("aside", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", {
            children: "Demos In This App"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", {
            children: data.demos.map((demo) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", {
              className: "remix__page__resource",
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react10.Link, {
                to: demo.to,
                prefetch: "intent",
                children: demo.name
              })
            }, demo.to))
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", {
            children: "Resources"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", {
            children: data.resources.map((resource) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", {
              className: "remix__page__resource",
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", {
                href: resource.url,
                children: resource.name
              })
            }, resource.url))
          })
        ]
      })
    ]
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "c7c7ca12", entry: { module: "/build/entry.client-RDL4HHTZ.js", imports: ["/build/_shared/chunk-JUBAN2DI.js", "/build/_shared/chunk-JWP4XJYM.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2Y3VPAPC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/demos/about": { id: "routes/demos/about", parentId: "root", path: "demos/about", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/about-AARODFHI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/about/index": { id: "routes/demos/about/index", parentId: "routes/demos/about", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/demos/about/index-P6VGURFD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/about/whoa": { id: "routes/demos/about/whoa", parentId: "routes/demos/about", path: "whoa", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/about/whoa-5YJZFRTZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/actions": { id: "routes/demos/actions", parentId: "root", path: "demos/actions", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/actions-2GUHMPYQ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/correct": { id: "routes/demos/correct", parentId: "root", path: "demos/correct", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/correct-YQT4F6BY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/params": { id: "routes/demos/params", parentId: "root", path: "demos/params", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/params-KDO3C65D.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/params/$id": { id: "routes/demos/params/$id", parentId: "routes/demos/params", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/params/$id-B7KA3JU5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/demos/params/index": { id: "routes/demos/params/index", parentId: "routes/demos/params", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/demos/params/index-FOPS573E.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-AIWNISMA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-C7C7CA12.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    index: void 0,
    caseSensitive: void 0,
    module: actions_exports
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    index: void 0,
    caseSensitive: void 0,
    module: correct_exports
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    index: void 0,
    caseSensitive: void 0,
    module: params_exports
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: params_exports2
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: about_exports2
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    index: void 0,
    caseSensitive: void 0,
    module: whoa_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
