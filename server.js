require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const express = require("express");
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const port = process.env.PORT || 3000;
const contactsRoutes = require("./routes/contacts");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/contacts", contactsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
