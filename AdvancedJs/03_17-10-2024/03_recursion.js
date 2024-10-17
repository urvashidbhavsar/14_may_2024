var decre = (num) => {
    if (num == 0) {
        return
    }
    console.log(num);
    decre(num - 1);
}
decre(5)