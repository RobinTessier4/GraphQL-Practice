import { Field, ObjectType, ID } from "@nestjs/graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Client extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field(() => String)
	@Column()
	lastName: string;

	@Field(() => String)
	@Column()
	firstName: string;

	@Field(() => String)
	@Column()
	mail: string;

	@Field(() => String)
	@Column()
	phone: string;

}