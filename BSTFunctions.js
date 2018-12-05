// Functions for Binary Search Trees

// Find how many levels a BST is
function findBSTLevel(tree){
    let leftDepth = 0;
    let rightDepth = 0;

    function findDepth(branch, side, counter){
        while(side){
            counter++;
            branch = side;
            findDepth(branch, side, counter);
        } 

        return counter;
    }
    
    let leftSide = findDepth(tree, tree.left, leftDepth);
    let rightSide = findDepth(tree, tree.right, rightDepth);

    
    return Math.max(leftDepth, rightDepth);

}
