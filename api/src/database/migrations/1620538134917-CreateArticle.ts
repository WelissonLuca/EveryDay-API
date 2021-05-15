import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateArticle1620538134917 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'articles',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            type: "varchar",    
            generationStrategy: 'uuid',
            default: `(UUID_TO_BIN(UUID(), TRUE))`
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'article',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'update_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('articles');
  }
}
