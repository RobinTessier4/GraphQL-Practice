import { Field, ObjectType, ID } from "@nestjs/graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Company extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@Field(() => String)
	@Column()
	name: string;

	@Field(() => String)
	@Column()
	address: string;

	@Field(() => String)
	@Column()
	phone: string;
}