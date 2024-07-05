function reverseList(arr) {
    let reversedList = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedList.push(arr[i]);
    }
    return reversedList;
}
