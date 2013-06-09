$(function () {
    $("#art-search").submit(function () {
        var b = new google.search.CustomSearchControl("008199936957223100674:lkmumumlrb8", {});
        b.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
        var a = new google.search.DrawOptions;
        a.enableSearchResultsOnly();
        b.draw("cse", a);
        (a = $("#searchq").val()) && b.execute(a);
        return !1
    })
});