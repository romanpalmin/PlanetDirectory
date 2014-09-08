/**
 * Created by rpalmin on 04.09.2014.
 */
(function() {
    dust.register("div_template", body_0);

    function body_0(chk, ctx) {
        return chk.write("<div id=\"").reference(ctx.get("id"), ctx, "h").write("\" />");
    }
    return body_0;
})();