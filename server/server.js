const express =  require("express");
const app = express();
let cors = require("cors");

const port = 3000;
const narutoCharacterAPI = "https://narutodb.xyz/api/character";


app.use(express.json())
app.use(cors());




app.get("/api/character", async (req, res) => {
  try {
    // Make a request to the external API
    const response = await fetch(
      "https://narutodb.xyz/api/character"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Proxy request failed" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});