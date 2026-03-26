$(function () {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });

    $(document).on("click", ".btn-download", function () {
        const torrentHashed = $(this).data("hash").toLowerCase();
        console.log("Torrent Hash:", torrentHashed);
        if (!torrentHashed) {
            console.error("Invalid torrent hash");
            return;
        }
        directDownload(torrentHashed);
    });

    const directDownload = (torrentHashed) => {
        let urlBase = "https://torrent-direct-link-wxx9.onrender.com";
        let endPoint = `/torrent/${torrentHashed}`;

        $.ajax({
            type: "GET",
            url: urlBase + endPoint,
            dataType: "json",
            beforeSend: function () {
                $(".loading").html(`<div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> <div class="ms-2">Preparing download...</div>`);
                $(".info").html("");
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
                    $(".info")
                        .html(`<div class="alert alert-danger" role="alert">
                        Failed to prepare download. Please try again later.
                    </div>`);
                },
            )
            .always(() => {
                $(".loading").html("");
            });
    };
});
