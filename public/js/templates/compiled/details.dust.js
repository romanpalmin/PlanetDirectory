/**
 * Created by rpalmin on 04.09.2014.
 */
(function() {
    dust.register("details_template", body_0);
    function body_0(chk, ctx) {
        return chk.write("<table class='info'><tr  class='header'><td colspan='3'><br/>").reference(ctx.get("namerus"), ctx, "h").write(" (").reference(ctx.get("name"), ctx, "h").write(")<hr /</td></tr><tr><td rowspan='3' class='left'><img src = './img/").reference(ctx.get("img"), ctx, "h").write("'/></td><td  class='center'>№ п/п от Солнца: <span class='right'>").reference(ctx.get("id"), ctx, "h").write("</span></td></tr><tr><td class='center'>Расстояние: <span class='right'>").reference(ctx.get("dist"), ctx, "h").write("</span></td></tr><tr><td class='center'>Масса: <span class='right'>").reference(ctx.get("weight"), ctx, "h").write("</span></td></tr><tr><td colspan='3'><hr /><div class = 'desc'>").reference(ctx.get("desc"), ctx, "h").write("</div></td></tr></table>");
    }
    return body_0;
})();