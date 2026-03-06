<div align="center">

# Identity Access Management

##### A Next Generation Proof of Concept

<img src="./docs/images/tron-lightcycle.jpg" alt="Logo" style="width:250px;">

<br/>
<br/>

![Static Badge](https://img.shields.io/badge/React-grey?style=for-the-badge&logo=React)
![Static Badge](https://img.shields.io/badge/JavaScript-grey?style=for-the-badge&logo=javascript)
![Static Badge](https://img.shields.io/badge/TypeScript-grey?style=for-the-badge&logo=typescript)
![Static Badge](https://img.shields.io/badge/Docker-grey?style=for-the-badge&logo=docker)
![Static Badge](https://img.shields.io/badge/Kubernetes-grey?style=for-the-badge&logo=kubernetes)
![Static Badge](https://img.shields.io/badge/Helm-grey?style=for-the-badge&logo=Helm)
![Static Badge](https://img.shields.io/badge/OpenTelemetry-grey?style=for-the-badge&logo=OpenTelemetry)

</div>

## Getting Started

### Frontend

#### Installation

In the root directory, you need to install the dependencies.

```bash
# w/node
$ cd [microfrontend/directory] && npm install

# w/make - recommended
$ make install
```

> [!Note]
> Using _Make_ to install the dependencies will install the required dependencies for all MFEs.

#### Running the Application(s) for Development

To run the applications locally, Vite requires a build for micro-frontends (MFEs) because the development server serves code over native ES modules (ESM) and does not generate the required `remoteEntry.js` files required for module federation.

```bash
# w/node
$ cd [microfrontend/directory]
$ npm run build
$ npm run preview

# w/docker - recommended
$ compose up --build --watch

# w/make - recommended
$ make frontend
```

> [!Note]
> When using either _Docker_ or _Make_ to start the MFEs, the build will be automatically run.

> [!Important]
> When Vite is run in `preview` mode, it does not support live reload.

##### Development Servers

|      MFE       |         Server         |
| :------------: | :--------------------: |
|   container    | http://localhost:3000 |
| authentication | http://localhost:3001 |
| certification  | http://localhost:3002 |

#### Build the MFE(s)

To build the application(s) locally:

```bash
# w/node
$ cd [microfrontend/directory]
$ npm run build

# w/make
$ make build
```

> [!Note]
> Using _Make_ to build the MFEs will build all projects.

To build the application(s) with Docker:

```bash
$ docker build -f docker/Dockerfile .
```

#### Test Automation

Coming Soon 🔜
