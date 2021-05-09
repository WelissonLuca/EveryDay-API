import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1614104445364 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'username',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'password',
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
    await queryRunner.dropTable('users');
  }
}
