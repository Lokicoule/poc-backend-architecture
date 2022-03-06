import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GqlEntity } from 'src/core/models/entity/entity.graphql';
import { UseCaseReferentialEnum } from 'src/features/referential/enums/usecase-referential.enum';
import {
  ParameterReferentialCustomer,
  ParameterReferentialCustomerSchema,
} from './parameter-referential-customer.entity';

@Schema({ timestamps: true })
@ObjectType()
export class ReferentialCustomer extends GqlEntity {
  @Field(() => UseCaseReferentialEnum)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  useCase: UseCaseReferentialEnum;

  @Field(() => [ParameterReferentialCustomer], { nullable: true })
  @Prop({
    type: [ParameterReferentialCustomerSchema],
  })
  parameters: ParameterReferentialCustomer[];
}

export const ReferentialCustomerName = 'referential_customer';

export type ReferentialCustomerDocument = ReferentialCustomer & Document;
export const ReferentialCustomerSchema =
  SchemaFactory.createForClass(ReferentialCustomer);
