function addition(...nums) {
    return nums.reduce((sum, nums) => sum + nums, 0)
}
console.log(addition(...[3, 1, 2]));
