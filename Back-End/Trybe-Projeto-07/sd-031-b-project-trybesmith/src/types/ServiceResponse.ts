export type ServiceResponseError = { 
  status: 'UNAUTHORIZED' | 'INVALID_DATA' | 'NOT_FOUND' | 'UNPROCESSABLE' | 'CREATED', 
  data: { message: string }
};

export type ServiceResponseSuccess<Type> = {
  status: 'SUCCESSFUL',
  data: Type,
};

export type ServiceResponse<Type> = ServiceResponseError | ServiceResponseSuccess<Type>;