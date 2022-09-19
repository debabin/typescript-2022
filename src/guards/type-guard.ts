type ApiResult<T> = {
  success: true;
  data: T;
};

type ApiError = {
  success: false;
  error: string;
};

type ApiResponse<T> = ApiError | ApiResult<T>;

declare const response: ApiResponse<{ name: string }>;

if (response.success) {
  response.data;
}

if (!response.success) {
  response.error;
}
