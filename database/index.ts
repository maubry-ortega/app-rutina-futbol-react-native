import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { appSchema } from '@nozbe/watermelondb';

// Importar esquemas y modelos
import playerSchema from './schemas/PLayerSchema';
import challengeSchema from './schemas/ChallengeSchema';
import Player from './models/Player';
import Challenge from './models/Challenge';

// Definir esquema global
const schema = appSchema({
  version: 1,
  tables: [playerSchema, challengeSchema],
});

// Crear el adaptador SQLite
const adapter = new SQLiteAdapter({
  dbName: 'BlueLockDB',
  schema,
});

// Crear la base de datos
export const database = new Database({
  adapter,
  modelClasses: [Player, Challenge], // Añadir modelos aquí
});
