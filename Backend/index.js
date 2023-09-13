const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const axios = require("axios");

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

    try{
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {username: username, secret: username,first_name: username},
            {headers: {"private-key": "91d98e8b-5aa0-4016-a95e-50bd51d3f7b2" }}
        )
        return res.status(r.status).json(r.data)
    }   catch (e){
        return res.status(e.response.status).json(e.response.data)
    }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);