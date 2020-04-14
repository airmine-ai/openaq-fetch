How to quick start development?
=================================

What you'll need
------------------

* Windows, Mac, Linux system
* Approx `200MB` of free disk space
* At least `1.8GB` free memory
* `2` core CPU is recommended
* `node.js >= 8.6`
* Either of:
  * `docker` or
  * `postgresql >= 10` with `postgis >= 2` extensions.

Environment
-------------

Follow these steps to create a full local development environment (this is probably the quickest way to start from scratch):

1. Install fairly recent [node.js](https://nodejs.org/en/download/) [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Docker](https://docs.docker.com/install/).
2. Start PostgreSQL with PostGIS `docker run --env POSTGRES_PASSWD=pgpassword --name postgis -dit --restart unless-stopped -p 5432:5432 geographica/postgis:quick_quail`
3. Pull the data from repo `git clone git@github.com:openaq/openaq-fetch.git`
4. Install dependencies `cd openaq-fetch && npm install`
5. Create a user and db in postgres in `docker exec -ti postgis psql -U postgres`
```sql
CREATE ROLE openaq WITH LOGIN PASSWORD 'openaq-password';
CREATE DATABASE openaq OWNER openaq;
\connect openaq
CREATE EXTENSION postgis;
\quit
```
6. Open project in VSCode, with Remote Container plugin "Open folder in Container"
7. Validate with f-ex  
```
node index.js --source 'Beijing US Embassy'
```
And you're set (Haven't figured out how to connect to the API, but data is flowing to DB ..)
