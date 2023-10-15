export interface Role {
  id: number;
  value: string;
  description: string;
}

// трошки костиля
export interface ISessionUser {
  accessToken?: string,
  birthDate?: string,
  exp?: number,
  iat?: number,
  jti?: string,
  name?: string,
  status?: string,
  surname?: string,
  username?: string
}

export interface User {
  id: number;
  email: string;
  password: string;
  banned: boolean;
  banReason: string;
  roles: Role[];
}

export interface Genre {
  id: number;
  value: string;
  description: string;
}

export interface Movie {
  id: number;
  translatedTitle: string;
  originalTitle: string;
  country: string[];
  year: number;
  genres: Genre[];
  director: string[];
  actors: string[];
  screenwriters: string[];
  producers: string[];
  budget: number;
  ageRestriction: number;
  duration: number;
  coverImage?: string;
  trailer?: string;
  rating: number;
  description: string;
}

export interface Series {
  id: number;
  translatedTitle: string;
  originalTitle: string;
  country: string[];
  year: number;
  seasonsCount: number;
  genres: Genre[];
  director: string[];
  actors: string[];
  screenwriters: string[];
  producers: string[];
  ageRestriction: number;
  episodeDuration: number;
  coverImage: string;
  trailer: string;
  rating: number;
  description: string;
}
