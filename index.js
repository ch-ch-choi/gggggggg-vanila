const TAG = "[index.js]"
const CAT_EVENT = "[EVENT]"

function indexFirst(char){

}

$(".book-item-dsc").hover(function (e) {
        var bookId = $(e.currentTarget).data("idx");
        var portraitPath = "src/portrait/pt_" + bookId + ".png"
        // var currentIndicate = $(e.currentTarget).find(".book-item-indicator")
        // var allIndicate = $('.book-table').find(".book-item-indicator")
        // console.log(TAG, CAT_EVENT, portraitPath)
        $(".book-item-portrait").attr("src", portraitPath);
        
        $('.book-table').find(".book-item-indicator").removeClass("hoverd")
        $(e.currentTarget).find(".book-item-indicator").addClass("hoverd")
    }
);

$(".book-item-dsc").click(function (e) {
    var bookId = $(e.currentTarget).data("idx");
    sessionStorage.getItem("selectedVOL", bookId)
});

$(".kor-index-toggle").click(function (e) {
    $(".kor-index-selecter").toggle();
});

$(".eng-index-toggle").click(function (e) {
    $(".eng-index-selecter").toggle();
});
