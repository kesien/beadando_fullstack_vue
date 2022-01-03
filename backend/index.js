import { createApp } from './server.js';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = createApp();
  await app.listen(PORT || 3000, () =>
    console.log(`Server is running at: http://localhost:${PORT}`)
  );
}
bootstrap();
