module.exports = {
    forEach(arr, callback) {
        // for (let i = 0; i < arr.length; i++) {
        //     const value = arr[i];
        //     callback(value, i)
        // }

        for (let i in arr) {
            callback(arr[i], i)
        }
    },

    map(arr, callback) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            result.push(callback(arr[i], i))
        }

        return result;
    }
};