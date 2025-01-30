import { tableSchema } from '@nozbe/watermelondb';

const challengeSchema = tableSchema({
  name: 'challenges',
  columns: [
    { name: 'type', type: 'string' },
    { name: 'score', type: 'number' },
    { name: 'completed_at', type: 'number' },
    { name: 'player_id', type: 'string', isIndexed: true },
  ],
});

export default challengeSchema;
