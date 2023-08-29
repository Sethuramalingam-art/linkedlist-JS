//create a node

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

const n1 = new Node(100);

console.log(n1); //Node { data: 100, next: null }

//create a LinkedList 

class LinkedList {
    cosntructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert last node

    insertLast(data){
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++
    }

    //insert at index

    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        } 

        //If first index
        if (index===0) {
            this.insertFirst(data);
            return
        }

        const node = new Node(data);
        let current, previous;

        //Set current to first
        current = this.head;
        let count = 0;

        while(count<index) {

            previous =  current // Node before index 
            count++;
            current = current.next; // Node after index


        }

        node.next = current;  
        previous.next = node;
    }

    //get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count===index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }
   

    //remove at index

    removeAtIndex(index) {
        if (index>0 && index > this.size) {
            return
        }

        let current = this.head;
        let previous, count = 0;

        if (index===0) {
            this.head = current.next;

        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next
            }
            previous.next = current.next
        }

        this.size--;
       
    }

    //clear list 

    clearList() {
        this.head = null;
        this.size = 0;
    }

    //print list data 

    printListData(){
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(400);

ll.insertAt(450, 2);

ll.getAt(2)
ll.printListData();
console.log(ll);
