// find the height of a BST
function findHeightBST(bst){
  let level = 0;
  function countLevel(node){
      if (node.left){
          return level++;
      } else if (node.right){
          return level++
      } else return 0
  }
  while (level){
      countLevel(bst.key)
  }
}
