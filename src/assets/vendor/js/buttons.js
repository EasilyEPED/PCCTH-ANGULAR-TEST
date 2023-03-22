/*!
 * github-buttons v2.22.2
 * (c) 2023 なつき
 * @license BSD-2-Clause
 */
!(function () {
  'use strict'
  var o = window.document,
    e = o.location,
    t = window.Math,
    r = window.HTMLElement,
    a = window.XMLHttpRequest,
    n = 'github-button',
    i = 'https://buttons.github.io/buttons.html',
    c = 'github.com',
    l = 'https://api.' + c,
    d = a && 'prototype' in a && 'withCredentials' in a.prototype,
    s =
      d &&
      r &&
      'attachShadow' in r.prototype &&
      !('prototype' in r.prototype.attachShadow),
    u = function (o, e) {
      for (var t = 0, r = o.length; t < r; t++) e(o[t])
    },
    h = function (o) {
      return function (e, t, r) {
        var a = o.createElement(e)
        if (null != t)
          for (var n in t) {
            var i = t[n]
            null != i && (null != a[n] ? (a[n] = i) : a.setAttribute(n, i))
          }
        return (
          null != r &&
            u(r, function (e) {
              a.appendChild('string' == typeof e ? o.createTextNode(e) : e)
            }),
          a
        )
      }
    },
    f = h(o),
    g = function (o) {
      var e
      return function () {
        e || ((e = 1), o.apply(this, arguments))
      }
    },
    b = function (o, e) {
      return {}.hasOwnProperty.call(o, e)
    },
    p = function (o) {
      return ('' + o).toLowerCase()
    },
    m = function (o, e, t, r) {
      null == e && (e = '&'),
        null == t && (t = '='),
        null == r && (r = window.decodeURIComponent)
      var a = {}
      return (
        u(o.split(e), function (o) {
          if ('' !== o) {
            var e = o.split(t)
            a[r(e[0])] = null != e[1] ? r(e.slice(1).join(t)) : void 0
          }
        }),
        a
      )
    },
    v = function (o, e, t) {
      o.addEventListener
        ? o.addEventListener(e, t, !1)
        : o.attachEvent('on' + e, t)
    },
    w = function (o, e, t) {
      o.removeEventListener
        ? o.removeEventListener(e, t, !1)
        : o.detachEvent('on' + e, t)
    },
    k = function (o, e, t) {
      var r = function () {
        return w(o, e, r), t.apply(this, arguments)
      }
      v(o, e, r)
    },
    x = function (o, e, t) {
      if (null != o.readyState) {
        var r = 'readystatechange',
          a = function () {
            if (e.test(o.readyState))
              return w(o, r, a), t.apply(this, arguments)
          }
        v(o, r, a)
      }
    },
    y = {
      light:
        ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0969da;outline-offset:-2px}.btn{color:#24292f;background-color:#ebf0f4;border-color:#ccd1d5;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#e9ebef;background-position:0 -0.5em;border-color:#caccd1;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#e5e9ed;border-color:#c7cbcf;border-color:rgba(27,31,36,.15);box-shadow:inset 0 .15em .3em rgba(27,31,36,.15);background-image:none;filter:none}.social-count{color:#24292f;background-color:#fff;border-color:#ddddde;border-color:rgba(27,31,36,.15)}.social-count:hover,.social-count:focus{color:#0969da}.octicon-heart{color:#bf3989}",
      light_high_contrast:
        '.btn:focus-visible,.social-count:focus-visible{outline:2px solid #0349b4;outline-offset:-2px}.btn{color:#0e1116;background-color:#e7ecf0;border-color:#2f3237;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#c4cdd5;background-position:0 -0.5em;border-color:#282c32;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:active{background-color:#d8dde1;border-color:#2c2f34;border-color:rgba(1,4,9,.8);box-shadow:inset 0 .15em .3em rgba(1,4,9,.15)}.social-count{color:#0e1116;background-color:#fff;border-color:#34363a;border-color:rgba(1,4,9,.8)}.social-count:hover,.social-count:focus{color:#0349b4}.octicon-heart{color:#971368}',
      dark:
        ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #58a6ff;outline-offset:-2px}.btn{color:#c9d1d9;background-color:#1a1e23;border-color:#2f3439;border-color:rgba(240,246,252,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#0d1117;border-color:#24282e;border-color:rgba(240,246,252,.1)}.social-count:hover,.social-count:focus{color:#58a6ff}.octicon-heart{color:#db61a2}",
      dark_dimmed:
        ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #539bf5;outline-offset:-2px}.btn{color:#adbac7;background-color:#30363d;border-color:#40464e;border-color:rgba(205,217,229,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;box-shadow:inset 0 .15em .3em rgba(28,33,40,.15);background-image:none;filter:none}.social-count{color:#adbac7;background-color:#22272e;border-color:#333940;border-color:rgba(205,217,229,.1)}.social-count:hover,.social-count:focus{color:#539bf5}.octicon-heart{color:#c96198}",
      dark_high_contrast:
        '.btn:focus-visible,.social-count:focus-visible{outline:2px solid #71b7ff;outline-offset:-2px}.btn{color:#f0f3f6;background-color:#272b33;border-color:#7a828e;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#4a515b;background-position:0 -0.5em;border-color:#bdc4cc;background-image:none;filter:none}.btn:active{background-color:#1d1d1f;border-color:#bdc4cc;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15)}.social-count{color:#f0f3f6;background-color:#0a0c10;border-color:#7a828e}.social-count:hover,.social-count:focus{color:#71b7ff}.octicon-heart{color:#ef6eb1}',
    },
    z = function (o, e) {
      return (
        '@media(prefers-color-scheme:' + o + '){' + y[b(y, e) ? e : o] + '}'
      )
    },
    C = {
      'comment-discussion': {
        heights: {
          16: {
            width: 16,
            path:
              '<path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0110.25 10H7.061l-2.574 2.573A1.458 1.458 0 012 11.543V10h-.25A1.75 1.75 0 010 8.25v-5.5C0 1.784.784 1 1.75 1zM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 01.75.75v2.19l2.72-2.72a.749.749 0 01.53-.22h3.5a.25.25 0 00.25-.25v-5.5a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25zm13 2a.25.25 0 00-.25-.25h-.5a.75.75 0 010-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.458 1.458 0 01-2.487 1.03L9.22 12.28a.749.749 0 01.326-1.275.749.749 0 01.734.215l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25z"></path>',
          },
        },
      },
      download: {
        heights: {
          16: {
            width: 16,
            path:
              '<path d="M7.47 10.78L3.72 7.03a.751.751 0 01.018-1.042.751.751 0 011.042-.018l2.47 2.47V1.75a.75.75 0 011.5 0v6.69l2.47-2.47a.751.751 0 011.042.018.751.751 0 01.018 1.042l-3.75 3.75a.75.75 0 01-1.06 0zM3.75 13h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5z"></path>',
          },
        },
      },
      eye: {
        heights: {
          16: {
            width: 16,
            path:
              '<path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 010 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 010-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2zM1.679 7.932a.12.12 0 000 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 000-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717zM8 10a2 2 0 11-.001-3.999A2 2 0 018 10z"></path>',
          },
        },
      },
      heart: {
        heights: {
          16: {
            width: 16,
            path:
              '<path d="M8 14.25l.345.666a.75.75 0 01-.69 0l-.008-.004-.018-.01a7.152 7.152 0 01-.31-.17 22.055 22.055 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 01-3.744 2.584l-.018.01-.006.003h-.002zM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 008 13.393a20.58 20.58 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5z"></path>',
          },
        },
      },
      'issue-opened': {
        heights: {
          16: {
            width: 16,
            path:
              '<path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path d="M8 0a8 8 0 110 16A8 8 0 018 0zM1.5 8a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0z"></path>',
          },
        },
      },
      'mark-github': {
        heights: {
          16: {
            width: 16,
            path:
              '<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 01-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 010 8c0-4.42 3.58-8 8-8z"></path>',
          },
        },
      },
      package: {
        heights: {
          16: {
            width: 16,
            path:
              '<path d="M8.878.392l5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 01-.872 1.514l-5.25 3.045a1.75 1.75 0 01-1.756 0l-5.25-3.045A1.75 1.75 0 011 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 011.756 0zM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 00-.25 0zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432z"></path>',
          },
        },
      },
      play: {
        heights: {
          16: {
            width: 16,
            path:
              '<path d="M8 0a8 8 0 110 16A8 8 0 018 0zM1.5 8a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0zm4.879-2.773l4.264 2.559a.25.25 0 010 .428l-4.264 2.559A.25.25 0 016 10.559V5.442a.25.25 0 01.379-.215z"></path>',
          },
        },
      },
      'repo-forked': {
        heights: {
          16: {
            width: 16,
            path:
              '<path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013.5 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm6.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3 8.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0z"></path>',
          },
        },
      },
      'repo-template': {
        heights: {
          16: {
            width: 16,
            path:
              '<path d="M13.25 8a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM5 12.25a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.25a.25.25 0 01-.4.2l-1.45-1.087a.249.249 0 00-.3 0L5.4 15.7a.25.25 0 01-.4-.2zM2.75 8a.75.75 0 01.75.75v.268c.083-.012.166-.018.25-.018h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 11-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zM11 .75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zm-5 0A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm0 9A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.751.751 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z"></path>',
          },
        },
      },
      star: {
        heights: {
          16: {
            width: 16,
            path:
              '<path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.751.751 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694z"></path>',
          },
        },
      },
    },
    M = function (o, e) {
      ;(o = p(o).replace(/^octicon-/, '')), b(C, o) || (o = 'mark-github')
      var t = e >= 24 && 24 in C[o].heights ? 24 : 16,
        r = C[o].heights[t]
      return (
        '<svg viewBox="0 0 ' +
        r.width +
        ' ' +
        t +
        '" width="' +
        (e * r.width) / t +
        '" height="' +
        e +
        '" class="octicon octicon-' +
        o +
        '" aria-hidden="true">' +
        r.path +
        '</svg>'
      )
    },
    F = {},
    A = function (o, e) {
      var t = F[o] || (F[o] = [])
      if (!(t.push(e) > 1)) {
        var r = g(function () {
          for (delete F[o]; (e = t.shift()); ) e.apply(null, arguments)
        })
        if (d) {
          var n = new a()
          v(n, 'abort', r),
            v(n, 'error', r),
            v(n, 'load', function () {
              var o
              try {
                o = JSON.parse(this.responseText)
              } catch (o) {
                return void r(o)
              }
              r(200 !== this.status, o)
            }),
            n.open('GET', o),
            n.send()
        } else {
          var i = this || window
          i._ = function (o) {
            ;(i._ = null), r(200 !== o.meta.status, o.data)
          }
          var c = h(i.document)('script', {
              async: !0,
              src: o + (-1 !== o.indexOf('?') ? '&' : '?') + 'callback=_',
            }),
            l = function () {
              i._ && i._({ meta: {} })
            }
          v(c, 'load', l),
            v(c, 'error', l),
            x(c, /de|m/, l),
            i.document.getElementsByTagName('head')[0].appendChild(c)
        }
      }
    },
    L = function (o, e, t) {
      var r = h(o.ownerDocument),
        a = o.appendChild(r('style', { type: 'text/css' })),
        n =
          'body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}' +
          (function (o) {
            if (null == o) return y.light
            if (b(y, o)) return y[o]
            var e = m(o, ';', ':', function (o) {
              return o.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, '')
            })
            return (
              y[b(y, e['no-preference']) ? e['no-preference'] : 'light'] +
              z('light', e.light) +
              z('dark', e.dark)
            )
          })(e['data-color-scheme'])
      a.styleSheet
        ? (a.styleSheet.cssText = n)
        : a.appendChild(o.ownerDocument.createTextNode(n))
      var i = 'large' === p(e['data-size']),
        d = r(
          'a',
          {
            className: 'btn',
            href: e.href,
            rel: 'noopener',
            target: '_blank',
            title: e.title || void 0,
            'aria-label': e['aria-label'] || void 0,
            innerHTML: M(e['data-icon'], i ? 16 : 14) + '&nbsp;',
          },
          [r('span', {}, [e['data-text'] || ''])],
        ),
        s = o.appendChild(
          r('div', { className: 'widget' + (i ? ' widget-lg' : '') }, [d]),
        ),
        u = d.hostname.replace(/\.$/, '')
      if (('.' + u).substring(u.length - c.length) !== '.' + c)
        return d.removeAttribute('href'), void t(s)
      var f = (' /' + d.pathname).split(/\/+/)
      if (
        ((((u === c || u === 'gist.' + c) && 'archive' === f[3]) ||
          (u === c &&
            'releases' === f[3] &&
            ('download' === f[4] ||
              ('latest' === f[4] && 'download' === f[5]))) ||
          u === 'codeload.' + c) &&
          (d.target = '_top'),
        'true' === p(e['data-show-count']) &&
          u === c &&
          'marketplace' !== f[1] &&
          'sponsors' !== f[1] &&
          'orgs' !== f[1] &&
          'users' !== f[1] &&
          '-' !== f[1])
      ) {
        var g, v
        if (!f[2] && f[1]) (v = 'followers'), (g = '?tab=followers')
        else if (!f[3] && f[2]) (v = 'stargazers_count'), (g = '/stargazers')
        else if (f[4] || 'subscription' !== f[3])
          if (f[4] || 'fork' !== f[3]) {
            if ('issues' !== f[3]) return void t(s)
            ;(v = 'open_issues_count'), (g = '/issues')
          } else (v = 'forks_count'), (g = '/network/members')
        else (v = 'subscribers_count'), (g = '/watchers')
        var w = f[2] ? '/repos/' + f[1] + '/' + f[2] : '/users/' + f[1]
        A.call(this, l + w, function (o, e) {
          if (!o) {
            var a = e[v]
            s.appendChild(
              r(
                'a',
                {
                  className: 'social-count',
                  href: e.html_url + g,
                  rel: 'noopener',
                  target: '_blank',
                  'aria-label':
                    a +
                    ' ' +
                    v
                      .replace(/_count$/, '')
                      .replace('_', ' ')
                      .slice(0, a < 2 ? -1 : void 0) +
                    ' on GitHub',
                },
                [('' + a).replace(/\B(?=(\d{3})+(?!\d))/g, ',')],
              ),
            )
          }
          t(s)
        })
      } else t(s)
    },
    _ = window.devicePixelRatio || 1,
    E = function (o) {
      return (_ > 1 ? t.ceil((t.round(o * _) / _) * 2) / 2 : t.ceil(o)) || 0
    },
    G = function (o, e) {
      ;(o.style.width = e[0] + 'px'), (o.style.height = e[1] + 'px')
    },
    T = function (e, r) {
      if (null != e && null != r)
        if (
          (e.getAttribute &&
            (e = (function (o) {
              var e = {
                href: o.href,
                title: o.title,
                'aria-label': o.getAttribute('aria-label'),
              }
              return (
                u(
                  ['icon', 'color-scheme', 'text', 'size', 'show-count'],
                  function (t) {
                    var r = 'data-' + t
                    e[r] = o.getAttribute(r)
                  },
                ),
                null == e['data-text'] &&
                  (e['data-text'] = o.textContent || o.innerText),
                e
              )
            })(e)),
          s)
        ) {
          var a = f('span')
          L(a.attachShadow({ mode: 'closed' }), e, function () {
            r(a)
          })
        } else {
          var n = f('iframe', {
            src: 'javascript:0',
            title: e.title || void 0,
            allowtransparency: !0,
            scrolling: 'no',
            frameBorder: 0,
          })
          G(n, [0, 0]), (n.style.border = 'none')
          var c = function () {
            var a,
              l = n.contentWindow
            try {
              a = l.document.body
            } catch (e) {
              return void o.body.appendChild(n.parentNode.removeChild(n))
            }
            w(n, 'load', c),
              L.call(l, a, e, function (o) {
                var a = (function (o) {
                  var e = o.offsetWidth,
                    r = o.offsetHeight
                  if (o.getBoundingClientRect) {
                    var a = o.getBoundingClientRect()
                    ;(e = t.max(e, E(a.width))), (r = t.max(r, E(a.height)))
                  }
                  return [e, r]
                })(o)
                n.parentNode.removeChild(n),
                  k(n, 'load', function () {
                    G(n, a)
                  }),
                  (n.src =
                    i +
                    '#' +
                    (n.name = (function (o, e, t, r) {
                      null == e && (e = '&'),
                        null == t && (t = '='),
                        null == r && (r = window.encodeURIComponent)
                      var a = []
                      for (var n in o) {
                        var i = o[n]
                        null != i && a.push(r(n) + t + r(i))
                      }
                      return a.join(e)
                    })(e))),
                  r(n)
              })
          }
          v(n, 'load', c), o.body.appendChild(n)
        }
    }
  e.protocol + '//' + e.host + e.pathname === i
    ? L(o.body, m(window.name || e.hash.replace(/^#/, '')), function () {})
    : (function (e) {
        if (
          'complete' === o.readyState ||
          ('loading' !== o.readyState && !o.documentElement.doScroll)
        )
          setTimeout(e)
        else if (o.addEventListener) {
          var t = g(e)
          k(o, 'DOMContentLoaded', t), k(window, 'load', t)
        } else x(o, /m/, e)
      })(function () {
        var e,
          t = o.querySelectorAll
            ? o.querySelectorAll('a.' + n)
            : ((e = []),
              u(o.getElementsByTagName('a'), function (o) {
                ;-1 !==
                  (' ' + o.className + ' ')
                    .replace(/[ \t\n\f\r]+/g, ' ')
                    .indexOf(' ' + n + ' ') && e.push(o)
              }),
              e)
        u(t, function (o) {
          T(o, function (e) {
            o.parentNode.replaceChild(e, o)
          })
        })
      })
})()
