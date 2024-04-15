// import configuration from "../configuration";

async function get<TBody>(relativeUrl: string): Promise<TBody> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Yzg0MTNlY2YwMDliOWZjODQ4NzRhZTc5MmYxMzBhNyIsInN1YiI6IjY1MzZkN2VjODViMTA1MDEwMTk5ZTFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HDR_lfUSXdnCAK6VuuvAv8fLZW7RyqNl6UFbJhKkSdI",
      //   Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
      //   Authorization: `Bearer ${configuration.apiToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3${relativeUrl}`,
    // `${import.meta.env.VITE_APP_API_URL}/3${relativeUrl}`,
    // `${configuration.apiUrl}/3${relativeUrl}`,
    options
  );
  const json: TBody = await response.json();
  return json;
}

export interface MovieDetails {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  backdrop_path?: string;
}

interface PageResponse<TResult> {
  results: TResult[];
  page: number;
}

interface Configuration {
  images: {
    base_url: string;
  };
}

export const client = {
  async getConfiguration() {
    return get<Configuration>("/configuration");
  },

  async getNowPlaying(): Promise<MovieDetails[]> {
    const response = await get<PageResponse<MovieDetails>>(
      "/movie/now_playing?page=1"
    );
    return response.results;
  },
};

// const apiBasePath = `${configuration.apiUrl}/3`

// sync function get<TBody>(relativeUrl: string): Promise<TBody> {
//     var headers = new Headers();
//   a  headers.append("Accept", "application/json");
//     headers.append("Authorization", `Bearer ${configuration.apiToken}`);

//     var requestOptions = {
//         method: "GET",
//         headers: headers
//     };

//     const response = await fetch(`${apiBasePath}${relativeUrl}`, requestOptions);
//     const value: TBody = await response.json();
//     return value;
// }

// interface PageResponse<TResult> {
//     page: number;
//     results: TResult[],
//     total_pages: number;
//     total_results: number;
// }

// interface MovieDetails {
//     id: number;
//     title: string;
//     overview: string;
//     popularity: number;
//     backdrop_path?: string | null;
// }

// interface Configuration {
//     images: {
//         base_url: string;
//     }
// }

// interface ITmbdClient {
//     getConfiguration: () => Promise<Configuration>;
//     getNowPlaying: () => Promise<MovieDetails[]>;
// }

// export const client: ITmbdClient = {
//     getConfiguration: async () => {
//         const response = await get<Configuration>("/configuration");
//         return response;
//     },
//     getNowPlaying: async () => {
//         const response = await get<PageResponse<MovieDetails>>("/movie/now_playing");
//         return response.results;
//     }
// }
