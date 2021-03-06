import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors({
    //origin: 'http.://localhost:3000' para permitir que apenas essa pagina tenha acesso ao banco de dados/Backend
}));
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log('The HTTP server running!')
});