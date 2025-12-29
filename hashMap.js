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

         if (this.size >= capacity * loadFactor) {
            this.resize();
            index = this.hash(key);
            list = buckets[index];
         }

         let node = list.findNode(key);
         if (node) {
            node.value = value;
         } else {
            list.append(key, value);
            this.size++;
         }
      },

      get(key) {
         let index = this.hash(key);
         let list = buckets[index];
         let current = list.head;

         while (current) {
            if (current.key === key) return current.value;
            current = current.next;
         }
         return null;
      },

      has(key) {
         let index = this.hash(key);
         if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
         }
         let list = buckets[index];
         let current = list.head;

         while (current) {
            if (current.key === key) return true;
            current = current.next;
         }
         return false;
      },

      remove(key) {
         let index = this.hash(key);
         let list = buckets[index];
         let listIndex = list.findIndex(key);

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

      keys() {
         let allKeys = [];
         buckets.forEach(list => {
            let current = list.head;
            while (current) {
               allKeys.push(current.key);
               current = current.next;
            }
         });
         return allKeys;
      },

      values() {
         let allValues = [];
         buckets.forEach(list => {
            let current = list.head;
            while (current) {
               allValues.push(current.value);
               current = current.next;
            }
         });
         return allValues;
      },

      entries() {
         let allEntries = [];
         buckets.forEach(list => {
            let current = list.head;
            while (current) {
               allEntries.push([current.key, current.value]);
               current = current.next;
            }
         });
         return allEntries;
      },

      resize() {
         const oldEntries = this.entries();
         capacity *= 2;
         this.capacity = capacity;

         this.size = 0;
         buckets = new Array(capacity).fill(null).map(() => LinkedList());
         this.buckets = buckets;

         oldEntries.forEach(([key, value]) => this.set(key, value));
      },
   };
}
