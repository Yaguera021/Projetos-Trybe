export default function mapStatusHTTP(type: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    NOT_FOUND: 404,
    CREATED: 201,
    SUCCESSFUL: 200,
    UNAUTHORIZED: 401,
  };
  return statusHTTPMap[type];
}