/**
 * Created by rpalmin on 04.09.2014.
 */
(function() {
    dust.register("header_template", body_0);

    function body_0(chk, ctx) {
        return chk.write("<span class=header>").reference(ctx.get("title"), ctx, "h").write("</span>");
    }
    return body_0;
})();