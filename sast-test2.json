{
  "issues": [
    {
      "id": "SAST-001",
      "title": "SQL Injection",
      "severity": "high",
      "description": "Unsanitized user input in SQL query",
      "file": "app.js",
      "line": 42,
      "code": "db.query(`SELECT * FROM users WHERE name = '${userInput}'`);",
      "recommendation": "Use parameterized queries or ORM to handle user input."
    },
    {
      "id": "SAST-002",
      "title": "Cross-Site Scripting (XSS)",
      "severity": "medium",
      "description": "Potential XSS vulnerability in user input rendering",
      "file": "views/profile.ejs",
      "line": 15,
      "code": "<div><%= user.name %></div>",
      "recommendation": "Escape user input before rendering it to the page."
    },
    {
      "id": "SAST-003",
      "title": "NoSQL Injection",
      "severity": "high",
      "description": "Unsanitized user input in NoSQL query",
      "file": "models/user.js",
      "line": 10,
      "code": "User.find({ name: req.body.name });",
      "recommendation": "Sanitize user inputs and use safe query methods."
    },
    {
      "id": "SAST-004",
      "title": "Directory Traversal",
      "severity": "high",
      "description": "User input allows access to restricted directories",
      "file": "routes/files.js",
      "line": 20,
      "code": "fs.readFile(`/var/www/uploads/${req.params.filename}`, callback);",
      "recommendation": "Validate and sanitize file paths before using them."
    },
    {
      "id": "SAST-005",
      "title": "Insecure Cryptographic Storage",
      "severity": "high",
      "description": "Sensitive data is stored without encryption",
      "file": "lib/storage.js",
      "line": 8,
      "code": "fs.writeFileSync('userdata.txt', userData);",
      "recommendation": "Encrypt sensitive data before storing it."
    }
  ]
}
