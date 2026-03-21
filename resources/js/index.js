$(function () {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });

    $(".btn-download").on("click", function () {
        const torrentHashed = $(this)
            .data("url")
            .split("/download/")[1]
            .toLowerCase();
        const title = $("h1.title").text().trim();
        if (!torrentHashed || !title) {
            console.error("Invalid torrent URL or title");
            return;
        }
        directDownload(torrentHashed, title);
    });

    const directDownload = (torrentHashed, title) => {
        let urlBase = "https://torrent-direct-link-wxx9.onrender.com";
        let endPoint = `/torrent/${torrentHashed}`;

        $.ajax({
            type: "GET",
            url: urlBase + endPoint,
            dataType: "json",
            beforeSend: function () {
                $(".loading")
                    .html(`<div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> <div class="ms-2">Preparing download...</div>`);
            },
        })
            .then(
                (res) => {
                    if (res && res.download_url) {
                        window.location.href = res.download_url;
                    }
                },
                (err) => {
                    console.error(err);
                },
            )
            .always(() => {
                $(".loading").html("");
            });
    };
});
