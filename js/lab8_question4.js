function Node(data, next=null) {
	this.data = data;
	this.next = next;
	this.changeNext = function(next) {
		this.next = next;
	};
}
function LinkedList(head) {
	this.head = head;
	this.add = function(data) {
		let newNode = new Node(data);
		if(this.head == null) { // This is the first time we are adding an element
			this.head = newNode;
			return;
		}
		tempNode = this.head; // There is already some data in the LL
		while(tempNode.next != null) { // Need to find the tail that points to null
			tempNode = tempNode.next;
		}
		tempNode.changeNext(newNode);
		return;
	};
	this.remove = function(data) {
		tempNode = new Node(null, this.head);
		while(tempNode.next != null) {
			if(tempNode.next.data == data){ // Node with the data is found
				tempNode.next = tempNode.next.next;
			}
			tempNode = tempNode.next;
		}
		return;
	}
	this.print = function() {
		let result = 'LinkedList{';
		tempNode = this.head;
		while(tempNode != null){
			result = result + tempNode.data + ",";
			tempNode = tempNode.next;
		}
		result += '}';
		console.log(result);
	}
	

}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};
