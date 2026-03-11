$(function () {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });

    async function webtorDownload(resourceId, itemId, csrfToken) {
        let headersList = {
            Accept: "*/*",
            "x-csrf-token": csrfToken,
            "x-layout": "{{ template 'main' . }}",
            "x-requested-with": "XMLHttpRequest",
            "Content-Type": "application/x-www-form-urlencoded",
        };

        let bodyContent = "resource-id=" + resourceId + "&item-id=" + itemId;

        let response = await fetch("https://webtor.io/download-file", {
            method: "POST",
            body: bodyContent,
            headers: headersList,
        });

        let data = await response.text();
        console.log(data);
    }

    async function webtorSite(torrentUrl) {
        let headersList = {
            Accept: "*/*",
        };
        let torrentId = torrentUrl.split("/").pop().toLowerCase();
        let url = `https://webtor.io/${torrentId}`;

        let response = await fetch(url, {
            method: "GET",
            headers: headersList,
        });

        let data = await response.text();

        console.log(data);

        let csrfToken = data.match('window._CSRF = "(.*)"')[1];
        let resourceId = data.match(
            '<input type="hidden" name="resource-id" value="(.*)"',
        )[1];
        let itemId = data.match(
            '<input type="hidden" name="item-id" value="(.*)"',
        )[1];

        webtorDownload(resourceId, itemId);
        console.log(csrfToken);
        console.log(resourceId);
        console.log(itemId);
    }

    const webtor = () => {
        $.ajax({
            type: "GET",
            url: `${this.location.origin}/scrape-torrent`,
            success: function (response) {
                console.log(response);
            },
            error: function (response) {
                console.log(response);
            },
        });
    };

    webtor();

    $(".btn-download").on("click", function () {
        let url = $(this).data("url");

        webtorSite(url);
    });
});
