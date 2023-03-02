import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return {
      secret: process.env.JWT_SECRET as string,
      signOptions: {
        expiresIn: '60d',
      },
    };
  },

  //   secret: process.env.JWT_SECRET as string,
  //   signOptions: {
  //     expiresIn: '60d',
  //   },
};
