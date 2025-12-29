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
console.log(test.check("banana"));
console.log(test.length());

// console.log(test.buckets);

console.log(test.entries());

test.clear();
console.log(test.entries());

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

console.log(test.length());
console.log(test.capacity);

test.add("moon");
test.add("moo");
test.add("moow");
test.add("mooew");
test.add("mooee");
test.add("mee");

console.log(test.length());
console.log(test.capacity);

// console.log(test.buckets);

console.log("---Second Test Cases---");

const set = HashSet();

set.add("apple");
set.add("banana");
set.add("pop");

const targetIndex = set.hash("apple");
const bucketList = set.buckets[targetIndex];

console.log("Initial Bucket 4:", bucketList.toString());

bucketList.insertAt(0, "first");
console.log("After insertAt(0):", bucketList.toString());

bucketList.insertAt(2, "middle");
set.size++;
console.log("After insertAt(2):", bucketList.toString());

bucketList.insertAt(1, "middnele");
set.size++;
console.log("After insertAt(1):", bucketList.toString());

console.log("Has 'apple'?", set.has("apple"));
console.log("Has 'middle'?", set.has("middle"));
console.log("HashSet Size:", set.length());
