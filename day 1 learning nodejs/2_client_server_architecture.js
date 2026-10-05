// Client–Server Architecture

// Client–server architecture is a system where:

// The client requests something.
// The server receives the request, performs the work and sends a response.
// Client → Request → Server
// Client ← Response ← Server
// Real-life example

// Imagine a restaurant:

// Customer = Client
// Waiter/Kitchen = Server
// Food order = Request
// Prepared food = Response

// You ask for food, the kitchen prepares it and sends it back to you.


// API in client–server architecture
// with the help of api client can communicate with server or it provides routes through which the client communicates with the server.



// Simple architecture diagram
// ┌──────────────────────┐
// │        CLIENT        │
// │ React / Browser      │
// │ UI and Redux         │
// └──────────┬───────────┘
//            │
//            │ HTTP Request
//            │ GET, POST, PATCH, DELETE
//            ▼
// ┌──────────────────────┐
// │        SERVER        │
// │ Node.js + Express    │
// │ Routes, Logic, Auth  │
// └──────────┬───────────┘
//            │
//            │ Database Query
//            ▼
// ┌──────────────────────┐
// │       DATABASE       │
// │ MongoDB              │
// │ Stores application   │
// │ data                 │
// └──────────────────────┘

// Client–server architecture is a model in which the client sends requests to a server, 
// and the server processes those requests and sends responses. 
// The client usually handles the user interface, while the server handles business logic, authentication and database operations.


// -------easy way to remember------

// Client asks.
// Server processes.
// Database stores.
// Server responds.
// Client displays.