
function pageCount(n, p) {
    let start = p / 2;
    let end;
    if ((n % 2) == 1) {
        end = (n - p) / 2;
    } else {
        end = (n - p + 1) / 2;
    }

    return Math.floor(Math.min(start, end));
}