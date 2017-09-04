import knex from 'knex';
import bookshelf from 'bookshelf';
import knexCongif from '../knexfile';

export default bookshelf(knex(knexCongif.development));
