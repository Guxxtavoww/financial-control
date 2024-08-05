import { type ZodSchema, type ZodTypeDef, z } from 'zod';

import { isNullableValue } from './is-nullable-value.util';

export function createNullableTransform<
  TOutput = unknown,
  TDef extends ZodTypeDef = ZodTypeDef,
  TInput = TOutput
>(schema: ZodSchema<TOutput, TDef, TInput>) {
  return schema
    .optional()
    .nullable()
    .transform((value) => (isNullableValue(value) ? undefined : value));
}

/**
 * -----------------------------------------------------------------------------
 * Default Schemas
 * -----------------------------------------------------------------------------
 */
export const numberSchema = z
  .number({ invalid_type_error: 'Inválido' })
  .safe('Value is not safe');
export const stringSchema = z.string({ required_error: 'Obrigatório' }).trim();
export const emailStringSchema = stringSchema.email('E-mail Inválido');
export const urlStringSchema = stringSchema.url();
export const uuidSchema = stringSchema.uuid();
export const orderParamSchema = z.enum(['ASC', 'DESC']);
export const integerNumberSchema = numberSchema.int();
export const floatNumberSchema = numberSchema.refine((val) => val % 1 !== 0, {
  message: 'Value must be float',
});
export const dateSchema = z
  .date({ required_error: 'Insira uma data' })
  .transform((date) => {
    const stringfyedDate = date.toISOString();

    return stringfyedDate.split('T')[0];
  });

export const cpfStringSchema = stringSchema.regex(
  /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  'CPF Inválido'
);

export const stringToNumberSchema = stringSchema
  .refine((value) => !Number.isNaN(+value))
  .transform(Number);

export const paginationParamSchema = z
  .union([stringSchema, integerNumberSchema])
  .refine((value) => !Number.isNaN(+value))
  .transform(Number);

export const booleanStringSchema = z
  .enum(['true', 'false'])
  .transform((value) => value === 'true');

export const phoneNumberStringSchema = stringSchema.regex(
  /^\(\d{2}\) \d{5}-\d{4}$/,
  'Insira um número válido'
);

export const timeStringSchema = stringSchema.time({ precision: 3 });

export const datetimeStringSchema = stringSchema
  .datetime()
  .transform((value) => new Date(value));

export const dateStringSchema = stringSchema.date();

/**
 * -----------------------------------------------------------------------------
 * Optional Schemas
 * -----------------------------------------------------------------------------
 */
export const optionalEmailStringSchema =
  createNullableTransform(emailStringSchema);

export const optionalDateSchema = createNullableTransform(dateSchema);

export const optionalStringSchema = createNullableTransform(stringSchema);

export const optionalStringToNumberSchema =
  createNullableTransform(stringToNumberSchema);

export const optionalStringSchemaToLowerCase = optionalStringSchema.transform(
  (val) => val?.toLocaleLowerCase()
);

export const optionalPhoneNumberStringSchema = createNullableTransform(
  phoneNumberStringSchema
);

export const optionalUuidSchema = createNullableTransform(uuidSchema);

export const optionalUrlStringSchema = createNullableTransform(urlStringSchema);

export const optionalIntegerNumberSchema =
  createNullableTransform(integerNumberSchema);

export const optionalFloatNumberSchema =
  createNullableTransform(floatNumberSchema);

export const optionalPaginationParamSchema = createNullableTransform(
  paginationParamSchema
);

export const optionalTimeStringSchema =
  createNullableTransform(timeStringSchema);

export const optionalDatetimeStringSchema =
  createNullableTransform(datetimeStringSchema);

export const optionalDateStringSchema =
  createNullableTransform(dateStringSchema);

export const optionalCpfStringSchema = createNullableTransform(cpfStringSchema);

export const optionalBooleanStringSchema =
  createNullableTransform(booleanStringSchema);

export const optionalOrderParamSchema =
  createNullableTransform(orderParamSchema);
