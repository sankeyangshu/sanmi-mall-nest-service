import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './baseEntity.entity';
import { Roles } from './roles.entity';

@Entity()
export class Resources extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: '资源id' })
  id: number;

  @Column({ comment: '资源名称', length: 50 })
  title: string;

  @Column({ comment: '资源唯一标记', unique: true })
  signName: string;

  @Column({ type: 'varchar', comment: '资源地址', length: 1024 })
  url: string;

  @Column({ type: 'varchar', length: 200, default: '', comment: '图标' })
  icon: string;

  @Column({
    type: 'tinyint',
    unique: false,
    default: 1,
    comment: '资源类型：1是菜单(与前端关联),2是api接口(与后端关联),3是权限字段',
  })
  authType: number;

  @Column({ type: 'int', comment: '上级id', nullable: true, unsigned: true })
  pid: number;

  @Column({ type: 'boolean', default: true, unique: false, comment: '资源状态' })
  status: boolean;

  @Column({ type: 'int', default: 10, unique: false, unsigned: true, comment: '排序' })
  sort: number;

  @ManyToMany(() => Roles, (roles) => roles.resources, { cascade: true })
  roles: Roles[];
}
