function Node(key = null, value = null, next = null) {
   return {
      key,
      value,
      next,
   };
}

export default function LinkedList() {
   return {
      head: null,
      size: 0,
      append(key, value) {
         let newNode = Node(key, value);
         let current;

         if (!this.head) {
            this.head = newNode;
         } else {
            current = this.head;

            while (current.next) {
               current = current.next;
            }

            current.next = newNode;
         }
         this.size++;
      },

      prepend(key, value) {
         let newNode = Node(key, value, this.head);
         this.head = newNode;
         this.size++;
      },

      listSize() {
         return this.size;
      },

      listHead() {
         if (!this.head) return undefined;
         return [this.head.key, this.head.value];
      },

      listTail() {
         if (!this.head) return undefined;

         let current = this.head;
         while (current.next) {
            current = current.next;
         }

         return [current.key, current.value];
      },

      at(index) {
         if (!this.head) {
            return undefined;
         } else if (index >= this.size) {
            return undefined;
         }

         let current = this.head;
         for (let i = 0; i < index; i++) {
            current = current.next;
         }

         return [current.key, current.value];
      },

      pop() {
         if (!this.head) return;
         let current = this.head;
         this.head = current.next;
         this.size--;

         return `Removed ${[current.key, current.value]}`;
      },

      contains(key) {
         let current = this.head;

         while (current) {
            if (current.key === key) {
               return true;
            } else {
               current = current.next;
            }
         }
         return false;
      },

      findIndex(key) {
         let current = this.head;
         let index = 0;

         while (current) {
            if (current.key === key) {
               return index;
            } else {
               current = current.next;
               index++;
            }
         }
         return;
      },

      findNode(key) {
         let current = this.head;

         while (current) {
            if (current.key === key) {
               return current;
            } else {
               current = current.next;
            }
         }
         return null;
      },

      insertAt(index, ...[keys, values]) {
         if (index < 0 || index > this.size) return;

         if (index === 0) {
            let firstEntry = Node(keys[0], values[0]);
            let nextEntry = firstEntry;
            let idx = 1;

            while (idx < values.length) {
               nextEntry.next = Node(keys[idx], values[idx]);
               nextEntry = nextEntry.next;
               idx++;
            }

            nextEntry.next = this.head;
            this.head = firstEntry;

            this.size += values.length;
            return;
         }

         let current, previous;

         current = this.head;
         let count = 0;

         while (count < index) {
            previous = current;
            current = current.next;
            count++;
         }

         let firstEntry = Node(keys[0], values[0]);
         let nextEntry = firstEntry;
         let idx = 1;

         while (idx < values.length) {
            nextEntry.next = Node(keys[idx], values[idx]);
            nextEntry = nextEntry.next;
            idx++;
         }

         previous.next = firstEntry;
         nextEntry.next = current;

         this.size += values.length;
      },

      removeAt(index) {
         if (index < 0 || index > this.size) return;

         if (index === 0) {
            this.pop();
            return;
         }

         let current, previous;

         current = this.head;
         let count = 0;

         while (count < index) {
            previous = current;
            current = current.next;
            count++;
         }

         previous.next = current.next;

         this.size--;
      },

      toString() {
         let current = this.head;
         let output = "";

         while (current) {
            output += `(${current.value}) -> `;
            current = current.next;
         }
         return (output += "null");
      },
   };
}
