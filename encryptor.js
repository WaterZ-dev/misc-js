! function() {
    const e = document,
        t = document.head,
        n = document.body,
        o = e.createElement("style");
    o.appendChild(e.createTextNode("\n    :root{\n    --muzyn-font: Ubuntu;\n    --muzyn-border: #000;\n    --muzyn-bg: #5865f2;\n    --header-color: #fff;\n    --header-bg: #000;\n    --btn-font-wt: bold;\n    --btn-color: #fff;\n    --btn-bg: #000;\n    --btn-hover-bg: #5800e0;\n    --ph-color: #000;\n    --input-bg: #e5e5e5;\n    --input-color: #000;\n    --input-border-color: #999;\n    --input-border-sz: 2px;\n    --input-focus-border: #000;\n    --input-focus-bg: #fff;\n    --dots: #000;\n    --dots-hover: #fff;\n    }\n#muzyn {\nfont-family: var(--muzyn-font);\nposition: absolute;\nz-index: 6969;\nborder: 2px solid var(--muzyn-border);\nwidth:300px;\nheight:150px;\ntop: 10%;\nleft: 10%;\nbackground-size: cover;\nposition:absolute;\nbox-shadow: 25px 25px 25px #000;\nborder-radius: 11px;\nbackground: var(--muzyn-bg);\n}\n#muzyn-header {\npadding: 2px;\ntext-align: center;\ncursor: move;\nz-index: 6970;\nbackground-color: var(--header-bg);\ncolor: var(--header-color);\nborder-radius: 8px 8px 0 0;\nfont-size: 13px;\n}\n.waterz-btn, #bambo{\nfont: 16px var(--muzyn-font);\n}\n.waterz-btn{\nfont-weight: var(--btn-font-wt);\nmargin: 0 6px 0 6px;\npadding: 0.4rem 1rem 0.4rem 1rem;\nbackground-color: var(--btn-bg);\ncolor: var(--btn-color);\ntransition: background 0.4s;\nborder-radius: 6px;\nborder: none;\noutline: none;\n}\n.waterz-btn:hover{\nbackground: var(--btn-hover-bg);\n}\n.waterz-btn:active{\ntransform: scale(0.97);\n}\n::placeholder{\nfont-size: 15px;\ncolor: var(--ph-color);\nopacity: 0.75;\n}\n.waterz-input{\nbackground-color: var(--input-bg);\ncolor: var(--input-color);\nborder: var(--input-border-sz) solid var(--input-border-color);\nbox-sizing: border-box;\ntransition: background 0.4s, border-color 0.4s;\noutline: none;\n}\n.waterz-input:focus {\n        border-color: var(--input-focus-border);\n        background: var(--input-focus-bg);\n     }\n#bambo{\nwidth: 240px;\nborder-radius: 6px;\n}\n#waterz-menu{\nfont-size: 12px;\ndisplay: none;\noverflow-y: scroll;\nmargin: 10px;\nzIndex: 6972;\nwidth: 200px;\nheight: 250px;\nborder: 1px solid #000;\nbackground-color: #fff;\ncolor: #000;\nborder-radius: 8px;\n}\n#--id{\npadding: 0px 20px 0px 20px;\ncolor: #228B22;\ncursor: pointer;\nzIndex: 6971;\nfont: 16px Arial;\nfont-weight: bold;\n}\n#x-id{\npadding: 0 20px 0 20px;\ncolor: #f00;\ncursor: pointer;\nzIndex: 6971;\nfont: 16px Arial;\nfont-weight: bold;\n}\n#waterz-dots{\ncolor: var(--dots);\npadding: 0 0 0 20px;\nfont: 20px Arial;\ncursor: pointer;\ntransition: all 0.4s;\nfont-weight: bold;\n}\n#waterz-dots:hover{\ncolor: var(--dots-hover);\n}\n#waterz-menu-container{\npadding: 10px;\nmargin: 0 20px 0 20px;\n}\n#waterz-main{\nuser-select: none;\n}\n#waterz-content-holder{\npadding: 30px 30px 30px 30px;\n}\n#minimized{\nfont-size: 24px;\nposition: absolute;\nz-index: 6969;\ncolor: #828282;\nbackground-color: #00000000;\ncursor: pointer;\ndisplay: none;\ntop: 2%;\nleft: 2%;\nwidth: 75px;\nheight: 50px;\nborder-radius: 4px;\n}\n")), t.appendChild(o);
    const r = e.createElement("link");
    r.rel = "preconnect", r.href = "https://fonts.googleapis.com", t.appendChild(r);
    const d = e.createElement("link");
    d.rel = "preconnect", d.href = "https://fonts.gstatic.com", d.crossorigin = "anonymous", t.appendChild(d);
    const m = e.createElement("link");
    m.href = "https://fonts.googleapis.com/css2?family=PT+Sans&family=Ubuntu&family=Ubuntu+Mono&family=VT323&family=Quicksand&family=Open+Sans&display=swap", m.rel = "stylesheet", t.appendChild(m);
    const c = e.createElement("div");

    function l(t) {
        return e.getElementById(t)
    }

    function u(t) {
        return e.getElementsByClassName(t)
    }

    function s(e) {
        var t = 0,
            n = 0,
            o = 0,
            r = 0;

        function d(e) {
            (e = e || window.event).preventDefault(), o = e.clientX, r = e.clientY, document.onmouseup = c, document.onmousemove = m
        }

        function m(d) {
            (d = d || window.event).preventDefault(), t = o - d.clientX, n = r - d.clientY, o = d.clientX, r = d.clientY, e.style.top = e.offsetTop - n + "px", e.style.left = e.offsetLeft - t + "px"
        }

        function c() {
            document.onmouseup = null, document.onmousemove = null
        }
        document.getElementById(e.id + "-header") ? document.getElementById(e.id + "-header").onmousedown = d : e.onmousedown = d
    }

    function p(e) {
        var t = document.querySelectorAll(e);
        return 1 == t.length ? t[0] : 0 == t.length ? null : t
    }

    function y() {
        p("#theme-classic").checked ? (document.documentElement.style.setProperty("--muzyn-font", "Ubuntu"), document.documentElement.style.setProperty("--muzyn-border", "#000"), document.documentElement.style.setProperty("--muzyn-bg", "#5865f2"), document.documentElement.style.setProperty("--header-color", "#fff"), document.documentElement.style.setProperty("--header-bg", "#000"), document.documentElement.style.setProperty("--btn-font-wt", "bold"), document.documentElement.style.setProperty("--btn-color", "#fff"), document.documentElement.style.setProperty("--btn-bg", "#000"), document.documentElement.style.setProperty("--btn-hover-bg", "#5800e0"), document.documentElement.style.setProperty("--ph-color", "#000"), document.documentElement.style.setProperty("--input-bg", "#e5e5e5"), document.documentElement.style.setProperty("--input-color", "#000"), document.documentElement.style.setProperty("--input-border-color", "#999"), document.documentElement.style.setProperty("--input-border-sz", "2px"), document.documentElement.style.setProperty("--input-focus-border", "#0"), document.documentElement.style.setProperty("--input-focus-bg", "#fff"), document.documentElement.style.setProperty("--dots", "#000"), document.documentElement.style.setProperty("--dots-hover", "#fff")) : p("#theme-invert").checked ? (document.documentElement.style.setProperty("--muzyn-font", "Ubuntu Mono"), document.documentElement.style.setProperty("--muzyn-border", "#5865F2"), document.documentElement.style.setProperty("--muzyn-bg", "#000"), document.documentElement.style.setProperty("--header-color", "#fff"), document.documentElement.style.setProperty("--header-bg", "#5865F2"), document.documentElement.style.setProperty("--btn-font-wt", "normal"), document.documentElement.style.setProperty("--btn-color", "#fff"), document.documentElement.style.setProperty("--btn-bg", "#5865F2"), document.documentElement.style.setProperty("--btn-hover-bg", "#5800e0"), document.documentElement.style.setProperty("--ph-color", "#fff"), document.documentElement.style.setProperty("--input-bg", "#5865F2"), document.documentElement.style.setProperty("--input-color", "#fff"), document.documentElement.style.setProperty("--input-border-color", "#5800e0"), document.documentElement.style.setProperty("--input-border-sz", "1px"), document.documentElement.style.setProperty("--input-focus-border", "#fff"), document.documentElement.style.setProperty("--input-focus-bg", "#5800e0"), document.documentElement.style.setProperty("--dots", "#5865F2"), document.documentElement.style.setProperty("--dots-hover", "#fff")) : p("#theme-hc").checked ? (document.documentElement.style.setProperty("--muzyn-font", "Calibri"), document.documentElement.style.setProperty("--muzyn-border", "#1aebff"), document.documentElement.style.setProperty("--muzyn-bg", "#000"), document.documentElement.style.setProperty("--header-color", "#000"), document.documentElement.style.setProperty("--header-bg", "#1aebff"), document.documentElement.style.setProperty("--btn-font-wt", "bold"), document.documentElement.style.setProperty("--btn-color", "#000"), document.documentElement.style.setProperty("--btn-bg", "#3ff23f"), document.documentElement.style.setProperty("--btn-hover-bg", "#ffff00"), document.documentElement.style.setProperty("--ph-color", "#000"), document.documentElement.style.setProperty("--input-bg", "#3ff23f"), document.documentElement.style.setProperty("--input-color", "#000"), document.documentElement.style.setProperty("--input-border-color", "#FF00BD"), document.documentElement.style.setProperty("--input-border-sz", "2px"), document.documentElement.style.setProperty("--input-focus-border", "#ffff00"), document.documentElement.style.setProperty("--input-focus-bg", "#FF00BD"), document.documentElement.style.setProperty("--dots", "#FF00BD"), document.documentElement.style.setProperty("--dots-hover", "#3ff23f")) : p("#theme-neutral").checked ? (document.documentElement.style.setProperty("--muzyn-font", "Quicksand"), document.documentElement.style.setProperty("--muzyn-border", "#888"), document.documentElement.style.setProperty("--muzyn-bg", "#b0b0b0"), document.documentElement.style.setProperty("--header-color", "#fff"), document.documentElement.style.setProperty("--header-bg", "#888"), document.documentElement.style.setProperty("--btn-font-wt", "500"), document.documentElement.style.setProperty("--btn-color", "#fff"), document.documentElement.style.setProperty("--btn-bg", "#888"), document.documentElement.style.setProperty("--btn-hover-bg", "#666"), document.documentElement.style.setProperty("--ph-color", "#fff"), document.documentElement.style.setProperty("--input-bg", "#888"), document.documentElement.style.setProperty("--input-color", "#fff"), document.documentElement.style.setProperty("--input-border-color", "#666"), document.documentElement.style.setProperty("--input-border-sz", "1px"), document.documentElement.style.setProperty("--input-focus-border", "#ddd"), document.documentElement.style.setProperty("--input-focus-bg", "#666"), document.documentElement.style.setProperty("--dots", "#ddd"), document.documentElement.style.setProperty("--dots-hover", "#666")) : p("#theme-dark").checked ? (document.documentElement.style.setProperty("--muzyn-font", "Open Sans"), document.documentElement.style.setProperty("--muzyn-border", "#1e2124"), document.documentElement.style.setProperty("--muzyn-bg", "#444959"), document.documentElement.style.setProperty("--header-color", "#fff"), document.documentElement.style.setProperty("--header-bg", "#232338"), document.documentElement.style.setProperty("--btn-font-wt", "500"), document.documentElement.style.setProperty("--btn-color", "#fff"), document.documentElement.style.setProperty("--btn-bg", "#232338"), document.documentElement.style.setProperty("--btn-hover-bg", "#000"), document.documentElement.style.setProperty("--ph-color", "#fff"), document.documentElement.style.setProperty("--input-bg", "#232338"), document.documentElement.style.setProperty("--input-color", "#fff"), document.documentElement.style.setProperty("--input-border-color", "#1e2124"), document.documentElement.style.setProperty("--input-border-sz", "2px"), document.documentElement.style.setProperty("--input-focus-border", "#aaa"), document.documentElement.style.setProperty("--input-focus-bg", "#424549"), document.documentElement.style.setProperty("--dots", "#aaa"), document.documentElement.style.setProperty("--dots-hover", "#1e2124")) : p("#theme-light").checked && (document.documentElement.style.setProperty("--muzyn-font", "Roboto"), document.documentElement.style.setProperty("--muzyn-border", "#7289DA"), document.documentElement.style.setProperty("--muzyn-bg", "#fdfdfd"), document.documentElement.style.setProperty("--header-color", "#000"), document.documentElement.style.setProperty("--header-bg", "#7289DA"), document.documentElement.style.setProperty("--btn-font-wt", "normal"), document.documentElement.style.setProperty("--btn-color", "#000"), document.documentElement.style.setProperty("--btn-bg", "#bfc7e0"), document.documentElement.style.setProperty("--btn-hover-bg", "#7289DA"), document.documentElement.style.setProperty("--ph-color", "#000"), document.documentElement.style.setProperty("--input-bg", "#bfc7e0"), document.documentElement.style.setProperty("--input-color", "#000"), document.documentElement.style.setProperty("--input-border-color", "#7289DA"), document.documentElement.style.setProperty("--input-border-sz", "1px"), document.documentElement.style.setProperty("--input-focus-border", "#bfc7e0"), document.documentElement.style.setProperty("--input-focus-bg", "#7289DA"), document.documentElement.style.setProperty("--dots", "#57F287"), document.documentElement.style.setProperty("--dots-hover", "#7289DA"))
    }
    c.id = "waterz-main", c.innerHTML = '\n<div id="minimized">W̵̪̲͖̮̾̈́̒͂̔a̷̡̙̭̹̋̔̉́̆t̴̪̒̄̃̌͝ē̶̥͕̳̠̱̅͂̂͘r̸͇̹͙̍͛̐͋Z̶̰̋E̷̛̜̋̐n̴̠͎͕͓̹̄̎c̴̱̔r̶͔̬̝͓̳͂̇̕̕y̴̡̩̹͔͕͊̆p̵̗͉̃͜t̸̘̟̄̋̂͑o̸̮̙̿͐̀͛͜r̴̭̽</div>\n<div id="muzyn"><div id="muzyn-header"><a title="minimize" id="--id">—</a>WaterZ Encryptor [beta] v1.4 <a title="close" id="x-id">X</a>\n  </div>\n  <div id="waterz-content-holder"><button class="waterz-btn">Encrypt</button>\n  <button class="waterz-btn">Decrypt</button><span title="more options" id="waterz-dots">⋮</span><div id="waterz-menu">\n  <div id="waterz-menu-container">\n  <fieldset style="width:110px">\n  <legend>Themes</legend>\n    <input type="radio" id="theme-classic" name="themes"checked>WaterZ Classic<br>\n    <input type="radio" id="theme-invert" name="themes">WaterZTwo<br>\n    <input type="radio" id="theme-hc" name="themes">High Contrast<br>\n    <input type="radio" id="theme-neutral" name="themes">Neutral<br>\n    <input type="radio" id="theme-dark" name="themes">Dark<br>\n    <input type="radio" id="theme-light" name="themes">Light<br>\n    <input type="radio" id="theme-custom" name="themes" disabled="disabled">Custom... <i>(coming soon)</i><br>\n    </fieldset>\n    <fieldset>\n  <legend>Customization</legend>\n    # <input style="width:75px" class="waterz-input" type="text" id="shadowColor" name="themes"checked>Shadow Color (Hex)<br>\n    <input type="checkbox" id="waterz-save" disabled="disabled">Remember my settings? <i>(coming soon)</i><br>\n    <input type="checkbox" id="waterz-devmode">*<i>experimental</i>* Developer Mode?<br>\n    <input type="checkbox" id="options-theme" disabled="disabled" checked>Make themes apply to this menu? <i>(coming soon)</i><br>\n    </fieldset><br>\n    <strong>more soming soon! <a href="https://waterz.glitch.me">follow for updates</a></strong><br><br>\n    </div>\n  </div>\n  <br><br><input placeholder="Text to encrypt/decrypt" type="text" class="waterz-input" id="bambo"></input></div></div>\n', n.appendChild(c), l("x-id").onclick = function() {
        document.getElementById("waterz-main").remove()
    }, l("--id").onclick = function() {
        document.getElementById("minimized").style.display = "block", document.getElementById("muzyn").style.display = "none"
    }, l("minimized").onclick = function() {
        document.getElementById("muzyn").style.display = "block", document.getElementById("minimized").style.display = "none"
    }, l("waterz-dots").onclick = function() {
        let e = l("waterz-menu").style,
            t = l("bambo").style;
        "none" !== e.display ? (e.display = "none", t.display = "block") : (e.display = "flex", t.display = "none")
    }, u("waterz-btn")[0].onclick = function() {
        ! function(e) {
            let t = "";
            for (i = 0; i < e.length; i++) i < e.length - 1 ? (t += e.charCodeAt(i) + 10, t += "|") : t += e.charCodeAt(i) + 10;
            document.getElementById("bambo").value = t
        }(l("bambo").value)
    }, u("waterz-btn")[1].onclick = function() {
        ! function(e) {
            var t = "",
                n = l("bambo").value.split("|");
            for (i = 0; i < n.length; i++) t += String.fromCharCode(n[i] - 10);
            document.getElementById("bambo").value = t
        }()
    }, s(document.getElementById("muzyn")), s(document.getElementById("minimized")), p("#theme-classic").addEventListener("change", function(e) {
        this.checked && y()
    }, !1), p("#theme-invert").addEventListener("change", function(e) {
        this.checked && y()
    }, !1), p("#theme-hc").addEventListener("change", function(e) {
        this.checked && y()
    }, !1), p("#theme-neutral").addEventListener("change", function(e) {
        this.checked && y()
    }, !1), p("#theme-dark").addEventListener("change", function(e) {
        this.checked && y()
    }, !1), p("#theme-light").addEventListener("change", function(e) {
        this.checked && y()
    }, !1), p("#shadowColor").addEventListener("input", function(e) {
        l("muzyn").style.boxShadow = "25px 25px 25px #" + this.value
    }, !1)
}();
