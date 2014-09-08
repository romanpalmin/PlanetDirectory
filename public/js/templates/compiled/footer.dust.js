/**
 * Created by rpalmin on 04.09.2014.
 */
(function() {
    dust.register("footer_template", body_0);

    function body_0(chk, ctx) {
        return chk.write("&copy 2014 <a class='nav' href='").reference(ctx.get("href"), ctx, "h").write("'>").reference(ctx.get("title"), ctx, "h").write("</a>");
    }
    return body_0;
})();

