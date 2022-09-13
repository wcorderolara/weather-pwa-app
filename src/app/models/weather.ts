export interface IWeather {
    coord: {
        lon: number;
        lat: number;
    },
    weather: WeatherInfo[],
    main: {
        temp: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    sys: {
        country: string
    };
    name: string;
}

interface WeatherInfo {
    main: string;
    description: string;
    icon: string;
}
