// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    
    let comPre = strs[0];
    for(let i = 1; i <= strs.length - 1; i++) {
        let strTxt = strs[i];
        let temp = [];
       for(let j = 0; j <= strTxt.length - 1; j++) {
            if(strTxt[j] === comPre[j]) {
               temp += comPre[j];
            }
            else {
                break;
            }
        }
     comPre = temp; 
    }
    return comPre
};

console.log(longestCommonPrefix(["car", "cir"]));