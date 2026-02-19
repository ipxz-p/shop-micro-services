import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { clerkMiddleware, getAuth } from "@clerk/express";
import productRoutes from "./routes/product.route";
import categoryRoutes from "./routes/category.route";

const app = express();

app.use(cors({
    origin: "http://localhost:3002,http://localhost:3003",
    credentials: true,
}));
app.use(express.json());
app.use(clerkMiddleware())

app.get("/", (req: Request, res: Response) => {
  res.json({
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ],
  });
});

app.get("/test", (req: Request, res: Response) => {
  const auth = getAuth(req)
  console.log(auth)
  res.json({
    message: "Hello World",
  });
});

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error!" });
});

app.listen(8000, () => {
  console.log("Product service is running on port 8000");
});