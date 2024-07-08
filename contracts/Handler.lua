-- Handler for registering a user
Handlers.add("ArweaveQuery.Register",
  function (msg)
    return msg.Action == "Register-User"
  end,
  function (msg)
    -- Check if author is already registered
    local authorCount = #dbAdmin:exec(
      string.format([[SELECT * FROM Users WHERE PID = "%s";]], msg.From)
    )
    if authorCount > 0 then
      Send({Target = msg.From, Action = "Registered", Data = "Already Registered"})
      print("User already registered")
      return "Already Registered"
    end
    
    local Name = msg.Name or 'user'
    dbAdmin:exec(string.format([[
      INSERT INTO Users (PID, Name) VALUES ("%s", "%s");
    ]], msg.From, Name))
    
    Send({
      Target = msg.From,
      Action = "Game.Registered",
      Data = "Successfully Registered."
    })
    print("Registered " .. Name)
  end 
)