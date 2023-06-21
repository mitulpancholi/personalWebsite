(() => {
  "use strict";
  const n =
    "\n    .widget__container * {\n        box-sizing: border-box;\n    }        \n    h3, p, input {\n        margin: 0;\n        padding: 0;\n    }\n    .widget__container {\n        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);\n        width: 500px;\n        overflow: auto;\n        right: -25px;\n        bottom: 75px;\n        position: absolute;\n        transition: max-height .2s ease;\n        font-family: Helvetica, Arial ,sans-serif;\n        background-color: #fff;\n        border-radius: 10px;\n        box-sizing: border-box;\n        padding-left:1rem;\n        padding-right:1rem;\n        display : flex;\n        flex-direction: column;\n        min-height: 80vh;\n        padding-bottom:10px;\n    }\n\n    .chat__area {\n        flex-grow: 1;\n        max-height: 64vh;\n        overflow: auto;\n    }\n    .widget__icon {\n        cursor: pointer;\n        width: 60%;\n        position: absolute;\n        top: 14px;\n        left: 12px;\n        transition: transform .3s ease;\n    }\n    .widget__hidden {\n        transform: scale(0);\n    }\n    .button__container {\n        border: none;\n        background-color: #000;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        cursor: pointer;\n    }\n    .widget__container.hidden {\n        max-height: 0px;\n    }\n\n    .assistant__message {\n        background-color: #f1f1f0;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        padding-left: 1rem;\n        padding-right: 1rem;\n        border-radius: 0.5rem;\n        margin-bottom: 0.50rem;\n        max-width: 100%;\n        word-wrap: break-word;\n        width: max-content;\n        color: white;\n    }\n    .widget__header {\n        padding: 1rem 0rem;\n        border-bottom: 1px solid #f1f1f0;\n        position: sticky;\n        top: 0;\n        width:100%;\n        text-align: center;\n        display:flex;\n        justify-content: space-between;\n        margin-bottom: 20px;\n    }\n\n    .logo__wrapper {\n        display : flex;\n        gap: 10px;\n    }\n\n    .logo__wrapper h3 {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .logo {\n        border-radius: 50%;\n        background-color : #000;\n        color : #fff;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width : 40px;\n        height : 40px;\n        overflow:hidden;\n    }\n    .action__button {\n        display:flex;\n        gap:10px;\n        align-items:center;\n        cursor: pointer;\n    }\n\n    .action__button img{\n        height: 20px;\n        width: 20px;\n    }\n    .widget__header h3 {\n        font-size: 24px;\n        font-weight: 400;\n    }\n\n    .send__btn {\n        display:flex;\n        position: sticky;\n        bottom:0;\n        border: 1px solid #e5e7eb;\n        padding: 10px;\n        border-radius: 0.5rem;\n        margin-top: 20px;\n    }\n\n    .send__btn textarea {\n        width:100%;\n        flex: 1 1 0%;\n        border-width: 0;\n        resize: none;\n        height:24px;\n        appearance: none;\n        min-height: 1.5rem;\n        font-family: Helvetica, Arial ,sans-serif;\n    }\n\n    .send__btn p {\n        display: flex;\n    align-items: flex-end;\n    cursor:pointer;\n    }\n\n    .send__btn textarea:focus-visible {\n        outline : 0px;\n    }\n\n    .assistant__wrapper {\n        margin-right : 50px;\n        display:flex;\n        flex-direction: column;\n    }\n    .user__wrapper {\n        display: flex;\n        justify-content: flex-end;\n        margin-left: 50px;\n    }\n\n    .logo__img {\n        width:40px;\n        aspect-ratio:1;\n    }\n\n    @media only screen and (max-width: 768px) {\n        .isHidden {\n            position: initial !important;\n        }\n    \n        .isHidden .button__container {\n            display : none;\n        }\n    \n        .isHidden .widget__container {\n            inset: 0;\n            width:100%;\n        } \n    \n        .isHidden .chat__area {\n            max-height: 100%;\n        }\n      }\n\n   \n\n    .chat__wrapper {\n        position:fixed;\n        bottom:30px;\n        right:30px;\n    }\n\n    .user__wrapper .user__message {\n    background-color: #f1f1f0;\n    color: white;\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    border-radius: 0.5rem;\n    margin-bottom: 0.50rem;\n    max-width: 65ch;\n    width: max-content;\n    }\n\n    .chat__area::-webkit-scrollbar {\n        display: none;\n    }\n\n    .poweredBy {\n        text-align: center;\n        font-size: 12px;\n        padding-top: 10px;\n    }\n\n    .suggestion__wrapper {\n        display: flex;\n        gap: 5px;\n        flex-wrap: wrap;\n        margin-bottom: 10px;\n    }\n\n    .suggestion {\n        background-color: black;\n        color: white;\n        border-radius: 8px;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        padding-left: 1rem;\n        padding-right: 1rem;\n        cursor: pointer;\n    }\n\n.typing {\n  position: relative;\n  width: 70px;\n  height: 30px;\n  margin: 0px 0;\n  padding: 10px 16px;\n  border-radius: 16px;\n  border: 1px solid #ddd;\n  background: #fff;\n}\n\n.typing span {\n  content: '';\n  animation: blink 1.5s infinite;\n  animation-fill-mode: both;\n  height: 10px;\n  width: 10px;\n  background: #000;\n  position: absolute;\n  left: 16px;\n  top: 10px;\n  border-radius: 50%;\n}\n\n.user__icon {\n    width:32px;\n    height:32px;\n}\n\n.typing span:nth-child(2) {\n  animation-delay: 0.2s;\n  margin-left: 15px;\n}\n\n.typing span:nth-child(3) {\n  animation-delay: 0.4s;\n  margin-left: 30px;\n}\n\n.website__link {\n    text-decoration: none;\n    color:black;\n}\n\n@keyframes blink {\n  0% {\n    opacity: 0.1;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.1;\n  }\n}\n";
  function e(n, e = !0, t = !1) {
    var i = (
      e
        ? /"response": "(?<answer>.*?[^\\]"?)"/
        : t
        ? /(?<answer>(.|\n)*?)(?=\n{.*}$|$)/
        : /"answer": "(?<answer>.*?[^\\]"?)(?="|$)/
    ).exec(n);
    return i && i.length >= 2 ? i[1] : "";
  }
  function t(n) {
    var e = /"messages": \[(?<follow_up_question>[^\]]*)/.exec(n),
      t = [];
    return (
      e &&
        e.length > 0 &&
        (t = e[1].split(", ").map(function (n) {
          return n.slice(1, -1);
        })),
      t
    );
  }
  let i = [],
    o = {},
    s = !1;
  async function a({ message: n, botId: a, conversationId: r, authToken: d }) {
    if (s) return void stackOfPendingMessages.push(n);
    const l = new FormData();
    l.append("query", n), (i = [...i, { query: n }]), (s = !0);
    let c = "";
    const p = new URLSearchParams();
    p.append("bot-id", a), r && p.append("conversation-id", r.toString());
    try {
      const h = await fetch("https://api.rafiq.ai/api/message/?" + p, {
        method: "POST",
        headers: { Authorization: `Token ${d}` },
        body: l,
      });
      if (!h.ok) {
        const x = await h.json();
        throw x?.message || h.status;
      }
      const g = h?.body?.getReader();
      let m = "",
        u = "";
      async function _(t) {
        for (;;) {
          const { done: o, value: s } = await t.read();
          if (o) return;
          (c += new TextDecoder("utf-8").decode(s)),
            (u = e(c, !1)),
            m != u && ((m = u), (i = [...i, { query: n, response: u }]));
        }
      }
      await _(g);
      let w = (function (n) {
        var e = /\{(?<second>.*)\}$/.exec(n);
        return e ? JSON.parse(e[0]) : null;
      })(c);
      return (
        (o.data = w || {
          data: {
            query: n,
            response: e(c),
            follow_up_messages: { messages: t(c) },
          },
        }),
        (s = !1),
        o.data
      );
    } catch (b) {
      throw (console.log(">> ERR: ", b), b);
    }
  }
  class r {
    constructor(n = "bottom-right") {
      (this.position = this.getPosition(n)),
        (this.loading = !1),
        (this.open = !1),
        this.initialize(),
        this.injectStyles();
    }
    position = "";
    open = !1;
    widgetContainer = null;
    chatArea = null;
    token = null;
    botId = null;
    userMsgBgColor = null;
    chatMsgBgColor = null;
    container = null;
    getPosition(n) {
      const [e, t] = n.split("-");
      return { [e]: "30px", [t]: "30px" };
    }
    scrollChatToBottom() {
      this.chatArea.scrollTop = this.chatArea.scrollHeight;
    }
    async applyTypewriterAnimation(n) {
      const e = n.textContent;
      n.textContent = "";
      const t = e.split(""),
        i = document.createElement("div");
      return (
        i.classList.add("typing"),
        (i.innerHTML =
          "\n      <span></span>\n      <span></span>\n      <span></span>\n    "),
        this.chatArea.appendChild(i),
        new Promise((e) => {
          t.forEach((o, s) => {
            setTimeout(() => {
              (n.textContent += o),
                s === t.length - 1 && (this.chatArea.removeChild(i), e());
            }, 30 * s);
          });
        })
      );
    }
    async initialize() {
      const n = document.getElementById("chat-bubble");
      (this.token = n.getAttribute("token")),
        (this.botId = n.getAttribute("botId")),
        console.log("Token:", this.token),
        console.log("Bot ID:", this.botId);
      const e = document.createElement("div");
      e.classList.add("chat__wrapper"),
        document.body.appendChild(e),
        (this.container = e);
      const t = document.createElement("button");
      t.classList.add("button__container");
      const i = document.createElement("span");
      (i.innerHTML =
        '\n<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="Communication / Chat_Dots">\n<path id="Vector" d="M5.59961 19.9203L7.12357 18.7012L7.13478 18.6926C7.45249 18.4384 7.61281 18.3101 7.79168 18.2188C7.95216 18.1368 8.12328 18.0771 8.2998 18.0408C8.49877 18 8.70603 18 9.12207 18H17.8031C18.921 18 19.4806 18 19.908 17.7822C20.2843 17.5905 20.5905 17.2842 20.7822 16.9079C21 16.4805 21 15.9215 21 14.8036V7.19691C21 6.07899 21 5.5192 20.7822 5.0918C20.5905 4.71547 20.2837 4.40973 19.9074 4.21799C19.4796 4 18.9203 4 17.8002 4H6.2002C5.08009 4 4.51962 4 4.0918 4.21799C3.71547 4.40973 3.40973 4.71547 3.21799 5.0918C3 5.51962 3 6.08009 3 7.2002V18.6712C3 19.7369 3 20.2696 3.21846 20.5433C3.40845 20.7813 3.69644 20.9198 4.00098 20.9195C4.35115 20.9191 4.76744 20.5861 5.59961 19.9203Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</g>\n</svg>\n'),
        i.classList.add("widget__icon"),
        (this.widgetIcon = i);
      const o = document.createElement("span");
      (o.innerHTML =
        '\n<svg width="64px" height="64px" viewBox="5.5 6 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16 8L8 16M8.00001 8L16 16" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n'),
        o.classList.add("widget__icon", "widget__hidden"),
        (this.closeIcon = o),
        t.appendChild(this.widgetIcon),
        t.appendChild(this.closeIcon),
        t.addEventListener("click", this.toggleOpen.bind(this)),
        (this.widgetContainer = document.createElement("div")),
        this.widgetContainer.classList.add(
          "widget__hidden",
          "widget__container"
        ),
        this.createWidgetContent(),
        e.appendChild(this.widgetContainer),
        e.appendChild(t);
      document
        .getElementById("close-btn")
        .addEventListener("click", this.toggleOpen.bind(this));
      const s = this.widgetContainer.querySelector(".send__btn p"),
        r = this.widgetContainer.querySelector("#message"),
        d = this.widgetContainer.querySelector(".chat__area"),
        l = async (n) => {
          if (!this.loading && "" !== n) {
            console.log(n), (r.value = "");
            const e = document.createElement("div");
            e.classList.add("user__wrapper");
            const t = document.createElement("div");
            t.classList.add("user__message"),
              (t.textContent = n),
              (t.style.backgroundColor = this.userMsgBgColor),
              e.appendChild(t),
              d.appendChild(e),
              this.scrollChatToBottom();
            const i = document.createElement("div");
            i.classList.add("typing"),
              (i.innerHTML =
                "\n      <span></span>\n      <span></span>\n      <span></span>\n    "),
              d.appendChild(i),
              this.scrollChatToBottom();
            try {
              this.loading = !0;
              const e = await a({
                botId: this.botId,
                authToken: this.token,
                message: n,
              });
              console.log("this is response of message ===> ", e),
                d.removeChild(i);
              const t = document.createElement("div");
              t.classList.add("assistant__wrapper");
              const o = document.createElement("div");
              o.classList.add("assistant__message"),
                (o.textContent = e.data.response),
                t.appendChild(o),
                d.appendChild(t),
                this.scrollChatToBottom();
              const s = document.getElementsByClassName("assistant__message");
              for (let n = 0; n < s.length; n++)
                s[n].style.backgroundColor = this.chatMsgBgColor;
              const c = document.getElementsByClassName("user__message");
              for (let n = 0; n < c.length; n++)
                c[n].style.backgroundColor = this.userMsgBgColor;
              if (
                ((r.style.height = ""), e.data?.follow_up_messages?.messages)
              ) {
                await this.applyTypewriterAnimation(o), (this.loading = !1);
                const n = document.createElement("div");
                n.classList.add("suggestion__wrapper"), d.appendChild(n);
                e.data?.follow_up_messages?.messages.map((e) => {
                  const t = document.createElement("button");
                  return (
                    t.classList.add("suggestion"),
                    (t.textContent = e),
                    t.addEventListener("click", () => l(e)),
                    n.appendChild(t),
                    t
                  );
                });
              }
            } catch (n) {
              console.log("Error:", n), (this.loading = !1);
            }
            this.scrollChatToBottom();
          }
        };
      s.addEventListener("click", () => {
        const n = r.value.trim();
        l(n);
      }),
        r.addEventListener("keydown", (n) => {
          "Enter" !== n.key ||
            n.shiftKey ||
            (n.preventDefault(), s.click(), (r.style.height = ""));
        }),
        r.addEventListener("input", () => {
          (r.style.height = ""), (r.style.height = r.scrollHeight + "px");
        });
      await (async () => {
        try {
          const n = await (async function (n, e) {
            const t = `https://api.rafiq.ai/api/chatbot/${n}/`;
            try {
              const n = await fetch(t, {
                headers: { Authorization: `Token ${e}` },
              });
              return await n.json();
            } catch (n) {
              console.log("Error:", n);
            }
          })(this.botId, this.token);
          if (n.remove_rafiq_branding) {
            document.querySelector(".poweredBy").remove();
          }
          const e = document.querySelector(".logo");
          if (null !== n.thumbnail) {
            const t = document.createElement("img");
            (t.src = n.thumbnail),
              t.classList.add("logo__img"),
              (e.innerHTML = ""),
              e.appendChild(t);
          } else
            e.innerHTML =
              '\n          <svg fill="#fff" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">\n<path d="M4 28q0 0.832 0.576 1.44t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.44q0-1.44-0.672-2.912t-1.76-2.624-2.496-2.144-2.88-1.504q1.76-1.088 2.784-2.912t1.024-3.904v-1.984q0-3.328-2.336-5.664t-5.664-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.88 1.504t-2.496 2.144-1.76 2.624-0.672 2.912z"></path>\n</svg>\n          ';
          (document.querySelector(".widget__header h3").textContent = n.name),
            (t.style.backgroundColor = `${n.user_message_color}`),
            (this.userMsgBgColor = n.user_message_color),
            (this.chatMsgBgColor = n.chat_bubble_color);
          const i = document.getElementsByClassName("assistant__message");
          for (let e = 0; e < i.length; e++)
            i[e].style.backgroundColor = n.chat_bubble_color;
          const o = document.getElementsByClassName("user__message");
          for (let e = 0; e < o.length; e++)
            o[e].style.backgroundColor = n.user_message_color;
          const s = document.querySelector(".chat__area"),
            a = document.createElement("div");
          a.classList.add("assistant__wrapper");
          const r = document.createElement("div");
          r.classList.add("assistant__message"),
            (r.textContent = n.initial_message),
            (r.style.backgroundColor = n.chat_bubble_color),
            a.appendChild(r),
            s.appendChild(a);
        } catch (n) {
          console.log("Error:", n);
        }
      })();
    }
    createWidgetContent() {
      (this.widgetContainer.innerHTML =
        '\n      <header class="widget__header">\n        <div class="logo__wrapper">\n          <p class="logo">P</p>\n          <h3>Product Hunt</h3>\n        </div>\n        <div class="action__button">\n          <img id="close-btn" src="./icons8-close.svg" alt="close" />\n        </div>\n      </header>\n      <div class="chat__area">\n      </div>\n      <div class="send__btn">\n        <textarea id="message" name="message" rows="1"></textarea>\n        <p><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">\n        <path d="M20 12L4 4L6 12M20 12L4 20L6 12M20 12H6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg></p>\n      </div>\n      <p class="poweredBy">Powered by <b><a class="website__link" href="https://RAFIQ.ai" target="_blank">RAFIQ.AI</a></b></p>\n    '),
        (this.chatArea = this.widgetContainer.querySelector(".chat__area")),
        this.scrollChatToBottom();
    }
    injectStyles() {
      const e = document.createElement("style");
      (e.innerHTML = n.replace(/^\s+|\n/gm, "")), document.head.appendChild(e);
    }
    toggleOpen() {
      (this.open = !this.open),
        this.open
          ? (this.widgetIcon.classList.add("widget__hidden"),
            this.closeIcon.classList.remove("widget__hidden"),
            this.widgetContainer.classList.remove("widget__hidden"),
            this.container.classList.add("isHidden"))
          : (this.widgetIcon.classList.remove("widget__hidden"),
            this.closeIcon.classList.add("widget__hidden"),
            this.widgetContainer.classList.add("widget__hidden"),
            this.container.classList.remove("isHidden"));
    }
  }
  new r();
})();
