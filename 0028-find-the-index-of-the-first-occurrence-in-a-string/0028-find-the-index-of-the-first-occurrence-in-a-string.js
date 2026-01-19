/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === "") return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let part = haystack.slice(i, i + needle.length);
        if (part === needle) {
            return i;
        }
    }

    return -1;
};
