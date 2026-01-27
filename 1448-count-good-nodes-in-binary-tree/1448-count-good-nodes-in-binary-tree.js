/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
    function dfs(node,max=root.val){
        if(!node)return 0
        let count = 0
        if(node.val >= max){
            count++
        }
        max = Math.max(max,node.val)
        count += dfs(node.left,max)
        count += dfs(node.right,max)
        return count
    }
    return dfs(root)
};