# SenhasOnline## Infraestrutura (Docker)

A infraestrutura do projeto é totalmente containerizada e orquestrada via **Docker Compose**, permitindo subir todo o ambiente com um único comando.

### 📦 Serviços

- **database**
  - PostgreSQL
  - Persistência via volume Docker
  - Healthcheck configurado
  - Porta interna: `5432`

- **backend**
  - API Node.js
  - Conecta ao PostgreSQL via rede Docker
  - Variáveis de ambiente carregadas de `backend/.env`

- **frontend**
  - Aplicação web (Vue + Vite)
  - Build executado via Docker

- **nginx**
  - Reverse proxy
  - Ponto de entrada da aplicação
  - Porta exposta: `8080`
  - Rotas:
    - `/` → frontend
    - `/api` → backend

### 🌐 Rede
- Todos os serviços utilizam a rede Docker:
  - `projeto-aplicado-net`

### 💾 Volumes
- `pgdata`
  - Persistência dos dados do PostgreSQL

### ▶️ Como subir a infraestrutura
```bash
docker compose up --build -d

### 🌐 Acessos

Frontend: http://localhost:8080
API (health): http://localhost:8080/api/health