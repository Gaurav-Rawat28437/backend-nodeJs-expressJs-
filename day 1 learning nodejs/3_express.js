// express is a technology and with the help of it we can create server and that server run on nodejs
// we can say:
// Express.js is a web framework built on top of Node.js.
// Express.js is a framework that makes it easier to create servers and APIs using Node.js.

// Simple real-life example

// Think of building a house:

// Node.js = Land and basic construction materials
// Express.js = Ready-made tools and structure

// You can build a house using only raw materials, but it takes more work.

// Express gives you easier tools to build it faster.


// ┌──────────────────────────┐
// │          CLIENT          │
// │ React / Browser / Mobile │
// │ UI, Redux, Forms         │
// └────────────┬─────────────┘
//              │
//              │ HTTP Request
//              │ GET, POST, PATCH, DELETE
//              ▼
// ┌──────────────────────────┐
// │           API            │
// │ /api/users               │
// │ /api/posts               │
// │ /api/products            │
// └────────────┬─────────────┘
//              │
//              │ Request goes to server
//              ▼
// ┌──────────────────────────┐
// │          SERVER          │
// │ Node.js + Express.js     │
// │ Routes, Logic, Auth      │
// └────────────┬─────────────┘
//              │
//              │ Database Query
//              ▼
// ┌──────────────────────────┐
// │         DATABASE         │
// │ Stores application data │
// └────────────┬─────────────┘
//              │
//        ┌─────┴─────┐
//        │           │
//        ▼           ▼
// ┌───────────────┐  ┌──────────────────┐
// │  RELATIONAL   │  │ NON-RELATIONAL   │
// │     SQL       │  │      NoSQL       │
// ├───────────────┤  ├──────────────────┤
// │ Tables        │  │ Documents        │
// │ Rows/Columns  │  │ Flexible data    │
// │ Relationships │  │ Collections      │
// ├───────────────┤  ├──────────────────┤
// │ MySQL         │  │ MongoDB          │
// │ PostgreSQL    │  │ Firebase         │
// │ SQL Server    │  │ Cassandra        │
// └───────────────┘  └──────────────────┘



// ----------now lets talk about database--------

// Mongoose is a library that helps Node.js applications work with MongoDB more easily.

// Node.js + Express.js
//         ↓
//      Mongoose
//         ↓
//       MongoDB

// MongoDB stores data as documents. Mongoose lets you define their structure, validate data, create models and perform database queries using JavaScript.

// Simple meaning
// MongoDB  = Stores the data
// Mongoose = Helps your Node.js code communicate with MongoDB

// For example, without discussing the database connection details, Mongoose lets you write:

// const users = await User.find();

// This means:

// Find and return all users from MongoDB.


// in easy way
// To connect a Node.js server with MongoDB, we can use Mongoose. Mongoose is an ODM library that helps us define schemas, create models and perform database operations.