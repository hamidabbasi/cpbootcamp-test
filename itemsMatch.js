const items = [
    ['phone', 'blue', 'pixel'],
    ['computer', 'silver', 'lenovo'],
    ['phone', 'gold', 'iphone']
  ],
  ruleKey = 'color', ruleValue = 'silver';

/* 2nd time test will show 2 caz on type phone is two times 
const items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
*/
var countMatches = function(items, ruleKey, ruleValue) {
  count = 0;
  if (ruleKey === 'type') {
    for (let i = 0; i < items.length; i++) {
      if (items[i][0] == ruleValue) 
      count++;
    }
  }
  if (ruleKey === 'color') {
    for (let i = 0; i < items.length; i++) {
      if (items[i][1] == ruleValue) 
      count++;
    }
  }
  if (ruleKey === 'name') {
    for (let i = 0; i < items.length; i++) {
      if (items[i][2] == ruleValue) 
      count++;
    }
  }
  //console.log(count);
  return count;
}; 

console.log(countMatches(items,ruleKey,ruleValue));

  // You are given an array items, where each items[i] = [typei, colori, namei] describes the
  // type, color, and name of the ith item. You are also given a rule represented by two strings,
  // ruleKey and ruleValue.

  // The ith item is said to match the rule if one of the following is true:

  // ruleKey == "type" and ruleValue == typei.
  // ruleKey == "color" and ruleValue == colori.
  // ruleKey == "name" and ruleValue == namei.
  // Return the number of items that match the given rule.

  // Example 1:

  // Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
  // Output: 1
  // Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

  // Example 2:

  // Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
  // Output: 2
  // Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"].
  // Note that the item ["computer","silver","phone"] does not match.

