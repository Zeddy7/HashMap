function Node(value = null, next = null) {
   return { value, next };
}

export default function LinkedList() {
   return {
      head: null,
      size: 0,
      append(value) {
         let newNode = Node(value);
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

      prepend(value) {
         let newNode = Node(value, this.head);
         this.head = newNode;
         this.size++;
      },

      listSize() {
         return this.size;
      },

      listHead() {
         if (!this.head) return undefined;
         return this.head.value;
      },

      listTail() {
         if (!this.head) return undefined;
         let current = this.head;
         while (current.next) {
            current = current.next;
         }
         return current.value;
      },

      at(index) {
         if (!this.head || index >= this.size) {
            return undefined;
         }

         let current = this.head;
         for (let i = 0; i < index; i++) {
            current = current.next;
         }

         return current.value;
      },

      pop() {
         if (!this.head) return;
         let current = this.head;
         this.head = current.next;
         this.size--;
         return `Removed: ${current.value}`;
      },

      contains(value) {
         let current = this.head;
         while (current) {
            if (current.value === value) {
               return true;
            } else {
               current = current.next;
            }
         }
         return false;
      },

      findIndex(value) {
         let current = this.head;
         let index = 0;
         while (current) {
            if (current.value === value) {
               return index;
            } else {
               current = current.next;
               index++;
            }
         }
         return null;
      },

      findNode(value) {
         let current = this.head;

         while (current) {
            if (current.value === value) {
               return current;
            } else {
               current = current.next;
            }
         }
         return null;
      },

      insertAt(index, ...values) {
         if (index < 0 || index > this.size) return;

         if (index === 0) {
            let firstEntry = Node(values[0]);
            let nextEntry = firstEntry;
            let idx = 1;

            while (idx < values.length) {
               nextEntry.next = Node(values[idx]);
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

         let firstEntry = Node(values[0]);
         let nextEntry = firstEntry;
         let idx = 1;

         while (idx < values.length) {
            nextEntry.next = Node(values[idx]);
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
