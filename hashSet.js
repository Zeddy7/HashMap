import LinkedList from "./linkedListSet.js";

export default function HashSet() {
   let capacity = 16;
   let loadFactor = 0.75;
   let buckets = new Array(capacity).fill(null).map(() => LinkedList());
   return {
      capacity,
      loadFactor,
      buckets,
      size: 0,

      hash(value) {
         let hashCode = 0;
         const primeNumber = 31;

         for (let i = 0; i < value.length; i++) {
            hashCode =
               (primeNumber * hashCode + value.charCodeAt(i)) % capacity;
         }

         return hashCode;
      },

      add(value) {
         let index = this.hash(value);
         let list = buckets[index];

         if (this.size >= capacity * loadFactor) {
            this.resize();
            index = this.hash(value);
            list = buckets[index];
         }

         if (list.contains(value)) return;

         list.append(value);
         this.size++;
      },

      check(value) {
         let index = this.hash(value);
         let list = buckets[index];
         let current = list.head;

         while (current) {
            if (current.value === value) return current.value;
            current = current.next;
         }
         return null;
      },

      has(value) {
         let index = this.hash(value);
         if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
         }
         let list = buckets[index];
         if (!list) return false;

         return list.contains(value);
      },

      remove(value) {
         let index = this.hash(value);
         let list = buckets[index];
         let listIndex = list.findIndex(value);

         if (listIndex !== undefined && listIndex !== -1) {
            list.removeAt(listIndex);
            this.size--;
            return true;
         }
         return false;
      },

      length() {
         return this.size;
      },

      clear() {
         buckets = new Array(capacity).fill(null).map(() => LinkedList());
         this.buckets = buckets;
         this.size = 0;
      },

      entries() {
         let allEntries = [];
         buckets.forEach(list => {
            let current = list.head;
            while (current) {
               allEntries.push(current.value);
               current = current.next;
            }
         });
         return allEntries;
      },

      resize() {
         const oldEntries = this.entries();
         this.capacity *= 2;
         this.size = 0;
         this.buckets = new Array(capacity).fill(null).map(() => LinkedList());

         oldEntries.forEach(([value]) => this.add(value));
      },
   };
}
