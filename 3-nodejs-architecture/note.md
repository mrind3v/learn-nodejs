# Node.js Architecture Notes

![nodejs arch](https://miro.medium.com/v2/resize:fit:1400/1*e6RD9x4ycH5m8_IYSv3Y6Q.png)

## Introduction to Node.js Architecture


Node.js is crucial for understanding object-oriented development, and this video focuses
on its architecture.
We'll explore how requests flow through the Node.js architecture.

## Client-Server Interaction


The flow starts with a Client (e.g. you, the user).
A client makes a request to the server.
The server is built on Node.js and can also use PHP or Go.
Example: User sends a request, initiating the process.

## Request Handling in Node.js


The request arrives and enters the Event Queue.
Event Queue is responsible for holding requests in line until they can be processed.
Multiple requests from different users will stack up in the Event Queue.

## Event Loop Mechanism


The Event Loop monitors the Event Queue, watching for incoming requests.
It processes requests based on a First In, First Out (FIFO) principle:
The first request to arrive is the first to be handled.
The Event Loop picks requests from the queue one at a time and processes them.

## Types of Operations in Request Handling

1. **Blocking Operations (Synchronous)**
    Operations that block further execution until completed.
    If a request is a blocking operation, it goes to the **Thread Pool**.
2. **Non-Blocking Operations (Asynchronous)**
    Operations that do not block the execution; they allow the server to continue
    processing.
    If a request is non-blocking, it is processed immediately, and a response is sent
    back to the user.

## Thread Pool Overview



Thread Pool is a collection of threads that manage blocking operations.
Each thread is assigned to handle a blocking request:
A thread is available when a task in the Thread Pool completes.
Example: If all threads are busy with blocking requests, new requests must wait.

## Performance and Scalability Issues


The limited number of threads in the Thread Pool can lead to performance bottlenecks:
If too many blocking operations occur, new requests will be delayed.
A high number of blocking requests can result in longer wait times for users.

## Code Examples: Blocking vs Non-Blocking


A simple blocking operation example vs a non-blocking one:
Blocking code: Uses synchronous file read operation - blocks execution until
completion.
Non-blocking code: Utilizes asynchronous file read operation - allows other
tasks to proceed while waiting.

## Event Loop Recap


Flow of processing:
A request arrives, enters the Event Queue.
The Event Loop checks if the request is blocking or non-blocking:
Non-blocking: Respond immediately.
Blocking: Assign to Thread Pool and wait for a worker to become available.

## Thread Limits and Configuration


Default Thread Pool size is typically 4 threads:
Maximum thread size depends on the server capabilities (CPU cores).
Can use OS module to check the number of CPU cores available.

## Conclusion


Node.js architecture allows efficient handling of multiple simultaneous requests due to its
asynchronous nature.
Understanding the Event Loop, Event Queue, and Thread Pool mechanisms is essential for
optimizing performance and ensuring responsiveness in Node.js applications.


