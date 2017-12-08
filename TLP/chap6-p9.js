/**
 * Created by sellathurai_s on 11/20/17.
 */

class Node {
    constructor(number, leftNode, rightNode) {
        this._value = number;
        this._leftNode = leftNode;
        this._rightNode = rightNode;
    }

    get number() {
        return this._value;
    }

    set number(newNumber){
        this._value = newNumber;
    }

    get leftNode() {
        return this._leftNode;
    }

    set leftNode(newLeftNode){
        this._leftNode = newLeftNode;
    }

    get rightNode() {
        return this._rightNode;
    }

    set rightNode(newRightNode){
        this._rightNode = newRightNode;
    }
}


class Heap {
    constructor(){
        this._rootNode = null;
    }

    addNode(number, node){
        if(node === null){
            let newNode = new Node(number, null, null);
            node = newNode;

            if(this._rootNode === null){
                this._rootNode = node;
            }

            return ;
        }

        if(number < node.number){
            if(node.leftNode === null){
                node.leftNode =  new Node(number, null, null);
            } else {
                this.addNode(number, node.leftNode);
            }
        } else {
            if(node.rightNode === null){
                node.rightNode =  new Node(number, null, null);
            } else {
                this.addNode(number, node.rightNode);
            }
        }
    }

    printNode(node){
        if(node === null){
            return;
        }

        this.printNode(node.leftNode);
        console.log(node.number + ",");
        this.printNode(node.rightNode);
    }

    verifyNode(node) {
        if (node === null) {
            return true;
        }

        if (node.rightNode === null && node.leftNode === null) {
            return true;
        } else if(node.rightNode === null || node.leftNode === null) {
            return true;
        }
        else {
            if (node.number < node.rightNode.number && node.number > node.leftNode.number) {
                if (!this.verifyNode(node.leftNode))
                    return false;

                if (!this.verifyNode(node.rightNode))
                    return false;

                return true;

            } else {
                return false;
            }
        }

    }

    verifyTree(){
        console.log(this.verifyNode(this._rootNode));
    }

    addNumber(number){
        this.addNode(number, this._rootNode);
    }

    print(){
        this.printNode(this._rootNode);
    }
}


let heap = new Heap();
heap.addNumber(15);
heap.addNumber(5);
heap.addNumber(10);
heap.addNumber(19);
heap.addNumber(2);
heap.addNumber(1);
heap.addNumber(11);

heap.print();

heap.verifyTree();