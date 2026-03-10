$(function () {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        },
    });

    const scrapeTorrent = (torrentUrl) => {

        let formData = {
            url: torrentUrl
        }

        $.ajax({
            type: "GET",
            url: `${this.location.origin}/scrape-torrent`,
            data: formData,
            success: function (response) {
                console.log(response);
            },
            error: function (response) {
                console.log(response);
            }
        });
    }

    $(".btn-download").on("click", function () {
        let url = $(this).data("url");

        scrapeTorrent(url);
    });
});
