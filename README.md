[![NPM Status](https://david-dm.org/DEFRA/data-returns-frontend.svg)](https://david-dm.org/DEFRA/data-returns-frontend)
[![NSP Status](https://nodesecurity.io/orgs/ea/projects/70f1821b-3c42-428d-8d80-bf209d23b1ba/badge)](https://nodesecurity.io/orgs/ea/projects/70f1821b-3c42-428d-8d80-bf209d23b1ba)

# Data returns: Pollution Inventory Service frontend

Frontend GOV.uk web interface to support the upload and pollution inventory returns

## Contributing to this project

If you have an idea you'd like to contribute please log an issue.

All contributions should be submitted via a pull request.

## License

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3

The following attribution statement MUST be cited in your products and applications when using this information.

> Contains public sector information licensed under the Open Government license v3

### About the license

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.

### Note
If you are using nvm try the following config change

>`npm config set scripts-prepend-node-path true`

Set NODE_ENV=localtest to run the front end in standalone mode using local test data. Any other setting requires the API's to be running at the locations specified in the .env environment file.

The front end may also be run as a standalone docker application 

>docker-compose build
>docker-compose up 