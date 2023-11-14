import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './baseEntity.entity';
import { Permission } from './permission.entity';
import { Resources } from './resources.entity';
import { User } from './user.entity';

@Entity()
export class Roles extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: '角色id' })
  id: number;

  @Column({ comment: '角色名称' })
  roleName: string;

  @Column({ comment: '角色描述', nullable: true })
  description: string;

  @Column({ comment: '角色唯一标记', unique: true, nullable: false })
  roleType: string;

  @Column({ type: 'boolean', default: true, unique: false, comment: '角色状态' })
  status: boolean;

  @Column({ type: 'int', default: 10, unique: false, comment: '排序' })
  sort: number;

  @ManyToMany(() => User, (user) => user.roles)
  users: User;

  @ManyToMany(() => Permission, (permission) => permission.roles)
  @JoinTable({
    name: 'roles_permission',
  })
  permissions: Permission[];

  @ManyToMany(() => Resources, (resources) => resources.roles)
  @JoinTable({
    name: 'roles_resources',
  })
  resources: Resources[];
}
