@app.route("/login")
def login():

  username = request.values.get('username')
  password = request.values.get('password')

  # Prepare database connection
  db = pymysql.connect("localhost")
  cursor = db.cursor()

  # Execute the vulnerable SQL query concatenating user-provided input.
  cursor.execute("SELECT * FROM users WHERE username = '%s' AND password = '%s'" % (username, password))
