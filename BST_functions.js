// these are all Tauhida's solutions

function bst_height1(tree) {
	return Math.max(tree.left && bst_height1(tree.left),
		tree.right && bst_height1(tree.right)) + 1;
}

function bst_height2(tree) {
    if (tree.left && tree.right)
        return Math.max(bst_height2(tree.left),
            bst_height2(tree.right)) + 1;
    if (tree.left) 
		return bst_height2(tree.left) + 1;
    if (tree.right) 
		return bst_height2(tree.right) + 1;
    return 1;
}

function is_bst(tree, minimum, maximum) { 
	if (minimum !== undefined && tree.key < minimum) 
		return false;
	if (maximum !== undefined && tree.key > maximum) 
		return false;
	if (tree.left  && !is_bst(tree.left , minimum, tree.key)) 
		return false;
	if (tree.right && !is_bst(tree.right, tree.key, maximum)) 
		return false;
	return true;
}

//Write an algorithm to find the thirdlargest value in a binary search tree
function nth_largest(tree, state) { 
	//Finding the largest node means traversing the right first.
	if (tree.right) {
		nth_largest(tree.right, state);
		if (state.result) return;
	}
	//if (!--state.n) {   
	if (--state.n<=0) {       // More idiomatic JS I think...
		//Found it.
		state.result = tree.key; 
		return;
	}
	if (tree.left) nth_largest(tree.left, state);
}

function third_largest(tree) {
	//Special case: empty tree.
	if (tree.key == null) 
		return null;
	var state = {n: 3, result: null};
	nth_largest(tree, state);
	return state.result;
}

//Implement a function to check if a tree is balanced (i.e. a tree where no two leaves differ 
//in distance from the root by more than one).
function isBalanced (tree) {
    if (!tree.left) {
        return !(tree.right && (tree.right.left || tree.right.right));
    }
    if (!tree.right) {
        return !(tree.left && (tree.left.left || tree.left.right));
    }
    return isBalanced(tree.left) && isBalanced(tree.right);
}

module.exports = { isBalanced, is_bst, bst_height1, bst_height2, nth_largest, third_largest }
