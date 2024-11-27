class Queue<T> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  // Add an element to the end of the queue
  enqueue(element: T): void {
    this.elements.push(element);
  }

  // Remove and return the element from the front of the queue
  dequeue(): T | undefined {
    return this.elements.shift();
  }

  // Return the element at the front of the queue without removing it
  peek(): T | undefined {
    return this.elements[0];
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  // Get the size of the queue
  size(): number {
    return this.elements.length;
  }

  // Clear the queue
  clear(): void {
    this.elements = [];
  }
}

export default Queue;
