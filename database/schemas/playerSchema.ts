import { tableSchema } from '@nozbe/watermelondb';

const playerSchema = tableSchema({
  name: 'players',
  columns: [
    { name: 'name', type: 'string', isIndexed: true }, // Índice para búsquedas
    { name: 'xp', type: 'number' },
    { name: 'level', type: 'number', isIndexed: true },
  ],
});

export default playerSchema;
