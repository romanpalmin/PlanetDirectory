/**
 * Created by rpalmin on 07.09.2014.
 * Шаблоны приложения
 */

/**
 * Header
 */
(function() {
    dust.register("header_template", body_0);

    function body_0(chk, ctx) {
        return chk.write("<span class=header>").reference(ctx.get("title"), ctx, "h").write("</span>");
    }
    return body_0;
})();

/**
 * master
 */
(function() {
    dust.register("master_template", body_0);

    function body_0(chk, ctx) {
        return chk.write("<table class=master_table>").section(ctx.get("data"), ctx, {
            "block": body_1
        }, null).write("</table>");
    }
    function body_1(chk, ctx) {
        return chk.write("<tr class='rowselect' id ='").reference(ctx.get("id"), ctx, "h").write("'><td>").reference(ctx.get("namerus"), ctx, "h").write("</td></tr>");
    }
    return body_0;
})();

/**
 * Details
 */
(function() {
    dust.register("details_template", body_0);
    function body_0(chk, ctx) {
        return chk.write("<table class='info'><tr  class='header'><td colspan='3'><br/>").reference(ctx.get("namerus"), ctx, "h").write(" (").reference(ctx.get("name"), ctx, "h").write(")<hr /</td></tr><tr><td rowspan='3' class='left'><img src = './img/").reference(ctx.get("img"), ctx, "h").write("'/></td><td  class='center'>№ п/п от Солнца: <span class='right'>").reference(ctx.get("id"), ctx, "h").write("</span></td></tr><tr><td class='center'>Расстояние: <span class='right'>").reference(ctx.get("dist"), ctx, "h").write("</span></td></tr><tr><td class='center'>Масса: <span class='right'>").reference(ctx.get("weight"), ctx, "h").write("</span></td></tr><tr><td colspan='3'><hr /><div class = 'desc'>").reference(ctx.get("desc"), ctx, "h").write("</div></td></tr></table>");
    }
    return body_0;
})();

/**
 * Footer
 */
(function() {
    dust.register("footer_template", body_0);

    function body_0(chk, ctx) {
        return chk.write("&copy 2014 <a class='nav' href='").reference(ctx.get("href"), ctx, "h").write("'>").reference(ctx.get("title"), ctx, "h").write("</a>");
    }
    return body_0;
})();

/**
 * Div
 */
(function() {
    dust.register("div_template", body_0);

    function body_0(chk, ctx) {
        return chk.write("<div id=\"").reference(ctx.get("id"), ctx, "h").write("\" />");
    }
    return body_0;
})();

/**
 * Page 404
 */
(function() {
    dust.register("p404_template", body_0);

    function body_0(chk, ctx) {
        return chk.write("<div class='page404'><br/><br/>4 0 4<br/>Нет данных.<br/>Выберите планету из cписка</div");
    }
    return body_0;
})();