USER_DROP = [[
  DROP TABLE IF EXISTS Users;
]]

USERS = [[
  CREATE TABLE IF NOT EXISTS Users (
    PID TEXT PRIMARY KEY,
    Name TEXT
  );
]]

function InitDb()
    db:exec(USERS)
    return dbAdmin:tables()
  end
  
  return InitDb()