import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './baseEntity.entity';
import { Roles } from './roles.entity';

@Entity()
export class Permission extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: '权限id' })
  id: number;

  @Column({
    comment: '权限名称',
    length: 50,
  })
  permName: string;

  @Column({
    comment: '权限描述',
    length: 100,
    nullable: true,
  })
  description: string;

  @ManyToMany(() => Roles, (roles) => roles.permissions)
  roles: Roles[];
}
