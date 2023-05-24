import "dotenv/config";
import { app } from "./app";
import { env } from "./lib/env";

const PORT = env.PORT ?? 8000;

const bootstrap = () => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
};

bootstrap();
