/*! This file is auto-generated */
!(function (o) {
  var e,
    a,
    t,
    n,
    i,
    r,
    p,
    d,
    l,
    c,
    u = !1,
    h = wp.i18n.__;
  function f() {
    "function" != typeof zxcvbn
      ? setTimeout(f, 50)
      : (!a.val() || c.hasClass("is-open")
          ? (a.val(a.data("pw")), a.trigger("pwupdate"))
          : b(),
        _(),
        m(),
        1 !== parseInt(r.data("start-masked"), 10)
          ? a.attr("type", "text")
          : r.trigger("click"),
        o("#pw-weak-text-label").text(h("Confirm use of weak password")),
        "mailserver_pass" !== a.prop("id") && o(a).trigger("focus"));
  }
  function w(s) {
    r.attr({ "aria-label": h(s ? "Show password" : "Hide password") })
      .find(".text")
      .text(h(s ? "Show" : "Hide"))
      .end()
      .find(".dashicons")
      .removeClass(s ? "dashicons-hidden" : "dashicons-visibility")
      .addClass(s ? "dashicons-visibility" : "dashicons-hidden");
  }
  function m() {
    r ||
      (r = e.find(".wp-hide-pw")).show().on("click", function () {
        "password" === a.attr("type")
          ? (a.attr("type", "text"), w(!1))
          : (a.attr("type", "password"), w(!0));
      });
  }
  function v(s, e, a) {
    var t = o("<div />");
    t.addClass("notice inline"),
      t.addClass("notice-" + (e ? "success" : "error")),
      t.text(o(o.parseHTML(a)).text()).wrapInner("<p />"),
      s.prop("disabled", e),
      s.siblings(".notice").remove(),
      s.before(t);
  }
  function g() {
    var s;
    (e = o(
      ".user-pass1-wrap, .user-pass-wrap, .mailserver-pass-wrap, .reset-pass-submit"
    )),
      o(".user-pass2-wrap").hide(),
      (d = o("#submit, #wp-submit").on("click", function () {
        u = !1;
      })),
      (p = d.add(" #createusersub")),
      (n = o(".pw-weak")),
      (i = n.find(".pw-checkbox")).on("change", function () {
        p.prop("disabled", !i.prop("checked"));
      }),
      (a = o("#pass1, #mailserver_pass")).length
        ? ((l = a.val()),
          1 === parseInt(a.data("reveal"), 10) && f(),
          a.on("input pwupdate", function () {
            a.val() !== l &&
              ((l = a.val()), a.removeClass("short bad good strong"), _());
          }))
        : (a = o("#user_pass")),
      (t = o("#pass2").on("input", function () {
        0 < t.val().length &&
          (a.val(t.val()), t.val(""), (l = ""), a.trigger("pwupdate"));
      })),
      a.is(":hidden") && (a.prop("disabled", !0), t.prop("disabled", !0)),
      (c = e.find(".wp-pwd")),
      (s = e.find("button.wp-generate-pw")),
      m(),
      s.show(),
      s.on("click", function () {
        (u = !0),
          s.not(".skip-aria-expanded").attr("aria-expanded", "true"),
          c.show().addClass("is-open"),
          a.attr("disabled", !1),
          t.attr("disabled", !1),
          f(),
          w(!1),
          wp.ajax.post("generate-password").done(function (s) {
            a.data("pw", s);
          });
      }),
      e.find("button.wp-cancel-pw").on("click", function () {
        (u = !1),
          a.prop("disabled", !0),
          t.prop("disabled", !0),
          a.val("").trigger("pwupdate"),
          w(!1),
          c.hide().removeClass("is-open"),
          p.prop("disabled", !1),
          s.attr("aria-expanded", "false");
      }),
      e.closest("form").on("submit", function () {
        (u = !1),
          a.prop("disabled", !1),
          t.prop("disabled", !1),
          t.val(a.val());
      });
  }
  function b() {
    var s = o("#pass1").val();
    if (
      (o("#pass-strength-result").removeClass("short bad good strong empty"),
      s && "" !== s.trim())
    )
      switch (
        wp.passwordStrength.meter(
          s,
          wp.passwordStrength.userInputDisallowedList(),
          s
        )
      ) {
        case -1:
          o("#pass-strength-result").addClass("bad").html(pwsL10n.unknown);
          break;
        case 2:
          o("#pass-strength-result").addClass("bad").html(pwsL10n.bad);
          break;
        case 3:
          o("#pass-strength-result").addClass("good").html(pwsL10n.good);
          break;
        case 4:
          o("#pass-strength-result").addClass("strong").html(pwsL10n.strong);
          break;
        case 5:
          o("#pass-strength-result").addClass("short").html(pwsL10n.mismatch);
          break;
        default:
          o("#pass-strength-result").addClass("short").html(pwsL10n.short);
      }
    else o("#pass-strength-result").addClass("empty").html("&nbsp;");
  }
  function _() {
    var s = o("#pass-strength-result");
    s.length &&
      (s = s[0]).className &&
      (a.addClass(s.className),
      o(s).is(".short, .bad")
        ? (i.prop("checked") || p.prop("disabled", !0), n.show())
        : (o(s).is(".empty")
            ? (p.prop("disabled", !0), i.prop("checked", !1))
            : p.prop("disabled", !1),
          n.hide()));
  }
  o(function () {
    var s,
      a,
      t,
      n,
      i = o("#display_name"),
      e = i.val(),
      r = o("#wp-admin-bar-my-account").find(".display-name");
    o("#pass1").val("").on("input pwupdate", b),
      o("#pass-strength-result").show(),
      o(".color-palette").on("click", function () {
        o(this).siblings('input[name="admin_color"]').prop("checked", !0);
      }),
      i.length &&
        (o("#first_name, #last_name, #nickname").on(
          "blur.user_profile",
          function () {
            var a = [],
              t = {
                display_nickname: o("#nickname").val() || "",
                display_username: o("#user_login").val() || "",
                display_firstname: o("#first_name").val() || "",
                display_lastname: o("#last_name").val() || "",
              };
            t.display_firstname &&
              t.display_lastname &&
              ((t.display_firstlast =
                t.display_firstname + " " + t.display_lastname),
              (t.display_lastfirst =
                t.display_lastname + " " + t.display_firstname)),
              o.each(o("option", i), function (s, e) {
                a.push(e.value);
              }),
              o.each(t, function (s, e) {
                e &&
                  ((e = e.replace(/<\/?[a-z][^>]*>/gi, "")), t[s].length) &&
                  -1 === o.inArray(e, a) &&
                  (a.push(e), o("<option />", { text: e }).appendTo(i));
              });
          }
        ),
        i.on("change", function () {
          var s;
          t === n && ((s = this.value.trim() || e), r.text(s));
        })),
      (s = o("#color-picker")),
      (a = o("#colors-css")),
      (t = o("input#user_id").val()),
      (n = o('input[name="checkuser_id"]').val()),
      s.on("click.colorpicker", ".color-option", function () {
        var s,
          e = o(this);
        if (
          !e.hasClass("selected") &&
          (e.siblings(".selected").removeClass("selected"),
          e
            .addClass("selected")
            .find('input[type="radio"]')
            .prop("checked", !0),
          t === n)
        ) {
          if (
            ((a =
              0 === a.length
                ? o('<link rel="stylesheet" />').appendTo("head")
                : a).attr("href", e.children(".css_url").val()),
            "undefined" != typeof wp && wp.svgPainter)
          ) {
            try {
              s = JSON.parse(e.children(".icon_colors").val());
            } catch (s) {}
            s && (wp.svgPainter.setColors(s), wp.svgPainter.paint());
          }
          o.post(ajaxurl, {
            action: "save-user-color-scheme",
            color_scheme: e.children('input[name="admin_color"]').val(),
            nonce: o("#color-nonce").val(),
          }).done(function (s) {
            s.success &&
              o("body")
                .removeClass(s.data.previousScheme)
                .addClass(s.data.currentScheme);
          });
        }
      }),
      g(),
      o("#generate-reset-link").on("click", function () {
        var e = o(this),
          s = {
            user_id: userProfileL10n.user_id,
            nonce: userProfileL10n.nonce,
          },
          s =
            (e.parent().find(".notice-error").remove(),
            wp.ajax.post("send-password-reset", s));
        s.done(function (s) {
          v(e, !0, s);
        }),
          s.fail(function (s) {
            v(e, !1, s);
          });
      });
  }),
    o("#destroy-sessions").on("click", function (s) {
      var e = o(this);
      wp.ajax
        .post("destroy-sessions", {
          nonce: o("#_wpnonce").val(),
          user_id: o("#user_id").val(),
        })
        .done(function (s) {
          e.prop("disabled", !0),
            e.siblings(".notice").remove(),
            e.before(
              '<div class="notice notice-success inline"><p>' +
                s.message +
                "</p></div>"
            );
        })
        .fail(function (s) {
          e.siblings(".notice").remove(),
            e.before(
              '<div class="notice notice-error inline"><p>' +
                s.message +
                "</p></div>"
            );
        }),
        s.preventDefault();
    }),
    (window.generatePassword = f),
    o(window).on("beforeunload", function () {
      if (!0 === u) return h("Your new password has not been saved.");
    }),
    o(function () {
      o(".reset-pass-submit").length &&
        o(".reset-pass-submit button.wp-generate-pw").trigger("click");
    });
})(jQuery);
