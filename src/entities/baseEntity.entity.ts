import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';

/**
 * 时间戳基础实体
 */
@Entity()
export class BaseEntity {
  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'created_time',
    comment: '创建时间',
  })
  createTime: Date; //自动生成并自动更新列

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'updated_time',
    comment: '更新时间',
  })
  updateTime: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'deleted_time',
    comment: '删除时间',
  })
  deletedTime: Date;
}
