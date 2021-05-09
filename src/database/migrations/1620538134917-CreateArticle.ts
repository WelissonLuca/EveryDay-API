import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateArticle1620538134917 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'articles',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
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
            default: 'nome()',
          },
          {
            name: 'update_at',
            type: 'timestamp',
            default: 'nome()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            default: 'nome()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('articles');
  }
}
