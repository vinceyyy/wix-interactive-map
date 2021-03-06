import wixLocation from "wix-location";

$w.onReady(function () {
    const regionList = [
        "southeast-asia",
        "north-america",
        "china",
        "south-america",
    ];
    $w("#html1").onMessage((event) => {
        regionList.forEach((region) => {
            if (event.data === region) {
                wixLocation.to(`/${region}`);
            }
        });
    });
});
