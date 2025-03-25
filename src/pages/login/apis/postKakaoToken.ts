import axios from 'axios';

interface SuccessUserResponse {
  statusCode: number;
  message: string;
  jwtTokenResponse?: { accessToken: string; refreshToken: string };
  isUser: boolean;
  data?: { email: string; isUser: boolean };
}

export const sendAuthorization = async (code: string) => {
  try {
    const response = await axios.post<SuccessUserResponse>(
      `${import.meta.env.VITE_API_BASE_URL}/users/token`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${code}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('인가 코드 처리 실패:', error);
    throw error;
  }
};
