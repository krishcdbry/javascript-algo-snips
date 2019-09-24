
function TowerOfHanoi(n) {
    let c = 0;

    const move = (n, source, destination, buffer) => {
        if (n > 0) {
            move(n-1, source, buffer, destination);
            c++;
            move(n-1, buffer, destination, source);
        }
    }

    move(n, "A", "C", "B");
    return c;
}

module.exports = TowerOfHanoi;
