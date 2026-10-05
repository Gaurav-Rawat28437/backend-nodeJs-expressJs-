//  before express there were a built-in Node.js module name as http
// The http module allows us to create a server using only Node.js.You do not need to install it

// What is AJAX?

// AJAX stands for:

// Asynchronous JavaScript and XML

// AJAX is a technique used to send requests to a server and receive data without reloading the whole webpage.

// Even though AJAX contains the word XML, modern applications usually use JSON, not XML.

// Browser → Sends request → Server
// Browser ← Receives data ← Server

// The page updates only the required part.

// Without AJAX

// Suppose you click a button to see users.

// Without AJAX:

// 1. User clicks button
// 2. Browser requests a new page
// 3. Entire webpage reloads
// 4. Server sends a complete HTML page
// 5. Browser displays the new page

// This can feel slower.

// With AJAX
// 1. User clicks button
// 2. JavaScript sends a request
// 3. Server returns JSON data
// 4. JavaScript receives the data
// 5. Only the required UI updates
// 6. Page does not fully reload

// We send an AJAX request from the client/browser to the server.

// CLIENT / BROWSER
// React application
//        │
//        │ AJAX request
//        │ fetch() / Axios
//        ▼
// SERVER
// Node.js + Express
//        │
//        │ Database query
//        ▼
// DATABASE
// MongoDB

// The server then sends a response back:

// CLIENT
//    │
//    │ GET /api/users
//    ▼
// SERVER
//    │
//    │ JSON response
//    ▼
// CLIENT updates the UI
// without reloading the page



// Node.js is a JavaScript runtime environment.

// Let us understand each word.

// JavaScript

// The programming language you already use:

// const username = "Gaurav";

// console.log(username);
// Runtime environment

// A runtime environment provides everything required to execute your code.

// The browser provides a JavaScript runtime for frontend code.

// Node.js provides a JavaScript runtime outside the browser.

// Browser + JavaScript = Frontend applications
// Node.js + JavaScript = Servers, APIs and scripts

// Node.js uses the V8 JavaScript engine, which is also used by Google Chrome, to execute JavaScript.

// Node.js is a JavaScript runtime built using JavaScript, C and C++. 
// It uses the V8 engine, which is mainly written in C++, to execute JavaScript code. 
// JavaScript normally runs one task at a time on the main thread. 
// When JavaScript calls an asynchronous Node.js API, 
// Node.js uses native bindings, libuv and operating-system features to perform the slow operation without blocking the main JavaScript thread. 
// When the operation finishes, the event loop schedules its callback or Promise continuation, and V8 executes that JavaScript code.




// ┌──────────────────────────── NODE.JS ────────────────────────────┐
// │                                                                │
// │   ┌───────────────────────┐                                    │
// │   │       V8 ENGINE       │                                    │
// │   │                       │                                    │
// │   │  • Call Stack         │                                    │
// │   │  • Memory Heap        │                                    │
// │   │  • Garbage Collector  │                                    │
// │   └───────────┬───────────┘                                    │
// │               │ Async operation                                │
// │               ▼                                                │
// │   ┌───────────────────────┐                                    │
// │   │         libuv         │                                    │
// │   │                       │                                    │
// │   │ • Event Loop          │                                    │
// │   │ • Thread Pool         │                                    │
// │   │ • Async I/O handling  │                                    │
// │   └───────────┬───────────┘                                    │
// └───────────────┼────────────────────────────────────────────────┘
//                 ▼
// ┌─────────────────────────────────────────────────────────────────┐
// │                    OPERATING SYSTEM                             │
// │                                                                 │
// │     Files       Network/API       Timers       Database         │
// └─────────────────────────────────────────────────────────────────┘


// 1. V8 engine

// V8 is responsible for executing your JavaScript.

// const a = 10;
// const b = 20;

// console.log(a + b);

// V8 runs this code.

// V8 contains important parts shown in the image:

// V8 Engine
// ├── Call Stack
// ├── Memory Heap
// └── Garbage Collector
// Call stack

// The call stack keeps track of the functions currently executing.

// function second() {
//   console.log("Second");
// }

// function first() {
//   second();
// }

// first();

// Flow:

// first() enters stack
//       ↓
// second() enters stack
//       ↓
// second() completes and leaves
//       ↓
// first() completes and leaves

// JavaScript runs one operation at a time on this main call stack.

// Memory heap

// The memory heap is where objects, arrays and functions are stored in memory.

// const user = {
//   name: "Gaurav",
//   skills: ["React", "Node.js"]
// };

// The user object and its data are stored in heap memory.

// Garbage collector

// The garbage collector automatically removes memory that is no longer needed.

// let user = {
//   name: "Gaurav"
// };

// user = null;

// The original object is no longer reachable, so V8 can eventually remove it from memory.

// 2. libuv

// When your code starts an asynchronous operation, Node.js uses libuv and operating-system features to manage it.

// V8 executes JavaScript
//         ↓
// Node.js API is called
//         ↓
// libuv/OS manages async operation
//         ↓
// Operation finishes
//         ↓
// Event loop schedules callback
//         ↓
// V8 executes callback

// libuv provides or coordinates:

// Event loop
// Thread pool
// Timers
// File operations
// Network operations
// Other asynchronous I/O

// libuv is mainly written in C, not C++.

// 3. Operating system

// The operating system performs much of the actual low-level work.

// Examples:

// Reading files
// Opening network connections
// Receiving HTTP requests
// Running timers
// Communicating through sockets

// The OS can be:

// Windows
// Linux
// macOS

// Node.js and libuv give your JavaScript a common way to work across these operating systems.