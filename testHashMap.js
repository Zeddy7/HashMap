import HashMap from "./hashMap.js";

const test = HashMap();

test.set("apple", "red");
console.log(test.get("apple"));
test.set("apple", "red");
console.log(test.get("apple"));
test.set("banana", "yellow");
console.log(test.get("banana"));
test.set("carrot", "orange");
console.log(test.get("carrot"));
test.set("dog", "brown");
console.log(test.get("dog"));

console.log(test.length());

console.log(test.has("banana"));
console.log(test.has("banan"));

console.log(test.remove("banana"));
console.log(test.get("banana"));
console.log(test.length());

// console.log(test.buckets);

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
console.log(test.entries());

test.set("elephant", "gray");
console.log(test.get("elephant"));
test.set("frog", "green");
console.log(test.get("frog"));
test.set("grape", "purple");
console.log(test.get("grape"));
test.set("hat", "black");
console.log(test.get("hat"));
test.set("ice cream", "white");
console.log(test.get("ice cream"));
test.set("jacket", "blue");
console.log(test.get("jacket"));
test.set("kite", "pink");
console.log(test.get("kite"));
test.set("lion", "golden");
console.log(test.get("lion"));

console.log(test.length());
console.log(test.capacity);

test.set("moon", "silver");
test.set("moo", "silver");
test.set("moow", "silver");
test.set("mooew", "silver");
test.set("mee", "silver");
test.set("eree", "silver");

console.log(test.length());
console.log(test.capacity);

// console.log(test.buckets);

console.log("---Second Test Cases---");

const map = HashMap();

map.set("name", "Alice");
map.set("age", "25");
console.log("Get name:", map.get("name"));
console.log("Size:", map.length());

map.set("apple", "red");
map.set("pop", "soda");

const bucketIdx = map.hash("apple");
const bucketList = map.buckets[bucketIdx];

console.log("Before insertAt:", bucketList.toString());

bucketList.insertAt(1, ["middleKey"], ["middleValue"]);
map.size++;

console.log("After insertAt:", bucketList.toString());

console.log("Get middleKey:", map.get("middleKey"));
console.log("Has apple?", map.has("apple"));

map.set("apple", "green");
console.log("Has 'middle'?", map.has("middleKey"));
console.log("Apple is now:", map.get("apple"));

map.remove("apple");
console.log("Has apple after remove?", map.has("apple"));
