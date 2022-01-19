## Dados
```
Nome: Marcus Venicius Baltazar
Email: mvabf_dev@outlook.com
Cel/Whatsapp: (85) 9 9765-4137
Ocupação: Desenvolvedor Fullstack

```
## Implementação
Bom usei como base para a estrutura do projeto experiência profissional e também de estudos passados, geralmente
uso essa estrutura quando faço projetos usando o express. Quanto ao deploy já tive experiência com um deploy na aws ec2 então seria o qual eu usaria para o deploy em produção, porém a maior parte dos projetos no qual trabalhei usou o heroku e o deploy era feito por meio de pipelines do bitbucket.

## Running with Docker

The application was setup to be ran from a docker-compose.yml file.

To run it that way, you just need to have `docker` and `docker-compose` installed and run the following command in the root folder of this repository (where the docker-compose.yml file is located):

```
docker-compose up -d
```

**Important Notes**
* The back-end application will run on **PORT 3000** ;
* The MongoDb database will run on **PORT 27017** ;
* Make sure all these ports are available before running the above command.

## Running without Docker

```
yarn
yarn build
yarn start
```