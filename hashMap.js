// import LinkedList from "./linkedList.js";

function HashMap() {
   let capacity = 16;
   let loadFactor = 0.75;
   let buckets = new Array(capacity).fill(null).map(() => LinkedList());
   return {
      capacity,
      loadFactor,
      buckets,
      size: 0,

      hash(key) {
         let hashCode = 0;
         const primeNumber = 31;

         for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
         }

         return hashCode;
      },

      set(key, value) {
         let index = this.hash(key);
         let list = buckets[index];

         if (this.size == capacity * this.loadFactor) this.resize();
         if (this.size >= capacity * loadFactor) {
            this.resize();
            // Recalculate index because capacity changed!
            index = this.hash(key);
            list = buckets[index];
         }
         let node = list.findIndex(key);
         if (node) {
            node.value = value; // Update existing
         } else {
            list.append(key, value); // Add new node
            this.size++;
         }
         if (buckets[index]) {
            let nestedList = buckets[index];

            for (const subArray of nestedList) {
               if (subArray[0] === key) {
                  subArray[1] = value;
                  return;
               }
            }

            buckets[index].push([key, value]);
         } else {
            buckets[index] = [[key, value]];
         }

         this.size++;
      },

      get(key) {
         let index = this.hash(key);
         if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
         }
         if (!buckets[index].find(x => x[0] === key)) return null;

         return buckets[index].find(x => x[0] === key)[1];
      },

      has(key) {
         let index = this.hash(key);
         if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
         }
         if (!buckets[index].find(x => x[0] === key)) return false;

         return true;
      },

      remove(key) {
         let index = this.hash(key);
         let nestedList = buckets[index];

         for (let i = 0; i < nestedList.length; i++) {
            if (nestedList[i][0] === key) {
               nestedList.splice(i, 1);
               nestedList;
               this.size--;
               return true;
            }
         }

         return false;
      },

      length() {
         return this.size;
      },

      clear() {
         buckets = new Array(capacity).fill(null).map(() => []);
         this.buckets = buckets;
         this.size = 0;
      },

      keys() {
         return buckets.flat().map(p => p[0]);
      },

      values() {
         return buckets.flat().map(p => p[1]);
      },

      entries() {
         return buckets.flat();
      },

      resize() {
         const oldEntries = this.entries();
         capacity *= 2;
         this.capacity = capacity;

         this.size = 0;
         buckets = new Array(capacity).fill(null).map(() => []);
         this.buckets = buckets;

         oldEntries.forEach(([key, value]) => this.set(key, value));
      },
   };
}

const test = HashMap();

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
console.log(test.get("apple"));
console.log(test.length());

console.log(test.buckets);
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.clear();
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
test.set("moon", "silver");
test.set("moo", "silver");
test.set("moow", "silver");
test.set("mooew", "silver");

console.log(test.length());
console.log(test.buckets);
