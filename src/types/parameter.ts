export interface Parameter {
  key: string | null,
  value: string | null,
  uniqueId: number,
}

export function isDefinedParameter(param: Parameter): boolean {
  return param.key !== null && param.value !== null;
}

export function createDefaultParameter(): Parameter {
  return { key: null, value: null, uniqueId: Math.ceil(Math.random() * 100000) };
}

export function createDefaultParameterList(): Parameter[] {
  return [createDefaultParameter()];
}
