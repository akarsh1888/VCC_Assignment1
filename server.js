// API-VM (VIRTUAL MACHINE 1)
app.use(express.json());
app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.json({ status: "API IS RUNNING" });
});

app.post("/save", (req, res) => {
  const data = req.body;
  fs.appendFileSync(
    "data.txt",
    JSON.stringify(data) + "\n"
  );
  res.json({ message: "Saved successfully" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Service running on port 3000");
});
