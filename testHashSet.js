import HashSet from "./hashSet.js";

const test = HashSet();

test.add("apple");
console.log(test.check("apple"));
test.add("apple");
console.log(test.check("apple"));
test.add("banana");
console.log(test.check("banana"));
test.add("carrot");
console.log(test.check("carrot"));
test.add("dog");
console.log(test.check("dog"));

console.log(test.length());

console.log(test.has("banana"));
console.log(test.has("banan"));

console.log(test.remove("banana"));
console.log(test.check("apple"));
console.log(test.length());

console.log(test.buckets);
console.log(test.entries());
test.clear();

test.add("elephant");
console.log(test.check("elephant"));
test.add("frog");
console.log(test.check("frog"));
test.add("grape");
console.log(test.check("grape"));
test.add("hat");
console.log(test.check("hat"));
test.add("ice cream");
console.log(test.check("ice cream"));
test.add("jacket");
console.log(test.check("jacket"));
test.add("kite");
console.log(test.check("kite"));
test.add("lion");
console.log(test.check("lion"));
test.add("moon");
test.add("moo");
test.add("moow");
test.add("mooew");

console.log(test.length());

console.log(test.buckets);
