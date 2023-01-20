import { z } from 'zod'
import * as PrismaClient from '@prisma/client'
import { DecimalJSLikeSchema } from "../inputTypeSchemas/DecimalJsLikeSchema"
import { isValidDecimalInput } from "../inputTypeSchemas/isValidDecimalInput"

export const DecimalModelSchema = z.object({
  id: z.number().int(),
  decimal: z.union([z.number(),z.string(),z.instanceof(PrismaClient.Prisma.Decimal),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Field "decimal" must be a Decimal', path: ['Models', 'DecimalModel'] }),
  decimalOpt: z.union([z.number(),z.string(),z.instanceof(PrismaClient.Prisma.Decimal),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Field "decimalOpt" must be a Decimal', path: ['Models', 'DecimalModel'] }).nullish(),
})

export const DecimalModelOptionalDefaultsSchema = DecimalModelSchema.merge(z.object({
  id: z.number().int().optional(),
}))