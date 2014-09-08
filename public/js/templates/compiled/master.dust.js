/**
 * Created by rpalmin on 04.09.2014.
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