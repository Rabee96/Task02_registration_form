export const validator = async ({
  schema,
  data
}) => {
  const result = { isValid: true, error: '' };

  try {
    await schema.validate(data);
  } catch (error) {
    const validationError = error;
    result.isValid = false;
    result.error = validationError.errors[0];
  }

  return result;
};
